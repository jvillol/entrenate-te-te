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
    this.showKeyHighlights = options.showKeyHighlights !== false;
    this.highlightTimeouts = [];
    this.skipCurrentHighlight = null;
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
    this.pauseRequested = false;

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
    if (this.onTick) this.onTick(this.getState());
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.pauseRequested = false;
    this.loop();
    if (this.onTick) this.onTick(this.getState());
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
      const hasPos = (p, list) => {
        const all = [p.pos, ...(Array.isArray(p.secondaryPos) ? p.secondaryPos : [])].filter(Boolean);
        return list.some(x => all.includes(x));
      };
      const isAtk = hasPos(mostTired, ["DC", "EI", "ED", "MD", "MI"]);
      const isMid = hasPos(mostTired, ["MC", "MCD", "MCO", "MD", "MI"]);
      const isDef = hasPos(mostTired, ["DFC", "LD", "LI"]);

      const lineCandidates = aiBench.filter(p => {
        if (isAtk) return hasPos(p, ["DC", "EI", "ED", "MD", "MI"]);
        if (isMid) return hasPos(p, ["MC", "MCD", "MCO", "MD", "MI"]);
        if (isDef) return hasPos(p, ["DFC", "LD", "LI"]);
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

    // Desgaste físico gradual y acumulación de minutos según atributos físicos (PHY), media (OVR), posición, mentalidad y estilo táctico
    this.homePlayersOnPitch.forEach(p => {
      p.matchMinutes = (p.matchMinutes || 0) + 1;
      const isGK = p.pos === "POR";
      const phyFactor = (120 - Math.min(95, Math.max(45, (p.phy || 70)))) / 50;
      const ovrFactor = 0.95 - (Math.max(65, Math.min(95, (p.ovr || 70))) - 65) * 0.005; // Mayor media resiste mejor el esfuerzo
      const rate = isGK ? 0.04 : (0.28 * phyFactor * ovrFactor * homeMod.drain * homePressMod * homeTempoMod);
      p.energy = Math.max(25, (p.energy || 100) - rate);
    });

    this.awayPlayersOnPitch.forEach(p => {
      p.matchMinutes = (p.matchMinutes || 0) + 1;
      const isGK = p.pos === "POR";
      const phyFactor = (120 - Math.min(95, Math.max(45, (p.phy || 70)))) / 50;
      const ovrFactor = 0.95 - (Math.max(65, Math.min(95, (p.ovr || 70))) - 65) * 0.005;
      const rate = isGK ? 0.04 : (0.28 * phyFactor * ovrFactor * awayMod.drain * awayPressMod * awayTempoMod);
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
          if (this.pauseRequested) {
            this.pauseRequested = false;
            this.pause();
            this.triggerAlert("PAUSA", "⏸ Partido en pausa", "neutral", 2500);
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
          if (this.pauseRequested) {
            this.pauseRequested = false;
            this.pause();
            this.triggerAlert("PAUSA", "⏸ Partido en pausa", "neutral", 2500);
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
          this.home2D = this.home2D.filter(p => p.player?.id !== committingPlayer.id);
        } else {
          this.awayPlayersOnPitch = this.awayPlayersOnPitch.filter(p => p.id !== committingPlayer.id);
          this.away2D = this.away2D.filter(p => p.player?.id !== committingPlayer.id);
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
            this.home2D = this.home2D.filter(p => p.player?.id !== committingPlayer.id);
          } else {
            this.awayPlayersOnPitch = this.awayPlayersOnPitch.filter(p => p.id !== committingPlayer.id);
            this.away2D = this.away2D.filter(p => p.player?.id !== committingPlayer.id);
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
    const defSide = isHome ? "away" : "home";
    const atkTeam = isHome ? this.homeTeam : this.awayTeam;
    const defTeam = isHome ? this.awayTeam : this.homeTeam;
    const atkPlayers = isHome ? this.homePlayersOnPitch : this.awayPlayersOnPitch;
    const defPlayers = isHome ? this.awayPlayersOnPitch : this.homePlayersOnPitch;
    const teamInst = isHome ? this.homeInstructions : this.awayInstructions;

    // Analizar las funciones tácticas reales de los futbolistas en el campo para elegir el patrón ideal
    const fieldAtk = atkPlayers.filter(p => p.pos !== "POR");
    const activeRoles = fieldAtk.map(p => this.getPlayerRole(p, attackingSide)?.id).filter(Boolean);
    const hasRole = (...ids) => ids.some(id => activeRoles.includes(id));

    const hasWinger = hasRole("w_winger");
    const hasInsideForward = hasRole("w_inside_forward");
    const hasAttackingFB = hasRole("fb_attacking");
    const hasTargetMan = hasRole("st_target");
    const hasPoacher = hasRole("st_poacher");
    const hasFalseNine = hasRole("st_false_nine");
    const hasPlaymaker = hasRole("am_playmaker", "cm_playmaker", "dm_playmaker");
    const hasBoxToBox = hasRole("cm_box_to_box", "am_shadow_striker");
    const hasBallWinner = hasRole("cm_ball_winner", "dm_destroyer", "cb_stopper");

    // 12 Patrones Tácticos de Jugada Clave ponderados según roles activos e instrucciones del equipo
    const patternWeights = [
      {
        id: "TIKI_TAKA_CENTRAL",
        weight: 1.0 + (hasPlaymaker ? 1.4 : 0) + (teamInst?.inPossession?.passingStyle === "short" ? 0.9 : 0) + (teamInst?.inPossession?.width === "center" ? 0.6 : 0)
      },
      {
        id: "WING_CROSS_HEADER",
        weight: 1.0 + (hasWinger ? 1.3 : 0) + (hasTargetMan ? 1.4 : 0) + (teamInst?.inPossession?.width === "wide" ? 0.9 : 0) + (teamInst?.inPossession?.finalThird === "early_crosses" ? 0.8 : 0)
      },
      {
        id: "NEAR_WING_CUTBACK",
        weight: 1.0 + (hasWinger ? 1.3 : 0) + (hasInsideForward ? 0.9 : 0) + (hasBoxToBox ? 0.8 : 0) + (teamInst?.inPossession?.width === "wide" ? 0.7 : 0)
      },
      {
        id: "COUNTER_THROUGH_BALL",
        weight: 1.0 + (hasPoacher ? 1.5 : 0) + (teamInst?.inTransition?.win === "counter" ? 1.2 : 0) + (teamInst?.inPossession?.passingStyle === "direct" ? 0.8 : 0)
      },
      {
        id: "INDIVIDUAL_SLALOM",
        weight: 1.0 + (hasInsideForward ? 1.4 : 0) + (hasWinger ? 1.2 : 0) + (teamInst?.inPossession?.finalThird === "dribble" ? 1.1 : 0)
      },
      {
        id: "LONG_RANGE_BOMB",
        weight: 0.95 + (hasBoxToBox ? 1.5 : 0) + (teamInst?.inPossession?.finalThird === "shoot_on_sight" ? 1.2 : 0)
      },
      {
        id: "FALSE_NINE_DROP_AND_SPLIT",
        weight: 0.9 + (hasFalseNine ? 2.1 : 0) + (hasPoacher || hasInsideForward ? 1.0 : 0) + (hasPlaymaker ? 0.6 : 0)
      },
      {
        id: "OVERLAPPING_FULLBACK_CROSS",
        weight: 0.95 + (hasAttackingFB ? 2.0 : 0) + (hasTargetMan || hasPoacher ? 0.8 : 0) + (teamInst?.inPossession?.width === "wide" ? 0.8 : 0)
      },
      {
        id: "CHIPPED_PASS_OVER_DEFENSE",
        weight: 0.95 + (hasPlaymaker ? 1.6 : 0) + (hasPoacher || hasTargetMan ? 1.0 : 0) + (teamInst?.inPossession?.finalThird === "work_into_box" ? 0.8 : 0)
      },
      {
        id: "THIRD_MAN_TRIANGLE",
        weight: 1.0 + (hasBoxToBox ? 1.4 : 0) + (hasTargetMan || hasFalseNine ? 1.1 : 0) + (hasPlaymaker ? 0.8 : 0)
      },
      {
        id: "HIGH_PRESS_TURNOVER",
        weight: 0.95 + (hasBallWinner ? 1.6 : 0) + (teamInst?.outOfPossession?.pressing === "high" ? 1.3 : 0) + (teamInst?.inTransition?.lose === "counter_press" ? 0.9 : 0)
      },
      {
        id: "INSIDE_FORWARD_CURLED_SHOT",
        weight: 1.0 + (hasInsideForward ? 2.0 : 0) + (hasWinger ? 1.0 : 0) + (teamInst?.inPossession?.finalThird === "dribble" ? 0.8 : 0)
      }
    ];

    if (!this.recentHighlightPatterns) this.recentHighlightPatterns = [];
    let eligiblePatterns = patternWeights.filter(pw => !this.recentHighlightPatterns.includes(pw.id));
    if (eligiblePatterns.length === 0) eligiblePatterns = patternWeights;

    const totalPatWeight = eligiblePatterns.reduce((acc, item) => acc + item.weight, 0);
    let patRoll = Math.random() * totalPatWeight;
    let playPattern = eligiblePatterns[0].id;
    for (const item of eligiblePatterns) {
      patRoll -= item.weight;
      if (patRoll <= 0) {
        playPattern = item.id;
        break;
      }
    }
    this.recentHighlightPatterns.push(playPattern);
    if (this.recentHighlightPatterns.length > 4) this.recentHighlightPatterns.shift();
    this.lastHighlightPattern = playPattern;
    const patternSeed = Math.random();

    // Helper para elegir jugador único según la función táctica exacta de cada rol en el patrón
    const pickUnique = (preferredPositions, actionType, excludePlayers = []) => {
      const excludedIds = new Set(excludePlayers.filter(Boolean).map(p => p.id));
      const pool = fieldAtk.filter(p => !excludedIds.has(p.id));
      if (pool.length === 0) return fieldAtk[0] || atkPlayers[0];
      return this.pickPlayerForAction(pool, preferredPositions, actionType, attackingSide);
    };

    let shooter, passer, pivot, supportAttacker;

    if (playPattern === "TIKI_TAKA_CENTRAL") {
      shooter = pickUnique(["DC", "MCO", "EI", "ED", "MC"], "poacher_run", []);
      passer = pickUnique(["MCO", "MC", "EI", "ED", "DC"], "playmaker_pass", [shooter]);
      supportAttacker = pickUnique(["MCO", "DC", "MC", "EI", "ED"], "playmaker_pass", [shooter, passer]);
      pivot = pickUnique(["MCD", "MC", "DFC"], "playmaker_pass", [shooter, passer, supportAttacker]);
    } else if (playPattern === "WING_CROSS_HEADER") {
      shooter = pickUnique(["DC", "MCO", "MC", "EI", "ED"], "aerial_finish", []);
      passer = pickUnique(["ED", "LD", "EI", "MCO", "MC"], "dribble_wing", [shooter]);
      pivot = pickUnique(["MCD", "MC", "DFC"], "playmaker_pass", [shooter, passer]);
      supportAttacker = pickUnique(["DC", "MCO", "EI", "MC"], "poacher_run", [shooter, passer, pivot]);
    } else if (playPattern === "NEAR_WING_CUTBACK") {
      passer = pickUnique(["EI", "LI", "MCO", "ED", "DC"], "dribble_wing", []);
      shooter = pickUnique(["DC", "MCO", "MC", "ED"], "finish_box", [passer]);
      pivot = pickUnique(["MC", "MCD", "LI"], "playmaker_pass", [passer, shooter]);
      supportAttacker = pickUnique(["DC", "MCO", "ED", "MC"], "finish_box", [passer, shooter, pivot]);
    } else if (playPattern === "COUNTER_THROUGH_BALL") {
      shooter = pickUnique(["DC", "EI", "ED", "MCO"], "poacher_run", []);
      passer = pickUnique(["MCO", "MC", "EI", "ED", "DC"], "playmaker_pass", [shooter]);
      pivot = pickUnique(["MCD", "MC", "DFC"], "ball_winner", [shooter, passer]);
      supportAttacker = pickUnique(["EI", "ED", "MCO", "DC"], "poacher_run", [shooter, passer, pivot]);
    } else if (playPattern === "INDIVIDUAL_SLALOM") {
      shooter = pickUnique(["EI", "ED", "MCO", "DC", "MC"], "inside_cut", []);
      passer = pickUnique(["DC", "MCO", "MC", "EI", "ED"], "target_hold", [shooter]);
      pivot = pickUnique(["MCD", "MC", "LD", "LI"], "playmaker_pass", [shooter, passer]);
      supportAttacker = pickUnique(["ED", "EI", "DC", "MCO"], "dribble_wing", [shooter, passer, pivot]);
    } else if (playPattern === "LONG_RANGE_BOMB") {
      shooter = pickUnique(["MC", "MCO", "DC", "MCD", "EI", "ED"], "box_to_box_arrival", []);
      passer = pickUnique(["MCO", "MC", "DC", "EI", "ED"], "playmaker_pass", [shooter]);
      pivot = pickUnique(["MCD", "MC", "DFC"], "playmaker_pass", [shooter, passer]);
      supportAttacker = pickUnique(["DC", "EI", "ED", "MCO"], "target_hold", [shooter, passer, pivot]);
    } else if (playPattern === "FALSE_NINE_DROP_AND_SPLIT") {
      passer = pickUnique(["DC", "MCO", "MC"], "false_nine", []);
      shooter = pickUnique(["EI", "ED", "DC", "MCO", "MC"], "poacher_run", [passer]);
      pivot = pickUnique(["MCD", "MC", "DFC"], "playmaker_pass", [passer, shooter]);
      supportAttacker = pickUnique(["ED", "EI", "MCO", "MC"], "dribble_wing", [passer, shooter, pivot]);
    } else if (playPattern === "OVERLAPPING_FULLBACK_CROSS") {
      passer = pickUnique(["LD", "LI", "ED", "EI", "MC"], "overlap_fullback", []);
      shooter = pickUnique(["DC", "MCO", "EI", "ED", "MC"], "finish_box", [passer]);
      pivot = pickUnique(["ED", "EI", "MCO", "MC"], "dribble_wing", [passer, shooter]);
      supportAttacker = pickUnique(["DC", "MCO", "MC", "EI"], "aerial_finish", [passer, shooter, pivot]);
    } else if (playPattern === "CHIPPED_PASS_OVER_DEFENSE") {
      passer = pickUnique(["MCO", "MC", "MCD", "DC"], "playmaker_pass", []);
      shooter = pickUnique(["DC", "EI", "ED", "MCO"], "poacher_run", [passer]);
      pivot = pickUnique(["MCD", "MC", "DFC"], "playmaker_pass", [passer, shooter]);
      supportAttacker = pickUnique(["EI", "ED", "MC", "MCO"], "playmaker_pass", [passer, shooter, pivot]);
    } else if (playPattern === "THIRD_MAN_TRIANGLE") {
      shooter = pickUnique(["MC", "MCO", "DC", "EI", "ED"], "box_to_box_arrival", []);
      passer = pickUnique(["DC", "MCO", "MC"], "target_hold", [shooter]);
      pivot = pickUnique(["MC", "MCD", "DFC"], "playmaker_pass", [shooter, passer]);
      supportAttacker = pickUnique(["EI", "ED", "DC", "MCO"], "poacher_run", [shooter, passer, pivot]);
    } else if (playPattern === "HIGH_PRESS_TURNOVER") {
      passer = pickUnique(["MC", "MCD", "DFC", "MCO", "EI", "ED"], "ball_winner", []);
      shooter = pickUnique(["DC", "MCO", "EI", "ED"], "finish_box", [passer]);
      pivot = pickUnique(["MC", "MCD", "EI", "ED", "MCO"], "ball_winner", [passer, shooter]);
      supportAttacker = pickUnique(["EI", "ED", "DC", "MCO"], "poacher_run", [passer, shooter, pivot]);
    } else {
      // INSIDE_FORWARD_CURLED_SHOT
      shooter = pickUnique(["EI", "ED", "MCO", "DC"], "inside_cut", []);
      passer = pickUnique(["LI", "LD", "MC", "MCO"], "overlap_fullback", [shooter]);
      pivot = pickUnique(["MCD", "MC", "DFC"], "playmaker_pass", [shooter, passer]);
      supportAttacker = pickUnique(["DC", "MCO", "ED", "EI"], "finish_box", [shooter, passer, pivot]);
    }

    // Atacantes adicionales reales en el campo para acompañar en el área con sus dorsales verdaderos
    const usedAtkIds = new Set([shooter?.id, passer?.id, pivot?.id, supportAttacker?.id]);
    const remainingAtk = fieldAtk.filter(p => !usedAtkIds.has(p.id));
    const atkBox1 = remainingAtk[0] || supportAttacker;
    const atkBox2 = remainingAtk[1] || pivot;

    // Defensores reales en el campo con sus dorsales verdaderos
    const goalkeeper = defPlayers.find(p => p.pos === "POR") || defPlayers[0];
    const fieldDef = defPlayers.filter(p => p.id !== goalkeeper.id);
    const defender = this.pickPlayerForAction(fieldDef, ["DFC", "MCD", "LD", "LI"], "ball_winner", defSide) || fieldDef[0] || defPlayers[1];
    const defender2 = this.pickPlayerForAction(fieldDef.filter(p => p.id !== defender.id), ["DFC", "LD", "LI", "MCD"], "ball_winner", defSide) || fieldDef[1] || defPlayers[2];
    const restDefs = fieldDef.filter(p => p.id !== defender.id && p.id !== defender2.id);
    const defFieldPlayers = [
      restDefs[0] || defender2,
      defender,
      defender2,
      restDefs[1] || defender,
      restDefs[2] || defender2,
      restDefs[3] || defender,
      restDefs[4] || defender2,
      restDefs[5] || defender
    ];

    const pivotRole = this.getPlayerRole(pivot, attackingSide);
    const passerRole = this.getPlayerRole(passer, attackingSide);
    const shooterRole = this.getPlayerRole(shooter, attackingSide);
    const supportRole = this.getPlayerRole(supportAttacker, attackingSide);
    const defenderRole = this.getPlayerRole(defender, defSide);

    const atk2D = isHome ? this.home2D : this.away2D;
    const def2D = isHome ? this.away2D : this.home2D;

    const passerItem = atk2D.find(p => p.player?.id === passer.id);
    const shooterItem = atk2D.find(p => p.player?.id === shooter.id);
    const defItem = def2D.find(p => p.player?.id === defender.id) || def2D.find(p => !p.isKeeper);
    const gkItem = def2D.find(p => p.isKeeper) || def2D[0];

    const fmtP = (p, role) => `${p.name} (#${p.number}${role?.tag ? ` · ${role.tag}` : ""})`;
    const fmtShort = (p) => `${p.name} (#${p.number})`;

    let chanceComment = `⚡ ¡Ocasión de peligro de ${atkTeam.shortName}!`;
    if (shooterRole && (shooterRole.tag === "Interior" || shooterRole.tag === "Desborde") && (playPattern === "INDIVIDUAL_SLALOM" || playPattern === "INSIDE_FORWARD_CURLED_SHOT")) {
      chanceComment = `🔥 ${fmtP(shooter, shooterRole)} encara a su par buscando el disparo`;
    } else if (passerRole && passerRole.tag === "Organizador") {
      chanceComment = `🧠 ${fmtP(passer, passerRole)} canaliza el juego con visión magistral`;
    } else if (passerRole && passerRole.tag === "Ofensivo") {
      chanceComment = `🚀 ${fmtP(passer, passerRole)} dobla la banda con potencia y centra`;
    } else if (passerRole && passerRole.tag === "Creativo") {
      chanceComment = `✨ ${fmtP(passer, passerRole)} inventa un pase con magia`;
    } else if (passerRole && passerRole.tag === "Desborde") {
      chanceComment = `⚡ ${fmtP(passer, passerRole)} encara en el 1 vs 1 y desborda por banda`;
    } else if (passerRole && passerRole.tag === "Falso 9") {
      chanceComment = `🧠 ${fmtP(passer, passerRole)} baja a recibir entre líneas y filtra`;
    } else if (passerRole && (passerRole.tag === "Recuperador" || passerRole.tag === "Contención")) {
      chanceComment = `💪 ${fmtP(passer, passerRole)} roba en presión alta y lanza el ataque`;
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

    const patternDescriptions = {
      TIKI_TAKA_CENTRAL: {
        buildNote: `🧠 ${fmtP(pivot, pivotRole)} combina en corto con ${fmtShort(supportAttacker)} por el eje central`,
        progAlert: ["PARED EN LA FRONTAL", `✨ ¡Pared eléctrica entre ${fmtShort(supportAttacker)} y ${fmtP(passer, passerRole)} en la media luna!`],
        progNote: `✨ ${fmtShort(passer)} tira la pared en la frontal mientras ${fmtP(shooter, shooterRole)} rompe entre centrales`,
        passAlert: ["PASE FILTRADO", `🎯 ¡Pase interior milimétrico de ${fmtShort(passer)} dejando solo a ${fmtShort(shooter)}!`],
        passNote: `🎯 Pase raso entre líneas de ${fmtShort(passer)}. ¡${fmtShort(shooter)} controla en el punto de penalti!`,
        shotNote: `⚽ ¡${fmtP(shooter, shooterRole)} define de primeras ante la salida de ${goalkeeper.name} (#${goalkeeper.number})!`
      },
      WING_CROSS_HEADER: {
        buildNote: `🔄 ${fmtP(pivot, pivotRole)} cambia la orientación en largo hacia la banda derecha`,
        progAlert: ["DESBORDE EN BANDA", `🚀 ${fmtP(passer, passerRole)} encara al lateral a toda velocidad hasta la línea de fondo`],
        progNote: `🚀 ${fmtShort(passer)} gana línea de fondo mientras ${fmtP(shooter, shooterRole)} carga el área`,
        passAlert: ["CENTRO AL ÁREA", `🎯 ¡Centro tenso con rosca de ${fmtShort(passer)} al corazón del área!`],
        passNote: `🎯 Centro medido de ${fmtShort(passer)} buscando el remate en el segundo palo`,
        shotNote: `⚽ ¡${fmtP(shooter, shooterRole)} se eleva sobre ${fmtShort(defender)} y conecta un testarazo letal!`
      },
      NEAR_WING_CUTBACK: {
        buildNote: `⚡ ${fmtP(pivot, pivotRole)} abre hacia el costado izquierdo para la subida de ${fmtShort(passer)}`,
        progAlert: ["ENCARE Y DESBORDE", `🔥 ¡${fmtP(passer, passerRole)} encara por fuera y se mete hasta la cocina por la izquierda!`],
        progNote: `🔥 ${fmtShort(passer)} desborda por el costado del área atrayendo a dos defensores`,
        passAlert: ["PASE DE LA MUERTE", `🎯 ¡Pase atrás raso de ${fmtShort(passer)} buscando la llegada en el punto de penalti!`],
        passNote: `🎯 Pase de la muerte de ${fmtShort(passer)} hacia la llegada de ${fmtP(shooter, shooterRole)}`,
        shotNote: `⚽ ¡${fmtShort(shooter)} llega en carrera y empalma de primeras a portería!`
      },
      COUNTER_THROUGH_BALL: {
        buildNote: `🏹 ¡Recuperación de ${fmtP(pivot, pivotRole)} y transición relámpago con la defensa adelantada!`,
        progAlert: ["CONTRAATAQUE VELOZ", `⚡ ${fmtP(passer, passerRole)} conduce a campo abierto con ${fmtP(shooter, shooterRole)} en ruptura`],
        progNote: `⚡ La zaga rival corre hacia atrás desesperada intentando cerrar el desmarque de ${fmtShort(shooter)}`,
        passAlert: ["BALÓN AL ESPACIO", `🎯 ¡Pase en profundidad de ${fmtShort(passer)} a la espalda de ${fmtShort(defender)}!`],
        passNote: `🎯 ¡${fmtShort(shooter)} gana la carrera al espacio y se planta en el mano a mano!`,
        shotNote: `⚽ ¡${fmtP(shooter, shooterRole)} encara al guardameta y cruza el disparo!`
      },
      INDIVIDUAL_SLALOM: {
        buildNote: `✨ ${fmtP(pivot, pivotRole)} entrega en banda para ${fmtP(shooter, shooterRole)}, que se perfila para encarar`,
        progAlert: ["ENCARE EN SLALOM", `🪄 ¡Jugada individual de ${fmtP(shooter, shooterRole)} sorteando rivales en diagonal!`],
        progNote: `🪄 ${fmtShort(shooter)} recorta en seco, tira una pared de tacón con ${fmtP(passer, passerRole)} y acelera`,
        passAlert: ["RECORTE EN LA FRONTAL", `🔥 ¡${fmtShort(shooter)} deja sentado a ${fmtShort(defender)} tras la devolución de ${fmtShort(passer)}!`],
        passNote: `🔥 Hueco abierto en la frontal tras la pared con ${fmtShort(passer)} y recorte de ${fmtShort(shooter)}`,
        shotNote: `⚽ ¡${fmtP(shooter, shooterRole)} busca la escuadra con un golpeo con rosca!`
      },
      LONG_RANGE_BOMB: {
        buildNote: `🔄 Circulación paciente de ${fmtP(pivot, pivotRole)} y ${fmtShort(supportAttacker)} frente al bloque bajo`,
        progAlert: ["BÚSQUEDA DE HUECO", `🧠 ${fmtP(passer, passerRole)} pisa el balón en tres cuartos y hunde a la defensa`],
        progNote: `🧠 La zaga se cierra en su área; ${fmtShort(passer)} prepara la dejada de cara`,
        passAlert: ["DEJADA EN LA FRONTAL", `🎯 ¡${fmtShort(passer)} toca de cara para la llegada libre de ${fmtP(shooter, shooterRole)}!`],
        passNote: `🎯 ${fmtShort(shooter)} acomoda el balón a 22 metros con ángulo de disparo`,
        shotNote: `🚀 ¡${fmtP(shooter, shooterRole)} suelta un latigazo descomunal desde fuera del área!`
      },
      FALSE_NINE_DROP_AND_SPLIT: {
        buildNote: `🧠 ${fmtP(pivot, pivotRole)} conecta entre líneas con ${fmtP(passer, passerRole)}, que baja desde la punta`,
        progAlert: ["MOVIMIENTO DE FALSO 9", `✨ ¡${fmtP(passer, passerRole)} baja a recibir a tres cuartos arrastrando al central!`],
        progNote: `✨ ${fmtShort(passer)} gira con clase mientras ${fmtP(shooter, shooterRole)} ataca en diagonal el hueco libre`,
        passAlert: ["PASE EN DIAGONAL", `🎯 ¡Asistencia magistral de ${fmtShort(passer)} al espacio que dejó en el área!`],
        passNote: `🎯 ¡${fmtP(shooter, shooterRole)} rompe en diagonal y recibe solo frente al portero!`,
        shotNote: `⚽ ¡${fmtShort(shooter)} define con frialdad al palo largo!`
      },
      OVERLAPPING_FULLBACK_CROSS: {
        buildNote: `⚡ ${fmtP(pivot, pivotRole)} recibe en banda, fija a su marcador y espera el desdoblamiento`,
        progAlert: ["DOBLADA DEL CARRILERO", `🚀 ¡${fmtP(passer, passerRole)} dobla como un avión por el carril exterior!`],
        progNote: `🚀 ${fmtShort(pivot)} filtra al espacio para la internada hasta el fondo de ${fmtShort(passer)}`,
        passAlert: ["CENTRO RASO TENSO", `🎯 ¡Centro látigo de ${fmtP(passer, passerRole)} al primer palo!`],
        passNote: `🎯 ${fmtP(shooter, shooterRole)} se anticipa a ${fmtShort(defender)} en el primer palo`,
        shotNote: `⚽ ¡${fmtShort(shooter)} desvía de primeras buscando sorprender a ${goalkeeper.name} (#${goalkeeper.number})!`
      },
      CHIPPED_PASS_OVER_DEFENSE: {
        buildNote: `🔄 ${fmtP(pivot, pivotRole)} y ${fmtShort(supportAttacker)} mueven el esférico ante la defensa cerrada`,
        progAlert: ["VISIÓN DE JUEGO", `✨ ${fmtP(passer, passerRole)} levanta la cabeza en la frontal buscando el desmarque`],
        progNote: `✨ ${fmtP(shooter, shooterRole)} amaga y arranca al límite del fuera de juego`,
        passAlert: ["PASE PICADO DE CUCHARA", `🪄 ¡Globo milimétrico de cuchara de ${fmtShort(passer)} por encima de la zaga!`],
        passNote: `🪄 El balón bombeado supera a ${fmtShort(defender)} y cae perfecto para ${fmtShort(shooter)}`,
        shotNote: `⚽ ¡${fmtP(shooter, shooterRole)} engancha una volea espectacular sin dejarla caer!`
      },
      THIRD_MAN_TRIANGLE: {
        buildNote: `🧠 ${fmtP(pivot, pivotRole)} inicia la triangulación filtrando un pase vertical al borde del área`,
        progAlert: ["JUGADA AL TERCER HOMBRE", `⚡ ¡${fmtP(passer, passerRole)} aguanta de espaldas fijando a los centrales!`],
        progNote: `⚡ ${fmtShort(passer)} protege el balón de espaldas mientras ${fmtP(shooter, shooterRole)} irrumpe desde segunda línea`,
        passAlert: ["DESCARGA DE CARA", `🎯 ¡Dejada al primer toque de ${fmtShort(passer)} para la entrada del tercer hombre!`],
        passNote: `🎯 ¡${fmtP(shooter, shooterRole)} rompe en carrera por el pasillo central con todo a favor!`,
        shotNote: `⚽ ¡${fmtShort(shooter)} fusila a portería con un derechazo potente!`
      },
      HIGH_PRESS_TURNOVER: {
        buildNote: `🔥 ¡Presión alta asfixiante! ${fmtP(pivot, pivotRole)} y ${fmtP(passer, passerRole)} acorralan la salida rival`,
        progAlert: ["ROBO EN PRESIÓN ALTA", `💪 ¡${fmtP(passer, passerRole)} anticipa y roba la cartera en zona crítica!`],
        progNote: `💪 Recuperación letal de ${fmtShort(passer)} con la defensa rival totalmente abierta`,
        passAlert: ["PASE DE CASTIGO", `🎯 ¡Asistencia rápida de ${fmtShort(passer)} dejando solo a ${fmtP(shooter, shooterRole)}!`],
        passNote: `🎯 ${fmtShort(shooter)} controla libre de marca en el corazón del área tras el robo`,
        shotNote: `⚽ ¡${fmtP(shooter, shooterRole)} no perdona y ejecuta un remate fulminante!`
      },
      INSIDE_FORWARD_CURLED_SHOT: {
        buildNote: `⚡ ${fmtP(pivot, pivotRole)} abre hacia la izquierda, donde ${fmtShort(passer)} entrega en ventaja a ${fmtShort(shooter)}`,
        progAlert: ["DIAGONAL DEL EXTREMO", `🔥 ¡${fmtP(shooter, shooterRole)} encara en banda y traza la diagonal hacia adentro!`],
        progNote: `🔥 ${fmtShort(passer)} dobla por fuera arrastrando marca y abre el pasillo central para ${fmtShort(shooter)}`,
        passAlert: ["PERFILADO A LA ESCUADRA", `🎯 ¡${fmtP(shooter, shooterRole)} se perfila en la frontal buscando el palo largo!`],
        passNote: `🎯 ${fmtShort(shooter)} supera la oposición de ${fmtShort(defender)} y arma la pierna`,
        shotNote: `🚀 ¡Disparo con rosca de ${fmtP(shooter, shooterRole)} directo al ángulo lejano!`
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
      atkBox1,
      atkBox2,
      defender,
      defender2,
      defFieldPlayers,
      goalkeeper,
      pivotRole,
      passerRole,
      shooterRole,
      supportRole,
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

    const setHlTimeout = (fn, ms) => {
      const t = setTimeout(fn, ms);
      this.highlightTimeouts.push(t);
      return t;
    };

    let hasResolved = false;
    const executeResolution = (isSkip = false) => {
      if (hasResolved) return;
      hasResolved = true;

      if (this.highlightTimeouts && this.highlightTimeouts.length > 0) {
        this.highlightTimeouts.forEach(clearTimeout);
        this.highlightTimeouts = [];
      }
      this.skipCurrentHighlight = null;

      this.stats.shots[attackingSide]++;

      if (outcome === "BLOCK") {
        this.ball.targetX = boxX + (isHome ? -3 : 3);
        this.ball.targetY = boxY + (Math.random() * 8 - 4);
        this.ball.targetZ = 1.2;
        this.triggerAlert("BLOQUEO", `🛡️ ¡Bloqueo providencial de ${defender.name}!`, isHome ? "away" : "home", isSkip ? 2000 : 3200);

        const analysis = attackingSide === this.userSide
          ? `🛡️ Disparo bloqueado por ${defender.name}. El central tapó el ángulo con una segada impecable.`
          : `🛡️ ¡Gran anticipación de tu zaga! ${defender.name} se lanzó al suelo y neutralizó el tiro.`;

        if (isSkip) {
          this.concludeHighlight({ outcome: "BLOCK", tacticalAnalysis: analysis, onComplete });
        } else {
          setHlTimeout(() => {
            this.concludeHighlight({ outcome: "BLOCK", tacticalAnalysis: analysis, onComplete });
          }, 3500);
        }
      } else if (outcome === "POST") {
        this.ball.targetX = isHome ? 99 : 1;
        this.ball.targetY = targetCorner.includes("RIGHT") ? 55.5 : 44.5;
        this.ball.targetZ = 7;
        this.triggerAlert("AL PALO", `🥅 ¡Al palo! El disparo de ${shooter.name} se estrella en la madera`, attackingSide, isSkip ? 2000 : 3200);
        const analysis = `🥅 ¡Al palo! La madera evitó el gol de ${shooter.name} tras superar al guardameta.`;

        if (isSkip) {
          this.concludeHighlight({ outcome: "POST", tacticalAnalysis: analysis, onComplete });
        } else {
          setHlTimeout(() => {
            this.concludeHighlight({ outcome: "POST", tacticalAnalysis: analysis, onComplete });
          }, 3500);
        }
      } else if (outcome === "WIDE") {
        this.ball.targetX = isHome ? 105 : -5;
        this.ball.targetY = wideDirection === "RIGHT" ? 64 : (wideDirection === "LEFT" ? 36 : 50);
        this.ball.targetZ = wideDirection === "HIGH" ? 14 : 4;
        this.triggerAlert("DISPARO FUERA", `💨 Disparo desviado de ${shooter.name}`, attackingSide, isSkip ? 1800 : 3000);
        const analysis = `💨 El remate de ${shooter.name} se marcha claramente fuera sin encontrar portería.`;

        if (isSkip) {
          this.concludeHighlight({ outcome: "WIDE", tacticalAnalysis: analysis, onComplete });
        } else {
          setHlTimeout(() => {
            this.concludeHighlight({ outcome: "WIDE", tacticalAnalysis: analysis, onComplete });
          }, 3500);
        }
      } else if (outcome === "SAVE") {
        this.stats.shotsOnTarget[attackingSide]++;
        this.ball.targetX = isHome ? 98 : 2;
        this.ball.targetY = targetCorner.includes("RIGHT") ? 54 : 46;
        this.ball.targetZ = 5;

        this.triggerAlert("PARADÓN", `🧤 ¡Paradón providencial de ${goalkeeper.name} ante ${shooter.name}! ¡Córner!`, isHome ? "away" : "home", isSkip ? 2200 : 3200);
        const analysis = attackingSide === this.userSide
          ? `🧤 ¡Paradón de ${goalkeeper.name}! Estirada espectacular desviando el tiro a saque de esquina.`
          : `🧤 ¡Intervención salvadora de ${goalkeeper.name}! Tu portero voló para desviar el balón a córner.`;

        const saveCompletion = () => {
          this.concludeHighlight({
            outcome: "SAVE",
            tacticalAnalysis: analysis,
            onComplete: () => {
              if (!this.isFinished && !this.isHalfTime && this.showKeyHighlights && !isSkip) {
                this.triggerSetPiece(attackingSide, "CORNER", null, onComplete);
              } else if (onComplete) {
                onComplete();
              }
            }
          });
        };

        if (isSkip) {
          saveCompletion();
        } else {
          setHlTimeout(saveCompletion, 3500);
        }
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

        this.triggerAlert("GOL", `⚽ ¡GOOOOOOLAZO DE ${shooter.name.toUpperCase()}! (${this.homeScore}-${this.awayScore})`, attackingSide, isSkip ? 2500 : 4500);

        const analysis = attackingSide === this.userSide
          ? `🎯 ¡Golazo! Jugada construida a la perfección y definición inapelable de ${shooter.name}.`
          : `⚠️ Despiste en la marca: ${shooter.name} aprovechó el centro y fusiló la portería.`;

        const goalCompletion = () => {
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

          if (this.onGoal) {
            this.onGoal({
              shooter,
              passer,
              attackingSide,
              concedingSide: isHome ? "away" : "home",
              atkTeam,
              defTeam,
              minute: this.minute,
              formattedMinute: this.getFormattedMinute(),
              score: `${this.homeScore} - ${this.awayScore}`,
              isSkipped: isSkip
            });
          } else if (onComplete) {
            onComplete();
          }
        };

        if (isSkip) {
          goalCompletion();
        } else {
          setHlTimeout(goalCompletion, 3500);
        }
      }
    };

    // Callback para que el usuario pueda saltar la jugada en directo en cualquier instante
    this.skipCurrentHighlight = () => {
      if (!this.isHighlightRunning) return;
      executeResolution(true);
    };

    // Si el usuario tiene desactivadas las jugadas clave (Modo rápido / Omitir):
    if (!this.showKeyHighlights) {
      if (this.onHighlightStart) {
        this.onHighlightStart({
          ...baseHighlightData,
          phase: "SHOT",
          phaseLabel: "Jugada de peligro (Modo rápido)",
          phaseDuration: 0,
          tacticalNote: pDesc.shotNote
        });
      }
      executeResolution(true);
      return;
    }

    // FASE 2: Progresión (4.5s - 8.5s)
    setHlTimeout(() => {
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
      setHlTimeout(() => {
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
        setHlTimeout(() => {
          if (!this.isRunning && !this.isHighlightRunning) return;

          if (this.onHighlightPhase) {
            this.onHighlightPhase({
              ...baseHighlightData,
              phase: "SHOT",
              phaseLabel: "Remate a portería",
              phaseDuration: 3500,
              tacticalNote: pDesc.shotNote
            });
          }

          executeResolution(false);
        }, 3000);
      }, 4000);
    }, 4500);
  }

  concludeHighlight({ outcome, tacticalAnalysis, onComplete }) {
    this.isHighlightRunning = false;
    this.speed = this.userSpeed;
    this.skipCurrentHighlight = null;
    if (this.highlightTimeouts && this.highlightTimeouts.length > 0) {
      this.highlightTimeouts.forEach(clearTimeout);
      this.highlightTimeouts = [];
    }

    if (this.onHighlightEnd) {
      this.onHighlightEnd({
        outcome,
        tacticalAnalysis,
        pauseRequested: this.pauseRequested
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
  triggerSetPiece(attackingSide, type = "CORNER", customSpotData = null, postSetPieceCallback = null) {
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

    const cornerSide = spotY < 50 ? "banda izquierda" : "banda derecha";
    const setPieceInfo = {
      type,
      attackingSide,
      atkTeam,
      defTeam,
      atkPlayers,
      defPlayers,
      spot: { x: spotX, y: spotY },
      distanceMeters,
      cornerSide,
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
        if (!this.isFinished && !this.isHalfTime) {
          if (this.pauseRequested) {
            this.pauseRequested = false;
            this.pause();
            this.triggerAlert("PAUSA", "⏸ Partido en pausa", "neutral", 2500);
            if (postSetPieceCallback) postSetPieceCallback();
            return;
          }
          if (this.isRunning) {
            this.loop();
          } else if (postSetPieceCallback) {
            postSetPieceCallback();
          }
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

    const isLeftCorner = spot.y < 50;
    const cornerSideLabel = isLeftCorner ? "banda izquierda" : "banda derecha";
    const spAlertTitle = type === "CORNER" ? `Córner (${cornerSideLabel})` : "Falta";
    this.triggerAlert("BALÓN PARADO", `⚽ ${spAlertTitle} de ${atkTeam.shortName}`, attackingSide, 2600);

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

        if (!this.isFinished && !this.isHalfTime) {
          if (this.pauseRequested) {
            this.pauseRequested = false;
            this.pause();
            this.triggerAlert("PAUSA", "⏸ Partido en pausa", "neutral", 2500);
            if (onDone) onDone();
            return;
          }
          this.isRunning = true;
          this.loop();
        }
        if (onDone) onDone();
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

  pickPlayerForAction(players, preferredPositions, actionType = "pass", side = null) {
    const nonGk = players.filter(p => p.pos !== "POR");
    const basePool = nonGk.length > 0 ? nonGk : players;
    const hasPrefPos = (p) => {
      if (preferredPositions.includes(p.pos)) return true;
      if (Array.isArray(p.secondaryPos) && p.secondaryPos.some(sp => preferredPositions.includes(sp))) return true;
      return false;
    };
    let candidates = basePool.filter(hasPrefPos);
    if (candidates.length === 0) candidates = [...basePool];

    // Ponderar candidatos según su función táctica individual (rol) y atributos
    const weights = candidates.map(p => {
      const role = this.getPlayerRole(p, side);
      const roleId = role?.id || "";
      const posBonus = hasPrefPos(p) ? 1.35 : 0.75;

      if (actionType === "finish_box" || actionType === "shoot") {
        let rMult = role?.shootWeight !== undefined ? role.shootWeight : 0.6;
        if (roleId === "st_target") rMult = 2.8;
        else if (roleId === "st_poacher" || roleId === "am_shadow_striker") rMult = 2.4;
        else if (roleId === "w_inside_forward") rMult = 1.85;
        else if (roleId === "cm_box_to_box") rMult = 1.55;
        return posBonus * rMult * Math.pow((p.sho || 70) / 72, 1.8);
      }
      if (actionType === "aerial_finish") {
        let rMult = 0.6;
        if (roleId === "st_target") rMult = 3.2;
        else if (roleId === "cm_box_to_box" || roleId === "am_shadow_striker") rMult = 1.65;
        else if (roleId === "st_poacher") rMult = 1.45;
        return posBonus * rMult * Math.pow(((p.sho || 70) + (p.phy || 70)) / 144, 1.8);
      }
      if (actionType === "poacher_run") {
        let rMult = 0.65;
        if (roleId === "st_poacher") rMult = 3.1;
        else if (roleId === "w_inside_forward" || roleId === "am_shadow_striker") rMult = 2.3;
        else if (roleId === "w_winger") rMult = 1.7;
        else if (roleId === "st_target") rMult = 1.4;
        return posBonus * rMult * Math.pow(((p.pac || 70) + (p.sho || 70)) / 144, 1.8);
      }
      if (actionType === "dribble_wing") {
        let rMult = 0.55;
        if (roleId === "w_winger") rMult = 3.3;
        else if (roleId === "w_inside_forward") rMult = 2.4;
        else if (roleId === "fb_attacking") rMult = 2.25;
        else if (roleId === "st_poacher" || roleId === "am_playmaker") rMult = 1.5;
        return posBonus * rMult * Math.pow(((p.dri || 70) + (p.pac || 70)) / 144, 1.8);
      }
      if (actionType === "inside_cut") {
        let rMult = 0.55;
        if (roleId === "w_inside_forward") rMult = 3.5;
        else if (roleId === "w_winger") rMult = 2.2;
        else if (roleId === "am_shadow_striker" || roleId === "am_playmaker") rMult = 1.95;
        else if (roleId === "st_poacher" || roleId === "st_false_nine") rMult = 1.75;
        return posBonus * rMult * Math.pow(((p.dri || 70) + (p.sho || 70)) / 144, 1.8);
      }
      if (actionType === "overlap_fullback") {
        let rMult = 0.5;
        if (roleId === "fb_attacking") rMult = 3.6;
        else if (roleId === "w_winger") rMult = 2.0;
        else if (roleId === "fb_balanced" || roleId === "cm_box_to_box") rMult = 1.4;
        return posBonus * rMult * Math.pow(((p.pac || 70) + (p.pas || 70)) / 144, 1.6);
      }
      if (actionType === "false_nine") {
        let rMult = 0.55;
        if (roleId === "st_false_nine") rMult = 3.8;
        else if (roleId === "am_playmaker") rMult = 2.6;
        else if (roleId === "cm_playmaker") rMult = 1.9;
        else if (roleId === "w_inside_forward") rMult = 1.4;
        return posBonus * rMult * Math.pow(((p.pas || 70) + (p.dri || 70)) / 144, 1.7);
      }
      if (actionType === "target_hold") {
        let rMult = 0.6;
        if (roleId === "st_target") rMult = 3.4;
        else if (roleId === "st_false_nine") rMult = 2.5;
        else if (roleId === "am_shadow_striker" || roleId === "cm_box_to_box") rMult = 1.6;
        return posBonus * rMult * Math.pow(((p.phy || 70) + (p.pas || 70)) / 144, 1.6);
      }
      if (actionType === "box_to_box_arrival") {
        let rMult = 0.6;
        if (roleId === "cm_box_to_box") rMult = 3.4;
        else if (roleId === "am_shadow_striker") rMult = 2.8;
        else if (roleId === "cm_playmaker" || roleId === "w_inside_forward") rMult = 1.7;
        else if (roleId === "st_poacher" || roleId === "st_target") rMult = 1.4;
        return posBonus * rMult * Math.pow(((p.sho || 70) + (p.phy || 70)) / 144, 1.7);
      }
      if (actionType === "ball_winner") {
        let rMult = 0.6;
        if (roleId === "cm_ball_winner") rMult = 3.4;
        else if (roleId === "dm_destroyer") rMult = 3.0;
        else if (roleId === "cb_stopper") rMult = 2.5;
        else if (roleId === "cm_box_to_box" || roleId === "w_defensive") rMult = 1.8;
        return posBonus * rMult * Math.pow(((p.def || 70) + (p.phy || 70)) / 144, 1.7);
      }
      if (actionType === "playmaker_pass" || actionType === "pass") {
        let rMult = role?.passWeight !== undefined ? role.passWeight : 0.6;
        if (roleId === "am_playmaker") rMult = 2.9;
        else if (roleId === "cm_playmaker") rMult = 2.7;
        else if (roleId === "st_false_nine") rMult = 2.5;
        else if (roleId === "dm_playmaker") rMult = 2.3;
        else if (roleId === "cb_ball_playing") rMult = 1.7;
        else if (roleId === "w_winger" || roleId === "fb_attacking") rMult = 1.45;
        return posBonus * rMult * Math.pow((p.pas || 70) / 72, 1.8);
      }
      return posBonus;
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
      const playerObj = p.player || this.homePlayersOnPitch[idx];
      if (!playerObj) return;
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
      const playerObj = p.player || this.awayPlayersOnPitch[idx];
      if (!playerObj) return;
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

