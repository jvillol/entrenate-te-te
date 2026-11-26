// Vista del Día de Partido: Alineación Previa al Encuentro, Radar 2D y Cambios en Vivo

import { MatchSimulator } from "../engine/matchEngine.js";
import { simulateAIParties, updateStandings } from "../engine/leagueEngine.js";
import { FORMATIONS, MENTALITIES, calculateTeamAverages, calculateEffectiveRating, POSITION_ROLES, getAvailableRolesForPosition, getDefaultRoleForPosition, getRoleDetails, TACTICAL_PRESETS, TACTICAL_OPTIONS, getDefaultTacticalInstructions, detectMatchingPreset, getEffectiveSlotCoords, getPositionAdjustmentLabel, buildOptimalLineup } from "../engine/tactics.js";
import { SaveManager } from "../engine/saveManager.js";

// Utilidades de color y contraste visual para equipaciones
export function hexToRgb(hex) {
  if (!hex) return { r: 0, g: 0, b: 0 };
  let c = String(hex).replace("#", "").trim();
  if (c.length === 3) c = c[0] + c[0] + c[1] + c[1] + c[2] + c[2];
  const num = parseInt(c, 16);
  if (isNaN(num)) return { r: 0, g: 0, b: 0 };
  return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
}

export function areColorsConfusing(hex1, hex2) {
  if (!hex1 || !hex2) return false;
  if (String(hex1).toLowerCase() === String(hex2).toLowerCase()) return true;
  const c1 = hexToRgb(hex1);
  const c2 = hexToRgb(hex2);
  const dr = c1.r - c2.r;
  const dg = c1.g - c2.g;
  const db = c1.b - c2.b;
  // Distancia cromática perceptual en el ojo humano
  const dist = Math.sqrt(dr * dr * 0.299 + dg * dg * 0.587 + db * db * 0.114);
  return dist < 65;
}

export function resolveMatchKits(homeTeam, awayTeam) {
  const hPrimary = homeTeam.primaryColor || "#ffffff";
  const hSecondary = homeTeam.secondaryColor || "#1e293b";
  const hText = homeTeam.textColor || "#ffffff";

  let aPrimary = awayTeam.primaryColor || "#000000";
  let aSecondary = awayTeam.secondaryColor || "#ffffff";
  let aText = awayTeam.textColor || "#ffffff";

  // Si la camiseta principal del rival coincide o es muy similar a la del equipo local
  if (areColorsConfusing(hPrimary, aPrimary)) {
    // 1. Probar la segunda equipación oficial (awayKit) del visitante
    if (awayTeam.awayKit && !areColorsConfusing(hPrimary, awayTeam.awayKit.primaryColor)) {
      aPrimary = awayTeam.awayKit.primaryColor;
      aSecondary = awayTeam.awayKit.secondaryColor || "#ffffff";
      aText = awayTeam.awayKit.textColor || "#ffffff";
    }
    // 2. Si no tiene o aún confunde, probar el color secundario del visitante
    else if (!areColorsConfusing(hPrimary, aSecondary)) {
      aPrimary = aSecondary;
      aSecondary = awayTeam.primaryColor || "#ffffff";
      aText = awayTeam.textColor || "#ffffff";
    }
    // 3. Fallback inteligente de contraste absoluto
    else {
      const hRgb = hexToRgb(hPrimary);
      const hLum = (hRgb.r * 299 + hRgb.g * 587 + hRgb.b * 114) / 1000;
      if (hLum > 130) {
        aPrimary = "#18181b";
        aSecondary = "#38bdf8";
        aText = "#ffffff";
      } else {
        aPrimary = "#facc15";
        aSecondary = "#18181b";
        aText = "#0f172a";
      }
    }
  }

  // Porteros: garantizar contraste total frente a las camisetas de los jugadores de campo
  let hKeeper = "#10b981"; // Verde esmeralda
  if (areColorsConfusing(hPrimary, hKeeper) || areColorsConfusing(aPrimary, hKeeper)) {
    hKeeper = "#06b6d4"; // Cian neón
  }

  let aKeeper = "#f59e0b"; // Ámbar neón
  if (areColorsConfusing(hPrimary, aKeeper) || areColorsConfusing(aPrimary, aKeeper) || areColorsConfusing(hKeeper, aKeeper)) {
    aKeeper = "#ec4899"; // Rosa neón
  }

  return {
    home: {
      jersey: hPrimary,
      shorts: hSecondary,
      socks: hPrimary,
      collar: hSecondary,
      keeper: hKeeper,
      number: hText
    },
    away: {
      jersey: aPrimary,
      shorts: aSecondary,
      socks: aPrimary,
      collar: aSecondary,
      keeper: aKeeper,
      number: aText
    }
  };
}

export function renderMatchView(container, gameState, onMatchFinished, onBackToHub) {
  const currentRoundData = gameState.schedule[gameState.currentRound - 1];
  const userMatch = currentRoundData.matches.find(
    m => m.homeTeamId === gameState.userTeamId || m.awayTeamId === gameState.userTeamId
  );

  const homeTeam = gameState.teams.find(t => t.id === userMatch.homeTeamId);
  const awayTeam = gameState.teams.find(t => t.id === userMatch.awayTeamId);

  const isUserHome = homeTeam.id === gameState.userTeamId;
  const userTeam = isUserHome ? homeTeam : awayTeam;
  const opponentTeam = isUserHome ? awayTeam : homeTeam;

  // Asegurar táctica del usuario
  if (!gameState.userTactics) {
    gameState.userTactics = {
      formation: userTeam.defaultFormation || "4-3-3",
      mentality: "balanced",
      lineup: userTeam.players.slice(0, 11).map(p => p.id),
      bench: userTeam.players.slice(11).map(p => p.id),
      playerRoles: {}
    };
  }
  if (!gameState.userTactics.playerRoles) {
    gameState.userTactics.playerRoles = {};
  }
  if (!gameState.userTactics.customPositions) {
    gameState.userTactics.customPositions = {};
  }
  if (!gameState.userTactics.instructions) {
    gameState.userTactics.instructions = getDefaultTacticalInstructions();
  }
  if (!gameState.userTactics.manMarking) {
    gameState.userTactics.manMarking = {};
  } else {
    // Limpiar marcajes individuales huérfanos que apunten a jugadores que no pertenecen al rival actual
    const currentOppIds = new Set(opponentTeam.players.map(p => p.id));
    Object.keys(gameState.userTactics.manMarking).forEach(markerId => {
      const task = gameState.userTactics.manMarking[markerId];
      if (task && task.targetId && !currentOppIds.has(task.targetId)) {
        delete gameState.userTactics.manMarking[markerId];
      }
    });
  }

  let preMatchTab = "USER"; // "USER" o "OPPONENT"
  let preMatchSubTab = "PITCH"; // "PITCH" o "STYLE"
  let selectedPreMatchPlayerId = null;
  let preMatchSaveFeedback = null;
  let masterTacticsForNextMatches = null;
  let showPreMatchAllRoles = false;
  let selectedPreMatchTalk = "confidence";

  const PRE_MATCH_TALKS = [
    { id: "passionate", icon: "🔥", label: "¡Salid a morder!", desc: "+9% Ataque y +6% Medular (1ª mitad)" },
    { id: "tactical", icon: "🧠", label: "Orden y Concentración", desc: "+9% Defensa y +6% Control (1ª mitad)" },
    { id: "confidence", icon: "💪", label: "Confianza Plena", desc: "+5% Equilibrado y moral alta" },
    { id: "calm", icon: "🧊", label: "Cabeza Fría", desc: "-35% riesgo tarjetas y ahorro físico" }
  ];

  // MEJORA 3: Metadatos del Plan de Entrenamiento Semanal activo
  const WEEKLY_TRAINING_META = {
    recovery: { id: "recovery", icon: "🧘", label: "Recuperación y Fisio", shortEffect: "+4% Frescura y -35% riesgo lesión" },
    set_pieces: { id: "set_pieces", icon: "🚩", label: "Laboratorio Balón Parado", shortEffect: "+15% Córners y Faltas" },
    finishing: { id: "finishing", icon: "🎯", label: "Definición y Puntería", shortEffect: "+4 Tiro (SHO) y +7% Ataque" },
    defensive: { id: "defensive", icon: "🧱", label: "Muro y Basculación", shortEffect: "+4 Defensa/Parada y +7% Solidez" }
  };
  const activeWeeklyTraining = WEEKLY_TRAINING_META[gameState.weeklyTraining || "recovery"] || WEEKLY_TRAINING_META.recovery;

  // MEJORA 6: Clima dinámico del partido con impacto en el césped y tácticas
  const WEATHER_CATALOG = {
    sunny: {
      id: "sunny",
      icon: "☀️",
      label: "Soleado · 22°C",
      shortBadge: "☀️ Soleado 22°C",
      pitchEffect: "Césped seco (+4% Pase corto · Calor en 2ª parte)"
    },
    rain: {
      id: "rain",
      icon: "🌧️",
      label: "Lluvia · 13°C",
      shortBadge: "🌧️ Lluvia · Césped rápido",
      pitchEffect: "Césped húmedo y rápido (+Peligro tiros lejanos · +12% fatiga presión alta)"
    },
    night: {
      id: "night",
      icon: "🌙",
      label: "Noche cerrada · 16°C",
      shortBadge: "🌙 Noche · Focos",
      pitchEffect: "Fresco nocturno bajo focos (-6% fatiga física · +4% velocidad transición)"
    }
  };
  const weatherKeys = ["sunny", "night", "rain"];
  const weatherSeed = ((gameState.currentRound || 1) * 7 + (homeTeam.id || "").length * 3 + (awayTeam.id || "").length * 5) % 10;
  const initialWeatherKey = weatherSeed < 4 ? "sunny" : (weatherSeed < 7 ? "night" : "rain");
  let matchWeather = WEATHER_CATALOG[initialWeatherKey] || WEATHER_CATALOG.sunny;

  // MEJORA 4: Generador del Informe del Analista Rival (Scouting Táctico)
  function buildOpponentAnalystReport(oppTeam, oppData, oppAvg, userAvg) {
    const lineup = oppData.lineup || [];
    const sortedByOvr = [...lineup].sort((a, b) => (b.ovr || 70) - (a.ovr || 70));
    const starPlayer = sortedByOvr[0] || { name: "Estrella Rival", pos: "DC", ovr: 80, sho: 80, pas: 78, pac: 80 };

    // Estilo táctico del rival según club y formación
    const isTopPossession = oppTeam.id === "real_madrid" || oppTeam.id === "barcelona" || oppAvg.overall >= 83;
    const isCounterTeam = oppTeam.id === "atletico" || oppData.formationKey === "5-3-2" || oppData.formationKey === "4-4-2";
    const isDirectPhysical = oppTeam.id === "athletic" || oppTeam.id === "osasuna" || oppTeam.id === "getafe" || oppTeam.id === "mallorca";

    let styleTitle = `Juego por bandas (${oppData.formationKey})`;
    let styleDesc = "Busca amplitud con extremos y centros laterales al área.";
    if (isTopPossession) {
      styleTitle = `Dominio y Posesión Alta (${oppData.formationKey})`;
      styleDesc = "Línea adelantada, presión tras pérdida y mucha circulación interior.";
    } else if (isCounterTeam) {
      styleTitle = `Bloque Compacto y Transición (${oppData.formationKey})`;
      styleDesc = "Se repliega con orden y lanza contraataques verticales al recuperar.";
    } else if (isDirectPhysical) {
      styleTitle = `Fútbol Directo y Centros (${oppData.formationKey})`;
      styleDesc = "Intenso en duelos divididos, juego aéreo y segundas jugadas.";
    }

    // Detectar eslabón débil en la defensa o portería rival
    const backline = lineup.filter(p => ["LD", "LI", "DFC", "POR", "MCD"].includes(p.pos));
    const fullbacks = lineup.filter(p => ["LD", "LI"].includes(p.pos));
    const centerbacks = lineup.filter(p => p.pos === "DFC");

    const slowestFB = [...fullbacks].sort((a, b) => (a.pac || 75) - (b.pac || 75))[0];
    const weakestCB = [...centerbacks].sort((a, b) => ((a.def || 75) + (a.pac || 70)) - ((b.def || 75) + (b.pac || 70)))[0];
    const tiredStarter = [...lineup].sort((a, b) => (a.energy !== undefined ? a.energy : 100) - (b.energy !== undefined ? b.energy : 100))[0];
    const lowestStarter = [... backline.length ? backline : lineup].sort((a, b) => (a.ovr || 75) - (b.ovr || 75))[0];

    let weaknessText = "";
    let recPlan = {
      label: "Ataque por Bandas y Ritmo Alto",
      mentality: (userAvg.overall >= oppAvg.overall) ? "offensive" : "balanced",
      passingStyle: "mixed",
      tempo: "fast",
      width: "wide",
      transitionLoss: "counterpress",
      transitionWin: "counter",
      defensiveLine: "mid",
      pressing: "high"
    };

    if (tiredStarter && (tiredStarter.energy !== undefined ? tiredStarter.energy : 100) < 82) {
      weaknessText = `${tiredStarter.name} (${tiredStarter.pos}) llega justo de físico (${Math.round(tiredStarter.energy)}% energía). Un ritmo alto y presión constante le pasará factura.`;
      recPlan = {
        label: "Ritmo Alto y Presión Asfixiante",
        mentality: userAvg.overall >= oppAvg.overall - 2 ? "offensive" : "balanced",
        passingStyle: "direct",
        tempo: "fast",
        width: "wide",
        transitionLoss: "counterpress",
        transitionWin: "counter",
        defensiveLine: "high",
        pressing: "high"
      };
    } else if (slowestFB && (slowestFB.pac || 75) <= 76) {
      weaknessText = `Su lateral ${slowestFB.name} (${slowestFB.pos}) sufre en velocidad (${slowestFB.pac || 72} PAC). Abrir el campo y encarar por bandas generará peligro claro.`;
      recPlan = {
        label: "Explotar las Bandas y Centros",
        mentality: userAvg.overall >= oppAvg.overall - 1 ? "offensive" : "balanced",
        passingStyle: "mixed",
        tempo: "fast",
        width: "wide",
        transitionLoss: "counterpress",
        transitionWin: "counter",
        defensiveLine: "mid",
        pressing: "mid"
      };
    } else if (isTopPossession && oppAvg.overall > userAvg.overall + 3) {
      const targetDef = weakestCB || lowestStarter;
      weaknessText = `Adelantan mucho la zaga con ${targetDef ? targetDef.name : 'sus centrales'}. Si cerramos espacios atrás y salimos en pase directo al espacio les sorprenderemos.`;
      recPlan = {
        label: "Bloque Sólido y Contraataque Letal",
        mentality: "defensive",
        passingStyle: "direct",
        tempo: "fast",
        width: "balanced",
        transitionLoss: "regroup",
        transitionWin: "counter",
        defensiveLine: "low",
        pressing: "mid"
      };
    } else {
      const targetDef = weakestCB || lowestStarter || sortedByOvr[sortedByOvr.length - 1];
      weaknessText = `${targetDef.name} (${targetDef.pos} · ${targetDef.ovr} OVR) es su pieza más vulnerable atrás (${targetDef.def || 72} DEF). Dominar por dentro con pases cortos filtrados abrirá huecos.`;
      recPlan = {
        label: "Control Interior y Pase Filtrado",
        mentality: userAvg.overall >= oppAvg.overall ? "offensive" : "balanced",
        passingStyle: "short",
        tempo: "fast",
        width: "center",
        transitionLoss: "counterpress",
        transitionWin: "hold",
        defensiveLine: "high",
        pressing: "high"
      };
    }

    if (matchWeather.id === "rain") {
      recPlan.passingStyle = "direct";
      recPlan.tempo = "fast";
      recPlan.label += " (Césped Rápido 🌧️)";
    }

    return {
      starPlayer,
      styleTitle,
      styleDesc,
      weaknessText,
      recPlan
    };
  }

  function getOpponentLineup(oppTeam) {
    const optimal = buildOptimalLineup(oppTeam);
    return {
      formationKey: optimal.formationKey,
      formation: optimal.formation,
      lineup: optimal.lineup,
      bench: optimal.bench
    };
  }

  // ==========================================
  // PANEL REUTILIZABLE DE ESTILOS E INSTRUCCIONES POR ESTADOS
  // ==========================================
  function renderTacticalInstructionsPanel(instructions, prefix) {
    if (!instructions) instructions = getDefaultTacticalInstructions();
    if (!instructions.inPossession) instructions.inPossession = { passingStyle: "short", tempo: "slow", width: "balanced" };
    if (!instructions.inTransition) instructions.inTransition = { loss: "counterpress", win: "hold" };
    if (!instructions.outOfPossession) instructions.outOfPossession = { defensiveLine: "high", pressing: "high" };

    const matchingPresetKey = detectMatchingPreset(instructions);
    const currentPreset = TACTICAL_PRESETS[matchingPresetKey] || null;

    return `
      <div class="p-3 space-y-3.5 max-w-lg mx-auto w-full select-none animate-fadeIn">
        <!-- Selector de Presets Rápidos -->
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-3 shadow-lg">
          <div class="flex items-center justify-between mb-2">
            <div>
              <h3 class="text-xs font-black uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <span>🧠</span> Estilos de Juego Predefinidos
              </h3>
              <p class="text-[10px] text-slate-400">Filosofías tácticas con 1 toque o ajusta parámetros libres abajo.</p>
            </div>
            <span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase ${currentPreset ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-slate-800 text-slate-400'}">
              ${currentPreset ? currentPreset.name : 'Personalizado'}
            </span>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
            ${Object.entries(TACTICAL_PRESETS).map(([key, preset]) => {
              const isActive = matchingPresetKey === key;
              return `
                <button type="button" class="btn-${prefix}-preset p-2 rounded-xl border text-left transition flex flex-col justify-between ${isActive ? 'bg-amber-500/20 border-amber-400 shadow-md ring-1 ring-amber-400/60' : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700 active:scale-98'}" data-preset-key="${key}">
                  <div>
                    <div class="flex items-center justify-between mb-1">
                      <span class="text-base">${preset.icon}</span>
                      ${isActive ? '<span class="text-[8px] font-black uppercase px-1 py-0.2 rounded bg-amber-400 text-slate-950 font-mono">ACTIVO</span>' : ''}
                    </div>
                    <div class="text-[11px] font-extrabold ${isActive ? 'text-amber-300' : 'text-white'} leading-tight">${preset.name}</div>
                    <div class="text-[8.5px] text-slate-400 line-clamp-2 mt-1 leading-snug">${preset.desc}</div>
                  </div>
                </button>
              `;
            }).join('')}
          </div>
        </div>

        <!-- FASE 1: CON BALÓN (FASE OFENSIVA) -->
        <div class="bg-slate-900 border border-sky-500/40 rounded-2xl p-3 shadow-lg space-y-3">
          <div class="flex items-center gap-2 pb-1.5 border-b border-slate-800">
            <span class="w-6 h-6 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <h4 class="text-xs font-black text-sky-300 uppercase tracking-wide">Fase Ofensiva · Con Balón</h4>
              <p class="text-[9.5px] text-slate-400">Cómo circula y madura la jugada tu equipo en posesión</p>
            </div>
          </div>

          <!-- Estilo de Pase -->
          <div>
            <div class="text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center justify-between">
              <span>Estilo de Pase</span>
              <span class="text-sky-400 font-mono text-[9px]">${TACTICAL_OPTIONS.passingStyle.find(o => o.id === instructions.inPossession?.passingStyle)?.label || 'Mixto'}</span>
            </div>
            <div class="grid grid-cols-3 gap-1.5">
              ${TACTICAL_OPTIONS.passingStyle.map(opt => {
                const isSel = instructions.inPossession?.passingStyle === opt.id;
                return `
                  <button type="button" class="btn-${prefix}-opt p-2 rounded-xl border text-center transition flex flex-col items-center justify-center ${isSel ? 'bg-sky-500/25 border-sky-400 text-white shadow-sm ring-1 ring-sky-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 active:scale-98'}" data-phase="inPossession" data-param="passingStyle" data-val="${opt.id}">
                    <span class="text-sm mb-0.5">${opt.icon}</span>
                    <span class="text-[11px] font-bold ${isSel ? 'text-sky-300' : 'text-slate-200'}">${opt.label}</span>
                    <span class="text-[8px] text-slate-400 leading-tight mt-0.5 line-clamp-1">${opt.desc}</span>
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Ritmo de Circulación -->
          <div>
            <div class="text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center justify-between">
              <span>Ritmo de Circulación</span>
              <span class="text-sky-400 font-mono text-[9px]">${TACTICAL_OPTIONS.tempo.find(o => o.id === instructions.inPossession?.tempo)?.label || 'Equilibrado'}</span>
            </div>
            <div class="grid grid-cols-3 gap-1.5">
              ${TACTICAL_OPTIONS.tempo.map(opt => {
                const isSel = instructions.inPossession?.tempo === opt.id;
                return `
                  <button type="button" class="btn-${prefix}-opt p-2 rounded-xl border text-center transition flex flex-col items-center justify-center ${isSel ? 'bg-sky-500/25 border-sky-400 text-white shadow-sm ring-1 ring-sky-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 active:scale-98'}" data-phase="inPossession" data-param="tempo" data-val="${opt.id}">
                    <span class="text-sm mb-0.5">${opt.icon}</span>
                    <span class="text-[11px] font-bold ${isSel ? 'text-sky-300' : 'text-slate-200'}">${opt.label}</span>
                    <span class="text-[8px] text-slate-400 leading-tight mt-0.5 line-clamp-1">${opt.desc}</span>
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Zona de Ataque / Anchura -->
          <div>
            <div class="text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center justify-between">
              <span>Zona de Ataque / Anchura</span>
              <span class="text-sky-400 font-mono text-[9px]">${TACTICAL_OPTIONS.width.find(o => o.id === instructions.inPossession?.width)?.label || 'Equilibrado'}</span>
            </div>
            <div class="grid grid-cols-3 gap-1.5">
              ${TACTICAL_OPTIONS.width.map(opt => {
                const isSel = instructions.inPossession?.width === opt.id;
                return `
                  <button type="button" class="btn-${prefix}-opt p-2 rounded-xl border text-center transition flex flex-col items-center justify-center ${isSel ? 'bg-sky-500/25 border-sky-400 text-white shadow-sm ring-1 ring-sky-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 active:scale-98'}" data-phase="inPossession" data-param="width" data-val="${opt.id}">
                    <span class="text-sm mb-0.5">${opt.icon}</span>
                    <span class="text-[11px] font-bold ${isSel ? 'text-sky-300' : 'text-slate-200'}">${opt.label}</span>
                    <span class="text-[8px] text-slate-400 leading-tight mt-0.5 line-clamp-1">${opt.desc}</span>
                  </button>
                `;
              }).join('')}
            </div>
          </div>
        </div>

        <!-- FASE 2: EN TRANSICIÓN -->
        <div class="bg-slate-900 border border-amber-500/40 rounded-2xl p-3 shadow-lg space-y-3">
          <div class="flex items-center gap-2 pb-1.5 border-b border-slate-800">
            <span class="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <h4 class="text-xs font-black text-amber-300 uppercase tracking-wide">Fase de Transición</h4>
              <p class="text-[9.5px] text-slate-400">Reacción en los segundos clave de pérdida o recuperación</p>
            </div>
          </div>

          <!-- Tras Pérdida -->
          <div>
            <div class="text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center justify-between">
              <span>Al perder el balón</span>
              <span class="text-amber-400 font-mono text-[9px]">${TACTICAL_OPTIONS.transitionLoss.find(o => o.id === instructions.inTransition?.loss)?.label || 'Replegarse'}</span>
            </div>
            <div class="grid grid-cols-2 gap-2">
              ${TACTICAL_OPTIONS.transitionLoss.map(opt => {
                const isSel = instructions.inTransition?.loss === opt.id;
                return `
                  <button type="button" class="btn-${prefix}-opt p-2.5 rounded-xl border text-left transition flex items-start gap-2 ${isSel ? 'bg-amber-500/25 border-amber-400 text-white shadow-sm ring-1 ring-amber-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 active:scale-98'}" data-phase="inTransition" data-param="loss" data-val="${opt.id}">
                    <span class="text-base mt-0.5 flex-shrink-0">${opt.icon}</span>
                    <div>
                      <div class="text-xs font-bold ${isSel ? 'text-amber-300' : 'text-slate-200'}">${opt.label}</div>
                      <div class="text-[8.5px] text-slate-400 leading-snug mt-0.5">${opt.desc}</div>
                    </div>
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Tras Recuperación -->
          <div>
            <div class="text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center justify-between">
              <span>Al recuperar el balón</span>
              <span class="text-amber-400 font-mono text-[9px]">${TACTICAL_OPTIONS.transitionWin.find(o => o.id === instructions.inTransition?.win)?.label || 'Contraatacar'}</span>
            </div>
            <div class="grid grid-cols-2 gap-2">
              ${TACTICAL_OPTIONS.transitionWin.map(opt => {
                const isSel = instructions.inTransition?.win === opt.id;
                return `
                  <button type="button" class="btn-${prefix}-opt p-2.5 rounded-xl border text-left transition flex items-start gap-2 ${isSel ? 'bg-amber-500/25 border-amber-400 text-white shadow-sm ring-1 ring-amber-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 active:scale-98'}" data-phase="inTransition" data-param="win" data-val="${opt.id}">
                    <span class="text-base mt-0.5 flex-shrink-0">${opt.icon}</span>
                    <div>
                      <div class="text-xs font-bold ${isSel ? 'text-amber-300' : 'text-slate-200'}">${opt.label}</div>
                      <div class="text-[8.5px] text-slate-400 leading-snug mt-0.5">${opt.desc}</div>
                    </div>
                  </button>
                `;
              }).join('')}
            </div>
          </div>
        </div>

        <!-- FASE 3: SIN BALÓN (FASE DEFENSIVA) -->
        <div class="bg-slate-900 border border-rose-500/40 rounded-2xl p-3 shadow-lg space-y-3">
          <div class="flex items-center gap-2 pb-1.5 border-b border-slate-800">
            <span class="w-6 h-6 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <h4 class="text-xs font-black text-rose-300 uppercase tracking-wide">Fase Defensiva · Sin Balón</h4>
              <p class="text-[9.5px] text-slate-400">Altura del bloque defensivo y agresividad en la recuperación</p>
            </div>
          </div>

          <!-- Altura de la Línea Defensiva -->
          <div>
            <div class="text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center justify-between">
              <span>Altura de la Línea Defensiva</span>
              <span class="text-rose-400 font-mono text-[9px]">${TACTICAL_OPTIONS.defensiveLine.find(o => o.id === instructions.outOfPossession?.defensiveLine)?.label || 'Bloque Medio'}</span>
            </div>
            <div class="grid grid-cols-3 gap-1.5">
              ${TACTICAL_OPTIONS.defensiveLine.map(opt => {
                const isSel = instructions.outOfPossession?.defensiveLine === opt.id;
                return `
                  <button type="button" class="btn-${prefix}-opt p-2 rounded-xl border text-center transition flex flex-col items-center justify-center ${isSel ? 'bg-rose-500/25 border-rose-400 text-white shadow-sm ring-1 ring-rose-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 active:scale-98'}" data-phase="outOfPossession" data-param="defensiveLine" data-val="${opt.id}">
                    <span class="text-sm mb-0.5">${opt.icon}</span>
                    <span class="text-[11px] font-bold ${isSel ? 'text-rose-300' : 'text-slate-200'}">${opt.label}</span>
                    <span class="text-[8px] text-slate-400 leading-tight mt-0.5 line-clamp-1">${opt.desc}</span>
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Intensidad de Presión -->
          <div>
            <div class="text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center justify-between">
              <span>Intensidad de Presión</span>
              <span class="text-rose-400 font-mono text-[9px]">${TACTICAL_OPTIONS.pressing.find(o => o.id === instructions.outOfPossession?.pressing)?.label || 'Media'}</span>
            </div>
            <div class="grid grid-cols-3 gap-1.5">
              ${TACTICAL_OPTIONS.pressing.map(opt => {
                const isSel = instructions.outOfPossession?.pressing === opt.id;
                return `
                  <button type="button" class="btn-${prefix}-opt p-2 rounded-xl border text-center transition flex flex-col items-center justify-center ${isSel ? 'bg-rose-500/25 border-rose-400 text-white shadow-sm ring-1 ring-rose-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 active:scale-98'}" data-phase="outOfPossession" data-param="pressing" data-val="${opt.id}">
                    <span class="text-sm mb-0.5">${opt.icon}</span>
                    <span class="text-[11px] font-bold ${isSel ? 'text-rose-300' : 'text-slate-200'}">${opt.label}</span>
                    <span class="text-[8px] text-slate-400 leading-tight mt-0.5 line-clamp-1">${opt.desc}</span>
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Anchura Defensiva / Control de Bandas -->
          <div>
            <div class="text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center justify-between">
              <span>Anchura Defensiva (Control de Bandas)</span>
              <span class="text-rose-400 font-mono text-[9px]">${TACTICAL_OPTIONS.defenseWidth.find(o => o.id === (instructions.outOfPossession?.defenseWidth || 'balanced'))?.label || 'Equilibrada'}</span>
            </div>
            <div class="grid grid-cols-3 gap-1.5">
              ${TACTICAL_OPTIONS.defenseWidth.map(opt => {
                const isSel = (instructions.outOfPossession?.defenseWidth || 'balanced') === opt.id;
                return `
                  <button type="button" class="btn-${prefix}-opt p-2 rounded-xl border text-center transition flex flex-col items-center justify-center ${isSel ? 'bg-rose-500/25 border-rose-400 text-white shadow-sm ring-1 ring-rose-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 active:scale-98'}" data-phase="outOfPossession" data-param="defenseWidth" data-val="${opt.id}">
                    <span class="text-sm mb-0.5">${opt.icon}</span>
                    <span class="text-[11px] font-bold ${isSel ? 'text-rose-300' : 'text-slate-200'}">${opt.label}</span>
                    <span class="text-[8px] text-slate-400 leading-tight mt-0.5 line-clamp-1">${opt.desc}</span>
                  </button>
                `;
              }).join('')}
            </div>
          </div>
        </div>

        <!-- Panel de Impacto en el Motor -->
        <div class="bg-slate-900/60 border border-slate-800 rounded-2xl p-3 text-[10px] text-slate-400 space-y-1">
          <div class="font-bold text-white flex items-center gap-1.5 mb-1">
            <span>⚡</span> Impacto en la Simulación del Partido
          </div>
          <p>• <b class="text-slate-200">Fatiga y Físico:</b> ${instructions.outOfPossession?.pressing === 'high' ? 'Presión asfixiante genera mayor desgaste físico y más faltas.' : instructions.outOfPossession?.pressing === 'low' ? 'Baja presión conserva energía para los 90 minutos.' : 'Desgaste equilibrado estándar.'}</p>
          <p>• <b class="text-slate-200">Construcción:</b> ${instructions.inPossession?.passingStyle === 'short' ? 'Pase corto maximiza el % de posesión y reduce pérdidas fortuitas.' : instructions.inPossession?.passingStyle === 'direct' ? 'Pase directo genera ocasiones verticales más veloces.' : 'Estilo versátil mixto.'}</p>
          <p>• <b class="text-slate-200">Transiciones:</b> ${instructions.inTransition?.loss === 'counterpress' ? 'Contrapresión activa alertas de robo inmediato en campo rival.' : 'Repliegue ordenado protege el área propia.'}</p>
        </div>
      </div>
    `;
  }

  function bindTacticalInstructionsPanel(container, instructions, prefix, onUpdate) {
    container.querySelectorAll(`.btn-${prefix}-preset`).forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const pKey = btn.dataset.presetKey;
        const preset = TACTICAL_PRESETS[pKey];
        if (preset) {
          instructions.preset = pKey;
          instructions.inPossession = { ...preset.inPossession };
          instructions.inTransition = { ...preset.inTransition };
          instructions.outOfPossession = { ...preset.outOfPossession };
          onUpdate();
        }
      };
    });

    container.querySelectorAll(`.btn-${prefix}-opt`).forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const phase = btn.dataset.phase;
        const param = btn.dataset.param;
        const val = btn.dataset.val;
        if (instructions && instructions[phase]) {
          instructions[phase][param] = val;
          instructions.preset = detectMatchingPreset(instructions);
          onUpdate();
        }
      };
    });
  }

  // ==========================================
  // FASE 1: PREVIA Y ELECCIÓN DE ALINEACIÓN
  // ==========================================
  function renderPreMatch() {
    const tactics = gameState.userTactics;
    const formationKey = tactics.formation;
    const formation = FORMATIONS[formationKey] || FORMATIONS["4-3-3"];

    const lineupPlayers = tactics.lineup.map(id => userTeam.players.find(p => p.id === id)).filter(Boolean);
    const benchPlayers = tactics.bench.map(id => userTeam.players.find(p => p.id === id)).filter(Boolean);
    const averages = calculateTeamAverages(lineupPlayers, formationKey);

    const oppData = getOpponentLineup(opponentTeam);
    const oppAverages = calculateTeamAverages(oppData.lineup, oppData.formationKey);
    const analystReport = buildOpponentAnalystReport(opponentTeam, oppData, oppAverages, averages);

    container.innerHTML = `
      <div class="min-h-screen bg-slate-950 text-white flex flex-col justify-between pb-6 select-none max-w-md mx-auto">
        <!-- Barra Superior Pre-Partido -->
        <header class="bg-slate-900 border-b border-slate-800 px-4 py-3 sticky top-0 z-20 shadow-md">
          <div class="flex items-center justify-between">
            <button id="btn-pre-back" class="text-xs text-slate-400 hover:text-white flex items-center gap-1 font-bold">
              ❮ Volver
            </button>
            <div class="text-center">
              <span class="text-[10px] uppercase font-bold text-sky-400">Jornada ${gameState.currentRound} de 38</span>
              <h2 class="text-sm font-extrabold text-white leading-tight">${preMatchTab === 'USER' ? 'Mi Alineación Oficial' : 'Alineación del Rival'}</h2>
            </div>
            ${preMatchTab === 'USER' ? `
              <div class="flex items-center gap-1.5">
                <button id="btn-pre-save-header" class="text-xs bg-emerald-600 hover:bg-emerald-500 text-white px-2.5 py-1 rounded-lg border border-emerald-500 font-bold active:scale-95 transition flex items-center gap-1 shadow-sm">
                  <span>💾</span> Guardar
                </button>
                <button id="btn-pre-auto" class="text-xs bg-slate-800 hover:bg-slate-700 text-sky-400 px-2 py-1 rounded-lg border border-slate-700 font-bold active:scale-95 transition">
                  ⚡ Auto 11
                </button>
              </div>
            ` : `
              <div class="w-12"></div>
            `}
          </div>
        </header>

        <!-- Tarjeta de Enfrentamiento (Clickeable para alternar pestañas) -->
        <div class="p-3 bg-slate-900/60 border-b border-slate-800 flex items-center justify-between text-xs">
          <div id="btn-matchup-user" class="flex items-center gap-2 cursor-pointer p-1 rounded-xl transition ${preMatchTab === 'USER' ? 'ring-2 ring-sky-500/80 bg-sky-500/10' : 'hover:bg-slate-800/50'}">
            <div class="w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs shadow" style="background: linear-gradient(135deg, ${userTeam.primaryColor}, ${userTeam.secondaryColor}); color: ${userTeam.textColor};">
              ${userTeam.shortName}
            </div>
            <div>
              <div class="font-black text-white text-xs">${userTeam.name}</div>
              <div class="text-[10px] text-slate-400">${isUserHome ? 'Local · 🏟️ Factor Campo' : 'Visitante'} · Media <b class="text-amber-400">${averages.overall}</b></div>
            </div>
          </div>
          <span class="font-mono font-bold text-slate-500 bg-slate-950 px-2 py-0.5 rounded-full border border-slate-800">VS</span>
          <div id="btn-matchup-rival" class="flex items-center gap-2 text-right cursor-pointer p-1 rounded-xl transition ${preMatchTab === 'OPPONENT' ? 'ring-2 ring-amber-500/80 bg-amber-500/10' : 'hover:bg-slate-800/50'}">
            <div>
              <div class="font-black text-white text-xs">${opponentTeam.name}</div>
              <div class="text-[10px] text-slate-400">${!isUserHome ? 'Local · 🏟️ Factor Campo' : 'Visitante'} · Media <b class="text-amber-400">${oppAverages.overall}</b></div>
            </div>
            <div class="w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs shadow" style="background: linear-gradient(135deg, ${opponentTeam.primaryColor}, ${opponentTeam.secondaryColor}); color: ${opponentTeam.textColor};">
              ${opponentTeam.shortName}
            </div>
          </div>
        </div>

        <!-- MEJORA 3, MEJORA 6 y FACTOR CAMPO: Barra de Clima, Factor Campo y Entrenamiento Semanal -->
        <div class="px-3 py-1.5 bg-slate-950/90 border-b border-slate-800/80 flex items-center justify-between gap-1.5 text-[10px]">
          <div class="flex items-center gap-1 text-sky-300 font-bold truncate" title="${matchWeather.pitchEffect}">
            <span>${matchWeather.icon}</span>
            <span>${matchWeather.label}</span>
          </div>
          <div class="flex items-center gap-1 px-2 py-0.5 rounded-full ${isUserHome ? 'bg-amber-500/15 border border-amber-500/40 text-amber-300' : 'bg-slate-800/80 border border-slate-700 text-slate-400'} font-bold whitespace-nowrap" title="${isUserHome ? 'Juegas en tu estadio (+4% empuje de tu afición)' : 'Juegas fuera de casa: El rival cuenta con el empuje de su estadio'}">
            <span>🏟️</span>
            <span>${isUserHome ? 'Local (+Factor Campo)' : 'Visitante'}</span>
          </div>
          <div class="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 font-bold whitespace-nowrap" title="${activeWeeklyTraining.shortEffect}">
            <span>${activeWeeklyTraining.icon}</span>
            <span>${activeWeeklyTraining.label}</span>
          </div>
        </div>

        <!-- Selector de Pestañas: Mi Equipo vs Rival -->
        <div class="px-3 pt-2.5 pb-1 flex gap-2 bg-slate-900/40 border-b border-slate-800">
          <button id="tab-pre-user" class="flex-1 py-2 px-3 rounded-xl text-xs font-black transition flex items-center justify-center gap-2 ${preMatchTab === 'USER' ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25 border border-sky-400' : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'}">
            <span class="w-2.5 h-2.5 rounded-full inline-block" style="background-color: ${userTeam.primaryColor};"></span>
            <span>👕 Mi 11 (${userTeam.shortName})</span>
          </button>
          <button id="tab-pre-rival" class="flex-1 py-2 px-3 rounded-xl text-xs font-black transition flex items-center justify-center gap-2 ${preMatchTab === 'OPPONENT' ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 border border-amber-400' : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'}">
            <span class="w-2.5 h-2.5 rounded-full inline-block" style="background-color: ${opponentTeam.primaryColor};"></span>
            <span>🛡️ Ver Rival (${opponentTeam.shortName})</span>
          </button>
        </div>

        ${preMatchTab === 'USER' ? `
          <!-- SELECTORES TÁCTICOS USUARIO -->
          <div class="p-3 bg-slate-900/40 border-b border-slate-800 space-y-2">
            <!-- Formaciones -->
            <div class="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
              <span class="text-[10px] uppercase font-bold text-slate-500 mr-1">Sistema:</span>
              ${Object.keys(FORMATIONS).map(fKey => `
                <button class="btn-pre-formation px-3 py-1 rounded-full font-bold transition whitespace-nowrap ${tactics.formation === fKey ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20' : 'bg-slate-800 text-slate-400 hover:text-white'}" data-formation="${fKey}">
                  ${fKey}
                </button>
              `).join('')}
            </div>

            <!-- Mentalidad -->
            <div class="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
              <span class="text-[10px] uppercase font-bold text-slate-500 mr-1">Mentalidad:</span>
              ${MENTALITIES.map(m => `
                <button class="btn-pre-mentality px-2.5 py-0.5 rounded-lg text-[11px] font-semibold transition whitespace-nowrap ${tactics.mentality === m.id ? 'bg-emerald-600 text-white border border-emerald-400' : 'bg-slate-800/80 text-slate-400 hover:text-white'}" data-mentality="${m.id}">
                  ${m.label}
                </button>
              `).join('')}
            </div>

            <!-- Estilo Táctico Activo -->
            <div class="flex items-center justify-between pt-1 border-t border-slate-800/80 text-xs">
              <div class="flex items-center gap-1.5">
                <span class="text-[10px] uppercase font-bold text-slate-500">Estilo:</span>
                <span class="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold text-[10.5px] flex items-center gap-1">
                  <span>${TACTICAL_PRESETS[detectMatchingPreset(tactics.instructions)] ? TACTICAL_PRESETS[detectMatchingPreset(tactics.instructions)].icon : '🧠'}</span>
                  <span>${TACTICAL_PRESETS[detectMatchingPreset(tactics.instructions)] ? TACTICAL_PRESETS[detectMatchingPreset(tactics.instructions)].name : 'Personalizado'}</span>
                </span>
              </div>
              <span class="text-[9.5px] text-slate-400">
                ${tactics.instructions?.inPossession?.passingStyle === 'short' ? 'Pase Corto' : tactics.instructions?.inPossession?.passingStyle === 'direct' ? 'Pase Directo' : 'Pase Mixto'} · 
                ${tactics.instructions?.inTransition?.loss === 'counterpress' ? 'Contrapresión' : 'Repliegue'} · 
                ${tactics.instructions?.outOfPossession?.defensiveLine === 'high' ? 'Línea Alta' : tactics.instructions?.outOfPossession?.defensiveLine === 'low' ? 'Bloque Bajo' : 'Bloque Medio'}
              </span>
            </div>
          </div>

          <!-- Pestañas de Previa: Mi 11 y Campo vs Estilos e Instrucciones -->
          <div class="px-3 pt-2 pb-1 bg-slate-900/60 border-b border-slate-800 flex gap-2">
            <button id="btn-pre-subtab-pitch" type="button" class="flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${preMatchSubTab === 'PITCH' ? 'bg-sky-500 text-white shadow-md border border-sky-400' : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'}">
              <span>⚽ Mi 11 y Campo</span>
            </button>
            <button id="btn-pre-subtab-style" type="button" class="flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${preMatchSubTab === 'STYLE' ? 'bg-amber-500 text-slate-950 shadow-md border border-amber-400' : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'}">
              <span>🧠 Estilos e Instrucciones</span>
              <span class="px-1.5 py-0.2 rounded text-[10px] font-extrabold ${preMatchSubTab === 'STYLE' ? 'bg-slate-950/80 text-amber-300' : 'bg-slate-800 text-amber-400'}">
                ${TACTICAL_PRESETS[detectMatchingPreset(tactics.instructions)] ? TACTICAL_PRESETS[detectMatchingPreset(tactics.instructions)].icon : '⚙️'}
              </span>
            </button>
          </div>

          <!-- Banner Alerta de Lesiones en Titulares -->
          ${(() => {
            const injuredStarters = lineupPlayers.filter(p => p.injury);
            if (injuredStarters.length === 0) return "";
            return `
              <div class="mx-3 mt-2 p-2.5 rounded-xl bg-rose-500/20 border border-rose-500/60 flex items-center justify-between text-xs text-rose-200 shadow-md">
                <div class="flex items-center gap-2">
                  <span class="text-xl flex-shrink-0">🚑</span>
                  <div>
                    <span class="font-extrabold text-white">¡Bajas por lesión en el 11 titular!</span>
                    <p class="text-[10px] text-rose-300">${injuredStarters.map(p => `${p.name.split(' ').slice(-1)[0]} (${p.injury.roundsLeft}j)`).join(', ')} no pueden jugar.</p>
                  </div>
                </div>
                <button id="btn-pre-replace-injured" class="text-[10px] bg-rose-600 hover:bg-rose-500 text-white font-bold px-2.5 py-1.5 rounded-lg active:scale-95 transition shadow whitespace-nowrap">
                  ⚡ Sustituir
                </button>
              </div>
            `;
          })()}

          <!-- Banner Alerta de Sanciones en Titulares -->
          ${(() => {
            const suspendedStarters = lineupPlayers.filter(p => p.suspension && p.suspension.roundsLeft > 0);
            if (suspendedStarters.length === 0) return "";
            return `
              <div class="mx-3 mt-2 p-2.5 rounded-xl bg-amber-500/20 border border-amber-500/60 flex items-center justify-between text-xs text-amber-200 shadow-md">
                <div class="flex items-center gap-2">
                  <span class="text-xl flex-shrink-0">🛑</span>
                  <div>
                    <span class="font-extrabold text-white">¡Bajas por sanción en el 11 titular!</span>
                    <p class="text-[10px] text-amber-300">${suspendedStarters.map(p => `${p.name.split(' ').slice(-1)[0]} (${p.suspension.reason})`).join(', ')} no pueden jugar.</p>
                  </div>
                </div>
                <button id="btn-pre-replace-suspended" class="text-[10px] bg-amber-600 hover:bg-amber-500 text-white font-bold px-2.5 py-1.5 rounded-lg active:scale-95 transition shadow whitespace-nowrap">
                  ⚡ Sustituir
                </button>
              </div>
            `;
          })()}

          <!-- Banner Alerta de Fatiga si hay titulares cansados -->
          ${(() => {
            const tiredCount = lineupPlayers.filter(p => (p.energy !== undefined ? p.energy : 100) < 78).length;
            if (tiredCount === 0) return "";
            return `
              <div class="mx-3 mt-2 p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-2 text-[11px] text-amber-300">
                <span class="text-sm flex-shrink-0">⚠️</span>
                <div class="leading-tight">
                  <span class="font-bold text-amber-400">Fatiga acumulada:</span> ${tiredCount} titular${tiredCount > 1 ? 'es tienen' : ' tiene'} &lt;78% de energía. Da descanso o rota con suplentes.
                </div>
              </div>
            `;
          })()}

          <!-- Banner de Confirmación de Guardado de Táctica -->
          ${preMatchSaveFeedback ? `
            <div id="pre-save-feedback" class="mx-3 mt-2 p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-between text-xs text-emerald-300 shadow-md transition-all">
              <div class="flex items-center gap-2">
                <span class="text-base flex-shrink-0">💾</span>
                <span class="font-bold">${preMatchSaveFeedback}</span>
              </div>
              <span class="text-[10px] text-emerald-400 font-mono bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-500/40 font-bold">Guardada</span>
            </div>
          ` : ''}

          <!-- Contenido de Mi 11 vs Estilos e Instrucciones -->
          ${preMatchSubTab === 'PITCH' ? `
            <!-- Terreno de Juego Táctico Interactivo Usuario -->
            <div class="p-3 flex-1 flex flex-col justify-center">
            <div id="pre-match-pitch-container" class="relative w-full aspect-[3/4] max-w-[340px] mx-auto bg-gradient-to-b from-emerald-800 via-emerald-700 to-emerald-900 rounded-2xl border-2 border-emerald-500/40 shadow-inner overflow-hidden p-2 select-none touch-pan-y">
              <div class="absolute inset-2 border-2 border-white/30 rounded-xl pointer-events-none"></div>
              <div class="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-12 border-b-2 border-x-2 border-white/30 pointer-events-none"></div>
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-white/30 rounded-full pointer-events-none"></div>
              <div class="absolute top-1/2 left-2 right-2 h-0.5 bg-white/30 -translate-y-1/2 pointer-events-none"></div>
              <div class="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-12 border-t-2 border-x-2 border-white/30 pointer-events-none"></div>

              <!-- Fichas de los 11 titulares usuario con soporte de posición libre -->
              ${formation.slots.map((slot, index) => {
                const player = lineupPlayers[index];
                if (!player) return "";
                const effSlot = getEffectiveSlotCoords(formationKey, index, tactics.customPositions);
                const effRating = calculateEffectiveRating(player, effSlot.pos);
                const isSelected = selectedPreMatchPlayerId === player.id;
                const isInjured = Boolean(player.injury);
                const roleId = (tactics.playerRoles && tactics.playerRoles[player.id]) || getDefaultRoleForPosition(effSlot.pos);
                const role = getRoleDetails(effSlot.pos, roleId);
                const fatigue = player.fatigueLoad || 0;

                return `
                  <div class="slot-pre-player absolute -translate-x-1/2 -translate-y-1/2 ${isSelected ? 'cursor-grab active:cursor-grabbing touch-none ring-2 ring-amber-400 ring-offset-2 ring-offset-slate-900 z-30 scale-105' : 'cursor-pointer touch-manipulation z-10'} flex flex-col items-center transition-transform active:scale-95 select-none"
                       style="left: ${effSlot.x}%; top: ${effSlot.y}%;"
                       data-player-id="${player.id}"
                       data-slot-index="${index}">
                    <div class="w-9 h-9 rounded-full border-2 ${isSelected ? 'border-amber-400 bg-amber-500 text-black shadow-lg shadow-amber-400/50 scale-110 ring-2 ring-amber-300' : isInjured ? 'border-rose-500 bg-rose-950 text-rose-200 animate-pulse' : effSlot.isCustom ? 'border-amber-400 bg-slate-900 text-white shadow-md ring-1 ring-amber-400/80' : 'border-white/80 bg-slate-900 text-white shadow-md'} flex flex-col items-center justify-center relative transition-all">
                      <span class="text-[9px] font-black leading-none">${effRating}</span>
                      <span class="text-[7px] font-bold ${isInjured ? 'text-rose-300' : effSlot.isCustom ? 'text-amber-300 font-extrabold' : 'text-slate-300'} leading-none">${slot.label}</span>
                      <div class="absolute -bottom-1 w-5 h-1 bg-black/60 rounded-full overflow-hidden">
                        <div class="h-full ${(player.energy || 100) >= 80 ? 'bg-emerald-400' : (player.energy || 100) >= 65 ? 'bg-amber-400' : 'bg-red-500'}" style="width: ${player.energy || 100}%;"></div>
                      </div>
                      ${effSlot.isCustom ? `
                        <div class="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-amber-400 text-slate-950 text-[6.5px] font-black flex items-center justify-center shadow">📍</div>
                      ` : ''}
                    </div>
                    <div class="bg-black/80 px-1 py-0.5 rounded text-[8px] font-bold text-white tracking-tight mt-0.5 truncate max-w-[65px] text-center border border-white/10 shadow">
                      ${player.name.split(' ').slice(-1)[0]}
                    </div>
                    ${isSelected ? `
                      <div class="mt-0.5 px-1.5 py-0.2 rounded-full bg-amber-400 text-slate-950 font-black text-[7px] shadow-md animate-pulse uppercase tracking-tight">
                        ✋ Mover
                      </div>
                    ` : ''}
                    <!-- Rol / Función del jugador, Lesión o Sanción / Sobrecarga -->
                    ${isInjured ? `
                      <div class="mt-0.5 px-1 py-0.2 rounded bg-rose-900 border border-rose-500 text-[7px] font-bold text-rose-200 truncate max-w-[70px] text-center shadow-sm">
                        🚑 ${player.injury.roundsLeft}j
                      </div>
                    ` : player.suspension ? `
                      <div class="mt-0.5 px-1 py-0.2 rounded bg-amber-950 border border-amber-500 text-[7px] font-bold text-amber-200 truncate max-w-[70px] text-center shadow-sm">
                        🛑 ${player.suspension.roundsLeft}j
                      </div>
                    ` : fatigue >= 40 ? `
                      <div class="mt-0.5 px-1 py-0.2 rounded bg-amber-950 border border-amber-500/80 text-[6.5px] font-bold text-amber-300 truncate max-w-[70px] text-center shadow-sm">
                        🔥 Sobrecarga
                      </div>
                    ` : `
                      <div class="mt-0.5 px-1 py-0.2 rounded bg-sky-950/90 border border-sky-500/40 text-[7px] font-bold text-sky-300 truncate max-w-[70px] text-center shadow-sm">
                        ${role.icon} ${role.tag}
                      </div>
                    `}
                    ${(() => {
                      const mk = tactics.manMarking && tactics.manMarking[player.id];
                      if (!mk || !mk.targetId) return "";
                      const targetP = oppData.lineup.find(p => p.id === mk.targetId);
                      const tName = targetP ? targetP.name.split(' ').slice(-1)[0] : 'Rival';
                      const iIcon = mk.intensity === 'aggressive' ? '⚔️' : mk.intensity === 'tight' ? '🔒' : '👁️';
                      return `
                        <div class="mt-0.5 px-1 py-0.2 rounded bg-rose-950/90 border border-rose-500/70 text-[6.5px] font-black text-rose-300 truncate max-w-[70px] text-center shadow-sm" title="Marcaje individual a ${tName}">
                          ${iIcon} ${tName}
                        </div>
                      `;
                    })()}
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Panel de Asignación de Función Táctica y Ajuste de Posición Pre-Partido -->
          ${(() => {
            if (!selectedPreMatchPlayerId) return "";
            const selSlotIndex = tactics.lineup.indexOf(selectedPreMatchPlayerId);
            if (selSlotIndex === -1) return "";
            const selSlot = formation.slots[selSlotIndex];
            const selPlayer = userTeam.players.find(p => p.id === selectedPreMatchPlayerId);
            if (!selPlayer || !selSlot) return "";

            const effSlot = getEffectiveSlotCoords(formationKey, selSlotIndex, tactics.customPositions);
            const curRoleId = (tactics.playerRoles && tactics.playerRoles[selPlayer.id]) || getDefaultRoleForPosition(effSlot.pos);
            const curRole = getRoleDetails(effSlot.pos, curRoleId);
            const availRoles = getAvailableRolesForPosition(effSlot.pos);
            const posLabel = getPositionAdjustmentLabel(selSlot, effSlot);

            const oppOutfield = oppData.lineup.filter(p => p.pos !== "POR");
            const oppStarOvr = Math.max(...oppOutfield.map(p => p.ovr || 70), 70);
            const curMarking = (tactics.manMarking && tactics.manMarking[selPlayer.id]) || null;
            const curTargetId = curMarking?.targetId || "";
            const curIntensity = curMarking?.intensity || "tight";

            return `
              <div class="mx-3 my-2 space-y-2 animate-fadeIn">
                <!-- Ajuste de Posición Manual en el Campo -->
                <div class="p-2.5 bg-slate-900 border border-amber-500/40 rounded-2xl shadow-xl">
                  <div class="flex items-center justify-between mb-1.5 pb-1 border-b border-slate-800">
                    <div class="flex items-center gap-1.5">
                      <span class="text-sm">📍</span>
                      <span class="text-[10px] font-bold text-amber-400">Posición: ${posLabel}</span>
                    </div>
                    ${effSlot.isCustom ? `
                      <button id="btn-pre-reset-pos" class="text-[9.5px] font-bold text-rose-400 hover:text-rose-300 px-2 py-0.5 rounded bg-rose-950/70 border border-rose-800/80 active:scale-95 transition">
                        ↺ Restablecer
                      </button>
                    ` : ''}
                  </div>
                  <div class="text-[9.5px] text-slate-400 mb-1.5">Ajusta la posición de ${selPlayer.name.split(' ').slice(-1)[0]}:</div>
                  <div class="grid grid-cols-2 gap-1.5">
                    <div class="flex items-center gap-1">
                      <button class="btn-pre-nudge-pos flex-1 py-1.5 px-1 bg-slate-800 hover:bg-slate-700 text-sky-300 font-bold text-[10px] rounded-lg border border-slate-700 active:scale-95 transition" data-axis="y" data-delta="-5">
                        ▲ Adelantar
                      </button>
                      <button class="btn-pre-nudge-pos flex-1 py-1.5 px-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-[10px] rounded-lg border border-slate-700 active:scale-95 transition" data-axis="y" data-delta="5">
                        ▼ Retrasar
                      </button>
                    </div>
                    <div class="flex items-center gap-1">
                      <button class="btn-pre-nudge-pos flex-1 py-1.5 px-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-[10px] rounded-lg border border-slate-700 active:scale-95 transition" data-axis="x" data-delta="-5">
                        ◀ Izquierda
                      </button>
                      <button class="btn-pre-nudge-pos flex-1 py-1.5 px-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-[10px] rounded-lg border border-slate-700 active:scale-95 transition" data-axis="x" data-delta="5">
                        ▶ Derecha
                      </button>
                    </div>
                  </div>

                  <!-- Deslizadores de ajuste fino pre-partido -->
                  <div class="space-y-1.5 bg-slate-950/60 p-2 rounded-xl border border-slate-800/80 text-[10px] mt-2">
                    <div class="flex items-center justify-between text-slate-400">
                      <span>Profundidad (Y): <b class="text-white">${effSlot.y < 35 ? 'Delantera / Ofensivo' : (effSlot.y > 65 ? 'Defensa / Retrasado' : 'Medio campo')}</b></span>
                      <span class="font-mono text-amber-400 font-bold">${Math.round(effSlot.y)}%</span>
                    </div>
                    <input type="range" class="slider-pre-pos-y w-full accent-amber-400 bg-slate-800 h-1.5 rounded-lg appearance-none cursor-pointer" min="${selSlotIndex === 0 ? 82 : 12}" max="${selSlotIndex === 0 ? 90 : 88}" value="${effSlot.y}">

                    <div class="flex items-center justify-between text-slate-400 pt-1">
                      <span>Amplitud (X): <b class="text-white">${effSlot.x < 35 ? 'Banda Izquierda' : (effSlot.x > 65 ? 'Banda Derecha' : 'Interior / Centro')}</b></span>
                      <span class="font-mono text-amber-400 font-bold">${Math.round(effSlot.x)}%</span>
                    </div>
                    <input type="range" class="slider-pre-pos-x w-full accent-amber-400 bg-slate-800 h-1.5 rounded-lg appearance-none cursor-pointer" min="${selSlotIndex === 0 ? 38 : 10}" max="${selSlotIndex === 0 ? 62 : 90}" value="${effSlot.x}">
                  </div>
                </div>

                <!-- Función Táctica / Rol -->
                <div class="p-3 bg-slate-900 border border-sky-500/50 rounded-2xl shadow-xl">
                  <div class="flex items-center justify-between mb-2 pb-1.5 border-b border-slate-800">
                    <div class="flex items-center gap-2">
                      <span class="text-xl">${curRole.icon}</span>
                      <div>
                        <span class="text-[9px] uppercase font-bold text-sky-400">Función táctica · ${selPlayer.name}</span>
                        <h4 class="text-xs font-black text-white">${curRole.name}</h4>
                      </div>
                    </div>
                    <button id="btn-pre-close-role-box" class="text-[10px] font-bold text-emerald-400 hover:text-white px-2 py-1 rounded bg-emerald-950/80 border border-emerald-500/50 flex items-center gap-1 active:scale-95 shadow">✓ Fijar posición</button>
                  </div>
                  <div class="text-[10px] text-slate-400 mb-2 font-medium">Instrucción individual en este partido:</div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    ${availRoles.map(r => `
                      <button class="btn-pre-assign-role p-2 rounded-xl border text-left transition flex items-start gap-2 ${r.id === curRoleId ? 'bg-sky-500/25 border-sky-400 text-white shadow-sm ring-1 ring-sky-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 active:scale-98'}" data-role-id="${r.id}" data-player-id="${selPlayer.id}">
                        <span class="text-base mt-0.5 flex-shrink-0">${r.icon}</span>
                        <div class="min-w-0">
                          <div class="text-xs font-bold ${r.id === curRoleId ? 'text-sky-300' : 'text-slate-200'}">${r.name}</div>
                          <div class="text-[9.5px] text-slate-400 leading-tight mt-0.5">${r.desc}</div>
                        </div>
                      </button>
                    `).join('')}
                  </div>
                </div>

                <!-- Instrucción Individual: Marcaje al Hombre Rival -->
                ${selSlot.pos !== "POR" ? `
                  <div class="p-3 bg-slate-900 border border-rose-500/50 rounded-2xl shadow-xl space-y-2">
                    <div class="flex items-center justify-between pb-1.5 border-b border-slate-800">
                      <div class="flex items-center gap-2">
                        <span class="text-lg">🎯</span>
                        <div>
                          <span class="text-[9px] uppercase font-bold text-rose-400">Instrucción de Marcaje</span>
                          <h4 class="text-xs font-black text-white">Marcaje al Hombre Rival</h4>
                        </div>
                      </div>
                      ${curTargetId ? `
                        <button id="btn-pre-clear-mark" class="text-[9.5px] font-bold text-rose-400 hover:text-white px-2 py-0.5 rounded bg-rose-950/80 border border-rose-800/80 active:scale-95 transition">
                          Desactivar
                        </button>
                      ` : ''}
                    </div>

                    <div class="text-[9.5px] text-slate-400">
                      Asigna a ${selPlayer.name.split(' ').slice(-1)[0]} la tarea de neutralizar a un jugador rival específico.
                    </div>

                    <!-- Selector de Rival -->
                    <div>
                      <label class="block text-[9px] uppercase font-bold text-slate-400 mb-1">Jugador Rival a Marcar:</label>
                      <select id="select-pre-mark-target" class="w-full bg-slate-950 border border-slate-700 text-white font-bold text-xs rounded-xl px-2.5 py-1.5 outline-none focus:border-rose-400" data-marker-id="${selPlayer.id}">
                        <option value="">-- Sin marcaje individual asignado --</option>
                        ${oppOutfield.map(op => `
                          <option value="${op.id}" ${op.id === curTargetId ? 'selected' : ''}>
                            ${op.pos} · ${op.name} (${op.ovr} OVR)${op.ovr === oppStarOvr ? ' ⭐ Peligro principal' : ''}
                          </option>
                        `).join('')}
                      </select>
                    </div>

                    <!-- Intensidad de Marcaje -->
                    ${curTargetId ? `
                      <div class="pt-1">
                        <span class="block text-[9px] uppercase font-bold text-slate-400 mb-1.5">Intensidad del Marcaje:</span>
                        <div class="grid grid-cols-3 gap-1.5 text-center">
                          <button class="btn-pre-mark-intensity p-1.5 rounded-xl border text-left transition flex flex-col gap-0.5 ${curIntensity === 'light' ? 'bg-amber-500/25 border-amber-400 text-white ring-1 ring-amber-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700'} active:scale-95" data-intensity="light" data-marker-id="${selPlayer.id}">
                            <div class="flex items-center gap-1 font-bold text-[10px] ${curIntensity === 'light' ? 'text-amber-300' : 'text-slate-200'}">
                              <span>👁️</span> Suave
                            </div>
                            <div class="text-[8px] text-slate-400 leading-tight">Vigilancia cercana (-12% rival, +4% fatiga)</div>
                          </button>
                          <button class="btn-pre-mark-intensity p-1.5 rounded-xl border text-left transition flex flex-col gap-0.5 ${curIntensity === 'tight' ? 'bg-sky-500/25 border-sky-400 text-white ring-1 ring-sky-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700'} active:scale-95" data-intensity="tight" data-marker-id="${selPlayer.id}">
                            <div class="flex items-center gap-1 font-bold text-[10px] ${curIntensity === 'tight' ? 'text-sky-300' : 'text-slate-200'}">
                              <span>🔒</span> Férreo
                            </div>
                            <div class="text-[8px] text-slate-400 leading-tight">Pegajoso (-24% rival, +10% fatiga, +12% faltas)</div>
                          </button>
                          <button class="btn-pre-mark-intensity p-1.5 rounded-xl border text-left transition flex flex-col gap-0.5 ${curIntensity === 'aggressive' ? 'bg-rose-500/25 border-rose-400 text-white ring-1 ring-rose-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700'} active:scale-95" data-intensity="aggressive" data-marker-id="${selPlayer.id}">
                            <div class="flex items-center gap-1 font-bold text-[10px] ${curIntensity === 'aggressive' ? 'text-rose-300' : 'text-slate-200'}">
                              <span>⚔️</span> Secante
                            </div>
                            <div class="text-[8px] text-slate-400 leading-tight">Asfixiante (-36% rival, +18% fatiga, +28% faltas)</div>
                          </button>
                        </div>
                      </div>
                    ` : ''}
                  </div>
                ` : ''}
              </div>
            `;
          })()}

          <!-- Botón para ver y ajustar todas las funciones del 11 -->
          <div class="px-4 text-center my-1.5 flex items-center justify-center gap-2">
            <button id="btn-pre-toggle-all-roles" class="text-xs bg-slate-900 hover:bg-slate-800 text-sky-400 border border-slate-800 hover:border-sky-500/40 px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 shadow-sm">
              <span>⚙️</span>
              <span>${showPreMatchAllRoles ? 'Ocultar funciones del 11' : 'Ver funciones de los 11'}</span>
            </button>
          </div>

          <!-- Lista Desplegable de Todas las Funciones del 11 -->
          ${showPreMatchAllRoles ? `
            <div class="mx-3 mb-3 bg-slate-900 border border-slate-800 rounded-2xl p-3 space-y-2">
              <div class="flex items-center justify-between pb-1.5 border-b border-slate-800">
                <span class="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>⚙️</span> Funciones e Instrucciones del 11 Titular
                </span>
                <span class="text-[10px] text-slate-400">Personaliza cada puesto</span>
              </div>
              <div class="space-y-1.5 max-h-60 overflow-y-auto pr-1 no-scrollbar">
                ${formation.slots.map((slot, idx) => {
                  const p = lineupPlayers[idx];
                  if (!p) return "";
                  const curRoleId = (tactics.playerRoles && tactics.playerRoles[p.id]) || getDefaultRoleForPosition(slot.pos);
                  const availRoles = getAvailableRolesForPosition(slot.pos);
                  return `
                    <div class="flex items-center justify-between p-2 rounded-xl bg-slate-950 border border-slate-800/80 text-xs">
                      <div class="flex items-center gap-2 min-w-0">
                        <span class="w-8 text-center font-extrabold text-[10px] px-1 py-0.5 rounded bg-slate-800 text-sky-400 flex-shrink-0">${slot.label}</span>
                        <span class="font-bold text-white truncate text-xs">${p.name.split(' ').slice(-1)[0]}</span>
                      </div>
                      <select class="select-pre-player-role bg-slate-900 border border-slate-700 text-sky-300 text-[11px] font-bold rounded-lg px-2 py-1 outline-none focus:border-sky-400 max-w-[190px]" data-player-id="${p.id}" data-pos="${slot.pos}">
                        ${availRoles.map(r => `
                          <option value="${r.id}" ${r.id === curRoleId ? 'selected' : ''}>
                            ${r.icon} ${r.name} (${r.tag})
                          </option>
                        `).join('')}
                      </select>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Instrucción de intercambio -->
          <div class="px-4 text-center my-1">
            <p class="text-[11px] text-slate-400">
              ${selectedPreMatchPlayerId ? '👉 Puedes elegir su función arriba o tocar otro futbolista para intercambiarlo.' : '💡 Toca un futbolista para elegir su función o cambiar su posición.'}
            </p>
          </div>

          <!-- Lista del Banquillo (Suplentes) -->
          <div class="px-3 mb-3">
            <div class="text-[10px] uppercase font-bold text-slate-400 mb-1.5 flex items-center justify-between">
              <span>🪑 Suplentes disponibles (${benchPlayers.length})</span>
              <span class="text-slate-500 font-normal">Toca para poner de titular</span>
            </div>
            <div class="flex gap-1.5 overflow-x-auto pb-2 no-scrollbar">
              ${benchPlayers.map(p => {
                const isSelected = selectedPreMatchPlayerId === p.id;
                const isInjured = Boolean(p.injury);
                const isSuspended = Boolean(p.suspension && p.suspension.roundsLeft > 0);
                return `
                  <div class="bench-pre-card flex-shrink-0 bg-slate-900 border ${isSelected ? 'border-amber-400 bg-amber-500/20' : isInjured ? 'border-rose-900/80 bg-rose-950/20' : isSuspended ? 'border-amber-900/80 bg-amber-950/20' : 'border-slate-800'} p-2 rounded-xl text-center cursor-pointer active:scale-95 transition min-w-[76px]" data-player-id="${p.id}">
                    <div class="flex items-center justify-center gap-1">
                      <span class="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-slate-800 ${p.pos === 'DC' || p.pos === 'EI' || p.pos === 'ED' ? 'text-red-400' : p.pos === 'MC' || p.pos === 'MCD' || p.pos === 'MCO' ? 'text-amber-400' : p.pos === 'POR' ? 'text-purple-400' : 'text-sky-400'}">${p.pos}</span>
                      ${isInjured ? `<span class="text-[8px] px-1 py-0.2 rounded bg-rose-900/90 text-rose-200 font-bold border border-rose-500/50">🚑 ${p.injury.roundsLeft}j</span>` : ''}
                      ${isSuspended ? `<span class="text-[8px] px-1 py-0.2 rounded bg-amber-900/90 text-amber-200 font-bold border border-amber-500/50">🛑 ${p.suspension.roundsLeft}j</span>` : ''}
                    </div>
                    <div class="text-[10px] font-bold text-white truncate max-w-[70px] mt-1">${p.name.split(' ').slice(-1)[0]}</div>
                    <div class="text-xs font-black ${isInjured || isSuspended ? 'text-slate-500' : 'text-amber-400'} mt-0.5">${p.ovr}</div>
                    <div class="text-[9px] font-mono font-bold ${(p.energy || 100) >= 80 ? 'text-emerald-400' : (p.energy || 100) >= 65 ? 'text-amber-400' : 'text-rose-400'} mt-0.5">⚡${Math.round(p.energy !== undefined ? p.energy : 100)}%</div>
                    <div class="w-10 h-1 bg-slate-800 rounded-full mx-auto mt-0.5 overflow-hidden">
                      <div class="h-full ${(p.energy || 100) >= 80 ? 'bg-emerald-400' : (p.energy || 100) >= 65 ? 'bg-amber-400' : 'bg-red-500'}" style="width: ${p.energy || 100}%;"></div>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
          ` : `
            ${renderTacticalInstructionsPanel(tactics.instructions, 'pre')}
          `}

          <!-- MEJORA 4: Informe del Analista Rival (Scouting Táctico) -->
          <div class="px-3 mb-2">
            <div class="bg-slate-900/95 border border-sky-500/35 rounded-2xl p-3 shadow-md space-y-2">
              <div class="flex items-center justify-between border-b border-slate-800 pb-1.5">
                <span class="text-[10px] uppercase font-extrabold text-sky-400 flex items-center gap-1.5">
                  <span>🕵️</span> Informe del Analista · Scouting de ${opponentTeam.shortName}
                </span>
                <span class="text-[9px] px-2 py-0.5 rounded-full bg-slate-800 text-amber-300 font-bold border border-slate-700">
                  ${analystReport.styleTitle}
                </span>
              </div>
              <div class="grid grid-cols-1 gap-1.5 text-[10px]">
                <div class="flex items-start gap-1.5 bg-slate-950/70 p-2 rounded-xl border border-slate-800/80">
                  <span class="text-xs flex-shrink-0">⭐</span>
                  <div class="leading-snug text-slate-300">
                    <b class="text-amber-300">Amenaza Estrella:</b> <span class="text-white font-bold">${analystReport.starPlayer.name}</span> (${analystReport.starPlayer.pos} · Media ${analystReport.starPlayer.ovr}) — ${analystReport.styleDesc}
                  </div>
                </div>
                <div class="flex items-start gap-1.5 bg-slate-950/70 p-2 rounded-xl border border-slate-800/80">
                  <span class="text-xs flex-shrink-0">🎯</span>
                  <div class="leading-snug text-slate-300">
                    <b class="text-emerald-400">Punto Débil Detectado:</b> ${analystReport.weaknessText}
                  </div>
                </div>
              </div>
              <div class="flex items-center justify-between gap-2 pt-1">
                <div class="text-[9.5px] text-slate-400 truncate">
                  💡 Plan sugerido: <b class="text-sky-300">${analystReport.recPlan.label}</b>
                </div>
                <button type="button" id="btn-apply-analyst-plan" class="px-2.5 py-1.5 rounded-xl bg-sky-500/20 hover:bg-sky-500/30 border border-sky-400/60 text-sky-300 font-extrabold text-[10px] active:scale-95 transition whitespace-nowrap flex items-center gap-1 shadow-sm">
                  <span>⚡</span> Aplicar Plan del Analista
                </button>
              </div>
            </div>
          </div>

          <!-- MEJORA 1: Charla de Vestuario Pre-Partido -->
          <div class="px-3 mb-2">
            <div class="bg-slate-900/90 border border-amber-500/30 rounded-2xl p-2.5 shadow-md">
              <div class="flex items-center justify-between mb-1.5">
                <span class="text-[10px] uppercase font-extrabold text-amber-400 flex items-center gap-1">
                  <span>🗣️</span> Charla de Vestuario Pre-Partido
                </span>
                <span class="text-[9px] text-emerald-400 font-semibold">
                  ${PRE_MATCH_TALKS.find(t => t.id === selectedPreMatchTalk)?.desc || ''}
                </span>
              </div>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                ${PRE_MATCH_TALKS.map(t => {
                  const isSel = selectedPreMatchTalk === t.id;
                  return `
                    <button type="button" class="btn-pre-talk p-1.5 rounded-xl border text-left transition flex items-center gap-1.5 ${isSel ? 'bg-amber-500/20 border-amber-400 text-white shadow ring-1 ring-amber-400/60' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 active:scale-95'}" data-talk="${t.id}">
                      <span class="text-sm flex-shrink-0">${t.icon}</span>
                      <div class="min-w-0">
                        <div class="text-[10px] font-extrabold ${isSel ? 'text-amber-300' : 'text-white'} truncate leading-tight">${t.label}</div>
                        <div class="text-[8px] text-slate-400 truncate leading-tight">${t.desc}</div>
                      </div>
                    </button>
                  `;
                }).join('')}
              </div>
            </div>
          </div>

          <!-- Botón de Confirmación y Saltar al Campo con Guardado -->
          <footer class="px-3 space-y-2">
            <button id="btn-pre-save-tactics" class="w-full py-2.5 bg-slate-900 hover:bg-slate-800 active:scale-98 text-sky-400 hover:text-sky-300 border border-sky-500/40 hover:border-sky-400 font-bold text-xs rounded-xl transition flex items-center justify-center gap-2 shadow-sm">
              <span class="text-sm">💾</span>
              <span>Guardar formación y 11 para siguientes partidos</span>
            </button>
            <button id="btn-start-match-confirmed" class="w-full py-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 active:scale-98 text-white font-extrabold text-sm rounded-2xl shadow-xl shadow-emerald-500/25 transition-all flex items-center justify-center gap-2">
              <span>⚽ ¡CONFIRMAR 11 Y SALTAR AL CAMPO!</span>
              <span>➔</span>
            </button>
          </footer>
        ` : `
          <!-- VISTA DE ALINEACIÓN DEL RIVAL -->
          <div class="p-3 bg-slate-900/40 border-b border-slate-800 flex items-center justify-between text-xs">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded-lg bg-slate-800 border border-slate-700 text-amber-400 font-extrabold text-[11px] font-mono">
                ${oppData.formationKey}
              </span>
              <span class="text-xs font-bold text-white">${opponentTeam.name}</span>
            </div>
            <div class="text-[11px] text-slate-400">
              Media titular: <b class="text-amber-400">${oppAverages.overall}</b>
            </div>
          </div>

          <!-- Terreno de Juego Táctico Rival -->
          <div class="p-3 flex-1 flex flex-col justify-center">
            <div class="relative w-full aspect-[3/4] max-w-[340px] mx-auto bg-gradient-to-b from-emerald-900 via-emerald-800 to-emerald-950 rounded-2xl border-2 border-amber-500/40 shadow-inner overflow-hidden p-2">
              <div class="absolute inset-2 border-2 border-white/30 rounded-xl pointer-events-none"></div>
              <div class="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-12 border-b-2 border-x-2 border-white/30 pointer-events-none"></div>
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-white/30 rounded-full pointer-events-none"></div>
              <div class="absolute top-1/2 left-2 right-2 h-0.5 bg-white/30 -translate-y-1/2 pointer-events-none"></div>
              <div class="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-12 border-t-2 border-x-2 border-white/30 pointer-events-none"></div>

              <!-- Fichas de los 11 titulares del rival -->
              ${oppData.formation.slots.map((slot, index) => {
                const player = oppData.lineup[index];
                if (!player) return "";
                const effRating = calculateEffectiveRating(player, slot.pos);

                return `
                  <div class="slot-pre-opp-player absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none z-10"
                       style="left: ${slot.x}%; top: ${slot.y}%;">
                    <div class="w-9 h-9 rounded-full border-2 border-white/80 flex flex-col items-center justify-center relative shadow-md"
                         style="background: linear-gradient(135deg, ${opponentTeam.primaryColor}, ${opponentTeam.secondaryColor}); color: ${opponentTeam.textColor};">
                      <span class="text-[9px] font-black leading-none">${effRating}</span>
                      <span class="text-[7px] font-bold leading-none opacity-90">${slot.label}</span>
                      <div class="absolute -bottom-1 w-5 h-1 bg-black/60 rounded-full overflow-hidden">
                        <div class="h-full bg-emerald-400" style="width: ${player.energy || 100}%;"></div>
                      </div>
                    </div>
                    <div class="bg-black/80 px-1 py-0.5 rounded text-[8px] font-bold text-white tracking-tight mt-0.5 truncate max-w-[65px] text-center border border-white/10 shadow">
                      ${player.name.split(' ').slice(-1)[0]}
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <div class="px-4 text-center my-1">
            <p class="text-[11px] text-amber-400 font-semibold">
              🔍 Esta es la alineación confirmada del rival para el encuentro.
            </p>
          </div>

          <!-- MEJORA 4: Informe del Analista en la Pestaña del Rival -->
          <div class="px-3 mb-3">
            <div class="bg-slate-900/95 border border-amber-500/40 rounded-2xl p-3 shadow-md space-y-1.5 text-[10px]">
              <div class="font-extrabold text-amber-400 uppercase flex items-center justify-between">
                <span>🕵️ Análisis Táctico del Rival</span>
                <span class="text-sky-300">${analystReport.styleTitle}</span>
              </div>
              <p class="text-slate-300 leading-snug">⭐ <b class="text-white">Figura clave:</b> ${analystReport.starPlayer.name} (${analystReport.starPlayer.pos}, ${analystReport.starPlayer.ovr} OVR).</p>
              <p class="text-slate-300 leading-snug">🎯 <b class="text-emerald-400">Cómo hacerles daño:</b> ${analystReport.weaknessText}</p>
            </div>
          </div>

          <!-- Banquillo del Rival -->
          <div class="px-3 mb-3">
            <div class="text-[10px] uppercase font-bold text-slate-400 mb-1.5 flex items-center justify-between">
              <span>🪑 Suplentes del Rival (${oppData.bench.length})</span>
              <span class="text-slate-500 font-normal">Convocatoria rival</span>
            </div>
            <div class="flex gap-1.5 overflow-x-auto pb-2 no-scrollbar">
              ${oppData.bench.map(p => `
                <div class="flex-shrink-0 bg-slate-900 border border-slate-800 p-2 rounded-xl text-center min-w-[76px]">
                  <span class="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-slate-800 ${p.pos === 'DC' || p.pos === 'EI' || p.pos === 'ED' ? 'text-red-400' : p.pos === 'MC' || p.pos === 'MCD' || p.pos === 'MCO' ? 'text-amber-400' : p.pos === 'POR' ? 'text-purple-400' : 'text-sky-400'}">${p.pos}</span>
                  <div class="text-[10px] font-bold text-white truncate max-w-[70px] mt-1">${p.name.split(' ').slice(-1)[0]}</div>
                  <div class="text-xs font-black text-amber-400 mt-0.5">${p.ovr}</div>
                  <div class="text-[9px] font-mono font-bold ${(p.energy || 100) >= 80 ? 'text-emerald-400' : (p.energy || 100) >= 65 ? 'text-amber-400' : 'text-rose-400'} mt-0.5">⚡${Math.round(p.energy !== undefined ? p.energy : 100)}%</div>
                  <div class="w-10 h-1 bg-slate-800 rounded-full mx-auto mt-0.5 overflow-hidden">
                    <div class="h-full ${(p.energy || 100) >= 80 ? 'bg-emerald-400' : (p.energy || 100) >= 65 ? 'bg-amber-400' : 'bg-red-500'}" style="width: ${p.energy || 100}%;"></div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Botones desde la vista del rival -->
          <footer class="px-3 flex gap-2">
            <button id="btn-pre-to-user" class="flex-1 py-4 bg-slate-800 hover:bg-slate-700 active:scale-98 text-white font-bold text-xs rounded-2xl border border-slate-700 transition flex items-center justify-center gap-1.5">
              <span>👕 Modificar mi 11</span>
            </button>
            <button id="btn-start-match-from-rival" class="flex-1 py-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 active:scale-98 text-white font-extrabold text-xs rounded-2xl shadow-xl shadow-emerald-500/25 transition flex items-center justify-center gap-1.5">
              <span>⚽ ¡SALTAR AL CAMPO!</span>
              <span>➔</span>
            </button>
          </footer>
        `}
      </div>
    `;

    // Eventos Pre-Partido
    container.querySelector("#btn-pre-back")?.addEventListener("click", () => {
      SaveManager.saveGame(gameState);
      if (onBackToHub) onBackToHub();
    });

    container.querySelector("#tab-pre-user")?.addEventListener("click", () => {
      preMatchTab = "USER";
      renderPreMatch();
    });

    container.querySelector("#tab-pre-rival")?.addEventListener("click", () => {
      preMatchTab = "OPPONENT";
      renderPreMatch();
    });

    container.querySelector("#btn-matchup-user")?.addEventListener("click", () => {
      preMatchTab = "USER";
      renderPreMatch();
    });

    container.querySelector("#btn-matchup-rival")?.addEventListener("click", () => {
      preMatchTab = "OPPONENT";
      renderPreMatch();
    });

    container.querySelector("#btn-pre-to-user")?.addEventListener("click", () => {
      preMatchTab = "USER";
      renderPreMatch();
    });

    container.querySelector("#btn-start-match-from-rival")?.addEventListener("click", () => {
      const curInjured = lineupPlayers.filter(p => p.injury);
      if (curInjured.length > 0) {
        alert(`⚠️ No puedes comenzar el partido con jugadores lesionados en el once titular (${curInjured.map(p => p.name).join(', ')}).\n\nSustitúyelos por futbolistas disponibles del banquillo o pulsa '⚡ Sustituir'.`);
        return;
      }
      SaveManager.saveGame(gameState);
      startLiveSimulation();
    });

    const btnReplaceInjured = container.querySelector("#btn-pre-replace-injured");
    if (btnReplaceInjured) {
      btnReplaceInjured.onclick = () => {
        replaceInjuredStarters();
        renderPreMatch();
      };
    }

    const btnReplaceSuspended = container.querySelector("#btn-pre-replace-suspended");
    if (btnReplaceSuspended) {
      btnReplaceSuspended.onclick = () => {
        replaceInjuredStarters();
        renderPreMatch();
      };
    }

    const btnAuto = container.querySelector("#btn-pre-auto");
    if (btnAuto) {
      btnAuto.onclick = () => {
        autoAlignLineup();
        masterTacticsForNextMatches = JSON.parse(JSON.stringify(gameState.userTactics));
        SaveManager.saveGame(gameState);
        preMatchSaveFeedback = `¡Alineación automática generada y guardada para los siguientes partidos!`;
        renderPreMatch();
      };
    }

    container.querySelectorAll(".btn-pre-formation").forEach(b => {
      b.onclick = () => {
        tactics.formation = b.dataset.formation;
        masterTacticsForNextMatches = JSON.parse(JSON.stringify(gameState.userTactics));
        SaveManager.saveGame(gameState);
        renderPreMatch();
      };
    });

    container.querySelectorAll(".btn-pre-mentality").forEach(b => {
      b.onclick = () => {
        tactics.mentality = b.dataset.mentality;
        masterTacticsForNextMatches = JSON.parse(JSON.stringify(gameState.userTactics));
        SaveManager.saveGame(gameState);
        renderPreMatch();
      };
    });

    container.querySelectorAll(".btn-pre-talk").forEach(b => {
      b.onclick = () => {
        selectedPreMatchTalk = b.dataset.talk;
        renderPreMatch();
      };
    });

    // MEJORA 4: Botón para aplicar con 1 clic el Plan Táctico recomendado por el Analista
    const btnApplyAnalyst = container.querySelector("#btn-apply-analyst-plan");
    if (btnApplyAnalyst) {
      btnApplyAnalyst.onclick = () => {
        const plan = analystReport.recPlan;
        tactics.mentality = plan.mentality;
        if (!tactics.instructions) tactics.instructions = getDefaultTacticalInstructions();
        tactics.instructions.inPossession = {
          passingStyle: plan.passingStyle,
          tempo: plan.tempo,
          width: plan.width
        };
        tactics.instructions.inTransition = {
          loss: plan.transitionLoss,
          win: plan.transitionWin
        };
        tactics.instructions.outOfPossession = {
          defensiveLine: plan.defensiveLine,
          pressing: plan.pressing
        };
        tactics.instructions.preset = detectMatchingPreset(tactics.instructions);
        masterTacticsForNextMatches = JSON.parse(JSON.stringify(gameState.userTactics));
        SaveManager.saveGame(gameState);
        preMatchSaveFeedback = `🕵️ Plan del Analista aplicado: «${plan.label}»`;
        renderPreMatch();
      };
    }

    // Pestañas Mi 11 vs Estilos e Instrucciones
    const btnSubPitch = container.querySelector("#btn-pre-subtab-pitch");
    if (btnSubPitch) {
      btnSubPitch.onclick = () => {
        preMatchSubTab = "PITCH";
        renderPreMatch();
      };
    }
    const btnSubStyle = container.querySelector("#btn-pre-subtab-style");
    if (btnSubStyle) {
      btnSubStyle.onclick = () => {
        preMatchSubTab = "STYLE";
        renderPreMatch();
      };
    }
    if (preMatchSubTab === "STYLE") {
      bindTacticalInstructionsPanel(container, tactics.instructions, 'pre', () => {
        masterTacticsForNextMatches = JSON.parse(JSON.stringify(gameState.userTactics));
        SaveManager.saveGame(gameState);
        renderPreMatch();
      });
    }

    // Ajuste de posición libre pre-partido
    container.querySelectorAll(".btn-pre-nudge-pos").forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        if (!selectedPreMatchPlayerId) return;
        const selSlotIndex = tactics.lineup.indexOf(selectedPreMatchPlayerId);
        if (selSlotIndex === -1) return;
        const axis = btn.dataset.axis;
        const delta = parseInt(btn.dataset.delta, 10);
        const effSlot = getEffectiveSlotCoords(tactics.formation, selSlotIndex, tactics.customPositions);
        if (!tactics.customPositions) tactics.customPositions = {};
        const isGK = selSlotIndex === 0;

        if (axis === "x") {
          const newX = Math.max(isGK ? 38 : 10, Math.min(isGK ? 62 : 90, effSlot.x + delta));
          tactics.customPositions[selSlotIndex] = { x: newX, y: effSlot.y };
        } else {
          const newY = Math.max(isGK ? 82 : 12, Math.min(isGK ? 90 : 88, effSlot.y + delta));
          tactics.customPositions[selSlotIndex] = { x: effSlot.x, y: newY };
        }
        masterTacticsForNextMatches = JSON.parse(JSON.stringify(gameState.userTactics));
        SaveManager.saveGame(gameState);
        renderPreMatch();
      };
    });

    const btnPreResetPos = container.querySelector("#btn-pre-reset-pos");
    if (btnPreResetPos) {
      btnPreResetPos.onclick = (e) => {
        e.stopPropagation();
        if (!selectedPreMatchPlayerId) return;
        const selSlotIndex = tactics.lineup.indexOf(selectedPreMatchPlayerId);
        if (selSlotIndex !== -1 && tactics.customPositions) {
          delete tactics.customPositions[selSlotIndex];
          masterTacticsForNextMatches = JSON.parse(JSON.stringify(gameState.userTactics));
          SaveManager.saveGame(gameState);
          renderPreMatch();
        }
      };
    }

    // Sliders de Posición Fina Pre-Partido
    const sliderPreY = container.querySelector(".slider-pre-pos-y");
    if (sliderPreY) {
      sliderPreY.oninput = (e) => {
        if (!selectedPreMatchPlayerId) return;
        const selSlotIndex = tactics.lineup.indexOf(selectedPreMatchPlayerId);
        if (selSlotIndex === -1) return;
        const effSlot = getEffectiveSlotCoords(formationKey, selSlotIndex, tactics.customPositions);
        const val = parseInt(e.target.value, 10);
        if (!tactics.customPositions) tactics.customPositions = {};
        tactics.customPositions[selSlotIndex] = { x: effSlot.x, y: val };
        const slotEl = container.querySelector(`.slot-pre-player[data-slot-index="${selSlotIndex}"]`);
        if (slotEl) slotEl.style.top = `${val}%`;
      };
      sliderPreY.onchange = () => {
        masterTacticsForNextMatches = JSON.parse(JSON.stringify(gameState.userTactics));
        SaveManager.saveGame(gameState);
        renderPreMatch();
      };
    }

    const sliderPreX = container.querySelector(".slider-pre-pos-x");
    if (sliderPreX) {
      sliderPreX.oninput = (e) => {
        if (!selectedPreMatchPlayerId) return;
        const selSlotIndex = tactics.lineup.indexOf(selectedPreMatchPlayerId);
        if (selSlotIndex === -1) return;
        const effSlot = getEffectiveSlotCoords(formationKey, selSlotIndex, tactics.customPositions);
        const val = parseInt(e.target.value, 10);
        if (!tactics.customPositions) tactics.customPositions = {};
        tactics.customPositions[selSlotIndex] = { x: val, y: effSlot.y };
        const slotEl = container.querySelector(`.slot-pre-player[data-slot-index="${selSlotIndex}"]`);
        if (slotEl) slotEl.style.left = `${val}%`;
      };
      sliderPreX.onchange = () => {
        masterTacticsForNextMatches = JSON.parse(JSON.stringify(gameState.userTactics));
        SaveManager.saveGame(gameState);
        renderPreMatch();
      };
    }

    // Arrastre libre con el dedo o ratón directamente en la previa pre-partido (solo activo para el futbolista seleccionado)
    let preJustDragged = false;
    const prePitchBox = container.querySelector("#pre-match-pitch-container");
    if (prePitchBox && selectedPreMatchPlayerId) {
      const selectedSlotEl = prePitchBox.querySelector(`.slot-pre-player[data-player-id="${selectedPreMatchPlayerId}"]`);
      if (selectedSlotEl) {
        const slotIdx = parseInt(selectedSlotEl.dataset.slotIndex, 10);
        const pId = selectedPreMatchPlayerId;
        let dragMoved = false;
        let startX = 0, startY = 0;

        const onPointerDown = (e) => {
          if (e.button !== 0 && e.pointerType === "mouse") return;
          dragMoved = false;
          startX = e.clientX;
          startY = e.clientY;

          const onPointerMove = (me) => {
            const dist = Math.hypot(me.clientX - startX, me.clientY - startY);
            if (!dragMoved && dist > 5) {
              dragMoved = true;
            }
            if (dragMoved) {
              const rect = prePitchBox.getBoundingClientRect();
              let nx = ((me.clientX - rect.left) / rect.width) * 100;
              let ny = ((me.clientY - rect.top) / rect.height) * 100;
              const isGK = slotIdx === 0;
              nx = Math.max(isGK ? 38 : 10, Math.min(isGK ? 62 : 90, nx));
              ny = Math.max(isGK ? 82 : 12, Math.min(isGK ? 90 : 88, ny));
              selectedSlotEl.style.left = `${nx}%`;
              selectedSlotEl.style.top = `${ny}%`;
              selectedSlotEl.dataset.dragX = nx;
              selectedSlotEl.dataset.dragY = ny;
            }
          };

          const onPointerUp = () => {
            window.removeEventListener("pointermove", onPointerMove);
            window.removeEventListener("pointerup", onPointerUp);
            if (dragMoved) {
              preJustDragged = true;
              setTimeout(() => { preJustDragged = false; }, 200);
              const finalX = parseFloat(selectedSlotEl.dataset.dragX);
              const finalY = parseFloat(selectedSlotEl.dataset.dragY);
              if (!isNaN(finalX) && !isNaN(finalY)) {
                if (!tactics.customPositions) tactics.customPositions = {};
                tactics.customPositions[slotIdx] = { x: Math.round(finalX), y: Math.round(finalY) };
                selectedPreMatchPlayerId = pId;
                masterTacticsForNextMatches = JSON.parse(JSON.stringify(gameState.userTactics));
                SaveManager.saveGame(gameState);
                renderPreMatch();
              }
            }
          };

          window.addEventListener("pointermove", onPointerMove);
          window.addEventListener("pointerup", onPointerUp);
        };

        selectedSlotEl.addEventListener("pointerdown", onPointerDown);
      }

      prePitchBox.onclick = (e) => {
        if (preJustDragged) return;
        if (!e.target.closest(".slot-pre-player")) {
          if (selectedPreMatchPlayerId) {
            selectedPreMatchPlayerId = null;
            renderPreMatch();
          }
        }
      };
    }

    container.querySelectorAll(".slot-pre-player, .bench-pre-card").forEach(el => {
      el.onclick = () => {
        if (preJustDragged) return;
        handlePrePlayerTap(el.dataset.playerId);
      };
    });

    container.querySelectorAll(".btn-pre-assign-role").forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const pId = btn.dataset.playerId;
        const rId = btn.dataset.roleId;
        if (!tactics.playerRoles) tactics.playerRoles = {};
        tactics.playerRoles[pId] = rId;
        masterTacticsForNextMatches = JSON.parse(JSON.stringify(gameState.userTactics));
        SaveManager.saveGame(gameState);
        renderPreMatch();
      };
    });

    const btnPreCloseRole = container.querySelector("#btn-pre-close-role-box");
    if (btnPreCloseRole) {
      btnPreCloseRole.onclick = (e) => {
        e.stopPropagation();
        selectedPreMatchPlayerId = null;
        renderPreMatch();
      };
    }

    // Handlers de Marcaje al Hombre Pre-Partido
    const selectPreMark = container.querySelector("#select-pre-mark-target");
    if (selectPreMark) {
      selectPreMark.onchange = (e) => {
        const markerId = selectPreMark.dataset.markerId;
        const targetId = e.target.value;
        if (!tactics.manMarking) tactics.manMarking = {};
        if (!targetId) {
          delete tactics.manMarking[markerId];
        } else {
          tactics.manMarking[markerId] = {
            targetId,
            intensity: tactics.manMarking[markerId]?.intensity || "tight"
          };
        }
        masterTacticsForNextMatches = JSON.parse(JSON.stringify(gameState.userTactics));
        SaveManager.saveGame(gameState);
        renderPreMatch();
      };
    }

    container.querySelectorAll(".btn-pre-mark-intensity").forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const markerId = btn.dataset.markerId;
        const intensity = btn.dataset.intensity;
        if (!tactics.manMarking) tactics.manMarking = {};
        if (tactics.manMarking[markerId]) {
          tactics.manMarking[markerId].intensity = intensity;
        } else {
          // Si no había rival seleccionado todavía, buscar la estrella del rival
          const oppOutfield = oppData.lineup.filter(p => p.pos !== "POR");
          const oppStar = oppOutfield.slice().sort((a, b) => (b.ovr || 70) - (a.ovr || 70))[0];
          if (oppStar) {
            tactics.manMarking[markerId] = {
              targetId: oppStar.id,
              intensity
            };
          }
        }
        masterTacticsForNextMatches = JSON.parse(JSON.stringify(gameState.userTactics));
        SaveManager.saveGame(gameState);
        renderPreMatch();
      };
    });

    const btnClearMark = container.querySelector("#btn-pre-clear-mark");
    if (btnClearMark) {
      btnClearMark.onclick = (e) => {
        e.stopPropagation();
        if (selectedPreMatchPlayerId && tactics.manMarking) {
          delete tactics.manMarking[selectedPreMatchPlayerId];
          masterTacticsForNextMatches = JSON.parse(JSON.stringify(gameState.userTactics));
          SaveManager.saveGame(gameState);
          renderPreMatch();
        }
      };
    }

    const btnPreToggleAll = container.querySelector("#btn-pre-toggle-all-roles");
    if (btnPreToggleAll) {
      btnPreToggleAll.onclick = () => {
        showPreMatchAllRoles = !showPreMatchAllRoles;
        renderPreMatch();
      };
    }

    container.querySelectorAll(".select-pre-player-role").forEach(sel => {
      sel.onchange = (e) => {
        const pId = sel.dataset.playerId;
        const rId = e.target.value;
        if (!tactics.playerRoles) tactics.playerRoles = {};
        tactics.playerRoles[pId] = rId;
        masterTacticsForNextMatches = JSON.parse(JSON.stringify(gameState.userTactics));
        SaveManager.saveGame(gameState);
        renderPreMatch();
      };
    });

    const savePreTacticsAction = () => {
      masterTacticsForNextMatches = JSON.parse(JSON.stringify(gameState.userTactics));
      SaveManager.saveGame(gameState);
      preMatchSaveFeedback = `¡Plantilla (${tactics.formation}), alineación y funciones guardadas para futuros partidos!`;
      renderPreMatch();
    };

    const btnSaveTactics = container.querySelector("#btn-pre-save-tactics");
    if (btnSaveTactics) {
      btnSaveTactics.onclick = savePreTacticsAction;
    }

    const btnSaveHeader = container.querySelector("#btn-pre-save-header");
    if (btnSaveHeader) {
      btnSaveHeader.onclick = savePreTacticsAction;
    }

    const btnConfirm = container.querySelector("#btn-start-match-confirmed");
    if (btnConfirm) {
      btnConfirm.onclick = () => {
        const curInjured = lineupPlayers.filter(p => p.injury);
        if (curInjured.length > 0) {
          alert(`⚠️ No puedes comenzar el partido con jugadores lesionados en el once titular (${curInjured.map(p => p.name).join(', ')}).\n\nSustitúyelos por futbolistas disponibles del banquillo o pulsa '⚡ Sustituir'.`);
          return;
        }
        const curSuspended = lineupPlayers.filter(p => p.suspension && p.suspension.roundsLeft > 0);
        if (curSuspended.length > 0) {
          alert(`⚠️ No puedes comenzar el partido con jugadores sancionados en el once titular (${curSuspended.map(p => `${p.name} - ${p.suspension.reason}`).join(', ')}).\n\nSustitúyelos por futbolistas disponibles del banquillo o pulsa '⚡ Sustituir'.`);
          return;
        }
        masterTacticsForNextMatches = JSON.parse(JSON.stringify(gameState.userTactics));
        SaveManager.saveGame(gameState);
        startLiveSimulation();
      };
    }
  }

  function handlePrePlayerTap(tappedId) {
    const tactics = gameState.userTactics;
    if (!selectedPreMatchPlayerId) {
      selectedPreMatchPlayerId = tappedId;
      renderPreMatch();
      return;
    }

    if (selectedPreMatchPlayerId === tappedId) {
      selectedPreMatchPlayerId = null;
      renderPreMatch();
      return;
    }

    const inLineup1 = tactics.lineup.indexOf(selectedPreMatchPlayerId);
    const inBench1 = tactics.bench.indexOf(selectedPreMatchPlayerId);

    const inLineup2 = tactics.lineup.indexOf(tappedId);
    const inBench2 = tactics.bench.indexOf(tappedId);

    if (inLineup1 !== -1 && inBench2 !== -1) {
      const benchP = userTeam.players.find(p => p.id === tappedId);
      if (benchP && benchP.injury) {
        alert(`⚠️ ${benchP.name} está lesionado (${benchP.injury.type}) y no puede entrar como titular.`);
        return;
      }
      if (benchP && benchP.suspension && benchP.suspension.roundsLeft > 0) {
        alert(`🟥 ${benchP.name} está sancionado (${benchP.suspension.reason}) y no puede entrar como titular.`);
        return;
      }
      tactics.lineup[inLineup1] = tappedId;
      tactics.bench[inBench2] = selectedPreMatchPlayerId;
    } else if (inBench1 !== -1 && inLineup2 !== -1) {
      const benchP = userTeam.players.find(p => p.id === selectedPreMatchPlayerId);
      if (benchP && benchP.injury) {
        alert(`⚠️ ${benchP.name} está lesionado (${benchP.injury.type}) y no puede entrar como titular.`);
        return;
      }
      if (benchP && benchP.suspension && benchP.suspension.roundsLeft > 0) {
        alert(`🟥 ${benchP.name} está sancionado (${benchP.suspension.reason}) y no puede entrar como titular.`);
        return;
      }
      tactics.bench[inBench1] = tappedId;
      tactics.lineup[inLineup2] = selectedPreMatchPlayerId;
    } else if (inLineup1 !== -1 && inLineup2 !== -1) {
      const tmp = tactics.lineup[inLineup1];
      tactics.lineup[inLineup1] = tactics.lineup[inLineup2];
      tactics.lineup[inLineup2] = tmp;
    } else if (inBench1 !== -1 && inBench2 !== -1) {
      const tmp = tactics.bench[inBench1];
      tactics.bench[inBench1] = tactics.bench[inBench2];
      tactics.bench[inBench2] = tmp;
    }

    selectedPreMatchPlayerId = null;
    SaveManager.saveGame(gameState);
    renderPreMatch();
  }

  function replaceInjuredStarters() {
    const tactics = gameState.userTactics;
    const formation = FORMATIONS[tactics.formation] || FORMATIONS["4-3-3"];
    const healthyBench = tactics.bench
      .map(id => userTeam.players.find(p => p.id === id))
      .filter(p => p && !p.injury && !p.suspension)
      .sort((a, b) => (b.ovr || 70) - (a.ovr || 70));

    let replacedCount = 0;
    tactics.lineup.forEach((id, idx) => {
      const p = userTeam.players.find(x => x.id === id);
      if (p && (p.injury || (p.suspension && p.suspension.roundsLeft > 0))) {
        const slot = formation.slots[idx];
        let subIndex = healthyBench.findIndex(b => b.pos === slot.pos);
        if (subIndex === -1 && slot.pos !== "POR") {
          subIndex = healthyBench.findIndex(b => b.pos !== "POR");
        }
        if (subIndex === -1 && healthyBench.length > 0) subIndex = 0;

        if (subIndex !== -1 && healthyBench[subIndex]) {
          const replacement = healthyBench.splice(subIndex, 1)[0];
          const oldId = tactics.lineup[idx];
          tactics.lineup[idx] = replacement.id;
          const bIdx = tactics.bench.indexOf(replacement.id);
          if (bIdx !== -1) tactics.bench.splice(bIdx, 1);
          tactics.bench.push(oldId);
          replacedCount++;
        }
      }
    });

    if (replacedCount > 0) {
      SaveManager.saveGame(gameState);
      preMatchSaveFeedback = `¡Se han sustituido ${replacedCount} jugador(es) no disponibles por suplentes!`;
    }
  }

  function autoAlignLineup() {
    const tactics = gameState.userTactics;
    const formation = FORMATIONS[tactics.formation] || FORMATIONS["4-3-3"];
    // Ponderar media con condición física y descartar futbolistas de baja médica o sancionados
    const getMatchFitness = p => (p.ovr || 70) * (0.6 + ((p.energy !== undefined ? p.energy : 100) / 250));
    const availablePlayers = [...userTeam.players].filter(p => !p.injury && !p.suspension).sort((a, b) => getMatchFitness(b) - getMatchFitness(a));
    const used = new Set();
    const newLineup = [];

    const gk = availablePlayers.find(p => p.pos === "POR");
    if (gk) {
      newLineup[0] = gk.id;
      used.add(gk.id);
    }

    formation.slots.forEach((slot, idx) => {
      if (idx === 0) return;
      let best = availablePlayers.find(p => !used.has(p.id) && p.pos === slot.pos);
      if (!best) {
        best = availablePlayers.find(p => !used.has(p.id) && p.pos !== "POR");
      }
      if (!best) {
        best = availablePlayers.find(p => !used.has(p.id));
      }
      if (best) {
        newLineup[idx] = best.id;
        used.add(best.id);
      }
    });

    tactics.lineup = newLineup;
    tactics.bench = userTeam.players.filter(p => !used.has(p.id)).map(p => p.id);
    SaveManager.saveGame(gameState);
  }

  // ==========================================
  // FASE 2: SIMULACIÓN EN VIVO (PARTIDO)
  // ==========================================
  function startLiveSimulation() {
    // Guardar la configuración táctica oficial pre-partido para los siguientes partidos
    masterTacticsForNextMatches = JSON.parse(JSON.stringify(gameState.userTactics));
    SaveManager.saveGame(gameState);

    // Resolver equipaciones contrastadas oficiales para el partido
    const matchKits = resolveMatchKits(homeTeam, awayTeam);

    // Aplicar alineaciones oficiales de ambos equipos
    const oppLineupData = getOpponentLineup(opponentTeam);
    if (isUserHome) {
      sortTeamByTactics(homeTeam, gameState.userTactics);
      sortTeamByTactics(awayTeam, {
        lineup: oppLineupData.lineup.map(p => p.id),
        bench: oppLineupData.bench.map(p => p.id)
      });
    } else {
      sortTeamByTactics(awayTeam, gameState.userTactics);
      sortTeamByTactics(homeTeam, {
        lineup: oppLineupData.lineup.map(p => p.id),
        bench: oppLineupData.bench.map(p => p.id)
      });
    }

    const oppPresetKey = (opponentTeam.id === "real_madrid" || opponentTeam.id === "barcelona") ? "tiki_taka" : (opponentTeam.id === "atletico") ? "counter_attack" : (opponentTeam.id === "athletic" || opponentTeam.id === "osasuna") ? "direct_football" : "wing_play";
    const oppInstructions = TACTICAL_PRESETS[oppPresetKey] || getDefaultTacticalInstructions();
    let userShowHighlights = true;
    try {
      userShowHighlights = localStorage.getItem("match_show_highlights") !== "false";
    } catch(e) {}

    const oppLineupIds = oppLineupData.lineup.map(p => p.id);
    const oppBenchIds = oppLineupData.bench.map(p => p.id);

    const simulator = new MatchSimulator(homeTeam, awayTeam, {
      speed: 1, // Ritmo fluido Football Manager por defecto
      showKeyHighlights: userShowHighlights,
      userSide: isUserHome ? "home" : "away",
      preMatchTalk: selectedPreMatchTalk,
      weeklyTraining: gameState.weeklyTraining || "recovery",
      weather: matchWeather,
      homeFormation: isUserHome ? gameState.userTactics.formation : oppLineupData.formationKey,
      awayFormation: !isUserHome ? gameState.userTactics.formation : oppLineupData.formationKey,
      homeLineup: isUserHome ? gameState.userTactics.lineup : oppLineupIds,
      homeBench: isUserHome ? gameState.userTactics.bench : oppBenchIds,
      awayLineup: !isUserHome ? gameState.userTactics.lineup : oppLineupIds,
      awayBench: !isUserHome ? gameState.userTactics.bench : oppBenchIds,
      homeMentality: isUserHome ? gameState.userTactics.mentality : "balanced",
      awayMentality: !isUserHome ? gameState.userTactics.mentality : "balanced",
      homePlayerRoles: isUserHome ? (gameState.userTactics.playerRoles || {}) : {},
      awayPlayerRoles: !isUserHome ? (gameState.userTactics.playerRoles || {}) : {},
      homeCustomPositions: isUserHome ? (gameState.userTactics.customPositions || {}) : {},
      awayCustomPositions: !isUserHome ? (gameState.userTactics.customPositions || {}) : {},
      homeInstructions: isUserHome ? gameState.userTactics.instructions : oppInstructions,
      awayInstructions: !isUserHome ? gameState.userTactics.instructions : oppInstructions,
      homeManMarking: isUserHome ? (gameState.userTactics.manMarking || {}) : {},
      awayManMarking: !isUserHome ? (gameState.userTactics.manMarking || {}) : {},
      onTick: updateMatchUI,
      onAlert: showMatchAlert,
      onCommentary: (text, badge) => {
        if (!isKickoffInProgress) {
          updateFMCommentary(text, badge || "MATCH ENGINE", Boolean(currentHighlightData || simulator.activeReplay));
        }
      },
      onGoal: (goalData) => handleGoalSequence(goalData),
      onHalfTime: (htState) => handleHalfTimeSequence(htState),
      onSubstitution: (subData) => handleSubstitutionChyron(subData),
      onHighlightStart: (hlData) => handleHighlightStart(hlData),
      onHighlightPhase: (phaseData) => handleHighlightPhase(phaseData),
      onHighlightEnd: (endData) => handleHighlightEnd(endData),
      onSetPiece: (spInfo) => openSetPieceModal(spInfo),
      onInjury: (injData) => handleInjurySequence(injData),
      onAssistantAdvice: (advice) => handleAssistantAdvice(advice),
      onAssistantFeedback: (fb) => handleAssistantFeedback(fb),
      onFinish: handleLiveMatchEnd
    });

    let alertTimeout = null;
    let subSelectedPitchId = null;
    const pendingUserSubs = [];
    let subChyronTimeout = null;

    container.innerHTML = `
      <div class="min-h-screen bg-slate-950 text-white flex flex-col justify-between select-none max-w-md mx-auto">
        <!-- Marcador Superior -->
        <header class="bg-slate-900 border-b border-slate-800 p-3 sticky top-0 z-20 shadow-lg">
          <div class="flex items-center justify-between text-xs font-semibold text-slate-400 mb-2">
            <div class="flex items-center gap-2">
              <span>🏆 JORNADA ${gameState.currentRound} / 38</span>
              <span id="match-weather-badge" class="px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-[10px] font-bold text-sky-300" title="${matchWeather.pitchEffect}">
                ${matchWeather.shortBadge}
              </span>
            </div>
            <span id="match-timer" class="px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 font-mono font-bold animate-pulse">0'</span>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2 flex-1">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm shadow border border-slate-700/60" style="background: linear-gradient(135deg, ${homeTeam.primaryColor}, ${homeTeam.secondaryColor}); color: ${homeTeam.textColor};">
                ${homeTeam.shortName}
              </div>
              <div class="truncate">
                <h3 class="text-xs font-bold text-white truncate">${homeTeam.name}</h3>
                <span class="text-[9px] text-slate-400">Local</span>
              </div>
            </div>

            <div class="px-4 text-center">
              <div class="text-3xl font-black font-mono tracking-widest text-white flex items-center gap-2">
                <span id="home-score">0</span>
                <span class="text-slate-600 text-xl">-</span>
                <span id="away-score">0</span>
              </div>
            </div>

            <div class="flex items-center justify-end gap-2 flex-1 text-right">
              <div class="truncate">
                <h3 class="text-xs font-bold text-white truncate">${awayTeam.name}</h3>
                <span class="text-[9px] text-slate-400">Visitante</span>
              </div>
              <div class="w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm shadow border border-slate-700/60" style="background: linear-gradient(135deg, ${matchKits.away.jersey}, ${matchKits.away.shorts}); color: ${matchKits.away.number};">
                ${awayTeam.shortName}
              </div>
            </div>
          </div>
        </header>

        <!-- Estadio 3D del Terreno de Juego -->
        <div class="relative p-3 flex-1 flex flex-col justify-center items-center">
          <div id="match-alert-box" class="absolute top-6 left-4 right-4 z-30 transition-all duration-300 opacity-0 pointer-events-none transform -translate-y-2">
            <div id="match-alert-content" class="bg-slate-900/95 border-2 border-amber-400/80 shadow-2xl text-white px-4 py-2.5 rounded-2xl text-center text-xs font-extrabold flex items-center justify-center gap-2">
            </div>
          </div>

          <div id="match-viewport-wrapper" class="relative w-full aspect-[16/9] min-h-[310px] max-w-5xl mx-auto bg-slate-950 rounded-2xl border-2 border-slate-800 shadow-2xl overflow-hidden transition-all duration-300">
            <!-- Canvas 3D -->
            <canvas id="match-canvas" class="w-full h-full block cursor-pointer" title="Toca para cambiar de cámara"></canvas>

            <!-- Badge de Cámara 3D TV, Selector de Modo Jugadas Clave y Pantalla Completa Panorámica -->
            <div class="absolute top-2 right-2 flex items-center gap-1.5 z-20">
              <button id="btn-toggle-fullscreen" class="flex items-center gap-1 bg-slate-950/90 backdrop-blur-md px-2 py-1 rounded-lg border border-slate-700/80 text-[9px] font-bold shadow-lg text-slate-300 hover:text-white hover:border-slate-500 active:scale-95 transition cursor-pointer" title="Expandir a Pantalla Completa Panorámica">
                <span id="btn-fullscreen-icon">⛶</span>
                <span class="hidden sm:inline">16:9</span>
              </button>
              <button id="btn-toggle-hl-mode" class="flex items-center gap-1 bg-slate-950/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-amber-500/70 text-[9px] font-bold shadow-lg text-amber-400 active:scale-95 transition cursor-pointer" title="Elegir ver o pasar automáticamente las jugadas clave">
                <span id="btn-toggle-hl-icon">🎬</span>
                <span id="btn-toggle-hl-text">Jugadas: VER</span>
              </button>
              <div id="camera-mode-badge" class="flex items-center bg-slate-950/85 backdrop-blur-md px-2 py-1 rounded-lg border border-emerald-500/50 text-[9px] font-bold shadow-lg text-emerald-400 pointer-events-none">
                <span>🎥 3D TV</span>
              </div>
            </div>

            <!-- Banner de Replay (Repetición) -->
            <div id="replay-badge" class="absolute top-2 left-2 flex items-center gap-1.5 px-2.5 py-1 bg-red-600/95 text-white font-mono font-black text-[10px] rounded-lg shadow-lg uppercase tracking-wider hidden animate-pulse z-20">
              <span class="w-2 h-2 rounded-full bg-white animate-ping"></span>
              <span id="replay-badge-text">📹 REPETICIÓN</span>
            </div>

            <!-- HUD de Cámara de Acción y Táctica FM26 -->
            <div id="highlight-action-hud" class="absolute top-2 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-20 transition-all duration-300 opacity-0 -translate-y-2 max-w-[90%]">
              <div class="flex items-center gap-1.5 bg-slate-950/95 backdrop-blur-md px-3 py-1 rounded-full border border-amber-400 shadow-2xl">
                <span class="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                <span id="hl-hud-title" class="text-[9.5px] font-black uppercase text-amber-400 tracking-wider font-mono">🎥 JUGADA CLAVE</span>
                <button id="btn-skip-highlight" class="pointer-events-auto ml-1.5 px-2.5 py-0.5 rounded-full bg-amber-400 hover:bg-amber-300 active:scale-90 text-slate-950 font-black text-[9px] shadow transition flex items-center gap-1 cursor-pointer" title="Pasar / saltar la visualización de esta jugada">
                  <span>⏭ Saltar</span>
                </button>
              </div>
              <div id="hl-hud-subtitle" class="mt-1 text-[10.5px] font-bold text-white bg-slate-900/90 px-3 py-0.5 rounded-xl border border-slate-700/80 shadow text-center truncate">
                Construcción de la jugada
              </div>
            </div>

            <!-- Barra de Retransmisión y Comentarios FM (Estilo Oficial Football Manager - Como en la foto) -->
            <div id="fm-broadcast-ticker" class="absolute bottom-2.5 left-3 right-3 flex items-center bg-[#54121d]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-rose-500/40 shadow-2xl z-20 transition-all duration-300 pointer-events-none">
              <div id="fm-ticker-badge" class="px-2 py-0.5 rounded-full bg-rose-600 text-white font-mono font-black text-[8.5px] uppercase tracking-wider shadow mr-2.5 flex-shrink-0 flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                <span id="fm-ticker-badge-text">MATCH ENGINE</span>
              </div>
              <div id="fm-ticker-text" class="text-[11px] font-semibold text-rose-100 truncate flex-1">
                Comienza el encuentro en el estadio...
              </div>
            </div>

            <!-- Toast de Análisis Táctico FM26 (Vinculado internamente) -->
            <div id="tactical-analysis-toast" class="hidden">
              <div id="tactical-analysis-icon"></div>
              <div id="tactical-analysis-text"></div>
            </div>

            <!-- Widget Flotante del Cuerpo Técnico / Segundo Entrenador (Live Coaching Staff FM) -->
            <div id="live-assistant-card" class="absolute bottom-14 right-2 sm:right-3 max-w-[340px] sm:max-w-[360px] w-full bg-slate-950/95 backdrop-blur-md border border-amber-500/80 rounded-2xl p-3 shadow-2xl z-30 transition-all duration-300 opacity-0 translate-y-4 pointer-events-none ring-1 ring-amber-400/30">
              <div class="flex items-start justify-between gap-2 mb-1.5">
                <div class="flex items-center gap-2">
                  <div class="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white text-base font-black shadow border border-amber-300/50 flex-shrink-0">
                    👔
                  </div>
                  <div>
                    <div class="flex items-center gap-1.5">
                      <span id="ast-coach-name" class="text-[11px] font-black text-white tracking-tight">Segundo Entrenador</span>
                      <span id="ast-urgency-badge" class="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 text-[8.5px] font-extrabold uppercase tracking-wider border border-amber-500/40">CONSEJO TÁCTICO</span>
                    </div>
                    <div class="flex items-center gap-1 text-[9px] text-amber-300 font-semibold">
                      <span>⏸ Partido pausado · Decisión táctica</span>
                    </div>
                  </div>
                </div>
                <button id="btn-ast-close" class="text-slate-400 hover:text-white text-xs p-1 rounded-lg transition cursor-pointer" title="Cerrar consejo">✕</button>
              </div>

              <!-- Diagnóstico -->
              <div class="bg-slate-900/90 border border-slate-800 rounded-xl p-2 mb-2 text-slate-200">
                <div class="text-[9px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1 mb-0.5">
                  <span>🔍 Diagnóstico en vivo</span>
                </div>
                <p id="ast-diagnosis" class="text-[10.5px] text-slate-300 leading-snug font-medium">
                  El rival nos está ganando la espalda con envíos largos.
                </p>
              </div>

              <!-- Recomendación -->
              <div class="bg-amber-950/40 border border-amber-500/40 rounded-xl p-2 mb-2.5">
                <div class="text-[9px] font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1 mb-0.5">
                  <span>💡 Propuesta del cuerpo técnico</span>
                </div>
                <p id="ast-recommendation" class="text-[11px] text-amber-100 font-bold leading-tight">
                  Bajar bloque defensivo a 'Bajo' y repliegue rápido.
                </p>
              </div>

              <!-- Botones de acción directa -->
              <div class="flex items-center gap-2">
                <button id="btn-ast-apply" class="flex-1 py-1.5 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 active:scale-95 text-white font-extrabold text-[11px] shadow-lg transition flex items-center justify-center gap-1.5 cursor-pointer border border-emerald-400/40">
                  <span>⚡ Aplicar ajuste</span>
                </button>
                <button id="btn-ast-ignore" class="py-1.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-300 font-bold text-[11px] border border-slate-700 transition cursor-pointer">
                  <span>Ignorar</span>
                </button>
              </div>
            </div>

            <!-- Notificación de Feedback del Segundo Entrenador tras 10 min -->
            <div id="live-assistant-feedback" class="absolute top-12 left-1/2 -translate-x-1/2 max-w-[360px] sm:max-w-[420px] w-full bg-slate-950/95 backdrop-blur-md border border-emerald-500/60 rounded-2xl p-2.5 shadow-2xl z-30 transition-all duration-300 opacity-0 -translate-y-4 pointer-events-none flex items-center gap-2.5">
              <div id="ast-feedback-icon" class="w-8 h-8 rounded-xl flex items-center justify-center text-lg flex-shrink-0 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                ✅
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-center justify-between">
                  <span class="text-[9.5px] font-black text-amber-400 uppercase tracking-wider">SEGUNDO ENTRENADOR · FEEDBACK</span>
                  <span id="ast-feedback-minute" class="text-[9px] text-slate-400 font-mono font-bold">58'</span>
                </div>
                <p id="ast-feedback-text" class="text-[10.5px] text-slate-200 font-medium leading-snug">
                  Míster, subir la presión ha surtido efecto, hemos recuperado el control.
                </p>
              </div>
            </div>

            <!-- Banner de Saque de Centro -->
            <div id="kickoff-badge" class="absolute top-10 right-2 flex items-center gap-1.5 px-2.5 py-1 bg-sky-600/90 text-white font-mono font-bold text-[10px] rounded-lg shadow-lg hidden z-20">
              <span>⏱️ Saque de Centro</span>
            </div>

            <!-- Overlay Cinematográfico de Golazo -->
            <div id="goal-cinematic" class="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center p-4 text-center z-30 transition-all duration-300 opacity-0 pointer-events-none transform scale-95">
              <div class="inline-block px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-[10px] tracking-widest uppercase mb-2 shadow-lg animate-bounce">
                ¡GOOOOOOOOL!
              </div>
              <h2 id="goal-scorer-name" class="text-xl font-black text-white uppercase tracking-tight drop-shadow-md">
                JUGADOR
              </h2>
              <div id="goal-score-display" class="text-3xl font-black font-mono text-amber-400 my-1 drop-shadow-lg">
                1 - 0
              </div>
              <p id="goal-minute-display" class="text-xs text-slate-300 font-semibold mb-3">Minuto 34'</p>
              <div class="flex items-center gap-2">
                <span class="text-[10px] text-slate-400 bg-slate-800/80 px-2 py-1 rounded-lg border border-slate-700">
                  Saque de centro...
                </span>
              </div>
            </div>

            <!-- Rótulo Televisivo Oficial de Sustituciones (TV Broadcast Chyron) -->
            <div id="sub-cinematic" class="absolute inset-0 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center p-3 text-center z-30 transition-all duration-300 opacity-0 pointer-events-none transform scale-95">
              <div id="sub-team-header" class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/95 text-white font-black text-[10px] tracking-wider uppercase mb-2 border border-slate-700 shadow-lg">
                <span id="sub-team-dot" class="w-2.5 h-2.5 rounded-full inline-block"></span>
                <span id="sub-team-title">CAMBIO EN EQUIPO</span>
                <span id="sub-minute-badge" class="px-1.5 py-0.5 rounded bg-black/60 text-amber-400 font-mono font-bold">65'</span>
              </div>

              <!-- Lista de parejas de sustituciones -->
              <div id="sub-players-container" class="w-full max-w-[320px] space-y-1.5 my-1">
              </div>

              <div class="mt-2.5 flex items-center justify-center gap-3">
                <span id="sub-remaining-text" class="text-[9px] text-slate-400 font-semibold">4 cambios restantes</span>
                <button id="btn-sub-skip" class="text-[9px] bg-slate-800/90 hover:bg-slate-700 text-sky-400 px-2.5 py-1 rounded-lg border border-slate-700 font-bold active:scale-95 transition">
                  Continuar ▶
                </button>
              </div>
            </div>

            <!-- Indicadores inferiores de equipación -->
            <div class="absolute bottom-2 left-2 right-2 flex justify-between items-center px-2 py-1 bg-black/60 backdrop-blur-sm rounded-lg text-[9px] text-slate-300 z-10">
              <div class="flex items-center gap-1.5">
                <span class="w-2.5 h-2.5 rounded-full inline-block" style="background-color: ${homeTeam.primaryColor};"></span>
                <span>${homeTeam.shortName}</span>
              </div>
              <div class="flex items-center gap-1 text-amber-400 font-bold">
                <span>⚽ Balón 3D</span>
              </div>
              <div class="flex items-center gap-1.5">
                <span class="w-2.5 h-2.5 rounded-full inline-block" style="background-color: ${matchKits.away.jersey};"></span>
                <span>${awayTeam.shortName}</span>
              </div>
            </div>
          </div>

          <!-- Estadísticas en Vivo -->
          <div class="w-full mt-3 bg-slate-900/80 border border-slate-800 rounded-2xl p-3">
            <div class="mb-2.5">
              <div class="flex justify-between text-[11px] font-bold text-slate-300 mb-1">
                <span><span id="stat-poss-h">50</span>% Posesión</span>
                <span><span id="stat-poss-a">50</span>%</span>
              </div>
              <div class="w-full h-2 bg-slate-800 rounded-full overflow-hidden flex">
                <div id="bar-poss-h" class="h-full transition-all duration-300" style="width: 50%; background-color: ${homeTeam.primaryColor};"></div>
                <div id="bar-poss-a" class="h-full transition-all duration-300" style="width: 50%; background-color: ${matchKits.away.jersey};"></div>
              </div>
            </div>

            <div class="grid grid-cols-4 gap-2 text-center text-xs">
              <div class="p-1.5 rounded-xl bg-slate-950/60 border border-slate-800/60">
                <div class="text-[9px] text-slate-400 font-semibold uppercase">Tiros</div>
                <div class="font-bold text-white"><span id="stat-shots-h">0</span> - <span id="stat-shots-a">0</span></div>
              </div>
              <div class="p-1.5 rounded-xl bg-slate-950/60 border border-slate-800/60">
                <div class="text-[9px] text-slate-400 font-semibold uppercase">A Puerta</div>
                <div class="font-bold text-emerald-400"><span id="stat-ontarget-h">0</span> - <span id="stat-ontarget-a">0</span></div>
              </div>
              <div class="p-1.5 rounded-xl bg-slate-950/60 border border-slate-800/60">
                <div class="text-[9px] text-slate-400 font-semibold uppercase">Córners</div>
                <div class="font-bold text-sky-400"><span id="stat-corners-h">0</span> - <span id="stat-corners-a">0</span></div>
              </div>
              <div class="p-1.5 rounded-xl bg-slate-950/60 border border-slate-800/60">
                <div class="text-[9px] text-slate-400 font-semibold uppercase">Faltas</div>
                <div class="font-bold text-amber-400"><span id="stat-fouls-h">0</span> - <span id="stat-fouls-a">0</span></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Controles Inferiores de Gestión en Directo -->
        <footer class="p-3 bg-slate-900 border-t border-slate-800 flex flex-col gap-2">
          <!-- Barra de Gritos desde la Banda (Mejora 2) y Estado de Charla / Orden Activa -->
          <div class="bg-slate-950/90 border border-slate-800 rounded-xl p-2 flex flex-col gap-1.5">
            <div class="flex items-center justify-between px-0.5">
              <span class="text-[9px] font-black uppercase tracking-wider text-amber-400 flex items-center gap-1">
                <span>📣 Gritos desde la Banda</span>
              </span>
              <span id="active-boost-badge" class="text-[9px] font-bold px-2 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-slate-400 truncate max-w-[195px]">
                Sin orden activa
              </span>
            </div>
            <div id="shouts-bar" class="grid grid-cols-4 gap-1.5">
              <button class="btn-touchline-shout py-1.5 px-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-[9px] font-extrabold text-slate-200 flex flex-col items-center justify-center gap-0.5 active:scale-95 transition" data-shout="CROSS_BOX" title="Mayor frecuencia de centros al área (+remate aéreo)">
                <span class="text-xs leading-none">📢</span>
                <span class="leading-tight truncate w-full text-center">Colgad balones</span>
              </button>
              <button class="btn-touchline-shout py-1.5 px-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-[9px] font-extrabold text-slate-200 flex flex-col items-center justify-center gap-0.5 active:scale-95 transition" data-shout="SHOOT_ON_SIGHT" title="Probar disparo desde cualquier posición (+tiros)">
                <span class="text-xs leading-none">🚀</span>
                <span class="leading-tight truncate w-full text-center">Tirad a puerta</span>
              </button>
              <button class="btn-touchline-shout py-1.5 px-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-[9px] font-extrabold text-slate-200 flex flex-col items-center justify-center gap-0.5 active:scale-95 transition" data-shout="EASY_TACKLES" title="Frenar agresividad defensiva (-faltas y -tarjetas)">
                <span class="text-xs leading-none">🛡️</span>
                <span class="leading-tight truncate w-full text-center">Cuidado entradas</span>
              </button>
              <button class="btn-touchline-shout py-1.5 px-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-[9px] font-extrabold text-slate-200 flex flex-col items-center justify-center gap-0.5 active:scale-95 transition" data-shout="WASTE_TIME" title="Posesión larga, enfriar el partido y ahorrar piernas">
                <span class="text-xs leading-none">⏱️</span>
                <span class="leading-tight truncate w-full text-center">Dormid el balón</span>
              </button>
            </div>
            ${isUserHome ? `
              <div class="mt-1 pt-1.5 border-t border-slate-800/80 flex items-center gap-1.5">
                <button id="btn-rally-crowd" class="flex-1 py-1.5 px-2 rounded-xl bg-slate-900 border border-slate-700/80 text-[9.5px] font-extrabold text-slate-300 flex items-center justify-between gap-1.5 active:scale-95 transition disabled:opacity-40 disabled:cursor-not-allowed shadow-sm" title="Pide al estadio que empuje al equipo para remontar (Disponible si empatas o pierdes de local tras jugada clave o cada 15 min)">
                  <div class="flex items-center gap-1.5 min-w-0">
                    <span class="text-sm">🏟️</span>
                    <span id="btn-rally-crowd-text" class="truncate font-bold">¡Pedir aliento a la afición!</span>
                  </div>
                  <span id="btn-rally-crowd-badge" class="px-1.5 py-0.5 rounded-full bg-slate-800 text-[8px] font-black uppercase text-slate-400 flex-shrink-0">
                    +4% Empuje
                  </span>
                </button>
              </div>
            ` : ''}
          </div>

          <div class="flex items-center justify-between gap-2">
            <button id="btn-play-pause" class="flex-1 py-2.5 bg-slate-800 hover:bg-slate-700 active:scale-95 text-white font-bold text-xs rounded-xl border border-slate-700 flex items-center justify-center gap-1.5 transition">
              <span id="play-pause-icon">⏸</span> <span id="play-pause-text">Pausar</span>
            </button>

            <div class="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-bold">
              <button class="btn-speed px-2.5 py-1 rounded-lg bg-sky-500 text-white shadow font-extrabold" data-speed="1">⚡ 1x</button>
              <button class="btn-speed px-2.5 py-1 rounded-lg text-slate-400 hover:text-white" data-speed="2">🚀 2x</button>
              <button class="btn-speed px-2.5 py-1 rounded-lg text-slate-400 hover:text-white" data-speed="4">⚡⚡ 4x</button>
            </div>

            <button id="btn-skip-end" class="py-2.5 px-3 bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-300 font-bold text-xs rounded-xl border border-slate-700 transition">
              ⏩ Final
            </button>
          </div>

          <div class="flex items-center gap-2">
            <button id="btn-subs" class="flex-1 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 active:scale-98 text-white font-extrabold text-xs rounded-xl shadow-lg flex items-center justify-center gap-2">
              <span>📋 TÁCTICA Y CAMBIOS</span>
              <span id="subs-count-badge" class="px-2 py-0.5 rounded-full bg-black/40 text-[10px] font-mono">5 rest. (3 vent.)</span>
            </button>

            <button id="btn-cycle-mentality" class="py-3 px-3 bg-slate-800 hover:bg-slate-700 active:scale-98 text-sky-400 font-bold text-xs rounded-xl border border-slate-700 whitespace-nowrap">
              🎯 <span id="mentality-label">${MENTALITIES.find(m => m.id === gameState.userTactics.mentality)?.label || 'Equilibrada'}</span>
            </button>
          </div>
        </footer>

        <!-- Modal de Alerta Médica por Lesión en Vivo -->
        <div id="modal-injury-alert" class="fixed inset-0 bg-black/85 backdrop-blur-md z-50 hidden flex flex-col justify-center p-4">
          <div class="bg-slate-900 border-2 border-rose-500/80 rounded-3xl p-5 max-w-sm mx-auto w-full shadow-2xl text-center">
            <div class="w-14 h-14 mx-auto rounded-full bg-rose-500/20 border-2 border-rose-500/60 flex items-center justify-center text-3xl mb-3 animate-bounce">
              🚑
            </div>
            <span class="inline-block px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 font-extrabold text-[11px] tracking-wider uppercase mb-2 border border-rose-500/40">
              PARTE MÉDICO EN DIRECTO
            </span>
            <h3 id="injury-modal-title" class="text-base font-black text-white leading-tight mb-1">¡Lesión en el terreno de juego!</h3>
            <p id="injury-modal-desc" class="text-xs text-rose-300 font-medium mb-3"></p>
            <div id="injury-modal-detail" class="bg-slate-950 p-3 rounded-2xl border border-slate-800 text-left text-xs mb-4 space-y-1"></div>
            <button id="btn-injury-sub-now" class="w-full py-3 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 text-white font-extrabold text-sm rounded-xl shadow-lg shadow-rose-600/30 transition active:scale-98 flex items-center justify-center gap-2">
              <span>🔄 Realizar cambio por lesión</span>
            </button>
          </div>
        </div>

        <!-- Modal de Sustituciones en Vivo -->
        <div id="modal-live-subs" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 hidden flex flex-col justify-end">
          <div class="bg-slate-900 border-t border-slate-700 rounded-t-3xl p-4 max-h-[85vh] flex flex-col">
            <div class="flex justify-between items-center mb-3">
              <div>
                <h3 class="font-extrabold text-sm text-white">Sustituciones en Vivo</h3>
                <p class="text-[10px] text-slate-400">Toca el jugador que sale y luego el que entra</p>
              </div>
              <button id="btn-close-subs" class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 font-bold">✕</button>
            </div>
            <div class="overflow-y-auto space-y-3 flex-1 pr-1">
              <div>
                <div class="text-[10px] uppercase font-bold text-slate-400 mb-1.5">En el Campo (Toca para retirar):</div>
                <div class="space-y-1" id="sub-pitch-list"></div>
              </div>
              <div>
                <div class="text-[10px] uppercase font-bold text-slate-400 mb-1.5">En el Banquillo (Toca para que ingrese):</div>
                <div class="space-y-1" id="sub-bench-list"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Modal de Descanso (Pausa en el min 45 para cambios y táctica) -->
        <div id="modal-halftime" class="fixed inset-0 bg-black/85 backdrop-blur-md z-50 hidden flex flex-col justify-center p-4">
          <div class="bg-slate-900 border-2 border-sky-500/50 rounded-3xl p-5 max-w-sm mx-auto w-full shadow-2xl text-center">
            <div id="ht-modal-badge" class="inline-block px-3 py-1 rounded-full bg-sky-500/20 text-sky-400 font-extrabold text-[11px] tracking-wider uppercase mb-2 border border-sky-400/40">
              ⏸️ DESCANSO (45')
            </div>
            
            <div class="flex items-center justify-between my-3 px-2">
              <div class="w-11 h-11 rounded-xl flex items-center justify-center font-black text-sm shadow border border-slate-700" style="background: linear-gradient(135deg, ${homeTeam.primaryColor}, ${homeTeam.secondaryColor}); color: ${homeTeam.textColor};">
                ${homeTeam.shortName}
              </div>
              <div class="text-3xl font-black font-mono tracking-widest text-white">
                <span id="ht-home-score">0</span>
                <span class="text-slate-600 text-xl">-</span>
                <span id="ht-away-score">0</span>
              </div>
              <div class="w-11 h-11 rounded-xl flex items-center justify-center font-black text-sm shadow border border-slate-700" style="background: linear-gradient(135deg, ${matchKits.away.jersey}, ${matchKits.away.shorts}); color: ${matchKits.away.number};">
                ${awayTeam.shortName}
              </div>
            </div>

            <!-- Resumen Estadístico del 1er Tiempo -->
            <div class="bg-slate-950/70 rounded-2xl p-3 border border-slate-800 text-xs my-2.5 space-y-2">
              <div>
                <div class="flex justify-between text-[10px] font-bold text-slate-400 mb-1">
                  <span><span id="ht-stat-poss-h">50</span>% Posesión</span>
                  <span><span id="ht-stat-poss-a">50</span>%</span>
                </div>
                <div class="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden flex">
                  <div id="ht-bar-poss-h" class="h-full" style="width: 50%; background-color: ${homeTeam.primaryColor};"></div>
                  <div id="ht-bar-poss-a" class="h-full" style="width: 50%; background-color: ${matchKits.away.jersey};"></div>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-2 text-center text-[11px] pt-1">
                <div class="p-1 rounded-lg bg-slate-900 border border-slate-800">
                  <span class="text-slate-400 text-[9px] block uppercase">Tiros</span>
                  <b class="text-white"><span id="ht-shots-h">0</span> - <span id="ht-shots-a">0</span></b>
                </div>
                <div class="p-1 rounded-lg bg-slate-900 border border-slate-800">
                  <span class="text-slate-400 text-[9px] block uppercase">A Puerta</span>
                  <b class="text-emerald-400"><span id="ht-ontarget-h">0</span> - <span id="ht-ontarget-a">0</span></b>
                </div>
              </div>
              <div id="ht-mvp-preview" class="pt-1 border-t border-slate-800/80 text-[10px] text-amber-300 font-bold flex items-center justify-between px-1"></div>
            </div>

            <!-- Charla de Vestuario en el Descanso (Mejora 1) -->
            <div class="bg-slate-950/90 rounded-2xl p-2.5 border border-amber-500/30 text-left my-2.5">
              <div class="flex items-center justify-between mb-1.5">
                <span class="text-[10px] font-black uppercase tracking-wider text-amber-400">🗣️ Charla de Descanso</span>
                <span class="text-[9px] text-slate-400 font-semibold">Efecto 45' - 68'</span>
              </div>
              <div class="grid grid-cols-2 gap-1.5">
                <button class="btn-ht-talk p-2 rounded-xl border border-slate-800 bg-slate-900 hover:border-rose-500/50 text-left transition active:scale-95" data-talk="aggressive">
                  <div class="text-[10px] font-extrabold text-rose-400">😡 Bronca / Exigir</div>
                  <div class="text-[8.5px] text-slate-400 leading-tight mt-0.5">Ideal si vas perdiendo o empatando</div>
                </button>
                <button class="btn-ht-talk p-2 rounded-xl border border-slate-800 bg-slate-900 hover:border-amber-500/50 text-left transition active:scale-95" data-talk="encourage">
                  <div class="text-[10px] font-extrabold text-amber-300">🔥 ¡Creer en Ganar!</div>
                  <div class="text-[8.5px] text-slate-400 leading-tight mt-0.5">Empuje ofensivo y moral al ataque</div>
                </button>
                <button class="btn-ht-talk p-2 rounded-xl border border-slate-800 bg-slate-900 hover:border-emerald-500/50 text-left transition active:scale-95" data-talk="praise">
                  <div class="text-[10px] font-extrabold text-emerald-400">👏 Elogiar Trabajo</div>
                  <div class="text-[8.5px] text-slate-400 leading-tight mt-0.5">Refuerza notas si vas ganando</div>
                </button>
                <button class="btn-ht-talk p-2 rounded-xl border border-slate-800 bg-slate-900 hover:border-sky-500/50 text-left transition active:scale-95" data-talk="calm_control">
                  <div class="text-[10px] font-extrabold text-sky-300">🧊 Cerrar Espacios</div>
                  <div class="text-[8.5px] text-slate-400 leading-tight mt-0.5">+Solidez atrás y -tarjetas</div>
                </button>
              </div>
              <div id="ht-talk-feedback" class="hidden mt-1.5 text-[9.5px] font-bold text-emerald-300 bg-emerald-950/50 border border-emerald-500/30 rounded-lg px-2 py-1 text-center"></div>
            </div>

            <div class="space-y-2 mt-3">
              <button id="btn-ht-subs" class="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 text-white font-extrabold text-xs rounded-xl shadow-lg active:scale-98 transition flex items-center justify-center gap-2">
                <span>🔄 HACER CAMBIOS O AJUSTES</span>
                <span id="ht-subs-badge" class="px-2 py-0.5 rounded-full bg-black/40 text-[10px] font-mono">5 rest.</span>
              </button>

              <button id="btn-ht-continue" class="w-full py-3.5 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 text-white font-extrabold text-xs rounded-xl shadow-lg active:scale-98 transition flex items-center justify-center gap-1.5">
                <span>▶ REANUDAR 2ª PARTE</span>
                <span>➔</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Modal Táctico de Balón Parado (Pizarra de Córners y Faltas Peligrosas) -->
        <div id="modal-setpiece" class="fixed inset-0 bg-slate-950/95 backdrop-blur-md z-50 hidden flex flex-col justify-between overflow-y-auto">
          <div class="max-w-md w-full mx-auto flex flex-col min-h-screen text-white select-none pb-4">
            <!-- Header Balón Parado -->
            <header class="bg-slate-900 border-b border-slate-800 px-4 py-3 sticky top-0 z-20 shadow-md flex items-center justify-between">
              <div>
                <span id="setpiece-badge-type" class="text-[10px] uppercase font-black text-amber-400 bg-amber-400/10 border border-amber-400/30 px-2 py-0.5 rounded-full">🚩 CÓRNER A FAVOR</span>
                <h2 id="setpiece-title" class="text-sm font-extrabold text-white leading-tight mt-0.5">Pizarra de Balón Parado</h2>
              </div>
              <button id="btn-setpiece-auto" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-[10px] font-bold text-sky-400 active:scale-95 transition">
                ⚡ Auto
              </button>
            </header>

            <!-- Selector de Lanzador y Estrategia -->
            <div class="p-3 bg-slate-900/60 border-b border-slate-800 space-y-2">
              <div class="flex items-center justify-between gap-2">
                <span class="text-[10px] uppercase font-bold text-slate-400 flex-shrink-0">🎯 Lanzador:</span>
                <select id="setpiece-taker-select" class="flex-1 bg-slate-800 border border-slate-700 text-white font-bold text-xs rounded-xl px-2 py-1.5 outline-none truncate">
                </select>
              </div>

              <div>
                <span class="text-[10px] uppercase font-bold text-slate-400 block mb-1">📐 Tipo de Envío / Remate:</span>
                <div id="setpiece-strategy-chips" class="grid grid-cols-2 gap-1.5 text-xs">
                </div>
              </div>
            </div>

            <!-- Terreno de Juego: Pizarra del Área y Zonas de Remate -->
            <div class="p-3 flex-1 flex flex-col justify-center">
              <div class="relative w-full aspect-[4/3] max-w-[340px] mx-auto bg-gradient-to-b from-emerald-800 via-emerald-700 to-emerald-900 rounded-2xl border-2 border-emerald-500/40 shadow-inner overflow-hidden p-2">
                <!-- Portería y líneas del área -->
                <div class="absolute inset-2 border-2 border-white/30 rounded-xl pointer-events-none"></div>
                <div class="absolute top-2 left-1/2 -translate-x-1/2 w-44 h-24 border-b-2 border-x-2 border-white/30 pointer-events-none"></div>
                <div class="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-10 border-b-2 border-x-2 border-white/40 pointer-events-none"></div>
                <!-- Punto de penalti -->
                <div class="absolute top-20 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white pointer-events-none"></div>
                <!-- Portería blanca -->
                <div class="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-2 bg-white/90 rounded-b shadow pointer-events-none"></div>

                <!-- Punto de balón / saque -->
                <div id="setpiece-ball-spot" class="absolute w-5 h-5 rounded-full bg-amber-400 border-2 border-white shadow-lg animate-pulse flex items-center justify-center text-[10px] z-20">
                  ⚽
                </div>

                <!-- Zonas interactivas de colocación de rematadores -->
                <div id="setpiece-interactive-zones" class="absolute inset-0"></div>
              </div>

              <!-- Indicación de asignación -->
              <div class="text-center mt-2 px-2">
                <p id="setpiece-hint-text" class="text-[11px] text-slate-400">
                  💡 Toca un futbolista y luego una zona del área para ubicarlo en la jugada ensayada.
                </p>
              </div>
            </div>

            <!-- Fichas de futbolistas de campo para asignar -->
            <div class="px-3 mb-2">
              <div class="text-[10px] uppercase font-bold text-slate-400 mb-1.5 flex items-center justify-between">
                <span>🏃 Tus futbolistas en el área</span>
                <span class="text-slate-500 font-normal">Toca para seleccionar</span>
              </div>
              <div id="setpiece-players-pool" class="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar"></div>
            </div>

            <!-- Botones de Acción -->
            <footer class="px-3 flex gap-2">
              <button id="btn-setpiece-save-layout" class="py-3 px-3.5 bg-slate-800 hover:bg-slate-700 active:scale-95 text-sky-400 font-bold text-xs rounded-xl border border-sky-500/40 flex items-center justify-center gap-1.5 transition whitespace-nowrap shadow">
                <span>💾</span>
                <span>Guardar</span>
              </button>
              <button id="btn-setpiece-confirm" class="flex-1 py-3.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 active:scale-98 text-white font-extrabold text-xs rounded-xl shadow-xl shadow-emerald-500/25 transition flex items-center justify-center gap-2">
                <span>⚽ EJECUTAR JUGADA ENSAYADA</span>
                <span>➔</span>
              </button>
            </footer>
          </div>
        </div>

        <!-- Modal Táctico de Descanso y En Directo (Pizarra Oficial Completa) -->
        <div id="modal-halftime-tactics" class="fixed inset-0 bg-slate-950/95 backdrop-blur-md z-50 hidden flex flex-col justify-between overflow-y-auto">
          <div class="max-w-md w-full mx-auto flex flex-col min-h-screen text-white select-none pb-4">
            <!-- Header Táctico -->
            <header class="bg-slate-900 border-b border-slate-800 px-4 py-3 sticky top-0 z-20 shadow-md flex items-center justify-between">
              <div>
                <span id="tactics-modal-stage" class="text-[10px] uppercase font-bold text-amber-400">Pizarra Táctica</span>
                <h2 id="tactics-modal-title" class="text-sm font-extrabold text-white leading-tight">Pizarra Táctica y Cambios</h2>
              </div>
              <div id="ht-tactic-remaining-badge" class="px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono font-bold text-amber-400">
                5 cambios rest.
              </div>
            </header>

            <!-- Controles de Formación y Mentalidad -->
            <div class="p-3 bg-slate-900/60 border-b border-slate-800 space-y-2">
              <div class="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
                <span class="text-[10px] uppercase font-bold text-slate-500 mr-1">Sistema:</span>
                <div id="ht-formation-buttons" class="flex gap-1.5 overflow-x-auto no-scrollbar"></div>
              </div>
              <div class="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
                <span class="text-[10px] uppercase font-bold text-slate-500 mr-1">Mentalidad:</span>
                <div id="ht-mentality-buttons" class="flex gap-1.5 overflow-x-auto no-scrollbar"></div>
              </div>
            </div>

            <!-- Pestañas del Modal: Campo y Cambios vs Estilos por Estados -->
            <div class="px-3 pt-2 pb-1 bg-slate-900/60 border-b border-slate-800 flex gap-2">
              <button id="btn-ht-tab-pitch" type="button" class="flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 bg-sky-500 text-white shadow-md border border-sky-400">
                <span>⚽ Campo y Funciones</span>
              </button>
              <button id="btn-ht-tab-style" type="button" class="flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 bg-slate-900 text-slate-400 hover:text-white border border-slate-800">
                <span>🧠 Estilos e Instrucciones</span>
                <span id="ht-style-badge" class="px-1.5 py-0.2 rounded text-[10px] font-extrabold bg-slate-800 text-amber-400"></span>
              </button>
            </div>

            <!-- Contenedor del Campo y Cambios -->
            <div id="ht-pitch-wrapper" class="flex-1 flex flex-col justify-between">
              <!-- Terreno de Juego Táctico Interactivo -->
              <div class="p-3 flex-1 flex flex-col justify-center">
                <div id="ht-pitch-container" class="relative w-full aspect-[3/4] max-w-[340px] mx-auto bg-gradient-to-b from-emerald-800 via-emerald-700 to-emerald-900 rounded-2xl border-2 border-emerald-500/40 shadow-inner overflow-hidden p-2 select-none touch-pan-y">
                  <div class="absolute inset-2 border-2 border-white/30 rounded-xl pointer-events-none"></div>
                  <div class="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-12 border-b-2 border-x-2 border-white/30 pointer-events-none"></div>
                  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-white/30 rounded-full pointer-events-none"></div>
                  <div class="absolute top-1/2 left-2 right-2 h-0.5 bg-white/30 -translate-y-1/2 pointer-events-none"></div>
                  <div class="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-12 border-t-2 border-x-2 border-white/30 pointer-events-none"></div>

                  <!-- Fichas de los 11 titulares -->
                  <div id="ht-pitch-slots" class="absolute inset-0"></div>
                </div>
              </div>

              <!-- Indicación de Intercambio -->
              <div class="px-4 text-center my-1">
                <p id="ht-instruction-text" class="text-[11px] text-slate-400">
                  💡 Toca un futbolista para modificar su función táctica, puesto o sustituirlo por un suplente.
                </p>
                <div id="ht-pending-subs-text" class="text-[10px] text-emerald-400 font-bold mt-0.5 hidden">
                  🔄 0 cambios seleccionados
                </div>
              </div>

              <!-- Panel de Asignación de Función del Futbolista Seleccionado -->
              <div id="ht-role-assignment-panel" class="px-3"></div>

              <!-- Botón para ver y ajustar todas las funciones del 11 -->
              <div class="px-4 text-center my-1.5 flex items-center justify-center gap-2">
                <button id="btn-ht-toggle-roles" type="button" class="text-xs bg-slate-900 hover:bg-slate-800 text-sky-400 border border-slate-800 hover:border-sky-500/40 px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 shadow-sm">
                  <span>⚙️</span>
                  <span id="ht-toggle-roles-text">Ver funciones de los 11</span>
                </button>
              </div>

              <!-- Lista Desplegable de Todas las Funciones del 11 -->
              <div id="ht-all-roles-container" class="px-3 mb-2 hidden"></div>

              <!-- Lista del Banquillo (Suplentes) -->
              <div class="px-3 mb-3">
                <div class="text-[10px] uppercase font-bold text-slate-400 mb-1.5 flex items-center justify-between">
                  <span>🪑 Suplentes disponibles</span>
                  <span class="text-slate-500 font-normal">Toca para poner de titular</span>
                </div>
                <div id="ht-bench-scroll" class="flex gap-1.5 overflow-x-auto pb-2 no-scrollbar"></div>
              </div>
            </div>

            <!-- Contenedor de Estilos e Instrucciones por Estados -->
            <div id="ht-style-wrapper" class="flex-1 hidden"></div>

            <!-- Botones de Acción al Pie -->
            <footer class="px-3 flex gap-2">
              <button id="btn-ht-tactic-cancel" class="py-3.5 px-4 bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-300 font-bold text-xs rounded-xl border border-slate-700 transition">
                ✕ Descartar
              </button>
              <button id="btn-ht-tactic-confirm" class="flex-1 py-3.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 active:scale-98 text-white font-extrabold text-xs rounded-xl shadow-xl shadow-emerald-500/25 transition flex items-center justify-center gap-2">
                <span id="tactics-modal-btn-confirm-text">⚽ GUARDAR AJUSTES Y VOLVER</span>
                <span>➔</span>
              </button>
            </footer>
          </div>
        </div>

        <!-- Modal Final de Partido -->
        <div id="modal-match-end" class="fixed inset-0 bg-black/90 backdrop-blur-md z-50 hidden flex flex-col justify-center p-4 overflow-y-auto">
          <div class="bg-slate-900 border border-slate-700 rounded-3xl p-5 max-w-sm mx-auto w-full shadow-2xl text-center my-auto">
            <span class="text-xs uppercase font-extrabold tracking-widest text-slate-400">FINAL DEL PARTIDO</span>
            <div class="my-2.5 flex items-center justify-center gap-4">
              <div class="text-right">
                <div class="font-black text-sm text-white">${homeTeam.shortName}</div>
                <div class="text-3xl font-black text-white" id="final-home-score">0</div>
              </div>
              <span class="text-slate-600 text-2xl font-bold">-</span>
              <div class="text-left">
                <div class="font-black text-sm text-white">${awayTeam.shortName}</div>
                <div class="text-3xl font-black text-white" id="final-away-score">0</div>
              </div>
            </div>
            <!-- Tarjeta MVP del Partido y Notas (Mejora 5) -->
            <div id="final-mvp-card" class="my-2.5"></div>
            <!-- Estadísticas del Partido -->
            <div id="final-match-stats" class="my-2.5 bg-slate-950/70 p-2.5 rounded-2xl border border-slate-800 text-left"></div>
            <div id="final-ratings-summary" class="my-2 text-left"></div>
            <div class="my-2 py-2 border-y border-slate-800 text-left text-xs max-h-24 overflow-y-auto" id="final-scorers-list"></div>
            <div class="my-2.5 text-left">
              <div class="text-[10px] uppercase font-bold text-slate-400 mb-1">Otros partidos de la Jornada ${gameState.currentRound}:</div>
              <div class="space-y-1 text-[11px] max-h-28 overflow-y-auto bg-slate-950/60 p-2 rounded-xl border border-slate-800" id="other-results-list"></div>
            </div>
            <button id="btn-finish-match-continue" class="w-full py-3.5 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 text-white font-extrabold text-sm rounded-xl shadow-lg active:scale-98 transition">
              CONTINUAR AL HUB ➔
            </button>
          </div>
        </div>
      </div>
    `;

    // Canvas Setup (WebGL 3D Three.js primario con fallback 2D)
    const canvas = container.querySelector("#match-canvas");
    let ctx = null;

    function resizeCanvas() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      const targetW = (rect.width > 0 ? rect.width : 360) * dpr;
      const targetH = (rect.height > 0 ? rect.height : 225) * dpr;
      if (canvas.width !== targetW || canvas.height !== targetH) {
        canvas.width = targetW;
        canvas.height = targetH;
      }
    }

    // ==========================================
    // MOTOR GRÁFICO 3D ESTILO FOOTBALL MANAGER 26 (UNITY ENGINE)
    // ==========================================
    let cameraMode = "broadcast"; // "broadcast" (TV Tele) | "tactical" (Elevada) | "goal" (Detrás de Portería)
    let cameraPitchX = 50;
    let cameraPitchY = 50;
    let cameraZoom = 1.0;
    let ballRotation = 0;
    let ballTrail = [];
    let netRippleH = 0;
    let netRippleA = 0;

    function getKitColors() {
      return matchKits;
    }

    const kits = matchKits;

    // ==========================================
    // ESTADO DE JUGADAS CLAVE Y REPETICIONES
    // ==========================================
    const replayBuffer = [];
    let isReplaying = false;
    let replayFrames = [];
    let replayFrameIndex = 0;
    let isKickoffInProgress = false;
    let currentHighlightStartFrame = null;
    let currentHighlightData = null;
    let tacticalToastTimeout = null;
    let lastCarrierPlayerId = null;
    const matchUiTimeouts = [];
    const registerUiTimeout = (fn, ms) => {
      const id = setTimeout(fn, ms);
      matchUiTimeouts.push(id);
      return id;
    };
    const clearAllMatchUiTimeouts = () => {
      while (matchUiTimeouts.length > 0) {
        clearTimeout(matchUiTimeouts.pop());
      }
      if (subChyronTimeout) {
        clearTimeout(subChyronTimeout);
        subChyronTimeout = null;
      }
      if (tacticalToastTimeout) {
        clearTimeout(tacticalToastTimeout);
        tacticalToastTimeout = null;
      }
    };

    function updateFMCommentary(text, badge = "MATCH ENGINE", isHighlight = false) {
      const ticker = container.querySelector("#fm-broadcast-ticker");
      const badgeEl = container.querySelector("#fm-ticker-badge-text");
      const textEl = container.querySelector("#fm-ticker-text");
      if (!ticker || !textEl) return;
      textEl.textContent = text;
      if (badgeEl && badge) badgeEl.textContent = badge;
      if (isHighlight) {
        ticker.className = "absolute bottom-2.5 left-3 right-3 flex items-center bg-[#781827]/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-amber-400/90 shadow-2xl z-20 transition-all duration-300 ring-2 ring-amber-400/60 pointer-events-none";
        setTimeout(() => {
          if (ticker) ticker.className = "absolute bottom-2.5 left-3 right-3 flex items-center bg-[#54121d]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-rose-500/40 shadow-2xl z-20 transition-all duration-300 pointer-events-none";
        }, 4000);
      }
    }

    function handleHighlightStart(hlData) {
      currentHighlightStartFrame = Math.max(0, replayBuffer.length - 12);
      currentHighlightData = { ...hlData };

      const atkTeam = hlData.atkTeam || (hlData.attackingSide === "home" ? homeTeam : awayTeam) || { name: "Ataque", shortName: "ATA" };
      const defTeam = hlData.defTeam || (hlData.attackingSide === "home" ? awayTeam : homeTeam) || { name: "Defensa", shortName: "DEF" };
      const atkShort = (atkTeam.shortName || atkTeam.name || "ATA").toUpperCase();
      const atkName = atkTeam.name || atkTeam.shortName || "Ataque";

      const hud = container.querySelector("#highlight-action-hud");
      const hudTitle = container.querySelector("#hl-hud-title");
      const hudSub = container.querySelector("#hl-hud-subtitle");
      if (hud && hudTitle && hudSub) {
        hudTitle.textContent = `🎥 ENFOQUE DE ACCIÓN · ${atkShort}`;
        hudSub.textContent = hlData.tacticalNote || hlData.commentary || "Apertura y construcción de jugada";
        hud.classList.remove("opacity-0", "-translate-y-2");
        hud.classList.add("opacity-100", "translate-y-0");
      }

      updateFMCommentary(hlData.tacticalNote || hlData.commentary || `¡Jugada de peligro de ${atkName}!`, atkShort, true);
      showMatchAlert({ text: `⚡ ¡Jugada de peligro de ${atkName}!` });
    }

    function handleHighlightPhase(phaseData) {
      if (!currentHighlightData) currentHighlightData = {};
      Object.assign(currentHighlightData, phaseData);

      const hudSub = container.querySelector("#hl-hud-subtitle");
      if (hudSub && phaseData.tacticalNote) {
        hudSub.textContent = phaseData.tacticalNote;
      }

      if (phaseData.tacticalNote) {
        const badgeLabel = phaseData.phaseLabel || (phaseData.phase === "BUILDUP" ? "CONSTRUCCIÓN" : phaseData.phase === "PASS" ? "ASISTENCIA" : "EN VIVO");
        updateFMCommentary(phaseData.tacticalNote, badgeLabel, true);
      }
    }

    function handleHighlightEnd(endData = null) {
      const hud = container.querySelector("#highlight-action-hud");
      if (hud) {
        hud.classList.remove("opacity-100", "translate-y-0");
        hud.classList.add("opacity-0", "-translate-y-2");
      }

      if (endData && endData.tacticalAnalysis) {
        showTacticalToast(endData.tacticalAnalysis, endData.outcome);
      }
      currentHighlightData = null;

      // Si el usuario había pedido pausa durante la visualización de la jugada clave
      // y la jugada no termina en parada a córner ni gol (que tienen su propia secuencia posterior):
      if (simulator.pauseRequested && endData?.outcome !== "SAVE" && endData?.outcome !== "GOAL") {
        simulator.pauseRequested = false;
        simulator.pause();
        const iconPP = container.querySelector("#play-pause-icon");
        const textPP = container.querySelector("#play-pause-text");
        if (iconPP) iconPP.textContent = "▶";
        if (textPP) textPP.textContent = "Reanudar";
        showMatchAlert({ text: "⏸ Partido en pausa tras la jugada clave" });
      }
    }

    function showTacticalToast(message, outcome = "NEUTRAL") {
      const toast = container.querySelector("#tactical-analysis-toast");
      const icon = container.querySelector("#tactical-analysis-icon");
      const text = container.querySelector("#tactical-analysis-text");
      if (text) text.textContent = message;
      if (icon) {
        icon.textContent = outcome === "GOAL" ? "⚽" : outcome === "SAVE" ? "🧤" : outcome === "BLOCK" ? "🛡️" : "📊";
      }

      updateFMCommentary(message, "ANÁLISIS TÁCTICO", true);

      if (toast && !toast.classList.contains("hidden")) {
        toast.classList.remove("opacity-0", "translate-y-3", "pointer-events-none");
        toast.classList.add("opacity-100", "translate-y-0");

        if (tacticalToastTimeout) clearTimeout(tacticalToastTimeout);
        tacticalToastTimeout = setTimeout(() => {
          toast.classList.remove("opacity-100", "translate-y-0");
          toast.classList.add("opacity-0", "translate-y-3", "pointer-events-none");
        }, 4500);
      }
    }

    let currentAssistantAdvice = null;
    let assistantFeedbackTimeout = null;

    function handleAssistantAdvice(advice) {
      currentAssistantAdvice = advice;
      const card = container.querySelector("#live-assistant-card");
      if (!card) return;

      // Pausar automáticamente la simulación para permitir decidir sin prisa ni tapar el partido
      if (simulator.isRunning) {
        simulator.pause();
      }
      const iconPP = container.querySelector("#play-pause-icon");
      const textPP = container.querySelector("#play-pause-text");
      if (iconPP) iconPP.textContent = "▶";
      if (textPP) textPP.textContent = "Reanudar";

      const coachNameEl = card.querySelector("#ast-coach-name");
      const badgeEl = card.querySelector("#ast-urgency-badge");
      const diagEl = card.querySelector("#ast-diagnosis");
      const recEl = card.querySelector("#ast-recommendation");

      if (coachNameEl) coachNameEl.textContent = simulator.assistantCoachName || "Segundo Entrenador";
      if (badgeEl) {
        badgeEl.textContent = advice.urgency || "CONSEJO TÁCTICO";
        if (advice.urgency === "URGENTE" || advice.urgency === "RIESGO DE EXPULSIÓN") {
          badgeEl.className = "px-1.5 py-0.5 rounded bg-red-500/20 text-red-400 text-[8.5px] font-extrabold uppercase tracking-wider border border-red-500/40 animate-pulse";
        } else if (advice.urgency === "ALERTA FÍSICA" || advice.urgency === "DESAJUSTE DEFENSIVO") {
          badgeEl.className = "px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 text-[8.5px] font-extrabold uppercase tracking-wider border border-amber-500/40";
        } else {
          badgeEl.className = "px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-400 text-[8.5px] font-extrabold uppercase tracking-wider border border-sky-500/40";
        }
      }
      if (diagEl) diagEl.textContent = advice.diagnosis;
      if (recEl) recEl.textContent = advice.recommendation;

      card.classList.remove("opacity-0", "translate-y-4", "pointer-events-none");
      card.classList.add("opacity-100", "translate-y-0", "pointer-events-auto");

      updateFMCommentary(`💡 ${simulator.assistantCoachName || 'Segundo Entrenador'} pausa para ajuste: ${advice.title}`, "CUERPO TÉCNICO", true);
    }

    function hideAssistantAdviceCard(autoResume = false) {
      const card = container.querySelector("#live-assistant-card");
      if (card) {
        card.classList.remove("opacity-100", "translate-y-0", "pointer-events-auto");
        card.classList.add("opacity-0", "translate-y-4", "pointer-events-none");
      }
      currentAssistantAdvice = null;

      // Reanudar automáticamente la simulación si no se había pedido pausa manual y el partido sigue en juego
      if (autoResume && !simulator.isFinished && !simulator.isHalfTime && !simulator.pauseRequested) {
        if (!simulator.isRunning) {
          simulator.start();
        }
        const iconPP = container.querySelector("#play-pause-icon");
        const textPP = container.querySelector("#play-pause-text");
        if (iconPP) iconPP.textContent = "⏸";
        if (textPP) textPP.textContent = "Pausar";
      }
    }

    function handleAssistantFeedback(fb) {
      const fbCard = container.querySelector("#live-assistant-feedback");
      if (!fbCard) return;

      const iconEl = fbCard.querySelector("#ast-feedback-icon");
      const minEl = fbCard.querySelector("#ast-feedback-minute");
      const textEl = fbCard.querySelector("#ast-feedback-text");

      if (iconEl) {
        iconEl.textContent = fb.success ? "✅" : "⚠️";
        iconEl.className = `w-8 h-8 rounded-xl flex items-center justify-center text-lg flex-shrink-0 ${fb.success ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'}`;
      }
      if (minEl) minEl.textContent = `${fb.minute}'`;
      if (textEl) textEl.textContent = fb.text;

      fbCard.className = `absolute top-12 left-1/2 -translate-x-1/2 max-w-[360px] sm:max-w-[420px] w-full bg-slate-950/95 backdrop-blur-md border ${fb.success ? 'border-emerald-500/70 shadow-emerald-950/40' : 'border-amber-500/70 shadow-amber-950/40'} rounded-2xl p-2.5 shadow-2xl z-30 transition-all duration-300 opacity-100 translate-y-0 pointer-events-auto flex items-center gap-2.5`;

      updateFMCommentary(fb.text, fb.success ? "INFORME +" : "INFORME -", true);

      if (assistantFeedbackTimeout) clearTimeout(assistantFeedbackTimeout);
      assistantFeedbackTimeout = setTimeout(() => {
        fbCard.classList.remove("opacity-100", "translate-y-0", "pointer-events-auto");
        fbCard.classList.add("opacity-0", "-translate-y-4", "pointer-events-none");
      }, 6500);
    }

    function handleGoalSequence(goalData) {
      handleHighlightEnd();
      if (goalData.concedingSide === "home") {
        netRippleH = 1.0;
      } else {
        netRippleA = 1.0;
      }

      // Pausar la simulación durante la celebración del gol (sin repetición posterior)
      simulator.pause();

      const elGoalOverlay = container.querySelector("#goal-cinematic");
      const elScorer = container.querySelector("#goal-scorer-name");
      const elScore = container.querySelector("#goal-score-display");
      const elMinute = container.querySelector("#goal-minute-display");

      if (elScorer) elScorer.textContent = `${goalData.shooter?.name || goalData.scorer || "Jugador"}`;
      if (elScore) elScore.textContent = goalData.score || `${goalData.homeScore ?? 0} - ${goalData.awayScore ?? 0}`;
      if (elMinute) elMinute.textContent = `Minuto ${goalData.minute}' · ${goalData.atkTeam?.name || ""}`;

      if (elGoalOverlay) {
        elGoalOverlay.classList.remove("opacity-0", "pointer-events-none", "scale-95");
        elGoalOverlay.classList.add("opacity-100", "scale-100");
      }

      currentHighlightStartFrame = null;

      let goalDismissed = false;
      let goalTimer = null;
      const finishGoalCelebration = () => {
        if (goalDismissed) return;
        goalDismissed = true;
        if (goalTimer) { clearTimeout(goalTimer); goalTimer = null; }
        if (elGoalOverlay) {
          elGoalOverlay.classList.remove("opacity-100", "scale-100");
          elGoalOverlay.classList.add("opacity-0", "pointer-events-none", "scale-95");
          elGoalOverlay.onclick = null;
        }
        startKickoffSequence(goalData.concedingSide);
      };

      if (elGoalOverlay) {
        elGoalOverlay.classList.remove("pointer-events-none");
        elGoalOverlay.onclick = finishGoalCelebration;
      }
      goalTimer = registerUiTimeout(finishGoalCelebration, goalData.isSkipped ? 1100 : 2000);
    }

    function startKickoffSequence(concedingSide) {
      if (simulator.isFinished) return;
      isKickoffInProgress = true;
      const kickoffBadge = container.querySelector("#kickoff-badge");
      if (kickoffBadge) kickoffBadge.classList.remove("hidden");

      // Colocar jugadores y balón en posición de saque de centro (0,0,0)
      simulator.resetKickoff(concedingSide);

      // Pausa breve para mostrar a los 22 jugadores colocados antes de reanudar la física real
      registerUiTimeout(() => {
        if (kickoffBadge) kickoffBadge.classList.add("hidden");
        isKickoffInProgress = false;
        if (simulator.isFinished) return;

        if (simulator.minute >= simulator.halfTimeMinute && !simulator.halfTimeTriggered && !simulator.isSecondHalf) {
          simulator.halfTimeTriggered = true;
          simulator.isHalfTime = true;
          simulator.pause();
          simulator.onHalfTime(simulator.getState());
          return;
        }

        if (simulator.minute >= simulator.maxMinutes) {
          simulator.finish();
          return;
        }

        if (simulator.pauseRequested) {
          simulator.pauseRequested = false;
          simulator.pause();
          const iconPP = container.querySelector("#play-pause-icon");
          const textPP = container.querySelector("#play-pause-text");
          if (iconPP) iconPP.textContent = "▶";
          if (textPP) textPP.textContent = "Reanudar";
        } else {
          simulator.start();
        }
      }, 650);
    }

    function handleSubstitutionChyron(subData) {
      showSubstitutionChyron(subData, () => {
        if (!simulator.isFinished && !simulator.isHalfTime) {
          if (simulator.pauseRequested) {
            simulator.pauseRequested = false;
            simulator.pause();
            const iconPP = container.querySelector("#play-pause-icon");
            const textPP = container.querySelector("#play-pause-text");
            if (iconPP) iconPP.textContent = "▶";
            if (textPP) textPP.textContent = "Reanudar";
            return;
          }
          simulator.start();
          const iconPP = container.querySelector("#play-pause-icon");
          const textPP = container.querySelector("#play-pause-text");
          if (iconPP) iconPP.textContent = "⏸";
          if (textPP) textPP.textContent = "Pausar";
        }
      });
    }

    function showSubstitutionChyron(subData, onDone) {
      simulator.pause();
      const iconPP = container.querySelector("#play-pause-icon");
      const textPP = container.querySelector("#play-pause-text");
      if (iconPP) iconPP.textContent = "▶";
      if (textPP) textPP.textContent = "Reanudar";

      const subOverlay = container.querySelector("#sub-cinematic");
      const dot = container.querySelector("#sub-team-dot");
      const title = container.querySelector("#sub-team-title");
      const minBadge = container.querySelector("#sub-minute-badge");
      const containerPlayers = container.querySelector("#sub-players-container");
      const remText = container.querySelector("#sub-remaining-text");
      const btnSkip = container.querySelector("#btn-sub-skip");

      if (!subOverlay || !containerPlayers) {
        if (onDone) onDone();
        return;
      }

      const team = subData.team;
      const count = (subData.subs || []).length;
      if (dot) dot.style.backgroundColor = team.primaryColor || "#38bdf8";
      if (title) title.textContent = count > 1 ? `DOBLE CAMBIO EN ${team.name.toUpperCase()}` : `CAMBIO EN ${team.name.toUpperCase()}`;
      if (minBadge) minBadge.textContent = `${subData.minute || simulator.minute}'`;
      if (remText) {
        if (subData.isHalfTime || simulator.isHalfTime) {
          remText.textContent = `${subData.remaining} cambios restantes · Descanso (no gasta ventana)`;
        } else if (subData.windowsRemaining !== undefined) {
          remText.textContent = `${subData.remaining} cambios restantes · ${subData.windowsRemaining} ventanas restantes`;
        } else {
          remText.textContent = `${subData.remaining} cambios restantes`;
        }
      }

      containerPlayers.innerHTML = (subData.subs || []).map(pair => `
        <div class="flex items-center justify-between bg-slate-900/95 border border-slate-700/80 rounded-xl p-2 shadow-xl">
          <!-- SALE (ROJO) -->
          <div class="flex items-center gap-1.5 flex-1 min-w-0 text-left">
            <div class="w-6 h-6 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400 flex items-center justify-center font-black text-xs flex-shrink-0">
              🔻
            </div>
            <div class="truncate">
              <div class="text-[8px] uppercase font-bold text-red-400 leading-none">Sale</div>
              <div class="text-[11px] font-bold text-white truncate leading-tight">${pair.outPlayer.name}</div>
              <div class="text-[8px] text-slate-400 font-mono">${pair.outPlayer.pos} · ${pair.outPlayer.ovr}</div>
            </div>
          </div>

          <div class="px-2 text-slate-500 font-black text-xs flex-shrink-0">➔</div>

          <!-- ENTRA (VERDE) -->
          <div class="flex items-center gap-1.5 flex-1 min-w-0 text-right justify-end">
            <div class="truncate">
              <div class="text-[8px] uppercase font-bold text-emerald-400 leading-none">Entra</div>
              <div class="text-[11px] font-bold text-white truncate leading-tight">${pair.inPlayer.name}</div>
              <div class="text-[8px] text-slate-400 font-mono">${pair.inPlayer.pos} · ${pair.inPlayer.ovr}</div>
            </div>
            <div class="w-6 h-6 rounded-lg bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 flex items-center justify-center font-black text-xs flex-shrink-0">
              🔺
            </div>
          </div>
        </div>
      `).join('');

      // Mostrar overlay
      subOverlay.classList.remove("opacity-0", "pointer-events-none", "scale-95");
      subOverlay.classList.add("opacity-100", "scale-100");

      showMatchAlert({ text: `🔄 Cambio en ${team.name}` });

      const closeChyron = () => {
        if (subChyronTimeout) clearTimeout(subChyronTimeout);
        subChyronTimeout = null;
        subOverlay.classList.remove("opacity-100", "scale-100");
        subOverlay.classList.add("opacity-0", "pointer-events-none", "scale-95");
        if (onDone) onDone();
      };

      if (btnSkip) btnSkip.onclick = closeChyron;

      if (subChyronTimeout) clearTimeout(subChyronTimeout);
      subChyronTimeout = setTimeout(closeChyron, 3200);
    }

    // ==========================================
    // SIMULACIÓN GENERAL EN 2D (CAMPO CENITAL Y FICHAS CIRCULARES)
    // ==========================================
    function drawPitch2D(ctx, w, h) {
      const dpr = window.devicePixelRatio || 1;
      const padX = Math.round(w * 0.038);
      const padY = Math.round(h * 0.052);
      const pitchW = w - padX * 2;
      const pitchH = h - padY * 2;

      // Césped de fondo con bandas alternas de siega
      ctx.fillStyle = "#166534";
      ctx.fillRect(0, 0, w, h);

      const stripes = 10;
      const stripeW = pitchW / stripes;
      for (let i = 0; i < stripes; i++) {
        ctx.fillStyle = (i % 2 === 0) ? "#15803d" : "#166534";
        ctx.fillRect(padX + i * stripeW, padY, stripeW, pitchH);
      }

      // Líneas reglamentarias 2D
      ctx.strokeStyle = "rgba(255, 255, 255, 0.82)";
      ctx.lineWidth = Math.max(1.5, 2.0 * dpr);
      ctx.lineJoin = "round";

      // Rectángulo perimetral
      ctx.strokeRect(padX, padY, pitchW, pitchH);

      // Línea de medio campo
      const midX = padX + pitchW / 2;
      const midY = padY + pitchH / 2;
      ctx.beginPath();
      ctx.moveTo(midX, padY);
      ctx.lineTo(midX, padY + pitchH);
      ctx.stroke();

      // Círculo central y punto de saque
      const centerR = Math.min(pitchW * 0.12, pitchH * 0.22);
      ctx.beginPath();
      ctx.arc(midX, midY, centerR, 0, Math.PI * 2);
      ctx.stroke();

      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(midX, midY, 2.4 * dpr, 0, Math.PI * 2);
      ctx.fill();

      // Áreas Grandes (18 yardas)
      const boxW = pitchW * 0.165;
      const boxH = pitchH * 0.58;
      const boxTopY = padY + (pitchH - boxH) / 2;
      ctx.strokeRect(padX, boxTopY, boxW, boxH);
      ctx.strokeRect(padX + pitchW - boxW, boxTopY, boxW, boxH);

      // Áreas Pequeñas (6 yardas)
      const sixW = pitchW * 0.058;
      const sixH = pitchH * 0.30;
      const sixTopY = padY + (pitchH - sixH) / 2;
      ctx.strokeRect(padX, sixTopY, sixW, sixH);
      ctx.strokeRect(padX + pitchW - sixW, sixTopY, sixW, sixH);

      // Puntos de penalti
      const penDist = pitchW * 0.11;
      ctx.beginPath();
      ctx.arc(padX + penDist, midY, 2.2 * dpr, 0, Math.PI * 2);
      ctx.arc(padX + pitchW - penDist, midY, 2.2 * dpr, 0, Math.PI * 2);
      ctx.fill();

      // Semicírculos del área (D)
      ctx.beginPath();
      ctx.arc(padX + penDist, midY, centerR * 0.85, -0.62 * Math.PI, 0.62 * Math.PI);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(padX + pitchW - penDist, midY, centerR * 0.85, 0.38 * Math.PI, 1.62 * Math.PI);
      ctx.stroke();

      // Arcos de córner
      const cornerR = Math.min(pitchW * 0.02, 9 * dpr);
      ctx.beginPath();
      ctx.arc(padX, padY, cornerR, 0, 0.5 * Math.PI);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(padX, padY + pitchH, cornerR, 1.5 * Math.PI, 2 * Math.PI);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(padX + pitchW, padY, cornerR, 0.5 * Math.PI, Math.PI);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(padX + pitchW, padY + pitchH, cornerR, Math.PI, 1.5 * Math.PI);
      ctx.stroke();

      // Porterías exteriores
      const goalW = Math.max(4, padX * 0.68);
      const goalH = sixH * 0.75;
      const goalTopY = padY + (pitchH - goalH) / 2;
      ctx.fillStyle = "rgba(255, 255, 255, 0.12)";
      ctx.fillRect(padX - goalW, goalTopY, goalW, goalH);
      ctx.strokeRect(padX - goalW, goalTopY, goalW, goalH);
      ctx.fillRect(padX + pitchW, goalTopY, goalW, goalH);
      ctx.strokeRect(padX + pitchW, goalTopY, goalW, goalH);

      return { padX, padY, pitchW, pitchH, dpr };
    }

    function drawPlayerToken2D(ctx, p, side, isCarrier, padX, padY, pitchW, pitchH, dpr) {
      const px = padX + (p.curX / 100) * pitchW;
      const py = padY + (p.curY / 100) * pitchH;
      const kit = side === "home" ? kits.home : kits.away;
      const primaryColor = p.isKeeper ? (kit.keeper || "#10b981") : (kit.jersey || (side === "home" ? homeTeam.primaryColor : awayTeam.primaryColor));
      const secondaryColor = p.isKeeper ? "#ffffff" : (kit.collar || kit.shorts || "#ffffff");
      const numberColor = p.isKeeper ? "#0f172a" : (kit.number || "#ffffff");
      const r = Math.max(5.5, 6.8 * dpr);

      // Sombra suave en el césped
      ctx.fillStyle = "rgba(0, 20, 6, 0.42)";
      ctx.beginPath();
      ctx.ellipse(px + 1.2 * dpr, py + 1.2 * dpr, r * 0.95, r * 0.65, 0, 0, Math.PI * 2);
      ctx.fill();

      // Halo dorado si lleva el balón
      if (isCarrier) {
        const pulse = Math.sin(performance.now() * 0.01) * 1.5 * dpr;
        ctx.strokeStyle = "#fbbf24";
        ctx.lineWidth = 2.2 * dpr;
        ctx.beginPath();
        ctx.arc(px, py, r + 2.8 * dpr + pulse, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fillStyle = "rgba(251, 191, 36, 0.22)";
        ctx.fill();
      }

      // Ficha circular 2D (🔴) con color de la equipación
      ctx.beginPath();
      ctx.arc(px, py, r, 0, Math.PI * 2);
      ctx.fillStyle = primaryColor;
      ctx.fill();

      // Borde circular con color secundario de la equipación
      ctx.strokeStyle = secondaryColor;
      ctx.lineWidth = Math.max(1.2, 1.8 * dpr);
      ctx.stroke();

      // Dorsal centrado (sin nombres en el campo)
      ctx.font = `900 ${Math.max(6.5, Math.round(r * 1.05))}px sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = numberColor;
      ctx.fillText(`${p.number}`, px, py + 0.3 * dpr);
    }

    function drawBallToken2D(ctx, bxCoord, byCoord, padX, padY, pitchW, pitchH, dpr) {
      const bx = padX + (bxCoord / 100) * pitchW;
      const by = padY + (byCoord / 100) * pitchH;
      const r = Math.max(3.2, 4.2 * dpr);

      // Sombra sutil
      ctx.fillStyle = "rgba(0, 20, 6, 0.42)";
      ctx.beginPath();
      ctx.ellipse(bx + 1.0 * dpr, by + 1.0 * dpr, r, r * 0.6, 0, 0, Math.PI * 2);
      ctx.fill();

      // Esfera 2D
      ctx.beginPath();
      ctx.arc(bx, by, r, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.fill();
      ctx.strokeStyle = "#0f172a";
      ctx.lineWidth = Math.max(1.0, 1.2 * dpr);
      ctx.stroke();

      // Detalle central
      ctx.fillStyle = "#0f172a";
      ctx.beginPath();
      ctx.arc(bx, by, r * 0.35, 0, Math.PI * 2);
      ctx.fill();
    }

    // MEJORA 6: Efectos visuales atmosféricos sobre el césped (Lluvia, Focos Nocturnos o Brillo Solar)
    function drawWeatherOverlay(ctx, w, h, weatherId) {
      if (!ctx) return;
      ctx.save();
      if (weatherId === "rain") {
        // Brillo húmedo azulado sobre el césped
        ctx.fillStyle = "rgba(14, 116, 144, 0.08)";
        ctx.fillRect(0, 0, w, h);

        // Gotas de lluvia diagonales animadas
        const now = performance.now();
        ctx.strokeStyle = "rgba(186, 230, 253, 0.36)";
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        const dropCount = 42;
        for (let i = 0; i < dropCount; i++) {
          const seedX = ((i * 97) % 100) / 100;
          const seedY = ((i * 53) % 100) / 100;
          const speed = 0.00065 + (i % 4) * 0.00012;
          const prog = (seedY + now * speed) % 1.0;
          const x = ((seedX + prog * 0.12) % 1.0) * w;
          const y = prog * h;
          ctx.moveTo(x, y);
          ctx.lineTo(x - 4, y + 11);
        }
        ctx.stroke();
      } else if (weatherId === "night") {
        // Haces de luz de los focos del estadio desde las 4 esquinas
        const corners = [
          [0, 0],
          [w, 0],
          [0, h],
          [w, h]
        ];
        corners.forEach(([cx, cy]) => {
          const grad = ctx.createRadialGradient(cx, cy, 4, cx, cy, Math.max(w, h) * 0.48);
          grad.addColorStop(0, "rgba(224, 242, 254, 0.14)");
          grad.addColorStop(0.5, "rgba(186, 230, 253, 0.04)");
          grad.addColorStop(1, "rgba(15, 23, 42, 0)");
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, w, h);
        });
      } else if (weatherId === "sunny") {
        // Cálido reflejo solar diagonal sobre el césped
        const sunGrad = ctx.createLinearGradient(0, 0, w * 0.7, h * 0.7);
        sunGrad.addColorStop(0, "rgba(253, 224, 71, 0.07)");
        sunGrad.addColorStop(0.5, "rgba(253, 224, 71, 0.02)");
        sunGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = sunGrad;
        ctx.fillRect(0, 0, w, h);
      }
      ctx.restore();
    }

    // ==========================================
    // MOTOR GRÁFICO 3D REALISTA CON THREE.JS (WEBGL)
    // ==========================================
    let threeEngine = null;
    let threeInitAttempted = false;
    let threeCdnLoading = false;
    let canvas3d = null;

    function ensureThreeLoadedAndInit() {
      if (threeEngine || threeInitAttempted) return;
      if (typeof window !== "undefined" && window.THREE) {
        threeInitAttempted = true;
        try {
          if (!canvas3d && canvas && canvas.parentElement) {
            canvas3d = document.createElement("canvas");
            canvas3d.id = "match-canvas-3d";
            canvas3d.className = "w-full h-full block";
            canvas3d.style.position = "absolute";
            canvas3d.style.inset = "0";
            canvas3d.style.width = "100%";
            canvas3d.style.height = "100%";
            canvas3d.style.pointerEvents = "none";
            canvas3d.style.display = "none";
            canvas3d.style.zIndex = "5";
            canvas.parentElement.appendChild(canvas3d);
          }
          threeEngine = createThreeMatchEngine(canvas3d || canvas);
        } catch (err) {
          console.warn("Fallback a Canvas 2D:", err);
          threeEngine = null;
        }
        return;
      }
      if (!threeCdnLoading && typeof document !== "undefined") {
        threeCdnLoading = true;
        const script = document.createElement("script");
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
        script.async = true;
        script.onload = () => {
          threeCdnLoading = false;
        };
        script.onerror = () => {
          threeCdnLoading = false;
          threeInitAttempted = true;
        };
        document.head.appendChild(script);
      }
    }

    function createThreeMatchEngine(targetCanvas) {
      if (!targetCanvas || !window.THREE) return null;
      const THREE = window.THREE;

      const PITCH_L = 105; // Eje X: -52.5 (Portería Local) a +52.5 (Portería Visitante)
      const PITCH_W = 68;  // Eje Z: -34 (Banda superior/fondo) a +34 (Banda inferior/cámara)

      const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
      const simToWorldX = (sx) => ((sx - 50) / 100) * PITCH_L;
      const simToWorldZ = (sy) => ((sy - 50) / 100) * PITCH_W;
      const simToWorldY = (sz) => Math.max(0, (sz || 0) * 0.36);

      const renderer = new THREE.WebGLRenderer({
        canvas: targetCanvas,
        antialias: true,
        alpha: false,
        powerPreference: "high-performance"
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      if (THREE.ACESFilmicToneMapping !== undefined) {
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.06;
      }
      if (THREE.sRGBEncoding !== undefined) {
        renderer.outputEncoding = THREE.sRGBEncoding;
      }

      const scene = new THREE.Scene();
      const skyColorHex = matchWeather.id === "night" ? 0x050b16 : (matchWeather.id === "rain" ? 0x0c1424 : 0x081120);
      scene.background = new THREE.Color(skyColorHex);
      scene.fog = new THREE.FogExp2(skyColorHex, 0.0020);

      // 1. CÁMARA ESTILO RETRANSMISIÓN TV (PerspectiveCamera en lateral largo Y: 21.5, Z: 36.0, FOV: 35)
      const rect0 = targetCanvas.getBoundingClientRect();
      const initAspect = (rect0.width > 0 && rect0.height > 0) ? (rect0.width / rect0.height) : (16 / 9);
      const camera = new THREE.PerspectiveCamera(35, initAspect, 1.0, 340);
      camera.position.set(0, 21.5, 36.0);
      const camLookCurrent = new THREE.Vector3(0, 0.55, -1.5);
      camera.lookAt(camLookCurrent);

      // 2. ILUMINACIÓN AMBIENTAL SUAVE (HemisphereLight) + DIRECCIONAL CON SOMBRAS PROYECTADAS (castShadow)
      const ambientIntensity = matchWeather.id === "sunny" ? 0.44 : (matchWeather.id === "rain" ? 0.36 : 0.40);
      const ambientLight = new THREE.AmbientLight(0xeef6ff, ambientIntensity);
      scene.add(ambientLight);

      // HemisphereLight: luz suave del cielo nocturno/estadio arriba y rebote verdoso del césped abajo
      const hemiSkyColor = matchWeather.id === "sunny" ? 0xe0f2fe : 0xc7e2ff;
      const hemiGroundColor = 0x14532d;
      const hemiLight = new THREE.HemisphereLight(hemiSkyColor, hemiGroundColor, 0.56);
      hemiLight.position.set(0, 68, 0);
      scene.add(hemiLight);

      // Luz Direccional principal (Focos del estadio / Sol) con sombras proyectadas nítidas sobre jugadores y balón
      const sunColor = matchWeather.id === "sunny" ? 0xfff9e6 : (matchWeather.id === "rain" ? 0xe2e8f0 : 0xfff8eb);
      const dirLight = new THREE.DirectionalLight(sunColor, matchWeather.id === "sunny" ? 1.42 : 1.32);
      dirLight.position.set(34, 60, 36);
      dirLight.castShadow = true;
      dirLight.shadow.mapSize.width = 2048;
      dirLight.shadow.mapSize.height = 2048;
      dirLight.shadow.camera.near = 12;
      dirLight.shadow.camera.far = 150;
      dirLight.shadow.camera.left = -60;
      dirLight.shadow.camera.right = 60;
      dirLight.shadow.camera.top = 42;
      dirLight.shadow.camera.bottom = -42;
      dirLight.shadow.bias = -0.0004;
      if (dirLight.shadow.normalBias !== undefined) {
        dirLight.shadow.normalBias = 0.015;
      }
      scene.add(dirLight);

      // Contraluz suave desde la tribuna opuesta para perfilar hombros y siluetas de jugadores
      const fillLight = new THREE.DirectionalLight(0x93c5fd, 0.38);
      fillLight.position.set(-38, 40, -36);
      scene.add(fillLight);

      const disposableTextures = [];
      const disposableGeometries = [];
      const disposableMaterials = [];
      const trackTex = (t) => {
        if (t) {
          if (THREE.sRGBEncoding !== undefined) t.encoding = THREE.sRGBEncoding;
          disposableTextures.push(t);
        }
        return t;
      };
      const trackGeo = (g) => { if (g) disposableGeometries.push(g); return g; };
      const trackMat = (m) => { if (m) disposableMaterials.push(m); return m; };

      // 3. TEXTURA PROCEDURAL DE CÉSPED CON FRANJAS DE CORTE REALISTAS, RUGOSIDAD (roughnessMap/bumpMap) Y LÍNEAS DE CAL NÍTIDAS
      const APRON_X = 8; // Margen por cada fondo (total ancho X = 121)
      const APRON_Z = 6; // Margen por cada banda (total ancho Z = 80)
      const TOTAL_W = PITCH_L + APRON_X * 2;
      const TOTAL_H = PITCH_W + APRON_Z * 2;
      const maxAniso = renderer.capabilities.getMaxAnisotropy ? Math.min(16, renderer.capabilities.getMaxAnisotropy()) : 4;

      function buildPitchCanvasTexture() {
        const cw = 2048;
        const ch = Math.round(cw * (TOTAL_H / TOTAL_W)); // ~1354
        const c = document.createElement("canvas");
        c.width = cw;
        c.height = ch;
        const g = c.getContext("2d");

        const m2pxX = (m) => ((m + TOTAL_W / 2) / TOTAL_W) * cw;
        const m2pxZ = (m) => ((m + TOTAL_H / 2) / TOTAL_H) * ch;
        const scaleX = cw / TOTAL_W;
        const scaleZ = ch / TOTAL_H;

        // Moqueta perimetral oscura alrededor del césped
        g.fillStyle = "#12421c";
        g.fillRect(0, 0, cw, ch);

        const x0 = m2pxX(-PITCH_L / 2);
        const z0 = m2pxZ(-PITCH_W / 2);
        const pw = PITCH_L * scaleX;
        const ph = PITCH_W * scaleZ;

        // 18 Franjas verticales de siega con degradado longitudinal de reflexión de la hierba
        const numStripes = 18;
        const stripeW = pw / numStripes;
        for (let i = 0; i < numStripes; i++) {
          const sx = x0 + i * stripeW;
          const stripeGrad = g.createLinearGradient(sx, z0, sx, z0 + ph);
          if (i % 2 === 0) {
            stripeGrad.addColorStop(0, "#1d662b");
            stripeGrad.addColorStop(0.5, "#237632");
            stripeGrad.addColorStop(1, "#1c6329");
          } else {
            stripeGrad.addColorStop(0, "#278037");
            stripeGrad.addColorStop(0.5, "#2f9040");
            stripeGrad.addColorStop(1, "#267c35");
          }
          g.fillStyle = stripeGrad;
          g.fillRect(sx, z0, stripeW + 0.9, ph);

          // Sutil línea de transición del rodillo cortacésped entre franjas
          g.fillStyle = (i % 2 === 0) ? "rgba(255,255,255,0.025)" : "rgba(0,20,5,0.035)";
          g.fillRect(sx, z0, 2.2, ph);
        }

        // Pasadas horizontales cruzadas de cortacésped (damero profesional de estadio)
        const hStripes = 12;
        const hStripeH = ph / hStripes;
        for (let j = 0; j < hStripes; j++) {
          g.fillStyle = (j % 2 === 0) ? "rgba(255, 255, 255, 0.032)" : "rgba(0, 18, 6, 0.024)";
          g.fillRect(x0, z0 + j * hStripeH, pw, hStripeH);
        }

        // Micro-briznas orgánicas de hierba y desgaste sutil en bocas de gol
        for (let n = 0; n < 14000; n++) {
          const rx = x0 + Math.random() * pw;
          const rz = z0 + Math.random() * ph;
          g.fillStyle = (n % 2 === 0) ? "rgba(255,255,255,0.034)" : "rgba(0,22,6,0.044)";
          g.fillRect(rx, rz, 1.8, 2.2);
        }
        [m2pxX(-PITCH_L / 2 + 3.0), m2pxX(PITCH_L / 2 - 3.0)].forEach(wx => {
          const wear = g.createRadialGradient(wx, m2pxZ(0), 3, wx, m2pxZ(0), 7.2 * scaleX);
          wear.addColorStop(0, "rgba(124, 104, 64, 0.18)");
          wear.addColorStop(1, "rgba(124, 104, 64, 0)");
          g.fillStyle = wear;
          g.beginPath();
          g.arc(wx, m2pxZ(0), 7.2 * scaleX, 0, Math.PI * 2);
          g.fill();
        });

        // LÍNEAS DE CAL BLANCAS ULTRA NÍTIDAS CON REALCE DE PIGMENTO
        g.save();
        g.strokeStyle = "rgba(252, 254, 255, 0.98)";
        g.fillStyle = "#ffffff";
        g.lineWidth = Math.max(5.0, 0.25 * scaleX);
        g.lineJoin = "round";
        g.lineCap = "round";
        g.shadowColor = "rgba(255, 255, 255, 0.28)";
        g.shadowBlur = 1.5;

        // Bandas y líneas de fondo
        g.strokeRect(x0, z0, pw, ph);

        // Línea de medio campo
        const midX = m2pxX(0);
        const midZ = m2pxZ(0);
        g.beginPath();
        g.moveTo(midX, z0);
        g.lineTo(midX, z0 + ph);
        g.stroke();

        // Círculo central (radio 9.15m) y punto central
        g.beginPath();
        g.ellipse(midX, midZ, 9.15 * scaleX, 9.15 * scaleZ, 0, 0, Math.PI * 2);
        g.stroke();

        g.beginPath();
        g.arc(midX, midZ, 0.48 * scaleX, 0, Math.PI * 2);
        g.fill();

        // Áreas grandes (16.5m x 40.32m) y áreas pequeñas (5.5m x 18.32m) en ambos lados
        const penW = 16.5 * scaleX;
        const penH = 40.32 * scaleZ;
        const penTopZ = m2pxZ(-40.32 / 2);
        g.strokeRect(x0, penTopZ, penW, penH);
        g.strokeRect(x0 + pw - penW, penTopZ, penW, penH);

        const sixW = 5.5 * scaleX;
        const sixH = 18.32 * scaleZ;
        const sixTopZ = m2pxZ(-18.32 / 2);
        g.strokeRect(x0, sixTopZ, sixW, sixH);
        g.strokeRect(x0 + pw - sixW, sixTopZ, sixW, sixH);

        // Puntos de penalti (a 11m de cada línea de gol)
        const penSpotLeftX = m2pxX(-PITCH_L / 2 + 11.0);
        const penSpotRightX = m2pxX(PITCH_L / 2 - 11.0);
        g.beginPath();
        g.arc(penSpotLeftX, midZ, 0.44 * scaleX, 0, Math.PI * 2);
        g.arc(penSpotRightX, midZ, 0.44 * scaleX, 0, Math.PI * 2);
        g.fill();

        // Semicírculos de área (radio 9.15m desde el punto de penalti, fuera del área de 16.5m)
        const dAngle = Math.acos((16.5 - 11.0) / 9.15); // ~0.926 rad
        g.beginPath();
        g.ellipse(penSpotLeftX, midZ, 9.15 * scaleX, 9.15 * scaleZ, 0, -dAngle, dAngle);
        g.stroke();

        g.beginPath();
        g.ellipse(penSpotRightX, midZ, 9.15 * scaleX, 9.15 * scaleZ, 0, Math.PI - dAngle, Math.PI + dAngle);
        g.stroke();

        // 4 Arcos de córner (radio 1.0m)
        const cR = 1.15 * scaleX;
        g.beginPath(); g.arc(x0, z0, cR, 0, Math.PI * 0.5); g.stroke();
        g.beginPath(); g.arc(x0 + pw, z0, cR, Math.PI * 0.5, Math.PI); g.stroke();
        g.beginPath(); g.arc(x0 + pw, z0 + ph, cR, Math.PI, Math.PI * 1.5); g.stroke();
        g.beginPath(); g.arc(x0, z0 + ph, cR, Math.PI * 1.5, Math.PI * 2); g.stroke();

        // Líneas del área técnica junto a la banda
        g.strokeStyle = "rgba(255, 255, 255, 0.62)";
        g.lineWidth = Math.max(2.2, 0.14 * scaleX);
        g.strokeRect(m2pxX(-22), m2pxZ(PITCH_W / 2 + 1.0), 14 * scaleX, 3.2 * scaleZ);
        g.strokeRect(m2pxX(8), m2pxZ(PITCH_W / 2 + 1.0), 14 * scaleX, 3.2 * scaleZ);
        g.restore();

        const tex = new THREE.CanvasTexture(c);
        tex.anisotropy = maxAniso;
        tex.needsUpdate = true;
        return trackTex(tex);
      }

      // Mapa procedural de rugosidad y micro-relieve de hierba (roughnessMap + bumpMap)
      function buildPitchRoughnessBumpTexture() {
        const rw = 1024, rh = 677;
        const rc = document.createElement("canvas");
        rc.width = rw;
        rc.height = rh;
        const rg = rc.getContext("2d");

        rg.fillStyle = "#d4d4d8";
        rg.fillRect(0, 0, rw, rh);

        const numStripes = 18;
        const stripeW = rw / numStripes;
        for (let i = 0; i < numStripes; i++) {
          // Alternar rugosidad según dirección de peinado de las briznas de césped
          rg.fillStyle = (i % 2 === 0) ? "#c8c8d0" : "#dedee6";
          rg.fillRect(i * stripeW, 0, stripeW, rh);
        }

        for (let n = 0; n < 18000; n++) {
          const rx = Math.random() * rw;
          const ry = Math.random() * rh;
          rg.fillStyle = (n % 2 === 0) ? "rgba(255,255,255,0.14)" : "rgba(40,40,45,0.14)";
          rg.fillRect(rx, ry, 2, 2);
        }

        const rTex = new THREE.CanvasTexture(rc);
        rTex.anisotropy = maxAniso;
        rTex.needsUpdate = true;
        return disposableTextures.push(rTex), rTex;
      }

      const pitchBumpRoughTex = buildPitchRoughnessBumpTexture();
      const pitchGeo = trackGeo(new THREE.PlaneGeometry(TOTAL_W, TOTAL_H));
      const pitchMat = trackMat(new THREE.MeshStandardMaterial({
        map: buildPitchCanvasTexture(),
        bumpMap: pitchBumpRoughTex,
        bumpScale: 0.045,
        roughnessMap: pitchBumpRoughTex,
        roughness: matchWeather.id === "rain" ? 0.76 : 0.88,
        metalness: 0.02
      }));
      const pitchMesh = new THREE.Mesh(pitchGeo, pitchMat);
      pitchMesh.rotation.x = -Math.PI / 2;
      pitchMesh.receiveShadow = true;
      scene.add(pitchMesh);

      // Suelo oscuro perimetral amplio bajo las gradas para eliminar por completo cualquier vacío exterior
      const outerGroundGeo = trackGeo(new THREE.PlaneGeometry(340, 260));
      const outerGroundMat = trackMat(new THREE.MeshStandardMaterial({ color: 0x050912, roughness: 0.96, metalness: 0.02 }));
      const outerGround = new THREE.Mesh(outerGroundGeo, outerGroundMat);
      outerGround.rotation.x = -Math.PI / 2;
      outerGround.position.y = -0.05;
      outerGround.receiveShadow = true;
      scene.add(outerGround);

      // 4. BANDERINES DE CÓRNER 3D
      const cornerFlags = [];
      const poleGeo = trackGeo(new THREE.CylinderGeometry(0.055, 0.055, 1.55, 8));
      const poleMat = trackMat(new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 }));
      const flagGeo = trackGeo(new THREE.PlaneGeometry(0.62, 0.40, 3, 1));
      const flagMat = trackMat(new THREE.MeshStandardMaterial({
        color: 0xef4444,
        emissive: 0x450a0a,
        side: THREE.DoubleSide,
        roughness: 0.5
      }));

      [
        [-PITCH_L / 2, -PITCH_W / 2],
        [PITCH_L / 2, -PITCH_W / 2],
        [-PITCH_L / 2, PITCH_W / 2],
        [PITCH_L / 2, PITCH_W / 2]
      ].forEach(([cx, cz]) => {
        const fg = new THREE.Group();
        fg.position.set(cx, 0, cz);
        const pole = new THREE.Mesh(poleGeo, poleMat);
        pole.position.y = 0.775;
        pole.castShadow = true;
        fg.add(pole);

        const cloth = new THREE.Mesh(flagGeo, flagMat);
        cloth.position.set(0.31, 1.32, 0);
        fg.add(cloth);
        scene.add(fg);
        cornerFlags.push(cloth);
      });

      // 5. PORTERÍAS 3D PROFESIONALES CON REDES
      function buildNetTexture() {
        const nc = document.createElement("canvas");
        nc.width = 128;
        nc.height = 128;
        const ng = nc.getContext("2d");
        ng.clearRect(0, 0, 128, 128);
        ng.strokeStyle = "rgba(248, 250, 252, 0.78)";
        ng.lineWidth = 2.2;
        const step = 16;
        for (let i = 0; i <= 128; i += step) {
          ng.beginPath();
          ng.moveTo(i, 0); ng.lineTo(i, 128);
          ng.moveTo(0, i); ng.lineTo(128, i);
          ng.stroke();
        }
        const tex = new THREE.CanvasTexture(nc);
        tex.wrapS = THREE.RepeatWrapping;
        tex.wrapT = THREE.RepeatWrapping;
        tex.repeat.set(6, 3);
        return trackTex(tex);
      }

      const netTex = buildNetTexture();
      const netMat = trackMat(new THREE.MeshBasicMaterial({
        map: netTex,
        transparent: true,
        opacity: 0.75,
        side: THREE.DoubleSide,
        depthWrite: false
      }));
      const postMat = trackMat(new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.22,
        metalness: 0.18
      }));
      const stanchionMat = trackMat(new THREE.MeshStandardMaterial({
        color: 0x64748b,
        roughness: 0.45,
        metalness: 0.5
      }));

      function createGoal3D(goalX, dirSign) {
        // dirSign = -1 para portería local (se extiende hacia -X), +1 para visitante (se extiende hacia +X)
        const gGroup = new THREE.Group();
        gGroup.position.set(goalX, 0, 0);

        const goalW = 7.32;
        const halfW = goalW / 2; // 3.66m
        const goalH = 2.44;
        const depth = 2.25;
        const postR = 0.085;

        const vPostGeo = trackGeo(new THREE.CylinderGeometry(postR, postR, goalH, 16));
        const hBarGeo = trackGeo(new THREE.CylinderGeometry(postR, postR, goalW + postR * 2, 16));

        // Dos postes verticales
        const postNear = new THREE.Mesh(vPostGeo, postMat);
        postNear.position.set(0, goalH / 2, halfW);
        postNear.castShadow = true;
        gGroup.add(postNear);

        const postFar = new THREE.Mesh(vPostGeo, postMat);
        postFar.position.set(0, goalH / 2, -halfW);
        postFar.castShadow = true;
        gGroup.add(postFar);

        // Larguero horizontal
        const crossbar = new THREE.Mesh(hBarGeo, postMat);
        crossbar.rotation.x = Math.PI / 2;
        crossbar.position.set(0, goalH, 0);
        crossbar.castShadow = true;
        gGroup.add(crossbar);

        // Soportes traseros y base de red
        const backFrameGeo = trackGeo(new THREE.CylinderGeometry(0.045, 0.045, goalW, 10));
        const backBotBar = new THREE.Mesh(backFrameGeo, stanchionMat);
        backBotBar.rotation.x = Math.PI / 2;
        backBotBar.position.set(dirSign * depth, 0.05, 0);
        gGroup.add(backBotBar);

        const backTopBar = new THREE.Mesh(backFrameGeo, stanchionMat);
        backTopBar.rotation.x = Math.PI / 2;
        backTopBar.position.set(dirSign * (depth * 0.85), goalH * 0.96, 0);
        gGroup.add(backTopBar);

        const sideBotGeo = trackGeo(new THREE.CylinderGeometry(0.045, 0.045, depth, 8));
        [-halfW, halfW].forEach(zSide => {
          const sb = new THREE.Mesh(sideBotGeo, stanchionMat);
          sb.rotation.z = Math.PI / 2;
          sb.position.set(dirSign * (depth / 2), 0.05, zSide);
          gGroup.add(sb);
        });

        // Contenedor de mallas de red (permite deformación por impacto de gol)
        const netGroup = new THREE.Group();

        // Red trasera
        const backNetGeo = trackGeo(new THREE.PlaneGeometry(goalW, goalH, 8, 4));
        const backNet = new THREE.Mesh(backNetGeo, netMat);
        backNet.rotation.y = Math.PI / 2;
        backNet.position.set(dirSign * depth, goalH / 2, 0);
        netGroup.add(backNet);

        // Red superior (techo)
        const topNetGeo = trackGeo(new THREE.PlaneGeometry(depth, goalW));
        const topNet = new THREE.Mesh(topNetGeo, netMat);
        topNet.rotation.x = Math.PI / 2;
        topNet.position.set(dirSign * (depth / 2), goalH, 0);
        netGroup.add(topNet);

        // Redes laterales (izquierda y derecha)
        const sideNetGeo = trackGeo(new THREE.PlaneGeometry(depth, goalH));
        const sideNear = new THREE.Mesh(sideNetGeo, netMat);
        sideNear.position.set(dirSign * (depth / 2), goalH / 2, halfW);
        netGroup.add(sideNear);

        const sideFar = new THREE.Mesh(sideNetGeo, netMat);
        sideFar.position.set(dirSign * (depth / 2), goalH / 2, -halfW);
        netGroup.add(sideFar);

        gGroup.add(netGroup);
        scene.add(gGroup);
        return { gGroup, netGroup, dirSign };
      }

      const homeGoal3D = createGoal3D(-PITCH_L / 2, -1);
      const awayGoal3D = createGoal3D(PITCH_L / 2, 1);

      // 6. ESTADIO Y AMBIENTE: VALLAS PUBLICITARIAS PERIMETRALES Y GRADAS OSCURAS CON PÚBLICO MOTEADO
      function buildAdboardTexture() {
        const ac = document.createElement("canvas");
        ac.width = 2048;
        ac.height = 128;
        const ag = ac.getContext("2d");

        const sponsors = [
          { bg: "#0f172a", fg: "#38bdf8", accent: "#0284c7", text: "⚽ LALIGA EA SPORTS" },
          { bg: homeTeam.primaryColor || "#dc2626", fg: "#ffffff", accent: "#fbbf24", text: `🏟️ ${(homeTeam.name || "LOCAL").toUpperCase()}` },
          { bg: "#f8fafc", fg: "#1e1b4b", accent: "#e11d48", text: "FOOTBALL MANAGER 3D" },
          { bg: "#064e3b", fg: "#6ee7b7", accent: "#10b981", text: "⚡ ENTRENATE TE TE" },
          { bg: awayTeam.primaryColor || "#2563eb", fg: "#ffffff", accent: "#38bdf8", text: `🛡️ ${(awayTeam.name || "VISITANTE").toUpperCase()}` },
          { bg: "#18181b", fg: "#facc15", accent: "#f59e0b", text: "★ MATCH ENGINE TV ★" }
        ];

        const segW = ac.width / sponsors.length;
        sponsors.forEach((sp, i) => {
          const sx = i * segW;
          ag.fillStyle = sp.bg;
          ag.fillRect(sx, 0, segW, ac.height);

          // Franja diagonal decorativa estilo Premier/LaLiga
          ag.fillStyle = sp.accent;
          ag.beginPath();
          ag.moveTo(sx, 0);
          ag.lineTo(sx + 28, 0);
          ag.lineTo(sx + 10, ac.height);
          ag.lineTo(sx, ac.height);
          ag.closePath();
          ag.fill();

          // Borde superior LED brillante
          ag.fillStyle = "rgba(255,255,255,0.28)";
          ag.fillRect(sx, 0, segW, 6);

          ag.font = "900 44px 'Arial Black', Impact, sans-serif";
          ag.textAlign = "center";
          ag.textBaseline = "middle";
          ag.fillStyle = sp.fg;
          ag.fillText(sp.text, sx + segW / 2 + 8, ac.height / 2 + 2, segW - 36);
        });

        const tex = new THREE.CanvasTexture(ac);
        tex.wrapS = THREE.RepeatWrapping;
        tex.wrapT = THREE.ClampToEdgeWrapping;
        return trackTex(tex);
      }

      const adTex = buildAdboardTexture();
      const adMat = trackMat(new THREE.MeshStandardMaterial({
        map: adTex,
        roughness: 0.4,
        metalness: 0.1,
        emissive: 0x111827,
        emissiveIntensity: 0.25
      }));

      // Vallas LED en banda lejana (Z = -36.8), banda cercana (Z = +36.8) y ambos fondos (X = ±56.5)
      const adH = 1.05;
      const farAdGeo = trackGeo(new THREE.BoxGeometry(PITCH_L + 7.6, adH, 0.25));
      const farAd = new THREE.Mesh(farAdGeo, adMat);
      farAd.position.set(0, adH / 2, -PITCH_W / 2 - 2.9);
      farAd.castShadow = true;
      scene.add(farAd);

      const nearAd = new THREE.Mesh(farAdGeo, adMat);
      nearAd.position.set(0, adH / 2, PITCH_W / 2 + 3.4);
      scene.add(nearAd);

      const endAdGeo = trackGeo(new THREE.BoxGeometry(0.25, adH, PITCH_W + 6.3));
      const leftAd = new THREE.Mesh(endAdGeo, adMat);
      leftAd.position.set(-PITCH_L / 2 - 3.8, adH / 2, 0);
      leftAd.castShadow = true;
      scene.add(leftAd);

      const rightAd = new THREE.Mesh(endAdGeo, adMat);
      rightAd.position.set(PITCH_L / 2 + 3.8, adH / 2, 0);
      rightAd.castShadow = true;
      scene.add(rightAd);

      // Banquillos técnicos (Local y Visitante) en la banda
      const dugoutGeo = trackGeo(new THREE.BoxGeometry(10.5, 2.1, 1.8));
      const dugoutMat = trackMat(new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.5, metalness: 0.3 }));
      [-15, 15].forEach(bx => {
        const bench = new THREE.Mesh(dugoutGeo, dugoutMat);
        bench.position.set(bx, 1.05, -PITCH_W / 2 - 4.3);
        bench.castShadow = true;
        scene.add(bench);
      });

      // GRADAS OSCURAS ESCALONADAS CON PÚBLICO MOTEADO AL FONDO (Estilo Football Manager)
      function buildCrowdStandTexture() {
        const sc = document.createElement("canvas");
        sc.width = 1024;
        sc.height = 512;
        const sg = sc.getContext("2d");

        // Hormigón oscuro de las gradas
        sg.fillStyle = "#0f172a";
        sg.fillRect(0, 0, sc.width, sc.height);

        const rows = 26;
        const rowH = sc.height / rows;
        const homeCol = homeTeam.primaryColor || "#dc2626";
        const awayCol = awayTeam.primaryColor || "#2563eb";
        const palette = [
          homeCol, homeCol, homeCol,
          awayCol,
          "#e2e8f0", "#cbd5e1", "#334155", "#475569", "#1e293b", "#f59e0b", "#94a3b8"
        ];

        for (let r = 0; r < rows; r++) {
          const ry = r * rowH;
          sg.fillStyle = (r % 2 === 0) ? "#0f172a" : "#162033";
          sg.fillRect(0, ry, sc.width, rowH);

          // Línea de escalón de hormigón
          sg.fillStyle = "rgba(148, 163, 184, 0.12)";
          sg.fillRect(0, ry, sc.width, 2);

          // Público moteado en cada fila
          const cols = 150;
          const colW = sc.width / cols;
          for (let c = 0; c < cols; c++) {
            // Pasillos de escaleras amarillas cada 25 columnas
            if (c % 25 === 12 || c % 25 === 13) {
              sg.fillStyle = (c % 25 === 12) ? "#475569" : "#eab308";
              sg.fillRect(c * colW, ry, colW * 0.9, rowH * 0.8);
              continue;
            }
            const seed = (r * 73 + c * 31) % 100;
            if (seed < 14) continue; // Hueco de butaca oscura

            const col = palette[(r * 17 + c * 23) % palette.length];
            const px = c * colW + (r % 2) * 2;
            const py = ry + rowH * 0.52;

            // Torso moteado
            sg.fillStyle = col;
            sg.fillRect(px - 2.4, py - 2.2, 4.8, 5.2);

            // Cabeza del espectador
            sg.fillStyle = (seed % 3 === 0) ? "#d6a27a" : "#f1c27d";
            sg.beginPath();
            sg.arc(px, py - 3.8, 1.9, 0, Math.PI * 2);
            sg.fill();
          }
        }

        const tex = new THREE.CanvasTexture(sc);
        tex.wrapS = THREE.RepeatWrapping;
        tex.wrapT = THREE.ClampToEdgeWrapping;
        return trackTex(tex);
      }

      const crowdTex = buildCrowdStandTexture();
      const standMat = trackMat(new THREE.MeshStandardMaterial({
        map: crowdTex,
        roughness: 0.92,
        metalness: 0.05
      }));
      const concreteMat = trackMat(new THREE.MeshStandardMaterial({
        color: 0x0f172a,
        roughness: 0.9,
        metalness: 0.1
      }));
      const roofMat = trackMat(new THREE.MeshStandardMaterial({
        color: 0x1e293b,
        roughness: 0.7,
        metalness: 0.35
      }));

      // Función para crear una tribuna escalonada completa en cualquiera de los 4 costados
      function createStadiumStand(width, distFromCenter, rotY) {
        const stGroup = new THREE.Group();
        stGroup.rotation.y = rotY;

        // Muro bajo de primera fila (podium)
        const wallGeo = trackGeo(new THREE.BoxGeometry(width, 2.2, 1.5));
        const wallMesh = new THREE.Mesh(wallGeo, concreteMat);
        wallMesh.position.set(0, 1.1, -distFromCenter);
        stGroup.add(wallMesh);

        // Rampa principal de grada baja y alta con público moteado
        const tierSlopeGeo = trackGeo(new THREE.PlaneGeometry(width, 26));
        const tierSlope = new THREE.Mesh(tierSlopeGeo, standMat);
        tierSlope.rotation.x = Math.PI * 0.31; // Inclinación hacia el césped
        tierSlope.position.set(0, 9.2, -distFromCenter - 10.5);
        stGroup.add(tierSlope);

        // Cierre trasero oscuro y marquesina superior (evita ver vacío detrás de las bandas)
        const backWallGeo = trackGeo(new THREE.BoxGeometry(width + 16, 22, 3));
        const backWall = new THREE.Mesh(backWallGeo, concreteMat);
        backWall.position.set(0, 11, -distFromCenter - 21.5);
        stGroup.add(backWall);

        const roofGeo = trackGeo(new THREE.BoxGeometry(width + 16, 1.0, 16));
        const roof = new THREE.Mesh(roofGeo, roofMat);
        roof.position.set(0, 21.8, -distFromCenter - 14.5);
        stGroup.add(roof);

        scene.add(stGroup);
      }

      // 4 Gradas perimetrales (Norte/Fondo, Sur/Cámara, Oeste/Gol Local, Este/Gol Visitante) + Cerramiento de esquinas del anillo
      createStadiumStand(PITCH_L + 44, PITCH_W / 2 + 5.8, 0);               // Tribuna Norte (frente a la cámara TV)
      createStadiumStand(PITCH_L + 44, PITCH_W / 2 + 8.5, Math.PI);         // Tribuna Sur (detrás de cámara)
      createStadiumStand(PITCH_W + 44, PITCH_L / 2 + 6.5, Math.PI / 2);     // Fondo Oeste (Portería Local)
      createStadiumStand(PITCH_W + 44, PITCH_L / 2 + 6.5, -Math.PI / 2);    // Fondo Este (Portería Visitante)

      // Esquinas diagonales cerradas del estadio y anillo perimetral oscuro para eliminar cualquier hueco gris
      const cornerWedgeGeo = trackGeo(new THREE.BoxGeometry(28, 22, 6));
      [
        [-PITCH_L / 2 - 12, -PITCH_W / 2 - 11, Math.PI * 0.25],
        [PITCH_L / 2 + 12, -PITCH_W / 2 - 11, -Math.PI * 0.25],
        [-PITCH_L / 2 - 12, PITCH_W / 2 + 12, Math.PI * 0.75],
        [PITCH_L / 2 + 12, PITCH_W / 2 + 12, -Math.PI * 0.75]
      ].forEach(([cx, cz, ry]) => {
        const cw = new THREE.Mesh(cornerWedgeGeo, concreteMat);
        cw.position.set(cx, 11, cz);
        cw.rotation.y = ry;
        scene.add(cw);
      });

      // 4 Torres de iluminación en las esquinas del estadio
      const towerPoleGeo = trackGeo(new THREE.CylinderGeometry(0.6, 0.9, 34, 8));
      const towerHeadGeo = trackGeo(new THREE.BoxGeometry(6.5, 3.2, 1.2));
      const towerGlowMat = trackMat(new THREE.MeshBasicMaterial({ color: 0xfefce8 }));
      [
        [-PITCH_L / 2 - 14, -PITCH_W / 2 - 12, 0.6],
        [PITCH_L / 2 + 14, -PITCH_W / 2 - 12, -0.6],
        [-PITCH_L / 2 - 14, PITCH_W / 2 + 14, 2.5],
        [PITCH_L / 2 + 14, PITCH_W / 2 + 14, -2.5]
      ].forEach(([tx, tz, ry]) => {
        const tGroup = new THREE.Group();
        tGroup.position.set(tx, 0, tz);
        tGroup.rotation.y = ry;
        const pole = new THREE.Mesh(towerPoleGeo, roofMat);
        pole.position.y = 17;
        tGroup.add(pole);
        const head = new THREE.Mesh(towerHeadGeo, towerGlowMat);
        head.position.set(0, 33.5, 0);
        head.rotation.x = 0.35;
        tGroup.add(head);
        scene.add(tGroup);
      });

      // 7. MODELADO 3D ANATÓMICO ESTILO FOOTBALL MANAGER 27 (HUMANOIDES MULTI-ARTICULADOS)
      const jerseyTexCache = new Map();
      const faceTexCache = new Map();
      const sockTexCache = new Map();

      function getJerseyTexture(jerseyHex, collarHex, numHex, number, playerName, isKeeper) {
        const cleanLast = String(playerName || "").trim().split(/\s+/).slice(-1)[0].toUpperCase().slice(0, 11);
        const key = `${jerseyHex}_${collarHex}_${numHex}_${number}_${cleanLast}_${isKeeper ? 1 : 0}`;
        if (jerseyTexCache.has(key)) return jerseyTexCache.get(key);

        const jc = document.createElement("canvas");
        jc.width = 512;
        jc.height = 512;
        const jg = jc.getContext("2d");

        // Fondo de tela técnica deportiva
        jg.fillStyle = jerseyHex || "#ef4444";
        jg.fillRect(0, 0, 512, 512);

        // Micro-textura de tejido transpirable y sombreado anatómico de pecho/espalda
        for (let y = 0; y < 512; y += 6) {
          jg.fillStyle = (y % 12 === 0) ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.035)";
          jg.fillRect(0, y, 512, 3);
        }

        // Sombreado volumétrico (cilindro mapeado: 0.25 = frente pecho, 0.75 = espalda dorsal)
        const grad = jg.createLinearGradient(0, 0, 512, 0);
        grad.addColorStop(0.00, "rgba(0,0,0,0.22)");
        grad.addColorStop(0.18, "rgba(255,255,255,0.08)");
        grad.addColorStop(0.32, "rgba(0,0,0,0.08)");
        grad.addColorStop(0.50, "rgba(0,0,0,0.24)");
        grad.addColorStop(0.75, "rgba(255,255,255,0.06)");
        grad.addColorStop(1.00, "rgba(0,0,0,0.22)");
        jg.fillStyle = grad;
        jg.fillRect(0, 0, 512, 512);

        // Cuello y ribete deportivo
        jg.fillStyle = collarHex || "#ffffff";
        jg.fillRect(0, 0, 512, 26);
        jg.fillStyle = "rgba(0,0,0,0.18)";
        jg.fillRect(0, 26, 512, 6);

        // Costuras laterales y patrocinador sutil en pecho (zona x ~ 128)
        jg.fillStyle = "rgba(255,255,255,0.16)";
        jg.fillRect(4, 32, 12, 460);
        jg.fillRect(244, 32, 12, 460);

        // Escudo del club en pecho izquierdo (x ~ 162, y ~ 115)
        jg.save();
        jg.fillStyle = collarHex || "#ffffff";
        jg.beginPath();
        jg.moveTo(156, 98);
        jg.lineTo(180, 98);
        jg.lineTo(180, 120);
        jg.lineTo(168, 134);
        jg.lineTo(156, 120);
        jg.closePath();
        jg.fill();
        jg.strokeStyle = "rgba(15,23,42,0.55)";
        jg.lineWidth = 2.5;
        jg.stroke();
        jg.restore();

        // Pequeño dorsal / sponsor en el pecho (x ~ 128)
        jg.fillStyle = numHex || "#ffffff";
        jg.globalAlpha = 0.85;
        jg.font = "900 32px 'Arial Black', sans-serif";
        jg.textAlign = "center";
        jg.textBaseline = "middle";
        jg.fillText(`${number || 9}`, 110, 118);
        jg.fillRect(88, 185, 80, 10);
        jg.globalAlpha = 1.0;

        // ESPALDA (x ~ 384): Apellido + Dorsal grande nítido estilo retransmisión TV
        if (cleanLast) {
          jg.font = "800 30px 'Arial Narrow', Impact, sans-serif";
          jg.textAlign = "center";
          jg.textBaseline = "middle";
          jg.lineWidth = 5;
          jg.strokeStyle = "rgba(15, 23, 42, 0.72)";
          jg.strokeText(cleanLast, 384, 102);
          jg.fillStyle = numHex || "#ffffff";
          jg.fillText(cleanLast, 384, 102);
        }

        jg.font = "900 176px 'Arial Black', Impact, sans-serif";
        jg.textAlign = "center";
        jg.textBaseline = "middle";
        jg.lineWidth = 10;
        jg.strokeStyle = "rgba(15, 23, 42, 0.78)";
        jg.strokeText(`${number || 9}`, 384, 268);
        jg.fillStyle = numHex || "#ffffff";
        jg.fillText(`${number || 9}`, 384, 268);

        const tex = new THREE.CanvasTexture(jc);
        tex.needsUpdate = true;
        trackTex(tex);
        jerseyTexCache.set(key, tex);
        return tex;
      }

      function getFaceTexture(skinHexInt, hairHexInt, hasBeard) {
        const key = `${skinHexInt}_${hairHexInt}_${hasBeard ? 1 : 0}`;
        if (faceTexCache.has(key)) return faceTexCache.get(key);

        const fc = document.createElement("canvas");
        fc.width = 256;
        fc.height = 128;
        const fg = fc.getContext("2d");

        const skinStr = "#" + skinHexInt.toString(16).padStart(6, "0");
        const hairStr = "#" + hairHexInt.toString(16).padStart(6, "0");

        fg.fillStyle = skinStr;
        fg.fillRect(0, 0, 256, 128);

        // Sombreado sutil de mejillas y mandíbula
        const faceGrad = fg.createLinearGradient(0, 0, 0, 128);
        faceGrad.addColorStop(0, "rgba(255,255,255,0.08)");
        faceGrad.addColorStop(0.7, "rgba(0,0,0,0.04)");
        faceGrad.addColorStop(1, "rgba(0,0,0,0.16)");
        fg.fillStyle = faceGrad;
        fg.fillRect(0, 0, 256, 128);

        // Rostro centrado en u = 0.25 (x = 64) para esfera estándar Three.js mirando hacia +Z
        const cx = 64;
        // Cejas
        fg.fillStyle = hairStr;
        fg.fillRect(cx - 20, 50, 13, 3.5);
        fg.fillRect(cx + 7, 50, 13, 3.5);

        // Ojos realistas
        fg.fillStyle = "#f8fafc";
        fg.beginPath();
        fg.ellipse(cx - 13, 59, 5.2, 3.2, 0, 0, Math.PI * 2);
        fg.ellipse(cx + 13, 59, 5.2, 3.2, 0, 0, Math.PI * 2);
        fg.fill();

        fg.fillStyle = "#1e293b";
        fg.beginPath();
        fg.arc(cx - 13, 59, 2.3, 0, Math.PI * 2);
        fg.arc(cx + 13, 59, 2.3, 0, Math.PI * 2);
        fg.fill();

        // Sombra de nariz
        fg.fillStyle = "rgba(80, 40, 20, 0.22)";
        fg.beginPath();
        fg.moveTo(cx, 58);
        fg.lineTo(cx - 3.5, 73);
        fg.lineTo(cx + 3.5, 73);
        fg.closePath();
        fg.fill();

        // Barba / sombra facial opcional
        if (hasBeard) {
          fg.fillStyle = hairStr;
          fg.globalAlpha = 0.36;
          fg.beginPath();
          fg.ellipse(cx, 88, 22, 16, 0, 0, Math.PI * 2);
          fg.fill();
          fg.globalAlpha = 1.0;
        }

        // Boca
        fg.strokeStyle = "rgba(110, 52, 42, 0.65)";
        fg.lineWidth = 2.6;
        fg.beginPath();
        fg.moveTo(cx - 8, 83);
        fg.quadraticCurveTo(cx, 86, cx + 8, 83);
        fg.stroke();

        const tex = new THREE.CanvasTexture(fc);
        tex.needsUpdate = true;
        trackTex(tex);
        faceTexCache.set(key, tex);
        return tex;
      }

      function getSockTexture(socksHex, accentHex) {
        const key = `${socksHex}_${accentHex}`;
        if (sockTexCache.has(key)) return sockTexCache.get(key);
        const sc = document.createElement("canvas");
        sc.width = 64;
        sc.height = 128;
        const sg = sc.getContext("2d");
        sg.fillStyle = socksHex || "#ffffff";
        sg.fillRect(0, 0, 64, 128);
        // Franjas superiores de la media
        sg.fillStyle = accentHex || "#ffffff";
        sg.fillRect(0, 8, 64, 10);
        sg.fillRect(0, 24, 64, 6);
        // Vendaje blanco en tobillo (detalle clásico de futbolista)
        sg.fillStyle = "#f8fafc";
        sg.fillRect(0, 108, 64, 20);
        const tex = new THREE.CanvasTexture(sc);
        tex.needsUpdate = true;
        trackTex(tex);
        sockTexCache.set(key, tex);
        return tex;
      }

      // Geometrías anatómicas compartidas (altura final exacta 1.80m sobre campo 105x68m)
      // Siluetas esculpidas con THREE.LatheGeometry (perfiles curvos, nada cuadrado)
      function buildLatheGeo(profile, segments, remapV) {
        // Perfil siempre de abajo a arriba para que las normales apunten hacia fuera
        if (profile[0][1] > profile[profile.length - 1][1]) profile = profile.slice().reverse();
        const pts = profile.map(([r, y]) => new THREE.Vector2(Math.max(0.0005, r), y));
        const geo = new THREE.LatheGeometry(pts, segments || 20);
        if (remapV) {
          // UV vertical proporcional a la altura real para que la textura (dorsal/escudo) no se deforme
          const pos = geo.attributes.position;
          const uv = geo.attributes.uv;
          let yMin = Infinity, yMax = -Infinity;
          for (let i = 0; i < pos.count; i++) {
            const y = pos.getY(i);
            if (y < yMin) yMin = y;
            if (y > yMax) yMax = y;
          }
          const span = Math.max(0.0001, yMax - yMin);
          for (let i = 0; i < pos.count; i++) {
            uv.setY(i, (pos.getY(i) - yMin) / span);
          }
          uv.needsUpdate = true;
        }
        geo.computeVertexNormals();
        return trackGeo(geo);
      }

      // Torso atlético en V: cintura fina, dorsales y pecho marcados, hombros anchos y trapecio suave
      const sharedTorsoLatheGeo = buildLatheGeo([
        [0.000, -0.040], [0.150, -0.040], [0.172, -0.010], [0.176, 0.050],
        [0.168, 0.120], [0.166, 0.180], [0.180, 0.250], [0.205, 0.320],
        [0.226, 0.390], [0.238, 0.450], [0.236, 0.495], [0.215, 0.530],
        [0.170, 0.556], [0.115, 0.572], [0.070, 0.580], [0.000, 0.582]
      ], 28, true);
      const sharedCollarGeo = trackGeo(new THREE.TorusGeometry(0.082, 0.018, 8, 20));
      const sharedNeckGeo = buildLatheGeo([
        [0.000, -0.07], [0.090, -0.07], [0.078, -0.02], [0.066, 0.03], [0.064, 0.07], [0.000, 0.07]
      ], 14);
      const sharedShoulderCapGeo = trackGeo(new THREE.SphereGeometry(0.094, 16, 12));
      // Pantalón: cadera redondeada y perneras con caída natural acampanada
      const sharedPelvisGeo = buildLatheGeo([
        [0.000, -0.105], [0.150, -0.105], [0.196, -0.075], [0.212, -0.010],
        [0.206, 0.050], [0.186, 0.095], [0.000, 0.100]
      ], 24);
      const sharedShortLegGeo = buildLatheGeo([
        [0.108, 0.115], [0.116, 0.060], [0.122, -0.010], [0.130, -0.075], [0.136, -0.115], [0.131, -0.122]
      ], 18);
      const sharedHipJointGeo = trackGeo(new THREE.SphereGeometry(0.112, 16, 12));
      const sharedHeadGeo = trackGeo(new THREE.SphereGeometry(0.135, 20, 16));
      const sharedEarGeo = trackGeo(new THREE.SphereGeometry(0.026, 8, 8));
      const sharedHairCapGeo = trackGeo(new THREE.SphereGeometry(0.143, 18, 12, 0, Math.PI * 2, 0, Math.PI * 0.56));
      const sharedHairFadeGeo = buildLatheGeo([
        [0.000, -0.035], [0.135, -0.035], [0.132, 0.015], [0.105, 0.040], [0.000, 0.045]
      ], 16);
      const sharedHairBunGeo = trackGeo(new THREE.SphereGeometry(0.055, 10, 10));
      // Extremidades con perfil muscular (cuádriceps, gemelo, antebrazo)
      const sharedThighGeo = buildLatheGeo([
        [0.092, 0.185], [0.101, 0.110], [0.100, 0.030], [0.092, -0.050], [0.080, -0.130], [0.073, -0.185]
      ], 16);
      const sharedKneeCapGeo = trackGeo(new THREE.SphereGeometry(0.075, 14, 10));
      const sharedCalfGeo = buildLatheGeo([
        [0.072, 0.195], [0.079, 0.120], [0.077, 0.050], [0.064, -0.040], [0.052, -0.130], [0.048, -0.195]
      ], 16);
      const sharedAnkleGeo = trackGeo(new THREE.SphereGeometry(0.050, 12, 10));
      // Botas redondeadas: horma elipsoidal + puntera + talón + suela ovalada
      const sharedBootUpperGeo = trackGeo(new THREE.SphereGeometry(0.056, 16, 12));
      const sharedBootToeGeo = trackGeo(new THREE.SphereGeometry(0.052, 14, 10));
      const sharedBootHeelGeo = trackGeo(new THREE.SphereGeometry(0.048, 12, 10));
      const sharedBootSoleGeo = trackGeo(new THREE.CylinderGeometry(0.056, 0.056, 0.020, 20));
      const sharedSleeveGeo = buildLatheGeo([
        [0.080, 0.125], [0.083, 0.060], [0.078, -0.020], [0.072, -0.090], [0.070, -0.120]
      ], 16);
      const sharedUpperArmGeo = buildLatheGeo([
        [0.064, 0.020], [0.060, -0.060], [0.054, -0.120]
      ], 14);
      const sharedElbowCapGeo = trackGeo(new THREE.SphereGeometry(0.056, 12, 10));
      const sharedForearmGeo = buildLatheGeo([
        [0.054, 0.130], [0.058, 0.070], [0.052, 0.000], [0.043, -0.080], [0.038, -0.130]
      ], 14);
      const sharedWristGeo = trackGeo(new THREE.SphereGeometry(0.039, 10, 8));
      const sharedHandGeo = trackGeo(new THREE.SphereGeometry(0.048, 12, 10));
      const sharedGloveGeo = trackGeo(new THREE.SphereGeometry(0.062, 14, 10));
      const sharedCarrierRingGeo = trackGeo(new THREE.RingGeometry(0.48, 0.66, 28));
      const sharedShadowDiscGeo = trackGeo(new THREE.CircleGeometry(0.44, 18));

      const skinTones = [0xf5cba7, 0xe5b887, 0xd49b6a, 0x8d5524, 0x6b3e26, 0xf1c27d];
      const hairColors = [0x171412, 0x3b2314, 0x6b3e19, 0x0f172a, 0x9a6b32, 0x2c1e16];
      const bootColors = [0x111827, 0xf97316, 0x38bdf8, 0xfacc15, 0xec4899, 0x22c55e, 0xf8fafc];

      const shadowDiscMat = trackMat(new THREE.MeshBasicMaterial({
        color: 0x021206,
        transparent: true,
        opacity: 0.40,
        depthWrite: false
      }));
      const carrierRingMat = trackMat(new THREE.MeshBasicMaterial({
        color: 0xfbbf24,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.90
      }));
      const soleMat = trackMat(new THREE.MeshStandardMaterial({ color: 0x090d16, roughness: 0.7 }));

      function createPlayer3DModel(side, pData, index) {
        const root = new THREE.Group();
        const bodyGroup = new THREE.Group();
        root.add(bodyGroup);

        const kit = side === "home" ? kits.home : kits.away;
        const isGK = Boolean(pData.isKeeper);
        const jerseyHex = isGK ? (kit.keeper || "#10b981") : (kit.jersey || (side === "home" ? homeTeam.primaryColor : awayTeam.primaryColor) || "#ef4444");
        const shortsHex = isGK ? (kit.keeper || "#065f46") : (kit.shorts || "#ffffff");
        const socksHex = isGK ? (kit.keeper || "#10b981") : (kit.socks || jerseyHex);
        const collarHex = isGK ? "#ffffff" : (kit.collar || "#ffffff");
        const numHex = isGK ? "#0f172a" : (kit.number || "#ffffff");

        const seed = (pData.number || (index + 1)) * 17 + (side === "home" ? 3 : 11);
        const skinCol = skinTones[seed % skinTones.length];
        const hairCol = hairColors[(seed * 3) % hairColors.length];
        const bootCol = bootColors[(seed * 7) % bootColors.length];
        const hairStyle = seed % 5; // 0: clásico, 1: fade alto, 2: rapado, 3: rizado/volumen, 4: moño/coleta
        const hasBeard = (seed % 3) === 0;

        const jerseyMat = trackMat(new THREE.MeshStandardMaterial({
          map: getJerseyTexture(jerseyHex, collarHex, numHex, pData.number || (index + 1), pData.player?.name, isGK),
          roughness: 0.58,
          metalness: 0.04
        }));
        const solidJerseyMat = trackMat(new THREE.MeshStandardMaterial({ color: jerseyHex, roughness: 0.60, metalness: 0.04 }));
        const collarMat = trackMat(new THREE.MeshStandardMaterial({ color: collarHex, roughness: 0.55 }));
        const shortsMat = trackMat(new THREE.MeshStandardMaterial({ color: shortsHex, roughness: 0.65 }));
        const socksMat = trackMat(new THREE.MeshStandardMaterial({
          map: getSockTexture(socksHex, collarHex),
          roughness: 0.68
        }));
        const skinMat = trackMat(new THREE.MeshStandardMaterial({ color: skinCol, roughness: 0.58, metalness: 0.02 }));
        const faceMat = trackMat(new THREE.MeshStandardMaterial({
          map: getFaceTexture(skinCol, hairCol, hasBeard),
          roughness: 0.56,
          metalness: 0.02
        }));
        const hairMat = trackMat(new THREE.MeshStandardMaterial({ color: hairCol, roughness: 0.86 }));
        const bootMat = trackMat(new THREE.MeshStandardMaterial({ color: bootCol, roughness: 0.34, metalness: 0.18 }));
        const gloveMat = trackMat(new THREE.MeshStandardMaterial({ color: isGK ? 0xd9f99d : skinCol, roughness: 0.48 }));

        // Sombra de contacto en césped + Aro de portador
        const contactShadow = new THREE.Mesh(sharedShadowDiscGeo, shadowDiscMat);
        contactShadow.rotation.x = -Math.PI / 2;
        contactShadow.position.y = 0.02;
        root.add(contactShadow);

        const carrierRing = new THREE.Mesh(sharedCarrierRingGeo, carrierRingMat);
        carrierRing.rotation.x = -Math.PI / 2;
        carrierRing.position.y = 0.032;
        carrierRing.visible = false;
        root.add(carrierRing);

        // --- TREN SUPERIOR (Torso atlético en V esculpido con LatheGeometry + Hombros + Cuello + Cabeza) ---
        const torsoGroup = new THREE.Group();
        torsoGroup.position.set(0, 0.94, 0);
        bodyGroup.add(torsoGroup);

        // Pecho, espalda y cintura en una sola superficie curva continua con textura de camiseta
        const upperTorso = new THREE.Mesh(sharedTorsoLatheGeo, jerseyMat);
        upperTorso.scale.set(1.14, 1.0, 0.70);
        upperTorso.castShadow = true;
        upperTorso.receiveShadow = true;
        torsoGroup.add(upperTorso);

        // Cuello de la camiseta
        const collarRing = new THREE.Mesh(sharedCollarGeo, collarMat);
        collarRing.rotation.x = Math.PI / 2;
        collarRing.scale.set(1.0, 0.82, 1.0);
        collarRing.position.set(0, 0.575, 0);
        torsoGroup.add(collarRing);

        // Deltoides redondeados que funden torso y brazo sin cortes
        [-0.252, 0.252].forEach(sx => {
          const sh = new THREE.Mesh(sharedShoulderCapGeo, solidJerseyMat);
          sh.scale.set(1.0, 0.92, 0.88);
          sh.position.set(sx, 0.485, 0);
          sh.castShadow = true;
          torsoGroup.add(sh);
        });

        // Cuello anatómico y Cabeza con rostro + orejas + peinado variado
        const neck = new THREE.Mesh(sharedNeckGeo, skinMat);
        neck.position.set(0, 0.63, 0.005);
        neck.castShadow = true;
        torsoGroup.add(neck);

        const headGroup = new THREE.Group();
        headGroup.position.set(0, 0.79, 0.012);
        const headMesh = new THREE.Mesh(sharedHeadGeo, faceMat);
        headMesh.scale.set(0.88, 1.04, 0.95);
        headMesh.castShadow = true;
        headGroup.add(headMesh);

        // Orejas
        [-0.118, 0.118].forEach(ex => {
          const ear = new THREE.Mesh(sharedEarGeo, skinMat);
          ear.scale.set(0.65, 1.15, 0.8);
          ear.position.set(ex, 0.0, -0.01);
          headGroup.add(ear);
        });

        // Peinado según semilla del futbolista
        if (hairStyle !== 2) {
          const hairCap = new THREE.Mesh(sharedHairCapGeo, hairMat);
          hairCap.scale.set(hairStyle === 3 ? 0.98 : 0.91, hairStyle === 3 ? 1.12 : 1.02, 0.98);
          hairCap.rotation.x = -0.20;
          hairCap.position.set(0, 0.018, -0.008);
          hairCap.castShadow = true;
          headGroup.add(hairCap);

          if (hairStyle === 1) {
            const topFade = new THREE.Mesh(sharedHairFadeGeo, hairMat);
            topFade.scale.set(0.85, 1.0, 0.90);
            topFade.position.set(0, 0.115, 0.0);
            headGroup.add(topFade);
          } else if (hairStyle === 4) {
            const bun = new THREE.Mesh(sharedHairBunGeo, hairMat);
            bun.position.set(0, 0.07, -0.145);
            headGroup.add(bun);
          }
        }
        torsoGroup.add(headGroup);

        // --- BRAZOS MULTI-ARTICULADOS (Hombro -> Codo -> Muñeca -> Mano/Guante) con esferas de unión ---
        const armSkinMat = isGK ? solidJerseyMat : skinMat;
        function buildArticulatedArm(sideSign) {
          const armPivot = new THREE.Group();
          armPivot.position.set(sideSign * 0.272, 0.478, 0);

          // Esfera de hombro (mismo material que la manga) que rota con el brazo
          const shoulderJoint = new THREE.Mesh(sharedShoulderCapGeo, solidJerseyMat);
          shoulderJoint.scale.set(0.86, 0.86, 0.86);
          shoulderJoint.castShadow = true;
          armPivot.add(shoulderJoint);

          const sleeve = new THREE.Mesh(sharedSleeveGeo, solidJerseyMat);
          sleeve.position.y = -0.11;
          sleeve.castShadow = true;
          armPivot.add(sleeve);

          // Bíceps visible bajo la manga
          const upperArm = new THREE.Mesh(sharedUpperArmGeo, armSkinMat);
          upperArm.position.y = -0.225;
          upperArm.castShadow = true;
          armPivot.add(upperArm);

          const elbowPivot = new THREE.Group();
          elbowPivot.position.set(0, -0.255, 0);

          // Esfera de codo (mismo material que antebrazo) que oculta el corte al flexionar
          const elbowJoint = new THREE.Mesh(sharedElbowCapGeo, armSkinMat);
          elbowPivot.add(elbowJoint);

          const forearm = new THREE.Mesh(sharedForearmGeo, armSkinMat);
          forearm.position.y = -0.13;
          forearm.castShadow = true;
          elbowPivot.add(forearm);

          const wrist = new THREE.Mesh(sharedWristGeo, isGK ? gloveMat : skinMat);
          wrist.position.y = -0.262;
          elbowPivot.add(wrist);

          const hand = new THREE.Mesh(isGK ? sharedGloveGeo : sharedHandGeo, gloveMat);
          hand.scale.set(0.82, 1.12, 0.62);
          hand.position.y = -0.302;
          hand.castShadow = true;
          elbowPivot.add(hand);

          armPivot.add(elbowPivot);
          torsoGroup.add(armPivot);
          return { armPivot, elbowPivot };
        }

        const leftArmRig = buildArticulatedArm(-1);
        const rightArmRig = buildArticulatedArm(1);

        // --- PELVIS Y PANTALÓN CORTO (LatheGeometry redondeada) ---
        const pelvis = new THREE.Mesh(sharedPelvisGeo, shortsMat);
        pelvis.scale.set(1.04, 1.0, 0.76);
        pelvis.position.set(0, 0.88, 0);
        pelvis.castShadow = true;
        bodyGroup.add(pelvis);

        // --- PIERNAS MULTI-ARTICULADAS (Cadera -> Rodilla -> Tobillo -> Bota) con esferas de unión ---
        function buildArticulatedLeg(offsetX) {
          const hipPivot = new THREE.Group();
          hipPivot.position.set(offsetX, 0.84, 0);

          // Esfera de cadera (material del pantalón) para unir pelvis y pernera sin cortes
          const hipJoint = new THREE.Mesh(sharedHipJointGeo, shortsMat);
          hipJoint.scale.set(1.0, 0.95, 0.92);
          hipJoint.castShadow = true;
          hipPivot.add(hipJoint);

          // Pernera con caída natural que acompaña al muslo
          const shortLeg = new THREE.Mesh(sharedShortLegGeo, shortsMat);
          shortLeg.position.y = -0.085;
          shortLeg.castShadow = true;
          hipPivot.add(shortLeg);

          // Muslo atlético (cuádriceps)
          const thigh = new THREE.Mesh(sharedThighGeo, skinMat);
          thigh.position.y = -0.225;
          thigh.castShadow = true;
          hipPivot.add(thigh);

          // Pivote de rodilla (flexión natural al correr y chutar)
          const kneePivot = new THREE.Group();
          kneePivot.position.set(0, -0.41, 0);

          // Rótula esférica dentro del pivote: cubre la unión muslo-gemelo en cualquier flexión
          const kneeCap = new THREE.Mesh(sharedKneeCapGeo, skinMat);
          kneeCap.scale.set(1.0, 1.0, 1.02);
          kneeCap.castShadow = true;
          kneePivot.add(kneeCap);

          // Gemelo con media y franjas
          const calf = new THREE.Mesh(sharedCalfGeo, socksMat);
          calf.position.y = -0.195;
          calf.castShadow = true;
          kneePivot.add(calf);

          // Tobillo redondeado
          const ankle = new THREE.Mesh(sharedAnkleGeo, socksMat);
          ankle.position.y = -0.385;
          kneePivot.add(ankle);

          // Bota de fútbol redondeada: horma elipsoidal + puntera + talón + suela ovalada
          const bootGroup = new THREE.Group();
          bootGroup.position.set(0, -0.40, 0.04);

          const bootUpper = new THREE.Mesh(sharedBootUpperGeo, bootMat);
          bootUpper.scale.set(0.98, 0.78, 2.05);
          bootUpper.position.set(0, 0.002, 0.012);
          bootUpper.castShadow = true;
          bootGroup.add(bootUpper);

          const bootToe = new THREE.Mesh(sharedBootToeGeo, bootMat);
          bootToe.scale.set(0.96, 0.66, 1.15);
          bootToe.position.set(0, -0.014, 0.098);
          bootToe.castShadow = true;
          bootGroup.add(bootToe);

          const bootHeel = new THREE.Mesh(sharedBootHeelGeo, bootMat);
          bootHeel.scale.set(1.0, 0.92, 0.95);
          bootHeel.position.set(0, 0.004, -0.078);
          bootGroup.add(bootHeel);

          const bootSole = new THREE.Mesh(sharedBootSoleGeo, soleMat);
          bootSole.scale.set(1.0, 1.0, 2.35);
          bootSole.position.set(0, -0.044, 0.012);
          bootGroup.add(bootSole);

          kneePivot.add(bootGroup);
          hipPivot.add(kneePivot);
          bodyGroup.add(hipPivot);
          return { hipPivot, kneePivot };
        }

        const leftLegRig = buildArticulatedLeg(-0.112);
        const rightLegRig = buildArticulatedLeg(0.112);

        // Variación natural de estatura humana (1.76m - 1.88m)
        const heightScale = 0.96 + ((seed % 7) * 0.014);
        bodyGroup.scale.set(heightScale, heightScale, heightScale);

        // Etiqueta flotante con el nombre (visible solo en portador o receptor del pase)
        const buildNameTagTexture = (rawName, teamSide) => {
          const nc = document.createElement("canvas");
          nc.width = 320;
          nc.height = 76;
          const ng = nc.getContext("2d");
          const parts = String(rawName || "Jugador").trim().split(/\s+/);
          const shortLabel = parts.length > 1 ? `${parts[0][0]}. ${parts.slice(1).join(" ")}` : parts[0];
          const accent = teamSide === "home" ? (homeTeam.primaryColor || "#ef4444") : (awayTeam.primaryColor || "#3b82f6");

          ng.fillStyle = "rgba(15, 23, 42, 0.88)";
          ng.strokeStyle = accent;
          ng.lineWidth = 4;
          const rx = 10, ry = 10, rw = 300, rh = 56, rad = 16;
          ng.beginPath();
          ng.moveTo(rx + rad, ry);
          ng.lineTo(rx + rw - rad, ry);
          ng.quadraticCurveTo(rx + rw, ry, rx + rw, ry + rad);
          ng.lineTo(rx + rw, ry + rh - rad);
          ng.quadraticCurveTo(rx + rw, ry + rh, rx + rw - rad, ry + rh);
          ng.lineTo(rx + rad, ry + rh);
          ng.quadraticCurveTo(rx, ry + rh, rx, ry + rh - rad);
          ng.lineTo(rx, ry + rad);
          ng.quadraticCurveTo(rx, ry, rx + rad, ry);
          ng.closePath();
          ng.fill();
          ng.stroke();

          ng.fillStyle = "#ffffff";
          ng.font = "bold 28px Inter, system-ui, sans-serif";
          ng.textAlign = "center";
          ng.textBaseline = "middle";
          ng.fillText(shortLabel.slice(0, 18), 160, 39);

          const tex = new THREE.CanvasTexture(nc);
          tex.minFilter = THREE.LinearFilter;
          return trackTex(tex);
        };

        const nameSpriteMat = trackMat(new THREE.SpriteMaterial({
          map: buildNameTagTexture(pData.player?.name || `#${pData.number}`, side),
          transparent: true,
          depthTest: false,
          depthWrite: false
        }));
        const nameSprite = new THREE.Sprite(nameSpriteMat);
        nameSprite.position.set(0, 2.25, 0);
        nameSprite.scale.set(2.6, 0.62, 1);
        nameSprite.visible = false;
        nameSprite.renderOrder = 20;
        root.add(nameSprite);

        scene.add(root);
        return {
          root,
          bodyGroup,
          torsoGroup,
          headGroup,
          leftLeg: leftLegRig.hipPivot,
          leftKnee: leftLegRig.kneePivot,
          rightLeg: rightLegRig.hipPivot,
          rightKnee: rightLegRig.kneePivot,
          leftArm: leftArmRig.armPivot,
          leftElbow: leftArmRig.elbowPivot,
          rightArm: rightArmRig.armPivot,
          rightElbow: rightArmRig.elbowPivot,
          carrierRing,
          nameSprite,
          nameSpriteMat,
          buildNameTagTexture,
          lastLabelName: pData.player?.name || `#${pData.number}`,
          jerseyMat,
          solidJerseyMat,
          shortsMat,
          socksMat,
          skinMat,
          hairMat,
          bootMat,
          jerseyHex,
          shortsHex,
          socksHex,
          skinCol,
          hairCol,
          bootCol,
          heightScale,
          smoothSpeed: 0,
          kickT: 9,
          kickActive: false,
          prevKickPose: false,
          side,
          lastNumber: pData.number,
          isKeeper: isGK,
          yaw: side === "home" ? Math.PI / 2 : -Math.PI / 2,
          stridePhase: index * 1.3,
          prevX: simToWorldX(pData.curX ?? 50),
          prevZ: simToWorldZ(pData.curY ?? 50)
        };
      }

      const homeModels = simulator.home2D.map((p, i) => createPlayer3DModel("home", p, i));
      const awayModels = simulator.away2D.map((p, i) => createPlayer3DModel("away", p, i));

      // Balón 3D esférico con textura de pentágonos y sombra proyectada
      function buildBallTexture() {
        const bc = document.createElement("canvas");
        bc.width = 256;
        bc.height = 128;
        const bg = bc.getContext("2d");
        bg.fillStyle = "#ffffff";
        bg.fillRect(0, 0, 256, 128);

        // Pentágonos clásicos y detalles geométricos de balón oficial
        bg.fillStyle = "#0f172a";
        const spots = [
          [32, 32], [96, 28], [160, 32], [224, 28],
          [64, 64], [128, 64], [192, 64],
          [32, 98], [96, 100], [160, 98], [224, 100]
        ];
        spots.forEach(([sx, sy]) => {
          bg.beginPath();
          bg.arc(sx, sy, 12, 0, Math.PI * 2);
          bg.fill();
        });
        bg.strokeStyle = "#334155";
        bg.lineWidth = 2.5;
        for (let i = 0; i < spots.length - 1; i++) {
          bg.beginPath();
          bg.moveTo(spots[i][0], spots[i][1]);
          bg.lineTo(spots[i + 1][0], spots[i + 1][1]);
          bg.stroke();
        }
        const tex = new THREE.CanvasTexture(bc);
        return trackTex(tex);
      }

      const ballRadius = 0.25;
      const ballGeo = trackGeo(new THREE.SphereGeometry(ballRadius, 24, 24));
      const ballMat = trackMat(new THREE.MeshStandardMaterial({
        map: buildBallTexture(),
        roughness: 0.32,
        metalness: 0.08
      }));
      const ballMesh = new THREE.Mesh(ballGeo, ballMat);
      ballMesh.castShadow = true;
      ballMesh.receiveShadow = true;
      ballMesh.position.set(0, ballRadius, 0);
      scene.add(ballMesh);

      // Sombra de contacto directa bajo el balón para máxima claridad visual de altura
      const ballShadowGeo = trackGeo(new THREE.CircleGeometry(0.30, 20));
      const ballShadowMat = trackMat(new THREE.MeshBasicMaterial({
        color: 0x020617,
        transparent: true,
        opacity: 0.48,
        depthWrite: false
      }));
      const ballGroundShadow = new THREE.Mesh(ballShadowGeo, ballShadowMat);
      ballGroundShadow.rotation.x = -Math.PI / 2;
      ballGroundShadow.position.set(0, 0.025, 0);
      scene.add(ballGroundShadow);

      // Partículas 3D de lluvia si el clima del partido es lluvioso
      let rainSystem = null;
      if (matchWeather.id === "rain") {
        const rainCount = 900;
        const rainGeo = trackGeo(new THREE.BufferGeometry());
        const positions = new Float32Array(rainCount * 3);
        for (let i = 0; i < rainCount; i++) {
          positions[i * 3] = (Math.random() - 0.5) * 130;
          positions[i * 3 + 1] = Math.random() * 38;
          positions[i * 3 + 2] = (Math.random() - 0.5) * 85;
        }
        rainGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        const rainMat = trackMat(new THREE.PointsMaterial({
          color: 0xbae6fd,
          size: 0.28,
          transparent: true,
          opacity: 0.52
        }));
        rainSystem = new THREE.Points(rainGeo, rainMat);
        scene.add(rainSystem);
      }

      // Interacción al tocar el canvas: alternar ángulo de cámara 3D manteniendo TV Broadcast por defecto
      const camBadgeEl = container.querySelector("#camera-mode-badge");
      targetCanvas.onclick = () => {
        if (cameraMode === "broadcast") {
          cameraMode = "action";
          if (camBadgeEl) camBadgeEl.innerHTML = `<span>🎥 3D ZOOM</span>`;
        } else if (cameraMode === "action") {
          cameraMode = "tactical";
          if (camBadgeEl) camBadgeEl.innerHTML = `<span>🎥 3D TÁCTICA</span>`;
        } else {
          cameraMode = "broadcast";
          if (camBadgeEl) camBadgeEl.innerHTML = `<span>🎥 3D TV</span>`;
        }
      };

      let prevBallWX = 0;
      let prevBallWZ = 0;
      let smoothFocusX = 0;
      let smoothFocusZ = 0;
      let lastCamRenderTs = performance.now();

      function updateAndRender(closestLiveP, minLiveDist) {
        const rect = targetCanvas.getBoundingClientRect();
        const w = rect.width > 0 ? rect.width : 480;
        const h = rect.height > 0 ? rect.height : 290;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        if (targetCanvas.width !== Math.round(w * dpr) || targetCanvas.height !== Math.round(h * dpr)) {
          renderer.setSize(w, h, false);
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        }

        const nowMs = performance.now();
        const frameDt = Math.min(0.05, Math.max(0.004, (nowMs - lastCamRenderTs) * 0.001));
        lastCamRenderTs = nowMs;
        const nowSec = nowMs * 0.001;

        // Ondulación suave de banderines de córner y marquesina LED
        cornerFlags.forEach((fl, idx) => {
          fl.rotation.y = Math.sin(nowSec * 4.5 + idx) * 0.18;
        });

        // Deformación elástica de las redes de portería tras un gol
        if (netRippleH > 0.005) {
          netRippleH *= 0.92;
          const wave = Math.sin(nowSec * 24) * netRippleH * 0.22;
          homeGoal3D.netGroup.scale.set(1 + netRippleH * 0.25 + wave, 1, 1 + wave * 0.4);
        } else {
          homeGoal3D.netGroup.scale.set(1, 1, 1);
        }
        if (netRippleA > 0.005) {
          netRippleA *= 0.92;
          const wave = Math.sin(nowSec * 24) * netRippleA * 0.22;
          awayGoal3D.netGroup.scale.set(1 + netRippleA * 0.25 + wave, 1, 1 + wave * 0.4);
        } else {
          awayGoal3D.netGroup.scale.set(1, 1, 1);
        }

        // Posición 3D del balón
        const ballWX = simToWorldX(simulator.ball.x);
        const ballWZ = simToWorldZ(simulator.ball.y);
        // En simulación continua y replayBuffer, usar siempre la altura física real de simulator.ball.z
        const ballWY = ballRadius + simToWorldY(simulator.ball.z);

        const bvx = ballWX - prevBallWX;
        const bvz = ballWZ - prevBallWZ;
        prevBallWX = ballWX;
        prevBallWZ = ballWZ;

        ballMesh.position.set(ballWX, ballWY, ballWZ);
        ballMesh.rotation.z -= bvx * 1.6;
        ballMesh.rotation.x += bvz * 1.6;

        ballGroundShadow.position.set(ballWX, 0.025, ballWZ);
        const heightScale = Math.max(0.45, 1 - (ballWY - ballRadius) * 0.12);
        ballGroundShadow.scale.set(heightScale, heightScale, 1);
        ballShadowMat.opacity = Math.max(0.14, 0.48 * heightScale);

        // Jugador focal: quien conduce o, en cuanto suelta el pase, el receptor objetivo
        const focusPlayer = simulator.useRealTime
          ? (simulator.ball.carrier || simulator.ball.passTarget || (minLiveDist < 4.5 ? closestLiveP : null))
          : (minLiveDist < 5.8 ? closestLiveP : null);

        // Animación continua de vallas LED perimetrales estilo TV
        if (adTex) {
          adTex.offset.x = (nowSec * 0.025) % 1;
        }

        // Actualizar los 22 jugadores 3D (11 Locales + 11 Visitantes)
        const syncTeamModels = (simArr, modelsArr) => {
          simArr.forEach((p, idx) => {
            const m = modelsArr[idx];
            if (!m) return;

            // Si hubo sustitución y cambió el dorsal o nombre, actualizar texturas
            if (p.number && p.number !== m.lastNumber) {
              m.lastNumber = p.number;
              const kit = m.side === "home" ? kits.home : kits.away;
              const jerseyHex = m.isKeeper ? (kit.keeper || "#10b981") : (kit.jersey || (m.side === "home" ? homeTeam.primaryColor : awayTeam.primaryColor) || "#ef4444");
              const collarHex = m.isKeeper ? "#ffffff" : (kit.collar || "#ffffff");
              const numHex = m.isKeeper ? "#0f172a" : (kit.number || "#ffffff");
              m.jerseyMat.map = getJerseyTexture(jerseyHex, collarHex, numHex, p.number, p.player?.name, m.isKeeper);
              m.jerseyMat.needsUpdate = true;
            }
            const curName = p.player?.name || `#${p.number}`;
            if (m.nameSpriteMat && curName !== m.lastLabelName) {
              m.lastLabelName = curName;
              m.nameSpriteMat.map = m.buildNameTagTexture(curName, m.side);
              m.nameSpriteMat.needsUpdate = true;
            }

            const wx = simToWorldX(p.curX);
            const wz = simToWorldZ(p.curY);
            const wy = Math.max(0, (p.curZ || 0) * 1.15);

            const vx = wx - m.prevX;
            const vz = wz - m.prevZ;
            const speed = Math.hypot(vx, vz);
            m.prevX = wx;
            m.prevZ = wz;

            m.root.position.set(wx, wy, wz);

            // Orientación corporal suave (lerp del ángulo): mira hacia donde corre o hacia el balón
            let targetYaw = m.yaw;
            if (simulator.useRealTime && p.facingX !== undefined && p.facingZ !== undefined) {
              if ((p.speedMps || 0) > 0.45) {
                targetYaw = Math.atan2(p.facingX, p.facingZ);
              } else {
                const dbx = ballWX - wx;
                const dbz = ballWZ - wz;
                if (Math.hypot(dbx, dbz) > 0.15) {
                  targetYaw = Math.atan2(dbx, dbz);
                }
              }
            } else if (speed > 0.018) {
              targetYaw = Math.atan2(vx, vz);
            } else {
              const dbx = ballWX - wx;
              const dbz = ballWZ - wz;
              if (Math.hypot(dbx, dbz) > 0.2) {
                targetYaw = Math.atan2(dbx, dbz);
              }
            }
            const angleDiff = Math.atan2(Math.sin(targetYaw - m.yaw), Math.cos(targetYaw - m.yaw));
            m.yaw += angleDiff * 0.14;
            m.bodyGroup.rotation.y = m.yaw;

            // Seguimiento natural de cabeza hacia el balón
            if (m.headGroup) {
              const ballYaw = Math.atan2(ballWX - wx, ballWZ - wz);
              const headDelta = Math.atan2(Math.sin(ballYaw - m.yaw), Math.cos(ballYaw - m.yaw));
              m.headGroup.rotation.y = Math.max(-0.65, Math.min(0.65, headDelta * 0.65));
            }

            // Aro indicador y etiqueta flotante solo sobre portador o receptor del pase
            const isFocus = (p === focusPlayer);
            m.carrierRing.visible = isFocus;
            if (m.nameSprite) {
              m.nameSprite.visible = isFocus;
            }
            if (isFocus) {
              const pulse = 1 + Math.sin(nowSec * 8) * 0.08;
              m.carrierRing.scale.set(pulse, pulse, 1);
            }

            // Animación procedural fluida (independiente de FPS): carrera biomecánica, golpeo en 3 fases y poses especiales
            const simPose = p.pose;
            const dtA = Math.max(0.001, Math.min(0.05, frameDt || (1 / 60)));
            const kJoint = 1 - Math.exp(-14 * dtA);
            const damp = (cur, target, k) => cur + (target - cur) * (k === undefined ? kJoint : k);

            // Velocidad real medida en el visor (m/s) suavizada para evitar saltos de ritmo
            const measuredMps = Math.min(10.5, speed / dtA);
            m.smoothSpeed = (m.smoothSpeed || 0) + (measuredMps - (m.smoothSpeed || 0)) * (1 - Math.exp(-7 * dtA));
            const mps = m.smoothSpeed;

            const isKickPose = (simPose === "kick" || simPose === "SHOT_FOLLOW_THROUGH" || simPose === "PASS_DELIVERY" || simPose === "SHOOT" || simPose === "PASS");
            if (isKickPose && !m.prevKickPose) {
              m.kickT = 0;
              m.kickActive = true;
            }
            m.prevKickPose = isKickPose;
            if (m.kickActive) {
              m.kickT += dtA;
              if (!isKickPose && m.kickT > 0.62) m.kickActive = false;
            }

            let tBodyY = 0, tBodyRX = 0, tBodyRZ = 0;
            let tTorsoRX = 0.02, tTorsoRY = 0, tTorsoRZ = 0;
            let tLLegX = 0, tRLegX = 0, tLLegZ = 0, tRLegZ = 0, tLKneeX = 0.10, tRKneeX = 0.10;
            let tLArmX = 0.04, tRArmX = 0.04, tLArmZ = -0.10, tRArmZ = 0.10;
            let tLElbowX = -0.30, tRElbowX = -0.30;
            let k = kJoint;

            if (simPose === "dive" || simPose === "DIVE_LEFT" || simPose === "DIVE_RIGHT") {
              const dir = simPose === "DIVE_RIGHT" ? -1 : (ballWZ >= wz ? -1 : 1);
              tBodyY = 0.35;
              tBodyRZ = dir * 1.28;
              tLArmX = -2.65; tRArmX = -2.65;
              tLElbowX = -0.15; tRElbowX = -0.15;
              tLLegX = 0.22; tRLegX = -0.18;
              tLKneeX = 0.35; tRKneeX = 0.45;
              k = 1 - Math.exp(-10 * dtA);
            } else if (simPose === "SLIDE_BLOCK" || simPose === "slide") {
              tBodyY = -0.35;
              tBodyRX = -0.92;
              tLLegX = -1.15; tRLegX = 0.45;
              tLKneeX = 0.15; tRKneeX = 1.25;
              tLArmX = -0.5; tRArmX = 0.65;
              tLElbowX = -0.6; tRElbowX = -0.8;
              k = 1 - Math.exp(-10 * dtA);
            } else if (simPose === "jump" || simPose === "HEADER") {
              tBodyY = 0.48;
              tTorsoRX = 0.20;
              tLLegX = -0.22; tRLegX = 0.18;
              tLKneeX = 0.68; tRKneeX = 0.72;
              tLArmX = -0.45; tRArmX = -0.45;
              tLArmZ = -0.55; tRArmZ = 0.55;
              tLElbowX = -0.75; tRElbowX = -0.75;
              k = 1 - Math.exp(-10 * dtA);
            } else if (simPose === "celebrate" || simPose === "CELEBRATE_JUMP") {
              tBodyY = Math.abs(Math.sin(nowSec * 10 + idx)) * 0.36;
              tLArmX = -2.55; tRArmX = -2.55;
              tLArmZ = -0.35; tRArmZ = 0.35;
              tLElbowX = -0.25; tRElbowX = -0.25;
              tLLegX = 0.2; tRLegX = -0.2;
              tLKneeX = 0.45; tRKneeX = 0.45;
            } else if (m.kickActive) {
              // GOLPEO EN 3 FASES: armado (pierna atrás, rodilla flexionada) -> impacto (latigazo) -> acompañamiento
              const t = m.kickT;
              const ease = (x) => x * x * (3 - 2 * x);
              let legX, kneeX;
              if (t < 0.17) {
                const u = ease(t / 0.17);
                legX = 0.78 * u;
                kneeX = 0.15 + 1.25 * u;
                tTorsoRX = -0.04 - 0.08 * u;
                tTorsoRY = 0.22 * u;
              } else if (t < 0.29) {
                const u = ease((t - 0.17) / 0.12);
                legX = 0.78 - 1.98 * u;
                kneeX = 1.40 - 1.25 * u;
                tTorsoRY = 0.22 - 0.50 * u;
                tTorsoRX = -0.12 + 0.02 * u;
              } else {
                const u = ease(Math.min(1, (t - 0.29) / 0.33));
                legX = -1.20 + 0.75 * u;
                kneeX = 0.15 + 0.20 * u;
                tTorsoRY = -0.28 + 0.20 * u;
                tTorsoRX = -0.10 + 0.08 * u;
              }
              tRLegX = legX;
              tRKneeX = kneeX;
              tLLegX = 0.16;
              tLKneeX = 0.32;
              tBodyY = -0.035;
              // Brazos de equilibrio: el contrario abierto y adelantado, el del lado del golpeo atrás
              tLArmX = -0.45; tLArmZ = -0.72; tLElbowX = -0.55;
              tRArmX = 0.55; tRArmZ = 0.30; tRElbowX = -0.70;
              tTorsoRZ = 0.06;
              k = 1 - Math.exp(-26 * dtA);
            } else {
              // CARRERA BIOMECÁNICA: cadencia y amplitud dependientes de la velocidad real (trote -> sprint)
              const gaitW = clamp((mps - 0.25) / 1.4, 0, 1);
              const strideHz = 0.85 + Math.min(mps, 9) * 0.135;
              m.stridePhase += Math.PI * 2 * strideHz * dtA * (0.35 + 0.65 * gaitW);
              const ph = m.stridePhase;
              const s = Math.sin(ph);
              const c = Math.cos(ph);
              const sprintF = clamp((mps - 3.5) / 4.5, 0, 1);

              const hipAmp = (0.22 + Math.min(mps, 9) * 0.075) * gaitW;
              const kneeAmp = (0.45 + Math.min(mps, 9) * 0.15) * gaitW;
              const armAmp = (0.16 + Math.min(mps, 9) * 0.085) * gaitW;

              // Caderas en oposición (avance = rotación negativa)
              tLLegX = -s * hipAmp;
              tRLegX = s * hipAmp;
              // Rodilla: flexión máxima en la fase de recobro (pierna pasando bajo el cuerpo hacia delante),
              // leve amortiguación en el apoyo y talón alto al esprintar
              const swingL = Math.max(0, c);
              const swingR = Math.max(0, -c);
              tLKneeX = 0.10 + kneeAmp * Math.pow(swingL, 1.4) + 0.14 * gaitW * Math.max(0, s) * (1 - swingL);
              tRKneeX = 0.10 + kneeAmp * Math.pow(swingR, 1.4) + 0.14 * gaitW * Math.max(0, -s) * (1 - swingR);

              // Brazos contrarios a las piernas con codos más cerrados al esprintar
              tLArmX = s * armAmp + 0.04;
              tRArmX = -s * armAmp + 0.04;
              tLArmZ = -0.10 - 0.05 * sprintF;
              tRArmZ = 0.10 + 0.05 * sprintF;
              const elbowBase = 0.30 + (0.55 + 0.45 * sprintF) * gaitW;
              tLElbowX = -elbowBase - 0.22 * gaitW * Math.max(0, -s);
              tRElbowX = -elbowBase - 0.22 * gaitW * Math.max(0, s);

              // Rebote vertical (2 por zancada), inclinación del tronco hacia delante y contra-rotación de hombros
              tBodyY = Math.abs(s) * Math.min(0.055, 0.007 * mps) * gaitW - 0.012 * gaitW;
              tTorsoRX = 0.03 + Math.min(0.30, 0.028 * mps) * gaitW;
              tTorsoRY = s * (0.05 + 0.06 * sprintF) * gaitW;
              tBodyRZ = c * 0.025 * gaitW;

              // Inclinación hacia el interior de la curva al cambiar de dirección a velocidad
              tBodyRZ += clamp(-angleDiff * 0.9 * Math.min(1, mps / 6), -0.18, 0.18);

              if (gaitW < 1) {
                // Reposo activo: respiración, peso repartido, rodillas ligeramente flexionadas
                const idleW = 1 - gaitW;
                const br = Math.sin(nowSec * 2.2 + idx * 0.7);
                tBodyY += br * 0.006 * idleW;
                tTorsoRX += br * 0.012 * idleW;
                tLArmX += br * 0.03 * idleW;
                tRArmX -= br * 0.03 * idleW;
                tLKneeX += 0.06 * idleW;
                tRKneeX += 0.06 * idleW;
                tLLegZ = -0.03 * idleW;
                tRLegZ = 0.03 * idleW;
              }
            }

            m.bodyGroup.position.y = damp(m.bodyGroup.position.y, tBodyY, k);
            m.bodyGroup.rotation.x = damp(m.bodyGroup.rotation.x, tBodyRX, k);
            m.bodyGroup.rotation.z = damp(m.bodyGroup.rotation.z, tBodyRZ, k);
            if (m.torsoGroup) {
              m.torsoGroup.rotation.x = damp(m.torsoGroup.rotation.x, tTorsoRX, k);
              m.torsoGroup.rotation.y = damp(m.torsoGroup.rotation.y, tTorsoRY, k);
              m.torsoGroup.rotation.z = damp(m.torsoGroup.rotation.z, tTorsoRZ, k);
            }
            m.leftLeg.rotation.x = damp(m.leftLeg.rotation.x, tLLegX, k);
            m.rightLeg.rotation.x = damp(m.rightLeg.rotation.x, tRLegX, k);
            m.leftLeg.rotation.z = damp(m.leftLeg.rotation.z, tLLegZ, k);
            m.rightLeg.rotation.z = damp(m.rightLeg.rotation.z, tRLegZ, k);
            if (m.leftKnee) m.leftKnee.rotation.x = damp(m.leftKnee.rotation.x, tLKneeX, k);
            if (m.rightKnee) m.rightKnee.rotation.x = damp(m.rightKnee.rotation.x, tRKneeX, k);
            m.leftArm.rotation.x = damp(m.leftArm.rotation.x, tLArmX, k);
            m.rightArm.rotation.x = damp(m.rightArm.rotation.x, tRArmX, k);
            m.leftArm.rotation.z = damp(m.leftArm.rotation.z, tLArmZ, k);
            m.rightArm.rotation.z = damp(m.rightArm.rotation.z, tRArmZ, k);
            if (m.leftElbow) m.leftElbow.rotation.x = damp(m.leftElbow.rotation.x, tLElbowX, k);
            if (m.rightElbow) m.rightElbow.rotation.x = damp(m.rightElbow.rotation.x, tRElbowX, k);
          });
        };

        syncTeamModels(simulator.home2D, homeModels);
        syncTeamModels(simulator.away2D, awayModels);

        // Actualizar lluvia 3D si está activa
        if (rainSystem) {
          const posAttr = rainSystem.geometry.attributes.position;
          for (let i = 0; i < posAttr.count; i++) {
            let py = posAttr.getY(i) - 1.15;
            let px = posAttr.getX(i) - 0.18;
            if (py < 0) {
              py = 36;
              px = (Math.random() - 0.5) * 130;
            }
            posAttr.setXYZ(i, px, py, posAttr.getZ(i));
          }
          posAttr.needsUpdate = true;
        }

        // CÁMARA ESTILO RETRANSMISIÓN TV CON DOBLE INTERPOLACIÓN EXPONENCIAL (LERP SIN TIRONES) Y ZOOM EN LAS ÁREAS
        // Primero filtramos el punto focal del balón para absorber pases rápidos o rebotes bruscos
        const focusAlpha = 1 - Math.exp(-3.6 * frameDt);
        smoothFocusX += (ballWX - smoothFocusX) * focusAlpha;
        smoothFocusZ += (ballWZ - smoothFocusZ) * focusAlpha;

        const absBallX = Math.abs(smoothFocusX);
        const areaProximity = Math.max(0, Math.min(1, (absBallX - 22) / 28)); // 0 en centro, -> 1 al acercarse al área
        const highlightBoost = currentHighlightData ? 0.45 : 0;
        const zoomFactor = Math.min(1, areaProximity + highlightBoost);

        let targetCamX, targetCamY, targetCamZ, targetFov;
        let targetLookX, targetLookY, targetLookZ;

        if (cameraMode === "tactical") {
          targetCamX = smoothFocusX * 0.38;
          targetCamY = 44;
          targetCamZ = 50 + smoothFocusZ * 0.12;
          targetFov = 40;
          targetLookX = smoothFocusX * 0.55;
          targetLookY = 0.4;
          targetLookZ = smoothFocusZ * 0.25;
        } else if (cameraMode === "action") {
          targetCamX = smoothFocusX * 0.80;
          targetCamY = 20 - zoomFactor * 2.5;
          targetCamZ = 31 + smoothFocusZ * 0.30 - zoomFactor * 3.5;
          targetFov = 33 - zoomFactor * 2.5;
          targetLookX = smoothFocusX * 0.92;
          targetLookY = 0.8;
          targetLookZ = smoothFocusZ * 0.45;
        } else {
          // "broadcast" (Por defecto): Cámara TV cercana a la acción (Y=21.5, Z=36.0, FOV=35) con seguimiento suave y ligero zoom al área
          targetCamX = smoothFocusX * 0.65;
          targetCamY = 21.5 - zoomFactor * 2.2;
          targetCamZ = (36.0 - zoomFactor * 3.2) + smoothFocusZ * 0.22;
          targetFov = 35 - zoomFactor * 2.0;

          targetLookX = smoothFocusX * 0.72;
          targetLookY = 0.55;
          targetLookZ = smoothFocusZ * 0.28 - 1.2;
        }

        // Interpolación exponencial independiente de FPS (1 - exp(-k * dt)) para eliminar cualquier tirón
        const camPosLerp = 1 - Math.exp(-3.0 * frameDt);
        const camLookLerp = 1 - Math.exp(-3.8 * frameDt);
        camera.position.x += (targetCamX - camera.position.x) * camPosLerp;
        camera.position.y += (targetCamY - camera.position.y) * camPosLerp;
        camera.position.z += (targetCamZ - camera.position.z) * camPosLerp;

        camLookCurrent.x += (targetLookX - camLookCurrent.x) * camLookLerp;
        camLookCurrent.y += (targetLookY - camLookCurrent.y) * camLookLerp;
        camLookCurrent.z += (targetLookZ - camLookCurrent.z) * camLookLerp;
        camera.lookAt(camLookCurrent);

        if (Math.abs(camera.fov - targetFov) > 0.02) {
          camera.fov += (targetFov - camera.fov) * camPosLerp;
          camera.updateProjectionMatrix();
        }

        renderer.render(scene, camera);
      }

      function dispose() {
        try {
          disposableTextures.forEach(t => t.dispose && t.dispose());
          disposableGeometries.forEach(g => g.dispose && g.dispose());
          disposableMaterials.forEach(m => m.dispose && m.dispose());
          renderer.dispose();
        } catch (e) {}
      }

      return { updateAndRender, dispose };
    }

    let lastRealTimeTs = null;

    function drawPitch() {
      if (!canvas) return;

      const nowTs = performance.now();
      const dtSec = lastRealTimeTs !== null
        ? Math.min(0.05, Math.max(0.004, (nowTs - lastRealTimeTs) / 1000))
        : (1 / 60);
      lastRealTimeTs = nowTs;

      // Inicializar motor 3D Three.js si está disponible (para jugadas clave)
      ensureThreeLoadedAndInit();

      // Si hay un highlight o jugada a balón parado activa, avanzar el replayBuffer a 1x (60 FPS interpolados)
      // sin que ninguna animación legacy sobreescriba curX/curY de home2D y away2D
      const is3DHighlightActive = Boolean(simulator.activeReplay || simulator.isHighlightRunning || simulator.isSetPieceRunning);
      if (is3DHighlightActive && typeof simulator.stepReplayPlayback === "function") {
        simulator.stepReplayPlayback(dtSec);
      }

      if (is3DHighlightActive) {
        if (threeEngine && canvas3d) {
          canvas3d.style.display = "block";
          canvas.style.display = "none";

          // Buscar al futbolista poseedor o más cercano al balón en el replay 3D
          let closestLiveP = simulator.ball.carrier || null;
          let minLiveDist = closestLiveP ? 0.5 : 999;
          if (!closestLiveP) {
            [...simulator.home2D, ...simulator.away2D].forEach(p => {
              const d = Math.hypot(p.curX - simulator.ball.x, p.curY - simulator.ball.y);
              if (d < minLiveDist) {
                minLiveDist = d;
                closestLiveP = p;
              }
            });
          }
          threeEngine.updateAndRender(closestLiveP, minLiveDist);
        } else {
          if (canvas3d) canvas3d.style.display = "none";
          canvas.style.display = "block";
          if (!ctx) ctx = canvas.getContext("2d");
          if (ctx) {
            resizeCanvas();
            const w = canvas.width;
            const h = canvas.height;
            const pDim = drawPitch2D(ctx, w, h);
            const { padX, padY, pitchW, pitchH, dpr } = pDim;
            simulator.home2D.forEach(p => {
              drawPlayerToken2D(ctx, p, "home", (p === simulator.ball.carrier), padX, padY, pitchW, pitchH, dpr);
            });
            simulator.away2D.forEach(p => {
              drawPlayerToken2D(ctx, p, "away", (p === simulator.ball.carrier), padX, padY, pitchW, pitchH, dpr);
            });
            drawBallToken2D(ctx, simulator.ball.x, simulator.ball.y, padX, padY, pitchW, pitchH, dpr);
            drawWeatherOverlay(ctx, w, h, matchWeather.id);
          }
        }
      } else {
        // MODO FAST_SIM (Tiempo entre jugadas clave):
        // Mostrar las posiciones físicas reales curX/curY calculadas por el motor autónomo a 20 Hz sin sobreescribirlas
        if (canvas3d) canvas3d.style.display = "none";
        canvas.style.display = "block";
        if (!ctx) ctx = canvas.getContext("2d");
        if (ctx) {
          resizeCanvas();
          const w = canvas.width;
          const h = canvas.height;

          // Buscar jugador poseedor o más cercano al balón en 2D
          let closestLiveP = simulator.ball.carrier || null;
          let minLiveDist = closestLiveP ? 0.5 : 999;
          if (!closestLiveP) {
            [...simulator.home2D, ...simulator.away2D].forEach(p => {
              const d = Math.hypot(p.curX - simulator.ball.x, p.curY - simulator.ball.y);
              if (d < minLiveDist) {
                minLiveDist = d;
                closestLiveP = p;
              }
            });
          }

          const pDim = drawPitch2D(ctx, w, h);
          const { padX, padY, pitchW, pitchH, dpr } = pDim;
          simulator.home2D.forEach(p => {
            drawPlayerToken2D(ctx, p, "home", (p === closestLiveP && minLiveDist < 5.5), padX, padY, pitchW, pitchH, dpr);
          });
          simulator.away2D.forEach(p => {
            drawPlayerToken2D(ctx, p, "away", (p === closestLiveP && minLiveDist < 5.5), padX, padY, pitchW, pitchH, dpr);
          });
          drawBallToken2D(ctx, simulator.ball.x, simulator.ball.y, padX, padY, pitchW, pitchH, dpr);
          drawWeatherOverlay(ctx, w, h, matchWeather.id);
        }
      }

      if (!simulator.isFinished) {
        requestAnimationFrame(drawPitch);
      }
    }
    requestAnimationFrame(drawPitch);

    // Actualización de UI
    function updateMatchUI(state) {
      const elTimer = container.querySelector("#match-timer");
      const elHScore = container.querySelector("#home-score");
      const elAScore = container.querySelector("#away-score");
      if (elTimer) {
        if (state.isHalfTime) {
          elTimer.textContent = "Descanso";
          elTimer.className = "px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-mono font-bold";
        } else {
          elTimer.textContent = state.formattedMinute || `${state.minute}'`;
          const isAdded = (!simulator.halfTimeTriggered && !simulator.isSecondHalf && state.minute > 45) || (state.minute > 90);
          elTimer.className = isAdded
            ? "px-2.5 py-0.5 rounded-full bg-amber-500/30 text-amber-300 font-mono font-extrabold animate-pulse"
            : "px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 font-mono font-bold animate-pulse";
        }
      }
      if (elHScore) elHScore.textContent = state.homeScore;
      if (elAScore) elAScore.textContent = state.awayScore;

      const elPossH = container.querySelector("#stat-poss-h");
      const elPossA = container.querySelector("#stat-poss-a");
      const barPossH = container.querySelector("#bar-poss-h");
      const barPossA = container.querySelector("#bar-poss-a");
      if (elPossH) elPossH.textContent = state.stats.possession.home;
      if (elPossA) elPossA.textContent = state.stats.possession.away;
      if (barPossH) barPossH.style.width = `${state.stats.possession.home}%`;
      if (barPossA) barPossA.style.width = `${state.stats.possession.away}%`;

      const sShH = container.querySelector("#stat-shots-h");
      const sShA = container.querySelector("#stat-shots-a");
      const sOnH = container.querySelector("#stat-ontarget-h");
      const sOnA = container.querySelector("#stat-ontarget-a");
      const sCrH = container.querySelector("#stat-corners-h");
      const sCrA = container.querySelector("#stat-corners-a");
      const sFlH = container.querySelector("#stat-fouls-h");
      const sFlA = container.querySelector("#stat-fouls-a");
      if (sShH) sShH.textContent = state.stats.shots.home;
      if (sShA) sShA.textContent = state.stats.shots.away;
      if (sOnH) sOnH.textContent = state.stats.shotsOnTarget.home;
      if (sOnA) sOnA.textContent = state.stats.shotsOnTarget.away;
      if (sCrH) sCrH.textContent = state.stats.corners.home;
      if (sCrA) sCrA.textContent = state.stats.corners.away;
      if (sFlH) sFlH.textContent = state.stats.fouls.home;
      if (sFlA) sFlA.textContent = state.stats.fouls.away;

      const subsBadge = container.querySelector("#subs-count-badge");
      const remaining = isUserHome ? state.homeSubsRemaining : state.awaySubsRemaining;
      const windows = isUserHome ? state.homeWindowsRemaining : state.awayWindowsRemaining;
      if (subsBadge) {
        subsBadge.textContent = `${remaining} rest. (${windows} vent.)`;
        if (windows <= 0 || remaining <= 0) {
          subsBadge.className = "px-2 py-0.5 rounded-full bg-red-900/60 text-red-300 text-[10px] font-mono";
        } else {
          subsBadge.className = "px-2 py-0.5 rounded-full bg-black/40 text-[10px] font-mono";
        }
      }

      // Actualizar estado de Gritos desde la Banda y Charla activa (Mejoras 1 y 2)
      const boostBadge = container.querySelector("#active-boost-badge");
      if (boostBadge) {
        if (state.activeShout) {
          const left = Math.max(1, (state.activeShout.expiresAtMinute || state.minute) - state.minute);
          boostBadge.textContent = `${state.activeShout.icon} ${state.activeShout.label} (${left}')`;
          boostBadge.className = "text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/60 text-amber-300 animate-pulse truncate max-w-[195px]";
        } else if (state.activeTeamTalk) {
          const left = Math.max(1, (state.activeTeamTalk.expiresAtMinute || state.minute) - state.minute);
          boostBadge.textContent = `${state.activeTeamTalk.icon} Charla: ${state.activeTeamTalk.label} (${left}')`;
          boostBadge.className = "text-[9px] font-bold px-2 py-0.5 rounded-full bg-sky-500/20 border border-sky-400/50 text-sky-300 truncate max-w-[195px]";
        } else if (state.activeCrowdRoar) {
          const left = Math.max(1, (state.activeCrowdRoar.expiresAtMinute || state.minute) - state.minute);
          boostBadge.textContent = `🏟️ Rugido Grada (+0.4% aliento) (${left}')`;
          boostBadge.className = "text-[9px] font-black px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-400 text-amber-300 animate-pulse truncate max-w-[195px]";
        } else if (state.shoutCooldownUntil > state.minute) {
          const cd = state.shoutCooldownUntil - state.minute;
          boostBadge.textContent = `⏳ Voz en descanso (${cd} min)`;
          boostBadge.className = "text-[9px] font-bold px-2 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-slate-400 truncate max-w-[195px]";
        } else {
          boostBadge.textContent = "✅ Banda lista para dar órdenes";
          boostBadge.className = "text-[9px] font-bold px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 truncate max-w-[195px]";
        }
      }

      container.querySelectorAll(".btn-touchline-shout").forEach(btn => {
        const sId = btn.dataset.shout;
        const isCurrentActive = state.activeShout && state.activeShout.id === sId;
        const onCooldown = state.shoutCooldownUntil > state.minute && !isCurrentActive;
        if (isCurrentActive) {
          btn.className = "btn-touchline-shout py-1.5 px-1 rounded-lg bg-amber-500/25 border-2 border-amber-400 text-[9px] font-extrabold text-amber-300 flex flex-col items-center justify-center gap-0.5 shadow transition";
        } else if (onCooldown) {
          btn.className = "btn-touchline-shout py-1.5 px-1 rounded-lg bg-slate-950/60 border border-slate-800/60 text-[9px] font-bold text-slate-500 opacity-60 flex flex-col items-center justify-center gap-0.5 cursor-not-allowed transition";
        } else {
          btn.className = "btn-touchline-shout py-1.5 px-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-[9px] font-extrabold text-slate-200 flex flex-col items-center justify-center gap-0.5 active:scale-95 transition";
        }
      });

      // Actualizar botón de Aliento a la Grada (si el usuario juega de local)
      const btnRally = container.querySelector("#btn-rally-crowd");
      const btnRallyText = container.querySelector("#btn-rally-crowd-text");
      const btnRallyBadge = container.querySelector("#btn-rally-crowd-badge");
      if (btnRally) {
        const isLosingOrDrawing = state.homeScore <= state.awayScore;
        const isCooldown = (state.crowdRoarCooldownUntil || 0) > state.minute;
        const isUnlocked = Boolean(state.crowdRoarUnlockedByHighlight);
        const canTrigger = isLosingOrDrawing && (!isCooldown || isUnlocked);

        if (state.activeCrowdRoar) {
          const left = Math.max(1, (state.activeCrowdRoar.expiresAtMinute || state.minute) - state.minute);
          btnRally.disabled = true;
          btnRally.className = "flex-1 py-1.5 px-2 rounded-xl bg-emerald-500/25 border-2 border-emerald-400 text-[9.5px] font-black text-emerald-300 flex items-center justify-between gap-1.5 shadow-lg shadow-emerald-500/20 animate-pulse";
          if (btnRallyText) btnRallyText.textContent = `¡Estadio enardecido! (${left}')`;
          if (btnRallyBadge) {
            btnRallyBadge.textContent = "+4% EMPUJE";
            btnRallyBadge.className = "px-1.5 py-0.5 rounded-full bg-emerald-400 text-slate-950 text-[8px] font-black uppercase";
          }
        } else if (!isLosingOrDrawing) {
          btnRally.disabled = true;
          btnRally.className = "flex-1 py-1.5 px-2 rounded-xl bg-slate-950/60 border border-slate-800 text-[9.5px] font-bold text-slate-500 opacity-60 flex items-center justify-between gap-1.5 cursor-not-allowed";
          if (btnRallyText) btnRallyText.textContent = "Grada tranquila (vas ganando)";
          if (btnRallyBadge) {
            btnRallyBadge.textContent = "Calma";
            btnRallyBadge.className = "px-1.5 py-0.5 rounded-full bg-slate-800 text-slate-500 text-[8px] font-bold uppercase";
          }
        } else if (canTrigger) {
          btnRally.disabled = false;
          btnRally.className = "flex-1 py-1.5 px-2 rounded-xl bg-gradient-to-r from-amber-500/30 to-rose-500/30 hover:from-amber-500/40 hover:to-rose-500/40 border-2 border-amber-400 text-[9.5px] font-black text-amber-200 flex items-center justify-between gap-1.5 shadow-md active:scale-95 transition cursor-pointer";
          if (btnRallyText) btnRallyText.textContent = isUnlocked ? "¡Pedir rugido a la grada! (Jugada clave)" : "¡Pedir aliento a la afición!";
          if (btnRallyBadge) {
            btnRallyBadge.textContent = "LISTO ⚡";
            btnRallyBadge.className = "px-1.5 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[8px] font-black uppercase animate-bounce";
          }
        } else {
          const cd = (state.crowdRoarCooldownUntil || 0) - state.minute;
          btnRally.disabled = true;
          btnRally.className = "flex-1 py-1.5 px-2 rounded-xl bg-slate-950/60 border border-slate-800 text-[9.5px] font-bold text-slate-500 opacity-60 flex items-center justify-between gap-1.5 cursor-not-allowed";
          if (btnRallyText) btnRallyText.textContent = `Grada recuperando el aliento (${cd} min)`;
          if (btnRallyBadge) {
            btnRallyBadge.textContent = "Espera jugada";
            btnRallyBadge.className = "px-1.5 py-0.5 rounded-full bg-slate-800 text-slate-500 text-[8px] font-bold uppercase";
          }
        }
      }

      // Sincronización continua del botón de pausa / reanudar
      const elIconPP = container.querySelector("#play-pause-icon");
      const elTextPP = container.querySelector("#play-pause-text");
      if (elIconPP && elTextPP) {
        if (simulator.isHighlightRunning || simulator.isSetPieceRunning) {
          if (simulator.pauseRequested) {
            elIconPP.textContent = "▶";
            elTextPP.textContent = "Pausa pedida";
          } else {
            elIconPP.textContent = "⏸";
            elTextPP.textContent = "Pausar";
          }
        } else if (!simulator.isRunning || simulator.isHalfTime) {
          elIconPP.textContent = "▶";
          elTextPP.textContent = "Reanudar";
        } else {
          elIconPP.textContent = "⏸";
          elTextPP.textContent = "Pausar";
        }
      }
    }

    function handleHalfTimeSequence(htState) {
      hideAssistantAdviceCard();
      const modalHT = container.querySelector("#modal-halftime");
      const htBadge = container.querySelector("#ht-modal-badge");
      const htHScore = container.querySelector("#ht-home-score");
      const htAScore = container.querySelector("#ht-away-score");
      const htPossH = container.querySelector("#ht-stat-poss-h");
      const htPossA = container.querySelector("#ht-stat-poss-a");
      const htBarPossH = container.querySelector("#ht-bar-poss-h");
      const htBarPossA = container.querySelector("#ht-bar-poss-a");
      const htShotsH = container.querySelector("#ht-shots-h");
      const htShotsA = container.querySelector("#ht-shots-a");
      const htTargetH = container.querySelector("#ht-ontarget-h");
      const htTargetA = container.querySelector("#ht-ontarget-a");
      const htSubsBadge = container.querySelector("#ht-subs-badge");

      if (htBadge) {
        htBadge.textContent = `⏸️ DESCANSO (Final 1ª Parte · 45+${simulator.firstHalfExtra}')`;
      }
      if (htHScore) htHScore.textContent = htState.homeScore;
      if (htAScore) htAScore.textContent = htState.awayScore;
      if (htPossH) htPossH.textContent = htState.stats.possession.home;
      if (htPossA) htPossA.textContent = htState.stats.possession.away;
      if (htBarPossH) htBarPossH.style.width = `${htState.stats.possession.home}%`;
      if (htBarPossA) htBarPossA.style.width = `${htState.stats.possession.away}%`;
      if (htShotsH) htShotsH.textContent = htState.stats.shots.home;
      if (htShotsA) htShotsA.textContent = htState.stats.shots.away;
      if (htTargetH) htTargetH.textContent = htState.stats.shotsOnTarget.home;
      if (htTargetA) htTargetA.textContent = htState.stats.shotsOnTarget.away;

      const remainingSubs = isUserHome ? htState.homeSubsRemaining : htState.awaySubsRemaining;
      if (htSubsBadge) htSubsBadge.textContent = `${remainingSubs} rest. (Descanso: no gasta ventana)`;

      // Mostrar mejor jugador de la 1ª parte (Mejora 5)
      const htMvpPreview = container.querySelector("#ht-mvp-preview");
      if (htMvpPreview && htState.currentMvp) {
        const mvpTeamShort = htState.currentMvp.teamSide === "home" ? homeTeam.shortName : awayTeam.shortName;
        htMvpPreview.innerHTML = `
          <span>⭐ Destacado 1ªP: <b class="text-white">${htState.currentMvp.name}</b> (${mvpTeamShort})</span>
          <span class="px-1.5 py-0.5 rounded bg-amber-500/20 border border-amber-400/50 text-amber-300 font-mono font-black">${htState.currentMvp.rating.toFixed(1)}</span>
        `;
      }

      // Reiniciar estado de charla de descanso (Mejora 1)
      const htTalkFeedback = container.querySelector("#ht-talk-feedback");
      if (htTalkFeedback) {
        htTalkFeedback.classList.add("hidden");
        htTalkFeedback.textContent = "";
      }
      container.querySelectorAll(".btn-ht-talk").forEach(btn => {
        btn.disabled = false;
        btn.classList.remove("ring-2", "ring-amber-400", "bg-amber-500/20", "opacity-50");
        btn.onclick = () => {
          const talkId = btn.dataset.talk;
          const res = simulator.applyTeamTalk("ht", talkId, false);
          container.querySelectorAll(".btn-ht-talk").forEach(b => {
            b.disabled = true;
            if (b === btn) {
              b.classList.add("ring-2", "ring-amber-400", "bg-amber-500/20");
            } else {
              b.classList.add("opacity-50");
            }
          });
          if (htTalkFeedback && res) {
            htTalkFeedback.textContent = `${res.feedback || res.label}`;
            htTalkFeedback.classList.remove("hidden");
          }
          updateMatchUI(simulator.getState());
        };
      });

      const elTimer = container.querySelector("#match-timer");
      if (elTimer) {
        elTimer.textContent = "Descanso";
        elTimer.className = "px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-mono font-bold";
      }
      if (iconPP) iconPP.textContent = "▶";
      if (textPP) textPP.textContent = "Reanudar";

      if (modalHT) modalHT.classList.remove("hidden");
    }

    function showMatchAlert(alert) {
      const box = container.querySelector("#match-alert-box");
      const content = container.querySelector("#match-alert-content");
      if (!box || !content) return;
      const msgText = typeof alert === "string" ? alert : (alert?.text || "");
      if (!msgText) return;
      content.textContent = msgText;
      box.classList.remove("opacity-0", "-translate-y-2");
      box.classList.add("opacity-100", "translate-y-0");

      if (alertTimeout) clearTimeout(alertTimeout);
      alertTimeout = setTimeout(() => {
        box.classList.remove("opacity-100", "translate-y-0");
        box.classList.add("opacity-0", "-translate-y-2");
      }, 2200);
    }

    // Botones de control
    const btnPlayPause = container.querySelector("#btn-play-pause");
    const iconPP = container.querySelector("#play-pause-icon");
    const textPP = container.querySelector("#play-pause-text");

    btnPlayPause.onclick = () => {
      if (simulator.isHalfTime) {
        container.querySelector("#modal-halftime")?.classList.add("hidden");
        simulator.resumeSecondHalf();
        iconPP.textContent = "⏸";
        textPP.textContent = "Pausar";
        showMatchAlert({ text: "📣 ¡Comienza la 2ª Parte!" });
        return;
      }
      if (simulator.isHighlightRunning || simulator.isSetPieceRunning) {
        if (!simulator.pauseRequested) {
          simulator.pauseRequested = true;
          iconPP.textContent = "▶";
          textPP.textContent = "Pausa pedida";
          showMatchAlert({ text: "⏸ Pausa solicitada: se pausará al terminar la jugada" });
        } else {
          simulator.pauseRequested = false;
          iconPP.textContent = "⏸";
          textPP.textContent = "Pausar";
          showMatchAlert({ text: "▶ Pausa cancelada: el juego continuará" });
        }
        return;
      }
      if (simulator.isRunning) {
        simulator.pause();
        iconPP.textContent = "▶";
        textPP.textContent = "Reanudar";
      } else {
        simulator.start();
        iconPP.textContent = "⏸";
        textPP.textContent = "Pausar";
      }
    };

    container.querySelectorAll(".btn-speed").forEach(b => {
      b.onclick = () => {
        const spd = parseFloat(b.dataset.speed);
        simulator.setSpeed(spd);
        container.querySelectorAll(".btn-speed").forEach(x => {
          x.classList.remove("bg-sky-500", "text-white", "shadow");
          x.classList.add("text-slate-400");
        });
        b.classList.remove("text-slate-400");
        b.classList.add("bg-sky-500", "text-white", "shadow");
      };
    });

    // Botones de Gritos desde la Banda en vivo (Mejora 2)
    container.querySelectorAll(".btn-touchline-shout").forEach(btn => {
      btn.onclick = () => {
        const shoutId = btn.dataset.shout;
        const res = simulator.triggerShout(shoutId);
        if (!res.success) {
          showMatchAlert({ text: `⏳ ${res.reason}` });
          return;
        }
        showMatchAlert({ text: `${res.shout.icon} ¡Orden desde la banda: ${res.shout.label}!` });
        updateFMCommentary(res.shout.alertText || `📣 Gritas desde el área técnica: "${res.shout.label}"`, "tactical");
        updateMatchUI(simulator.getState());
      };
    });

    // Botón de Aliento a la Grada (Remontada en casa)
    const btnRallyClick = container.querySelector("#btn-rally-crowd");
    if (btnRallyClick) {
      btnRallyClick.onclick = () => {
        const res = simulator.triggerCrowdRoar();
        if (!res.success) {
          showMatchAlert({ text: `⏳ ${res.reason}` });
          return;
        }
        showMatchAlert({ text: `🏟️ ¡El estadio ruge y empuja al equipo! (+0.4% aliento de remontada)` });
        updateFMCommentary(`🏟️ Pides el aliento de la grada: todo el estadio se levanta y ruge al unísono para guiar la remontada del equipo.`, "tactical");
        updateMatchUI(simulator.getState());
      };
    }

    container.querySelector("#btn-skip-end").onclick = () => {
      clearAllMatchUiTimeouts();
      currentHighlightData = null;
      isKickoffInProgress = false;
      container.querySelector("#modal-setpiece")?.classList.add("hidden");
      container.querySelector("#modal-halftime")?.classList.add("hidden");
      container.querySelector("#modal-halftime-tactics")?.classList.add("hidden");
      container.querySelector("#modal-injury-alert")?.classList.add("hidden");
      container.querySelector("#modal-live-subs")?.classList.add("hidden");
      container.querySelector("#kickoff-badge")?.classList.add("hidden");
      const hud = container.querySelector("#highlight-action-hud");
      if (hud) {
        hud.classList.remove("opacity-100", "translate-y-0");
        hud.classList.add("opacity-0", "-translate-y-2");
      }
      const goalOverlay = container.querySelector("#goal-cinematic");
      if (goalOverlay) {
        goalOverlay.classList.remove("opacity-100", "scale-100");
        goalOverlay.classList.add("opacity-0", "pointer-events-none", "scale-95");
      }
      const subOverlay = container.querySelector("#sub-cinematic");
      if (subOverlay) {
        subOverlay.classList.remove("opacity-100", "scale-100");
        subOverlay.classList.add("opacity-0", "pointer-events-none", "scale-95");
      }
      simulator.skipToEnd();
    };

    // Botón para pasar la visualización de la jugada clave activa en directo
    const btnSkipHighlight = container.querySelector("#btn-skip-highlight");
    if (btnSkipHighlight) {
      btnSkipHighlight.onclick = (e) => {
        e.stopPropagation();
        if (simulator.skipCurrentHighlight) {
          simulator.skipCurrentHighlight();
          showMatchAlert({ text: "⏭ Jugada clave saltada" });
        }
      };
    }

    // Selector / Toggle de Modo Jugadas Clave (Elegir verlas o pasarlas automáticamente)
    const btnToggleHl = container.querySelector("#btn-toggle-hl-mode");
    const iconToggleHl = container.querySelector("#btn-toggle-hl-icon");
    const textToggleHl = container.querySelector("#btn-toggle-hl-text");

    const updateHlModeUI = () => {
      if (userShowHighlights) {
        if (iconToggleHl) iconToggleHl.textContent = "🎬";
        if (textToggleHl) textToggleHl.textContent = "Jugadas: VER";
        if (btnToggleHl) {
          btnToggleHl.className = "flex items-center gap-1 bg-slate-950/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-amber-500/80 text-[9px] font-bold shadow-lg text-amber-400 active:scale-95 transition cursor-pointer";
        }
      } else {
        if (iconToggleHl) iconToggleHl.textContent = "⚡";
        if (textToggleHl) textToggleHl.textContent = "Jugadas: SALTAR";
        if (btnToggleHl) {
          btnToggleHl.className = "flex items-center gap-1 bg-slate-950/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-700/80 text-[9px] font-bold shadow-lg text-slate-400 active:scale-95 transition cursor-pointer";
        }
      }
    };
    updateHlModeUI();

    if (btnToggleHl) {
      btnToggleHl.onclick = () => {
        userShowHighlights = !userShowHighlights;
        try {
          localStorage.setItem("match_show_highlights", userShowHighlights ? "true" : "false");
        } catch(e) {}
        simulator.showKeyHighlights = userShowHighlights;
        updateHlModeUI();
        showMatchAlert({ text: userShowHighlights ? "🎬 Jugadas clave activadas (Modo visualización)" : "⚡ Jugadas clave en modo rápido (Resolución directa)" });
      };
    }

    // Toggle de Pantalla Completa / Vista Panorámica Ampliada 16:9
    const btnToggleFs = container.querySelector("#btn-toggle-fullscreen");
    const viewportWrapper = container.querySelector("#match-viewport-wrapper");
    if (btnToggleFs && viewportWrapper) {
      btnToggleFs.onclick = () => {
        if (!document.fullscreenElement) {
          if (viewportWrapper.requestFullscreen) {
            viewportWrapper.requestFullscreen().catch(() => {});
          } else if (viewportWrapper.webkitRequestFullscreen) {
            viewportWrapper.webkitRequestFullscreen();
          }
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen().catch(() => {});
          }
        }
      };
    }

    const btnMentality = container.querySelector("#btn-cycle-mentality");
    const mentLabel = container.querySelector("#mentality-label");
    const mentalities = [
      { id: "very_defensive", label: "Muy Defensiva" },
      { id: "defensive", label: "Defensiva" },
      { id: "balanced", label: "Equilibrada" },
      { id: "offensive", label: "Ofensiva" },
      { id: "very_offensive", label: "Al Ataque" }
    ];
    let curMentIndex = mentalities.findIndex(m => m.id === gameState.userTactics.mentality);
    if (curMentIndex === -1) curMentIndex = 2;

    btnMentality.onclick = () => {
      curMentIndex = (curMentIndex + 1) % mentalities.length;
      const m = mentalities[curMentIndex];
      mentLabel.textContent = m.label;
      gameState.userTactics.mentality = m.id;
      simulator.setMentality(isUserHome ? "home" : "away", m.id);
      showMatchAlert({ text: `🎯 Táctica ajustada: ${m.label}` });
    };

    // Botones del Asistente / Segundo Entrenador en Vivo
    const btnAstApply = container.querySelector("#btn-ast-apply");
    const btnAstIgnore = container.querySelector("#btn-ast-ignore");
    const btnAstClose = container.querySelector("#btn-ast-close");

    if (btnAstApply) {
      btnAstApply.onclick = (e) => {
        e.stopPropagation();
        if (!currentAssistantAdvice) return;
        const adv = currentAssistantAdvice;
        const res = simulator.acceptAssistantAdvice(adv.id);
        if (res.success) {
          // Sincronizar gameState.userTactics
          if (adv.action.type === "TACTIC_PRESET") {
            const ch = adv.action.changes || {};
            if (ch.mentality) {
              gameState.userTactics.mentality = ch.mentality;
              const newIdx = mentalities.findIndex(m => m.id === ch.mentality);
              if (newIdx !== -1) {
                curMentIndex = newIdx;
                if (mentLabel) mentLabel.textContent = mentalities[newIdx].label;
              }
            }
            if (!gameState.userTactics.instructions) gameState.userTactics.instructions = getDefaultTacticalInstructions();
            const inst = gameState.userTactics.instructions;
            if (ch.defensiveLine) inst.outOfPossession.defensiveLine = ch.defensiveLine;
            if (ch.pressing) inst.outOfPossession.pressing = ch.pressing;
            if (ch.width) inst.inPossession.width = ch.width;
            if (ch.tempo) inst.inPossession.tempo = ch.tempo;
            if (ch.passingStyle) inst.inPossession.passingStyle = ch.passingStyle;
            if (ch.transitionLoss) inst.inTransition.loss = ch.transitionLoss;
            if (ch.transitionWin) inst.inTransition.win = ch.transitionWin;
          } else if (adv.action.type === "SUBSTITUTION") {
            const outId = adv.action.playerOutId;
            const inId = adv.action.playerInId;
            if (Array.isArray(gameState.userTactics.lineup) && Array.isArray(gameState.userTactics.bench)) {
              const outIdx = gameState.userTactics.lineup.indexOf(outId);
              const inIdx = gameState.userTactics.bench.indexOf(inId);
              if (outIdx !== -1 && inIdx !== -1) {
                gameState.userTactics.lineup[outIdx] = inId;
                gameState.userTactics.bench[inIdx] = outId;
              }
            }
          }
          SaveManager.saveGame(gameState);
          showMatchAlert({ text: `📋 ¡Ajuste táctico aplicado: ${adv.title}!` });
          hideAssistantAdviceCard(true);
        }
      };
    }

    if (btnAstIgnore) {
      btnAstIgnore.onclick = (e) => {
        e.stopPropagation();
        simulator.dismissAssistantAdvice();
        hideAssistantAdviceCard(true);
        showMatchAlert({ text: "Manteniendo el plan táctico actual" });
      };
    }

    if (btnAstClose) {
      btnAstClose.onclick = (e) => {
        e.stopPropagation();
        simulator.dismissAssistantAdvice();
        hideAssistantAdviceCard(true);
      };
    }

    // Modal de Cambios en Vivo y Descanso
    const modalSubs = container.querySelector("#modal-live-subs");
    const btnSubs = container.querySelector("#btn-subs");
    const btnCloseSubs = container.querySelector("#btn-close-subs");

    const modalHT = container.querySelector("#modal-halftime");
    const btnHtSubs = container.querySelector("#btn-ht-subs");
    const btnHtContinue = container.querySelector("#btn-ht-continue");

    if (btnHtSubs) {
      btnHtSubs.onclick = () => {
        openTacticsModal(false);
      };
    }

    if (btnHtContinue) {
      btnHtContinue.onclick = () => {
        if (modalHT) modalHT.classList.add("hidden");
        simulator.resumeSecondHalf();
        iconPP.textContent = "⏸";
        textPP.textContent = "Pausar";
        showMatchAlert({ text: "📣 ¡Comienza la 2ª Parte!" });
      };
    }

    btnSubs.onclick = () => {
      openTacticsModal(!simulator.isHalfTime);
    };

    function openTacticsModal(isLive = false, options = {}) {
      const wasRunning = options.forceResume ? true : simulator.isRunning;
      if (isLive) {
        simulator.pause();
        iconPP.textContent = "▶";
        textPP.textContent = "Reanudar";
      } else {
        if (modalHT) modalHT.classList.add("hidden");
      }

      const modalHTTactics = container.querySelector("#modal-halftime-tactics");
      if (!modalHTTactics) return;

      const elStage = modalHTTactics.querySelector("#tactics-modal-stage");
      if (elStage) {
        if (isLive) {
          const isAddedFirstHalf = !simulator.halfTimeTriggered && !simulator.isSecondHalf && simulator.minute >= 45;
          elStage.textContent = isAddedFirstHalf 
            ? `1ª Parte (Tiempo de Descuento: ${simulator.getFormattedMinute ? simulator.getFormattedMinute() : simulator.minute + "'"}) · En Directo`
            : `Minuto ${simulator.getFormattedMinute ? simulator.getFormattedMinute() : simulator.minute + "'"} · En Directo`;
        } else {
          elStage.textContent = "⏸️ Descanso Oficial · Ajustes y Cambios para la 2ª Parte";
        }
      }

      const elTitle = modalHTTactics.querySelector("#tactics-modal-title");
      if (elTitle) {
        if (isLive) {
          const isAddedFirstHalf = !simulator.halfTimeTriggered && !simulator.isSecondHalf && simulator.minute >= 45;
          elTitle.textContent = isAddedFirstHalf ? "Cambios en Vivo (Descuento 1ª Parte)" : "Pizarra Táctica y Sustituciones";
        } else {
          elTitle.textContent = "Pizarra Táctica de Descanso";
        }
      }

      const elConfirmText = modalHTTactics.querySelector("#tactics-modal-btn-confirm-text");
      if (elConfirmText) {
        elConfirmText.textContent = isLive ? "⚽ APLICAR CAMBIOS Y CONTINUAR" : "⚽ GUARDAR CAMBIOS Y VOLVER AL DESCANSO";
      }

      const teamSide = isUserHome ? "home" : "away";
      let htFormationKey = isUserHome ? simulator.homeFormation : simulator.awayFormation;
      let htMentality = isUserHome ? simulator.homeMentality : simulator.awayMentality;

      const currentPitch = isUserHome ? simulator.homePlayersOnPitch : simulator.awayPlayersOnPitch;
      const currentBench = isUserHome ? simulator.homeBench : simulator.awayBench;
      const initialPitchIds = currentPitch.map(p => p.id);

      let htLineupIds = [...initialPitchIds];
      let htBenchIds = currentBench.map(p => p.id);
      let htSelectedPlayerId = options.preselectPlayerId || null;
      let htSubTab = "pitch"; // "pitch" o "style"
      let htPlayerRoles = {
        ...(teamSide === "home" ? simulator.homePlayerRoles : simulator.awayPlayerRoles || {}),
        ...(gameState.userTactics.playerRoles || {})
      };
      let htCustomPositions = JSON.parse(JSON.stringify(
        (teamSide === "home" ? simulator.homeCustomPositions : simulator.awayCustomPositions) ||
        gameState.userTactics.customPositions ||
        {}
      ));
      let htInstructions = JSON.parse(JSON.stringify(
        (teamSide === "home" ? simulator.homeInstructions : simulator.awayInstructions) ||
        gameState.userTactics.instructions ||
        getDefaultTacticalInstructions()
      ));
      let htManMarking = JSON.parse(JSON.stringify(
        (teamSide === "home" ? simulator.homeManMarking : simulator.awayManMarking) ||
        gameState.userTactics.manMarking ||
        {}
      ));
      let showHTAllRoles = false;
      let htJustDragged = false;

      const startRemaining = isUserHome ? simulator.homeSubsRemaining : simulator.awaySubsRemaining;
      const startWindows = isUserHome ? simulator.homeWindowsRemaining : simulator.awayWindowsRemaining;

      function renderHTTactics() {
        const formation = FORMATIONS[htFormationKey] || FORMATIONS["4-3-3"];
        const allSimPlayers = [...currentPitch, ...currentBench];
        const allTeamPlayers = userTeam.players;
        const getPlayer = (id) => allSimPlayers.find(p => p.id === id) || allTeamPlayers.find(p => p.id === id);

        const subsMadeCount = htLineupIds.filter(id => !initialPitchIds.includes(id)).length;
        const curRemaining = startRemaining - subsMadeCount;

        // Badge superior
        const elBadge = modalHTTactics.querySelector("#ht-tactic-remaining-badge");
        if (elBadge) {
          if (!isLive) {
            elBadge.textContent = `${curRemaining} de 5 cambios · ⏸️ Descanso (no gasta ventana)`;
            elBadge.className = "px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono font-bold text-emerald-400";
          } else {
            elBadge.textContent = `${curRemaining} de 5 cambios · 🪟 ${startWindows} vent. rest.`;
            elBadge.className = startWindows > 0 && curRemaining > 0
              ? "px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono font-bold text-amber-400"
              : "px-2.5 py-1 rounded-full bg-red-950/80 border border-red-500/50 text-xs font-mono font-bold text-red-400";
          }
        }

        // Subtítulo con cambios pendientes
        const elPending = modalHTTactics.querySelector("#ht-pending-subs-text");
        if (elPending) {
          if (subsMadeCount > 0) {
            elPending.classList.remove("hidden");
            elPending.textContent = isLive
              ? `🔄 ${subsMadeCount} cambio${subsMadeCount > 1 ? 's' : ''} preparado${subsMadeCount > 1 ? 's' : ''}`
              : `🔄 ${subsMadeCount} cambio${subsMadeCount > 1 ? 's' : ''} preparado${subsMadeCount > 1 ? 's' : ''} para la 2ª parte`;
          } else {
            elPending.classList.add("hidden");
          }
        }

        // Formaciones
        const containerForm = modalHTTactics.querySelector("#ht-formation-buttons");
        if (containerForm) {
          containerForm.innerHTML = Object.keys(FORMATIONS).map(fKey => `
            <button class="btn-ht-form px-3 py-1 rounded-full font-bold transition whitespace-nowrap text-xs ${htFormationKey === fKey ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20' : 'bg-slate-800 text-slate-400 hover:text-white'}" data-formation="${fKey}">
              ${fKey}
            </button>
          `).join('');

          containerForm.querySelectorAll(".btn-ht-form").forEach(b => {
            b.onclick = () => {
              htFormationKey = b.dataset.formation;
              htCustomPositions = {}; // Reiniciar posiciones libres al cambiar de esquema
              renderHTTactics();
            };
          });
        }

        // Mentalidades
        const containerMent = modalHTTactics.querySelector("#ht-mentality-buttons");
        if (containerMent) {
          containerMent.innerHTML = mentalities.map(m => `
            <button class="btn-ht-ment px-2.5 py-0.5 rounded-lg text-[11px] font-semibold transition whitespace-nowrap ${htMentality === m.id ? 'bg-emerald-600 text-white border border-emerald-400' : 'bg-slate-800/80 text-slate-400 hover:text-white'}" data-mentality="${m.id}">
              ${m.label}
            </button>
          `).join('');

          containerMent.querySelectorAll(".btn-ht-ment").forEach(b => {
            b.onclick = () => {
              htMentality = b.dataset.mentality;
              renderHTTactics();
            };
          });
        }

        // Pestañas Sub-Modal (Campo y Funciones vs Estilos e Instrucciones)
        const btnTabPitch = modalHTTactics.querySelector("#btn-ht-tab-pitch");
        const btnTabStyle = modalHTTactics.querySelector("#btn-ht-tab-style");
        const pitchWrapper = modalHTTactics.querySelector("#ht-pitch-wrapper");
        const styleWrapper = modalHTTactics.querySelector("#ht-style-wrapper");
        const badgeStyle = modalHTTactics.querySelector("#ht-style-badge");

        const curPresetKey = detectMatchingPreset(htInstructions);
        const curPreset = TACTICAL_PRESETS[curPresetKey] || null;
        if (badgeStyle) {
          badgeStyle.textContent = curPreset ? `${curPreset.icon} ${curPreset.name.split(' ')[0]}` : '⚙️ Personalizado';
        }

        if (btnTabPitch && btnTabStyle && pitchWrapper && styleWrapper) {
          btnTabPitch.onclick = (e) => {
            e.stopPropagation();
            htSubTab = "pitch";
            renderHTTactics();
          };
          btnTabStyle.onclick = (e) => {
            e.stopPropagation();
            htSubTab = "style";
            renderHTTactics();
          };

          if (htSubTab === "pitch") {
            btnTabPitch.className = "flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 bg-sky-500 text-white shadow-md border border-sky-400";
            btnTabStyle.className = "flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 bg-slate-900 text-slate-400 hover:text-white border border-slate-800";
            pitchWrapper.classList.remove("hidden");
            styleWrapper.classList.add("hidden");
          } else {
            btnTabPitch.className = "flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 bg-slate-900 text-slate-400 hover:text-white border border-slate-800";
            btnTabStyle.className = "flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 bg-amber-500 text-slate-950 shadow-md border border-amber-400";
            pitchWrapper.classList.add("hidden");
            styleWrapper.classList.remove("hidden");
            styleWrapper.innerHTML = renderTacticalInstructionsPanel(htInstructions, 'ht');
            bindTacticalInstructionsPanel(styleWrapper, htInstructions, 'ht', () => renderHTTactics());
          }
        }

        // Texto de instrucciones
        const elInstr = modalHTTactics.querySelector("#ht-instruction-text");
        if (elInstr) {
          if (htSelectedPlayerId) {
            const selPlayer = getPlayer(htSelectedPlayerId);
            elInstr.innerHTML = `<span class="text-amber-400 font-bold">👉 Seleccionado: ${selPlayer?.name}</span>. Modifica su función abajo o toca otro futbolista para sustituirlo.`;
          } else {
            elInstr.textContent = "💡 Toca un futbolista para modificar su función táctica, intercambiar puesto o sustituirlo por un suplente.";
          }
        }

        // Terreno de juego táctico con slots
        const pitchSlots = modalHTTactics.querySelector("#ht-pitch-slots");
        if (pitchSlots) {
          pitchSlots.innerHTML = formation.slots.map((slot, index) => {
            const playerId = htLineupIds[index];
            const player = getPlayer(playerId);
            if (!player) return "";
            const effSlot = getEffectiveSlotCoords(htFormationKey, index, htCustomPositions);
            const effRating = calculateEffectiveRating(player, effSlot.pos);
            const isSelected = htSelectedPlayerId === player.id;
            const isNewSub = !initialPitchIds.includes(player.id);
            const curRoleId = (htPlayerRoles && htPlayerRoles[player.id]) || getDefaultRoleForPosition(effSlot.pos);
            const r = getRoleDetails(effSlot.pos, curRoleId);

            return `
              <div class="slot-ht-player absolute -translate-x-1/2 -translate-y-1/2 ${isSelected ? 'cursor-grab active:cursor-grabbing touch-none ring-2 ring-amber-400 ring-offset-2 ring-offset-slate-900 z-30 scale-105' : 'cursor-pointer touch-manipulation z-10'} flex flex-col items-center transition-transform active:scale-95 select-none"
                   style="left: ${effSlot.x}%; top: ${effSlot.y}%;"
                   data-player-id="${player.id}"
                   data-slot-index="${index}">
                <div class="w-9 h-9 rounded-full border-2 ${isSelected ? 'border-amber-400 bg-amber-500 text-black shadow-lg shadow-amber-400/50 scale-110 ring-2 ring-amber-300' : isNewSub ? 'border-emerald-400 bg-emerald-950 text-emerald-300 shadow-md ring-2 ring-emerald-500/50' : effSlot.isCustom ? 'border-amber-400 bg-slate-900 text-white shadow-md ring-1 ring-amber-400/80' : 'border-white/80 bg-slate-900 text-white shadow-md'} flex flex-col items-center justify-center relative transition-all">
                  <span class="text-[9px] font-black leading-none">${effRating}</span>
                  <span class="text-[7px] font-bold ${isNewSub ? 'text-emerald-400' : effSlot.isCustom ? 'text-amber-300 font-extrabold' : 'text-slate-300'} leading-none">${slot.label}</span>
                  <div class="absolute -bottom-1 w-5 h-1 bg-black/60 rounded-full overflow-hidden">
                    <div class="h-full ${player.energy > 70 ? 'bg-emerald-400' : player.energy > 50 ? 'bg-amber-400' : 'bg-red-500'}" style="width: ${player.energy || 100}%;"></div>
                  </div>
                  <div class="absolute -top-1.5 -left-2 px-1 py-0.2 rounded-full ${(player.matchRating || 6.5) >= 7.5 ? 'bg-emerald-500 text-slate-950' : (player.matchRating || 6.5) < 6.0 ? 'bg-rose-500 text-white' : 'bg-amber-400 text-slate-950'} text-[6.5px] font-black shadow leading-none">
                    ${(player.matchRating || 6.5).toFixed(1)}
                  </div>
                  ${effSlot.isCustom ? `
                    <div class="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-amber-400 text-slate-950 text-[6.5px] font-black flex items-center justify-center shadow">📍</div>
                  ` : ''}
                </div>
                <div class="bg-black/80 px-1 py-0.5 rounded text-[8px] font-bold text-white tracking-tight mt-0.5 truncate max-w-[65px] text-center border border-white/10 shadow">
                  ${isNewSub ? '🔺 ' : ''}${player.name.split(' ').slice(-1)[0]}
                </div>
                <div class="mt-0.5 px-1 py-0.2 rounded bg-sky-950/80 border border-sky-500/30 text-[7px] font-bold text-sky-300 truncate max-w-[70px] text-center">
                  ${r.icon} ${r.tag}
                </div>
                ${(() => {
                  const mk = htManMarking && htManMarking[player.id];
                  if (!mk || !mk.targetId) return "";
                  const oppPitch = isUserHome ? simulator.awayPlayersOnPitch : simulator.homePlayersOnPitch;
                  const targetP = oppPitch.find(p => p.id === mk.targetId) || opponentTeam.players.find(p => p.id === mk.targetId);
                  const tName = targetP ? targetP.name.split(' ').slice(-1)[0] : 'Rival';
                  const iIcon = mk.intensity === 'aggressive' ? '⚔️' : mk.intensity === 'tight' ? '🔒' : '👁️';
                  return `
                    <div class="mt-0.5 px-1 py-0.2 rounded bg-rose-950/90 border border-rose-500/70 text-[6.5px] font-black text-rose-300 truncate max-w-[70px] text-center shadow-sm" title="Marcaje en vivo a ${tName}">
                      ${iIcon} ${tName}
                    </div>
                  `;
                })()}
                ${isSelected ? `
                  <div class="mt-0.5 px-1.5 py-0.2 rounded-full bg-amber-400 text-slate-950 font-black text-[7px] shadow-md animate-pulse uppercase tracking-tight">
                    ✋ Mover
                  </div>
                ` : ''}
              </div>
            `;
          }).join('');

          // Arrastre libre con el dedo o ratón directamente en la pizarra de cambios/descanso (solo activo para el seleccionado)
          const htPitchBox = modalHTTactics.querySelector("#ht-pitch-slots")?.parentElement;
          if (htPitchBox && htSelectedPlayerId) {
            const selectedSlotEl = pitchSlots.querySelector(`.slot-ht-player[data-player-id="${htSelectedPlayerId}"]`);
            if (selectedSlotEl) {
              const slotIdx = parseInt(selectedSlotEl.dataset.slotIndex, 10);
              const pId = htSelectedPlayerId;
              let dragMoved = false;
              let startX = 0, startY = 0;

              const onPointerDown = (e) => {
                if (e.button !== 0 && e.pointerType === "mouse") return;
                dragMoved = false;
                startX = e.clientX;
                startY = e.clientY;

                const onPointerMove = (me) => {
                  const dist = Math.hypot(me.clientX - startX, me.clientY - startY);
                  if (!dragMoved && dist > 5) {
                    dragMoved = true;
                  }
                  if (dragMoved) {
                    const rect = htPitchBox.getBoundingClientRect();
                    let nx = ((me.clientX - rect.left) / rect.width) * 100;
                    let ny = ((me.clientY - rect.top) / rect.height) * 100;
                    const isGK = slotIdx === 0;
                    nx = Math.max(isGK ? 38 : 10, Math.min(isGK ? 62 : 90, nx));
                    ny = Math.max(isGK ? 82 : 12, Math.min(isGK ? 90 : 88, ny));
                    selectedSlotEl.style.left = `${nx}%`;
                    selectedSlotEl.style.top = `${ny}%`;
                    selectedSlotEl.dataset.dragX = nx;
                    selectedSlotEl.dataset.dragY = ny;
                  }
                };

                const onPointerUp = () => {
                  window.removeEventListener("pointermove", onPointerMove);
                  window.removeEventListener("pointerup", onPointerUp);
                  if (dragMoved) {
                    htJustDragged = true;
                    setTimeout(() => { htJustDragged = false; }, 200);
                    const finalX = parseFloat(selectedSlotEl.dataset.dragX);
                    const finalY = parseFloat(selectedSlotEl.dataset.dragY);
                    if (!isNaN(finalX) && !isNaN(finalY)) {
                      htCustomPositions[slotIdx] = { x: Math.round(finalX), y: Math.round(finalY) };
                      htSelectedPlayerId = pId;
                      renderHTTactics();
                    }
                  }
                };

                window.addEventListener("pointermove", onPointerMove);
                window.addEventListener("pointerup", onPointerUp);
              };

              selectedSlotEl.addEventListener("pointerdown", onPointerDown);
            }
          }

          if (htPitchBox) {
            htPitchBox.onclick = (e) => {
              if (htJustDragged) return;
              if (!e.target.closest(".slot-ht-player")) {
                if (htSelectedPlayerId) {
                  htSelectedPlayerId = null;
                  renderHTTactics();
                }
              }
            };
          }

          pitchSlots.querySelectorAll(".slot-ht-player").forEach(el => {
            el.onclick = () => {
              if (htJustDragged) return;
              handleHTPlayerTap(el.dataset.playerId);
            };
          });
        }

        // Panel de asignación de función táctica individual y posición en vivo si hay titular seleccionado
        const rolePanel = modalHTTactics.querySelector("#ht-role-assignment-panel");
        if (rolePanel) {
          const selSlotIndex = htLineupIds.indexOf(htSelectedPlayerId);
          if (selSlotIndex !== -1) {
            const selSlot = formation.slots[selSlotIndex];
            const selPlayer = getPlayer(htSelectedPlayerId);
            if (selPlayer && selSlot) {
              const effSlot = getEffectiveSlotCoords(htFormationKey, selSlotIndex, htCustomPositions);
              const curRoleId = (htPlayerRoles && htPlayerRoles[selPlayer.id]) || getDefaultRoleForPosition(effSlot.pos);
              const curRole = getRoleDetails(effSlot.pos, curRoleId);
              const availRoles = getAvailableRolesForPosition(effSlot.pos);
              const posLabel = getPositionAdjustmentLabel(selSlot, effSlot);

              const oppPitch = isUserHome ? simulator.awayPlayersOnPitch : simulator.homePlayersOnPitch;
              const oppOutfieldPitch = oppPitch.filter(p => !p.isKeeper && p.pos !== "POR");
              const oppPitchStarOvr = Math.max(...oppOutfieldPitch.map(p => p.ovr || 70), 70);
              const curMarking = (htManMarking && htManMarking[selPlayer.id]) || null;
              const curTargetId = curMarking?.targetId || "";
              const curIntensity = curMarking?.intensity || "tight";

              rolePanel.innerHTML = `
                <div class="my-2 space-y-2 animate-fadeIn">
                  <!-- Ajuste de posición manual en descanso/directo -->
                  <div class="p-3 bg-slate-900 border border-amber-500/40 rounded-2xl shadow-xl">
                    <div class="flex items-center justify-between mb-2 pb-1.5 border-b border-slate-800">
                      <div class="flex items-center gap-2">
                        <span class="text-xl">📍</span>
                        <div>
                          <span class="text-[9px] uppercase font-bold text-amber-400">Posición · ${selPlayer.name} (${selSlot.label})</span>
                          <h4 class="text-xs font-black text-white">${posLabel}</h4>
                        </div>
                      </div>
                      ${effSlot.isCustom ? `
                        <button id="btn-ht-reset-pos" class="text-[10px] font-bold text-rose-400 hover:text-rose-300 px-2 py-1 rounded-lg bg-rose-950/70 border border-rose-800/80 active:scale-95 transition flex items-center gap-1 shadow-sm">
                          <span>↺</span> Posición base
                        </button>
                      ` : ''}
                    </div>

                    <div class="text-[10px] text-slate-400 mb-2 font-medium">
                      Arrastra la ficha en el campo o ajusta con botones y deslizadores:
                    </div>

                    <div class="grid grid-cols-2 gap-2 mb-2">
                      <div class="bg-slate-950/80 p-2 rounded-xl border border-slate-800 flex flex-col gap-1.5">
                        <span class="text-[9px] font-bold text-slate-400 uppercase tracking-wider text-center">Altura (Ataque / Defensa)</span>
                        <div class="flex items-center gap-1.5">
                          <button class="btn-ht-nudge-pos flex-1 py-1.5 px-1 bg-slate-800 hover:bg-slate-700 text-sky-300 font-bold text-[10px] rounded-lg border border-slate-700 active:scale-95 transition flex items-center justify-center gap-1" data-axis="y" data-delta="-5">
                            <span>▲</span> Adelantar (+DC)
                          </button>
                          <button class="btn-ht-nudge-pos flex-1 py-1.5 px-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-[10px] rounded-lg border border-slate-700 active:scale-95 transition flex items-center justify-center gap-1" data-axis="y" data-delta="5">
                            <span>▼</span> Retrasar (+MC)
                          </button>
                        </div>
                      </div>

                      <div class="bg-slate-950/80 p-2 rounded-xl border border-slate-800 flex flex-col gap-1.5">
                        <span class="text-[9px] font-bold text-slate-400 uppercase tracking-wider text-center">Amplitud (Banda / Centro)</span>
                        <div class="flex items-center gap-1.5">
                          <button class="btn-ht-nudge-pos flex-1 py-1.5 px-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-[10px] rounded-lg border border-slate-700 active:scale-95 transition flex items-center justify-center gap-1" data-axis="x" data-delta="-5">
                            <span>◀</span> Izquierda
                          </button>
                          <button class="btn-ht-nudge-pos flex-1 py-1.5 px-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-[10px] rounded-lg border border-slate-700 active:scale-95 transition flex items-center justify-center gap-1" data-axis="x" data-delta="5">
                            <span>▶</span> Derecha
                          </button>
                        </div>
                      </div>
                    </div>

                    <!-- Deslizadores de ajuste fino en vivo -->
                    <div class="space-y-1.5 bg-slate-950/60 p-2 rounded-xl border border-slate-800/80 text-[10px]">
                      <div class="flex items-center justify-between text-slate-400">
                        <span>Profundidad en campo (Y): <b class="text-white">${effSlot.y < 35 ? 'Delantera / Ofensivo' : (effSlot.y > 65 ? 'Defensa / Retrasado' : 'Medio campo')}</b></span>
                        <span class="font-mono text-amber-400 font-bold">${Math.round(effSlot.y)}%</span>
                      </div>
                      <input type="range" class="slider-ht-pos-y w-full accent-amber-400 bg-slate-800 h-1.5 rounded-lg appearance-none cursor-pointer" min="${selSlotIndex === 0 ? 82 : 12}" max="${selSlotIndex === 0 ? 90 : 88}" value="${effSlot.y}">

                      <div class="flex items-center justify-between text-slate-400 pt-1">
                        <span>Anchura / Amplitud (X): <b class="text-white">${effSlot.x < 35 ? 'Banda Izquierda' : (effSlot.x > 65 ? 'Banda Derecha' : 'Interior / Centro')}</b></span>
                        <span class="font-mono text-amber-400 font-bold">${Math.round(effSlot.x)}%</span>
                      </div>
                      <input type="range" class="slider-ht-pos-x w-full accent-amber-400 bg-slate-800 h-1.5 rounded-lg appearance-none cursor-pointer" min="${selSlotIndex === 0 ? 38 : 10}" max="${selSlotIndex === 0 ? 62 : 90}" value="${effSlot.x}">
                    </div>
                  </div>

                  <!-- Función / Rol -->
                  <div class="p-3 bg-slate-900 border border-sky-500/50 rounded-2xl shadow-xl">
                    <div class="flex items-center justify-between mb-2 pb-1.5 border-b border-slate-800">
                      <div class="flex items-center gap-2">
                        <span class="text-xl">${curRole.icon}</span>
                        <div>
                          <span class="text-[9px] uppercase font-bold text-sky-400">Función en vivo · ${selPlayer.name} (${selSlot.label})</span>
                          <h4 class="text-xs font-black text-white">${curRole.name}</h4>
                        </div>
                      </div>
                      <button id="btn-ht-close-role-panel" class="text-[10px] font-bold text-emerald-400 hover:text-white px-2 py-1 rounded bg-emerald-950/80 border border-emerald-500/50 flex items-center gap-1 active:scale-95 shadow">✓ Fijar posición</button>
                    </div>
                    <div class="text-[10px] text-slate-400 mb-2 font-medium">Modificar instrucción de juego para el partido:</div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      ${availRoles.map(r => `
                        <button class="btn-ht-assign-role p-2 rounded-xl border text-left transition flex items-start gap-2 ${r.id === curRoleId ? 'bg-sky-500/25 border-sky-400 text-white shadow-sm ring-1 ring-sky-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 active:scale-98'}" data-role-id="${r.id}" data-player-id="${selPlayer.id}">
                          <span class="text-base mt-0.5 flex-shrink-0">${r.icon}</span>
                          <div class="min-w-0">
                            <div class="text-xs font-bold ${r.id === curRoleId ? 'text-sky-300' : 'text-slate-200'}">${r.name}</div>
                            <div class="text-[9.5px] text-slate-400 leading-tight mt-0.5">${r.desc}</div>
                          </div>
                        </button>
                      `).join('')}
                    </div>
                  </div>

                  <!-- Marcaje al Hombre Rival en Vivo -->
                  ${selSlot.pos !== "POR" ? `
                    <div class="p-3 bg-slate-900 border border-rose-500/50 rounded-2xl shadow-xl space-y-2">
                      <div class="flex items-center justify-between pb-1.5 border-b border-slate-800">
                        <div class="flex items-center gap-2">
                          <span class="text-lg">🎯</span>
                          <div>
                            <span class="text-[9px] uppercase font-bold text-rose-400">Instrucción en Vivo</span>
                            <h4 class="text-xs font-black text-white">Marcaje al Hombre Rival</h4>
                          </div>
                        </div>
                        ${curTargetId ? `
                          <button id="btn-ht-clear-mark" class="text-[9.5px] font-bold text-rose-400 hover:text-white px-2 py-0.5 rounded bg-rose-950/80 border border-rose-800/80 active:scale-95 transition">
                            Desactivar
                          </button>
                        ` : ''}
                      </div>

                      <div class="text-[9.5px] text-slate-400">
                        Ordena a ${selPlayer.name.split(' ').slice(-1)[0]} perseguir y anular a un rival que esté en el campo.
                      </div>

                      <div>
                        <label class="block text-[9px] uppercase font-bold text-slate-400 mb-1">Jugador Rival en Terreno de Juego:</label>
                        <select id="select-ht-mark-target" class="w-full bg-slate-950 border border-slate-700 text-white font-bold text-xs rounded-xl px-2.5 py-1.5 outline-none focus:border-rose-400" data-marker-id="${selPlayer.id}">
                          <option value="">-- Sin marcaje individual asignado --</option>
                          ${oppOutfieldPitch.map(op => `
                            <option value="${op.id}" ${op.id === curTargetId ? 'selected' : ''}>
                              ${op.pos} · ${op.name} (${op.ovr || 70} OVR)${(op.ovr || 70) === oppPitchStarOvr ? ' ⭐ Peligro principal' : ''}
                            </option>
                          `).join('')}
                        </select>
                      </div>

                      ${curTargetId ? `
                        <div class="pt-1">
                          <span class="block text-[9px] uppercase font-bold text-slate-400 mb-1.5">Intensidad del Marcaje:</span>
                          <div class="grid grid-cols-3 gap-1.5 text-center">
                            <button class="btn-ht-mark-intensity p-1.5 rounded-xl border text-left transition flex flex-col gap-0.5 ${curIntensity === 'light' ? 'bg-amber-500/25 border-amber-400 text-white ring-1 ring-amber-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700'} active:scale-95" data-intensity="light" data-marker-id="${selPlayer.id}">
                              <div class="flex items-center gap-1 font-bold text-[10px] ${curIntensity === 'light' ? 'text-amber-300' : 'text-slate-200'}">
                                <span>👁️</span> Suave
                              </div>
                              <div class="text-[8px] text-slate-400 leading-tight">Vigilancia (-12% rival, +4% fatiga)</div>
                            </button>
                            <button class="btn-ht-mark-intensity p-1.5 rounded-xl border text-left transition flex flex-col gap-0.5 ${curIntensity === 'tight' ? 'bg-sky-500/25 border-sky-400 text-white ring-1 ring-sky-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700'} active:scale-95" data-intensity="tight" data-marker-id="${selPlayer.id}">
                              <div class="flex items-center gap-1 font-bold text-[10px] ${curIntensity === 'tight' ? 'text-sky-300' : 'text-slate-200'}">
                                <span>🔒</span> Férreo
                              </div>
                              <div class="text-[8px] text-slate-400 leading-tight">Pegajoso (-24% rival, +10% fatiga, +12% faltas)</div>
                            </button>
                            <button class="btn-ht-mark-intensity p-1.5 rounded-xl border text-left transition flex flex-col gap-0.5 ${curIntensity === 'aggressive' ? 'bg-rose-500/25 border-rose-400 text-white ring-1 ring-rose-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700'} active:scale-95" data-intensity="aggressive" data-marker-id="${selPlayer.id}">
                              <div class="flex items-center gap-1 font-bold text-[10px] ${curIntensity === 'aggressive' ? 'text-rose-300' : 'text-slate-200'}">
                                <span>⚔️</span> Secante
                              </div>
                              <div class="text-[8px] text-slate-400 leading-tight">Asfixiante (-36% rival, +18% fatiga, +28% faltas)</div>
                            </button>
                          </div>
                        </div>
                      ` : ''}
                    </div>
                  ` : ''}
                </div>
              `;

              const btnClose = rolePanel.querySelector("#btn-ht-close-role-panel");
              if (btnClose) {
                btnClose.onclick = (e) => {
                  e.stopPropagation();
                  htSelectedPlayerId = null;
                  renderHTTactics();
                };
              }

              // Sliders de ajuste fino en vivo
              const sliderHtY = rolePanel.querySelector(".slider-ht-pos-y");
              if (sliderHtY) {
                sliderHtY.oninput = (e) => {
                  const val = parseInt(e.target.value, 10);
                  htCustomPositions[selSlotIndex] = { x: effSlot.x, y: val };
                  const slotEl = pitchSlots.querySelector(`.slot-ht-player[data-slot-index="${selSlotIndex}"]`);
                  if (slotEl) slotEl.style.top = `${val}%`;
                };
                sliderHtY.onchange = () => {
                  renderHTTactics();
                };
              }

              const sliderHtX = rolePanel.querySelector(".slider-ht-pos-x");
              if (sliderHtX) {
                sliderHtX.oninput = (e) => {
                  const val = parseInt(e.target.value, 10);
                  htCustomPositions[selSlotIndex] = { x: val, y: effSlot.y };
                  const slotEl = pitchSlots.querySelector(`.slot-ht-player[data-slot-index="${selSlotIndex}"]`);
                  if (slotEl) slotEl.style.left = `${val}%`;
                };
                sliderHtX.onchange = () => {
                  renderHTTactics();
                };
              }

              rolePanel.querySelectorAll(".btn-ht-nudge-pos").forEach(btn => {
                btn.onclick = (e) => {
                  e.stopPropagation();
                  const axis = btn.dataset.axis;
                  const delta = parseInt(btn.dataset.delta, 10);
                  const isGK = selSlotIndex === 0;
                  if (axis === "x") {
                    const newX = Math.max(isGK ? 38 : 10, Math.min(isGK ? 62 : 90, effSlot.x + delta));
                    htCustomPositions[selSlotIndex] = { x: newX, y: effSlot.y };
                  } else {
                    const newY = Math.max(isGK ? 82 : 12, Math.min(isGK ? 90 : 88, effSlot.y + delta));
                    htCustomPositions[selSlotIndex] = { x: effSlot.x, y: newY };
                  }
                  renderHTTactics();
                };
              });

              const btnResetPos = rolePanel.querySelector("#btn-ht-reset-pos");
              if (btnResetPos) {
                btnResetPos.onclick = (e) => {
                  e.stopPropagation();
                  delete htCustomPositions[selSlotIndex];
                  renderHTTactics();
                };
              }

              rolePanel.querySelectorAll(".btn-ht-assign-role").forEach(btn => {
                btn.onclick = (e) => {
                  e.stopPropagation();
                  const pId = btn.dataset.playerId;
                  const rId = btn.dataset.roleId;
                  htPlayerRoles[pId] = rId;
                  renderHTTactics();
                };
              });

              // Handlers de Marcaje al Hombre en Vivo
              const selectHtMark = rolePanel.querySelector("#select-ht-mark-target");
              if (selectHtMark) {
                selectHtMark.onchange = (e) => {
                  const markerId = selectHtMark.dataset.markerId;
                  const targetId = e.target.value;
                  if (!htManMarking) htManMarking = {};
                  if (!targetId) {
                    delete htManMarking[markerId];
                  } else {
                    htManMarking[markerId] = {
                      targetId,
                      intensity: htManMarking[markerId]?.intensity || "tight"
                    };
                  }
                  renderHTTactics();
                };
              }

              rolePanel.querySelectorAll(".btn-ht-mark-intensity").forEach(btn => {
                btn.onclick = (e) => {
                  e.stopPropagation();
                  const markerId = btn.dataset.markerId;
                  const intensity = btn.dataset.intensity;
                  if (!htManMarking) htManMarking = {};
                  if (htManMarking[markerId]) {
                    htManMarking[markerId].intensity = intensity;
                  } else {
                    const oppStar = oppOutfieldPitch.slice().sort((a, b) => (b.ovr || 70) - (a.ovr || 70))[0];
                    if (oppStar) {
                      htManMarking[markerId] = {
                        targetId: oppStar.id,
                        intensity
                      };
                    }
                  }
                  renderHTTactics();
                };
              });

              const btnHtClearMark = rolePanel.querySelector("#btn-ht-clear-mark");
              if (btnHtClearMark) {
                btnHtClearMark.onclick = (e) => {
                  e.stopPropagation();
                  if (htSelectedPlayerId && htManMarking) {
                    delete htManMarking[htSelectedPlayerId];
                    renderHTTactics();
                  }
                };
              }
            } else {
              rolePanel.innerHTML = "";
            }
          } else {
            rolePanel.innerHTML = "";
          }
        }

        // Botón y panel de desplegable de todas las funciones del 11
        const btnToggleRoles = modalHTTactics.querySelector("#btn-ht-toggle-roles");
        const allRolesContainer = modalHTTactics.querySelector("#ht-all-roles-container");
        const toggleRolesText = modalHTTactics.querySelector("#ht-toggle-roles-text");

        if (btnToggleRoles && allRolesContainer) {
          if (toggleRolesText) {
            toggleRolesText.textContent = showHTAllRoles ? "Ocultar funciones del 11" : "Ver funciones de los 11";
          }
          if (showHTAllRoles) {
            allRolesContainer.classList.remove("hidden");
            allRolesContainer.innerHTML = `
              <div class="bg-slate-900 border border-slate-800 rounded-2xl p-3 space-y-2 shadow-lg">
                <div class="flex items-center justify-between pb-1.5 border-b border-slate-800">
                  <span class="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>⚙️</span> Funciones e Instrucciones de los 11 en Campo
                  </span>
                  <span class="text-[10px] text-slate-400">Personaliza cada rol</span>
                </div>
                <div class="space-y-1.5 max-h-56 overflow-y-auto pr-1 no-scrollbar">
                  ${formation.slots.map((slot, idx) => {
                    const pId = htLineupIds[idx];
                    const p = getPlayer(pId);
                    if (!p) return "";
                    const curRoleId = (htPlayerRoles && htPlayerRoles[p.id]) || getDefaultRoleForPosition(slot.pos);
                    const availRoles = getAvailableRolesForPosition(slot.pos);
                    return `
                      <div class="flex items-center justify-between p-2 rounded-xl bg-slate-950 border border-slate-800/80 text-xs">
                        <div class="flex items-center gap-2 min-w-0">
                          <span class="w-8 text-center font-extrabold text-[10px] px-1 py-0.5 rounded bg-slate-800 text-sky-400 flex-shrink-0">${slot.label}</span>
                          <span class="font-bold text-white truncate text-xs">${p.name.split(' ').slice(-1)[0]}</span>
                        </div>
                        <select class="select-ht-player-role bg-slate-900 border border-slate-700 text-sky-300 text-[11px] font-bold rounded-lg px-2 py-1 outline-none focus:border-sky-400 max-w-[185px]" data-player-id="${p.id}" data-pos="${slot.pos}">
                          ${availRoles.map(r => `
                            <option value="${r.id}" ${r.id === curRoleId ? 'selected' : ''}>
                              ${r.icon} ${r.name} (${r.tag})
                            </option>
                          `).join('')}
                        </select>
                      </div>
                    `;
                  }).join('')}
                </div>
              </div>
            `;

            allRolesContainer.querySelectorAll(".select-ht-player-role").forEach(sel => {
              sel.onchange = (e) => {
                const pId = sel.dataset.playerId;
                htPlayerRoles[pId] = e.target.value;
                renderHTTactics();
              };
            });
          } else {
            allRolesContainer.classList.add("hidden");
            allRolesContainer.innerHTML = "";
          }

          btnToggleRoles.onclick = (e) => {
            e.stopPropagation();
            showHTAllRoles = !showHTAllRoles;
            renderHTTactics();
          };
        }

        // Banquillo de suplentes
        const benchScroll = modalHTTactics.querySelector("#ht-bench-scroll");
        if (benchScroll) {
          const benchPlayers = htBenchIds.map(id => getPlayer(id)).filter(Boolean);
          benchScroll.innerHTML = benchPlayers.map(p => {
            const isSelected = htSelectedPlayerId === p.id;
            const wasStarter = initialPitchIds.includes(p.id);

            return `
              <div class="bench-ht-card flex-shrink-0 bg-slate-900 border ${isSelected ? 'border-amber-400 bg-amber-500/20' : wasStarter ? 'border-red-500/50 bg-red-950/20' : 'border-slate-800'} p-2 rounded-xl text-center cursor-pointer active:scale-95 transition min-w-[76px]" data-player-id="${p.id}">
                <div class="flex items-center justify-center gap-1">
                  <span class="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-slate-800 ${p.pos === 'DC' || p.pos === 'EI' || p.pos === 'ED' ? 'text-red-400' : p.pos === 'MC' || p.pos === 'MCD' || p.pos === 'MCO' ? 'text-amber-400' : p.pos === 'POR' ? 'text-purple-400' : 'text-sky-400'}">${p.pos}</span>
                  ${wasStarter ? '<span class="text-[8px] text-red-400">🔻</span>' : ''}
                </div>
                <div class="text-[10px] font-bold text-white truncate max-w-[70px] mt-1">${p.name.split(' ').slice(-1)[0]}</div>
                <div class="flex items-center justify-center gap-1 mt-0.5">
                  <span class="text-xs font-black text-amber-400">${p.ovr}</span>
                  ${p.playedInMatch ? `<span class="text-[8px] font-mono font-bold px-1 rounded bg-slate-800 text-emerald-300">⭐${(p.matchRating || 6.5).toFixed(1)}</span>` : ''}
                </div>
                <div class="w-10 h-1 bg-slate-800 rounded-full mx-auto mt-1 overflow-hidden">
                  <div class="h-full bg-emerald-400" style="width: ${p.energy || 100}%;"></div>
                </div>
              </div>
            `;
          }).join('');

          benchScroll.querySelectorAll(".bench-ht-card").forEach(el => {
            el.onclick = () => {
              handleHTPlayerTap(el.dataset.playerId);
            };
          });
        }
      }

      function handleHTPlayerTap(tappedId) {
        if (!htSelectedPlayerId) {
          htSelectedPlayerId = tappedId;
          renderHTTactics();
          return;
        }

        if (htSelectedPlayerId === tappedId) {
          htSelectedPlayerId = null;
          renderHTTactics();
          return;
        }

        const inLineup1 = htLineupIds.indexOf(htSelectedPlayerId);
        const inBench1 = htBenchIds.indexOf(htSelectedPlayerId);

        const inLineup2 = htLineupIds.indexOf(tappedId);
        const inBench2 = htBenchIds.indexOf(tappedId);

        if (inLineup1 !== -1 && inLineup2 !== -1) {
          // Ambos en el campo: intercambio posicional
          const tmp = htLineupIds[inLineup1];
          htLineupIds[inLineup1] = htLineupIds[inLineup2];
          htLineupIds[inLineup2] = tmp;
        } else if (inLineup1 !== -1 && inBench2 !== -1) {
          // Titular sale por Suplente
          const allSimPlayers = [...currentPitch, ...currentBench];
          const benchP = allSimPlayers.find(p => p.id === tappedId) || userTeam.players.find(p => p.id === tappedId);
          if (benchP && benchP.injury) {
            alert(`⚠️ ${benchP.name} está lesionado (${benchP.injury.type}) y no puede entrar al campo.`);
            htSelectedPlayerId = null;
            renderHTTactics();
            return;
          }
          if (benchP && benchP.suspension) {
            alert(`🟥 ${benchP.name} está sancionado y no puede entrar al campo.`);
            htSelectedPlayerId = null;
            renderHTTactics();
            return;
          }
          if (benchP && benchP.subbedOut && !initialPitchIds.includes(tappedId)) {
            alert(`⚠️ ${benchP.name} ya fue sustituido anteriormente y no puede reingresar.`);
            htSelectedPlayerId = null;
            renderHTTactics();
            return;
          }
          if (isLive && startWindows <= 0) {
            alert("Has agotado las 3 ventanas de cambios permitidas en el partido. Los cambios en el descanso no consumen ventana, pero en juego ya no puedes hacer más cambios.");
            htSelectedPlayerId = null;
            renderHTTactics();
            return;
          }
          const testLineup = [...htLineupIds];
          testLineup[inLineup1] = tappedId;
          const testSubsCount = testLineup.filter(id => !initialPitchIds.includes(id)).length;

          if (testSubsCount > startRemaining) {
            alert(`No puedes realizar más cambios. Límite de ${startRemaining} cambios disponibles alcanzado.`);
            htSelectedPlayerId = null;
            renderHTTactics();
            return;
          }

          htLineupIds[inLineup1] = tappedId;
          htBenchIds[inBench2] = htSelectedPlayerId;
        } else if (inBench1 !== -1 && inLineup2 !== -1) {
          // Suplente entra por Titular
          const allSimPlayers = [...currentPitch, ...currentBench];
          const benchP = allSimPlayers.find(p => p.id === htSelectedPlayerId) || userTeam.players.find(p => p.id === htSelectedPlayerId);
          if (benchP && benchP.injury) {
            alert(`⚠️ ${benchP.name} está lesionado (${benchP.injury.type}) y no puede entrar al campo.`);
            htSelectedPlayerId = null;
            renderHTTactics();
            return;
          }
          if (benchP && benchP.suspension) {
            alert(`🟥 ${benchP.name} está sancionado y no puede entrar al campo.`);
            htSelectedPlayerId = null;
            renderHTTactics();
            return;
          }
          if (benchP && benchP.subbedOut && !initialPitchIds.includes(htSelectedPlayerId)) {
            alert(`⚠️ ${benchP.name} ya fue sustituido anteriormente y no puede reingresar.`);
            htSelectedPlayerId = null;
            renderHTTactics();
            return;
          }
          if (isLive && startWindows <= 0) {
            alert("Has agotado las 3 ventanas de cambios permitidas en el partido. Los cambios en el descanso no consumen ventana, pero en juego ya no puedes hacer más cambios.");
            htSelectedPlayerId = null;
            renderHTTactics();
            return;
          }
          const testLineup = [...htLineupIds];
          testLineup[inLineup2] = htSelectedPlayerId;
          const testSubsCount = testLineup.filter(id => !initialPitchIds.includes(id)).length;

          if (testSubsCount > startRemaining) {
            alert(`No puedes realizar más cambios. Límite de ${startRemaining} cambios disponibles alcanzado.`);
            htSelectedPlayerId = null;
            renderHTTactics();
            return;
          }

          htBenchIds[inBench1] = tappedId;
          htLineupIds[inLineup2] = htSelectedPlayerId;
        } else if (inBench1 !== -1 && inBench2 !== -1) {
          // Ambos en banquillo
          const tmp = htBenchIds[inBench1];
          htBenchIds[inBench1] = htBenchIds[inBench2];
          htBenchIds[inBench2] = tmp;
        }

        htSelectedPlayerId = null;
        renderHTTactics();
      }

      // Eventos de confirmación y cancelación
      const btnConfirm = modalHTTactics.querySelector("#btn-ht-tactic-confirm");
      const btnCancel = modalHTTactics.querySelector("#btn-ht-tactic-cancel");

      btnCancel.onclick = () => {
        modalHTTactics.classList.add("hidden");
        if (isLive) {
          if (wasRunning && !simulator.isFinished && !simulator.isHalfTime) {
            simulator.start();
            iconPP.textContent = "⏸";
            textPP.textContent = "Pausar";
          }
        } else {
          if (modalHT) modalHT.classList.remove("hidden");
        }
      };

      btnConfirm.onclick = () => {
        const res = simulator.applyTacticalChanges(
          teamSide,
          htFormationKey,
          htMentality,
          htLineupIds,
          htBenchIds,
          !isLive,
          htPlayerRoles,
          htCustomPositions,
          htManMarking
        );

        if (!res.success) {
          alert(res.reason);
          return;
        }

        gameState.userTactics.formation = htFormationKey;
        gameState.userTactics.mentality = htMentality;
        if (htLineupIds.length === 11) {
          gameState.userTactics.lineup = [...htLineupIds];
          gameState.userTactics.bench = [...htBenchIds];
        }
        gameState.userTactics.playerRoles = { ...htPlayerRoles };
        gameState.userTactics.customPositions = { ...htCustomPositions };
        gameState.userTactics.manMarking = { ...htManMarking };
        gameState.userTactics.instructions = JSON.parse(JSON.stringify(htInstructions));

        simulator.setTacticalInstructions(teamSide, htInstructions);

        if (teamSide === "home") {
          simulator.homePlayerRoles = { ...simulator.homePlayerRoles, ...htPlayerRoles };
          simulator.homeCustomPositions = { ...htCustomPositions };
        } else {
          simulator.awayPlayerRoles = { ...simulator.awayPlayerRoles, ...htPlayerRoles };
          simulator.awayCustomPositions = { ...htCustomPositions };
        }

        if (masterTacticsForNextMatches) {
          masterTacticsForNextMatches.formation = htFormationKey;
          masterTacticsForNextMatches.mentality = htMentality;
          masterTacticsForNextMatches.playerRoles = { ...htPlayerRoles };
          masterTacticsForNextMatches.customPositions = { ...htCustomPositions };
          masterTacticsForNextMatches.manMarking = { ...htManMarking };
          masterTacticsForNextMatches.instructions = JSON.parse(JSON.stringify(htInstructions));
        }
        SaveManager.saveGame(gameState);

        if (mentLabel) {
          mentLabel.textContent = mentalities.find(m => m.id === htMentality)?.label || "Equilibrada";
        }

        modalHTTactics.classList.add("hidden");

        const htSubsBadge = container.querySelector("#ht-subs-badge");
        if (htSubsBadge) htSubsBadge.textContent = `${res.remaining} rest. (Descanso: no gasta ventana)`;

        const subsBadge = container.querySelector("#subs-count-badge");
        if (subsBadge) {
          subsBadge.textContent = `${res.remaining} rest. (${res.windowsRemaining} vent.)`;
          if (res.windowsRemaining <= 0 || res.remaining <= 0) {
            subsBadge.className = "px-2 py-0.5 rounded-full bg-red-900/60 text-red-300 text-[10px] font-mono";
          }
        }

        if (isLive) {
          if (res.subsCount > 0) {
            showSubstitutionChyron({
              teamSide: teamSide,
              team: userTeam,
              subs: res.subsPairs,
              minute: simulator.minute,
              remaining: res.remaining,
              windowsRemaining: res.windowsRemaining,
              isHalfTime: false
            }, () => {
              if (wasRunning && !simulator.isFinished && !simulator.isHalfTime) {
                simulator.start();
                iconPP.textContent = "⏸";
                textPP.textContent = "Pausar";
              }
            });
          } else {
            showMatchAlert({ text: "🎯 Esquema táctico y posiciones actualizadas" });
            if (wasRunning && !simulator.isFinished && !simulator.isHalfTime) {
              simulator.start();
              iconPP.textContent = "⏸";
              textPP.textContent = "Pausar";
            }
          }
        } else {
          if (res.subsCount > 0) {
            showSubstitutionChyron({
              teamSide: teamSide,
              team: userTeam,
              subs: res.subsPairs,
              minute: 45,
              remaining: res.remaining,
              windowsRemaining: res.windowsRemaining,
              isHalfTime: true
            }, () => {
              if (modalHT) modalHT.classList.remove("hidden");
            });
          } else {
            showMatchAlert({ text: "🎯 Esquema táctico actualizado para la 2ª parte" });
            if (modalHT) modalHT.classList.remove("hidden");
          }
        }
      };

      modalHTTactics.classList.remove("hidden");
      renderHTTactics();
    }

    function openSetPieceModal(spInfo) {
      simulator.pause();
      simulator.isSetPieceRunning = true;
      const iconPP = container.querySelector("#play-pause-icon");
      const textPP = container.querySelector("#play-pause-text");
      if (iconPP) iconPP.textContent = "▶";
      if (textPP) textPP.textContent = "Reanudar";

      const modalSP = container.querySelector("#modal-setpiece");
      if (!modalSP) return;

      const badgeType = modalSP.querySelector("#setpiece-badge-type");
      const title = modalSP.querySelector("#setpiece-title");
      const btnAuto = modalSP.querySelector("#btn-setpiece-auto");
      const takerSelect = modalSP.querySelector("#setpiece-taker-select");
      const chipsContainer = modalSP.querySelector("#setpiece-strategy-chips");
      const ballSpot = modalSP.querySelector("#setpiece-ball-spot");
      const zonesContainer = modalSP.querySelector("#setpiece-interactive-zones");
      const poolContainer = modalSP.querySelector("#setpiece-players-pool");
      const btnConfirm = modalSP.querySelector("#btn-setpiece-confirm");
      const hintText = modalSP.querySelector("#setpiece-hint-text");

      const isCorner = spInfo.type === "CORNER";
      const isHome = spInfo.attackingSide === "home";
      const isLeftCorner = spInfo.spot.y < 50;

      if (badgeType) {
        badgeType.textContent = isCorner 
          ? `🚩 CÓRNER BANDA ${isLeftCorner ? "IZQUIERDA" : "DERECHA"} (${spInfo.minute}')` 
          : `🎯 FALTA PELIGROSA (${spInfo.distanceMeters ? spInfo.distanceMeters + 'm · ' : ''}${spInfo.minute}')`;
        badgeType.className = isCorner
          ? "text-[10px] uppercase font-black text-sky-400 bg-sky-400/10 border border-sky-400/30 px-2.5 py-0.5 rounded-full"
          : "text-[10px] uppercase font-black text-amber-400 bg-amber-400/10 border border-amber-400/30 px-2.5 py-0.5 rounded-full";
      }
      if (title) {
        title.textContent = isCorner 
          ? `Pizarra Táctica · Saque de Esquina (${isLeftCorner ? "Banda Izquierda" : "Banda Derecha"})` 
          : `Pizarra Táctica · Falta a ${spInfo.distanceMeters || 24} metros`;
      }

      // Ubicación física del balón en la mini pizarra del área
      if (ballSpot) {
        if (isCorner) {
          ballSpot.style.left = isLeftCorner ? "12px" : "calc(100% - 24px)";
          ballSpot.style.top = "10px";
        } else {
          const pctY = Math.max(16, Math.min(84, spInfo.spot.y));
          const distM = spInfo.distanceMeters || 24;
          const topPct = Math.max(54, Math.min(92, 52 + (distM - 16) * 2.1));
          ballSpot.style.left = `${pctY}%`;
          ballSpot.style.top = `${topPct}%`;
        }
      }

      const atkPlayers = isHome ? simulator.homePlayersOnPitch : simulator.awayPlayersOnPitch;
      const outfield = atkPlayers.filter(p => p.pos !== "POR");

      // Ordenar lanzadores sugeridos por stats (PAS y SHO)
      const sortedTakers = [...outfield].sort((a, b) => {
        const scoreA = isCorner ? ((a.pas || 70) * 1.3 + (a.sho || 70) * 0.7) : ((a.sho || 70) * 1.3 + (a.pas || 70) * 0.7);
        const scoreB = isCorner ? ((b.pas || 70) * 1.3 + (b.sho || 70) * 0.7) : ((b.sho || 70) * 1.3 + (b.pas || 70) * 0.7);
        return scoreB - scoreA;
      });

      const spTypeKey = isCorner ? "CORNER" : "FREE_KICK";
      const savedSP = gameState.userTactics?.savedSetPieces?.[spTypeKey];

      let selectedTakerId = sortedTakers[0]?.id || outfield[0]?.id;
      if (savedSP && savedSP.takerId && outfield.some(p => p.id === savedSP.takerId)) {
        selectedTakerId = savedSP.takerId;
      }

      if (takerSelect) {
        takerSelect.innerHTML = outfield.map(p => {
          const statText = isCorner ? `PAS ${p.pas || 70} · OVR ${p.ovr}` : `SHO ${p.sho || 70} · PAS ${p.pas || 70}`;
          return `<option value="${p.id}" ${p.id === selectedTakerId ? 'selected' : ''}>${p.name} (${p.pos}) — ${statText}</option>`;
        }).join('');
      }

      const strategies = isCorner ? [
        { id: "PENALTY_SPOT", label: "🎯 Al Punto de Penalti", desc: "Balón colgado al centro del área" },
        { 
          id: "NEAR_POST", 
          label: isLeftCorner ? "📐 1er Palo (Palo Izq.)" : "📐 1er Palo (Palo Dcho.)", 
          desc: isLeftCorner ? "Envío tenso al palo corto izquierdo" : "Envío tenso al palo corto derecho" 
        },
        { 
          id: "FAR_POST", 
          label: isLeftCorner ? "📐 2º Palo (Palo Dcho.)" : "📐 2º Palo (Palo Izq.)", 
          desc: isLeftCorner ? "Balón colgado al segundo poste derecho" : "Balón colgado al segundo poste izquierdo" 
        },
        { id: "SHORT_PASS", label: "🤝 Saque en Corto", desc: "Pase en corto para abrir ángulo" }
      ] : [
        { id: "DIRECT_SHOT", label: "💥 Disparo Directo", desc: "Tiro a la escuadra o palo del portero" },
        { id: "PENALTY_SPOT", label: "🎯 Al Punto de Penalti", desc: "Centro bombeado al corazón del área" },
        { id: "NEAR_POST", label: "📐 Al Primer Palo", desc: "Centro cerrado buscando desvío" },
        { id: "FAR_POST", label: "📐 Al Segundo Palo", desc: "Balón colgado al segundo poste" },
        { id: "SHORT_PASS", label: "🤝 Pase en Corto", desc: "Pase a la frontal del área para remate" }
      ];

      let currentStrategy = isCorner ? "PENALTY_SPOT" : "DIRECT_SHOT";
      if (savedSP && savedSP.strategy && strategies.some(s => s.id === savedSP.strategy)) {
        currentStrategy = savedSP.strategy;
      }

      // El 1er palo se ubica siempre en el poste más cercano a la esquina donde se saca el córner
      const zoneDefs = [
        { 
          id: "NEAR_POST", 
          name: "1er Palo", 
          x: isLeftCorner ? 26 : 74, 
          y: 24, 
          desc: isCorner ? (isLeftCorner ? "Palo corto (Izq.)" : "Palo corto (Dcho.)") : "Anticipación", 
          color: "text-amber-300" 
        },
        { id: "PENALTY_SPOT", name: "Pto. Penalti", x: 50, y: 40, desc: "Rematador principal", color: "text-emerald-300" },
        { 
          id: "FAR_POST", 
          name: "2º Palo", 
          x: isLeftCorner ? 74 : 26, 
          y: 24, 
          desc: isCorner ? (isLeftCorner ? "Palo largo (Dcho.)" : "Palo largo (Izq.)") : "Llegada desde atrás", 
          color: "text-amber-300" 
        },
        { id: "EDGE_BOX", name: "Frontal", x: 50, y: 64, desc: "Tiro de rechace", color: "text-sky-300" },
        { id: "SHORT_OPTION", name: "En Corto", x: (isLeftCorner ? 18 : 82), y: isCorner ? 26 : 58, desc: "Apoyo para pase", color: "text-indigo-300" },
        { id: "STAY_BACK", name: "Cierre", x: 50, y: 84, desc: "Contención defensiva", color: "text-slate-300" }
      ];

      let placements = {};
      let selectedPoolPlayerId = null;

      function autoAssignPlacements() {
        placements = {};
        const pool = outfield.filter(p => p.id !== selectedTakerId);

        const poolByHeadingSho = [...pool].sort((a, b) => ((b.sho || 70) * 1.2 + (b.ovr || 70)) - ((a.sho || 70) * 1.2 + (a.ovr || 70)));
        const pPen = poolByHeadingSho[0];
        if (pPen) placements["PENALTY_SPOT"] = pPen.id;

        const rem1 = pool.filter(p => p.id !== pPen?.id);
        const pNear = rem1.sort((a, b) => ((b.sho || 70) + (b.pac || 70)) - ((a.sho || 70) + (a.pac || 70)))[0];
        if (pNear) placements["NEAR_POST"] = pNear.id;

        const rem2 = rem1.filter(p => p.id !== pNear?.id);
        const pFar = rem2.sort((a, b) => (b.ovr || 70) - (a.ovr || 70))[0];
        if (pFar) placements["FAR_POST"] = pFar.id;

        const rem3 = rem2.filter(p => p.id !== pFar?.id);
        const pEdge = rem3.sort((a, b) => ((b.sho || 70) + (b.pas || 70)) - ((a.sho || 70) + (a.pas || 70)))[0];
        if (pEdge) placements["EDGE_BOX"] = pEdge.id;

        const rem4 = rem3.filter(p => p.id !== pEdge?.id);
        const pShort = rem4.sort((a, b) => (b.pas || 70) - (a.pas || 70))[0];
        if (pShort) placements["SHORT_OPTION"] = pShort.id;

        const rem5 = rem4.filter(p => p.id !== pShort?.id);
        const pBack = rem5.sort((a, b) => (b.def || 70) - (a.def || 70))[0];
        if (pBack) placements["STAY_BACK"] = pBack.id;
      }

      function loadSavedOrAutoPlacements() {
        if (savedSP && savedSP.placements && Object.keys(savedSP.placements).length > 0) {
          placements = {};
          const availablePool = outfield.filter(p => p.id !== selectedTakerId);
          const usedPIds = new Set();
          // Primero colocamos los futbolistas guardados que siguen en el campo
          Object.keys(savedSP.placements).forEach(zId => {
            const pId = savedSP.placements[zId];
            if (pId && pId !== selectedTakerId && availablePool.some(p => p.id === pId) && !usedPIds.has(pId)) {
              placements[zId] = pId;
              usedPIds.add(pId);
            }
          });
          // Si quedan zonas vacías, rellenar con los restantes
          const remainingPool = availablePool.filter(p => !usedPIds.has(p.id));
          zoneDefs.forEach(z => {
            if (!placements[z.id] && remainingPool.length > 0) {
              const nextP = remainingPool.shift();
              placements[z.id] = nextP.id;
            }
          });
        } else {
          autoAssignPlacements();
        }
      }
      loadSavedOrAutoPlacements();

      function renderSetPieceBoard() {
        // 1. Renderizar opciones / chips de estrategia
        if (chipsContainer) {
          chipsContainer.innerHTML = strategies.map(st => {
            const isActive = st.id === currentStrategy;
            return `
              <button class="sp-strategy-btn p-2 rounded-xl border text-left transition flex flex-col justify-center ${isActive ? 'bg-gradient-to-r from-emerald-600 to-teal-600 border-emerald-400 text-white shadow-lg ring-2 ring-emerald-400/40' : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:border-slate-500'}" data-strategy="${st.id}">
                <div class="font-extrabold text-[11px] truncate flex items-center justify-between">
                  <span>${st.label}</span>
                  ${isActive ? '<span class="text-xs">✔</span>' : ''}
                </div>
                <div class="text-[9px] ${isActive ? 'text-emerald-100' : 'text-slate-400'} truncate">${st.desc}</div>
              </button>
            `;
          }).join('');

          chipsContainer.querySelectorAll(".sp-strategy-btn").forEach(btn => {
            btn.onclick = () => {
              currentStrategy = btn.dataset.strategy;
              renderSetPieceBoard();
            };
          });
        }

        // 2. Renderizar Zonas en la pizarra táctica del área
        if (zonesContainer) {
          zonesContainer.innerHTML = zoneDefs.map(zone => {
            const isTarget = (zone.id === currentStrategy) || (currentStrategy === "DIRECT_SHOT" && zone.id === "PENALTY_SPOT");
            const assignedPId = placements[zone.id];
            const assignedPlayer = assignedPId ? outfield.find(p => p.id === assignedPId) : null;

            return `
              <div class="sp-zone-slot absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform active:scale-95" style="left: ${zone.x}%; top: ${zone.y}%;" data-zone="${zone.id}">
                <div class="flex flex-col items-center">
                  <div class="px-2 py-1 rounded-xl text-center border backdrop-blur-md shadow-md min-w-[72px] transition ${isTarget ? 'bg-amber-500/25 border-amber-400 ring-2 ring-amber-400/60 shadow-amber-500/30' : (assignedPlayer ? 'bg-slate-900/90 border-emerald-500/80 shadow-emerald-500/10' : 'bg-slate-900/80 border-slate-600/70 hover:border-slate-400')}">
                    <div class="flex items-center justify-between gap-1 text-[8px] font-black uppercase ${isTarget ? 'text-amber-300 font-extrabold' : 'text-slate-400'}">
                      <span class="truncate">${zone.name}</span>
                      ${isTarget ? '<span class="text-[8px] bg-amber-400 text-slate-950 font-black px-1 rounded">OBJ</span>' : ''}
                    </div>
                    ${assignedPlayer ? `
                      <div class="font-extrabold text-[10px] text-white truncate max-w-[80px]">${assignedPlayer.name}</div>
                      <div class="text-[8px] text-emerald-400 font-mono">${assignedPlayer.pos} · ${assignedPlayer.ovr}</div>
                    ` : `
                      <div class="text-[9px] text-slate-500 italic py-0.5">+ Colocar</div>
                    `}
                  </div>
                </div>
              </div>
            `;
          }).join('');

          zonesContainer.querySelectorAll(".sp-zone-slot").forEach(slot => {
            slot.onclick = () => {
              const zoneId = slot.dataset.zone;
              if (selectedPoolPlayerId) {
                // Si el jugador ya estaba en otra zona, liberarla
                Object.keys(placements).forEach(z => {
                  if (placements[z] === selectedPoolPlayerId) {
                    delete placements[z];
                  }
                });
                placements[zoneId] = selectedPoolPlayerId;
                selectedPoolPlayerId = null;
                renderSetPieceBoard();
              } else if (placements[zoneId]) {
                // Desasignar jugador de la zona al tocarla
                delete placements[zoneId];
                renderSetPieceBoard();
              }
            };
          });
        }

        // 3. Renderizar Pool de futbolistas de campo disponibles
        if (poolContainer) {
          const pool = outfield.filter(p => p.id !== selectedTakerId);
          poolContainer.innerHTML = pool.map(p => {
            const isSelected = selectedPoolPlayerId === p.id;
            let assignedZoneName = null;
            Object.keys(placements).forEach(zId => {
              if (placements[zId] === p.id) {
                const zDef = zoneDefs.find(zd => zd.id === zId);
                assignedZoneName = zDef ? zDef.name : zId;
              }
            });

            return `
              <div class="sp-pool-item flex-shrink-0 p-2 rounded-xl border cursor-pointer select-none transition min-w-[104px] ${isSelected ? 'bg-cyan-500/25 border-cyan-400 ring-2 ring-cyan-400/50 shadow-lg' : (assignedZoneName ? 'bg-slate-900/90 border-slate-700' : 'bg-slate-950/80 border-slate-800 hover:border-slate-600')}" data-id="${p.id}">
                <div class="flex items-center justify-between gap-1 mb-1">
                  <span class="px-1.5 py-0.2 rounded bg-slate-800 text-[9px] font-bold text-sky-400">${p.pos}</span>
                  <span class="text-[9px] font-mono font-bold text-amber-400">${p.ovr}</span>
                </div>
                <div class="font-extrabold text-[11px] text-white truncate max-w-[94px]">${p.name}</div>
                <div class="flex justify-between text-[8px] text-slate-400 mt-1">
                  <span>REM: <b>${p.sho || 70}</b></span>
                  <span>PAS: <b>${p.pas || 70}</b></span>
                </div>
                <div class="mt-1">
                  ${assignedZoneName ? `
                    <span class="inline-block text-[8px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-1.5 py-0.2 rounded font-bold truncate max-w-full">
                      📍 ${assignedZoneName}
                    </span>
                  ` : `
                    <span class="inline-block text-[8px] bg-slate-800 text-slate-400 px-1.5 py-0.2 rounded">
                      Disponible
                    </span>
                  `}
                </div>
              </div>
            `;
          }).join('');

          poolContainer.querySelectorAll(".sp-pool-item").forEach(item => {
            item.onclick = () => {
              const pId = item.dataset.id;
              if (selectedPoolPlayerId === pId) {
                selectedPoolPlayerId = null;
              } else {
                selectedPoolPlayerId = pId;
              }
              renderSetPieceBoard();
            };
          });
        }

        // 4. Actualizar texto de instrucción dinámica
        if (hintText) {
          if (selectedPoolPlayerId) {
            const selP = outfield.find(p => p.id === selectedPoolPlayerId);
            hintText.innerHTML = `👉 <b class="text-cyan-400">${selP?.name}</b> seleccionado. Ahora <b>toca una zona del área</b> para ubicarlo allí.`;
          } else {
            hintText.innerHTML = `💡 Toca un futbolista y luego una zona del área para ubicarlo en la jugada ensayada.`;
          }
        }
      }

      if (takerSelect) {
        takerSelect.onchange = () => {
          selectedTakerId = takerSelect.value;
          // Si el lanzador estaba asignado a alguna zona, retirarlo
          Object.keys(placements).forEach(zId => {
            if (placements[zId] === selectedTakerId) {
              delete placements[zId];
            }
          });
          if (selectedPoolPlayerId === selectedTakerId) {
            selectedPoolPlayerId = null;
          }
          renderSetPieceBoard();
        };
      }

      if (btnAuto) {
        btnAuto.onclick = () => {
          selectedTakerId = sortedTakers[0]?.id || outfield[0]?.id;
          if (takerSelect) takerSelect.value = selectedTakerId;
          autoAssignPlacements();
          renderSetPieceBoard();
          showMatchAlert({ text: "⚡ Pizarra táctica de balón parado optimizada automáticamente" });
        };
      }

      const btnSaveLayout = modalSP.querySelector("#btn-setpiece-save-layout");
      if (btnSaveLayout) {
        btnSaveLayout.onclick = () => {
          if (!gameState.userTactics.savedSetPieces) gameState.userTactics.savedSetPieces = {};
          gameState.userTactics.savedSetPieces[spTypeKey] = {
            strategy: currentStrategy,
            takerId: selectedTakerId,
            placements: { ...placements }
          };
          if (masterTacticsForNextMatches) {
            if (!masterTacticsForNextMatches.savedSetPieces) masterTacticsForNextMatches.savedSetPieces = {};
            masterTacticsForNextMatches.savedSetPieces[spTypeKey] = {
              strategy: currentStrategy,
              takerId: selectedTakerId,
              placements: { ...placements }
            };
          }
          SaveManager.saveGame(gameState);
          if (hintText) {
            hintText.innerHTML = `💾 <b class="text-emerald-400">¡Disposición de ${isCorner ? 'córner' : 'falta'} guardada con éxito para futuros partidos!</b>`;
          }
          showMatchAlert({ text: `💾 Disposición de jugada ensayada guardada` });
        };
      }

      if (btnConfirm) {
        btnConfirm.onclick = () => {
          const currentTaker = outfield.find(p => p.id === selectedTakerId) || outfield[0];
          const resolvedPlacements = {};
          Object.keys(placements).forEach(zId => {
            const pId = placements[zId];
            const pObj = outfield.find(p => p.id === pId);
            if (pObj) resolvedPlacements[zId] = pObj;
          });

          // Auto-guardar la disposición táctica elegida para futuras ocasiones
          if (!gameState.userTactics.savedSetPieces) gameState.userTactics.savedSetPieces = {};
          gameState.userTactics.savedSetPieces[spTypeKey] = {
            strategy: currentStrategy,
            takerId: selectedTakerId,
            placements: { ...placements }
          };
          if (masterTacticsForNextMatches) {
            if (!masterTacticsForNextMatches.savedSetPieces) masterTacticsForNextMatches.savedSetPieces = {};
            masterTacticsForNextMatches.savedSetPieces[spTypeKey] = {
              strategy: currentStrategy,
              takerId: selectedTakerId,
              placements: { ...placements }
            };
          }
          SaveManager.saveGame(gameState);

          modalSP.classList.add("hidden");

          const stratObj = strategies.find(s => s.id === currentStrategy);
          showMatchAlert({ text: `⚽ ¡${currentTaker.name} listo para ejecutar! Estrategia: ${stratObj?.label || 'Balón al área'}` });

          if (simulator.pauseRequested) {
            if (iconPP) iconPP.textContent = "▶";
            if (textPP) textPP.textContent = "Pausa pedida";
          } else {
            if (iconPP) iconPP.textContent = "⏸";
            if (textPP) textPP.textContent = "Pausar";
          }

          simulator.isRunning = true;
          simulator.executeSetPiece({
            type: spInfo.type,
            attackingSide: spInfo.attackingSide,
            spot: spInfo.spot,
            distanceMeters: spInfo.distanceMeters,
            taker: currentTaker,
            targetStrategy: currentStrategy,
            placements: resolvedPlacements
          }, () => {
            if (!simulator.isFinished && !simulator.isHalfTime) {
              if (simulator.pauseRequested) {
                simulator.pauseRequested = false;
                simulator.pause();
                if (iconPP) iconPP.textContent = "▶";
                if (textPP) textPP.textContent = "Reanudar";
                showMatchAlert({ text: "⏸ Partido en pausa tras la jugada a balón parado" });
              } else {
                if (!simulator.isRunning) simulator.start();
                if (iconPP) iconPP.textContent = "⏸";
                if (textPP) textPP.textContent = "Pausar";
              }
            }
          });
        };
      }

      modalSP.classList.remove("hidden");
      renderSetPieceBoard();
    }

    btnCloseSubs.onclick = () => {
      modalSubs.classList.add("hidden");
      if (simulator.isHalfTime) {
        // En el descanso se vuelve a mostrar el modal de descanso tras hacer cambios
        if (modalHT) {
          const htSubsBadge = container.querySelector("#ht-subs-badge");
          const remainingSubs = isUserHome ? simulator.homeSubsRemaining : simulator.awaySubsRemaining;
          if (htSubsBadge) htSubsBadge.textContent = `${remainingSubs} rest. (Descanso)`;
          modalHT.classList.remove("hidden");
        }
        if (pendingUserSubs.length > 0) {
          showSubstitutionChyron({
            teamSide: isUserHome ? "home" : "away",
            team: userTeam,
            subs: [...pendingUserSubs],
            minute: 45,
            remaining: isUserHome ? simulator.homeSubsRemaining : simulator.awaySubsRemaining,
            windowsRemaining: isUserHome ? simulator.homeWindowsRemaining : simulator.awayWindowsRemaining,
            isHalfTime: true
          }, () => {
            if (modalHT) modalHT.classList.remove("hidden");
          });
          pendingUserSubs.length = 0;
        }
      } else {
        if (pendingUserSubs.length > 0) {
          showSubstitutionChyron({
            teamSide: isUserHome ? "home" : "away",
            team: userTeam,
            subs: [...pendingUserSubs],
            minute: simulator.minute,
            remaining: isUserHome ? simulator.homeSubsRemaining : simulator.awaySubsRemaining,
            windowsRemaining: isUserHome ? simulator.homeWindowsRemaining : simulator.awayWindowsRemaining,
            isHalfTime: false
          }, () => {
            if (!simulator.isFinished && !simulator.isHalfTime) {
              simulator.start();
              iconPP.textContent = "⏸";
              textPP.textContent = "Pausar";
            }
          });
          pendingUserSubs.length = 0;
        } else {
          simulator.start();
          iconPP.textContent = "⏸";
          textPP.textContent = "Pausar";
        }
      }
    };

    function handleInjurySequence(injData) {
      // 1. Sincronizar de inmediato la lesión en gameState.teams para persistencia
      const isUserSide = injData.teamSide === (isUserHome ? "home" : "away");
      const targetTeam = injData.teamSide === "home" ? homeTeam : awayTeam;
      const realP = targetTeam.players.find(p => p.id === injData.player.id);
      if (realP) {
        realP.injury = injData.injury;
        realP.energy = Math.round(injData.player.energy !== undefined ? injData.player.energy : 50);
      }
      SaveManager.saveGame(gameState);

      if (injData.isSkippingToEnd || simulator.isSkippingToEnd) return;

      if (isUserSide) {
        // Pausar el simulador para que el usuario gestione la lesión obligatoria
        simulator.pause();
        const iconPP = container.querySelector("#play-pause-icon");
        const textPP = container.querySelector("#play-pause-text");
        if (iconPP) iconPP.textContent = "▶";
        if (textPP) textPP.textContent = "Reanudar";

        const modalInj = container.querySelector("#modal-injury-alert");
        const titleInj = container.querySelector("#injury-modal-title");
        const descInj = container.querySelector("#injury-modal-desc");
        const detailInj = container.querySelector("#injury-modal-detail");
        const btnSubNow = container.querySelector("#btn-injury-sub-now");

        if (titleInj) titleInj.textContent = `¡${injData.player.name} ha caído lesionado!`;
        if (descInj) descInj.textContent = `El cuerpo médico atiende al futbolista y confirma que no puede continuar en el encuentro.`;
        if (detailInj) {
          const sevLabels = { light: "Leve", moderate: "Moderada", severe: "Grave" };
          detailInj.innerHTML = `
            <div class="flex justify-between border-b border-slate-900 pb-1">
              <span class="text-slate-400">Lesión:</span>
              <b class="text-rose-400 font-bold">${injData.injury.type}</b>
            </div>
            <div class="flex justify-between border-b border-slate-900 py-1">
              <span class="text-slate-400">Gravedad:</span>
              <b class="text-amber-400 font-bold">${sevLabels[injData.injury.severity] || "Moderada"}</b>
            </div>
            <div class="flex justify-between pt-1">
              <span class="text-slate-400">Baja estimada:</span>
              <b class="text-white font-mono font-bold">${injData.injury.roundsLeft} jornada(s)</b>
            </div>
          `;
        }

        const remaining = isUserHome ? simulator.homeSubsRemaining : simulator.awaySubsRemaining;
        const remainingWindows = isUserHome ? simulator.homeWindowsRemaining : simulator.awayWindowsRemaining;

        if (btnSubNow) {
          if (remaining > 0 && (remainingWindows > 0 || simulator.isHalfTime)) {
            btnSubNow.innerHTML = `<span>🔄 Realizar cambio por lesión (${remaining} restantes)</span>`;
            btnSubNow.onclick = () => {
              if (modalInj) modalInj.classList.add("hidden");
              subSelectedPitchId = injData.player.id;
              openTacticsModal(!simulator.isHalfTime, { forceResume: true, preselectPlayerId: injData.player.id });
            };
          } else {
            btnSubNow.innerHTML = `<span>⚠️ Sin cambios disponibles (Continuar con jugador tocado)</span>`;
            btnSubNow.onclick = () => {
              if (modalInj) modalInj.classList.add("hidden");
              if (!simulator.isFinished && !simulator.isHalfTime) {
                simulator.start();
                if (iconPP) iconPP.textContent = "⏸";
                if (textPP) textPP.textContent = "Pausar";
              }
            };
          }
        }

        if (modalInj) modalInj.classList.remove("hidden");
      }
    }

    function renderMatchSubsModal() {
      const userPlayersOnPitch = isUserHome ? simulator.homePlayersOnPitch : simulator.awayPlayersOnPitch;
      const userBench = isUserHome ? simulator.homeBench : simulator.awayBench;
      const pitchList = container.querySelector("#sub-pitch-list");
      const benchList = container.querySelector("#sub-bench-list");

      pitchList.innerHTML = userPlayersOnPitch.map(p => {
        const isInjured = Boolean(p.injury);
        const isSelected = subSelectedPitchId === p.id;
        return `
          <div class="sub-pitch-item p-2 rounded-xl border ${isSelected ? 'border-red-400 bg-red-500/25' : isInjured ? 'border-rose-500 bg-rose-950/60' : 'border-slate-800 bg-slate-950/70'} flex items-center justify-between text-xs cursor-pointer active:scale-98" data-id="${p.id}">
            <div class="flex items-center gap-2">
              <span class="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] font-bold text-sky-400">${p.pos}</span>
              <span class="font-bold text-white">${p.name}</span>
              ${isInjured ? `<span class="px-1.5 py-0.5 rounded bg-rose-900 border border-rose-500 text-[9px] font-bold text-rose-200">🚑 ${p.injury.roundsLeft}j</span>` : ''}
            </div>
            <div class="flex items-center gap-2">
              <span class="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-emerald-400">⭐ ${(p.matchRating || 6.5).toFixed(1)}</span>
              <span class="text-[10px] text-slate-400">⚡ ${Math.round(p.energy)}%</span>
              <span class="font-bold text-amber-400">${p.ovr}</span>
            </div>
          </div>
        `;
      }).join('');

      benchList.innerHTML = userBench.map(p => {
        const isInjured = Boolean(p.injury);
        return `
          <div class="sub-bench-item p-2 rounded-xl border ${isInjured ? 'border-rose-900/60 bg-rose-950/20' : 'border-slate-800 bg-slate-950/70 hover:border-emerald-500/60'} flex items-center justify-between text-xs cursor-pointer active:scale-98" data-id="${p.id}">
            <div class="flex items-center gap-2">
              <span class="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] font-bold text-emerald-400">${p.pos}</span>
              <span class="font-bold text-white">${p.name}</span>
              ${isInjured ? `<span class="px-1.5 py-0.5 rounded bg-rose-900/90 border border-rose-500/60 text-[9px] font-bold text-rose-300">🚑 ${p.injury.roundsLeft}j</span>` : ''}
            </div>
            <div class="flex items-center gap-2">
              <span class="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-emerald-400">⭐ ${(p.matchRating || 6.5).toFixed(1)}</span>
              <span class="text-[10px] text-slate-400">⚡ ${Math.round(p.energy)}%</span>
              <span class="font-bold text-amber-400">${p.ovr}</span>
            </div>
          </div>
        `;
      }).join('');

      container.querySelectorAll(".sub-pitch-item").forEach(item => {
        item.onclick = () => {
          subSelectedPitchId = item.dataset.id;
          renderMatchSubsModal();
        };
      });

      container.querySelectorAll(".sub-bench-item").forEach(item => {
        item.onclick = () => {
          if (!subSelectedPitchId) {
            alert("Primero selecciona el jugador que deseas retirar del campo");
            return;
          }
          const benchId = item.dataset.id;
          const benchP = userBench.find(p => p.id === benchId);
          if (benchP && benchP.injury) {
            alert(`⚠️ ${benchP.name} está lesionado (${benchP.injury.type}) y no puede saltar al terreno de juego.`);
            return;
          }
          const res = simulator.makeSubstitution(isUserHome ? "home" : "away", subSelectedPitchId, benchId, simulator.isHalfTime);
          if (res.success) {
            pendingUserSubs.push({ outPlayer: res.outPlayer, inPlayer: res.inPlayer });
            subSelectedPitchId = null;
            renderMatchSubsModal();
          } else {
            alert(res.reason);
          }
        };
      });
    }

    function handleLiveMatchEnd(result) {
      hideAssistantAdviceCard();
      clearAllMatchUiTimeouts();
      // Sincronizar estados finales de energía, goles, asistencias, notas, MVP, minutos y lesiones de ambos equipos con gameState
      const syncTeamPlayers = (simPlayers, realTeam) => {
        if (!simPlayers || !realTeam) return;
        simPlayers.forEach(pSim => {
          const pReal = realTeam.players.find(p => p.id === pSim.id);
          if (pReal) {
            pReal.energy = Math.round(pSim.energy !== undefined ? pSim.energy : 100);
            pReal.goals = pSim.goals || 0;
            pReal.assists = pSim.assists || 0;
            pReal.matchMinutes = pSim.matchMinutes || 0;
            if (pSim.playedInMatch || (pSim.matchMinutes || 0) > 0) {
              const rating = Number((pSim.matchRating || 6.5).toFixed(2));
              pReal.lastMatchRating = rating;
              pReal.ratingSum = (pReal.ratingSum || 0) + rating;
              pReal.matchesRated = (pReal.matchesRated || 0) + 1;
              pReal.avgRating = Number((pReal.ratingSum / pReal.matchesRated).toFixed(2));
            }
            if (result.mvp && result.mvp.id === pReal.id) {
              pReal.mvpCount = (pReal.mvpCount || 0) + 1;
            }
            if (pSim.injury) pReal.injury = pSim.injury;
            delete pReal.subbedOut;
          }
        });
      };

      syncTeamPlayers(result.homePlayers, homeTeam);
      syncTeamPlayers(result.awayPlayers, awayTeam);

      // Sincronizar tarjetas y sanciones disciplinarias de ambos equipos
      if (result.cards) {
        const allMatchPlayers = [...homeTeam.players, ...awayTeam.players];
        if (result.cards.yellows) {
          Object.keys(result.cards.yellows).forEach(pId => {
            const pReal = allMatchPlayers.find(p => p.id === pId);
            if (pReal) {
              pReal.seasonYellows = (pReal.seasonYellows || 0) + 1;
              if (pReal.seasonYellows % 5 === 0 && !pReal.suspension) {
                pReal.suspension = { roundsLeft: 1, reason: "Ciclo de 5 Amarillas", justAcquired: true };
              }
            }
          });
        }
        if (result.cards.reds) {
          Object.keys(result.cards.reds).forEach(pId => {
            const rCard = result.cards.reds[pId];
            const pReal = allMatchPlayers.find(p => p.id === pId);
            if (pReal) {
              pReal.seasonReds = (pReal.seasonReds || 0) + 1;
              pReal.suspension = { roundsLeft: 1, reason: rCard?.reason || "Tarjeta Roja", justAcquired: true };
            }
          });
        }
      }

      userMatch.played = true;
      userMatch.homeScore = result.homeScore;
      userMatch.awayScore = result.awayScore;
      userMatch.scorers = result.scorers;

      const teamsMap = {};
      gameState.teams.forEach(t => { teamsMap[t.id] = t; });

      // Simular con realismo todos los demás partidos de la jornada
      currentRoundData.matches.forEach(m => {
        if (!m.played || m.homeScore === null || m.awayScore === null) {
          const sim = simulateAIParties(m, teamsMap);
          m.played = true;
          m.homeScore = sim.homeScore;
          m.awayScore = sim.awayScore;
          m.scorers = sim.scorers;
        }
      });

      gameState.standings = updateStandings(gameState.standings, currentRoundData.matches);

      if (!gameState.topScorers) gameState.topScorers = {};
      currentRoundData.matches.forEach(m => {
        (m.scorers || []).forEach(sc => {
          const pName = sc.playerName || sc.player?.name;
          if (pName) {
            gameState.topScorers[pName] = (gameState.topScorers[pName] || 0) + 1;
          }
        });
      });

      const modalEnd = container.querySelector("#modal-match-end");
      const fHScore = container.querySelector("#final-home-score");
      const fAScore = container.querySelector("#final-away-score");
      const fScorers = container.querySelector("#final-scorers-list");
      const otherRes = container.querySelector("#other-results-list");

      if (fHScore) fHScore.textContent = result.homeScore;
      if (fAScore) fAScore.textContent = result.awayScore;

      // Renderizar MVP del Partido y Mejores Notas (Mejora 5)
      const fMvpCard = container.querySelector("#final-mvp-card");
      if (fMvpCard && result.mvp) {
        const mvpTeam = result.mvp.teamSide === "home" ? homeTeam : awayTeam;
        const statsParts = [];
        if (result.mvp.goals > 0) statsParts.push(`⚽ ${result.mvp.goals} gol${result.mvp.goals > 1 ? 'es' : ''}`);
        if (result.mvp.assists > 0) statsParts.push(`👟 ${result.mvp.assists} asist.`);
        if (result.mvp.saves > 0) statsParts.push(`🧤 ${result.mvp.saves} paradas`);
        if (statsParts.length === 0) statsParts.push(`Actuación decisiva`);
        fMvpCard.innerHTML = `
          <div class="bg-gradient-to-r from-amber-500/20 via-yellow-500/15 to-amber-500/20 border border-amber-400/50 rounded-2xl p-2.5 flex items-center justify-between text-left shadow-lg">
            <div class="flex items-center gap-2.5 min-w-0">
              <div class="w-9 h-9 rounded-xl bg-amber-400/20 border border-amber-400/60 flex items-center justify-center text-lg flex-shrink-0">🏆</div>
              <div class="min-w-0">
                <div class="text-[9px] font-black uppercase tracking-wider text-amber-300">MVP DEL PARTIDO</div>
                <div class="text-xs font-extrabold text-white truncate">${result.mvp.name} <span class="text-[10px] font-bold text-slate-400">(${mvpTeam.shortName} · ${result.mvp.pos})</span></div>
                <div class="text-[9.5px] text-amber-200/90 font-semibold">${statsParts.join(' · ')}</div>
              </div>
            </div>
            <div class="px-2.5 py-1 rounded-xl bg-amber-400 text-slate-950 font-black font-mono text-sm flex-shrink-0 shadow">
              ${result.mvp.rating.toFixed(1)}
            </div>
          </div>
        `;
      }

      // Renderizar Estadísticas del Partido (Posesión, Tiros a Puerta, Tiros Totales)
      const fMatchStats = container.querySelector("#final-match-stats");
      if (fMatchStats) {
        const stats = result.stats || {};
        const posHome = stats.possession?.home ?? 50;
        const posAway = stats.possession?.away ?? (100 - posHome);
        const shotsHome = stats.shots?.home ?? 0;
        const shotsAway = stats.shots?.away ?? 0;
        const onTargetHome = stats.shotsOnTarget?.home ?? 0;
        const onTargetAway = stats.shotsOnTarget?.away ?? 0;

        const totalShots = shotsHome + shotsAway;
        const shotsHomePct = totalShots > 0 ? Math.round((shotsHome / totalShots) * 100) : 50;
        const shotsAwayPct = 100 - shotsHomePct;

        const totalOnTarget = onTargetHome + onTargetAway;
        const onTargetHomePct = totalOnTarget > 0 ? Math.round((onTargetHome / totalOnTarget) * 100) : 50;
        const onTargetAwayPct = 100 - onTargetHomePct;

        fMatchStats.innerHTML = `
          <div class="text-[9.5px] uppercase font-bold text-slate-400 tracking-wider text-center mb-2 flex items-center justify-center gap-1.5">
            <span>📊</span>
            <span>Estadísticas del Partido</span>
          </div>
          <div class="space-y-2">
            <!-- Posesión -->
            <div>
              <div class="flex justify-between items-center text-xs font-bold mb-1">
                <span class="text-sky-400 font-mono">${posHome}%</span>
                <span class="text-[9.5px] text-slate-300 font-extrabold uppercase tracking-wide">Posesión</span>
                <span class="text-indigo-400 font-mono">${posAway}%</span>
              </div>
              <div class="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden flex">
                <div class="bg-sky-500 h-full transition-all duration-500" style="width: ${posHome}%"></div>
                <div class="bg-indigo-500 h-full transition-all duration-500" style="width: ${posAway}%"></div>
              </div>
            </div>

            <!-- Tiros a Puerta -->
            <div>
              <div class="flex justify-between items-center text-xs font-bold mb-1">
                <span class="text-sky-400 font-mono">${onTargetHome}</span>
                <span class="text-[9.5px] text-slate-300 font-extrabold uppercase tracking-wide">Tiros a Puerta</span>
                <span class="text-indigo-400 font-mono">${onTargetAway}</span>
              </div>
              <div class="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden flex">
                <div class="bg-sky-500 h-full transition-all duration-500" style="width: ${onTargetHomePct}%"></div>
                <div class="bg-indigo-500 h-full transition-all duration-500" style="width: ${onTargetAwayPct}%"></div>
              </div>
            </div>

            <!-- Tiros Totales -->
            <div>
              <div class="flex justify-between items-center text-xs font-bold mb-1">
                <span class="text-sky-400 font-mono">${shotsHome}</span>
                <span class="text-[9.5px] text-slate-300 font-extrabold uppercase tracking-wide">Tiros Totales</span>
                <span class="text-indigo-400 font-mono">${shotsAway}</span>
              </div>
              <div class="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden flex">
                <div class="bg-sky-500 h-full transition-all duration-500" style="width: ${shotsHomePct}%"></div>
                <div class="bg-indigo-500 h-full transition-all duration-500" style="width: ${shotsAwayPct}%"></div>
              </div>
            </div>
          </div>
        `;
      }

      const fRatingsSummary = container.querySelector("#final-ratings-summary");
      if (fRatingsSummary) {
        const userSimPlayers = (isUserHome ? result.homePlayers : result.awayPlayers) || [];
        const playedUser = userSimPlayers
          .filter(p => p.playedInMatch || (p.matchMinutes || 0) > 0)
          .sort((a, b) => (b.matchRating || 6.5) - (a.matchRating || 6.5));
        const top3 = playedUser.slice(0, 3);
        if (top3.length > 0) {
          fRatingsSummary.innerHTML = `
            <div class="text-[9.5px] uppercase font-bold text-slate-400 mb-1">⭐ Mejores Notas de tu Equipo:</div>
            <div class="grid grid-cols-3 gap-1.5">
              ${top3.map(p => {
                const r = (p.matchRating || 6.5).toFixed(1);
                const badgeColor = p.matchRating >= 7.5 ? 'text-emerald-400 border-emerald-500/40 bg-emerald-950/40' : p.matchRating >= 6.5 ? 'text-amber-300 border-amber-500/30 bg-slate-950/80' : 'text-rose-400 border-rose-500/30 bg-rose-950/40';
                return `
                  <div class="p-1.5 rounded-xl border ${badgeColor} flex items-center justify-between text-[10px]">
                    <span class="font-bold text-white truncate mr-1">${p.name.split(' ').slice(-1)[0]}</span>
                    <span class="font-mono font-black">${r}</span>
                  </div>
                `;
              }).join('')}
            </div>
          `;
        }
      }

      if (fScorers) {
        let itemsHtml = "";
        if (result.scorers.length > 0) {
          itemsHtml += result.scorers.map(s => `
            <div class="flex items-center justify-between text-slate-300 py-0.5">
              <span>⚽ <b>${s.playerName}</b> ${s.assisterName ? `<span class="text-[10px] text-sky-400">(👟 ${s.assisterName})</span>` : ''} (${s.teamName})</span>
              <span class="font-mono text-slate-500 font-bold">${s.minute}'</span>
            </div>
          `).join('');
        }
        if (result.cards) {
          if (result.cards.yellows) {
            Object.values(result.cards.yellows).forEach(c => {
              const teamObj = c.team === "home" ? homeTeam : awayTeam;
              itemsHtml += `
                <div class="flex items-center justify-between text-amber-300/90 py-0.5 text-[11px]">
                  <span>🟨 <b>${c.player?.name}</b> (${teamObj?.shortName})</span>
                  <span class="font-mono text-amber-500 font-bold">${c.minute}'</span>
                </div>
              `;
            });
          }
          if (result.cards.reds) {
            Object.values(result.cards.reds).forEach(c => {
              const teamObj = c.team === "home" ? homeTeam : awayTeam;
              itemsHtml += `
                <div class="flex items-center justify-between text-rose-400 py-0.5 text-[11px]">
                  <span>🟥 <b>${c.player?.name}</b> (${teamObj?.shortName}) - ${c.reason}</span>
                  <span class="font-mono text-rose-500 font-bold">${c.minute}'</span>
                </div>
              `;
            });
          }
        }
        if (!itemsHtml) {
          itemsHtml = `<span class="text-slate-500 italic">Sin goles ni tarjetas en el encuentro</span>`;
        }
        fScorers.innerHTML = itemsHtml;
      }

      if (otherRes) {
        const otherMatches = currentRoundData.matches.filter(m => m !== userMatch);
        otherRes.innerHTML = otherMatches.map(m => `
          <div class="flex justify-between items-center py-0.5 border-b border-slate-900 last:border-0">
            <span class="truncate w-28 text-slate-300">${teamsMap[m.homeTeamId]?.shortName || m.homeTeamId}</span>
            <span class="font-mono font-bold text-white bg-slate-900 px-1.5 py-0.5 rounded">${m.homeScore} - ${m.awayScore}</span>
            <span class="truncate w-28 text-right text-slate-300">${teamsMap[m.awayTeamId]?.shortName || m.awayTeamId}</span>
          </div>
        `).join('');
      }

      if (modalEnd) modalEnd.classList.remove("hidden");

      container.querySelector("#btn-finish-match-continue").onclick = () => {
        if (threeEngine && threeEngine.dispose) {
          threeEngine.dispose();
          threeEngine = null;
        }
        // Asegurar que la formación y alineación guardadas se preserven para los siguientes partidos
        if (masterTacticsForNextMatches) {
          gameState.userTactics = JSON.parse(JSON.stringify(masterTacticsForNextMatches));
        }
        SaveManager.saveGame(gameState);
        onMatchFinished();
      };
    }

    setTimeout(() => {
      showMatchAlert({ text: `📣 ¡Pitido inicial! Comienza la Jornada ${gameState.currentRound}` });
      simulator.start();
    }, 400);
  }

  function sortTeamByTactics(teamObj, tactics) {
    if (!tactics || !tactics.lineup) return;
    const lineupSet = new Set(tactics.lineup);
    const starters = [];
    tactics.lineup.forEach(id => {
      const p = teamObj.players.find(x => x.id === id);
      if (p) starters.push(p);
    });
    const bench = teamObj.players.filter(p => !lineupSet.has(p.id));
    teamObj.players = [...starters, ...bench];
  }

  // Iniciamos siempre por la pantalla de Vestuario / Preparación de Alineación Pre-Partido
  renderPreMatch();
}
