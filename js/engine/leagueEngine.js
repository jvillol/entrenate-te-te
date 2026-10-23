// Motor del calendario de LaLiga, clasificación y simulación de partidos paralelos

/**
 * Genera el calendario de 38 jornadas para 20 equipos usando el algoritmo de Berger (Round-Robin)
 */
export function generateSchedule(teams) {
  const teamIds = teams.map(t => t.id);
  const n = teamIds.length; // 20
  const rounds = [];
  
  // Lista de índices para el algoritmo de rotación
  const indices = [...Array(n).keys()]; // [0, 1, 2, ..., 19]

  // Generamos la primera vuelta (19 jornadas)
  for (let roundIndex = 0; roundIndex < n - 1; roundIndex++) {
    const roundMatches = [];
    for (let i = 0; i < n / 2; i++) {
      const homeIdx = indices[i];
      const awayIdx = indices[n - 1 - i];

      // Alternar localía para equilibrar jugar en casa o fuera
      if (roundIndex % 2 === 1 && i === 0) {
        roundMatches.push({
          homeTeamId: teamIds[awayIdx],
          awayTeamId: teamIds[homeIdx],
          played: false,
          homeScore: null,
          awayScore: null,
          scorers: []
        });
      } else {
        roundMatches.push({
          homeTeamId: teamIds[homeIdx],
          awayTeamId: teamIds[awayIdx],
          played: false,
          homeScore: null,
          awayScore: null,
          scorers: []
        });
      }
    }

    rounds.push({
      roundNumber: roundIndex + 1,
      matches: roundMatches
    });

    // Rotar los equipos manteniendo el primero fijo (algoritmo standard de Berger)
    const fixed = indices[0];
    const rest = indices.slice(1);
    const last = rest.pop();
    rest.unshift(last);
    indices.splice(0, n, fixed, ...rest);
  }

  // Generamos la segunda vuelta (jornadas 20 a 38) invirtiendo local y visitante
  for (let roundIndex = 0; roundIndex < n - 1; roundIndex++) {
    const firstLegMatches = rounds[roundIndex].matches;
    const secondLegMatches = firstLegMatches.map(m => ({
      homeTeamId: m.awayTeamId,
      awayTeamId: m.homeTeamId,
      played: false,
      homeScore: null,
      awayScore: null,
      scorers: []
    }));

    rounds.push({
      roundNumber: n - 1 + roundIndex + 1,
      matches: secondLegMatches
    });
  }

  return rounds;
}

/**
 * Inicializa la tabla de clasificación
 */
export function initStandings(teams) {
  return teams.map(t => ({
    teamId: t.id,
    teamName: t.name,
    shortName: t.shortName,
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    gf: 0,
    ga: 0,
    gd: 0,
    points: 0,
    form: [] // 'W', 'D', 'L' de los últimos 5
  }));
}

/**
 * Actualiza la clasificación tras completarse los partidos de una jornada
 */
export function updateStandings(standings, matchResults) {
  const updated = standings.map(row => ({ ...row }));

  matchResults.forEach(match => {
    if (!match.played) return;
    const homeRow = updated.find(r => r.teamId === match.homeTeamId);
    const awayRow = updated.find(r => r.teamId === match.awayTeamId);

    if (!homeRow || !awayRow) return;

    homeRow.played += 1;
    awayRow.played += 1;

    homeRow.gf += match.homeScore;
    homeRow.ga += match.awayScore;
    homeRow.gd = homeRow.gf - homeRow.ga;

    awayRow.gf += match.awayScore;
    awayRow.ga += match.homeScore;
    awayRow.gd = awayRow.gf - awayRow.ga;

    if (match.homeScore > match.awayScore) {
      homeRow.won += 1;
      homeRow.points += 3;
      homeRow.form = [...homeRow.form.slice(-4), "W"];

      awayRow.lost += 1;
      awayRow.form = [...awayRow.form.slice(-4), "L"];
    } else if (match.homeScore < match.awayScore) {
      awayRow.won += 1;
      awayRow.points += 3;
      awayRow.form = [...awayRow.form.slice(-4), "W"];

      homeRow.lost += 1;
      homeRow.form = [...homeRow.form.slice(-4), "L"];
    } else {
      homeRow.drawn += 1;
      homeRow.points += 1;
      homeRow.form = [...homeRow.form.slice(-4), "D"];

      awayRow.drawn += 1;
      awayRow.points += 1;
      awayRow.form = [...awayRow.form.slice(-4), "D"];
    }
  });

  // Ordenar por: Puntos -> Diferencia de goles -> Goles a favor -> Nombre
  updated.sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    if (b.gd !== a.gd) return b.gd - a.gd;
    if (b.gf !== a.gf) return b.gf - a.gf;
    return a.teamName.localeCompare(b.teamName);
  });

  return updated;
}

/**
 * Calcula la potencia ofensiva, defensiva y global de un equipo a partir de sus jugadores
 */
function getTeamStrength(team) {
  if (!team || !team.players || team.players.length === 0) {
    const rep = team?.reputation || 78;
    return { atk: rep, def: rep, mid: rep, ovr: rep };
  }

  // Tomar los 11 mejores futbolistas por OVR
  const starters = [...team.players].sort((a, b) => (b.ovr || 70) - (a.ovr || 70)).slice(0, 11);
  const avgOvr = starters.reduce((acc, p) => acc + (p.ovr || 70), 0) / starters.length;

  // Ataque (DC, EI, ED, MCO)
  const attackers = starters.filter(p => ["DC", "EI", "ED", "MCO"].includes(p.pos));
  const atk = attackers.length > 0
    ? attackers.reduce((acc, p) => acc + ((p.sho || 70) * 0.45 + (p.dri || 70) * 0.3 + (p.pac || 70) * 0.25), 0) / attackers.length
    : avgOvr;

  // Defensa (DFC, LD, LI, MCD, POR)
  const defenders = starters.filter(p => ["DFC", "LD", "LI", "MCD", "POR"].includes(p.pos));
  const def = defenders.length > 0
    ? defenders.reduce((acc, p) => acc + ((p.def || 70) * 0.5 + (p.phy || 70) * 0.3 + (p.ovr || 70) * 0.2), 0) / defenders.length
    : avgOvr;

  // Mediocampo (MC, MCD, MCO)
  const midfielders = starters.filter(p => ["MC", "MCD", "MCO"].includes(p.pos));
  const mid = midfielders.length > 0
    ? midfielders.reduce((acc, p) => acc + ((p.pas || 70) * 0.4 + (p.dri || 70) * 0.35 + (p.def || 70) * 0.25), 0) / midfielders.length
    : avgOvr;

  return { atk, def, mid, ovr: avgOvr };
}

/**
 * Simulación estocástica realista para los otros partidos de la jornada
 * Combina estadísticas de plantilla, factor campo local y azar del fútbol
 */
export function simulateAIParties(match, teamsMap) {
  const homeTeam = teamsMap[match.homeTeamId];
  const awayTeam = teamsMap[match.awayTeamId];

  if (!homeTeam || !awayTeam) {
    match.played = true;
    match.homeScore = 0;
    match.awayScore = 0;
    match.scorers = [];
    return match;
  }

  const homeStats = getTeamStrength(homeTeam);
  const awayStats = getTeamStrength(awayTeam);

  // Factor campo local (+2.8 puntos de poder efectivos en ataque y defensa)
  const homeAdvantage = 2.8;

  // Diferenciales entre ataque de uno y defensa del otro
  const homeAtkDiff = (homeStats.atk + homeAdvantage) - awayStats.def;
  const awayAtkDiff = awayStats.atk - (homeStats.def + homeAdvantage * 0.5);
  const midDiff = homeStats.mid - awayStats.mid;

  // Azar del fútbol (días inspirados, penaltis, errores o paradas milagrosas)
  const homeLuck = (Math.random() - Math.random()) * 0.45;
  const awayLuck = (Math.random() - Math.random()) * 0.45;

  // Cálculo de goles esperados (Lambda para distribución de Poisson)
  const baseHomeLambda = 1.35 + (homeAtkDiff * 0.045) + (midDiff * 0.02) + homeLuck;
  const baseAwayLambda = 1.05 + (awayAtkDiff * 0.045) - (midDiff * 0.02) + awayLuck;

  const lambdaHome = Math.max(0.25, Math.min(4.8, baseHomeLambda));
  const lambdaAway = Math.max(0.15, Math.min(4.2, baseAwayLambda));

  const homeScore = samplePoisson(lambdaHome);
  const awayScore = samplePoisson(lambdaAway);

  // Asignar goleadores realistas entre los delanteros y medios del equipo
  const scorers = [];
  for (let i = 0; i < homeScore; i++) {
    const scorer = pickScorer(homeTeam);
    scorer.goals = (scorer.goals || 0) + 1;
    scorers.push({
      teamId: homeTeam.id,
      teamName: homeTeam.shortName,
      playerName: scorer.name,
      player: scorer,
      minute: Math.floor(Math.random() * 88) + 2
    });
  }
  for (let i = 0; i < awayScore; i++) {
    const scorer = pickScorer(awayTeam);
    scorer.goals = (scorer.goals || 0) + 1;
    scorers.push({
      teamId: awayTeam.id,
      teamName: awayTeam.shortName,
      playerName: scorer.name,
      player: scorer,
      minute: Math.floor(Math.random() * 88) + 2
    });
  }

  // Desgaste físico del partido para los futbolistas titulares de ambos equipos de la IA
  [homeTeam, awayTeam].forEach(team => {
    (team.players || []).forEach((p, idx) => {
      if (idx < 11) {
        const isGK = p.pos === "POR";
        const phyFactor = (120 - Math.min(95, Math.max(45, (p.phy || 70)))) / 50;
        const drain = isGK ? (6 + Math.random() * 3) : ((31 * phyFactor) + (Math.random() * 4 - 2));
        p.energy = Math.max(25, Math.round((p.energy !== undefined ? p.energy : 100) - drain));
      }
    });
  });

  // Mutar y devolver el objeto match para asegurar persistencia y evitar null-null
  match.played = true;
  match.homeScore = homeScore;
  match.awayScore = awayScore;
  match.scorers = scorers;

  return match;
}

function samplePoisson(lambda) {
  let L = Math.exp(-lambda);
  let p = 1.0;
  let k = 0;
  do {
    k++;
    p *= Math.random();
  } while (p > L);
  return Math.min(k - 1, 7); // Tope realista de goles en un partido de liga
}

function pickScorer(team) {
  if (!team || !team.players || team.players.length === 0) return { name: "Delantero", id: "" };
  // Ponderar probabilidades según posición y calidad de remate
  const weights = team.players.map(p => {
    const sho = p.sho || 65;
    if (p.pos === "DC") return sho * 3.5;
    if (p.pos === "EI" || p.pos === "ED") return sho * 2.8;
    if (p.pos === "MCO") return sho * 1.8;
    if (p.pos === "MC") return sho * 1.0;
    if (p.pos === "DFC" || p.pos === "LD" || p.pos === "LI") return 15;
    return 0; // POR
  });

  const total = weights.reduce((a, b) => a + b, 0);
  let r = Math.random() * total;
  for (let i = 0; i < team.players.length; i++) {
    r -= weights[i];
    if (r <= 0) return team.players[i];
  }
  return team.players[0];
}

