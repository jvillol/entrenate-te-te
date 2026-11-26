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

    // Inicializar cómputo del partido: Motor Autónomo 20 Ticks/Seg + Replay Buffer Circular (15s = 300 ticks)
    this.useRealTime = true;
    this.matchSecond = 0;
    this.highlightInterval = null;
    this.realTimeMinute = 0;
    this.lastMinuteProcessed = 0;
    this.tickEmitTimer = 0;
    this.possessionTimeHome = 0.5;
    this.possessionTimeAway = 0.5;
    this.foulCooldown = 0;
    this.setPieceCooldown = 0;
    this.replayBuffer = [];
    this.maxReplayBufferFrames = 300; // 15 segundos a 20 ticks/segundo
    this.activeReplay = null;
    this.lastHighlightMinute = -4;
    this._liveAtkMomentum = { home: 0.5, away: 0.5 };
    this._pendingTickOutcome = null;
    this._recordingReplayOnly = false;
    this.ball = {
      x: 50, y: 50, z: 0,
      targetX: 50, targetY: 50, targetZ: 0,
      possession: "home",
      xm: 52.5, ym: 34, zm: 0,
      vx: 0, vy: 0, vz: 0,
      carrier: null,
      passTarget: null,
      passTeam: null,
      shotTeam: null,
      shotMeta: null,
      lastTouchTeam: "home",
      lastTouchPlayer: null,
      assistCandidate: null,
      pickupCooldown: 0
    };
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
    this.onCommentary = options.onCommentary || (() => {});
    this.commentaryCooldown = 0;

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

    // Asistente / Segundo Entrenador en Vivo (Live Coaching Staff FM)
    this.assistantCoachName = options.assistantName || (this.userSide === "home" ? (this.homeTeam.assistantName || "Segundo Entrenador") : (this.awayTeam.assistantName || "Segundo Entrenador"));
    this.nextAssistantCheckMinute = 12 + Math.floor(Math.random() * 4);
    this.lastAssistantAdviceMinute = -99;
    this.currentPendingAdvice = null;
    this.activeAssistantAdvice = null;
    this.onAssistantAdvice = options.onAssistantAdvice || (() => {});
    this.onAssistantFeedback = options.onAssistantFeedback || (() => {});

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

  _createPhysicsPlayer(p, idx, coord, side) {
    const isKeeper = p.pos === "POR" || idx === 0;
    const pac = Number(p.pac || p.ovr || 70);
    const dri = Number(p.dri || p.ovr || 70);
    const xm = ((coord?.x ?? (side === "home" ? 25 : 75)) / 100) * 105;
    const ym = ((coord?.y ?? 50) / 100) * 68;
    const maxSpeed = isKeeper ? 5.8 + (pac - 50) * 0.025 : 6.4 + (pac - 50) * 0.045;
    const acceleration = isKeeper ? 13.5 : 15.0 + ((pac + dri) * 0.5 - 50) * 0.12;
    return {
      player: p,
      side,
      number: p.number || (idx + 1),
      isKeeper,
      baseX: coord?.x ?? (side === "home" ? 25 : 75),
      baseY: coord?.y ?? 50,
      curX: coord?.x ?? (side === "home" ? 25 : 75),
      curY: coord?.y ?? 50,
      targetX: coord?.x ?? (side === "home" ? 25 : 75),
      targetY: coord?.y ?? 50,
      xm,
      ym,
      vx: 0,
      vy: 0,
      maxSpeed,
      acceleration,
      desiredX: xm,
      desiredY: ym,
      aiState: isKeeper ? "GK" : "ANCHOR",
      decisionTimer: Math.random() * 0.45,
      controlTimer: 0,
      tackleCooldown: 0,
      speedMps: 0,
      animPhase: Math.random() * Math.PI * 2,
      facingX: side === "home" ? 1 : -1,
      facingZ: 0
    };
  }

  init2DPositions() {
    const homeCoords = this.getFormationCoords(this.homeFormation, true);
    const awayCoords = this.getFormationCoords(this.awayFormation, false);

    this.home2D = this.homePlayersOnPitch.map((p, idx) =>
      this._createPhysicsPlayer(p, idx, homeCoords[idx], "home")
    );

    this.away2D = this.awayPlayersOnPitch.map((p, idx) =>
      this._createPhysicsPlayer(p, idx, awayCoords[idx], "away")
    );

    // Asignar saque inicial al delantero centro local
    if (this.ball) {
      const kicker = this.home2D[9] || this.home2D[this.home2D.length - 1];
      if (kicker) {
        kicker.xm = 52.5;
        kicker.ym = 34;
        kicker.curX = 50;
        kicker.curY = 50;
        this.ball.carrier = kicker;
        this.ball.xm = 52.5;
        this.ball.ym = 34;
        this.ball.zm = 0;
        this.ball.possession = "home";
        this.ball.lastTouchTeam = "home";
        this.ball.lastTouchPlayer = kicker;
      }
    }
  }

  clearAllTimeouts() {
    if (this.loopTimeout) {
      clearTimeout(this.loopTimeout);
      this.loopTimeout = null;
    }
    if (this.highlightInterval) {
      clearInterval(this.highlightInterval);
      this.highlightInterval = null;
    }
    if (this.highlightTimeouts && this.highlightTimeouts.length > 0) {
      this.highlightTimeouts.forEach(clearTimeout);
      this.highlightTimeouts = [];
    }
    if (this.setPieceTimeouts && this.setPieceTimeouts.length > 0) {
      this.setPieceTimeouts.forEach(clearTimeout);
      this.setPieceTimeouts = [];
    }
    const wasVisualActive = this.isHighlightRunning || this.isSetPieceRunning;
    this.isHighlightRunning = false;
    this.isSetPieceRunning = false;
    this.activeReplay = null;
    if (wasVisualActive && this.onHighlightEnd) {
      this.onHighlightEnd();
    }
  }

  start() {
    if (this.isSetPieceRunning || this.isHighlightRunning || this.isFinished || this.isHalfTime) return;
    if (this.isRunning) return;
    this.isRunning = true;
    this.pauseRequested = false;
    if (this.loopTimeout) {
      clearTimeout(this.loopTimeout);
      this.loopTimeout = null;
    }
    if (this.onTick) this.onTick(this.getState());
    this.loop();
  }

  pause() {
    this.isRunning = false;
    if (this.loopTimeout) {
      clearTimeout(this.loopTimeout);
      this.loopTimeout = null;
    }
    if (this.highlightInterval) {
      clearInterval(this.highlightInterval);
      this.highlightInterval = null;
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

    const target2D = isHome ? this.home2D[pitchIndex] : this.away2D[pitchIndex];
    if (isHome) {
      this.homeSubsRemaining--;
      if (!isHalfTime) this.homeWindowsRemaining--;
    } else {
      this.awaySubsRemaining--;
      if (!isHalfTime) this.awayWindowsRemaining--;
    }
    if (target2D) {
      const pac = Number(inPlayer.pac || inPlayer.ovr || 70);
      const dri = Number(inPlayer.dri || inPlayer.ovr || 70);
      target2D.player = inPlayer;
      target2D.number = inPlayer.number || (pitchIndex + 1);
      target2D.maxSpeed = target2D.isKeeper ? 5.8 + (pac - 50) * 0.025 : 6.4 + (pac - 50) * 0.045;
      target2D.acceleration = target2D.isKeeper ? 13.5 : 15.0 + ((pac + dri) * 0.5 - 50) * 0.12;
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
      const fresh = this._createPhysicsPlayer(p, idx, coord, teamSide);
      if (existing) {
        fresh.curX = existing.curX;
        fresh.curY = existing.curY;
        fresh.xm = existing.xm !== undefined ? existing.xm : (existing.curX / 100) * 105;
        fresh.ym = existing.ym !== undefined ? existing.ym : (existing.curY / 100) * 68;
        fresh.vx = existing.vx || 0;
        fresh.vy = existing.vy || 0;
        fresh.animPhase = existing.animPhase;
        fresh.facingX = existing.facingX;
        fresh.facingZ = existing.facingZ || 0;
        if (this.ball && this.ball.carrier === existing) {
          this.ball.carrier = fresh;
        }
        if (this.ball && this.ball.passTarget === existing) {
          this.ball.passTarget = fresh;
        }
      }
      return fresh;
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

    // Expiración y feedback del consejo del Segundo Entrenador / Cuerpo Técnico
    if (this.activeAssistantAdvice) {
      if (this.minute >= this.activeAssistantAdvice.feedbackMinute && !this.activeAssistantAdvice.feedbackDelivered) {
        this.activeAssistantAdvice.feedbackDelivered = true;
        this._deliverAssistantFeedback(this.activeAssistantAdvice);
      }
      if (this.minute >= this.activeAssistantAdvice.expiresAtMinute) {
        this.activeAssistantAdvice = null;
      }
    }

    // Comprobación periódica de análisis del Segundo Entrenador (cada 12-15 minutos)
    if (!this.isSkippingToEnd && !this.isFinished && !this.isHalfTime && !this.isHighlightRunning && !this.isSetPieceRunning) {
      if (this.minute >= this.nextAssistantCheckMinute && !this.currentPendingAdvice) {
        this._checkAssistantCoaching();
      }
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
    let homeDefBonus = this.homeInstructions?.outOfPossession?.defensiveLine === "low" ? 0.12 : (this.homeInstructions?.outOfPossession?.defensiveLine === "high" ? -0.06 : 0);
    let awayDefBonus = this.awayInstructions?.outOfPossession?.defensiveLine === "low" ? 0.12 : (this.awayInstructions?.outOfPossession?.defensiveLine === "high" ? -0.06 : 0);

    // Bono de solidez defensiva del asistente (+15%)
    if (this.activeAssistantAdvice && this.activeAssistantAdvice.isGoodReading) {
      const cat = this.activeAssistantAdvice.category;
      if (cat === "DEFENSIVE" || cat === "COUNTER" || cat === "HOLD_LEAD") {
        if (this.userSide === "home") homeDefBonus += 0.15;
        else awayDefBonus += 0.15;
      }
    }

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

    // Si el balón ya está en juego o en posesión de un equipo, NO reasignar posesión por sorteo en cada minuto;
    // la posesión cambia únicamente por robos físicos (_attemptTackle), intercepciones (_stepBallPhysics) o saques físicos.
    const ballAlreadyInPlay = Boolean(
      this.ball && (
        this.ball.carrier ||
        this.ball.passTarget ||
        this.ball.shotTeam ||
        this.ball.possession ||
        Math.hypot(this.ball.vx || 0, this.ball.vy || 0) > 0.35
      )
    );
    let currentPoss = ballAlreadyInPlay
      ? (this.ball.carrier?.side || this.ball.passTeam || this.ball.possession || this.lastPossession || "home")
      : (Math.random() < probHomePoss ? "home" : "away");

     this.lastPossession = currentPoss;
     if (!this.ball.carrier) {
      this.ball.possession = currentPoss;
       }

    if (currentPoss === "home") {
      this.stats.possessionTicks.home++;
    } else {
      this.stats.possessionTicks.away++;
    }

    const totalTicks = this.stats.possessionTicks.home + this.stats.possessionTicks.away;
    this.stats.possession.home = Math.round((this.stats.possessionTicks.home / totalTicks) * 100);
    this.stats.possession.away = 100 - this.stats.possession.home;

    // Modificadores tácticos de ímpetu ofensivo en la simulación autónoma a 20 ticks/segundo
    const lateHomeSurge = (this.minute >= 70 && this.homeScore <= this.awayScore) ? 0.003 : 0;
    let homeChanceMult = 0.25 + lateHomeSurge;
    if (this.minute <= 15) homeChanceMult *= 0.85;
    const leadDiffHome = this.homeScore - this.awayScore;
    if (leadDiffHome >= 3) homeChanceMult *= 0.40;
    else if (leadDiffHome >= 2) homeChanceMult *= 0.65;

    let awayChanceMult = 0.24;
    if (this.minute <= 15) awayChanceMult *= 0.85;
    const leadDiffAway = this.awayScore - this.homeScore;
    if (leadDiffAway >= 3) awayChanceMult *= 0.40;
    else if (leadDiffAway >= 2) awayChanceMult *= 0.65;

    if (this.activeShout) {
      if (this.userSide === "home" && this.activeShout.id === "SHOOT_ON_SIGHT") homeChanceMult *= 1.20;
      else if (this.userSide === "home" && this.activeShout.id === "WASTE_TIME") homeChanceMult *= 0.70;
      else if (this.userSide === "away" && this.activeShout.id === "WASTE_TIME") homeChanceMult *= 0.75;

      if (this.userSide === "away" && this.activeShout.id === "SHOOT_ON_SIGHT") awayChanceMult *= 1.20;
      else if (this.userSide === "away" && this.activeShout.id === "WASTE_TIME") awayChanceMult *= 0.70;
      else if (this.userSide === "home" && this.activeShout.id === "WASTE_TIME") awayChanceMult *= 0.75;
    }

    if (this.activeAssistantAdvice) {
      const isUserHome = this.userSide === "home";
      const isUserAway = this.userSide === "away";
      const cat = this.activeAssistantAdvice.category;
      const isGood = this.activeAssistantAdvice.isGoodReading;
      if (isGood) {
        if (cat === "OFFENSIVE" || cat === "HIGH_PRESS" || cat === "WIDE_PLAY") {
          homeChanceMult *= (isUserHome ? 1.15 : 1.0);
          awayChanceMult *= (isUserAway ? 1.15 : 1.0);
        } else if (cat === "DEFENSIVE" || cat === "COUNTER" || cat === "HOLD_LEAD") {
          homeChanceMult *= (!isUserHome ? 0.85 : 1.0);
          awayChanceMult *= (!isUserAway ? 0.85 : 1.0);
        } else if (cat === "SUBSTITUTION") {
          homeChanceMult *= (isUserHome ? 1.10 : 0.90);
          awayChanceMult *= (isUserAway ? 1.10 : 0.90);
        }
      } else {
        homeChanceMult *= (!isUserHome ? 1.10 : 1.0);
        awayChanceMult *= (!isUserAway ? 1.10 : 1.0);
      }
    }

    const homeAttackScore = (homeAtk / (homeAtk + awayDef)) * homeChanceMult;
    const awayAttackScore = (awayAtk / (awayAtk + homeDef)) * awayChanceMult;

    // 1. MOTOR DE FÍSICA Y AGENTES A 20 TICKS/SEGUNDO (Cero plantillas enlatadas)
    // En FAST_SIM avanzamos el motor físico autónomo calculando ticks de dt = 0.05s (20 Hz)
    // y grabando el buffer circular replayBuffer (últimos 15 segundos = 300 ticks).
    const emergentPaused = this._runAutonomousMinuteTicks(currentPoss, homeAttackScore, awayAttackScore);
    if (emergentPaused) {
      return !this.isSkippingToEnd;
    }

    // Posibles faltas y tarjetas en disputas del centro del campo
    const baseFoulChance = 0.052 * (this.weather?.foulMod || 1.0);
    const pressingHome = this.homeInstructions?.outOfPossession?.pressing || "mid";
    const pressingAway = this.awayInstructions?.outOfPossession?.pressing || "mid";
    const pressFoulMod = (pressingHome === "high" || pressingAway === "high") ? 1.30 : ((pressingHome === "low" && pressingAway === "low") ? 0.65 : 1.0);

    if (Math.random() < baseFoulChance * pressFoulMod) {
      const foulTeam = Math.random() > 0.5 ? "home" : "away";
      const userFoulMod = (this.activeTeamTalk ? this.activeTeamTalk.foulMod : 1.0) * (this.activeShout ? this.activeShout.foulMod : 1.0);
      if (foulTeam === this.userSide && userFoulMod < 1.0 && Math.random() > userFoulMod) {
        this._syncMetersTo2D();
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
        this._syncMetersTo2D();
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
          this._syncMetersTo2D();
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

      // Riesgo de lesión por entrada dura
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
        this._syncMetersTo2D();
        return true;
      }

      // Si la falta ocurre en zona peligrosa o dentro del área:
      // - Dentro del área rival (|X| > 36 y |Z| < 20.16) -> PENALTI
      // - Fuera del área en campo rival -> FALTA DIRECTA
      if (!this.isHighlightRunning && !this.isSetPieceRunning && (this.minute - this.lastHighlightMinute >= 2)) {
        const bxCentered = (this.ball.xm ?? 52.5) - 52.5;
        const bzCentered = (this.ball.ym ?? 34.0) - 34.0;
        const isVictimHome = victimTeam === "home";
        const inRivalBox = isVictimHome
          ? (bxCentered > 36.0 && Math.abs(bzCentered) < 20.16)
          : (bxCentered < -36.0 && Math.abs(bzCentered) < 20.16);

        if (inRivalBox) {
          this.lastHighlightMinute = this.minute;
          if (this.triggerSetPiece(victimTeam, "PENALTY")) {
            return true;
          }
        } else if (Math.random() < 0.28) {
          this.lastHighlightMinute = this.minute;
          if (this.triggerSetPiece(victimTeam, "FREE_KICK")) {
            return true;
          }
        }
      }
    }

    // Lance fortuito aislado del juego
    if (Math.random() < 0.0006) {
      const side = Math.random() > 0.5 ? "home" : "away";
      const pitch = side === "home" ? this.homePlayersOnPitch : this.awayPlayersOnPitch;
      const eligible = pitch.filter(p => !p.injury);
      if (eligible.length > 0) {
        const victim = eligible[Math.floor(Math.random() * eligible.length)];
        if (this.triggerPlayerInjury(victim, side, "random") && !this.isSkippingToEnd) {
          this._syncMetersTo2D();
          return true;
        }
      }
    }

    // Comprobar y realizar posibles cambios tácticos de la IA rival
    if (this.checkAISubstitutions() && !this.isSkippingToEnd) {
      this._syncMetersTo2D();
      return true;
    }

    this._syncMetersTo2D();
    return false;
  }

  // =========================================================================================
  // 2. BUFFER DE GRABACIÓN Y REPRODUCCIÓN 3D (replayBuffer - 15 SEGUNDOS A 20 TICKS/SEGUNDO)
  // =========================================================================================
  _setTickCommentary(text, badge = "MATCH ENGINE") {
    if (!text) return;
    this._currentTickCommentary = { text, badge };
    if (!this._recordingReplayOnly && !this._tactical2DOnly) {
      this._emitCommentary(text, badge, 1.4);
    }
  }

  _recordReplayFrame(eventTag = null) {
    const snapTeam = (arr) => arr.map(item => ({
      id: item.player?.id,
      xm: item.xm ?? 52.5,
      ym: item.ym ?? 34.0,
      vx: item.vx ?? 0,
      vy: item.vy ?? 0,
      facing: item.facing ?? 0,
      pose: item.pose || "idle",
      aiState: item.aiState || "POSITIONING"
    }));

    const frame = {
      minute: this.minute,
      second: this.matchSecond || 0,
      eventTag,
      commentary: this._currentTickCommentary || null,
      ball: {
        xm: this.ball.xm ?? 52.5,
        ym: this.ball.ym ?? 34.0,
        zm: this.ball.zm ?? 0,
        vx: this.ball.vx ?? 0,
        vy: this.ball.vy ?? 0,
        vz: this.ball.vz ?? 0,
        possession: this.ball.possession,
        carrierId: this.ball.carrier?.player?.id || null
      },
      home: snapTeam(this.home2D),
      away: snapTeam(this.away2D)
    };

    this._currentTickCommentary = null;
    this.replayBuffer.push(frame);
    if (this.replayBuffer.length > this.maxReplayBufferFrames) {
      this.replayBuffer.shift();
    }
    return frame;
  }

  // Avanza el motor autónomo a 20 ticks/segundo durante FAST_SIM grabando en replayBuffer.
  // Si emerge una ocasión clara de gol, falta peligrosa, penalti o córner, pausa FAST_SIM
  // y lanza la reproducción de los últimos 12-15 segundos reales del buffer en 3D.
  _runAutonomousMinuteTicks(currentPoss, homeAttackScore, awayAttackScore) {
    const dt = 0.05; // 20 ticks por segundo (50ms físicos por tick)
    const ticksPerSimStep = 80; // 4,5 segundos continuos de simulación por pulso (90 ticks a 20 Hz)

    // NO reasignar this.ball.carrier por sorteo de posesión en cada minuto si el balón ya está en juego o en posesión de un equipo;
    // solo inicializar en el saque inicial si aún no se ha puesto el balón en movimiento.
    const ballInPlayOrPossession = Boolean(
      this.ball.carrier ||
      this.ball.passTarget ||
      this.ball.shotTeam ||
      this.ball.lastTouchPlayer ||
      Math.hypot(this.ball.vx || 0, this.ball.vy || 0) > 0.25
    );
    if (!ballInPlayOrPossession) {
      const initSide = this.ball.possession || currentPoss || "home";
      const teamArr = initSide === "home" ? this.home2D : this.away2D;
      const fielders = teamArr.filter(p => !p.isKeeper);
      if (fielders.length > 0) {
        fielders.sort((a, b) => Math.hypot(a.xm - this.ball.xm, a.ym - this.ball.ym) - Math.hypot(b.xm - this.ball.xm, b.ym - this.ball.ym));
        this.ball.carrier = fielders[0];
        this.ball.possession = initSide;
        this.ball.lastTouchTeam = initSide;
        this.ball.lastTouchPlayer = fielders[0];
      }
    }

    this._liveAtkMomentum = {
      home: homeAttackScore,
      away: awayAttackScore,
      preferredPoss: currentPoss
    };

    this._recordingReplayOnly = true;
    this._pendingTickOutcome = null;

    // Asegurar que el replayBuffer acumule al menos 150 frames (7.5 segundos reales, dentro del rango 120-180 frames = 6 a 9s)
    // de elaboración de la jugada previos a cualquier disparo/ocasión para que en el 3D se vea toda la construcción táctica.
    const minBuildupFramesBeforeClimax = 150;

    let triggeredOutcome = null;
    for (let t = 0; t < ticksPerSimStep; t++) {
      this.stepRealTimePhysics(dt);
      this._recordReplayFrame();

      if (this._pendingTickOutcome) {
        if (this.replayBuffer.length >= minBuildupFramesBeforeClimax) {
          triggeredOutcome = this._pendingTickOutcome;
          this._pendingTickOutcome = null;
          break;
        } else {
          // Si aún no hay al menos 120-180 frames de elaboración grabados en el buffer, seguir acumulando elaboración
          this._pendingTickOutcome = null;
        }
      }
    }

    this._recordingReplayOnly = false;

    if (!triggeredOutcome) {
      return false;
    }

    // Cooldown mínimo entre jugadas reproducidas para mantener ritmo televisivo (6-10 jugadas por parte)
    if (triggeredOutcome.outcome !== "GOAL" && triggeredOutcome.outcome !== "PENALTY" && (this.minute - this.lastHighlightMinute < 3)) {
      return false;
    }
    this.lastHighlightMinute = this.minute;

    // Si la jugada emergente desembocó en PENALTI o FALTA DIRECTA en zona peligrosa:
    if (triggeredOutcome.outcome === "PENALTY") {
      if (this.triggerSetPiece(triggeredOutcome.attackingSide, "PENALTY")) {
        return true;
      }
      return false;
    }
    if (triggeredOutcome.outcome === "FREE_KICK") {
      if (this.triggerSetPiece(triggeredOutcome.attackingSide, "FREE_KICK", triggeredOutcome.spot)) {
        return true;
      }
      return false;
    }

    // Grabar 34 ticks adicionales (1.7 segundos) de continuación física tras el impacto/desenlace
    // (celebración, balón entrando en la red, despeje del portero o salida por línea de fondo)
    const climaxFrameIndex = Math.max(0, this.replayBuffer.length - 1);
    for (let f = 0; f < 34; f++) {
      this._stepFollowThroughTick(dt, triggeredOutcome);
      this._recordReplayFrame("FOLLOW_THROUGH");
    }

    // Extraer los últimos 12-15 segundos (hasta 280 frames a 20 Hz = 14s) para reproducir en el visor 3D
    const takeFrames = Math.min(this.replayBuffer.length, 280);
    const startIdx = Math.max(0, this.replayBuffer.length - takeFrames);
    const playbackFrames = this.replayBuffer.slice(startIdx);
    const relativeClimaxIdx = Math.max(0, climaxFrameIndex - startIdx);

    this.startReplayHighlight(playbackFrames, relativeClimaxIdx, triggeredOutcome, () => {
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
  }

  // Avanza la inercia física posterior al remate (balón en la red, rechace o salida de fondo)
  _stepFollowThroughTick(dt, outcomeInfo) {
    this.ball.xm += (this.ball.vx || 0) * dt;
    this.ball.ym += (this.ball.vy || 0) * dt;
    this.ball.zm = Math.max(0, (this.ball.zm || 0) + (this.ball.vz || 0) * dt);
    if (this.ball.zm > 0) {
      this.ball.vz = (this.ball.vz || 0) - 9.81 * dt;
    } else {
      this.ball.vz = 0;
      this.ball.vx = (this.ball.vx || 0) * 0.88;
      this.ball.vy = (this.ball.vy || 0) * 0.88;
    }

    if (outcomeInfo.outcome === "GOAL") {
      // Frenado contra la red de la portería (profundidad 2.2m detrás de la línea de gol)
      if (this.ball.xm > 107.0) { this.ball.xm = 107.0; this.ball.vx = 0; this.ball.vy *= 0.5; }
      if (this.ball.xm < -2.0) { this.ball.xm = -2.0; this.ball.vx = 0; this.ball.vy *= 0.5; }
      this.ball.ym = Math.max(30.4, Math.min(37.6, this.ball.ym));
    } else {
      this.ball.xm = Math.max(-3.5, Math.min(108.5, this.ball.xm));
      this.ball.ym = Math.max(-2.5, Math.min(70.5, this.ball.ym));
    }

    // Los jugadores desaceleran suavemente siguiendo la acción
    const stepTeamFollow = (arr) => {
      for (const p of arr) {
        p.vx = (p.vx || 0) * 0.90;
        p.vy = (p.vy || 0) * 0.90;
        p.xm = Math.max(1, Math.min(104, (p.xm || 52.5) + p.vx * dt));
        p.ym = Math.max(1, Math.min(67, (p.ym || 34.0) + p.vy * dt));
        if (outcomeInfo.shooter && p.player?.id === outcomeInfo.shooter.id && outcomeInfo.outcome === "GOAL") {
          p.pose = "celebrate";
        } else {
          p.pose = Math.hypot(p.vx, p.vy) > 1.2 ? "run" : "idle";
        }
      }
    };
    stepTeamFollow(this.home2D);
    stepTeamFollow(this.away2D);
  }

  // Inicia la reproducción en el visor 3D a velocidad 1x de los frames grabados en replayBuffer
  startReplayHighlight(frames, climaxFrameIndex, outcomeInfo, onComplete) {
    if (!frames || frames.length === 0) {
      if (onComplete) onComplete();
      return;
    }

    this.isHighlightRunning = true;
    this.speed = 1;

    const attackingSide = outcomeInfo.attackingSide || "home";
    const isHome = attackingSide === "home";
    const atkTeam = isHome ? this.homeTeam : this.awayTeam;
    const defTeam = isHome ? this.awayTeam : this.homeTeam;
    const shooter = outcomeInfo.shooter || (isHome ? this.homePlayersOnPitch[9] : this.awayPlayersOnPitch[9]) || this.homePlayersOnPitch[0];
    const passer = outcomeInfo.passer || null;
    const defender = outcomeInfo.defender || (isHome ? this.awayPlayersOnPitch[3] : this.homePlayersOnPitch[3]) || this.awayPlayersOnPitch[0];
    const goalkeeper = outcomeInfo.goalkeeper || (isHome ? this.awayPlayersOnPitch[0] : this.homePlayersOnPitch[0]);
    const outcome = outcomeInfo.outcome || "WIDE";

    const firstLiveCommentFrame = frames.find(f => f.commentary && f.commentary.text);
    const buildNote = firstLiveCommentFrame
      ? firstLiveCommentFrame.commentary.text
      : (outcomeInfo.buildNote || `⚡ ${atkTeam.shortName} mueve el balón buscando espacios ante el bloque de ${defTeam.shortName}.`);
    const shotNote = outcomeInfo.shotNote || `🎯 ¡${shooter?.name || "El atacante"} finaliza la jugada ante ${goalkeeper?.name || "el portero"}!`;

    this.activeReplay = {
      frames,
      cursor: 0,
      lastCommentFrameIdx: -1,
      tickRate: 20, // 20 ticks por segundo (velocidad 1x real)
      climaxFrameIndex,
      climaxCommitted: false,
      outcomeInfo: {
        ...outcomeInfo,
        attackingSide,
        atkTeam,
        defTeam,
        shooter,
        passer,
        defender,
        goalkeeper,
        outcome,
        buildNote,
        shotNote
      },
      onComplete
    };

    // Reloj de partido en tiempo real (1s real = 1s de partido) durante la reproducción
    if (this.highlightInterval) {
      clearInterval(this.highlightInterval);
      this.highlightInterval = null;
    }
    this.highlightInterval = setInterval(() => {
      if (!this.isRunning || (!this.isHighlightRunning && !this.isSetPieceRunning)) {
        return;
      }
      this.matchSecond = (this.matchSecond || 0) + 1;
      if (this.matchSecond >= 60) {
        this.matchSecond = 0;
        this.minute++;
      }
      if (this.onTick) this.onTick(this.getState());
    }, 1000);

    // Colocar el estado inicial del frame 0 del buffer
    this._applyInterpolatedReplayFrame(0);

    const baseHighlightData = {
      type: outcomeInfo.isSetPiece ? "SET_PIECE_REPLAY" : "KEY_CHANCE",
      playPattern: outcomeInfo.playPattern || "AUTONOMOUS_AGENT_PLAY",
      situationalContext: outcomeInfo.situationalContext || "OPEN_PLAY",
      attackingSide,
      atkTeam,
      defTeam,
      shooter,
      passer,
      defender,
      goalkeeper,
      outcome,
      commentary: buildNote,
      minute: this.minute,
      totalDuration: Math.round((frames.length / 20) * 1000)
    };

    if (this.onHighlightStart) {
      this.onHighlightStart({
        ...baseHighlightData,
        phase: "BUILDUP",
        phaseLabel: outcomeInfo.headline || "JUGADA EN DIRECTO",
        phaseDuration: Math.round((frames.length / 20) * 1000),
        tacticalNote: buildNote
      });
    }

    // Permitir saltar la reproducción inmediatamente
    this.skipCurrentHighlight = () => {
      if (!this.activeReplay) return;
      this.finishActiveReplay(true);
    };

    if (this.isSkippingToEnd || !this.showKeyHighlights) {
      this.finishActiveReplay(true);
    }
  }

  // Interpola con spline cúbica Catmull-Rom entre ticks de replayBuffer (20 Hz -> 60 FPS C1 continuos en 3D)
  _applyInterpolatedReplayFrame(cursor) {
    if (!this.activeReplay || !this.activeReplay.frames.length) return;
    const frames = this.activeReplay.frames;
    const maxIdx = frames.length - 1;
    const idxA = Math.max(0, Math.min(maxIdx, Math.floor(cursor)));
    const idxB = Math.min(maxIdx, idxA + 1);
    const idx0 = Math.max(0, idxA - 1);
    const idx3 = Math.min(maxIdx, idxB + 1);
    const alpha = Math.max(0, Math.min(1, cursor - idxA));

    const f0 = frames[idx0];
    const fA = frames[idxA];
    const fB = frames[idxB];
    const f3 = frames[idx3];

    const cSpline = (p0, p1, p2, p3, t) => {
      const v0 = (p2 - p0) * 0.5;
      const v1 = (p3 - p1) * 0.5;
      const t2 = t * t;
      const t3 = t2 * t;
      return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
    };

    // Interpolar balón con curva cúbica continua
    this.ball.xm = cSpline(f0.ball.xm, fA.ball.xm, fB.ball.xm, f3.ball.xm, alpha);
    this.ball.ym = cSpline(f0.ball.ym, fA.ball.ym, fB.ball.ym, f3.ball.ym, alpha);
    this.ball.zm = Math.max(0, cSpline(f0.ball.zm, fA.ball.zm, fB.ball.zm, f3.ball.zm, alpha));
    this.ball.vx = fA.ball.vx + (fB.ball.vx - fA.ball.vx) * alpha;
    this.ball.vy = fA.ball.vy + (fB.ball.vy - fA.ball.vy) * alpha;
    this.ball.vz = fA.ball.vz + (fB.ball.vz - fA.ball.vz) * alpha;
    this.ball.possession = fB.ball.possession;

    const applyTeam = (targetArr, snap0, snapA, snapB, snap3) => {
      for (let i = 0; i < targetArr.length; i++) {
        const item = targetArr[i];
        const sA = snapA.find(s => s.id === item.player?.id) || snapA[i];
        const sB = snapB.find(s => s.id === item.player?.id) || snapB[i];
        if (!sA || !sB) continue;
        const s0 = snap0.find(s => s.id === item.player?.id) || snap0[i] || sA;
        const s3 = snap3.find(s => s.id === item.player?.id) || snap3[i] || sB;

        item.xm = cSpline(s0.xm, sA.xm, sB.xm, s3.xm, alpha);
        item.ym = cSpline(s0.ym, sA.ym, sB.ym, s3.ym, alpha);
        item.vx = sA.vx + (sB.vx - sA.vx) * alpha;
        item.vy = sA.vy + (sB.vy - sA.vy) * alpha;

        // Interpolar ángulo de orientación suavemente
        let dAngle = (sB.facing ?? 0) - (sA.facing ?? 0);
        while (dAngle > Math.PI) dAngle -= Math.PI * 2;
        while (dAngle < -Math.PI) dAngle += Math.PI * 2;
        item.facing = (sA.facing ?? 0) + dAngle * alpha;
        item.pose = alpha < 0.5 ? sA.pose : sB.pose;
        item.aiState = sB.aiState;
      }
    };

    applyTeam(this.home2D, f0.home, fA.home, fB.home, f3.home);
    applyTeam(this.away2D, f0.away, fA.away, fB.away, f3.away);

    const all2D = [...this.home2D, ...this.away2D];
    this.ball.carrier = fB.ball.carrierId ? (all2D.find(p => p.player?.id === fB.ball.carrierId) || null) : null;

    this._syncMetersTo2D();
  }

  // Llamado en cada frame de requestAnimationFrame (60 FPS) desde el visor 3D
  stepReplayPlayback(dtSeconds) {
    if (!this.activeReplay) return false;
    if (!this.isRunning && !this.isHighlightRunning && !this.isSetPieceRunning) return false;

    const rep = this.activeReplay;
    rep.cursor += dtSeconds * rep.tickRate;

    this._applyInterpolatedReplayFrame(rep.cursor);

    // Espejo de narración en tiempo real: emitir exactamente el comentario nacido en cada tick físico alcanzado
    const currIdx = Math.min(rep.frames.length - 1, Math.floor(rep.cursor));
    if (currIdx > rep.lastCommentFrameIdx) {
      for (let k = rep.lastCommentFrameIdx + 1; k <= currIdx; k++) {
        const f = rep.frames[k];
        if (f && f.commentary && f.commentary.text) {
          if (this.onCommentary) {
            this.onCommentary(f.commentary.text, f.commentary.badge || "EN VIVO");
          }
          if (this.onHighlightPhase) {
            this.onHighlightPhase({
              phase: f.eventTag || "LIVE",
              phaseLabel: f.commentary.badge || "EN VIVO",
              tacticalNote: f.commentary.text,
              commentary: f.commentary.text
            });
          }
        }
      }
      rep.lastCommentFrameIdx = currIdx;
    }

    // Cuando el cursor alcanza el tick exacto del impacto/gol, aplicamos el resultado al marcador y alertas
    if (!rep.climaxCommitted && rep.cursor >= rep.climaxFrameIndex) {
      rep.climaxCommitted = true;
      this._commitReplayClimax(rep.outcomeInfo, false);
    }

    if (rep.cursor >= rep.frames.length - 1) {
      this.finishActiveReplay(false);
      return false;
    }
    return true;
  }

  // Registra las estadísticas y goles en el instante exacto en que ocurren físicamente en el replay 3D
  _commitReplayClimax(info, isSkip = false) {
    const { attackingSide, atkTeam, defTeam, shooter, passer, defender, goalkeeper, outcome } = info;
    const isHome = attackingSide === "home";
    const defPlayers = isHome ? this.awayPlayersOnPitch : this.homePlayersOnPitch;

    this.stats.shots[attackingSide]++;
    if (shooter) shooter.matchShots = (shooter.matchShots || 0) + 1;
    if (passer && passer.id !== shooter?.id) {
      passer.matchKeyPasses = (passer.matchKeyPasses || 0) + 1;
      this.adjustPlayerRating(passer, 0.15);
    }

    if (outcome === "BLOCK") {
      if (defender) {
        defender.matchTackles = (defender.matchTackles || 0) + 1;
        this.adjustPlayerRating(defender, 0.35);
      }
      this.triggerAlert("BLOQUEO", `🛡️ ¡Bloqueo defensivo de ${defender?.name || "la defensa"}!`, isHome ? "away" : "home", isSkip ? 1800 : 2800);
    } else if (outcome === "POST") {
      if (shooter) this.adjustPlayerRating(shooter, 0.2);
      this.triggerAlert("AL PALO", `🥅 ¡Al palo! El disparo de ${shooter?.name || "el atacante"} se estrella en la madera`, attackingSide, isSkip ? 1800 : 2800);
    } else if (outcome === "WIDE") {
      if (shooter) this.adjustPlayerRating(shooter, -0.08);
      this.triggerAlert("DISPARO FUERA", `💨 Disparo desviado de ${shooter?.name || "el atacante"}`, attackingSide, isSkip ? 1600 : 2600);
    } else if (outcome === "SAVE") {
      this.stats.shotsOnTarget[attackingSide]++;
      if (shooter) this.adjustPlayerRating(shooter, 0.15);
      if (goalkeeper) {
        goalkeeper.matchSaves = (goalkeeper.matchSaves || 0) + 1;
        this.adjustPlayerRating(goalkeeper, 0.45);
      }
      this.triggerAlert("PARADÓN", `🧤 ¡Intervención salvadora de ${goalkeeper?.name || "el portero"} ante ${shooter?.name || "el rematador"}!`, isHome ? "away" : "home", isSkip ? 2000 : 3000);
    } else if (outcome === "GOAL") {
      this.stats.shotsOnTarget[attackingSide]++;
      if (isHome) this.homeScore++;
      else this.awayScore++;

      if (shooter) {
        shooter.goals = (shooter.goals || 0) + 1;
        shooter.matchGoals = (shooter.matchGoals || 0) + 1;
        this.adjustPlayerRating(shooter, 1.15);
      }
      if (passer && passer.id !== shooter?.id) {
        passer.assists = (passer.assists || 0) + 1;
        passer.matchAssists = (passer.matchAssists || 0) + 1;
        this.adjustPlayerRating(passer, 0.65);
      }
      if (goalkeeper) this.adjustPlayerRating(goalkeeper, -0.25);
      defPlayers.filter(p => ["DFC", "LD", "LI", "MCD"].includes(p.pos)).forEach(d => this.adjustPlayerRating(d, -0.15));

      this.events.push({
        type: "GOAL",
        minute: this.minute,
        teamSide: attackingSide,
        teamId: atkTeam.id,
        teamName: atkTeam.shortName,
        playerName: shooter?.name || "Goleador",
        assisterName: (passer && passer.id !== shooter?.id) ? passer.name : null,
        currentScore: `${this.homeScore} - ${this.awayScore}`,
        isSetPiece: Boolean(info.isSetPiece),
        setPieceType: info.setPieceType || null
      });

      if (!this.isSkippingToEnd) {
        this.triggerAlert("GOL", `⚽ ¡GOOOOOOL DE ${(shooter?.name || atkTeam.shortName).toUpperCase()}! (${this.homeScore}-${this.awayScore})`, attackingSide, isSkip ? 2400 : 4200);
        if (this.onTick) this.onTick(this.getState());
      }
    }
  }

  finishActiveReplay(isSkip = false) {
    if (!this.activeReplay) return;
    const rep = this.activeReplay;
    this.activeReplay = null;

    if (!rep.climaxCommitted) {
      rep.climaxCommitted = true;
      const lastIdx = rep.frames.length - 1;
      if (lastIdx >= 0) {
        const lastF = rep.frames[lastIdx];
        this.ball.xm = lastF.ball.xm;
        this.ball.ym = lastF.ball.ym;
        this.ball.zm = lastF.ball.zm;
      }
      this._commitReplayClimax(rep.outcomeInfo, true);
    }

    const { outcome, attackingSide, atkTeam, defTeam, shooter, passer, defender, goalkeeper, shotNote, saveBecomesCorner } = rep.outcomeInfo;
    const isHome = attackingSide === "home";
    const onComplete = rep.onComplete;

    if (outcome === "GOAL") {
      this.resetKickoff(isHome ? "away" : "home");
      if (this.highlightInterval) {
        clearInterval(this.highlightInterval);
        this.highlightInterval = null;
      }
      this.isHighlightRunning = false;
      this.isSetPieceRunning = false;
      this.activeSetPiece = null;
      this.speed = this.userSpeed;
      this.skipCurrentHighlight = null;

      if (!this.isSkippingToEnd && this.onHighlightEnd) {
        this.onHighlightEnd({
          outcome: "GOAL",
          tacticalAnalysis: shotNote,
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
      return;
    }

    // Si una parada desvió el balón por línea de fondo a córner:
    this.concludeHighlight({
      outcome,
      tacticalAnalysis: shotNote,
      onComplete: () => {
        if (outcome === "SAVE" && saveBecomesCorner && !this.isFinished && !this.isHalfTime && this.showKeyHighlights && !isSkip && !this.isSkippingToEnd) {
          const startedSP = this.triggerSetPiece(attackingSide, "CORNER", null, onComplete);
          if (!startedSP && onComplete) onComplete();
        } else if (onComplete) {
          onComplete();
        }
      }
    });
  }

  concludeHighlight({ outcome, tacticalAnalysis, onComplete }) {
    if (this.highlightInterval) {
      clearInterval(this.highlightInterval);
      this.highlightInterval = null;
    }
    this.isHighlightRunning = false;
    this.isSetPieceRunning = false;
    this.activeSetPiece = null;
    this.activeReplay = null;
    this.speed = this.userSpeed;
    this.skipCurrentHighlight = null;
    this.crowdRoarUnlockedByHighlight = true;
    if (this.highlightTimeouts && this.highlightTimeouts.length > 0) {
      this.highlightTimeouts.forEach(clearTimeout);
      this.highlightTimeouts = [];
    }

    this._syncMetersTo2D();
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

  // =========================================================================================
  // 3. GEOMETRÍA VECTORIAL ESTRICTA DE BALÓN PARADO (FALTAS, PENALTIS Y CÓRNERS FIFA)
  // =========================================================================================
  // Genera un punto de falta directa SIEMPRE ESTRICTAMENTE FUERA del área de penalti (|X| > 36 y |Z| < 20.16 es penalti)
  generateFreeKickSpot(attackingSide) {
    const isHome = attackingSide === "home";

    // Coordenadas centradas FIFA: X en [-52.5, 52.5], Z en [-34, 34]
    // Área rival: |X| >= 36.0 y |Z| <= 20.16
    const isLateral = Math.random() < 0.28;
    let cx, cz;
    if (isLateral) {
      // Falta lateral fuera del área (|Z| entre 21.5m y 30.5m, |X| entre 28m y 45m)
      const absX = 28.0 + Math.random() * 16.0;
      cx = isHome ? absX : -absX;
      const absZ = 21.5 + Math.random() * 8.5;
      cz = Math.random() < 0.5 ? -absZ : absZ;
    } else {
      // Falta frontal o semifrontal fuera de la frontal del área (|X| entre 24.5m y 34.5m, distancia a portería 18m-28m)
      const absX = 24.5 + Math.random() * 9.8; // Máximo 34.3m (< 36.0m del área)
      cx = isHome ? absX : -absX;
      cz = (Math.random() * 2 - 1) * 17.5;
    }

    // Guardia matemática estricta: prohibido caer dentro del área de penalti (|X| >= 35.5 y |Z| <= 20.5)
    if (Math.abs(cx) >= 35.5 && Math.abs(cz) <= 20.5) {
      cx = isHome ? 34.2 : -34.2;
    }

    const xm = cx + 52.5;
    const ym = cz + 34.0;
    const spotX = (xm / 105) * 100;
    const spotY = (ym / 68) * 100;

    const goalX = isHome ? 52.5 : -52.5;
    const distanceMeters = Math.round(Math.hypot(goalX - cx, 0 - cz));

    return { spot: { x: spotX, y: spotY, xm, ym, cx, cz }, distanceMeters };
  }

  // Activar jugada a balón parado (CORNER, FREE_KICK o PENALTY) con geometría vectorial FIFA
  triggerSetPiece(attackingSide, type = "CORNER", customSpotData = null, postSetPieceCallback = null) {
    if (this.isFinished || this.isHalfTime || this.isHighlightRunning || this.isSetPieceRunning) return false;

    const isHome = attackingSide === "home";
    const atkTeam = isHome ? this.homeTeam : this.awayTeam;
    const defTeam = isHome ? this.awayTeam : this.homeTeam;
    const atkPlayers = isHome ? this.homePlayersOnPitch : this.awayPlayersOnPitch;
    const defPlayers = isHome ? this.awayPlayersOnPitch : this.homePlayersOnPitch;

    let actualType = type;
    let spotX, spotY, xm, ym, distanceMeters = 11;

    if (actualType === "CORNER") {
      // Córner exacto en la esquina (X = ±52.5, Z = ±34)
      const cx = isHome ? 52.5 : -52.5;
      const cz = Math.random() < 0.5 ? -34.0 : 34.0;
      xm = cx + 52.5;
      ym = cz + 34.0;
      spotX = (xm / 105) * 100;
      spotY = (ym / 68) * 100;
      distanceMeters = 34;
    } else if (actualType === "PENALTY") {
      // Penalti exacto en el punto fatídico (X = ±41.5, Z = 0)
      const cx = isHome ? 41.5 : -41.5;
      const cz = 0;
      xm = cx + 52.5;
      ym = cz + 34.0;
      spotX = (xm / 105) * 100;
      spotY = (ym / 68) * 100;
      distanceMeters = 11;
    } else {
      const fkData = customSpotData || this.generateFreeKickSpot(attackingSide);
      spotX = fkData.spot.x;
      spotY = fkData.spot.y;
      xm = fkData.spot.xm ?? (spotX * 1.05);
      ym = fkData.spot.ym ?? (spotY * 0.68);
      const cx = xm - 52.5;
      const cz = ym - 34.0;

      // Si por cualquier motivo las coordenadas entrantes están dentro del área rival (|X| > 36 y |Z| < 20.16), es PENALTI
      const insideRivalBox = isHome
        ? (cx > 36.0 && Math.abs(cz) < 20.16)
        : (cx < -36.0 && Math.abs(cz) < 20.16);

      if (insideRivalBox) {
        actualType = "PENALTY";
        const penCx = isHome ? 41.5 : -41.5;
        xm = penCx + 52.5;
        ym = 34.0;
        spotX = (xm / 105) * 100;
        spotY = 50;
        distanceMeters = 11;
      } else {
        const goalCx = isHome ? 52.5 : -52.5;
        distanceMeters = fkData.distanceMeters || Math.round(Math.hypot(goalCx - cx, 0 - cz));
        if (distanceMeters > 34) {
          this.ball.xm = xm;
          this.ball.ym = ym;
          this.ball.zm = 0;
          this.ball.possession = attackingSide;
          this._syncMetersTo2D();
          if (!this.isSkippingToEnd) {
            this.triggerAlert("FALTA", `⚠️ Falta a ${distanceMeters}m de portería para ${atkTeam.shortName}. Saque en corto.`, attackingSide, 2200);
          }
          return false;
        }
      }
    }

    // Modo simulación instantánea hasta el final
    if (this.isSkippingToEnd) {
      if (actualType === "CORNER") this.stats.corners[attackingSide]++;
      this.stats.shots[attackingSide]++;
      const convChance = actualType === "PENALTY" ? 0.76 : 0.08;
      if (Math.random() < (actualType === "PENALTY" ? 0.88 : 0.35)) {
        this.stats.shotsOnTarget[attackingSide]++;
        if (Math.random() < convChance) {
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
      type: actualType,
      attackingSide,
      atkTeam,
      defTeam,
      atkPlayers,
      defPlayers,
      spot: { x: spotX, y: spotY, xm, ym },
      distanceMeters,
      cornerSide,
      minute: this.minute
    };

    if (attackingSide === this.userSide && this.hasCustomOnSetPiece && actualType !== "PENALTY") {
      this.pause();
      this.onSetPiece(setPieceInfo);
    } else {
      const aiSetup = this.buildAISetPieceSetup(setPieceInfo);
      this.executeSetPiece(aiSetup, () => {
        if (postSetPieceCallback) {
          postSetPieceCallback();
        }
      });
    }
    return true;
  }

  buildAISetPieceSetup(info) {
    const outfield = info.atkPlayers.filter(p => p.pos !== "POR");
    const sortedKickers = [...outfield].sort((a, b) => ((b.pas || 70) + (b.sho || 70)) - ((a.pas || 70) + (a.sho || 70)));
    const taker = sortedKickers[0] || outfield[0];
    const nonTakers = outfield.filter(p => p.id !== taker.id);

    let targetStrategy = "DIRECT_SHOT";
    if (info.type === "PENALTY") {
      targetStrategy = "DIRECT_SHOT";
    } else if (info.type === "FREE_KICK") {
      if (info.distanceMeters && info.distanceMeters <= 27) {
        targetStrategy = Math.random() < 0.72 ? "DIRECT_SHOT" : "PENALTY_SPOT";
      } else {
        targetStrategy = Math.random() < 0.55 ? "PENALTY_SPOT" : "FAR_POST";
      }
    } else {
      const strategies = ["NEAR_POST", "PENALTY_SPOT", "FAR_POST"];
      targetStrategy = strategies[Math.floor(Math.random() * strategies.length)];
    }

    const zones = ["NEAR_POST", "PENALTY_SPOT", "FAR_POST", "EDGE_BOX", "SHORT_OPTION", "STAY_BACK"];
    const placements = {};
    zones.forEach((z, idx) => {
      if (nonTakers[idx]) placements[z] = nonTakers[idx];
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

  // Posiciona los 22 jugadores y el balón aplicando estrictamente los vectores matemáticos FIFA
  _applyStrictSetPieceGeometry(type, attackingSide, spotXm, spotYm, taker, placements = {}) {
    const isHome = attackingSide === "home";
    const atk2D = isHome ? this.home2D : this.away2D;
    const def2D = isHome ? this.away2D : this.home2D;

    const goalXm = isHome ? 105.0 : 0.0;
    const goalYm = 34.0;

    // Coordenadas FIFA centradas: X = xm - 52.5, Z = ym - 34.0
    let ballCx = spotXm - 52.5;
    let ballCz = spotYm - 34.0;

    if (type === "PENALTY") {
      ballCx = isHome ? 41.5 : -41.5;
      ballCz = 0.0;
    } else if (type === "CORNER") {
      ballCx = isHome ? 52.5 : -52.5;
      ballCz = ballCz < 0 ? -34.0 : 34.0;
    } else {
      // FALTA DIRECTA: estrictamente fuera del área rival (|X| < 35.2 si |Z| < 20.5)
      if (Math.abs(ballCx) >= 35.2 && Math.abs(ballCz) <= 20.5) {
        ballCx = isHome ? 34.0 : -34.0;
      }
    }

    const bXm = ballCx + 52.5;
    const bYm = ballCz + 34.0;

    this.ball.xm = bXm;
    this.ball.ym = bYm;
    this.ball.zm = 0;
    this.ball.vx = 0;
    this.ball.vy = 0;
    this.ball.vz = 0;
    this.ball.carrier = null;
    this.ball.passTarget = null;
    this.ball.shotTeam = null;
    this.ball.possession = attackingSide;

    // Vector unitario desde el balón (ballPos) hacia el centro de la portería rival (goalPos = (±52.5, 0))
    const vecX = goalXm - bXm;
    const vecY = goalYm - bYm;
    const vecLen = Math.hypot(vecX, vecY) || 1;
    const ux = vecX / vecLen;
    const uy = vecY / vecLen;
    // Vector perpendicular a la línea de tiro para alinear los hombros de la barrera
    const perpX = -uy;
    const perpY = ux;

    const placeItem = (item, xm, ym, faceX = goalXm, faceY = goalYm) => {
      if (!item) return;
      item.xm = Math.max(0.4, Math.min(104.6, xm));
      item.ym = Math.max(0.4, Math.min(67.6, ym));
      item.vx = 0;
      item.vy = 0;
      item.pose = "idle";
      item.aiState = "SET_PIECE";
      item.facing = Math.atan2(faceY - item.ym, faceX - item.xm);
    };

    const kickerItem = atk2D.find(p => p.player?.id === taker?.id) || atk2D.find(p => !p.isKeeper) || atk2D[1];
    const atkGk = atk2D.find(p => p.isKeeper) || atk2D[0];
    const defGk = def2D.find(p => p.isKeeper) || def2D[0];
    const otherAtk = atk2D.filter(p => p !== kickerItem && p !== atkGk);
    const otherDef = def2D.filter(p => p !== defGk);

    // Portero atacante en su área
    placeItem(atkGk, isHome ? 6.0 : 99.0, 34.0, bXm, bYm);

    if (type === "PENALTY") {
      // PENALTI REGLAMENTARIO FIFA:
      // 1. Balón en (41.5, 0) -> xm = 94.0 (home) o 11.0 (away), ym = 34.0
      // 2. Portero sobre la línea de gol (52.5, 0) -> xm = 105.0 (home) o 0.0 (away), ym = 34.0
      placeItem(defGk, isHome ? 104.85 : 0.15, 34.0, bXm, bYm);
      // 3. Lanzador a 3m detrás del balón (38.5, 0) -> xm = 91.0 (home) o 14.0 (away), ym = 34.0
      placeItem(kickerItem, isHome ? (bXm - 3.0) : (bXm + 3.0), 34.0, goalXm, goalYm);

      // 4. Los otros 20 jugadores estrictamente fuera del área (|X| < 35.5) y fuera del semicírculo (dist > 9.15m del punto de penalti)
      const edgeLineXm = isHome ? (52.5 + 34.8) : (52.5 - 34.8); // |X| = 34.8 < 35.5
      const zOffsets = [-17.5, -13.0, -9.8, -6.8, 6.8, 9.8, 13.0, 17.5, -21.0];
      otherAtk.forEach((p, idx) => {
        const zOff = zOffsets[idx % zOffsets.length];
        let px = edgeLineXm - (isHome ? (idx % 2) * 1.4 : -(idx % 2) * 1.4);
        let py = 34.0 + zOff;
        // Asegurar distancia > 9.4m al punto de penalti (semicírculo reglamentario)
        const dPen = Math.hypot(px - bXm, py - bYm);
        if (dPen < 9.5) {
          px = isHome ? (bXm - Math.sqrt(Math.max(1, 9.6 * 9.6 - zOff * zOff))) : (bXm + Math.sqrt(Math.max(1, 9.6 * 9.6 - zOff * zOff)));
        }
        placeItem(p, px, py, goalXm, goalYm);
      });
      otherDef.forEach((p, idx) => {
        const zOff = zOffsets[idx % zOffsets.length] + (idx % 2 === 0 ? 1.1 : -1.1);
        let px = edgeLineXm - (isHome ? 0.7 : -0.7);
        let py = 34.0 + zOff;
        const dPen = Math.hypot(px - bXm, py - bYm);
        if (dPen < 9.5) {
          px = isHome ? (bXm - Math.sqrt(Math.max(1, 9.6 * 9.6 - zOff * zOff))) : (bXm + Math.sqrt(Math.max(1, 9.6 * 9.6 - zOff * zOff)));
        }
        placeItem(p, px, py, bXm, bYm);
      });
    } else if (type === "FREE_KICK") {
      // FALTA DIRECTA REGLAMENTARIA FIFA:
      // 1. Lanzador a 1.5m detrás del balón en dirección opuesta a la portería
      placeItem(kickerItem, bXm - ux * 1.5, bYm - uy * 1.5, goalXm, goalYm);

      // 2. Barrera de 4 defensas sobre el vector balón->portería exactamente a 9.15 metros del balón,
      //    alineados perpendicularmente al ángulo de tiro (separación de 0.75m hombro con hombro)
      const wallCenterXm = bXm + ux * 9.15;
      const wallCenterYm = bYm + uy * 9.15;
      const wallDefenders = otherDef.slice(0, 4);
      const boxDefenders = otherDef.slice(4);

      wallDefenders.forEach((dp, idx) => {
        const lateralOffset = (idx - 1.5) * 0.78;
        placeItem(
          dp,
          wallCenterXm + perpX * lateralOffset,
          wallCenterYm + perpY * lateralOffset,
          bXm,
          bYm
        );
      });

      // 3. Portero bajo palos cubriendo el palo lejano a la barrera
      const farPostOffset = ballCz < 0 ? 1.25 : -1.25;
      placeItem(defGk, isHome ? 104.5 : 0.5, 34.0 + farPostOffset, bXm, bYm);

      // 4. Resto de atacantes y defensores en la frontal/área respetando el fuera de juego y distancia
      const lineXm = isHome ? Math.max(wallCenterXm + 2.5, 89.5) : Math.min(wallCenterXm - 2.5, 15.5);
      const atkZones = [
        { xm: lineXm, ym: 26.0 },
        { xm: lineXm + (isHome ? 1.5 : -1.5), ym: 31.0 },
        { xm: lineXm + (isHome ? 1.5 : -1.5), ym: 37.0 },
        { xm: lineXm, ym: 42.0 },
        { xm: isHome ? 82.0 : 23.0, ym: 30.0 },
        { xm: isHome ? 82.0 : 23.0, ym: 38.0 },
        { xm: isHome ? 64.0 : 41.0, ym: 24.0 },
        { xm: isHome ? 64.0 : 41.0, ym: 44.0 },
        { xm: isHome ? 54.0 : 51.0, ym: 34.0 }
      ];
      otherAtk.forEach((ap, idx) => {
        const z = atkZones[idx % atkZones.length];
        placeItem(ap, z.xm, z.ym, goalXm, goalYm);
      });
      boxDefenders.forEach((dp, idx) => {
        const z = atkZones[idx % atkZones.length];
        placeItem(dp, z.xm + (isHome ? 1.6 : -1.6), z.ym + 0.6, bXm, bYm);
      });
    } else {
      // CÓRNER REGLAMENTARIO FIFA:
      // 1. Balón en la esquina exacta (X = ±52.5, Z = ±34 -> xm = 105 o 0, ym = 0 o 68)
      // 2. Lanzador junto al banderín de córner
      const cornerSignX = isHome ? 1 : -1;
      const cornerSignY = ballCz < 0 ? -1 : 1;
      placeItem(
        kickerItem,
        bXm - cornerSignX * 0.9,
        bYm - cornerSignY * 0.9,
        isHome ? 94.0 : 11.0,
        34.0
      );

      // 3. Portero en el área chica
      placeItem(defGk, isHome ? 104.2 : 0.8, 34.0, bXm, bYm);

      // 4. Atacantes y defensas repartidos dentro del área entre el punto de penalti (|X| = 41.5 -> xm = 94 / 11)
      //    y el área pequeña (|X| = 47.0 -> xm = 99.5 / 5.5)
      const boxTargetsCentered = [
        { cx: 46.5, cz: -3.2 }, // Primer palo área pequeña
        { cx: 44.2, cz: 0.0 },  // Corazón del área
        { cx: 41.8, cz: 1.5 },  // Punto de penalti
        { cx: 45.8, cz: 4.2 },  // Segundo palo
        { cx: 42.5, cz: -4.8 }, // Segundo escalón primer palo
        { cx: 35.0, cz: -3.0 }, // Rechace frontal
        { cx: 34.5, cz: 4.5 },  // Rechace frontal 2
        { cx: 12.0, cz: -8.0 }, // Cierre defensivo medio campo
        { cx: 12.0, cz: 8.0 }   // Cierre defensivo medio campo 2
      ];

      otherAtk.forEach((ap, idx) => {
        const t = boxTargetsCentered[idx % boxTargetsCentered.length];
        const txm = 52.5 + (isHome ? t.cx : -t.cx);
        const tym = 34.0 + (ballCz < 0 ? t.cz : -t.cz);
        placeItem(ap, txm, tym, goalXm, goalYm);
      });

      const defTargetsCentered = [
        { cx: 48.0, cz: -3.4 }, // Poste cercano
        { cx: 47.2, cz: -1.5 },
        { cx: 45.0, cz: 0.4 },
        { cx: 42.4, cz: 1.8 },
        { cx: 46.2, cz: 4.0 },
        { cx: 43.2, cz: -4.2 },
        { cx: 36.2, cz: -2.2 },
        { cx: 35.8, cz: 3.8 },
        { cx: 24.0, cz: 0.0 },
        { cx: 18.0, cz: 5.0 }
      ];
      otherDef.forEach((dp, idx) => {
        const t = defTargetsCentered[idx % defTargetsCentered.length];
        const txm = 52.5 + (isHome ? t.cx : -t.cx);
        const tym = 34.0 + (ballCz < 0 ? t.cz : -t.cz);
        placeItem(dp, txm, tym, bXm, bYm);
      });
    }

    this._syncMetersTo2D();
    return { kickerItem, defGk, otherAtk, otherDef, bXm, bYm, ux, uy, goalXm, goalYm };
  }

  // Simula la jugada a balón parado a 20 ticks/segundo, la graba en replayBuffer y la reproduce en 3D
  executeSetPiece(setup, onDone) {
    this.isRunning = true;
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

    const spotXm = spot.xm ?? (spot.x * 1.05);
    const spotYm = spot.ym ?? (spot.y * 0.68);

    // 1. Aplicar geometría vectorial estricta FIFA
    const geom = this._applyStrictSetPieceGeometry(type, attackingSide, spotXm, spotYm, taker, placements);
    const { kickerItem, defGk, otherAtk, otherDef, bXm, bYm, goalXm, goalYm } = geom;

    // 2. Vaciar el buffer y grabar la preparación a balón parado + ejecución física a 20 Hz
    this.replayBuffer = [];
    const dt = 0.05; // 20 ticks/segundo

    // Fase de preparación y toma de carrera (24 ticks = 1.2s)
    const runupStartXm = kickerItem.xm;
    const runupStartYm = kickerItem.ym;
    for (let t = 0; t < 24; t++) {
      const p = t / 24;
      if (t >= 10) {
        const rAlpha = (t - 10) / 14;
        kickerItem.xm = runupStartXm + (bXm - runupStartXm) * (rAlpha * 0.82);
        kickerItem.ym = runupStartYm + (bYm - runupStartYm) * (rAlpha * 0.82);
        kickerItem.pose = "run";
      }
      // En córners y faltas colgadas, los atacantes inician el desmarque dentro del área
      if (type !== "PENALTY" && t >= 12) {
        otherAtk.slice(0, 4).forEach((ap, idx) => {
          ap.xm += (isHome ? 0.14 : -0.14);
          ap.ym += (idx % 2 === 0 ? 0.05 : -0.05);
          ap.pose = "run";
        });
        otherDef.slice(type === "FREE_KICK" ? 4 : 0, (type === "FREE_KICK" ? 8 : 4)).forEach((dp) => {
          dp.xm += (isHome ? 0.11 : -0.11);
          dp.pose = "run";
        });
      }
      this._recordReplayFrame("SET_PIECE_RUNUP");
    }

    // 3. Ejecución física tick a tick (Cero resultados precalculados: el balón se lanza con velocidad real y la física decide)
    kickerItem.pose = "kick";
    kickerItem.poseTimer = 0.38;
    const spLabel = type === "PENALTY" ? "Penalti" : (type === "CORNER" ? "Saque de Esquina" : "Falta Directa");

    this._recordingReplayOnly = true;
    this._pendingTickOutcome = null;

    let outcome = "WIDE";
    let finalShooter = taker;
    let finalPasser = null;
    let finalDefender = otherDef[0]?.player || null;
    let finalGoalkeeper = goalkeeper;

    if (type === "PENALTY" || (type === "FREE_KICK" && targetStrategy === "DIRECT_SHOT")) {
      const isPen = type === "PENALTY";
      this._setTickCommentary(
        isPen
          ? `🥅 ¡${taker.name} toma carrera desde los 11 metros y ejecuta el lanzamiento!`
          : `🎯 ¡${taker.name} golpea la falta directa buscando superar la barrera a 9.15m!`,
        isPen ? "PENALTI" : "FALTA DIRECTA"
      );
      this._launchBallShot(kickerItem, attackingSide, isPen ? "NORMAL" : "FINESSE");
      if (!isPen) {
        // Elevar trayectoria inicial para salvar la barrera a 9.15m con caída Magnus
        this.ball.vz = 4.65;
        this.ball.spin = bYm > 34 ? -2.9 : 2.9;
      } else {
        this.ball.vz = 1.65 + Math.random() * 0.85;
      }
    } else {
      // Centro físico al área en Córner o Falta Lateral: los jugadores atacan y defienden el balón tick a tick
      const boxTargetItem = otherAtk[0] || kickerItem;
      finalPasser = taker;
      finalShooter = boxTargetItem.player || taker;
      const meetXm = isHome ? (94.0 + (Math.random() * 3.5 - 1.5)) : (11.0 + (Math.random() * 3.5 - 1.5));
      const meetYm = targetStrategy === "NEAR_POST"
        ? (bYm < 34 ? 29.5 : 38.5)
        : (targetStrategy === "FAR_POST" ? (bYm < 34 ? 39.2 : 28.8) : (34.0 + (Math.random() * 4.0 - 2.0)));

      this._setTickCommentary(
        `🚩 ¡${taker.name} cuelga el balón con rosca al corazón del área buscando rematador!`,
        spLabel.toUpperCase()
      );
      this._launchBallPass(kickerItem, boxTargetItem, attackingSide, {
        x: meetXm,
        y: meetYm,
        isLofted: true,
        spin: bYm > 34 ? -2.2 : 2.2,
        kind: "CROSS"
      });
    }

    let triggeredOutcome = null;
    const maxSetPieceTicks = 76; // Hasta 3.8s de física continua en tiempo real para resolver el envío/remate
    for (let t = 0; t < maxSetPieceTicks; t++) {
      this.stepRealTimePhysics(dt);
      this._recordReplayFrame("SET_PIECE_LIVE");
      if (this._pendingTickOutcome) {
        triggeredOutcome = this._pendingTickOutcome;
        this._pendingTickOutcome = null;
        break;
      }
    }
    this._recordingReplayOnly = false;

    const climaxFrameIdx = Math.max(0, this.replayBuffer.length - 1);
    if (triggeredOutcome) {
      outcome = triggeredOutcome.outcome || "WIDE";
      if (triggeredOutcome.shooter) finalShooter = triggeredOutcome.shooter;
      if (triggeredOutcome.passer) finalPasser = triggeredOutcome.passer;
      if (triggeredOutcome.defender) finalDefender = triggeredOutcome.defender;
      if (triggeredOutcome.goalkeeper) finalGoalkeeper = triggeredOutcome.goalkeeper;
    } else {
      outcome = "BLOCK";
      this._setTickCommentary(`🛡️ La zaga de ${defTeam.shortName} despeja el peligro tras la disputa en el área.`, "DESPEJE");
      this._recordReplayFrame("SET_PIECE_CLEAR");
    }

    // 4. Grabar 28 ticks (1.4s) de continuación post-impacto
    const outcomeInfo = {
      isSetPiece: true,
      setPieceType: type,
      attackingSide,
      shooter: finalShooter,
      passer: finalPasser,
      defender: finalDefender,
      goalkeeper: finalGoalkeeper,
      outcome,
      headline: `BALÓN PARADO · ${spLabel.toUpperCase()}`,
      buildNote: `⚽ ${spLabel} para ${atkTeam.shortName}. Ejecuta ${taker.name}.`,
      shotNote: triggeredOutcome?.shotNote || (outcome === "GOAL"
        ? `⚽ ¡Golazo de ${finalShooter.name} en acción de ${spLabel.toLowerCase()}!`
        : `🧤 Acción de ${spLabel.toLowerCase()} resuelta por la física en el área.`)
    };

    for (let f = 0; f < 28; f++) {
      this._stepFollowThroughTick(dt, outcomeInfo);
      this._recordReplayFrame("SET_PIECE_FOLLOW");
    }

    const playbackFrames = this.replayBuffer.slice();
    this.startReplayHighlight(playbackFrames, climaxFrameIdx, outcomeInfo, () => {
      if (onDone) onDone();
      if (this.isRunning && !this.isFinished && !this.isHalfTime && !this.pauseRequested) {
        this.loop();
      }
    });
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
    this.ball.xm = 52.5;
    this.ball.ym = 34;
    this.ball.zm = 0;
    this.ball.vx = 0;
    this.ball.vy = 0;
    this.ball.vz = 0;
    this.ball.passTarget = null;
    this.ball.passTeam = null;
    this.ball.shotTeam = null;
    this.ball.shotMeta = null;
    this.ball.assistCandidate = null;
    this.ball.pickupCooldown = 0.25;

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
      p.xm = (p.curX / 100) * 105;
      p.ym = (p.curY / 100) * 68;
      p.vx = 0;
      p.vy = 0;
      p.facingX = 1;
      p.facingZ = 0;
      p.decisionTimer = 0.25;
      p.controlTimer = 0;
      p.speedMps = 0;
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
      p.xm = (p.curX / 100) * 105;
      p.ym = (p.curY / 100) * 68;
      p.vx = 0;
      p.vy = 0;
      p.facingX = -1;
      p.facingZ = 0;
      p.decisionTimer = 0.25;
      p.controlTimer = 0;
      p.speedMps = 0;
    });

    const kickerList = concedingSide === "home" ? this.home2D : this.away2D;
    const kicker = kickerList[9] || kickerList[kickerList.length - 1] || null;
    this.ball.carrier = kicker;
    this.ball.lastTouchTeam = concedingSide;
    this.ball.lastTouchPlayer = kicker;
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
      const pOvr = p.ovr ?? 75;
      const pEnergy = p.energy !== undefined ? p.energy : 100;
      let power = 75;
      if (type === "atk") {
        const sho = p.sho ?? pOvr;
        const dri = p.dri ?? pOvr;
        const pac = p.pac ?? pOvr;
        power = (sho * 0.4 + dri * 0.3 + pac * 0.3) * (0.6 + pEnergy / 250);
        if (role && role.atkMod) power *= (1 + role.atkMod);
        // Si el jugador está adelantado manualmente hacia la portería rival (avance ofensivo)
        if (item2D) {
          const advX = isHome ? item2D.baseX : (100 - item2D.baseX);
          if (advX > 55) power *= 1.10;
        }
      } else if (type === "mid") {
        const pas = p.pas ?? pOvr;
        const dri = p.dri ?? pOvr;
        const def = p.def ?? pOvr;
        power = (pas * 0.4 + dri * 0.3 + def * 0.3) * (0.6 + pEnergy / 250);
        if (role && role.midMod) power *= role.midMod;
        // Si el jugador está centrado hacia la medular (amplitud interior)
        if (item2D && item2D.baseY >= 35 && item2D.baseY <= 65) power *= 1.08;
      } else if (type === "def") {
        if (p.pos === "POR") {
          const gkPar = p.par !== undefined ? p.par : (p.gks || pOvr);
          power = (gkPar * 0.75 + (p.phy || 70) * 0.25) * (0.6 + pEnergy / 250);
        } else {
          const def = p.def ?? pOvr;
          const phy = p.phy ?? pOvr;
          const pac = p.pac ?? pOvr;
          power = (def * 0.5 + phy * 0.3 + pac * 0.2) * (0.6 + pEnergy / 250);
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
    // Los jugadores fijan sus coordenadas objetivo siguiendo dinámicamente la táctica oficial FIFA (105x68m)
    const ballX = this.ball.targetX !== undefined ? this.ball.targetX : (this.ball.x ?? 50);
    const ballY = this.ball.targetY !== undefined ? this.ball.targetY : (this.ball.y ?? 50);

    // 1. Modificadores tácticos del equipo local
    const homeDefLine = this.homeInstructions?.outOfPossession?.defensiveLine || "mid";
    const homeLineShiftX = homeDefLine === "high" ? 14 : (homeDefLine === "low" ? -14 : 0);
    const homePressing = this.homeInstructions?.outOfPossession?.pressing || "mid";
    const homePressShiftX = (this.ball.possession === "away" && homePressing === "high") ? 6 : 0;
    const homeAtkWidth = this.homeInstructions?.inPossession?.width || "balanced";
    const homeDefWidth = this.homeInstructions?.outOfPossession?.defenseWidth || "balanced";

    this.home2D.forEach((p, idx) => {
      const playerObj = p.player || this.homePlayersOnPitch[idx];
      if (!playerObj) return;
      if (p.isKeeper) {
        p.targetX = 4;
        p.targetY = Math.max(42, Math.min(58, 50 + (ballY - 50) * 0.15));
        return;
      }
      const role = this.getPlayerRole(playerObj, "home");
      const pushMod = role?.pushMod || 0;
      const isDef = playerObj.pos === "DFC" || playerObj.pos === "LI" || playerObj.pos === "LD";
      const isFullback = playerObj.pos === "LI" || playerObj.pos === "LD";
      const isWinger = playerObj.pos === "EI" || playerObj.pos === "ED";

      const lineXMod = isDef ? homeLineShiftX : (homeLineShiftX * 0.45);
      const shiftX = (ballX - 50) * 0.32 + (pushMod * 0.35) + lineXMod + homePressShiftX;

      let shiftY = (ballY - 50) * 0.22; // Basculación suave de bloque hacia el balón
      
      // En posesión: Anchura de ataque
      if (this.ball.possession === "home") {
        if (isWinger || isFullback) {
          if (homeAtkWidth === "wide") {
            // Pegados a la cal (Z = -31m y +31m -> Y = 4.4% y 95.6%)
            shiftY = p.baseY < 50 ? (5 - p.baseY) : (95 - p.baseY);
          } else if (homeAtkWidth === "center") {
            // Metidos por dentro (Z = -14m y +14m -> Y = 29% y 71%)
            shiftY = p.baseY < 50 ? (29 - p.baseY) : (71 - p.baseY);
          }
        }
      } else {
        // Sin posesión: Anchura defensiva
        if (isFullback) {
          if (homeDefWidth === "compact") {
            // Cerrados por dentro (Z = -15m y +15m -> Y = 28% y 72%), dejando las bandas abiertas
            shiftY = p.baseY < 50 ? (28 - p.baseY) : (72 - p.baseY);
          } else if (homeDefWidth === "wide") {
            // Cerrar bandas / Marcar extremos (Z = -30.5m y +30.5m -> Y = 5% y 95%)
            shiftY = p.baseY < 50 ? (5 - p.baseY) : (95 - p.baseY);
          }
        } else if (playerObj.pos === "DFC") {
          // Centrales separados 12-15 metros (Y = 40% y 60%)
          shiftY = p.baseY < 50 ? (41 - p.baseY) : (59 - p.baseY);
        }
      }

      // Micro-ajustes sutiles de perfilado para no parecer estatuas
      const idleStep = Math.sin(Date.now() * 0.003 + idx) * 0.6;
      p.targetX = Math.max(6, Math.min(94, p.baseX + shiftX + idleStep));
      p.targetY = Math.max(5, Math.min(95, p.baseY + shiftY));
    });

    // 2. Modificadores tácticos del equipo visitante
    const awayDefLine = this.awayInstructions?.outOfPossession?.defensiveLine || "mid";
    const awayLineShiftX = awayDefLine === "high" ? -14 : (awayDefLine === "low" ? 14 : 0);
    const awayPressing = this.awayInstructions?.outOfPossession?.pressing || "mid";
    const awayPressShiftX = (this.ball.possession === "home" && awayPressing === "high") ? -6 : 0;
    const awayAtkWidth = this.awayInstructions?.inPossession?.width || "balanced";
    const awayDefWidth = this.awayInstructions?.outOfPossession?.defenseWidth || "balanced";

    this.away2D.forEach((p, idx) => {
      const playerObj = p.player || this.awayPlayersOnPitch[idx];
      if (!playerObj) return;
      if (p.isKeeper) {
        p.targetX = 96;
        p.targetY = Math.max(42, Math.min(58, 50 + (ballY - 50) * 0.15));
        return;
      }
      const role = this.getPlayerRole(playerObj, "away");
      const pushMod = role?.pushMod || 0;
      const isDef = playerObj.pos === "DFC" || playerObj.pos === "LI" || playerObj.pos === "LD";
      const isFullback = playerObj.pos === "LI" || playerObj.pos === "LD";
      const isWinger = playerObj.pos === "EI" || playerObj.pos === "ED";

      const lineXMod = isDef ? awayLineShiftX : (awayLineShiftX * 0.45);
      const shiftX = (ballX - 50) * 0.32 - (pushMod * 0.35) + lineXMod + awayPressShiftX;

      let shiftY = (ballY - 50) * 0.22;
      if (this.ball.possession === "away") {
        if (isWinger || isFullback) {
          if (awayAtkWidth === "wide") {
            shiftY = p.baseY < 50 ? (5 - p.baseY) : (95 - p.baseY);
          } else if (awayAtkWidth === "center") {
            shiftY = p.baseY < 50 ? (29 - p.baseY) : (71 - p.baseY);
          }
        }
      } else {
        if (isFullback) {
          if (awayDefWidth === "compact") {
            shiftY = p.baseY < 50 ? (28 - p.baseY) : (72 - p.baseY);
          } else if (awayDefWidth === "wide") {
            shiftY = p.baseY < 50 ? (5 - p.baseY) : (95 - p.baseY);
          }
        } else if (playerObj.pos === "DFC") {
          shiftY = p.baseY < 50 ? (41 - p.baseY) : (59 - p.baseY);
        }
      }

      const idleStep = Math.sin(Date.now() * 0.003 + idx + 3) * 0.6;
      p.targetX = Math.max(6, Math.min(94, p.baseX + shiftX + idleStep));
      p.targetY = Math.max(5, Math.min(95, p.baseY + shiftY));
    });

    // 3. FUERZA DE SEPARACIÓN OBLIGATORIA (Ningún jugador a menos de 6.5 - 8.0m de un compañero)
    const applyTeammateSeparation = (teamArr) => {
      const minDistM = 6.8; // Metros
      for (let iter = 0; iter < 3; iter++) {
        for (let i = 0; i < teamArr.length; i++) {
          for (let j = i + 1; j < teamArr.length; j++) {
            const p1 = teamArr[i], p2 = teamArr[j];
            if (p1.isKeeper || p2.isKeeper) continue;
            const dxM = (p1.targetX - p2.targetX) * 1.05;
            const dyM = (p1.targetY - p2.targetY) * 0.68;
            const distM = Math.hypot(dxM, dyM);
            if (distM < minDistM && distM > 0.05) {
              const pushM = (minDistM - distM) * 0.45;
              const pushPctX = (dxM / distM) * (pushM / 1.05);
              const pushPctY = (dyM / distM) * (pushM / 0.68);
              p1.targetX = Math.max(4, Math.min(96, p1.targetX + pushPctX));
              p1.targetY = Math.max(4, Math.min(96, p1.targetY + pushPctY));
              p2.targetX = Math.max(4, Math.min(96, p2.targetX - pushPctX));
              p2.targetY = Math.max(4, Math.min(96, p2.targetY - pushPctY));
            }
          }
        }
      }
    };
    applyTeammateSeparation(this.home2D);
    applyTeammateSeparation(this.away2D);
  }

  // Formato televisivo oficial del minuto con descuento y segundos en jugada 3D en vivo
  getFormattedMinute(includeSeconds = false) {
    const isLive3D = this.isHighlightRunning || this.isSetPieceRunning;
    const secStr = (isLive3D || includeSeconds) ? `:${String(Math.floor(this.matchSecond || 0)).padStart(2, "0")}` : "'";
    if (!this.isSecondHalf && !this.halfTimeTriggered) {
      if (this.minute > 45) {
        return `45+${this.minute - 45}${secStr}`;
      }
      return `${this.minute}${secStr}`;
    } else {
      if (this.minute > 90) {
        return `90+${this.minute - 90}${secStr}`;
      }
      return `${this.minute}${secStr}`;
    }
  }

  // Reanudar el partido tras la pausa del descanso
  resumeSecondHalf() {
    this.isHalfTime = false;
    this.halfTimeTriggered = true;
    this.isSecondHalf = true;
    this.minute = 45; // El reloj de la 2ª parte comienza reglamentariamente en el minuto 45
    this.realTimeMinute = 45;
    this.lastMinuteProcessed = 45;
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

  // Saltar instantáneamente al final del partido (FAST_SIM ultrarrápido)
  skipToEnd() {
    this.clearAllTimeouts();
    this.isSkippingToEnd = true;
    this.halfTimeTriggered = true;
    this.isHalfTime = false;
    this.isSecondHalf = true;
    this.isHighlightRunning = false;
    this.isSetPieceRunning = false;
    this.pauseRequested = false;
    this.isRunning = true;

    let safetyGuard = 0;
    while (!this.isFinished && this.minute < this.maxMinutes && safetyGuard < 150) {
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
    const wasVisualActive = this.isHighlightRunning || this.isSetPieceRunning;
    this.isHighlightRunning = false;
    this.isSetPieceRunning = false;
    this.activeReplay = null;
    if (wasVisualActive && this.onHighlightEnd) {
      this.onHighlightEnd();
    }
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
      activeAssistantAdvice: this.activeAssistantAdvice,
      currentPendingAdvice: this.currentPendingAdvice,
      assistantCoachName: this.assistantCoachName,
      isRunning: this.isRunning,
      isHalfTime: this.isHalfTime,
      isSecondHalf: this.isSecondHalf,
      isFinished: this.isFinished
    };
  }

  // =========================================================================
  // SISTEMA DE ASISTENTE / CUERPO TÉCNICO EN VIVO (Live Coaching Staff FM)
  // =========================================================================

  _checkAssistantCoaching() {
    if (this.isSkippingToEnd || this.isFinished || this.isHalfTime || this.isHighlightRunning || this.isSetPieceRunning) return;
    if (this.currentPendingAdvice) return;

    const userSide = this.userSide;
    const oppSide = userSide === "home" ? "away" : "home";
    const userTeam = userSide === "home" ? this.homeTeam : this.awayTeam;
    const oppTeam = userSide === "home" ? this.awayTeam : this.homeTeam;
    const userScore = userSide === "home" ? this.homeScore : this.awayScore;
    const oppScore = userSide === "home" ? this.awayScore : this.homeScore;
    const userShots = this.stats.shots[userSide] || 0;
    const oppShots = this.stats.shots[oppSide] || 0;
    const userOnTarget = this.stats.shotsOnTarget[userSide] || 0;
    const oppOnTarget = this.stats.shotsOnTarget[oppSide] || 0;
    const userPoss = this.stats.possession[userSide] || 50;
    const oppPoss = this.stats.possession[oppSide] || 50;
    const userPitch = userSide === "home" ? this.homePlayersOnPitch : this.awayPlayersOnPitch;
    const userBench = userSide === "home" ? this.homeBench : this.awayBench;
    const userInst = userSide === "home" ? this.homeInstructions : this.awayInstructions;
    const oppInst = oppSide === "home" ? this.homeInstructions : this.awayInstructions;
    const userMentality = userSide === "home" ? this.homeMentality : this.awayMentality;
    const oppMentality = oppSide === "home" ? this.homeMentality : this.awayMentality;
    const userSubsRemaining = userSide === "home" ? this.homeSubsRemaining : this.awaySubsRemaining;
    const userWindowsRemaining = userSide === "home" ? this.homeWindowsRemaining : this.awayWindowsRemaining;

    let advice = null;

    // 1. REGLA MINUTO 70+: Marcador apretado o necesidad de remontar
    if (this.minute >= 70) {
      if (userScore - oppScore === 1 && userMentality !== "defensive" && userMentality !== "very_defensive") {
        advice = {
          id: "adv_" + this.minute + "_" + Math.floor(Math.random() * 1000),
          urgency: "AJUSTE FINAL",
          category: "HOLD_LEAD",
          title: "Cerrar el partido y asegurar la victoria",
          diagnosis: `Vamos ganando por la mínima (${userScore}-${oppScore}) a falta de pocos minutos. El ${oppTeam.name} va a volcarse a la desesperada con balones al área.`,
          recommendation: `Recomendación: Bajar bloque a 'Bajo', pausar el ritmo y cambiar mentalidad a 'Defensiva' para amarrar los 3 puntos.`,
          action: {
            type: "TACTIC_PRESET",
            changes: {
              mentality: "defensive",
              defensiveLine: "low",
              tempo: "slow"
            }
          },
          isGoodReading: Math.random() < 0.75
        };
      } else if (userScore < oppScore && userMentality !== "very_offensive") {
        advice = {
          id: "adv_" + this.minute + "_" + Math.floor(Math.random() * 1000),
          urgency: "URGENTE",
          category: "OFFENSIVE",
          title: "Ir con todo arriba",
          diagnosis: `Vamos perdiendo (${userScore}-${oppScore}) y se acaba el tiempo. Necesitamos volcar efectivos en campo rival y asumir riesgos inmediatos.`,
          recommendation: `Recomendación: Cambiar a mentalidad 'Al Ataque', adelantar la defensa y ordenar presión asfixiante.`,
          action: {
            type: "TACTIC_PRESET",
            changes: {
              mentality: "very_offensive",
              defensiveLine: "high",
              pressing: "high",
              tempo: "fast"
            }
          },
          isGoodReading: Math.random() < 0.75
        };
      }
    }

    // 2. REGLA INDIVIDUAL: Fatiga extrema (<50%), tarjeta amarilla o bajo rendimiento (<6.3)
    if (!advice && userSubsRemaining > 0 && userWindowsRemaining > 0) {
      const tiredP = userPitch.filter(p => p.pos !== "POR").sort((a, b) => (a.energy || 100) - (b.energy || 100))[0];
      const yellowP = userPitch.find(p => p.pos !== "POR" && (p.yellowCards > 0 || p.hasYellow));
      const lowRatingP = userPitch.filter(p => p.pos !== "POR" && p.matchRating && p.matchRating < 6.3 && (p.matchMinutes || 0) >= 30).sort((a, b) => a.matchRating - b.matchRating)[0];

      if (tiredP && (tiredP.energy || 100) < 50) {
        const candidate = userBench.filter(b => !b.injury && (!b.suspension || b.suspension.roundsLeft <= 0) && (b.energy || 100) >= 65 && !b.subbedOut)
          .sort((a, b) => {
            const affA = getPositionAffinity(a, tiredP.pos);
            const affB = getPositionAffinity(b, tiredP.pos);
            if (affB !== affA) return affB - affA;
            return (b.ovr || 70) - (a.ovr || 70);
          })[0];
        if (candidate && getPositionAffinity(candidate, tiredP.pos) >= 0.75) {
          advice = {
            id: "adv_" + this.minute + "_" + Math.floor(Math.random() * 1000),
            urgency: "ALERTA FÍSICA",
            category: "SUBSTITUTION",
            title: `Fatiga crítica de ${tiredP.name}`,
            diagnosis: `${tiredP.name} (${tiredP.pos}) está al ${Math.round(tiredP.energy || 100)}% de energía y perdiendo todos los duelos individuales por agotamiento.`,
            recommendation: `Recomendación: Sustituir a ${tiredP.name} por ${candidate.name} (${candidate.pos}, OVR ${candidate.ovr}) para meter piernas frescas.`,
            action: {
              type: "SUBSTITUTION",
              playerOutId: tiredP.id,
              playerInId: candidate.id,
              playerOutName: tiredP.name,
              playerInName: candidate.name
            },
            isGoodReading: Math.random() < 0.75
          };
        }
      } else if (yellowP && this.minute >= 35) {
        const candidate = userBench.filter(b => !b.injury && (!b.suspension || b.suspension.roundsLeft <= 0) && !b.subbedOut)
          .sort((a, b) => {
            const affA = getPositionAffinity(a, yellowP.pos);
            const affB = getPositionAffinity(b, yellowP.pos);
            if (affB !== affA) return affB - affA;
            return (b.ovr || 70) - (a.ovr || 70);
          })[0];
        if (candidate && getPositionAffinity(candidate, yellowP.pos) >= 0.75) {
          advice = {
            id: "adv_" + this.minute + "_" + Math.floor(Math.random() * 1000),
            urgency: "RIESGO DE EXPULSIÓN",
            category: "SUBSTITUTION",
            title: `Peligro de roja para ${yellowP.name}`,
            diagnosis: `${yellowP.name} tiene tarjeta amarilla y está sufriendo al corte. Un segundo error nos dejaría con 10 futbolistas.`,
            recommendation: `Recomendación: Dar entrada a ${candidate.name} (${candidate.pos}) para proteger la zona sin riesgo de expulsión.`,
            action: {
              type: "SUBSTITUTION",
              playerOutId: yellowP.id,
              playerInId: candidate.id,
              playerOutName: yellowP.name,
              playerInName: candidate.name
            },
            isGoodReading: Math.random() < 0.75
          };
        }
      } else if (lowRatingP && this.minute >= 40) {
        const candidate = userBench.filter(b => !b.injury && (!b.suspension || b.suspension.roundsLeft <= 0) && !b.subbedOut)
          .sort((a, b) => {
            const affA = getPositionAffinity(a, lowRatingP.pos);
            const affB = getPositionAffinity(b, lowRatingP.pos);
            if (affB !== affA) return affB - affA;
            return (b.ovr || 70) - (a.ovr || 70);
          })[0];
        if (candidate && getPositionAffinity(candidate, lowRatingP.pos) >= 0.75) {
          advice = {
            id: "adv_" + this.minute + "_" + Math.floor(Math.random() * 1000),
            urgency: "BAJO RENDIMIENTO",
            category: "SUBSTITUTION",
            title: `Desconexión de ${lowRatingP.name}`,
            diagnosis: `${lowRatingP.name} (${lowRatingP.pos}) está muy impreciso (nota ${(lowRatingP.matchRating || 6.0).toFixed(1)}) y no logra generar ventajas.`,
            recommendation: `Recomendación: Dar entrada a ${candidate.name} para revitalizar el juego y cambiar la dinámica.`,
            action: {
              type: "SUBSTITUTION",
              playerOutId: lowRatingP.id,
              playerInId: candidate.id,
              playerOutName: lowRatingP.name,
              playerInName: candidate.name
            },
            isGoodReading: Math.random() < 0.75
          };
        }
      }
    }

    // 3. REGLA DOMINIO / ASEDIO RIVAL: Si el rival genera mucho peligro o juega muy ofensivo
    if (!advice && (oppShots > userShots + 1 || oppPoss > 53 || oppMentality === "offensive" || oppMentality === "very_offensive")) {
      if (userInst?.outOfPossession?.defensiveLine === "high") {
        advice = {
          id: "adv_" + this.minute + "_" + Math.floor(Math.random() * 1000),
          urgency: "DESAJUSTE DEFENSIVO",
          category: "DEFENSIVE",
          title: "Asedio rival a nuestra espalda",
          diagnosis: `El ${oppTeam.name} nos está ganando la espalda con pases en profundidad sobre nuestra línea adelantada.`,
          recommendation: `Recomendación: Bajar el bloque defensivo a 'Bajo' y ordenar repliegue rápido tras pérdida.`,
          action: {
            type: "TACTIC_PRESET",
            changes: {
              defensiveLine: "low",
              transitionLoss: "regroup"
            }
          },
          isGoodReading: Math.random() < 0.75
        };
      } else if (userInst?.inTransition?.win !== "counter") {
        advice = {
          id: "adv_" + this.minute + "_" + Math.floor(Math.random() * 1000),
          urgency: "OPORTUNIDAD TÁCTICA",
          category: "COUNTER",
          title: "Jugar al Contraataque",
          diagnosis: `El ${oppTeam.name} está volcado en nuestro campo dejando enormes autopistas libres a la espalda de sus centrales.`,
          recommendation: `Recomendación: Activar 'Contraatacar' al recuperar, acelerar el tempo y buscar transiciones verticales al espacio.`,
          action: {
            type: "TACTIC_PRESET",
            changes: {
              transitionWin: "counter",
              passingStyle: "direct",
              tempo: "fast"
            }
          },
          isGoodReading: Math.random() < 0.75
        };
      } else {
        advice = {
          id: "adv_" + this.minute + "_" + Math.floor(Math.random() * 1000),
          urgency: "AJUSTE DEFENSIVO",
          category: "DEFENSIVE",
          title: "Juntar líneas en bloque compacto",
          diagnosis: `Hay demasiada separación entre nuestra zaga y la medular, facilitando que el ${oppTeam.name} reciba solo entre líneas.`,
          recommendation: `Recomendación: Juntar líneas pasando a 'Bloque Medio' y contención en zona para cerrar pasillos interiores.`,
          action: {
            type: "TACTIC_PRESET",
            changes: {
              defensiveLine: "mid",
              pressing: "low",
              width: "balanced"
            }
          },
          isGoodReading: Math.random() < 0.75
        };
      }
    }

    // 4. REGLA RIVAL ENCERRADO ATRÁS: Mucha posesión pero pocas ocasiones
    if (!advice && (userPoss >= 52 || oppInst?.outOfPossession?.defensiveLine === "low") && userOnTarget <= 2) {
      if (userInst?.outOfPossession?.pressing !== "high") {
        advice = {
          id: "adv_" + this.minute + "_" + Math.floor(Math.random() * 1000),
          urgency: "ASFIXIA RIVAL",
          category: "HIGH_PRESS",
          title: "Subir la presión alta",
          diagnosis: `El ${oppTeam.name} está encerrado en su área pero los dejamos respirar y sacar el balón sin agobio.`,
          recommendation: `Recomendación: Subir la presión a 'Asfixiante / Alta' para forzar pérdidas en su propio balcón del área.`,
          action: {
            type: "TACTIC_PRESET",
            changes: {
              pressing: "high",
              defensiveLine: "high",
              transitionLoss: "counterpress"
            }
          },
          isGoodReading: Math.random() < 0.75
        };
      } else if (userInst?.inPossession?.width !== "wide") {
        advice = {
          id: "adv_" + this.minute + "_" + Math.floor(Math.random() * 1000),
          urgency: "DESATASCAR ATAQUE",
          category: "WIDE_PLAY",
          title: "Abrir el campo por las bandas",
          diagnosis: `Estamos chocando contra un muro por el centro. El rival acumula muchos defensas en el carril interior.`,
          recommendation: `Recomendación: Abrir el ataque 'Por Bandas' para que extremos y laterales doblen por fuera y pongan centros.`,
          action: {
            type: "TACTIC_PRESET",
            changes: {
              width: "wide"
            }
          },
          isGoodReading: Math.random() < 0.75
        };
      } else {
        advice = {
          id: "adv_" + this.minute + "_" + Math.floor(Math.random() * 1000),
          urgency: "PRESIÓN OFENSIVA",
          category: "OFFENSIVE",
          title: "Adelantar la línea defensiva",
          diagnosis: `Maduramos la jugada demasiado lejos del área rival, permitiendo que el ${oppTeam.name} bascule sin sufrir.`,
          recommendation: `Recomendación: Adelantar la 'Línea Alta' y subir el tempo para meter al rival dentro de su portería.`,
          action: {
            type: "TACTIC_PRESET",
            changes: {
              defensiveLine: "high",
              tempo: "fast"
            }
          },
          isGoodReading: Math.random() < 0.75
        };
      }
    }

    if (advice) {
      this.currentPendingAdvice = advice;
      this.lastAssistantAdviceMinute = this.minute;
      this.nextAssistantCheckMinute = this.minute + 13 + Math.floor(Math.random() * 4);
      if (this.onAssistantAdvice) {
        this.onAssistantAdvice(advice);
      }
    }
  }

  acceptAssistantAdvice(adviceId) {
    if (!this.currentPendingAdvice || (adviceId && this.currentPendingAdvice.id !== adviceId)) {
      return { success: false, reason: "No hay consejo activo para aplicar" };
    }
    const advice = this.currentPendingAdvice;
    this.currentPendingAdvice = null;

    // Aplicar las modificaciones tácticas o sustitución
    if (advice.action.type === "TACTIC_PRESET") {
      const ch = advice.action.changes || {};
      if (ch.mentality) {
        this.setMentality(this.userSide, ch.mentality);
      }
      const inst = this.userSide === "home" ? this.homeInstructions : this.awayInstructions;
      if (ch.defensiveLine) inst.outOfPossession.defensiveLine = ch.defensiveLine;
      if (ch.pressing) inst.outOfPossession.pressing = ch.pressing;
      if (ch.width) inst.inPossession.width = ch.width;
      if (ch.tempo) inst.inPossession.tempo = ch.tempo;
      if (ch.passingStyle) inst.inPossession.passingStyle = ch.passingStyle;
      if (ch.transitionLoss) inst.inTransition.loss = ch.transitionLoss;
      if (ch.transitionWin) inst.inTransition.win = ch.transitionWin;
      this.setTacticalInstructions(this.userSide, inst);
    } else if (advice.action.type === "SUBSTITUTION") {
      const res = this.makeSubstitution(this.userSide, advice.action.playerOutId, advice.action.playerInId, false);
      if (res.success && !this.isSkippingToEnd && this.hasCustomOnSub) {
        this.pause();
        this.onSubstitution({
          teamSide: this.userSide,
          playerIn: res.inPlayer,
          playerOut: res.outPlayer,
          minute: this.minute,
          remainingSubs: this.userSide === "home" ? this.homeSubsRemaining : this.awaySubsRemaining
        });
      }
    }

    // Activar impacto real en el partido (durante 20 minutos con feedback a los 10 minutos)
    this.activeAssistantAdvice = {
      id: advice.id,
      category: advice.category,
      isGoodReading: advice.isGoodReading,
      appliedAtMinute: this.minute,
      feedbackMinute: this.minute + 10,
      expiresAtMinute: this.minute + 20,
      feedbackDelivered: false,
      diagnosis: advice.diagnosis,
      recommendation: advice.recommendation,
      title: advice.title,
      playerOutName: advice.action?.playerOutName,
      playerInName: advice.action?.playerInName
    };

    this.triggerAlert("CUERPO TÉCNICO", `📋 Ajuste táctico aplicado: ${advice.title}`, this.userSide, 3200);
    return { success: true, advice: this.activeAssistantAdvice };
  }

  dismissAssistantAdvice() {
    this.currentPendingAdvice = null;
    this.nextAssistantCheckMinute = this.minute + 12 + Math.floor(Math.random() * 4);
    return { success: true };
  }

  _deliverAssistantFeedback(adv) {
    let feedbackText = "";
    const oppTeam = this.userSide === "home" ? this.awayTeam : this.homeTeam;

    if (adv.isGoodReading) {
      if (adv.category === "HIGH_PRESS") {
        feedbackText = `Míster, subir la presión ha surtido efecto: hemos recuperado el control del balón y el rival está embotellado.`;
      } else if (adv.category === "WIDE_PLAY") {
        feedbackText = `Míster, abrir el campo por bandas ha funcionado: estamos doblando por fuera y generando peligro constante.`;
      } else if (adv.category === "DEFENSIVE" || adv.category === "HOLD_LEAD") {
        feedbackText = `Míster, el repliegue defensivo nos ha dado solidez atrás: el ${oppTeam.name} ya no encuentra huecos fáciles.`;
      } else if (adv.category === "COUNTER") {
        feedbackText = `Míster, jugar al contraataque está saliendo bien: salimos rápido con espacios y los sorprendemos descolocados.`;
      } else if (adv.category === "SUBSTITUTION") {
        feedbackText = `Míster, la sustitución de ${adv.playerOutName || 'jugador'} por ${adv.playerInName || 'suplente'} ha revitalizado al equipo de inmediato.`;
      } else {
        feedbackText = `Míster, el ajuste táctico ha surtido efecto: el equipo tiene mucho mejor control y solidez.`;
      }
    } else {
      if (adv.category === "DEFENSIVE" || adv.category === "HOLD_LEAD") {
        feedbackText = `Míster, ajustar la defensa nos ha dejado demasiado hundidos: el rival está apretando y colgando balones peligrosos.`;
      } else if (adv.category === "HIGH_PRESS" || adv.category === "OFFENSIVE") {
        feedbackText = `Míster, adelantar tanto las líneas nos está costando la espalda: el rival encuentra pasillos al contragolpe.`;
      } else if (adv.category === "WIDE_PLAY") {
        feedbackText = `Míster, volcarnos a bandas ha dejado desprotegido el centro del campo y estamos sufriendo en la transición.`;
      } else {
        feedbackText = `Míster, el ajuste táctico no ha salido como esperábamos: el rival se ha adaptado rápido y nos está creando peligro.`;
      }
    }

    if (this.onAssistantFeedback) {
      this.onAssistantFeedback({
        success: adv.isGoodReading,
        text: feedbackText,
        minute: this.minute,
        category: adv.category
      });
    }

    this.triggerAlert(adv.isGoodReading ? "ANÁLISIS POSITIVO" : "AVISO TÁCTICO", feedbackText, "neutral", 4000);
  }

  // =========================================================================
  // MOTOR DE SIMULACIÓN CONTINUA EN TIEMPO REAL (105x68m, Steering, IA 22)
  // =========================================================================

  _distPointToSegment(px, py, ax, ay, bx, by) {
    const abx = bx - ax;
    const aby = by - ay;
    const lenSq = abx * abx + aby * aby;
    if (lenSq < 1e-6) return Math.hypot(px - ax, py - ay);
    const t = Math.max(0, Math.min(1, ((px - ax) * abx + (py - ay) * aby) / lenSq));
    return Math.hypot(px - (ax + t * abx), py - (ay + t * aby));
  }

  _emitCommentary(text, tag = "MATCH ENGINE", minGap = 1.4) {
    if (!text || this.commentaryCooldown > 0) return;
    this.commentaryCooldown = minGap;
    if (this.onCommentary) this.onCommentary(text, tag);
  }

  _sync2DToMeters() {
    const syncArr = (arr) => {
      for (let i = 0; i < arr.length; i++) {
        const p = arr[i];
        p.xm = Math.max(0.4, Math.min(104.6, ((p.curX ?? 50) / 100) * 105));
        p.ym = Math.max(0.4, Math.min(67.6, ((p.curY ?? 50) / 100) * 68));
        p.vx = 0;
        p.vy = 0;
        p.speedMps = 0;
        p.controlTimer = 0;
      }
    };
    syncArr(this.home2D);
    syncArr(this.away2D);

    if (this.ball) {
      this.ball.xm = Math.max(0.5, Math.min(104.5, ((this.ball.x ?? 50) / 100) * 105));
      this.ball.ym = Math.max(0.5, Math.min(67.5, ((this.ball.y ?? 50) / 100) * 68));
      this.ball.zm = Math.max(0, (this.ball.z ?? 0) / 2.75);
      this.ball.vx = 0;
      this.ball.vy = 0;
      this.ball.vz = 0;
      this.ball.passTarget = null;
      this.ball.passTeam = null;
      this.ball.shotTeam = null;
      this.ball.shotMeta = null;
      const possList = this.ball.possession === "away" ? this.away2D : this.home2D;
      let nearest = null;
      let minD = 999;
      for (let i = 0; i < possList.length; i++) {
        const d = Math.hypot(possList[i].xm - this.ball.xm, possList[i].ym - this.ball.ym);
        if (d < minD) { minD = d; nearest = possList[i]; }
      }
      this.ball.carrier = nearest;
      if (nearest) nearest.decisionTimer = 0.25;
    }
  }

  _syncEntityTo2D(p) {
    p.curX = (p.xm / 105) * 100;
    p.curY = (p.ym / 68) * 100;
    p.targetX = p.curX;
    p.targetY = p.curY;
    const speed = Math.hypot(p.vx || 0, p.vy || 0);
    p.speedMps = speed;
    if (p.poseTimer && p.poseTimer > 0) {
      p.poseTimer = Math.max(0, p.poseTimer - 0.05);
      p.animPhase = (p.animPhase || 0) + speed * 0.045;
      return;
    }
    if (speed > 0.45) {
      p.facingX = p.vx / speed;
      p.facingZ = p.vy / speed;
      p.facing = Math.atan2(p.vy, p.vx);
      p.animPhase = (p.animPhase || 0) + speed * 0.045;
      p.pose = speed > 5.8 ? "sprint" : "run";
    } else if (this.ball) {
      const dx = (this.ball.xm ?? 52.5) - p.xm;
      const dy = (this.ball.ym ?? 34.0) - p.ym;
      const d = Math.hypot(dx, dy) || 1;
      p.facingX = dx / d;
      p.facingZ = dy / d;
      p.facing = Math.atan2(dy, dx);
      if (!p.pose || p.pose === "run" || p.pose === "sprint" || p.pose === "kick") p.pose = "idle";
    }
  }

  _syncBallTo2D() {
    this.ball.x = ((this.ball.xm ?? 52.5) / 105) * 100;
    this.ball.y = ((this.ball.ym ?? 34.0) / 68) * 100;
    this.ball.z = Math.max(0, (this.ball.zm ?? 0) * 2.75);
    this.ball.targetX = this.ball.x;
    this.ball.targetY = this.ball.y;
    this.ball.targetZ = this.ball.z;
  }

  _syncMetersTo2D() {
    for (let i = 0; i < this.home2D.length; i++) this._syncEntityTo2D(this.home2D[i]);
    for (let i = 0; i < this.away2D.length; i++) this._syncEntityTo2D(this.away2D[i]);
    this._syncBallTo2D();
  }

  // Avanza un tick físico puro (dt = 0.05s = 20 Hz) de los 22 agentes autónomos y el balón
  stepRealTimePhysics(dt = 0.05) {
    if (this.foulCooldown > 0) this.foulCooldown = Math.max(0, this.foulCooldown - dt);
    if (this.commentaryCooldown > 0) this.commentaryCooldown = Math.max(0, this.commentaryCooldown - dt);

    const allPlayers = [...this.home2D, ...this.away2D];
    this._updateTeamAI("home", this.home2D, this.away2D, allPlayers, dt);
    this._updateTeamAI("away", this.away2D, this.home2D, allPlayers, dt);
    this._stepBallPhysics(dt, allPlayers);
    this._syncMetersTo2D();
  }

  _steerPlayer(p, targetX, targetY, desiredSpeedRatio, dt, allPlayers) {
    const energy = p.player?.energy !== undefined ? p.player.energy : 100;
    const fatigueFactor = Math.max(0.68, 0.72 + (energy / 100) * 0.28);
    const effMaxSpeed = (p.maxSpeed || 7.4) * fatigueFactor;
    const effAccel = (p.acceleration || 16.5) * fatigueFactor;

    const dx = targetX - p.xm;
    const dy = targetY - p.ym;
    const dist = Math.hypot(dx, dy);

    let desiredVx = 0;
    let desiredVy = 0;
    if (dist > 0.12) {
      const slowRadius = 2.2;
      const targetSpeed = effMaxSpeed * Math.min(1, desiredSpeedRatio) * (dist < slowRadius ? (dist / slowRadius) : 1);
      desiredVx = (dx / dist) * targetSpeed;
      desiredVy = (dy / dist) * targetSpeed;
    }

    // Fuerza de separación obligatoria entre compañeros (mínimo 6.5m salvo el poseedor en duelo directo)
    // y repulsión de contacto físico con rivales (1.35m)
    let sepX = 0;
    let sepY = 0;
    const isCarrierOrReceiver = (this.ball.carrier === p || this.ball.passTarget === p || p.isKeeper);
    for (let i = 0; i < allPlayers.length; i++) {
      const other = allPlayers[i];
      if (other === p) continue;
      const ox = p.xm - other.xm;
      const oy = p.ym - other.ym;
      const odSq = ox * ox + oy * oy;
      if (odSq < 0.0001) continue;

      const sameTeam = other.side === p.side;
      if (sameTeam && !isCarrierOrReceiver && !other.isKeeper) {
        // Ningún jugador puede apelotonarse a menos de 6.5m de un compañero de su mismo equipo
        const minMateDist = 6.5;
        if (odSq < minMateDist * minMateDist) {
          const od = Math.sqrt(odSq);
          const push = (minMateDist - od) / minMateDist;
          sepX += (ox / od) * push * 4.2;
          sepY += (oy / od) * push * 4.2;
        }
      } else if (odSq < 1.82) {
        const od = Math.sqrt(odSq);
        const push = (1.35 - od) / 1.35;
        sepX += (ox / od) * push * 3.0;
        sepY += (oy / od) * push * 3.0;
      }
    }

    const steerX = (desiredVx + sepX) - p.vx;
    const steerY = (desiredVy + sepY) - p.vy;
    const steerMag = Math.hypot(steerX, steerY);
    const maxDeltaV = effAccel * dt;

    if (steerMag > maxDeltaV && steerMag > 0.0001) {
      p.vx += (steerX / steerMag) * maxDeltaV;
      p.vy += (steerY / steerMag) * maxDeltaV;
    } else {
      p.vx += steerX;
      p.vy += steerY;
    }

    const curSpeed = Math.hypot(p.vx, p.vy);
    if (curSpeed > effMaxSpeed) {
      p.vx = (p.vx / curSpeed) * effMaxSpeed;
      p.vy = (p.vy / curSpeed) * effMaxSpeed;
    }

    p.xm = Math.max(0.4, Math.min(104.6, p.xm + p.vx * dt));
    p.ym = Math.max(0.4, Math.min(67.6, p.ym + p.vy * dt));
    p.desiredX = targetX;
    p.desiredY = targetY;
    if (p.tackleCooldown > 0) p.tackleCooldown = Math.max(0, p.tackleCooldown - dt);
  }

  _getOffsideLineX(attackingTeam, opps) {
    const isHomeAtk = attackingTeam === "home";
    const oppGoalX = isHomeAtk ? 105 : 0;
    const sorted = opps
      .map(o => Math.abs(oppGoalX - o.xm))
      .sort((a, b) => a - b);
    const secondLastDist = sorted.length >= 2 ? sorted[1] : (sorted[0] ?? 15);
    const secondLastX = isHomeAtk ? (oppGoalX - secondLastDist) : (oppGoalX + secondLastDist);
    return isHomeAtk ? Math.max(secondLastX, this.ball.xm) : Math.min(secondLastX, this.ball.xm);
  }

  _computeTeamBlockAnchors(side, mates, inPossession) {
    const isHome = side === "home";
    const attackDir = isHome ? 1 : -1;
    const customMap = isHome ? this.homeCustomPositions : this.awayCustomPositions;
    const inst = isHome ? this.homeInstructions : this.awayInstructions;
    const mentality = isHome ? this.homeMentality : this.awayMentality;

    let mentalityShift = 0;
    if (mentality === "very_offensive" || mentality === "ULTRA_OFFENSIVE") mentalityShift = 8.0;
    else if (mentality === "offensive" || mentality === "OFFENSIVE") mentalityShift = 4.5;
    else if (mentality === "defensive" || mentality === "DEFENSIVE") mentalityShift = -5.0;
    else if (mentality === "very_defensive" || mentality === "ULTRA_DEFENSIVE") mentalityShift = -9.0;

    // 1. ALTURA DE LÍNEA DEFENSIVA (Bloque Alto en X ≈ 0 / xm ≈ 50..54, Bloque Bajo en |X| ≈ 35 / xm ≈ 17 o 88)
    const defLine = inst?.outOfPossession?.defensiveLine || inst?.outOfPossession?.defLine || "mid";
    let lineShift = 0;
    if (defLine === "high" || defLine === "muy_alta" || defLine === "alta") lineShift = 11.5;
    else if (defLine === "low" || defLine === "baja" || defLine === "muy_baja") lineShift = -9.5;

    // 2. ANCHURA TÁCTICA EN POSESIÓN Y SIN POSESIÓN
    const atkWidth = inst?.inPossession?.width || "balanced";
    const defWidth = inst?.outOfPossession?.defenseWidth || "balanced";

    let lateralScale = 1.0;
    if (inPossession) {
      // Juego Abierto por Bandas: extremos/laterales pegados a la cal (Z = ±30m -> ym = 3.5 y 64.5)
      // Juego Interior: carriles interiores (Z = ±14m -> ym = 20 y 48)
      if (atkWidth === "wide") lateralScale = 1.32;
      else if (atkWidth === "center") lateralScale = 0.62;
      else lateralScale = 1.02;
    } else {
      // Defensa Cerrada: bloque compacto en el centro (Z entre -15m y +15m -> ym entre 19 y 49, ancho 30-35m)
      // Cerrar Bandas: laterales abiertos a Z = ±28m (ancho 48-52m) vigilando a los extremos
      if (defWidth === "compact") lateralScale = 0.64;
      else if (defWidth === "wide") lateralScale = 1.26;
      else lateralScale = 0.94;
    }

    const ballShiftX = (this.ball.xm - 52.5) * 0.44;
    // Basculación lateral del 25% hacia donde está el balón
    const ballShiftY = (this.ball.ym - 34) * 0.25;
    const possShiftX = inPossession ? 7.5 : -5.5;
    const teamCentroidX = 52.5 + ballShiftX + attackDir * (mentalityShift + lineShift + possShiftX) * 0.58;

    const outfield = [];
    let minBX = 999, maxBX = -999, sumBX = 0;
    for (let i = 0; i < mates.length; i++) {
      const p = mates[i];
      if (p.isKeeper) continue;
      const custom = customMap && p.player ? customMap[p.player.id] : null;
      const basePctX = custom && typeof custom.x === "number" ? custom.x : p.baseX;
      const basePctY = custom && typeof custom.y === "number" ? custom.y : p.baseY;
      const baseXm = (basePctX / 100) * 105;
      const baseYm = (basePctY / 100) * 68;
      if (baseXm < minBX) minBX = baseXm;
      if (baseXm > maxBX) maxBX = baseXm;
      sumBX += baseXm;
      outfield.push({ p, baseXm, baseYm });
    }

    const baseCentroidX = outfield.length > 0 ? sumBX / outfield.length : 52.5;
    const baseSpan = Math.max(1, maxBX - minBX);
    const maxAllowedSpan = inPossession ? 39.0 : 32.0;
    const spanScale = baseSpan > maxAllowedSpan ? (maxAllowedSpan / baseSpan) : 1.0;

    const anchors = new Map();
    const defCandidates = [];

    for (let i = 0; i < mates.length; i++) {
      const p = mates[i];
      if (p.isKeeper) {
        const ownGoalX = isHome ? 1.8 : 103.2;
        const ballDistFromGoal = Math.abs(this.ball.xm - ownGoalX);
        const stepOut = Math.min(7.5, Math.max(0, (ballDistFromGoal - 18) * 0.14));
        const gkX = ownGoalX + attackDir * stepOut;
        const gkY = Math.max(29.8, Math.min(38.2, 34 + (this.ball.ym - 34) * 0.24));
        anchors.set(p, { x: gkX, y: gkY });
      }
    }

    for (let i = 0; i < outfield.length; i++) {
      const { p, baseXm, baseYm } = outfield[i];
      const relX = (baseXm - baseCentroidX) * spanScale;
      const ax = Math.max(5.0, Math.min(100.0, teamCentroidX + relX));

      // Escalar la anchura lateral respecto al eje central Z=0 (ym=34) + basculación 25%
      const centeredZ = (baseYm - 34.0) * lateralScale;
      let ay = 34.0 + centeredZ + ballShiftY;

      // Si tenemos orden "Juego Abierto por Bandas", fijar extremos/laterales en Z = ±30m (ym = 4.0 o 64.0)
      const pos = p.player?.pos || "";
      if (inPossession && atkWidth === "wide" && ["EI", "ED", "MI", "MD", "LI", "LD"].includes(pos)) {
        ay = baseYm < 34 ? 4.0 : 64.0;
      } else if (!inPossession && defWidth === "wide" && ["LI", "LD"].includes(pos)) {
        ay = baseYm < 34 ? 5.5 : 62.5;
      }

      ay = Math.max(3.2, Math.min(64.8, ay));
      anchors.set(p, { x: ax, y: ay });
      defCandidates.push({ p, distOwnGoal: isHome ? baseXm : (105 - baseXm) });
    }

    // En defensa, los 4 defensas mantienen línea horizontal coordinada según la altura de línea defensiva
    if (!inPossession && defCandidates.length >= 4) {
      defCandidates.sort((a, b) => a.distOwnGoal - b.distOwnGoal);
      const backFour = defCandidates.slice(0, 4);
      let avgDefX = 0;
      for (let i = 0; i < backFour.length; i++) {
        avgDefX += anchors.get(backFour[i].p).x;
      }
      avgDefX /= 4;

      if (defLine === "high" || defLine === "muy_alta" || defLine === "alta") {
        avgDefX = isHome ? Math.max(avgDefX, 46.0) : Math.min(avgDefX, 59.0);
      } else if (defLine === "low" || defLine === "baja" || defLine === "muy_baja") {
        avgDefX = isHome ? Math.min(avgDefX, 19.5) : Math.max(avgDefX, 85.5);
      }

      // Ordenar los 4 defensas de banda izquierda a banda derecha para garantizar 35-50m de ancho sin pisarse
      backFour.sort((a, b) => anchors.get(a.p).y - anchors.get(b.p).y);
      const targetLineWidth = defWidth === "compact" ? 34.0 : (defWidth === "wide" ? 50.0 : 42.0);
      for (let i = 0; i < backFour.length; i++) {
        const slotZ = ((i / 3) - 0.5) * targetLineWidth;
        const slotY = Math.max(4.0, Math.min(64.0, 34.0 + slotZ + ballShiftY * 0.7));
        anchors.set(backFour[i].p, { x: avgDefX, y: slotY });
      }
    }

    // Garantizar separación mínima de 6.8 metros entre cualquier par de anclas del mismo equipo
    const anchorEntries = Array.from(anchors.entries()).filter(([k]) => !k.isKeeper);
    for (let iter = 0; iter < 2; iter++) {
      for (let i = 0; i < anchorEntries.length; i++) {
        for (let j = i + 1; j < anchorEntries.length; j++) {
          const a = anchorEntries[i][1];
          const b = anchorEntries[j][1];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 6.8 && dist > 0.001) {
            const push = (6.8 - dist) * 0.5;
            const ux = dx / dist;
            const uy = dy / dist;
            a.x = Math.max(4, Math.min(101, a.x - ux * push));
            a.y = Math.max(3.2, Math.min(64.8, a.y - uy * push));
            b.x = Math.max(4, Math.min(101, b.x + ux * push));
            b.y = Math.max(3.2, Math.min(64.8, b.y + uy * push));
          }
        }
      }
    }

    return anchors;
  }

  // Selecciona dinámicamente una intención táctica orgánica evitando repetir la anterior
  _getTeamAttackIntent(team) {
    if (!this._teamAttackIntent) this._teamAttackIntent = { home: null, away: null };
    if (!this._teamIntentTimer) this._teamIntentTimer = { home: 0, away: 0 };

    const isHome = team === "home";
    const atkInst = isHome ? this.homeInstructions : this.awayInstructions;
    const defInst = isHome ? this.awayInstructions : this.homeInstructions;
    const width = atkInst?.inPossession?.width || "balanced";
    const oppDefLine = defInst?.outOfPossession?.defensiveLine || defInst?.outOfPossession?.defLine || "mid";
    const oppDefWidth = defInst?.outOfPossession?.defenseWidth || "balanced";

    if (!this._teamAttackIntent[team] || this._teamIntentTimer[team] <= 0) {
      const pool = ["WING_OVERLAP", "CUT_INSIDE_FINESSE", "ONE_TWO_COMBINATION", "THROUGH_BALL_BREAK", "FLANK_SWITCH", "LONG_SHOT_SCREEN"];
      if (width === "wide" || oppDefWidth === "compact") {
        pool.push("WING_OVERLAP", "FLANK_SWITCH", "CUT_INSIDE_FINESSE");
      }
      if (oppDefLine === "high" || oppDefLine === "alta" || oppDefLine === "muy_alta") {
        pool.push("THROUGH_BALL_BREAK", "THROUGH_BALL_BREAK");
      }
      if (oppDefLine === "low" || oppDefLine === "baja" || oppDefLine === "muy_baja") {
        pool.push("ONE_TWO_COMBINATION", "LONG_SHOT_SCREEN", "CUT_INSIDE_FINESSE");
      }
      const prev = this._teamAttackIntent[team];
      const filtered = pool.filter(i => i !== prev);
      this._teamAttackIntent[team] = filtered[Math.floor(Math.random() * filtered.length)] || "ONE_TWO_COMBINATION";
      this._teamIntentTimer[team] = 6.5 + Math.random() * 5.0; // Cambia orgánicamente cada 6.5-11.5s
    }
    return this._teamAttackIntent[team];
  }

  _launchBallPass(passer, receiver, team, customLead = null) {
    const targetX = customLead ? customLead.x : receiver.xm;
    const targetY = customLead ? customLead.y : receiver.ym;
    const dist = Math.hypot(targetX - passer.xm, targetY - passer.ym);
    const lateralDelta = Math.abs(targetY - passer.ym);
    const isLoftedSwitch = (customLead && customLead.isLofted) || dist > 23 || lateralDelta > 19;
    const passSkill = Number(passer.player?.pas || passer.player?.ovr || 72);
    const passSpeed = isLoftedSwitch
      ? Math.min(26.0, Math.max(14.5, 13.5 + dist * 0.35 + (passSkill - 65) * 0.06))
      : Math.min(21.5, Math.max(12.0, 11.0 + dist * 0.42 + (passSkill - 65) * 0.06));
    const estFlight = Math.min(1.35, dist / passSpeed);

    const leadX = customLead
      ? Math.max(2, Math.min(103, customLead.x))
      : Math.max(2, Math.min(103, receiver.xm + receiver.vx * estFlight * 0.65));
    const leadY = customLead
      ? Math.max(2, Math.min(66, customLead.y))
      : Math.max(2, Math.min(66, receiver.ym + receiver.vy * estFlight * 0.65));

    const dx = leadX - this.ball.xm;
    const dy = leadY - this.ball.ym;

    const inaccuracy = Math.max(0.01, (100 - passSkill) * 0.001);
    const angle = Math.atan2(dy, dx) + (Math.random() - 0.5) * inaccuracy;

    this.ball.carrier = null;
    this.ball.passTarget = receiver;
    this.ball.passTeam = team;
    this.ball.shotTeam = null;
    this.ball.shotMeta = null;
    this.ball.assistCandidate = passer;
    this.ball.lastTouchTeam = team;
    this.ball.lastTouchPlayer = passer;
    this.ball.possession = team;
    this.ball.pickupCooldown = 0.14;
    this.ball.vx = Math.cos(angle) * passSpeed;
    this.ball.vy = Math.sin(angle) * passSpeed;
    this.ball.vz = isLoftedSwitch ? Math.min(8.2, 3.0 + dist * 0.13) : 0.08;
    // Efecto de rosca en centros bombeados y cambios de orientación
    this.ball.spin = (customLead && customLead.spin) ? customLead.spin : (isLoftedSwitch ? (targetY > 34 ? -1.4 : 1.4) : 0);

    passer.pose = "kick";
    passer.poseTimer = 0.35;
    passer.facing = angle;
    passer.facingX = Math.cos(angle);
    passer.facingZ = Math.sin(angle);
    passer.aiState = "SUPPORT";
    passer.decisionTimer = 0.42;

    // Pared / Give-and-Go: si el pasador envía el balón al delantero o mediapunta en campo rival,
    // tira un desmarque inmediato hacia adelante para recibir la devolución al primer toque
    const isHome = team === "home";
    const inOppHalf = isHome ? (passer.xm > 48) : (passer.xm < 57);
    const isForwardPass = isHome ? (receiver.xm > passer.xm + 2.5) : (receiver.xm < passer.xm - 2.5);
    if (!passer.isKeeper && inOppHalf && isForwardPass && dist < 18.0 && Math.random() < 0.62) {
      passer.giveAndGoTimer = 1.65;
      passer.giveAndGoPartner = receiver;
    }

    // Espejo de narración en tiempo real nacido de la acción física real ejecutada en este tick
    if (!this._tactical2DOnly) {
      const pName = passer.player?.name || "Jugador";
      const rName = receiver.player?.name || "Compañero";
      const attackDir = isHome ? 1 : -1;
      const forwardGain = (leadX - passer.xm) * attackDir;
      const passKind = customLead?.kind || "PASS";

      if (passKind === "ONE_TWO") {
        this._setTickCommentary(`✨ ¡Pared al primer toque! ${pName} devuelve al espacio para la ruptura de ${rName}.`, "PARED 1-2");
      } else if (passKind === "CUTBACK") {
        this._setTickCommentary(`🎯 ¡Pase de la muerte atrás de ${pName}! ${rName} llega libre desde segunda línea.`, "PASE DE LA MUERTE");
      } else if (passKind === "CROSS") {
        this._setTickCommentary(`🎯 ¡Centro tenso y con rosca de ${pName} al área buscando a ${rName}!`, "CENTRO AL ÁREA");
      } else if (passKind === "SWITCH" || (isLoftedSwitch && lateralDelta > 20)) {
        this._setTickCommentary(`⚡ ¡Cambio de orientación de ${pName}! Abre al lado débil donde ${rName} recibe sin marca.`, "CAMBIO DE JUEGO");
      } else if (passKind === "THROUGH") {
        this._setTickCommentary(`🎯 ¡Balón filtrado de ${pName} al pasillo libre para el desmarque de ${rName}!`, "PASE FILTRADO");
      } else if (passKind === "WING") {
        this._setTickCommentary(`🚀 ${pName} proyecta por la banda hacia ${rName} aprovechando el carril exterior.`, "ATAQUE BANDA");
      } else if (passKind === "RECYCLE" || forwardGain < -1.5) {
        this._setTickCommentary(`🧠 ${pName} ve cerrado el carril interior y descarga con ${rName} libre de marca.`, "CIRCULACIÓN");
      } else if (forwardGain > 4.5) {
        this._setTickCommentary(`👟 ${pName} rompe líneas conectando en ventaja con ${rName}.`, "CONSTRUCCIÓN");
      } else {
        this._setTickCommentary(`👟 ${pName} se apoya en corto con ${rName} moviendo el bloque rival.`, "POSESIÓN");
      }
    }
  }

  _launchBallShot(shooter, team, shotStyle = "NORMAL") {
    const isHome = team === "home";
    const goalX = isHome ? 105.4 : -0.4;
    const sho = Number(shooter.player?.sho || shooter.player?.ovr || 74);
    const energy = shooter.player?.energy !== undefined ? shooter.player.energy : 100;

    const opps = isHome ? this.away2D : this.home2D;
    let nearestOppDist = 99;
    let nearestDef = null;
    for (let i = 0; i < opps.length; i++) {
      if (opps[i].isKeeper) continue;
      const d = Math.hypot(opps[i].xm - shooter.xm, opps[i].ym - shooter.ym);
      if (d < nearestOppDist) {
        nearestOppDist = d;
        nearestDef = opps[i];
      }
    }

    const pressureSpread = nearestOppDist < 2.2 ? 1.85 : (nearestOppDist < 4.2 ? 0.95 : 0.35);
    const skillSpread = Math.max(0.35, (96 - sho) * 0.045) + (100 - energy) * 0.012;
    const totalSpread = skillSpread + pressureSpread;

    const oppGK = opps.find(o => o.isKeeper);
    // Si es tiro con rosca desde la esquina del área (finesse), busca el palo lejano con efecto
    const isFinesse = shotStyle === "FINESSE" || (Math.abs(shooter.ym - 34) > 7.5 && Math.hypot(goalX - shooter.xm, 34 - shooter.ym) > 13.5);
    const preferredCornerY = isFinesse
      ? (shooter.ym > 34 ? 31.1 : 36.9)
      : (oppGK && oppGK.ym > 34 ? 31.35 : 36.65);
    const aimY = preferredCornerY + (Math.random() - 0.5) * totalSpread * 1.85;

    const dx = goalX - this.ball.xm;
    const dy = aimY - this.ball.ym;
    const dist = Math.hypot(dx, dy) || 1;
    const shotSpeed = (isFinesse ? 22.8 : 25.0) + (sho - 60) * 0.16 + Math.random() * 3.0;

    const onTargetAim = aimY >= 30.34 && aimY <= 37.66;
    if (!this._tactical2DOnly && !this._recordingReplayOnly) {
      if (isHome) this.stats.shots.home += 1;
      else this.stats.shots.away += 1;
      if (shooter.player) shooter.player.matchShots = (shooter.player.matchShots || 0) + 1;
    }

    this.ball.carrier = null;
    this.ball.passTarget = null;
    this.ball.passTeam = null;
    this.ball.shotTeam = team;
    this.ball.shotMeta = {
      scorer: shooter,
      assist: this.ball.assistCandidate && this.ball.assistCandidate !== shooter ? this.ball.assistCandidate : null,
      nearestDef,
      oppGK,
      team,
      onTargetAim,
      aimY,
      shotStyle: isFinesse ? "FINESSE" : "POWER"
    };
    this.ball.lastTouchTeam = team;
    this.ball.lastTouchPlayer = shooter;
    this.ball.possession = team;
    this.ball.pickupCooldown = 0.08;
    this.ball.vx = (dx / dist) * shotSpeed;
    this.ball.vy = (dy / dist) * shotSpeed;
    this.ball.vz = isFinesse ? Math.min(2.35, 1.35 + Math.random() * 0.9) : Math.min(2.15, 0.65 + Math.random() * 1.3);
    // Efecto Magnus en tiros con rosca hacia el palo largo
    this.ball.spin = isFinesse ? (shooter.ym > 34 ? -2.8 : 2.8) : ((Math.random() - 0.5) * 0.8);

    const isCloseAerial = this.ball.zm > 0.7 && dist < 13.5;
    shooter.pose = isCloseAerial ? "jump" : "kick";
    shooter.poseTimer = 0.40;
    shooter.facing = Math.atan2(dy, dx);
    shooter.facingX = dx / dist;
    shooter.facingZ = dy / dist;
    shooter.aiState = "SUPPORT";
    shooter.decisionTimer = 0.6;

    if (!this._tactical2DOnly) {
      const sName = shooter.player?.name || "El atacante";
      if (isCloseAerial) {
        this._setTickCommentary(`💥 ¡${sName} se eleva en el área y conecta un remate directo a portería!`, "REMATE");
      } else if (isFinesse) {
        this._setTickCommentary(`✨ ¡${sName} encuentra hueco a ${Math.round(dist)}m y busca el palo largo con rosca!`, "DISPARO");
      } else {
        this._setTickCommentary(`🚀 ¡${sName} ve línea de tiro despejada a ${Math.round(dist)}m y suelta un latigazo!`, "DISPARO");
      }
    }
  }

  // Evalúa en tiempo real la densidad defensiva y el balance numérico (evitando pases 4v2 o a jugadores rodeados)
  _evaluateSpatialDensity(tx, ty, mates, opps, excludeCarrier = null, receiver = null) {
    let oppClose = 0; // Rivales en radio crítico de 4.6m
    let oppMed = 0;   // Rivales en radio de ayuda defensiva de 7.8m
    let mateClose = receiver ? 1 : 0; // Compañeros de apoyo en 5.8m (incluyendo al propio receptor)
    let nearestOppDist = 99;

    for (let i = 0; i < opps.length; i++) {
      const o = opps[i];
      if (o.isKeeper) continue;
      // Predicción corta de posición del defensor (0.2s)
      const ox = o.xm + (o.vx || 0) * 0.2;
      const oy = o.ym + (o.vy || 0) * 0.2;
      const d = Math.hypot(ox - tx, oy - ty);
      if (d < nearestOppDist) nearestOppDist = d;
      if (d < 4.6) oppClose++;
      if (d < 7.8) oppMed++;
    }

    for (let i = 0; i < mates.length; i++) {
      const m = mates[i];
      if (m === excludeCarrier || m === receiver || m.isKeeper) continue;
      const d = Math.hypot(m.xm - tx, m.ym - ty);
      if (d < 5.8) mateClose++;
    }

    // Bloqueo por inferioridad numérica / embudo defensivo (ej. 4v2, 3v1, 2v1 sobre el receptor)
    const isOutnumberedCrowd = (oppClose >= 2 && oppClose > mateClose) || (oppMed >= 3 && oppMed > mateClose + 1);
    return {
      oppClose,
      oppMed,
      mateClose,
      nearestOppDist,
      numericalBalance: mateClose - oppClose,
      isOutnumberedCrowd
    };
  }

  // Comprueba físicamente si el pasillo de pase entre (ax,ay) y (bx,by) será interceptado por un defensor
  _isPassCorridorBlocked(ax, ay, bx, by, opps, isLofted = false) {
    const abx = bx - ax;
    const aby = by - ay;
    const dist = Math.hypot(abx, aby);
    if (dist < 0.5) return false;
    const ballSpd = isLofted ? Math.min(24.0, 13.5 + dist * 0.35) : Math.min(20.5, 11.5 + dist * 0.40);

    for (let i = 0; i < opps.length; i++) {
      const o = opps[i];
      if (o.isKeeper) continue;
      const apx = o.xm - ax;
      const apy = o.ym - ay;
      const t = (apx * abx + apy * aby) / (dist * dist);
      // Ignorar rivales detrás del pasador o más allá del punto de recepción
      if (t < 0.08 || t > 1.02) continue;

      const projX = ax + t * abx;
      const projY = ay + t * aby;
      const perpDist = Math.hypot(o.xm - projX, o.ym - projY);

      if (!isLofted) {
        // Pase raso: bloqueado si hay un rival en el cono directo o si llega antes al punto de corte
        const coneWidth = 1.45 + t * 1.15;
        if (perpDist < coneWidth) return true;
        const ballTimeToProj = (t * dist) / ballSpd;
        const oppSpd = o.maxSpeed || 7.2;
        const oppTimeToProj = Math.max(0, perpDist - 0.95) / oppSpd;
        if (perpDist < 4.2 && oppTimeToProj < ballTimeToProj * 0.88) return true;
      } else {
        // Pase elevado: solo puede ser cortado cerca de la salida o en la caída final
        if (t > 0.82 && perpDist < 1.85) return true;
      }
    }
    return false;
  }

  // Evalúa 8 direcciones en 360° alrededor del poseedor para encontrar el vector de conducción con mayor espacio libre
  _findBestOpenSpaceDribble(carrier, team, mates, opps) {
    const isHome = team === "home";
    const attackDir = isHome ? 1 : -1;
    const baseAngle = isHome ? 0 : Math.PI;
    const rayOffsets = [0, 0.42, -0.42, 0.88, -0.88, 1.38, -1.38, 2.15, -2.15];
    const stepDist = 6.2;

    let bestRay = null;
    let bestRayScore = -999;

    for (let r = 0; r < rayOffsets.length; r++) {
      const ang = baseAngle + rayOffsets[r];
      const tx = carrier.xm + Math.cos(ang) * stepDist;
      const ty = carrier.ym + Math.sin(ang) * stepDist;
      if (tx < 4.5 || tx > 100.5 || ty < 4.5 || ty > 63.5) continue;

      const dens = this._evaluateSpatialDensity(tx, ty, mates, opps, carrier, null);
      if (dens.oppClose >= 2 || dens.nearestOppDist < 2.6) continue;
      if (this._isPassCorridorBlocked(carrier.xm, carrier.ym, tx, ty, opps, false)) continue;

      const forwardGain = (tx - carrier.xm) * attackDir;
      const centerBias = -Math.abs(ty - 34) * 0.14;
      const score = Math.min(30, dens.nearestOppDist * 3.8) - dens.oppClose * 18.0 - dens.oppMed * 4.5 + forwardGain * 2.1 + centerBias;

      if (score > bestRayScore) {
        bestRayScore = score;
        bestRay = {
          x: tx,
          y: ty,
          score,
          nearestOppDist: dens.nearestOppDist,
          forwardGain,
          isDiagonalCut: Math.abs(carrier.ym - 34) > 14 && Math.abs(ty - 34) < Math.abs(carrier.ym - 34) - 2.0
        };
      }
    }
    return bestRay;
  }

  // =========================================================================================
  // EVALUACIÓN DE OPCIONES DE PASE (evaluatePassOptions) Y DESMARQUE ACTIVO SIN BALÓN
  // =========================================================================================
  // Evalúa para cada compañero disponible una puntuación determinista basada en:
  // 1) Distancia al defensa rival más cercano (premia fuertemente el espacio libre y penaliza 4 vs 2)
  // 2) Si la línea recta entre pasador y receptor está despejada de rivales
  // 3) Avance hacia la portería rival
  evaluatePassOptions(carrier, team, mates, opps) {
    const isHome = team === "home";
    const attackDir = isHome ? 1 : -1;
    const goalX = isHome ? 105 : 0;
    const goalY = 34;
    const carrierDistToGoal = Math.hypot(goalX - carrier.xm, goalY - carrier.ym);
    const offsideLineX = this._getOffsideLineX(team, opps);

    const defInst = isHome ? this.awayInstructions : this.homeInstructions;
    const oppDefWidth = defInst?.outOfPossession?.defenseWidth || "balanced";
    const oppDefLine = defInst?.outOfPossession?.defensiveLine || defInst?.outOfPossession?.defLine || "mid";

    const inFinalThird = isHome ? (carrier.xm > 75) : (carrier.xm < 30);
    const nearByline = isHome ? (carrier.xm > 89.5) : (carrier.xm < 15.5);
    const onWing = carrier.ym < 16.5 || carrier.ym > 51.5;

    const evaluatedOptions = [];

    for (let i = 0; i < mates.length; i++) {
      const m = mates[i];
      if (m === carrier || m.isKeeper) continue;

      const passDist = Math.hypot(m.xm - carrier.xm, m.ym - carrier.ym);
      if (passDist < 3.8 || passDist > 49.0) continue;

      // Descartar compañeros en posición de fuera de juego
      const isOffside = isHome ? (m.xm > offsideLineX + 0.35) : (m.xm < offsideLineX - 0.35);
      if (isOffside) continue;

      const forwardGain = (m.xm - carrier.xm) * attackDir;
      const isWinger = m.ym < 15.5 || m.ym > 52.5;
      const isOppositeFlank = (carrier.ym < 25 && m.ym > 43) || (carrier.ym > 43 && m.ym < 25);
      const inBox = (isHome ? m.xm > 76 : m.xm < 29) && Math.abs(m.ym - 34) < 17.5;

      // Puntos candidatos de recepción para este compañero (al pie y al espacio libre donde se está desmarcando)
      const candidateTargets = [];

      // A) Recepción al pie / bolsillo de apoyo actual
      candidateTargets.push({
        x: Math.max(3.0, Math.min(102.0, m.xm + (m.vx || 0) * 0.35)),
        y: Math.max(3.0, Math.min(65.0, m.ym + (m.vy || 0) * 0.35)),
        isLofted: false,
        spin: 0,
        kind: forwardGain < -1.5 ? "RECYCLE" : "PASS",
        tacticalFit: forwardGain < -1.5 ? 5.0 : 0
      });

      // B) Si el compañero ya está desmarcándose hacia un bolsillo libre (unmarkedTarget), evaluar pase a ese espacio
      if (m.unmarkedTarget) {
        candidateTargets.push({
          x: Math.max(3.5, Math.min(101.5, isHome ? Math.min(offsideLineX - 0.4, m.unmarkedTarget.x) : Math.max(offsideLineX + 0.4, m.unmarkedTarget.x))),
          y: Math.max(3.5, Math.min(64.5, m.unmarkedTarget.y)),
          isLofted: false,
          spin: 0,
          kind: ((m.unmarkedTarget.x - carrier.xm) * attackDir > 3.5) ? "THROUGH" : "PASS",
          tacticalFit: 8.0
        });
      }

      // C) Devolución de pared (Give-and-Go 1-2) al espacio
      if (m.giveAndGoTimer > 0 && m.giveAndGoPartner === carrier) {
        candidateTargets.push({
          x: isHome ? Math.min(offsideLineX - 0.4, m.xm + 5.5) : Math.max(offsideLineX + 0.4, m.xm - 5.5),
          y: Math.max(5.0, Math.min(63.0, m.ym + (34 - m.ym) * 0.16)),
          isLofted: false,
          spin: 0,
          kind: "ONE_TWO",
          tacticalFit: 14.0
        });
      }

      // D) Pase filtrado al espacio (Through Ball) hacia portería
      if (forwardGain > 1.8 && (isHome ? (m.xm > 44 && m.xm <= offsideLineX + 0.2) : (m.xm < 61 && m.xm >= offsideLineX - 0.2))) {
        const throughX = isHome
          ? Math.min(97.0, Math.min(offsideLineX + 1.2, m.xm + 6.8))
          : Math.max(8.0, Math.max(offsideLineX - 1.2, m.xm - 6.8));
        const throughY = Math.max(5.5, Math.min(62.5, m.ym + (34 - m.ym) * 0.20));
        candidateTargets.push({
          x: throughX,
          y: throughY,
          isLofted: false,
          spin: 0,
          kind: "THROUGH",
          tacticalFit: (oppDefLine === "high" || oppDefLine === "alta" || oppDefLine === "muy_alta") ? 12.0 : 8.5
        });
      }

      // E) Cambio de orientación a compañero abierto en banda contraria
      if (isOppositeFlank && passDist > 17.5) {
        candidateTargets.push({
          x: isHome ? Math.min(offsideLineX - 0.4, m.xm + 4.2) : Math.max(offsideLineX + 0.4, m.xm - 4.2),
          y: m.ym,
          isLofted: true,
          spin: m.ym > 34 ? -1.8 : 1.8,
          kind: "SWITCH",
          tacticalFit: oppDefWidth === "compact" ? 13.0 : 9.0
        });
      }

      // F) Apertura a banda / doblaje de lateral
      if (isWinger && forwardGain > 0.5) {
        candidateTargets.push({
          x: isHome ? Math.min(offsideLineX - 0.4, m.xm + 4.2) : Math.max(offsideLineX + 0.4, m.xm - 4.2),
          y: m.ym,
          isLofted: passDist > 24.0,
          spin: 0,
          kind: "WING",
          tacticalFit: (m.aiState === "OVERLAP" || oppDefWidth === "compact") ? 10.5 : 7.0
        });
      }

      // G) Pase de la muerte atrás (Cutback) o centro tenso si el pasador está en banda en último tercio y el receptor en el área
      if (inFinalThird && onWing && inBox) {
        const isCutbackZone = nearByline && Math.abs(m.ym - 34) < 10.5 && (isHome ? (m.xm >= 83 && m.xm <= 95.5) : (m.xm >= 9.5 && m.xm <= 22));
        candidateTargets.push({
          x: isCutbackZone
            ? (isHome ? Math.min(95.0, m.xm + 1.2) : Math.max(10.0, m.xm - 1.2))
            : (isHome ? Math.min(97.2, Math.max(88.5, m.xm + 2.2)) : Math.max(7.8, Math.min(16.5, m.xm - 2.2))),
          y: Math.max(24.0, Math.min(44.0, m.ym)),
          isLofted: !isCutbackZone,
          spin: !isCutbackZone ? (carrier.ym > 34 ? -2.2 : 2.2) : 0,
          kind: isCutbackZone ? "CUTBACK" : "CROSS",
          tacticalFit: isCutbackZone ? 14.0 : 9.0
        });
      }

      let bestCandForMate = null;
      let bestCandScore = -9999;

      for (let c = 0; c < candidateTargets.length; c++) {
        const cand = candidateTargets[c];
        const dens = this._evaluateSpatialDensity(cand.x, cand.y, mates, opps, carrier, m);

        // 1) PUNTUACIÓN POR DISTANCIA AL DEFENSA MÁS CERCANO (Premia fuertemente el espacio libre y castiga el 4 vs 2)
        const nearestDefDist = dens.nearestOppDist;
        let spaceScore = Math.min(88.0, nearestDefDist * 8.6)
          - dens.oppClose * 32.0
          - dens.oppMed * 8.5
          + dens.numericalBalance * 13.5;

        // Bonus extra a jugador desmarcado; si nearestDefenderDist > 6.5m (ej. 4 vs 2 con compañero abierto en banda),
        // disparar el peso de spaceScore para que el pase se ejecute inmediatamente en vez de conducir hacia el centro (y = 34)
        if (nearestDefDist > 6.5 && dens.oppClose === 0) {
          spaceScore += 68.0 + Math.min(32.0, (nearestDefDist - 6.5) * 6.5);
        } else if (dens.oppClose === 0 && nearestDefDist >= 5.0) {
          spaceScore += 28.0;
        }
        if (dens.isOutnumberedCrowd || nearestDefDist < 2.35) {
          spaceScore -= 85.0;
        }

        // 2) PUNTUACIÓN DE LÍNEA DE PASE RECTA DESPEJADA ENTRE PASADOR Y RECEPTOR
        let minLineDist = 99;
        const cDist = Math.hypot(cand.x - carrier.xm, cand.y - carrier.ym) || 1;
        for (let j = 0; j < opps.length; j++) {
          const o = opps[j];
          if (o.isKeeper) continue;
          const projT = ((o.xm - carrier.xm) * (cand.x - carrier.xm) + (o.ym - carrier.ym) * (cand.y - carrier.ym)) / (cDist * cDist);
          if (projT >= 0.06 && projT <= 1.02) {
            const segD = this._distPointToSegment(o.xm, o.ym, carrier.xm, carrier.ym, cand.x, cand.y);
            if (segD < minLineDist) minLineDist = segD;
          }
        }
        const corridorBlocked = this._isPassCorridorBlocked(carrier.xm, carrier.ym, cand.x, cand.y, opps, cand.isLofted);
        const isLineClear = !corridorBlocked && (cand.isLofted ? minLineDist >= 1.75 : minLineDist >= 2.25);

        let lineClearScore = 0;
        if (!isLineClear) {
          lineClearScore = -95.0; // Línea bloqueada por un rival
        } else {
          lineClearScore = 20.0 + Math.min(18.0, (minLineDist - 2.0) * 3.8);
        }

        // 3) PUNTUACIÓN DE AVANCE HACIA LA PORTERÍA RIVAL
        const targetDistToGoal = Math.hypot(goalX - cand.x, goalY - cand.y);
        const goalDistGain = carrierDistToGoal - targetDistToGoal;
        const forwardXGain = (cand.x - carrier.xm) * attackDir;
        const advanceScore = goalDistGain * 1.95 + forwardXGain * 1.35;

        // El ajuste táctico solo suma si el receptor está libre y la línea está despejada
        const validTacticalBonus = (isLineClear && !dens.isOutnumberedCrowd && dens.oppClose === 0) ? cand.tacticalFit : 0;
        const totalScore = spaceScore + lineClearScore + advanceScore + validTacticalBonus;

        if (totalScore > bestCandScore) {
          bestCandScore = totalScore;
          bestCandForMate = {
            receiver: m,
            lead: cand,
            score: totalScore,
            spaceScore,
            lineClearScore,
            advanceScore,
            nearestDefenderDist: nearestDefDist,
            minLineDist,
            isLineClear,
            isOutnumberedCrowd: dens.isOutnumberedCrowd,
            oppClose: dens.oppClose
          };
        }
      }

      if (bestCandForMate) {
        evaluatedOptions.push(bestCandForMate);
      }
    }

    // Ordenar de mayor a menor puntuación (el compañero libre gana siempre por amplio margen sobre un delantero marcado en 4 vs 2)
    evaluatedOptions.sort((a, b) => b.score - a.score);
    const bestViable = evaluatedOptions.find(opt =>
      opt.isLineClear &&
      !opt.isOutnumberedCrowd &&
      opt.nearestDefenderDist >= 2.3 &&
      opt.score > -10
    ) || null;

    return {
      bestOption: bestViable,
      allOptions: evaluatedOptions
    };
  }

  // Calcula dinámicamente para cada jugador sin balón una zona de desmarque lejos de los defensas rivales
  // y con línea de pase abierta respecto al poseedor
  _findUnmarkedOffBallSpace(player, baseAnchorX, baseAnchorY, carrier, team, mates, opps, offsideLineX) {
    const isHome = team === "home";
    const attackDir = isHome ? 1 : -1;
    const goalX = isHome ? 105 : 0;
    const goalY = 34;
    const refX = carrier ? carrier.xm : this.ball.xm;
    const refY = carrier ? carrier.ym : this.ball.ym;

    // 1. Vector de repulsión directa respecto a los defensas cercanos (< 6.5m) para alejarse de la marca
    let repulseX = 0;
    let repulseY = 0;
    for (let j = 0; j < opps.length; j++) {
      const o = opps[j];
      if (o.isKeeper) continue;
      const dx = player.xm - o.xm;
      const dy = player.ym - o.ym;
      const d = Math.hypot(dx, dy);
      if (d < 6.5 && d > 0.05) {
        const strength = ((6.5 - d) / 6.5) * 4.8;
        repulseX += (dx / d) * strength;
        repulseY += (dy / d) * strength;
      }
    }

    const centerX = Math.max(5.0, Math.min(100.0, baseAnchorX + repulseX * 0.65));
    const centerY = Math.max(4.0, Math.min(64.0, baseAnchorY + repulseY * 0.85));

    // 2. Muestrear bolsillos de espacio candidato alrededor del ancla (desmarque de ruptura, diagonal, apoyo, amplitud)
    const offsets = [
      { dx: 0, dy: 0 },
      { dx: attackDir * 5.2, dy: 0 },
      { dx: attackDir * 4.8, dy: 5.5 },
      { dx: attackDir * 4.8, dy: -5.5 },
      { dx: 0, dy: 6.5 },
      { dx: 0, dy: -6.5 },
      { dx: -attackDir * 3.8, dy: 4.5 },
      { dx: -attackDir * 3.8, dy: -4.5 },
      { dx: repulseX * 1.2, dy: repulseY * 1.2 }
    ];

    let bestSpot = { x: centerX, y: centerY, score: -9999 };

    for (let k = 0; k < offsets.length; k++) {
      let cx = centerX + offsets[k].dx;
      let cy = centerY + offsets[k].dy;

      // Respetar línea de fuera de juego y límites del campo
      cx = isHome ? Math.min(cx, offsideLineX - 0.85) : Math.max(cx, offsideLineX + 0.85);
      cx = Math.max(4.5, Math.min(100.5, cx));
      cy = Math.max(3.8, Math.min(64.2, cy));

      // Distancia al defensa rival más cercano (prioridad máxima: alejarse de los defensas)
      let nearestDef = 99;
      let defCrowding = 0;
      for (let j = 0; j < opps.length; j++) {
        const o = opps[j];
        if (o.isKeeper) continue;
        const d = Math.hypot(o.xm - cx, o.ym - cy);
        if (d < nearestDef) nearestDef = d;
        if (d < 5.0) defCrowding += (5.0 - d) * 6.5;
      }

      // Evitar amontonarse con otros compañeros de ataque (< 6.8m)
      let mateCrowding = 0;
      for (let j = 0; j < mates.length; j++) {
        const m = mates[j];
        if (m === player || m.isKeeper) continue;
        const targetMx = m.unmarkedTarget ? m.unmarkedTarget.x : m.xm;
        const targetMy = m.unmarkedTarget ? m.unmarkedTarget.y : m.ym;
        const dm = Math.hypot(targetMx - cx, targetMy - cy);
        if (dm < 6.8) mateCrowding += (6.8 - dm) * 8.0;
      }

      // Comprobar si desde este punto ofrece una línea de pase limpia al jugador con balón
      let minPassLineDist = 99;
      const distFromBall = Math.hypot(cx - refX, cy - refY);
      if (distFromBall > 3.5 && distFromBall < 42.0) {
        for (let j = 0; j < opps.length; j++) {
          const o = opps[j];
          if (o.isKeeper) continue;
          const segD = this._distPointToSegment(o.xm, o.ym, refX, refY, cx, cy);
          if (segD < minPassLineDist) minPassLineDist = segD;
        }
      }
      const lineBonus = minPassLineDist >= 2.6 ? Math.min(18.0, minPassLineDist * 3.2) : -22.0;

      // Avance hacia portería sin perder estructura táctica
      const distGoal = Math.hypot(goalX - cx, goalY - cy);
      const baseDistGoal = Math.hypot(goalX - baseAnchorX, goalY - baseAnchorY);
      const advanceBonus = (baseDistGoal - distGoal) * 1.45;
      const anchorDriftPenalty = Math.hypot(cx - baseAnchorX, cy - baseAnchorY) * 0.85;

      const score = Math.min(42.0, nearestDef * 5.2)
        - defCrowding
        - mateCrowding
        + lineBonus
        + advanceBonus
        - anchorDriftPenalty;

      if (score > bestSpot.score) {
        bestSpot = { x: cx, y: cy, score, nearestDef };
      }
    }

    player.unmarkedTarget = bestSpot;
    return bestSpot;
  }

  // TOMA DE DECISIONES DEL JUGADOR CON BALÓN EN TIEMPO REAL (Basada en evaluatePassOptions + Pitch Control)
  _evaluateCarrierDecision(carrier, team, mates, opps) {
    const isHome = team === "home";
    const goalX = isHome ? 105 : 0;
    const goalY = 34;
    const dxGoal = goalX - carrier.xm;
    const dyGoal = goalY - carrier.ym;
    const distToGoal = Math.hypot(dxGoal, dyGoal);
    const goalAngle = Math.atan2(dyGoal, dxGoal);
    const intent = this._getTeamAttackIntent(team);

    let minFrontalOppDist = 99;
    let nearestAnyOpp = 99;
    for (let i = 0; i < opps.length; i++) {
      const o = opps[i];
      const dx = o.xm - carrier.xm;
      const dy = o.ym - carrier.ym;
      const d = Math.hypot(dx, dy);
      if (d < nearestAnyOpp) nearestAnyOpp = d;

      const oppAngle = Math.atan2(dy, dx);
      const angleDiff = Math.abs(Math.atan2(Math.sin(oppAngle - goalAngle), Math.cos(oppAngle - goalAngle)));
      const segDist = this._distPointToSegment(o.xm, o.ym, carrier.xm, carrier.ym, goalX, goalY);
      if ((angleDiff <= Math.PI / 5 || segDist < 2.8) && d <= distToGoal + 1.0) {
        if (d < minFrontalOppDist) minFrontalOppDist = d;
      }
    }

    _evaluateCarrierDecision(carrier, team, mates, opps) {
    const isHome = team === "home";
    const goalX = isHome ? 105 : 0;
    const goalY = 34;
    const dxGoal = goalX - carrier.xm;
    const dyGoal = goalY - carrier.ym;
    const distToGoal = Math.hypot(dxGoal, dyGoal);
    const goalAngle = Math.atan2(dyGoal, dxGoal);
    const intent = this._getTeamAttackIntent(team);

    let minFrontalOppDist = 99;
    for (let i = 0; i < opps.length; i++) {
      const o = opps[i];
      if (o.isKeeper) continue;
      const dx = o.xm - carrier.xm;
      const dy = o.ym - carrier.ym;
      const d = Math.hypot(dx, dy);
      const oppAngle = Math.atan2(dy, dx);
      const angleDiff = Math.abs(Math.atan2(Math.sin(oppAngle - goalAngle), Math.cos(oppAngle - goalAngle)));
      const segDist = this._distPointToSegment(o.xm, o.ym, carrier.xm, carrier.ym, goalX, goalY);
      if ((angleDiff <= Math.PI / 5 || segDist < 2.8) && d <= distToGoal + 1.0) {
        if (d < minFrontalOppDist) minFrontalOppDist = d;
      }
    }

    // 1. EVALUAR PRIMERO A TODOS LOS COMPAÑEROS (Clave para los 4 vs 2)
    const { bestOption, allOptions } = this.evaluatePassOptions(carrier, team, mates, opps);
    const hasWideOpenTeammate = Boolean(
      bestOption &&
      bestOption.isLineClear &&
      bestOption.nearestDefenderDist >= 5.0 &&
      bestOption.advanceScore > -4
    );

    // 2. DISPARO A PUERTA (Solo si es ocasión clara de verdad o no hay nadie completamente solo)
    if (!carrier.isKeeper) {
      const isWideAngle = Math.abs(carrier.ym - 34) > 13.5 && (isHome ? carrier.xm > 91 : carrier.xm < 14);
      const clearOneOnOne = distToGoal < 12.5 && minFrontalOppDist >= 1.8;
      const cleanBoxShot = distToGoal < 17.5 && minFrontalOppDist >= 3.2 && !hasWideOpenTeammate;
      const cleanLongShot = intent === "LONG_SHOT_SCREEN" && distToGoal < 22.0 && minFrontalOppDist >= 4.5 && !hasWideOpenTeammate;

      if (!isWideAngle && (clearOneOnOne || cleanBoxShot || cleanLongShot)) {
        this._launchBallShot(carrier, team, intent === "CUT_INSIDE_FINESSE" ? "FINESSE" : "NORMAL");
        return;
      }
    }

    // 3. SI HAY UN COMPAÑERO LIBRE EN VENTAJA (4 vs 2), PASAR INMEDIATAMENTE
    if (hasWideOpenTeammate) {
      carrier.openDribbleTarget = null;
      this._launchBallPass(carrier, bestOption.receiver, team, bestOption.lead);
      return;
    }

    // 4. EVALUAR CONDUCCIÓN AL ESPACIO LIBRE VS PASE NORMAL (Sin sesgo artificial de +24 a chupar balón)
    const bestDribbleRay = !carrier.isKeeper ? this._findBestOpenSpaceDribble(carrier, team, mates, opps) : null;
    if (bestDribbleRay && !carrier.isKeeper) {
      const passScore = bestOption ? bestOption.score : -999;
      const shouldDribble = !bestOption ||
        (bestDribbleRay.nearestOppDist >= 6.0 && bestDribbleRay.forwardGain > 3.0 && (bestDribbleRay.score > passScore + 8.0) && distToGoal < 38.0);

      if (shouldDribble) {
        carrier.openDribbleTarget = bestDribbleRay;
        carrier.aiState = bestDribbleRay.isDiagonalCut ? "CUT_INSIDE" : "SPRINT_TO_GOAL";
        return;
      }
    }

    if (bestOption) {
      carrier.openDribbleTarget = null;
      this._launchBallPass(carrier, bestOption.receiver, team, bestOption.lead);
      return;
    }

    // 5. VÁLVULA DE ESCAPE: descargar hacia atrás con el compañero más libre
    const safestRecycle = allOptions.find(opt => opt.isLineClear && opt.nearestDefenderDist >= 2.2);
    if (safestRecycle) {
      carrier.openDribbleTarget = null;
      this._launchBallPass(carrier, safestRecycle.receiver, team, {
        ...safestRecycle.lead,
        kind: "RECYCLE"
      });
      return;
    }

    if (bestDribbleRay) {
      carrier.openDribbleTarget = bestDribbleRay;
    }
    carrier.aiState = "SPRINT_TO_GOAL";
  }

  _updateTeamAI(team, mates, opps, allPlayers, dt) {
    const isHome = team === "home";
    const attackDir = isHome ? 1 : -1;
    const inPossession = this.ball.possession === team;
    const carrier = this.ball.carrier;
    const carrierInTeam = carrier && carrier.side === team ? carrier : null;
    const anchors = this._computeTeamBlockAnchors(team, mates, inPossession);

    if (this._teamIntentTimer && this._teamIntentTimer[team] > 0) {
      this._teamIntentTimer[team] = Math.max(0, this._teamIntentTimer[team] - dt);
    }

    if (inPossession) {
      const intent = this._getTeamAttackIntent(team);
      const offsideLineX = this._getOffsideLineX(team, opps);
      const clampOnsideX = (tx, player) => {
        if (this.ball.carrier === null && this.ball.passTarget === player && this.ball.passTeam === team) {
          return tx;
        }
        return isHome ? Math.min(tx, offsideLineX - 0.9) : Math.max(tx, offsideLineX + 0.9);
      };

      const carrierReadyToPass = carrierInTeam && carrierInTeam.controlTimer <= 0 && carrierInTeam.decisionTimer <= 0.25;
      const ballInWideFinalThird = (isHome ? this.ball.xm > 72 : this.ball.xm < 33) && (this.ball.ym < 18 || this.ball.ym > 50);

      const forwardIds = new Set();
      const boxRunners = [];
      mates.forEach(m => {
        if (m !== carrierInTeam && !m.isKeeper) {
          const pos = m.player?.pos || "";
          const isAttackerPos = ["DC", "ED", "EI", "SD", "MCO", "MD", "MI"].includes(pos);
          const isAheadBase = isHome ? (m.baseX >= 58) : (m.baseX <= 42);
          if (isAttackerPos || isAheadBase) {
            forwardIds.add(m);
            boxRunners.push(m);
          }
        }
      });

      // Detectar si un lateral debe doblar por fuera (OVERLAP) al extremo con balón
      let overlapFullback = null;
      if (carrierInTeam && !carrierInTeam.isKeeper && Math.abs(carrierInTeam.ym - 34) > 14 && (isHome ? carrierInTeam.xm > 48 : carrierInTeam.xm < 57)) {
        const sameSideTop = carrierInTeam.ym < 34;
        overlapFullback = mates.find(m =>
          m !== carrierInTeam &&
          ["LD", "LI", "CAD", "CAI"].includes(m.player?.pos) &&
          (sameSideTop ? m.ym < 34 : m.ym > 34)
        ) || null;
      }

      let looseChaser = null;
      if (!carrierInTeam && (!this.ball.passTarget || this.ball.passTarget.side !== team)) {
        let bestD = 999;
        for (let i = 0; i < mates.length; i++) {
          if (mates[i].isKeeper) continue;
          const d = Math.hypot(mates[i].xm - this.ball.xm, mates[i].ym - this.ball.ym);
          if (d < bestD) {
            bestD = d;
            looseChaser = mates[i];
          }
        }
      }

      for (let i = 0; i < mates.length; i++) {
        const p = mates[i];
        const anchor = anchors.get(p) || { x: p.xm, y: p.ym };
        if (p.giveAndGoTimer > 0) p.giveAndGoTimer = Math.max(0, p.giveAndGoTimer - dt);

        if (p === looseChaser) {
          p.aiState = "RECEIVE";
          this._steerPlayer(p, this.ball.xm + this.ball.vx * 0.15, this.ball.ym + this.ball.vy * 0.15, 0.98, dt, allPlayers);
          continue;
        }

        if (p === carrierInTeam) {
          if (p.controlTimer > 0) {
            p.controlTimer = Math.max(0, p.controlTimer - dt);
            p.aiState = "CONTROL";
            const pivotX = isHome ? Math.min(104, p.xm + 3.5) : Math.max(1, p.xm - 3.5);
            this._steerPlayer(p, pivotX, 34 + (p.ym - 34) * 0.5, 0.25, dt, allPlayers);
            continue;
          }
          const inOpponentHalf = isHome ? (p.xm > 52.5) : (p.xm < 52.5);
          if (inOpponentHalf && p.decisionTimer > 0.14) {
            p.decisionTimer = 0.14;
          }
          p.decisionTimer -= dt;
          if (p.decisionTimer <= 0) {
            let pressed = false;
            for (let j = 0; j < opps.length; j++) {
              if (Math.hypot(opps[j].xm - p.xm, opps[j].ym - p.ym) < 3.4) {
                pressed = true;
                break;
              }
            }
            p.decisionTimer = inOpponentHalf ? 0.14 : (pressed ? 0.22 : 0.34);
            this._evaluateCarrierDecision(p, team, mates, opps);
          }

          if (this.ball.carrier === p) {
            const goalX = isHome ? 105 : 0;
            const dGoalNow = Math.hypot(goalX - p.xm, 34 - p.ym);
            if (!p.isKeeper && (p.aiState === "SPRINT_TO_GOAL" || p.aiState === "CUT_INSIDE") && dGoalNow < 10.5 && Math.abs(p.ym - 34) < 9.0) {
              // Comprobar si hay rival bloqueando a menos de 2.2m o un compañero desmarcado antes de chutar en conducción
              let minFrontDist = 99;
              for (let j = 0; j < opps.length; j++) {
                const od = Math.hypot(opps[j].xm - p.xm, opps[j].ym - p.ym);
                const isAhead = isHome ? (opps[j].xm >= p.xm - 0.3) : (opps[j].xm <= p.xm + 0.3);
                if (isAhead && od < minFrontDist) minFrontDist = od;
              }
              if (dGoalNow <= 13.0 && minFrontDist >= 1.85) {
                this._launchBallShot(p, team, p.aiState === "CUT_INSIDE" ? "FINESSE" : "NORMAL");
                continue;
              }
            }

            // Conducción inteligente hacia el vector de espacio libre 360° evaluado tick a tick
            let driveX = isHome ? 94 : 11;
            let driveY = 34;
            if (p.openDribbleTarget) {
              driveX = p.openDribbleTarget.x;
              driveY = p.openDribbleTarget.y;
            } else if (p.aiState === "CUT_INSIDE") {
              driveX = isHome ? Math.min(93, p.xm + 8) : Math.max(12, p.xm - 8);
              driveY = p.ym > 34 ? Math.max(29, p.ym - 9.5) : Math.min(39, p.ym + 9.5);
            } else {
              // Vector de evasión lateral respecto al rival frontal más cercano
              let evadeY = 0;
              for (let j = 0; j < opps.length; j++) {
                const o = opps[j];
                if (o.isKeeper) continue;
                const d = Math.hypot(o.xm - p.xm, o.ym - p.ym);
                const ahead = isHome ? (o.xm > p.xm - 0.5 && o.xm < p.xm + 6.5) : (o.xm < p.xm + 0.5 && o.xm > p.xm - 6.5);
                if (ahead && d < 6.0) {
                  evadeY += (p.ym >= o.ym ? 5.5 : -5.5) * (1 - d / 6.0);
                }
              }
              driveX = isHome ? Math.min(96, p.xm + 12) : Math.max(9, p.xm - 12);
              driveY = Math.max(6, Math.min(62, p.ym + (34 - p.ym) * 0.25 + evadeY));
            }

            const speedRatio = p.aiState === "SPRINT_TO_GOAL" ? 0.98 : 0.90;
            this._steerPlayer(p, driveX, driveY, speedRatio, dt, allPlayers);
          } else {
            this._steerPlayer(p, clampOnsideX(anchor.x, p), anchor.y, 0.74, dt, allPlayers);
          }
        } else if (this.ball.carrier === null && this.ball.passTarget === p && this.ball.passTeam === team) {
          p.aiState = "RECEIVE";
          this._steerPlayer(p, this.ball.xm + this.ball.vx * 0.18, this.ball.ym + this.ball.vy * 0.18, 0.98, dt, allPlayers);
        } else if (p.giveAndGoTimer > 0) {
          // Carrera de pared (Give-and-Go): busca el bolsillo libre de defensas hacia adelante
          p.aiState = "MAKE_RUN";
          const baseWallX = clampOnsideX(p.xm + attackDir * 9.5, p);
          const baseWallY = Math.max(8, Math.min(60, p.ym + (34 - p.ym) * 0.32));
          const freeSpot = this._findUnmarkedOffBallSpace(p, baseWallX, baseWallY, carrierInTeam, team, mates, opps, offsideLineX);
          this._steerPlayer(p, clampOnsideX(freeSpot.x, p), freeSpot.y, 0.98, dt, allPlayers);
        } else if (p === overlapFullback) {
          // Doblaje de lateral por fuera buscando zona libre en banda
          p.aiState = "OVERLAP";
          const overX = clampOnsideX(carrierInTeam.xm + attackDir * 9.0, p);
          const overY = carrierInTeam.ym < 34 ? 4.2 : 63.8;
          const freeSpot = this._findUnmarkedOffBallSpace(p, overX, overY, carrierInTeam, team, mates, opps, offsideLineX);
          this._steerPlayer(p, clampOnsideX(freeSpot.x, p), freeSpot.y, 0.97, dt, allPlayers);
        } else if (ballInWideFinalThird && forwardIds.has(p)) {
          // Desmarques activos en el área: parten de los 3 carriles (1er palo, 2º palo, penalti) y se separan de sus marcadores
          p.aiState = "MAKE_RUN";
          const rIdx = boxRunners.indexOf(p);
          const ballTop = this.ball.ym < 34;
          let boxTargetX, boxTargetY;
          if (rIdx % 3 === 0) {
            boxTargetX = isHome ? 96.5 : 8.5;
            boxTargetY = ballTop ? 29.0 : 39.0;
          } else if (rIdx % 3 === 1) {
            boxTargetX = isHome ? 95.0 : 10.0;
            boxTargetY = ballTop ? 39.5 : 28.5;
          } else {
            boxTargetX = isHome ? 89.5 : 15.5;
            boxTargetY = 34.0;
          }
          const freeBoxSpot = this._findUnmarkedOffBallSpace(p, clampOnsideX(boxTargetX, p), boxTargetY, carrierInTeam, team, mates, opps, offsideLineX);
          this._steerPlayer(p, clampOnsideX(freeBoxSpot.x, p), freeBoxSpot.y, 0.96, dt, allPlayers);
        } else if (forwardIds.has(p)) {
          // Delanteros y extremos sin balón: se desmarcan activamente alejándose de los centrales/laterales rivales
          p.aiState = "MAKE_RUN";
          const edgeX = isHome ? Math.min(anchor.x + 5.0, offsideLineX - 0.9) : Math.max(anchor.x - 5.0, offsideLineX + 0.9);
          const freeAttackSpot = this._findUnmarkedOffBallSpace(p, edgeX, anchor.y, carrierInTeam, team, mates, opps, offsideLineX);
          this._steerPlayer(p, clampOnsideX(freeAttackSpot.x, p), freeAttackSpot.y, carrierReadyToPass ? 0.95 : 0.86, dt, allPlayers);
        } else if (!p.isKeeper) {
          // Centrocampistas y defensas de apoyo: se mueven a bolsillos lejos de rivales para ofrecer línea de pase limpia
          p.aiState = "SUPPORT";
          const freeSupportSpot = this._findUnmarkedOffBallSpace(p, anchor.x, anchor.y, carrierInTeam, team, mates, opps, offsideLineX);
          this._steerPlayer(p, clampOnsideX(freeSupportSpot.x, p), freeSupportSpot.y, 0.82, dt, allPlayers);
        } else {
          p.aiState = "GK";
          this._steerPlayer(p, anchor.x, anchor.y, 0.78, dt, allPlayers);
        }
      }
    } else {
      // DISCIPLINA DEFENSIVA: 1 presionador directo + cobertura + marcaje en el área
      let solePresser = null;
      let minBallDist = 999;
      for (let i = 0; i < mates.length; i++) {
        const m = mates[i];
        if (m.isKeeper) continue;
        const d = Math.hypot(m.xm - this.ball.xm, m.ym - this.ball.ym);
        if (d < minBallDist) {
          minBallDist = d;
          solePresser = m;
        }
      }

      const ownGoalX = isHome ? 1.8 : 103.2;
      const ownGoalY = 34;

      const ballInOwnHalf = isHome ? (this.ball.xm < 52.5) : (this.ball.xm > 52.5);
      let coverCB = null;
      if (ballInOwnHalf) {
        let bestCBDist = 999;
        for (let i = 0; i < mates.length; i++) {
          const m = mates[i];
          if (m.isKeeper || m === solePresser) continue;
          const pos = m.player?.pos || "";
          const isDef = pos === "DFC" || pos === "LI" || pos === "LD" || pos === "MCD";
          if (!isDef) continue;
          const d = Math.hypot(m.xm - this.ball.xm, m.ym - this.ball.ym) - (pos === "DFC" ? 4.0 : 0);
          if (d < bestCBDist) {
            bestCBDist = d;
            coverCB = m;
          }
        }
      }

      for (let i = 0; i < mates.length; i++) {
        const p = mates[i];
        const anchor = anchors.get(p) || { x: p.xm, y: p.ym };

        if (p.isKeeper) {
          p.aiState = "GK";
          const gkX = isHome ? 1.5 : 103.5;
          const gkSkill = Number(p.player?.por || p.player?.par || p.player?.ovr || 74);
          const reflexRatio = Math.max(0.75, Math.min(1.12, 0.78 + (gkSkill - 55) * 0.006));
          const oppShotIncoming = this.ball.shotTeam && this.ball.shotTeam !== team &&
            ((isHome && this.ball.vx < -0.5) || (!isHome && this.ball.vx > 0.5));

          if (oppShotIncoming) {
            const tCross = (gkX - this.ball.xm) / this.ball.vx;
            if (tCross > 0 && tCross < 2.2) {
              const predY = Math.max(30.2, Math.min(37.8, this.ball.ym + this.ball.vy * tCross));
              p.pose = "dive";
              this._steerPlayer(p, gkX, predY, reflexRatio, dt, allPlayers);
              continue;
            }
          }

          const ballInBox = isHome ? (this.ball.xm < 16.5 && Math.abs(this.ball.ym - 34) < 18) : (this.ball.xm > 88.5 && Math.abs(this.ball.ym - 34) < 18);
          if (ballInBox && this.ball.carrier === null && Math.hypot(this.ball.vx, this.ball.vy) < 8.5) {
            this._steerPlayer(p, this.ball.xm, this.ball.ym, 0.96, dt, allPlayers);
          } else {
            this._steerPlayer(p, anchor.x, anchor.y, 0.85, dt, allPlayers);
          }
          continue;
        }

        if (p === solePresser) {
          p.aiState = "PRESSING";
          const b2gX = ownGoalX - this.ball.xm;
          const b2gY = ownGoalY - this.ball.ym;
          const b2gLen = Math.hypot(b2gX, b2gY) || 1;
          const targetX = this.ball.xm + (b2gX / b2gLen) * 0.4;
          const targetY = this.ball.ym + (b2gY / b2gLen) * 0.4;
          this._steerPlayer(p, targetX, targetY, 1.0, dt, allPlayers);

          if (this.ball.carrier && this.ball.carrier.side !== team && p.tackleCooldown <= 0) {
            const dCarrier = Math.hypot(p.xm - this.ball.carrier.xm, p.ym - this.ball.carrier.ym);
            if (dCarrier < 1.55) {
              this._attemptTackle(p, this.ball.carrier, team);
            }
          }
        } else if (p === coverCB) {
          p.aiState = "COVER_FRONTAL";
          const segT = 0.28;
          const blockX = Math.max(2.0, Math.min(103.0, this.ball.xm + (ownGoalX - this.ball.xm) * segT));
          const blockY = Math.max(4.0, Math.min(64.0, this.ball.ym + (ownGoalY - this.ball.ym) * segT));
          this._steerPlayer(p, blockX, blockY, 0.96, dt, allPlayers);

          if (this.ball.carrier && this.ball.carrier.side !== team && p.tackleCooldown <= 0) {
            const dCarrier = Math.hypot(p.xm - this.ball.carrier.xm, p.ym - this.ball.carrier.ym);
            if (dCarrier < 1.55) {
              this._attemptTackle(p, this.ball.carrier, team);
            }
          }
        } else {
          p.aiState = "DEFEND_ZONE";
          const b2gX = ownGoalX - this.ball.xm;
          const b2gY = ownGoalY - this.ball.ym;
          const b2gLen = Math.hypot(b2gX, b2gY) || 1;
          const coverY = Math.max(4.0, Math.min(64.0, anchor.y + (b2gY / b2gLen) * 1.4));
          this._steerPlayer(p, anchor.x, coverY, 0.82, dt, allPlayers);
        }
      }
    }
  }

  _attemptTackle(defender, carrier, defTeam) {
    defender.tackleCooldown = 0.9;
    const defStat = Number(defender.player?.def || defender.player?.ovr || 70);
    const driStat = Number(carrier.player?.dri || carrier.player?.ovr || 70);
    const winChance = Math.max(0.22, Math.min(0.75, 0.44 + (defStat - driStat) * 0.008));

    if (Math.random() < winChance) {
      const prevCarrierName = carrier.player?.name || "el atacante";
      const defName = defender.player?.name || "El defensor";
      this.ball.carrier = defender;
      this.ball.possession = defTeam;
      this.ball.lastTouchTeam = defTeam;
      this.ball.lastTouchPlayer = defender;
      this.ball.assistCandidate = null;
      this.ball.pickupCooldown = 0.2;
      defender.pose = "tackle";
      defender.poseTimer = 0.36;
      defender.controlTimer = 0.25 + Math.random() * 0.15;
      defender.decisionTimer = Math.max(defender.controlTimer, 0.32);
      if (!this._tactical2DOnly) {
        this._setTickCommentary(`🛡️ ¡Anticipación y robo físico de ${defName} sobre ${prevCarrierName}!`, "ROBO DEFENSIVO");
        if (!this._recordingReplayOnly && defender.player) {
          defender.player.matchTackles = (defender.player.matchTackles || 0) + 1;
        }
      }
    } else if (!this._tactical2DOnly && this.foulCooldown <= 0 && Math.random() < 0.09) {
      this.foulCooldown = 4.0;
      const attackingTeam = carrier.side;
      if (!this._recordingReplayOnly) {
        if (attackingTeam === "home") this.stats.fouls.away += 1;
        else this.stats.fouls.home += 1;
      }

      // Evaluar si la entrada ilegal se produjo físicamente dentro del área de penalti (|X| > 36 y |Z| < 20.16)
      const cx = carrier.xm - 52.5;
      const cz = carrier.ym - 34.0;
      const isHomeAtk = attackingTeam === "home";
      const inRivalPenaltyBox = isHomeAtk
        ? (cx > 36.0 && Math.abs(cz) < 20.16)
        : (cx < -36.0 && Math.abs(cz) < 20.16);
      const distToRivalGoal = Math.hypot((isHomeAtk ? 52.5 : -52.5) - cx, 0 - cz);

      if (this._recordingReplayOnly) {
        if (inRivalPenaltyBox) {
          this._pendingTickOutcome = {
            outcome: "PENALTY",
            attackingSide: attackingTeam,
            shooter: carrier.player,
            defender: defender.player
          };
          return;
        }
        if (distToRivalGoal <= 31.0) {
          this._pendingTickOutcome = {
            outcome: "FREE_KICK",
            attackingSide: attackingTeam,
            shooter: carrier.player,
            defender: defender.player,
            spot: {
              spot: {
                x: (carrier.xm / 105) * 100,
                y: (carrier.ym / 68) * 100,
                xm: carrier.xm,
                ym: carrier.ym,
                cx,
                cz
              },
              distanceMeters: Math.round(distToRivalGoal)
            }
          };
          return;
        }
      }

      if (!this._recordingReplayOnly && Math.random() < 0.14 && defender.player) {
        this._awardCardRealTime(defender.player, defTeam, "YELLOW");
      }

      const mates = attackingTeam === "home" ? this.home2D : this.away2D;
      const opps = attackingTeam === "home" ? this.away2D : this.home2D;
      const { bestOption, allOptions } = this.evaluatePassOptions(carrier, attackingTeam, mates, opps);
      const chosen = bestOption || allOptions[0];
      if (chosen) {
        this._launchBallPass(carrier, chosen.receiver, attackingTeam, chosen.lead);
      }
    }
  }

  _awardCardRealTime(player, side, cardType) {
    if (!player) return;
    const min = Math.max(1, this.minute);
    if (cardType === "YELLOW") {
      player.matchYellowCards = (player.matchYellowCards || 0) + 1;
      const isSecondYellow = player.matchYellowCards >= 2;
      if (!this.matchCards || typeof this.matchCards !== "object" || Array.isArray(this.matchCards)) {
        this.matchCards = { yellows: {}, reds: {} };
      }
      if (isSecondYellow) {
        this.matchCards.reds[player.id] = { player, reason: "Segunda amarilla", minute: min, team: side };
        if (this.stats.redCards) this.stats.redCards[side] = (this.stats.redCards[side] || 0) + 1;
      } else {
        this.matchCards.yellows[player.id] = { player, minute: min, team: side };
        if (this.stats.yellowCards) this.stats.yellowCards[side] = (this.stats.yellowCards[side] || 0) + 1;
      }
      this.events.push({
        minute: min,
        type: isSecondYellow ? "RED_CARD" : "YELLOW_CARD",
        team: side,
        player: player.name,
        text: isSecondYellow
          ? `🟥 ¡Segunda amarilla y expulsión para ${player.name}!`
          : `🟨 Tarjeta amarilla para ${player.name}.`
      });
      if (this.onCard) {
        this.onCard({ minute: min, team: side, player, type: isSecondYellow ? "RED" : "YELLOW" });
      }
    }
  }

  _handleRealTimeGoal(scoringSide) {
    const isHome = scoringSide === "home";
    const meta = this.ball.shotMeta || {};
    const scorer2D = meta.scorer || this.ball.lastTouchPlayer;
    const assist2D = meta.assist;
    const scorerObj = scorer2D?.player || null;
    const assistObj = assist2D?.player || null;

    // Si estamos grabando en FAST_SIM para el replayBuffer, NO sumar el gol todavía:
    // se sumará en _commitReplayClimax en el instante exacto en que el balón cruce la línea de gol en 3D
    if (this._recordingReplayOnly) {
      const atkTeam = isHome ? this.homeTeam : this.awayTeam;
      const defTeam = isHome ? this.awayTeam : this.homeTeam;
      const gkObj = meta.oppGK?.player || (isHome ? this.awayPlayersOnPitch[0] : this.homePlayersOnPitch[0]);
      const defObj = meta.nearestDef?.player || null;
      const sName = scorerObj?.name || atkTeam.shortName;

      this._setTickCommentary(`⚽ ¡GOOOOL de ${sName}! El balón cruza físicamente la línea de meta.`, "¡GOL!");

      this._pendingTickOutcome = {
        outcome: "GOAL",
        attackingSide: scoringSide,
        shooter: scorerObj,
        passer: assistObj,
        defender: defObj,
        goalkeeper: gkObj,
        headline: "OCASIÓN MANIFIESTA DE GOL",
        buildNote: `⚡ ${atkTeam.shortName} mueve el balón buscando espacios frente a ${defTeam.shortName}.`,
        shotNote: `⚽ ¡Definición letal de ${sName} al fondo de la red!`
      };
      this.ball.shotTeam = null;
      return;
    }

    if (isHome) this.homeScore += 1;
    else this.awayScore += 1;

    if (scorerObj) {
      scorerObj.matchGoals = (scorerObj.matchGoals || 0) + 1;
      scorerObj.matchRating = Math.min(10, (scorerObj.matchRating || 6.5) + 1.1);
    }
    if (assistObj && assistObj !== scorerObj) {
      assistObj.matchAssists = (assistObj.matchAssists || 0) + 1;
      assistObj.matchRating = Math.min(10, (assistObj.matchRating || 6.5) + 0.6);
    }

    const scorerName = scorerObj?.name || (isHome ? "Delantero local" : "Delantero visitante");
    const assistName = assistObj && assistObj !== scorerObj ? assistObj.name : null;
    const min = Math.max(1, this.minute);
    const tName = isHome ? (this.homeTeam.shortName || this.homeTeam.name) : (this.awayTeam.shortName || this.awayTeam.name);

    this.events.push({
      minute: min,
      type: "GOAL",
      team: scoringSide,
      player: scorerName,
      assist: assistName,
      text: `⚽ ¡GOL de ${scorerName} (${tName}) en el ${min}'!${assistName ? ` Asistencia de ${assistName}.` : ""}`
    });

    const concedingSide = isHome ? "away" : "home";
    const atkTeam = isHome ? this.homeTeam : this.awayTeam;

    if (scoringSide === "home") this.stats.shotsOnTarget.home += 1;
    else this.stats.shotsOnTarget.away += 1;

    this.ball.xm = isHome ? 105.9 : -0.9;
    this.ball.ym = Math.max(30.6, Math.min(37.4, this.ball.ym));
    this.ball.zm = Math.min(2.2, Math.max(0.2, this.ball.zm));
    this.ball.vx = 0;
    this.ball.vy = 0;
    this.ball.vz = 0;
    this.ball.carrier = null;
    this.ball.shotTeam = null;
    this._syncBallTo2D();

    if (this.isSkippingToEnd) {
      this.resetKickoff(concedingSide);
    } else {
      this.pause();
    }

    if (this.onGoal) {
      this.onGoal({
        minute: min,
        scoringSide,
        concedingSide,
        atkTeam,
        shooter: scorerObj || { name: scorerName },
        scorer: scorerName,
        assist: assistName,
        score: `${this.homeScore} - ${this.awayScore}`,
        homeScore: this.homeScore,
        awayScore: this.awayScore,
        isSkipped: this.isSkippingToEnd,
        state: this.getState()
      });
    }
    if (this.onTick) this.onTick(this.getState());
  }

  _restartFromCornerOrGoalKick(side, cornerSide, isCorner) {
    const isHomeAttacking = side === "home";
    const mates = isHomeAttacking ? this.home2D : this.away2D;
    const tName = isHomeAttacking ? (this.homeTeam.shortName || this.homeTeam.name) : (this.awayTeam.shortName || this.awayTeam.name);

    if (isCorner) {
      if (!this._recordingReplayOnly) {
        if (isHomeAttacking) this.stats.corners.home += 1;
        else this.stats.corners.away += 1;
      }

      const cx = cornerSide === "right" ? 104.2 : 0.8;
      const cy = this.ball.ym < 34 ? 1.2 : 66.8;
      const taker = mates.find(m => !m.isKeeper) || mates[1];
      if (taker) {
        taker.xm = cx;
        taker.ym = cy;
        taker.vx = 0;
        taker.vy = 0;
        this.ball.xm = cx;
        this.ball.ym = cy;
        this.ball.zm = 0;
        this.ball.vx = 0;
        this.ball.vy = 0;
        this.ball.vz = 0;
        this.ball.shotTeam = null;
        this.ball.carrier = taker;
        this.ball.possession = side;
        const opps = isHomeAttacking ? this.away2D : this.home2D;
        const { bestOption, allOptions } = this.evaluatePassOptions(taker, side, mates, opps);
        const chosen = bestOption || allOptions[0];
        if (chosen) {
          this._launchBallPass(taker, chosen.receiver, side, chosen.lead);
        }
      }
    } else {
      const gk = mates.find(m => m.isKeeper) || mates[0];
      if (gk) {
        const gx = isHomeAttacking ? 5.5 : 99.5;
        gk.xm = gx;
        gk.ym = 34;
        gk.vx = 0;
        gk.vy = 0;
        this.ball.xm = gx;
        this.ball.ym = 34;
        this.ball.zm = 0;
        this.ball.vx = 0;
        this.ball.vy = 0;
        this.ball.vz = 0;
        this.ball.shotTeam = null;
        this.ball.carrier = gk;
        this.ball.possession = side;
        gk.decisionTimer = 0.25;
      }
    }
  }

  _stepBallPhysics(dt, allPlayers) {
    const b = this.ball;
    if (b.pickupCooldown > 0) b.pickupCooldown = Math.max(0, b.pickupCooldown - dt);

    if (b.carrier) {
      const c = b.carrier;
      const fx = c.facingX !== undefined ? c.facingX : (c.side === "home" ? 1 : -1);
      const fz = c.facingZ !== undefined ? c.facingZ : 0;
      const cSpd = Math.hypot(c.vx || 0, c.vy || 0);
      const touchNudge = cSpd > 0.6 ? (0.48 + 0.26 * Math.max(0, Math.sin((c.animPhase || 0) * 2.2))) : 0.52;
      const targetBx = Math.max(0.2, Math.min(104.8, c.xm + fx * touchNudge));
      const targetBy = Math.max(0.2, Math.min(67.8, c.ym + fz * touchNudge));
      const lerpBall = Math.min(1, dt * 15.5);
      b.xm += (targetBx - b.xm) * lerpBall;
      b.ym += (targetBy - b.ym) * lerpBall;
      b.zm = Math.max(0, (b.zm || 0) * 0.6);
      b.vx = c.vx;
      b.vy = c.vy;
      b.vz = 0;
      return;
    }

    // Efecto Magnus (rosca lateral en tiros con curva y centros tensos)
    if (b.spin && Math.abs(b.spin) > 0.05) {
      const spdH = Math.hypot(b.vx, b.vy);
      if (spdH > 3.0) {
        const nx = -b.vy / spdH;
        const ny = b.vx / spdH;
        b.vx += nx * b.spin * dt * 1.45;
        b.vy += ny * b.spin * dt * 1.45;
      }
      b.spin *= Math.exp(-1.1 * dt);
    }

    b.xm += b.vx * dt;
    b.ym += b.vy * dt;
    b.zm += b.vz * dt;

    b.vz -= 9.81 * dt;
    if (b.zm <= 0) {
      b.zm = 0;
      if (b.vz < -1.1) {
        b.vz = -b.vz * 0.45;
      } else {
        b.vz = 0;
      }
    }

    const damp = b.zm < 0.25 ? Math.exp(-1.15 * dt) : Math.exp(-0.22 * dt);
    b.vx *= damp;
    b.vy *= damp;
    if (b.zm === 0 && Math.hypot(b.vx, b.vy) < 0.25) {
      b.passTeam = null;
      b.shotTeam = null;
    }

    // Comprobar porterías y líneas de fondo:
    // X >= 52.5 -> xm >= 105, X <= -52.5 -> xm <= 0; |Z| < 3.66 -> |ym - 34| < 3.66; Y < 2.44 -> zm < 2.44
    const absZ = Math.abs(b.ym - 34);
    const inGoalMouthY = absZ < 3.66 && b.zm < 2.44;
    const hitPostY = (absZ >= 3.66 && absZ <= 3.92 && b.zm <= 2.52) || (absZ < 3.66 && b.zm >= 2.44 && b.zm <= 2.60);

    if (b.xm >= 105 || b.xm <= 0) {
      const crossingSide = b.xm >= 105 ? "home" : "away";
      if (inGoalMouthY) {
        this._handleRealTimeGoal(crossingSide);
        return;
      }

      // Si había un disparo a puerta que se estrella en el poste o sale rozando el palo durante FAST_SIM:
      if (this._recordingReplayOnly && b.shotTeam === crossingSide) {
        const meta = b.shotMeta || {};
        const isPost = hitPostY;
        const isCloseWide = absZ < 6.8;
        if (isPost || isCloseWide) {
          const sName = meta.scorer?.player?.name || "el atacante";
          const note = isPost
            ? `🥅 ¡Al palo! El disparo de ${sName} se estrella violentamente en la madera.`
            : `💨 ¡Fuera! El disparo de ${sName} cruza la línea de fondo lamiendo el poste.`;
          this._setTickCommentary(note, isPost ? "AL PALO" : "FUERA");
          this._pendingTickOutcome = {
            outcome: isPost ? "POST" : "WIDE",
            attackingSide: crossingSide,
            shooter: meta.scorer?.player || null,
            passer: meta.assist?.player || null,
            defender: meta.nearestDef?.player || null,
            goalkeeper: meta.oppGK?.player || null,
            headline: isPost ? "¡DISPARO A LA MADERA!" : "OCASIÓN CLARA DE PELIGRO",
            shotNote: note
          };
          b.shotTeam = null;
          if (isPost) b.vx = -b.vx * 0.55;
          return;
        }
      }

      const isCorner = crossingSide === "home" ? (b.lastTouchTeam === "away") : (b.lastTouchTeam === "home");
      this._restartFromCornerOrGoalKick(
        isCorner ? crossingSide : (crossingSide === "home" ? "away" : "home"),
        crossingSide === "home" ? "right" : "left",
        isCorner
      );
      return;
    }

    // Saque de banda si sale por los laterales (y <= 0 o y >= 68)
    if (b.ym <= 0.1 || b.ym >= 67.9) {
      const throwTeam = b.lastTouchTeam === "home" ? "away" : "home";
      const mates = throwTeam === "home" ? this.home2D : this.away2D;
      b.ym = b.ym <= 0.1 ? 0.6 : 67.4;
      b.xm = Math.max(3, Math.min(102, b.xm));
      b.zm = 0;
      b.vx = 0;
      b.vy = 0;
      b.vz = 0;
      b.shotTeam = null;
      const taker = mates.filter(m => !m.isKeeper).sort((a, c) => Math.hypot(a.xm - b.xm, a.ym - b.ym) - Math.hypot(c.xm - b.xm, c.ym - b.ym))[0];
      if (taker) {
        taker.xm = b.xm;
        taker.ym = b.ym;
        b.carrier = taker;
        b.possession = throwTeam;
        taker.decisionTimer = 0.2;
      }
      return;
    }

    // Intercepción en vuelo / paradas físicas del portero (< 1.2m) / bloqueos defensivos
    if (b.pickupCooldown <= 0) {
      const ballSpeed = Math.hypot(b.vx, b.vy);
      for (let i = 0; i < allPlayers.length; i++) {
        const p = allPlayers[i];
        const dist = Math.hypot(p.xm - b.xm, p.ym - b.ym);
        const reach = p.isKeeper ? 1.25 : 1.05;
        const maxZ = p.isKeeper ? 2.44 : 1.75;
        if (dist > reach || b.zm > maxZ) continue;

        if (b.shotTeam && p.side !== b.shotTeam) {
          const shotSide = b.shotTeam;
          const meta = b.shotMeta || {};

          if (p.isKeeper) {
            p.pose = "dive";
            const saveBecomesCorner = ballSpeed >= 22.0;
            const gkName = p.player?.name || "el portero";
            const shName = meta.scorer?.player?.name || "el delantero";
            const saveText = `🧤 ¡Paradón físico de ${gkName} desviando el remate de ${shName}!`;
            this._setTickCommentary(saveText, "PARADÓN");

            if (this._recordingReplayOnly) {
              this._pendingTickOutcome = {
                outcome: "SAVE",
                attackingSide: shotSide,
                shooter: meta.scorer?.player || null,
                passer: meta.assist?.player || null,
                defender: meta.nearestDef?.player || null,
                goalkeeper: p.player || null,
                saveBecomesCorner,
                headline: "¡INTERVENCIÓN DEL GUARDAMETA!",
                shotNote: saveText
              };
            } else if (!this._tactical2DOnly) {
              if (shotSide === "home") this.stats.shotsOnTarget.home += 1;
              else this.stats.shotsOnTarget.away += 1;
              if (p.player) p.player.matchSaves = (p.player.matchSaves || 0) + 1;
            }

            if (!saveBecomesCorner) {
              b.carrier = p;
              b.shotTeam = null;
              b.shotMeta = null;
              b.possession = p.side;
              b.lastTouchTeam = p.side;
              b.lastTouchPlayer = p;
              p.decisionTimer = 0.35;
            } else {
              b.vx = (p.side === "home" ? 1 : -1) * 8.5;
              b.vy = (b.ym >= 34 ? 1 : -1) * 11.5;
              b.vz = 2.4;
              b.shotTeam = null;
              b.lastTouchTeam = p.side;
              b.lastTouchPlayer = p;
              b.pickupCooldown = 0.25;
            }
            return;
          } else if (ballSpeed > 10 && Math.random() < 0.52) {
            // Bloqueo físico de un defensa interponiéndose en la trayectoria del tiro
            b.vx = -b.vx * 0.35 + (Math.random() - 0.5) * 4;
            b.vy = -b.vy * 0.35 + (Math.random() - 0.5) * 4;
            b.shotTeam = null;
            b.lastTouchTeam = p.side;
            b.lastTouchPlayer = p;
            b.pickupCooldown = 0.2;
            const defName = p.player?.name || "El central";
            const shName = meta.scorer?.player?.name || "el atacante";
            const blockText = `🛡️ ¡${defName} se cruza en la trayectoria y bloquea el disparo de ${shName}!`;
            this._setTickCommentary(blockText, "BLOQUEO");

            if (this._recordingReplayOnly && Math.random() < 0.45) {
              this._pendingTickOutcome = {
                outcome: "BLOCK",
                attackingSide: shotSide,
                shooter: meta.scorer?.player || null,
                passer: meta.assist?.player || null,
                defender: p.player || null,
                goalkeeper: meta.oppGK?.player || null,
                headline: "¡BLOQUEO DEFENSIVO IN EXTREMIS!",
                shotNote: blockText
              };
            }
            return;
          }
        } else if (!b.shotTeam) {
          if (p.side !== b.passTeam || p === b.passTarget || ballSpeed < 12) {
            const interceptChance = p.side !== b.passTeam ? (ballSpeed > 18 ? 0.62 : 0.85) : 0.94;
            if (Math.random() < interceptChance) {
              const wasIntercept = b.passTeam && p.side !== b.passTeam;
              b.carrier = p;
              b.passTarget = null;
              b.passTeam = null;
              b.possession = p.side;
              b.lastTouchTeam = p.side;
              b.lastTouchPlayer = p;
              b.pickupCooldown = 0.15;
              const isHome = p.side === "home";
              const goalX = isHome ? 105 : 0;
              const inAttackingBox = !p.isKeeper && Math.abs(goalX - p.xm) < 16.5;
              const inOpponentHalf = isHome ? (p.xm > 52.5) : (p.xm < 52.5);
              p.controlTimer = inAttackingBox ? 0.04 : (inOpponentHalf ? 0.08 : (0.18 + Math.random() * 0.10));
              p.decisionTimer = inAttackingBox ? 0.06 : (inOpponentHalf ? 0.14 : Math.max(p.controlTimer, wasIntercept ? 0.24 : 0.30));
              if (wasIntercept && !this._tactical2DOnly) {
                this._setTickCommentary(`🛡️ ¡${p.player?.name || "La defensa"} lee la línea de pase e intercepta el envío!`, "INTERCEPCIÓN");
              }
              return;
            }
          }
        }
      }
    }
  }

  _processRealTimeMinute(m) {
    this.minute = m;

    // Desgaste físico y minutos jugados
    const drainTeam = (players, inst) => {
      const press = inst?.outOfPossession?.pressing || "normal";
      const drainMult = press === "muy_alto" ? 1.25 : (press === "alto" ? 1.12 : 1.0);
      players.forEach(p => {
        p.matchMinutes = (p.matchMinutes || 0) + 1;
        if (p.pos !== "POR") {
          p.energy = Math.max(15, (p.energy ?? 100) - (0.34 * drainMult));
        }
      });
    };
    drainTeam(this.homePlayersOnPitch, this.homeInstructions);
    drainTeam(this.awayPlayersOnPitch, this.awayInstructions);

    // Expirar gritos y charlas temporales
    if (this.activeShout && m >= this.activeShout.expiresAt) {
      this.activeShout = null;
    }
    if (this.activeTeamTalk && m >= this.activeTeamTalk.expiresAt) {
      this.activeTeamTalk = null;
    }
    if (this.activeCrowdRoar && m >= this.activeCrowdRoar.expiresAt) {
      this.activeCrowdRoar = null;
    }

    // Sustituciones automáticas de la IA
    if (m >= 58 && (m % 8 === 0)) {
      if (this.userSide !== "home") this.checkAISubstitutions("home");
      if (this.userSide !== "away") this.checkAISubstitutions("away");
    }

    // Descanso (al alcanzar halfTimeMinute, p.ej. 45+descuento)
    const htMin = this.halfTimeMinute || 45;
    if (m >= htMin && !this.halfTimeTriggered && !this.isSecondHalf) {
      this.halfTimeTriggered = true;
      this.isHalfTime = true;
      this.isRunning = false;
      if (this.onHalfTime) this.onHalfTime(this.getState());
      if (this.onTick) this.onTick(this.getState());
      return;
    }

    // Final del partido (minuto 90+)
    if (m >= this.maxMinutes) {
      this.finish();
    }
  }

  // Simulación táctica visual en 2D con Utility AI (sin avanzar reloj ni duplicar estadísticas/goles oficiales)
  stepTactical2D(rawDt) {
    if (!this.isRunning || this.isFinished || this.isHalfTime || this.isSetPieceRunning || this.isHighlightRunning) {
      return;
    }
    const dt = Math.min(0.05, Math.max(0.001, rawDt || 0.016));
    if (this.foulCooldown > 0) this.foulCooldown = Math.max(0, this.foulCooldown - dt);
    if (this.commentaryCooldown > 0) this.commentaryCooldown = Math.max(0, this.commentaryCooldown - dt);

    const physScale = this.speed >= 4 ? 2.2 : (this.speed >= 2 ? 1.5 : 1.0);
    const simDt = dt * physScale;
    const substeps = Math.max(1, Math.ceil(simDt / 0.025));
    const subDt = simDt / substeps;
    const allPlayers = [...this.home2D, ...this.away2D];

    const savedShotsH = this.stats.shots.home;
    const savedShotsA = this.stats.shots.away;
    const savedOnTargetH = this.stats.shotsOnTarget.home;
    const savedOnTargetA = this.stats.shotsOnTarget.away;
    const savedCornersH = this.stats.corners.home;
    const savedCornersA = this.stats.corners.away;
    const savedFoulsH = this.stats.fouls.home;
    const savedFoulsA = this.stats.fouls.away;

    this._tactical2DOnly = true;
    try {
      for (let s = 0; s < substeps; s++) {
        this._updateTeamAI("home", this.home2D, this.away2D, allPlayers, subDt);
        this._updateTeamAI("away", this.away2D, this.home2D, allPlayers, subDt);
        this._stepBallPhysics(subDt, allPlayers);
      }
    } finally {
      this._tactical2DOnly = false;
      this.stats.shots.home = savedShotsH;
      this.stats.shots.away = savedShotsA;
      this.stats.shotsOnTarget.home = savedOnTargetH;
      this.stats.shotsOnTarget.away = savedOnTargetA;
      this.stats.corners.home = savedCornersH;
      this.stats.corners.away = savedCornersA;
      this.stats.fouls.home = savedFoulsH;
      this.stats.fouls.away = savedFoulsA;
    }

    for (let i = 0; i < allPlayers.length; i++) {
      this._syncEntityTo2D(allPlayers[i]);
    }
    this._syncBallTo2D();
  }

  stepRealTime(rawDt) {
    this.useRealTime = true;
    if (!this.isRunning || this.isFinished || this.isHalfTime || this.isSetPieceRunning || this.isHighlightRunning) {
      return;
    }

    const dt = Math.min(0.05, Math.max(0.001, rawDt || 0.016));
    if (this.foulCooldown > 0) this.foulCooldown = Math.max(0, this.foulCooldown - dt);
    if (this.commentaryCooldown > 0) this.commentaryCooldown = Math.max(0, this.commentaryCooldown - dt);

    const physScale = this.isSkippingToEnd ? 1.5 : (this.speed >= 4 ? 2.5 : (this.speed >= 2 ? 1.65 : 1.0));
    const simDt = dt * physScale;
    const substeps = Math.max(1, Math.ceil(simDt / 0.025));
    const subDt = simDt / substeps;

    const allPlayers = [...this.home2D, ...this.away2D];

    for (let s = 0; s < substeps; s++) {
      this._updateTeamAI("home", this.home2D, this.away2D, allPlayers, subDt);
      this._updateTeamAI("away", this.away2D, this.home2D, allPlayers, subDt);
      this._stepBallPhysics(subDt, allPlayers);
      if (this.isFinished || this.isHalfTime || !this.isRunning) break;
    }

    // Sincronizar coordenadas normalizadas (0..100) para el motor 3D Three.js
    for (let i = 0; i < allPlayers.length; i++) {
      this._syncEntityTo2D(allPlayers[i]);
    }
    this._syncBallTo2D();

    // Posesión continua en tiempo real
    if (this.ball.possession === "home") this.possessionTimeHome += dt;
    else this.possessionTimeAway += dt;
    const totalPoss = this.possessionTimeHome + this.possessionTimeAway;
    if (totalPoss > 0) {
      const homePct = Math.max(15, Math.min(85, Math.round((this.possessionTimeHome / totalPoss) * 100)));
      this.stats.possession.home = homePct;
      this.stats.possession.away = 100 - homePct;
    }

    // Reloj continuo del partido
    const matchMinPerSec = this.speed >= 4 ? 5.8 : (this.speed >= 2 ? 2.9 : 1.45);
    this.realTimeMinute += dt * matchMinPerSec;
    const targetMinute = Math.min(this.maxMinutes, Math.floor(this.realTimeMinute));
    while (this.lastMinuteProcessed < targetMinute && !this.isFinished && !this.isHalfTime) {
      this.lastMinuteProcessed += 1;
      this._processRealTimeMinute(this.lastMinuteProcessed);
    }

    this.tickEmitTimer += dt;
    if (!this.isSkippingToEnd && this.tickEmitTimer >= 0.25 && !this.isFinished && !this.isHalfTime) {
      this.tickEmitTimer = 0;
      if (this.onTick) this.onTick(this.getState());
    }
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

