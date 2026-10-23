// Motor de simulación de partido 2D interactivo con cambios en vivo (sin comentarios de texto)

import { FORMATIONS } from "./tactics.js";

export class MatchSimulator {
  constructor(homeTeam, awayTeam, options = {}) {
    this.homeTeam = JSON.parse(JSON.stringify(homeTeam));
    this.awayTeam = JSON.parse(JSON.stringify(awayTeam));

    this.minute = 0;
    this.maxMinutes = 90 + Math.floor(Math.random() * 5); // Tiempo añadido
    this.userSpeed = options.speed || 1; // Velocidad elegida por el usuario
    this.speed = this.userSpeed;
    this.isHighlightRunning = false;
    this.isRunning = false;
    this.isFinished = false;

    this.homeScore = 0;
    this.awayScore = 0;

    this.homeMentality = options.homeMentality || "balanced";
    this.awayMentality = options.awayMentality || "balanced";

    this.homeFormation = options.homeFormation || "4-3-3";
    this.awayFormation = options.awayFormation || "4-3-3";

    // Límite de 5 cambios oficiales
    this.homeSubsRemaining = 5;
    this.awaySubsRemaining = 5;

    // Estadísticas en tiempo real
    this.stats = {
      possession: { home: 50, away: 50 },
      possessionTicks: { home: 0, away: 0 },
      shots: { home: 0, away: 0 },
      shotsOnTarget: { home: 0, away: 0 },
      fouls: { home: 0, away: 0 },
      corners: { home: 0, away: 0 },
      yellowCards: { home: 0, away: 0 },
      redCards: { home: 0, away: 0 }
    };

    this.events = []; // Lista de goles, tarjetas, etc.
    this.currentAlert = null; // Alerta visual momentánea (ej: "¡GOL!", "¡PARADÓN!")
    this.currentAlertTimer = 0;

    // Inicializar jugadores en el campo para la animación 2D
    this.homePlayersOnPitch = this.homeTeam.players.slice(0, 11);
    this.homeBench = this.homeTeam.players.slice(11);

    this.awayPlayersOnPitch = this.awayTeam.players.slice(0, 11);
    this.awayBench = this.awayTeam.players.slice(11);

    // Inicializar posiciones 3D relativas (x: 0-100, y: 0-100, z: 0-25)
    this.ball = { x: 50, y: 50, z: 0, targetX: 50, targetY: 50, targetZ: 0, possession: "home" };
    this.init2DPositions();

    this.onTick = options.onTick || (() => {});
    this.onFinish = options.onFinish || (() => {});
    this.onAlert = options.onAlert || (() => {});
    this.onGoal = options.onGoal || (() => {});
    this.onHalfTime = options.onHalfTime || (() => {});
    this.onSubstitution = options.onSubstitution || (() => {});
    this.onHighlightStart = options.onHighlightStart || (() => {});
    this.onHighlightEnd = options.onHighlightEnd || (() => {});

    this.userSide = options.userSide || "home";
    this.aiSide = this.userSide === "home" ? "away" : "home";
    this.lastAISubMinute = 0;

    this.isHalfTime = false;
    this.halfTimeTriggered = false;
  }

  getFormationCoords(formationKey, isHome) {
    const form = FORMATIONS[formationKey] || FORMATIONS["4-3-3"];
    return form.slots.map(s => {
      const px = isHome 
        ? 5 + ((88 - s.y) / 70) * 70 
        : 100 - (5 + ((88 - s.y) / 70) * 70);
      const py = isHome ? s.x : 100 - s.x;
      return { x: px, y: py };
    });
  }

  init2DPositions() {
    const homeCoords = this.getFormationCoords(this.homeFormation, true);
    const awayCoords = this.getFormationCoords(this.awayFormation, false);

    this.home2D = this.homePlayersOnPitch.map((p, idx) => ({
      player: p,
      number: p.number || (idx + 1),
      isKeeper: p.pos === "POR" || idx === 0,
      baseX: homeCoords[idx]?.x || 25,
      baseY: homeCoords[idx]?.y || 50,
      curX: homeCoords[idx]?.x || 25,
      curY: homeCoords[idx]?.y || 50,
      targetX: homeCoords[idx]?.x || 25,
      targetY: homeCoords[idx]?.y || 50,
      animPhase: Math.random() * Math.PI * 2,
      facingX: 1
    }));

    this.away2D = this.awayPlayersOnPitch.map((p, idx) => ({
      player: p,
      number: p.number || (idx + 1),
      isKeeper: p.pos === "POR" || idx === 0,
      baseX: awayCoords[idx]?.x || 75,
      baseY: awayCoords[idx]?.y || 50,
      curX: awayCoords[idx]?.x || 75,
      curY: awayCoords[idx]?.y || 50,
      targetX: awayCoords[idx]?.x || 75,
      targetY: awayCoords[idx]?.y || 50,
      animPhase: Math.random() * Math.PI * 2,
      facingX: -1
    }));
  }

  start() {
    this.isRunning = true;
    this.loop();
  }

  pause() {
    this.isRunning = false;
  }

  setSpeed(speedMultiplier) {
    this.userSpeed = speedMultiplier;
    if (!this.isHighlightRunning) {
      this.speed = speedMultiplier;
    }
  }

  setMentality(teamSide, mentalityId) {
    if (teamSide === "home") this.homeMentality = mentalityId;
    if (teamSide === "away") this.awayMentality = mentalityId;
  }

  // Realizar sustitución en vivo
  makeSubstitution(teamSide, pitchPlayerId, benchPlayerId) {
    const isHome = teamSide === "home";
    const onPitchList = isHome ? this.homePlayersOnPitch : this.awayPlayersOnPitch;
    const benchList = isHome ? this.homeBench : this.awayBench;
    const remaining = isHome ? this.homeSubsRemaining : this.awaySubsRemaining;

    if (remaining <= 0) return { success: false, reason: "Ya se han realizado los 5 cambios permitidos" };

    const pitchIndex = onPitchList.findIndex(p => p.id === pitchPlayerId);
    const benchIndex = benchList.findIndex(p => p.id === benchPlayerId);

    if (pitchIndex === -1 || benchIndex === -1) {
      return { success: false, reason: "Jugador no encontrado" };
    }

    const outPlayer = onPitchList[pitchIndex];
    const inPlayer = benchList[benchIndex];

    // Intercambiar
    onPitchList[pitchIndex] = inPlayer;
    benchList.splice(benchIndex, 1);
    benchList.push(outPlayer);

    if (isHome) {
      this.homeSubsRemaining--;
      this.home2D[pitchIndex].player = inPlayer;
    } else {
      this.awaySubsRemaining--;
      this.away2D[pitchIndex].player = inPlayer;
    }

    this.triggerAlert("CAMBIO", `🔄 Cambio: entra ${inPlayer.name} por ${outPlayer.name}`, isHome ? "home" : "away");

    return { success: true, inPlayer, outPlayer };
  }

  // Aplicar ajustes tácticos completos (formación, mentalidad, cambios de puesto y sustituciones)
  applyTacticalChanges(teamSide, newFormationKey, newMentality, newLineupPlayerIds, newBenchPlayerIds) {
    const isHome = teamSide === "home";
    const currentPitch = isHome ? this.homePlayersOnPitch : this.awayPlayersOnPitch;
    const currentPitchIds = currentPitch.map(p => p.id);
    const remaining = isHome ? this.homeSubsRemaining : this.awaySubsRemaining;

    // Detectar qué futbolistas entran desde el banquillo
    const subsInIds = newLineupPlayerIds.filter(id => !currentPitchIds.includes(id));
    const subsOutIds = currentPitchIds.filter(id => !newLineupPlayerIds.includes(id));

    if (subsInIds.length > remaining) {
      return {
        success: false,
        reason: `Solo te quedan ${remaining} cambios permitidos (has intentado realizar ${subsInIds.length}).`
      };
    }

    const allTeamPlayers = isHome 
      ? [...this.homePlayersOnPitch, ...this.homeBench]
      : [...this.awayPlayersOnPitch, ...this.awayBench];

    const newPitch = newLineupPlayerIds.map(id => allTeamPlayers.find(p => p.id === id)).filter(Boolean);
    const newBench = newBenchPlayerIds.map(id => allTeamPlayers.find(p => p.id === id)).filter(Boolean);

    if (newPitch.length !== 11) {
      return { success: false, reason: "La alineación debe contar exactamente con 11 futbolistas." };
    }

    // Registrar parejas de cambio para rótulos y estadísticas
    const subsPairs = [];
    for (let i = 0; i < subsInIds.length; i++) {
      const inP = allTeamPlayers.find(p => p.id === subsInIds[i]);
      const outP = allTeamPlayers.find(p => p.id === subsOutIds[i]);
      if (inP && outP) {
        subsPairs.push({ inPlayer: inP, outPlayer: outP });
      }
    }

    // Actualizar estado del simulador
    if (isHome) {
      this.homeSubsRemaining -= subsInIds.length;
      this.homePlayersOnPitch = newPitch;
      this.homeBench = newBench;
      if (newFormationKey) this.homeFormation = newFormationKey;
      if (newMentality) this.homeMentality = newMentality;
    } else {
      this.awaySubsRemaining -= subsInIds.length;
      this.awayPlayersOnPitch = newPitch;
      this.awayBench = newBench;
      if (newFormationKey) this.awayFormation = newFormationKey;
      if (newMentality) this.awayMentality = newMentality;
    }

    // Reposicionar jugadores en 2D según el nuevo esquema táctico
    const activeFormation = isHome ? this.homeFormation : this.awayFormation;
    const newCoords = this.getFormationCoords(activeFormation, isHome);
    const old2D = isHome ? this.home2D : this.away2D;

    const updated2D = newPitch.map((p, idx) => {
      const existing = old2D.find(item => item.player.id === p.id);
      const coord = newCoords[idx] || { x: isHome ? 25 : 75, y: 50 };
      return {
        player: p,
        number: p.number || (idx + 1),
        isKeeper: p.pos === "POR" || idx === 0,
        baseX: coord.x,
        baseY: coord.y,
        curX: existing ? existing.curX : coord.x,
        curY: existing ? existing.curY : coord.y,
        targetX: coord.x,
        targetY: coord.y,
        animPhase: existing ? existing.animPhase : (Math.random() * Math.PI * 2),
        facingX: isHome ? 1 : -1
      };
    });

    if (isHome) this.home2D = updated2D;
    else this.away2D = updated2D;

    return {
      success: true,
      subsCount: subsInIds.length,
      subsPairs,
      remaining: isHome ? this.homeSubsRemaining : this.awaySubsRemaining
    };
  }

  // Comprobar y ejecutar sustituciones tácticas automáticas de la IA rival
  checkAISubstitutions() {
    if (this.isHalfTime || this.isFinished || !this.isRunning) return;
    const aiSubsRemaining = this.aiSide === "home" ? this.homeSubsRemaining : this.awaySubsRemaining;
    if (aiSubsRemaining <= 0) return;

    // La IA realiza cambios realistas entre el minuto 56 y el 86
    if (this.minute < 56 || this.minute > 86) return;
    if (this.minute - this.lastAISubMinute < 7) return;

    const aiPitch = this.aiSide === "home" ? this.homePlayersOnPitch : this.awayPlayersOnPitch;
    const aiBench = this.aiSide === "home" ? this.homeBench : this.awayBench;

    if (!aiBench || aiBench.length === 0) return;

    // Buscar jugadores de campo con energía más baja (< 68%) o al llegar a minutos clave
    const outfieldPitch = aiPitch.filter(p => p.pos !== "POR");
    if (outfieldPitch.length === 0) return;
    outfieldPitch.sort((a, b) => (a.energy || 100) - (b.energy || 100));
    const mostTired = outfieldPitch[0];

    const isKeyMinute = [60, 68, 76, 83].includes(this.minute);
    const isVeryTired = mostTired && (mostTired.energy || 100) < 66;

    if (!isKeyMinute && !isVeryTired && Math.random() > 0.22) return;

    // Buscar sustituto adecuado en el banquillo
    const samePos = aiBench.filter(p => p.pos === mostTired.pos);
    let candidate = null;
    if (samePos.length > 0) {
      candidate = samePos.sort((a, b) => (b.ovr || 70) - (a.ovr || 70))[0];
    } else {
      const isAtk = ["DC", "EI", "ED"].includes(mostTired.pos);
      const isMid = ["MC", "MCD", "MCO"].includes(mostTired.pos);
      const isDef = ["DFC", "LD", "LI"].includes(mostTired.pos);

      const lineCandidates = aiBench.filter(p => {
        if (isAtk) return ["DC", "EI", "ED"].includes(p.pos);
        if (isMid) return ["MC", "MCD", "MCO"].includes(p.pos);
        if (isDef) return ["DFC", "LD", "LI"].includes(p.pos);
        return false;
      });

      if (lineCandidates.length > 0) {
        candidate = lineCandidates.sort((a, b) => (b.ovr || 70) - (a.ovr || 70))[0];
      } else {
        candidate = aiBench.filter(p => p.pos !== "POR").sort((a, b) => (b.ovr || 70) - (a.ovr || 70))[0];
      }
    }

    if (candidate && mostTired) {
      this.lastAISubMinute = this.minute;
      const res = this.makeSubstitution(this.aiSide, mostTired.id, candidate.id);
      if (res.success) {
        this.pause();
        this.onSubstitution({
          teamSide: this.aiSide,
          team: this.aiSide === "home" ? this.homeTeam : this.awayTeam,
          subs: [{ outPlayer: res.outPlayer, inPlayer: res.inPlayer }],
          minute: this.minute,
          remaining: this.aiSide === "home" ? this.homeSubsRemaining : this.awaySubsRemaining
        });
      }
    }
  }

  loop() {
    if (!this.isRunning || this.isFinished || this.isHighlightRunning) return;

    const hadHighlight = this.stepMinute();
    this.onTick(this.getState());

    // Si la jugada clave se ha iniciado, el loop asíncrono toma el control hasta su resolución
    if (hadHighlight) {
      return;
    }

    // Pausa oficial en el descanso (minuto 45) para cambios y ajustes tácticos
    if (this.minute === 45 && !this.halfTimeTriggered) {
      this.halfTimeTriggered = true;
      this.isHalfTime = true;
      this.pause();
      this.onHalfTime(this.getState());
      return;
    }

    if (this.minute >= this.maxMinutes) {
      this.finish();
      return;
    }

    // Intervalo de tiempo dinámico según velocidad (Fluido y ágil estilo Football Manager)
    const baseInterval = 460; // ms por minuto en 1x (ritmo televisivo dinámico)
    const interval = Math.max(50, Math.round(baseInterval / this.speed));

    setTimeout(() => this.loop(), interval);
  }

  // Simulación paso a paso de cada minuto de partido
  stepMinute() {
    this.minute++;

    // Desgaste físico gradual
    this.homePlayersOnPitch.forEach(p => { p.energy = Math.max(30, (p.energy || 100) - 0.4); });
    this.awayPlayersOnPitch.forEach(p => { p.energy = Math.max(30, (p.energy || 100) - 0.4); });

    // Modificadores de mentalidad
    const mentMods = {
      very_defensive: { atk: 0.65, def: 1.35 },
      defensive: { atk: 0.85, def: 1.15 },
      balanced: { atk: 1.0, def: 1.0 },
      offensive: { atk: 1.25, def: 0.85 },
      very_offensive: { atk: 1.45, def: 0.70 }
    };

    const homeMod = mentMods[this.homeMentality] || mentMods.balanced;
    const awayMod = mentMods[this.awayMentality] || mentMods.balanced;

    const homeAtk = (this.calcTeamPower(this.homePlayersOnPitch, "atk") + 2) * homeMod.atk;
    const homeDef = (this.calcTeamPower(this.homePlayersOnPitch, "def") + 2) * homeMod.def;
    const awayAtk = this.calcTeamPower(this.awayPlayersOnPitch, "atk") * awayMod.atk;
    const awayDef = this.calcTeamPower(this.awayPlayersOnPitch, "def") * awayMod.def;

    // Disputa de la posesión
    const midHome = this.calcTeamPower(this.homePlayersOnPitch, "mid");
    const midAway = this.calcTeamPower(this.awayPlayersOnPitch, "mid");
    const probHomePoss = (midHome / (midHome + midAway)) + 0.03; // Ligera ventaja local

    const currentPoss = Math.random() < probHomePoss ? "home" : "away";
    this.ball.possession = currentPoss;

    if (currentPoss === "home") {
      this.stats.possessionTicks.home++;
    } else {
      this.stats.possessionTicks.away++;
    }

    const totalTicks = this.stats.possessionTicks.home + this.stats.possessionTicks.away;
    this.stats.possession.home = Math.round((this.stats.possessionTicks.home / totalTicks) * 100);
    this.stats.possession.away = 100 - this.stats.possession.home;

    // Probabilidad de ocasión de gol en este minuto
    const chanceRoll = Math.random();

    if (currentPoss === "home") {
      // Posición del balón en el campo atacando hacia la derecha (x: 50 -> 90)
      this.ball.targetX = 65 + Math.random() * 28;
      this.ball.targetY = 20 + Math.random() * 60;

      // Ocasión de ataque local
      const attackScore = (homeAtk / (homeAtk + awayDef)) * 0.28;
      if (chanceRoll < attackScore) {
        this.executeKeyHighlight("home", () => {
          if (this.isRunning && !this.isFinished) {
            this.loop();
          }
        });
        return true;
      } else if (chanceRoll < attackScore + 0.05) {
        // Córner o falta colgada al área
        this.ball.targetZ = 18;
        this.stats.corners.home++;
        this.triggerAlert("CÓRNER", `🚩 Córner para ${this.homeTeam.shortName}`, "home");
      } else {
        // Pase o centro medio
        this.ball.targetZ = Math.random() < 0.3 ? 4 + Math.random() * 6 : 0;
      }
    } else {
      // Balón atacando hacia la izquierda (x: 50 -> 10)
      this.ball.targetX = 35 - Math.random() * 28;
      this.ball.targetY = 20 + Math.random() * 60;

      const attackScore = (awayAtk / (awayAtk + homeDef)) * 0.26;
      if (chanceRoll < attackScore) {
        this.executeKeyHighlight("away", () => {
          if (this.isRunning && !this.isFinished) {
            this.loop();
          }
        });
        return true;
      } else if (chanceRoll < attackScore + 0.05) {
        this.ball.targetZ = 18;
        this.stats.corners.away++;
        this.triggerAlert("CÓRNER", `🚩 Córner para ${this.awayTeam.shortName}`, "away");
      } else {
        this.ball.targetZ = Math.random() < 0.3 ? 4 + Math.random() * 6 : 0;
      }
    }

    // Posibles faltas y tarjetas (independientes del ataque)
    if (Math.random() < 0.06) {
      const foulTeam = Math.random() > 0.5 ? "home" : "away";
      this.stats.fouls[foulTeam]++;
      if (Math.random() < 0.22) {
        this.stats.yellowCards[foulTeam]++;
        const teamName = foulTeam === "home" ? this.homeTeam.shortName : this.awayTeam.shortName;
        this.triggerAlert("TARJETA", `🟨 Tarjeta amarilla para ${teamName}`, foulTeam);
      }
    }

    // Comprobar y realizar posibles cambios tácticos de la IA rival
    this.checkAISubstitutions();

    // Actualizar coordenadas 3D de los jugadores hacia el balón para visualización dinámica
    this.update2DPositions();
    return false;
  }

  // Ejecución de jugada clave en varias fases a ritmo normal (Estilo Football Manager)
  executeKeyHighlight(attackingSide, onComplete) {
    this.isHighlightRunning = true;
    this.speed = 1; // Ajuste automático a ritmo normal y fluido durante la ocasión trascendental

    const isHome = attackingSide === "home";
    const atkTeam = isHome ? this.homeTeam : this.awayTeam;
    const defTeam = isHome ? this.awayTeam : this.homeTeam;
    const atkPlayers = isHome ? this.homePlayersOnPitch : this.awayPlayersOnPitch;
    const defPlayers = isHome ? this.awayPlayersOnPitch : this.homePlayersOnPitch;

    const passer = this.pickPlayerForAction(atkPlayers, ["MC", "MCD", "MCO", "EI", "ED"]);
    const shooter = this.pickPlayerForAction(atkPlayers, ["DC", "EI", "ED", "MCO"]);
    const goalkeeper = defPlayers.find(p => p.pos === "POR") || defPlayers[0];

    // Notificar al visor de partido del inicio de la jugada clave
    if (this.onHighlightStart) {
      this.onHighlightStart({
        type: "KEY_CHANCE",
        attackingSide,
        atkTeam,
        defTeam,
        passer,
        shooter,
        minute: this.minute
      });
    }

    // FASE 1: Construcción y arranque de la jugada de peligro en tres cuartos
    const midX = isHome ? (60 + Math.random() * 8) : (40 - Math.random() * 8);
    const midY = 32 + Math.random() * 36;
    this.ball.targetX = midX;
    this.ball.targetY = midY;
    this.ball.targetZ = 0;
    this.update2DPositions();

    setTimeout(() => {
      if (!this.isRunning && !this.isHighlightRunning) return;

      // FASE 2: Pase filtrado y desmarque al área del rematador
      const boxX = isHome ? (83 + Math.random() * 6) : (17 - Math.random() * 6);
      const boxY = 38 + Math.random() * 24;
      this.ball.targetX = boxX;
      this.ball.targetY = boxY;
      this.ball.targetZ = 3 + Math.random() * 4;
      this.update2DPositions();

      setTimeout(() => {
        if (!this.isRunning && !this.isHighlightRunning) return;

        // FASE 3: Remate y resolución (Gol, Paradón, Palo o Fuera)
        this.stats.shots[attackingSide]++;
        const shotQuality = (shooter.sho || 75) + (Math.random() * 30 - 15);
        const gkSavePower = (goalkeeper.ovr || 78) + (Math.random() * 25 - 10);
        const onTarget = Math.random() < 0.68;

        if (!onTarget) {
          const isPost = Math.random() < 0.22;
          if (isPost) {
            this.ball.targetX = isHome ? 99 : 1;
            this.ball.targetY = Math.random() < 0.5 ? 44.5 : 55.5; // Directo a la madera
            this.ball.targetZ = 7;
            this.triggerAlert("AL PALO", `🥅 ¡Al palo! Disparo de ${shooter.name} a la madera`, attackingSide, 3000);
          } else {
            this.ball.targetX = isHome ? 104 : -4;
            this.ball.targetY = Math.random() < 0.5 ? 32 : 68;
            this.ball.targetZ = 10;
            this.triggerAlert("DISPARO FUERA", `💨 Disparo fuera de ${shooter.name}`, attackingSide, 2600);
          }

          setTimeout(() => {
            this.isHighlightRunning = false;
            this.speed = this.userSpeed;
            if (this.onHighlightEnd) this.onHighlightEnd();
            if (onComplete) onComplete();
          }, 1400);

        } else {
          this.stats.shotsOnTarget[attackingSide]++;

          if (shotQuality > gkSavePower + 6) {
            // ¡GOOOOOOLAZO!
            if (isHome) {
              this.homeScore++;
              this.ball.targetX = 99;
              this.ball.targetY = 46 + Math.random() * 8;
              this.ball.targetZ = 6 + Math.random() * 5;
            } else {
              this.awayScore++;
              this.ball.targetX = 1;
              this.ball.targetY = 46 + Math.random() * 8;
              this.ball.targetZ = 6 + Math.random() * 5;
            }

            shooter.goals = (shooter.goals || 0) + 1;

            const event = {
              type: "GOAL",
              minute: this.minute,
              teamSide: attackingSide,
              teamId: atkTeam.id,
              teamName: atkTeam.shortName,
              playerName: shooter.name,
              currentScore: `${this.homeScore} - ${this.awayScore}`
            };
            this.events.push(event);

            this.triggerAlert("GOL", `⚽ ¡GOOOOOOL DE ${shooter.name.toUpperCase()}! (${this.homeScore}-${this.awayScore})`, attackingSide, 4500);

            this.isHighlightRunning = false;
            this.speed = this.userSpeed;
            if (this.onHighlightEnd) this.onHighlightEnd();

            this.onGoal({
              shooter,
              passer,
              attackingSide,
              concedingSide: isHome ? "away" : "home",
              atkTeam,
              defTeam,
              minute: this.minute,
              score: `${this.homeScore} - ${this.awayScore}`
            });

          } else {
            // ¡PARADÓN DEL GUARDAMETA!
            this.ball.targetX = isHome ? 98 : 2;
            this.ball.targetY = 48 + Math.random() * 4;
            this.ball.targetZ = 5;

            setTimeout(() => {
              this.ball.targetX = isHome ? 88 : 12;
              this.ball.targetY = Math.random() < 0.5 ? 26 : 74;
              this.ball.targetZ = 0;
              this.triggerAlert("PARADÓN", `🧤 ¡Paradón de ${goalkeeper.name} ante ${shooter.name}!`, isHome ? "away" : "home", 3200);
              this.stats.corners[attackingSide]++;

              setTimeout(() => {
                this.isHighlightRunning = false;
                this.speed = this.userSpeed;
                if (this.onHighlightEnd) this.onHighlightEnd();
                if (onComplete) onComplete();
              }, 1300);
            }, 600);
          }
        }
      }, 1000);
    }, 1100);
  }

  // Colocar a los equipos y balón para sacar del centro del campo tras un gol
  resetKickoff(concedingSide = "away") {
    this.ball.x = 50;
    this.ball.y = 50;
    this.ball.z = 0;
    this.ball.targetX = 50;
    this.ball.targetY = 50;
    this.ball.targetZ = 0;
    this.ball.possession = concedingSide;

    const baseCoords = [
      { x: 5, y: 50 },  // POR
      { x: 20, y: 20 }, // LI
      { x: 18, y: 40 }, // DFC
      { x: 18, y: 60 }, // DFC
      { x: 20, y: 80 }, // LD
      { x: 34, y: 50 }, // MCD
      { x: 44, y: 35 }, // MC
      { x: 44, y: 65 }, // MC/MCO
      { x: 42, y: 22 }, // EI
      { x: concedingSide === "home" ? 50 : 44, y: 50 }, // DC
      { x: 42, y: 78 }  // ED
    ];

    this.home2D.forEach((p, idx) => {
      p.targetX = baseCoords[idx]?.x || 25;
      p.targetY = baseCoords[idx]?.y || 50;
      p.curX = p.targetX;
      p.curY = p.targetY;
      p.facingX = 1;
    });

    this.away2D.forEach((p, idx) => {
      let tx = 100 - (baseCoords[idx]?.x || 25);
      if (concedingSide === "away" && idx === 9) {
        tx = 50; // Delantero visitante en el centro para el saque
      }
      p.targetX = tx;
      p.targetY = 100 - (baseCoords[idx]?.y || 50);
      p.curX = p.targetX;
      p.curY = p.targetY;
      p.facingX = -1;
    });
  }

  pickPlayerForAction(players, preferredPositions) {
    const candidates = players.filter(p => preferredPositions.includes(p.pos));
    if (candidates.length > 0) {
      return candidates[Math.floor(Math.random() * candidates.length)];
    }
    return players[Math.floor(Math.random() * players.length)];
  }

  triggerAlert(title, text, side, duration = 2200) {
    this.currentAlert = { title, text, side, until: Date.now() + duration };
    this.onAlert(this.currentAlert);
  }

  calcTeamPower(players, type) {
    if (!players || players.length === 0) return 75;
    let sum = 0;
    players.forEach(p => {
      if (type === "atk") sum += (p.sho * 0.4 + p.dri * 0.3 + p.pac * 0.3) * (0.6 + p.energy / 250);
      else if (type === "mid") sum += (p.pas * 0.4 + p.dri * 0.3 + p.def * 0.3) * (0.6 + p.energy / 250);
      else if (type === "def") sum += (p.def * 0.5 + p.phy * 0.3 + p.pac * 0.2) * (0.6 + p.energy / 250);
    });
    return sum / players.length;
  }

  update2DPositions() {
    // Los jugadores fijan sus coordenadas objetivo siguiendo dinámicamente la jugada y el balón
    const ballX = this.ball.targetX;
    const ballY = this.ball.targetY;

    this.home2D.forEach(p => {
      const shiftX = (ballX - 50) * 0.35;
      const shiftY = (ballY - 50) * 0.25;
      p.targetX = Math.max(3, Math.min(95, p.baseX + shiftX + (Math.random() * 4 - 2)));
      p.targetY = Math.max(8, Math.min(92, p.baseY + shiftY + (Math.random() * 4 - 2)));
    });

    this.away2D.forEach(p => {
      const shiftX = (ballX - 50) * 0.35;
      const shiftY = (ballY - 50) * 0.25;
      p.targetX = Math.max(5, Math.min(97, p.baseX + shiftX + (Math.random() * 4 - 2)));
      p.targetY = Math.max(8, Math.min(92, p.baseY + shiftY + (Math.random() * 4 - 2)));
    });
  }

  // Reanudar el partido tras la pausa del descanso
  resumeSecondHalf() {
    this.isHalfTime = false;
    // Ligera recuperación energética por los 15 minutos de descanso
    this.homePlayersOnPitch.forEach(p => { p.energy = Math.min(100, (p.energy || 100) + 5); });
    this.awayPlayersOnPitch.forEach(p => { p.energy = Math.min(100, (p.energy || 100) + 5); });

    // Saque de centro para la 2ª mitad
    this.resetKickoff("away");
    this.start();
  }

  // Saltar instantáneamente al final del partido
  skipToEnd() {
    this.halfTimeTriggered = true;
    this.isHalfTime = false;
    while (this.minute < this.maxMinutes) {
      this.stepMinute();
    }
    this.finish();
  }

  finish() {
    this.minute = this.maxMinutes;
    this.isRunning = false;
    this.isFinished = true;
    this.onFinish(this.getResult());
  }

  getState() {
    return {
      minute: this.minute,
      maxMinutes: this.maxMinutes,
      homeScore: this.homeScore,
      awayScore: this.awayScore,
      homeTeam: this.homeTeam,
      awayTeam: this.awayTeam,
      stats: this.stats,
      events: this.events,
      homeSubsRemaining: this.homeSubsRemaining,
      awaySubsRemaining: this.awaySubsRemaining,
      homePlayersOnPitch: this.homePlayersOnPitch,
      homeBench: this.homeBench,
      awayPlayersOnPitch: this.awayPlayersOnPitch,
      awayBench: this.awayBench,
      home2D: this.home2D,
      away2D: this.away2D,
      ball: this.ball,
      homeMentality: this.homeMentality,
      awayMentality: this.awayMentality,
      isRunning: this.isRunning,
      isHalfTime: this.isHalfTime,
      isFinished: this.isFinished
    };
  }

  getResult() {
    return {
      homeTeamId: this.homeTeam.id,
      awayTeamId: this.awayTeam.id,
      homeScore: this.homeScore,
      awayScore: this.awayScore,
      stats: this.stats,
      events: this.events,
      scorers: this.events.filter(e => e.type === "GOAL")
    };
  }
}

