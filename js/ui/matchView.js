// Vista del Día de Partido: Alineación Previa al Encuentro, Radar 2D y Cambios en Vivo

import { MatchSimulator } from "../engine/matchEngine.js";
import { simulateAIParties, updateStandings } from "../engine/leagueEngine.js";
import { FORMATIONS, MENTALITIES, calculateTeamAverages, calculateEffectiveRating, POSITION_ROLES, getAvailableRolesForPosition, getDefaultRoleForPosition, getRoleDetails, TACTICAL_PRESETS, TACTICAL_OPTIONS, getDefaultTacticalInstructions, detectMatchingPreset, getEffectiveSlotCoords, getPositionAdjustmentLabel } from "../engine/tactics.js";
import { SaveManager } from "../engine/saveManager.js";

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

  let preMatchTab = "USER"; // "USER" o "OPPONENT"
  let preMatchSubTab = "PITCH"; // "PITCH" o "STYLE"
  let selectedPreMatchPlayerId = null;
  let preMatchSaveFeedback = null;
  let masterTacticsForNextMatches = null;
  let showPreMatchAllRoles = false;

  function getOpponentLineup(oppTeam) {
    const formationKey = oppTeam.defaultFormation || "4-3-3";
    const formation = FORMATIONS[formationKey] || FORMATIONS["4-3-3"];
    // El rival también gestiona la energía y descarta futbolistas que estén en el parte médico o sancionados
    const getMatchFitness = p => (p.ovr || 70) * (0.6 + ((p.energy !== undefined ? p.energy : 100) / 250));
    const allPlayers = [...oppTeam.players].filter(p => !p.injury && !p.suspension).sort((a, b) => getMatchFitness(b) - getMatchFitness(a));
    const used = new Set();
    const lineup = [];

    const gk = allPlayers.find(p => p.pos === "POR") || allPlayers[0];
    if (gk) {
      lineup[0] = gk;
      used.add(gk.id);
    }

    formation.slots.forEach((slot, idx) => {
      if (idx === 0) return;
      let best = allPlayers.find(p => !used.has(p.id) && p.pos === slot.pos);
      if (!best) {
        best = allPlayers.find(p => !used.has(p.id) && p.pos !== "POR");
      }
      if (!best) {
        best = allPlayers.find(p => !used.has(p.id));
      }
      if (best) {
        lineup[idx] = best;
        used.add(best.id);
      }
    });

    const bench = allPlayers.filter(p => !used.has(p.id));
    return { formationKey, formation, lineup, bench };
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
              <button id="btn-pre-auto" class="text-xs bg-slate-800 hover:bg-slate-700 text-sky-400 px-2 py-1 rounded-lg border border-slate-700 font-bold active:scale-95 transition">
                ⚡ Auto 11
              </button>
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
              <div class="text-[10px] text-slate-400">${isUserHome ? 'Local' : 'Visitante'} · Media <b class="text-amber-400">${averages.overall}</b></div>
            </div>
          </div>
          <span class="font-mono font-bold text-slate-500 bg-slate-950 px-2 py-0.5 rounded-full border border-slate-800">VS</span>
          <div id="btn-matchup-rival" class="flex items-center gap-2 text-right cursor-pointer p-1 rounded-xl transition ${preMatchTab === 'OPPONENT' ? 'ring-2 ring-amber-500/80 bg-amber-500/10' : 'hover:bg-slate-800/50'}">
            <div>
              <div class="font-black text-white text-xs">${opponentTeam.name}</div>
              <div class="text-[10px] text-slate-400">Rival · Media <b class="text-amber-400">${oppAverages.overall}</b></div>
            </div>
            <div class="w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs shadow" style="background: linear-gradient(135deg, ${opponentTeam.primaryColor}, ${opponentTeam.secondaryColor}); color: ${opponentTeam.textColor};">
              ${opponentTeam.shortName}
            </div>
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
            <div class="relative w-full aspect-[3/4] max-w-[340px] mx-auto bg-gradient-to-b from-emerald-800 via-emerald-700 to-emerald-900 rounded-2xl border-2 border-emerald-500/40 shadow-inner overflow-hidden p-2">
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
                  <div class="slot-pre-player absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer flex flex-col items-center transition-transform active:scale-95 z-10"
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
                    <button id="btn-pre-close-role-box" class="text-slate-400 hover:text-white text-xs px-2 py-0.5 rounded bg-slate-800">✕</button>
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

    container.querySelectorAll(".slot-pre-player, .bench-pre-card").forEach(el => {
      el.onclick = () => {
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

    const btnSaveTactics = container.querySelector("#btn-pre-save-tactics");
    if (btnSaveTactics) {
      btnSaveTactics.onclick = () => {
        masterTacticsForNextMatches = JSON.parse(JSON.stringify(gameState.userTactics));
        SaveManager.saveGame(gameState);
        preMatchSaveFeedback = `¡Plantilla (${tactics.formation}), alineación y funciones guardadas para futuros partidos!`;
        renderPreMatch();
      };
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
      tactics.lineup[inLineup1] = tappedId;
      tactics.bench[inBench2] = selectedPreMatchPlayerId;
    } else if (inBench1 !== -1 && inLineup2 !== -1) {
      const benchP = userTeam.players.find(p => p.id === selectedPreMatchPlayerId);
      if (benchP && benchP.injury) {
        alert(`⚠️ ${benchP.name} está lesionado (${benchP.injury.type}) y no puede entrar como titular.`);
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

    const simulator = new MatchSimulator(homeTeam, awayTeam, {
      speed: 1, // Ritmo fluido Football Manager por defecto
      userSide: isUserHome ? "home" : "away",
      homeFormation: isUserHome ? gameState.userTactics.formation : oppLineupData.formationKey,
      awayFormation: !isUserHome ? gameState.userTactics.formation : oppLineupData.formationKey,
      homeMentality: isUserHome ? gameState.userTactics.mentality : "balanced",
      awayMentality: !isUserHome ? gameState.userTactics.mentality : "balanced",
      homePlayerRoles: isUserHome ? (gameState.userTactics.playerRoles || {}) : {},
      awayPlayerRoles: !isUserHome ? (gameState.userTactics.playerRoles || {}) : {},
      homeCustomPositions: isUserHome ? (gameState.userTactics.customPositions || {}) : {},
      awayCustomPositions: !isUserHome ? (gameState.userTactics.customPositions || {}) : {},
      homeInstructions: isUserHome ? gameState.userTactics.instructions : oppInstructions,
      awayInstructions: !isUserHome ? gameState.userTactics.instructions : oppInstructions,
      onTick: updateMatchUI,
      onAlert: showMatchAlert,
      onGoal: (goalData) => handleGoalSequence(goalData),
      onHalfTime: (htState) => handleHalfTimeSequence(htState),
      onSubstitution: (subData) => handleSubstitutionChyron(subData),
      onHighlightStart: (hlData) => handleHighlightStart(hlData),
      onHighlightPhase: (phaseData) => handleHighlightPhase(phaseData),
      onHighlightEnd: (endData) => handleHighlightEnd(endData),
      onSetPiece: (spInfo) => openSetPieceModal(spInfo),
      onInjury: (injData) => handleInjurySequence(injData),
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
            <span>🏆 JORNADA ${gameState.currentRound} / 38</span>
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
              <div class="w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm shadow border border-slate-700/60" style="background: linear-gradient(135deg, ${awayTeam.primaryColor}, ${awayTeam.secondaryColor}); color: ${awayTeam.textColor};">
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

          <div class="relative w-full aspect-[16/10] sm:aspect-[16/9] min-h-[300px] sm:min-h-[390px] bg-slate-950 rounded-2xl border-2 border-slate-800 shadow-2xl overflow-hidden">
            <!-- Canvas 3D -->
            <canvas id="match-canvas" class="w-full h-full block cursor-pointer" title="Toca para cambiar de cámara"></canvas>

            <!-- Selector de Cámaras FM26 (TV Isométrica / Acción / Táctica / Gol) -->
            <div class="absolute top-2 right-2 flex items-center bg-slate-950/85 backdrop-blur-md p-0.5 rounded-lg border border-slate-700/80 z-20 text-[9px] font-bold shadow-lg">
              <button id="cam-btn-broadcast" class="btn-cam px-2 py-0.5 rounded-md bg-emerald-500 text-white shadow transition" data-cam="broadcast">📺 TV</button>
              <button id="cam-btn-action" class="btn-cam px-2 py-0.5 rounded-md text-slate-400 hover:text-white transition" data-cam="action">🎥 Acción</button>
              <button id="cam-btn-tactical" class="btn-cam px-2 py-0.5 rounded-md text-slate-400 hover:text-white transition" data-cam="tactical">🦅 Táctica</button>
              <button id="cam-btn-goal" class="btn-cam px-2 py-0.5 rounded-md text-slate-400 hover:text-white transition" data-cam="goal">🥅 Gol</button>
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
                <span id="hl-hud-title" class="text-[9.5px] font-black uppercase text-amber-400 tracking-wider font-mono">🎥 ENFOQUE DE ACCIÓN · JUGADA CLAVE</span>
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
                  Repetición en directo...
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
                <span class="w-2.5 h-2.5 rounded-full inline-block" style="background-color: ${awayTeam.primaryColor};"></span>
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
                <div id="bar-poss-a" class="h-full transition-all duration-300" style="width: 50%; background-color: ${awayTeam.primaryColor};"></div>
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
              <div class="w-11 h-11 rounded-xl flex items-center justify-center font-black text-sm shadow border border-slate-700" style="background: linear-gradient(135deg, ${awayTeam.primaryColor}, ${awayTeam.secondaryColor}); color: ${awayTeam.textColor};">
                ${awayTeam.shortName}
              </div>
            </div>

            <!-- Resumen Estadístico del 1er Tiempo -->
            <div class="bg-slate-950/70 rounded-2xl p-3 border border-slate-800 text-xs my-3 space-y-2">
              <div>
                <div class="flex justify-between text-[10px] font-bold text-slate-400 mb-1">
                  <span><span id="ht-stat-poss-h">50</span>% Posesión</span>
                  <span><span id="ht-stat-poss-a">50</span>%</span>
                </div>
                <div class="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden flex">
                  <div id="ht-bar-poss-h" class="h-full" style="width: 50%; background-color: ${homeTeam.primaryColor};"></div>
                  <div id="ht-bar-poss-a" class="h-full" style="width: 50%; background-color: ${awayTeam.primaryColor};"></div>
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
            </div>

            <div class="space-y-2 mt-4">
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
                <div class="relative w-full aspect-[3/4] max-w-[340px] mx-auto bg-gradient-to-b from-emerald-800 via-emerald-700 to-emerald-900 rounded-2xl border-2 border-emerald-500/40 shadow-inner overflow-hidden p-2">
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
        <div id="modal-match-end" class="fixed inset-0 bg-black/90 backdrop-blur-md z-50 hidden flex flex-col justify-center p-4">
          <div class="bg-slate-900 border border-slate-700 rounded-3xl p-5 max-w-sm mx-auto w-full shadow-2xl text-center">
            <span class="text-xs uppercase font-extrabold tracking-widest text-slate-400">FINAL DEL PARTIDO</span>
            <div class="my-3 flex items-center justify-center gap-4">
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
            <div class="my-3 py-2 border-y border-slate-800 text-left text-xs max-h-28 overflow-y-auto" id="final-scorers-list"></div>
            <div class="my-3 text-left">
              <div class="text-[10px] uppercase font-bold text-slate-400 mb-1">Otros partidos de la Jornada ${gameState.currentRound}:</div>
              <div class="space-y-1 text-[11px] max-h-32 overflow-y-auto bg-slate-950/60 p-2 rounded-xl border border-slate-800" id="other-results-list"></div>
            </div>
            <button id="btn-finish-match-continue" class="w-full py-3.5 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 text-white font-extrabold text-sm rounded-xl shadow-lg active:scale-98 transition">
              CONTINUAR AL HUB ➔
            </button>
          </div>
        </div>
      </div>
    `;

    // Canvas Setup
    const canvas = container.querySelector("#match-canvas");
    const ctx = canvas ? canvas.getContext("2d") : null;

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
    resizeCanvas();

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
      const hPrimary = homeTeam.primaryColor || "#ffffff";
      const hSecondary = homeTeam.secondaryColor || "#1e293b";
      let aPrimary = awayTeam.primaryColor || "#000000";
      let aSecondary = awayTeam.secondaryColor || "#ffffff";

      if (hPrimary.toLowerCase() === aPrimary.toLowerCase()) {
        aPrimary = awayTeam.secondaryColor || "#f59e0b";
      }

      return {
        home: {
          jersey: hPrimary,
          shorts: hSecondary,
          socks: hPrimary,
          collar: hSecondary,
          keeper: "#10b981", // Verde neón
          number: homeTeam.textColor || "#ffffff"
        },
        away: {
          jersey: aPrimary,
          shorts: aSecondary,
          socks: aPrimary,
          collar: aSecondary,
          keeper: "#f59e0b", // Ámbar neón
          number: awayTeam.textColor || "#ffffff"
        }
      };
    }

    const kits = getKitColors();

    // Proyección de coordenadas 3D a pantalla con perspectiva isométrica de retransmisión televisiva Football Manager (Exacta al pantallazo)
    function toScreen3D(pitchX, pitchY, pitchZ = 0, w, h) {
      let groundX, groundY, scale;
      const baseResScale = Math.min(w / 460, h / 290);

      if (cameraMode === "tactical") {
        // Vista Táctica Elevada (Cámara panorámica para observar colocación táctica del bloque)
        const camOffset = (cameraPitchX - 50) * 0.16;
        const relX = pitchX - camOffset;
        const nx = relX / 100;
        const ny = Math.max(-8, Math.min(108, pitchY)) / 100;

        const topY = h * 0.14;
        const botY = h * 0.94;
        groundY = topY + ny * (botY - topY);

        const topXMin = w * 0.08;
        const topXMax = w * 0.92;
        const botXMin = w * 0.02;
        const botXMax = w * 0.98;

        const leftX = topXMin + ny * (botXMin - topXMin);
        const rightX = topXMax + ny * (botXMax - topXMax);
        groundX = leftX + nx * (rightX - leftX);

        scale = (0.68 + ny * 0.44) * baseResScale;
      } else if (cameraMode === "goal") {
        // Vista Tras Portería (Cámara cinemática de gol detrás de la red)
        const camOffset = (cameraPitchX - 50) * 0.46;
        const relX = pitchX - camOffset;
        const nx = relX / 100;
        const ny = Math.max(-12, Math.min(112, pitchY)) / 100;

        const topY = h * 0.18;
        const botY = h * 0.88;
        groundY = topY + ny * (botY - topY);

        const topXMin = w * 0.14;
        const topXMax = w * 0.86;
        const botXMin = w * 0.01;
        const botXMax = w * 0.99;

        const leftX = topXMin + ny * (botXMin - topXMin);
        const rightX = topXMax + ny * (botXMax - topXMax);
        groundX = leftX + nx * (rightX - leftX);

        scale = (0.75 + ny * 0.58) * baseResScale;
      } else if (cameraMode === "action") {
        // Vista de Acción FM (Primer plano cinemático con inclinación diagonal e inmersión)
        const zoom = Math.max(1.20, Math.min(1.65, cameraZoom));
        const tiltAngle = ((cameraPitchX - 50) / 50) * 0.20; // Giro diagonal
        const cosT = Math.cos(tiltAngle);
        const sinT = Math.sin(tiltAngle);

        const dx = (pitchX - cameraPitchX);
        const dy = (pitchY - 50);

        const rx = dx * cosT - dy * sinT;
        const ry = dx * sinT + dy * cosT;

        const normY = Math.max(-0.2, Math.min(1.2, (ry + 50) / 100));
        const depthFactor = 0.74 + normY * 0.52;

        const midX = w * 0.50;
        const midY = h * 0.53;
        const spanX = w * 0.96 * zoom;
        const spanY = h * 0.74 * zoom;

        groundX = midX + (rx / 50) * (spanX * 0.5) * depthFactor;
        groundY = midY + (ry / 50) * (spanY * 0.5);

        scale = depthFactor * baseResScale * zoom;
      } else {
        // "broadcast" - Vista lateral clásica de retransmisión televisiva (como estaba)
        const zoom = Math.max(0.95, Math.min(1.25, cameraZoom));
        const camOffsetX = (cameraPitchX - 50) * 0.38;
        const camOffsetY = (cameraPitchY - 50) * 0.18;

        const relX = pitchX - camOffsetX;
        const relY = pitchY - camOffsetY;

        const nx = relX / 100;
        const ny = Math.max(-10, Math.min(110, relY)) / 100;

        const baseTopY = h * 0.20;
        const baseBotY = h * 0.88;
        const midY = (baseTopY + baseBotY) / 2;
        const topY = midY - (midY - baseTopY) * zoom;
        const botY = midY + (baseBotY - midY) * zoom;

        groundY = topY + ny * (botY - topY);

        const midX = w / 2;
        const baseTopSpan = w * 0.78 * zoom;
        const baseBotSpan = w * 0.94 * zoom;

        const leftX = (midX - baseTopSpan / 2) + ny * ((midX - baseBotSpan / 2) - (midX - baseTopSpan / 2));
        const rightX = (midX + baseTopSpan / 2) + ny * ((midX + baseBotSpan / 2) - (midX + baseTopSpan / 2));
        groundX = leftX + nx * (rightX - leftX);

        scale = (0.74 + ny * 0.54) * baseResScale * zoom;
      }

      // Elevación vertical 3D (eje Z para balones aéreos y saltos de cabeza)
      const screenX = groundX;
      const screenY = groundY - (pitchZ * scale * 2.3);

      return { groundX, groundY, screenX, screenY, scale };
    }

    // Sistema de 4 sombras suaves de proyectores en esquinas del estadio (Sello característico Football Manager)
    function drawStadiumShadows(ctx, groundX, groundY, scale, heightZ = 0, radius = 6.0) {
      const zOffset = Math.min(heightZ, 25);
      const expand = 1 + zOffset * 0.08;
      const fade = Math.max(0.04, 0.22 - zOffset * 0.007);

      const rX = radius * scale * expand;
      const rY = (radius * 0.44) * scale * expand;

      // Desplazamientos proyectados por los 4 focos del estadio
      const dist = (6.5 + zOffset * 0.65) * scale;
      const shadows = [
        { dx: dist * 0.85, dy: dist * 0.42 },   // Foco Noroeste (hacia Sureste)
        { dx: -dist * 0.85, dy: dist * 0.42 },  // Foco Noreste (hacia Suroeste)
        { dx: dist * 0.65, dy: -dist * 0.32 },  // Foco Suroeste (hacia Noreste)
        { dx: -dist * 0.65, dy: -dist * 0.32 }  // Foco Sureste (hacia Noroeste)
      ];

      ctx.fillStyle = `rgba(0, 0, 0, ${fade})`;
      shadows.forEach(s => {
        ctx.beginPath();
        ctx.ellipse(groundX + s.dx, groundY + s.dy, rX, rY, 0, 0, Math.PI * 2);
        ctx.fill();
      });

      // Sombra central densa de oclusión ambiental bajo los pies/balón
      const aoFade = Math.max(0.05, 0.55 - zOffset * 0.025);
      ctx.fillStyle = `rgba(0, 0, 0, ${aoFade})`;
      ctx.beginPath();
      ctx.ellipse(groundX, groundY, (radius * 0.8) * scale, (radius * 0.35) * scale, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    function draw3DBox(ctx, x1, y1, x2, y2, w, h) {
      const p1 = toScreen3D(x1, y1, 0, w, h);
      const p2 = toScreen3D(x2, y1, 0, w, h);
      const p3 = toScreen3D(x2, y2, 0, w, h);
      const p4 = toScreen3D(x1, y2, 0, w, h);

      ctx.beginPath();
      ctx.moveTo(p1.groundX, p1.groundY);
      ctx.lineTo(p2.groundX, p2.groundY);
      ctx.lineTo(p3.groundX, p3.groundY);
      ctx.lineTo(p4.groundX, p4.groundY);
      ctx.closePath();
      ctx.stroke();
    }

    // Portería 3D realista con postes cilíndricos, larguero, tensión de red física y deformación por gol
    function draw3DGoal(ctx, x, y1, y2, dir, w, h) {
      const gPost1 = toScreen3D(x, y1, 0, w, h);
      const gPost2 = toScreen3D(x, y2, 0, w, h);
      const gTop1 = toScreen3D(x, y1, 10.5, w, h);
      const gTop2 = toScreen3D(x, y2, 10.5, w, h);

      const ripple = dir === -1 ? netRippleH : netRippleA;
      const rippleBack = ripple * 2.8;

      const netBackX = x - dir * (4.2 + rippleBack);
      const tNet1 = toScreen3D(netBackX, y1, 8.5, w, h);
      const tNet2 = toScreen3D(netBackX, y2, 8.5, w, h);
      const bNet1 = toScreen3D(netBackX, y1, 0, w, h);
      const bNet2 = toScreen3D(netBackX, y2, 0, w, h);

      // Sombra de los postes en el suelo
      ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
      ctx.beginPath();
      ctx.ellipse(gPost1.groundX, gPost1.groundY, 4, 2, 0, 0, Math.PI * 2);
      ctx.ellipse(gPost2.groundX, gPost2.groundY, 4, 2, 0, 0, Math.PI * 2);
      ctx.fill();

      // Red superior y trasera con volumen y transparencia translúcida
      ctx.fillStyle = "rgba(240, 249, 255, 0.22)";
      ctx.beginPath();
      ctx.moveTo(gTop1.screenX, gTop1.screenY);
      ctx.lineTo(gTop2.screenX, gTop2.screenY);
      ctx.lineTo(tNet2.screenX, tNet2.screenY);
      ctx.lineTo(tNet1.screenX, tNet1.screenY);
      ctx.closePath();
      ctx.fill();

      // Red de fondo con efecto de bombeo por impacto de gol
      ctx.fillStyle = "rgba(240, 249, 255, 0.16)";
      ctx.beginPath();
      ctx.moveTo(tNet1.screenX, tNet1.screenY);
      ctx.lineTo(tNet2.screenX, tNet2.screenY);
      ctx.lineTo(bNet2.groundX, bNet2.groundY);
      ctx.lineTo(bNet1.groundX, bNet1.groundY);
      ctx.closePath();
      ctx.fill();

      // Trama hexagonal/diagonal de la red
      ctx.strokeStyle = "rgba(255, 255, 255, 0.28)";
      ctx.lineWidth = 0.9;
      ctx.beginPath();
      for (let s = 0.2; s <= 0.8; s += 0.2) {
        const mxTop = gTop1.screenX + (gTop2.screenX - gTop1.screenX) * s;
        const myTop = gTop1.screenY + (gTop2.screenY - gTop1.screenY) * s;
        const mxBot = bNet1.groundX + (bNet2.groundX - bNet1.groundX) * s;
        const myBot = bNet1.groundY + (bNet2.groundY - bNet1.groundY) * s;
        ctx.moveTo(mxTop, myTop);
        ctx.lineTo(mxBot, myBot);
      }
      ctx.stroke();

      // Postes y larguero 3D blancos con acabado brillante y reborde metálico
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 3.2;
      ctx.lineCap = "round";

      ctx.beginPath();
      ctx.moveTo(gPost1.groundX, gPost1.groundY);
      ctx.lineTo(gTop1.screenX, gTop1.screenY);
      ctx.lineTo(gTop2.screenX, gTop2.screenY);
      ctx.lineTo(gPost2.groundX, gPost2.groundY);
      ctx.stroke();

      // Tirantes traseros de sujeción
      ctx.strokeStyle = "rgba(226, 232, 240, 0.7)";
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.moveTo(gTop1.screenX, gTop1.screenY);
      ctx.lineTo(tNet1.screenX, tNet1.screenY);
      ctx.lineTo(bNet1.groundX, bNet1.groundY);
      ctx.moveTo(gTop2.screenX, gTop2.screenY);
      ctx.lineTo(tNet2.screenX, tNet2.screenY);
      ctx.lineTo(bNet2.groundX, bNet2.groundY);
      ctx.stroke();
    }

    // Dibujo del Estadio 3D estilo FM26: Gradas multitudinarias, focos volumétricos, vallas LED y césped segado
    function draw3DPitch(ctx, w, h) {
      const nowMs = performance.now();

      // 1. Cielo nocturno y atmósfera de estadio con gradiente cinemático
      const skyGrad = ctx.createLinearGradient(0, 0, 0, h * 0.28);
      skyGrad.addColorStop(0, "#020617");
      skyGrad.addColorStop(0.65, "#0b1536");
      skyGrad.addColorStop(1, "#1e293b");
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, w, h);

      // Cerchas y vigas metálicas del techo del estadio (Estructura arquitectónica)
      ctx.strokeStyle = "rgba(30, 41, 59, 0.7)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      for (let tx = 0; tx <= w; tx += w * 0.12) {
        ctx.moveTo(tx, 0);
        ctx.lineTo(tx + w * 0.06, h * 0.08);
        ctx.lineTo(tx + w * 0.12, 0);
      }
      ctx.stroke();

      // 2. Grada del Estadio con Miles de Aficionados (Crowd Backdrop animado)
      const standTopY = h * 0.03;
      const standBotY = h * 0.19;
      const numRows = 8;
      for (let r = 0; r < numRows; r++) {
        const rowY = standTopY + (r / numRows) * (standBotY - standTopY);
        const rowH = (standBotY - standTopY) / numRows;

        // Base de gradas de hormigón
        ctx.fillStyle = r % 2 === 0 ? "#0f172a" : "#1e293b";
        ctx.fillRect(0, rowY, w, rowH);

        // Mosaico de hinchas con colores de equipaciones locales y visitantes
        const dots = Math.floor(w / 6.5);
        for (let d = 0; d < dots; d++) {
          const dx = d * 6.5 + (r % 2 === 0 ? 3 : 0);
          const colorSeed = (d * 19 + r * 37) % 11;
          let fanColor = "#334155";
          if (colorSeed < 3) fanColor = homeTeam.primaryColor || "#38bdf8";
          else if (colorSeed < 5) fanColor = awayTeam.primaryColor || "#f59e0b";
          else if (colorSeed < 7) fanColor = "#f8fafc";
          else if (colorSeed < 9) fanColor = "#64748b";

          // Sutil animación de hinchas ondeando banderas o celebrando
          const bob = Math.sin(nowMs * 0.003 + d * 0.5 + r) * 0.8;
          ctx.fillStyle = fanColor;
          ctx.beginPath();
          ctx.arc(dx, rowY + rowH * 0.55 + bob, 1.4, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Flashes de cámaras fotográficas de los hinchas durante remates a portería
      if (currentHighlightData && currentHighlightData.phase === "SHOT") {
        for (let f = 0; f < 8; f++) {
          if (Math.random() < 0.45) {
            const fx = Math.random() * w;
            const fy = standTopY + Math.random() * (standBotY - standTopY);
            const fr = 2.0 + Math.random() * 3.2;
            ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
            ctx.beginPath();
            ctx.arc(fx, fy, fr, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // 3. Focos de Estadio Profesionales (4 Torres de Iluminación Volumétrica)
      const floodlights = [
        { x: w * 0.06, y: h * 0.035, angle: 0.3 },
        { x: w * 0.94, y: h * 0.035, angle: -0.3 }
      ];

      floodlights.forEach(fl => {
        // Haz volumétrico cónico suave hacia el centro del campo
        const beam = ctx.createRadialGradient(fl.x, fl.y, 6, fl.x + fl.angle * w * 0.3, h * 0.6, w * 0.5);
        beam.addColorStop(0, "rgba(255, 255, 255, 0.45)");
        beam.addColorStop(0.25, "rgba(224, 242, 254, 0.18)");
        beam.addColorStop(1, "rgba(224, 242, 254, 0)");
        ctx.fillStyle = beam;
        ctx.beginPath();
        ctx.moveTo(fl.x - 14, fl.y);
        ctx.lineTo(fl.x - w * 0.38, h * 0.9);
        ctx.lineTo(fl.x + w * 0.38, h * 0.9);
        ctx.lineTo(fl.x + 14, fl.y);
        ctx.closePath();
        ctx.fill();

        // Estructura y lámparas LED de la torre
        ctx.fillStyle = "#ffffff";
        for (let bx = -8; bx <= 8; bx += 4) {
          for (let by = -4; by <= 4; by += 4) {
            ctx.beginPath();
            ctx.arc(fl.x + bx, fl.y + by, 1.4, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      });

      // 4. Vallas publicitarias LED dinámicas en la banda superior (Estilo FM26 con marquesina animada)
      const adL = toScreen3D(0, -2.2, 0, w, h);
      const adR = toScreen3D(100, -2.2, 0, w, h);
      const adPitchL = toScreen3D(0, 0, 0, w, h);
      const adPitchR = toScreen3D(100, 0, 0, w, h);

      ctx.beginPath();
      ctx.moveTo(adL.groundX, adL.groundY - 11);
      ctx.lineTo(adR.groundX, adR.groundY - 11);
      ctx.lineTo(adPitchR.groundX, adPitchR.groundY);
      ctx.lineTo(adPitchL.groundX, adPitchL.groundY);
      ctx.closePath();
      ctx.fillStyle = "#050914";
      ctx.fill();

      // Borde LED luminoso superior
      ctx.strokeStyle = "rgba(56, 189, 248, 0.9)";
      ctx.lineWidth = 1.8;
      ctx.stroke();

      // Marquesina LED animada con marcas oficiales
      const ledCycle = (nowMs * 0.05) % (w * 1.6);
      const adMid = toScreen3D(50, -1, 0, w, h);
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, adL.groundY - 12, w, 14);
      ctx.clip();

      ctx.fillStyle = "#38bdf8";
      ctx.font = `900 ${Math.max(8, Math.round(w * 0.023))}px monospace`;
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      const bannerText = "⚽ FOOTBALL MANAGER 26 · LALIGA EA SPORTS · ENTRENATE-TE-TE · EA SPORTS FC · ADIDAS · NIKE · FLY EMIRATES ⚽   ";
      const repX = (adMid.groundX - w * 0.8) + ledCycle;
      ctx.fillText(bannerText, repX - w * 1.5, adL.groundY - 4);
      ctx.fillText(bannerText, repX, adL.groundY - 4);
      ctx.fillText(bannerText, repX + w * 1.5, adL.groundY - 4);
      ctx.restore();

      // 5. Perímetro exterior de césped de desahogo / moqueta técnica
      const pTL = toScreen3D(-6, -4, 0, w, h);
      const pTR = toScreen3D(106, -4, 0, w, h);
      const pBR = toScreen3D(106, 105, 0, w, h);
      const pBL = toScreen3D(-6, 105, 0, w, h);

      ctx.beginPath();
      ctx.moveTo(pTL.groundX, pTL.groundY);
      ctx.lineTo(pTR.groundX, pTR.groundY);
      ctx.lineTo(pBR.groundX, pBR.groundY);
      ctx.lineTo(pBL.groundX, pBL.groundY);
      ctx.closePath();
      ctx.fillStyle = "#114a27";
      ctx.fill();

      // Banquillos en la banda con siluetas de técnicos y suplentes
      const benchL = toScreen3D(35, 103, 0, w, h);
      const benchR = toScreen3D(65, 103, 0, w, h);
      ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
      ctx.fillRect(benchL.groundX, benchL.groundY - 6, (benchR.groundX - benchL.groundX), 9);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
      ctx.strokeRect(benchL.groundX, benchL.groundY - 6, (benchR.groundX - benchL.groundX), 9);

      // 6. Franjas segadas de césped cortado profesional FM (Alternancia verde esmeralda y textura idéntica a la foto)
      const numStripes = 18;
      for (let i = 0; i < numStripes; i++) {
        const x1 = (i / numStripes) * 100;
        const x2 = ((i + 1) / numStripes) * 100;
        const sTL = toScreen3D(x1, 0, 0, w, h);
        const sTR = toScreen3D(x2, 0, 0, w, h);
        const sBR = toScreen3D(x2, 100, 0, w, h);
        const sBL = toScreen3D(x1, 100, 0, w, h);

        ctx.beginPath();
        ctx.moveTo(sTL.groundX, sTL.groundY);
        ctx.lineTo(sTR.groundX, sTR.groundY);
        ctx.lineTo(sBR.groundX, sBR.groundY);
        ctx.lineTo(sBL.groundX, sBL.groundY);
        ctx.closePath();

        // Tonalidad de césped rica y realista de alta fidelidad FM
        ctx.fillStyle = i % 2 === 0 ? "#216d2f" : "#2a7f39";
        ctx.fill();
      }

      // Textura de corte perpendicular fino del césped
      ctx.strokeStyle = "rgba(255, 255, 255, 0.035)";
      ctx.lineWidth = 1.0;
      for (let ly = 10; ly < 100; ly += 12) {
        const pL = toScreen3D(0, ly, 0, w, h);
        const pR = toScreen3D(100, ly, 0, w, h);
        ctx.beginPath();
        ctx.moveTo(pL.groundX, pL.groundY);
        ctx.lineTo(pR.groundX, pR.groundY);
        ctx.stroke();
      }

      // Sombra proyectada por la visera / cubierta de la grada del estadio (Exacta al pantallazo de Football Manager)
      ctx.save();
      const sh1 = toScreen3D(-4, -2, 0, w, h);
      const sh2 = toScreen3D(42, -2, 0, w, h);
      const sh3 = toScreen3D(18, 102, 0, w, h);
      const sh4 = toScreen3D(-4, 102, 0, w, h);
      ctx.beginPath();
      ctx.moveTo(sh1.groundX, sh1.groundY);
      ctx.lineTo(sh2.groundX, sh2.groundY);
      ctx.lineTo(sh3.groundX, sh3.groundY);
      ctx.lineTo(sh4.groundX, sh4.groundY);
      ctx.closePath();
      ctx.fillStyle = "rgba(0, 22, 6, 0.28)";
      ctx.fill();
      ctx.restore();

      // Brillo e iluminación cenital en el centro del terreno
      const pitchCenter = toScreen3D(50, 50, 0, w, h);
      const pitchSheen = ctx.createRadialGradient(
        pitchCenter.groundX, pitchCenter.groundY, 8,
        pitchCenter.groundX, pitchCenter.groundY, w * 0.48
      );
      pitchSheen.addColorStop(0, "rgba(255, 255, 255, 0.08)");
      pitchSheen.addColorStop(0.6, "rgba(255, 255, 255, 0.02)");
      pitchSheen.addColorStop(1, "rgba(0, 0, 0, 0.10)");
      ctx.fillStyle = pitchSheen;
      ctx.beginPath();
      const pC1 = toScreen3D(0, 0, 0, w, h);
      const pC2 = toScreen3D(100, 0, 0, w, h);
      const pC3 = toScreen3D(100, 100, 0, w, h);
      const pC4 = toScreen3D(0, 100, 0, w, h);
      ctx.moveTo(pC1.groundX, pC1.groundY);
      ctx.lineTo(pC2.groundX, pC2.groundY);
      ctx.lineTo(pC3.groundX, pC3.groundY);
      ctx.lineTo(pC4.groundX, pC4.groundY);
      ctx.closePath();
      ctx.fill();

      // 7. Líneas blancas del terreno de juego nítidas con antialiasing
      ctx.strokeStyle = "rgba(255, 255, 255, 0.92)";
      ctx.lineWidth = 2.1;

      // Líneas de banda y fondo
      ctx.beginPath();
      ctx.moveTo(pC1.groundX, pC1.groundY);
      ctx.lineTo(pC2.groundX, pC2.groundY);
      ctx.lineTo(pC3.groundX, pC3.groundY);
      ctx.lineTo(pC4.groundX, pC4.groundY);
      ctx.closePath();
      ctx.stroke();

      // Línea de medio campo
      const midT = toScreen3D(50, 0, 0, w, h);
      const midB = toScreen3D(50, 100, 0, w, h);
      ctx.beginPath();
      ctx.moveTo(midT.groundX, midT.groundY);
      ctx.lineTo(midB.groundX, midB.groundY);
      ctx.stroke();

      // Círculo central 3D elíptico (radio oficial)
      ctx.beginPath();
      for (let a = 0; a <= Math.PI * 2 + 0.1; a += 0.12) {
        const cx = 50 + Math.cos(a) * 8.8;
        const cy = 50 + Math.sin(a) * 13.5;
        const pt = toScreen3D(cx, cy, 0, w, h);
        if (a === 0) ctx.moveTo(pt.groundX, pt.groundY);
        else ctx.lineTo(pt.groundX, pt.groundY);
      }
      ctx.stroke();

      // Punto central
      const centerDot = toScreen3D(50, 50, 0, w, h);
      ctx.beginPath();
      ctx.arc(centerDot.groundX, centerDot.groundY, 3.0, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.fill();

      // Áreas de Penalti y de Meta (Locales)
      draw3DBox(ctx, 0, 20.5, 15.8, 79.5, w, h); // Área grande
      draw3DBox(ctx, 0, 36.5, 5.3, 63.5, w, h);  // Área pequeña

      // Punto de penalti local (11m)
      const penDotH = toScreen3D(10.5, 50, 0, w, h);
      ctx.beginPath();
      ctx.arc(penDotH.groundX, penDotH.groundY, 2.4, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.fill();

      // Arco del área local (D-box)
      ctx.beginPath();
      for (let a = -0.68; a <= 0.68; a += 0.12) {
        const ax = 10.5 + Math.cos(a) * 8.8;
        const ay = 50 + Math.sin(a) * 13.5;
        const pt = toScreen3D(ax, ay, 0, w, h);
        if (a === -0.68) ctx.moveTo(pt.groundX, pt.groundY);
        else ctx.lineTo(pt.groundX, pt.groundY);
      }
      ctx.stroke();

      // Áreas de Penalti y de Meta (Visitantes)
      draw3DBox(ctx, 84.2, 20.5, 100, 79.5, w, h); // Área grande
      draw3DBox(ctx, 94.7, 36.5, 100, 63.5, w, h); // Área pequeña

      // Punto de penalti visitante (11m)
      const penDotA = toScreen3D(89.5, 50, 0, w, h);
      ctx.beginPath();
      ctx.arc(penDotA.groundX, penDotA.groundY, 2.4, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.fill();

      // Arco del área visitante (D-box)
      ctx.beginPath();
      for (let a = Math.PI - 0.68; a <= Math.PI + 0.68; a += 0.12) {
        const ax = 89.5 + Math.cos(a) * 8.8;
        const ay = 50 + Math.sin(a) * 13.5;
        const pt = toScreen3D(ax, ay, 0, w, h);
        if (a === Math.PI - 0.68) ctx.moveTo(pt.groundX, pt.groundY);
        else ctx.lineTo(pt.groundX, pt.groundY);
      }
      ctx.stroke();

      // Arcos de córner en las 4 esquinas
      const corners = [
        { x: 0, y: 0, a1: 0, a2: Math.PI / 2 },
        { x: 100, y: 0, a1: Math.PI / 2, a2: Math.PI },
        { x: 100, y: 100, a1: Math.PI, a2: (3 * Math.PI) / 2 },
        { x: 0, y: 100, a1: (3 * Math.PI) / 2, a2: Math.PI * 2 }
      ];

      corners.forEach(cn => {
        ctx.beginPath();
        for (let a = cn.a1; a <= cn.a2 + 0.05; a += 0.2) {
          const pt = toScreen3D(cn.x + Math.cos(a) * 1.5, cn.y + Math.sin(a) * 2.2, 0, w, h);
          if (a === cn.a1) ctx.moveTo(pt.groundX, pt.groundY);
          else ctx.lineTo(pt.groundX, pt.groundY);
        }
        ctx.stroke();

        // Banderín de córner 3D (Mástil flexible y tela flameando)
        const bBase = toScreen3D(cn.x, cn.y, 0, w, h);
        const bTop = toScreen3D(cn.x, cn.y, 4.6, w, h);
        ctx.strokeStyle = "#fef08a";
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(bBase.groundX, bBase.groundY);
        ctx.lineTo(bTop.screenX, bTop.screenY);
        ctx.stroke();

        // Bandera con ondulación de viento
        const flagWave = Math.sin(nowMs * 0.008 + cn.x) * 1.2;
        ctx.fillStyle = "#ef4444";
        ctx.beginPath();
        ctx.moveTo(bTop.screenX, bTop.screenY);
        ctx.lineTo(bTop.screenX + (cn.x === 0 ? 5.5 : -5.5), bTop.screenY + 2 + flagWave);
        ctx.lineTo(bTop.screenX, bTop.screenY + 4.5);
        ctx.closePath();
        ctx.fill();
      });

      // Porterías 3D oficiales con deformación física de red
      draw3DGoal(ctx, 0, 44.5, 55.5, -1, w, h);
      draw3DGoal(ctx, 100, 44.5, 55.5, 1, w, h);
    }

    // Dibujo del futbolista 3D anatómico volumétrico estilo Football Manager (Idéntico al pantallazo)
    function drawRealisticPlayer3D(ctx, item) {
      const { groundX, groundY, scale, facingX, animPhase, side, isKeeper, number, name, isCarrier, playerId } = item;
      const kit = side === "home" ? kits.home : kits.away;
      const jerseyColor = isKeeper ? kit.keeper : kit.jersey;
      const shortsColor = kit.shorts || "#ffffff";
      const socksColor = kit.socks || jerseyColor;

      const sc = scale;
      const nowMs = performance.now();

      // 1. Sombra direccional proyectada en el césped por la luz solar (Exacta al pantallazo de Football Manager)
      // La luz incide desde la esquina superior derecha, proyectando una sombra elíptica hacia abajo a la izquierda
      ctx.save();
      ctx.fillStyle = "rgba(0, 25, 8, 0.35)";
      ctx.beginPath();
      ctx.ellipse(groundX - 4.5 * sc, groundY + 2.5 * sc, 8.5 * sc, 3.8 * sc, -0.38, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // 2. Indicadores sutiles en el césped (SIN tapar a los futbolistas con rótulos gigantes)
      // Anillo dorado sutil en el suelo bajo el portador del balón (como en FM y EA FC)
      if (isCarrier) {
        const pulse = Math.sin(nowMs * 0.008) * 1.4 * sc;
        ctx.strokeStyle = "#fbbf24";
        ctx.lineWidth = 1.8 * sc;
        ctx.beginPath();
        ctx.ellipse(groundX, groundY, (7.5 * sc) + pulse, (3.2 * sc) + pulse * 0.4, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fillStyle = "rgba(251, 191, 36, 0.22)";
        ctx.fill();
      }

      // Si es protagonista de jugada clave (goleador, pasador, defensa marcador), aro táctico en el suelo
      const isShooter = currentHighlightData && currentHighlightData.shooter?.id === playerId;
      const isPasser = currentHighlightData && currentHighlightData.passer?.id === playerId;
      const isDefender = currentHighlightData && currentHighlightData.defender?.id === playerId;

      if (isShooter) {
        ctx.strokeStyle = "rgba(16, 185, 129, 0.92)";
        ctx.lineWidth = 2.0 * sc;
        ctx.beginPath();
        ctx.ellipse(groundX, groundY, 11 * sc, 4.8 * sc, 0, 0, Math.PI * 2);
        ctx.stroke();
      } else if (isPasser) {
        ctx.strokeStyle = "rgba(34, 211, 238, 0.92)";
        ctx.lineWidth = 2.0 * sc;
        ctx.beginPath();
        ctx.ellipse(groundX, groundY, 11 * sc, 4.8 * sc, 0, 0, Math.PI * 2);
        ctx.stroke();
      } else if (isDefender) {
        ctx.strokeStyle = "rgba(244, 63, 94, 0.88)";
        ctx.lineWidth = 1.8 * sc;
        ctx.beginPath();
        ctx.ellipse(groundX, groundY, 10 * sc, 4.4 * sc, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // 3. Modelo 3D Anatómico Volumétrico del Futbolista
      const skinTone = (number % 3 === 0) ? "#8d5b4c" : (number % 3 === 1) ? "#fcd34d" : "#e0ac69";
      const hairColor = (number % 2 === 0) ? "#1e293b" : "#451a03";

      const footY = groundY;
      const kneeY = groundY - 7 * sc;
      const hipY = groundY - 14 * sc;
      const waistY = groundY - 16 * sc;
      const shoulderY = groundY - 24 * sc;
      const headCenterY = groundY - 28 * sc;
      const headR = 3.6 * sc;

      // Inclinación aerodinámica de carrera según dirección
      const runLean = (isCarrier ? 1.6 : 0.8) * facingX * sc;

      // Animación de carrera articulada
      const phase = animPhase || 0;
      const legCycle = Math.sin(phase);
      const legSwingBack = -legCycle * 5.2 * sc * facingX;
      const legSwingFront = legCycle * 5.2 * sc * facingX;
      const armCycle = Math.cos(phase);
      const armSwingBack = -armCycle * 4.5 * sc * facingX;
      const armSwingFront = armCycle * 4.5 * sc * facingX;

      // --- PIERNA TRASERA ---
      // Muslo / pantalón trasero
      ctx.strokeStyle = shortsColor;
      ctx.lineWidth = 3.6 * sc;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(groundX - 1.8 * sc, hipY);
      ctx.lineTo(groundX - 1.8 * sc + legSwingBack * 0.45, kneeY);
      ctx.stroke();

      // Calceta trasera
      ctx.strokeStyle = socksColor;
      ctx.lineWidth = 2.8 * sc;
      ctx.beginPath();
      ctx.moveTo(groundX - 1.8 * sc + legSwingBack * 0.45, kneeY);
      ctx.lineTo(groundX - 1.8 * sc + legSwingBack, footY - 1.2 * sc);
      ctx.stroke();

      // Bota deportiva trasera
      ctx.fillStyle = "#0f172a";
      ctx.beginPath();
      ctx.ellipse(groundX - 1.8 * sc + legSwingBack + (facingX * 1.5 * sc), footY - 1.0 * sc, 3.2 * sc, 1.4 * sc, 0, 0, Math.PI * 2);
      ctx.fill();

      // --- BRAZO TRASERO ---
      // Manga de camiseta
      ctx.strokeStyle = jerseyColor;
      ctx.lineWidth = 2.8 * sc;
      ctx.beginPath();
      ctx.moveTo(groundX + runLean - 1.5 * sc, shoulderY + 2 * sc);
      ctx.lineTo(groundX + runLean + armSwingBack * 0.5, shoulderY + 6.5 * sc);
      ctx.stroke();

      // Antebrazo anatómico
      ctx.strokeStyle = skinTone;
      ctx.lineWidth = 2.2 * sc;
      ctx.beginPath();
      ctx.moveTo(groundX + runLean + armSwingBack * 0.5, shoulderY + 6.5 * sc);
      ctx.lineTo(groundX + runLean + armSwingBack, hipY + 1 * sc);
      ctx.stroke();

      // Mano o guante de portero trasero
      ctx.fillStyle = isKeeper ? "#ffffff" : skinTone;
      ctx.beginPath();
      ctx.arc(groundX + runLean + armSwingBack, hipY + 1 * sc, 1.6 * sc, 0, Math.PI * 2);
      ctx.fill();

      // --- PIERNA DELANTERA ---
      // Muslo / pantalón delantero
      ctx.strokeStyle = shortsColor;
      ctx.lineWidth = 3.8 * sc;
      ctx.beginPath();
      ctx.moveTo(groundX + 1.8 * sc, hipY);
      ctx.lineTo(groundX + 1.8 * sc + legSwingFront * 0.45, kneeY);
      ctx.stroke();

      // Calceta delantera con ribete
      ctx.strokeStyle = socksColor;
      ctx.lineWidth = 2.9 * sc;
      ctx.beginPath();
      ctx.moveTo(groundX + 1.8 * sc + legSwingFront * 0.45, kneeY);
      ctx.lineTo(groundX + 1.8 * sc + legSwingFront, footY - 1.2 * sc);
      ctx.stroke();

      // Bota delantera con tacos deportivos
      ctx.fillStyle = "#0f172a";
      ctx.beginPath();
      ctx.ellipse(groundX + 1.8 * sc + legSwingFront + (facingX * 1.5 * sc), footY - 1.0 * sc, 3.4 * sc, 1.5 * sc, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(groundX + 1.8 * sc + legSwingFront - 1.5 * sc, footY - 0.5 * sc, 3.0 * sc, 0.6 * sc);

      // --- PANTALÓN CORTO 3D ---
      ctx.fillStyle = shortsColor;
      ctx.beginPath();
      ctx.roundRect(groundX - 4.2 * sc, waistY, 8.4 * sc, 5.2 * sc, 1.5 * sc);
      ctx.fill();
      ctx.strokeStyle = "rgba(0, 0, 0, 0.25)";
      ctx.lineWidth = 0.8 * sc;
      ctx.stroke();

      // --- TORSO CON CAMISETA 3D VOLUMÉTRICA ---
      const chestW = 9.8 * sc;
      const chestH = 10.5 * sc;
      const torsoX = groundX + runLean;
      const torsoY = shoulderY;

      ctx.save();
      ctx.translate(torsoX, torsoY);

      // Sombreado de volumen muscular de la camiseta
      ctx.fillStyle = jerseyColor;
      ctx.beginPath();
      ctx.roundRect(-chestW / 2, 0, chestW, chestH, 2.5 * sc);
      ctx.fill();

      // Sombra volumétrica lateral
      ctx.fillStyle = "rgba(0, 0, 0, 0.16)";
      ctx.beginPath();
      ctx.roundRect(-chestW / 2, 0, chestW * 0.35, chestH, 2.5 * sc);
      ctx.fill();

      // Cuello oficial
      ctx.fillStyle = kit.collar || "#ffffff";
      ctx.beginPath();
      ctx.ellipse(0, 0.8 * sc, 2.4 * sc, 1.2 * sc, 0, 0, Math.PI * 2);
      ctx.fill();

      // Número oficial elegante en la espalda
      ctx.fillStyle = kit.number || "#ffffff";
      ctx.font = `900 ${Math.round(6.2 * sc)}px monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(`${number}`, 0, chestH * 0.52);

      ctx.restore();

      // --- BRAZO DELANTERO ---
      // Manga de camiseta
      ctx.strokeStyle = jerseyColor;
      ctx.lineWidth = 2.9 * sc;
      ctx.beginPath();
      ctx.moveTo(torsoX + 1.5 * sc, shoulderY + 2 * sc);
      ctx.lineTo(torsoX + armSwingFront * 0.5, shoulderY + 6.5 * sc);
      ctx.stroke();

      // Antebrazo de piel
      ctx.strokeStyle = skinTone;
      ctx.lineWidth = 2.2 * sc;
      ctx.beginPath();
      ctx.moveTo(torsoX + armSwingFront * 0.5, shoulderY + 6.5 * sc);
      ctx.lineTo(torsoX + armSwingFront, hipY + 1 * sc);
      ctx.stroke();

      // Mano o guante de portero delantero
      if (isKeeper) {
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(torsoX + armSwingFront, hipY + 1 * sc, 2.4 * sc, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "#10b981";
        ctx.lineWidth = 0.8 * sc;
        ctx.stroke();
      } else {
        ctx.fillStyle = skinTone;
        ctx.beginPath();
        ctx.arc(torsoX + armSwingFront, hipY + 1 * sc, 1.6 * sc, 0, Math.PI * 2);
        ctx.fill();
      }

      // --- CABEZA Y CABELLO 3D ---
      const headX = torsoX;
      const headY = headCenterY;

      // Cuello
      ctx.fillStyle = skinTone;
      ctx.fillRect(headX - 1.2 * sc, shoulderY - 1.2 * sc, 2.4 * sc, 2.5 * sc);

      // Cabeza
      ctx.fillStyle = skinTone;
      ctx.beginPath();
      ctx.arc(headX, headY, headR, 0, Math.PI * 2);
      ctx.fill();

      // Cabello estilizado en 3D
      ctx.fillStyle = hairColor;
      ctx.beginPath();
      ctx.arc(headX, headY - 1.0 * sc, headR * 0.96, Math.PI, 0);
      ctx.fill();
    }

    function drawMonigote3D(ctx, item) {
      drawRealisticPlayer3D(ctx, item);
    }

    // Dibujo del balón 3D con luz solar directional, paneles oficiales y estela de velocidad
    function drawBall3D(ctx, item) {
      const { groundX, groundY, screenX, screenY, scale, z } = item;

      // 1. Sombra direccional en el césped por la luz solar (Consistente con los futbolistas y el estadio)
      const shadowDist = (2.2 + (z || 0) * 0.45) * scale;
      const shadowR = (4.0 + (z || 0) * 0.15) * scale;
      const shadowAlpha = Math.max(0.12, 0.44 - (z || 0) * 0.035);

      ctx.save();
      ctx.fillStyle = `rgba(0, 25, 8, ${shadowAlpha})`;
      ctx.beginPath();
      ctx.ellipse(groundX - shadowDist * 0.85, groundY + shadowDist * 0.45, shadowR, shadowR * 0.52, -0.38, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // 2. Estela cinemática de velocidad en disparos
      if (ballTrail.length > 1) {
        for (let t = 0; t < ballTrail.length - 1; t++) {
          const tPt = toScreen3D(ballTrail[t].x, ballTrail[t].y, ballTrail[t].z || 0, canvas.width, canvas.height);
          const tAlpha = (t / ballTrail.length) * 0.38;
          ctx.beginPath();
          ctx.arc(tPt.screenX, tPt.screenY, (3.0 * scale) * (0.35 + (t / ballTrail.length) * 0.65), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${tAlpha})`;
          ctx.fill();
        }
      }

      // 3. Esfera del balón 3D con luz radial de focos y sol
      const ballR = 4.4 * scale;
      ctx.beginPath();
      ctx.arc(screenX, screenY, ballR, 0, Math.PI * 2);

      const grad = ctx.createRadialGradient(
        screenX - ballR * 0.35, screenY - ballR * 0.35, ballR * 0.08,
        screenX, screenY, ballR
      );
      grad.addColorStop(0, "#ffffff");
      grad.addColorStop(0.7, "#f1f5f9");
      grad.addColorStop(1, "#334155");
      ctx.fillStyle = grad;
      ctx.fill();

      ctx.strokeStyle = "rgba(15, 23, 42, 0.6)";
      ctx.lineWidth = 1.0;
      ctx.stroke();

      // 4. Paneles pentagonales del balón oficial rotando
      ctx.save();
      ctx.translate(screenX, screenY);
      ctx.rotate(ballRotation);

      ctx.fillStyle = "#0f172a";
      ctx.beginPath();
      for (let p = 0; p < 5; p++) {
        const pa = (p * Math.PI * 2) / 5;
        const px = Math.cos(pa) * (ballR * 0.44);
        const py = Math.sin(pa) * (ballR * 0.44);
        if (p === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.fill();

      // Detalles aerodinámicos de color LaLiga
      ctx.strokeStyle = "#f97316";
      ctx.lineWidth = 1.2 * scale;
      ctx.beginPath();
      ctx.arc(0, 0, ballR * 0.74, 0.2, 1.4);
      ctx.stroke();

      ctx.restore();
    }

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

      const hud = container.querySelector("#highlight-action-hud");
      const hudTitle = container.querySelector("#hl-hud-title");
      const hudSub = container.querySelector("#hl-hud-subtitle");
      if (hud && hudTitle && hudSub) {
        hudTitle.textContent = `🎥 ENFOQUE DE ACCIÓN · ${hlData.atkTeam.shortName.toUpperCase()}`;
        hudSub.textContent = hlData.tacticalNote || hlData.commentary || "Apertura y construcción de jugada";
        hud.classList.remove("opacity-0", "-translate-y-2");
        hud.classList.add("opacity-100", "translate-y-0");
      }

      updateFMCommentary(hlData.tacticalNote || hlData.commentary || `¡Jugada de peligro de ${hlData.atkTeam.name}!`, hlData.atkTeam.shortName.toUpperCase(), true);
      showMatchAlert({ text: `⚡ ¡Jugada de peligro de ${hlData.atkTeam.name}!` });
    }

    function handleHighlightPhase(phaseData) {
      if (!currentHighlightData) currentHighlightData = {};
      Object.assign(currentHighlightData, phaseData);

      const hudSub = container.querySelector("#hl-hud-subtitle");
      if (hudSub && phaseData.tacticalNote) {
        hudSub.textContent = phaseData.tacticalNote;
      }

      if (phaseData.tacticalNote) {
        updateFMCommentary(phaseData.tacticalNote, phaseData.phase === "BUILDUP" ? "CONSTRUCCIÓN" : phaseData.phase === "PASS" ? "ASISTENCIA" : "REMATE", true);
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

    function handleGoalSequence(goalData) {
      handleHighlightEnd();
      // Ondulación física de la red al encajar el gol
      if (goalData.concedingSide === "home") {
        netRippleH = 1.0;
      } else {
        netRippleA = 1.0;
      }

      // 1. Pausar la simulación para que el reloj no avance durante celebración y repetición
      simulator.pause();

      const elGoalOverlay = container.querySelector("#goal-cinematic");
      const elScorer = container.querySelector("#goal-scorer-name");
      const elScore = container.querySelector("#goal-score-display");
      const elMinute = container.querySelector("#goal-minute-display");
      const replayBadge = container.querySelector("#replay-badge");
      const replayText = container.querySelector("#replay-badge-text");

      if (elScorer) elScorer.textContent = `${goalData.shooter.name}`;
      if (elScore) elScore.textContent = goalData.score;
      if (elMinute) elMinute.textContent = `Minuto ${goalData.minute}' · ${goalData.atkTeam.name}`;

      // Mostrar cartel cinematográfico de GOL
      if (elGoalOverlay) {
        elGoalOverlay.classList.remove("opacity-0", "pointer-events-none", "scale-95");
        elGoalOverlay.classList.add("opacity-100", "scale-100");
      }

      // Extraer el clip de la jugada clave EXACTA (desde el arranque de la ocasión de peligro)
      const startIdx = (currentHighlightStartFrame !== null && currentHighlightStartFrame !== undefined)
        ? currentHighlightStartFrame
        : Math.max(0, replayBuffer.length - 130);

      const recordedClip = replayBuffer.slice(startIdx);
      const finalClip = recordedClip.length >= 35 ? recordedClip : replayBuffer.slice(-100);
      currentHighlightStartFrame = null;

      setTimeout(() => {
        // Desvanecer overlay cinematográfico
        if (elGoalOverlay) {
          elGoalOverlay.classList.remove("opacity-100", "scale-100");
          elGoalOverlay.classList.add("opacity-0", "pointer-events-none", "scale-95");
        }

        // Si tenemos suficientes frames, reproducir la repetición de la jugada clave
        if (finalClip.length > 20) {
          isReplaying = true;
          replayFrames = finalClip;
          replayFrameIndex = 0;
          if (replayBadge) {
            if (replayText) replayText.textContent = `📹 REPETICIÓN: GOLAZO · ${goalData.shooter.name.toUpperCase()}`;
            replayBadge.classList.remove("hidden");
          }

          const pollReplay = setInterval(() => {
            if (!isReplaying) {
              clearInterval(pollReplay);
              if (replayBadge) replayBadge.classList.add("hidden");
              startKickoffSequence(goalData.concedingSide);
            }
          }, 80);
        } else {
          startKickoffSequence(goalData.concedingSide);
        }
      }, 2000);
    }

    function startKickoffSequence(concedingSide) {
      isKickoffInProgress = true;
      const kickoffBadge = container.querySelector("#kickoff-badge");
      if (kickoffBadge) kickoffBadge.classList.remove("hidden");

      // Colocar jugadores y balón en posición de saque de centro
      simulator.resetKickoff(concedingSide);

      // Tiempo para ver a los equipos situados en sus campos
      setTimeout(() => {
        // Pase hacia atrás para iniciar la jugada
        if (concedingSide === "home") {
          simulator.ball.targetX = 40;
          simulator.ball.targetY = 48;
        } else {
          simulator.ball.targetX = 60;
          simulator.ball.targetY = 52;
        }

        setTimeout(() => {
          if (kickoffBadge) kickoffBadge.classList.add("hidden");
          isKickoffInProgress = false;

          // Si tras el gol ya se había cumplido el tiempo reglamentario del primer tiempo con su descuento
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

          if (!simulator.isFinished) {
            simulator.start();
            const iconPP = container.querySelector("#play-pause-icon");
            const textPP = container.querySelector("#play-pause-text");
            if (iconPP) iconPP.textContent = "⏸";
            if (textPP) textPP.textContent = "Pausar";
          }
        }, 1100);
      }, 1500);
    }

    function handleSubstitutionChyron(subData) {
      showSubstitutionChyron(subData, () => {
        if (!simulator.isFinished && !simulator.isHalfTime) {
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

    // Bucle principal de renderizado 3D a 60 FPS estilo Football Manager 26
    let lastBallX = 50;
    let lastBallY = 50;

    // ==========================================
    // CÁMARA CINEMÁTICA 3D BROADCAST (ESTILO EA SPORTS FC / PREMIER LEAGUE TV)
    // Exclusiva para Jugadas Clave (perspectiva diagonal 3/4 hacia portería izquierda)
    // ==========================================
    function projectEA3D(u, v, z, w, h) {
      // u: metros desde la línea de fondo hacia el centro del campo (0 = línea de gol, 16.5 = borde área grande, 34 = medular)
      // v: metros a través del ancho del campo (0 = banda lejana sup-dcha, 34 = centro portería, 68 = banda cercana inf-izq)
      // z: altura en metros sobre el césped (2.44 = larguero)
      const uNorm = u / 32;
      const vNorm = v / 55;
      // Factor de expansión por cercanía a cámara (mayor cuando u y v crecen hacia abajo-izquierda/derecha)
      const persp = 1 + uNorm * 0.22 + vNorm * 0.18;

      const baseX = 0.675 * w;
      const baseY = 0.082 * h;

      // Vector a lo largo de la línea de gol (+v: baja hacia la izquierda)
      const vx = -0.0162 * w * (1 + uNorm * 0.14);
      const vy = 0.00565 * h * (1 + uNorm * 0.12);

      // Vector hacia el interior del campo (+u: baja hacia la derecha)
      const ux = 0.0172 * w * (1 + vNorm * 0.06);
      const uy = 0.0156 * h * (1 + vNorm * 0.15);

      const groundX = baseX + v * vx + u * ux;
      const groundY = baseY + v * vy + u * uy;

      const scale = Math.max(0.55, Math.min(1.65, 0.72 * persp));
      const screenY = groundY - z * (0.044 * h) * scale;

      return {
        x: groundX,
        y: screenY,
        groundY: groundY,
        sc: scale * Math.min(w / 480, h / 290)
      };
    }

    function drawFrontalBall(ctx, x, y, zPx, r, sc) {
      // Sombra proyectada sobre el césped
      ctx.save();
      const shadowAlpha = Math.max(0.10, 0.48 - (zPx / (40 * sc)) * 0.32);
      ctx.fillStyle = `rgba(6, 20, 8, ${shadowAlpha})`;
      ctx.beginPath();
      ctx.ellipse(x + 1.5 * sc, y + 1 * sc, r * 1.35, r * 0.62, -0.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      const bY = y - zPx;
      const bR = Math.max(2.8, r);

      // Esfera 3D con iluminación tipo balón oficial Premier/LaLiga (blanco con gráficos magenta/púrpura)
      ctx.beginPath();
      ctx.arc(x, bY, bR, 0, Math.PI * 2);
      const bGrad = ctx.createRadialGradient(x - bR * 0.32, bY - bR * 0.35, bR * 0.08, x, bY, bR);
      bGrad.addColorStop(0, "#ffffff");
      bGrad.addColorStop(0.68, "#f1f5f9");
      bGrad.addColorStop(1, "#475569");
      ctx.fillStyle = bGrad;
      ctx.fill();
      ctx.strokeStyle = "rgba(15, 23, 42, 0.65)";
      ctx.lineWidth = Math.max(0.7, 0.85 * sc);
      ctx.stroke();

      // Anillos cromáticos estilo balón EA Sports (magenta / púrpura / cian)
      ctx.strokeStyle = "#be185d";
      ctx.lineWidth = Math.max(0.9, 1.1 * sc);
      ctx.beginPath();
      ctx.arc(x + bR * 0.1, bY - bR * 0.05, bR * 0.52, 0.2, Math.PI * 1.35);
      ctx.stroke();

      ctx.fillStyle = "#1e1b4b";
      ctx.beginPath();
      ctx.arc(x - bR * 0.22, bY + bR * 0.18, bR * 0.24, 0, Math.PI * 2);
      ctx.fill();
    }

    function drawFrontalAthlete(ctx, ent) {
      const { x, y, sc, kit, number, isKeeper, isReferee, isLinesman, pose, facing, name, elapsed } = ent;
      const jerseyColor = isReferee ? "#1e293b" : (isLinesman ? "#0f172a" : (isKeeper ? (kit.keeper || "#84cc16") : kit.jersey));
      const shortsColor = isReferee || isLinesman ? "#090d16" : (isKeeper ? (kit.keeper || "#84cc16") : (kit.shorts || "#ffffff"));
      const socksColor = isReferee || isLinesman ? "#090d16" : (isKeeper ? "#bef264" : (kit.socks || "#ffffff"));
      const bootColor = isReferee || isLinesman ? "#0f172a" : ((number % 3 === 0) ? "#f97316" : (number % 2 === 0 ? "#e2e8f0" : "#1e293b"));
      const skinTones = ["#f5cba7", "#e59866", "#8d5524", "#f0b27a", "#c68642"];
      const hairColors = ["#1c1917", "#451a03", "#78350f", "#0f172a", "#92400e", "#d97706"];
      const skinColor = skinTones[(number || 1) % skinTones.length];
      const hairColor = hairColors[(number || 1) % hairColors.length];

      ctx.save();
      ctx.translate(x, y);

      // Sombra direccional suave sobre el césped
      ctx.fillStyle = "rgba(8, 24, 6, 0.38)";
      ctx.beginPath();
      ctx.ellipse(-1.5 * sc, 0.5 * sc, 7.5 * sc, 3.0 * sc, -0.22, 0, Math.PI * 2);
      ctx.fill();

      // 1. PORTERO EN ESTIRADA (DIVE)
      if (pose === "DIVE_RIGHT" || pose === "DIVE_LEFT") {
        const dir = pose === "DIVE_RIGHT" ? 1 : -1;
        ctx.save();
        ctx.translate(0, -9 * sc);
        ctx.rotate(dir * 0.68);

        // Piernas estiradas
        ctx.strokeStyle = skinColor;
        ctx.lineWidth = 2.6 * sc;
        ctx.beginPath();
        ctx.moveTo(-dir * 6 * sc, 0);
        ctx.lineTo(-dir * 14 * sc, 3 * sc);
        ctx.stroke();

        ctx.strokeStyle = socksColor;
        ctx.lineWidth = 2.6 * sc;
        ctx.beginPath();
        ctx.moveTo(-dir * 14 * sc, 3 * sc);
        ctx.lineTo(-dir * 22 * sc, 5 * sc);
        ctx.stroke();

        // Pantalón y torso
        ctx.fillStyle = shortsColor;
        ctx.beginPath();
        ctx.roundRect(-7 * sc, -3.5 * sc, 8 * sc, 6.5 * sc, 1.5 * sc);
        ctx.fill();

        ctx.fillStyle = jerseyColor;
        ctx.beginPath();
        ctx.roundRect(-2 * sc, -4.5 * sc, 12 * sc, 8.5 * sc, 2 * sc);
        ctx.fill();

        // Brazos hacia el balón
        ctx.strokeStyle = jerseyColor;
        ctx.lineWidth = 2.6 * sc;
        ctx.beginPath();
        ctx.moveTo(dir * 7 * sc, -2 * sc);
        ctx.lineTo(dir * 20 * sc, -4 * sc);
        ctx.moveTo(dir * 7 * sc, 2 * sc);
        ctx.lineTo(dir * 18 * sc, 0);
        ctx.stroke();

        // Guantes de portero
        ctx.fillStyle = "#d9f99d";
        ctx.beginPath();
        ctx.arc(dir * 21 * sc, -4 * sc, 2.8 * sc, 0, Math.PI * 2);
        ctx.arc(dir * 19 * sc, 0, 2.5 * sc, 0, Math.PI * 2);
        ctx.fill();

        // Cabeza
        ctx.fillStyle = skinColor;
        ctx.beginPath();
        ctx.arc(dir * 10 * sc, -3.5 * sc, 3.3 * sc, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = hairColor;
        ctx.beginPath();
        ctx.arc(dir * 10 * sc, -4.5 * sc, 3.2 * sc, Math.PI, 0);
        ctx.fill();

        ctx.restore();
        ctx.restore();
        return;
      }

      // 2. PORTERO EN EL SUELO TRAS ESTIRADA
      if (pose === "GROUND_RIGHT" || pose === "GROUND_LEFT" || pose === "CONCEDED") {
        const dir = pose === "GROUND_LEFT" ? -1 : 1;
        ctx.fillStyle = jerseyColor;
        ctx.beginPath();
        ctx.ellipse(0, -3 * sc, 10 * sc, 4 * sc, 0.1 * dir, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = shortsColor;
        ctx.beginPath();
        ctx.ellipse(-dir * 7 * sc, -2.5 * sc, 4.5 * sc, 3.2 * sc, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = skinColor;
        ctx.beginPath();
        ctx.arc(dir * 9.5 * sc, -4.5 * sc, 3.2 * sc, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        return;
      }

      // 3. CENTRAL EN SEGADA DEFENSIVA (SLIDE_BLOCK)
      if (pose === "SLIDE_BLOCK") {
        ctx.strokeStyle = socksColor;
        ctx.lineWidth = 3.2 * sc;
        ctx.beginPath();
        ctx.moveTo(-4 * sc, -3 * sc);
        ctx.lineTo(14 * sc, -1.5 * sc);
        ctx.stroke();

        ctx.fillStyle = bootColor;
        ctx.fillRect(13 * sc, -3.5 * sc, 4.5 * sc, 2.5 * sc);

        ctx.fillStyle = shortsColor;
        ctx.beginPath();
        ctx.roundRect(-7 * sc, -7 * sc, 8 * sc, 5.5 * sc, 1.5 * sc);
        ctx.fill();

        ctx.fillStyle = jerseyColor;
        ctx.beginPath();
        ctx.roundRect(-11 * sc, -14 * sc, 9.5 * sc, 8.5 * sc, 2 * sc);
        ctx.fill();

        ctx.fillStyle = skinColor;
        ctx.beginPath();
        ctx.arc(-7 * sc, -17 * sc, 3.2 * sc, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        return;
      }

      // 4. ANATOMÍA 3D DE FUTBOLISTA DE PIE / EN CARRERA / CHUTANDO / BARRERA
      const runPhase = (elapsed || 0) * 9.5 + (number || 1) * 1.7;
      const isMoving = pose === "DRIBBLE" || pose === "RUNNING_UP" || pose === "SPRINT";
      const stride = isMoving ? Math.sin(runPhase) * 4.8 * sc : 0;
      const kneeLift = isMoving ? Math.max(0, Math.cos(runPhase)) * 2.5 * sc : 0;

      // Orientación: "BACK_LEFT" (atacante mirando hacia portería izq-arriba, vemos su espalda/dorsal y perfil izq)
      // "FRONT_RIGHT" (defensa/portero/barrera mirando hacia el balón abajo-dcha, vemos su pecho)
      const isBackView = facing === "BACK_LEFT";

      let lFootX = -2.4 * sc;
      let lFootY = -0.5 * sc;
      let rFootX = 2.4 * sc;
      let rFootY = -0.5 * sc;
      let lKneeX = -2.4 * sc;
      let lKneeY = -6.2 * sc;
      let rKneeX = 2.4 * sc;
      let rKneeY = -6.2 * sc;
      let torsoLeanX = 0;

      if (pose === "WINDUP_SHOT") {
        // Pierna izquierda plantada junto al balón, pierna derecha armada atrás, brazo derecho extendido (como el #20 de la foto)
        lFootX = -3.8 * sc;
        lFootY = 0.5 * sc;
        lKneeX = -3.2 * sc;
        lKneeY = -6.0 * sc;
        rFootX = 6.8 * sc;
        rFootY = -5.5 * sc;
        rKneeX = 4.2 * sc;
        rKneeY = -7.2 * sc;
        torsoLeanX = -1.8 * sc;
      } else if (pose === "SHOT_FOLLOW_THROUGH" || pose === "PASS_DELIVERY") {
        // Pierna de golpeo lanzada hacia adelante-izquierda tras impactar el balón
        lFootX = 2.5 * sc;
        lFootY = 1.2 * sc;
        lKneeX = 1.2 * sc;
        lKneeY = -5.5 * sc;
        rFootX = -6.5 * sc;
        rFootY = -4.2 * sc;
        rKneeX = -3.5 * sc;
        rKneeY = -7.5 * sc;
        torsoLeanX = -1.2 * sc;
      } else if (pose === "WALL_GUARD") {
        // Barrera defensiva con piernas juntas y manos protegiendo
        lFootX = -1.8 * sc;
        rFootX = 1.8 * sc;
        lKneeX = -1.8 * sc;
        rKneeX = 1.8 * sc;
      } else if (pose === "GK_READY" || pose === "BOUNCE") {
        // Portero con piernas abiertas en tensión bajo palos (como en la foto)
        lFootX = -5.2 * sc;
        rFootX = 5.2 * sc;
        lKneeX = -4.2 * sc;
        rKneeX = 4.2 * sc;
        lKneeY = -5.5 * sc;
        rKneeY = -5.5 * sc;
      } else if (isMoving) {
        lFootX = -2.2 * sc - stride * 0.7;
        lFootY = -0.5 * sc + stride * 0.35 - kneeLift * 0.4;
        rFootX = 2.2 * sc + stride * 0.7;
        rFootY = -0.5 * sc - stride * 0.35;
        lKneeX = -2.0 * sc - stride * 0.35;
        lKneeY = -6.2 * sc - kneeLift * 0.5;
        rKneeX = 2.0 * sc + stride * 0.35;
        rKneeY = -6.2 * sc;
        torsoLeanX = isBackView ? -1.0 * sc : 0.8 * sc;
      }

      const hipY = -11.5 * sc;
      const shoulderY = -22.2 * sc;
      const headY = -26.2 * sc;
      const headR = 3.1 * sc;

      // Muslos (piel + caída del pantalón)
      ctx.lineCap = "round";
      ctx.strokeStyle = skinColor;
      ctx.lineWidth = 2.7 * sc;
      ctx.beginPath();
      ctx.moveTo(-2.2 * sc, hipY + 2 * sc);
      ctx.lineTo(lKneeX, lKneeY);
      ctx.moveTo(2.2 * sc, hipY + 2 * sc);
      ctx.lineTo(rKneeX, rKneeY);
      ctx.stroke();

      // Medias altas hasta debajo de la rodilla
      ctx.strokeStyle = socksColor;
      ctx.lineWidth = 2.5 * sc;
      ctx.beginPath();
      ctx.moveTo(lKneeX, lKneeY + 0.5 * sc);
      ctx.lineTo(lFootX, lFootY);
      ctx.moveTo(rKneeX, rKneeY + 0.5 * sc);
      ctx.lineTo(rFootX, rFootY);
      ctx.stroke();

      // Vuelta superior de la media
      ctx.strokeStyle = jerseyColor;
      ctx.lineWidth = 1.0 * sc;
      ctx.beginPath();
      ctx.moveTo(lKneeX - 1.1 * sc, lKneeY + 1.0 * sc);
      ctx.lineTo(lKneeX + 1.1 * sc, lKneeY + 1.0 * sc);
      ctx.moveTo(rKneeX - 1.1 * sc, rKneeY + 1.0 * sc);
      ctx.lineTo(rKneeX + 1.1 * sc, rKneeY + 1.0 * sc);
      ctx.stroke();

      // Botas con tacos
      ctx.fillStyle = bootColor;
      ctx.beginPath();
      ctx.ellipse(lFootX - (isBackView ? 0.8 * sc : -0.8 * sc), lFootY, 2.7 * sc, 1.25 * sc, isBackView ? -0.2 : 0.2, 0, Math.PI * 2);
      ctx.ellipse(rFootX - (isBackView ? 0.8 * sc : -0.8 * sc), rFootY, 2.7 * sc, 1.25 * sc, isBackView ? -0.2 : 0.2, 0, Math.PI * 2);
      ctx.fill();

      // Pantalón corto (Shorts) con perneras separadas
      ctx.fillStyle = shortsColor;
      ctx.beginPath();
      ctx.moveTo(-4.4 * sc, hipY - 1.5 * sc);
      ctx.lineTo(4.4 * sc, hipY - 1.5 * sc);
      ctx.lineTo(4.2 * sc + (rKneeX - 2.2 * sc) * 0.45, hipY + 3.8 * sc);
      ctx.lineTo(0.4 * sc, hipY + 3.2 * sc);
      ctx.lineTo(0, hipY + 1.5 * sc);
      ctx.lineTo(-0.4 * sc, hipY + 3.2 * sc);
      ctx.lineTo(-4.2 * sc + (lKneeX + 2.2 * sc) * 0.45, hipY + 3.8 * sc);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = "rgba(15, 23, 42, 0.22)";
      ctx.lineWidth = 0.6 * sc;
      ctx.stroke();

      // Torso anatómico con volumen y sombreado lateral
      ctx.save();
      ctx.translate(torsoLeanX, 0);

      const torsoGrad = ctx.createLinearGradient(-5.5 * sc, shoulderY, 5.5 * sc, hipY);
      torsoGrad.addColorStop(0, jerseyColor);
      torsoGrad.addColorStop(0.7, jerseyColor);
      torsoGrad.addColorStop(1, "#0f172a");
      ctx.fillStyle = jerseyColor;
      ctx.beginPath();
      ctx.moveTo(-5.0 * sc, shoulderY);
      ctx.lineTo(5.0 * sc, shoulderY);
      ctx.lineTo(4.1 * sc, hipY - 0.5 * sc);
      ctx.lineTo(-4.1 * sc, hipY - 0.5 * sc);
      ctx.closePath();
      ctx.fill();

      // Sombreado sutil de pliegues en la camiseta
      ctx.fillStyle = "rgba(0, 0, 0, 0.14)";
      ctx.beginPath();
      ctx.moveTo(1.8 * sc, shoulderY);
      ctx.lineTo(5.0 * sc, shoulderY);
      ctx.lineTo(4.1 * sc, hipY - 0.5 * sc);
      ctx.lineTo(1.2 * sc, hipY - 0.5 * sc);
      ctx.closePath();
      ctx.fill();

      // Cuello de la camiseta
      ctx.strokeStyle = kit.collar || "#ffffff";
      ctx.lineWidth = 1.1 * sc;
      ctx.beginPath();
      ctx.arc(0, shoulderY + 0.6 * sc, 2.1 * sc, 0.1 * Math.PI, 0.9 * Math.PI);
      ctx.stroke();

      // Dorsal y nombre en la espalda (como el #20 azul de la referencia)
      if (isBackView && !isReferee && !isLinesman) {
        ctx.fillStyle = kit.number || "#ffffff";
        ctx.font = `900 ${Math.max(6, Math.round(6.2 * sc))}px "Impact", "Arial Black", sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(`${number}`, 0, shoulderY + 5.8 * sc);
      } else if (!isBackView && !isReferee && !isLinesman && !isKeeper) {
        // Detalle de escudo/sponsor en el pecho
        ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
        ctx.fillRect(-2.4 * sc, shoulderY + 3.8 * sc, 4.8 * sc, 1.2 * sc);
      }

      // Brazos articulados (manga corta + antebrazo piel)
      let lArmEndX = -7.5 * sc;
      let lArmEndY = hipY - 1.5 * sc;
      let rArmEndX = 7.5 * sc;
      let rArmEndY = hipY - 1.5 * sc;

      if (pose === "WINDUP_SHOT" || pose === "SHOT_FOLLOW_THROUGH" || pose === "PASS_DELIVERY") {
        // Pose icónica de golpeo: brazo derecho extendido arriba-derecha para equilibrar el cuerpo (igual al #20 de la foto)
        lArmEndX = -8.5 * sc;
        lArmEndY = shoulderY + 4.5 * sc;
        rArmEndX = 12.0 * sc;
        rArmEndY = shoulderY - 2.5 * sc;
      } else if (pose === "WALL_GUARD") {
        // Manos bajas juntas delante del cuerpo protegiendo en la barrera
        lArmEndX = -1.6 * sc;
        lArmEndY = hipY + 1.0 * sc;
        rArmEndX = 1.6 * sc;
        rArmEndY = hipY + 1.0 * sc;
      } else if (pose === "CELEBRATE_JUMP") {
        lArmEndX = -10 * sc;
        lArmEndY = shoulderY - 7 * sc;
        rArmEndX = 10 * sc;
        rArmEndY = shoulderY - 7 * sc;
      } else if (pose === "HANDS_ON_HEAD") {
        lArmEndX = -3.5 * sc;
        lArmEndY = headY;
        rArmEndX = 3.5 * sc;
        rArmEndY = headY;
      } else if (isMoving) {
        lArmEndX = -6.8 * sc + stride * 0.45;
        lArmEndY = shoulderY + 6.5 * sc - stride * 0.3;
        rArmEndX = 6.8 * sc - stride * 0.45;
        rArmEndY = shoulderY + 6.5 * sc + stride * 0.3;
      }

      // Mangas
      const lElbX = (-4.8 * sc + lArmEndX) * 0.5;
      const lElbY = (shoulderY + 1.5 * sc + lArmEndY) * 0.5;
      const rElbX = (4.8 * sc + rArmEndX) * 0.5;
      const rElbY = (shoulderY + 1.5 * sc + rArmEndY) * 0.5;

      ctx.strokeStyle = jerseyColor;
      ctx.lineWidth = 2.6 * sc;
      ctx.beginPath();
      ctx.moveTo(-4.8 * sc, shoulderY + 1.2 * sc);
      ctx.lineTo(lElbX, lElbY);
      ctx.moveTo(4.8 * sc, shoulderY + 1.2 * sc);
      ctx.lineTo(rElbX, rElbY);
      ctx.stroke();

      // Antebrazos piel (o manga larga si es portero/árbitro)
      ctx.strokeStyle = (isKeeper || isReferee) ? jerseyColor : skinColor;
      ctx.lineWidth = 2.0 * sc;
      ctx.beginPath();
      ctx.moveTo(lElbX, lElbY);
      ctx.lineTo(lArmEndX, lArmEndY);
      ctx.moveTo(rElbX, rElbY);
      ctx.lineTo(rArmEndX, rArmEndY);
      ctx.stroke();

      // Manos o guantes
      ctx.fillStyle = isKeeper ? "#bef264" : skinColor;
      ctx.beginPath();
      ctx.arc(lArmEndX, lArmEndY, (isKeeper ? 2.1 : 1.3) * sc, 0, Math.PI * 2);
      ctx.arc(rArmEndX, rArmEndY, (isKeeper ? 2.1 : 1.3) * sc, 0, Math.PI * 2);
      ctx.fill();

      // Banderín de juez de línea si es linier
      if (isLinesman) {
        ctx.strokeStyle = "#e2e8f0";
        ctx.lineWidth = 1.0 * sc;
        ctx.beginPath();
        ctx.moveTo(rArmEndX, rArmEndY);
        ctx.lineTo(rArmEndX + 2.5 * sc, rArmEndY + 5.5 * sc);
        ctx.stroke();
        ctx.fillStyle = "#ef4444";
        ctx.fillRect(rArmEndX + 1.0 * sc, rArmEndY + 3.0 * sc, 3.2 * sc, 2.5 * sc);
        ctx.fillStyle = "#facc15";
        ctx.fillRect(rArmEndX + 2.6 * sc, rArmEndY + 3.0 * sc, 1.6 * sc, 2.5 * sc);
      }

      // Cuello y Cabeza con corte de pelo realista
      ctx.fillStyle = skinColor;
      ctx.fillRect(-1.2 * sc, headY + 1.8 * sc, 2.4 * sc, 2.5 * sc);
      ctx.beginPath();
      ctx.arc(0, headY, headR, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = hairColor;
      ctx.beginPath();
      if (isBackView) {
        ctx.arc(0.2 * sc, headY - 0.4 * sc, headR * 0.96, 0.85 * Math.PI, 2.15 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(0.3 * sc, headY + 0.2 * sc, headR * 0.85, -0.2 * Math.PI, 0.85 * Math.PI);
        ctx.fill();
      } else {
        ctx.arc(0, headY - 0.8 * sc, headR * 0.96, Math.PI, 0);
        ctx.fill();
      }

      // Indicador sutil sobre el jugador activo con balón (estilo cursor EA FC)
      if (ent.isActiveCarrier) {
        ctx.fillStyle = "#38bdf8";
        ctx.beginPath();
        ctx.moveTo(0, headY - 6.2 * sc);
        ctx.lineTo(-2.6 * sc, headY - 9.8 * sc);
        ctx.lineTo(2.6 * sc, headY - 9.8 * sc);
        ctx.closePath();
        ctx.fill();
      }

      ctx.restore();
      ctx.restore();
    }

    function drawFrontalHighlightScene(ctx, w, h, hlData) {
      const now = performance.now();
      if (!hlData.animStartTime) hlData.animStartTime = now;
      const elapsed = (now - hlData.animStartTime) / 1000;

      const outcome = hlData.outcome || "GOAL";
      const targetCorner = hlData.targetCorner || "TOP_RIGHT";
      const wideDirection = hlData.wideDirection || (targetCorner.includes("LEFT") ? "LEFT" : "RIGHT");
      const isHome = hlData.attackingSide === "home";
      const atkTeam = isHome ? homeTeam : awayTeam;
      const defTeam = isHome ? awayTeam : homeTeam;
      const atkKit = isHome ? kits.home : kits.away;
      const defKit = isHome ? kits.away : kits.home;

      const sc = Math.min(w / 460, h / 290);
      const lerp = (a, b, t) => a + (b - a) * Math.max(0, Math.min(1, t));
      const p3d = (u, v, z = 0) => projectEA3D(u, v, z, w, h);

      // 1. FONDO DE GRADAS EN PERSPECTIVA DIAGONAL (FIEL A LA IMAGEN DE REFERENCIA)
      ctx.fillStyle = "#18181b";
      ctx.fillRect(0, 0, w, h);

      // Polígono de la grada tras la línea de fondo (izquierda a centro-arriba) y banda lejana (centro-arriba a derecha)
      const cornerAdBase = p3d(-1.5, -1.2, 0);
      const leftAdBase = p3d(-1.5, 48, 0);
      const rightAdBase = p3d(38, -1.2, 0);

      // Grada de fondo (detrás de la portería, desde x=0 hasta el córner en x≈0.67w)
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(w, 0);
      ctx.lineTo(rightAdBase.x, rightAdBase.y);
      ctx.lineTo(cornerAdBase.x, cornerAdBase.y);
      ctx.lineTo(leftAdBase.x, leftAdBase.y);
      ctx.lineTo(0, leftAdBase.y + 20 * sc);
      ctx.closePath();
      ctx.clip();

      // Base de hormigón y asientos rojos/grises del estadio
      const standGrad = ctx.createLinearGradient(0, 0, 0, h * 0.36);
      standGrad.addColorStop(0, "#1e1b24");
      standGrad.addColorStop(0.5, "#27272a");
      standGrad.addColorStop(1, "#3f3f46");
      ctx.fillStyle = standGrad;
      ctx.fillRect(0, 0, w, h * 0.42);

      // Bloques de asientos rojos visibles entre aficionados (como en la foto)
      for (let r = 0; r < 9; r++) {
        const rowT = r / 9;
        const yLeft = lerp(4 * sc, leftAdBase.y - 14 * sc, rowT);
        const yCorner = lerp(-18 * sc, cornerAdBase.y - 11 * sc, rowT);
        const yRight = lerp(-10 * sc, rightAdBase.y - 11 * sc, rowT);

        // Filas de grada tras portería
        ctx.strokeStyle = r % 2 === 0 ? "#dc2626" : "#991b1b";
        ctx.lineWidth = 4.2 * sc;
        ctx.beginPath();
        ctx.moveTo(0, yLeft);
        ctx.lineTo(cornerAdBase.x, yCorner);
        ctx.lineTo(w, yRight);
        ctx.stroke();
      }

      // Escaleras de hormigón con bordes amarillos de seguridad y vomitorios (como en la parte superior central de la foto)
      const drawStairway = (topX, topY, botX, botY, stairW) => {
        ctx.fillStyle = "#52525b";
        ctx.beginPath();
        ctx.moveTo(topX - stairW * 0.45, topY);
        ctx.lineTo(topX + stairW * 0.45, topY);
        ctx.lineTo(botX + stairW * 0.55, botY);
        ctx.lineTo(botX - stairW * 0.55, botY);
        ctx.closePath();
        ctx.fill();

        const steps = 8;
        for (let s = 0; s <= steps; s++) {
          const st = s / steps;
          const sx = lerp(topX, botX, st);
          const sy = lerp(topY, botY, st);
          const sw = lerp(stairW * 0.45, stairW * 0.55, st);
          ctx.strokeStyle = "#eab308";
          ctx.lineWidth = 1.3 * sc;
          ctx.beginPath();
          ctx.moveTo(sx - sw, sy);
          ctx.lineTo(sx + sw, sy);
          ctx.stroke();
        }
      };

      drawStairway(w * 0.15, -5 * sc, w * 0.21, lerp(leftAdBase.y, cornerAdBase.y, 0.34) - 8 * sc, 15 * sc);
      drawStairway(w * 0.36, -5 * sc, w * 0.41, lerp(leftAdBase.y, cornerAdBase.y, 0.63) - 8 * sc, 14 * sc);
      drawStairway(w * 0.91, -5 * sc, w * 0.93, lerp(cornerAdBase.y, rightAdBase.y, 0.78) - 8 * sc, 16 * sc);

      // Vomitorio / túnel de esquina (arriba al centro-derecha, igual que en la foto)
      ctx.fillStyle = "#d4d4d8";
      ctx.fillRect(w * 0.56, 0, w * 0.14, cornerAdBase.y - 4 * sc);
      ctx.fillStyle = "#18181b";
      ctx.fillRect(w * 0.585, 0, w * 0.055, cornerAdBase.y - 12 * sc);
      drawStairway(w * 0.565, 0, w * 0.58, cornerAdBase.y - 8 * sc, 11 * sc);
      drawStairway(w * 0.685, 0, w * 0.70, cornerAdBase.y - 8 * sc, 12 * sc);

      // Multitud detallada (cabezas y torsos con camisetas granates, rosas, blancas, azules y chaquetas oscuras)
      const fanPalette = ["#881337", "#be123c", "#f472b6", "#fbcfe8", "#e2e8f0", "#1e293b", "#334155", "#7f1d1d", "#2563eb", "#d97706"];
      const crowdCelebrate = (elapsed > 12.4 && outcome === "GOAL") ? Math.abs(Math.sin(now * 0.015)) * 2.5 * sc : 0;

      for (let row = 0; row < 10; row++) {
        const rowT = (row + 0.4) / 10;
        // Grada izquierda (tras portería)
        const numLeftFans = 58;
        for (let i = 0; i < numLeftFans; i++) {
          const uFan = i / numLeftFans;
          const fx = lerp(0, cornerAdBase.x - 22 * sc, uFan);
          // Saltar huecos de escaleras y vomitorio
          if ((fx > w * 0.16 && fx < w * 0.21) || (fx > w * 0.37 && fx < w * 0.41) || (fx > w * 0.55 && fx < w * 0.71)) continue;
          const fyBase = lerp(lerp(4 * sc, leftAdBase.y - 12 * sc, rowT), lerp(-16 * sc, cornerAdBase.y - 10 * sc, rowT), uFan);
          const seed = (row * 73 + i * 31) % 100;
          if (seed < 12) continue; // Asiento libre ocasional mostrando butaca roja
          const jump = (seed % 3 === 0) ? crowdCelebrate : 0;
          const fy = fyBase - jump;
          const shirtCol = fanPalette[seed % fanPalette.length];

          // Torso del aficionado
          ctx.fillStyle = shirtCol;
          ctx.beginPath();
          ctx.roundRect(fx - 2.3 * sc, fy - 4.5 * sc, 4.6 * sc, 5.2 * sc, 1.2 * sc);
          ctx.fill();
          // Cabeza del aficionado
          ctx.fillStyle = seed % 4 === 0 ? "#8d5524" : "#f5cba7";
          ctx.beginPath();
          ctx.arc(fx, fy - 5.8 * sc, 1.55 * sc, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = seed % 2 === 0 ? "#1c1917" : "#451a03";
          ctx.beginPath();
          ctx.arc(fx, fy - 6.2 * sc, 1.5 * sc, Math.PI, 0);
          ctx.fill();
        }

        // Grada derecha (banda lateral superior)
        const numRightFans = 28;
        for (let i = 0; i < numRightFans; i++) {
          const uFan = i / numRightFans;
          const fx = lerp(cornerAdBase.x + 26 * sc, w, uFan);
          if (fx > w * 0.90 && fx < w * 0.95) continue;
          const fyBase = lerp(lerp(-12 * sc, cornerAdBase.y - 10 * sc, rowT), lerp(-6 * sc, rightAdBase.y - 10 * sc, rowT), uFan);
          const seed = (row * 53 + i * 29) % 100;
          if (seed < 14) continue;
          const fy = fyBase - ((seed % 2 === 0) ? crowdCelebrate : 0);
          ctx.fillStyle = fanPalette[(seed + 3) % fanPalette.length];
          ctx.beginPath();
          ctx.roundRect(fx - 2.3 * sc, fy - 4.5 * sc, 4.6 * sc, 5.2 * sc, 1.2 * sc);
          ctx.fill();
          ctx.fillStyle = "#f5cba7";
          ctx.beginPath();
          ctx.arc(fx, fy - 5.8 * sc, 1.5 * sc, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Stewards / Miembros de seguridad con chaleco reflectante naranja y amarillo frente a la valla (igual que en la foto)
      const stewards = [0.22, 0.42, 0.59, 0.62, 0.68, 0.72, 0.75];
      stewards.forEach((stPos, idx) => {
        const sx = w * stPos;
        const sy = stPos < 0.67
          ? lerp(leftAdBase.y, cornerAdBase.y, stPos / 0.67) - 3 * sc
          : lerp(cornerAdBase.y, rightAdBase.y, (stPos - 0.67) / 0.33) - 3 * sc;
        ctx.fillStyle = idx === 5 ? "#bef264" : "#f97316";
        ctx.beginPath();
        ctx.roundRect(sx - 2.2 * sc, sy - 6 * sc, 4.4 * sc, 5.5 * sc, 1 * sc);
        ctx.fill();
        ctx.fillStyle = "#f5cba7";
        ctx.beginPath();
        ctx.arc(sx, sy - 7.5 * sc, 1.5 * sc, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();

      // 2. CÉSPED 3D CON FRANJAS DE CORTE TRANSVERSALES Y LONGITUDINALES (EXACTO A LA REFERENCIA)
      const pitchPolyTL = p3d(-3, -3, 0);
      const pitchPolyBL = p3d(-3, 62, 0);
      const pitchPolyBR = p3d(42, 62, 0);
      const pitchPolyTR = p3d(42, -3, 0);

      ctx.fillStyle = "#2d6a22";
      ctx.beginPath();
      ctx.moveTo(pitchPolyTL.x, pitchPolyTL.y);
      ctx.lineTo(pitchPolyTR.x, pitchPolyTR.y);
      ctx.lineTo(pitchPolyBR.x, pitchPolyBR.y);
      ctx.lineTo(pitchPolyBL.x, pitchPolyBL.y);
      ctx.closePath();
      ctx.fill();

      // Bandas de siega paralelas a la línea de gol (cada 5.5m desde u = -3 hasta u = 40)
      const stripeWidthU = 5.5;
      for (let s = -1; s < 8; s++) {
        const u0 = s * stripeWidthU;
        const u1 = (s + 1) * stripeWidthU;
        const q1 = p3d(u0, -3.5, 0);
        const q2 = p3d(u1, -3.5, 0);
        const q3 = p3d(u1, 64, 0);
        const q4 = p3d(u0, 64, 0);

        ctx.fillStyle = (s % 2 === 0) ? "#2d6b22" : "#357a28";
        ctx.beginPath();
        ctx.moveTo(q1.x, q1.y);
        ctx.lineTo(q2.x, q2.y);
        ctx.lineTo(q3.x, q3.y);
        ctx.lineTo(q4.x, q4.y);
        ctx.closePath();
        ctx.fill();
      }

      // Pasadas longitudinales sutiles de cortacésped (paralelas a la banda)
      for (let lv = 0; lv < 14; lv++) {
        if (lv % 2 === 0) continue;
        const v0 = lv * 5.0;
        const v1 = (lv + 1) * 5.0;
        const l1 = p3d(-3, v0, 0);
        const l2 = p3d(42, v0, 0);
        const l3 = p3d(42, v1, 0);
        const l4 = p3d(-3, v1, 0);
        ctx.fillStyle = "rgba(255, 255, 255, 0.025)";
        ctx.beginPath();
        ctx.moveTo(l1.x, l1.y);
        ctx.lineTo(l2.x, l2.y);
        ctx.lineTo(l3.x, l3.y);
        ctx.lineTo(l4.x, l4.y);
        ctx.closePath();
        ctx.fill();
      }

      // Iluminación ambiental de estadio sobre el terreno de juego
      const grassLight = ctx.createRadialGradient(w * 0.45, h * 0.48, w * 0.05, w * 0.45, h * 0.48, w * 0.65);
      grassLight.addColorStop(0, "rgba(255, 255, 255, 0.06)");
      grassLight.addColorStop(0.6, "rgba(255, 255, 255, 0.0)");
      grassLight.addColorStop(1, "rgba(0, 15, 5, 0.22)");
      ctx.fillStyle = grassLight;
      ctx.fillRect(0, 0, w, h);

      // 3. VALLAS PUBLICITARIAS LED 3D EN ÁNGULO (ESTILO PREMIER LEAGUE / EA SPORTS)
      const draw3DBannerSegment = (pA_bot, pB_bot, pB_top, pA_top, index) => {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(pA_bot.x, pA_bot.y);
        ctx.lineTo(pB_bot.x, pB_bot.y);
        ctx.lineTo(pB_top.x, pB_top.y);
        ctx.lineTo(pA_top.x, pA_top.y);
        ctx.closePath();
        ctx.clip();

        // Fondo blanco luminoso con bloques diagonales púrpura, magenta, cian y verde lima (idéntico a la foto)
        ctx.fillStyle = "#f8fafc";
        ctx.fill();

        const segGrad = ctx.createLinearGradient(pA_bot.x, pA_bot.y, pB_bot.x, pB_bot.y);
        if (index % 2 === 0) {
          segGrad.addColorStop(0, "#3b0764");
          segGrad.addColorStop(0.24, "#3b0764");
          segGrad.addColorStop(0.26, "#ffffff");
          segGrad.addColorStop(0.72, "#ffffff");
          segGrad.addColorStop(0.75, "#ec4899");
          segGrad.addColorStop(0.88, "#f97316");
          segGrad.addColorStop(1, "#84cc16");
        } else {
          segGrad.addColorStop(0, "#38bdf8");
          segGrad.addColorStop(0.18, "#3b0764");
          segGrad.addColorStop(0.22, "#ffffff");
          segGrad.addColorStop(0.74, "#ffffff");
          segGrad.addColorStop(0.78, "#a855f7");
          segGrad.addColorStop(1, "#22c55e");
        }
        ctx.fillStyle = segGrad;
        ctx.fill();

        // Texto rotado siguiendo el ángulo exacto de la valla LED
        const midX = (pA_bot.x + pB_bot.x + pA_top.x + pB_top.x) * 0.25;
        const midY = (pA_bot.y + pB_bot.y + pA_top.y + pB_top.y) * 0.25;
        const angle = Math.atan2(pB_bot.y - pA_bot.y, pB_bot.x - pA_bot.x);
        const segLen = Math.hypot(pB_bot.x - pA_bot.x, pB_bot.y - pA_bot.y);

        ctx.translate(midX, midY);
        if (Math.abs(angle) > Math.PI / 2) {
          ctx.rotate(angle + Math.PI);
        } else {
          ctx.rotate(angle);
        }

        ctx.fillStyle = "#2e1065";
        ctx.font = `900 ${Math.max(6, Math.round(segLen * 0.11))}px "Trebuchet MS", sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        const label = (elapsed > 12.4 && outcome === "GOAL")
          ? `¡GOOOL! ${atkTeam.shortName}`
          : "Premier  •  League";
        ctx.fillText(label, 0, 0);
        ctx.restore();

        // Borde superior oscuro de la pantalla LED
        ctx.strokeStyle = "#0f172a";
        ctx.lineWidth = 1.0 * sc;
        ctx.beginPath();
        ctx.moveTo(pA_top.x, pA_top.y);
        ctx.lineTo(pB_top.x, pB_top.y);
        ctx.stroke();
      };

      // Vallas LED a lo largo de la línea de fondo (desde v = 46 hasta el córner en v = -1.2)
      const goalLineSegs = 5;
      for (let i = 0; i < goalLineSegs; i++) {
        const vStart = 46 - i * (47.2 / goalLineSegs);
        const vEnd = 46 - (i + 1) * (47.2 / goalLineSegs);
        draw3DBannerSegment(
          p3d(-1.4, vStart, 0),
          p3d(-1.4, vEnd, 0),
          p3d(-1.4, vEnd, 1.05),
          p3d(-1.4, vStart, 1.05),
          i
        );
      }

      // Vallas LED a lo largo de la banda lejana (desde u = -1.4 hasta u = 34)
      const touchLineSegs = 3;
      for (let i = 0; i < touchLineSegs; i++) {
        const uStart = -1.4 + i * (35.4 / touchLineSegs);
        const uEnd = -1.4 + (i + 1) * (35.4 / touchLineSegs);
        draw3DBannerSegment(
          p3d(uStart, -1.2, 0),
          p3d(uEnd, -1.2, 0),
          p3d(uEnd, -1.2, 1.05),
          p3d(uStart, -1.2, 1.05),
          i + 1
        );
      }

      // 4. LÍNEAS DE CAL EN PERSPECTIVA 3D EXACTA
      ctx.strokeStyle = "rgba(255, 255, 255, 0.88)";
      ctx.lineWidth = 1.8 * sc;
      ctx.lineJoin = "round";

      const drawPitchLine3D = (u1, v1, u2, v2) => {
        const p1 = p3d(u1, v1, 0);
        const p2 = p3d(u2, v2, 0);
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      };

      // Línea de gol (u = 0) y línea de banda lejana (v = 0)
      drawPitchLine3D(0, 0, 0, 58);
      drawPitchLine3D(0, 0, 42, 0);

      // Área Grande (18 yardas: u = 0..16.5, v = 13.84..54.16)
      drawPitchLine3D(0, 13.84, 16.5, 13.84);
      drawPitchLine3D(16.5, 13.84, 16.5, 54.16);
      drawPitchLine3D(16.5, 54.16, 0, 54.16);

      // Área Pequeña (6 yardas: u = 0..5.5, v = 24.84..43.16)
      drawPitchLine3D(0, 24.84, 5.5, 24.84);
      drawPitchLine3D(5.5, 24.84, 5.5, 43.16);
      drawPitchLine3D(5.5, 43.16, 0, 43.16);

      // Punto de penalti (u = 11.0, v = 34.0)
      const penSpot = p3d(11.0, 34.0, 0);
      ctx.fillStyle = "rgba(255, 255, 255, 0.92)";
      ctx.beginPath();
      ctx.ellipse(penSpot.x, penSpot.y, 2.2 * sc, 1.3 * sc, -0.2, 0, Math.PI * 2);
      ctx.fill();

      // Semicírculo del área grande (D-Arc: radio 9.15m desde (11, 34), para u >= 16.5)
      ctx.beginPath();
      const maxAngle = Math.acos((16.5 - 11.0) / 9.15); // ~0.926 rad
      const arcSteps = 28;
      for (let s = 0; s <= arcSteps; s++) {
        const ang = -maxAngle + (s / arcSteps) * (2 * maxAngle);
        const au = 11.0 + Math.cos(ang) * 9.15;
        const av = 34.0 + Math.sin(ang) * 9.15;
        const ap = p3d(au, av, 0);
        if (s === 0) ctx.moveTo(ap.x, ap.y);
        else ctx.lineTo(ap.x, ap.y);
      }
      ctx.stroke();

      // Arco de córner en (0, 0) y banderín de córner
      ctx.beginPath();
      for (let s = 0; s <= 10; s++) {
        const ang = (s / 10) * (Math.PI / 2);
        const cp = p3d(Math.cos(ang) * 1.2, Math.sin(ang) * 1.2, 0);
        if (s === 0) ctx.moveTo(cp.x, cp.y);
        else ctx.lineTo(cp.x, cp.y);
      }
      ctx.stroke();

      const cFlagBot = p3d(0, 0, 0);
      const cFlagTop = p3d(0, 0, 1.5);
      ctx.strokeStyle = "#f8fafc";
      ctx.lineWidth = 1.2 * sc;
      ctx.beginPath();
      ctx.moveTo(cFlagBot.x, cFlagBot.y);
      ctx.lineTo(cFlagTop.x, cFlagTop.y);
      ctx.stroke();
      ctx.fillStyle = "#ef4444";
      ctx.beginPath();
      ctx.moveTo(cFlagTop.x, cFlagTop.y);
      ctx.lineTo(cFlagTop.x + 4.5 * sc, cFlagTop.y + 1.8 * sc);
      ctx.lineTo(cFlagTop.x, cFlagTop.y + 3.6 * sc);
      ctx.closePath();
      ctx.fill();

      // 5. PORTERÍA 3D CON CAJA DE RED PROFUNDA (u = 0, v = 30.34..37.66, z = 0..2.44)
      const vPostRight = 30.34; // Poste derecho (más cercano al córner superior)
      const vPostLeft = 37.66;  // Poste izquierdo (más cercano al primer plano inferior-izquierdo)
      const goalDepthU = -2.15; // Profundidad hacia atrás de la red

      const pFrontR_bot = p3d(0, vPostRight, 0);
      const pFrontR_top = p3d(0, vPostRight, 2.44);
      const pFrontL_bot = p3d(0, vPostLeft, 0);
      const pFrontL_top = p3d(0, vPostLeft, 2.44);

      const isGoalScored = outcome === "GOAL" && elapsed >= 12.5;
      const netRipple = isGoalScored ? Math.max(0, 1 - (elapsed - 12.5) * 0.45) * Math.sin((elapsed - 12.5) * 18) * 0.35 : 0;

      const pBackR_bot = p3d(goalDepthU - netRipple, vPostRight, 0);
      const pBackR_top = p3d(goalDepthU - netRipple, vPostRight, 2.38);
      const pBackL_bot = p3d(goalDepthU - netRipple, vPostLeft, 0);
      const pBackL_top = p3d(goalDepthU - netRipple, vPostLeft, 2.38);

      // Sombra de los postes y red en el césped
      ctx.strokeStyle = "rgba(0, 20, 5, 0.28)";
      ctx.lineWidth = 2.5 * sc;
      ctx.beginPath();
      ctx.moveTo(pFrontL_bot.x, pFrontL_bot.y);
      ctx.lineTo(pBackL_bot.x, pBackL_bot.y);
      ctx.lineTo(pBackR_bot.x, pBackR_bot.y);
      ctx.lineTo(pFrontR_bot.x, pFrontR_bot.y);
      ctx.stroke();

      // Soportes traseros oscuros/metálicos de la red
      ctx.strokeStyle = "rgba(148, 163, 184, 0.75)";
      ctx.lineWidth = 1.6 * sc;
      ctx.beginPath();
      ctx.moveTo(pFrontR_top.x, pFrontR_top.y);
      ctx.lineTo(pBackR_top.x, pBackR_top.y);
      ctx.lineTo(pBackR_bot.x, pBackR_bot.y);
      ctx.moveTo(pFrontL_top.x, pFrontL_top.y);
      ctx.lineTo(pBackL_top.x, pBackL_top.y);
      ctx.lineTo(pBackL_bot.x, pBackL_bot.y);
      ctx.moveTo(pBackL_bot.x, pBackL_bot.y);
      ctx.lineTo(pBackR_bot.x, pBackR_bot.y);
      ctx.moveTo(pBackL_top.x, pBackL_top.y);
      ctx.lineTo(pBackR_top.x, pBackR_top.y);
      ctx.stroke();

      // Función auxiliar para tejer malla 3D en un cuadrilátero de la red
      const drawNetQuadMesh = (qTL, qTR, qBR, qBL, cols, rows, alpha) => {
        ctx.fillStyle = `rgba(241, 245, 249, ${alpha * 0.45})`;
        ctx.beginPath();
        ctx.moveTo(qTL.x, qTL.y);
        ctx.lineTo(qTR.x, qTR.y);
        ctx.lineTo(qBR.x, qBR.y);
        ctx.lineTo(qBL.x, qBL.y);
        ctx.closePath();
        ctx.fill();

        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.lineWidth = 0.75 * sc;
        ctx.beginPath();
        for (let c = 0; c <= cols; c++) {
          const tc = c / cols;
          const sx = lerp(qTL.x, qTR.x, tc);
          const sy = lerp(qTL.y, qTR.y, tc);
          const ex = lerp(qBL.x, qBR.x, tc);
          const ey = lerp(qBL.y, qBR.y, tc);
          ctx.moveTo(sx, sy);
          ctx.lineTo(ex, ey);
        }
        for (let r = 0; r <= rows; r++) {
          const tr = r / rows;
          const sx = lerp(qTL.x, qBL.x, tr);
          const sy = lerp(qTL.y, qBL.y, tr);
          const ex = lerp(qTR.x, qBR.x, tr);
          const ey = lerp(qTR.y, qBR.y, tr);
          ctx.moveTo(sx, sy);
          ctx.lineTo(ex, ey);
        }
        ctx.stroke();
      };

      // Red lateral derecha (fondo), red trasera, red superior (techo) y red lateral izquierda (primer plano)
      drawNetQuadMesh(pBackR_top, pFrontR_top, pFrontR_bot, pBackR_bot, 7, 10, 0.36);
      drawNetQuadMesh(pBackL_top, pBackR_top, pBackR_bot, pBackL_bot, 22, 10, 0.44);
      drawNetQuadMesh(pBackL_top, pBackR_top, pFrontR_top, pFrontL_top, 20, 6, 0.38);

      // Función que dibuja el marco frontal blanco brillante (postes y larguero) y el lateral izquierdo de la red
      const drawGoalFrontFrame = () => {
        drawNetQuadMesh(pBackL_top, pFrontL_top, pFrontL_bot, pBackL_bot, 7, 10, 0.42);

        // Postes y larguero cilíndricos blancos con volumen
        ctx.strokeStyle = "rgba(15, 23, 42, 0.25)";
        ctx.lineWidth = 4.6 * sc;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.beginPath();
        ctx.moveTo(pFrontL_bot.x, pFrontL_bot.y);
        ctx.lineTo(pFrontL_top.x, pFrontL_top.y);
        ctx.lineTo(pFrontR_top.x, pFrontR_top.y);
        ctx.lineTo(pFrontR_bot.x, pFrontR_bot.y);
        ctx.stroke();

        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 3.4 * sc;
        ctx.beginPath();
        ctx.moveTo(pFrontL_bot.x, pFrontL_bot.y);
        ctx.lineTo(pFrontL_top.x, pFrontL_top.y);
        ctx.lineTo(pFrontR_top.x, pFrontR_top.y);
        ctx.lineTo(pFrontR_bot.x, pFrontR_bot.y);
        ctx.stroke();
      };

      // 6. COREOGRAFÍA 3D DE LOS 15 SEGUNDOS DE LA JUGADA EN COORDENADAS DEL CAMPO (u, v, z)
      // - u = distancia a línea de gol (0 = portería, 11 = penalti, 16.5 = frontal área, 22 = zona de disparo #20)
      // - v = posición lateral (0 = banda sup-dcha, 34 = centro portería, 42 = interior izquierdo primer plano)

      // 6.1 Pivote organizador (#6)
      let pivU = 29.0, pivV = 30.0, pivPose = "DRIBBLE";
      if (elapsed < 2.2) {
        const t = elapsed / 2.2;
        pivU = lerp(29.5, 26.0, t);
        pivV = lerp(31.0, 27.5, t);
        pivPose = "DRIBBLE";
      } else if (elapsed < 2.8) {
        pivU = 26.0; pivV = 27.5;
        pivPose = "PASS_DELIVERY";
      } else if (elapsed < 8.5) {
        const t = (elapsed - 2.8) / 5.7;
        pivU = lerp(26.0, 22.5, t);
        pivV = lerp(27.5, 24.0, t);
        pivPose = "RUNNING_UP";
      } else {
        pivU = 22.5; pivV = 24.0;
        pivPose = (elapsed > 12.5 && outcome === "GOAL") ? "CELEBRATE_JUMP" : "READY";
      }

      // 6.2 Extremo / Creador por banda (#7)
      let winU = 23.0, winV = 14.0, winPose = "RUNNING_UP";
      if (elapsed < 3.8) {
        const t = elapsed / 3.8;
        winU = lerp(24.0, 19.5, t);
        winV = lerp(15.5, 13.5, t);
        winPose = "RUNNING_UP";
      } else if (elapsed < 4.5) {
        winU = 19.5; winV = 13.5;
        winPose = "CONTROL";
      } else if (elapsed < 8.5) {
        const t = (elapsed - 4.5) / 4.0;
        winU = lerp(19.5, 13.5, t);
        winV = lerp(13.5, 18.0, t);
        winPose = "DRIBBLE";
      } else if (elapsed < 9.2) {
        winU = 13.5; winV = 18.0;
        winPose = "PASS_DELIVERY";
      } else {
        winU = lerp(13.5, 11.5, Math.min(1, (elapsed - 9.2) / 3.0));
        winV = lerp(18.0, 19.5, Math.min(1, (elapsed - 9.2) / 3.0));
        winPose = (elapsed > 12.5 && outcome === "GOAL") ? "CELEBRATE_JUMP" : "READY";
      }

      // 6.3 Lanzador / Rematador estrella en la frontal izquierda (#20 / #9 - posición exacta del jugador #20 en la foto)
      let strU = 23.5, strV = 42.5, strPose = "RUNNING_UP";
      if (elapsed < 4.5) {
        strU = lerp(24.5, 22.5, elapsed / 4.5);
        strV = lerp(43.5, 42.0, elapsed / 4.5);
        strPose = "RUNNING_UP";
      } else if (elapsed < 8.5) {
        const t = (elapsed - 4.5) / 4.0;
        strU = lerp(22.5, 19.2, t);
        strV = lerp(42.0, 41.2, t);
        strPose = "SPRINT";
      } else if (elapsed < 10.4) {
        strU = 19.2; strV = 41.2;
        strPose = "READY";
      } else if (elapsed < 11.0) {
        strU = 19.0; strV = 41.0;
        strPose = "CONTROL";
      } else if (elapsed < 11.5) {
        strU = 18.6; strV = 40.8;
        strPose = "WINDUP_SHOT";
      } else if (elapsed < 12.6) {
        strU = 18.3; strV = 40.5;
        strPose = "SHOT_FOLLOW_THROUGH";
      } else {
        strU = 18.3; strV = 40.5;
        strPose = outcome === "GOAL" ? "CELEBRATE_JUMP" : "HANDS_ON_HEAD";
      }

      // 6.4 Delantero / Atacantes dentro del área buscando el remate o arrastrando marcas (como los 4 atacantes azules en el área de la foto)
      const atkBox1U = lerp(13.0, 9.8, Math.min(1, elapsed / 10));
      const atkBox1V = lerp(38.0, 36.2, Math.min(1, elapsed / 10));
      const atkBox2U = lerp(14.5, 10.6, Math.min(1, elapsed / 10));
      const atkBox2V = lerp(33.5, 32.0, Math.min(1, elapsed / 10));
      const atkBox3U = lerp(15.2, 11.2, Math.min(1, elapsed / 10));
      const atkBox3V = lerp(28.5, 27.5, Math.min(1, elapsed / 10));

      // 6.5 Defensores en el área y barrera de 3 hombres (idéntico a la foto de referencia)
      // Barrera de 3 defensores rojos frente al lanzador #20 (en torno a u = 11.5..12.5, v = 40.5..43.2)
      const wallBaseU = 11.6;
      const wall1V = 43.2;
      const wall2V = 41.8;
      const wall3V = 40.4;
      const wallPose = (elapsed >= 10.5 && elapsed <= 12.6)
        ? (outcome === "BLOCK" ? "SLIDE_BLOCK" : "WALL_GUARD")
        : "JOCKEY";

      // Defensores marcando dentro del área (como los 5 defensores rojos dentro del área en la foto)
      const defBox1U = lerp(9.5, 7.2, Math.min(1, elapsed / 10));
      const defBox1V = 38.2;
      const defBox2U = lerp(9.8, 7.6, Math.min(1, elapsed / 10));
      const defBox2V = 34.5;
      const defBox3U = lerp(10.2, 8.2, Math.min(1, elapsed / 10));
      const defBox3V = 30.8;
      const defBox4U = lerp(10.5, 8.5, Math.min(1, elapsed / 10));
      const defBox4V = 24.8;
      const defBox5U = lerp(11.2, 9.2, Math.min(1, elapsed / 10));
      const defBox5V = 22.5;

      // Jugador rival descolgado abajo a la derecha (como el jugador rojo en la esquina inferior derecha de la foto)
      const trailingDefU = 31.5;
      const trailingDefV = 39.5;

      // Árbitro principal en la media luna del área (vestido de negro/gris oscuro como en la foto) y Juez de línea en banda
      const refU = 15.8;
      const refV = 25.0;
      const linesmanU = 8.2;
      const linesmanV = -0.5;

      // 6.6 Guardameta bajo palos (u = 0.8, v = 34.0)
      let gkU = 0.85, gkV = 34.0, gkZ = 0, gkPose = "GK_READY";
      const targetShotV = targetCorner.includes("LEFT") ? (vPostLeft - 0.85) : (vPostRight + 0.85);
      const targetShotZ = targetCorner.includes("TOP") ? 2.05 : 0.45;
      const isDiveLeft = targetShotV > 34.0; // Hacia el poste izquierdo (abajo-izquierda en pantalla)

      if (elapsed < 11.5) {
        gkU = 0.85;
        gkV = 34.0 + Math.sin(now * 0.004) * 0.6;
        gkPose = "GK_READY";
      } else {
        const shotProgress = Math.min(1.0, (elapsed - 11.5) / 0.95);
        if (outcome === "SAVE") {
          if (shotProgress < 0.82) {
            const dp = shotProgress / 0.82;
            gkU = 0.95;
            gkV = lerp(34.0, targetShotV, dp);
            gkZ = Math.sin(dp * Math.PI) * (targetCorner.includes("TOP") ? 1.15 : 0.45);
            gkPose = isDiveLeft ? "DIVE_LEFT" : "DIVE_RIGHT";
          } else {
            gkU = 0.95;
            gkV = targetShotV;
            gkZ = 0;
            gkPose = isDiveLeft ? "GROUND_LEFT" : "GROUND_RIGHT";
          }
        } else if (outcome === "GOAL") {
          if (shotProgress < 0.88) {
            const dp = shotProgress / 0.88;
            gkU = 0.85;
            gkV = lerp(34.0, lerp(34.0, targetShotV, 0.65), dp);
            gkZ = Math.sin(dp * Math.PI) * 0.65;
            gkPose = isDiveLeft ? "DIVE_LEFT" : "DIVE_RIGHT";
          } else {
            gkU = 0.85;
            gkV = lerp(34.0, targetShotV, 0.65);
            gkPose = "CONCEDED";
          }
        } else if (outcome === "POST") {
          if (shotProgress < 0.85) {
            gkV = lerp(34.0, targetShotV, (shotProgress / 0.85) * 0.7);
            gkPose = isDiveLeft ? "DIVE_LEFT" : "DIVE_RIGHT";
          } else {
            gkPose = "GK_READY";
          }
        } else if (outcome === "WIDE") {
          gkV = 34.0 + (wideDirection === "LEFT" ? 1.4 : -1.4);
          gkPose = "GK_READY";
        } else {
          gkPose = "GK_READY";
        }
      }

      // 6.7 TRAYECTORIA 3D DEL BALÓN (100% SINCRONIZADA CON EL RESULTADO DEL MOTOR)
      let ballU = pivU, ballV = pivV, ballZ = 0;
      if (elapsed < 2.2) {
        ballU = pivU - 0.6;
        ballV = pivV + 0.5;
        ballZ = 0;
      } else if (elapsed < 3.8) {
        const t = (elapsed - 2.2) / 1.6;
        ballU = lerp(25.4, 19.5, t);
        ballV = lerp(28.0, 14.2, t);
        ballZ = 0;
      } else if (elapsed < 4.5) {
        ballU = winU - 0.5;
        ballV = winV + 0.6;
        ballZ = 0;
      } else if (elapsed < 8.5) {
        ballU = winU - 0.6;
        ballV = winV + 0.7;
        ballZ = 0;
      } else if (elapsed < 10.4) {
        const t = (elapsed - 8.5) / 1.9;
        ballU = lerp(13.2, 18.8, t);
        ballV = lerp(18.5, 41.4, t);
        ballZ = Math.sin(t * Math.PI) * 0.45;
      } else if (elapsed < 11.5) {
        // Balón plantado frente al pie izquierdo del lanzador #20 (exacto a la foto)
        ballU = strU - 0.65;
        ballV = strV + 1.05;
        ballZ = 0;
      } else {
        const shotProg = Math.min(1.0, (elapsed - 11.5) / 0.95);
        const startU = 17.65;
        const startV = 41.55;

        if (outcome === "GOAL") {
          if (shotProg < 1.0) {
            ballU = lerp(startU, -0.35, shotProg);
            ballV = lerp(startV, targetShotV, shotProg);
            ballZ = lerp(0, targetShotZ, shotProg) + Math.sin(shotProg * Math.PI) * 0.85;
          } else {
            const dropP = Math.min(1.0, (elapsed - 12.45) / 1.1);
            ballU = lerp(-0.35, -1.65, dropP * 0.7);
            ballV = targetShotV + Math.sin(dropP * 5) * 0.35;
            ballZ = Math.max(0, lerp(targetShotZ, 0, dropP));
          }
        } else if (outcome === "SAVE") {
          if (shotProg < 0.82) {
            const sp = shotProg / 0.82;
            ballU = lerp(startU, 0.85, sp);
            ballV = lerp(startV, targetShotV, sp);
            ballZ = lerp(0, targetShotZ, sp) + Math.sin(sp * Math.PI) * 0.65;
          } else {
            // Despeje del portero por línea de fondo a córner
            const defP = Math.min(1.5, (elapsed - 12.28) / 1.2);
            const cornerDir = isDiveLeft ? 1 : -1;
            ballU = lerp(0.85, -2.5, defP);
            ballV = targetShotV + cornerDir * defP * 6.5;
            ballZ = Math.max(0, lerp(targetShotZ, 0.2, defP));
          }
        } else if (outcome === "POST") {
          const postV = targetCorner.includes("LEFT") ? vPostLeft : vPostRight;
          const postZ = targetCorner.includes("TOP") ? 2.42 : 1.35;
          if (shotProg < 0.88) {
            const sp = shotProg / 0.88;
            ballU = lerp(startU, 0, sp);
            ballV = lerp(startV, postV, sp);
            ballZ = lerp(0, postZ, sp) + Math.sin(sp * Math.PI) * 0.55;
          } else {
            const rebP = Math.min(1.4, (elapsed - 12.34) / 1.2);
            ballU = lerp(0, 7.5, rebP);
            ballV = postV + (postV > 34 ? 1 : -1) * rebP * 4.2;
            ballZ = Math.max(0, lerp(postZ, 0, rebP));
          }
        } else if (outcome === "WIDE") {
          const wideV = wideDirection === "LEFT" ? (vPostLeft + 4.8) : (wideDirection === "RIGHT" ? (vPostRight - 4.8) : 34.0);
          const wideZ = wideDirection === "HIGH" ? 4.2 : 1.6;
          const totalP = Math.min(1.5, (elapsed - 11.5) / 1.0);
          ballU = lerp(startU, -2.8, totalP);
          ballV = lerp(startV, wideV, totalP);
          ballZ = Math.max(0, lerp(0, wideZ, Math.min(1, totalP)) + Math.sin(Math.min(1, totalP) * Math.PI) * 0.7);
        } else if (outcome === "BLOCK") {
          if (shotProg < 0.38) {
            const bp = shotProg / 0.38;
            ballU = lerp(startU, wallBaseU, bp);
            ballV = lerp(startV, wall2V, bp);
            ballZ = Math.sin(bp * Math.PI) * 0.55;
          } else {
            const rebP = Math.min(1.2, (shotProg - 0.38) / 0.62);
            ballU = lerp(wallBaseU, 15.8, rebP);
            ballV = lerp(wall2V, 45.0, rebP);
            ballZ = Math.max(0, (1 - rebP) * 0.4);
          }
        }
      }

      // 7. CONSTRUCCIÓN Y ORDENACIÓN POR PROFUNDIDAD (PAINTER'S ALGORITHM)
      const createEnt = (id, u, v, z, kit, num, pose, facing, opts = {}) => {
        const pt = p3d(u, v, z);
        return {
          id,
          x: pt.x,
          y: pt.groundY,
          zPx: pt.groundY - pt.y,
          sc: pt.sc,
          kit,
          number: num,
          pose,
          facing,
          elapsed,
          ...opts
        };
      };

      const activePhase = elapsed < 2.8 ? "PIVOT" : (elapsed < 9.2 ? "WINGER" : "STRIKER");

      const sceneEntities = [
        // Guardameta bajo palos
        createEnt("GK", gkU, gkV, gkZ, defKit, 1, gkPose, "FRONT_RIGHT", { isKeeper: true, name: hlData.goalkeeper?.name }),
        // Línea defensiva dentro del área (5 defensores como en la imagen)
        createEnt("DEF_BOX1", defBox1U, defBox1V, 0, defKit, 2, "JOCKEY", "FRONT_RIGHT"),
        createEnt("DEF_BOX2", defBox2U, defBox2V, 0, defKit, 4, "JOCKEY", "FRONT_RIGHT", { name: hlData.defender?.name }),
        createEnt("DEF_BOX3", defBox3U, defBox3V, 0, defKit, 5, "JOCKEY", "FRONT_RIGHT"),
        createEnt("DEF_BOX4", defBox4U, defBox4V, 0, defKit, 6, "JOCKEY", "FRONT_RIGHT"),
        createEnt("DEF_BOX5", defBox5U, defBox5V, 0, defKit, 3, "JOCKEY", "FRONT_RIGHT"),
        // Barrera de 3 hombres frente al balón
        createEnt("WALL1", wallBaseU - 0.3, wall1V, 0, defKit, 8, wallPose, "FRONT_RIGHT"),
        createEnt("WALL2", wallBaseU, wall2V, 0, defKit, 14, wallPose, "FRONT_RIGHT"),
        createEnt("WALL3", wallBaseU + 0.3, wall3V, 0, defKit, 18, wallPose, "FRONT_RIGHT"),
        // Defensor descolgado en esquina inferior derecha (exacto a la foto)
        createEnt("DEF_TRAIL", trailingDefU, trailingDefV, 0, defKit, 17, "READY", "BACK_LEFT"),

        // Atacantes al remate en el área y en creación
        createEnt("ATK_BOX1", atkBox1U, atkBox1V, 0, atkKit, 9, elapsed > 12.5 && outcome === "GOAL" ? "CELEBRATE_JUMP" : "RUNNING_UP", "BACK_LEFT"),
        createEnt("ATK_BOX2", atkBox2U, atkBox2V, 0, atkKit, 11, elapsed > 12.5 && outcome === "GOAL" ? "CELEBRATE_JUMP" : "RUNNING_UP", "BACK_LEFT"),
        createEnt("ATK_BOX3", atkBox3U, atkBox3V, 0, atkKit, 8, "RUNNING_UP", "BACK_LEFT"),
        createEnt("WINGER", winU, winV, 0, atkKit, 7, winPose, "BACK_LEFT", { isActiveCarrier: activePhase === "WINGER", name: hlData.passer?.name }),
        createEnt("PIVOT", pivU, pivV, 0, atkKit, 10, pivPose, "BACK_LEFT", { isActiveCarrier: activePhase === "PIVOT", name: hlData.pivot?.name }),
        // Protagonista del disparo (#20 en primer plano)
        createEnt("STRIKER", strU, strV, 0, atkKit, 20, strPose, "BACK_LEFT", { isActiveCarrier: activePhase === "STRIKER", name: hlData.shooter?.name }),

        // Árbitro principal en el semicírculo y Juez de línea en banda
        createEnt("REFEREE", refU, refV, 0, defKit, 99, "READY", "FRONT_RIGHT", { isReferee: true }),
        createEnt("LINESMAN", linesmanU, linesmanV, 0, defKit, 98, "READY", "FRONT_RIGHT", { isLinesman: true }),

        // Balón 3D
        (() => {
          const bPt = p3d(ballU, ballV, ballZ);
          return {
            id: "BALL",
            isBall: true,
            x: bPt.x,
            y: bPt.groundY,
            zPx: bPt.groundY - bPt.y,
            r: 4.1 * bPt.sc,
            sc: bPt.sc
          };
        })()
      ];

      // Ordenar por coordenada Y en pantalla para superposición 3D natural
      sceneEntities.sort((a, b) => a.y - b.y);

      let goalFrameDrawn = false;
      sceneEntities.forEach(ent => {
        if (!goalFrameDrawn && ent.y > pFrontL_bot.y) {
          drawGoalFrontFrame();
          goalFrameDrawn = true;
        }
        if (ent.isBall) {
          drawFrontalBall(ctx, ent.x, ent.y, ent.zPx, ent.r, ent.sc);
        } else {
          drawFrontalAthlete(ctx, ent);
        }
      });
      if (!goalFrameDrawn) {
        drawGoalFrontFrame();
      }

      // Chispazo de impacto en el poste si da a la madera
      if (outcome === "POST" && elapsed >= 12.3 && elapsed <= 13.1) {
        const hitPt = p3d(0, targetCorner.includes("LEFT") ? vPostLeft : vPostRight, targetCorner.includes("TOP") ? 2.42 : 1.35);
        ctx.fillStyle = "rgba(254, 240, 138, 0.92)";
        ctx.beginPath();
        ctx.arc(hitPt.x, hitPt.y, 11 * sc, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function drawPitch() {
      if (!ctx || !canvas) return;
      resizeCanvas();
      const w = canvas.width;
      const h = canvas.height;

      // Si hay una jugada clave activa, dibujamos la cámara frontal de acción (unos 14 segundos)
      if (currentHighlightData && !isReplaying) {
        drawFrontalHighlightScene(ctx, w, h, currentHighlightData);
        if (!simulator.isFinished) {
          requestAnimationFrame(drawPitch);
        }
        return;
      }

      // 1. Seguimiento cinemático de cámara TV Broadcast FM26 con Lookahead y Zoom dinámico
      const activeBallX = (isReplaying && replayFrames.length > 0 && replayFrames[Math.floor(replayFrameIndex)])
        ? (replayFrames[Math.floor(replayFrameIndex)].ball?.x || 50)
        : (simulator.ball?.x || 50);
      const activeBallY = (isReplaying && replayFrames.length > 0 && replayFrames[Math.floor(replayFrameIndex)])
        ? (replayFrames[Math.floor(replayFrameIndex)].ball?.y || 50)
        : (simulator.ball?.y || 50);

      // Lookahead: la cámara se anticipa sutilmente al sentido del ataque
      const ballVelX = activeBallX - lastBallX;
      const ballVelY = activeBallY - lastBallY;
      const lookaheadX = Math.max(-8, Math.min(8, ballVelX * 10));
      const lookaheadY = Math.max(-5, Math.min(5, ballVelY * 8));

      let targetCamX = Math.max(24, Math.min(76, activeBallX + lookaheadX));
      let targetCamY = Math.max(32, Math.min(68, activeBallY + lookaheadY));

      const isBoxPlay = (activeBallX < 24 || activeBallX > 76);
      const isHighlight = (currentHighlightStartFrame !== null || isReplaying || simulator.isHighlightRunning || currentHighlightData !== null);
      const isActionCam = cameraMode === "action";

      if (isHighlight && currentHighlightData) {
        // Enfoque táctico centrado en el área y canal activo donde sucede la jugada
        if (currentHighlightData.attackingSide === "home") {
          targetCamX = Math.max(66, Math.min(88, activeBallX + 5));
        } else {
          targetCamX = Math.max(12, Math.min(34, activeBallX - 5));
        }
        targetCamY = Math.max(32, Math.min(68, activeBallY));
      }

      cameraPitchX += (targetCamX - cameraPitchX) * 0.068;
      cameraPitchY += (targetCamY - cameraPitchY) * 0.068;

      // Zoom dinámico estilo Football Manager: acercamiento cinemático en jugadas clave
      const targetZoom = isActionCam ? 1.68 : (isHighlight ? 1.60 : (isBoxPlay ? 1.24 : 1.0));
      cameraZoom += (targetZoom - cameraZoom) * 0.055;

      // Desvanecimiento físico de ondulación de red tras gol
      netRippleH *= 0.95;
      netRippleA *= 0.95;

      // Giro de rotación del balón y estela de velocidad en tiros potentes
      const bMoveDist = Math.hypot(ballVelX, ballVelY);
      ballRotation += (bMoveDist * 0.38) + 0.03;

      if (bMoveDist > 1.3 || (simulator.ball?.z || 0) > 1.8) {
        ballTrail.push({
          x: activeBallX,
          y: activeBallY,
          z: simulator.ball?.z || 0
        });
        if (ballTrail.length > 7) ballTrail.shift();
      } else {
        if (ballTrail.length > 0) ballTrail.shift();
      }

      lastBallX = activeBallX;
      lastBallY = activeBallY;

      // 2. Dibujar estadio, gradas, focos, vallas y terreno de juego en perspectiva 3D
      draw3DPitch(ctx, w, h);

      // Dibujar vector de pase táctico animado durante jugada clave
      if (currentHighlightData && currentHighlightData.passStart && currentHighlightData.passEnd && currentHighlightData.phase !== "BUILDUP") {
        const pStart = toScreen3D(currentHighlightData.passStart.x, currentHighlightData.passStart.y, 0, w, h);
        const pEnd = toScreen3D(currentHighlightData.passEnd.x, currentHighlightData.passEnd.y, 0, w, h);

        ctx.save();
        ctx.setLineDash([8, 6]);
        ctx.lineDashOffset = -performance.now() * 0.025;
        ctx.strokeStyle = "rgba(56, 189, 248, 0.9)";
        ctx.lineWidth = 2.4 * pStart.scale;
        ctx.beginPath();
        ctx.moveTo(pStart.groundX, pStart.groundY);
        ctx.lineTo(pEnd.groundX, pEnd.groundY);
        ctx.stroke();

        // Diana luminosa en el punto de recepción del rematador
        const pulseR = (10 + Math.sin(performance.now() * 0.008) * 3) * pEnd.scale;
        ctx.strokeStyle = "rgba(52, 211, 153, 0.85)";
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.ellipse(pEnd.groundX, pEnd.groundY, pulseR, pulseR * 0.45, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      const entities = [];

      if (isReplaying && replayFrames.length > 0) {
        // MODO REPETICIÓN A CÁMARA LENTA (0.65x)
        const frame = replayFrames[Math.floor(replayFrameIndex)];
        if (frame) {
          // Identificar portador más cercano al balón en repetición
          let closestReplayP = null;
          let minReplayDist = 999;
          [...frame.home, ...frame.away].forEach(p => {
            const d = Math.hypot(p.curX - frame.ball.x, p.curY - frame.ball.y);
            if (d < minReplayDist) {
              minReplayDist = d;
              closestReplayP = p;
            }
          });

          frame.home.forEach(p => {
            const pt = toScreen3D(p.curX, p.curY, 0, w, h);
            entities.push({
              type: "player",
              playerId: p.id,
              roleName: p.roleName,
              side: "home",
              number: p.number,
              name: p.name,
              isKeeper: p.isKeeper,
              animPhase: p.animPhase || 0,
              facingX: p.facingX || 1,
              isCarrier: (p === closestReplayP && minReplayDist < 5.5),
              groundX: pt.groundX,
              groundY: pt.groundY,
              scale: pt.scale
            });
          });

          frame.away.forEach(p => {
            const pt = toScreen3D(p.curX, p.curY, 0, w, h);
            entities.push({
              type: "player",
              playerId: p.id,
              roleName: p.roleName,
              side: "away",
              number: p.number,
              name: p.name,
              isKeeper: p.isKeeper,
              animPhase: p.animPhase || 0,
              facingX: p.facingX || -1,
              isCarrier: (p === closestReplayP && minReplayDist < 5.5),
              groundX: pt.groundX,
              groundY: pt.groundY,
              scale: pt.scale
            });
          });

          const bPos = toScreen3D(frame.ball.x, frame.ball.y, frame.ball.z || 0, w, h);
          entities.push({
            type: "ball",
            groundX: bPos.groundX,
            groundY: bPos.groundY,
            screenX: bPos.screenX,
            screenY: bPos.screenY,
            scale: bPos.scale,
            z: frame.ball.z || 0
          });
        }

        replayFrameIndex += 0.65;
        if (replayFrameIndex >= replayFrames.length) {
          isReplaying = false;
        }
      } else {
        // MODO NORMAL EN DIRECTO (60 FPS FLUIDO ESTILO FOOTBALL MANAGER 26)
        // Interpolación continua y suave del balón
        simulator.ball.x += (simulator.ball.targetX - simulator.ball.x) * 0.16;
        simulator.ball.y += (simulator.ball.targetY - simulator.ball.y) * 0.16;
        if (simulator.ball.targetZ !== undefined) {
          simulator.ball.z += ((simulator.ball.targetZ || 0) - (simulator.ball.z || 0)) * 0.18;
          if (Math.abs((simulator.ball.z || 0) - (simulator.ball.targetZ || 0)) < 0.2) {
            simulator.ball.targetZ = 0;
          }
        } else {
          simulator.ball.z = 0;
        }

        // Buscar al futbolista que conduce o disputa el balón
        let closestLiveP = null;
        let minLiveDist = 999;
        [...simulator.home2D, ...simulator.away2D].forEach(p => {
          const d = Math.hypot(p.curX - simulator.ball.x, p.curY - simulator.ball.y);
          if (d < minLiveDist) {
            minLiveDist = d;
            closestLiveP = p;
          }
        });

        // Actualizar rótulo FM inferior cuando cambia el portador del balón (manteniendo el campo 100% limpio y visible)
        if (closestLiveP && minLiveDist < 5.0 && closestLiveP.player?.name) {
          if (lastCarrierPlayerId !== closestLiveP.player.id && !currentHighlightData && simulator.isRunning && !isKickoffInProgress) {
            lastCarrierPlayerId = closestLiveP.player.id;
            const pSide = closestLiveP.side === "home" ? (homeTeam.shortName || homeTeam.name) : (awayTeam.shortName || awayTeam.name);
            updateFMCommentary(`${closestLiveP.player.name} (${pSide}) conduce con el esférico...`, "MATCH ENGINE");
          }
        }

        // Interpolación y animación de carrera suave para jugadores locales
        simulator.home2D.forEach(p => {
          const dx = p.targetX - p.curX;
          const dy = p.targetY - p.curY;
          const dist = Math.hypot(dx, dy);
          p.curX += dx * 0.14;
          p.curY += dy * 0.14;
          if (Math.abs(dx) > 0.08) {
            p.facingX = dx > 0 ? 1 : -1;
          }
          p.animPhase = (p.animPhase || 0) + (dist > 0.12 ? 0.22 : 0.04);

          const pt = toScreen3D(p.curX, p.curY, 0, w, h);
          const pRole = simulator.getPlayerRole(p.player, "home");
          entities.push({
            type: "player",
            playerId: p.player?.id,
            roleName: pRole?.name || null,
            roleTag: pRole?.tag || null,
            side: "home",
            number: p.number,
            name: p.player?.name,
            isKeeper: p.isKeeper,
            animPhase: p.animPhase,
            facingX: p.facingX,
            isCarrier: (p === closestLiveP && minLiveDist < 5.5),
            groundX: pt.groundX,
            groundY: pt.groundY,
            scale: pt.scale
          });
        });

        // Interpolación y animación de carrera suave para jugadores visitantes
        simulator.away2D.forEach(p => {
          const dx = p.targetX - p.curX;
          const dy = p.targetY - p.curY;
          const dist = Math.hypot(dx, dy);
          p.curX += dx * 0.14;
          p.curY += dy * 0.14;
          if (Math.abs(dx) > 0.08) {
            p.facingX = dx > 0 ? 1 : -1;
          }
          p.animPhase = (p.animPhase || 0) + (dist > 0.12 ? 0.22 : 0.04);

          const pt = toScreen3D(p.curX, p.curY, 0, w, h);
          const pRole = simulator.getPlayerRole(p.player, "away");
          entities.push({
            type: "player",
            playerId: p.player?.id,
            roleName: pRole?.name || null,
            roleTag: pRole?.tag || null,
            side: "away",
            number: p.number,
            name: p.player?.name,
            isKeeper: p.isKeeper,
            animPhase: p.animPhase,
            facingX: p.facingX,
            isCarrier: (p === closestLiveP && minLiveDist < 5.5),
            groundX: pt.groundX,
            groundY: pt.groundY,
            scale: pt.scale
          });
        });

        const bPos = toScreen3D(simulator.ball.x, simulator.ball.y, simulator.ball.z || 0, w, h);
        entities.push({
          type: "ball",
          groundX: bPos.groundX,
          groundY: bPos.groundY,
          screenX: bPos.screenX,
          screenY: bPos.screenY,
          scale: bPos.scale,
          z: simulator.ball.z || 0
        });

        // Grabar snapshot para repeticiones mientras el juego esté activo y no en saque
        if (simulator.isRunning && !isKickoffInProgress) {
          replayBuffer.push({
            home: simulator.home2D.map(p => ({
              curX: p.curX,
              curY: p.curY,
              animPhase: p.animPhase,
              facingX: p.facingX,
              number: p.number,
              name: p.player?.name,
              id: p.player?.id,
              roleName: simulator.getPlayerRole(p.player, "home")?.name,
              isKeeper: p.isKeeper
            })),
            away: simulator.away2D.map(p => ({
              curX: p.curX,
              curY: p.curY,
              animPhase: p.animPhase,
              facingX: p.facingX,
              number: p.number,
              name: p.player?.name,
              id: p.player?.id,
              roleName: simulator.getPlayerRole(p.player, "away")?.name,
              isKeeper: p.isKeeper
            })),
            ball: { x: simulator.ball.x, y: simulator.ball.y, z: simulator.ball.z || 0 }
          });
          if (replayBuffer.length > 300) {
            replayBuffer.shift();
          }
        }
      }

      // Ordenar por profundidad (los que están más arriba en pantalla se dibujan primero)
      entities.sort((a, b) => a.groundY - b.groundY);

      // 3. Dibujar cada elemento en orden de profundidad
      entities.forEach(item => {
        if (item.type === "player") {
          drawRealisticPlayer3D(ctx, item);
        } else if (item.type === "ball") {
          drawBall3D(ctx, item);
        }
      });

      if (!simulator.isFinished) {
        requestAnimationFrame(drawPitch);
      }
    }
    requestAnimationFrame(drawPitch);

    // Eventos del Selector de Cámara FM26
    const camBtns = container.querySelectorAll(".btn-cam");
    camBtns.forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        cameraMode = btn.dataset.cam;
        camBtns.forEach(b => {
          b.className = b.dataset.cam === cameraMode
            ? "btn-cam px-2 py-0.5 rounded-md bg-emerald-500 text-white shadow transition"
            : "btn-cam px-2 py-0.5 rounded-md text-slate-400 hover:text-white transition";
        });
        const camLabel = cameraMode === "broadcast" ? "TV Retransmisión (Zoom Dinámico)" 
          : cameraMode === "action" ? "Acción FM (Primer Plano)" 
          : cameraMode === "tactical" ? "Vista Táctica Elevada" 
          : "Detrás de Portería";
        showMatchAlert({ text: `🎥 Cámara: ${camLabel}` });
      };
    });

    if (canvas) {
      canvas.onclick = () => {
        const modes = ["broadcast", "action", "tactical", "goal"];
        const curIdx = modes.indexOf(cameraMode);
        cameraMode = modes[(curIdx + 1) % modes.length];
        camBtns.forEach(b => {
          b.className = b.dataset.cam === cameraMode
            ? "btn-cam px-2 py-0.5 rounded-md bg-emerald-500 text-white shadow transition"
            : "btn-cam px-2 py-0.5 rounded-md text-slate-400 hover:text-white transition";
        });
        const camLabel = cameraMode === "broadcast" ? "TV Retransmisión (Zoom Dinámico)" 
          : cameraMode === "action" ? "Acción FM (Primer Plano)" 
          : cameraMode === "tactical" ? "Vista Táctica Elevada" 
          : "Detrás de Portería";
        showMatchAlert({ text: `🎥 Cámara: ${camLabel}` });
      };
    }

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
    }

    function handleHalfTimeSequence(htState) {
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
      content.textContent = alert.text;
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
      if (simulator.isSetPieceRunning) return;
      if (simulator.isHalfTime) {
        container.querySelector("#modal-halftime")?.classList.add("hidden");
        simulator.resumeSecondHalf();
        iconPP.textContent = "⏸";
        textPP.textContent = "Pausar";
        showMatchAlert({ text: "📣 ¡Comienza la 2ª Parte!" });
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

    container.querySelector("#btn-skip-end").onclick = () => {
      simulator.skipToEnd();
    };

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

    function openTacticsModal(isLive = false) {
      const wasRunning = simulator.isRunning;
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
      let htSelectedPlayerId = null;
      let htSubTab = "pitch"; // "pitch" o "style"
      let htPlayerRoles = { ...(gameState.userTactics.playerRoles || {}) };
      let htCustomPositions = JSON.parse(JSON.stringify(gameState.userTactics.customPositions || {}));
      let htInstructions = JSON.parse(JSON.stringify(
        (teamSide === "home" ? simulator.homeInstructions : simulator.awayInstructions) ||
        gameState.userTactics.instructions ||
        getDefaultTacticalInstructions()
      ));
      let showHTAllRoles = false;

      const startRemaining = isUserHome ? simulator.homeSubsRemaining : simulator.awaySubsRemaining;
      const startWindows = isUserHome ? simulator.homeWindowsRemaining : simulator.awayWindowsRemaining;

      function renderHTTactics() {
        const formation = FORMATIONS[htFormationKey] || FORMATIONS["4-3-3"];
        const allTeamPlayers = userTeam.players;
        const getPlayer = (id) => allTeamPlayers.find(p => p.id === id);

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
              <div class="slot-ht-player absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer flex flex-col items-center transition-transform active:scale-95 z-10"
                   style="left: ${effSlot.x}%; top: ${effSlot.y}%;"
                   data-player-id="${player.id}"
                   data-slot-index="${index}">
                <div class="w-9 h-9 rounded-full border-2 ${isSelected ? 'border-amber-400 bg-amber-500 text-black shadow-lg shadow-amber-400/50 scale-110 ring-2 ring-amber-300' : isNewSub ? 'border-emerald-400 bg-emerald-950 text-emerald-300 shadow-md ring-2 ring-emerald-500/50' : effSlot.isCustom ? 'border-amber-400 bg-slate-900 text-white shadow-md ring-1 ring-amber-400/80' : 'border-white/80 bg-slate-900 text-white shadow-md'} flex flex-col items-center justify-center relative transition-all">
                  <span class="text-[9px] font-black leading-none">${effRating}</span>
                  <span class="text-[7px] font-bold ${isNewSub ? 'text-emerald-400' : effSlot.isCustom ? 'text-amber-300 font-extrabold' : 'text-slate-300'} leading-none">${slot.label}</span>
                  <div class="absolute -bottom-1 w-5 h-1 bg-black/60 rounded-full overflow-hidden">
                    <div class="h-full ${player.energy > 70 ? 'bg-emerald-400' : player.energy > 50 ? 'bg-amber-400' : 'bg-red-500'}" style="width: ${player.energy || 100}%;"></div>
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
              </div>
            `;
          }).join('');

          pitchSlots.querySelectorAll(".slot-ht-player").forEach(el => {
            el.onclick = () => {
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

              rolePanel.innerHTML = `
                <div class="my-2 space-y-2 animate-fadeIn">
                  <!-- Ajuste de posición manual en descanso/directo -->
                  <div class="p-2.5 bg-slate-900 border border-amber-500/40 rounded-xl">
                    <div class="flex items-center justify-between mb-1.5 pb-1 border-b border-slate-800">
                      <div class="flex items-center gap-1.5">
                        <span class="text-sm">📍</span>
                        <span class="text-[10px] font-bold text-amber-400">Posición: ${posLabel}</span>
                      </div>
                      ${effSlot.isCustom ? `
                        <button id="btn-ht-reset-pos" class="text-[9.5px] font-bold text-rose-400 hover:text-rose-300 px-2 py-0.5 rounded bg-rose-950/70 border border-rose-800/80 active:scale-95 transition">
                          ↺ Restablecer
                        </button>
                      ` : ''}
                    </div>
                    <div class="grid grid-cols-2 gap-1.5">
                      <div class="flex items-center gap-1">
                        <button class="btn-ht-nudge-pos flex-1 py-1 px-1 bg-slate-800 hover:bg-slate-700 text-sky-300 font-bold text-[9.5px] rounded border border-slate-700 active:scale-95 transition" data-axis="y" data-delta="-5">
                          ▲ Adelantar (+DC)
                        </button>
                        <button class="btn-ht-nudge-pos flex-1 py-1 px-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-[9.5px] rounded border border-slate-700 active:scale-95 transition" data-axis="y" data-delta="5">
                          ▼ Retrasar (+MC)
                        </button>
                      </div>
                      <div class="flex items-center gap-1">
                        <button class="btn-ht-nudge-pos flex-1 py-1 px-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-[9.5px] rounded border border-slate-700 active:scale-95 transition" data-axis="x" data-delta="-5">
                          ◀ Izquierda
                        </button>
                        <button class="btn-ht-nudge-pos flex-1 py-1 px-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-[9.5px] rounded border border-slate-700 active:scale-95 transition" data-axis="x" data-delta="5">
                          ▶ Derecha
                        </button>
                      </div>
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
                      <button id="btn-ht-close-role-panel" class="text-slate-400 hover:text-white text-xs px-2 py-0.5 rounded bg-slate-800">✕</button>
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
                <div class="text-xs font-black text-amber-400 mt-0.5">${p.ovr}</div>
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
          htCustomPositions
        );

        if (!res.success) {
          alert(res.reason);
          return;
        }

        gameState.userTactics.formation = htFormationKey;
        gameState.userTactics.mentality = htMentality;
        gameState.userTactics.lineup = [...htLineupIds];
        gameState.userTactics.bench = [...htBenchIds];
        gameState.userTactics.playerRoles = { ...htPlayerRoles };
        gameState.userTactics.customPositions = { ...htCustomPositions };
        gameState.userTactics.instructions = JSON.parse(JSON.stringify(htInstructions));

        simulator.setTacticalInstructions(teamSide, htInstructions);

        if (teamSide === "home") {
          simulator.homePlayerRoles = { ...simulator.homePlayerRoles, ...htPlayerRoles };
        } else {
          simulator.awayPlayerRoles = { ...simulator.awayPlayerRoles, ...htPlayerRoles };
        }

        if (masterTacticsForNextMatches) {
          masterTacticsForNextMatches.formation = htFormationKey;
          masterTacticsForNextMatches.mentality = htMentality;
          masterTacticsForNextMatches.lineup = [...htLineupIds];
          masterTacticsForNextMatches.bench = [...htBenchIds];
          masterTacticsForNextMatches.playerRoles = { ...htPlayerRoles };
          masterTacticsForNextMatches.customPositions = { ...htCustomPositions };
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

      if (badgeType) {
        badgeType.textContent = isCorner 
          ? `🚩 CÓRNER A FAVOR (${spInfo.minute}')` 
          : `🎯 FALTA PELIGROSA (${spInfo.distanceMeters ? spInfo.distanceMeters + 'm · ' : ''}${spInfo.minute}')`;
        badgeType.className = isCorner
          ? "text-[10px] uppercase font-black text-sky-400 bg-sky-400/10 border border-sky-400/30 px-2.5 py-0.5 rounded-full"
          : "text-[10px] uppercase font-black text-amber-400 bg-amber-400/10 border border-amber-400/30 px-2.5 py-0.5 rounded-full";
      }
      if (title) {
        title.textContent = isCorner 
          ? "Pizarra Táctica · Saque de Esquina" 
          : `Pizarra Táctica · Falta a ${spInfo.distanceMeters || 24} metros`;
      }

      // Ubicación física del balón en la mini pizarra del área
      if (ballSpot) {
        if (isCorner) {
          const isLeft = spInfo.spot.y < 50;
          ballSpot.style.left = isLeft ? "12px" : "calc(100% - 24px)";
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
        { id: "NEAR_POST", label: "📐 Al Primer Palo", desc: "Envío tenso con rosca para prolongar" },
        { id: "FAR_POST", label: "📐 Al Segundo Palo", desc: "Balón templado al palo largo" },
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

      const zoneDefs = [
        { id: "NEAR_POST", name: "1er Palo", x: 26, y: 24, desc: "Anticipación", color: "text-amber-300" },
        { id: "PENALTY_SPOT", name: "Pto. Penalti", x: 50, y: 40, desc: "Rematador principal", color: "text-emerald-300" },
        { id: "FAR_POST", name: "2º Palo", x: 74, y: 24, desc: "Llegada desde atrás", color: "text-amber-300" },
        { id: "EDGE_BOX", name: "Frontal", x: 50, y: 64, desc: "Tiro de rechace", color: "text-sky-300" },
        { id: "SHORT_OPTION", name: "En Corto", x: (spInfo.spot.y < 50 ? 18 : 82), y: isCorner ? 26 : 58, desc: "Apoyo para pase", color: "text-indigo-300" },
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

          if (iconPP) iconPP.textContent = "⏸";
          if (textPP) textPP.textContent = "Pausar";

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
              if (iconPP) iconPP.textContent = "⏸";
              if (textPP) textPP.textContent = "Pausar";
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

      if (isUserSide) {
        // Pausar el simulador para que el usuario gestione la lesión obligatoria
        simulator.pause();
        const iconPP = container.querySelector("#pp-icon");
        const textPP = container.querySelector("#pp-text");
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
              openTacticsModal(true);
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
      // Sincronizar estados finales de energía y lesiones de ambos equipos con gameState
      if (result.homePlayers) {
        result.homePlayers.forEach(pSim => {
          const pReal = homeTeam.players.find(p => p.id === pSim.id);
          if (pReal) {
            pReal.energy = Math.round(pSim.energy !== undefined ? pSim.energy : 100);
            if (pSim.injury) pReal.injury = pSim.injury;
          }
        });
      }
      if (result.awayPlayers) {
        result.awayPlayers.forEach(pSim => {
          const pReal = awayTeam.players.find(p => p.id === pSim.id);
          if (pReal) {
            pReal.energy = Math.round(pSim.energy !== undefined ? pSim.energy : 100);
            if (pSim.injury) pReal.injury = pSim.injury;
          }
        });
      }

      // Sincronizar tarjetas y sanciones disciplinarias de ambos equipos
      if (result.cards) {
        const allMatchPlayers = [...homeTeam.players, ...awayTeam.players];
        if (result.cards.yellows) {
          Object.keys(result.cards.yellows).forEach(pId => {
            const pReal = allMatchPlayers.find(p => p.id === pId);
            if (pReal) {
              pReal.seasonYellows = (pReal.seasonYellows || 0) + 1;
              if (pReal.seasonYellows % 5 === 0 && !pReal.suspension) {
                pReal.suspension = { roundsLeft: 1, reason: "Ciclo de 5 Amarillas" };
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
              pReal.suspension = { roundsLeft: 1, reason: rCard?.reason || "Tarjeta Roja" };
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

      if (fScorers) {
        let itemsHtml = "";
        if (result.scorers.length > 0) {
          itemsHtml += result.scorers.map(s => `
            <div class="flex items-center justify-between text-slate-300 py-0.5">
              <span>⚽ <b>${s.playerName}</b> (${s.teamName})</span>
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
