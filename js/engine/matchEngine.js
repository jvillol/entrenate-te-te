// Motor de simulación de partido 2D interactivo con cambios en vivo (sin comentarios de texto)

export class MatchSimulator {
  constructor(homeTeam, awayTeam, options = {}) {
    this.homeTeam = JSON.parse(JSON.stringify(homeTeam));
    this.awayTeam = JSON.parse(JSON.stringify(awayTeam));

    this.minute = 0;
    this.maxMinutes = 90 + Math.floor(Math.random() * 5); // Tiempo añadido
    this.speed = options.speed || 1; // Multiplicador de velocidad
    this.isRunning = false;
    this.isFinished = false;

    this.homeScore = 0;
    this.awayScore = 0;

    this.homeMentality = options.homeMentality || "balanced";
    this.awayMentality = options.awayMentality || "balanced";

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

    // Inicializar posiciones 2D relativas (0 - 100)
    this.ball = { x: 50, y: 50, targetX: 50, targetY: 50, possession: "home" };
    this.init2DPositions();

    this.onTick = options.onTick || (() => {});
    this.onFinish = options.onFinish || (() => {});
    this.onAlert = options.onAlert || (() => {});
  }

  init2DPositions() {
    // Configurar posiciones base 2D en campo horizontal (0 = portería local, 100 = portería visitante)
    const baseCoords = [
      { x: 5, y: 50 },  // POR
      { x: 22, y: 20 }, // LI
      { x: 20, y: 40 }, // DFC
      { x: 20, y: 60 }, // DFC
      { x: 22, y: 80 }, // LD
      { x: 38, y: 50 }, // MCD
      { x: 48, y: 35 }, // MC
      { x: 48, y: 65 }, // MC/MCO
      { x: 68, y: 20 }, // EI
      { x: 74, y: 50 }, // DC
      { x: 68, y: 80 }  // ED
    ];

    this.home2D = this.homePlayersOnPitch.map((p, idx) => ({
      player: p,
      baseX: baseCoords[idx]?.x || 25,
      baseY: baseCoords[idx]?.y || 50,
      curX: baseCoords[idx]?.x || 25,
      curY: baseCoords[idx]?.y || 50
    }));

    this.away2D = this.awayPlayersOnPitch.map((p, idx) => ({
      player: p,
      baseX: 100 - (baseCoords[idx]?.x || 25),
      baseY: 100 - (baseCoords[idx]?.y || 50),
      curX: 100 - (baseCoords[idx]?.x || 25),
      curY: 100 - (baseCoords[idx]?.y || 50)
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
    this.speed = speedMultiplier;
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

  loop() {
    if (!this.isRunning || this.isFinished) return;

    this.stepMinute();
    this.onTick(this.getState());

    if (this.minute >= this.maxMinutes) {
      this.finish();
      return;
    }

    // Intervalo de tiempo dinámico según velocidad
    const baseInterval = 250; // ms por minuto de simulación en 1x
    const interval = Math.max(25, baseInterval / this.speed);

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
        this.resolveGoalOpportunity("home");
      } else if (chanceRoll < attackScore + 0.05) {
        // Córner o falta
        this.stats.corners.home++;
        this.triggerAlert("CÓRNER", `🚩 Córner para ${this.homeTeam.shortName}`, "home");
      }
    } else {
      // Balón atacando hacia la izquierda (x: 50 -> 10)
      this.ball.targetX = 35 - Math.random() * 28;
      this.ball.targetY = 20 + Math.random() * 60;

      const attackScore = (awayAtk / (awayAtk + homeDef)) * 0.26;
      if (chanceRoll < attackScore) {
        this.resolveGoalOpportunity("away");
      } else if (chanceRoll < attackScore + 0.05) {
        this.stats.corners.away++;
        this.triggerAlert("CÓRNER", `🚩 Córner para ${this.awayTeam.shortName}`, "away");
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

    // Actualizar coordenadas 2D de los jugadores hacia el balón para visualización dinámica
    this.update2DPositions();
  }

  resolveGoalOpportunity(attackingSide) {
    const isHome = attackingSide === "home";
    const atkTeam = isHome ? this.homeTeam : this.awayTeam;
    const defTeam = isHome ? this.awayTeam : this.homeTeam;
    const atkPlayers = isHome ? this.homePlayersOnPitch : this.awayPlayersOnPitch;
    const defPlayers = isHome ? this.awayPlayersOnPitch : this.homePlayersOnPitch;

    this.stats.shots[attackingSide]++;

    // Seleccionar rematador (delantero o centrocampista)
    const shooter = this.pickPlayerForAction(atkPlayers, ["DC", "EI", "ED", "MCO", "MC"]);
    const goalkeeper = defPlayers.find(p => p.pos === "POR") || defPlayers[0];

    const shotQuality = (shooter.sho || 75) + (Math.random() * 30 - 15);
    const gkSavePower = (goalkeeper.ovr || 78) + (Math.random() * 25 - 10);

    // ¿Va a puerta?
    const onTarget = Math.random() < 0.65;
    if (!onTarget) {
      if (Math.random() < 0.12) {
        this.triggerAlert("AL PALO", `🥅 ¡Al palo! Disparo de ${shooter.name} a la madera`, attackingSide);
      } else {
        this.triggerAlert("DISPARO FUERA", `💨 Disparo fuera de ${shooter.name}`, attackingSide);
      }
      return;
    }

    this.stats.shotsOnTarget[attackingSide]++;

    // ¿Es Gol o Paradón?
    if (shotQuality > gkSavePower + 8) {
      // ¡GOL!
      if (isHome) this.homeScore++;
      else this.awayScore++;

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

      this.triggerAlert("GOL", `⚽ ¡GOOOOOOL DE ${shooter.name.toUpperCase()}! (${this.homeScore}-${this.awayScore})`, attackingSide, 3500);
    } else {
      // Paradón del portero rival
      this.triggerAlert("PARADÓN", `🧤 ¡Paradón de ${goalkeeper.name} ante ${shooter.name}!`, attackingSide === "home" ? "away" : "home");
    }
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
    // Los jugadores se desplazan suavemente siguiendo la fase de juego
    const ballX = this.ball.targetX;
    const ballY = this.ball.targetY;

    // Suavizado del balón
    this.ball.x += (ballX - this.ball.x) * 0.45;
    this.ball.y += (ballY - this.ball.y) * 0.45;

    this.home2D.forEach(p => {
      const shiftX = (ballX - 50) * 0.35;
      const shiftY = (ballY - 50) * 0.25;
      p.curX = Math.max(3, Math.min(95, p.baseX + shiftX + (Math.random() * 4 - 2)));
      p.curY = Math.max(5, Math.min(95, p.baseY + shiftY + (Math.random() * 4 - 2)));
    });

    this.away2D.forEach(p => {
      const shiftX = (ballX - 50) * 0.35;
      const shiftY = (ballY - 50) * 0.25;
      p.curX = Math.max(3, Math.min(95, p.baseX + shiftX + (Math.random() * 4 - 2)));
      p.curY = Math.max(5, Math.min(95, p.baseY + shiftY + (Math.random() * 4 - 2)));
    });
  }

  // Saltar instantáneamente al final del partido
  skipToEnd() {
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

