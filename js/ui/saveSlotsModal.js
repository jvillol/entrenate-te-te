// Modal visual para gestionar las 3 ranuras de guardado en caché / LocalStorage

import { SaveManager, MAX_SAVE_SLOTS } from "../engine/saveManager.js";

export function renderSaveSlotsModal(container, options = {}) {
  const {
    currentGameState = null,
    onLoadSlot,
    onSaveToSlot,
    onDeleteSlot,
    onNewGameInSlot,
    onClose
  } = options;

  const existingModal = document.getElementById("modal-save-slots");
  if (existingModal) existingModal.remove();

  const modalEl = document.createElement("div");
  modalEl.id = "modal-save-slots";
  modalEl.className = "fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex flex-col justify-end sm:justify-center items-center p-3 animate-fade-in";

  function renderContent() {
    const activeSlot = SaveManager.getActiveSlot();
    const slots = SaveManager.getAllSlotsMetadata();

    modalEl.innerHTML = `
      <div class="bg-slate-900 border border-slate-700/80 rounded-3xl p-5 max-w-md w-full shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
        <!-- Encabezado del Gestor de Ranuras -->
        <div class="flex items-center justify-between pb-3 border-b border-slate-800">
          <div class="flex items-center gap-2.5">
            <div class="w-9 h-9 rounded-xl bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-lg">
              📁
            </div>
            <div>
              <h2 class="text-sm font-black text-white leading-tight">Partidas Guardadas</h2>
              <p class="text-[10px] text-slate-400">3 ranuras en la memoria local de tu navegador</p>
            </div>
          </div>
          <button id="btn-close-save-modal" class="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 font-bold transition">
            ✕
          </button>
        </div>

        <!-- Lista de las 3 Ranuras -->
        <div class="py-3.5 space-y-3 overflow-y-auto flex-1 pr-0.5">
          ${slots.map(s => {
            const isActive = activeSlot === s.slot && currentGameState;
            return `
              <div class="p-3.5 rounded-2xl border transition-all ${s.isEmpty ? 'bg-slate-950/40 border-slate-800/80 border-dashed' : (isActive ? 'bg-slate-950/90 border-sky-500/60 shadow-lg shadow-sky-500/10' : 'bg-slate-950/70 border-slate-800')}">
                <!-- Cabecera de la ranura -->
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center gap-2">
                    <span class="text-[10px] font-black uppercase tracking-wider ${s.isEmpty ? 'text-slate-500' : 'text-sky-400'}">
                      Ranura ${s.slot}
                    </span>
                    ${isActive ? `<span class="px-2 py-0.2 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[9px] font-bold text-emerald-400">● En juego</span>` : ''}
                  </div>
                  ${!s.isEmpty ? `<span class="text-[9px] font-mono text-slate-500">${s.formattedDate}</span>` : ''}
                </div>

                ${s.isEmpty ? `
                  <!-- Ranura Vacía -->
                  <div class="py-2.5 text-center">
                    <div class="text-xs text-slate-400 font-medium mb-3">Ranura disponible para una nueva trayectoria</div>
                    <div class="flex gap-2 justify-center">
                      ${currentGameState ? `
                        <button class="btn-save-here flex-1 py-2 px-3 rounded-xl bg-sky-500 hover:bg-sky-400 active:scale-95 text-white font-bold text-xs transition shadow-md shadow-sky-500/20" data-slot="${s.slot}">
                          💾 Guardar Partida Actual Aquí
                        </button>
                      ` : `
                        <button class="btn-new-here flex-1 py-2 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-white font-bold text-xs transition shadow-md shadow-emerald-500/20" data-slot="${s.slot}">
                          ➕ Nueva Partida en Ranura ${s.slot}
                        </button>
                      `}
                    </div>
                  </div>
                ` : `
                  <!-- Ranura Ocupada con Partida -->
                  <div class="flex items-center gap-3 my-1">
                    <div class="w-11 h-11 rounded-xl flex items-center justify-center font-black text-sm shadow border border-slate-700/60 flex-shrink-0" style="background: linear-gradient(135deg, ${s.primaryColor}, ${s.secondaryColor}); color: ${s.textColor};">
                      ${s.shortName}
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="font-extrabold text-white text-xs truncate">${s.teamName}</div>
                      <div class="text-[10px] text-slate-400">
                        Jornada <b class="text-white">${s.currentRound}</b>/38 · Puesto <b class="text-amber-400">${s.rank}º</b> (${s.points} pts)
                      </div>
                      ${s.isSeasonOver ? `<span class="text-[9px] text-emerald-400 font-bold">Temporada Finalizada</span>` : ''}
                    </div>
                  </div>

                  <!-- Botones de Acción para la Ranura Ocupada -->
                  <div class="flex items-center gap-2 mt-3 pt-2.5 border-t border-slate-800/80">
                    <button class="btn-load-slot flex-1 py-2 px-3 rounded-xl bg-sky-500 hover:bg-sky-400 active:scale-95 text-white font-black text-xs transition shadow-md shadow-sky-500/20 flex items-center justify-center gap-1.5" data-slot="${s.slot}">
                      <span>▶</span> Cargar Partida
                    </button>
                    ${currentGameState ? `
                      <button class="btn-overwrite-slot py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-200 font-bold text-xs transition border border-slate-700 flex items-center gap-1" data-slot="${s.slot}" title="Sobrescribir con la partida actual">
                        <span>💾</span> Guardar
                      </button>
                    ` : ''}
                    <button class="btn-delete-slot py-2 px-2.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 active:scale-95 text-rose-400 font-bold text-xs transition border border-rose-500/30" data-slot="${s.slot}" title="Borrar esta partida">
                      🗑
                    </button>
                  </div>
                `}
              </div>
            `;
          }).join('')}
        </div>

        <!-- Pie de Información -->
        <div class="pt-3 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-500">
          <span>💾 Guardado persistente automático</span>
          <span>Versión 2026/27</span>
        </div>
      </div>
    `;

    // Eventos
    modalEl.querySelector("#btn-close-save-modal").onclick = () => {
      modalEl.remove();
      onClose?.();
    };

    // Botones de carga
    modalEl.querySelectorAll(".btn-load-slot").forEach(btn => {
      btn.onclick = () => {
        const slot = parseInt(btn.dataset.slot, 10);
        modalEl.remove();
        onLoadSlot?.(slot);
      };
    });

    // Botones de guardar aquí (ranura vacía)
    modalEl.querySelectorAll(".btn-save-here").forEach(btn => {
      btn.onclick = () => {
        const slot = parseInt(btn.dataset.slot, 10);
        onSaveToSlot?.(slot);
        renderContent();
      };
    });

    // Botones de sobrescribir
    modalEl.querySelectorAll(".btn-overwrite-slot").forEach(btn => {
      btn.onclick = () => {
        const slot = parseInt(btn.dataset.slot, 10);
        if (confirm(`¿Deseas sobrescribir la Ranura ${slot} con el progreso actual?`)) {
          onSaveToSlot?.(slot);
          renderContent();
        }
      };
    });

    // Botones de nueva partida en ranura vacía
    modalEl.querySelectorAll(".btn-new-here").forEach(btn => {
      btn.onclick = () => {
        const slot = parseInt(btn.dataset.slot, 10);
        modalEl.remove();
        onNewGameInSlot?.(slot);
      };
    });

    // Botones de borrado
    modalEl.querySelectorAll(".btn-delete-slot").forEach(btn => {
      btn.onclick = () => {
        const slot = parseInt(btn.dataset.slot, 10);
        const meta = SaveManager.getSlotMetadata(slot);
        if (confirm(`¿Estás seguro de que deseas eliminar la partida de la Ranura ${slot} (${meta.teamName || 'Ranura ' + slot})? Esta acción no se puede deshacer.`)) {
          SaveManager.deleteGame(slot);
          onDeleteSlot?.(slot);
          renderContent();
        }
      };
    });
  }

  renderContent();
  document.body.appendChild(modalEl);
}

