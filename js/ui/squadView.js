// Vista de la Plantilla Completa y Ficha Detallada de Futbolistas

export function renderSquadView(container, gameState) {
  const team = gameState.teams.find(t => t.id === gameState.userTeamId);
  let filter = "ALL";
  let activePlayerModal = null;

  function render() {
    let filteredPlayers = [...team.players];
    if (filter === "GK") filteredPlayers = filteredPlayers.filter(p => p.pos === "POR");
    else if (filter === "DEF") filteredPlayers = filteredPlayers.filter(p => ["DFC", "LD", "LI"].includes(p.pos));
    else if (filter === "MID") filteredPlayers = filteredPlayers.filter(p => ["MCD", "MC", "MCO"].includes(p.pos));
    else if (filter === "ATT") filteredPlayers = filteredPlayers.filter(p => ["DC", "EI", "ED"].includes(p.pos));

    // Ordenar por OVR descendente
    filteredPlayers.sort((a, b) => b.ovr - a.ovr);

    container.innerHTML = `
      <div class="min-h-screen bg-slate-950 text-white flex flex-col pb-20 select-none">
        <!-- Header -->
        <header class="bg-slate-900 border-b border-slate-800 px-4 py-3 sticky top-0 z-20 flex items-center justify-between">
          <div>
            <h2 class="text-sm font-bold">Plantilla de Jugadores</h2>
            <p class="text-[10px] text-slate-400">${team.players.length} futbolistas inscritos</p>
          </div>
          <div class="text-right">
            <span class="text-[10px] text-slate-400 uppercase font-semibold">Valor plantilla</span>
            <div class="text-xs font-black text-emerald-400">${(team.budget / 1000000).toFixed(0)}M€</div>
          </div>
        </header>

        <!-- Filtros por Posición -->
        <div class="p-3 bg-slate-900/40 border-b border-slate-800 flex items-center gap-1.5 overflow-x-auto no-scrollbar text-xs">
          ${[
            { id: "ALL", label: "Todos" },
            { id: "GK", label: "Porteros" },
            { id: "DEF", label: "Defensas" },
            { id: "MID", label: "Medios" },
            { id: "ATT", label: "Delanteros" }
          ].map(f => `
            <button class="btn-filter px-3 py-1 rounded-full font-bold transition whitespace-nowrap ${filter === f.id ? 'bg-sky-500 text-white shadow-md' : 'bg-slate-800 text-slate-400 hover:text-white'}" data-filter="${f.id}">
              ${f.label}
            </button>
          `).join('')}
        </div>

        <!-- Lista de Jugadores -->
        <div class="p-3 space-y-2 flex-1 overflow-y-auto">
          ${filteredPlayers.map(p => `
            <div class="player-card bg-slate-900/80 hover:bg-slate-800/80 border border-slate-800 p-3 rounded-2xl flex items-center justify-between cursor-pointer active:scale-98 transition shadow" data-player-id="${p.id}">
              <div class="flex items-center gap-3">
                <!-- Dorsal y Posición -->
                <div class="flex flex-col items-center justify-center w-9 h-11 rounded-xl bg-slate-950 border border-slate-800">
                  <span class="text-[9px] font-mono text-slate-500 font-bold">#${p.number}</span>
                  <span class="text-[10px] font-extrabold ${p.pos === 'DC' || p.pos === 'EI' || p.pos === 'ED' ? 'text-red-400' : p.pos === 'MC' || p.pos === 'MCD' || p.pos === 'MCO' ? 'text-amber-400' : p.pos === 'POR' ? 'text-purple-400' : 'text-sky-400'}">${p.pos}</span>
                </div>

                <!-- Nombre y Goles / Disciplina -->
                <div>
                  <div class="flex items-center gap-1.5 flex-wrap">
                    <h4 class="text-xs font-bold text-white leading-tight">${p.name}</h4>
                    ${p.injury ? `<span class="px-1.5 py-0.2 rounded bg-rose-950/90 border border-rose-500/60 text-[8px] font-bold text-rose-300">🚑 ${p.injury.type} (${p.injury.roundsLeft}j)</span>` : ''}
                    ${p.suspension ? `<span class="px-1.5 py-0.2 rounded bg-amber-950/90 border border-amber-500/60 text-[8px] font-bold text-amber-300">🛑 Sancionado (${p.suspension.roundsLeft}j)</span>` : ''}
                    ${(p.fatigueLoad || 0) >= 40 ? `<span class="px-1.5 py-0.2 rounded bg-amber-950 border border-amber-500/70 text-[8px] font-bold text-amber-300">🔥 Sobrecarga</span>` : (p.fatigueLoad || 0) >= 20 ? `<span class="px-1.5 py-0.2 rounded bg-yellow-950/80 border border-yellow-500/50 text-[8px] font-bold text-yellow-300">⚠️ Fatiga acum.</span>` : ''}
                  </div>
                  <div class="flex items-center gap-2 mt-1">
                    <span class="text-[10px] text-slate-400">⚽ ${p.goals || 0}</span>
                    <span class="text-[10px] text-amber-400">🟨 ${p.seasonYellows || 0}</span>
                    ${(p.seasonReds || 0) > 0 ? `<span class="text-[10px] text-red-400">🟥 ${p.seasonReds}</span>` : ''}
                    <span class="text-[10px] font-mono ${(p.energy || 100) >= 85 ? 'text-emerald-400' : (p.energy || 100) >= 70 ? 'text-amber-400' : 'text-rose-400 font-bold'}">⚡ ${Math.round(p.energy !== undefined ? p.energy : 100)}%</span>
                    <span class="text-[9px] text-slate-500 font-mono">FIS ${p.phy || 70}</span>
                    ${p.seasonMinutes ? `<span class="text-[9px] text-slate-500 font-mono font-bold">${p.seasonMinutes}' min</span>` : ''}
                  </div>
                </div>
              </div>

              <!-- Media FC y Atributos rápidos -->
              <div class="flex items-center gap-3">
                <div class="text-right hidden sm:block">
                  <div class="text-[10px] text-slate-400 font-mono">PAC ${p.pac} | SHO ${p.sho}</div>
                  <div class="text-[10px] text-slate-400 font-mono">PAS ${p.pas} | DEF ${p.def}</div>
                </div>
                <div class="w-10 h-10 rounded-xl bg-gradient-to-br ${p.ovr >= 85 ? 'from-amber-500/20 to-amber-700/30 text-amber-400 border border-amber-500/40' : 'from-slate-800 to-slate-900 text-slate-200 border border-slate-700'} flex items-center justify-center font-black text-sm shadow">
                  ${p.ovr}
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Modal Ficha de Jugador -->
        ${activePlayerModal ? renderPlayerModal(activePlayerModal) : ""}
      </div>
    `;

    // Filtros
    container.querySelectorAll(".btn-filter").forEach(b => {
      b.onclick = () => {
        filter = b.dataset.filter;
        render();
      };
    });

    // Abrir modal de detalles
    container.querySelectorAll(".player-card").forEach(c => {
      c.onclick = () => {
        const id = c.dataset.playerId;
        activePlayerModal = team.players.find(p => p.id === id);
        render();
      };
    });

    // Cerrar modal
    const closeBtn = container.querySelector("#btn-close-pmodal");
    if (closeBtn) {
      closeBtn.onclick = () => {
        activePlayerModal = null;
        render();
      };
    }
  }

  function renderPlayerModal(p) {
    return `
      <div class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex flex-col justify-end">
        <div class="bg-slate-900 border-t border-slate-700 rounded-t-3xl p-5 max-w-md mx-auto w-full">
          <!-- Cabecera -->
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center font-black text-xl text-amber-400 shadow">
                ${p.ovr}
              </div>
              <div>
                <h3 class="text-base font-black text-white">${p.name}</h3>
                <div class="flex items-center gap-2 mt-0.5">
                  <span class="text-xs px-2 py-0.5 bg-slate-800 rounded font-bold text-sky-400">${p.pos}</span>
                  <span class="text-xs text-slate-400 font-mono">Dorsal #${p.number}</span>
                </div>
              </div>
            </div>
            <button id="btn-close-pmodal" class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 font-bold active:scale-90">✕</button>
          </div>

          <!-- Parte Médico si el jugador está lesionado -->
          ${p.injury ? `
            <div class="p-3 mb-3 rounded-2xl bg-rose-500/15 border border-rose-500/40 text-xs">
              <div class="flex items-center gap-1.5 mb-1 text-rose-300 font-extrabold text-[10px] uppercase tracking-wider">
                <span>🚑</span>
                <span>Parte Médico Oficial</span>
              </div>
              <div class="text-white font-black text-xs">${p.injury.type}</div>
              <div class="flex justify-between items-center text-[11px] text-rose-200 mt-1.5 pt-1.5 border-t border-rose-500/20">
                <span>Gravedad: <b class="text-amber-400 capitalize">${p.injury.severity === 'severe' ? 'Grave' : p.injury.severity === 'moderate' ? 'Moderada' : 'Leve'}</b></span>
                <span class="bg-rose-950/90 px-2 py-0.5 rounded border border-rose-500/50 font-mono font-bold text-rose-300">⏱️ ${p.injury.roundsLeft} jornada(s) de baja</span>
              </div>
            </div>
          ` : ''}

          ${p.suspension ? `
            <div class="p-3 mb-3 rounded-2xl bg-amber-500/15 border border-amber-500/40 text-xs">
              <div class="flex items-center gap-1.5 mb-1 text-amber-300 font-extrabold text-[10px] uppercase tracking-wider">
                <span>🛑</span>
                <span>Sanción Disciplinaria</span>
              </div>
              <div class="text-white font-black text-xs">${p.suspension.reason}</div>
              <div class="flex justify-between items-center text-[11px] text-amber-200 mt-1.5 pt-1.5 border-t border-amber-500/20">
                <span>Tarjetas acumuladas: <b class="text-amber-400">🟨 ${p.seasonYellows || 0} | 🟥 ${p.seasonReds || 0}</b></span>
                <span class="bg-amber-950/90 px-2 py-0.5 rounded border border-amber-500/50 font-mono font-bold text-amber-300">🛑 ${p.suspension.roundsLeft} jornada de baja</span>
              </div>
            </div>
          ` : ''}

          <!-- Atributos estilo FC (Hexágono / Barras) -->
          <div class="space-y-2 mb-4 bg-slate-950/70 p-3.5 rounded-2xl border border-slate-800/80">
            <div class="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">Atributos Principales</div>
            ${[
              { label: "Ritmo (PAC)", val: p.pac, color: "bg-emerald-500" },
              { label: "Tiro (SHO)", val: p.sho, color: "bg-red-500" },
              { label: "Pase (PAS)", val: p.pas, color: "bg-sky-500" },
              { label: "Regate (DRI)", val: p.dri, color: "bg-amber-500" },
              { label: "Defensa (DEF)", val: p.def, color: "bg-indigo-500" },
              { label: "Físico (PHY)", val: p.phy, color: "bg-purple-500" }
            ].map(attr => `
              <div>
                <div class="flex justify-between text-[11px] font-semibold text-slate-300 mb-0.5">
                  <span>${attr.label}</span>
                  <span class="font-bold text-white font-mono">${attr.val}</span>
                </div>
                <div class="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div class="h-full ${attr.color}" style="width: ${attr.val}%;"></div>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Estadísticas de la Temporada -->
          <div class="grid grid-cols-3 gap-2 text-center">
            <div class="p-2 rounded-xl bg-slate-950 border border-slate-800">
              <span class="text-[10px] text-slate-500 font-bold uppercase">Goles</span>
              <div class="text-base font-black text-amber-400">${p.goals || 0}</div>
            </div>
            <div class="p-2 rounded-xl bg-slate-950 border border-slate-800">
              <span class="text-[10px] text-slate-500 font-bold uppercase">Condición</span>
              <div class="text-base font-black ${(p.energy || 100) >= 85 ? 'text-emerald-400' : (p.energy || 100) >= 70 ? 'text-amber-400' : 'text-rose-400'}">${Math.round(p.energy !== undefined ? p.energy : 100)}%</div>
              <div class="text-[9px] ${(p.energy || 100) >= 85 ? 'text-emerald-400' : (p.energy || 100) >= 70 ? 'text-amber-400' : 'text-rose-400'} font-bold">${(p.fatigueLoad || 0) >= 40 ? 'Sobrecarga (Rotar)' : (p.energy || 100) >= 85 ? 'Óptimo' : (p.energy || 100) >= 70 ? 'Cansado' : 'Fatigado'}</div>
            </div>
            <div class="p-2 rounded-xl bg-slate-950 border border-slate-800">
              <span class="text-[10px] text-slate-500 font-bold uppercase">Moral</span>
              <div class="text-base font-black text-sky-400">Excelente</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  render();
}

