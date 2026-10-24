// Controlador Principal del Juego (State Manager & Router)

import { TEAMS_DATA } from "./data/teams.js";
import { generateSchedule, initStandings } from "./engine/leagueEngine.js";
import { SaveManager } from "./engine/saveManager.js";
import { getDefaultTacticalInstructions } from "./engine/tactics.js";

import { renderTeamSelect } from "./ui/teamSelectView.js";
import { renderHubView } from "./ui/hubView.js";
import { renderTacticsView } from "./ui/tacticsView.js";
import { renderSquadView } from "./ui/squadView.js";
import { renderStandingsView } from "./ui/standingsView.js";
import { renderMatchView } from "./ui/matchView.js";
import { renderSeasonEndView } from "./ui/seasonEndView.js";

class GameManager {
  constructor() {
    this.container = document.getElementById("app");
    this.currentView = "team_select";
    this.state = null;

    this.init();
  }

  init() {
    try {
      const saved = SaveManager.loadGame();
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
          this.state.userTactics = {
            formation: userTeam?.defaultFormation || "4-3-3",
            mentality: "balanced",
            lineup: (userTeam?.players || []).slice(0, 11).map(p => p.id),
            bench: (userTeam?.players || []).slice(11).map(p => p.id),
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

        if (this.state.isSeasonOver) {
          this.currentView = "season_end";
        } else {
          this.currentView = "hub";
        }
      } else {
        SaveManager.deleteGame();
        this.currentView = "team_select";
      }
    } catch (e) {
      console.warn("Estado previo no compatible, iniciando nueva partida:", e);
      SaveManager.deleteGame();
      this.currentView = "team_select";
    }

    try {
      this.render();
    } catch (renderError) {
      console.error("Error al renderizar vista inicial:", renderError);
      SaveManager.deleteGame();
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

    this.state = {
      schemaVersion: "LALIGA_REAL_V8",
      userTeamId: selectedTeam.id,
      currentRound: 1,
      schedule,
      standings,
      teams,
      userTactics: {
        formation: selectedTeam.defaultFormation || "4-3-3",
        mentality: "balanced",
        lineup: selectedTeam.players.slice(0, 11).map(p => p.id),
        bench: selectedTeam.players.slice(11).map(p => p.id),
        playerRoles: {},
        customPositions: {},
        instructions: getDefaultTacticalInstructions()
      },
      topScorers: {},
      isSeasonOver: false
    };

    SaveManager.saveGame(this.state);
    this.currentView = "hub";
    this.render();
  }

  restartSeasonWithSameTeam() {
    const teams = JSON.parse(JSON.stringify(TEAMS_DATA));
    const schedule = generateSchedule(teams);
    const standings = initStandings(teams);
    const userTeam = teams.find(t => t.id === this.state.userTeamId);

    this.state.currentRound = 1;
    this.state.schedule = schedule;
    this.state.standings = standings;
    this.state.teams = teams;
    this.state.topScorers = {};
    this.state.isSeasonOver = false;
    this.state.userTactics = {
      formation: userTeam.defaultFormation || "4-3-3",
      mentality: "balanced",
      lineup: userTeam.players.slice(0, 11).map(p => p.id),
      bench: userTeam.players.slice(11).map(p => p.id),
      playerRoles: {},
      customPositions: {},
      instructions: getDefaultTacticalInstructions()
    };

    SaveManager.saveGame(this.state);
    this.currentView = "hub";
    this.render();
  }

  resetGame() {
    SaveManager.deleteGame();
    this.state = null;
    this.currentView = "team_select";
    this.render();
  }

  saveCurrentState() {
    if (this.state) {
      SaveManager.saveGame(this.state);
    }
  }

  // Recuperación física y evolución del desgaste acumulado por minutos (estilo FIFA / Football Manager)
  recoverPlayersEnergy() {
    if (!this.state || !this.state.teams) return;
    this.state.teams.forEach(team => {
      (team.players || []).forEach(p => {
        // 1. Evolución de lesiones (reducir semanas de baja y alta médica)
        if (p.injury) {
          p.injury.roundsLeft -= 1;
          if (p.injury.roundsLeft <= 0) {
            p.injury = null; // ¡Alta médica oficial!
            p.energy = 85;
          }
        }

        // 2. Evolución de sanciones disciplinarias (cumplir jornadas de sanción)
        if (p.suspension) {
          p.suspension.roundsLeft -= 1;
          if (p.suspension.roundsLeft <= 0) {
            p.suspension = null; // ¡Sanción cumplida!
          }
        }

        const matchMins = p.matchMinutes !== undefined ? p.matchMinutes : 0;
        p.seasonMinutes = (p.seasonMinutes || 0) + matchMins;

        // 3. Carga de fatiga acumulada (estilo FIFA: encadenar partidos completos pasa factura)
        // fatigueLoad: 0 (fresco) a 100 (sobrecarga crítica)
        let fatigueLoad = p.fatigueLoad || 0;
        const phy = p.phy || 70;
        const ovr = p.ovr || 70;

        if (matchMins >= 70) {
          // Disputó partido completo o casi completo: genera carga residual
          // Jugadores con menor Físico (PHY) acumulan significativamente más desgaste residual
          const staminaFactor = Math.max(0.65, (115 - phy) / 45);
          fatigueLoad = Math.min(100, fatigueLoad + Math.round(18 * staminaFactor));
        } else if (matchMins >= 25) {
          // Entró de suplente: fatiga moderada, desciende levemente la sobrecarga
          fatigueLoad = Math.max(0, fatigueLoad - 6);
        } else {
          // Descanso completo o no convocado: ¡Rotación de plantilla salvadora!
          // Un partido de descanso alivia drásticamente la sobrecarga acumulada
          fatigueLoad = Math.max(0, fatigueLoad - 35);
        }
        p.fatigueLoad = fatigueLoad;

        const curEnergy = p.energy !== undefined ? p.energy : 100;

        // Si continúa lesionado gravemente, la energía está restringida
        if (p.injury && p.injury.roundsLeft > 1) {
          p.energy = Math.min(80, curEnergy + 8);
          p.matchMinutes = 0;
          return;
        }

        // 4. Regeneración semanal teniendo en cuenta media (OVR), físico (PHY) y minutos
        const baseRecovery = 22;
        // Bonificación por Físico (fondo y masa muscular)
        const phyBonus = Math.max(0, (phy - 50) * 0.35);
        // Bonificación por Media (nutrición, profesionalismo y recuperación de élite)
        const ovrBonus = Math.max(0, (ovr - 60) * 0.22);
        // Bonificación por rotación (quedarse en banquillo da +28 energía limpia)
        const restBonus = matchMins === 0 ? 28 : (matchMins < 45 ? 14 : 0);

        const totalRecovery = baseRecovery + phyBonus + ovrBonus + restBonus;
        const recoveredEnergy = curEnergy + totalRecovery;

        // 5. TOQUE FIFA: Techo máximo de energía inicial según la acumulación de minutos seguidos
        // Si no se rota al futbolista tras 2-3 partidos de 90', su tope cae al 92%, 88%, etc.
        // Al darle descanso 1 jornada, fatigueLoad cae y vuelve a recuperar al 100%.
        const maxEnergyCap = Math.max(78, Math.round(100 - (fatigueLoad * 0.20)));

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
            onReset: () => {
              this.resetGame();
            }
          });
          break;

        case "tactics":
          renderTacticsView(this.container, this.state, (updatedTactics) => {
            this.state.userTactics = updatedTactics;
            this.saveCurrentState();
          });
          this.attachBottomNav("tactics");
          break;

        case "squad":
          renderSquadView(this.container, this.state);
          this.attachBottomNav("squad");
          break;

        case "standings":
          renderStandingsView(this.container, this.state);
          this.attachBottomNav("standings");
          break;

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

  // Barra de navegación móvil inferior presente en pantallas secundarias
  attachBottomNav(activeView) {
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
      </div>
    `;

    nav.querySelectorAll(".nav-sub").forEach(b => {
      b.onclick = () => {
        this.currentView = b.dataset.view;
        this.render();
      };
    });

    this.container.appendChild(nav);
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
