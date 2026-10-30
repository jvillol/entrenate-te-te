// Controlador Principal del Juego (State Manager & Router)

import { TEAMS_DATA } from "./data/teams.js";
import { generateSchedule, initStandings } from "./engine/leagueEngine.js";
import { SaveManager } from "./engine/saveManager.js";
import { getDefaultTacticalInstructions, buildOptimalLineup } from "./engine/tactics.js";

import { renderTeamSelect } from "./ui/teamSelectView.js";
import { renderHubView } from "./ui/hubView.js";
import { renderTacticsView } from "./ui/tacticsView.js";
import { renderSquadView } from "./ui/squadView.js";
import { renderStandingsView } from "./ui/standingsView.js";
import { renderMatchView } from "./ui/matchView.js";
import { renderSeasonEndView } from "./ui/seasonEndView.js";
import { renderSaveSlotsModal } from "./ui/saveSlotsModal.js";

class GameManager {
  constructor() {
    this.container = document.getElementById("app");
    this.currentView = "team_select";
    this.state = null;
    this.targetSlotForNewGame = null;

    this.init();
  }

  init() {
    try {
      const activeSlot = SaveManager.getActiveSlot();
      const saved = SaveManager.loadGame(activeSlot);
      if (
        saved &&
        saved.userTeamId &&
        saved.schemaVersion === "LALIGA_REAL_V8" &&
        Array.isArray(saved.teams) &&
        saved.teams.length > 0 &&
        Array.isArray(saved.standings) &&
        Array.isArray(saved.schedule) &&
        saved.teams.some(t => t.id === saved.userTeamId)
      ) {
        this.state = saved;
        if (!this.state.userTactics) {
          const userTeam = this.state.teams.find(t => t.id === this.state.userTeamId);
          const optimal = buildOptimalLineup(userTeam);
          this.state.userTactics = {
            formation: optimal.formationKey,
            mentality: "balanced",
            lineup: optimal.lineupIds,
            bench: optimal.benchIds,
            playerRoles: {},
            customPositions: {},
            instructions: getDefaultTacticalInstructions()
          };
        } else {
          if (!this.state.userTactics.instructions) {
            this.state.userTactics.instructions = getDefaultTacticalInstructions();
          }
          if (!this.state.userTactics.customPositions) {
            this.state.userTactics.customPositions = {};
          }
        }

        if (!this.state.weeklyTraining) {
        this.state.weeklyTraining = "recovery";
      }
      if (this.state.isSeasonOver) {
          this.currentView = "season_end";
        } else {
          this.currentView = "hub";
        }
      } else {
        // Si la ranura activa está vacía, pero existe otra ranura con partida guardada, cargarla
        const slots = SaveManager.getAllSlotsMetadata();
        const firstWithData = slots.find(s => !s.isEmpty);
        if (firstWithData) {
          this.loadSlot(firstWithData.slot);
          return;
        }
        this.currentView = "team_select";
      }
    } catch (e) {
      console.warn("Estado previo no compatible, iniciando nueva partida:", e);
      this.currentView = "team_select";
    }

    try {
      this.render();
    } catch (renderError) {
      console.error("Error al renderizar vista inicial:", renderError);
      this.state = null;
      this.currentView = "team_select";
      try {
        this.render();
      } catch (fatalErr) {
        this.renderFatalError(renderError);
      }
    }
  }

  renderFatalError(error) {
    if (!this.container) this.container = document.getElementById("app") || document.body;
    this.container.innerHTML = `
      <div class="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center select-none">
        <div class="w-16 h-16 rounded-3xl bg-amber-500/20 border-2 border-amber-500/50 flex items-center justify-center text-3xl mb-4">
          ⚠️
        </div>
        <h2 class="text-lg font-black text-white mb-2">Restableciendo Partida</h2>
        <p class="text-xs text-slate-400 mb-6 max-w-xs leading-relaxed">
          Se ha actualizado el simulador con nuevas mejoras tácticas. Pulsa el botón para iniciar sin errores.
        </p>
        <button id="btn-force-reset" class="px-6 py-3 rounded-2xl bg-sky-500 hover:bg-sky-400 text-white font-extrabold text-xs shadow-lg active:scale-95 transition">
          🚀 Iniciar Nueva Partida
        </button>
      </div>
    `;
    const btn = document.getElementById("btn-force-reset");
    if (btn) {
      btn.onclick = () => {
        SaveManager.deleteGame();
        location.reload();
      };
    }
  }

  startNewGame(selectedTeam) {
    const teams = JSON.parse(JSON.stringify(TEAMS_DATA));
    const schedule = generateSchedule(teams);
    const standings = initStandings(teams);
    const optimal = buildOptimalLineup(selectedTeam);

    const targetSlot = this.targetSlotForNewGame || SaveManager.getActiveSlot();
    this.targetSlotForNewGame = null;
    SaveManager.setActiveSlot(targetSlot);

    this.state = {
      schemaVersion: "LALIGA_REAL_V8",
      saveSlot: targetSlot,
      userTeamId: selectedTeam.id,
      currentRound: 1,
      schedule,
      standings,
      teams,
      userTactics: {
        formation: optimal.formationKey,
        mentality: "balanced",
        lineup: optimal.lineupIds,
        bench: optimal.benchIds,
        playerRoles: {},
        customPositions: {},
        instructions: getDefaultTacticalInstructions()
      },
      weeklyTraining: "recovery",
      topScorers: {},
      isSeasonOver: false
    };

    SaveManager.saveGame(this.state, targetSlot);
    this.currentView = "hub";
    this.render();
  }

  loadSlot(slot) {
    const loaded = SaveManager.loadGame(slot);
    if (loaded && loaded.userTeamId && Array.isArray(loaded.teams)) {
      this.state = loaded;
      SaveManager.setActiveSlot(slot);
      if (!this.state.userTactics) {
        const userTeam = this.state.teams.find(t => t.id === this.state.userTeamId);
        const optimal = buildOptimalLineup(userTeam);
        this.state.userTactics = {
          formation: optimal.formationKey,
          mentality: "balanced",
          lineup: optimal.lineupIds,
          bench: optimal.benchIds,
          playerRoles: {},
          customPositions: {},
          instructions: getDefaultTacticalInstructions()
        };
      }
      if (!this.state.weeklyTraining) {
        this.state.weeklyTraining = "recovery";
      }
      if (this.state.isSeasonOver) {
        this.currentView = "season_end";
      } else {
        this.currentView = "hub";
      }
      this.render();
    }
  }

  openSaveSlotsModal() {
    renderSaveSlotsModal(this.container, {
      currentGameState: this.state,
      onLoadSlot: (slot) => {
        this.loadSlot(slot);
      },
      onSaveToSlot: (slot) => {
        if (this.state) {
          SaveManager.saveGame(this.state, slot);
          this.state.saveSlot = slot;
          SaveManager.setActiveSlot(slot);
          alert(`✅ Partida guardada con éxito en la Ranura ${slot}`);
          this.render();
        }
      },
      onDeleteSlot: (slot) => {
        if (SaveManager.getActiveSlot() === slot && this.state) {
          this.state = null;
          const slots = SaveManager.getAllSlotsMetadata();
          const another = slots.find(s => !s.isEmpty);
          if (another) {
            this.loadSlot(another.slot);
          } else {
            this.currentView = "team_select";
            this.render();
          }
        }
      },
      onNewGameInSlot: (slot) => {
        SaveManager.setActiveSlot(slot);
        this.targetSlotForNewGame = slot;
        this.currentView = "team_select";
        this.render();
      },
      onClose: () => {
        this.render();
      }
    });
  }

  restartSeasonWithSameTeam() {
    const teams = JSON.parse(JSON.stringify(TEAMS_DATA));
    const schedule = generateSchedule(teams);
    const standings = initStandings(teams);
    const userTeam = teams.find(t => t.id === this.state.userTeamId);
    const optimal = buildOptimalLineup(userTeam);

    this.state.currentRound = 1;
    this.state.schedule = schedule;
    this.state.standings = standings;
    this.state.teams = teams;
    this.state.topScorers = {};
    this.state.isSeasonOver = false;
    this.state.weeklyTraining = "recovery";
    this.state.userTactics = {
      formation: optimal.formationKey,
      mentality: "balanced",
      lineup: optimal.lineupIds,
      bench: optimal.benchIds,
      playerRoles: {},
      customPositions: {},
      instructions: getDefaultTacticalInstructions()
    };

    SaveManager.saveGame(this.state);
    this.currentView = "hub";
    this.render();
  }

  resetGame() {
    const currentSlot = SaveManager.getActiveSlot();
    SaveManager.deleteGame(currentSlot);
    this.state = null;

    const slots = SaveManager.getAllSlotsMetadata();
    const another = slots.find(s => !s.isEmpty);
    if (another) {
      this.loadSlot(another.slot);
    } else {
      this.currentView = "team_select";
      this.render();
    }
  }

  saveCurrentState() {
    if (this.state) {
      SaveManager.saveGame(this.state);
    }
  }

  // Recuperación física y evolución del desgaste acumulado por minutos (estilo FIFA / Football Manager)
  recoverPlayersEnergy() {
    if (!this.state || !this.state.teams) return;
    const isRecoveryTraining = (this.state.weeklyTraining || "recovery") === "recovery";
    this.state.teams.forEach(team => {
      const isUserTeam = team.id === this.state.userTeamId;
      (team.players || []).forEach(p => {
        // 1. Evolución de lesiones (reducir semanas de baja y alta médica)
        if (p.injury) {
          if (p.injury.justAcquired) {
            delete p.injury.justAcquired;
          } else {
            p.injury.roundsLeft -= 1;
            if (p.injury.roundsLeft <= 0) {
              p.injury = null; // ¡Alta médica oficial!
              p.energy = 85;
            }
          }
        }

        // 2. Evolución de sanciones disciplinarias (cumplir jornadas de sanción)
        if (p.suspension) {
          if (p.suspension.justAcquired) {
            delete p.suspension.justAcquired;
          } else {
            p.suspension.roundsLeft -= 1;
            if (p.suspension.roundsLeft <= 0) {
              p.suspension = null; // ¡Sanción cumplida!
            }
          }
        }

        const matchMins = p.matchMinutes !== undefined ? p.matchMinutes : 0;
        p.seasonMinutes = (p.seasonMinutes || 0) + matchMins;

        // 3. Carga de fatiga acumulada teniendo en cuenta minutos y resistencia por OVR/PHY
        // fatigueLoad: 0 (fresco) a 100 (sobrecarga crítica)
        let fatigueLoad = p.fatigueLoad || 0;
        const phy = p.phy || 70;
        const ovr = p.ovr || 70;

        // Jugadores de élite (media alta) sufren mucho menos desgaste residual por sus cuidados y preparadores
        const ovrResistance = Math.max(0.35, (105 - ovr) / 40); // OVR 90 -> 0.37, OVR 70 -> 0.87

        if (matchMins >= 80) {
          // Disputó casi los 90 minutos: acumulación según media y físico
          const staminaFactor = Math.max(0.5, (115 - phy) / 45);
          fatigueLoad = Math.min(100, fatigueLoad + Math.round(14 * staminaFactor * ovrResistance));
        } else if (matchMins >= 45) {
          // Entre 45 y 79 minutos: carga leve
          fatigueLoad = Math.min(100, fatigueLoad + Math.round(6 * ovrResistance));
        } else if (matchMins > 0) {
          // Revulsivo (< 45 minutos): alivia fatiga acumulada
          fatigueLoad = Math.max(0, fatigueLoad - 12);
        } else {
          // Descanso completo o no convocado: ¡Rotación de plantilla salvadora!
          // Un partido de descanso completo elimina drásticamente la sobrecarga acumulada
          fatigueLoad = Math.max(0, fatigueLoad - 45);
        }
        if (isUserTeam && isRecoveryTraining) {
          fatigueLoad = Math.max(0, fatigueLoad - 8);
        }
        p.fatigueLoad = fatigueLoad;

        const curEnergy = p.energy !== undefined ? p.energy : 100;

        // Si continúa lesionado gravemente, la energía está restringida
        if (p.injury && p.injury.roundsLeft > 1) {
          p.energy = Math.min(80, curEnergy + 8);
          p.matchMinutes = 0;
          return;
        }

        // 4. Regeneración semanal teniendo en cuenta media (OVR), físico (PHY) y minutos acumulados
        // Base más generosa para una semana normal de descanso y entrenamiento
        const baseRecovery = (isUserTeam && isRecoveryTraining) ? 42 : 38;
        // Bonificación por Físico (resistencia y capacidad aeróbica)
        const phyBonus = Math.max(0, (phy - 50) * 0.38);
        // Bonificación por Media: Cuanta más media tengan, se recuperan MUCHO mejor (nutrición y fisios de élite)
        const ovrBonus = Math.max(0, (ovr - 65) * 0.75);
        // Bonificación por rotación (quedarse en banquillo o jugar pocos minutos)
        const restBonus = matchMins === 0 ? 32 : (matchMins < 45 ? 18 : (matchMins < 75 ? 8 : 0));

        const rawRecovery = baseRecovery + phyBonus + ovrBonus + restBonus;
        const totalRecovery = (isUserTeam && isRecoveryTraining) ? Math.round(rawRecovery * 1.10) : rawRecovery;
        const recoveredEnergy = curEnergy + totalRecovery;

        // 5. Techo máximo de energía inicial según la acumulación de minutos seguidos
        // Los jugadores de media alta tienen un suelo garantizado alto (94-96%)
        // Los jugadores de media baja, si encadenan partidos completos sin rotar, sí notan el cansancio (80-85%)
        const minCapByOvr = Math.min(96, Math.max(76, Math.round(76 + (ovr - 65) * 0.80)));
        const maxEnergyCap = Math.max(minCapByOvr, Math.round(100 - (fatigueLoad * 0.15)));

        p.energy = Math.min(maxEnergyCap, Math.round(recoveredEnergy));

        // Limpiar minutos del partido concluido
        p.matchMinutes = 0;
      });
    });
  }

  render() {
    if (!this.container) {
      this.container = document.getElementById("app") || document.body;
    }
    this.container.innerHTML = "";

    try {
      switch (this.currentView) {
        case "team_select":
          renderTeamSelect(this.container, TEAMS_DATA, (team) => {
            this.startNewGame(team);
          }, () => {
            this.openSaveSlotsModal();
          });
          break;

        case "hub":
          renderHubView(this.container, this.state, {
            onStartMatch: () => {
              this.currentView = "match";
              this.render();
            },
            onNavigate: (viewName) => {
              this.currentView = viewName;
              this.render();
            },
            onSave: () => {
              this.saveCurrentState();
            },
            onManageSlots: () => {
              this.openSaveSlotsModal();
            },
            onReset: () => {
              this.resetGame();
            }
          });
          break;

        case "tactics": {
          this.container.innerHTML = `
            <div id="subview-content" class="min-h-screen"></div>
            <div id="subview-nav"></div>
          `;
          const subContent = this.container.querySelector("#subview-content");
          const subNav = this.container.querySelector("#subview-nav");
          renderTacticsView(subContent, this.state, (updatedTactics) => {
            this.state.userTactics = updatedTactics;
            this.saveCurrentState();
          }, () => {
            this.currentView = "hub";
            this.render();
          });
          this.attachBottomNav("tactics", subNav);
          break;
        }

        case "squad": {
          this.container.innerHTML = `
            <div id="subview-content" class="min-h-screen"></div>
            <div id="subview-nav"></div>
          `;
          const subContent = this.container.querySelector("#subview-content");
          const subNav = this.container.querySelector("#subview-nav");
          renderSquadView(subContent, this.state, () => {
            this.currentView = "hub";
            this.render();
          });
          this.attachBottomNav("squad", subNav);
          break;
        }

        case "standings": {
          this.container.innerHTML = `
            <div id="subview-content" class="min-h-screen"></div>
            <div id="subview-nav"></div>
          `;
          const subContent = this.container.querySelector("#subview-content");
          const subNav = this.container.querySelector("#subview-nav");
          renderStandingsView(subContent, this.state, () => {
            this.currentView = "hub";
            this.render();
          });
          this.attachBottomNav("standings", subNav);
          break;
        }

        case "match":
          renderMatchView(this.container, this.state, () => {
            // El partido ha terminado: avanzamos jornada
            this.recoverPlayersEnergy();

            if (this.state.currentRound >= 38) {
              this.state.isSeasonOver = true;
              this.currentView = "season_end";
            } else {
              this.state.currentRound += 1;
              this.currentView = "hub";
            }

            this.saveCurrentState();
            this.render();
          }, () => {
            // Cancelar / Volver al Hub antes de iniciar el partido
            this.currentView = "hub";
            this.render();
          });
          break;

        case "season_end":
          renderSeasonEndView(
            this.container,
            this.state,
            () => this.restartSeasonWithSameTeam(),
            () => this.resetGame()
          );
          break;

        default:
          this.currentView = "hub";
          this.render();
      }
    } catch (renderError) {
      console.error("Error al renderizar vista:", renderError);
      this.container.innerHTML = `
        <div class="min-h-screen bg-slate-950 text-white p-6 flex flex-col items-center justify-center text-center">
          <div class="w-16 h-16 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400 text-2xl mb-4">⚠️</div>
          <h2 class="text-xl font-bold mb-2">Entrenate te te</h2>
          <p class="text-sm text-slate-400 mb-6 max-w-xs">Hubo un problema al cargar los datos anteriores. Pulsa reiniciar para comenzar la temporada actualizada con los últimos fichajes.</p>
          <button id="btn-emergency-reset" class="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-xl active:scale-95 transition">
            Iniciar Nueva Temporada
          </button>
        </div>
      `;
      const btn = document.getElementById("btn-emergency-reset");
      if (btn) {
        btn.onclick = () => this.resetGame();
      }
    }
  }

  openOptionsModal() {
    const existing = document.getElementById("global-modal-options");
    if (existing) existing.remove();

    const activeSlot = SaveManager.getActiveSlot();
    const modalEl = document.createElement("div");
    modalEl.id = "global-modal-options";
    modalEl.className = "fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex flex-col justify-end";
    modalEl.innerHTML = `
      <div class="bg-slate-900 border-t border-slate-700 rounded-t-3xl p-5 max-w-md mx-auto w-full space-y-3 shadow-2xl">
        <div class="flex justify-between items-center mb-1">
          <h3 class="font-extrabold text-sm text-white">Opciones de la Partida</h3>
          <button id="btn-global-close-options" class="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white font-bold transition">✕</button>
        </div>
        <button id="btn-global-save-game" class="w-full py-3 bg-sky-600 hover:bg-sky-500 active:scale-98 text-white font-bold text-xs rounded-xl shadow-lg shadow-sky-500/20 flex items-center justify-center gap-2 transition">
          <span>💾</span> Guardar en Ranura ${activeSlot}
        </button>
        <button id="btn-global-manage-slots" class="w-full py-3 bg-slate-800 hover:bg-slate-700 active:scale-98 text-slate-200 font-bold text-xs rounded-xl border border-slate-700 flex items-center justify-center gap-2 transition">
          <span>📁</span> Cambiar / Gestionar Partidas (3 Ranuras)
        </button>
        <button id="btn-global-reset-game" class="w-full py-3 bg-red-500/10 hover:bg-red-500/20 active:scale-98 text-red-400 font-bold text-xs rounded-xl border border-red-500/30 flex items-center justify-center gap-2 transition">
          <span>🗑</span> Reiniciar Temporada Actual
        </button>
      </div>
    `;

    modalEl.querySelector("#btn-global-close-options").onclick = () => modalEl.remove();
    modalEl.onclick = (e) => {
      if (e.target === modalEl) modalEl.remove();
    };

    modalEl.querySelector("#btn-global-save-game").onclick = () => {
      this.saveCurrentState();
      alert(`✅ ¡Partida guardada con éxito en la Ranura ${activeSlot}!`);
      modalEl.remove();
    };

    modalEl.querySelector("#btn-global-manage-slots").onclick = () => {
      modalEl.remove();
      this.openSaveSlotsModal();
    };

    modalEl.querySelector("#btn-global-reset-game").onclick = () => {
      if (confirm("¿Estás seguro de que deseas reiniciar la partida actual? Perderás el progreso de la temporada.")) {
        modalEl.remove();
        this.resetGame();
      }
    };

    document.body.appendChild(modalEl);
  }

  // Barra de navegación móvil inferior presente en pantallas secundarias
  attachBottomNav(activeView, parentEl = this.container) {
    const nav = document.createElement("nav");
    nav.className = "fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 px-3 py-2 z-40 max-w-md mx-auto";
    nav.innerHTML = `
      <div class="flex items-center justify-around">
        <button class="nav-sub flex flex-col items-center ${activeView === 'hub' ? 'text-sky-400' : 'text-slate-400 hover:text-white'} active:scale-90 transition" data-view="hub">
          <span class="text-lg">🏠</span>
          <span class="text-[9px] font-bold mt-0.5">Inicio</span>
        </button>
        <button class="nav-sub flex flex-col items-center ${activeView === 'tactics' ? 'text-sky-400' : 'text-slate-400 hover:text-white'} active:scale-90 transition" data-view="tactics">
          <span class="text-lg">📋</span>
          <span class="text-[9px] font-bold mt-0.5">Táctica</span>
        </button>
        <button class="nav-sub flex flex-col items-center ${activeView === 'squad' ? 'text-sky-400' : 'text-slate-400 hover:text-white'} active:scale-90 transition" data-view="squad">
          <span class="text-lg">👥</span>
          <span class="text-[9px] font-bold mt-0.5">Plantilla</span>
        </button>
        <button class="nav-sub flex flex-col items-center ${activeView === 'standings' ? 'text-sky-400' : 'text-slate-400 hover:text-white'} active:scale-90 transition" data-view="standings">
          <span class="text-lg">🏆</span>
          <span class="text-[9px] font-bold mt-0.5">Tabla</span>
        </button>
        <button class="nav-sub flex flex-col items-center text-slate-400 hover:text-white active:scale-90 transition" data-view="options">
          <span class="text-lg">⚙️</span>
          <span class="text-[9px] font-bold mt-0.5">Ajustes</span>
        </button>
      </div>
    `;

    nav.querySelectorAll(".nav-sub").forEach(b => {
      b.onclick = () => {
        const targetView = b.dataset.view;
        if (targetView === "options") {
          this.openOptionsModal();
        } else if (targetView !== activeView) {
          this.currentView = targetView;
          this.render();
        }
      };
    });

    parentEl.appendChild(nav);
  }
}

// Inicializar la aplicación cuando el DOM esté listo
if (document.readyState === "loading") {
  window.addEventListener("DOMContentLoaded", () => {
    new GameManager();
  });
} else {
  new GameManager();
}
