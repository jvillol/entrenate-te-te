// Gestor de guardado en LocalStorage con soporte para 3 ranuras independientes (Slots 1, 2 y 3)

const LEGACY_KEY = "ENTRENATE_TE_TE_LALIGA_REAL_V8";
const ACTIVE_SLOT_KEY = "ENTRENATE_TE_TE_ACTIVE_SLOT";
const CURRENT_SCHEMA = "LALIGA_REAL_V8";
export const MAX_SAVE_SLOTS = 3;

function getSlotStorageKey(slot = 1) {
  const s = Math.max(1, Math.min(MAX_SAVE_SLOTS, parseInt(slot, 10) || 1));
  return `ENTRENATE_TE_TE_SLOT_${s}`;
}

export class SaveManager {
  /**
   * Obtiene el índice de la ranura actualmente activa (1, 2 o 3)
   */
  static getActiveSlot() {
    try {
      const savedSlot = parseInt(localStorage.getItem(ACTIVE_SLOT_KEY), 10);
      if (savedSlot >= 1 && savedSlot <= MAX_SAVE_SLOTS) {
        return savedSlot;
      }
    } catch (e) {}
    return 1;
  }

  /**
   * Establece la ranura activa
   */
  static setActiveSlot(slot) {
    const s = Math.max(1, Math.min(MAX_SAVE_SLOTS, parseInt(slot, 10) || 1));
    try {
      localStorage.setItem(ACTIVE_SLOT_KEY, String(s));
    } catch (e) {}
    return s;
  }

  /**
   * Comprueba si existe partida guardada en la ranura indicada (o en la activa)
   */
  static hasSavedGame(slot = null) {
    try {
      this.checkMigration();
      const targetSlot = slot !== null ? slot : this.getActiveSlot();
      const meta = this.getSlotMetadata(targetSlot);
      return !meta.isEmpty;
    } catch (e) {
      return false;
    }
  }

  /**
   * Comprueba si hay al menos una partida guardada en cualquiera de las 3 ranuras
   */
  static hasAnySavedGame() {
    try {
      this.checkMigration();
      for (let s = 1; s <= MAX_SAVE_SLOTS; s++) {
        if (!this.getSlotMetadata(s).isEmpty) {
          return true;
        }
      }
      return false;
    } catch (e) {
      return false;
    }
  }

  /**
   * Guarda el estado del juego en la ranura indicada (o en la activa)
   */
  static saveGame(gameState, slot = null) {
    try {
      if (!gameState || !gameState.userTeamId) return false;
      this.checkMigration();
      const targetSlot = slot !== null ? Math.max(1, Math.min(MAX_SLOTS_LIMIT, parseInt(slot, 10) || 1)) : this.getActiveSlot();
      
      const data = {
        schemaVersion: CURRENT_SCHEMA,
        saveSlot: targetSlot,
        userTeamId: gameState.userTeamId,
        currentRound: gameState.currentRound || 1,
        schedule: gameState.schedule || [],
        standings: gameState.standings || [],
        teams: gameState.teams || [],
        userTactics: gameState.userTactics || null,
        topScorers: gameState.topScorers || {},
        isSeasonOver: gameState.isSeasonOver || false,
        timestamp: Date.now()
      };

      const key = getSlotStorageKey(targetSlot);
      localStorage.setItem(key, JSON.stringify(data));
      this.setActiveSlot(targetSlot);

      // Compatibilidad con versiones previas si se guarda en la ranura 1
      if (targetSlot === 1) {
        localStorage.setItem(LEGACY_KEY, JSON.stringify(data));
      }
      return true;
    } catch (e) {
      console.error("Error al guardar la partida en ranura:", e);
      return false;
    }
  }

  /**
   * Carga la partida de la ranura indicada (o de la activa)
   */
  static loadGame(slot = null) {
    try {
      this.checkMigration();
      const targetSlot = slot !== null ? Math.max(1, Math.min(MAX_SAVE_SLOTS, parseInt(slot, 10) || 1)) : this.getActiveSlot();
      const key = getSlotStorageKey(targetSlot);
      const raw = localStorage.getItem(key);
      if (!raw) return null;

      const parsed = JSON.parse(raw);
      if (parsed && parsed.schemaVersion === CURRENT_SCHEMA && parsed.userTeamId) {
        this.setActiveSlot(targetSlot);
        return parsed;
      }

      // Si estuviera corrupta, limpiarla
      localStorage.removeItem(key);
      return null;
    } catch (e) {
      console.error("Error al cargar la partida de la ranura:", e);
      return null;
    }
  }

  /**
   * Elimina la partida de una ranura específica (o de la activa)
   */
  static deleteGame(slot = null) {
    try {
      const targetSlot = slot !== null ? Math.max(1, Math.min(MAX_SAVE_SLOTS, parseInt(slot, 10) || 1)) : this.getActiveSlot();
      localStorage.removeItem(getSlotStorageKey(targetSlot));
      if (targetSlot === 1) {
        localStorage.removeItem(LEGACY_KEY);
      }
      return true;
    } catch (e) {
      return false;
    }
  }

  /**
   * Obtiene la información resumida de una ranura (para mostrar en las tarjetas de guardado)
   */
  static getSlotMetadata(slot = 1) {
    try {
      const targetSlot = Math.max(1, Math.min(MAX_SAVE_SLOTS, parseInt(slot, 10) || 1));
      const key = getSlotStorageKey(targetSlot);
      const raw = localStorage.getItem(key);
      if (!raw) {
        return { slot: targetSlot, isEmpty: true };
      }

      const data = JSON.parse(raw);
      if (!data || data.schemaVersion !== CURRENT_SCHEMA || !data.userTeamId) {
        return { slot: targetSlot, isEmpty: true };
      }

      const team = (data.teams || []).find(t => t.id === data.userTeamId);
      const standing = (data.standings || []).find(s => s.teamId === data.userTeamId) || { points: 0, played: 0 };
      const rank = (data.standings || []).indexOf(standing) + 1;

      const d = new Date(data.timestamp || Date.now());
      const pad = n => String(n).padStart(2, "0");
      const formattedDate = `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}`;

      return {
        slot: targetSlot,
        isEmpty: false,
        userTeamId: data.userTeamId,
        teamName: team?.name || data.userTeamId,
        shortName: team?.shortName || data.userTeamId,
        primaryColor: team?.primaryColor || "#ffffff",
        secondaryColor: team?.secondaryColor || "#1e293b",
        textColor: team?.textColor || "#ffffff",
        currentRound: data.currentRound || 1,
        totalRounds: 38,
        rank: rank > 0 ? rank : 1,
        points: standing.points || 0,
        timestamp: data.timestamp || 0,
        formattedDate,
        isSeasonOver: !!data.isSeasonOver
      };
    } catch (e) {
      return { slot, isEmpty: true };
    }
  }

  /**
   * Devuelve los metadatos de las 3 ranuras disponibles
   */
  static getAllSlotsMetadata() {
    this.checkMigration();
    return [1, 2, 3].map(s => this.getSlotMetadata(s));
  }

  /**
   * Copia una partida de una ranura a otra (útil para crear copias de seguridad)
   */
  static copySlot(sourceSlot, targetSlot) {
    try {
      const srcKey = getSlotStorageKey(sourceSlot);
      const raw = localStorage.getItem(srcKey);
      if (!raw) return false;
      const parsed = JSON.parse(raw);
      parsed.saveSlot = targetSlot;
      parsed.timestamp = Date.now();
      localStorage.setItem(getSlotStorageKey(targetSlot), JSON.stringify(parsed));
      return true;
    } catch (e) {
      return false;
    }
  }

  /**
   * Migración automática transparente: si existe partida de versiones anteriores, se traslada a la Ranura 1
   */
  static checkMigration() {
    try {
      const slot1Key = getSlotStorageKey(1);
      const slot1 = localStorage.getItem(slot1Key);
      const legacy = localStorage.getItem(LEGACY_KEY);
      if (!slot1 && legacy) {
        localStorage.setItem(slot1Key, legacy);
      }
    } catch (e) {}
  }
}

const MAX_SLOTS_LIMIT = MAX_SAVE_SLOTS;
