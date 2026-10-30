// Motor de simulación de partido 2D interactivo con cambios en vivo (sin comentarios de texto)

import { FORMATIONS, getRoleDetails, generateRandomInjury, getDefaultTacticalInstructions, buildOptimalLineup } from "./tactics.js";

export class MatchSimulator {
  constructor(homeTeam, awayTeam, options = {}) {
    let realHome = homeTeam;
    let realAway = awayTeam;
    let realOpts = options;

    if (homeTeam && typeof homeTeam === "object" && !awayTeam && (homeTeam.homeTeam || homeTeam.awayTeam)) {
      realOpts = homeTeam;
      realHome = homeTeam.homeTeam;
      realAway = homeTeam.awayTeam;
    }

    this.homeTeam = realHome ? JSON.parse(JSON.stringify(realHome)) : { id: "home", name: "Local", players: [] };
    this.awayTeam = realAway ? JSON.parse(JSON.stringify(realAway)) : { id: "away", name: "Visitante", players: [] };
    options = realOpts || {};

    this.minute = 0;
    this.firstHalfExtra = Math.floor(Math.random() * 5) + 1; // Descuento aleatorio 1 a 5 min en 1ª parte
    this.secondHalfExtra = Math.floor(Math.random() * 5) + 1; // Descuento aleatorio 1 a 5 min en 2ª parte
    this.halfTimeMinute = 45 + this.firstHalfExtra;
    this.maxMinutes = 90 + this.secondHalfExtra;
    this.userSpeed = options.speed || 1; // Velocidad elegida por el usuario
    this.speed = this.userSpeed;
    this.showKeyHighlights = options.showKeyHighlights !== false;
    this.highlightTimeouts = [];
    this.setPieceTimeouts = [];
    this.skipCurrentHighlight = null;
    this.isHighlightRunning = false;
    this.isSkippingToEnd = false;
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

    // Inicializar jugadores en el campo para la animación 2D según alineación óptima y formación
    const homeOpt = buildOptimalLineup(this.homeTeam, this.homeFormation);
    const awayOpt = buildOptimalLineup(this.awayTeam, this.awayFormation);

    this.homePlayersOnPitch = options.homeLineup && Array.isArray(options.homeLineup) && options.homeLineup.length === 11
      ? options.homeLineup.map(id => this.homeTeam.players.find(p => p.id === id) || (typeof id === 'object' ? id : null)).filter(Boolean)
      : homeOpt.lineup;
    this.homeBench = options.homeBench && Array.isArray(options.homeBench)
      ? options.homeBench.map(id => this.homeTeam.players.find(p => p.id === id) || (typeof id === 'object' ? id : null)).filter(Boolean)
      : homeOpt.bench;

    this.awayPlayersOnPitch = options.awayLineup && Array.isArray(options.awayLineup) && options.awayLineup.length === 11
      ? options.awayLineup.map(id => this.awayTeam.players.find(p => p.id === id) || (typeof id === 'object' ? id : null)).filter(Boolean)
      : awayOpt.lineup;
    this.awayBench = options.awayBench && Array.isArray(options.awayBench)
      ? options.awayBench.map(id => this.awayTeam.players.find(p => p.id === id) || (typeof id === 'object' ? id : null)).filter(Boolean)
      : awayOpt.bench;

    // Inicializar cómputo de minutos de partido, desgaste y valoración en vivo (Rating 1.0 - 10.0)
    const initPlayerMatchStats = (p, isStarter) => {
      p.matchMinutes = 0;
      p.matchGoals = 0;
      p.matchAssists = 0;
      p.matchSaves = 0;
      p.matchTackles = 0;
      p.matchKeyPasses = 0;
      p.matchShots = 0;
      p.matchRating = isStarter ? 6.5 : 6.0;
      p.playedInMatch = isStarter;
    };
    this.homePlayersOnPitch.forEach(p => initPlayerMatchStats(p, true));
    this.homeBench.forEach(p => initPlayerMatchStats(p, false));
    this.awayPlayersOnPitch.forEach(p => initPlayerMatchStats(p, true));
    this.awayBench.forEach(p => initPlayerMatchStats(p, false));

    // Inicializar posiciones 3D relativas (x: 0-100, y: 0-100, z: 0-25)
    this.ball = { x: 50, y: 50, z: 0, targetX: 50, targetY: 50, targetZ: 0, possession: "home" };
    this.init2DPositions();

    this.onTick = options.onTick || (() => {});
    this.onFinish = options.onFinish || (() => {});
    this.onAlert = options.onAlert || (() => {});
    this.hasCustomOnGoal = typeof options.onGoal === "function";
    this.onGoal = options.onGoal || (() => {});
    this.onHalfTime = options.onHalfTime || (() => {});
    this.hasCustomOnSub = typeof options.onSubstitution === "function";
    this.onSubstitution = options.onSubstitution || (() => {});
    this.onHighlightStart = options.onHighlightStart || (() => {});
    this.onHighlightPhase = options.onHighlightPhase || (() => {});
    this.onHighlightEnd = options.onHighlightEnd || (() => {});

    this.userSide = options.userSide || "home";
    this.aiSide = this.userSide === "home" ? "away" : "home";
    this.lastAISubMinute = 0;

    // Mejora 1: Charlas de vestuario (Pre-partido y Descanso)
    this.activeTeamTalk = null;
    this.halftimeTalkUsed = false;
    if (options.preMatchTalk) {
      this.applyTeamTalk("pre", options.preMatchTalk, true);
    }

    // Mejora 2: Gritos desde la banda en vivo (Touchline Shouts)
    this.activeShout = null;
    this.shoutCooldownUntil = 0;

    // Mejora 3: Plan de Entrenamiento Semanal del usuario
    this.weeklyTraining = options.weeklyTraining || "recovery";
    this.applyWeeklyTrainingBonuses();

    // Mejora 6: Clima dinámico del partido con efecto real en el césped y tácticas
    this.weather = this.resolveWeather(options.weather);

    this.hasCustomOnSetPiece = typeof options.onSetPiece === "function";
    this.onSetPiece = options.onSetPiece || (() => {});
    this.isSetPieceRunning = false;
    this.pauseRequested = false;

    this.onInjury = options.onInjury || (() => {});
    this.onCard = options.onCard || (() => {});
    this.matchCards = { yellows: {}, reds: {} };

    this.isHalfTime = false;
    this.halfTimeTriggered = false;
    this.isSecondHalf = false;

    // Instrucciones individuales: Marcaje al Hombre (Feature A)
    this.homeManMarking = options.homeManMarking ? JSON.parse(JSON.stringify(options.homeManMarking)) : {};
    this.awayManMarking = options.awayManMarking ? JSON.parse(JSON.stringify(options.awayManMarking)) : {};

    // Aliento de la Grada (Feature B)
    this.activeCrowdRoar = null;
    this.crowdRoarCooldownUntil = 0;
    this.crowdRoarUnlockedByHighlight = false;
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

  clearAllTimeouts() {
    if (this.loopTimeout) {
      clearTimeout(this.loopTimeout);
      this.loopTimeout = null;
    }
    if (this.highlightTimeouts && this.highlightTimeouts.length > 0) {
      this.highlightTimeouts.forEach(clearTimeout);
      this.highlightTimeouts = [];
    }
    if (this.setPieceTimeouts && this.setPieceTimeouts.length > 0) {
      this.setPieceTimeouts.forEach(clearTimeout);
      this.setPieceTimeouts = [];
    }
    this.isHighlightRunning = false;
    this.isSetPieceRunning = false;
  }

  start() {
    if (this.isSetPieceRunning || this.isHighlightRunning || this.isFinished || this.isHalfTime) return;
    if (this.isRunning) return;
    this.isRunning = true;
    this.pauseRequested = false;
    if (this.onTick) this.onTick(this.getState());

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

  // MEJORA 3: Aplicar bonificaciones del Plan de Entrenamiento Semanal al equipo del usuario (sobre la copia del partido)
  applyWeeklyTrainingBonuses() {
    const userTeamObj = this.userSide === "home" ? this.homeTeam : this.awayTeam;
    const userPitch = this.userSide === "home" ? this.homePlayersOnPitch : this.awayPlayersOnPitch;
    const userBench = this.userSide === "home" ? this.homeBench : this.awayBench;
    const allUserPlayers = Array.from(new Set([...(userTeamObj?.players || []), ...userPitch, ...userBench]));

    if (this.weeklyTraining === "recovery") {
      allUserPlayers.forEach(p => {
        p.energy = Math.min(100, (p.energy !== undefined ? p.energy : 100) + 4);
      });
    } else if (this.weeklyTraining === "finishing") {
      allUserPlayers.forEach(p => {
        if (["DC", "EI", "ED", "MCO", "MD", "MI", "MC"].includes(p.pos)) {
          p.sho = Math.min(99, (p.sho || 72) + 4);
        }
      });
    } else if (this.weeklyTraining === "defensive") {
      allUserPlayers.forEach(p => {
        if (p.pos === "POR") {
          p.par = Math.min(99, (p.par !== undefined ? p.par : (p.gks || p.ovr || 75)) + 4);
        } else if (["DFC", "LD", "LI", "MCD", "MC"].includes(p.pos)) {
          p.def = Math.min(99, (p.def || 72) + 4);
        }
      });
    }
  }

  // MEJORA 6: Resolver clima del partido y sus modificadores sobre el césped
  resolveWeather(weatherOption) {
    const catalog = {
      sunny: {
        id: "sunny",
        icon: "☀️",
        label: "Soleado · 22°C",
        pitchLabel: "Césped seco (Pase corto +4%, Calor 2ªP)",
        shortPassBonus: 0.04,
        longShotBonus: 0,
        drainModFirstHalf: 1.0,
        drainModSecondHalf: 1.05,
        highPressExtraDrain: 1.0,
        foulMod: 1.0,
        atkSharpness: 1.0
      },
      rain: {
        id: "rain",
        icon: "🌧️",
        label: "Lluvia · 13°C",
        pitchLabel: "Césped rápido (+Peligro tiros lejanos, +Desgaste presión)",
        shortPassBonus: -0.02,
        longShotBonus: 5.5,
        drainModFirstHalf: 1.04,
        drainModSecondHalf: 1.06,
        highPressExtraDrain: 1.12,
        foulMod: 1.12,
        atkSharpness: 1.02
      },
      night: {
        id: "night",
        icon: "🌙",
        label: "Noche cerrada · 16°C",
        pitchLabel: "Focos y fresco (-6% fatiga, +4% velocidad transición)",
        shortPassBonus: 0.02,
        longShotBonus: 1.5,
        drainModFirstHalf: 0.94,
        drainModSecondHalf: 0.94,
        highPressExtraDrain: 0.97,
        foulMod: 0.96,
        atkSharpness: 1.04
      }
    };

    if (weatherOption && typeof weatherOption === "object" && weatherOption.id && catalog[weatherOption.id]) {
      return { ...catalog[weatherOption.id], ...weatherOption };
    }
    if (typeof weatherOption === "string" && catalog[weatherOption]) {
      return catalog[weatherOption];
    }
    const keys = ["sunny", "night", "rain"];
    const rand = Math.random();
    const chosenKey = rand < 0.45 ? "sunny" : (rand < 0.78 ? "night" : "rain");
    return catalog[chosenKey] || keys[0];
  }

  // Ajustar valoración en vivo (1.0 a 10.0) de un futbolista
  adjustPlayerRating(player, delta) {
    if (!player) return;
    player.playedInMatch = true;
    const cur = player.matchRating !== undefined ? player.matchRating : 6.5;
    player.matchRating = Math.round(Math.max(3.5, Math.min(10.0, cur + delta)) * 10) / 10;
  }

  // MEJORA 1: Aplicar charla de vestuario (Pre-partido o Descanso) con efecto real según contexto
  applyTeamTalk(phase = "pre", talkId = "confidence", silent = false) {
    const userPitch = this.userSide === "home" ? this.homePlayersOnPitch : this.awayPlayersOnPitch;
    const userScore = this.userSide === "home" ? this.homeScore : this.awayScore;
    const oppScore = this.userSide === "home" ? this.awayScore : this.homeScore;
    const diff = userScore - oppScore;

    let talkData = {
      id: talkId,
      phase,
      label: "Confianza Plena",
      icon: "💪",
      atkMod: 1.0,
      midMod: 1.0,
      defMod: 1.0,
      foulMod: 1.0,
      drainMod: 1.0,
      expiresAtMinute: phase === "pre" ? 28 : 75,
      feedback: "El vestuario asiente con motivación."
    };

    if (phase === "pre") {
      if (talkId === "passionate") {
        talkData = {
          id: "passionate",
          phase: "pre",
          label: "¡Salid a morder!",
          icon: "🔥",
          atkMod: 1.09,
          midMod: 1.06,
          defMod: 0.98,
          foulMod: 1.15,
          drainMod: 1.05,
          expiresAtMinute: 28,
          feedback: "🔥 ¡El equipo sale enchufadísimo! (+9% Ataque y +6% Medular en el arranque)"
        };
        userPitch.forEach(p => this.adjustPlayerRating(p, 0.1));
      } else if (talkId === "tactical") {
        talkData = {
          id: "tactical",
          phase: "pre",
          label: "Orden y Concentración",
          icon: "🧠",
          atkMod: 1.0,
          midMod: 1.06,
          defMod: 1.09,
          foulMod: 0.85,
          drainMod: 0.96,
          expiresAtMinute: 32,
          feedback: "🧠 Bloques juntos y máxima concentración (+9% Defensa y +6% Control)"
        };
        userPitch.forEach(p => this.adjustPlayerRating(p, 0.1));
      } else if (talkId === "calm") {
        talkData = {
          id: "calm",
          phase: "pre",
          label: "Cabeza Fría / Sin Presión",
          icon: "🧊",
          atkMod: 1.02,
          midMod: 1.04,
          defMod: 1.05,
          foulMod: 0.65,
          drainMod: 0.92,
          expiresAtMinute: 35,
          feedback: "🧊 Jugadores tranquilos: -35% riesgo de faltas/tarjetas y ahorro físico"
        };
      } else {
        // confidence
        talkData = {
          id: "confidence",
          phase: "pre",
          label: "Confianza Plena",
          icon: "💪",
          atkMod: 1.05,
          midMod: 1.05,
          defMod: 1.05,
          foulMod: 0.95,
          drainMod: 1.0,
          expiresAtMinute: 30,
          feedback: "💪 Moral alta en el once titular (+5% global en todas las líneas)"
        };
        userPitch.forEach(p => this.adjustPlayerRating(p, 0.15));
      }
    } else {
      // Descanso (contextual según el marcador)
      this.halftimeTalkUsed = true;
      if (talkId === "aggressive") {
        if (diff <= 0) {
          talkData = {
            id: "aggressive",
            phase: "ht",
            label: "Bronca / Exigir Reacción",
            icon: "😡",
            atkMod: 1.13,
            midMod: 1.09,
            defMod: 1.03,
            foulMod: 1.12,
            drainMod: 1.04,
            expiresAtMinute: 76,
            feedback: "😡 ¡El vestuario reacciona con orgullo herido! (+13% Ataque, +9% Medular y +3% Energía)"
          };
          userPitch.forEach(p => {
            p.energy = Math.min(100, (p.energy || 75) + 3);
            this.adjustPlayerRating(p, 0.15);
          });
        } else {
          talkData = {
            id: "aggressive",
            phase: "ht",
            label: "Bronca Innecesaria",
            icon: "😡",
            atkMod: 0.95,
            midMod: 0.96,
            defMod: 0.97,
            foulMod: 1.25,
            drainMod: 1.05,
            expiresAtMinute: 70,
            feedback: "⚠️ Los jugadores no entienden la bronca ganando el partido (-4% precisión y más nervios)"
          };
          userPitch.forEach(p => this.adjustPlayerRating(p, -0.1));
        }
      } else if (talkId === "encourage") {
        const boost = diff < 0 ? 1.11 : (diff === 0 ? 1.08 : 1.05);
        talkData = {
          id: "encourage",
          phase: "ht",
          label: "¡Creer en la Victoria!",
          icon: "🔥",
          atkMod: boost,
          midMod: 1.06,
          defMod: 1.04,
          foulMod: 0.95,
          drainMod: 1.0,
          expiresAtMinute: 78,
          feedback: diff < 0
            ? "🔥 ¡Conjura de remontada en el vestuario! (+11% Ataque y fe ciega)"
            : "🔥 ¡El equipo sale enchufado a por más goles en la 2ª mitad! (+8% empuje)"
        };
        userPitch.forEach(p => this.adjustPlayerRating(p, 0.15));
      } else if (talkId === "praise") {
        if (diff > 0) {
          talkData = {
            id: "praise",
            phase: "ht",
            label: "Elogiar el Gran Trabajo",
            icon: "👏",
            atkMod: 1.06,
            midMod: 1.08,
            defMod: 1.08,
            foulMod: 0.85,
            drainMod: 0.95,
            expiresAtMinute: 80,
            feedback: "👏 ¡Moral por las nubes! El equipo se siente invencible (+8% Control y Defensa)"
          };
          userPitch.forEach(p => this.adjustPlayerRating(p, 0.2));
        } else {
          talkData = {
            id: "praise",
            phase: "ht",
            label: "Elogio Complaciente",
            icon: "👏",
            atkMod: 0.97,
            midMod: 0.98,
            defMod: 0.97,
            foulMod: 0.95,
            drainMod: 0.96,
            expiresAtMinute: 70,
            feedback: "😐 Elogiar sin ir ganando relaja en exceso a algunos jugadores (-3% intensidad)"
          };
        }
      } else if (talkId === "calm_control") {
        talkData = {
          id: "calm_control",
          phase: "ht",
          label: "Cabeza Fría y Cerrar Espacios",
          icon: "🧊",
          atkMod: 0.98,
          midMod: 1.06,
          defMod: 1.10,
          foulMod: 0.60,
          drainMod: 0.90,
          expiresAtMinute: 82,
          feedback: "🧊 Máxima disciplina táctica: +10% Defensa y -40% riesgo de tarjetas"
        };
        userPitch.forEach(p => this.adjustPlayerRating(p, 0.1));
      }
    }

    this.activeTeamTalk = talkData;
    if (!silent && !this.isSkippingToEnd) {
      this.triggerAlert("VESTUARIO", talkData.feedback, this.userSide, 3600);
    }
    if (this.onTick) this.onTick(this.getState());
    return talkData;
  }

  // MEJORA 2: Órdenes rápidas de banda (Gritos desde el banquillo en vivo)
  triggerShout(shoutId) {
    if (this.isFinished || this.isHalfTime) {
      return { success: false, reason: "El balón no está en juego." };
    }
    if (this.minute < this.shoutCooldownUntil) {
      const waitMins = this.shoutCooldownUntil - this.minute;
      return { success: false, reason: `Espera ${waitMins} min para dar otra orden desde la banda.` };
    }

    const duration = 12; // 12 minutos de efecto activo
    const cooldown = 10; // 10 minutos de enfriamiento tras usarse (o total desde activación: 10 min)
    const expiresAt = Math.min(this.maxMinutes, this.minute + duration);
    this.shoutCooldownUntil = this.minute + 10;

    const catalog = {
      CROSS_BOX: {
        id: "CROSS_BOX",
        label: "¡Colgad balones!",
        icon: "📢",
        atkMod: 1.11,
        midMod: 1.02,
        defMod: 0.96,
        foulMod: 1.0,
        drainMod: 1.04,
        possBonus: 0,
        alertText: "📢 ¡Orden desde la banda: «¡Colgad balones al área!» (+Centros y remate durante 12')"
      },
      SHOOT_ON_SIGHT: {
        id: "SHOOT_ON_SIGHT",
        label: "¡Tirad a puerta!",
        icon: "🚀",
        atkMod: 1.13,
        midMod: 1.0,
        defMod: 0.97,
        foulMod: 1.0,
        drainMod: 1.03,
        possBonus: -0.02,
        alertText: "🚀 ¡Orden desde la banda: «¡Disparad en cuanto podáis!» (+Tiros y peligro durante 12')"
      },
      EASY_TACKLES: {
        id: "EASY_TACKLES",
        label: "¡Cuidado entradas!",
        icon: "🛡️",
        atkMod: 0.97,
        midMod: 1.03,
        defMod: 1.08,
        foulMod: 0.45,
        drainMod: 0.94,
        possBonus: 0,
        alertText: "🛡️ ¡Orden desde la banda: «¡Sin faltas, aguantad de pie!» (-55% faltas/tarjetas y +8% Defensa)"
      },
      WASTE_TIME: {
        id: "WASTE_TIME",
        label: "¡Dormid el balón!",
        icon: "⏱️",
        atkMod: 0.86,
        midMod: 1.10,
        defMod: 1.09,
        foulMod: 0.85,
        drainMod: 0.86,
        possBonus: 0.09,
        alertText: "⏱️ ¡Orden desde la banda: «¡Dormid el partido, posesiones largas!» (+Posesión y cerrojo durante 12')"
      }
    };

    const chosen = catalog[shoutId];
    if (!chosen) return { success: false, reason: "Orden no reconocida" };

    this.activeShout = {
      ...chosen,
      startedAtMinute: this.minute,
      expiresAtMinute: expiresAt
    };

    this.triggerAlert("BANDA", chosen.alertText, this.userSide, 3400);
    if (this.onTick) this.onTick(this.getState());
    return { success: true, shout: this.activeShout };
  }

  // FEATURE B: Pedir el Aliento de la Grada (Factor Campo Local para Remontar)
  triggerCrowdRoar() {
    if (this.isFinished || this.isHalfTime) {
      return { success: false, reason: "El partido está detenido." };
    }
    if (this.userSide !== "home") {
      return { success: false, reason: "Solo puedes pedir el aliento del estadio cuando juegas en casa como local." };
    }
    if (this.homeScore > this.awayScore) {
      return { success: false, reason: "Tu equipo va ganando el partido; la afición ya está satisfecha y en fiesta." };
    }
    if (this.activeCrowdRoar) {
      const left = Math.max(1, this.activeCrowdRoar.expiresAtMinute - this.minute);
      return { success: false, reason: `¡La grada ya está ruge al máximo animando al equipo (${left} min restantes)!` };
    }
    const isCooldown = this.minute < this.crowdRoarCooldownUntil;
    if (isCooldown && !this.crowdRoarUnlockedByHighlight) {
      const wait = this.crowdRoarCooldownUntil - this.minute;
      return { success: false, reason: `La grada recupera el aliento. Podrás activarla en ${wait} min o tras una jugada clave.` };
    }

    // Activar aliento durante 10 minutos con un plus comedido (+0.4%, strictly <= 0.5%)
    this.activeCrowdRoar = {
      startedAtMinute: this.minute,
      expiresAtMinute: Math.min(this.maxMinutes, this.minute + 10),
      boostPct: 0.004
    };
    this.crowdRoarCooldownUntil = this.minute + 15;
    this.crowdRoarUnlockedByHighlight = false;

    // Apenas un ligero chispazo de concentración anímica
    this.homePlayersOnPitch.forEach(p => {
      p.energy = Math.min(100, (p.energy || 75) + 0.1);
    });

    this.triggerAlert("GRADA", "🏟️ ¡El estadio empuja con su aliento al equipo! (+0.4% aliento)", "home", 3800);
    if (this.onTick) this.onTick(this.getState());
    return { success: true, activeCrowdRoar: this.activeCrowdRoar };
  }

  // FEATURE A: Asignar o modificar marcaje al hombre individual
  setManMarking(side, markerId, targetId, intensity = "tight") {
    const isHome = side === "home";
    const markingMap = isHome ? this.homeManMarking : this.awayManMarking;
    if (!markingMap) return false;

    if (!targetId || intensity === "none") {
      delete markingMap[markerId];
    } else {
      markingMap[markerId] = {
        targetId,
        intensity: ["light", "tight", "aggressive"].includes(intensity) ? intensity : "tight"
      };
    }
    return true;
  }

  // Obtener marcaje activo de un marcador si ambos jugadores están en el campo
  getActiveMarkingForMarker(side, markerId) {
    const isHome = side === "home";
    const markingMap = isHome ? this.homeManMarking : this.awayManMarking;
    const task = markingMap ? markingMap[markerId] : null;
    if (!task || !task.targetId) return null;

    const myPitch = isHome ? this.homePlayersOnPitch : this.awayPlayersOnPitch;
    const oppPitch = isHome ? this.awayPlayersOnPitch : this.homePlayersOnPitch;

    const markerOnPitch = myPitch.some(p => p.id === markerId);
    const targetOnPitch = oppPitch.some(p => p.id === task.targetId);

    if (markerOnPitch && targetOnPitch) {
      return {
        markerId,
        targetId: task.targetId,
        intensity: task.intensity || "tight"
      };
    }
    return null;
  }

  // Obtener todos los marcadores rivales que están vigilando a un jugador objetivo
  getActiveMarkersOnTarget(targetSide, targetId) {
    const targetIsHome = targetSide === "home";
    const oppSide = targetIsHome ? "away" : "home";
    const oppMarkingMap = targetIsHome ? this.awayManMarking : this.homeManMarking;
    if (!oppMarkingMap) return [];

    const oppPitch = targetIsHome ? this.awayPlayersOnPitch : this.homePlayersOnPitch;
    const myPitch = targetIsHome ? this.homePlayersOnPitch : this.awayPlayersOnPitch;

    const targetOnPitch = myPitch.some(p => p.id === targetId);
    if (!targetOnPitch) return [];

    const activeMarkers = [];
    for (const markerId in oppMarkingMap) {
      const task = oppMarkingMap[markerId];
      if (task && task.targetId === targetId) {
        if (oppPitch.some(p => p.id === markerId)) {
          activeMarkers.push({
            markerId,
            targetId,
            intensity: task.intensity || "tight"
          });
        }
      }
    }
    return activeMarkers;
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

    if (inPlayer.injury) {
      return { success: false, reason: `${inPlayer.name} está lesionado y no puede entrar al campo.` };
    }
    if (inPlayer.suspension && inPlayer.suspension.roundsLeft > 0) {
      return { success: false, reason: `${inPlayer.name} está sancionado y no puede entrar al campo.` };
    }
    if (inPlayer.subbedOut) {
      return { success: false, reason: `${inPlayer.name} ya fue sustituido anteriormente en este partido.` };
    }

    outPlayer.subbedOut = true;
    inPlayer.playedInMatch = true;
    if (!inPlayer.matchRating || inPlayer.matchRating < 6.5) inPlayer.matchRating = 6.5;

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
  applyTacticalChanges(teamSide, newFormationKey, newMentality, newLineupPlayerIds, newBenchPlayerIds, isHalfTime = false, newPlayerRoles = null, newCustomPositions = null, newManMarking = null) {
    const isHome = teamSide === "home";
    const currentPitch = isHome ? this.homePlayersOnPitch : this.awayPlayersOnPitch;
    const currentPitchIds = currentPitch.map(p => p.id);
    const remaining = isHome ? this.homeSubsRemaining : this.awaySubsRemaining;
    const remainingWindows = isHome ? this.homeWindowsRemaining : this.awayWindowsRemaining;

    if (newCustomPositions) {
      if (isHome) this.homeCustomPositions = newCustomPositions;
      else this.awayCustomPositions = newCustomPositions;
    }

    if (newManMarking !== null && typeof newManMarking === "object") {
      if (isHome) this.homeManMarking = JSON.parse(JSON.stringify(newManMarking));
      else this.awayManMarking = JSON.parse(JSON.stringify(newManMarking));
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

    for (const inId of subsInIds) {
      const inP = allTeamPlayers.find(p => p.id === inId);
      if (inP?.injury) {
        return { success: false, reason: `${inP.name} está lesionado y no puede saltar al terreno de juego.` };
      }
      if (inP?.suspension && inP.suspension.roundsLeft > 0) {
        return { success: false, reason: `${inP.name} está sancionado y no puede saltar al terreno de juego.` };
      }
      if (inP?.subbedOut) {
        return { success: false, reason: `${inP.name} ya ha sido sustituido en este partido y no puede volver a entrar.` };
      }
    }

    const newPitch = newLineupPlayerIds.map(id => allTeamPlayers.find(p => p.id === id)).filter(Boolean);
    const newBench = newBenchPlayerIds.map(id => allTeamPlayers.find(p => p.id === id)).filter(Boolean);

    const expectedPitchCount = currentPitch.length || 11;
    if (newPitch.length !== expectedPitchCount) {
      return {
        success: false,
        reason: expectedPitchCount === 11
          ? "La alineación debe contar exactamente con 11 futbolistas."
          : `La alineación debe mantener los ${expectedPitchCount} futbolistas disponibles en el campo.`
      };
    }

    // Registrar parejas de cambio para rótulos y estadísticas
    const subsPairs = [];
    for (let i = 0; i < subsInIds.length; i++) {
      const inP = allTeamPlayers.find(p => p.id === subsInIds[i]);
      const outP = allTeamPlayers.find(p => p.id === subsOutIds[i]);
      if (outP) outP.subbedOut = true;
      if (inP) {
        inP.playedInMatch = true;
        if (!inP.matchRating || inP.matchRating < 6.5) inP.matchRating = 6.5;
      }
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

    // Limpiar marcajes de futbolistas que salen sustituidos
    if (subsOutIds.length > 0) {
      const activeMarking = isHome ? this.homeManMarking : this.awayManMarking;
      if (activeMarking) {
        subsOutIds.forEach(outId => {
          delete activeMarking[outId];
        });
      }
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
      if (res.success && !this.isSkippingToEnd && this.hasCustomOnSub) {
        this.pause();
        this.onSubstitution({
          teamSide: this.aiSide,
          team: this.aiSide === "home" ? this.homeTeam : this.awayTeam,
          subs: [{ outPlayer: res.outPlayer, inPlayer: res.inPlayer }],
          minute: this.minute,
          remaining: this.aiSide === "home" ? this.homeSubsRemaining : this.awaySubsRemaining
        });
        return true;
      }
    }
    return false;
  }

  // Activar lesión de un jugador durante el partido por fatiga, lance o falta
  triggerPlayerInjury(player, teamSide, cause = "random") {
    if (!player || player.injury) return false;

    const injuryData = generateRandomInjury(cause);
    player.injury = injuryData;
    player.energy = Math.max(10, (player.energy || 50) - 28);

    const teamObj = teamSide === "home" ? this.homeTeam : this.awayTeam;
    if (!this.isSkippingToEnd) {
      const alertMsg = `${injuryData.icon} ¡LESIÓN! ${player.name} (${injuryData.type}) - ${injuryData.roundsLeft}j de baja`;
      this.triggerAlert("LESIÓN", alertMsg, teamSide, 5000);
    }

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
      team: teamObj,
      isSkippingToEnd: this.isSkippingToEnd
    });

    // Si es el equipo de la IA rival (o si estamos saltando al final), gestionar sustitución inmediata de emergencia
    if (teamSide === this.aiSide || this.isSkippingToEnd) {
      return this.handleAIInjurySub(player, teamSide);
    }
    return !this.isRunning;
  }

  // Sustitución forzosa por lesión para el equipo IA
  handleAIInjurySub(injuredPlayer, teamSide) {
    const isHome = teamSide === "home";
    const remaining = isHome ? this.homeSubsRemaining : this.awaySubsRemaining;
    const remainingWindows = isHome ? this.homeWindowsRemaining : this.awayWindowsRemaining;
    const aiBenchRaw = isHome ? this.homeBench : this.awayBench;
    const aiBench = (aiBenchRaw || []).filter(p => !p.injury && !(p.suspension && p.suspension.roundsLeft > 0) && !p.subbedOut);

    if (remaining <= 0 || remainingWindows <= 0 || aiBench.length === 0) return false;

    const samePos = aiBench.filter(p => p.pos === injuredPlayer.pos);
    let candidate = null;
    if (samePos.length > 0) {
      candidate = samePos.sort((a, b) => (b.ovr || 70) - (a.ovr || 70))[0];
    } else {
      candidate = aiBench.filter(p => p.pos !== "POR").sort((a, b) => (b.ovr || 70) - (a.ovr || 70))[0] || aiBench[0];
    }

    if (candidate) {
      const res = this.makeSubstitution(teamSide, injuredPlayer.id, candidate.id, this.isHalfTime);
      if (res.success && !this.isSkippingToEnd && this.hasCustomOnSub) {
        this.pause();
        this.onSubstitution({
          teamSide,
          team: teamSide === "home" ? this.homeTeam : this.awayTeam,
          subs: [{ outPlayer: res.outPlayer, inPlayer: res.inPlayer }],
          minute: this.minute,
          remaining: res.remaining,
          forcedInjury: true
        });
        return true;
      }
    }
    return false;
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
    if (this.isSkippingToEnd) {
      this.isSetPieceRunning = false;
      this.isHighlightRunning = false;
    } else if (this.isSetPieceRunning) {
      return false;
    }

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

    // Modificadores de fatiga según ritmo, presión táctica y clima del partido (Mejora 6)
    const w = this.weather || { drainModFirstHalf: 1.0, drainModSecondHalf: 1.0, highPressExtraDrain: 1.0 };
    const weatherHalfDrain = this.isSecondHalf ? (w.drainModSecondHalf || 1.0) : (w.drainModFirstHalf || 1.0);
    const homePressMod = this.homeInstructions?.outOfPossession?.pressing === "high" ? (1.18 * (w.highPressExtraDrain || 1.0)) : (this.homeInstructions?.outOfPossession?.pressing === "low" ? 0.82 : 1.0);
    const homeTempoMod = this.homeInstructions?.inPossession?.tempo === "fast" ? 1.12 : (this.homeInstructions?.inPossession?.tempo === "slow" ? 0.88 : 1.0);
    const awayPressMod = this.awayInstructions?.outOfPossession?.pressing === "high" ? (1.18 * (w.highPressExtraDrain || 1.0)) : (this.awayInstructions?.outOfPossession?.pressing === "low" ? 0.82 : 1.0);
    const awayTempoMod = this.awayInstructions?.inPossession?.tempo === "fast" ? 1.12 : (this.awayInstructions?.inPossession?.tempo === "slow" ? 0.88 : 1.0);

    // Expiración de charlas de vestuario y gritos de banda activos
    if (this.activeTeamTalk && this.minute > this.activeTeamTalk.expiresAtMinute) {
      this.activeTeamTalk = null;
    }
    if (this.activeShout && this.minute > this.activeShout.expiresAtMinute) {
      this.activeShout = null;
    }

    const userDrainTalkMod = (this.activeTeamTalk ? this.activeTeamTalk.drainMod : 1.0) * (this.activeShout ? this.activeShout.drainMod : 1.0) * (this.weeklyTraining === "recovery" ? 0.93 : 1.0);
    const homeTalkDrain = (this.userSide === "home" ? userDrainTalkMod : 1.0) * weatherHalfDrain;
    const awayTalkDrain = (this.userSide === "away" ? userDrainTalkMod : 1.0) * weatherHalfDrain * 1.002; // Factor campo sutil: el visitante acusa levemente el viaje (+0.2%)

    // Desgaste físico gradual y acumulación de minutos según atributos físicos (PHY), media (OVR), posición, mentalidad y estilo táctico
    this.homePlayersOnPitch.forEach(p => {
      p.matchMinutes = (p.matchMinutes || 0) + 1;
      p.playedInMatch = true;
      const isGK = p.pos === "POR";
      const phyFactor = (120 - Math.min(95, Math.max(45, (p.phy || 70)))) / 50;
      const ovrFactor = 0.95 - (Math.max(65, Math.min(95, (p.ovr || 70))) - 65) * 0.005; // Mayor media resiste mejor el esfuerzo
      const rate = isGK ? 0.04 : (0.28 * phyFactor * ovrFactor * homeMod.drain * homePressMod * homeTempoMod * homeTalkDrain);
      p.energy = Math.max(25, (p.energy || 100) - rate);
      if (this.minute % 18 === 0 && Math.random() < 0.45) {
        this.adjustPlayerRating(p, 0.1);
      }
    });

    this.awayPlayersOnPitch.forEach(p => {
      p.matchMinutes = (p.matchMinutes || 0) + 1;
      p.playedInMatch = true;
      const isGK = p.pos === "POR";
      const phyFactor = (120 - Math.min(95, Math.max(45, (p.phy || 70)))) / 50;
      const ovrFactor = 0.95 - (Math.max(65, Math.min(95, (p.ovr || 70))) - 65) * 0.005;
      const rate = isGK ? 0.04 : (0.28 * phyFactor * ovrFactor * awayMod.drain * awayPressMod * awayTempoMod * awayTalkDrain);
      p.energy = Math.max(25, (p.energy || 100) - rate);
      if (this.minute % 18 === 0 && Math.random() < 0.45) {
        this.adjustPlayerRating(p, 0.1);
      }
    });

    // Comprobación de riesgo de lesión por acumulación de minutos y fatiga física (< 58% energía)
    let injuryInterrupted = false;
    const checkFatigueInjury = (player, teamSide) => {
      if (injuryInterrupted || player.injury || player.pos === "POR") return;
      const energy = player.energy !== undefined ? player.energy : 100;
      if (energy < 58) {
        const fatigueRisk = (58 - energy) / 100;
        const phyFactor = Math.max(0.5, (player.phy || 70) / 100);
        const trainingMod = (teamSide === this.userSide && this.weeklyTraining === "recovery") ? 0.65 : 1.0;
        const chance = ((fatigueRisk * 0.0032) / phyFactor) * trainingMod;
        if (Math.random() < chance) {
          if (this.triggerPlayerInjury(player, teamSide, "fatigue")) {
            injuryInterrupted = true;
          }
        }
      }
    };
    this.homePlayersOnPitch.forEach(p => checkFatigueInjury(p, "home"));
    this.awayPlayersOnPitch.forEach(p => checkFatigueInjury(p, "away"));
    if (injuryInterrupted && !this.isSkippingToEnd) {
      this.update2DPositions();
      return true;
    }

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

    // Factor Campo: El equipo local cuenta con un sutil empuje ambiental base (+0.2 ATA / +0.2 DEF)
    const homeAtk = (this.calcTeamPower(this.homePlayersOnPitch, "atk", "home") + 0.2) * (homeMod.atk + homeAtkBonus);
    const homeDef = (this.calcTeamPower(this.homePlayersOnPitch, "def", "home") + 0.2) * (homeMod.def + homeDefBonus);
    const awayAtk = this.calcTeamPower(this.awayPlayersOnPitch, "atk", "away") * (awayMod.atk + awayAtkBonus);
    const awayDef = this.calcTeamPower(this.awayPlayersOnPitch, "def", "away") * (awayMod.def + awayDefBonus);

    // Disputa de la posesión con impacto de estilo de pase, presión alta y sutil factor campo en la medular (+0.1)
    const midHome = this.calcTeamPower(this.homePlayersOnPitch, "mid", "home") + 0.1;
    const midAway = this.calcTeamPower(this.awayPlayersOnPitch, "mid", "away");

    const wShortBonus = this.weather?.shortPassBonus || 0;
    let possModHome = 0;
    if (this.homeInstructions?.inPossession?.passingStyle === "short") possModHome += (0.06 + wShortBonus);
    else if (this.homeInstructions?.inPossession?.passingStyle === "direct") possModHome -= 0.05;
    if (this.homeInstructions?.outOfPossession?.pressing === "high") possModHome += 0.04;

    let possModAway = 0;
    if (this.awayInstructions?.inPossession?.passingStyle === "short") possModAway += (0.06 + wShortBonus);
    else if (this.awayInstructions?.inPossession?.passingStyle === "direct") possModAway -= 0.05;
    if (this.awayInstructions?.outOfPossession?.pressing === "high") possModAway += 0.04;

    if (this.activeShout && this.activeShout.possBonus) {
      if (this.userSide === "home") possModHome += this.activeShout.possBonus;
      else possModAway += this.activeShout.possBonus;
    }

    // Ventaja base ambiental del estadio local en posesión (+0.4% comedido, strictly <= 0.5%)
    const probHomePoss = Math.max(0.20, Math.min(0.80, (midHome / (midHome + midAway)) + 0.004 + possModHome - possModAway));

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

      // Ocasión de ataque local (con sutil arreón final de la afición local si empata o pierde en el tramo final: +0.3%, strictly <= 0.5%)
      const lateHomeSurge = (this.minute >= 70 && this.homeScore <= this.awayScore) ? 0.003 : 0;
      let homeChanceMult = 0.165 + lateHomeSurge;
      if (this.minute <= 25) homeChanceMult *= 0.85; // Orden táctico, rigor defensivo y máxima energía inicial
      const leadDiffHome = this.homeScore - this.awayScore;
      if (leadDiffHome >= 3) homeChanceMult *= 0.35; // Freno natural a goleadas desorbitadas (6-0)
      else if (leadDiffHome >= 2) homeChanceMult *= 0.60;

      if (this.activeShout) {
        if (this.userSide === "home" && this.activeShout.id === "SHOOT_ON_SIGHT") homeChanceMult *= 1.15;
        else if (this.userSide === "home" && this.activeShout.id === "WASTE_TIME") homeChanceMult *= 0.72;
        else if (this.userSide === "away" && this.activeShout.id === "WASTE_TIME") homeChanceMult *= 0.75;
      }
      const attackScore = (homeAtk / (homeAtk + awayDef)) * homeChanceMult;
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
        return !this.isSkippingToEnd;
      } else if (chanceRoll < attackScore + 0.025) {
        // Balón parado (Córner o Falta peligrosa calibrado a ritmo real de partido)
        const isCorner = Math.random() < 0.65;
        if (this.triggerSetPiece("home", isCorner ? "CORNER" : "FREE_KICK")) {
          return true;
        }
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

      let awayChanceMult = 0.155;
      if (this.minute <= 25) awayChanceMult *= 0.85; // Orden táctico, rigor defensivo y máxima energía inicial
      const leadDiffAway = this.awayScore - this.homeScore;
      if (leadDiffAway >= 3) awayChanceMult *= 0.35; // Freno natural a goleadas desorbitadas
      else if (leadDiffAway >= 2) awayChanceMult *= 0.60;

      if (this.activeShout) {
        if (this.userSide === "away" && this.activeShout.id === "SHOOT_ON_SIGHT") awayChanceMult *= 1.15;
        else if (this.userSide === "away" && this.activeShout.id === "WASTE_TIME") awayChanceMult *= 0.72;
        else if (this.userSide === "home" && this.activeShout.id === "WASTE_TIME") awayChanceMult *= 0.75;
      }
      const attackScore = (awayAtk / (awayAtk + homeDef)) * awayChanceMult;
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
        return !this.isSkippingToEnd;
      } else if (chanceRoll < attackScore + 0.025) {
        // Balón parado (Córner o Falta peligrosa calibrado a ritmo real de partido)
        const isCorner = Math.random() < 0.65;
        if (this.triggerSetPiece("away", isCorner ? "CORNER" : "FREE_KICK")) {
          return true;
        }
      } else {
        this.ball.targetZ = Math.random() < 0.3 ? 4 + Math.random() * 6 : 0;
      }
    }

    // Posibles faltas y tarjetas (afectadas por la intensidad de presión y estado del césped por clima)
    const baseFoulChance = 0.065 * (this.weather?.foulMod || 1.0);
    const pressingHome = this.homeInstructions?.outOfPossession?.pressing || "mid";
    const pressingAway = this.awayInstructions?.outOfPossession?.pressing || "mid";
    const pressFoulMod = (pressingHome === "high" || pressingAway === "high") ? 1.30 : ((pressingHome === "low" && pressingAway === "low") ? 0.65 : 1.0);

    if (Math.random() < baseFoulChance * pressFoulMod) {
      const foulTeam = Math.random() > 0.5 ? "home" : "away";
      const userFoulMod = (this.activeTeamTalk ? this.activeTeamTalk.foulMod : 1.0) * (this.activeShout ? this.activeShout.foulMod : 1.0);
      if (foulTeam === this.userSide && userFoulMod < 1.0 && Math.random() > userFoulMod) {
        // El jugador frena la entrada a tiempo gracias a la charla / orden de banda
        this.update2DPositions();
        return false;
      }
      this.stats.fouls[foulTeam]++;
      const victimTeam = foulTeam === "home" ? "away" : "home";
      const foulTeamObj = foulTeam === "home" ? this.homeTeam : this.awayTeam;
      const foulPitch = foulTeam === "home" ? this.homePlayersOnPitch : this.awayPlayersOnPitch;
      const foulCandidates = foulPitch.filter(p => p.pos !== "POR");
      const committingPlayer = foulCandidates.length > 0
        ? foulCandidates[Math.floor(Math.random() * foulCandidates.length)]
        : foulPitch[0];

      const cardMod = foulTeam === this.userSide ? userFoulMod : 1.0;
      const isDirectRed = Math.random() < (0.015 * cardMod);
      const isYellow = !isDirectRed && Math.random() < (0.22 * cardMod);

      if (isDirectRed && committingPlayer) {
        this.adjustPlayerRating(committingPlayer, -1.5);
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
          this.adjustPlayerRating(committingPlayer, -1.2);
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
          this.adjustPlayerRating(committingPlayer, -0.4);
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
      let foulInjuryPaused = false;
      if (Math.random() < injuryFoulChance) {
        const victimPitch = victimTeam === "home" ? this.homePlayersOnPitch : this.awayPlayersOnPitch;
        const eligible = victimPitch.filter(p => !p.injury);
        if (eligible.length > 0) {
          const victim = eligible[Math.floor(Math.random() * eligible.length)];
          foulInjuryPaused = this.triggerPlayerInjury(victim, victimTeam, "foul");
        }
      }

      if (foulInjuryPaused && !this.isSkippingToEnd) {
        this.update2DPositions();
        return true;
      }

      if (Math.random() < 0.40 && !this.isHighlightRunning && !this.isSetPieceRunning) {
        if (this.triggerSetPiece(victimTeam, "FREE_KICK")) {
          return true;
        }
      }
    }

    // Lance fortuito aislado del juego (esguince, mala caída por puro azar)
    if (Math.random() < 0.0006) {
      const side = Math.random() > 0.5 ? "home" : "away";
      const pitch = side === "home" ? this.homePlayersOnPitch : this.awayPlayersOnPitch;
      const eligible = pitch.filter(p => !p.injury);
      if (eligible.length > 0) {
        const victim = eligible[Math.floor(Math.random() * eligible.length)];
        if (this.triggerPlayerInjury(victim, side, "random") && !this.isSkippingToEnd) {
          this.update2DPositions();
          return true;
        }
      }
    }

    // Comprobar y realizar posibles cambios tácticos de la IA rival
    if (this.checkAISubstitutions() && !this.isSkippingToEnd) {
      this.update2DPositions();
      return true;
    }

    // Actualizar coordenadas 3D de los jugadores hacia el balón para visualización dinámica
    this.update2DPositions();
    return false;
  }

  // Ejecución de jugada clave orgánica y conectada a la simulación en tiempo real
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

    const atk2D = isHome ? this.home2D : this.away2D;
    const def2D = isHome ? this.away2D : this.home2D;

    // 1. CAPTURAR LA SITUACIÓN EXACTA EN VIVO DEL BALÓN Y JUGADORES EN EL CÉSPED
    const liveBallX = typeof this.ball.x === "number" ? Math.max(5, Math.min(95, this.ball.x)) : (isHome ? 46 : 54);
    const liveBallY = typeof this.ball.y === "number" ? Math.max(8, Math.min(92, this.ball.y)) : 50;
    const prevPossession = this.ball.possession; // Quién tenía el balón antes de generarse la jugada

    // Progreso horizontal del equipo atacante (0 = propia línea de fondo, 100 = línea de gol rival)
    const relProgress = isHome ? liveBallX : (100 - liveBallX);
    const isFlankLeft = liveBallY < 38;
    const isFlankRight = liveBallY > 62;
    const isCenterLane = !isFlankLeft && !isFlankRight;
    const isTurnoverFromOpponent = prevPossession === defSide;

    // 2. DETERMINAR EL ORIGEN Y PATRÓN ORGÁNICO REAL DE LA JUGADA
    let playPattern = "TIKI_TAKA_CENTRAL";
    let situationalContext = "BUILDUP"; // "COUNTER", "HIGH_PRESS", "WING_LEFT", "WING_RIGHT", "CENTRAL"

    if (relProgress < 38 || (isTurnoverFromOpponent && relProgress < 48)) {
      situationalContext = "COUNTER";
      playPattern = Math.random() < 0.65 ? "COUNTER_THROUGH_BALL" : "TIKI_TAKA_CENTRAL";
    } else if (isTurnoverFromOpponent && relProgress >= 58) {
      situationalContext = "HIGH_PRESS";
      playPattern = "HIGH_PRESS_TURNOVER";
    } else if (isFlankLeft) {
      situationalContext = "WING_LEFT";
      const roll = Math.random();
      if (roll < 0.38) playPattern = "NEAR_WING_CUTBACK";
      else if (roll < 0.72) playPattern = "WING_CROSS_HEADER";
      else playPattern = "INSIDE_FORWARD_CURLED_SHOT";
    } else if (isFlankRight) {
      situationalContext = "WING_RIGHT";
      const roll = Math.random();
      if (roll < 0.42) playPattern = "WING_CROSS_HEADER";
      else if (roll < 0.75) playPattern = "OVERLAPPING_FULLBACK_CROSS";
      else playPattern = "INDIVIDUAL_SLALOM";
    } else {
      situationalContext = "CENTRAL";
      const roll = Math.random();
      if (roll < 0.30) playPattern = "TIKI_TAKA_CENTRAL";
      else if (roll < 0.55) playPattern = "CHIPPED_PASS_OVER_DEFENSE";
      else if (roll < 0.78) playPattern = "THIRD_MAN_TRIANGLE";
      else if (roll < 0.90) playPattern = "LONG_RANGE_BOMB";
      else playPattern = "FALSE_NINE_DROP_AND_SPLIT";
    }

    this.lastHighlightPattern = playPattern;
    const patternSeed = Math.random();

    // 3. SELECCIÓN DE JUGADORES ORGÁNICOS BASADOS EN QUIÉN ESTABA CERCA DEL BALÓN
    const fieldAtk = atkPlayers.filter(p => p.pos !== "POR");

    // Ordenar jugadores atacantes por proximidad física real a donde estaba el balón
    const atkByProximity = fieldAtk.slice().sort((a, b) => {
      const itemA = atk2D.find(p => p.player?.id === a.id);
      const itemB = atk2D.find(p => p.player?.id === b.id);
      const distA = Math.hypot((itemA?.curX ?? 50) - liveBallX, (itemA?.curY ?? 50) - liveBallY);
      const distB = Math.hypot((itemB?.curX ?? 50) - liveBallX, (itemB?.curY ?? 50) - liveBallY);
      return distA - distB;
    });

    // Comprobar si el robo viene de un marcaje individual al hombre exitoso
    const markingMap = isHome ? this.homeManMarking : this.awayManMarking;
    let manMarkingHero = null;
    if (isTurnoverFromOpponent && markingMap) {
      for (const markerId in markingMap) {
        const markerObj = fieldAtk.find(p => p.id === markerId);
        if (markerObj) {
          const targetObj = defPlayers.find(p => p.id === markingMap[markerId].targetId);
          if (targetObj) {
            manMarkingHero = { marker: markerObj, target: targetObj };
            break;
          }
        }
      }
    }

    // Iniciador del ataque (pivot): el jugador que estaba en la zona o el marcador
    const pivot = manMarkingHero ? manMarkingHero.marker : (atkByProximity[0] || fieldAtk[0]);

    // Pasador / Conductor: según la banda o canal por donde avanza el balón
    let passerCandidates = fieldAtk.filter(p => p.id !== pivot.id);
    if (isFlankLeft) {
      const flankPreferred = passerCandidates.filter(p => ["EI", "LI", "MI", "MCO"].includes(p.pos));
      if (flankPreferred.length > 0) passerCandidates = flankPreferred;
    } else if (isFlankRight) {
      const flankPreferred = passerCandidates.filter(p => ["ED", "LD", "MD", "MCO"].includes(p.pos));
      if (flankPreferred.length > 0) passerCandidates = flankPreferred;
    }
    const passer = passerCandidates.length > 0 ? passerCandidates[0] : (fieldAtk.find(p => p.id !== pivot.id) || fieldAtk[1] || pivot);

    // Rematador: Delantero centro o jugador ofensivo libre
    const shooterCandidates = fieldAtk.filter(p => p.id !== pivot.id && p.id !== passer.id);
    const strikers = shooterCandidates.filter(p => ["DC", "EI", "ED", "MCO"].includes(p.pos));
    const shooter = (strikers.length > 0 ? strikers[0] : (shooterCandidates[0] || fieldAtk[0]));

    // Apoyo en el área
    const restAtk = fieldAtk.filter(p => p.id !== pivot.id && p.id !== passer.id && p.id !== shooter.id);
    const supportAttacker = restAtk[0] || pivot;
    const atkBox1 = restAtk[1] || supportAttacker;
    const atkBox2 = restAtk[2] || pivot;

    // Defensores rivales implicados (los que defienden esa zona real)
    const goalkeeper = defPlayers.find(p => p.pos === "POR") || defPlayers[0];
    const fieldDef = defPlayers.filter(p => p.id !== goalkeeper.id);
    const defByProximity = fieldDef.slice().sort((a, b) => {
      const itemA = def2D.find(p => p.player?.id === a.id);
      const itemB = def2D.find(p => p.player?.id === b.id);
      const distA = Math.hypot((itemA?.curX ?? 50) - liveBallX, (itemA?.curY ?? 50) - liveBallY);
      const distB = Math.hypot((itemB?.curX ?? 50) - liveBallX, (itemB?.curY ?? 50) - liveBallY);
      return distA - distB;
    });

    const defender = defByProximity[0] || fieldDef[0] || defPlayers[1];
    const defender2 = defByProximity[1] || fieldDef[1] || defPlayers[2];
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

    const pivotItem = atk2D.find(p => p.player?.id === pivot.id) || atk2D[0];
    const passerItem = atk2D.find(p => p.player?.id === passer.id);
    const shooterItem = atk2D.find(p => p.player?.id === shooter.id);
    const defItem = def2D.find(p => p.player?.id === defender.id) || def2D.find(p => !p.isKeeper);
    const gkItem = def2D.find(p => p.isKeeper) || def2D[0];

    const fmtP = (p, role) => `${p.name} (#${p.number}${role?.tag ? ` · ${role.tag}` : ""})`;
    const fmtShort = (p) => `${p.name} (#${p.number})`;

    // 4. COORDENADAS ORGÁNICAS SIN TELETRANSPORTE (NACIDAS DEL BALÓN EN VIVO)
    // Coordenadas de progresión (midX, midY) avanzando naturalmente desde liveBall
    let midX;
    if (isHome) {
      midX = Math.min(80, Math.max(62, liveBallX + 16 + Math.random() * 8));
    } else {
      midX = Math.max(20, Math.min(38, liveBallX - 16 - Math.random() * 8));
    }

    let midY = liveBallY;
    if (isFlankLeft) {
      midY = Math.max(14, Math.min(34, liveBallY + (Math.random() * 6 - 3)));
    } else if (isFlankRight) {
      midY = Math.max(66, Math.min(86, liveBallY + (Math.random() * 6 - 3)));
    } else {
      midY = 44 + Math.random() * 12;
    }

    // Coordenadas de remate en el área rival (boxX, boxY)
    const boxX = isHome ? (86 + Math.random() * 6) : (14 - Math.random() * 6);
    const boxY = 42 + Math.random() * 16;

    // 5. DETERMINAR RESULTADO Y EFECTIVIDAD CON FACTOR CAMPO, CLIMA Y ENTRENAMIENTO
    const shooterSho = shooter.sho !== undefined ? shooter.sho : 75;
    const isLongShot = playPattern === "LONG_RANGE_BOMB" || playPattern === "INSIDE_FORWARD_CURLED_SHOT";
    const weatherShotBonus = isLongShot ? (this.weather?.longShotBonus || 0) : ((this.weather?.longShotBonus || 0) * 0.45);
    const userFinishingBonus = (attackingSide === this.userSide && this.weeklyTraining === "finishing") ? 3.5 : 0;
    const homeGroundShotBonus = isHome ? 0.2 : 0;
    const lateHomeShotSurge = (isHome && this.minute >= 70 && this.homeScore <= this.awayScore) ? 0.1 : 0;
    const roarBoost = (attackingSide === "home" && this.activeCrowdRoar) ? 0.2 : 0;
    const shotQuality = shooterSho + weatherShotBonus + userFinishingBonus + homeGroundShotBonus + lateHomeShotSurge + roarBoost + (Math.random() * 26 - 13);

    const gkSkill = goalkeeper.par !== undefined ? goalkeeper.par : (goalkeeper.gks || goalkeeper.ovr || 78);
    const gkFitness = 0.70 + ((goalkeeper.energy !== undefined ? goalkeeper.energy : 100) / 333);
    const userDefBonus = (defSide === this.userSide && this.weeklyTraining === "defensive") ? 3.5 : 0;
    const homeGkSaveBonus = (!isHome) ? 0.2 : 0;
    const gkSavePower = (gkSkill * gkFitness) + userDefBonus + homeGkSaveBonus + (Math.random() * 24 - 12);

    // Presión y taponamiento defensivo en el área (bloqueo por el central)
    const defBlockSkill = defender.def !== undefined ? defender.def : 75;
    const blockProb = Math.min(0.24, Math.max(0.08, (defBlockSkill - 55) * 0.0055));
    const isDefenderBlock = Math.random() < blockProb;

    // Precisión del remate: en el fútbol profesional ~62% de tiros limpios van a portería (+0.3% de local, strictly <= 0.5%)
    const onTargetProb = 0.62 + (isHome ? 0.003 : 0) + ((attackingSide === this.userSide && this.weeklyTraining === "finishing") ? 0.04 : 0);
    const onTarget = !isDefenderBlock && (Math.random() < onTargetProb);

    let outcome = "GOAL";
    const cornersPool = ["TOP_RIGHT", "TOP_LEFT", "BOTTOM_RIGHT", "BOTTOM_LEFT"];
    const targetCorner = cornersPool[Math.floor(Math.random() * cornersPool.length)];

    let wideDirection = "RIGHT";
    const wideRand = Math.random();
    if (wideRand < 0.42) wideDirection = "RIGHT";
    else if (wideRand < 0.84) wideDirection = "LEFT";
    else wideDirection = "HIGH";

    if (isDefenderBlock) {
      outcome = "BLOCK";
    } else if (!onTarget) {
      outcome = Math.random() < 0.18 ? "POST" : "WIDE";
    } else {
      // Duelo directo entre rematador y guardameta:
      // En la élite, un tiro a puerta tiene una probabilidad realista de gol del ~32-38%
      const skillGap = (shotQuality - gkSavePower) * 0.012;
      const goalProbOnTarget = Math.max(0.15, Math.min(0.48, 0.35 + skillGap));
      const isGoal = Math.random() < goalProbOnTarget;
      if (isGoal) {
        outcome = "GOAL";
      } else {
        outcome = "SAVE";
      }
    }

    // 6. GENERAR COMENTARIOS DINÁMICOS Y CONECTADOS AL CONTEXTO VIVO DEL PARTIDO
    const isWet = this.weather?.id === "rain";
    const isCrowdRoaring = Boolean(this.activeCrowdRoar);
    const isLateEqualizerSearch = isHome && this.minute >= 75 && this.homeScore <= this.awayScore;

    let buildHeadline = "INICIO DE JUGADA";
    let buildText = "";
    if (manMarkingHero) {
      buildHeadline = "MARCAJE AL HOMBRE IMPECABLE";
      buildText = `🎯 ¡Anticipación colosal! ${fmtP(manMarkingHero.marker, pivotRole)} seca a ${fmtShort(manMarkingHero.target)} en su propia salida y recupera el esférico.`;
    } else if (situationalContext === "COUNTER") {
      buildHeadline = "TRANSICIÓN RELÁMPAGO";
      buildText = `🏹 Recuperación en campo propio: ${fmtP(pivot, pivotRole)} corta la ofensiva rival y lanza una contra directa a máxima velocidad.`;
    } else if (situationalContext === "HIGH_PRESS") {
      buildHeadline = "PRESIÓN ALTA ASFIXIANTE";
      buildText = `🔥 ¡Presión en bloque alto! ${fmtP(pivot, pivotRole)} muerde la salida de ${defTeam.shortName} forzando el robo en tres cuartos.`;
    } else if (situationalContext === "WING_LEFT") {
      buildHeadline = "DESBORDE POR COSTADO IZQUIERDO";
      buildText = `⚡ Circulación orientada al flanco izquierdo: ${fmtP(pivot, pivotRole)} abre el juego hacia la subida de ${fmtShort(passer)}.`;
    } else if (situationalContext === "WING_RIGHT") {
      buildHeadline = "APERTURA A BANDA DERECHA";
      buildText = `⚡ Cambio de orientación preciso: ${fmtP(pivot, pivotRole)} cambia el frente hacia el carril diestro para ${fmtShort(passer)}.`;
    } else {
      buildHeadline = "ELABORACIÓN EN LA FRONTAL";
      buildText = `🧠 Paciencia y toque: ${fmtP(pivot, pivotRole)} asocia en la medular buscando grietas entre las líneas de ${defTeam.shortName}.`;
    }

    if (isCrowdRoaring || isLateEqualizerSearch) {
      buildText += ` 🏟️ ¡La grada ruge empujando con toda el alma hacia la portería rival!`;
    }

    let progHeadline = "PROGRESIÓN";
    let progText = "";
    if (situationalContext === "COUNTER") {
      progHeadline = "CARRERA AL ESPACIO";
      progText = `⚡ ${fmtP(passer, passerRole)} acelera a campo abierto con la defensa rival retrocediendo en desorden.`;
    } else if (isFlankLeft || isFlankRight) {
      progHeadline = "LÍNEA DE FONDO";
      progText = `🚀 ${fmtP(passer, passerRole)} encara en el 1 vs 1 a su par y gana la línea de fondo con potencia.`;
    } else {
      progHeadline = "PARED EN LA MEDIALUNA";
      progText = `✨ Combinación al primer toque de ${fmtShort(passer)} en tres cuartos desordenando la zaga.`;
    }

    if (isWet) {
      progText += ` (El césped mojado da una velocidad vertiginosa a la acción).`;
    }

    let passHeadline = "ÚLTIMO PASE";
    let passText = "";
    if (situationalContext === "COUNTER") {
      passHeadline = "PASE AL HUECO";
      passText = `🎯 Balón medido al espacio de ${fmtShort(passer)}. ¡${fmtP(shooter, shooterRole)} gana la espalda del central y se planta solo!`;
    } else if (isFlankLeft || isFlankRight) {
      passHeadline = "CENTRO AL ÁREA";
      passText = `🎯 Centro tenso y medido de ${fmtShort(passer)} hacia el corazón del área chica buscando el remate de ${fmtShort(shooter)}.`;
    } else {
      passHeadline = "ASISTENCIA FILTRADA";
      passText = `🎯 Pase quirúrgico entre líneas de ${fmtShort(passer)} dejando a ${fmtP(shooter, shooterRole)} en posición inmejorable.`;
    }

    let shotText = "";
    if (outcome === "GOAL") {
      shotText = `⚽ ¡${fmtP(shooter, shooterRole)} impacta con determinación y manda el balón al fondo de las mallas inapelable!`;
    } else if (outcome === "SAVE") {
      shotText = `🧤 ¡${fmtShort(shooter)} conecta a puerta, pero ${goalkeeper.name} (#${goalkeeper.number}) se estira de manera heroica!`;
    } else if (outcome === "BLOCK") {
      shotText = `🛡️ ¡${fmtShort(shooter)} gatilla a romper, pero ${defender.name} (#${defender.number}) se tira con el alma y tapona!`;
    } else if (outcome === "POST") {
      shotText = `🥅 ¡${fmtShort(shooter)} supera al portero con una vaselina que se estrella con violencia en el poste!`;
    } else {
      shotText = `💨 ¡${fmtShort(shooter)} busca ajustar al palo y su disparo sale lamiendo la madera!`;
    }

    const pDesc = {
      buildNote: buildText,
      progAlert: [progHeadline, progText],
      progNote: progText,
      passAlert: [passHeadline, passText],
      passNote: passText,
      shotNote: shotText
    };

    let chanceComment = `⚡ ¡Ocasión construida por ${atkTeam.shortName} (${situationalContext})!`;
    if (isCrowdRoaring) chanceComment = `🔥 ¡Aliento en la grada! ${chanceComment}`;

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

    // FASE 1: ARRANQUE ORGÁNICO DESDE LA POSICIÓN REAL DEL BALÓN EN VIVO
    this.ball.x = liveBallX;
    this.ball.y = liveBallY;
    this.ball.targetX = liveBallX;
    this.ball.targetY = liveBallY;
    this.ball.targetZ = 0;
    this.ball.possession = attackingSide;

    // El iniciador real (pivot) recibe la posesión sin teletransportarse
    if (pivotItem) {
      pivotItem.targetX = liveBallX;
      pivotItem.targetY = liveBallY;
    }
    // El pasador y el rematador se mueven fluidamente hacia sus zonas de apoyo
    if (passerItem) {
      passerItem.targetX = isHome ? Math.min(midX, (passerItem.curX || 50) + 12) : Math.max(midX, (passerItem.curX || 50) - 12);
      passerItem.targetY = midY;
    }
    if (defItem) {
      defItem.targetX = liveBallX + (isHome ? 6 : -6);
      defItem.targetY = liveBallY + (Math.random() * 4 - 2);
    }
    if (shooterItem) {
      shooterItem.targetX = isHome ? Math.min(boxX - 8, (shooterItem.curX || 50) + 14) : Math.max(boxX + 8, (shooterItem.curX || 50) - 14);
      shooterItem.targetY = boxY + (Math.random() < 0.5 ? -6 : 6);
    }
    this.update2DPositions();

    if (this.onHighlightStart) {
      this.onHighlightStart({
        ...baseHighlightData,
        phase: "BUILDUP",
        phaseLabel: buildHeadline,
        phaseDuration: 4500,
        tacticalNote: pDesc.buildNote
      });
    }
    if (this.onHighlightPhase) {
      this.onHighlightPhase({
        ...baseHighlightData,
        phase: "BUILDUP",
        phaseLabel: buildHeadline,
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
      if (shooter) shooter.matchShots = (shooter.matchShots || 0) + 1;
      if (passer) {
        passer.matchKeyPasses = (passer.matchKeyPasses || 0) + 1;
        this.adjustPlayerRating(passer, 0.15);
      }

      if (outcome === "BLOCK") {
        if (defender) {
          defender.matchTackles = (defender.matchTackles || 0) + 1;
          this.adjustPlayerRating(defender, 0.35);
        }
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
        this.adjustPlayerRating(shooter, 0.2);
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
        this.adjustPlayerRating(shooter, -0.1);
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
        this.adjustPlayerRating(shooter, 0.15);
        if (goalkeeper) {
          goalkeeper.matchSaves = (goalkeeper.matchSaves || 0) + 1;
          this.adjustPlayerRating(goalkeeper, 0.45);
        }
        this.ball.targetX = isHome ? 98 : 2;
        this.ball.targetY = targetCorner.includes("RIGHT") ? 54 : 46;
        this.ball.targetZ = 5;

        const saveBecomesCorner = Math.random() < 0.28;
        const alertText = saveBecomesCorner
          ? `🧤 ¡Paradón providencial de ${goalkeeper.name} ante ${shooter.name}! ¡Córner!`
          : `🧤 ¡Intervención segura de ${goalkeeper.name}! Atrapa el disparo con firmeza.`;
        this.triggerAlert("PARADÓN", alertText, isHome ? "away" : "home", isSkip ? 2200 : 3200);

        const analysis = attackingSide === this.userSide
          ? (saveBecomesCorner
              ? `🧤 ¡Paradón de ${goalkeeper.name}! Estirada espectacular desviando el tiro a saque de esquina.`
              : `🧤 ¡Buen remate de ${shooter.name}, pero ${goalkeeper.name} estuvo bien colocado y atrapó sin conceder rechace.`)
          : (saveBecomesCorner
              ? `🧤 ¡Intervención salvadora de ${goalkeeper.name}! Tu portero voló para desviar el balón a córner.`
              : `🧤 ¡Seguridad bajo palos! ${goalkeeper.name} bloca el esférico con autoridad.`);

        const saveCompletion = () => {
          this.concludeHighlight({
            outcome: "SAVE",
            tacticalAnalysis: analysis,
            onComplete: () => {
              if (saveBecomesCorner && !this.isFinished && !this.isHalfTime && this.showKeyHighlights && !isSkip && !this.isSkippingToEnd) {
                const startedSP = this.triggerSetPiece(attackingSide, "CORNER", null, onComplete);
                if (!startedSP && onComplete) onComplete();
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
        shooter.matchGoals = (shooter.matchGoals || 0) + 1;
        this.adjustPlayerRating(shooter, 1.15);
        if (passer && passer.id !== shooter.id) {
          passer.assists = (passer.assists || 0) + 1;
          passer.matchAssists = (passer.matchAssists || 0) + 1;
          this.adjustPlayerRating(passer, 0.65);
        }
        if (goalkeeper) this.adjustPlayerRating(goalkeeper, -0.25);
        defPlayers.filter(p => ["DFC", "LD", "LI", "MCD"].includes(p.pos)).forEach(d => this.adjustPlayerRating(d, -0.15));

        const event = {
          type: "GOAL",
          minute: this.minute,
          teamSide: attackingSide,
          teamId: atkTeam.id,
          teamName: atkTeam.shortName,
          playerName: shooter.name,
          assisterName: (passer && passer.id !== shooter.id) ? passer.name : null,
          currentScore: `${this.homeScore} - ${this.awayScore}`
        };
        this.events.push(event);

        if (!this.isSkippingToEnd) {
          this.triggerAlert("GOL", `⚽ ¡GOOOOOOLAZO DE ${shooter.name.toUpperCase()}! (${this.homeScore}-${this.awayScore})`, attackingSide, isSkip ? 2500 : 4500);
        }

        const analysis = attackingSide === this.userSide
          ? `🎯 ¡Golazo! Jugada construida a la perfección y definición inapelable de ${shooter.name}.`
          : `⚠️ Despiste en la marca: ${shooter.name} aprovechó el centro y fusiló la portería.`;

        const goalCompletion = () => {
          this.isHighlightRunning = false;
          this.speed = this.userSpeed;
          if (!this.isSkippingToEnd && this.onHighlightEnd) {
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

          if (!this.isSkippingToEnd && this.hasCustomOnGoal) {
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

        if (isSkip || this.isSkippingToEnd) {
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

    // Si estamos saltando al final del partido o el usuario tiene desactivadas las jugadas clave:
    if (this.isSkippingToEnd) {
      executeResolution(true);
      return;
    }

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

    // FASE 2: Progresión y conducción al sector de ataque (4.5s - 8.5s)
    setHlTimeout(() => {
      if (!this.isRunning && !this.isHighlightRunning) return;

      // El balón y el pasador progresan fluidamente hacia tres cuartos (midX, midY)
      this.ball.targetX = midX;
      this.ball.targetY = midY;
      this.ball.targetZ = 0;

      if (passerItem) {
        passerItem.targetX = midX;
        passerItem.targetY = midY;
      }
      if (pivotItem && pivotItem.player?.id !== passer.id) {
        pivotItem.targetX = isHome ? midX - 9 : midX + 9;
        pivotItem.targetY = midY + (midY < 50 ? 6 : -6);
      }
      if (defItem) {
        defItem.targetX = midX + (isHome ? 5 : -5);
        defItem.targetY = midY + (Math.random() * 4 - 2);
      }
      if (shooterItem) {
        shooterItem.targetX = isHome ? Math.min(boxX - 4, midX + 10) : Math.max(boxX + 4, midX - 10);
        shooterItem.targetY = boxY;
      }
      this.update2DPositions();

      this.triggerAlert(pDesc.progAlert[0], pDesc.progAlert[1], attackingSide, 3200);

      if (this.onHighlightPhase) {
        this.onHighlightPhase({
          ...baseHighlightData,
          phase: "PROGRESSION",
          phaseLabel: progHeadline,
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
    this.crowdRoarUnlockedByHighlight = true; // Desbloqueo inmediato del aliento de la grada tras jugada clave
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
    if (this.isFinished || this.isHalfTime || this.isHighlightRunning || this.isSetPieceRunning) return false;

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
        if (!this.isSkippingToEnd) {
          this.triggerAlert("FALTA", `⚠️ Falta a ${distanceMeters}m de portería cometida sobre ${atkTeam.shortName}. Saque rápido.`, attackingSide, 2600);
        }
        return false;
      }
    }

    // Si estamos saltando al final del partido, resolver el balón parado de forma instantánea y síncrona
    if (this.isSkippingToEnd) {
      if (type === "CORNER") {
        this.stats.corners[attackingSide]++;
      }
      this.stats.shots[attackingSide]++;
      if (Math.random() < 0.28) {
        this.stats.shotsOnTarget[attackingSide]++;
        if (Math.random() < 0.14) { // ~3.9% de conversión realista en córners y faltas colgadas
          const outfield = atkPlayers.filter(p => p.pos !== "POR");
          const scorer = outfield[Math.floor(Math.random() * outfield.length)] || atkPlayers[0];
          if (isHome) this.homeScore++;
          else this.awayScore++;
          if (scorer) {
            scorer.goals = (scorer.goals || 0) + 1;
            this.events.push({
              type: "GOAL",
              minute: this.minute,
              teamSide: attackingSide,
              teamId: atkTeam.id,
              teamName: atkTeam.shortName,
              playerName: scorer.name,
              currentScore: `${this.homeScore} - ${this.awayScore}`
            });
          }
        }
      }
      return false;
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

    if (attackingSide === this.userSide && this.hasCustomOnSetPiece) {
      // El usuario ataca a balón parado: pausar y abrir la pizarra táctica interactiva
      this.pause();
      this.onSetPiece(setPieceInfo);
    } else {
      // La IA rival (o modo automático sin modal) ejecuta su jugada automáticamente
      const aiSetup = this.buildAISetPieceSetup(setPieceInfo);
      this.executeSetPiece(aiSetup, () => {
        if (postSetPieceCallback) {
          postSetPieceCallback();
        }
      });
    }
    return true;
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

    const setSpTimeout = (fn, ms) => {
      const t = setTimeout(fn, ms);
      if (!this.setPieceTimeouts) this.setPieceTimeouts = [];
      this.setPieceTimeouts.push(t);
      return t;
    };

    // FASE 2: Lanzamiento del balón con parábola y cálculo de Azar + Atributos + Laboratorio de Balón Parado (Mejora 3) + Clima (Mejora 6)
    setSpTimeout(() => {
      if (this.isFinished || this.isSkippingToEnd) return;
      const baseStat = targetStrategy === "DIRECT_SHOT" ? (taker.sho || 75) : (taker.pas || 75);
      const azarLanzamiento = (Math.random() * 44 - 22);
      const spTrainingMult = (attackingSide === this.userSide && this.weeklyTraining === "set_pieces") ? 1.15 : 1.0;
      const wetTurfDirectBonus = (targetStrategy === "DIRECT_SHOT" && this.weather?.id === "rain") ? 4.5 : 0;
      const kickQuality = (baseStat * spTrainingMult) + wetTurfDirectBonus + azarLanzamiento;

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
      setSpTimeout(() => {
        if (this.isFinished || this.isSkippingToEnd) return;
        this.stats.shots[attackingSide]++;

        if (targetStrategy === "DIRECT_SHOT") {
          const isGoal = kickQuality >= 82 && Math.random() < 0.28;
          const isPost = !isGoal && kickQuality >= 74 && Math.random() < 0.25;
          const isSave = !isGoal && !isPost && kickQuality >= 60;

          if (isGoal) {
            this.handleSetPieceGoal(attackingSide, taker, null, "TIRO DIRECTO", onDone);
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

          // Duelo aéreo en el área: el atacante frente a los centrales rivales
          const defMarkers = defPlayers.filter(p => ["DFC", "MCD", "LD", "LI"].includes(p.pos));
          const primaryMarker = defMarkers.sort((a, b) => ((b.def || 70) + (b.fis || 70)) - ((a.def || 70) + (a.fis || 70)))[0] || defPlayers.find(p => p.pos !== "POR") || defPlayers[0];
          const markerDefStat = (primaryMarker.def || 75) * 0.65 + (primaryMarker.fis || primaryMarker.phy || primaryMarker.ovr || 75) * 0.35;
          const defAerialScore = markerDefStat + (Math.random() * 26 - 11);

          const remateStat = ((targetPlayer.sho || 75) * 0.65 + (targetPlayer.fis || targetPlayer.phy || targetPlayer.ovr || 75) * 0.35) * spTrainingMult;
          const azarRemate = (Math.random() * 26 - 13);
          const remateScore = remateStat + azarRemate;

          const gkSkill = goalkeeper.par !== undefined ? goalkeeper.par : (goalkeeper.gks || goalkeeper.ovr || 78);
          const gkFitness = 0.70 + ((goalkeeper.energy !== undefined ? goalkeeper.energy : 100) / 333);
          const azarGK = (Math.random() * 24 - 12);
          const gkScore = (gkSkill * gkFitness) + azarGK;

          if (kickQuality < 60) {
            // El centro va defectuoso o sale pasado/corto
            this.triggerAlert("DESPEJE", `🛡️ Centro defectuoso que despeja la zaga de ${defTeam.shortName}`, isHome ? "away" : "home", 2500);
            this.finishSetPiecePlay("DESPEJE", attackingSide, onDone);
          } else if (defAerialScore >= remateScore - 3) {
            // El central rival impone su físico en el área y despeja por alto
            this.triggerAlert("DESPEJE", `🛡️ ¡Despeje aéreo de ${primaryMarker.name} imponiéndose por alto ante ${targetPlayer.name}!`, isHome ? "away" : "home", 2600);
            this.finishSetPiecePlay("DESPEJE", attackingSide, onDone);
          } else {
            // El delantero gana el salto por encima del central y cabecea
            const headerQuality = remateScore - defAerialScore;
            const isHeaderOnTarget = Math.random() < 0.52;

            if (!isHeaderOnTarget) {
              this.triggerAlert("FUERA", `⚠️ ¡Cabezazo forzado de ${targetPlayer.name} que se marcha alto!`, attackingSide, 2500);
              this.finishSetPiecePlay("GOAL_KICK", attackingSide, onDone);
            } else if (remateScore > gkScore + 10 && headerQuality > 5) {
              // Cabezazo impecable e imparable que bate al portero
              this.handleSetPieceGoal(attackingSide, targetPlayer, taker, "CABEZAZO IMPERIAL", onDone);
            } else if (Math.random() < 0.20 && headerQuality > 3) {
              this.triggerAlert("AL PALO", `🥅 ¡Al larguero el testarazo de ${targetPlayer.name}!`, attackingSide, 3000);
              this.finishSetPiecePlay("GOAL_KICK", attackingSide, onDone);
            } else {
              this.triggerAlert("PARADÓN", `🧤 ¡Paradón de reflejos de ${goalkeeper.name} atajando el cabezazo de ${targetPlayer.name}!`, isHome ? "away" : "home", 3000);
              this.finishSetPiecePlay("SAVE", attackingSide, onDone);
            }
          }
        }
      }, 1400);
    }, 1500);
  }

  handleSetPieceGoal(attackingSide, scorer, assister, style, onDone = null) {
    const isHome = attackingSide === "home";
    const atkTeam = isHome ? this.homeTeam : this.awayTeam;
    const defTeam = isHome ? this.awayTeam : this.homeTeam;
    const defPlayers = isHome ? this.awayPlayersOnPitch : this.homePlayersOnPitch;
    const goalkeeper = defPlayers.find(p => p.pos === "POR") || defPlayers[0];

    this.stats.shotsOnTarget[attackingSide]++;
    if (isHome) this.homeScore++;
    else this.awayScore++;

    scorer.goals = (scorer.goals || 0) + 1;
    scorer.matchGoals = (scorer.matchGoals || 0) + 1;
    this.adjustPlayerRating(scorer, 1.15);
    if (assister && assister.id !== scorer.id) {
      assister.assists = (assister.assists || 0) + 1;
      assister.matchAssists = (assister.matchAssists || 0) + 1;
      this.adjustPlayerRating(assister, 0.65);
    }
    if (goalkeeper) this.adjustPlayerRating(goalkeeper, -0.25);

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
      assisterName: (assister && assister.id !== scorer.id) ? assister.name : null,
      currentScore: `${this.homeScore} - ${this.awayScore}`
    };
    this.events.push(event);

    this.triggerAlert("GOL", `⚽ ¡GOOOOOOLAZO DE ${scorer.name.toUpperCase()}! (${this.homeScore}-${this.awayScore})`, attackingSide, 4500);

    this.isSetPieceRunning = false;
    this.speed = this.userSpeed;

    if (this.hasCustomOnGoal && !this.isSkippingToEnd) {
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
    } else {
      if (onDone) onDone();
      if (this.isRunning && !this.isFinished && !this.isHalfTime) {
        this.loop();
      }
    }
  }

  finishSetPiecePlay(outcome = "GOAL_KICK", attackingSide = "home", onDone = null) {
    const isHome = attackingSide === "home";
    const defSide = isHome ? "away" : "home";
    const defTeam = isHome ? this.awayTeam : this.homeTeam;

    if (this.isSkippingToEnd || this.isFinished) {
      this.isSetPieceRunning = false;
      this.speed = this.userSpeed;
      if (onDone) onDone();
      return;
    }

    const setSpTimeout = (fn, ms) => {
      const t = setTimeout(fn, ms);
      if (!this.setPieceTimeouts) this.setPieceTimeouts = [];
      this.setPieceTimeouts.push(t);
      return t;
    };

    setSpTimeout(() => {
      if (this.isFinished || this.isSkippingToEnd) {
        this.isSetPieceRunning = false;
        return;
      }
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
        setSpTimeout(() => {
          if (this.isFinished || this.isSkippingToEnd) {
            this.isSetPieceRunning = false;
            return;
          }
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
      setSpTimeout(() => {
        if (this.isFinished || this.isSkippingToEnd) {
          this.isSetPieceRunning = false;
          return;
        }
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
          if (onDone) onDone();
          if (!this.isFinished && !this.isHalfTime && !this.pauseRequested) {
            this.isRunning = true;
            this.loop();
          }
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
        if (p.pos === "POR") {
          const gkPar = p.par !== undefined ? p.par : (p.gks || p.ovr || 75);
          power = (gkPar * 0.75 + (p.phy || 70) * 0.25) * (0.6 + (p.energy !== undefined ? p.energy : 100) / 250);
        } else {
          power = ((p.def || 70) * 0.5 + (p.phy || 70) * 0.3 + (p.pac || 70) * 0.2) * (0.6 + (p.energy !== undefined ? p.energy : 100) / 250);
        }
        if (role && role.defMod) power *= role.defMod;
        // Si el jugador está retrasado hacia campo propio (refuerzo defensivo)
        if (item2D) {
          const advX = isHome ? item2D.baseX : (100 - item2D.baseX);
          if (advX < 45) power *= 1.10;
        }
      }

      // Feature A: Impacto del Marcaje al Hombre en atributos de cada futbolista
      if (side) {
        // Reducción si este jugador está marcado al hombre
        const markers = this.getActiveMarkersOnTarget(side, p.id);
        if (markers.length > 0) {
          const isAggressive = markers.some(m => m.intensity === "aggressive");
          const isTight = markers.some(m => m.intensity === "tight");
          const redFactor = isAggressive ? 0.64 : (isTight ? 0.76 : 0.88);
          if (type === "atk" || type === "mid") {
            power *= redFactor;
          }
        }

        // Bonus a defensa si este futbolista es un marcador asignado
        const markingTask = this.getActiveMarkingForMarker(side, p.id);
        if (markingTask && type === "def") {
          const defBoost = markingTask.intensity === "aggressive" ? 1.14 : (markingTask.intensity === "tight" ? 1.10 : 1.06);
          power *= defBoost;
        }
      }

      sum += power;
    });

    let avgPower = sum / players.length;
    if (type === "atk" && this.weather?.atkSharpness) {
      avgPower *= this.weather.atkSharpness;
    }
    if (side === this.userSide) {
      if (this.weeklyTraining === "finishing" && type === "atk") {
        avgPower *= 1.07;
      } else if (this.weeklyTraining === "defensive" && type === "def") {
        avgPower *= 1.07;
      }
      if (this.activeTeamTalk && this.minute <= this.activeTeamTalk.expiresAtMinute) {
        if (type === "atk") avgPower *= (this.activeTeamTalk.atkMod || 1.0);
        else if (type === "mid") avgPower *= (this.activeTeamTalk.midMod || 1.0);
        else if (type === "def") avgPower *= (this.activeTeamTalk.defMod || 1.0);
      }
      if (this.activeShout && this.minute <= this.activeShout.expiresAtMinute) {
        if (type === "atk") avgPower *= (this.activeShout.atkMod || 1.0);
        else if (type === "mid") avgPower *= (this.activeShout.midMod || 1.0);
        else if (type === "def") avgPower *= (this.activeShout.defMod || 1.0);
      }
    }

    // Factor Campo: El equipo local cuenta con un sutil empuje ambiental equilibrado (+0.4%, strictly <= 0.5%)
    if (side === "home") {
      avgPower *= 1.004;
    }

    // Feature B: Aliento de la Grada (Sutil impulso anímico para remontar: ~0.4% promedio, strictly <= 0.5%)
    if (this.activeCrowdRoar && side === "home" && this.minute <= this.activeCrowdRoar.expiresAtMinute) {
      if (type === "atk") avgPower *= 1.005;
      else if (type === "mid") avgPower *= 1.004;
      else if (type === "def") avgPower *= 1.003;
    }

    return avgPower;
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
    this.clearAllTimeouts();
    this.isSkippingToEnd = true;
    this.halfTimeTriggered = true;
    this.isHalfTime = false;
    this.isSecondHalf = true;
    this.isHighlightRunning = false;
    this.isSetPieceRunning = false;
    this.pauseRequested = false;

    let safetyGuard = 0;
    while (this.minute < this.maxMinutes && safetyGuard < 200) {
      this.isSetPieceRunning = false;
      this.isHighlightRunning = false;
      this.stepMinute();
      safetyGuard++;
    }
    this.isSkippingToEnd = false;
    if (!this.isFinished) {
      this.finish();
    }
  }

  finish() {
    this.clearAllTimeouts();
    this.minute = this.maxMinutes;
    this.isRunning = false;
    this.isHighlightRunning = false;
    this.isSetPieceRunning = false;
    this.isFinished = true;

    // Bonus de valoración final por portería a cero (Clean Sheet) y victoria
    const homeAll = this.homeTeam.players || [...this.homePlayersOnPitch, ...this.homeBench];
    const awayAll = this.awayTeam.players || [...this.awayPlayersOnPitch, ...this.awayBench];

    if (this.awayScore === 0) {
      homeAll.forEach(p => {
        if ((p.matchMinutes || 0) >= 45) {
          if (p.pos === "POR") this.adjustPlayerRating(p, 0.5);
          else if (["DFC", "LD", "LI", "MCD"].includes(p.pos)) this.adjustPlayerRating(p, 0.3);
        }
      });
    }
    if (this.homeScore === 0) {
      awayAll.forEach(p => {
        if ((p.matchMinutes || 0) >= 45) {
          if (p.pos === "POR") this.adjustPlayerRating(p, 0.5);
          else if (["DFC", "LD", "LI", "MCD"].includes(p.pos)) this.adjustPlayerRating(p, 0.3);
        }
      });
    }
    if (this.homeScore > this.awayScore) {
      homeAll.forEach(p => { if ((p.matchMinutes || 0) >= 20) this.adjustPlayerRating(p, 0.2); });
    } else if (this.awayScore > this.homeScore) {
      awayAll.forEach(p => { if ((p.matchMinutes || 0) >= 20) this.adjustPlayerRating(p, 0.2); });
    }

    this.onFinish(this.getResult());
  }

  // MEJORA 5: Calcular el MVP del Partido (o de la 1ª parte) según nota en tiempo real
  computeMVP() {
    const homeAll = (this.homeTeam.players || [...this.homePlayersOnPitch, ...this.homeBench])
      .filter(p => p.playedInMatch || (p.matchMinutes || 0) > 0)
      .map(p => ({ ...p, teamId: this.homeTeam.id, teamName: this.homeTeam.shortName || this.homeTeam.name, teamSide: "home" }));
    const awayAll = (this.awayTeam.players || [...this.awayPlayersOnPitch, ...this.awayBench])
      .filter(p => p.playedInMatch || (p.matchMinutes || 0) > 0)
      .map(p => ({ ...p, teamId: this.awayTeam.id, teamName: this.awayTeam.shortName || this.awayTeam.name, teamSide: "away" }));

    const allPlayed = [...homeAll, ...awayAll];
    if (allPlayed.length === 0) return null;

    allPlayed.sort((a, b) => {
      const rDiff = (b.matchRating || 6.5) - (a.matchRating || 6.5);
      if (Math.abs(rDiff) > 0.05) return rDiff;
      const gDiff = (b.matchGoals || 0) - (a.matchGoals || 0);
      if (gDiff !== 0) return gDiff;
      const aDiff = (b.matchAssists || 0) - (a.matchAssists || 0);
      if (aDiff !== 0) return aDiff;
      return (b.ovr || 70) - (a.ovr || 70);
    });

    const best = allPlayed[0];
    return {
      ...best,
      rating: best.matchRating || 6.5,
      goals: best.matchGoals || 0,
      assists: best.matchAssists || 0,
      saves: best.matchSaves || 0
    };
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
      activeTeamTalk: this.activeTeamTalk,
      halftimeTalkUsed: this.halftimeTalkUsed,
      activeShout: this.activeShout,
      shoutCooldownUntil: this.shoutCooldownUntil,
      activeCrowdRoar: this.activeCrowdRoar,
      crowdRoarCooldownUntil: this.crowdRoarCooldownUntil,
      crowdRoarUnlockedByHighlight: this.crowdRoarUnlockedByHighlight,
      homeManMarking: this.homeManMarking,
      awayManMarking: this.awayManMarking,
      weeklyTraining: this.weeklyTraining,
      weather: this.weather,
      currentMvp: this.computeMVP(),
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
      mvp: this.computeMVP(),
      weather: this.weather,
      weeklyTraining: this.weeklyTraining,
      homePlayers: this.homeTeam.players || [...this.homePlayersOnPitch, ...this.homeBench],
      awayPlayers: this.awayTeam.players || [...this.awayPlayersOnPitch, ...this.awayBench]
    };
  }
}

if (typeof window !== "undefined") {
  window.MatchSimulator = MatchSimulator;
}

