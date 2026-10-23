// Vista de la Pizarra Táctica y Alineaciones

import { FORMATIONS, MENTALITIES, calculateTeamAverages, calculateEffectiveRating, POSITION_ROLES, getAvailableRolesForPosition, getDefaultRoleForPosition, getRoleDetails } from "../engine/tactics.js";

export function renderTacticsView(container, gameState, onSaveTactics) {
  const team = gameState.teams.find(t => t.id === gameState.userTeamId);
  let tactics = gameState.userTactics || {
    formation: team.defaultFormation || "4-3-3",
    mentality: "balanced",
    lineup: team.players.slice(0, 11).map(p => p.id),
    bench: team.players.slice(11).map(p => p.id),
    playerRoles: {}
  };
  if (!tactics.playerRoles) tactics.playerRoles = {};

  let selectedPlayerId = null;
  let showAllRolesList = false;

  function render() {
    const formationKey = tactics.formation;
    const formation = FORMATIONS[formationKey] || FORMATIONS["4-3-3"];

    // Obtener objetos de jugador
    const lineupPlayers = tactics.lineup.map(id => team.players.find(p => p.id === id)).filter(Boolean);
    const benchPlayers = tactics.bench.map(id => team.players.find(p => p.id === id)).filter(Boolean);

    const averages = calculateTeamAverages(lineupPlayers, formationKey);

    container.innerHTML = `
      <div class="min-h-screen bg-slate-950 text-white flex flex-col pb-20 select-none">
        <!-- Barra Superior -->
        <header class="bg-slate-900 border-b border-slate-800 px-4 py-3 sticky top-0 z-20 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs" style="background: linear-gradient(135deg, ${team.primaryColor}, ${team.secondaryColor}); color: ${team.textColor};">
              ${team.shortName}
            </div>
            <div>
              <h2 class="text-sm font-bold leading-tight">Pizarra Táctica</h2>
              <span class="text-[10px] text-slate-400">Media del 11: <b class="text-amber-400">${averages.overall}</b> (DEL ${averages.attack} | MED ${averages.midfield} | DEF ${averages.defense})</span>
            </div>
          </div>
          <button id="btn-auto-align" class="text-xs bg-slate-800 hover:bg-slate-700 text-sky-400 px-2.5 py-1.5 rounded-lg border border-slate-700 font-semibold active:scale-95 transition">
            ⚡ Auto 11
          </button>
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

        <!-- Terreno de Juego Táctico (Campo Vertical) -->
        <div class="p-3">
          <div class="relative w-full max-w-sm mx-auto aspect-[3/4] bg-gradient-to-b from-emerald-800 via-emerald-700 to-emerald-900 rounded-2xl border-2 border-emerald-500/40 shadow-inner overflow-hidden p-2">
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
              const effRating = calculateEffectiveRating(player, slot.pos);
              const isSelected = selectedPlayerId === player.id;
              const isInjured = Boolean(player.injury);
              const roleId = (tactics.playerRoles && tactics.playerRoles[player.id]) || getDefaultRoleForPosition(slot.pos);
              const role = getRoleDetails(slot.pos, roleId);

              return `
                <div class="slot-player absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer flex flex-col items-center transition-transform active:scale-95 z-10"
                     style="left: ${slot.x}%; top: ${slot.y}%;"
                     data-player-id="${player.id}">
                  <!-- Ficha con dorsal y valoración -->
                  <div class="w-10 h-10 rounded-full border-2 ${isSelected ? 'border-amber-400 bg-amber-500 text-black shadow-lg shadow-amber-400/50 scale-110' : isInjured ? 'border-rose-500 bg-rose-950 text-rose-200 animate-pulse' : 'border-white/80 bg-slate-900 text-white shadow-md'} flex flex-col items-center justify-center relative transition-all">
                    <span class="text-[9px] font-black leading-none">${effRating}</span>
                    <span class="text-[8px] font-bold ${isInjured ? 'text-rose-300' : 'text-slate-300'} leading-none">${slot.label}</span>
                    <!-- Barra de energía en miniatura -->
                    <div class="absolute -bottom-1 w-6 h-1 bg-black/60 rounded-full overflow-hidden">
                      <div class="h-full ${player.energy > 70 ? 'bg-emerald-400' : player.energy > 50 ? 'bg-amber-400' : 'bg-red-500'}" style="width: ${player.energy}%;"></div>
                    </div>
                  </div>
                  <!-- Nombre del futbolista -->
                  <div class="bg-black/80 px-1.5 py-0.5 rounded text-[9px] font-bold text-white tracking-tight mt-1 truncate max-w-[70px] text-center border border-white/10 shadow">
                    ${player.name.split(' ').slice(-1)[0]}
                  </div>
                  <!-- Función / Rol asignado o Lesión / Sanción -->
                  ${isInjured ? `
                    <div class="mt-0.5 px-1 py-0.2 rounded bg-rose-900 border border-rose-500 text-[7.5px] font-bold text-rose-200 truncate max-w-[76px] text-center shadow-sm">
                      🚑 ${player.injury.roundsLeft}j
                    </div>
                  ` : player.suspension ? `
                    <div class="mt-0.5 px-1 py-0.2 rounded bg-amber-950 border border-amber-500/70 text-[7.5px] font-bold text-amber-300 truncate max-w-[76px] text-center shadow-sm">
                      🛑 ${player.suspension.roundsLeft}j
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

        <!-- Panel de Asignación de Función / Rol Táctico del Jugador Seleccionado -->
        ${(() => {
          if (!selectedPlayerId) return "";
          const selSlotIndex = tactics.lineup.indexOf(selectedPlayerId);
          if (selSlotIndex === -1) return ""; // Está en el banquillo
          const selSlot = formation.slots[selSlotIndex];
          const selPlayer = team.players.find(p => p.id === selectedPlayerId);
          if (!selPlayer || !selSlot) return "";

          const curRoleId = (tactics.playerRoles && tactics.playerRoles[selPlayer.id]) || getDefaultRoleForPosition(selSlot.pos);
          const curRole = getRoleDetails(selSlot.pos, curRoleId);
          const availRoles = getAvailableRolesForPosition(selSlot.pos);

          return `
            <div class="mx-3 my-2 p-3 bg-slate-900 border border-sky-500/50 rounded-2xl shadow-xl animate-fadeIn">
              <div class="flex items-center justify-between mb-2 pb-1.5 border-b border-slate-800">
                <div class="flex items-center gap-2">
                  <span class="text-xl">${curRole.icon}</span>
                  <div>
                    <span class="text-[9px] uppercase font-bold text-sky-400">Función táctica · ${selPlayer.name} (${selSlot.label})</span>
                    <h4 class="text-xs font-black text-white">${curRole.name}</h4>
                  </div>
                </div>
                <button id="btn-close-role-box" class="text-slate-400 hover:text-white text-xs px-2 py-0.5 rounded bg-slate-800">✕</button>
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
        </div>
      </div>
    `;

    // Eventos
    container.querySelectorAll(".btn-formation").forEach(btn => {
      btn.onclick = () => {
        tactics.formation = btn.dataset.formation;
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

    // Auto-alinear (seleccionar automáticamente a los mejores para cada puesto)
    const btnAuto = container.querySelector("#btn-auto-align");
    if (btnAuto) {
      btnAuto.onclick = () => {
        autoAlignLineup();
        onSaveTactics(tactics);
        render();
      };
    }

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

    // Intercambio táctico al tocar jugadores
    container.querySelectorAll(".slot-player, .bench-player").forEach(el => {
      el.onclick = () => {
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
    // Considerar tanto la media del jugador como su estado físico actual y descartar lesionados y sancionados
    const getMatchFitness = p => (p.ovr || 70) * (0.6 + ((p.energy !== undefined ? p.energy : 100) / 250));
    const availablePlayers = [...team.players].filter(p => !p.injury && !p.suspension).sort((a, b) => getMatchFitness(b) - getMatchFitness(a));
    const used = new Set();
    const newLineup = [];

    // Asignar mejor portero primero
    const gk = availablePlayers.find(p => p.pos === "POR");
    if (gk) {
      newLineup[0] = gk.id;
      used.add(gk.id);
    }

    // Para el resto de posiciones
    formation.slots.forEach((slot, idx) => {
      if (idx === 0) return; // Ya asignamos portero
      // Buscar mejor jugador con posición exacta no usado
      let best = availablePlayers.find(p => !used.has(p.id) && p.pos === slot.pos);
      // Si no hay exacto, el mejor que quede
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

