// Vista de la Pizarra Táctica, Alineaciones y Estilos de Juego por Estados

import { FORMATIONS, MENTALITIES, calculateTeamAverages, calculateEffectiveRating, POSITION_ROLES, getAvailableRolesForPosition, getDefaultRoleForPosition, getRoleDetails, TACTICAL_PRESETS, TACTICAL_OPTIONS, getDefaultTacticalInstructions, detectMatchingPreset, getEffectiveSlotCoords, getPositionAdjustmentLabel, buildOptimalLineup } from "../engine/tactics.js";

export function renderTacticsView(container, gameState, onSaveTactics, onBackToHub) {
  const team = gameState.teams.find(t => t.id === gameState.userTeamId);
  const defaultOptimal = buildOptimalLineup(team);
  let tactics = gameState.userTactics || {
    formation: defaultOptimal.formationKey,
    mentality: "balanced",
    lineup: defaultOptimal.lineupIds,
    bench: defaultOptimal.benchIds,
    playerRoles: {},
    customPositions: {}
  };
  if (!tactics.playerRoles) tactics.playerRoles = {};
  if (!tactics.customPositions) tactics.customPositions = {};
  if (!tactics.instructions) {
    tactics.instructions = getDefaultTacticalInstructions();
  }

  let activeTab = "lineup"; // "lineup" o "instructions"
  let selectedPlayerId = null;
  let showAllRolesList = false;

  function render() {
    const formationKey = tactics.formation;
    const formation = FORMATIONS[formationKey] || FORMATIONS["4-3-3"];

    // Obtener objetos de jugador
    const lineupPlayers = tactics.lineup.map(id => team.players.find(p => p.id === id)).filter(Boolean);
    const benchPlayers = tactics.bench.map(id => team.players.find(p => p.id === id)).filter(Boolean);

    const averages = calculateTeamAverages(lineupPlayers, formationKey, tactics.customPositions);
    const matchingPresetKey = detectMatchingPreset(tactics.instructions);
    const currentPreset = TACTICAL_PRESETS[matchingPresetKey] || null;

    container.innerHTML = `
      <div class="min-h-screen bg-slate-950 text-white flex flex-col pb-20 select-none">
        <!-- Barra Superior -->
        <header class="bg-slate-900 border-b border-slate-800 px-4 py-3 sticky top-0 z-20 flex items-center justify-between shadow-md">
          <div class="flex items-center gap-2">
            ${onBackToHub ? `
              <button id="btn-tactics-back" class="text-xs bg-slate-800 hover:bg-slate-700 text-sky-400 hover:text-white px-2.5 py-1.5 rounded-lg border border-slate-700 font-bold active:scale-95 transition flex items-center gap-1 shadow-sm" title="Volver al Menú Principal">
                <span>❮</span> Inicio
              </button>
            ` : ''}
            <div class="w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs shadow" style="background: linear-gradient(135deg, ${team.primaryColor}, ${team.secondaryColor}); color: ${team.textColor};">
              ${team.shortName}
            </div>
            <div>
              <h2 class="text-sm font-bold leading-tight">Pizarra Táctica</h2>
              <span class="text-[10px] text-slate-400">Media del 11: <b class="text-amber-400">${averages.overall}</b> (DEL ${averages.attack} | MED ${averages.midfield} | DEF ${averages.defense})</span>
            </div>
          </div>
          <div class="flex items-center gap-1.5">
            <button id="btn-save-tactics" class="text-xs bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 rounded-lg border border-emerald-500 font-bold active:scale-95 transition flex items-center gap-1 shadow-md shadow-emerald-600/20">
              <span>💾</span> Guardar
            </button>
            <button id="btn-auto-align" class="text-xs bg-slate-800 hover:bg-slate-700 text-sky-400 px-2.5 py-1.5 rounded-lg border border-slate-700 font-semibold active:scale-95 transition">
              ⚡ Auto 11
            </button>
          </div>
        </header>

        <!-- Selector de Sistema y Mentalidad -->
        <div class="p-3 bg-slate-900/50 border-b border-slate-800 flex flex-col gap-2">
          <!-- Formaciones -->
          <div class="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
            <span class="text-[10px] uppercase font-bold text-slate-500 mr-1">Sistema:</span>
            ${Object.keys(FORMATIONS).map(fKey => `
              <button class="btn-formation px-3 py-1 rounded-full font-bold transition whitespace-nowrap ${tactics.formation === fKey ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20' : 'bg-slate-800 text-slate-400 hover:text-white'}" data-formation="${fKey}">
                ${fKey}
              </button>
            `).join('')}
          </div>

          <!-- Mentalidad -->
          <div class="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
            <span class="text-[10px] uppercase font-bold text-slate-500 mr-1">Actitud:</span>
            ${MENTALITIES.map(m => `
              <button class="btn-mentality px-2.5 py-0.5 rounded-lg text-[11px] font-semibold transition whitespace-nowrap ${tactics.mentality === m.id ? 'bg-emerald-600 text-white border border-emerald-400' : 'bg-slate-800/80 text-slate-400 hover:text-white'}" data-mentality="${m.id}">
                ${m.label}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Pestañas Principales: Alineación vs Estilo e Instrucciones -->
        <div class="px-3 pt-2 pb-1 bg-slate-900/70 border-b border-slate-800 flex gap-2">
          <button id="tab-nav-lineup" class="flex-1 py-2 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${activeTab === 'lineup' ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25 border border-sky-400' : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'}">
            <span>⚽ Pizarra y Campo</span>
          </button>
          <button id="tab-nav-instructions" class="flex-1 py-2 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${activeTab === 'instructions' ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 border border-amber-400' : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'}">
            <span>🧠 Estilos e Instrucciones</span>
            <span class="px-1.5 py-0.2 rounded-md ${activeTab === 'instructions' ? 'bg-slate-950/80 text-amber-300' : 'bg-slate-800 text-amber-400'} text-[10px] font-extrabold">
              ${currentPreset ? currentPreset.icon : '⚙️'}
            </span>
          </button>
        </div>

        ${activeTab === "lineup" ? `
          <!-- Terreno de Juego Táctico (Campo Vertical) -->
          <div class="p-3">
            <div id="tactics-pitch-container" class="relative w-full max-w-sm mx-auto aspect-[3/4] bg-gradient-to-b from-emerald-800 via-emerald-700 to-emerald-900 rounded-2xl border-2 border-emerald-500/40 shadow-inner overflow-hidden p-2 select-none touch-pan-y">
              <!-- Líneas del campo de fútbol -->
              <div class="absolute inset-2 border-2 border-white/30 rounded-xl pointer-events-none"></div>
              <!-- Área portería rival arriba -->
              <div class="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-14 border-b-2 border-x-2 border-white/30 pointer-events-none"></div>
              <!-- Círculo central -->
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-white/30 rounded-full pointer-events-none"></div>
              <!-- Línea de medio campo -->
              <div class="absolute top-1/2 left-2 right-2 h-0.5 bg-white/30 -translate-y-1/2 pointer-events-none"></div>
              <!-- Área portería propia abajo -->
              <div class="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-14 border-t-2 border-x-2 border-white/30 pointer-events-none"></div>

              <!-- Jugadores en el Campo -->
              ${formation.slots.map((slot, index) => {
                const player = lineupPlayers[index];
                if (!player) return "";
                const effSlot = getEffectiveSlotCoords(formationKey, index, tactics.customPositions);
                const effRating = calculateEffectiveRating(player, effSlot.pos);
                const isSelected = selectedPlayerId === player.id;
                const isInjured = Boolean(player.injury);
                const roleId = (tactics.playerRoles && tactics.playerRoles[player.id]) || getDefaultRoleForPosition(effSlot.pos);
                const role = getRoleDetails(effSlot.pos, roleId);
                const fatigue = player.fatigueLoad || 0;

                return `
                  <div class="slot-player absolute -translate-x-1/2 -translate-y-1/2 ${isSelected ? 'cursor-grab active:cursor-grabbing touch-none ring-2 ring-amber-400 ring-offset-2 ring-offset-slate-900 z-30 scale-105' : 'cursor-pointer touch-manipulation z-10'} flex flex-col items-center transition-transform active:scale-95 select-none"
                       style="left: ${effSlot.x}%; top: ${effSlot.y}%;"
                       data-player-id="${player.id}"
                       data-slot-index="${index}">
                    <!-- Ficha con dorsal y valoración -->
                    <div class="w-10 h-10 rounded-full border-2 ${isSelected ? 'border-amber-400 bg-amber-500 text-black shadow-lg shadow-amber-400/50 scale-110 ring-2 ring-amber-300' : isInjured ? 'border-rose-500 bg-rose-950 text-rose-200 animate-pulse' : effSlot.isCustom ? 'border-amber-400 bg-slate-900 text-white shadow-md ring-1 ring-amber-400/80' : 'border-white/80 bg-slate-900 text-white shadow-md'} flex flex-col items-center justify-center relative transition-all">
                      <span class="text-[9px] font-black leading-none">${effRating}</span>
                      <span class="text-[8px] font-bold ${isInjured ? 'text-rose-300' : effSlot.isCustom ? 'text-amber-300 font-extrabold' : 'text-slate-300'} leading-none">${slot.label}</span>
                      <!-- Barra de energía en miniatura -->
                      <div class="absolute -bottom-1 w-6 h-1 bg-black/60 rounded-full overflow-hidden">
                        <div class="h-full ${player.energy > 70 ? 'bg-emerald-400' : player.energy > 50 ? 'bg-amber-400' : 'bg-red-500'}" style="width: ${player.energy || 100}%;"></div>
                      </div>
                      ${effSlot.isCustom ? `
                        <div class="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-amber-400 text-slate-950 text-[7px] font-black flex items-center justify-center shadow" title="Posición ajustada libremente">📍</div>
                      ` : ''}
                    </div>
                    <!-- Nombre del futbolista -->
                    <div class="bg-black/80 px-1.5 py-0.5 rounded text-[9px] font-bold text-white tracking-tight mt-1 truncate max-w-[70px] text-center border border-white/10 shadow">
                      ${player.name.split(' ').slice(-1)[0]}
                    </div>
                    ${isSelected ? `
                      <div class="mt-0.5 px-1.5 py-0.2 rounded-full bg-amber-400 text-slate-950 font-black text-[7px] shadow-md animate-pulse uppercase tracking-tight">
                        ✋ Mover
                      </div>
                    ` : ''}
                    <!-- Función / Rol asignado o Lesión / Sanción / Sobrecarga -->
                    ${isInjured ? `
                      <div class="mt-0.5 px-1 py-0.2 rounded bg-rose-900 border border-rose-500 text-[7.5px] font-bold text-rose-200 truncate max-w-[76px] text-center shadow-sm">
                        🚑 ${player.injury.roundsLeft}j
                      </div>
                    ` : player.suspension ? `
                      <div class="mt-0.5 px-1 py-0.2 rounded bg-amber-950 border border-amber-500/70 text-[7.5px] font-bold text-amber-300 truncate max-w-[76px] text-center shadow-sm">
                        🛑 ${player.suspension.roundsLeft}j
                      </div>
                    ` : fatigue >= 40 ? `
                      <div class="mt-0.5 px-1 py-0.2 rounded bg-amber-950 border border-amber-500/80 text-[7px] font-bold text-amber-300 truncate max-w-[76px] text-center shadow-sm">
                        🔥 Sobrecarga
                      </div>
                    ` : `
                      <div class="mt-0.5 px-1 py-0.2 rounded bg-sky-950/90 border border-sky-500/40 text-[7.5px] font-bold text-sky-300 truncate max-w-[76px] text-center shadow-sm">
                        ${role.icon} ${role.tag}
                      </div>
                    `}
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Paneles del Futbolista Titular Seleccionado: Ajuste Posicional y Función Táctica -->
          ${(() => {
            if (!selectedPlayerId) return "";
            const selSlotIndex = tactics.lineup.indexOf(selectedPlayerId);
            if (selSlotIndex === -1) return ""; // Está en el banquillo
            const selSlot = formation.slots[selSlotIndex];
            const selPlayer = team.players.find(p => p.id === selectedPlayerId);
            if (!selPlayer || !selSlot) return "";

            const effSlot = getEffectiveSlotCoords(formationKey, selSlotIndex, tactics.customPositions);
            const curRoleId = (tactics.playerRoles && tactics.playerRoles[selPlayer.id]) || getDefaultRoleForPosition(effSlot.pos);
            const curRole = getRoleDetails(effSlot.pos, curRoleId);
            const availRoles = getAvailableRolesForPosition(effSlot.pos);
            const posLabel = getPositionAdjustmentLabel(selSlot, effSlot);

            return `
              <div class="mx-3 my-2 space-y-2 animate-fadeIn">
                <!-- Panel 1: Ajuste Libre de Posición en el Campo -->
                <div class="p-3 bg-slate-900 border border-amber-500/40 rounded-2xl shadow-xl">
                  <div class="flex items-center justify-between mb-2 pb-1.5 border-b border-slate-800">
                    <div class="flex items-center gap-2">
                      <span class="text-xl">📍</span>
                      <div>
                        <span class="text-[9px] uppercase font-bold text-amber-400">Posición en el Campo · ${selPlayer.name} (${selSlot.label})</span>
                        <h4 class="text-xs font-black text-white">${posLabel}</h4>
                      </div>
                    </div>
                    ${effSlot.isCustom ? `
                      <button id="btn-reset-pos" class="text-[10px] font-bold text-rose-400 hover:text-rose-300 px-2 py-1 rounded-lg bg-rose-950/70 border border-rose-800/80 transition flex items-center gap-1 active:scale-95 shadow-sm">
                        <span>↺</span> Posición base
                      </button>
                    ` : ''}
                  </div>

                  <div class="text-[10px] text-slate-400 mb-2 font-medium">
                    Ajusta su posición para acercarlo al mediocentro, al delantero o abrirlo a banda (arrastra en la pizarra o usa los botones):
                  </div>

                  <!-- Botones de Nudge Direccional -->
                  <div class="grid grid-cols-2 gap-2 mb-2.5">
                    <div class="bg-slate-950/80 p-2 rounded-xl border border-slate-800 flex flex-col gap-1.5">
                      <span class="text-[9px] font-bold text-slate-400 uppercase tracking-wider text-center">Altura (Ataque / Defensa)</span>
                      <div class="flex items-center gap-1.5">
                        <button class="btn-nudge-pos flex-1 py-1.5 px-1 bg-slate-800 hover:bg-slate-700 text-sky-300 font-bold text-[10px] rounded-lg border border-slate-700 active:scale-95 transition flex items-center justify-center gap-1" data-axis="y" data-delta="-5">
                          <span>▲</span> Adelantar (+DC)
                        </button>
                        <button class="btn-nudge-pos flex-1 py-1.5 px-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-[10px] rounded-lg border border-slate-700 active:scale-95 transition flex items-center justify-center gap-1" data-axis="y" data-delta="5">
                          <span>▼</span> Retrasar (+MC)
                        </button>
                      </div>
                    </div>

                    <div class="bg-slate-950/80 p-2 rounded-xl border border-slate-800 flex flex-col gap-1.5">
                      <span class="text-[9px] font-bold text-slate-400 uppercase tracking-wider text-center">Amplitud (Banda / Centro)</span>
                      <div class="flex items-center gap-1.5">
                        <button class="btn-nudge-pos flex-1 py-1.5 px-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-[10px] rounded-lg border border-slate-700 active:scale-95 transition flex items-center justify-center gap-1" data-axis="x" data-delta="-5">
                          <span>◀</span> Izquierda
                        </button>
                        <button class="btn-nudge-pos flex-1 py-1.5 px-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-[10px] rounded-lg border border-slate-700 active:scale-95 transition flex items-center justify-center gap-1" data-axis="x" data-delta="5">
                          <span>▶</span> Derecha
                        </button>
                      </div>
                    </div>
                  </div>

                  <!-- Sliders de Ajuste Fino -->
                  <div class="space-y-2 bg-slate-950/60 p-2 rounded-xl border border-slate-800/80 text-[10px]">
                    <div class="flex items-center justify-between text-slate-400">
                      <span>Profundidad en campo: <b class="text-white">${effSlot.y < 35 ? 'Delantera / Ofensivo' : (effSlot.y > 65 ? 'Defensa / Retrasado' : 'Medio campo')}</b></span>
                      <span class="font-mono text-amber-400 font-bold">Y: ${Math.round(effSlot.y)}%</span>
                    </div>
                    <input type="range" class="slider-pos-y w-full accent-amber-400 bg-slate-800 h-1.5 rounded-lg appearance-none cursor-pointer" min="12" max="88" value="${effSlot.y}">

                    <div class="flex items-center justify-between text-slate-400 pt-1">
                      <span>Anchura / Amplitud: <b class="text-white">${effSlot.x < 35 ? 'Banda Izquierda' : (effSlot.x > 65 ? 'Banda Derecha' : 'Interior / Centro')}</b></span>
                      <span class="font-mono text-amber-400 font-bold">X: ${Math.round(effSlot.x)}%</span>
                    </div>
                    <input type="range" class="slider-pos-x w-full accent-amber-400 bg-slate-800 h-1.5 rounded-lg appearance-none cursor-pointer" min="10" max="90" value="${effSlot.x}">
                  </div>
                </div>

                <!-- Panel 2: Función Táctica / Rol -->
                <div class="p-3 bg-slate-900 border border-sky-500/50 rounded-2xl shadow-xl">
                  <div class="flex items-center justify-between mb-2 pb-1.5 border-b border-slate-800">
                    <div class="flex items-center gap-2">
                      <span class="text-xl">${curRole.icon}</span>
                      <div>
                        <span class="text-[9px] uppercase font-bold text-sky-400">Función táctica · ${curRole.name}</span>
                        <h4 class="text-xs font-black text-white">${curRole.tag}</h4>
                      </div>
                    </div>
                    <button id="btn-close-role-box" class="text-[10px] font-bold text-emerald-400 hover:text-white px-2 py-1 rounded-lg bg-emerald-950/80 border border-emerald-500/50 flex items-center gap-1 active:scale-95 shadow">✓ Fijar posición</button>
                  </div>
                  <div class="text-[10px] text-slate-400 mb-2 font-medium">Elige la función táctica de este futbolista según su posición:</div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    ${availRoles.map(r => `
                      <button class="btn-assign-role p-2 rounded-xl border text-left transition flex items-start gap-2 ${r.id === curRoleId ? 'bg-sky-500/25 border-sky-400 text-white shadow-sm ring-1 ring-sky-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 active:scale-98'}" data-role-id="${r.id}" data-player-id="${selPlayer.id}">
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
          <div class="px-4 text-center my-2 flex items-center justify-center gap-2">
            <button id="btn-toggle-all-roles" class="text-xs bg-slate-900 hover:bg-slate-800 text-sky-400 border border-slate-800 hover:border-sky-500/40 px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 shadow-sm">
              <span>⚙️</span>
              <span>${showAllRolesList ? 'Ocultar funciones' : 'Ver funciones de los 11'}</span>
            </button>
          </div>

          <!-- Lista Desplegable de Todas las Funciones del 11 -->
          ${showAllRolesList ? `
            <div class="mx-3 mb-3 bg-slate-900 border border-slate-800 rounded-2xl p-3 space-y-2">
              <div class="flex items-center justify-between pb-1.5 border-b border-slate-800">
                <span class="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>⚙️</span> Funciones e Instrucciones del 11 Titular
                </span>
                <span class="text-[10px] text-slate-400">Personaliza cada puesto</span>
              </div>
              <div class="space-y-1.5 max-h-64 overflow-y-auto pr-1 no-scrollbar">
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
                      <select class="select-player-role bg-slate-900 border border-slate-700 text-sky-300 text-[11px] font-bold rounded-lg px-2 py-1 outline-none focus:border-sky-400 max-w-[190px]" data-player-id="${p.id}" data-pos="${slot.pos}">
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

          <!-- Instrucción de ayuda -->
          <div class="px-4 text-center">
            <p class="text-[11px] text-slate-400">
              ${selectedPlayerId ? '👉 Puedes elegir su función arriba o tocar otro jugador del campo/banquillo para moverlo.' : '💡 Toca a un jugador para elegir su función táctica o cambiar su posición.'}
            </p>
          </div>

          <!-- Banquillo y Reservas -->
          <div class="px-3 mt-3 flex-1">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <span>🪑</span> Banquillo de Suplentes (${benchPlayers.length})
              </h3>
            </div>
            <div class="space-y-1.5">
              ${benchPlayers.map(p => {
                const isSelected = selectedPlayerId === p.id;
                const isInjured = Boolean(p.injury);
                const isSuspended = Boolean(p.suspension);
                return `
                  <div class="bench-player flex items-center justify-between p-2 rounded-xl border ${isSelected ? 'border-amber-400 bg-amber-500/10' : isInjured ? 'border-rose-900/80 bg-rose-950/20' : isSuspended ? 'border-amber-900/80 bg-amber-950/20' : 'border-slate-800 bg-slate-900/60'} cursor-pointer active:scale-98 transition"
                       data-player-id="${p.id}">
                    <div class="flex items-center gap-2">
                      <span class="w-5 text-center font-mono text-[10px] text-slate-500 font-bold">#${p.number}</span>
                      <span class="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] font-bold ${p.pos === 'DC' || p.pos === 'EI' || p.pos === 'ED' ? 'text-red-400' : p.pos === 'MC' || p.pos === 'MCD' || p.pos === 'MCO' ? 'text-amber-400' : p.pos === 'POR' ? 'text-purple-400' : 'text-sky-400'}">${p.pos}</span>
                      ${p.secondaryPos ? `<span class="text-[9px] font-semibold text-amber-300/80" title="Posiciones secundarias">(${Array.isArray(p.secondaryPos) ? p.secondaryPos.join('/') : p.secondaryPos})</span>` : ''}
                      <span class="text-xs font-bold text-slate-200">${p.name}</span>
                      ${isInjured ? `<span class="px-1.5 py-0.5 rounded bg-rose-900/90 border border-rose-500/60 text-[8.5px] font-bold text-rose-300">🚑 ${p.injury.roundsLeft}j</span>` : ''}
                      ${isSuspended ? `<span class="px-1.5 py-0.5 rounded bg-amber-900/90 border border-amber-500/60 text-[8.5px] font-bold text-amber-300">🛑 ${p.suspension.roundsLeft}j</span>` : ''}
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="text-[10px] font-mono ${(p.energy || 100) >= 80 ? 'text-emerald-400' : (p.energy || 100) >= 65 ? 'text-amber-400' : 'text-rose-400'} font-bold">⚡${Math.round(p.energy !== undefined ? p.energy : 100)}%</span>
                      <div class="w-10 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div class="h-full ${(p.energy || 100) >= 80 ? 'bg-emerald-400' : (p.energy || 100) >= 65 ? 'bg-amber-400' : 'bg-red-500'}" style="width: ${p.energy !== undefined ? p.energy : 100}%;"></div>
                      </div>
                      <span class="text-xs font-black ${isInjured || isSuspended ? 'text-slate-500' : 'text-amber-400'} px-1.5 py-0.5 bg-slate-800/80 rounded">${p.ovr}</span>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>

            <!-- Botones de Acción al final del banquillo -->
            <div class="mt-4 pt-1 space-y-2">
              <button id="btn-save-tactics-bottom" class="w-full py-3 bg-emerald-600 hover:bg-emerald-500 active:scale-98 text-white font-black text-xs rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 border border-emerald-500/50">
                <span class="text-sm">💾</span>
                <span>Guardar Alineación y Cambios</span>
              </button>
              ${onBackToHub ? `
                <button id="btn-tactics-back-bottom" class="w-full py-2.5 bg-slate-900 hover:bg-slate-800 active:scale-98 text-slate-300 hover:text-white font-bold text-xs rounded-xl transition flex items-center justify-center gap-2 border border-slate-800">
                  <span>🏠</span>
                  <span>Volver al Menú Principal (Jugar Jornada ${gameState.currentRound})</span>
                </button>
              ` : ''}
            </div>
          </div>
        ` : `
          <!-- VISTA DE ESTILOS E INSTRUCCIONES POR ESTADOS -->
          <div class="p-3 space-y-4 max-w-lg mx-auto w-full">
            <!-- Selector de Presets Rápidos (Estilos de Juego Conocidos) -->
            <div class="bg-slate-900 border border-slate-800 rounded-2xl p-3 shadow-lg">
              <div class="flex items-center justify-between mb-2">
                <div>
                  <h3 class="text-xs font-black uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <span>🧠</span> Estilos de Juego Predefinidos
                  </h3>
                  <p class="text-[10px] text-slate-400">Aplica una filosofía táctica con un solo toque o personaliza los parámetros abajo.</p>
                </div>
                <span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase ${currentPreset ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-slate-800 text-slate-400'}">
                  ${currentPreset ? currentPreset.name : 'Personalizado'}
                </span>
              </div>

              <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
                ${Object.entries(TACTICAL_PRESETS).map(([key, preset]) => {
                  const isActive = matchingPresetKey === key;
                  return `
                    <button class="btn-preset-card p-2.5 rounded-xl border text-left transition flex flex-col justify-between ${isActive ? 'bg-amber-500/20 border-amber-400 shadow-md ring-1 ring-amber-400/60' : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700 active:scale-98'}" data-preset-key="${key}">
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
                  <p class="text-[9.5px] text-slate-400">Cómo mueve y elabora el juego tu equipo en posesión</p>
                </div>
              </div>

              <!-- Estilo de Pase -->
              <div>
                <div class="text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                  <span>Estilo de Pase</span>
                  <span class="text-sky-400 font-mono text-[9px]">${TACTICAL_OPTIONS.passingStyle.find(o => o.id === tactics.instructions.inPossession.passingStyle)?.label}</span>
                </div>
                <div class="grid grid-cols-3 gap-1.5">
                  ${TACTICAL_OPTIONS.passingStyle.map(opt => {
                    const isSel = tactics.instructions.inPossession.passingStyle === opt.id;
                    return `
                      <button class="btn-tactic-opt p-2 rounded-xl border text-center transition flex flex-col items-center justify-center ${isSel ? 'bg-sky-500/25 border-sky-400 text-white shadow-sm ring-1 ring-sky-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 active:scale-98'}" data-phase="inPossession" data-param="passingStyle" data-val="${opt.id}">
                        <span class="text-sm mb-0.5">${opt.icon}</span>
                        <span class="text-[11px] font-bold ${isSel ? 'text-sky-300' : 'text-slate-200'}">${opt.label}</span>
                        <span class="text-[8px] text-slate-400 leading-tight mt-0.5 line-clamp-1">${opt.desc}</span>
                      </button>
                    `;
                  }).join('')}
                </div>
              </div>

              <!-- Ritmo de Juego -->
              <div>
                <div class="text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                  <span>Ritmo de Circulación</span>
                  <span class="text-sky-400 font-mono text-[9px]">${TACTICAL_OPTIONS.tempo.find(o => o.id === tactics.instructions.inPossession.tempo)?.label}</span>
                </div>
                <div class="grid grid-cols-3 gap-1.5">
                  ${TACTICAL_OPTIONS.tempo.map(opt => {
                    const isSel = tactics.instructions.inPossession.tempo === opt.id;
                    return `
                      <button class="btn-tactic-opt p-2 rounded-xl border text-center transition flex flex-col items-center justify-center ${isSel ? 'bg-sky-500/25 border-sky-400 text-white shadow-sm ring-1 ring-sky-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 active:scale-98'}" data-phase="inPossession" data-param="tempo" data-val="${opt.id}">
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
                  <span class="text-sky-400 font-mono text-[9px]">${TACTICAL_OPTIONS.width.find(o => o.id === tactics.instructions.inPossession.width)?.label}</span>
                </div>
                <div class="grid grid-cols-3 gap-1.5">
                  ${TACTICAL_OPTIONS.width.map(opt => {
                    const isSel = tactics.instructions.inPossession.width === opt.id;
                    return `
                      <button class="btn-tactic-opt p-2 rounded-xl border text-center transition flex flex-col items-center justify-center ${isSel ? 'bg-sky-500/25 border-sky-400 text-white shadow-sm ring-1 ring-sky-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 active:scale-98'}" data-phase="inPossession" data-param="width" data-val="${opt.id}">
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
                  <p class="text-[9.5px] text-slate-400">Comportamiento en los segundos clave de pérdida o recuperación</p>
                </div>
              </div>

              <!-- Tras Pérdida -->
              <div>
                <div class="text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                  <span>Al perder el balón</span>
                  <span class="text-amber-400 font-mono text-[9px]">${TACTICAL_OPTIONS.transitionLoss.find(o => o.id === tactics.instructions.inTransition.loss)?.label}</span>
                </div>
                <div class="grid grid-cols-2 gap-2">
                  ${TACTICAL_OPTIONS.transitionLoss.map(opt => {
                    const isSel = tactics.instructions.inTransition.loss === opt.id;
                    return `
                      <button class="btn-tactic-opt p-2.5 rounded-xl border text-left transition flex items-start gap-2 ${isSel ? 'bg-amber-500/25 border-amber-400 text-white shadow-sm ring-1 ring-amber-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 active:scale-98'}" data-phase="inTransition" data-param="loss" data-val="${opt.id}">
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
                  <span class="text-amber-400 font-mono text-[9px]">${TACTICAL_OPTIONS.transitionWin.find(o => o.id === tactics.instructions.inTransition.win)?.label}</span>
                </div>
                <div class="grid grid-cols-2 gap-2">
                  ${TACTICAL_OPTIONS.transitionWin.map(opt => {
                    const isSel = tactics.instructions.inTransition.win === opt.id;
                    return `
                      <button class="btn-tactic-opt p-2.5 rounded-xl border text-left transition flex items-start gap-2 ${isSel ? 'bg-amber-500/25 border-amber-400 text-white shadow-sm ring-1 ring-amber-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 active:scale-98'}" data-phase="inTransition" data-param="win" data-val="${opt.id}">
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
                  <span class="text-rose-400 font-mono text-[9px]">${TACTICAL_OPTIONS.defensiveLine.find(o => o.id === tactics.instructions.outOfPossession.defensiveLine)?.label}</span>
                </div>
                <div class="grid grid-cols-3 gap-1.5">
                  ${TACTICAL_OPTIONS.defensiveLine.map(opt => {
                    const isSel = tactics.instructions.outOfPossession.defensiveLine === opt.id;
                    return `
                      <button class="btn-tactic-opt p-2 rounded-xl border text-center transition flex flex-col items-center justify-center ${isSel ? 'bg-rose-500/25 border-rose-400 text-white shadow-sm ring-1 ring-rose-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 active:scale-98'}" data-phase="outOfPossession" data-param="defensiveLine" data-val="${opt.id}">
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
                  <span class="text-rose-400 font-mono text-[9px]">${TACTICAL_OPTIONS.pressing.find(o => o.id === tactics.instructions.outOfPossession.pressing)?.label}</span>
                </div>
                <div class="grid grid-cols-3 gap-1.5">
                  ${TACTICAL_OPTIONS.pressing.map(opt => {
                    const isSel = tactics.instructions.outOfPossession.pressing === opt.id;
                    return `
                      <button class="btn-tactic-opt p-2 rounded-xl border text-center transition flex flex-col items-center justify-center ${isSel ? 'bg-rose-500/25 border-rose-400 text-white shadow-sm ring-1 ring-rose-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 active:scale-98'}" data-phase="outOfPossession" data-param="pressing" data-val="${opt.id}">
                        <span class="text-sm mb-0.5">${opt.icon}</span>
                        <span class="text-[11px] font-bold ${isSel ? 'text-rose-300' : 'text-slate-200'}">${opt.label}</span>
                        <span class="text-[8px] text-slate-400 leading-tight mt-0.5 line-clamp-1">${opt.desc}</span>
                      </button>
                    `;
                  }).join('')}
                </div>
              </div>
            </div>

            <!-- Panel de Análisis del Impacto en el Motor -->
            <div class="bg-slate-900/60 border border-slate-800 rounded-2xl p-3 text-[10px] text-slate-400 space-y-1">
              <div class="font-bold text-white flex items-center gap-1.5 mb-1">
                <span>⚡</span> Impacto en la Simulación del Partido
              </div>
              <p>• <b class="text-slate-200">Fatiga y Físico:</b> ${tactics.instructions.outOfPossession.pressing === 'high' ? 'Presión asfixiante genera mayor desgaste físico y más faltas cometidas.' : tactics.instructions.outOfPossession.pressing === 'low' ? 'Baja presión conserva energía para los 90 minutos.' : 'Desgaste equilibrado.'}</p>
              <p>• <b class="text-slate-200">Construcción:</b> ${tactics.instructions.inPossession.passingStyle === 'short' ? 'Pase corto maximiza el % de posesión y reduce pérdidas fortuitas.' : tactics.instructions.inPossession.passingStyle === 'direct' ? 'Pase directo genera ocasiones verticales más veloces.' : 'Estilo versátil mixto.'}</p>
              <p>• <b class="text-slate-200">Transiciones:</b> ${tactics.instructions.inTransition.loss === 'counterpress' ? 'Contrapresión activa alertas de robo inmediato en campo rival.' : 'Repliegue ordenado protege el área propia.'}</p>
            </div>

            <!-- Botones de Acción al final de las instrucciones tácticas -->
            <div class="mt-4 pt-1 space-y-2">
              <button id="btn-save-tactics-instructions" class="w-full py-3 bg-emerald-600 hover:bg-emerald-500 active:scale-98 text-white font-black text-xs rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 border border-emerald-500/50">
                <span class="text-sm">💾</span>
                <span>Guardar Estilo e Instrucciones Tácticas</span>
              </button>
              ${onBackToHub ? `
                <button id="btn-tactics-back-instr" class="w-full py-2.5 bg-slate-900 hover:bg-slate-800 active:scale-98 text-slate-300 hover:text-white font-bold text-xs rounded-xl transition flex items-center justify-center gap-2 border border-slate-800">
                  <span>🏠</span>
                  <span>Volver al Menú Principal (Jugar Jornada ${gameState.currentRound})</span>
                </button>
              ` : ''}
            </div>
          </div>
        `}
      </div>
    `;

    // Eventos de Pestañas
    const tabLineup = container.querySelector("#tab-nav-lineup");
    const tabInstr = container.querySelector("#tab-nav-instructions");
    if (tabLineup) {
      tabLineup.onclick = () => {
        activeTab = "lineup";
        render();
      };
    }
    if (tabInstr) {
      tabInstr.onclick = () => {
        activeTab = "instructions";
        render();
      };
    }

    // Eventos Formación y Mentalidad
    container.querySelectorAll(".btn-formation").forEach(btn => {
      btn.onclick = () => {
        tactics.formation = btn.dataset.formation;
        tactics.customPositions = {}; // Reiniciar posiciones personalizadas al cambiar esquema base
        onSaveTactics(tactics);
        render();
      };
    });

    container.querySelectorAll(".btn-mentality").forEach(btn => {
      btn.onclick = () => {
        tactics.mentality = btn.dataset.mentality;
        onSaveTactics(tactics);
        render();
      };
    });

    // Auto-alinear
    const btnAuto = container.querySelector("#btn-auto-align");
    if (btnAuto) {
      btnAuto.onclick = () => {
        autoAlignLineup();
        onSaveTactics(tactics);
        render();
      };
    }

    // Botones de Guardar Alineación / Táctica
    function showSaveConfirmationToast() {
      const existing = document.getElementById("tactics-save-toast");
      if (existing) existing.remove();

      const toast = document.createElement("div");
      toast.id = "tactics-save-toast";
      toast.className = "fixed top-16 left-1/2 -translate-x-1/2 z-50 bg-emerald-600 text-white px-4 py-2.5 rounded-xl shadow-2xl border border-emerald-400 flex items-center gap-2 text-xs font-bold animate-bounce transition-opacity duration-300 pointer-events-none";
      toast.innerHTML = `
        <span class="text-base">✅</span>
        <span>¡Alineación y táctica guardadas con éxito!</span>
      `;
      document.body.appendChild(toast);

      setTimeout(() => {
        toast.style.opacity = "0";
        setTimeout(() => toast.remove(), 400);
      }, 2000);
    }

    function handleSaveClick(btn) {
      onSaveTactics(tactics);
      showSaveConfirmationToast();
      if (btn) {
        const origHTML = btn.innerHTML;
        const origClass = btn.className;
        btn.innerHTML = `<span>✅</span> <span>¡Guardada!</span>`;
        btn.className = origClass.replace("bg-emerald-600", "bg-teal-500").replace("border-emerald-500", "border-teal-400");
        setTimeout(() => {
          if (btn && btn.isConnected) {
            btn.innerHTML = origHTML;
            btn.className = origClass;
          }
        }, 1800);
      }
    }

    const btnSaveHeader = container.querySelector("#btn-save-tactics");
    if (btnSaveHeader) btnSaveHeader.onclick = () => handleSaveClick(btnSaveHeader);

    const btnSaveBottom = container.querySelector("#btn-save-tactics-bottom");
    if (btnSaveBottom) btnSaveBottom.onclick = () => handleSaveClick(btnSaveBottom);

    const btnSaveInstr = container.querySelector("#btn-save-tactics-instructions");
    if (btnSaveInstr) btnSaveInstr.onclick = () => handleSaveClick(btnSaveInstr);

    // Eventos de Volver al Inicio / Hub
    if (onBackToHub) {
      const handleBackToHub = () => {
        onSaveTactics(tactics);
        onBackToHub();
      };
      const btnBackHeader = container.querySelector("#btn-tactics-back");
      if (btnBackHeader) btnBackHeader.onclick = handleBackToHub;
      const btnBackBottom = container.querySelector("#btn-tactics-back-bottom");
      if (btnBackBottom) btnBackBottom.onclick = handleBackToHub;
      const btnBackInstr = container.querySelector("#btn-tactics-back-instr");
      if (btnBackInstr) btnBackInstr.onclick = handleBackToHub;
    }

    // Controles de Ajuste Manual de Posición en el Campo (Nudge botones)
    container.querySelectorAll(".btn-nudge-pos").forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        if (!selectedPlayerId) return;
        const selSlotIndex = tactics.lineup.indexOf(selectedPlayerId);
        if (selSlotIndex === -1) return;
        const axis = btn.dataset.axis;
        const delta = parseInt(btn.dataset.delta, 10);
        const effSlot = getEffectiveSlotCoords(formationKey, selSlotIndex, tactics.customPositions);
        if (!tactics.customPositions) tactics.customPositions = {};
        const isGK = selSlotIndex === 0;

        if (axis === "x") {
          const newX = Math.max(isGK ? 38 : 10, Math.min(isGK ? 62 : 90, effSlot.x + delta));
          tactics.customPositions[selSlotIndex] = { x: newX, y: effSlot.y };
        } else {
          const newY = Math.max(isGK ? 82 : 12, Math.min(isGK ? 90 : 88, effSlot.y + delta));
          tactics.customPositions[selSlotIndex] = { x: effSlot.x, y: newY };
        }
        onSaveTactics(tactics);
        render();
      };
    });

    // Sliders de Posición Fina
    const sliderY = container.querySelector(".slider-pos-y");
    if (sliderY) {
      sliderY.oninput = (e) => {
        if (!selectedPlayerId) return;
        const selSlotIndex = tactics.lineup.indexOf(selectedPlayerId);
        if (selSlotIndex === -1) return;
        const effSlot = getEffectiveSlotCoords(formationKey, selSlotIndex, tactics.customPositions);
        const val = parseInt(e.target.value, 10);
        if (!tactics.customPositions) tactics.customPositions = {};
        tactics.customPositions[selSlotIndex] = { x: effSlot.x, y: val };
        const slotEl = container.querySelector(`.slot-player[data-slot-index="${selSlotIndex}"]`);
        if (slotEl) slotEl.style.top = `${val}%`;
      };
      sliderY.onchange = () => {
        onSaveTactics(tactics);
        render();
      };
    }

    const sliderX = container.querySelector(".slider-pos-x");
    if (sliderX) {
      sliderX.oninput = (e) => {
        if (!selectedPlayerId) return;
        const selSlotIndex = tactics.lineup.indexOf(selectedPlayerId);
        if (selSlotIndex === -1) return;
        const effSlot = getEffectiveSlotCoords(formationKey, selSlotIndex, tactics.customPositions);
        const val = parseInt(e.target.value, 10);
        if (!tactics.customPositions) tactics.customPositions = {};
        tactics.customPositions[selSlotIndex] = { x: val, y: effSlot.y };
        const slotEl = container.querySelector(`.slot-player[data-slot-index="${selSlotIndex}"]`);
        if (slotEl) slotEl.style.left = `${val}%`;
      };
      sliderX.onchange = () => {
        onSaveTactics(tactics);
        render();
      };
    }

    // Botón restablecer posición original
    const btnResetPos = container.querySelector("#btn-reset-pos");
    if (btnResetPos) {
      btnResetPos.onclick = (e) => {
        e.stopPropagation();
        if (!selectedPlayerId) return;
        const selSlotIndex = tactics.lineup.indexOf(selectedPlayerId);
        if (selSlotIndex !== -1 && tactics.customPositions) {
          delete tactics.customPositions[selSlotIndex];
          onSaveTactics(tactics);
          render();
        }
      };
    }

    // Arrastre libre con el dedo o ratón directamente en la pizarra (solo activo para el futbolista seleccionado)
    let tacticsJustDragged = false;
    const pitchBox = container.querySelector("#tactics-pitch-container");
    if (pitchBox && selectedPlayerId) {
      const selectedSlotEl = pitchBox.querySelector(`.slot-player[data-player-id="${selectedPlayerId}"]`);
      if (selectedSlotEl) {
        const slotIdx = parseInt(selectedSlotEl.dataset.slotIndex, 10);
        const pId = selectedPlayerId;

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
              const rect = pitchBox.getBoundingClientRect();
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
              tacticsJustDragged = true;
              setTimeout(() => { tacticsJustDragged = false; }, 200);
              const finalX = parseFloat(selectedSlotEl.dataset.dragX);
              const finalY = parseFloat(selectedSlotEl.dataset.dragY);
              if (!isNaN(finalX) && !isNaN(finalY)) {
                if (!tactics.customPositions) tactics.customPositions = {};
                tactics.customPositions[slotIdx] = { x: Math.round(finalX), y: Math.round(finalY) };
                selectedPlayerId = pId;
                onSaveTactics(tactics);
                render();
              }
            }
          };

          window.addEventListener("pointermove", onPointerMove);
          window.addEventListener("pointerup", onPointerUp);
        };

        selectedSlotEl.addEventListener("pointerdown", onPointerDown);
      }

      pitchBox.onclick = (e) => {
        if (tacticsJustDragged) return;
        if (!e.target.closest(".slot-player")) {
          if (selectedPlayerId) {
            selectedPlayerId = null;
            render();
          }
        }
      };
    }

    // Eventos Pestaña Instrucciones: Presets 1-Click
    container.querySelectorAll(".btn-preset-card").forEach(btn => {
      btn.onclick = () => {
        const pKey = btn.dataset.presetKey;
        const preset = TACTICAL_PRESETS[pKey];
        if (preset) {
          tactics.instructions = {
            preset: pKey,
            inPossession: { ...preset.inPossession },
            inTransition: { ...preset.inTransition },
            outOfPossession: { ...preset.outOfPossession }
          };
          onSaveTactics(tactics);
          render();
        }
      };
    });

    // Eventos Pestaña Instrucciones: Parámetros individuales
    container.querySelectorAll(".btn-tactic-opt").forEach(btn => {
      btn.onclick = () => {
        const phase = btn.dataset.phase;
        const param = btn.dataset.param;
        const val = btn.dataset.val;
        if (tactics.instructions && tactics.instructions[phase]) {
          tactics.instructions[phase][param] = val;
          tactics.instructions.preset = detectMatchingPreset(tactics.instructions);
          onSaveTactics(tactics);
          render();
        }
      };
    });

    // Toggle para ver la lista completa de funciones del 11
    const btnToggleAllRoles = container.querySelector("#btn-toggle-all-roles");
    if (btnToggleAllRoles) {
      btnToggleAllRoles.onclick = () => {
        showAllRolesList = !showAllRolesList;
        render();
      };
    }

    // Cambiar función desde el selector desplegable
    container.querySelectorAll(".select-player-role").forEach(sel => {
      sel.onchange = (e) => {
        const pId = sel.dataset.playerId;
        const rId = e.target.value;
        if (!tactics.playerRoles) tactics.playerRoles = {};
        tactics.playerRoles[pId] = rId;
        onSaveTactics(tactics);
        render();
      };
    });

    // Asignar función desde el panel del jugador seleccionado
    container.querySelectorAll(".btn-assign-role").forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const pId = btn.dataset.playerId;
        const rId = btn.dataset.roleId;
        if (!tactics.playerRoles) tactics.playerRoles = {};
        tactics.playerRoles[pId] = rId;
        onSaveTactics(tactics);
        render();
      };
    });

    // Cerrar panel de rol
    const btnCloseRoleBox = container.querySelector("#btn-close-role-box");
    if (btnCloseRoleBox) {
      btnCloseRoleBox.onclick = (e) => {
        e.stopPropagation();
        selectedPlayerId = null;
        render();
      };
    }

    // Intercambio táctico al tocar jugadores en la pestaña campo
    container.querySelectorAll(".slot-player, .bench-player").forEach(el => {
      el.onclick = () => {
        if (tacticsJustDragged) return;
        const playerId = el.dataset.playerId;
        handlePlayerTap(playerId);
      };
    });
  }

  function handlePlayerTap(tappedId) {
    if (!selectedPlayerId) {
      selectedPlayerId = tappedId;
      render();
      return;
    }

    if (selectedPlayerId === tappedId) {
      selectedPlayerId = null;
      render();
      return;
    }

    // Intercambiar selectedPlayerId y tappedId
    const inLineup1 = tactics.lineup.indexOf(selectedPlayerId);
    const inBench1 = tactics.bench.indexOf(selectedPlayerId);

    const inLineup2 = tactics.lineup.indexOf(tappedId);
    const inBench2 = tactics.bench.indexOf(tappedId);

    if (inLineup1 !== -1 && inLineup2 !== -1) {
      // Ambos en el 11: intercambian posiciones
      const tmp = tactics.lineup[inLineup1];
      tactics.lineup[inLineup1] = tactics.lineup[inLineup2];
      tactics.lineup[inLineup2] = tmp;
    } else if (inLineup1 !== -1 && inBench2 !== -1) {
      // Uno en el 11 y otro en el banquillo
      tactics.lineup[inLineup1] = tappedId;
      tactics.bench[inBench2] = selectedPlayerId;
    } else if (inBench1 !== -1 && inLineup2 !== -1) {
      tactics.bench[inBench1] = tappedId;
      tactics.lineup[inLineup2] = selectedPlayerId;
    } else if (inBench1 !== -1 && inBench2 !== -1) {
      // Ambos en banquillo
      const tmp = tactics.bench[inBench1];
      tactics.bench[inBench1] = tactics.bench[inBench2];
      tactics.bench[inBench2] = tmp;
    }

    selectedPlayerId = null;
    onSaveTactics(tactics);
    render();
  }

  function autoAlignLineup() {
    const formationKey = tactics.formation;
    const formation = FORMATIONS[formationKey] || FORMATIONS["4-3-3"];
    const getMatchFitness = p => (p.ovr || 70) * (0.6 + ((p.energy !== undefined ? p.energy : 100) / 250));
    const availablePlayers = [...team.players].filter(p => !p.injury && !p.suspension).sort((a, b) => getMatchFitness(b) - getMatchFitness(a));
    const used = new Set();
    const newLineup = [];

    // Portero
    const gk = availablePlayers.find(p => p.pos === "POR");
    if (gk) {
      newLineup[0] = gk.id;
      used.add(gk.id);
    }

    // Resto de posiciones
    formation.slots.forEach((slot, idx) => {
      if (idx === 0) return;
      let best = availablePlayers.find(p => !used.has(p.id) && (
        p.pos === slot.pos ||
        (Array.isArray(p.secondaryPos) && p.secondaryPos.includes(slot.pos)) ||
        (typeof p.secondaryPos === "string" && p.secondaryPos.includes(slot.pos))
      ));
      if (!best) {
        best = availablePlayers.find(p => !used.has(p.id) && p.pos !== "POR");
      }
      if (best) {
        newLineup[idx] = best.id;
        used.add(best.id);
      }
    });

    const newBench = team.players.filter(p => !used.has(p.id)).map(p => p.id);

    tactics.lineup = newLineup;
    tactics.bench = newBench;
  }

  render();
}
