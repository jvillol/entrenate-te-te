// Motor de simulación de partido 2D interactivo con cambios en vivo (sin comentarios de texto)

import { FORMATIONS, getRoleDetails, generateRandomInjury, getDefaultTacticalInstructions } from "./tactics.js";

export class MatchSimulator {
  constructor(homeTeam, awayTeam, options = {}) {
    this.homeTeam = JSON.parse(JSON.stringify(homeTeam));
    this.awayTeam = JSON.parse(JSON.stringify(awayTeam));

    this.minute = 0;
    this.firstHalfExtra = Math.floor(Math.random() * 5) + 1; // Descuento aleatorio 1 a 5 min en 1ª parte
    this.secondHalfExtra = Math.floor(Math.random() * 5) + 1; // Descuento aleatorio 1 a 5 min en 2ª parte
    this.halfTimeMinute = 45 + this.firstHalfExtra;
    this.maxMinutes = 90 + this.secondHalfExtra;
    this.userSpeed = options.speed || 1; // Velocidad elegida por el usuario
    this.speed = this.userSpeed;
    this.isHighlightRunning = false;
    this.isRunning = false;
    this.isFinished = false;
    this.isHalfTime = false;
    this.halfTimeTriggered = false;
    this.isSecondHalf = false;
    this.loopTimeout = null;

    this.homeScore = 0;
    this.awayScore = 0;

    this.homeMentality = options.homeMentality || "balanced";
    this.awayMentality = options.awayMentality || "balanced";

    this.homeFormation = options.homeFormation || "4-3-3";
    this.awayFormation = options.awayFormation || "4-3-3";

    this.homePlayerRoles = options.homePlayerRoles || {};
    this.awayPlayerRoles = options.awayPlayerRoles || {};

    // Posiciones personalizadas manuales de jugadores en el campo
    this.homeCustomPositions = options.homeCustomPositions || {};
    this.awayCustomPositions = options.awayCustomPositions || {};

    // Instrucciones tácticas por estados (Con balón / Transición / Sin balón)
    this.homeInstructions = options.homeInstructions ? JSON.parse(JSON.stringify(options.homeInstructions)) : getDefaultTacticalInstructions();
    this.awayInstructions = options.awayInstructions ? JSON.parse(JSON.stringify(options.awayInstructions)) : getDefaultTacticalInstructions();
    this.lastPossession = "home";

    // Límite de 5 cambios oficiales en 3 ventanas durante el partido (el descanso no consume ventana)
    this.homeSubsRemaining = 5;
    this.awaySubsRemaining = 5;
    this.homeWindowsRemaining = 3;
    this.awayWindowsRemaining = 3;

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

    // Inicializar cómputo de minutos de partido y desgaste
    [...this.homePlayersOnPitch, ...this.homeBench].forEach(p => { p.matchMinutes = 0; });
    [...this.awayPlayersOnPitch, ...this.awayBench].forEach(p => { p.matchMinutes = 0; });

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
    this.onHighlightPhase = options.onHighlightPhase || (() => {});
    this.onHighlightEnd = options.onHighlightEnd || (() => {});

    this.userSide = options.userSide || "home";
    this.aiSide = this.userSide === "home" ? "away" : "home";
    this.lastAISubMinute = 0;

    this.onSetPiece = options.onSetPiece || (() => {});
    this.isSetPieceRunning = false;

    this.onInjury = options.onInjury || (() => {});
    this.onCard = options.onCard || (() => {});
    this.matchCards = { yellows: {}, reds: {} };

    this.isHalfTime = false;
    this.halfTimeTriggered = false;
    this.isSecondHalf = false;
  }

  getFormationCoords(formationKey, isHome, customPositions = null) {
    const form = FORMATIONS[formationKey] || FORMATIONS["4-3-3"];
    const custom = customPositions || (isHome ? this.homeCustomPositions : this.awayCustomPositions) || {};
    return form.slots.map((s, idx) => {
      const c = custom[idx];
      const effX = (c && c.x !== undefined) ? c.x : s.x;
      const effY = (c && c.y !== undefined) ? c.y : s.y;
      const px = isHome 
        ? 5 + ((88 - effY) / 70) * 70 
        : 100 - (5 + ((88 - effY) / 70) * 70);
      const py = isHome ? effX : 100 - effX;
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
    if (this.isSetPieceRunning || this.isFinished || this.isHalfTime) return;
    if (this.isRunning) return;
    this.isRunning = true;
    this.onTick(this.getState());

    const baseInterval = 460;
    const interval = Math.max(50, Math.round(baseInterval / this.speed));

    if (this.loopTimeout) {
      clearTimeout(this.loopTimeout);
    }
    this.loopTimeout = setTimeout(() => this.loop(), interval);
  }

  pause() {
    this.isRunning = false;
    if (this.loopTimeout) {
      clearTimeout(this.loopTimeout);
      this.loopTimeout = null;
    }
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

  setTacticalInstructions(teamSide, instructions) {
    if (!instructions) return;
    if (teamSide === "home") {
      this.homeInstructions = JSON.parse(JSON.stringify(instructions));
    } else {
      this.awayInstructions = JSON.parse(JSON.stringify(instructions));
    }
    this.update2DPositions();
  }

  // Realizar sustitución en vivo
  makeSubstitution(teamSide, pitchPlayerId, benchPlayerId, isHalfTime = false) {
    const isHome = teamSide === "home";
    const onPitchList = isHome ? this.homePlayersOnPitch : this.awayPlayersOnPitch;
    const benchList = isHome ? this.homeBench : this.awayBench;
    const remaining = isHome ? this.homeSubsRemaining : this.awaySubsRemaining;
    const remainingWindows = isHome ? this.homeWindowsRemaining : this.awayWindowsRemaining;

    if (remaining <= 0) return { success: false, reason: "Ya se han realizado los 5 cambios permitidos" };
    if (!isHalfTime && remainingWindows <= 0) return { success: false, reason: "Ya se han agotado las 3 ventanas de cambios permitidas en juego" };

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
      if (!isHalfTime) this.homeWindowsRemaining--;
      this.home2D[pitchIndex].player = inPlayer;
    } else {
      this.awaySubsRemaining--;
      if (!isHalfTime) this.awayWindowsRemaining--;
      this.away2D[pitchIndex].player = inPlayer;
    }

    this.triggerAlert("CAMBIO", `🔄 Cambio: entra ${inPlayer.name} por ${outPlayer.name}`, isHome ? "home" : "away");

    return {
      success: true,
      inPlayer,
      outPlayer,
      remaining: isHome ? this.homeSubsRemaining : this.awaySubsRemaining,
      windowsRemaining: isHome ? this.homeWindowsRemaining : this.awayWindowsRemaining
    };
  }

  // Aplicar ajustes tácticos completos (formación, mentalidad, cambios de puesto y sustituciones)
  applyTacticalChanges(teamSide, newFormationKey, newMentality, newLineupPlayerIds, newBenchPlayerIds, isHalfTime = false, newPlayerRoles = null, newCustomPositions = null) {
    const isHome = teamSide === "home";
    const currentPitch = isHome ? this.homePlayersOnPitch : this.awayPlayersOnPitch;
    const currentPitchIds = currentPitch.map(p => p.id);
    const remaining = isHome ? this.homeSubsRemaining : this.awaySubsRemaining;
    const remainingWindows = isHome ? this.homeWindowsRemaining : this.awayWindowsRemaining;

    if (newCustomPositions) {
      if (isHome) this.homeCustomPositions = newCustomPositions;
      else this.awayCustomPositions = newCustomPositions;
    }

    // Detectar qué futbolistas entran desde el banquillo
    const subsInIds = newLineupPlayerIds.filter(id => !currentPitchIds.includes(id));
    const subsOutIds = currentPitchIds.filter(id => !newLineupPlayerIds.includes(id));

    if (subsInIds.length > 0) {
      if (subsInIds.length > remaining) {
        return {
          success: false,
          reason: `Solo te quedan ${remaining} cambios permitidos (has intentado realizar ${subsInIds.length}).`
        };
      }

      // Si no es el descanso, verificar ventanas de cambios disponibles (máximo 3 ventanas en juego)
      if (!isHalfTime && remainingWindows <= 0) {
        return {
          success: false,
          reason: "Ya has agotado las 3 ventanas de cambios permitidas en el partido. En el descanso no cuentan, pero durante el juego ya no puedes hacer más cambios."
        };
      }
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
    if (newPlayerRoles) {
      if (isHome) {
        this.homePlayerRoles = { ...this.homePlayerRoles, ...newPlayerRoles };
      } else {
        this.awayPlayerRoles = { ...this.awayPlayerRoles, ...newPlayerRoles };
      }
    }
    if (isHome) {
      this.homeSubsRemaining -= subsInIds.length;
      if (!isHalfTime && subsInIds.length > 0) {
        this.homeWindowsRemaining--;
      }
      this.homePlayersOnPitch = newPitch;
      this.homeBench = newBench;
      if (newFormationKey) this.homeFormation = newFormationKey;
      if (newMentality) this.homeMentality = newMentality;
    } else {
      this.awaySubsRemaining -= subsInIds.length;
      if (!isHalfTime && subsInIds.length > 0) {
        this.awayWindowsRemaining--;
      }
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
      remaining: isHome ? this.homeSubsRemaining : this.awaySubsRemaining,
      windowsRemaining: isHome ? this.homeWindowsRemaining : this.awayWindowsRemaining
    };
  }

  // Comprobar y ejecutar sustituciones tácticas automáticas de la IA rival
  checkAISubstitutions() {
    if (this.isHalfTime || this.isFinished || !this.isRunning) return;
    const aiSubsRemaining = this.aiSide === "home" ? this.homeSubsRemaining : this.awaySubsRemaining;
    const aiWindowsRemaining = this.aiSide === "home" ? this.homeWindowsRemaining : this.awayWindowsRemaining;
    if (aiSubsRemaining <= 0 || aiWindowsRemaining <= 0) return;

    // La IA realiza cambios realistas entre el minuto 56 y el 86
    if (this.minute < 56 || this.minute > 86) return;
    if (this.minute - this.lastAISubMinute < 7) return;

    const aiPitch = this.aiSide === "home" ? this.homePlayersOnPitch : this.awayPlayersOnPitch;
    const aiBenchRaw = this.aiSide === "home" ? this.homeBench : this.awayBench;
    const aiBench = (aiBenchRaw || []).filter(p => !p.injury);

    if (aiBench.length === 0) return;

    // Buscar jugadores de campo con energía más baja (< 68%) o al llegar a minutos clave
    const outfieldPitch = aiPitch.filter(p => p.pos !== "POR");
    if (outfieldPitch.length === 0) return;
    outfieldPitch.sort((a, b) => (a.energy || 100) - (b.energy || 100));
    const mostTired = outfieldPitch[0];

    const isKeyMinute = [60, 68, 76, 83].includes(this.minute);
    const isVeryTired = mostTired && (mostTired.energy || 100) < 66;

    if (!isKeyMinute && !isVeryTired && Math.random() > 0.22) return;

    // Buscar sustituto adecuado en el banquillo (no lesionado)
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

  // Activar lesión de un jugador durante el partido por fatiga, lance o falta
  triggerPlayerInjury(player, teamSide, cause = "random") {
    if (!player || player.injury) return;

    const injuryData = generateRandomInjury(cause);
    player.injury = injuryData;
    player.energy = Math.max(10, (player.energy || 50) - 28);

    const teamObj = teamSide === "home" ? this.homeTeam : this.awayTeam;
    const alertMsg = `${injuryData.icon} ¡LESIÓN! ${player.name} (${injuryData.type}) - ${injuryData.roundsLeft}j de baja`;
    this.triggerAlert("LESIÓN", alertMsg, teamSide, 5000);

    this.events.push({
      minute: this.minute,
      type: "INJURY",
      team: teamSide,
      teamName: teamObj.shortName || teamObj.name,
      player: player.name,
      playerId: player.id,
      injury: injuryData
    });

    this.onInjury({
      player,
      injury: injuryData,
      teamSide,
      minute: this.minute,
      team: teamObj
    });

    // Si es el equipo de la IA rival, gestionar sustitución inmediata de emergencia
    if (teamSide === this.aiSide) {
      this.handleAIInjurySub(player, teamSide);
    }
  }

  // Sustitución forzosa por lesión para el equipo IA
  handleAIInjurySub(injuredPlayer, teamSide) {
    const isHome = teamSide === "home";
    const remaining = isHome ? this.homeSubsRemaining : this.awaySubsRemaining;
    const remainingWindows = isHome ? this.homeWindowsRemaining : this.awayWindowsRemaining;
    const aiBenchRaw = isHome ? this.homeBench : this.awayBench;
    const aiBench = (aiBenchRaw || []).filter(p => !p.injury);

    if (remaining <= 0 || remainingWindows <= 0 || aiBench.length === 0) return;

    const samePos = aiBench.filter(p => p.pos === injuredPlayer.pos);
    let candidate = null;
    if (samePos.length > 0) {
      candidate = samePos.sort((a, b) => (b.ovr || 70) - (a.ovr || 70))[0];
    } else {
      candidate = aiBench.filter(p => p.pos !== "POR").sort((a, b) => (b.ovr || 70) - (a.ovr || 70))[0] || aiBench[0];
    }

    if (candidate) {
      const res = this.makeSubstitution(teamSide, injuredPlayer.id, candidate.id, this.isHalfTime);
      if (res.success) {
        this.onSubstitution({
          teamSide,
          team: teamSide === "home" ? this.homeTeam : this.awayTeam,
          subs: [{ outPlayer: res.outPlayer, inPlayer: res.inPlayer }],
          minute: this.minute,
          remaining: res.remaining,
          forcedInjury: true
        });
      }
    }
  }

  loop() {
    if (!this.isRunning || this.isFinished || this.isHighlightRunning || this.isSetPieceRunning) return;

    // 1. Comprobar si ya corresponde el descanso
    if (this.minute >= this.halfTimeMinute && !this.halfTimeTriggered && !this.isSecondHalf) {
      this.halfTimeTriggered = true;
      this.isHalfTime = true;
      this.pause();
      this.triggerAlert("DESCANSO", "📣 ¡Final de la 1ª Parte! Descanso", "neutral", 3200);
      this.onHalfTime(this.getState());
      return;
    }

    // 2. Comprobar si finalizó el partido
    if (this.minute >= this.maxMinutes) {
      this.finish();
      return;
    }

    const hadHighlight = this.stepMinute();
    this.onTick(this.getState());

    // Si la jugada clave se ha iniciado, el loop asíncrono toma el control hasta su resolución
    if (hadHighlight) {
      return;
    }

    // 3. Comprobar descanso tras avanzar el minuto
    if (this.minute >= this.halfTimeMinute && !this.halfTimeTriggered && !this.isSecondHalf) {
      this.halfTimeTriggered = true;
      this.isHalfTime = true;
      this.pause();
      this.triggerAlert("DESCANSO", "📣 ¡Final de la 1ª Parte! Descanso", "neutral", 3200);
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

    if (this.loopTimeout) {
      clearTimeout(this.loopTimeout);
    }
    this.loopTimeout = setTimeout(() => this.loop(), interval);
  }

  // Simulación paso a paso de cada minuto de partido
  stepMinute() {
    if (this.isSetPieceRunning) return false;

    this.minute++;

    // Descuentos en directo: aviso al llegar a los minutos 45 y 90
    if (this.minute === 45 && !this.halfTimeTriggered && !this.isSecondHalf) {
      this.triggerAlert("DESCUENTO", `⏱️ +${this.firstHalfExtra} min de añadido (1ª Parte)`, "neutral", 3500);
    } else if (this.minute === 90 && this.isSecondHalf) {
      this.triggerAlert("DESCUENTO", `⏱️ +${this.secondHalfExtra} min de añadido (2ª Parte)`, "neutral", 3500);
    }

    // Comprobar si se ha cumplido el tiempo reglamentario más el descuento antes de generar jugadas
    if (this.minute >= this.halfTimeMinute && !this.halfTimeTriggered && !this.isSecondHalf) {
      this.halfTimeTriggered = true;
      this.isHalfTime = true;
      this.pause();
      this.triggerAlert("DESCANSO", "📣 ¡Final de la 1ª Parte! Descanso", "neutral", 3200);
      this.onHalfTime(this.getState());
      return true;
    }

    if (this.minute >= this.maxMinutes) {
      this.finish();
      return true;
    }

    // Modificadores de mentalidad y desgaste físico
    const mentMods = {
      very_defensive: { atk: 0.65, def: 1.35, drain: 0.85 },
      defensive: { atk: 0.85, def: 1.15, drain: 0.92 },
      balanced: { atk: 1.0, def: 1.0, drain: 1.0 },
      offensive: { atk: 1.25, def: 0.85, drain: 1.10 },
      very_offensive: { atk: 1.45, def: 0.70, drain: 1.20 }
    };

    const homeMod = mentMods[this.homeMentality] || mentMods.balanced;
    const awayMod = mentMods[this.awayMentality] || mentMods.balanced;

    // Modificadores de fatiga según ritmo y presión táctica
    const homePressMod = this.homeInstructions?.outOfPossession?.pressing === "high" ? 1.18 : (this.homeInstructions?.outOfPossession?.pressing === "low" ? 0.82 : 1.0);
    const homeTempoMod = this.homeInstructions?.inPossession?.tempo === "fast" ? 1.12 : (this.homeInstructions?.inPossession?.tempo === "slow" ? 0.88 : 1.0);
    const awayPressMod = this.awayInstructions?.outOfPossession?.pressing === "high" ? 1.18 : (this.awayInstructions?.outOfPossession?.pressing === "low" ? 0.82 : 1.0);
    const awayTempoMod = this.awayInstructions?.inPossession?.tempo === "fast" ? 1.12 : (this.awayInstructions?.inPossession?.tempo === "slow" ? 0.88 : 1.0);

    // Desgaste físico gradual y acumulación de minutos según atributos físicos (PHY), posición, mentalidad y estilo táctico
    this.homePlayersOnPitch.forEach(p => {
      p.matchMinutes = (p.matchMinutes || 0) + 1;
      const isGK = p.pos === "POR";
      const phyFactor = (120 - Math.min(95, Math.max(45, (p.phy || 70)))) / 50;
      const rate = isGK ? 0.08 : (0.42 * phyFactor * homeMod.drain * homePressMod * homeTempoMod);
      p.energy = Math.max(25, (p.energy || 100) - rate);
    });

    this.awayPlayersOnPitch.forEach(p => {
      p.matchMinutes = (p.matchMinutes || 0) + 1;
      const isGK = p.pos === "POR";
      const phyFactor = (120 - Math.min(95, Math.max(45, (p.phy || 70)))) / 50;
      const rate = isGK ? 0.08 : (0.42 * phyFactor * awayMod.drain * awayPressMod * awayTempoMod);
      p.energy = Math.max(25, (p.energy || 100) - rate);
    });

    // Comprobación de riesgo de lesión por acumulación de minutos y fatiga física (< 58% energía)
    const checkFatigueInjury = (player, teamSide) => {
      if (player.injury || player.pos === "POR") return;
      const energy = player.energy !== undefined ? player.energy : 100;
      if (energy < 58) {
        const fatigueRisk = (58 - energy) / 100;
        const phyFactor = Math.max(0.5, (player.phy || 70) / 100);
        const chance = (fatigueRisk * 0.0032) / phyFactor;
        if (Math.random() < chance) {
          this.triggerPlayerInjury(player, teamSide, "fatigue");
        }
      }
    };
    this.homePlayersOnPitch.forEach(p => checkFatigueInjury(p, "home"));
    this.awayPlayersOnPitch.forEach(p => checkFatigueInjury(p, "away"));

    // Modificadores de efectividad ofensiva y defensiva
    let homeAtkBonus = 0;
    if (this.homeInstructions?.inPossession?.passingStyle === "direct") homeAtkBonus += 0.08;
    if (this.homeInstructions?.inPossession?.tempo === "fast") homeAtkBonus += 0.10;
    else if (this.homeInstructions?.inPossession?.tempo === "slow") homeAtkBonus -= 0.08;

    let awayAtkBonus = 0;
    if (this.awayInstructions?.inPossession?.passingStyle === "direct") awayAtkBonus += 0.08;
    if (this.awayInstructions?.inPossession?.tempo === "fast") awayAtkBonus += 0.10;
    else if (this.awayInstructions?.inPossession?.tempo === "slow") awayAtkBonus -= 0.08;

    // Modificador de bloque defensivo rival
    const homeDefBonus = this.homeInstructions?.outOfPossession?.defensiveLine === "low" ? 0.12 : (this.homeInstructions?.outOfPossession?.defensiveLine === "high" ? -0.06 : 0);
    const awayDefBonus = this.awayInstructions?.outOfPossession?.defensiveLine === "low" ? 0.12 : (this.awayInstructions?.outOfPossession?.defensiveLine === "high" ? -0.06 : 0);

    const homeAtk = (this.calcTeamPower(this.homePlayersOnPitch, "atk", "home") + 2) * (homeMod.atk + homeAtkBonus);
    const homeDef = (this.calcTeamPower(this.homePlayersOnPitch, "def", "home") + 2) * (homeMod.def + homeDefBonus);
    const awayAtk = this.calcTeamPower(this.awayPlayersOnPitch, "atk", "away") * (awayMod.atk + awayAtkBonus);
    const awayDef = this.calcTeamPower(this.awayPlayersOnPitch, "def", "away") * (awayMod.def + awayDefBonus);

    // Disputa de la posesión con impacto de estilo de pase y presión alta
    const midHome = this.calcTeamPower(this.homePlayersOnPitch, "mid", "home");
    const midAway = this.calcTeamPower(this.awayPlayersOnPitch, "mid", "away");

    let possModHome = 0;
    if (this.homeInstructions?.inPossession?.passingStyle === "short") possModHome += 0.06;
    else if (this.homeInstructions?.inPossession?.passingStyle === "direct") possModHome -= 0.05;
    if (this.homeInstructions?.outOfPossession?.pressing === "high") possModHome += 0.04;

    let possModAway = 0;
    if (this.awayInstructions?.inPossession?.passingStyle === "short") possModAway += 0.06;
    else if (this.awayInstructions?.inPossession?.passingStyle === "direct") possModAway -= 0.05;
    if (this.awayInstructions?.outOfPossession?.pressing === "high") possModAway += 0.04;

    const probHomePoss = Math.max(0.20, Math.min(0.80, (midHome / (midHome + midAway)) + 0.03 + possModHome - possModAway));

    let currentPoss = Math.random() < probHomePoss ? "home" : "away";

    // 1. TRANSICIÓN TRAS PÉRDIDA: CONTRAPRESIÓN INSTANTÁNEA
    if (this.lastPossession === "home" && currentPoss === "away") {
      if (this.homeInstructions?.inTransition?.loss === "counterpress" && Math.random() < 0.35) {
        currentPoss = "home"; // ¡Robo inmediato arriba!
        this.triggerAlert("CONTRAPRESIÓN", `💥 ¡Presión tras pérdida de ${this.homeTeam.shortName}! Robo en campo rival`, "home", 2500);
      }
    } else if (this.lastPossession === "away" && currentPoss === "home") {
      if (this.awayInstructions?.inTransition?.loss === "counterpress" && Math.random() < 0.35) {
        currentPoss = "away"; // ¡Robo inmediato arriba!
        this.triggerAlert("CONTRAPRESIÓN", `💥 ¡Presión tras pérdida de ${this.awayTeam.shortName}! Robo en campo rival`, "away", 2500);
      }
    }

    // 2. TRANSICIÓN TRAS RECUPERACIÓN: CONTRAATAQUE VERTICAL
    if (this.lastPossession !== currentPoss) {
      const activeInst = currentPoss === "home" ? this.homeInstructions : this.awayInstructions;
      const activeTeam = currentPoss === "home" ? this.homeTeam : this.awayTeam;
      if (activeInst?.inTransition?.win === "counter" && Math.random() < 0.42) {
        this.triggerAlert("CONTRAATAQUE", `🏹 ¡Contraataque veloz de ${activeTeam.shortName}!`, currentPoss, 2500);
      }
    }

    this.lastPossession = currentPoss;
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
      const widthInst = this.homeInstructions?.inPossession?.width || "balanced";
      let ballYTarget = 20 + Math.random() * 60;
      if (widthInst === "wide") {
        ballYTarget = Math.random() < 0.5 ? (12 + Math.random() * 20) : (68 + Math.random() * 20);
      } else if (widthInst === "center") {
        ballYTarget = 36 + Math.random() * 28;
      }

      this.ball.targetX = 65 + Math.random() * 28;
      this.ball.targetY = ballYTarget;

      // Ocasión de ataque local
      const attackScore = (homeAtk / (homeAtk + awayDef)) * 0.28;
      if (chanceRoll < attackScore) {
        this.executeKeyHighlight("home", () => {
          if (this.minute >= this.halfTimeMinute && !this.halfTimeTriggered && !this.isSecondHalf) {
            this.halfTimeTriggered = true;
            this.isHalfTime = true;
            this.pause();
            this.onHalfTime(this.getState());
            return;
          }
          if (this.isRunning && !this.isFinished) {
            this.loop();
          }
        });
        return true;
      } else if (chanceRoll < attackScore + 0.055) {
        // Balón parado (Córner o Falta peligrosa)
        const isCorner = Math.random() < 0.65;
        this.triggerSetPiece("home", isCorner ? "CORNER" : "FREE_KICK");
        return true;
      } else {
        // Pase o centro medio
        this.ball.targetZ = Math.random() < 0.3 ? 4 + Math.random() * 6 : 0;
      }
    } else {
      // Balón atacando hacia la izquierda (x: 50 -> 10)
      const widthInstAway = this.awayInstructions?.inPossession?.width || "balanced";
      let ballYTargetAway = 20 + Math.random() * 60;
      if (widthInstAway === "wide") {
        ballYTargetAway = Math.random() < 0.5 ? (12 + Math.random() * 20) : (68 + Math.random() * 20);
      } else if (widthInstAway === "center") {
        ballYTargetAway = 36 + Math.random() * 28;
      }

      this.ball.targetX = 35 - Math.random() * 28;
      this.ball.targetY = ballYTargetAway;

      const attackScore = (awayAtk / (awayAtk + homeDef)) * 0.26;
      if (chanceRoll < attackScore) {
        this.executeKeyHighlight("away", () => {
          if (this.minute >= this.halfTimeMinute && !this.halfTimeTriggered && !this.isSecondHalf) {
            this.halfTimeTriggered = true;
            this.isHalfTime = true;
            this.pause();
            this.onHalfTime(this.getState());
            return;
          }
          if (this.isRunning && !this.isFinished) {
            this.loop();
          }
        });
        return true;
      } else if (chanceRoll < attackScore + 0.055) {
        // Balón parado (Córner o Falta peligrosa)
        const isCorner = Math.random() < 0.65;
        this.triggerSetPiece("away", isCorner ? "CORNER" : "FREE_KICK");
        return true;
      } else {
        this.ball.targetZ = Math.random() < 0.3 ? 4 + Math.random() * 6 : 0;
      }
    }

    // Posibles faltas y tarjetas (afectadas por la intensidad de presión)
    const baseFoulChance = 0.065;
    const pressingHome = this.homeInstructions?.outOfPossession?.pressing || "mid";
    const pressingAway = this.awayInstructions?.outOfPossession?.pressing || "mid";
    const pressFoulMod = (pressingHome === "high" || pressingAway === "high") ? 1.30 : ((pressingHome === "low" && pressingAway === "low") ? 0.65 : 1.0);

    if (Math.random() < baseFoulChance * pressFoulMod) {
      const foulTeam = Math.random() > 0.5 ? "home" : "away";
      this.stats.fouls[foulTeam]++;
      const victimTeam = foulTeam === "home" ? "away" : "home";
      const foulTeamObj = foulTeam === "home" ? this.homeTeam : this.awayTeam;
      const foulPitch = foulTeam === "home" ? this.homePlayersOnPitch : this.awayPlayersOnPitch;
      const foulCandidates = foulPitch.filter(p => p.pos !== "POR");
      const committingPlayer = foulCandidates.length > 0
        ? foulCandidates[Math.floor(Math.random() * foulCandidates.length)]
        : foulPitch[0];

      const isDirectRed = Math.random() < 0.015;
      const isYellow = !isDirectRed && Math.random() < 0.22;

      if (isDirectRed && committingPlayer) {
        this.stats.redCards[foulTeam]++;
        this.matchCards.reds[committingPlayer.id] = { player: committingPlayer, reason: "Roja directa", minute: this.minute, team: foulTeam };
        if (foulTeam === "home") {
          this.homePlayersOnPitch = this.homePlayersOnPitch.filter(p => p.id !== committingPlayer.id);
        } else {
          this.awayPlayersOnPitch = this.awayPlayersOnPitch.filter(p => p.id !== committingPlayer.id);
        }
        this.update2DPositions();
        this.triggerAlert("ROJA DIRECTA", `🟥 ¡ROJA DIRECTA para ${committingPlayer.name} (${foulTeamObj.shortName})!`, foulTeam, 4000);
        this.events.push({
          minute: this.minute,
          type: "RED_CARD",
          team: foulTeam,
          teamName: foulTeamObj.shortName,
          player: committingPlayer.name,
          playerId: committingPlayer.id,
          reason: "Roja directa"
        });
        this.onCard({ type: "RED", player: committingPlayer, teamSide: foulTeam, minute: this.minute });
      } else if (isYellow && committingPlayer) {
        if (this.matchCards.yellows[committingPlayer.id]) {
          // Segunda amarilla y expulsión
          this.stats.yellowCards[foulTeam]++;
          this.stats.redCards[foulTeam]++;
          this.matchCards.reds[committingPlayer.id] = { player: committingPlayer, reason: "Segunda amarilla", minute: this.minute, team: foulTeam };
          if (foulTeam === "home") {
            this.homePlayersOnPitch = this.homePlayersOnPitch.filter(p => p.id !== committingPlayer.id);
          } else {
            this.awayPlayersOnPitch = this.awayPlayersOnPitch.filter(p => p.id !== committingPlayer.id);
          }
          this.update2DPositions();
          this.triggerAlert("EXPULSIÓN", `🟥 ¡Segunda amarilla y EXPULSIÓN para ${committingPlayer.name} (${foulTeamObj.shortName})!`, foulTeam, 4000);
          this.events.push({
            minute: this.minute,
            type: "RED_CARD",
            team: foulTeam,
            teamName: foulTeamObj.shortName,
            player: committingPlayer.name,
            playerId: committingPlayer.id,
            reason: "Segunda amarilla"
          });
          this.onCard({ type: "SECOND_YELLOW", player: committingPlayer, teamSide: foulTeam, minute: this.minute });
        } else {
          // Primera amarilla
          this.stats.yellowCards[foulTeam]++;
          this.matchCards.yellows[committingPlayer.id] = { player: committingPlayer, minute: this.minute, team: foulTeam };
          this.triggerAlert("TARJETA", `🟨 Tarjeta amarilla para ${committingPlayer.name} (${foulTeamObj.shortName})`, foulTeam, 2800);
          this.events.push({
            minute: this.minute,
            type: "YELLOW_CARD",
            team: foulTeam,
            teamName: foulTeamObj.shortName,
            player: committingPlayer.name,
            playerId: committingPlayer.id
          });
          this.onCard({ type: "YELLOW", player: committingPlayer, teamSide: foulTeam, minute: this.minute });
        }
      }

      // Riesgo de lesión por agresividad o entrada dura del rival
      const foulTeamMentality = foulTeam === "home" ? this.homeMentality : this.awayMentality;
      const aggMod = (foulTeamMentality === "very_offensive" || foulTeamMentality === "offensive") ? 1.4 : 1.0;
      const injuryFoulChance = (isYellow ? 0.075 : 0.018) * aggMod;
      if (Math.random() < injuryFoulChance) {
        const victimPitch = victimTeam === "home" ? this.homePlayersOnPitch : this.awayPlayersOnPitch;
        const eligible = victimPitch.filter(p => !p.injury);
        if (eligible.length > 0) {
          const victim = eligible[Math.floor(Math.random() * eligible.length)];
          this.triggerPlayerInjury(victim, victimTeam, "foul");
        }
      }

      if (Math.random() < 0.40 && !this.isHighlightRunning && !this.isSetPieceRunning) {
        this.triggerSetPiece(victimTeam, "FREE_KICK");
        return true;
      }
    }

    // Lance fortuito aislado del juego (esguince, mala caída por puro azar)
    if (Math.random() < 0.0006) {
      const side = Math.random() > 0.5 ? "home" : "away";
      const pitch = side === "home" ? this.homePlayersOnPitch : this.awayPlayersOnPitch;
      const eligible = pitch.filter(p => !p.injury);
      if (eligible.length > 0) {
        const victim = eligible[Math.floor(Math.random() * eligible.length)];
        this.triggerPlayerInjury(victim, side, "random");
      }
    }

    // Comprobar y realizar posibles cambios tácticos de la IA rival
    this.checkAISubstitutions();

    // Actualizar coordenadas 3D de los jugadores hacia el balón para visualización dinámica
    this.update2DPositions();
    return false;
  }

  // Ejecución de jugada clave en varias fases cinematográficas estilo Football Manager
  executeKeyHighlight(attackingSide, onComplete) {
    this.isHighlightRunning = true;
    this.speed = 1; // Ritmo deliberado para apreciar la jugada en detalle

    const isHome = attackingSide === "home";
    const atkTeam = isHome ? this.homeTeam : this.awayTeam;
    const defTeam = isHome ? this.awayTeam : this.homeTeam;
    const atkPlayers = isHome ? this.homePlayersOnPitch : this.awayPlayersOnPitch;
    const defPlayers = isHome ? this.awayPlayersOnPitch : this.homePlayersOnPitch;

    // Selección de protagonistas de la jugada completa de 15 segundos
    const shooter = this.pickPlayerForAction(atkPlayers, ["DC", "EI", "ED", "MCO", "MC", "LD", "LI"], "shoot");
    const passer = this.pickPlayerForAction(atkPlayers.filter(p => p.id !== shooter.id), ["EI", "ED", "MCO", "MC", "LD", "LI", "DC"], "pass");
    const pivot = atkPlayers.find(p => (p.pos === "MCD" || p.pos === "MC") && p.id !== passer.id && p.id !== shooter.id)
      || atkPlayers.find(p => p.id !== passer.id && p.id !== shooter.id && p.pos !== "POR")
      || atkPlayers[0];
    const supportAttacker = atkPlayers.find(p => p.id !== passer.id && p.id !== shooter.id && p.id !== pivot.id && p.pos !== "POR") || atkPlayers[1];

    const goalkeeper = defPlayers.find(p => p.pos === "POR") || defPlayers[0];
    const defender = defPlayers.find(p => (p.pos === "DFC" || p.pos === "MCD" || p.pos === "LD" || p.pos === "LI") && p.id !== goalkeeper.id) || defPlayers[1];
    const defender2 = defPlayers.find(p => (p.pos === "DFC" || p.pos === "LD" || p.pos === "LI") && p.id !== defender.id && p.id !== goalkeeper.id) || defPlayers[2];

    const passerRole = this.getPlayerRole(passer, attackingSide);
    const shooterRole = this.getPlayerRole(shooter, attackingSide);
    const defenderRole = this.getPlayerRole(defender, isHome ? "away" : "home");

    const atk2D = isHome ? this.home2D : this.away2D;
    const def2D = isHome ? this.away2D : this.home2D;

    const passerItem = atk2D.find(p => p.player?.id === passer.id);
    const shooterItem = atk2D.find(p => p.player?.id === shooter.id);
    const defItem = def2D.find(p => p.player?.id === defender.id) || def2D.find(p => !p.isKeeper);
    const gkItem = def2D.find(p => p.isKeeper) || def2D[0];

    let chanceComment = `⚡ ¡Ocasión de peligro de ${atkTeam.shortName}!`;
    if (passerRole && passerRole.tag === "Organizador") {
      chanceComment = `🧠 ${passer.name} (Organizador) canaliza el juego con un pase magistral`;
    } else if (passerRole && passerRole.tag === "Ofensivo") {
      chanceComment = `🚀 ${passer.name} (Carrilero) sube con potencia por la banda y centra`;
    } else if (passerRole && passerRole.tag === "Creativo") {
      chanceComment = `✨ ${passer.name} (Mediapunta) filtra un balón con magia`;
    } else if (passerRole && passerRole.tag === "Salida") {
      chanceComment = `🎯 ${passer.name} (Central) rompe líneas con pase largo milimétrico`;
    } else if (passerRole && passerRole.tag === "Falso 9") {
      chanceComment = `🧠 ${passer.name} (Falso 9) baja a recibir y filtra al espacio`;
    }

    // Coordenadas calculadas para la jugada en campo
    const midX = isHome ? (58 + Math.random() * 8) : (42 - Math.random() * 8);
    const midY = 28 + Math.random() * 44;
    const boxX = isHome ? (83 + Math.random() * 6) : (17 - Math.random() * 6);
    const boxY = 36 + Math.random() * 28;

    // Determinar resultado y rincón de disparo de forma coherente
    const shotQuality = (shooter.sho || 75) + (Math.random() * 30 - 15);
    const gkSavePower = (goalkeeper.ovr || 78) + (Math.random() * 25 - 10);
    const onTarget = Math.random() < 0.72;
    const isDefenderBlock = !onTarget && Math.random() < 0.22;

    let outcome = "GOAL";
    let targetCorner = "TOP_RIGHT";
    const cornersPool = ["TOP_RIGHT", "TOP_LEFT", "BOTTOM_RIGHT", "BOTTOM_LEFT"];
    targetCorner = cornersPool[Math.floor(Math.random() * cornersPool.length)];

    // Dirección específica para disparos fuera (garantiza que jamás entre entre los palos)
    let wideDirection = "RIGHT";
    const wideRand = Math.random();
    if (wideRand < 0.42) wideDirection = "RIGHT";
    else if (wideRand < 0.84) wideDirection = "LEFT";
    else wideDirection = "HIGH";

    if (isDefenderBlock) {
      outcome = "BLOCK";
    } else if (!onTarget) {
      outcome = Math.random() < 0.35 ? "POST" : "WIDE";
    } else {
      if (shotQuality > gkSavePower + 3) {
        outcome = "GOAL";
      } else {
        outcome = "SAVE";
      }
    }

    // Selección de patrón táctico de la jugada clave (con variedad real y sin repetir el anterior)
    const allPatterns = [
      "TIKI_TAKA_CENTRAL",
      "WING_CROSS_HEADER",
      "NEAR_WING_CUTBACK",
      "COUNTER_THROUGH_BALL",
      "INDIVIDUAL_SLALOM",
      "LONG_RANGE_BOMB"
    ];
    const teamInst = isHome ? this.homeInstructions : this.awayInstructions;
    let candidatePatterns = allPatterns.filter(p => p !== this.lastHighlightPattern);
    if (teamInst?.inPossession?.width === "wide" && Math.random() < 0.45) {
      candidatePatterns = ["WING_CROSS_HEADER", "NEAR_WING_CUTBACK"].filter(p => p !== this.lastHighlightPattern);
    } else if (teamInst?.inPossession?.passingStyle === "short" && Math.random() < 0.45) {
      candidatePatterns = ["TIKI_TAKA_CENTRAL", "INDIVIDUAL_SLALOM"].filter(p => p !== this.lastHighlightPattern);
    } else if (teamInst?.inTransition?.win === "counter" && Math.random() < 0.45) {
      candidatePatterns = ["COUNTER_THROUGH_BALL", "LONG_RANGE_BOMB"].filter(p => p !== this.lastHighlightPattern);
    }
    if (candidatePatterns.length === 0) candidatePatterns = allPatterns;
    const playPattern = candidatePatterns[Math.floor(Math.random() * candidatePatterns.length)];
    this.lastHighlightPattern = playPattern;
    const patternSeed = Math.random();

    const patternDescriptions = {
      TIKI_TAKA_CENTRAL: {
        buildNote: `🧠 ${pivot.name} combina en corto con ${supportAttacker.name} buscando abrir la defensa por el centro`,
        progAlert: ["PARED EN LA FRONTAL", `✨ ¡Pared eléctrica entre ${supportAttacker.name} y ${passer.name} en la media luna!`],
        progNote: `✨ ${passer.name} tira la pared en la frontal mientras ${shooter.name} rompe entre los centrales`,
        passAlert: ["PASE FILTRADO", `🎯 ¡Pase interior milimétrico de ${passer.name} dejando solo a ${shooter.name}!`],
        passNote: `🎯 Pase raso entre líneas de ${passer.name}. ¡${shooter.name} controla en el punto de penalti!`,
        shotNote: `⚽ ¡${shooter.name} define de primeras ante la salida del portero!`
      },
      WING_CROSS_HEADER: {
        buildNote: `🔄 ${pivot.name} levanta la cabeza y cambia la orientación en largo hacia la banda derecha`,
        progAlert: ["DESBORDE EN BANDA", `🚀 ${passer.name} encara al lateral a toda velocidad hasta la línea de fondo`],
        progNote: `🚀 ${passer.name} gana línea de fondo mientras ${shooter.name} y ${supportAttacker.name} cargan el área`,
        passAlert: ["CENTRO AL ÁREA", `🎯 ¡Centro tenso con rosca de ${passer.name} al corazón del área!`],
        passNote: `🎯 Centro bombeado de ${passer.name} buscando el remate en el segundo palo`,
        shotNote: `⚽ ¡${shooter.name} se eleva sobre la defensa y conecta un remate letal!`
      },
      NEAR_WING_CUTBACK: {
        buildNote: `⚡ ${pivot.name} abre hacia el costado izquierdo para la subida de ${passer.name}`,
        progAlert: ["INTERNADA EN EL ÁREA", `🔥 ¡${passer.name} recorta hacia adentro y se mete hasta la cocina por la izquierda!`],
        progNote: `🔥 ${passer.name} rompe por el costado izquierdo del área atrayendo a dos defensores`,
        passAlert: ["PASE DE LA MUERTE", `🎯 ¡Pase atrás raso de ${passer.name} buscando la llegada desde segunda línea!`],
        passNote: `🎯 Pase de la muerte de ${passer.name} hacia la frontal del área pequeña`,
        shotNote: `⚽ ¡${shooter.name} llega en carrera y empalma de primeras a portería!`
      },
      COUNTER_THROUGH_BALL: {
        buildNote: `🏹 ¡Recuperación y transición relámpago! ${pivot.name} lanza la contra con la defensa adelantada`,
        progAlert: ["CONTRAATAQUE VELOZ", `⚡ ${passer.name} conduce a campo abierto con ${shooter.name} tirando el desmarque de ruptura`],
        progNote: `⚡ La defensa rival corre hacia atrás desesperada intentando cerrar el hueco`,
        passAlert: ["BALÓN AL ESPACIO", `🎯 ¡Pase en profundidad de ${passer.name} a la espalda de los centrales!`],
        passNote: `🎯 ¡${shooter.name} gana la carrera al espacio y se planta en el mano a mano!`,
        shotNote: `⚽ ¡${shooter.name} encara al guardameta y cruza el disparo!`
      },
      INDIVIDUAL_SLALOM: {
        buildNote: `✨ ${pivot.name} cede en banda para ${passer.name}, que arrastra marcas y entrega a ${shooter.name}`,
        progAlert: ["JUGADA INDIVIDUAL", `🪄 ¡Slalom espectacular de ${shooter.name} sorteando rivales en diagonal hacia el área!`],
        progNote: `🪄 ${shooter.name} recorta en seco, tira una pared rápida con ${supportAttacker.name} y se perfila`,
        passAlert: ["RECORTE EN LA FRONTAL", `🔥 ¡${shooter.name} deja sentado a ${defender.name} con un amago en el borde del área!`],
        passNote: `🔥 Hueco abierto en la frontal tras la bicicleta y recorte de ${shooter.name}`,
        shotNote: `⚽ ¡${shooter.name} busca la escuadra con un golpeo con rosca!`
      },
      LONG_RANGE_BOMB: {
        buildNote: `🔄 Circulación paciente de ${pivot.name} y ${supportAttacker.name} frente al bloque bajo rival`,
        progAlert: ["BÚSQUEDA DE HUECO", `🧠 ${passer.name} pisa el balón en tres cuartos y atrae a la línea de presión`],
        progNote: `🧠 La defensa se hunde en su área; ${passer.name} prepara la dejada de cara`,
        passAlert: ["DEJADA EN LA FRONTAL", `🎯 ¡${passer.name} toca de cara para la llegada libre de ${shooter.name}!`],
        passNote: `🎯 ${shooter.name} acomoda el balón a 22 metros con ángulo de disparo`,
        shotNote: `🚀 ¡${shooter.name} suelta un latigazo descomunal desde fuera del área!`
      }
    };
    const pDesc = patternDescriptions[playPattern] || patternDescriptions.TIKI_TAKA_CENTRAL;

    const baseHighlightData = {
      type: "KEY_CHANCE",
      playPattern,
      patternSeed,
      attackingSide,
      atkTeam,
      defTeam,
      pivot,
      passer,
      shooter,
      supportAttacker,
      defender,
      defender2,
      goalkeeper,
      passerRole,
      shooterRole,
      defenderRole,
      outcome,
      targetCorner,
      wideDirection,
      passStart: { x: midX, y: midY },
      passEnd: { x: boxX, y: boxY },
      commentary: chanceComment,
      minute: this.minute,
      totalDuration: 15000
    };

    // FASE 1: Construcción y circulación en la medular (0.0s - 4.5s)
    this.ball.targetX = midX;
    this.ball.targetY = midY;
    this.ball.targetZ = 0;
    this.ball.possession = attackingSide;

    if (passerItem) {
      passerItem.targetX = midX;
      passerItem.targetY = midY;
    }
    if (defItem) {
      defItem.targetX = midX + (isHome ? 7 : -7);
      defItem.targetY = midY + (Math.random() * 4 - 2);
    }
    if (shooterItem) {
      shooterItem.targetX = isHome ? midX + 13 : midX - 13;
      shooterItem.targetY = midY + (Math.random() < 0.5 ? -10 : 10);
    }
    this.update2DPositions();

    if (this.onHighlightStart) {
      this.onHighlightStart({
        ...baseHighlightData,
        phase: "BUILDUP",
        phaseLabel: "Inicio de la jugada",
        phaseDuration: 4500,
        tacticalNote: pDesc.buildNote
      });
    }
    if (this.onHighlightPhase) {
      this.onHighlightPhase({
        ...baseHighlightData,
        phase: "BUILDUP",
        phaseLabel: "Inicio de la jugada",
        phaseDuration: 4500,
        tacticalNote: pDesc.buildNote
      });
    }

    // FASE 2: Progresión (4.5s - 8.5s)
    setTimeout(() => {
      if (!this.isRunning && !this.isHighlightRunning) return;

      this.triggerAlert(pDesc.progAlert[0], pDesc.progAlert[1], attackingSide, 3200);

      if (this.onHighlightPhase) {
        this.onHighlightPhase({
          ...baseHighlightData,
          phase: "PROGRESSION",
          phaseLabel: "Progresión ofensiva",
          phaseDuration: 4000,
          tacticalNote: pDesc.progNote
        });
      }

      // FASE 3: Pase clave / generación de espacio (8.5s - 11.5s)
      setTimeout(() => {
        if (!this.isRunning && !this.isHighlightRunning) return;

        const isLob = playPattern === "WING_CROSS_HEADER" || Math.random() < 0.35;
        const passZ = isLob ? 4.5 + Math.random() * 2.5 : 0;
        this.ball.targetX = boxX;
        this.ball.targetY = boxY;
        this.ball.targetZ = passZ;

        if (shooterItem) {
          shooterItem.targetX = boxX;
          shooterItem.targetY = boxY;
        }
        if (defItem) {
          defItem.targetX = boxX + (isHome ? -5 : 5);
          defItem.targetY = boxY + (Math.random() * 6 - 3);
        }
        if (gkItem) {
          gkItem.targetX = isHome ? 96.5 : 3.5;
          gkItem.targetY = 48 + (boxY - 50) * 0.22;
        }
        this.update2DPositions();

        this.triggerAlert(pDesc.passAlert[0], pDesc.passAlert[1], attackingSide, 2800);

        if (this.onHighlightPhase) {
          this.onHighlightPhase({
            ...baseHighlightData,
            phase: "KEY_PASS",
            phaseLabel: "Último pase y control",
            phaseDuration: 3000,
            tacticalNote: pDesc.passNote
          });
        }

        // FASE 4: Disparo a puerta y desenlace físico en pantalla (11.5s - 15.0s)
        setTimeout(() => {
          if (!this.isRunning && !this.isHighlightRunning) return;

          this.stats.shots[attackingSide]++;

          if (this.onHighlightPhase) {
            this.onHighlightPhase({
              ...baseHighlightData,
              phase: "SHOT",
              phaseLabel: "Remate a portería",
              phaseDuration: 3500,
              tacticalNote: pDesc.shotNote
            });
          }

          if (outcome === "BLOCK") {
            // Bloqueo de la zaga
            this.ball.targetX = boxX + (isHome ? -3 : 3);
            this.ball.targetY = boxY + (Math.random() * 8 - 4);
            this.ball.targetZ = 1.2;
            this.triggerAlert("BLOQUEO", `🛡️ ¡Bloqueo providencial de ${defender.name}!`, isHome ? "away" : "home", 3200);

            const analysis = attackingSide === this.userSide
              ? `🛡️ Disparo bloqueado por ${defender.name}. El central tapó el ángulo con una segada impecable.`
              : `🛡️ ¡Gran anticipación de tu zaga! ${defender.name} se lanzó al suelo y neutralizó el tiro.`;

            setTimeout(() => {
              this.concludeHighlight({ outcome: "BLOCK", tacticalAnalysis: analysis, onComplete });
            }, 3500);

          } else if (outcome === "POST") {
            this.ball.targetX = isHome ? 99 : 1;
            this.ball.targetY = targetCorner.includes("RIGHT") ? 55.5 : 44.5;
            this.ball.targetZ = 7;
            this.triggerAlert("AL PALO", `🥅 ¡Al palo! El disparo de ${shooter.name} se estrella en la madera`, attackingSide, 3200);
            const analysis = `🥅 ¡Al palo! La madera evitó el gol de ${shooter.name} tras superar al guardameta.`;

            setTimeout(() => {
              this.concludeHighlight({ outcome: "POST", tacticalAnalysis: analysis, onComplete });
            }, 3500);

          } else if (outcome === "WIDE") {
            this.ball.targetX = isHome ? 105 : -5;
            this.ball.targetY = wideDirection === "RIGHT" ? 64 : (wideDirection === "LEFT" ? 36 : 50);
            this.ball.targetZ = wideDirection === "HIGH" ? 14 : 4;
            this.triggerAlert("DISPARO FUERA", `💨 Disparo desviado de ${shooter.name}`, attackingSide, 3000);
            const analysis = `💨 El remate de ${shooter.name} se marcha claramente fuera sin encontrar portería.`;

            setTimeout(() => {
              this.concludeHighlight({ outcome: "WIDE", tacticalAnalysis: analysis, onComplete });
            }, 3500);

          } else if (outcome === "SAVE") {
            this.stats.shotsOnTarget[attackingSide]++;
            this.ball.targetX = isHome ? 98 : 2;
            this.ball.targetY = targetCorner.includes("RIGHT") ? 54 : 46;
            this.ball.targetZ = 5;

            setTimeout(() => {
              this.triggerAlert("PARADÓN", `🧤 ¡Paradón providencial de ${goalkeeper.name} ante ${shooter.name}! ¡El balón sale a córner!`, isHome ? "away" : "home", 3200);
              const analysis = attackingSide === this.userSide
                ? `🧤 ¡Paradón de ${goalkeeper.name}! Estirada espectacular desviando el tiro a saque de esquina.`
                : `🧤 ¡Intervención salvadora de ${goalkeeper.name}! Tu portero voló para desviar el balón a córner.`;

              this.concludeHighlight({
                outcome: "SAVE",
                tacticalAnalysis: analysis,
                onComplete: () => {
                  // Tras la parada en jugada clave, el balón sale a córner y se permite sacar la jugada ensayada
                  if (!this.isFinished && !this.isHalfTime) {
                    this.triggerSetPiece(attackingSide, "CORNER");
                  } else if (onComplete) {
                    onComplete();
                  }
                }
              });
            }, 3500);

          } else {
            // ¡GOOOOL!
            this.stats.shotsOnTarget[attackingSide]++;
            if (isHome) {
              this.homeScore++;
              this.ball.targetX = 99.5;
              this.ball.targetY = targetCorner.includes("RIGHT") ? 54 : 46;
              this.ball.targetZ = targetCorner.includes("TOP") ? 9 : 2;
            } else {
              this.awayScore++;
              this.ball.targetX = 0.5;
              this.ball.targetY = targetCorner.includes("RIGHT") ? 54 : 46;
              this.ball.targetZ = targetCorner.includes("TOP") ? 9 : 2;
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

            this.triggerAlert("GOL", `⚽ ¡GOOOOOOLAZO DE ${shooter.name.toUpperCase()}! (${this.homeScore}-${this.awayScore})`, attackingSide, 4500);

            const analysis = attackingSide === this.userSide
              ? `🎯 ¡Golazo! Jugada construida a la perfección y definición inapelable de ${shooter.name}.`
              : `⚠️ Despiste en la marca: ${shooter.name} aprovechó el centro y fusiló la portería.`;

            setTimeout(() => {
              this.isHighlightRunning = false;
              this.speed = this.userSpeed;
              if (this.onHighlightEnd) {
                this.onHighlightEnd({
                  outcome: "GOAL",
                  tacticalAnalysis: analysis,
                  attackingSide,
                  shooter,
                  passer,
                  defender,
                  goalkeeper
                });
              }

              this.onGoal({
                shooter,
                passer,
                attackingSide,
                concedingSide: isHome ? "away" : "home",
                atkTeam,
                defTeam,
                minute: this.minute,
                formattedMinute: this.getFormattedMinute(),
                score: `${this.homeScore} - ${this.awayScore}`
              });
            }, 3500);
          }
        }, 3000);
      }, 4000);
    }, 4500);
  }

  concludeHighlight({ outcome, tacticalAnalysis, onComplete }) {
    this.isHighlightRunning = false;
    this.speed = this.userSpeed;

    if (this.onHighlightEnd) {
      this.onHighlightEnd({
        outcome,
        tacticalAnalysis
      });
    }

    if (this.minute >= this.halfTimeMinute && !this.halfTimeTriggered && !this.isSecondHalf) {
      this.halfTimeTriggered = true;
      this.isHalfTime = true;
      this.pause();
      this.triggerAlert("DESCANSO", "📣 ¡Final de la 1ª Parte! Descanso", "neutral", 3200);
      this.onHalfTime(this.getState());
      return;
    }

    if (this.minute >= this.maxMinutes) {
      this.finish();
      return;
    }

    if (onComplete) onComplete();
  }

  // Generar punto y distancia real en metros de una falta con distribución aleatoria
  generateFreeKickSpot(attackingSide) {
    const isHome = attackingSide === "home";

    // Generar distancia al azar entre 17m y 60m:
    // ~35% faltas directas peligrosas al borde del área (17m - 25m)
    // ~35% faltas para centro / colgar al área (26m - 34m)
    // ~30% faltas lejanas en medio campo (35m - 60m)
    const roll = Math.random();
    let targetDist;
    if (roll < 0.35) {
      targetDist = 17 + Math.random() * 8.5; // 17m a 25.5m (muy peligrosas para tiro directo)
    } else if (roll < 0.70) {
      targetDist = 26 + Math.random() * 8.5; // 26m a 34.5m (peligrosas para centro al área)
    } else {
      targetDist = 35 + Math.random() * 25;  // 35m a 60m (faltas en la medular)
    }

    const maxAngle = Math.min(0.95, 28 / targetDist);
    const angle = (Math.random() * 2 - 1) * maxAngle;

    const dxMeters = targetDist * Math.cos(angle);
    const dyMeters = targetDist * Math.sin(angle);

    const pitchX = isHome ? (100 - dxMeters / 1.05) : (dxMeters / 1.05);
    const pitchY = 50 + (dyMeters / 0.68);

    const spotX = Math.max(8, Math.min(92, pitchX));
    const spotY = Math.max(14, Math.min(86, pitchY));

    const realDx = (isHome ? (100 - spotX) : spotX) * 1.05;
    const realDy = (50 - spotY) * 0.68;
    const distanceMeters = Math.round(Math.sqrt(realDx * realDx + realDy * realDy));

    return { spot: { x: spotX, y: spotY }, distanceMeters };
  }

  // Activar jugada a balón parado (Córner o Falta peligrosa)
  triggerSetPiece(attackingSide, type = "CORNER", customSpotData = null) {
    if (this.isFinished || this.isHalfTime || this.isHighlightRunning || this.isSetPieceRunning) return;

    const isHome = attackingSide === "home";
    const atkTeam = isHome ? this.homeTeam : this.awayTeam;
    const defTeam = isHome ? this.awayTeam : this.homeTeam;
    const atkPlayers = isHome ? this.homePlayersOnPitch : this.awayPlayersOnPitch;
    const defPlayers = isHome ? this.awayPlayersOnPitch : this.homePlayersOnPitch;

    let spotX, spotY, distanceMeters = null;
    if (type === "CORNER") {
      spotX = isHome ? 99.5 : 0.5;
      spotY = Math.random() < 0.5 ? 0.8 : 99.2;
    } else {
      const fkData = customSpotData || this.generateFreeKickSpot(attackingSide);
      spotX = fkData.spot.x;
      spotY = fkData.spot.y;
      distanceMeters = fkData.distanceMeters;

      // REQUISITO: Si la falta no es peligrosa (>34m), es falta lejana en la medular.
      // Se saca rápido sin interrumpir con la pizarra táctica de jugada ensayada.
      if (distanceMeters > 34) {
        this.ball.x = spotX;
        this.ball.y = spotY;
        this.ball.z = 0;
        this.ball.targetX = spotX;
        this.ball.targetY = spotY;
        this.ball.targetZ = 0;
        this.ball.possession = attackingSide;
        this.triggerAlert("FALTA", `⚠️ Falta a ${distanceMeters}m de portería cometida sobre ${atkTeam.shortName}. Saque rápido.`, attackingSide, 2600);
        return;
      }
    }

    this.isSetPieceRunning = true;

    const setPieceInfo = {
      type,
      attackingSide,
      atkTeam,
      defTeam,
      atkPlayers,
      defPlayers,
      spot: { x: spotX, y: spotY },
      distanceMeters,
      minute: this.minute
    };

    if (attackingSide === this.userSide) {
      // El usuario ataca a balón parado: pausar y abrir la pizarra táctica interactiva
      this.pause();
      this.onSetPiece(setPieceInfo);
    } else {
      // La IA rival ejecuta su jugada automáticamente en 3D
      const aiSetup = this.buildAISetPieceSetup(setPieceInfo);
      this.executeSetPiece(aiSetup, () => {
        this.isSetPieceRunning = false;
        if (!this.isFinished && !this.isHalfTime && this.isRunning) {
          this.loop();
        }
      });
    }
  }

  // Generar configuración automática para la IA rival en balón parado
  buildAISetPieceSetup(info) {
    const outfield = info.atkPlayers.filter(p => p.pos !== "POR");
    const sortedKickers = [...outfield].sort((a, b) => ((b.pas || 70) + (b.sho || 70)) - ((a.pas || 70) + (a.sho || 70)));
    const taker = sortedKickers[0] || outfield[0];

    const nonTakers = outfield.filter(p => p.id !== taker.id);
    let strategies;
    if (info.type === "FREE_KICK") {
      if (info.distanceMeters && info.distanceMeters <= 24) {
        strategies = ["DIRECT_SHOT", "DIRECT_SHOT", "NEAR_POST", "PENALTY_SPOT"];
      } else {
        strategies = ["PENALTY_SPOT", "FAR_POST", "NEAR_POST", "DIRECT_SHOT", "SHORT_PASS"];
      }
    } else {
      strategies = ["NEAR_POST", "PENALTY_SPOT", "FAR_POST", "SHORT_PASS"];
    }
    const targetStrategy = strategies[Math.floor(Math.random() * strategies.length)];

    const zones = ["NEAR_POST", "PENALTY_SPOT", "FAR_POST", "EDGE_BOX", "SHORT_OPTION", "STAY_BACK"];
    const placements = {};
    zones.forEach((z, idx) => {
      if (nonTakers[idx]) {
        placements[z] = nonTakers[idx];
      }
    });

    return {
      type: info.type,
      attackingSide: info.attackingSide,
      spot: info.spot,
      distanceMeters: info.distanceMeters,
      taker,
      targetStrategy,
      placements
    };
  }

  // Ejecución física y cinemática 3D de la jugada a balón parado con Azar + Estadísticas
  executeSetPiece(setup, onDone) {
    this.isSetPieceRunning = true;
    this.speed = 1;

    const { type, attackingSide, spot, taker, targetStrategy, placements } = setup;
    const isHome = attackingSide === "home";
    const atkTeam = isHome ? this.homeTeam : this.awayTeam;
    const defTeam = isHome ? this.awayTeam : this.homeTeam;
    const defPlayers = isHome ? this.awayPlayersOnPitch : this.homePlayersOnPitch;
    const goalkeeper = defPlayers.find(p => p.pos === "POR") || defPlayers[0];

    if (type === "CORNER") {
      this.stats.corners[attackingSide]++;
    }

    // FASE 1: Colocar balón, lanzador y rematadores en el área
    this.ball.targetX = spot.x;
    this.ball.targetY = spot.y;
    this.ball.targetZ = 0;

    const kickerObj = (isHome ? this.home2D : this.away2D).find(p => p.player?.id === taker.id);
    if (kickerObj) {
      kickerObj.curX = spot.x + (isHome ? -1.8 : 1.8);
      kickerObj.curY = spot.y + (spot.y < 50 ? 1.5 : -1.5);
      kickerObj.targetX = kickerObj.curX;
      kickerObj.targetY = kickerObj.curY;
      kickerObj.facingX = isHome ? 1 : -1;
    }

    const zoneCoords = {
      NEAR_POST: { x: isHome ? 93 : 7, y: spot.y < 50 ? 44 : 56 },
      PENALTY_SPOT: { x: isHome ? 89 : 11, y: 50 },
      FAR_POST: { x: isHome ? 94 : 6, y: spot.y < 50 ? 56 : 44 },
      EDGE_BOX: { x: isHome ? 81 : 19, y: 50 },
      SHORT_OPTION: { x: isHome ? spot.x - 7 : spot.x + 7, y: spot.y < 50 ? 18 : 82 },
      STAY_BACK: { x: isHome ? 46 : 54, y: 50 }
    };

    Object.keys(placements || {}).forEach(zone => {
      const p = placements[zone];
      if (!p) return;
      const p2D = (isHome ? this.home2D : this.away2D).find(item => item.player?.id === p.id);
      const coord = zoneCoords[zone];
      if (p2D && coord) {
        p2D.curX = coord.x + (Math.random() * 2 - 1);
        p2D.curY = coord.y + (Math.random() * 2 - 1);
        p2D.targetX = p2D.curX;
        p2D.targetY = p2D.curY;
      }
    });

    // Colocar defensores marcando en el área y formando barrera si es falta
    const def2D = isHome ? this.away2D : this.home2D;
    def2D.forEach((dp, idx) => {
      if (dp.isKeeper) {
        dp.curX = isHome ? 99 : 1;
        dp.curY = 50;
        dp.targetX = dp.curX;
        dp.targetY = dp.curY;
      } else if (type === "FREE_KICK" && idx < 4) {
        const dirX = isHome ? 1 : -1;
        dp.curX = spot.x + dirX * 9.5;
        dp.curY = spot.y + (idx - 1.5) * 2.2;
        dp.targetX = dp.curX;
        dp.targetY = dp.curY;
      } else {
        dp.curX = (isHome ? 91 : 9) + (Math.random() * 4 - 2);
        dp.curY = 40 + Math.random() * 20;
        dp.targetX = dp.curX;
        dp.targetY = dp.curY;
      }
    });

    this.triggerAlert("BALÓN PARADO", `⚽ ${type === "CORNER" ? "Córner" : "Falta"} de ${atkTeam.shortName}`, attackingSide, 2600);

    // FASE 2: Lanzamiento del balón con parábola y cálculo de Azar + Atributos
    setTimeout(() => {
      const baseStat = targetStrategy === "DIRECT_SHOT" ? (taker.sho || 75) : (taker.pas || 75);
      const azarLanzamiento = (Math.random() * 44 - 22);
      const kickQuality = baseStat + azarLanzamiento;

      let destX, destY, destZ;
      if (targetStrategy === "DIRECT_SHOT") {
        destX = isHome ? 99 : 1;
        destY = Math.random() < 0.5 ? 46.5 : 53.5;
        destZ = 7 + Math.random() * 4;
      } else if (targetStrategy === "SHORT_PASS") {
        const shortCoord = zoneCoords.SHORT_OPTION || zoneCoords.EDGE_BOX;
        destX = shortCoord.x;
        destY = shortCoord.y;
        destZ = 0.5;
      } else {
        const zoneCoord = zoneCoords[targetStrategy] || zoneCoords.PENALTY_SPOT;
        destX = zoneCoord.x + (Math.random() * 3 - 1.5);
        destY = zoneCoord.y + (Math.random() * 3 - 1.5);
        destZ = 9 + Math.random() * 5;
      }

      this.ball.targetX = destX;
      this.ball.targetY = destY;
      this.ball.targetZ = destZ;

      // FASE 3: Remate, despeje, palo, parada o GOL
      setTimeout(() => {
        this.stats.shots[attackingSide]++;

        if (targetStrategy === "DIRECT_SHOT") {
          const isSave = kickQuality < 80;
          const isGoal = kickQuality >= 80 && Math.random() < 0.65;
          const isPost = !isGoal && kickQuality >= 72 && Math.random() < 0.5;

          if (isGoal) {
            this.handleSetPieceGoal(attackingSide, taker, null, "TIRO DIRECTO");
          } else if (isPost) {
            this.triggerAlert("AL PALO", `🥅 ¡Al palo el lanzamiento de ${taker.name}!`, attackingSide, 3000);
            this.finishSetPiecePlay("GOAL_KICK", attackingSide, onDone);
          } else if (isSave) {
            this.triggerAlert("PARADÓN", `🧤 ¡Paradón de ${goalkeeper.name}!`, isHome ? "away" : "home", 3000);
            this.finishSetPiecePlay("SAVE", attackingSide, onDone);
          } else {
            this.triggerAlert("FUERA", `⚠️ ¡El tiro de ${taker.name} se marcha alto!`, attackingSide, 2500);
            this.finishSetPiecePlay("GOAL_KICK", attackingSide, onDone);
          }
        } else {
          const targetPlayer = placements[targetStrategy] || placements["PENALTY_SPOT"] || placements["NEAR_POST"];

          if (!targetPlayer) {
            this.triggerAlert("DESPEJE", "🛡️ Despeje de la defensa", isHome ? "away" : "home", 2500);
            this.finishSetPiecePlay("DESPEJE", attackingSide, onDone);
            return;
          }

          const remateStat = (targetPlayer.sho || 75);
          const azarRemate = (Math.random() * 38 - 19);
          const remateScore = remateStat + azarRemate;

          const gkStat = (goalkeeper.ovr || 78);
          const azarGK = (Math.random() * 30 - 15);
          const gkScore = gkStat + azarGK;

          if (kickQuality < 56) {
            this.triggerAlert("DESPEJE", "🛡️ Despeje de la defensa", isHome ? "away" : "home", 2500);
            this.finishSetPiecePlay("DESPEJE", attackingSide, onDone);
          } else if (remateScore > gkScore + 5) {
            this.handleSetPieceGoal(attackingSide, targetPlayer, taker, "JUGADA ENSAYADA");
          } else if (remateScore > gkScore - 4) {
            if (Math.random() < 0.3) {
              this.triggerAlert("AL PALO", `🥅 ¡Al palo el cabezazo de ${targetPlayer.name}!`, attackingSide, 3000);
              this.finishSetPiecePlay("GOAL_KICK", attackingSide, onDone);
            } else {
              this.triggerAlert("PARADÓN", `🧤 ¡Paradón de ${goalkeeper.name}!`, isHome ? "away" : "home", 3000);
              this.finishSetPiecePlay("SAVE", attackingSide, onDone);
            }
          } else {
            this.triggerAlert("FUERA", `⚠️ ¡Remate desviado de ${targetPlayer.name}!`, attackingSide, 2500);
            this.finishSetPiecePlay("GOAL_KICK", attackingSide, onDone);
          }
        }
      }, 1400);
    }, 1500);
  }

  handleSetPieceGoal(attackingSide, scorer, assister, style) {
    const isHome = attackingSide === "home";
    const atkTeam = isHome ? this.homeTeam : this.awayTeam;
    const defTeam = isHome ? this.awayTeam : this.homeTeam;

    if (isHome) this.homeScore++;
    else this.awayScore++;

    scorer.goals = (scorer.goals || 0) + 1;

    this.ball.targetX = isHome ? 99.5 : 0.5;
    this.ball.targetY = 47 + Math.random() * 6;
    this.ball.targetZ = 5 + Math.random() * 4;

    const event = {
      type: "GOAL",
      minute: this.minute,
      teamSide: attackingSide,
      teamId: atkTeam.id,
      teamName: atkTeam.shortName,
      playerName: scorer.name,
      currentScore: `${this.homeScore} - ${this.awayScore}`
    };
    this.events.push(event);

    this.triggerAlert("GOL", `⚽ ¡GOOOOOOLAZO DE ${scorer.name.toUpperCase()}! (${this.homeScore}-${this.awayScore})`, attackingSide, 4500);

    this.isSetPieceRunning = false;
    this.speed = this.userSpeed;

    this.onGoal({
      shooter: scorer,
      passer: assister,
      attackingSide,
      concedingSide: isHome ? "away" : "home",
      atkTeam,
      defTeam,
      minute: this.minute,
      formattedMinute: this.getFormattedMinute(),
      score: `${this.homeScore} - ${this.awayScore}`
    });
  }

  finishSetPiecePlay(outcome = "GOAL_KICK", attackingSide = "home", onDone = null) {
    const isHome = attackingSide === "home";
    const defSide = isHome ? "away" : "home";
    const defTeam = isHome ? this.awayTeam : this.homeTeam;

    setTimeout(() => {
      // 1. Ejecutar saque de puerta reglamentario o posesión del equipo defensor
      if (outcome === "GOAL_KICK") {
        this.triggerAlert("SAQUE DE PUERTA", `🧤 Saque de puerta para ${defTeam.shortName}`, defSide, 2200);

        // Posicionar el balón en el área de meta para el saque de puerta
        const gkX = isHome ? 94 : 6;
        const gkY = 50;
        this.ball.x = gkX;
        this.ball.y = gkY;
        this.ball.z = 0;
        this.ball.targetX = gkX;
        this.ball.targetY = gkY;
        this.ball.targetZ = 0;
        this.ball.possession = defSide;

        // Posicionar al portero defensor junto al balón
        const def2D = isHome ? this.away2D : this.home2D;
        const gkItem = def2D.find(p => p.isKeeper) || def2D[0];
        if (gkItem) {
          gkItem.curX = gkX;
          gkItem.curY = gkY;
          gkItem.targetX = gkX;
          gkItem.targetY = gkY;
        }

        // El portero efectúa el saque de puerta por alto hacia el centro del campo
        setTimeout(() => {
          this.ball.targetX = isHome ? 54 - Math.random() * 12 : 46 + Math.random() * 12;
          this.ball.targetY = 32 + Math.random() * 36;
          this.ball.targetZ = 7 + Math.random() * 4;
          this.update2DPositions();
        }, 700);
      } else {
        // Despeje o parada: el equipo defensor se hace con la posesión y juega en corto
        this.ball.possession = defSide;
        this.ball.targetX = isHome ? 70 - Math.random() * 12 : 30 + Math.random() * 12;
        this.ball.targetY = 30 + Math.random() * 40;
        this.ball.targetZ = 0;
        this.update2DPositions();
      }

      // 2. Transición y reanudación automática de la simulación
      setTimeout(() => {
        this.isSetPieceRunning = false;
        this.speed = this.userSpeed;

        // Reposicionar a los 22 futbolistas a sus posiciones dinámicas de juego
        this.update2DPositions();

        // Comprobar descanso reglamentario
        if (this.minute >= this.halfTimeMinute && !this.halfTimeTriggered && !this.isSecondHalf) {
          this.halfTimeTriggered = true;
          this.isHalfTime = true;
          this.pause();
          this.onHalfTime(this.getState());
          return;
        }

        // Comprobar final de partido
        if (this.minute >= this.maxMinutes) {
          this.finish();
          return;
        }

        if (onDone) onDone();

        // Reanudar la simulación activa para que el partido continúe con total fluidez
        if (!this.isFinished && !this.isHalfTime) {
          this.isRunning = true;
          this.loop();
        }
      }, outcome === "GOAL_KICK" ? 1600 : 1100);
    }, 1000);
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

  getPlayerRole(player, side = null) {
    if (!player) return null;
    const playerSide = side || (this.homePlayersOnPitch.some(p => p.id === player.id) ? "home" : "away");
    const rolesMap = playerSide === "home" ? this.homePlayerRoles : this.awayPlayerRoles;
    const roleId = rolesMap ? rolesMap[player.id] : null;
    return getRoleDetails(player.pos, roleId);
  }

  pickPlayerForAction(players, preferredPositions, actionType = "pass") {
    let candidates = players.filter(p => preferredPositions.includes(p.pos));
    if (candidates.length === 0) candidates = [...players];

    // Ponderar candidatos según su rol táctico y atributos
    const weights = candidates.map(p => {
      const role = this.getPlayerRole(p);
      if (actionType === "pass") {
        const roleWeight = role?.passWeight !== undefined ? role.passWeight : 0.6;
        return roleWeight * ((p.pas || 70) / 70);
      } else if (actionType === "shoot") {
        const roleWeight = role?.shootWeight !== undefined ? role.shootWeight : 0.6;
        return roleWeight * ((p.sho || 70) / 70);
      }
      return 1;
    });

    const totalWeight = weights.reduce((a, b) => a + b, 0);
    let rand = Math.random() * totalWeight;
    for (let i = 0; i < candidates.length; i++) {
      rand -= weights[i];
      if (rand <= 0) return candidates[i];
    }
    return candidates[0];
  }

  triggerAlert(title, text, side, duration = 2200) {
    this.currentAlert = { title, text, side, until: Date.now() + duration };
    this.onAlert(this.currentAlert);
  }

  calcTeamPower(players, type, side = null) {
    if (!players || players.length === 0) return 75;
    const isHome = side === "home";
    const coords2D = isHome ? this.home2D : this.away2D;
    let sum = 0;
    players.forEach(p => {
      const role = this.getPlayerRole(p, side);
      const item2D = coords2D?.find(item => item.player?.id === p.id);
      let power = 75;
      if (type === "atk") {
        power = (p.sho * 0.4 + p.dri * 0.3 + p.pac * 0.3) * (0.6 + p.energy / 250);
        if (role && role.atkMod) power *= (1 + role.atkMod);
        // Si el jugador está adelantado manualmente hacia la portería rival (avance ofensivo)
        if (item2D) {
          const advX = isHome ? item2D.baseX : (100 - item2D.baseX);
          if (advX > 55) power *= 1.10;
        }
      } else if (type === "mid") {
        power = (p.pas * 0.4 + p.dri * 0.3 + p.def * 0.3) * (0.6 + p.energy / 250);
        if (role && role.midMod) power *= role.midMod;
        // Si el jugador está centrado hacia la medular (amplitud interior)
        if (item2D && item2D.baseY >= 35 && item2D.baseY <= 65) power *= 1.08;
      } else if (type === "def") {
        power = (p.def * 0.5 + p.phy * 0.3 + p.pac * 0.2) * (0.6 + p.energy / 250);
        if (role && role.defMod) power *= role.defMod;
        // Si el jugador está retrasado hacia campo propio (refuerzo defensivo)
        if (item2D) {
          const advX = isHome ? item2D.baseX : (100 - item2D.baseX);
          if (advX < 45) power *= 1.10;
        }
      }
      sum += power;
    });
    return sum / players.length;
  }

  update2DPositions() {
    // Los jugadores fijan sus coordenadas objetivo siguiendo dinámicamente la jugada, el balón y su función táctica (subir, desdoblar, etc.)
    const ballX = this.ball.targetX;
    const ballY = this.ball.targetY;

    // Modificadores tácticos del equipo local (Línea defensiva, anchura y presión)
    const homeDefLine = this.homeInstructions?.outOfPossession?.defensiveLine || "mid";
    const homeLineShiftX = homeDefLine === "high" ? 8 : (homeDefLine === "low" ? -7 : 0);
    const homePressing = this.homeInstructions?.outOfPossession?.pressing || "mid";
    const homePressShiftX = (this.ball.possession === "away" && homePressing === "high") ? 5 : 0;
    const homeWidth = this.homeInstructions?.inPossession?.width || "balanced";

    this.home2D.forEach((p, idx) => {
      const playerObj = this.homePlayersOnPitch[idx];
      const role = this.getPlayerRole(playerObj, "home");
      const pushMod = role?.pushMod || 0; // ej: +14 para Carrilero Ofensivo, +6 Central con Salida
      const isDef = playerObj.pos === "DFC" || playerObj.pos === "LI" || playerObj.pos === "LD";
      const isWing = playerObj.pos === "LI" || playerObj.pos === "LD" || playerObj.pos === "EI" || playerObj.pos === "ED";

      const lineXMod = isDef ? homeLineShiftX : (homeLineShiftX * 0.5);
      const shiftX = (ballX - 50) * 0.35 + (pushMod * 0.35) + lineXMod + homePressShiftX;

      let shiftY = (ballY - 50) * 0.25;
      if (this.ball.possession === "home" && isWing) {
        if (homeWidth === "wide") shiftY += (p.baseY < 50 ? -8 : 8);
        else if (homeWidth === "center") shiftY += (p.baseY < 50 ? 6 : -6);
      }

      p.targetX = Math.max(3, Math.min(95, p.baseX + shiftX + (Math.random() * 4 - 2)));
      p.targetY = Math.max(8, Math.min(92, p.baseY + shiftY + (Math.random() * 4 - 2)));
    });

    // Modificadores tácticos del equipo visitante (Línea defensiva, anchura y presión)
    const awayDefLine = this.awayInstructions?.outOfPossession?.defensiveLine || "mid";
    const awayLineShiftX = awayDefLine === "high" ? -8 : (awayDefLine === "low" ? 7 : 0);
    const awayPressing = this.awayInstructions?.outOfPossession?.pressing || "mid";
    const awayPressShiftX = (this.ball.possession === "home" && awayPressing === "high") ? -5 : 0;
    const awayWidth = this.awayInstructions?.inPossession?.width || "balanced";

    this.away2D.forEach((p, idx) => {
      const playerObj = this.awayPlayersOnPitch[idx];
      const role = this.getPlayerRole(playerObj, "away");
      const pushMod = role?.pushMod || 0;
      const isDef = playerObj.pos === "DFC" || playerObj.pos === "LI" || playerObj.pos === "LD";
      const isWing = playerObj.pos === "LI" || playerObj.pos === "LD" || playerObj.pos === "EI" || playerObj.pos === "ED";

      const lineXMod = isDef ? awayLineShiftX : (awayLineShiftX * 0.5);
      const shiftX = (ballX - 50) * 0.35 - (pushMod * 0.35) + lineXMod + awayPressShiftX;

      let shiftY = (ballY - 50) * 0.25;
      if (this.ball.possession === "away" && isWing) {
        if (awayWidth === "wide") shiftY += (p.baseY < 50 ? -8 : 8);
        else if (awayWidth === "center") shiftY += (p.baseY < 50 ? 6 : -6);
      }

      p.targetX = Math.max(5, Math.min(97, p.baseX + shiftX + (Math.random() * 4 - 2)));
      p.targetY = Math.max(8, Math.min(92, p.baseY + shiftY + (Math.random() * 4 - 2)));
    });
  }

  // Formato televisivo oficial del minuto con descuento (ej: 45+2', 90+4')
  getFormattedMinute() {
    if (!this.isSecondHalf && !this.halfTimeTriggered) {
      if (this.minute > 45) {
        return `45+${this.minute - 45}'`;
      }
      return `${this.minute}'`;
    } else {
      if (this.minute > 90) {
        return `90+${this.minute - 90}'`;
      }
      return `${this.minute}'`;
    }
  }

  // Reanudar el partido tras la pausa del descanso
  resumeSecondHalf() {
    this.isHalfTime = false;
    this.halfTimeTriggered = true;
    this.isSecondHalf = true;
    this.minute = 45; // El reloj de la 2ª parte comienza reglamentariamente en el minuto 45
    // Recuperación energética por los 15 minutos de descanso según físico
    this.homePlayersOnPitch.forEach(p => { 
      const htRecovery = 3 + ((p.phy || 70) / 22);
      p.energy = Math.min(100, (p.energy || 100) + htRecovery); 
    });
    this.awayPlayersOnPitch.forEach(p => { 
      const htRecovery = 3 + ((p.phy || 70) / 22);
      p.energy = Math.min(100, (p.energy || 100) + htRecovery); 
    });

    // Saque de centro para la 2ª mitad
    this.resetKickoff(this.userSide === "home" ? "away" : "home");
    this.start();
  }

  // Saltar instantáneamente al final del partido
  skipToEnd() {
    this.halfTimeTriggered = true;
    this.isHalfTime = false;
    this.isSecondHalf = true;
    this.isHighlightRunning = false;
    this.isSetPieceRunning = false;
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
      formattedMinute: this.getFormattedMinute(),
      firstHalfExtra: this.firstHalfExtra,
      secondHalfExtra: this.secondHalfExtra,
      halfTimeMinute: this.halfTimeMinute,
      maxMinutes: this.maxMinutes,
      homeScore: this.homeScore,
      awayScore: this.awayScore,
      homeTeam: this.homeTeam,
      awayTeam: this.awayTeam,
      stats: this.stats,
      events: this.events,
      homeSubsRemaining: this.homeSubsRemaining,
      awaySubsRemaining: this.awaySubsRemaining,
      homeWindowsRemaining: this.homeWindowsRemaining,
      awayWindowsRemaining: this.awayWindowsRemaining,
      homePlayersOnPitch: this.homePlayersOnPitch,
      homeBench: this.homeBench,
      awayPlayersOnPitch: this.awayPlayersOnPitch,
      awayBench: this.awayBench,
      home2D: this.home2D,
      away2D: this.away2D,
      ball: this.ball,
      homeMentality: this.homeMentality,
      awayMentality: this.awayMentality,
      homeInstructions: this.homeInstructions,
      awayInstructions: this.awayInstructions,
      isRunning: this.isRunning,
      isHalfTime: this.isHalfTime,
      isSecondHalf: this.isSecondHalf,
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
      cards: this.matchCards,
      scorers: this.events.filter(e => e.type === "GOAL"),
      homePlayers: [...this.homePlayersOnPitch, ...this.homeBench],
      awayPlayers: [...this.awayPlayersOnPitch, ...this.awayBench]
    };
  }
}

