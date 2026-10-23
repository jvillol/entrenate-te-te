// Vista del Día de Partido: Alineación Previa al Encuentro, Radar 2D y Cambios en Vivo

import { MatchSimulator } from "../engine/matchEngine.js";
import { simulateAIParties, updateStandings } from "../engine/leagueEngine.js";
import { FORMATIONS, MENTALITIES, calculateTeamAverages, calculateEffectiveRating } from "../engine/tactics.js";

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
      bench: userTeam.players.slice(11).map(p => p.id)
    };
  }

  let preMatchTab = "USER"; // "USER" o "OPPONENT"
  let selectedPreMatchPlayerId = null;

  function getOpponentLineup(oppTeam) {
    const formationKey = oppTeam.defaultFormation || "4-3-3";
    const formation = FORMATIONS[formationKey] || FORMATIONS["4-3-3"];
    const allPlayers = [...oppTeam.players].sort((a, b) => (b.ovr || 70) - (a.ovr || 70));
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
          </div>

          <!-- Terreno de Juego Táctico Interactivo Usuario -->
          <div class="p-3 flex-1 flex flex-col justify-center">
            <div class="relative w-full aspect-[3/4] max-w-[340px] mx-auto bg-gradient-to-b from-emerald-800 via-emerald-700 to-emerald-900 rounded-2xl border-2 border-emerald-500/40 shadow-inner overflow-hidden p-2">
              <div class="absolute inset-2 border-2 border-white/30 rounded-xl pointer-events-none"></div>
              <div class="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-12 border-b-2 border-x-2 border-white/30 pointer-events-none"></div>
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-white/30 rounded-full pointer-events-none"></div>
              <div class="absolute top-1/2 left-2 right-2 h-0.5 bg-white/30 -translate-y-1/2 pointer-events-none"></div>
              <div class="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-12 border-t-2 border-x-2 border-white/30 pointer-events-none"></div>

              <!-- Fichas de los 11 titulares usuario -->
              ${formation.slots.map((slot, index) => {
                const player = lineupPlayers[index];
                if (!player) return "";
                const effRating = calculateEffectiveRating(player, slot.pos);
                const isSelected = selectedPreMatchPlayerId === player.id;

                return `
                  <div class="slot-pre-player absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer flex flex-col items-center transition-transform active:scale-95 z-10"
                       style="left: ${slot.x}%; top: ${slot.y}%;"
                       data-player-id="${player.id}">
                    <div class="w-9 h-9 rounded-full border-2 ${isSelected ? 'border-amber-400 bg-amber-500 text-black shadow-lg shadow-amber-400/50 scale-110' : 'border-white/80 bg-slate-900 text-white shadow-md'} flex flex-col items-center justify-center relative transition-all">
                      <span class="text-[9px] font-black leading-none">${effRating}</span>
                      <span class="text-[7px] font-bold text-slate-300 leading-none">${slot.label}</span>
                      <div class="absolute -bottom-1 w-5 h-1 bg-black/60 rounded-full overflow-hidden">
                        <div class="h-full ${player.energy > 70 ? 'bg-emerald-400' : player.energy > 50 ? 'bg-amber-400' : 'bg-red-500'}" style="width: ${player.energy}%;"></div>
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

          <!-- Instrucción de intercambio -->
          <div class="px-4 text-center my-1">
            <p class="text-[11px] text-slate-400">
              ${selectedPreMatchPlayerId ? '👉 Ahora toca otro titular o un suplente del banquillo para intercambiarlo.' : '💡 Toca un futbolista para modificar su puesto o sustituirlo.'}
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
                return `
                  <div class="bench-pre-card flex-shrink-0 bg-slate-900 border ${isSelected ? 'border-amber-400 bg-amber-500/20' : 'border-slate-800'} p-2 rounded-xl text-center cursor-pointer active:scale-95 transition min-w-[76px]" data-player-id="${p.id}">
                    <span class="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-slate-800 ${p.pos === 'DC' || p.pos === 'EI' || p.pos === 'ED' ? 'text-red-400' : p.pos === 'MC' || p.pos === 'MCD' || p.pos === 'MCO' ? 'text-amber-400' : p.pos === 'POR' ? 'text-purple-400' : 'text-sky-400'}">${p.pos}</span>
                    <div class="text-[10px] font-bold text-white truncate max-w-[70px] mt-1">${p.name.split(' ').slice(-1)[0]}</div>
                    <div class="text-xs font-black text-amber-400 mt-0.5">${p.ovr}</div>
                    <div class="w-10 h-1 bg-slate-800 rounded-full mx-auto mt-1 overflow-hidden">
                      <div class="h-full bg-emerald-400" style="width: ${p.energy}%;"></div>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Botón de Confirmación y Saltar al Campo -->
          <footer class="px-3">
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
                  <div class="w-10 h-1 bg-slate-800 rounded-full mx-auto mt-1 overflow-hidden">
                    <div class="h-full bg-emerald-400" style="width: ${p.energy || 100}%;"></div>
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
      startLiveSimulation();
    });

    const btnAuto = container.querySelector("#btn-pre-auto");
    if (btnAuto) {
      btnAuto.onclick = () => {
        autoAlignLineup();
        renderPreMatch();
      };
    }

    container.querySelectorAll(".btn-pre-formation").forEach(b => {
      b.onclick = () => {
        tactics.formation = b.dataset.formation;
        renderPreMatch();
      };
    });

    container.querySelectorAll(".btn-pre-mentality").forEach(b => {
      b.onclick = () => {
        tactics.mentality = b.dataset.mentality;
        renderPreMatch();
      };
    });

    container.querySelectorAll(".slot-pre-player, .bench-pre-card").forEach(el => {
      el.onclick = () => {
        handlePrePlayerTap(el.dataset.playerId);
      };
    });

    const btnConfirm = container.querySelector("#btn-start-match-confirmed");
    if (btnConfirm) {
      btnConfirm.onclick = () => {
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

    if (inLineup1 !== -1 && inLineup2 !== -1) {
      const tmp = tactics.lineup[inLineup1];
      tactics.lineup[inLineup1] = tactics.lineup[inLineup2];
      tactics.lineup[inLineup2] = tmp;
    } else if (inLineup1 !== -1 && inBench2 !== -1) {
      tactics.lineup[inLineup1] = tappedId;
      tactics.bench[inBench2] = selectedPreMatchPlayerId;
    } else if (inBench1 !== -1 && inLineup2 !== -1) {
      tactics.bench[inBench1] = tappedId;
      tactics.lineup[inLineup2] = selectedPreMatchPlayerId;
    } else if (inBench1 !== -1 && inBench2 !== -1) {
      const tmp = tactics.bench[inBench1];
      tactics.bench[inBench1] = tactics.bench[inBench2];
      tactics.bench[inBench2] = tmp;
    }

    selectedPreMatchPlayerId = null;
    renderPreMatch();
  }

  function autoAlignLineup() {
    const tactics = gameState.userTactics;
    const formation = FORMATIONS[tactics.formation] || FORMATIONS["4-3-3"];
    const allPlayers = [...userTeam.players].sort((a, b) => b.ovr - a.ovr);
    const used = new Set();
    const newLineup = [];

    const gk = allPlayers.find(p => p.pos === "POR");
    if (gk) {
      newLineup[0] = gk.id;
      used.add(gk.id);
    }

    formation.slots.forEach((slot, idx) => {
      if (idx === 0) return;
      let best = allPlayers.find(p => !used.has(p.id) && p.pos === slot.pos);
      if (!best) {
        best = allPlayers.find(p => !used.has(p.id) && p.pos !== "POR");
      }
      if (best) {
        newLineup[idx] = best.id;
        used.add(best.id);
      }
    });

    tactics.lineup = newLineup;
    tactics.bench = allPlayers.filter(p => !used.has(p.id)).map(p => p.id);
  }

  // ==========================================
  // FASE 2: SIMULACIÓN EN VIVO (PARTIDO)
  // ==========================================
  function startLiveSimulation() {
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

    const simulator = new MatchSimulator(homeTeam, awayTeam, {
      speed: 1, // Ritmo fluido Football Manager por defecto
      userSide: isUserHome ? "home" : "away",
      homeFormation: isUserHome ? gameState.userTactics.formation : oppLineupData.formationKey,
      awayFormation: !isUserHome ? gameState.userTactics.formation : oppLineupData.formationKey,
      homeMentality: isUserHome ? gameState.userTactics.mentality : "balanced",
      awayMentality: !isUserHome ? gameState.userTactics.mentality : "balanced",
      onTick: updateMatchUI,
      onAlert: showMatchAlert,
      onGoal: (goalData) => handleGoalSequence(goalData),
      onHalfTime: (htState) => handleHalfTimeSequence(htState),
      onSubstitution: (subData) => handleSubstitutionChyron(subData),
      onHighlightStart: (hlData) => handleHighlightStart(hlData),
      onHighlightEnd: () => handleHighlightEnd(),
      onSetPiece: (spInfo) => openSetPieceModal(spInfo),
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

          <div class="relative w-full aspect-[16/10] bg-slate-900 rounded-2xl border-2 border-slate-800 shadow-2xl overflow-hidden">
            <!-- Canvas 3D -->
            <canvas id="match-canvas" class="w-full h-full block cursor-pointer" title="Toca para cambiar de cámara"></canvas>

            <!-- Selector de Cámaras FM26 (TV Broadcast / Táctica / Gol) -->
            <div class="absolute top-2 right-2 flex items-center bg-slate-950/85 backdrop-blur-md p-0.5 rounded-lg border border-slate-700/80 z-20 text-[9px] font-bold shadow-lg">
              <button id="cam-btn-broadcast" class="btn-cam px-2 py-0.5 rounded-md bg-emerald-500 text-white shadow transition" data-cam="broadcast">📺 TV</button>
              <button id="cam-btn-tactical" class="btn-cam px-2 py-0.5 rounded-md text-slate-400 hover:text-white transition" data-cam="tactical">🦅 Táctica</button>
              <button id="cam-btn-goal" class="btn-cam px-2 py-0.5 rounded-md text-slate-400 hover:text-white transition" data-cam="goal">🥅 Gol</button>
            </div>

            <!-- Banner de Replay (Repetición) -->
            <div id="replay-badge" class="absolute top-2 left-2 flex items-center gap-1.5 px-2.5 py-1 bg-red-600/95 text-white font-mono font-black text-[10px] rounded-lg shadow-lg uppercase tracking-wider hidden animate-pulse z-20">
              <span class="w-2 h-2 rounded-full bg-white animate-ping"></span>
              <span id="replay-badge-text">📹 REPETICIÓN</span>
            </div>

            <!-- Banner de Ocasión Clave (Highlight en directo) -->
            <div id="highlight-badge" class="absolute top-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 bg-amber-500/95 text-slate-950 font-black text-[10px] rounded-full shadow-2xl border border-amber-300 uppercase tracking-wider hidden animate-bounce z-20 whitespace-nowrap">
              <span class="w-2 h-2 rounded-full bg-slate-950 animate-ping"></span>
              <span id="highlight-badge-text">🔥 OCASIÓN CLAVE</span>
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
              <span id="subs-count-badge" class="px-2 py-0.5 rounded-full bg-black/40 text-[10px] font-mono">5 rest.</span>
            </button>

            <button id="btn-cycle-mentality" class="py-3 px-3 bg-slate-800 hover:bg-slate-700 active:scale-98 text-sky-400 font-bold text-xs rounded-xl border border-slate-700 whitespace-nowrap">
              🎯 <span id="mentality-label">${MENTALITIES.find(m => m.id === gameState.userTactics.mentality)?.label || 'Equilibrada'}</span>
            </button>
          </div>
        </footer>

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
              <button id="btn-setpiece-confirm" class="w-full py-3.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 active:scale-98 text-white font-extrabold text-xs rounded-xl shadow-xl shadow-emerald-500/25 transition flex items-center justify-center gap-2">
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
                <span id="tactics-modal-stage" class="text-[10px] uppercase font-bold text-amber-400">Descanso (45') · Ajustes Tácticos</span>
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
                💡 Toca un futbolista para modificar su puesto o sustituirlo por un suplente.
              </p>
              <div id="ht-pending-subs-text" class="text-[10px] text-emerald-400 font-bold mt-0.5 hidden">
                🔄 0 cambios seleccionados
              </div>
            </div>

            <!-- Lista del Banquillo (Suplentes) -->
            <div class="px-3 mb-3">
              <div class="text-[10px] uppercase font-bold text-slate-400 mb-1.5 flex items-center justify-between">
                <span>🪑 Suplentes disponibles</span>
                <span class="text-slate-500 font-normal">Toca para poner de titular</span>
              </div>
              <div id="ht-bench-scroll" class="flex gap-1.5 overflow-x-auto pb-2 no-scrollbar"></div>
            </div>

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

    // Proyección de coordenadas 3D a pantalla con perspectiva de retransmisión televisiva FM26
    function toScreen3D(pitchX, pitchY, pitchZ = 0, w, h) {
      let groundX, groundY, scale;

      if (cameraMode === "tactical") {
        // Vista Táctica Elevada (Cámara táctica superior estilo FM26)
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

        scale = (0.68 + ny * 0.44) * (w / 380);
      } else if (cameraMode === "goal") {
        // Vista Tras Portería (Cámara cinematográfica de gol)
        const isTargetRight = cameraPitchX >= 50;
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

        scale = (0.75 + ny * 0.58) * (w / 380);
      } else {
        // "broadcast" - TV Retransmisión estilo FM26 (Unity Engine)
        const zoom = Math.max(0.9, Math.min(1.28, cameraZoom));
        const camOffsetX = (cameraPitchX - 50) * 0.36;
        const camOffsetY = (cameraPitchY - 50) * 0.16;

        const relX = pitchX - camOffsetX;
        const relY = pitchY - camOffsetY;

        const nx = relX / 100;
        const ny = Math.max(-12, Math.min(112, relY)) / 100;

        // Inclinación vertical del terreno con zoom cinematográfico
        const baseTopY = h * 0.20;
        const baseBotY = h * 0.88;
        const midY = (baseTopY + baseBotY) / 2;
        const topY = midY - (midY - baseTopY) * zoom;
        const botY = midY + (baseBotY - midY) * zoom;

        groundY = topY + ny * (botY - topY);

        // Perspectiva horizontal trapezoidal con zoom
        const midX = w / 2;
        const baseTopSpan = w * 0.76 * zoom;
        const baseBotSpan = w * 0.94 * zoom;

        const leftX = (midX - baseTopSpan / 2) + ny * ((midX - baseBotSpan / 2) - (midX - baseTopSpan / 2));
        const rightX = (midX + baseTopSpan / 2) + ny * ((midX + baseBotSpan / 2) - (midX + baseTopSpan / 2));
        groundX = leftX + nx * (rightX - leftX);

        scale = (0.74 + ny * 0.54) * (w / 380) * zoom;
      }

      // Elevación vertical 3D (eje Z para balones aéreos y saltos de cabeza)
      const screenX = groundX;
      const screenY = groundY - (pitchZ * scale * 2.4);

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

      // 6. Franjas segadas de césped cortado profesional FM26 (16 franjas verticales con textura)
      const numStripes = 16;
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

        // Tonalidad de césped rica y realista de Unity Engine
        ctx.fillStyle = i % 2 === 0 ? "#145f2c" : "#1a7538";
        ctx.fill();
      }

      // Brillo e iluminación cenital en el centro del terreno
      const pitchCenter = toScreen3D(50, 50, 0, w, h);
      const pitchSheen = ctx.createRadialGradient(
        pitchCenter.groundX, pitchCenter.groundY, 8,
        pitchCenter.groundX, pitchCenter.groundY, w * 0.48
      );
      pitchSheen.addColorStop(0, "rgba(255, 255, 255, 0.10)");
      pitchSheen.addColorStop(0.6, "rgba(255, 255, 255, 0.03)");
      pitchSheen.addColorStop(1, "rgba(0, 0, 0, 0.12)");
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

    // Dibujo del futbolista 3D humanoide articulado estilo Football Manager 26
    function drawMonigote3D(ctx, item) {
      const { groundX, groundY, scale, facingX, animPhase, side, isKeeper, number, name, isCarrier } = item;
      const kit = side === "home" ? kits.home : kits.away;
      const jerseyColor = isKeeper ? kit.keeper : kit.jersey;
      const shortsColor = kit.shorts;
      const socksColor = kit.socks || jerseyColor;

      const sc = scale;
      const nowMs = performance.now();

      // 1. Proyección de las 4 sombras del estadio (Corner Floodlights)
      drawStadiumShadows(ctx, groundX, groundY, sc, 0, 7.2);

      const hipY = groundY - 12 * sc;
      const neckY = groundY - 24 * sc;
      const headY = groundY - 28.5 * sc;

      // Inclinación aerodinámica de carrera cuando se conduce el balón
      const bodyLean = isCarrier ? facingX * 1.8 * sc : 0;

      // Cálculo de zancada de carrera (articulación de rodillas, codos y zancada)
      const legCycle = Math.sin(animPhase);
      const legStrideBack = -legCycle * 5.6 * sc * facingX;
      const legStrideFront = legCycle * 5.6 * sc * facingX;
      const kneeBendBack = Math.max(0, -legCycle) * 2.4 * sc;
      const kneeBendFront = Math.max(0, legCycle) * 2.4 * sc;

      const armCycle = Math.cos(animPhase);
      const armStrideBack = -armCycle * 4.6 * sc * facingX;
      const armStrideFront = armCycle * 4.6 * sc * facingX;

      // 2. Pierna trasera
      // Muslo (Pantalón con caída deportiva)
      ctx.strokeStyle = shortsColor;
      ctx.lineWidth = 2.8 * sc;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(groundX - 2.2 * sc, hipY);
      ctx.lineTo(groundX - 2.2 * sc + legStrideBack * 0.5, hipY + 5.8 * sc - kneeBendBack);
      ctx.stroke();

      // Media / Calceta con ribete
      ctx.strokeStyle = socksColor;
      ctx.lineWidth = 2.3 * sc;
      ctx.beginPath();
      ctx.moveTo(groundX - 2.2 * sc + legStrideBack * 0.5, hipY + 5.8 * sc - kneeBendBack);
      ctx.lineTo(groundX - 2.2 * sc + legStrideBack, groundY - 1.2 * sc);
      ctx.stroke();

      // Bota deportiva trasera con suela de tacos blanca/neón
      ctx.fillStyle = "#0f172a";
      ctx.fillRect(groundX - 3.4 * sc + legStrideBack, groundY - 2.2 * sc, 4.6 * sc * facingX, 2.4 * sc);
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(groundX - 3.4 * sc + legStrideBack, groundY - 0.7 * sc, 4.6 * sc * facingX, 0.9 * sc);

      // 3. Brazo trasero
      ctx.strokeStyle = jerseyColor;
      ctx.lineWidth = 2.3 * sc;
      ctx.beginPath();
      ctx.moveTo(groundX + bodyLean, neckY + 3.8 * sc);
      ctx.lineTo(groundX + armStrideBack + bodyLean, hipY);
      ctx.stroke();

      // Mano o guante trasero
      ctx.fillStyle = isKeeper ? "#ffffff" : "#fcd34d";
      ctx.beginPath();
      ctx.arc(groundX + armStrideBack + bodyLean, hipY + 0.8 * sc, 1.4 * sc, 0, Math.PI * 2);
      ctx.fill();

      // 4. Pierna delantera
      // Muslo (Pantalón)
      ctx.strokeStyle = shortsColor;
      ctx.lineWidth = 2.8 * sc;
      ctx.beginPath();
      ctx.moveTo(groundX + 2.2 * sc, hipY);
      ctx.lineTo(groundX + 2.2 * sc + legStrideFront * 0.5, hipY + 5.8 * sc - kneeBendFront);
      ctx.stroke();

      // Media / Calceta delantera
      ctx.strokeStyle = socksColor;
      ctx.lineWidth = 2.3 * sc;
      ctx.beginPath();
      ctx.moveTo(groundX + 2.2 * sc + legStrideFront * 0.5, hipY + 5.8 * sc - kneeBendFront);
      ctx.lineTo(groundX + 2.2 * sc + legStrideFront, groundY - 1.2 * sc);
      ctx.stroke();

      // Bota delantera con suela
      ctx.fillStyle = "#0f172a";
      ctx.fillRect(groundX + 1.2 * sc + legStrideFront, groundY - 2.2 * sc, 4.6 * sc * facingX, 2.4 * sc);
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(groundX + 1.2 * sc + legStrideFront, groundY - 0.7 * sc, 4.6 * sc * facingX, 0.9 * sc);

      // 5. Torso con Camiseta Oficial 3D (Gradiente de iluminación y dorsales)
      const torsoW = 9.6 * sc;
      const torsoH = 11.5 * sc;

      ctx.save();
      ctx.translate(groundX + bodyLean, neckY);

      // Sombreado de volumen muscular de la camiseta
      const jerseyGrad = ctx.createLinearGradient(0, 0, 0, torsoH);
      jerseyGrad.addColorStop(0, jerseyColor);
      jerseyGrad.addColorStop(1, kit.shorts || "#0f172a");
      ctx.fillStyle = jerseyColor;
      ctx.beginPath();
      ctx.roundRect(-torsoW / 2, 0, torsoW, torsoH, 2.8 * sc);
      ctx.fill();

      // Detalle de cuello / ribete oficial
      ctx.fillStyle = kit.collar || "#ffffff";
      ctx.beginPath();
      ctx.ellipse(0, 1 * sc, 2.6 * sc, 1.3 * sc, 0, 0, Math.PI * 2);
      ctx.fill();

      // Borde de costura y sombreado lateral
      ctx.strokeStyle = "rgba(0, 0, 0, 0.28)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Dorsal oficial en la espalda
      ctx.fillStyle = kit.number;
      ctx.font = `900 ${Math.round(7.2 * sc)}px monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(`${number}`, 0, torsoH * 0.56);
      ctx.restore();

      // 6. Brazo delantero
      ctx.strokeStyle = jerseyColor;
      ctx.lineWidth = 2.3 * sc;
      ctx.beginPath();
      ctx.moveTo(groundX + bodyLean, neckY + 3.8 * sc);
      ctx.lineTo(groundX + armStrideFront + bodyLean, hipY);
      ctx.stroke();

      // Guante de portero o mano anatómica
      if (isKeeper) {
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(groundX + armStrideFront + bodyLean, hipY + 0.8 * sc, 2.5 * sc, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "#10b981";
        ctx.lineWidth = 0.9;
        ctx.stroke();
      } else {
        ctx.fillStyle = "#fcd34d";
        ctx.beginPath();
        ctx.arc(groundX + armStrideFront + bodyLean, hipY + 0.8 * sc, 1.4 * sc, 0, Math.PI * 2);
        ctx.fill();
      }

      // 7. Cabeza y Pelo 3D Estilizado
      const headR = 4.3 * sc;
      const headX = groundX + bodyLean * 1.2;

      ctx.beginPath();
      ctx.arc(headX, headY, headR, 0, Math.PI * 2);
      ctx.fillStyle = "#fcd34d"; // Tono de piel
      ctx.fill();
      ctx.strokeStyle = "rgba(0, 0, 0, 0.25)";
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // Cabello modelado 3D con volumen
      ctx.beginPath();
      ctx.arc(headX, headY - 1.3 * sc, headR * 0.94, Math.PI, 0);
      ctx.fillStyle = (number % 2 === 0) ? "#1e293b" : "#451a03";
      ctx.fill();

      // 8. Rótulo Televisivo e Indicador de Jugada FM26
      const lastName = name ? name.split(' ').slice(-1)[0].toUpperCase() : `${number}`;
      const tagY = headY - headR - (isCarrier ? 13 * sc : 7.5 * sc);

      if (isCarrier) {
        // Indicador de Posesión FM26: Rombo de neón turquesa pulsante sobre el portador
        const bobDiamond = Math.sin(nowMs * 0.008) * 2 * sc;
        const dY = headY - headR - 6.5 * sc + bobDiamond;

        ctx.fillStyle = "#22d3ee";
        ctx.beginPath();
        ctx.moveTo(headX, dY - 4.5 * sc);
        ctx.lineTo(headX + 3.4 * sc, dY);
        ctx.lineTo(headX, dY + 4.5 * sc);
        ctx.lineTo(headX - 3.4 * sc, dY);
        ctx.closePath();
        ctx.fill();

        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 1;
        ctx.stroke();

        // Rótulo destacado de transmisión en directo estilo FM26
        const tagText = `${number} ${lastName}`;
        ctx.font = `900 ${Math.max(9, Math.round(9.8 * sc))}px system-ui, -apple-system, sans-serif`;
        const textW = ctx.measureText(tagText).width;
        const pillW = textW + 16 * sc;
        const pillH = 13 * sc;

        // Píldora de cristal oscuro con ribete neón del club
        ctx.fillStyle = "rgba(10, 15, 30, 0.90)";
        ctx.beginPath();
        ctx.roundRect(headX - pillW / 2, tagY - pillH / 2, pillW, pillH, pillH / 2);
        ctx.fill();
        ctx.strokeStyle = kit.jersey;
        ctx.lineWidth = 1.6;
        ctx.stroke();

        // Texto del futbolista
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(tagText, headX, tagY + 0.5);
      } else {
        // Rótulo discreto estilo FM26 para el resto de futbolistas
        const tagText = lastName;
        ctx.font = `bold ${Math.max(7, Math.round(7.4 * sc))}px system-ui, -apple-system, sans-serif`;
        const textW = ctx.measureText(tagText).width;
        const pillW = textW + 9 * sc;
        const pillH = 9.5 * sc;

        ctx.fillStyle = "rgba(10, 15, 30, 0.74)";
        ctx.beginPath();
        ctx.roundRect(headX - pillW / 2, tagY - pillH / 2, pillW, pillH, pillH / 2);
        ctx.fill();

        ctx.fillStyle = "rgba(255, 255, 255, 0.92)";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(tagText, headX, tagY);
      }
    }

    // Dibujo del balón 3D FM26 con sombra de altura cuádruple, paneles y estela de disparo
    function drawBall3D(ctx, item) {
      const { groundX, groundY, screenX, screenY, scale, z } = item;

      // 1. Sombras del balón en el césped proyectadas por los 4 focos
      drawStadiumShadows(ctx, groundX, groundY, scale, z || 0, 4.2);

      // 2. Estela cinemática de velocidad en tiros y jugadas clave
      if (ballTrail.length > 1) {
        for (let t = 0; t < ballTrail.length - 1; t++) {
          const tPt = toScreen3D(ballTrail[t].x, ballTrail[t].y, ballTrail[t].z || 0, canvas.width, canvas.height);
          const tAlpha = (t / ballTrail.length) * 0.42;
          ctx.beginPath();
          ctx.arc(tPt.screenX, tPt.screenY, (3.2 * scale) * (0.35 + (t / ballTrail.length) * 0.65), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${tAlpha})`;
          ctx.fill();
        }
      }

      // 3. Esfera del balón 3D con luz radial de focos de estadio
      const ballR = 4.6 * scale;
      ctx.beginPath();
      ctx.arc(screenX, screenY, ballR, 0, Math.PI * 2);

      const grad = ctx.createRadialGradient(
        screenX - ballR * 0.4, screenY - ballR * 0.4, ballR * 0.08,
        screenX, screenY, ballR
      );
      grad.addColorStop(0, "#ffffff");
      grad.addColorStop(0.65, "#f1f5f9");
      grad.addColorStop(1, "#334155");
      ctx.fillStyle = grad;
      ctx.fill();

      ctx.strokeStyle = "#0f172a";
      ctx.lineWidth = 1.1;
      ctx.stroke();

      // 4. Paneles pentagonales del balón oficial LaLiga / FM26 rotando
      ctx.save();
      ctx.translate(screenX, screenY);
      ctx.rotate(ballRotation);

      // Pentágono central
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

      // Detalles aerodinámicos de color LaLiga (naranja / rojo flúor)
      ctx.strokeStyle = "#f97316";
      ctx.lineWidth = 1.3 * scale;
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

    function handleHighlightStart(hlData) {
      // Registrar el frame EXACTO donde arranca la jugada clave para la repetición
      currentHighlightStartFrame = Math.max(0, replayBuffer.length - 12);

      const hlBadge = container.querySelector("#highlight-badge");
      const hlText = container.querySelector("#highlight-badge-text");
      if (hlBadge && hlText) {
        hlText.textContent = `🔥 OCASIÓN CLAVE · ${hlData.atkTeam.shortName}`;
        hlBadge.classList.remove("hidden");
      }

      showMatchAlert({ text: `⚡ ¡Jugada de peligro de ${hlData.atkTeam.name}!` });
    }

    function handleHighlightEnd() {
      const hlBadge = container.querySelector("#highlight-badge");
      if (hlBadge) hlBadge.classList.add("hidden");
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
          if (simulator.minute >= simulator.halfTimeMinute && !simulator.halfTimeTriggered) {
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
      if (remText) remText.textContent = `${subData.remaining} cambios restantes`;

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

    function drawPitch() {
      if (!ctx || !canvas) return;
      resizeCanvas();
      const w = canvas.width;
      const h = canvas.height;

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

      const targetCamX = Math.max(24, Math.min(76, activeBallX + lookaheadX));
      const targetCamY = Math.max(32, Math.min(68, activeBallY + lookaheadY));

      cameraPitchX += (targetCamX - cameraPitchX) * 0.058;
      cameraPitchY += (targetCamY - cameraPitchY) * 0.058;

      // Zoom dinámico: acercamiento sutil en jugadas de peligro / ocasiones clave para mayor impacto
      const isBoxPlay = (activeBallX < 24 || activeBallX > 76);
      const isHighlight = (currentHighlightStartFrame !== null || isReplaying);
      const targetZoom = (isHighlight || isBoxPlay) ? 1.15 : 1.0;
      cameraZoom += (targetZoom - cameraZoom) * 0.04;

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
          entities.push({
            type: "player",
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
          entities.push({
            type: "player",
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
              isKeeper: p.isKeeper
            })),
            away: simulator.away2D.map(p => ({
              curX: p.curX,
              curY: p.curY,
              animPhase: p.animPhase,
              facingX: p.facingX,
              number: p.number,
              name: p.player?.name,
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
          drawMonigote3D(ctx, item);
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
        showMatchAlert({ text: `📷 Cámara: ${cameraMode === "broadcast" ? "TV Retransmisión" : cameraMode === "tactical" ? "Vista Táctica Elevada" : "Detrás de Portería"}` });
      };
    });

    if (canvas) {
      canvas.onclick = () => {
        const modes = ["broadcast", "tactical", "goal"];
        const curIdx = modes.indexOf(cameraMode);
        cameraMode = modes[(curIdx + 1) % modes.length];
        camBtns.forEach(b => {
          b.className = b.dataset.cam === cameraMode
            ? "btn-cam px-2 py-0.5 rounded-md bg-emerald-500 text-white shadow transition"
            : "btn-cam px-2 py-0.5 rounded-md text-slate-400 hover:text-white transition";
        });
        showMatchAlert({ text: `📷 Cámara: ${cameraMode === "broadcast" ? "TV Retransmisión" : cameraMode === "tactical" ? "Vista Táctica Elevada" : "Detrás de Portería"}` });
      };
    }

    // Actualización de UI
    function updateMatchUI(state) {
      const elTimer = container.querySelector("#match-timer");
      const elHScore = container.querySelector("#home-score");
      const elAScore = container.querySelector("#away-score");
      if (elTimer) {
        if (state.isHalfTime) {
          elTimer.textContent = "45' (Descanso)";
          elTimer.className = "px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-mono font-bold";
        } else {
          elTimer.textContent = state.formattedMinute || `${state.minute}'`;
          const isAdded = (!simulator.halfTimeTriggered && state.minute > 45) || (state.minute > 90);
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
      if (subsBadge) subsBadge.textContent = `${remaining} rest.`;
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
        htBadge.textContent = `⏸️ DESCANSO (45+${simulator.firstHalfExtra}')`;
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
      if (htSubsBadge) htSubsBadge.textContent = `${remainingSubs} rest.`;

      const elTimer = container.querySelector("#match-timer");
      if (elTimer) {
        elTimer.textContent = "45' (Descanso)";
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
        elStage.textContent = isLive 
          ? `Minuto ${simulator.getFormattedMinute ? simulator.getFormattedMinute() : simulator.minute + "'"} · En Directo`
          : "Descanso (45') · Ajustes Tácticos";
      }

      const elTitle = modalHTTactics.querySelector("#tactics-modal-title");
      if (elTitle) {
        elTitle.textContent = isLive ? "Pizarra Táctica y Sustituciones" : "Pizarra Táctica y Cambios";
      }

      const elConfirmText = modalHTTactics.querySelector("#tactics-modal-btn-confirm-text");
      if (elConfirmText) {
        elConfirmText.textContent = isLive ? "⚽ APLICAR CAMBIOS Y CONTINUAR" : "⚽ GUARDAR AJUSTES Y VOLVER";
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

      const startRemaining = isUserHome ? simulator.homeSubsRemaining : simulator.awaySubsRemaining;

      function renderHTTactics() {
        const formation = FORMATIONS[htFormationKey] || FORMATIONS["4-3-3"];
        const allTeamPlayers = userTeam.players;
        const getPlayer = (id) => allTeamPlayers.find(p => p.id === id);

        const subsMadeCount = htLineupIds.filter(id => !initialPitchIds.includes(id)).length;
        const curRemaining = startRemaining - subsMadeCount;

        // Badge superior
        const elBadge = modalHTTactics.querySelector("#ht-tactic-remaining-badge");
        if (elBadge) {
          elBadge.textContent = `${curRemaining} de 5 cambios rest.`;
          elBadge.className = curRemaining > 0 
            ? "px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono font-bold text-amber-400"
            : "px-2.5 py-1 rounded-full bg-red-950/80 border border-red-500/50 text-xs font-mono font-bold text-red-400";
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

        // Texto de instrucciones
        const elInstr = modalHTTactics.querySelector("#ht-instruction-text");
        if (elInstr) {
          if (htSelectedPlayerId) {
            const selPlayer = getPlayer(htSelectedPlayerId);
            elInstr.innerHTML = `<span class="text-amber-400 font-bold">👉 Seleccionado: ${selPlayer?.name}</span>. Toca otro futbolista para intercambiar puesto o sustituirlo.`;
          } else {
            elInstr.textContent = "💡 Toca un futbolista para modificar su puesto o sustituirlo por un suplente.";
          }
        }

        // Terreno de juego táctico con slots
        const pitchSlots = modalHTTactics.querySelector("#ht-pitch-slots");
        if (pitchSlots) {
          pitchSlots.innerHTML = formation.slots.map((slot, index) => {
            const playerId = htLineupIds[index];
            const player = getPlayer(playerId);
            if (!player) return "";
            const effRating = calculateEffectiveRating(player, slot.pos);
            const isSelected = htSelectedPlayerId === player.id;
            const isNewSub = !initialPitchIds.includes(player.id);

            return `
              <div class="slot-ht-player absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer flex flex-col items-center transition-transform active:scale-95 z-10"
                   style="left: ${slot.x}%; top: ${slot.y}%;"
                   data-player-id="${player.id}">
                <div class="w-9 h-9 rounded-full border-2 ${isSelected ? 'border-amber-400 bg-amber-500 text-black shadow-lg shadow-amber-400/50 scale-110' : isNewSub ? 'border-emerald-400 bg-emerald-950 text-emerald-300 shadow-md ring-2 ring-emerald-500/50' : 'border-white/80 bg-slate-900 text-white shadow-md'} flex flex-col items-center justify-center relative transition-all">
                  <span class="text-[9px] font-black leading-none">${effRating}</span>
                  <span class="text-[7px] font-bold ${isNewSub ? 'text-emerald-400' : 'text-slate-300'} leading-none">${slot.label}</span>
                  <div class="absolute -bottom-1 w-5 h-1 bg-black/60 rounded-full overflow-hidden">
                    <div class="h-full ${player.energy > 70 ? 'bg-emerald-400' : player.energy > 50 ? 'bg-amber-400' : 'bg-red-500'}" style="width: ${player.energy || 100}%;"></div>
                  </div>
                </div>
                <div class="bg-black/80 px-1 py-0.5 rounded text-[8px] font-bold text-white tracking-tight mt-0.5 truncate max-w-[65px] text-center border border-white/10 shadow">
                  ${isNewSub ? '🔺 ' : ''}${player.name.split(' ').slice(-1)[0]}
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
          htBenchIds
        );

        if (!res.success) {
          alert(res.reason);
          return;
        }

        gameState.userTactics.formation = htFormationKey;
        gameState.userTactics.mentality = htMentality;
        gameState.userTactics.lineup = [...htLineupIds];
        gameState.userTactics.bench = [...htBenchIds];

        if (mentLabel) {
          mentLabel.textContent = mentalities.find(m => m.id === htMentality)?.label || "Equilibrada";
        }

        modalHTTactics.classList.add("hidden");

        const htSubsBadge = container.querySelector("#ht-subs-badge");
        if (htSubsBadge) htSubsBadge.textContent = `${res.remaining} rest.`;

        const subsBadge = container.querySelector("#subs-count-badge");
        if (subsBadge) subsBadge.textContent = `${res.remaining} rest.`;

        if (isLive) {
          if (res.subsCount > 0) {
            showSubstitutionChyron({
              teamSide: teamSide,
              team: userTeam,
              subs: res.subsPairs,
              minute: simulator.minute,
              remaining: res.remaining
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
              remaining: res.remaining
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
          : `🎯 FALTA PELIGROSA A FAVOR (${spInfo.minute}')`;
        badgeType.className = isCorner
          ? "text-[10px] uppercase font-black text-sky-400 bg-sky-400/10 border border-sky-400/30 px-2.5 py-0.5 rounded-full"
          : "text-[10px] uppercase font-black text-amber-400 bg-amber-400/10 border border-amber-400/30 px-2.5 py-0.5 rounded-full";
      }
      if (title) {
        title.textContent = isCorner ? "Pizarra Táctica · Saque de Esquina" : "Pizarra Táctica · Falta Peligrosa";
      }

      // Ubicación física del balón en la mini pizarra del área
      if (ballSpot) {
        if (isCorner) {
          const isLeft = spInfo.spot.y < 50;
          ballSpot.style.left = isLeft ? "12px" : "calc(100% - 24px)";
          ballSpot.style.top = "10px";
        } else {
          const pctY = Math.max(16, Math.min(84, spInfo.spot.y));
          ballSpot.style.left = `${pctY}%`;
          ballSpot.style.top = "76%";
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

      let selectedTakerId = sortedTakers[0]?.id || outfield[0]?.id;

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
      autoAssignPlacements();

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

      if (btnConfirm) {
        btnConfirm.onclick = () => {
          const currentTaker = outfield.find(p => p.id === selectedTakerId) || outfield[0];
          const resolvedPlacements = {};
          Object.keys(placements).forEach(zId => {
            const pId = placements[zId];
            const pObj = outfield.find(p => p.id === pId);
            if (pObj) resolvedPlacements[zId] = pObj;
          });

          modalSP.classList.add("hidden");

          const stratObj = strategies.find(s => s.id === currentStrategy);
          showMatchAlert({ text: `⚽ ¡${currentTaker.name} listo para ejecutar! Estrategia: ${stratObj?.label || 'Balón al área'}` });

          simulator.executeSetPiece({
            type: spInfo.type,
            attackingSide: spInfo.attackingSide,
            spot: spInfo.spot,
            taker: currentTaker,
            targetStrategy: currentStrategy,
            placements: resolvedPlacements
          }, () => {
            if (!simulator.isFinished && !simulator.isHalfTime && simulator.isRunning) {
              iconPP.textContent = "⏸";
              textPP.textContent = "Pausar";
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
          if (htSubsBadge) htSubsBadge.textContent = `${remainingSubs} rest.`;
          modalHT.classList.remove("hidden");
        }
        if (pendingUserSubs.length > 0) {
          showSubstitutionChyron({
            teamSide: isUserHome ? "home" : "away",
            team: userTeam,
            subs: [...pendingUserSubs],
            minute: 45,
            remaining: isUserHome ? simulator.homeSubsRemaining : simulator.awaySubsRemaining
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
            remaining: isUserHome ? simulator.homeSubsRemaining : simulator.awaySubsRemaining
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

    function renderMatchSubsModal() {
      const userPlayersOnPitch = isUserHome ? simulator.homePlayersOnPitch : simulator.awayPlayersOnPitch;
      const userBench = isUserHome ? simulator.homeBench : simulator.awayBench;
      const pitchList = container.querySelector("#sub-pitch-list");
      const benchList = container.querySelector("#sub-bench-list");

      pitchList.innerHTML = userPlayersOnPitch.map(p => `
        <div class="sub-pitch-item p-2 rounded-xl border ${subSelectedPitchId === p.id ? 'border-red-400 bg-red-500/20' : 'border-slate-800 bg-slate-950/70'} flex items-center justify-between text-xs cursor-pointer active:scale-98" data-id="${p.id}">
          <div class="flex items-center gap-2">
            <span class="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] font-bold text-sky-400">${p.pos}</span>
            <span class="font-bold text-white">${p.name}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-[10px] text-slate-400">⚡ ${Math.round(p.energy)}%</span>
            <span class="font-bold text-amber-400">${p.ovr}</span>
          </div>
        </div>
      `).join('');

      benchList.innerHTML = userBench.map(p => `
        <div class="sub-bench-item p-2 rounded-xl border border-slate-800 bg-slate-950/70 flex items-center justify-between text-xs cursor-pointer hover:border-emerald-500/60 active:scale-98" data-id="${p.id}">
          <div class="flex items-center gap-2">
            <span class="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] font-bold text-emerald-400">${p.pos}</span>
            <span class="font-bold text-white">${p.name}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-[10px] text-slate-400">⚡ ${Math.round(p.energy)}%</span>
            <span class="font-bold text-amber-400">${p.ovr}</span>
          </div>
        </div>
      `).join('');

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
          const res = simulator.makeSubstitution(isUserHome ? "home" : "away", subSelectedPitchId, benchId);
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
        if (result.scorers.length > 0) {
          fScorers.innerHTML = result.scorers.map(s => `
            <div class="flex items-center justify-between text-slate-300 py-0.5">
              <span>⚽ <b>${s.playerName}</b> (${s.teamName})</span>
              <span class="font-mono text-slate-500 font-bold">${s.minute}'</span>
            </div>
          `).join('');
        } else {
          fScorers.innerHTML = `<span class="text-slate-500 italic">Sin goles en el encuentro</span>`;
        }
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
