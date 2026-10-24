// Vista del Hub Principal del Manager

export function renderHubView(container, gameState, callbacks) {
  const userTeam = (gameState.teams || []).find(t => t.id === gameState.userTeamId) || (gameState.teams && gameState.teams[0]);
  if (!userTeam) {
    callbacks?.onReset?.();
    return;
  }
  const currentRoundIndex = Math.max(0, (gameState.currentRound || 1) - 1);
  const currentRoundData = (gameState.schedule || [])[currentRoundIndex];

  // Encontrar el partido del usuario en esta jornada
  const userMatch = currentRoundData?.matches?.find(
    m => m.homeTeamId === userTeam.id || m.awayTeamId === userTeam.id
  );

  const isHome = userMatch?.homeTeamId === userTeam.id;
  const opponentId = isHome ? userMatch?.awayTeamId : userMatch?.homeTeamId;
  const opponentTeam = (gameState.teams || []).find(t => t.id === opponentId) || (gameState.teams || []).find(t => t.id !== userTeam.id) || userTeam;

  // Clasificación actual del usuario
  const userStanding = (gameState.standings || []).find(r => r.teamId === userTeam.id) || { points: 0, played: 0 };
  const userRank = Math.max(1, (gameState.standings || []).indexOf(userStanding) + 1);
  const opponentStanding = (gameState.standings || []).find(r => r.teamId === opponentId) || { points: 0, played: 0 };
  const opponentRank = Math.max(1, (gameState.standings || []).indexOf(opponentStanding) + 1);

  // Próximas 3 jornadas
  const upcomingFixtures = (gameState.schedule || []).slice(currentRoundIndex, currentRoundIndex + 3).map(round => {
    const m = (round.matches || []).find(x => x.homeTeamId === userTeam.id || x.awayTeamId === userTeam.id);
    const opId = m?.homeTeamId === userTeam.id ? m?.awayTeamId : m?.homeTeamId;
    const op = (gameState.teams || []).find(t => t.id === opId) || userTeam;
    return {
      round: round.roundNumber,
      isHome: m?.homeTeamId === userTeam.id,
      opponent: op
    };
  });

  // Goleador del equipo, enfermería y sanciones
  const teamScorers = [...(userTeam.players || [])].sort((a, b) => (b.goals || 0) - (a.goals || 0));
  const topTeamScorer = teamScorers[0] || { name: "Sin datos", goals: 0 };
  const injuredPlayers = (userTeam.players || []).filter(p => p.injury && p.injury.roundsLeft > 0);
  const suspendedPlayers = (userTeam.players || []).filter(p => p.suspension && p.suspension.roundsLeft > 0);

  container.innerHTML = `
    <div class="min-h-screen bg-slate-950 text-white flex flex-col justify-between pb-20 select-none max-w-md mx-auto">
      <!-- Barra Superior del Club -->
      <header class="bg-slate-900 border-b border-slate-800 p-4 sticky top-0 z-20 shadow-md">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg shadow-lg border border-slate-700/60" style="background: linear-gradient(135deg, ${userTeam.primaryColor}, ${userTeam.secondaryColor}); color: ${userTeam.textColor};">
              ${userTeam.shortName}
            </div>
            <div>
              <h1 class="text-base font-black text-white leading-tight">${userTeam.name}</h1>
              <span class="text-xs text-slate-400 font-medium">📍 ${userTeam.stadium}</span>
            </div>
          </div>
          <!-- Posición Actual -->
          <div class="text-right">
            <div class="text-[10px] text-slate-400 uppercase font-bold">Posición</div>
            <div class="text-2xl font-black ${userRank <= 4 ? 'text-sky-400' : userRank <= 6 ? 'text-emerald-400' : userRank >= 18 ? 'text-red-400' : 'text-amber-400'}">
              ${userRank}º <span class="text-xs text-slate-400 font-normal">(${userStanding.points} pts)</span>
            </div>
          </div>
        </div>
      </header>

      <!-- Contenido Principal -->
      <div class="p-4 space-y-4 flex-1 overflow-y-auto">
        <!-- Tarjeta de Día de Partido (Próximo Encuentro) -->
        <div class="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border-2 border-sky-500/30 rounded-3xl p-5 shadow-2xl relative overflow-hidden">
          <div class="flex justify-between items-center mb-3">
            <span class="text-[10px] font-extrabold uppercase tracking-widest text-sky-400 flex items-center gap-1.5">
              <span>⚡</span> PRÓXIMO PARTIDO (JORNADA ${gameState.currentRound}/38)
            </span>
            <span class="text-[10px] px-2 py-0.5 rounded-full ${isHome ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'} font-bold">
              ${isHome ? 'EN CASA' : 'FUERA'}
            </span>
          </div>

          <!-- Enfrentamiento -->
          <div class="flex items-center justify-between my-2">
            <!-- Tu equipo -->
            <div class="flex flex-col items-center flex-1 text-center">
              <div class="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl mb-1 shadow border border-slate-700/60" style="background: linear-gradient(135deg, ${userTeam.primaryColor}, ${userTeam.secondaryColor}); color: ${userTeam.textColor};">
                ${userTeam.shortName}
              </div>
              <span class="text-xs font-bold text-white truncate max-w-[100px]">${userTeam.name}</span>
              <span class="text-[10px] text-slate-400">${userRank}º (${userStanding.points} pts)</span>
            </div>

            <!-- VS -->
            <div class="px-2 text-center">
              <span class="text-xs font-mono font-black text-slate-600 bg-slate-950 px-2.5 py-1 rounded-full border border-slate-800">VS</span>
            </div>

            <!-- Rival -->
            <div class="flex flex-col items-center flex-1 text-center">
              <div class="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl mb-1 shadow border border-slate-700/60" style="background: linear-gradient(135deg, ${opponentTeam.primaryColor}, ${opponentTeam.secondaryColor}); color: ${opponentTeam.textColor};">
                ${opponentTeam.shortName}
              </div>
              <span class="text-xs font-bold text-white truncate max-w-[100px]">${opponentTeam.name}</span>
              <span class="text-[10px] text-slate-400">${opponentRank}º (${opponentStanding.points} pts)</span>
            </div>
          </div>

          <!-- Botón de Acción Principal: JUGAR PARTIDO -->
          <button id="btn-play-match" class="w-full mt-4 py-4 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 active:scale-98 text-white font-extrabold text-sm rounded-2xl shadow-xl shadow-sky-500/25 transition-all flex items-center justify-center gap-2">
            <span>⚽ DISPUTAR JORNADA ${gameState.currentRound}</span>
            <span>➔</span>
          </button>
        </div>

        <!-- Enfermería y Parte Médico del Club -->
        ${injuredPlayers.length > 0 ? `
          <div class="bg-rose-500/10 border border-rose-500/30 rounded-2xl p-3.5">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-bold uppercase tracking-wider text-rose-300 flex items-center gap-1.5">
                <span>🏥</span> Enfermería (${injuredPlayers.length} ${injuredPlayers.length > 1 ? 'bajas' : 'baja'})
              </span>
              <span class="text-[10px] text-rose-400 font-bold bg-rose-950 px-2 py-0.5 rounded-full border border-rose-500/40">Parte Médico</span>
            </div>
            <div class="space-y-1.5">
              ${injuredPlayers.map(p => `
                <div class="flex items-center justify-between text-xs p-1.5 rounded-xl bg-slate-950/60 border border-rose-900/40">
                  <div class="flex items-center gap-2 min-w-0">
                    <span class="font-extrabold text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 flex-shrink-0">${p.pos}</span>
                    <span class="font-bold text-white truncate text-xs">${p.name}</span>
                  </div>
                  <div class="flex items-center gap-2 flex-shrink-0">
                    <span class="text-[10px] text-rose-300 font-medium">${p.injury.type}</span>
                    <span class="font-mono text-[10px] font-bold text-rose-400 bg-rose-950 px-1.5 py-0.5 rounded border border-rose-500/40">${p.injury.roundsLeft}j</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Sanciones y Disciplina del Club -->
        ${suspendedPlayers.length > 0 ? `
          <div class="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-3.5">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                <span>🛑</span> Sanciones Disciplinarias (${suspendedPlayers.length} ${suspendedPlayers.length > 1 ? 'sancionados' : 'sancionado'})
              </span>
              <span class="text-[10px] text-amber-400 font-bold bg-amber-950 px-2 py-0.5 rounded-full border border-amber-500/40">Comité Competición</span>
            </div>
            <div class="space-y-1.5">
              ${suspendedPlayers.map(p => `
                <div class="flex items-center justify-between text-xs p-1.5 rounded-xl bg-slate-950/60 border border-amber-900/40">
                  <div class="flex items-center gap-2 min-w-0">
                    <span class="font-extrabold text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 flex-shrink-0">${p.pos}</span>
                    <span class="font-bold text-white truncate text-xs">${p.name}</span>
                  </div>
                  <div class="flex items-center gap-2 flex-shrink-0">
                    <span class="text-[10px] text-amber-300 font-medium">${p.suspension.reason}</span>
                    <span class="font-mono text-[10px] font-bold text-amber-400 bg-amber-950 px-1.5 py-0.5 rounded border border-amber-500/40">${p.suspension.roundsLeft}j</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Fila de Resumen de Plantilla y Rendimiento -->
        <div class="grid grid-cols-2 gap-3">
          <!-- Goleador del Club -->
          <div class="bg-slate-900/80 border border-slate-800 p-3.5 rounded-2xl">
            <span class="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-1">Máximo Goleador</span>
            <div class="flex items-center gap-2">
              <span class="text-xl">⚽</span>
              <div class="truncate">
                <div class="text-xs font-bold text-white truncate">${topTeamScorer?.name || '-'}</div>
                <div class="text-[11px] font-black text-amber-400">${topTeamScorer?.goals || 0} goles</div>
              </div>
            </div>
          </div>

          <!-- Presupuesto / Finanzas -->
          <div class="bg-slate-900/80 border border-slate-800 p-3.5 rounded-2xl">
            <span class="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-1">Presupuesto</span>
            <div class="flex items-center gap-2">
              <span class="text-xl">💰</span>
              <div>
                <div class="text-xs font-bold text-white">Fondos del Club</div>
                <div class="text-[11px] font-black text-emerald-400">${(userTeam.budget / 1000000).toFixed(0)}M€</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Próximos Encuentros en el Calendario -->
        <div class="bg-slate-900/60 border border-slate-800 rounded-2xl p-4">
          <div class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
            <span>📅</span> Calendario Próximo
          </div>
          <div class="space-y-2">
            ${upcomingFixtures.map(f => `
              <div class="flex items-center justify-between p-2 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs">
                <div class="flex items-center gap-2">
                  <span class="font-mono text-[10px] text-slate-500 font-bold">J${f.round}</span>
                  <span class="text-[10px] px-1.5 py-0.5 rounded font-bold ${f.isHome ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'}">${f.isHome ? 'Casa' : 'Fuera'}</span>
                  <span class="font-bold text-slate-200">${f.opponent?.name || '-'}</span>
                </div>
                <span class="text-[10px] font-black px-1.5 py-0.5 bg-slate-800 rounded text-slate-400">Media ${f.opponent?.reputation || 80}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Barra de Navegación Inferior (Dock Móvil) -->
      <nav class="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 px-3 py-2 z-40 max-w-md mx-auto">
        <div class="flex items-center justify-around">
          <button class="nav-btn flex flex-col items-center text-sky-400 active:scale-90 transition" data-view="hub">
            <span class="text-lg">🏠</span>
            <span class="text-[9px] font-bold mt-0.5">Inicio</span>
          </button>
          <button class="nav-btn flex flex-col items-center text-slate-400 hover:text-white active:scale-90 transition" data-view="tactics">
            <span class="text-lg">📋</span>
            <span class="text-[9px] font-bold mt-0.5">Táctica</span>
          </button>
          <button class="nav-btn flex flex-col items-center text-slate-400 hover:text-white active:scale-90 transition" data-view="squad">
            <span class="text-lg">👥</span>
            <span class="text-[9px] font-bold mt-0.5">Plantilla</span>
          </button>
          <button class="nav-btn flex flex-col items-center text-slate-400 hover:text-white active:scale-90 transition" data-view="standings">
            <span class="text-lg">🏆</span>
            <span class="text-[9px] font-bold mt-0.5">Tabla</span>
          </button>
          <button class="nav-btn flex flex-col items-center text-slate-400 hover:text-white active:scale-90 transition" data-view="options">
            <span class="text-lg">⚙️</span>
            <span class="text-[9px] font-bold mt-0.5">Ajustes</span>
          </button>
        </div>
      </nav>

      <!-- Modal de Ajustes / Opciones -->
      <div id="modal-options" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 hidden flex flex-col justify-end">
        <div class="bg-slate-900 border-t border-slate-700 rounded-t-3xl p-5 max-w-md mx-auto w-full space-y-3">
          <div class="flex justify-between items-center mb-1">
            <h3 class="font-extrabold text-sm text-white">Opciones de la Partida</h3>
            <button id="btn-close-options" class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 font-bold">✕</button>
          </div>
          <button id="btn-save-game" class="w-full py-3 bg-slate-800 hover:bg-slate-700 active:scale-98 text-white font-bold text-xs rounded-xl border border-slate-700 flex items-center justify-center gap-2">
            <span>💾</span> Guardar Partida Manualmente
          </button>
          <button id="btn-reset-game" class="w-full py-3 bg-red-500/10 hover:bg-red-500/20 active:scale-98 text-red-400 font-bold text-xs rounded-xl border border-red-500/30 flex items-center justify-center gap-2">
            <span>🗑</span> Reiniciar Partida (Nueva Temporada)
          </button>
        </div>
      </div>
    </div>
  `;

  // Evento Jugar Partido
  container.querySelector("#btn-play-match").onclick = () => {
    callbacks.onStartMatch();
  };

  // Navegación
  container.querySelectorAll(".nav-btn").forEach(btn => {
    btn.onclick = () => {
      const view = btn.dataset.view;
      if (view === "options") {
        container.querySelector("#modal-options").classList.remove("hidden");
      } else {
        callbacks.onNavigate(view);
      }
    };
  });

  // Opciones
  const modalOpt = container.querySelector("#modal-options");
  container.querySelector("#btn-close-options").onclick = () => {
    modalOpt.classList.add("hidden");
  };

  container.querySelector("#btn-save-game").onclick = () => {
    callbacks.onSave();
    alert("¡Partida guardada con éxito en el dispositivo!");
    modalOpt.classList.add("hidden");
  };

  container.querySelector("#btn-reset-game").onclick = () => {
    if (confirm("¿Estás seguro de que deseas reiniciar la partida actual? Perderás el progreso de la temporada.")) {
      callbacks.onReset();
    }
  };
}

