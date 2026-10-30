// Vista de la Clasificación Completa de LaLiga, Pichichi y Ranking MVP / Valoraciones

export function renderStandingsView(container, gameState, onBackToHub) {
  let activeTab = "TABLE"; // "TABLE", "PICHICHI" o "MVP"

  function render() {
    const standings = gameState.standings;
    const allPlayers = [];
    (gameState.teams || []).forEach(t => {
      (t.players || []).forEach(p => {
        allPlayers.push({
          ...p,
          teamShort: t.shortName,
          teamName: t.name
        });
      });
    });

    const topScorers = allPlayers
      .filter(p => (p.goals || 0) > 0)
      .sort((a, b) => (b.goals || 0) - (a.goals || 0) || (b.assists || 0) - (a.assists || 0))
      .slice(0, 15);

    const topRated = allPlayers
      .filter(p => (p.matchesRated || 0) > 0 && p.avgRating)
      .sort((a, b) => (b.avgRating || 0) - (a.avgRating || 0) || (b.mvpCount || 0) - (a.mvpCount || 0) || (b.goals || 0) - (a.goals || 0))
      .slice(0, 15);

    container.innerHTML = `
      <div class="min-h-screen bg-slate-950 text-white flex flex-col pb-20 select-none">
        <!-- Header -->
        <header class="bg-slate-900 border-b border-slate-800 px-4 py-3 sticky top-0 z-20 flex items-center justify-between gap-2">
          <div class="flex items-center gap-2 min-w-0">
            ${onBackToHub ? `
              <button id="btn-standings-back" class="text-xs bg-slate-800 hover:bg-slate-700 text-sky-400 hover:text-white px-2.5 py-1.5 rounded-lg border border-slate-700 font-bold active:scale-95 transition flex items-center gap-1 shadow-sm flex-shrink-0" title="Volver al Menú Principal">
                <span>❮</span> Inicio
              </button>
            ` : ''}
            <div class="truncate">
              <h2 class="text-sm font-bold truncate">LaLiga EA Sports</h2>
              <p class="text-[10px] text-slate-400">Jornada ${gameState.currentRound} de 38</p>
            </div>
          </div>
          <!-- Selector de Pestañas -->
          <div class="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-[11px] font-bold flex-shrink-0">
            <button id="tab-table" class="px-2.5 py-1 rounded-lg transition ${activeTab === 'TABLE' ? 'bg-sky-500 text-white shadow' : 'text-slate-400'}">
              Tabla
            </button>
            <button id="tab-pichichi" class="px-2.5 py-1 rounded-lg transition ${activeTab === 'PICHICHI' ? 'bg-sky-500 text-white shadow' : 'text-slate-400'}">
              Pichichi
            </button>
            <button id="tab-mvp" class="px-2.5 py-1 rounded-lg transition ${activeTab === 'MVP' ? 'bg-amber-500 text-slate-950 font-black shadow' : 'text-amber-400/80'}">
              ⭐ MVP
            </button>
          </div>
        </header>

        <!-- Contenido -->
        <div class="p-2 flex-1 overflow-y-auto">
          ${activeTab === "TABLE" ? renderTable(standings) : activeTab === "PICHICHI" ? renderPichichi(topScorers) : renderMvpRanking(topRated)}
        </div>
      </div>
    `;

    const btnBack = container.querySelector("#btn-standings-back");
    if (btnBack && onBackToHub) {
      btnBack.onclick = () => onBackToHub();
    }

    container.querySelector("#tab-table").onclick = () => {
      activeTab = "TABLE";
      render();
    };

    container.querySelector("#tab-pichichi").onclick = () => {
      activeTab = "PICHICHI";
      render();
    };

    container.querySelector("#tab-mvp").onclick = () => {
      activeTab = "MVP";
      render();
    };
  }

  function renderTable(standings) {
    return `
      <!-- Tabla Clasificatoria -->
      <div class="bg-slate-900/90 rounded-2xl border border-slate-800 overflow-hidden shadow-xl text-xs">
        <div class="grid grid-cols-12 gap-1 p-2.5 bg-slate-950/80 text-[10px] uppercase font-bold text-slate-400 border-b border-slate-800 text-center">
          <div class="col-span-1">#</div>
          <div class="col-span-4 text-left">Equipo</div>
          <div class="col-span-1">PJ</div>
          <div class="col-span-1">PG</div>
          <div class="col-span-1">PE</div>
          <div class="col-span-1">PP</div>
          <div class="col-span-1">DG</div>
          <div class="col-span-2 text-white font-black">PTS</div>
        </div>

        <div class="divide-y divide-slate-800/60">
          ${standings.map((row, index) => {
            const pos = index + 1;
            const isUser = row.teamId === gameState.userTeamId;

            // Clases de posición europea o descenso
            let posBadgeColor = "text-slate-400";
            let leftBorder = "border-l-2 border-transparent";
            if (pos <= 4) {
              posBadgeColor = "text-sky-400 font-bold";
              leftBorder = "border-l-4 border-sky-500";
            } else if (pos === 5) {
              posBadgeColor = "text-amber-400 font-bold";
              leftBorder = "border-l-4 border-amber-500";
            } else if (pos === 6) {
              posBadgeColor = "text-emerald-400 font-bold";
              leftBorder = "border-l-4 border-emerald-500";
            } else if (pos >= 18) {
              posBadgeColor = "text-red-400 font-bold";
              leftBorder = "border-l-4 border-red-500";
            }

            return `
              <div class="grid grid-cols-12 gap-1 p-2 items-center text-center ${leftBorder} ${isUser ? 'bg-sky-500/15 font-bold border-l-4 border-sky-400' : 'hover:bg-slate-800/40'}">
                <div class="col-span-1 text-[11px] ${posBadgeColor}">${pos}</div>
                <div class="col-span-4 text-left flex items-center gap-1.5 truncate">
                  <span class="text-xs truncate ${isUser ? 'text-sky-300 font-extrabold' : 'text-slate-200'}">${row.teamName}</span>
                </div>
                <div class="col-span-1 font-mono text-[11px] text-slate-400">${row.played}</div>
                <div class="col-span-1 font-mono text-[11px] text-slate-300">${row.won}</div>
                <div class="col-span-1 font-mono text-[11px] text-slate-400">${row.drawn}</div>
                <div class="col-span-1 font-mono text-[11px] text-slate-400">${row.lost}</div>
                <div class="col-span-1 font-mono text-[11px] ${row.gd > 0 ? 'text-emerald-400' : row.gd < 0 ? 'text-red-400' : 'text-slate-400'}">${row.gd > 0 ? `+${row.gd}` : row.gd}</div>
                <div class="col-span-2 font-mono font-black text-xs text-white">${row.points}</div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Leyenda de Clasificación -->
      <div class="mt-3 p-3 bg-slate-900/60 rounded-xl border border-slate-800 text-[10px] text-slate-400 space-y-1">
        <div class="flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full bg-sky-500"></span>
          <span>1º al 4º: UEFA Champions League</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
          <span>5º: UEFA Europa League</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
          <span>6º: UEFA Conference League</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full bg-red-500"></span>
          <span>18º al 20º: Descenso a Segunda</span>
        </div>
      </div>
    `;
  }

  function renderPichichi(topScorers) {
    if (topScorers.length === 0) {
      return `
        <div class="text-center py-12 text-slate-500 text-xs">
          <div class="text-3xl mb-2">⚽</div>
          Aún no se han registrado goles en la competición.
        </div>
      `;
    }

    return `
      <div class="bg-slate-900/90 rounded-2xl border border-slate-800 overflow-hidden shadow-xl p-3">
        <div class="text-xs uppercase font-extrabold text-amber-400 tracking-wider mb-3 flex items-center gap-1.5">
          <span>🏆</span> Trofeo Pichichi - Máximos Goleadores
        </div>
        <div class="space-y-1.5">
          ${topScorers.map((s, idx) => `
            <div class="flex items-center justify-between p-2 rounded-xl bg-slate-950/70 border border-slate-800 text-xs">
              <div class="flex items-center gap-2.5 min-w-0">
                <span class="w-6 font-mono font-bold text-center ${idx === 0 ? 'text-amber-400 text-sm' : idx === 1 ? 'text-slate-300' : idx === 2 ? 'text-amber-600' : 'text-slate-500'}">
                  ${idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : idx + 1}
                </span>
                <div class="truncate">
                  <span class="font-bold text-white">${s.name}</span>
                  ${s.teamShort ? `<span class="text-[10px] text-slate-400 ml-1">(${s.teamShort})</span>` : ''}
                </div>
              </div>
              <div class="flex items-center gap-2 flex-shrink-0">
                ${(s.assists || 0) > 0 ? `<span class="text-[10px] text-sky-400 font-bold">👟 ${s.assists}</span>` : ''}
                <span class="font-mono font-black text-amber-400 text-sm">${s.goals}</span>
                <span class="text-[10px] text-slate-400">goles</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  function renderMvpRanking(topRated) {
    if (topRated.length === 0) {
      return `
        <div class="text-center py-12 text-slate-500 text-xs">
          <div class="text-3xl mb-2">⭐</div>
          Disputa al menos una jornada para ver el ranking de valoraciones y premios MVP de LaLiga.
        </div>
      `;
    }

    return `
      <div class="bg-slate-900/90 rounded-2xl border border-slate-800 overflow-hidden shadow-xl p-3">
        <div class="text-xs uppercase font-extrabold text-amber-400 tracking-wider mb-3 flex items-center gap-1.5">
          <span>⭐</span> Mejores Valoraciones y Trofeos MVP de LaLiga
        </div>
        <div class="space-y-1.5">
          ${topRated.map((p, idx) => `
            <div class="flex items-center justify-between p-2 rounded-xl bg-slate-950/70 border border-slate-800 text-xs">
              <div class="flex items-center gap-2.5 min-w-0">
                <span class="w-6 font-mono font-bold text-center ${idx === 0 ? 'text-amber-400 text-sm' : idx === 1 ? 'text-slate-300' : idx === 2 ? 'text-amber-600' : 'text-slate-500'}">
                  ${idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : idx + 1}
                </span>
                <div class="truncate">
                  <div class="font-bold text-white truncate">${p.name} <span class="text-[10px] font-semibold text-slate-400">(${p.teamShort} · ${p.pos})</span></div>
                  <div class="text-[10px] text-slate-400 flex items-center gap-2">
                    <span>⚽ ${p.goals || 0}</span>
                    <span>👟 ${p.assists || 0}</span>
                    ${(p.mvpCount || 0) > 0 ? `<span class="text-yellow-400 font-bold">🏆 ${p.mvpCount} MVP</span>` : ''}
                  </div>
                </div>
              </div>
              <div class="px-2.5 py-1 rounded-xl bg-emerald-500/15 border border-emerald-500/40 font-mono font-black text-emerald-400 text-xs flex-shrink-0">
                ⭐ ${p.avgRating.toFixed(2)}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  render();
}

