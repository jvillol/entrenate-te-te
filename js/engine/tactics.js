// Formaciones y lógica táctica del simulador

export const FORMATIONS = {
  "4-3-3": {
    name: "4-3-3 Ofensivo",
    slots: [
      { id: 0, label: "POR", pos: "POR", x: 50, y: 88 },
      { id: 1, label: "LI",  pos: "LI",  x: 18, y: 70 },
      { id: 2, label: "DFC", pos: "DFC", x: 38, y: 72 },
      { id: 3, label: "DFC", pos: "DFC", x: 62, y: 72 },
      { id: 4, label: "LD",  pos: "LD",  x: 82, y: 70 },
      { id: 5, label: "MCD", pos: "MCD", x: 50, y: 55 },
      { id: 6, label: "MC",  pos: "MC",  x: 32, y: 44 },
      { id: 7, label: "MCO", pos: "MCO", x: 68, y: 44 },
      { id: 8, label: "EI",  pos: "EI",  x: 20, y: 24 },
      { id: 9, label: "DC",  pos: "DC",  x: 50, y: 18 },
      { id: 10, label: "ED", pos: "ED", x: 80, y: 24 }
    ]
  },
  "4-4-2": {
    name: "4-4-2 Clásico",
    slots: [
      { id: 0, label: "POR", pos: "POR", x: 50, y: 88 },
      { id: 1, label: "LI",  pos: "LI",  x: 18, y: 70 },
      { id: 2, label: "DFC", pos: "DFC", x: 38, y: 72 },
      { id: 3, label: "DFC", pos: "DFC", x: 62, y: 72 },
      { id: 4, label: "LD",  pos: "LD",  x: 82, y: 70 },
      { id: 5, label: "EI",  pos: "EI",  x: 18, y: 45 },
      { id: 6, label: "MC",  pos: "MC",  x: 38, y: 48 },
      { id: 7, label: "MC",  pos: "MC",  x: 62, y: 48 },
      { id: 8, label: "ED",  pos: "ED",  x: 82, y: 45 },
      { id: 9, label: "DC",  pos: "DC",  x: 38, y: 20 },
      { id: 10, label: "DC", pos: "DC",  x: 62, y: 20 }
    ]
  },
  "4-2-3-1": {
    name: "4-2-3-1 Moderno",
    slots: [
      { id: 0, label: "POR", pos: "POR", x: 50, y: 88 },
      { id: 1, label: "LI",  pos: "LI",  x: 18, y: 70 },
      { id: 2, label: "DFC", pos: "DFC", x: 38, y: 72 },
      { id: 3, label: "DFC", pos: "DFC", x: 62, y: 72 },
      { id: 4, label: "LD",  pos: "LD",  x: 82, y: 70 },
      { id: 5, label: "MCD", pos: "MCD", x: 38, y: 56 },
      { id: 6, label: "MCD", pos: "MCD", x: 62, y: 56 },
      { id: 7, label: "EI",  pos: "EI",  x: 20, y: 36 },
      { id: 8, label: "MCO", pos: "MCO", x: 50, y: 36 },
      { id: 9, label: "ED",  pos: "ED",  x: 80, y: 36 },
      { id: 10, label: "DC", pos: "DC",  x: 50, y: 18 }
    ]
  },
  "3-5-2": {
    name: "3-5-2 Dinámico",
    slots: [
      { id: 0, label: "POR", pos: "POR", x: 50, y: 88 },
      { id: 1, label: "DFC", pos: "DFC", x: 26, y: 72 },
      { id: 2, label: "DFC", pos: "DFC", x: 50, y: 74 },
      { id: 3, label: "DFC", pos: "DFC", x: 74, y: 72 },
      { id: 4, label: "LI",  pos: "LI",  x: 14, y: 50 },
      { id: 5, label: "MCD", pos: "MCD", x: 50, y: 56 },
      { id: 6, label: "MC",  pos: "MC",  x: 34, y: 44 },
      { id: 7, label: "MC",  pos: "MC",  x: 66, y: 44 },
      { id: 8, label: "LD",  pos: "LD",  x: 86, y: 50 },
      { id: 9, label: "DC",  pos: "DC",  x: 38, y: 20 },
      { id: 10, label: "DC", pos: "DC",  x: 62, y: 20 }
    ]
  },
  "5-3-2": {
    name: "5-3-2 Muralla",
    slots: [
      { id: 0, label: "POR", pos: "POR", x: 50, y: 88 },
      { id: 1, label: "LI",  pos: "LI",  x: 14, y: 68 },
      { id: 2, label: "DFC", pos: "DFC", x: 32, y: 74 },
      { id: 3, label: "DFC", pos: "DFC", x: 50, y: 75 },
      { id: 4, label: "DFC", pos: "DFC", x: 68, y: 74 },
      { id: 5, label: "LD",  pos: "LD",  x: 86, y: 68 },
      { id: 6, label: "MC",  pos: "MC",  x: 32, y: 50 },
      { id: 7, label: "MCD", pos: "MCD", x: 50, y: 54 },
      { id: 8, label: "MC",  pos: "MC",  x: 68, y: 50 },
      { id: 9, label: "DC",  pos: "DC",  x: 40, y: 22 },
      { id: 10, label: "DC", pos: "DC",  x: 60, y: 22 }
    ]
  }
};

export const MENTALITIES = [
  { id: "very_defensive", label: "Muy Defensiva", attackMod: -0.25, defenseMod: +0.25 },
  { id: "defensive", label: "Defensiva", attackMod: -0.12, defenseMod: +0.12 },
  { id: "balanced", label: "Equilibrada", attackMod: 0, defenseMod: 0 },
  { id: "offensive", label: "Ofensiva", attackMod: +0.15, defenseMod: -0.10 },
  { id: "very_offensive", label: "Al Ataque", attackMod: +0.30, defenseMod: -0.22 }
];

// Funciones e instrucciones individuales por posición (Estilo Football Manager)
export const POSITION_ROLES = {
  POR: [
    { id: "gk_classic", name: "Portero Clásico", icon: "🧤", desc: "Seguro bajo palos, colocación y despejes firmes", tag: "Bajo palos", atkMod: 0, defMod: 1.05, passWeight: 0.1, pushMod: 0 },
    { id: "gk_sweeper", name: "Portero Líbero", icon: "⚡", desc: "Sale a cortar pases en profundidad y salida en corto", tag: "Líbero", atkMod: 0.05, defMod: 0.98, passWeight: 0.4, pushMod: 4 }
  ],
  DFC: [
    { id: "cb_defensive", name: "Central Marcador", icon: "🛡️", desc: "Marcaje zonal férreo, contundente y sin complicaciones", tag: "Marcaje", atkMod: -0.05, defMod: 1.10, passWeight: 0.1, pushMod: -3 },
    { id: "cb_ball_playing", name: "Central con Salida", icon: "🎯", desc: "Sube a iniciar la jugada desde atrás con pase limpio", tag: "Salida", atkMod: 0.08, defMod: 0.96, passWeight: 0.7, pushMod: 6 },
    { id: "cb_stopper", name: "Central Anticipador", icon: "💥", desc: "Presión adelantada, choque físico y anticipación aérea", tag: "Anticipador", atkMod: 0, defMod: 1.06, passWeight: 0.2, pushMod: 2 }
  ],
  LD: [
    { id: "fb_attacking", name: "Carrilero Ofensivo", icon: "🚀", desc: "Sube la banda constantemente y dobla centros al área", tag: "Ofensivo", atkMod: 0.18, defMod: -0.10, passWeight: 0.6, pushMod: 14, shootWeight: 0.4 },
    { id: "fb_balanced", name: "Lateral Equilibrado", icon: "⚖️", desc: "Acompaña la jugada con criterio y repliega rápido", tag: "Equilibrado", atkMod: 0.05, defMod: 1.02, passWeight: 0.4, pushMod: 4 },
    { id: "fb_defensive", name: "Lateral Invertido / Cierre", icon: "🛡️", desc: "Guarda la posición, apoya a los centrales y no sube", tag: "Defensivo", atkMod: -0.10, defMod: 1.12, passWeight: 0.2, pushMod: -5 }
  ],
  LI: [
    { id: "fb_attacking", name: "Carrilero Ofensivo", icon: "🚀", desc: "Sube la banda constantemente y dobla centros al área", tag: "Ofensivo", atkMod: 0.18, defMod: -0.10, passWeight: 0.6, pushMod: 14, shootWeight: 0.4 },
    { id: "fb_balanced", name: "Lateral Equilibrado", icon: "⚖️", desc: "Acompaña la jugada con criterio y repliega rápido", tag: "Equilibrado", atkMod: 0.05, defMod: 1.02, passWeight: 0.4, pushMod: 4 },
    { id: "fb_defensive", name: "Lateral Invertido / Cierre", icon: "🛡️", desc: "Guarda la posición, apoya a los centrales y no sube", tag: "Defensivo", atkMod: -0.10, defMod: 1.12, passWeight: 0.2, pushMod: -5 }
  ],
  MCD: [
    { id: "dm_destroyer", name: "Pivote de Contención", icon: "🛡️", desc: "Destruye juego rival, corta líneas de pase y protege la zaga", tag: "Contención", atkMod: -0.05, defMod: 1.14, midMod: 1.02, passWeight: 0.3, pushMod: -4 },
    { id: "dm_playmaker", name: "Organizador Retrasado", icon: "🧠", desc: "Pide el balón entre centrales y distribuye con criterio", tag: "Organizador", atkMod: 0.08, defMod: 0.98, midMod: 1.12, passWeight: 1.3, pushMod: 3 }
  ],
  MC: [
    { id: "cm_playmaker", name: "Organizador / Creador", icon: "🧠", desc: "Canaliza el juego, da el último pase y maneja el ritmo", tag: "Organizador", atkMod: 0.10, defMod: 0.94, midMod: 1.16, passWeight: 1.6, pushMod: 6 },
    { id: "cm_box_to_box", name: "Todocampista (Box to Box)", icon: "⚡", desc: "Llega a ambas áreas, disparo potente y despliegue físico", tag: "Llegador", atkMod: 0.12, defMod: 1.04, midMod: 1.06, passWeight: 0.7, pushMod: 10, shootWeight: 0.7 },
    { id: "cm_ball_winner", name: "Volante de Trabajo", icon: "💪", desc: "Presión incansable, recuperación y coberturas defensivas", tag: "Recuperador", atkMod: -0.04, defMod: 1.08, midMod: 1.08, passWeight: 0.4, pushMod: 0 }
  ],
  MCO: [
    { id: "am_playmaker", name: "Mediapunta Creativo", icon: "✨", desc: "Visión periférica, asistencias filtradas y libertad total", tag: "Creativo", atkMod: 0.15, defMod: 0.90, midMod: 1.14, passWeight: 1.7, pushMod: 8 },
    { id: "am_shadow_striker", name: "Segundo Delantero / Llegador", icon: "🎯", desc: "Pisa el área rival como un punta más para disparar a puerta", tag: "Goleador", atkMod: 0.22, defMod: 0.85, midMod: 0.95, passWeight: 0.5, pushMod: 14, shootWeight: 1.4 }
  ],
  EI: [
    { id: "w_winger", name: "Extremo Puro (Desborde)", icon: "⚡", desc: "Desborde vertical por fuera, 1 vs 1 y centros medidos", tag: "Desborde", atkMod: 0.14, defMod: 0.92, passWeight: 0.8, pushMod: 12, shootWeight: 0.7 },
    { id: "w_inside_forward", name: "Delantero Interior", icon: "🎯", desc: "Diagonal hacia dentro buscando el remate o pared", tag: "Interior", atkMod: 0.20, defMod: 0.88, passWeight: 0.5, pushMod: 13, shootWeight: 1.3 },
    { id: "w_defensive", name: "Extremo de Trabajo", icon: "🛡️", desc: "Ayuda al lateral cerrando banda y presión tras pérdida", tag: "Apoyo", atkMod: 0.02, defMod: 1.08, passWeight: 0.5, pushMod: 2, shootWeight: 0.4 }
  ],
  ED: [
    { id: "w_winger", name: "Extremo Puro (Desborde)", icon: "⚡", desc: "Desborde vertical por fuera, 1 vs 1 y centros medidos", tag: "Desborde", atkMod: 0.14, defMod: 0.92, passWeight: 0.8, pushMod: 12, shootWeight: 0.7 },
    { id: "w_inside_forward", name: "Delantero Interior", icon: "🎯", desc: "Diagonal hacia dentro buscando el remate o pared", tag: "Interior", atkMod: 0.20, defMod: 0.88, passWeight: 0.5, pushMod: 13, shootWeight: 1.3 },
    { id: "w_defensive", name: "Extremo de Trabajo", icon: "🛡️", desc: "Ayuda al lateral cerrando banda y presión tras pérdida", tag: "Apoyo", atkMod: 0.02, defMod: 1.08, passWeight: 0.5, pushMod: 2, shootWeight: 0.4 }
  ],
  DC: [
    { id: "st_target", name: "Hombre de Área (Rematador)", icon: "🎯", desc: "Fija centrales, letal dentro del área al primer toque", tag: "Rematador", atkMod: 0.22, defMod: 0.90, shootWeight: 1.8, passWeight: 0.2, pushMod: 12 },
    { id: "st_poacher", name: "Delantero Móvil (Ruptura)", icon: "💨", desc: "Desmarques rápidos al espacio y arrastre de defensores", tag: "Ruptura", atkMod: 0.18, defMod: 0.92, shootWeight: 1.4, passWeight: 0.4, pushMod: 14 },
    { id: "st_false_nine", name: "Falso 9 (Organizador)", icon: "🧠", desc: "Baja a recibir a tres cuartos, organiza y asiste a extremos", tag: "Falso 9", atkMod: 0.12, defMod: 0.96, midMod: 1.10, passWeight: 1.5, shootWeight: 0.8, pushMod: 4 }
  ]
};

export function getAvailableRolesForPosition(pos) {
  return POSITION_ROLES[pos] || POSITION_ROLES["MC"];
}

export function getDefaultRoleForPosition(pos) {
  const roles = getAvailableRolesForPosition(pos);
  return roles[0].id;
}

export function getRoleDetails(pos, roleId) {
  const roles = getAvailableRolesForPosition(pos);
  return roles.find(r => r.id === roleId) || roles[0];
}

// Cálculo de penalización si un jugador juega fuera de su posición natural
export function getPositionAffinity(playerPos, slotPos) {
  if (playerPos === slotPos) return 1.0;
  
  // Portero solo rinde de portero
  if (playerPos === "POR" || slotPos === "POR") return 0.25;

  // Laterales y carrileros
  if ((playerPos === "LD" || playerPos === "LI") && slotPos === "DFC") return 0.85;
  if (playerPos === "LD" && slotPos === "LI") return 0.80;
  if (playerPos === "LI" && slotPos === "LD") return 0.80;
  if ((playerPos === "LD" || playerPos === "LI") && (slotPos === "ED" || slotPos === "EI")) return 0.85;

  // Centrales
  if (playerPos === "DFC" && (slotPos === "LD" || slotPos === "LI")) return 0.80;
  if (playerPos === "DFC" && slotPos === "MCD") return 0.85;

  // Centrocampistas
  if (playerPos === "MCD" && slotPos === "MC") return 0.90;
  if (playerPos === "MC" && (slotPos === "MCD" || slotPos === "MCO")) return 0.90;
  if (playerPos === "MCO" && slotPos === "MC") return 0.88;
  if (playerPos === "MCO" && (slotPos === "EI" || slotPos === "ED")) return 0.85;

  // Extremos y Delanteros
  if (playerPos === "ED" && slotPos === "EI") return 0.90;
  if (playerPos === "EI" && slotPos === "ED") return 0.90;
  if ((playerPos === "ED" || playerPos === "EI") && slotPos === "DC") return 0.85;
  if (playerPos === "DC" && (slotPos === "ED" || slotPos === "EI")) return 0.82;
  if (playerPos === "DC" && slotPos === "MCO") return 0.80;

  return 0.70; // Fuera de zona principal
}

// Calcula la media efectiva de un jugador colocado en una posición concreta
export function calculateEffectiveRating(player, slotPos) {
  const affinity = getPositionAffinity(player.pos, slotPos);
  const curEnergy = player.energy !== undefined ? player.energy : 100;
  const energyFactor = 0.5 + (curEnergy / 100) * 0.5; // La energía baja reduce rendimiento
  return Math.round(player.ovr * affinity * energyFactor);
}

// Media global de un equipo en base a su 11 inicial
export function calculateTeamAverages(lineupPlayers, formationKey) {
  const formation = FORMATIONS[formationKey] || FORMATIONS["4-3-3"];
  if (!lineupPlayers || lineupPlayers.length < 11) {
    return { overall: 75, attack: 75, midfield: 75, defense: 75 };
  }

  let atkSum = 0, atkCount = 0;
  let midSum = 0, midCount = 0;
  let defSum = 0, defCount = 0;
  let totalSum = 0;

  formation.slots.forEach((slot, index) => {
    const p = lineupPlayers[index];
    if (!p) return;
    const eff = calculateEffectiveRating(p, slot.pos);
    totalSum += eff;

    if (slot.pos === "DC" || slot.pos === "EI" || slot.pos === "ED") {
      atkSum += eff;
      atkCount++;
    } else if (slot.pos === "MC" || slot.pos === "MCD" || slot.pos === "MCO") {
      midSum += eff;
      midCount++;
    } else {
      defSum += eff;
      defCount++;
    }
  });

  return {
    overall: Math.round(totalSum / 11),
    attack: atkCount > 0 ? Math.round(atkSum / atkCount) : 75,
    midfield: midCount > 0 ? Math.round(midSum / midCount) : 75,
    defense: defCount > 0 ? Math.round(defSum / defCount) : 75
  };
}

