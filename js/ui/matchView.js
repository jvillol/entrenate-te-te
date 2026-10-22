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

  let selectedPreMatchPlayerId = null;

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
              <h2 class="text-sm font-extrabold text-white leading-tight">Alineación Oficial</h2>
            </div>
            <button id="btn-pre-auto" class="text-xs bg-slate-800 hover:bg-slate-700 text-sky-400 px-2 py-1 rounded-lg border border-slate-700 font-bold active:scale-95 transition">
              ⚡ Auto 11
            </button>
          </div>
        </header>

        <!-- Tarjeta de Enfrentamiento -->
        <div class="p-3 bg-slate-900/60 border-b border-slate-800 flex items-center justify-between text-xs">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs shadow" style="background: linear-gradient(135deg, ${userTeam.primaryColor}, ${userTeam.secondaryColor}); color: ${userTeam.textColor};">
              ${userTeam.shortName}
            </div>
            <div>
              <div class="font-black text-white text-xs">${userTeam.name}</div>
              <div class="text-[10px] text-slate-400">${isUserHome ? 'Local' : 'Visitante'} · Media <b class="text-amber-400">${averages.overall}</b></div>
            </div>
          </div>
          <span class="font-mono font-bold text-slate-500 bg-slate-950 px-2 py-0.5 rounded-full border border-slate-800">VS</span>
          <div class="flex items-center gap-2 text-right">
            <div>
              <div class="font-black text-white text-xs">${opponentTeam.name}</div>
              <div class="text-[10px] text-slate-400">Rival · Media <b class="text-slate-300">${opponentTeam.reputation}</b></div>
            </div>
            <div class="w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs shadow" style="background: linear-gradient(135deg, ${opponentTeam.primaryColor}, ${opponentTeam.secondaryColor}); color: ${opponentTeam.textColor};">
              ${opponentTeam.shortName}
            </div>
          </div>
        </div>

        <!-- Selectores Tácticos (Sistema y Mentalidad) -->
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

        <!-- Terreno de Juego Táctico Interactivo -->
        <div class="p-3 flex-1 flex flex-col justify-center">
          <div class="relative w-full aspect-[3/4] max-w-[340px] mx-auto bg-gradient-to-b from-emerald-800 via-emerald-700 to-emerald-900 rounded-2xl border-2 border-emerald-500/40 shadow-inner overflow-hidden p-2">
            <!-- Líneas del campo -->
            <div class="absolute inset-2 border-2 border-white/30 rounded-xl pointer-events-none"></div>
            <div class="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-12 border-b-2 border-x-2 border-white/30 pointer-events-none"></div>
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-white/30 rounded-full pointer-events-none"></div>
            <div class="absolute top-1/2 left-2 right-2 h-0.5 bg-white/30 -translate-y-1/2 pointer-events-none"></div>
            <div class="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-12 border-t-2 border-x-2 border-white/30 pointer-events-none"></div>

            <!-- Fichas de los 11 titulares -->
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
      </div>
    `;

    // Eventos Pre-Partido
    container.querySelector("#btn-pre-back").onclick = () => {
      if (onBackToHub) onBackToHub();
    };

    container.querySelector("#btn-pre-auto").onclick = () => {
      autoAlignLineup();
      renderPreMatch();
    };

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

    container.querySelector("#btn-start-match-confirmed").onclick = () => {
      startLiveSimulation();
    };
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
    // Aplicar alineación final elegida
    if (isUserHome) {
      sortTeamByTactics(homeTeam, gameState.userTactics);
    } else {
      sortTeamByTactics(awayTeam, gameState.userTactics);
    }

    const simulator = new MatchSimulator(homeTeam, awayTeam, {
      speed: 1, // Ritmo fluido Football Manager por defecto
      homeMentality: isUserHome ? gameState.userTactics.mentality : "balanced",
      awayMentality: !isUserHome ? gameState.userTactics.mentality : "balanced",
      onTick: updateMatchUI,
      onAlert: showMatchAlert,
      onGoal: (goalData) => handleGoalSequence(goalData),
      onFinish: handleLiveMatchEnd
    });

    let alertTimeout = null;
    let subSelectedPitchId = null;

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
            <canvas id="match-canvas" class="w-full h-full block cursor-pointer"></canvas>

            <!-- Banner de Replay (Repetición) -->
            <div id="replay-badge" class="absolute top-2 left-2 flex items-center gap-1.5 px-2.5 py-1 bg-red-600/90 text-white font-mono font-black text-[10px] rounded-lg shadow-lg uppercase tracking-wider hidden animate-pulse z-20">
              <span class="w-2 h-2 rounded-full bg-white animate-ping"></span>
              <span>📹 REPETICIÓN</span>
            </div>

            <!-- Banner de Saque de Centro -->
            <div id="kickoff-badge" class="absolute top-2 right-2 flex items-center gap-1.5 px-2.5 py-1 bg-sky-600/90 text-white font-mono font-bold text-[10px] rounded-lg shadow-lg hidden z-20">
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
              <span>🔄 HACER CAMBIOS</span>
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
    // MOTOR GRÁFICO 3D (ESTADIO Y MONIGOTES)
    // ==========================================
    function getKitColors() {
      const hPrimary = homeTeam.primaryColor || "#ffffff";
      const hSecondary = homeTeam.secondaryColor || "#1e293b";
      let aPrimary = awayTeam.primaryColor || "#000000";
      let aSecondary = awayTeam.secondaryColor || "#ffffff";

      // Si los colores coinciden visualmente, la visita usa su segunda equipación
      if (hPrimary.toLowerCase() === aPrimary.toLowerCase()) {
        aPrimary = awayTeam.secondaryColor || "#f59e0b";
      }

      return {
        home: {
          jersey: hPrimary,
          shorts: hSecondary,
          keeper: "#10b981", // Verde neón
          number: homeTeam.textColor || "#ffffff"
        },
        away: {
          jersey: aPrimary,
          shorts: aSecondary,
          keeper: "#f59e0b", // Ámbar neón
          number: awayTeam.textColor || "#ffffff"
        }
      };
    }

    const kits = getKitColors();

    // Proyección de coordenadas 3D a pantalla con perspectiva isométrica
    function toScreen3D(pitchX, pitchY, pitchZ = 0, w, h) {
      const nx = Math.max(-5, Math.min(105, pitchX)) / 100;
      const ny = Math.max(-5, Math.min(105, pitchY)) / 100;

      // Inclinación vertical del terreno
      const topY = h * 0.17;
      const botY = h * 0.86;
      const groundY = topY + ny * (botY - topY);

      // Perspectiva horizontal (trapecio: más estrecho al fondo, más ancho al frente)
      const topXMin = w * 0.13;
      const topXMax = w * 0.87;
      const botXMin = w * 0.04;
      const botXMax = w * 0.96;

      const leftX = topXMin + ny * (botXMin - topXMin);
      const rightX = topXMax + ny * (botXMax - topXMax);
      const groundX = leftX + nx * (rightX - leftX);

      // Escala por profundidad (objetos al fondo son más pequeños)
      const scale = 0.72 + ny * 0.52;

      // Elevación vertical 3D (eje Z para balones altos)
      const screenX = groundX;
      const screenY = groundY - (pitchZ * scale * 2.2);

      return { groundX, groundY, screenX, screenY, scale };
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

    function draw3DGoal(ctx, x, y1, y2, dir, w, h) {
      const gPost1 = toScreen3D(x, y1, 0, w, h);
      const gPost2 = toScreen3D(x, y2, 0, w, h);
      const gTop1 = toScreen3D(x, y1, 11, w, h);
      const gTop2 = toScreen3D(x, y2, 11, w, h);

      const netBackX = x - dir * 4;
      const tNet1 = toScreen3D(netBackX, y1, 9, w, h);
      const tNet2 = toScreen3D(netBackX, y2, 9, w, h);

      // Malla de la red translúcida
      ctx.beginPath();
      ctx.moveTo(gTop1.screenX, gTop1.screenY);
      ctx.lineTo(gTop2.screenX, gTop2.screenY);
      ctx.lineTo(tNet2.screenX, tNet2.screenY);
      ctx.lineTo(tNet1.screenX, tNet1.screenY);
      ctx.closePath();
      ctx.fillStyle = "rgba(255, 255, 255, 0.16)";
      ctx.fill();

      // Postes y larguero 3D
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 2.5;

      ctx.beginPath();
      ctx.moveTo(gPost1.groundX, gPost1.groundY);
      ctx.lineTo(gTop1.screenX, gTop1.screenY);
      ctx.lineTo(gTop2.screenX, gTop2.screenY);
      ctx.lineTo(gPost2.groundX, gPost2.groundY);
      ctx.stroke();
    }

    function draw3DPitch(ctx, w, h) {
      // Grada y noche de fondo
      ctx.fillStyle = "#080c14";
      ctx.fillRect(0, 0, w, h);

      // Perímetro exterior del césped
      const pTL = toScreen3D(-4, -4, 0, w, h);
      const pTR = toScreen3D(104, -4, 0, w, h);
      const pBR = toScreen3D(104, 104, 0, w, h);
      const pBL = toScreen3D(-4, 104, 0, w, h);

      ctx.beginPath();
      ctx.moveTo(pTL.groundX, pTL.groundY);
      ctx.lineTo(pTR.groundX, pTR.groundY);
      ctx.lineTo(pBR.groundX, pBR.groundY);
      ctx.lineTo(pBL.groundX, pBL.groundY);
      ctx.closePath();
      ctx.fillStyle = "#14532d";
      ctx.fill();

      // Bandas de césped cortado en perspectiva 3D
      const numStripes = 10;
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
        ctx.fillStyle = i % 2 === 0 ? "#15803d" : "#16a34a";
        ctx.fill();
      }

      // Valla publicitaria de fondo
      const adL = toScreen3D(0, 0, 0, w, h);
      const adR = toScreen3D(100, 0, 0, w, h);
      ctx.beginPath();
      ctx.moveTo(adL.groundX, adL.groundY - 14);
      ctx.lineTo(adR.groundX, adR.groundY - 14);
      ctx.lineTo(adR.groundX, adR.groundY);
      ctx.lineTo(adL.groundX, adL.groundY);
      ctx.closePath();
      ctx.fillStyle = "#1e293b";
      ctx.fill();
      ctx.strokeStyle = "rgba(56, 189, 248, 0.45)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Líneas blancas del terreno de juego
      ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
      ctx.lineWidth = 1.8;

      // Líneas de banda y fondo
      const cTL = toScreen3D(0, 0, 0, w, h);
      const cTR = toScreen3D(100, 0, 0, w, h);
      const cBR = toScreen3D(100, 100, 0, w, h);
      const cBL = toScreen3D(0, 100, 0, w, h);

      ctx.beginPath();
      ctx.moveTo(cTL.groundX, cTL.groundY);
      ctx.lineTo(cTR.groundX, cTR.groundY);
      ctx.lineTo(cBR.groundX, cBR.groundY);
      ctx.lineTo(cBL.groundX, cBL.groundY);
      ctx.closePath();
      ctx.stroke();

      // Línea de medio campo
      const midT = toScreen3D(50, 0, 0, w, h);
      const midB = toScreen3D(50, 100, 0, w, h);
      ctx.beginPath();
      ctx.moveTo(midT.groundX, midT.groundY);
      ctx.lineTo(midB.groundX, midB.groundY);
      ctx.stroke();

      // Círculo central 3D elíptico
      ctx.beginPath();
      for (let a = 0; a <= Math.PI * 2 + 0.1; a += 0.2) {
        const cx = 50 + Math.cos(a) * 9.15;
        const cy = 50 + Math.sin(a) * 9.15;
        const pt = toScreen3D(cx, cy, 0, w, h);
        if (a === 0) ctx.moveTo(pt.groundX, pt.groundY);
        else ctx.lineTo(pt.groundX, pt.groundY);
      }
      ctx.stroke();

      // Punto central
      const centerDot = toScreen3D(50, 50, 0, w, h);
      ctx.beginPath();
      ctx.arc(centerDot.groundX, centerDot.groundY, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.fill();

      // Áreas Locales
      draw3DBox(ctx, 0, 18, 16, 82, w, h);
      draw3DBox(ctx, 0, 36, 6, 64, w, h);

      // Áreas Visitantes
      draw3DBox(ctx, 84, 18, 100, 82, w, h);
      draw3DBox(ctx, 94, 36, 100, 64, w, h);

      // Porterías 3D
      draw3DGoal(ctx, 0, 44, 56, -1, w, h);
      draw3DGoal(ctx, 100, 44, 56, 1, w, h);
    }

    // Dibujo del monigote 3D con equipación y animación de carrera
    function drawMonigote3D(ctx, item) {
      const { groundX, groundY, scale, facingX, animPhase, side, isKeeper, number } = item;
      const kit = side === "home" ? kits.home : kits.away;
      const jerseyColor = isKeeper ? kit.keeper : kit.jersey;
      const shortsColor = kit.shorts;

      const sc = scale;

      // 1. Sombra ovalada suave bajo los pies
      ctx.beginPath();
      ctx.ellipse(groundX, groundY, 7.5 * sc, 3.2 * sc, 0, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0, 0, 0, 0.35)";
      ctx.fill();

      const hipY = groundY - 11 * sc;
      const neckY = groundY - 22 * sc;
      const headY = groundY - 26 * sc;

      // Ciclo de carrera
      const legStride = Math.sin(animPhase) * 5 * sc * facingX;
      const armStride = Math.cos(animPhase) * 4 * sc * facingX;

      // 2. Piernas
      ctx.strokeStyle = shortsColor;
      ctx.lineWidth = 2.2 * sc;
      ctx.lineCap = "round";

      // Pierna trasera
      ctx.beginPath();
      ctx.moveTo(groundX - 2 * sc, hipY);
      ctx.lineTo(groundX - 2 * sc - legStride, groundY);
      ctx.stroke();

      // Bota trasera
      ctx.fillStyle = "#0f172a";
      ctx.fillRect(groundX - 3 * sc - legStride, groundY - 2 * sc, 4 * sc * facingX, 2.5 * sc);

      // Pierna delantera
      ctx.beginPath();
      ctx.moveTo(groundX + 2 * sc, hipY);
      ctx.lineTo(groundX + 2 * sc + legStride, groundY);
      ctx.stroke();

      // Bota delantera
      ctx.fillStyle = "#0f172a";
      ctx.fillRect(groundX + 1 * sc + legStride, groundY - 2 * sc, 4 * sc * facingX, 2.5 * sc);

      // 3. Brazo trasero
      ctx.strokeStyle = jerseyColor;
      ctx.lineWidth = 2 * sc;
      ctx.beginPath();
      ctx.moveTo(groundX, neckY + 3 * sc);
      ctx.lineTo(groundX - armStride, hipY);
      ctx.stroke();

      // 4. Torso con camiseta oficial
      const torsoW = 8.5 * sc;
      const torsoH = 10 * sc;
      ctx.fillStyle = jerseyColor;
      ctx.beginPath();
      ctx.roundRect(groundX - torsoW / 2, neckY, torsoW, torsoH, 2 * sc);
      ctx.fill();

      ctx.strokeStyle = "rgba(0, 0, 0, 0.25)";
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // Dorsal en la camiseta
      ctx.fillStyle = kit.number;
      ctx.font = `bold ${Math.round(6.5 * sc)}px monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(`${number}`, groundX, neckY + torsoH / 2);

      // 5. Brazo delantero
      ctx.strokeStyle = jerseyColor;
      ctx.lineWidth = 2 * sc;
      ctx.beginPath();
      ctx.moveTo(groundX, neckY + 3 * sc);
      ctx.lineTo(groundX + armStride, hipY);
      ctx.stroke();

      // Guantes del portero
      if (isKeeper) {
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(groundX + armStride, hipY, 2.2 * sc, 0, Math.PI * 2);
        ctx.fill();
      }

      // 6. Cabeza del monigote 3D
      const headR = 3.8 * sc;
      ctx.beginPath();
      ctx.arc(groundX, headY, headR, 0, Math.PI * 2);
      ctx.fillStyle = "#fcd34d"; // Tono de piel estilizado
      ctx.fill();
      ctx.strokeStyle = "rgba(0, 0, 0, 0.2)";
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // Pelo / silueta superior
      ctx.beginPath();
      ctx.arc(groundX, headY - 1 * sc, headR * 0.9, Math.PI, 0);
      ctx.fillStyle = "#1e293b";
      ctx.fill();
    }

    // Dibujo del balón 3D con sombra y altura en el aire
    function drawBall3D(ctx, item) {
      const { groundX, groundY, screenX, screenY, scale, z } = item;

      // Sombra en el césped que se achica con la elevación Z
      const shadowR = Math.max(2, 4.8 * scale - (z || 0) * 0.1);
      const shadowAlpha = Math.max(0.12, 0.42 - (z || 0) * 0.015);
      ctx.beginPath();
      ctx.ellipse(groundX, groundY, shadowR * 1.3, shadowR * 0.7, 0, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 0, 0, ${shadowAlpha})`;
      ctx.fill();

      // Esfera del balón 3D
      const ballR = 4.2 * scale;
      ctx.beginPath();
      ctx.arc(screenX, screenY, ballR, 0, Math.PI * 2);

      const grad = ctx.createRadialGradient(
        screenX - ballR * 0.35, screenY - ballR * 0.35, ballR * 0.1,
        screenX, screenY, ballR
      );
      grad.addColorStop(0, "#ffffff");
      grad.addColorStop(0.7, "#e2e8f0");
      grad.addColorStop(1, "#64748b");
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.strokeStyle = "#0f172a";
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // ==========================================
    // ESTADO DE REPETICIONES Y SAQUE DE CENTRO
    // ==========================================
    const replayBuffer = [];
    let isReplaying = false;
    let replayFrames = [];
    let replayFrameIndex = 0;
    let isKickoffInProgress = false;

    function handleGoalSequence(goalData) {
      // 1. Pausar la simulación para que el reloj no avance durante celebración y repetición
      simulator.pause();

      const elGoalOverlay = container.querySelector("#goal-cinematic");
      const elScorer = container.querySelector("#goal-scorer-name");
      const elScore = container.querySelector("#goal-score-display");
      const elMinute = container.querySelector("#goal-minute-display");
      const replayBadge = container.querySelector("#replay-badge");

      if (elScorer) elScorer.textContent = `${goalData.shooter.name}`;
      if (elScore) elScore.textContent = goalData.score;
      if (elMinute) elMinute.textContent = `Minuto ${goalData.minute}' · ${goalData.atkTeam.name}`;

      // Mostrar cartel cinematográfico de GOL
      if (elGoalOverlay) {
        elGoalOverlay.classList.remove("opacity-0", "pointer-events-none", "scale-95");
        elGoalOverlay.classList.add("opacity-100", "scale-100");
      }

      // Guardar el clip previo al gol (últimos ~140 frames grabados)
      const recordedClip = replayBuffer.slice(-140);

      setTimeout(() => {
        // Desvanecer overlay cinematográfico
        if (elGoalOverlay) {
          elGoalOverlay.classList.remove("opacity-100", "scale-100");
          elGoalOverlay.classList.add("opacity-0", "pointer-events-none", "scale-95");
        }

        // Si tenemos suficientes frames, reproducir la repetición en cámara lenta
        if (recordedClip.length > 25) {
          isReplaying = true;
          replayFrames = recordedClip;
          replayFrameIndex = 0;
          if (replayBadge) replayBadge.classList.remove("hidden");

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

    // Bucle principal de renderizado 3D a 60 FPS
    function drawPitch() {
      if (!ctx || !canvas) return;
      resizeCanvas();
      const w = canvas.width;
      const h = canvas.height;

      // 1. Dibujar terreno de juego en perspectiva 3D
      draw3DPitch(ctx, w, h);

      const entities = [];

      if (isReplaying && replayFrames.length > 0) {
        // MODO REPETICIÓN A CÁMARA LENTA (0.65x)
        const frame = replayFrames[Math.floor(replayFrameIndex)];
        if (frame) {
          frame.home.forEach(p => {
            const pt = toScreen3D(p.curX, p.curY, 0, w, h);
            entities.push({
              type: "player",
              side: "home",
              number: p.number,
              isKeeper: p.isKeeper,
              animPhase: p.animPhase || 0,
              facingX: p.facingX || 1,
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
              isKeeper: p.isKeeper,
              animPhase: p.animPhase || 0,
              facingX: p.facingX || -1,
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
        // MODO NORMAL EN DIRECTO (60 FPS FLUIDO ESTILO FOOTBALL MANAGER)
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
            isKeeper: p.isKeeper,
            animPhase: p.animPhase,
            facingX: p.facingX,
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
            isKeeper: p.isKeeper,
            animPhase: p.animPhase,
            facingX: p.facingX,
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
              isKeeper: p.isKeeper
            })),
            away: simulator.away2D.map(p => ({
              curX: p.curX,
              curY: p.curY,
              animPhase: p.animPhase,
              facingX: p.facingX,
              number: p.number,
              isKeeper: p.isKeeper
            })),
            ball: { x: simulator.ball.x, y: simulator.ball.y, z: simulator.ball.z || 0 }
          });
          if (replayBuffer.length > 180) {
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

    // Actualización de UI
    function updateMatchUI(state) {
      const elTimer = container.querySelector("#match-timer");
      const elHScore = container.querySelector("#home-score");
      const elAScore = container.querySelector("#away-score");
      if (elTimer) elTimer.textContent = `${state.minute}'`;
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

    // Modal de Cambios en Vivo
    const modalSubs = container.querySelector("#modal-live-subs");
    const btnSubs = container.querySelector("#btn-subs");
    const btnCloseSubs = container.querySelector("#btn-close-subs");

    btnSubs.onclick = () => {
      simulator.pause();
      iconPP.textContent = "▶";
      textPP.textContent = "Reanudar";
      renderMatchSubsModal();
      modalSubs.classList.remove("hidden");
    };

    btnCloseSubs.onclick = () => {
      modalSubs.classList.add("hidden");
      simulator.start();
      iconPP.textContent = "⏸";
      textPP.textContent = "Pausar";
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
