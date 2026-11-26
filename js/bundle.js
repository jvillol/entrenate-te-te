// =========================================================
// ARCHIVO: js\data\teams.js
// =========================================================

// Base de datos oficial de los 20 clubes de LaLiga EA Sports
// Fuentes oficiales: Transfermarkt (ES1), Flashscore y LaLiga.com (Clubes y Plantillas)
const TEAMS_DATA = [
  {
    id: "rma",
    name: "Real Madrid CF",
    shortName: "RMA",
    city: "Madrid",
    stadium: "Santiago Bernabeu",
    primaryColor: "#FFFFFF",
    secondaryColor: "#1E293B",
    textColor: "#0F172A",
    awayKit: { primaryColor: "#FF6600", secondaryColor: "#18181B", textColor: "#FFFFFF" },
    budget: 140000000,
    reputation: 95,
    defaultFormation: "4-3-3",
    players: [
      { id: "rma_1", name: "Thibaut Courtois", number: 1, pos: "POR", ovr: 89, pot: 89, par: 90, pac: 46, sho: 16, pas: 75, dri: 48, def: 16, phy: 77, energy: 100 },
      { id: "rma_2", name: "Andriy Lunin", number: 13, pos: "POR", ovr: 81, pot: 85, par: 81, pac: 42, sho: 14, pas: 70, dri: 45, def: 15, phy: 73, energy: 100 },
      { id: "rma_3", name: "Trent Alexander-Arnold", number: 12, pos: "LD", secondaryPos: ["MD"], ovr: 87, pot: 88, pac: 76, sho: 77, pas: 92, dri: 82, def: 81, phy: 75, energy: 100 },
      { id: "rma_4", name: "Asencio", number: 2, pos: "DFC", ovr: 78, pot: 85, pac: 83, sho: 47, pas: 71, dri: 72, def: 77, phy: 82, energy: 100 },
      { id: "rma_5", name: "Antonio Rudiger", number: 22, pos: "DFC", ovr: 87, pot: 87, pac: 82, sho: 53, pas: 71, dri: 67, def: 87, phy: 86, energy: 100 },
      { id: "rma_6", name: "Eder Militao", number: 3, pos: "DFC", ovr: 85, pot: 87, pac: 85, sho: 50, pas: 71, dri: 72, def: 86, phy: 83, energy: 100 },
      { id: "rma_7", name: "Ferland Mendy", number: 23, pos: "LI", ovr: 83, pot: 83, pac: 89, sho: 62, pas: 74, dri: 78, def: 82, phy: 85, energy: 100 },
      { id: "rma_8", name: "Bernardo Silva", number: 20, pos: "MC", secondaryPos: ["ED", "MCO"], ovr: 84, pot: 86, pac: 50, sho: 76, pas: 85, dri: 88, def: 68, phy: 67, energy: 100 },
      { id: "rma_9", name: "Aurelien Tchouameni", number: 14, pos: "MCD", secondaryPos: ["MC", "DFC"], ovr: 86, pot: 89, pac: 73, sho: 71, pas: 82, dri: 81, def: 86, phy: 87, energy: 100 },
      { id: "rma_10", name: "Federico Valverde", number: 8, pos: "MC", secondaryPos: ["LD", "MD", "MCD"], ovr: 89, pot: 91, pac: 89, sho: 84, pas: 85, dri: 85, def: 82, phy: 85, energy: 100 },
      { id: "rma_11", name: "Eduardo Camavinga", number: 6, pos: "MC", secondaryPos: ["MCD", "LI"], ovr: 85, pot: 90, pac: 82, sho: 69, pas: 83, dri: 85, def: 82, phy: 83, energy: 100 },
      { id: "rma_12", name: "Jude Bellingham", number: 5, pos: "MCO", secondaryPos: ["MC", "MI", "DC"], ovr: 90, pot: 94, pac: 81, sho: 87, pas: 85, dri: 89, def: 79, phy: 84, energy: 100 },
      { id: "rma_13", name: "Brahim Diaz", number: 21, pos: "MD", secondaryPos: ["MI", "DC", "ED"], ovr: 83, pot: 85, pac: 86, sho: 78, pas: 80, dri: 87, def: 36, phy: 56, energy: 100 },
      { id: "rma_14", name: "Arda Guler", number: 15, pos: "MCO", secondaryPos: ["MD", "MC", "ED"], ovr: 82, pot: 89, pac: 76, sho: 77, pas: 84, dri: 86, def: 53, phy: 60, energy: 100 },
      { id: "rma_15", name: "Rodrygo", number: 11, pos: "ED", ovr: 86, pot: 89, pac: 89, sho: 83, pas: 82, dri: 88, def: 32, phy: 62, energy: 100 },
      { id: "rma_16", name: "Vinicius Junior", number: 7, pos: "EI", secondaryPos: ["DC", "MI"],  ovr: 91, pot: 93, pac: 96, sho: 85, pas: 82, dri: 92, def: 30, phy: 70, energy: 100 },
      { id: "rma_17", name: "Kylian Mbappe", number: 9, pos: "DC", secondaryPos: ["ED"], ovr: 92, pot: 93, pac: 97, sho: 91, pas: 82, dri: 93, def: 36, phy: 79, energy: 100 },
      { id: "rma_18", name: "Endrick", number: 16, pos: "DC", ovr: 80, pot: 91, pac: 89, sho: 81, pas: 68, dri: 82, def: 33, phy: 80, energy: 100 },
      { id: "rma_19", name: "Cucurella", number: 17, pos: "LI", ovr: 86, pot: 86, pac: 75, sho: 64, pas: 79, dri: 81, def: 82, phy: 82, energy: 100 },
      { id: "rma_20", name: "Konaté", number: 16, pos: "DFC", ovr: 84, pot: 86, pac: 76, sho: 36, pas: 72, dri: 66, def: 84, phy: 83, energy: 100 },
      { id: "rma_21", name: "Dumfries", number: 24, pos: "LD", secondaryPos: ["MD"], ovr: 83, pot: 84, pac: 81, sho: 66, pas: 74, dri: 76, def: 79, phy: 88, energy: 100 },
      { id: "rma_22", name: "Diomandé", number: 25, pos: "ED", secondaryPos: ["EI", "MD", "MI"], ovr: 84, pot: 90, pac: 93, sho: 74, pas: 75, dri: 85, def: 48, phy: 88, energy: 100 },
      { id: "rma_23", name: "Carreras", number: 18, pos: "LI", secondaryPos: ["DFC", "MI"], ovr: 81, pot: 85, pac: 85, sho: 64, pas: 77, dri: 79, def: 73, phy: 82, energy: 100 },
      { id: "rma_24", name: "Espí", number: 19, pos: "DC", ovr: 77, pot: 86, pac: 76, sho: 75, pas: 63, dri: 67, def: 43, phy: 81, energy: 100 }
    ]
  },
  {
    id: "bar",
    name: "FC Barcelona",
    shortName: "BAR",
    city: "Barcelona",
    stadium: "Spotify Camp Nou",
    primaryColor: "#004D98",
    secondaryColor: "#A50044",
    textColor: "#FFFFFF",
    awayKit: { primaryColor: "#18181B", secondaryColor: "#A50044", textColor: "#FFFFFF" },
    budget: 95000000,
    reputation: 94,
    defaultFormation: "4-3-3",
    players: [
      { id: "bar_1", name: "Rodri", number: 16, pos: "MCD", secondaryPos: ["MC"], ovr: 90, pot: 91, pac: 66, sho: 74, pas: 86, dri: 81, def: 87, phy: 85, energy: 100 },
      { id: "bar_2", name: "Pedri", number: 8, pos: "MC", secondaryPos: ["MCD", "MCO"], ovr: 90, pot: 93, pac: 80, sho: 78, pas: 91, dri: 92, def: 72, phy: 75, energy: 100 },
      { id: "bar_3", name: "Lamine Yamal", number: 10, pos: "ED", secondaryPos: ["MD"], ovr: 90, pot: 95, pac: 92, sho: 84, pas: 87, dri: 93, def: 36, phy: 66, energy: 100 },
      { id: "bar_4", name: "Raphinha", number: 11, pos: "DC", secondaryPos: ["ED", "EI", "MCO", "MI"], ovr: 88, pot: 90, pac: 91, sho: 85, pas: 84, dri: 88, def: 55, phy: 76, energy: 100 },
      { id: "bar_5", name: "Joan Garcia", number: 1, pos: "POR", ovr: 86, pot: 89, par: 87, pac: 50, sho: 16, pas: 82, dri: 52, def: 16, phy: 78, energy: 100 },
      { id: "bar_6", name: "Pau Cubarsi", number: 5, pos: "DFC", ovr: 86, pot: 91, pac: 76, sho: 45, pas: 85, dri: 78, def: 87, phy: 81, energy: 100 },
      { id: "bar_7", name: "Eric Garcia", number: 24, pos: "DFC", secondaryPos: ["LD", "MCD", "MC"], ovr: 85, pot: 86, pac: 75, sho: 56, pas: 80, dri: 78, def: 86, phy: 79, energy: 100 },
      { id: "bar_8", name: "Fermin Lopez", number: 7, pos: "MCO", secondaryPos: ["MC", "MI"], ovr: 85, pot: 88, pac: 83, sho: 84, pas: 81, dri: 85, def: 69, phy: 76, energy: 100 },
      { id: "bar_9", name: "Joao Cancelo", number: 2, pos: "LI", secondaryPos: ["LD", "MD", "MI"], ovr: 83, pot: 88, pac: 81, sho: 72, pas: 84, dri: 85, def: 77, phy: 71, energy: 100 },
      { id: "bar_10", name: "Anthony Gordon", number: 17, pos: "EI", secondaryPos: ["DC", "MI"], ovr: 82, pot: 85, pac: 91, sho: 78, pas: 76, dri: 83, def: 54, phy: 73, energy: 100 },
      { id: "bar_11", name: "Gerard Martin", number: 18, pos: "DFC", secondaryPos: ["LI", "MI"], ovr: 79, pot: 84, pac: 74, sho: 42, pas: 71, dri: 72, def: 80, phy: 77, energy: 100 },
      { id: "bar_12", name: "Jules Kounde", number: 23, pos: "LD", secondaryPos: ["DFC", "MD"], ovr: 85, pot: 87, pac: 83, sho: 48, pas: 74, dri: 76, def: 87, phy: 80, energy: 100 },
      { id: "bar_13", name: "Frenkie de Jong", number: 21, pos: "MC", secondaryPos: ["MCD", "MCO"], ovr: 86, pot: 87, pac: 80, sho: 70, pas: 86, dri: 87, def: 78, phy: 77, energy: 100 },
      { id: "bar_14", name: "Dani Olmo", number: 20, pos: "MCO", secondaryPos: ["MC", "MI", "EI"], ovr: 84, pot: 85, pac: 76, sho: 81, pas: 83, dri: 86, def: 50, phy: 63, energy: 100 },
      { id: "bar_15", name: "Gavi", number: 6, pos: "MC", secondaryPos: ["MCD", "MI", "MCO"], ovr: 83, pot: 86, pac: 77, sho: 68, pas: 80, dri: 83, def: 74, phy: 80, energy: 100 },
      { id: "bar_16", name: "Karim Adeyemi", number: 14, pos: "MD", secondaryPos: ["EI", "MCO", "ED"], ovr: 82, pot: 85, pac: 96, sho: 76, pas: 70, dri: 82, def: 35, phy: 69, energy: 100 },
      { id: "bar_17", name: "Alejandro Balde", number: 3, pos: "LI", secondaryPos: ["MI"], ovr: 82, pot: 85, pac: 91, sho: 51, pas: 74, dri: 79, def: 76, phy: 67, energy: 100 },
      { id: "bar_18", name: "Andreas Christensen", number: 15, pos: "DFC", secondaryPos: ["MC", "MCD"], ovr: 79, pot: 83, pac: 64, sho: 32, pas: 72, dri: 69, def: 82, phy: 72, energy: 100 },
      { id: "bar_19", name: "Gabriel Jesus", number: 9, pos: "DC", secondaryPos: ["MCO"], ovr: 79, pot: 84, pac: 80, sho: 79, pas: 73, dri: 84, def: 40, phy: 72, energy: 100 },
      { id: "bar_20", name: "Marc Bernal", number: 22, pos: "MCD", secondaryPos: ["MC"], ovr: 78, pot: 88, pac: 72, sho: 68, pas: 79, dri: 78, def: 77, phy: 77, energy: 100 },
      { id: "bar_21", name: "Dominik Livakovic", number: 25, pos: "POR", ovr: 78, pot: 82, par: 78, pac: 45, sho: 15, pas: 70, dri: 47, def: 16, phy: 73, energy: 100 },
      { id: "bar_22", name: "Wojciech Szczesny", number: 1, pos: "POR", ovr: 81, pot: 87, par: 81, pac: 44, sho: 16, pas: 74, dri: 45, def: 16, phy: 72, energy: 100 },
      { id: "bar_23", name: "Roony Bardghji", number: 27, pos: "ED", ovr: 74, pot: 85, pac: 79, sho: 72, pas: 71, dri: 78, def: 32, phy: 63, energy: 100 },
      { id: "bar_24", name: "Xavi Espart", number: 12, pos: "LD", secondaryPos: ["MCD", "LI", "MC"], ovr: 71, pot: 85, pac: 78, sho: 50, pas: 68, dri: 70, def: 70, phy: 68, energy: 100 },
      { id: "bar_25", name: "Hamza Abdelkarim", number: 29, pos: "DC", ovr: 65, pot: 84, pac: 74, sho: 61, pas: 58, dri: 63, def: 27, phy: 69, energy: 100 }
    ]
  },
  {
    id: "atm",
    name: "Atletico de Madrid",
    shortName: "ATM",
    city: "Madrid",
    stadium: "Riyadh Air Metropolitano",
    primaryColor: "#CB3524",
    secondaryColor: "#1B365D",
    textColor: "#FFFFFF",
    awayKit: { primaryColor: "#0D1B2A", secondaryColor: "#38BDF8", textColor: "#FFFFFF" },
    budget: 90000000,
    reputation: 91,
    defaultFormation: "5-3-2",
    players: [
      { id: "atm_1", name: "Jan Oblak", number: 13, pos: "POR", ovr: 88, pot: 91, par: 89, pac: 46, sho: 16, pas: 74, dri: 48, def: 16, phy: 76, energy: 100 },
      { id: "atm_2", name: "Julian Alvarez", number: 19, pos: "DC", secondaryPos: ["MCO", "ED"], ovr: 86, pot: 89, pac: 85, sho: 85, pas: 81, dri: 87, def: 55, phy: 81, energy: 100 },
      { id: "atm_3", name: "Alejandro Grimaldo", number: 22, pos: "LI", secondaryPos: ["MI","MCO"], ovr: 85, pot: 86, pac: 74, sho: 76, pas: 85, dri: 84, def: 68, phy: 67, energy: 100 },
      { id: "atm_4", name: "Marcos Llorente", number: 14, pos: "LD", secondaryPos: ["MC", "MD", "DC"], ovr: 85, pot: 86, pac: 90, sho: 80, pas: 81, dri: 82, def: 79, phy: 82, energy: 100 },
      { id: "atm_5", name: "Ademola Lookman", number: 11, pos: "EI", secondaryPos: ["DC", "MCO", "MI"], ovr: 83, pot: 84, pac: 86, sho: 81, pas: 74, dri: 84, def: 38, phy: 72, energy: 100 },
      { id: "atm_6", name: "Morten Hjulmand", number: 23, pos: "MCD", secondaryPos: ["MC"], ovr: 83, pot: 86, pac: 70, sho: 72, pas: 81, dri: 77, def: 83, phy: 84, energy: 100 },
      { id: "atm_7", name: "David Hancko", number: 17, pos: "DFC", secondaryPos: ["LI"], ovr: 83, pot: 83, pac: 78, sho: 66, pas: 76, dri: 75, def: 84, phy: 83, energy: 100 },
      { id: "atm_8", name: "Alex Baena", number: 10, pos: "MI", secondaryPos: ["MCO", "MC","EI"], ovr: 83, pot: 85, pac: 78, sho: 74, pas: 84, dri: 83, def: 65, phy: 72, energy: 100 },
      { id: "atm_9", name: "Pablo Barrios", number: 8, pos: "MC", secondaryPos: ["MCD", "MI"], ovr: 83, pot: 87, pac: 79, sho: 72, pas: 82, dri: 83, def: 77, phy: 78, energy: 100 },
      { id: "atm_10", name: "Cristian Romero", number: 21, pos: "DFC", ovr: 82, pot: 84, pac: 74, sho: 46, pas: 65, dri: 68, def: 84, phy: 84, energy: 100 },
      { id: "atm_11", name: "Marc Pubill", number: 18, pos: "DFC", secondaryPos: ["LD"], ovr: 81, pot: 88, pac: 82, sho: 55, pas: 72, dri: 76, def: 80, phy: 81, energy: 100 },
      { id: "atm_12", name: "Alexander Sorloth", number: 9, pos: "DC", ovr: 83, pot: 84, pac: 82, sho: 84, pas: 72, dri: 77, def: 38, phy: 87, energy: 100 },
      { id: "atm_13", name: "Juan Musso", number: 1, pos: "POR", ovr: 82, pot: 82, par: 82, pac: 44, sho: 15, pas: 70, dri: 46, def: 15, phy: 74, energy: 100 },
      { id: "atm_14", name: "Giuliano Simeone", number: 20, pos: "MD", secondaryPos: ["ED", "MI", "EI", "DC"], ovr: 82, pot: 85, pac: 87, sho: 78, pas: 74, dri: 82, def: 60, phy: 78, energy: 100 },
      { id: "atm_15", name: "Koke", number: 6, pos: "MC", secondaryPos: ["MCD", "MD"], ovr: 81, pot: 86, pac: 60, sho: 71, pas: 83, dri: 77, def: 77, phy: 76, energy: 100 },
      { id: "atm_16", name: "Robin Le Normand", number: 24, pos: "DFC", ovr: 81, pot: 83, pac: 69, sho: 37, pas: 64, dri: 63, def: 82, phy: 80, energy: 100 },
      { id: "atm_17", name: "Jonathan David", number: 15, pos: "DC", ovr: 80, pot: 83, pac: 83, sho: 81, pas: 72, dri: 80, def: 34, phy: 76, energy: 100 },
      { id: "atm_18", name: "Lee Kang In", number: 7, pos: "ED", secondaryPos: ["MCO", "DC", "MD"], ovr: 80, pot: 83, pac: 76, sho: 76, pas: 82, dri: 84, def: 48, phy: 62, energy: 100 },
      { id: "atm_19", name: "Johnny Cardoso", number: 5, pos: "MCD", secondaryPos: ["MC"], ovr: 80, pot: 84, pac: 73, sho: 65, pas: 75, dri: 76, def: 79, phy: 81, energy: 100 },
      { id: "atm_20", name: "Obed Vargas", number: 3, pos: "MCD", secondaryPos: ["MC", "MI", "EI"], ovr: 72, pot: 83, pac: 70, sho: 58, pas: 71, dri: 72, def: 71, phy: 72, energy: 100 },
      { id: "atm_21", name: "Rodri Mendoza", number: 4, pos: "MC", secondaryPos: ["MCO"], ovr: 72, pot: 82, pac: 71, sho: 64, pas: 73, dri: 75, def: 64, phy: 66, energy: 100 },
      { id: "atm_22", name: "Arnau Ortiz", number: 16, pos: "EI", secondaryPos: ["MI", "DC"], ovr: 71, pot: 79, pac: 81, sho: 66, pas: 68, dri: 74, def: 42, phy: 63, energy: 100 },
      { id: "atm_23", name: "Dani Martinez", number: 30, pos: "DFC", secondaryPos: ["LI", "MCD", "MC"], ovr: 71, pot: 79, pac: 81, sho: 66, pas: 68, dri: 74, def: 42, phy: 63, energy: 100 }
    ]
  },
  {
    id: "ath",
    name: "Athletic Club",
    shortName: "ATH",
    city: "Bilbao",
    stadium: "San Mames",
    primaryColor: "#EE2524",
    secondaryColor: "#FFFFFF",
    textColor: "#FFFFFF",
    awayKit: { primaryColor: "#006B3F", secondaryColor: "#FFFFFF", textColor: "#FFFFFF" },
    budget: 55000000,
    reputation: 87,
    defaultFormation: "4-2-3-1",
    players: [
      { id: "ath_1", name: "Unai Simon", number: 1, pos: "POR", ovr: 84, pot: 86, par: 85, pac: 46, sho: 16, pas: 75, dri: 48, def: 16, phy: 77, energy: 100 },
      { id: "ath_2", name: "Julen Agirrezabala", number: 13, pos: "POR", ovr: 78, pot: 83, par: 78, pac: 43, sho: 15, pas: 71, dri: 45, def: 15, phy: 74, energy: 100 },
      { id: "ath_3", name: "Oscar de Marcos", number: 18, pos: "LD", ovr: 79, pot: 79, pac: 78, sho: 67, pas: 75, dri: 77, def: 77, phy: 75, energy: 100 },
      { id: "ath_4", name: "Andoni Gorosabel", number: 2, pos: "LD", ovr: 76, pot: 77, pac: 79, sho: 50, pas: 70, dri: 73, def: 75, phy: 72, energy: 100 },
      { id: "ath_5", name: "Daniel Vivian", number: 3, pos: "DFC", ovr: 82, pot: 85, pac: 77, sho: 40, pas: 63, dri: 64, def: 83, phy: 83, energy: 100 },
      { id: "ath_6", name: "Aitor Paredes", number: 4, pos: "DFC", ovr: 80, pot: 84, pac: 73, sho: 38, pas: 66, dri: 65, def: 81, phy: 82, energy: 100 },
      { id: "ath_7", name: "Yeray Alvarez", number: 5, pos: "DFC", ovr: 78, pot: 78, pac: 68, sho: 45, pas: 65, dri: 66, def: 80, phy: 79, energy: 100 },
      { id: "ath_8", name: "Yuri Berchiche", number: 17, pos: "LI", ovr: 79, pot: 79, pac: 79, sho: 68, pas: 74, dri: 76, def: 79, phy: 81, energy: 100 },
      { id: "ath_9", name: "Inigo Ruiz de Galarreta", number: 16, pos: "MC", ovr: 79, pot: 79, pac: 66, sho: 68, pas: 80, dri: 78, def: 74, phy: 72, energy: 100 },
      { id: "ath_10", name: "Benat Prados", number: 24, pos: "MC", ovr: 79, pot: 84, pac: 76, sho: 65, pas: 77, dri: 78, def: 77, phy: 76, energy: 100 },
      { id: "ath_11", name: "Mikel Jauregizar", number: 23, pos: "MC", ovr: 75, pot: 83, pac: 72, sho: 64, pas: 75, dri: 75, def: 72, phy: 73, energy: 100 },
      { id: "ath_12", name: "Oihan Sancet", number: 8, pos: "MCO", ovr: 83, pot: 87, pac: 76, sho: 82, pas: 81, dri: 83, def: 62, phy: 79, energy: 100 },
      { id: "ath_13", name: "Unai Gomez", number: 20, pos: "MCO", ovr: 75, pot: 82, pac: 75, sho: 73, pas: 74, dri: 76, def: 61, phy: 74, energy: 100 },
      { id: "ath_14", name: "Inaki Williams", number: 9, pos: "ED", ovr: 83, pot: 83, pac: 91, sho: 80, pas: 76, dri: 81, def: 45, phy: 82, energy: 100 },
      { id: "ath_15", name: "Nico Williams", number: 10, pos: "EI", ovr: 85, pot: 89, pac: 93, sho: 80, pas: 82, dri: 87, def: 42, phy: 68, energy: 100 },
      { id: "ath_16", name: "Alex Berenguer", number: 7, pos: "EI", ovr: 79, pot: 79, pac: 81, sho: 77, pas: 78, dri: 81, def: 55, phy: 67, energy: 100 },
      { id: "ath_17", name: "Alvaro Djalo", number: 11, pos: "EI", ovr: 77, pot: 79, pac: 86, sho: 75, pas: 72, dri: 80, def: 36, phy: 67, energy: 100 },
      { id: "ath_18", name: "Gorka Guruzeta", number: 12, pos: "DC", ovr: 80, pot: 81, pac: 75, sho: 80, pas: 72, dri: 77, def: 42, phy: 76, energy: 100 }
    ]
  },
  {
    id: "vil",
    name: "Villarreal CF",
    shortName: "VIL",
    city: "Villarreal",
    stadium: "Estadio de la Ceramica",
    primaryColor: "#FEE100",
    secondaryColor: "#00519E",
    textColor: "#0F172A",
    awayKit: { primaryColor: "#002B49", secondaryColor: "#FEE100", textColor: "#FFFFFF" },
    budget: 60000000,
    reputation: 85,
    defaultFormation: "4-4-2",
    players: [
      { id: "vil_1", name: "Diego Conde", number: 13, pos: "POR", ovr: 79, pot: 82, par: 79, pac: 43, sho: 15, pas: 71, dri: 44, def: 15, phy: 74, energy: 100 },
      { id: "vil_2", name: "Luiz Junior", number: 1, pos: "POR", ovr: 77, pot: 83, par: 77, pac: 42, sho: 14, pas: 69, dri: 43, def: 14, phy: 73, energy: 100 },
      { id: "vil_3", name: "Kiko Femenia", number: 17, pos: "LD", ovr: 76, pot: 76, pac: 79, sho: 54, pas: 72, dri: 74, def: 73, phy: 70, energy: 100 },
      { id: "vil_4", name: "Raul Albiol", number: 3, pos: "DFC", ovr: 78, pot: 78, pac: 52, sho: 42, pas: 64, dri: 62, def: 81, phy: 75, energy: 100 },
      { id: "vil_5", name: "Logan Costa", number: 2, pos: "DFC", ovr: 78, pot: 83, pac: 74, sho: 38, pas: 62, dri: 63, def: 79, phy: 82, energy: 100 },
      { id: "vil_6", name: "Eric Bailly", number: 4, pos: "DFC", ovr: 77, pot: 77, pac: 72, sho: 40, pas: 60, dri: 65, def: 77, phy: 80, energy: 100 },
      { id: "vil_7", name: "Willy Kambwala", number: 5, pos: "DFC", ovr: 74, pot: 82, pac: 75, sho: 32, pas: 58, dri: 61, def: 74, phy: 77, energy: 100 },
      { id: "vil_8", name: "Sergi Cardona", number: 23, pos: "LI", ovr: 78, pot: 81, pac: 80, sho: 56, pas: 72, dri: 75, def: 75, phy: 76, energy: 100 },
      { id: "vil_9", name: "Alfonso Pedraza", number: 24, pos: "LI", ovr: 77, pot: 77, pac: 83, sho: 67, pas: 74, dri: 77, def: 73, phy: 78, energy: 100 },
      { id: "vil_10", name: "Pape Gueye", number: 18, pos: "MCD", ovr: 79, pot: 82, pac: 72, sho: 68, pas: 76, dri: 76, def: 78, phy: 83, energy: 100 },
      { id: "vil_11", name: "Dani Parejo", number: 10, pos: "MC", ovr: 81, pot: 81, pac: 48, sho: 78, pas: 86, dri: 78, def: 68, phy: 66, energy: 100 },
      { id: "vil_12", name: "Santi Comesana", number: 14, pos: "MC", ovr: 78, pot: 78, pac: 68, sho: 70, pas: 76, dri: 76, def: 75, phy: 77, energy: 100 },
      { id: "vil_13", name: "Alex Baena", number: 16, pos: "EI", ovr: 83, pot: 86, pac: 77, sho: 79, pas: 85, dri: 83, def: 65, phy: 73, energy: 100 },
      { id: "vil_14", name: "Yeremy Pino", number: 21, pos: "ED", ovr: 80, pot: 85, pac: 82, sho: 76, pas: 77, dri: 82, def: 45, phy: 63, energy: 100 },
      { id: "vil_15", name: "Ilias Akhomach", number: 11, pos: "ED", ovr: 76, pot: 83, pac: 82, sho: 71, pas: 73, dri: 81, def: 35, phy: 58, energy: 100 },
      { id: "vil_16", name: "Gerard Moreno", number: 7, pos: "DC", ovr: 83, pot: 83, pac: 76, sho: 84, pas: 80, dri: 83, def: 46, phy: 72, energy: 100 },
      { id: "vil_17", name: "Ayoze Perez", number: 22, pos: "DC", ovr: 81, pot: 81, pac: 78, sho: 81, pas: 77, dri: 82, def: 48, phy: 67, energy: 100 },
      { id: "vil_18", name: "Thierno Barry", number: 15, pos: "DC", ovr: 77, pot: 85, pac: 84, sho: 76, pas: 64, dri: 76, def: 36, phy: 81, energy: 100 }
    ]
  },
  {
    id: "rso",
    name: "Real Sociedad",
    shortName: "RSO",
    city: "San Sebastian",
    stadium: "Reale Arena",
    primaryColor: "#0067B1",
    secondaryColor: "#FFFFFF",
    textColor: "#FFFFFF",
    awayKit: { primaryColor: "#EAB308", secondaryColor: "#18181B", textColor: "#0F172A" },
    budget: 58000000,
    reputation: 86,
    defaultFormation: "4-3-3",
    players: [
      { id: "rso_1", name: "Alex Remiro", number: 1, pos: "POR", ovr: 84, pot: 85, par: 85, pac: 46, sho: 16, pas: 74, dri: 48, def: 16, phy: 76, energy: 100 },
      { id: "rso_2", name: "Unai Marrero", number: 13, pos: "POR", ovr: 71, pot: 79, par: 71, pac: 39, sho: 14, pas: 65, dri: 42, def: 14, phy: 68, energy: 100 },
      { id: "rso_3", name: "Hamari Traore", number: 2, pos: "LD", ovr: 79, pot: 79, pac: 81, sho: 58, pas: 73, dri: 76, def: 76, phy: 77, energy: 100 },
      { id: "rso_4", name: "Jon Aramburu", number: 27, pos: "LD", ovr: 76, pot: 83, pac: 80, sho: 50, pas: 69, dri: 73, def: 75, phy: 75, energy: 100 },
      { id: "rso_5", name: "Igor Zubeldia", number: 5, pos: "DFC", ovr: 81, pot: 82, pac: 67, sho: 50, pas: 70, dri: 68, def: 82, phy: 80, energy: 100 },
      { id: "rso_6", name: "Nayef Aguerd", number: 21, pos: "DFC", ovr: 80, pot: 80, pac: 73, sho: 40, pas: 66, dri: 65, def: 81, phy: 79, energy: 100 },
      { id: "rso_7", name: "Aritz Elustondo", number: 6, pos: "DFC", ovr: 79, pot: 79, pac: 69, sho: 48, pas: 68, dri: 67, def: 80, phy: 78, energy: 100 },
      { id: "rso_8", name: "Sergio Gomez", number: 17, pos: "LI", ovr: 79, pot: 84, pac: 79, sho: 72, pas: 80, dri: 80, def: 73, phy: 68, energy: 100 },
      { id: "rso_9", name: "Aihen Munoz", number: 3, pos: "LI", ovr: 76, pot: 78, pac: 78, sho: 52, pas: 71, dri: 73, def: 75, phy: 70, energy: 100 },
      { id: "rso_10", name: "Martin Zubimendi", number: 4, pos: "MCD", ovr: 84, pot: 87, pac: 68, sho: 66, pas: 81, dri: 79, def: 83, phy: 80, energy: 100 },
      { id: "rso_11", name: "Luka Sucic", number: 24, pos: "MC", ovr: 78, pot: 85, pac: 72, sho: 75, pas: 79, dri: 79, def: 66, phy: 74, energy: 100 },
      { id: "rso_12", name: "Benat Turrientes", number: 22, pos: "MC", ovr: 76, pot: 82, pac: 70, sho: 68, pas: 77, dri: 76, def: 71, phy: 71, energy: 100 },
      { id: "rso_13", name: "Brais Mendez", number: 23, pos: "MCO", ovr: 82, pot: 83, pac: 73, sho: 80, pas: 82, dri: 82, def: 64, phy: 71, energy: 100 },
      { id: "rso_14", name: "Takefusa Kubo", number: 14, pos: "ED", ovr: 83, pot: 87, pac: 85, sho: 78, pas: 80, dri: 87, def: 42, phy: 60, energy: 100 },
      { id: "rso_15", name: "Mikel Oyarzabal", number: 10, pos: "EI", ovr: 83, pot: 83, pac: 78, sho: 83, pas: 82, dri: 83, def: 44, phy: 74, energy: 100 },
      { id: "rso_16", name: "Ander Barrenetxea", number: 7, pos: "EI", ovr: 77, pot: 83, pac: 83, sho: 73, pas: 75, dri: 81, def: 45, phy: 66, energy: 100 },
      { id: "rso_17", name: "Sheraldo Becker", number: 11, pos: "DC", ovr: 76, pot: 76, pac: 93, sho: 75, pas: 69, dri: 77, def: 38, phy: 74, energy: 100 },
      { id: "rso_18", name: "Orri Oskarsson", number: 9, pos: "DC", ovr: 77, pot: 85, pac: 80, sho: 78, pas: 65, dri: 74, def: 32, phy: 76, energy: 100 }
    ]
  },
  {
    id: "bet",
    name: "Real Betis",
    shortName: "BET",
    city: "Sevilla",
    stadium: "Benito Villamarin",
    primaryColor: "#00954C",
    secondaryColor: "#FFFFFF",
    textColor: "#FFFFFF",
    awayKit: { primaryColor: "#18181B", secondaryColor: "#00954C", textColor: "#FFFFFF" },
    budget: 52000000,
    reputation: 85,
    defaultFormation: "4-2-3-1",
    players: [
      { id: "bet_1", name: "Rui Silva", number: 1, pos: "POR", ovr: 80, pot: 81, par: 80, pac: 42, sho: 15, pas: 71, dri: 45, def: 15, phy: 74, energy: 100 },
      { id: "bet_2", name: "Adrian San Miguel", number: 13, pos: "POR", ovr: 73, pot: 73, par: 73, pac: 38, sho: 13, pas: 66, dri: 40, def: 14, phy: 69, energy: 100 },
      { id: "bet_3", name: "Hector Bellerin", number: 2, pos: "LD", ovr: 78, pot: 78, pac: 82, sho: 52, pas: 72, dri: 77, def: 74, phy: 66, energy: 100 },
      { id: "bet_4", name: "Youssouf Sabaly", number: 23, pos: "LD", ovr: 77, pot: 77, pac: 78, sho: 55, pas: 71, dri: 76, def: 75, phy: 73, energy: 100 },
      { id: "bet_5", name: "Diego Llorente", number: 3, pos: "DFC", ovr: 80, pot: 80, pac: 70, sho: 48, pas: 68, dri: 66, def: 81, phy: 78, energy: 100 },
      { id: "bet_6", name: "Marc Bartra", number: 5, pos: "DFC", ovr: 78, pot: 78, pac: 66, sho: 54, pas: 70, dri: 68, def: 79, phy: 74, energy: 100 },
      { id: "bet_7", name: "Natan", number: 6, pos: "DFC", ovr: 78, pot: 83, pac: 74, sho: 35, pas: 64, dri: 65, def: 79, phy: 81, energy: 100 },
      { id: "bet_8", name: "Romain Perraud", number: 15, pos: "LI", ovr: 77, pot: 78, pac: 78, sho: 68, pas: 73, dri: 74, def: 73, phy: 75, energy: 100 },
      { id: "bet_9", name: "Ricardo Rodriguez", number: 12, pos: "LI", ovr: 77, pot: 77, pac: 64, sho: 64, pas: 78, dri: 74, def: 77, phy: 72, energy: 100 },
      { id: "bet_10", name: "Marc Roca", number: 21, pos: "MCD", ovr: 79, pot: 80, pac: 63, sho: 68, pas: 79, dri: 75, def: 77, phy: 76, energy: 100 },
      { id: "bet_11", name: "Sergi Altimira", number: 16, pos: "MC", ovr: 76, pot: 82, pac: 71, sho: 63, pas: 76, dri: 77, def: 73, phy: 74, energy: 100 },
      { id: "bet_12", name: "Isco", number: 22, pos: "MCO", ovr: 83, pot: 83, pac: 67, sho: 78, pas: 84, dri: 87, def: 58, phy: 66, energy: 100 },
      { id: "bet_13", name: "Giovani Lo Celso", number: 20, pos: "MCO", ovr: 82, pot: 82, pac: 73, sho: 78, pas: 83, dri: 84, def: 66, phy: 72, energy: 100 },
      { id: "bet_14", name: "Pablo Fornals", number: 18, pos: "ED", ovr: 79, pot: 79, pac: 71, sho: 74, pas: 80, dri: 80, def: 64, phy: 69, energy: 100 },
      { id: "bet_15", name: "Abde Ezzalzouli", number: 10, pos: "EI", ovr: 79, pot: 84, pac: 89, sho: 73, pas: 71, dri: 86, def: 40, phy: 67, energy: 100 },
      { id: "bet_16", name: "Chimy Avila", number: 9, pos: "DC", ovr: 77, pot: 77, pac: 78, sho: 79, pas: 68, dri: 77, def: 48, phy: 81, energy: 100 },
      { id: "bet_17", name: "Vitor Roque", number: 8, pos: "DC", ovr: 79, pot: 86, pac: 86, sho: 78, pas: 66, dri: 79, def: 35, phy: 76, energy: 100 },
      { id: "bet_18", name: "Cedric Bakambu", number: 11, pos: "DC", ovr: 76, pot: 76, pac: 79, sho: 77, pas: 67, dri: 75, def: 36, phy: 73, energy: 100 }
    ]
  },
  {
    id: "dep",
    name: "RC Deportivo de La Coruña",
    shortName: "DEP",
    city: "A Coruna",
    stadium: "Abanca-Riazor",
    primaryColor: "#0055A5",
    secondaryColor: "#FFFFFF",
    textColor: "#FFFFFF",
    awayKit: { primaryColor: "#EAB308", secondaryColor: "#0055A5", textColor: "#0F172A" },
    budget: 35000000,
    reputation: 80,
    defaultFormation: "4-2-3-1",
    players: [
      { id: "dep_1", name: "Helton Leite", number: 1, pos: "POR", ovr: 74, pot: 74, par: 74, pac: 41, sho: 14, pas: 68, dri: 42, def: 14, phy: 73, energy: 100 },
      { id: "dep_2", name: "German Parreno", number: 13, pos: "POR", ovr: 68, pot: 68, par: 68, pac: 37, sho: 13, pas: 63, dri: 39, def: 13, phy: 68, energy: 100 },
      { id: "dep_3", name: "Ximo Navarro", number: 2, pos: "LD", ovr: 71, pot: 71, pac: 73, sho: 48, pas: 65, dri: 68, def: 71, phy: 73, energy: 100 },
      { id: "dep_4", name: "Alex Petxarroman", number: 18, pos: "LD", ovr: 70, pot: 73, pac: 76, sho: 50, pas: 66, dri: 69, def: 70, phy: 71, energy: 100 },
      { id: "dep_5", name: "Pablo Vazquez", number: 5, pos: "DFC", ovr: 72, pot: 72, pac: 60, sho: 38, pas: 58, dri: 56, def: 74, phy: 78, energy: 100 },
      { id: "dep_6", name: "Dani Barcia", number: 15, pos: "DFC", ovr: 71, pot: 80, pac: 66, sho: 34, pas: 64, dri: 62, def: 73, phy: 74, energy: 100 },
      { id: "dep_7", name: "Jaime Sanchez", number: 3, pos: "DFC", ovr: 69, pot: 70, pac: 62, sho: 32, pas: 58, dri: 55, def: 71, phy: 74, energy: 100 },
      { id: "dep_8", name: "Rafael Obrador", number: 23, pos: "LI", ovr: 70, pot: 80, pac: 79, sho: 50, pas: 66, dri: 70, def: 68, phy: 68, energy: 100 },
      { id: "dep_9", name: "Jose Angel Jurado", number: 6, pos: "MCD", ovr: 71, pot: 71, pac: 58, sho: 66, pas: 72, dri: 69, def: 70, phy: 74, energy: 100 },
      { id: "dep_10", name: "Nuke Mfulu", number: 22, pos: "MCD", ovr: 70, pot: 70, pac: 62, sho: 52, pas: 66, dri: 67, def: 71, phy: 77, energy: 100 },
      { id: "dep_11", name: "Diego Villares", number: 4, pos: "MC", ovr: 73, pot: 75, pac: 72, sho: 64, pas: 71, dri: 72, def: 72, phy: 75, energy: 100 },
      { id: "dep_12", name: "Hugo Rama", number: 14, pos: "MC", ovr: 70, pot: 72, pac: 68, sho: 64, pas: 72, dri: 71, def: 66, phy: 68, energy: 100 },
      { id: "dep_13", name: "Mario Soriano", number: 8, pos: "MCO", ovr: 73, pot: 78, pac: 74, sho: 68, pas: 74, dri: 77, def: 45, phy: 58, energy: 100 },
      { id: "dep_14", name: "David Mella", number: 17, pos: "ED", ovr: 74, pot: 84, pac: 88, sho: 68, pas: 69, dri: 77, def: 48, phy: 66, energy: 100 },
      { id: "dep_15", name: "Cristian Herrera", number: 11, pos: "ED", ovr: 70, pot: 70, pac: 74, sho: 70, pas: 66, dri: 71, def: 42, phy: 68, energy: 100 },
      { id: "dep_16", name: "Yeremay Hernandez", number: 10, pos: "EI", ovr: 75, pot: 83, pac: 84, sho: 72, pas: 72, dri: 81, def: 36, phy: 62, energy: 100 },
      { id: "dep_17", name: "Lucas Perez", number: 7, pos: "DC", ovr: 74, pot: 74, pac: 70, sho: 78, pas: 76, dri: 75, def: 40, phy: 68, energy: 100 },
      { id: "dep_18", name: "Mohamed Bouldini", number: 20, pos: "DC", ovr: 70, pot: 71, pac: 71, sho: 71, pas: 56, dri: 67, def: 34, phy: 79, energy: 100 }
    ]
  },
  {
    id: "sev",
    name: "Sevilla FC",
    shortName: "SEV",
    city: "Sevilla",
    stadium: "Ramon Sanchez-Pizjuan",
    primaryColor: "#FFFFFF",
    secondaryColor: "#D4001F",
    textColor: "#0F172A",
    awayKit: { primaryColor: "#D4001F", secondaryColor: "#FFFFFF", textColor: "#FFFFFF" },
    budget: 48000000,
    reputation: 84,
    defaultFormation: "4-3-3",
    players: [
      { id: "sev_1", name: "Orjan Nyland", number: 13, pos: "POR", ovr: 79, pot: 79, par: 79, pac: 42, sho: 15, pas: 71, dri: 44, def: 15, phy: 73, energy: 100 },
      { id: "sev_2", name: "Alvaro Fernandez", number: 1, pos: "POR", ovr: 74, pot: 77, par: 74, pac: 40, sho: 14, pas: 68, dri: 42, def: 14, phy: 71, energy: 100 },
      { id: "sev_3", name: "Juanlu Sanchez", number: 26, pos: "LD", ovr: 76, pot: 83, pac: 82, sho: 64, pas: 73, dri: 76, def: 72, phy: 74, energy: 100 },
      { id: "sev_4", name: "Gonzalo Montiel", number: 15, pos: "LD", ovr: 76, pot: 77, pac: 78, sho: 55, pas: 71, dri: 74, def: 75, phy: 76, energy: 100 },
      { id: "sev_5", name: "Loic Bade", number: 22, pos: "DFC", ovr: 80, pot: 84, pac: 76, sho: 38, pas: 64, dri: 66, def: 81, phy: 82, energy: 100 },
      { id: "sev_6", name: "Nemanja Gudelj", number: 6, pos: "DFC", ovr: 78, pot: 78, pac: 58, sho: 73, pas: 76, dri: 71, def: 78, phy: 82, energy: 100 },
      { id: "sev_7", name: "Kike Salas", number: 4, pos: "DFC", ovr: 76, pot: 82, pac: 70, sho: 45, pas: 65, dri: 64, def: 77, phy: 79, energy: 100 },
      { id: "sev_8", name: "Tanguy Nianzou", number: 24, pos: "DFC", ovr: 75, pot: 81, pac: 69, sho: 42, pas: 62, dri: 63, def: 76, phy: 78, energy: 100 },
      { id: "sev_9", name: "Adria Pedrosa", number: 3, pos: "LI", ovr: 77, pot: 78, pac: 84, sho: 60, pas: 72, dri: 76, def: 73, phy: 70, energy: 100 },
      { id: "sev_10", name: "Lucien Agoume", number: 20, pos: "MCD", ovr: 76, pot: 82, pac: 68, sho: 62, pas: 74, dri: 74, def: 76, phy: 78, energy: 100 },
      { id: "sev_11", name: "Djibril Sow", number: 18, pos: "MC", ovr: 78, pot: 79, pac: 75, sho: 69, pas: 77, dri: 78, def: 76, phy: 76, energy: 100 },
      { id: "sev_12", name: "Sambi Lokonga", number: 12, pos: "MC", ovr: 77, pot: 81, pac: 72, sho: 66, pas: 78, dri: 78, def: 74, phy: 74, energy: 100 },
      { id: "sev_13", name: "Saul Niguez", number: 17, pos: "MC", ovr: 77, pot: 77, pac: 66, sho: 74, pas: 76, dri: 76, def: 75, phy: 77, energy: 100 },
      { id: "sev_14", name: "Peque Fernandez", number: 14, pos: "MCO", ovr: 74, pot: 81, pac: 76, sho: 74, pas: 72, dri: 77, def: 42, phy: 61, energy: 100 },
      { id: "sev_15", name: "Dodi Lukebakio", number: 11, pos: "ED", ovr: 79, pot: 80, pac: 88, sho: 79, pas: 74, dri: 82, def: 35, phy: 73, energy: 100 },
      { id: "sev_16", name: "Chidera Ejuke", number: 21, pos: "EI", ovr: 76, pot: 77, pac: 89, sho: 70, pas: 69, dri: 83, def: 32, phy: 60, energy: 100 },
      { id: "sev_17", name: "Isaac Romero", number: 7, pos: "DC", ovr: 77, pot: 84, pac: 82, sho: 77, pas: 68, dri: 76, def: 40, phy: 79, energy: 100 },
      { id: "sev_18", name: "Kelechi Iheanacho", number: 9, pos: "DC", ovr: 75, pot: 75, pac: 74, sho: 77, pas: 71, dri: 77, def: 34, phy: 71, energy: 100 }
    ]
  },
  {
    id: "val",
    name: "Valencia CF",
    shortName: "VAL",
    city: "Valencia",
    stadium: "Mestalla",
    primaryColor: "#FFFFFF",
    secondaryColor: "#18181B",
    textColor: "#0F172A",
    awayKit: { primaryColor: "#FF6B00", secondaryColor: "#18181B", textColor: "#FFFFFF" },
    budget: 45000000,
    reputation: 83,
    defaultFormation: "4-4-2",
    players: [
      { id: "val_1", name: "Giorgi Mamardashvili", number: 25, pos: "POR", ovr: 83, pot: 87, par: 83, pac: 46, sho: 16, pas: 74, dri: 48, def: 16, phy: 78, energy: 100 },
      { id: "val_2", name: "Stole Dimitrievski", number: 13, pos: "POR", ovr: 78, pot: 78, par: 78, pac: 42, sho: 15, pas: 72, dri: 44, def: 15, phy: 75, energy: 100 },
      { id: "val_3", name: "Thierry Correia", number: 12, pos: "LD", ovr: 78, pot: 80, pac: 87, sho: 54, pas: 70, dri: 76, def: 75, phy: 76, energy: 100 },
      { id: "val_4", name: "Dimitri Foulquier", number: 20, pos: "LD", ovr: 76, pot: 76, pac: 78, sho: 52, pas: 68, dri: 72, def: 76, phy: 80, energy: 100 },
      { id: "val_5", name: "Cristhian Mosquera", number: 3, pos: "DFC", ovr: 79, pot: 86, pac: 78, sho: 35, pas: 65, dri: 66, def: 80, phy: 81, energy: 100 },
      { id: "val_6", name: "Cesar Tarrega", number: 15, pos: "DFC", ovr: 76, pot: 83, pac: 70, sho: 34, pas: 62, dri: 62, def: 77, phy: 82, energy: 100 },
      { id: "val_7", name: "Yarek Gasiorowski", number: 24, pos: "DFC", ovr: 74, pot: 84, pac: 72, sho: 38, pas: 67, dri: 66, def: 75, phy: 76, energy: 100 },
      { id: "val_8", name: "Jose Luis Gaya", number: 14, pos: "LI", ovr: 81, pot: 81, pac: 82, sho: 63, pas: 78, dri: 80, def: 78, phy: 69, energy: 100 },
      { id: "val_9", name: "Enzo Barrenechea", number: 5, pos: "MCD", ovr: 76, pot: 83, pac: 68, sho: 62, pas: 74, dri: 73, def: 76, phy: 78, energy: 100 },
      { id: "val_10", name: "Pepelu", number: 18, pos: "MC", ovr: 80, pot: 83, pac: 67, sho: 74, pas: 80, dri: 76, def: 78, phy: 77, energy: 100 },
      { id: "val_11", name: "Javi Guerra", number: 8, pos: "MC", ovr: 79, pot: 86, pac: 76, sho: 73, pas: 78, dri: 80, def: 73, phy: 77, energy: 100 },
      { id: "val_12", name: "Andre Almeida", number: 10, pos: "MCO", ovr: 78, pot: 82, pac: 71, sho: 70, pas: 81, dri: 81, def: 64, phy: 65, energy: 100 },
      { id: "val_13", name: "Diego Lopez", number: 16, pos: "ED", ovr: 78, pot: 84, pac: 83, sho: 75, pas: 74, dri: 78, def: 50, phy: 68, energy: 100 },
      { id: "val_14", name: "Luis Rioja", number: 22, pos: "EI", ovr: 77, pot: 77, pac: 84, sho: 73, pas: 74, dri: 78, def: 48, phy: 66, energy: 100 },
      { id: "val_15", name: "Hugo Duro", number: 9, pos: "DC", ovr: 79, pot: 81, pac: 77, sho: 80, pas: 68, dri: 75, def: 44, phy: 79, energy: 100 },
      { id: "val_16", name: "Rafa Mir", number: 11, pos: "DC", ovr: 75, pot: 76, pac: 82, sho: 76, pas: 60, dri: 71, def: 35, phy: 81, energy: 100 }
    ]
  },
  {
    id: "cel",
    name: "RC Celta de Vigo",
    shortName: "CEL",
    city: "Vigo",
    stadium: "Abanca-Balaidos",
    primaryColor: "#8AC3EE",
    secondaryColor: "#FFFFFF",
    textColor: "#0F172A",
    awayKit: { primaryColor: "#1E293B", secondaryColor: "#8AC3EE", textColor: "#FFFFFF" },
    budget: 42000000,
    reputation: 82,
    defaultFormation: "3-4-3",
    players: [
      { id: "cel_1", name: "Vicente Guaita", number: 13, pos: "POR", ovr: 79, pot: 79, par: 79, pac: 41, sho: 15, pas: 72, dri: 44, def: 15, phy: 73, energy: 100 },
      { id: "cel_2", name: "Ivan Villar", number: 1, pos: "POR", ovr: 73, pot: 75, par: 73, pac: 40, sho: 14, pas: 66, dri: 42, def: 14, phy: 71, energy: 100 },
      { id: "cel_3", name: "Oscar Mingueza", number: 3, pos: "LD", ovr: 80, pot: 83, pac: 78, sho: 64, pas: 78, dri: 77, def: 79, phy: 76, energy: 100 },
      { id: "cel_4", name: "Carl Starfelt", number: 2, pos: "DFC", ovr: 77, pot: 77, pac: 67, sho: 35, pas: 58, dri: 58, def: 79, phy: 82, energy: 100 },
      { id: "cel_5", name: "Carlos Dominguez", number: 24, pos: "DFC", ovr: 75, pot: 81, pac: 66, sho: 32, pas: 62, dri: 62, def: 77, phy: 78, energy: 100 },
      { id: "cel_6", name: "Javi Rodriguez", number: 32, pos: "DFC", ovr: 73, pot: 81, pac: 72, sho: 40, pas: 68, dri: 68, def: 74, phy: 73, energy: 100 },
      { id: "cel_7", name: "Mihailo Ristic", number: 21, pos: "LI", ovr: 74, pot: 74, pac: 77, sho: 67, pas: 73, dri: 73, def: 72, phy: 74, energy: 100 },
      { id: "cel_8", name: "Fran Beltran", number: 8, pos: "MC", ovr: 78, pot: 80, pac: 70, sho: 65, pas: 78, dri: 77, def: 76, phy: 74, energy: 100 },
      { id: "cel_9", name: "Ilaix Moriba", number: 6, pos: "MC", ovr: 75, pot: 80, pac: 72, sho: 70, pas: 74, dri: 76, def: 71, phy: 78, energy: 100 },
      { id: "cel_10", name: "Hugo Sotelo", number: 14, pos: "MC", ovr: 74, pot: 82, pac: 68, sho: 65, pas: 76, dri: 76, def: 68, phy: 69, energy: 100 },
      { id: "cel_11", name: "Williot Swedberg", number: 19, pos: "MCO", ovr: 76, pot: 84, pac: 81, sho: 74, pas: 72, dri: 77, def: 45, phy: 67, energy: 100 },
      { id: "cel_12", name: "Jonathan Bamba", number: 17, pos: "EI", ovr: 78, pot: 78, pac: 83, sho: 74, pas: 75, dri: 80, def: 42, phy: 70, energy: 100 },
      { id: "cel_13", name: "Hugo Alvarez", number: 23, pos: "EI", ovr: 76, pot: 84, pac: 84, sho: 70, pas: 73, dri: 79, def: 58, phy: 64, energy: 100 },
      { id: "cel_14", name: "Iago Aspas", number: 10, pos: "DC", ovr: 83, pot: 83, pac: 76, sho: 84, pas: 82, dri: 83, def: 35, phy: 63, energy: 100 },
      { id: "cel_15", name: "Borja Iglesias", number: 7, pos: "DC", ovr: 77, pot: 77, pac: 68, sho: 79, pas: 67, dri: 72, def: 38, phy: 80, energy: 100 },
      { id: "cel_16", name: "Anastasios Douvikas", number: 9, pos: "DC", ovr: 76, pot: 80, pac: 77, sho: 78, pas: 64, dri: 74, def: 32, phy: 77, energy: 100 }
    ]
  },
  {
    id: "osa",
    name: "CA Osasuna",
    shortName: "OSA",
    city: "Pamplona",
    stadium: "El Sadar",
    primaryColor: "#D91A2A",
    secondaryColor: "#0A1E40",
    textColor: "#FFFFFF",
    awayKit: { primaryColor: "#15803D", secondaryColor: "#FFFFFF", textColor: "#FFFFFF" },
    budget: 40000000,
    reputation: 82,
    defaultFormation: "4-3-3",
    players: [
      { id: "osa_1", name: "Sergio Herrera", number: 1, pos: "POR", ovr: 80, pot: 80, par: 80, pac: 43, sho: 15, pas: 72, dri: 45, def: 15, phy: 74, energy: 100 },
      { id: "osa_2", name: "Aitor Fernandez", number: 13, pos: "POR", ovr: 75, pot: 75, par: 75, pac: 40, sho: 14, pas: 68, dri: 42, def: 14, phy: 71, energy: 100 },
      { id: "osa_3", name: "Jesus Areso", number: 12, pos: "LD", ovr: 77, pot: 81, pac: 86, sho: 55, pas: 72, dri: 74, def: 73, phy: 76, energy: 100 },
      { id: "osa_4", name: "Alejandro Catena", number: 24, pos: "DFC", ovr: 78, pot: 78, pac: 63, sho: 44, pas: 65, dri: 62, def: 79, phy: 82, energy: 100 },
      { id: "osa_5", name: "Flavien Boyomo", number: 22, pos: "DFC", ovr: 77, pot: 83, pac: 77, sho: 36, pas: 62, dri: 64, def: 78, phy: 81, energy: 100 },
      { id: "osa_6", name: "Jorge Herrando", number: 28, pos: "DFC", ovr: 75, pot: 81, pac: 68, sho: 35, pas: 60, dri: 61, def: 76, phy: 79, energy: 100 },
      { id: "osa_7", name: "Juan Cruz", number: 3, pos: "LI", ovr: 76, pot: 76, pac: 72, sho: 48, pas: 69, dri: 70, def: 76, phy: 77, energy: 100 },
      { id: "osa_8", name: "Abel Bretones", number: 23, pos: "LI", ovr: 74, pot: 79, pac: 81, sho: 60, pas: 69, dri: 72, def: 72, phy: 74, energy: 100 },
      { id: "osa_9", name: "Lucas Torro", number: 6, pos: "MCD", ovr: 78, pot: 78, pac: 61, sho: 63, pas: 74, dri: 71, def: 79, phy: 82, energy: 100 },
      { id: "osa_10", name: "Jon Moncayola", number: 7, pos: "MC", ovr: 78, pot: 80, pac: 76, sho: 72, pas: 77, dri: 76, def: 75, phy: 78, energy: 100 },
      { id: "osa_11", name: "Moi Gomez", number: 16, pos: "MC", ovr: 77, pot: 77, pac: 70, sho: 73, pas: 79, dri: 78, def: 63, phy: 68, energy: 100 },
      { id: "osa_12", name: "Aimar Oroz", number: 10, pos: "MCO", ovr: 79, pot: 85, pac: 74, sho: 73, pas: 80, dri: 81, def: 64, phy: 71, energy: 100 },
      { id: "osa_13", name: "Ruben Garcia", number: 14, pos: "ED", ovr: 77, pot: 77, pac: 75, sho: 74, pas: 77, dri: 78, def: 58, phy: 67, energy: 100 },
      { id: "osa_14", name: "Bryan Zaragoza", number: 19, pos: "EI", ovr: 78, pot: 83, pac: 89, sho: 74, pas: 72, dri: 84, def: 34, phy: 56, energy: 100 },
      { id: "osa_15", name: "Ante Budimir", number: 17, pos: "DC", ovr: 82, pot: 82, pac: 68, sho: 83, pas: 66, dri: 74, def: 42, phy: 82, energy: 100 },
      { id: "osa_16", name: "Raul Garcia de Haro", number: 9, pos: "DC", ovr: 74, pot: 80, pac: 74, sho: 76, pas: 62, dri: 72, def: 35, phy: 76, energy: 100 }
    ]
  },
  {
    id: "get",
    name: "Getafe CF",
    shortName: "GET",
    city: "Getafe",
    stadium: "Coliseum",
    primaryColor: "#005999",
    secondaryColor: "#FFFFFF",
    textColor: "#FFFFFF",
    awayKit: { primaryColor: "#DC2626", secondaryColor: "#FFFFFF", textColor: "#FFFFFF" },
    budget: 35000000,
    reputation: 80,
    defaultFormation: "5-3-2",
    players: [
      { id: "get_1", name: "David Soria", number: 13, pos: "POR", ovr: 81, pot: 81, par: 81, pac: 44, sho: 16, pas: 72, dri: 46, def: 16, phy: 75, energy: 100 },
      { id: "get_2", name: "Jiri Letacek", number: 1, pos: "POR", ovr: 72, pot: 76, par: 72, pac: 38, sho: 14, pas: 65, dri: 41, def: 14, phy: 71, energy: 100 },
      { id: "get_3", name: "Juan Iglesias", number: 21, pos: "LD", ovr: 76, pot: 78, pac: 78, sho: 52, pas: 68, dri: 72, def: 75, phy: 74, energy: 100 },
      { id: "get_4", name: "Djene Dakonam", number: 2, pos: "DFC", ovr: 78, pot: 78, pac: 75, sho: 38, pas: 62, dri: 65, def: 80, phy: 80, energy: 100 },
      { id: "get_5", name: "Omar Alderete", number: 15, pos: "DFC", ovr: 78, pot: 79, pac: 68, sho: 50, pas: 64, dri: 62, def: 79, phy: 83, energy: 100 },
      { id: "get_6", name: "Domingos Duarte", number: 22, pos: "DFC", ovr: 74, pot: 74, pac: 61, sho: 40, pas: 58, dri: 58, def: 75, phy: 78, energy: 100 },
      { id: "get_7", name: "Diego Rico", number: 16, pos: "LI", ovr: 77, pot: 77, pac: 74, sho: 60, pas: 75, dri: 72, def: 76, phy: 77, energy: 100 },
      { id: "get_8", name: "Fabrizio Angileri", number: 3, pos: "LI", ovr: 72, pot: 72, pac: 76, sho: 56, pas: 68, dri: 70, def: 70, phy: 71, energy: 100 },
      { id: "get_9", name: "Mauro Arambarri", number: 8, pos: "MC", ovr: 79, pot: 79, pac: 71, sho: 75, pas: 76, dri: 75, def: 78, phy: 82, energy: 100 },
      { id: "get_10", name: "Luis Milla", number: 5, pos: "MC", ovr: 79, pot: 79, pac: 67, sho: 68, pas: 81, dri: 77, def: 74, phy: 70, energy: 100 },
      { id: "get_11", name: "Yellu Santiago", number: 6, pos: "MC", ovr: 71, pot: 80, pac: 70, sho: 62, pas: 70, dri: 71, def: 69, phy: 74, energy: 100 },
      { id: "get_12", name: "Alex Sola", number: 7, pos: "ED", ovr: 76, pot: 80, pac: 84, sho: 66, pas: 72, dri: 76, def: 64, phy: 69, energy: 100 },
      { id: "get_13", name: "Carles Perez", number: 17, pos: "ED", ovr: 75, pot: 76, pac: 81, sho: 74, pas: 71, dri: 79, def: 38, phy: 64, energy: 100 },
      { id: "get_14", name: "Peter Federico", number: 11, pos: "EI", ovr: 73, pot: 81, pac: 83, sho: 68, pas: 69, dri: 77, def: 42, phy: 63, energy: 100 },
      { id: "get_15", name: "Borja Mayoral", number: 9, pos: "DC", ovr: 79, pot: 80, pac: 76, sho: 81, pas: 70, dri: 77, def: 38, phy: 72, energy: 100 },
      { id: "get_16", name: "Bertug Yildirim", number: 19, pos: "DC", ovr: 74, pot: 81, pac: 75, sho: 74, pas: 60, dri: 71, def: 34, phy: 81, energy: 100 }
    ]
  },
  {
    id: "ala",
    name: "Deportivo Alaves",
    shortName: "ALA",
    city: "Vitoria-Gasteiz",
    stadium: "Mendizorroza",
    primaryColor: "#0055A5",
    secondaryColor: "#FFFFFF",
    textColor: "#FFFFFF",
    awayKit: { primaryColor: "#15803D", secondaryColor: "#FFFFFF", textColor: "#FFFFFF" },
    budget: 34000000,
    reputation: 80,
    defaultFormation: "4-2-3-1",
    players: [
      { id: "ala_1", name: "Antonio Sivera", number: 1, pos: "POR", ovr: 79, pot: 81, par: 79, pac: 44, sho: 15, pas: 70, dri: 46, def: 15, phy: 73, energy: 100 },
      { id: "ala_2", name: "Jesus Owono", number: 31, pos: "POR", ovr: 70, pot: 76, par: 70, pac: 38, sho: 13, pas: 64, dri: 40, def: 14, phy: 68, energy: 100 },
      { id: "ala_3", name: "Nahuel Tenaglia", number: 14, pos: "LD", ovr: 76, pot: 77, pac: 76, sho: 50, pas: 68, dri: 70, def: 76, phy: 79, energy: 100 },
      { id: "ala_4", name: "Hugo Novoa", number: 2, pos: "LD", ovr: 73, pot: 80, pac: 85, sho: 64, pas: 68, dri: 75, def: 66, phy: 67, energy: 100 },
      { id: "ala_5", name: "Abdel Abqar", number: 5, pos: "DFC", ovr: 76, pot: 80, pac: 70, sho: 34, pas: 58, dri: 60, def: 78, phy: 82, energy: 100 },
      { id: "ala_6", name: "Aleksandar Sedlar", number: 4, pos: "DFC", ovr: 75, pot: 75, pac: 62, sho: 48, pas: 64, dri: 62, def: 76, phy: 77, energy: 100 },
      { id: "ala_7", name: "Moussa Diarra", number: 22, pos: "DFC", ovr: 73, pot: 78, pac: 71, sho: 32, pas: 59, dri: 61, def: 74, phy: 76, energy: 100 },
      { id: "ala_8", name: "Manuel Sanchez", number: 3, pos: "LI", ovr: 75, pot: 78, pac: 80, sho: 55, pas: 69, dri: 72, def: 73, phy: 73, energy: 100 },
      { id: "ala_9", name: "Antonio Blanco", number: 8, pos: "MCD", ovr: 77, pot: 82, pac: 68, sho: 64, pas: 76, dri: 74, def: 77, phy: 76, energy: 100 },
      { id: "ala_10", name: "Carlos Protesoni", number: 15, pos: "MCD", ovr: 73, pot: 74, pac: 65, sho: 60, pas: 70, dri: 70, def: 73, phy: 77, energy: 100 },
      { id: "ala_11", name: "Ander Guevara", number: 6, pos: "MC", ovr: 76, pot: 77, pac: 66, sho: 65, pas: 76, dri: 74, def: 75, phy: 74, energy: 100 },
      { id: "ala_12", name: "Jon Guridi", number: 18, pos: "MCO", ovr: 77, pot: 77, pac: 71, sho: 72, pas: 76, dri: 76, def: 71, phy: 75, energy: 100 },
      { id: "ala_13", name: "Carlos Vicente", number: 7, pos: "ED", ovr: 76, pot: 79, pac: 84, sho: 72, pas: 73, dri: 77, def: 54, phy: 69, energy: 100 },
      { id: "ala_14", name: "Tomas Conechny", number: 10, pos: "EI", ovr: 74, pot: 76, pac: 78, sho: 73, pas: 71, dri: 76, def: 46, phy: 68, energy: 100 },
      { id: "ala_15", name: "Kike Garcia", number: 17, pos: "DC", ovr: 76, pot: 76, pac: 63, sho: 77, pas: 65, dri: 70, def: 42, phy: 82, energy: 100 },
      { id: "ala_16", name: "Toni Martinez", number: 11, pos: "DC", ovr: 75, pot: 77, pac: 76, sho: 76, pas: 63, dri: 72, def: 36, phy: 78, energy: 100 },
      { id: "ala_17", name: "Asier Villalibre", number: 9, pos: "DC", ovr: 74, pot: 75, pac: 73, sho: 75, pas: 64, dri: 72, def: 38, phy: 81, energy: 100 }
    ]
  },
  {
    id: "lev",
    name: "Levante UD",
    shortName: "LEV",
    city: "Valencia",
    stadium: "Ciutat de València",
    primaryColor: "#004077",
    secondaryColor: "#800020",
    textColor: "#FFFFFF",
    awayKit: { primaryColor: "#F8FAFC", secondaryColor: "#004077", textColor: "#0F172A" },
    budget: 35000000,
    reputation: 80,
    defaultFormation: "4-2-3-1",
    players: [
      { id: "lev_1", name: "Andres Fernandez", number: 1, pos: "POR", ovr: 75, pot: 75, par: 75, pac: 40, sho: 14, pas: 68, dri: 42, def: 14, phy: 72, energy: 100 },
      { id: "lev_2", name: "Alfonso Pastor", number: 13, pos: "POR", ovr: 68, pot: 74, par: 68, pac: 38, sho: 13, pas: 63, dri: 39, def: 13, phy: 68, energy: 100 },
      { id: "lev_3", name: "Andres Garcia", number: 2, pos: "LD", ovr: 72, pot: 81, pac: 84, sho: 58, pas: 66, dri: 73, def: 67, phy: 69, energy: 100 },
      { id: "lev_4", name: "Unai Elgezabal", number: 5, pos: "DFC", ovr: 73, pot: 73, pac: 62, sho: 40, pas: 60, dri: 58, def: 74, phy: 78, energy: 100 },
      { id: "lev_5", name: "Adrian de la Fuente", number: 4, pos: "DFC", ovr: 72, pot: 77, pac: 67, sho: 38, pas: 62, dri: 61, def: 73, phy: 76, energy: 100 },
      { id: "lev_6", name: "Jorge Cabello", number: 29, pos: "DFC", ovr: 69, pot: 79, pac: 68, sho: 32, pas: 58, dri: 57, def: 71, phy: 72, energy: 100 },
      { id: "lev_7", name: "Diego Pampin", number: 3, pos: "LI", ovr: 72, pot: 76, pac: 78, sho: 52, pas: 68, dri: 71, def: 70, phy: 71, energy: 100 },
      { id: "lev_8", name: "Marcos Navarro", number: 30, pos: "LI", ovr: 70, pot: 75, pac: 76, sho: 50, pas: 65, dri: 69, def: 68, phy: 70, energy: 100 },
      { id: "lev_9", name: "Vicente Iborra", number: 10, pos: "MCD", ovr: 74, pot: 74, pac: 44, sho: 68, pas: 72, dri: 68, def: 75, phy: 80, energy: 100 },
      { id: "lev_10", name: "Oriol Rey", number: 20, pos: "MCD", ovr: 73, pot: 76, pac: 66, sho: 60, pas: 74, dri: 72, def: 73, phy: 74, energy: 100 },
      { id: "lev_11", name: "Giorgi Kochorashvili", number: 6, pos: "MC", ovr: 74, pot: 80, pac: 72, sho: 70, pas: 75, dri: 75, def: 72, phy: 74, energy: 100 },
      { id: "lev_12", name: "Pablo Martinez", number: 8, pos: "MC", ovr: 74, pot: 77, pac: 73, sho: 71, pas: 74, dri: 74, def: 70, phy: 73, energy: 100 },
      { id: "lev_13", name: "Angel Algobia", number: 14, pos: "MC", ovr: 71, pot: 75, pac: 68, sho: 62, pas: 72, dri: 71, def: 70, phy: 73, energy: 100 },
      { id: "lev_14", name: "Carlos Alvarez", number: 24, pos: "MCO", ovr: 75, pot: 84, pac: 78, sho: 72, pas: 76, dri: 81, def: 40, phy: 54, energy: 100 },
      { id: "lev_15", name: "Roger Brugue", number: 7, pos: "ED", ovr: 73, pot: 74, pac: 79, sho: 71, pas: 70, dri: 74, def: 52, phy: 68, energy: 100 },
      { id: "lev_16", name: "Jose Luis Morales", number: 11, pos: "DC", ovr: 75, pot: 75, pac: 80, sho: 77, pas: 73, dri: 77, def: 41, phy: 66, energy: 100 },
      { id: "lev_17", name: "Ivan Romero", number: 9, pos: "DC", ovr: 72, pot: 78, pac: 78, sho: 72, pas: 65, dri: 73, def: 38, phy: 70, energy: 100 },
      { id: "lev_18", name: "Fabricio Santos", number: 12, pos: "DC", ovr: 71, pot: 78, pac: 82, sho: 71, pas: 60, dri: 72, def: 32, phy: 75, energy: 100 }
    ]
  },
  {
    id: "ray",
    name: "Rayo Vallecano",
    shortName: "RAY",
    city: "Madrid",
    stadium: "Campo de Vallecas",
    primaryColor: "#FFFFFF",
    secondaryColor: "#E30613",
    textColor: "#0F172A",
    awayKit: { primaryColor: "#18181B", secondaryColor: "#E30613", textColor: "#FFFFFF" },
    budget: 34000000,
    reputation: 80,
    defaultFormation: "4-2-3-1",
    players: [
      { id: "ray_1", name: "Augusto Batalla", number: 13, pos: "POR", ovr: 79, pot: 81, par: 79, pac: 42, sho: 15, pas: 70, dri: 44, def: 15, phy: 74, energy: 100 },
      { id: "ray_2", name: "Dani Cardenas", number: 1, pos: "POR", ovr: 74, pot: 77, par: 74, pac: 40, sho: 14, pas: 68, dri: 42, def: 14, phy: 71, energy: 100 },
      { id: "ray_3", name: "Andrei Ratiu", number: 2, pos: "LD", ovr: 76, pot: 80, pac: 88, sho: 52, pas: 68, dri: 73, def: 73, phy: 74, energy: 100 },
      { id: "ray_4", name: "Ivan Balliu", number: 20, pos: "LD", ovr: 75, pot: 75, pac: 77, sho: 50, pas: 69, dri: 71, def: 74, phy: 72, energy: 100 },
      { id: "ray_5", name: "Florian Lejeune", number: 24, pos: "DFC", ovr: 79, pot: 79, pac: 58, sho: 64, pas: 68, dri: 62, def: 80, phy: 82, energy: 100 },
      { id: "ray_6", name: "Abdul Mumin", number: 16, pos: "DFC", ovr: 77, pot: 81, pac: 74, sho: 32, pas: 60, dri: 62, def: 78, phy: 82, energy: 100 },
      { id: "ray_7", name: "Aridane Hernandez", number: 5, pos: "DFC", ovr: 73, pot: 73, pac: 54, sho: 38, pas: 56, dri: 55, def: 74, phy: 79, energy: 100 },
      { id: "ray_8", name: "Pep Chavarria", number: 3, pos: "LI", ovr: 76, pot: 78, pac: 83, sho: 54, pas: 70, dri: 74, def: 73, phy: 72, energy: 100 },
      { id: "ray_9", name: "Oscar Valentin", number: 23, pos: "MCD", ovr: 77, pot: 77, pac: 68, sho: 56, pas: 73, dri: 72, def: 79, phy: 78, energy: 100 },
      { id: "ray_10", name: "Unai Lopez", number: 17, pos: "MC", ovr: 76, pot: 76, pac: 67, sho: 72, pas: 78, dri: 76, def: 68, phy: 66, energy: 100 },
      { id: "ray_11", name: "Isi Palazon", number: 7, pos: "ED", ovr: 79, pot: 79, pac: 77, sho: 76, pas: 79, dri: 81, def: 56, phy: 69, energy: 100 },
      { id: "ray_12", name: "Jorge de Frutos", number: 19, pos: "ED", ovr: 76, pot: 77, pac: 85, sho: 72, pas: 73, dri: 77, def: 46, phy: 67, energy: 100 },
      { id: "ray_13", name: "Alvaro Garcia", number: 18, pos: "EI", ovr: 79, pot: 79, pac: 90, sho: 76, pas: 74, dri: 79, def: 48, phy: 66, energy: 100 },
      { id: "ray_14", name: "Adrian Embarba", number: 11, pos: "EI", ovr: 75, pot: 75, pac: 78, sho: 74, pas: 75, dri: 76, def: 44, phy: 65, energy: 100 },
      { id: "ray_15", name: "Sergio Camello", number: 14, pos: "DC", ovr: 76, pot: 81, pac: 79, sho: 76, pas: 68, dri: 76, def: 42, phy: 70, energy: 100 },
      { id: "ray_16", name: "Randy Nteka", number: 8, pos: "DC", ovr: 74, pot: 75, pac: 73, sho: 73, pas: 68, dri: 73, def: 48, phy: 80, energy: 100 }
    ]
  },
  {
    id: "rac",
    name: "Real Racing Club de Santander",
    shortName: "RAC",
    city: "Santander",
    stadium: "Campos de Sport de El Sardinero",
    primaryColor: "#008037",
    secondaryColor: "#18181B",
    textColor: "#FFFFFF",
    awayKit: { primaryColor: "#DC2626", secondaryColor: "#18181B", textColor: "#FFFFFF" },
    budget: 32000000,
    reputation: 79,
    defaultFormation: "4-2-3-1",
    players: [
      { id: "rac_1", name: "Jokin Ezkieta", number: 1, pos: "POR", ovr: 75, pot: 78, par: 75, pac: 42, sho: 14, pas: 70, dri: 44, def: 14, phy: 73, energy: 100 },
      { id: "rac_2", name: "Miquel Parera", number: 13, pos: "POR", ovr: 70, pot: 71, par: 70, pac: 39, sho: 13, pas: 65, dri: 41, def: 13, phy: 70, energy: 100 },
      { id: "rac_3", name: "Clement Michelin", number: 2, pos: "LD", ovr: 73, pot: 74, pac: 79, sho: 55, pas: 70, dri: 72, def: 71, phy: 71, energy: 100 },
      { id: "rac_4", name: "Marco Sangalli", number: 7, pos: "LD", ovr: 72, pot: 72, pac: 77, sho: 62, pas: 69, dri: 72, def: 68, phy: 70, energy: 100 },
      { id: "rac_5", name: "Javi Montero", number: 4, pos: "DFC", ovr: 74, pot: 77, pac: 68, sho: 36, pas: 64, dri: 62, def: 75, phy: 77, energy: 100 },
      { id: "rac_6", name: "Manu Hernando", number: 5, pos: "DFC", ovr: 73, pot: 76, pac: 66, sho: 38, pas: 62, dri: 60, def: 74, phy: 76, energy: 100 },
      { id: "rac_7", name: "Saul Garcia", number: 3, pos: "LI", ovr: 73, pot: 73, pac: 76, sho: 56, pas: 71, dri: 71, def: 71, phy: 70, energy: 100 },
      { id: "rac_8", name: "Mario Garcia", number: 18, pos: "LI", ovr: 71, pot: 80, pac: 79, sho: 52, pas: 66, dri: 70, def: 69, phy: 68, energy: 100 },
      { id: "rac_9", name: "Unai Vencedor", number: 6, pos: "MCD", ovr: 74, pot: 78, pac: 67, sho: 65, pas: 76, dri: 74, def: 74, phy: 73, energy: 100 },
      { id: "rac_10", name: "Aritz Aldasoro", number: 8, pos: "MC", ovr: 74, pot: 78, pac: 72, sho: 66, pas: 74, dri: 74, def: 73, phy: 76, energy: 100 },
      { id: "rac_11", name: "Pablo Rodriguez", number: 22, pos: "MCO", ovr: 73, pot: 78, pac: 76, sho: 70, pas: 72, dri: 76, def: 42, phy: 62, energy: 100 },
      { id: "rac_12", name: "Andres Martin", number: 11, pos: "ED", ovr: 75, pot: 77, pac: 82, sho: 74, pas: 73, dri: 76, def: 44, phy: 68, energy: 100 },
      { id: "rac_13", name: "Inigo Vicente", number: 10, pos: "EI", ovr: 76, pot: 78, pac: 77, sho: 74, pas: 78, dri: 81, def: 38, phy: 63, energy: 100 },
      { id: "rac_14", name: "Juanca Arana", number: 9, pos: "DC", ovr: 74, pot: 80, pac: 78, sho: 76, pas: 64, dri: 74, def: 34, phy: 74, energy: 100 },
      { id: "rac_15", name: "Jon Karrikaburu", number: 19, pos: "DC", ovr: 73, pot: 81, pac: 75, sho: 75, pas: 61, dri: 71, def: 32, phy: 74, energy: 100 }
    ]
  },
  {
    id: "esp",
    name: "RCD Espanyol",
    shortName: "ESP",
    city: "Cornella de Llobregat",
    stadium: "RCDE Stadium",
    primaryColor: "#007FC8",
    secondaryColor: "#FFFFFF",
    textColor: "#FFFFFF",
    awayKit: { primaryColor: "#7E22CE", secondaryColor: "#FFFFFF", textColor: "#FFFFFF" },
    budget: 32000000,
    reputation: 79,
    defaultFormation: "4-4-2",
    players: [
      { id: "esp_1", name: "Fortuño", number: 1, pos: "POR", ovr: 65, pot: 73, par: 65, pac: 42, sho: 16, pas: 33, dri: 39, def: 11, phy: 44, energy: 100 },
      { id: "esp_2", name: "Marko Dmitrovic", number: 13, pos: "POR", ovr: 79, pot: 81, par: 79, pac: 37, sho: 31, pas: 41, dri: 39, def: 20, phy: 59, energy: 100 },
      { id: "esp_3", name: "Alvaro Tejero", number: 12, pos: "LD", ovr: 75, pot: 75, pac: 77, sho: 62, pas: 74, dri: 73, def: 72, phy: 71, energy: 100 },
      { id: "esp_4", name: "Omar El Hilali", number: 23, pos: "LD", ovr: 74, pot: 81, pac: 79, sho: 48, pas: 66, dri: 71, def: 73, phy: 73, energy: 100 },
      { id: "esp_5", name: "Leandro Cabrera", number: 6, pos: "DFC", ovr: 76, pot: 76, pac: 62, sho: 44, pas: 62, dri: 58, def: 77, phy: 80, energy: 100 },
      { id: "esp_6", name: "Marash Kumbulla", number: 4, pos: "DFC", ovr: 76, pot: 80, pac: 64, sho: 38, pas: 60, dri: 61, def: 77, phy: 79, energy: 100 },
      { id: "esp_7", name: "Fernando Calero", number: 5, pos: "DFC", ovr: 74, pot: 74, pac: 65, sho: 38, pas: 62, dri: 62, def: 75, phy: 75, energy: 100 },
      { id: "esp_8", name: "Carlos Romero", number: 22, pos: "LI", ovr: 75, pot: 81, pac: 82, sho: 60, pas: 71, dri: 74, def: 72, phy: 69, energy: 100 },
      { id: "esp_9", name: "Brian Olivan", number: 14, pos: "LI", ovr: 74, pot: 74, pac: 75, sho: 55, pas: 72, dri: 72, def: 73, phy: 72, energy: 100 },
      { id: "esp_10", name: "Alex Kral", number: 20, pos: "MCD", ovr: 76, pot: 78, pac: 72, sho: 64, pas: 73, dri: 74, def: 76, phy: 79, energy: 100 },
      { id: "esp_11", name: "Pol Lozano", number: 10, pos: "MCD", ovr: 74, pot: 78, pac: 68, sho: 62, pas: 74, dri: 73, def: 74, phy: 73, energy: 100 },
      { id: "esp_12", name: "Edu Exposito", number: 8, pos: "MC", ovr: 75, pot: 75, pac: 68, sho: 71, pas: 77, dri: 76, def: 68, phy: 67, energy: 100 },
      { id: "esp_13", name: "Jofre Carreras", number: 17, pos: "ED", ovr: 74, pot: 81, pac: 85, sho: 70, pas: 70, dri: 76, def: 48, phy: 64, energy: 100 },
      { id: "esp_14", name: "Javi Puado", number: 7, pos: "DC", ovr: 78, pot: 80, pac: 80, sho: 79, pas: 73, dri: 78, def: 46, phy: 73, energy: 100 },
      { id: "esp_15", name: "Alejo Veliz", number: 9, pos: "DC", ovr: 75, pot: 82, pac: 74, sho: 76, pas: 58, dri: 70, def: 32, phy: 79, energy: 100 },
      { id: "esp_16", name: "Walid Cheddira", number: 16, pos: "DC", ovr: 74, pot: 75, pac: 79, sho: 75, pas: 64, dri: 73, def: 36, phy: 76, energy: 100 }
    ]
  },
  {
    id: "mal",
    name: "Málaga CF",
    shortName: "MAL",
    city: "Málaga",
    stadium: "La Rosaleda",
    primaryColor: "#0072CE",
    secondaryColor: "#FFFFFF",
    textColor: "#FFFFFF",
    awayKit: { primaryColor: "#84CC16", secondaryColor: "#0072CE", textColor: "#0F172A" },
    budget: 30000000,
    reputation: 79,
    defaultFormation: "4-2-3-1",
    players: [
      { id: "mal_1", name: "Alfonso Herrero", number: 1, pos: "POR", ovr: 75, pot: 76, par: 75, pac: 42, sho: 14, pas: 69, dri: 44, def: 14, phy: 73, energy: 100 },
      { id: "mal_2", name: "Carlos Lopez", number: 13, pos: "POR", ovr: 67, pot: 75, par: 67, pac: 38, sho: 13, pas: 62, dri: 39, def: 13, phy: 68, energy: 100 },
      { id: "mal_3", name: "Carlos Puga", number: 2, pos: "LD", ovr: 71, pot: 76, pac: 81, sho: 48, pas: 65, dri: 70, def: 69, phy: 71, energy: 100 },
      { id: "mal_4", name: "Einar Galilea", number: 4, pos: "DFC", ovr: 72, pot: 72, pac: 62, sho: 40, pas: 61, dri: 58, def: 74, phy: 77, energy: 100 },
      { id: "mal_5", name: "Nelson Monte", number: 5, pos: "DFC", ovr: 72, pot: 72, pac: 67, sho: 38, pas: 60, dri: 61, def: 73, phy: 76, energy: 100 },
      { id: "mal_6", name: "Alex Pastor", number: 14, pos: "DFC", ovr: 70, pot: 74, pac: 65, sho: 34, pas: 58, dri: 59, def: 72, phy: 74, energy: 100 },
      { id: "mal_7", name: "Victor Garcia", number: 3, pos: "LI", ovr: 71, pot: 72, pac: 77, sho: 54, pas: 67, dri: 70, def: 69, phy: 70, energy: 100 },
      { id: "mal_8", name: "Dani Sanchez", number: 18, pos: "LI", ovr: 70, pot: 74, pac: 78, sho: 50, pas: 64, dri: 68, def: 68, phy: 67, energy: 100 },
      { id: "mal_9", name: "Luismi Sanchez", number: 6, pos: "MCD", ovr: 72, pot: 72, pac: 63, sho: 56, pas: 68, dri: 67, def: 74, phy: 78, energy: 100 },
      { id: "mal_10", name: "Izan Merino", number: 8, pos: "MCD", ovr: 68, pot: 81, pac: 67, sho: 52, pas: 68, dri: 67, def: 69, phy: 70, energy: 100 },
      { id: "mal_11", name: "Manu Molina", number: 10, pos: "MC", ovr: 72, pot: 72, pac: 64, sho: 64, pas: 75, dri: 72, def: 69, phy: 68, energy: 100 },
      { id: "mal_12", name: "David Larrubia", number: 7, pos: "MCO", ovr: 72, pot: 78, pac: 76, sho: 67, pas: 73, dri: 77, def: 48, phy: 58, energy: 100 },
      { id: "mal_13", name: "Antonio Cordero", number: 17, pos: "EI", ovr: 73, pot: 84, pac: 83, sho: 70, pas: 71, dri: 77, def: 40, phy: 61, energy: 100 },
      { id: "mal_14", name: "Kevin Medina", number: 11, pos: "EI", ovr: 73, pot: 76, pac: 84, sho: 68, pas: 69, dri: 79, def: 42, phy: 66, energy: 100 },
      { id: "mal_15", name: "Dioni Villalba", number: 9, pos: "DC", ovr: 71, pot: 71, pac: 66, sho: 73, pas: 64, dri: 70, def: 36, phy: 72, energy: 100 },
      { id: "mal_16", name: "Roko Baturina", number: 19, pos: "DC", ovr: 71, pot: 74, pac: 72, sho: 72, pas: 58, dri: 69, def: 34, phy: 77, energy: 100 }
    ]
  },
  {
    id: "elc",
    name: "Elche CF",
    shortName: "ELC",
    city: "Elche",
    stadium: "Martinez Valero",
    primaryColor: "#FFFFFF",
    secondaryColor: "#006837",
    textColor: "#0F172A",
    awayKit: { primaryColor: "#18181B", secondaryColor: "#006837", textColor: "#FFFFFF" },
    budget: 31000000,
    reputation: 79,
    defaultFormation: "4-4-2",
    players: [
      { id: "elc_1", name: "Matias Dituro", number: 13, pos: "POR", ovr: 75, pot: 75, par: 75, pac: 40, sho: 14, pas: 72, dri: 45, def: 14, phy: 72, energy: 100 },
      { id: "elc_2", name: "Miguel San Roman", number: 1, pos: "POR", ovr: 69, pot: 71, par: 69, pac: 38, sho: 13, pas: 64, dri: 40, def: 13, phy: 69, energy: 100 },
      { id: "elc_3", name: "Alvaro Nunez", number: 2, pos: "LD", ovr: 73, pot: 78, pac: 81, sho: 50, pas: 68, dri: 72, def: 71, phy: 69, energy: 100 },
      { id: "elc_4", name: "Pedro Bigas", number: 6, pos: "DFC", ovr: 74, pot: 74, pac: 64, sho: 42, pas: 64, dri: 62, def: 75, phy: 76, energy: 100 },
      { id: "elc_5", name: "David Affengruber", number: 22, pos: "DFC", ovr: 73, pot: 79, pac: 67, sho: 38, pas: 62, dri: 61, def: 74, phy: 78, energy: 100 },
      { id: "elc_6", name: "Bambo Diaby", number: 4, pos: "DFC", ovr: 72, pot: 74, pac: 75, sho: 35, pas: 55, dri: 58, def: 72, phy: 82, energy: 100 },
      { id: "elc_7", name: "Jose Salinas", number: 3, pos: "LI", ovr: 71, pot: 76, pac: 78, sho: 50, pas: 67, dri: 69, def: 69, phy: 68, energy: 100 },
      { id: "elc_8", name: "Gerard Hernandez", number: 5, pos: "MCD", ovr: 70, pot: 82, pac: 66, sho: 56, pas: 73, dri: 71, def: 71, phy: 70, energy: 100 },
      { id: "elc_9", name: "Aleix Febas", number: 14, pos: "MC", ovr: 75, pot: 76, pac: 77, sho: 64, pas: 76, dri: 80, def: 66, phy: 64, energy: 100 },
      { id: "elc_10", name: "Nicolas Castro", number: 8, pos: "MCO", ovr: 75, pot: 82, pac: 72, sho: 73, pas: 77, dri: 77, def: 62, phy: 71, energy: 100 },
      { id: "elc_11", name: "Josan Ferrandez", number: 7, pos: "ED", ovr: 72, pot: 72, pac: 80, sho: 67, pas: 70, dri: 73, def: 55, phy: 65, energy: 100 },
      { id: "elc_12", name: "Nicolas Fernandez Mercau", number: 10, pos: "EI", ovr: 75, pot: 78, pac: 81, sho: 70, pas: 74, dri: 78, def: 60, phy: 68, energy: 100 },
      { id: "elc_13", name: "Yago Santiago", number: 11, pos: "EI", ovr: 72, pot: 81, pac: 83, sho: 68, pas: 68, dri: 75, def: 40, phy: 60, energy: 100 },
      { id: "elc_14", name: "Agustin Alvarez", number: 9, pos: "DC", ovr: 73, pot: 80, pac: 76, sho: 75, pas: 62, dri: 72, def: 32, phy: 72, energy: 100 },
      { id: "elc_15", name: "Mourad El Ghezouani", number: 19, pos: "DC", ovr: 72, pot: 75, pac: 70, sho: 72, pas: 58, dri: 68, def: 36, phy: 81, energy: 100 }
    ]
  }
];

if (typeof window !== "undefined") {
  window.TEAMS_DATA = TEAMS_DATA;
}

// =========================================================
// ARCHIVO: js\engine\tactics.js
// =========================================================

// Formaciones y lógica táctica del simulador
const FORMATIONS = {
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
const MENTALITIES = [
  { id: "very_defensive", label: "Muy Defensiva", attackMod: -0.25, defenseMod: +0.25 },
  { id: "defensive", label: "Defensiva", attackMod: -0.12, defenseMod: +0.12 },
  { id: "balanced", label: "Equilibrada", attackMod: 0, defenseMod: 0 },
  { id: "offensive", label: "Ofensiva", attackMod: +0.15, defenseMod: -0.10 },
  { id: "very_offensive", label: "Al Ataque", attackMod: +0.30, defenseMod: -0.22 }
];

// Funciones e instrucciones individuales por posición (Estilo Football Manager)
const POSITION_ROLES = {
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
function getAvailableRolesForPosition(pos) {
  if (pos === "MD") return POSITION_ROLES["ED"];
  if (pos === "MI") return POSITION_ROLES["EI"];
  return POSITION_ROLES[pos] || POSITION_ROLES["MC"];
}
function getDefaultRoleForPosition(pos) {
  const roles = getAvailableRolesForPosition(pos);
  return roles[0].id;
}
function getRoleDetails(pos, roleId) {
  const roles = getAvailableRolesForPosition(pos);
  return roles.find(r => r.id === roleId) || roles[0];
}

// Cálculo de penalización si un jugador juega fuera de su posición natural o secundaria
function getPositionAffinity(playerOrPos, slotPos) {
  let primaryPos = "";
  let secondaryList = [];

  if (typeof playerOrPos === "object" && playerOrPos !== null) {
    primaryPos = playerOrPos.pos || "";
    if (Array.isArray(playerOrPos.secondaryPos)) {
      secondaryList = playerOrPos.secondaryPos;
    } else if (Array.isArray(playerOrPos.secondaryPositions)) {
      secondaryList = playerOrPos.secondaryPositions;
    } else if (typeof playerOrPos.secondaryPos === "string") {
      secondaryList = playerOrPos.secondaryPos.split(/[\s,\/]+/).filter(Boolean);
    }
  } else if (typeof playerOrPos === "string") {
    primaryPos = playerOrPos;
  }

  // Lista con todas las posiciones oficiales del futbolista
  const allPositions = [
    ...primaryPos.split(/[\s,\/]+/).map(s => s.trim().toUpperCase()).filter(Boolean),
    ...secondaryList.map(s => String(s).trim().toUpperCase()).filter(Boolean)
  ];

  const targetSlot = (slotPos || "").trim().toUpperCase();

  // Si el puesto coincide con la posición principal o con cualquier posición secundaria: 100% sin penalización
  if (allPositions.includes(targetSlot)) {
    return 1.0;
  }

  // Si no coincide exactamente con ninguna, evaluar la mejor afinidad posible respecto a sus puestos conocidos
  let bestAffinity = 0.70;
  for (const posItem of allPositions) {
    const aff = getSinglePositionAffinity(posItem, targetSlot);
    if (aff > bestAffinity) bestAffinity = aff;
  }

  return bestAffinity;
}

function getSinglePositionAffinity(playerPos, slotPos) {
  if (playerPos === slotPos) return 1.0;
  
  // Equivalencia natural de banda entre Medios e Interiores/Extremos (MD <-> ED, MI <-> EI)
  if ((playerPos === "MD" && slotPos === "ED") || (playerPos === "ED" && slotPos === "MD")) return 1.0;
  if ((playerPos === "MI" && slotPos === "EI") || (playerPos === "EI" && slotPos === "MI")) return 1.0;

  // Portero solo rinde de portero
  if (playerPos === "POR" || slotPos === "POR") return 0.25;

  // Laterales y carrileros
  if ((playerPos === "LD" || playerPos === "LI") && slotPos === "DFC") return 0.85;
  if (playerPos === "LD" && (slotPos === "LI" || slotPos === "MI")) return 0.80;
  if (playerPos === "LI" && (slotPos === "LD" || slotPos === "MD")) return 0.80;
  if ((playerPos === "LD" || playerPos === "LI") && (slotPos === "ED" || slotPos === "EI" || slotPos === "MD" || slotPos === "MI")) return 0.85;
  if ((playerPos === "MD" || playerPos === "MI") && (slotPos === "LD" || slotPos === "LI")) return 0.85;

  // Centrales
  if (playerPos === "DFC" && (slotPos === "LD" || slotPos === "LI")) return 0.80;
  if (playerPos === "DFC" && slotPos === "MCD") return 0.85;

  // Centrocampistas y Medios de banda
  if (playerPos === "MCD" && slotPos === "MC") return 0.90;
  if (playerPos === "MC" && (slotPos === "MCD" || slotPos === "MCO" || slotPos === "MD" || slotPos === "MI")) return 0.90;
  if (playerPos === "MCO" && (slotPos === "MC" || slotPos === "MD" || slotPos === "MI")) return 0.88;
  if (playerPos === "MCO" && (slotPos === "EI" || slotPos === "ED")) return 0.85;
  if ((playerPos === "MD" || playerPos === "MI") && (slotPos === "MC" || slotPos === "MCO")) return 0.90;

  // Extremos y Delanteros
  if ((playerPos === "ED" || playerPos === "MD") && (slotPos === "EI" || slotPos === "MI")) return 0.90;
  if ((playerPos === "EI" || playerPos === "MI") && (slotPos === "ED" || slotPos === "MD")) return 0.90;
  if ((playerPos === "ED" || playerPos === "EI" || playerPos === "MD" || playerPos === "MI") && slotPos === "DC") return 0.85;
  if (playerPos === "DC" && (slotPos === "ED" || slotPos === "EI" || slotPos === "MD" || slotPos === "MI")) return 0.82;
  if (playerPos === "DC" && slotPos === "MCO") return 0.80;

  return 0.70; // Fuera de zona principal
}

// Calcula la media efectiva de un jugador colocado en una posición concreta
function calculateEffectiveRating(player, slotPos) {
  const affinity = getPositionAffinity(player, slotPos);
  const curEnergy = player.energy !== undefined ? player.energy : 100;
  const energyFactor = 0.5 + (curEnergy / 100) * 0.5; // La energía baja reduce rendimiento
  const injuryPenalty = player.injury ? 0.40 : 1.0; // Los futbolistas lesionados ven mermado su rendimiento drásticamente
  const baseRating = (slotPos === "POR" && player.pos === "POR" && player.par !== undefined) ? player.par : (player.ovr || 70);
  return Math.round(baseRating * affinity * energyFactor * injuryPenalty);
}

// Media global de un equipo en base a su 11 inicial
function getEffectiveSlotCoords(formationKey, slotIndex, customPositions = null) {
  const form = FORMATIONS[formationKey] || FORMATIONS["4-3-3"];
  const slot = form.slots[slotIndex] || { id: slotIndex, label: "JUG", pos: "MC", x: 50, y: 50 };
  const custom = customPositions && customPositions[slotIndex];

  const isGK = slot.pos === "POR" || slotIndex === 0;
  const rawX = custom?.x !== undefined ? custom.x : slot.x;
  const rawY = custom?.y !== undefined ? custom.y : slot.y;

  // Limitar dentro de los límites reglamentarios del terreno de juego
  const minX = isGK ? 38 : 10;
  const maxX = isGK ? 62 : 90;
  const minY = isGK ? 82 : 12;
  const maxY = isGK ? 90 : 88;

  const effX = Math.max(minX, Math.min(maxX, rawX));
  const effY = Math.max(minY, Math.min(maxY, rawY));

  return {
    ...slot,
    x: effX,
    y: effY,
    origX: slot.x,
    origY: slot.y,
    isCustom: Boolean(custom && (effX !== slot.x || effY !== slot.y))
  };
}
function getPositionAdjustmentLabel(slot, effCoord) {
  if (!effCoord.isCustom) return "Posición estándar";
  const dx = effCoord.x - effCoord.origX;
  const dy = effCoord.y - effCoord.origY; // dy < 0: adelantado (hacia ataque), dy > 0: retrasado (hacia defensa)

  let vertDesc = "";
  if (dy <= -10) vertDesc = "Muy adelantado (hacia Delantera)";
  else if (dy <= -4) vertDesc = "Adelantado";
  else if (dy >= 10) vertDesc = "Muy retrasado (hacia Defensa)";
  else if (dy >= 4) vertDesc = "Retrasado";

  let horizDesc = "";
  if (dx <= -8) horizDesc = "Hacia la banda izquierda";
  else if (dx <= -3) horizDesc = "Ligeramente a la izquierda";
  else if (dx >= 8) horizDesc = "Hacia la banda derecha";
  else if (dx >= 3) horizDesc = "Ligeramente a la derecha";

  if (vertDesc && horizDesc) return `${vertDesc} · ${horizDesc}`;
  return vertDesc || horizDesc || "Ajuste libre personalizado";
}

// Media global de un equipo en base a su 11 inicial teniendo en cuenta posiciones efectivas
function calculateTeamAverages(lineupPlayers, formationKey, customPositions = null) {
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
    const effSlot = getEffectiveSlotCoords(formationKey, index, customPositions);
    const eff = calculateEffectiveRating(p, effSlot.pos);
    totalSum += eff;

    // Si el jugador ha sido adelantado de forma manual (ej. un interior o mediocentro empujado hacia Delantera)
    const effectivePosZone = effSlot.y < 32 ? "ATK" : (effSlot.y > 64 ? "DEF" : "MID");

    if (slot.pos === "DC" || slot.pos === "EI" || slot.pos === "ED" || (effectivePosZone === "ATK" && slot.pos !== "POR")) {
      atkSum += eff;
      atkCount++;
    } else if (slot.pos === "MC" || slot.pos === "MCD" || slot.pos === "MCO" || effectivePosZone === "MID") {
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

/**
 * Selecciona la alineación óptima para un equipo y formación, colocando a los mejores
 * futbolistas según su posición real (primaria y secundaria) por valoración.
 */
function buildOptimalLineup(team, targetFormationKey = null) {
  if (!team || !Array.isArray(team.players) || team.players.length === 0) {
    return { formationKey: "4-3-3", lineup: [], bench: [], lineupIds: [], benchIds: [] };
  }

  const formationKey = targetFormationKey || team.defaultFormation || "4-3-3";
  const formation = FORMATIONS[formationKey] || FORMATIONS["4-3-3"];

  // Filtrar jugadores disponibles (descartar bajas médicas graves o sanciones disciplinarias)
  const getPlayerScore = p => (p.ovr || 70) * (0.6 + ((p.energy !== undefined ? p.energy : 100) / 250));
  const availablePlayers = [...team.players].filter(p => !p.injury && !p.suspension).sort((a, b) => getPlayerScore(b) - getPlayerScore(a));

  const used = new Set();
  const lineup = new Array(11).fill(null);

  // 1. Guardameta en Slot 0 (POR)
  const gks = availablePlayers.filter(p => p.pos === "POR").sort((a, b) => {
    const valA = (a.par !== undefined ? a.par : a.ovr || 70) * (0.6 + ((a.energy !== undefined ? a.energy : 100) / 250));
    const valB = (b.par !== undefined ? b.par : b.ovr || 70) * (0.6 + ((b.energy !== undefined ? b.energy : 100) / 250));
    return valB - valA;
  });
  const bestGk = gks[0] || availablePlayers[0];
  if (bestGk) {
    lineup[0] = bestGk;
    used.add(bestGk.id);
  }

  // Helper para comprobar coincidencia de posición (incluyendo equivalencias de banda MD<->ED y MI<->EI)
  const matchesPosDirect = (playerPos, slotPos) => {
    if (playerPos === slotPos) return true;
    if ((playerPos === "MD" && slotPos === "ED") || (playerPos === "ED" && slotPos === "MD")) return true;
    if ((playerPos === "MI" && slotPos === "EI") || (playerPos === "EI" && slotPos === "MI")) return true;
    return false;
  };

  const hasPrimaryMatch = (player, slotPos) => {
    return matchesPosDirect(player.pos, slotPos);
  };

  const hasSecondaryMatch = (player, slotPos) => {
    if (!player.secondaryPos) return false;
    const list = Array.isArray(player.secondaryPos) ? player.secondaryPos : String(player.secondaryPos).split(/[\s,\/]+/);
    return list.some(sec => matchesPosDirect(sec, slotPos));
  };

  // 2. Asignar slots de campo (1 a 10)
  // Paso A: Jugadores con coincidencia exacta en posición principal (ordenados por OVR)
  formation.slots.forEach((slot, idx) => {
    if (idx === 0) return;
    const candidates = availablePlayers
      .filter(p => !used.has(p.id) && p.pos !== "POR" && hasPrimaryMatch(p, slot.pos))
      .sort((a, b) => (b.ovr || 70) - (a.ovr || 70));

    if (candidates.length > 0) {
      lineup[idx] = candidates[0];
      used.add(candidates[0].id);
    }
  });

  // Paso B: Slots restantes no cubiertos -> buscar coincidencia en posición secundaria (ordenados por OVR)
  formation.slots.forEach((slot, idx) => {
    if (idx === 0 || lineup[idx] !== null) return;
    const candidates = availablePlayers
      .filter(p => !used.has(p.id) && p.pos !== "POR" && hasSecondaryMatch(p, slot.pos))
      .sort((a, b) => (b.ovr || 70) - (a.ovr || 70));

    if (candidates.length > 0) {
      lineup[idx] = candidates[0];
      used.add(candidates[0].id);
    }
  });

  // Paso C: Slots aún vacíos -> mejor efectividad calculada en esa posición
  formation.slots.forEach((slot, idx) => {
    if (idx === 0 || lineup[idx] !== null) return;
    const candidates = availablePlayers
      .filter(p => !used.has(p.id) && p.pos !== "POR")
      .sort((a, b) => calculateEffectiveRating(b, slot.pos) - calculateEffectiveRating(a, slot.pos));

    if (candidates.length > 0) {
      lineup[idx] = candidates[0];
      used.add(candidates[0].id);
    }
  });

  // Paso D: Fallback de seguridad si faltaran huecos
  formation.slots.forEach((slot, idx) => {
    if (lineup[idx] !== null) return;
    const fallback = availablePlayers.find(p => !used.has(p.id));
    if (fallback) {
      lineup[idx] = fallback;
      used.add(fallback.id);
    }
  });

  const bench = team.players.filter(p => !used.has(p.id)).sort((a, b) => (b.ovr || 70) - (a.ovr || 70));

  return {
    formationKey,
    formation,
    lineup,
    bench,
    lineupIds: lineup.map(p => p.id),
    benchIds: bench.map(p => p.id)
  };
}

// Catálogo de lesiones del simulador con duración estimada en jornadas y causas
const INJURY_TYPES = [
  // Por sobrecarga / fatiga
  { type: "Sobrecarga muscular", severity: "light", minRounds: 1, maxRounds: 1, icon: "🩹", cause: "fatigue" },
  { type: "Contractura en el gemelo", severity: "light", minRounds: 1, maxRounds: 2, icon: "🩹", cause: "fatigue" },
  { type: "Rotura de fibras en el isquiotibial", severity: "moderate", minRounds: 2, maxRounds: 4, icon: "🚑", cause: "fatigue" },
  // Por faltas duras / agresividad rival
  { type: "Contusión fuerte en la tibia", severity: "light", minRounds: 1, maxRounds: 2, icon: "🩹", cause: "foul" },
  { type: "Esguince de tobillo", severity: "moderate", minRounds: 2, maxRounds: 3, icon: "🚑", cause: "foul" },
  { type: "Rotura de menisco", severity: "severe", minRounds: 5, maxRounds: 7, icon: "🚨", cause: "foul" },
  // Por lances fortuitos / azar del partido
  { type: "Distensión ligamentosa", severity: "moderate", minRounds: 2, maxRounds: 4, icon: "🚑", cause: "random" },
  { type: "Esguince de rodilla", severity: "moderate", minRounds: 3, maxRounds: 5, icon: "🚑", cause: "random" },
  { type: "Rotura de ligamento cruzado", severity: "severe", minRounds: 7, maxRounds: 10, icon: "🚨", cause: "random" }
];
function generateRandomInjury(cause = "random") {
  let pool = INJURY_TYPES.filter(inj => inj.cause === cause);
  if (pool.length === 0) pool = INJURY_TYPES;
  const picked = pool[Math.floor(Math.random() * pool.length)];
  const rounds = Math.floor(Math.random() * (picked.maxRounds - picked.minRounds + 1)) + picked.minRounds;
  return {
    type: picked.type,
    severity: picked.severity,
    roundsLeft: rounds,
    icon: picked.icon,
    justAcquired: true
  };
}

// ==========================================
// ESTILOS DE JUEGO Y DIVISIÓN TÁCTICA POR ESTADOS (CON BALÓN / TRANSICIÓN / SIN BALÓN)
// ==========================================
const TACTICAL_PRESETS = {
  tiki_taka: {
    id: "tiki_taka",
    name: "Tiki-Taka (Posesión)",
    icon: "🧠",
    desc: "Posesión paciente, pase corto, ritmo pausado y contrapresión instantánea tras pérdida",
    inPossession: { passingStyle: "short", tempo: "slow", width: "balanced" },
    inTransition: { loss: "counterpress", win: "hold" },
    outOfPossession: { defensiveLine: "high", pressing: "high", defenseWidth: "balanced" }
  },
  gegenpress: {
    id: "gegenpress",
    name: "Gegenpress (Presión Alta)",
    icon: "⚡",
    desc: "Ritmo asfixiante, recuperación inmediata tras pérdida y transiciones verticales rápidas",
    inPossession: { passingStyle: "mixed", tempo: "fast", width: "wide" },
    inTransition: { loss: "counterpress", win: "counter" },
    outOfPossession: { defensiveLine: "high", pressing: "high", defenseWidth: "wide" }
  },
  counter_attack: {
    id: "counter_attack",
    name: "Contraataque Fluido",
    icon: "🏹",
    desc: "Bloque bajo ordenado, repliegue rápido y salida vertical fulgurante al espacio",
    inPossession: { passingStyle: "direct", tempo: "fast", width: "wide" },
    inTransition: { loss: "regroup", win: "counter" },
    outOfPossession: { defensiveLine: "low", pressing: "mid", defenseWidth: "compact" }
  },
  catenaccio: {
    id: "catenaccio",
    name: "Autobús Defensivo",
    icon: "🛡️",
    desc: "Bloque muy bajo, cerrojo en el área, repliegue masivo y balones largos sin riesgos",
    inPossession: { passingStyle: "direct", tempo: "slow", width: "center" },
    inTransition: { loss: "regroup", win: "hold" },
    outOfPossession: { defensiveLine: "low", pressing: "low", defenseWidth: "compact" }
  },
  wing_play: {
    id: "wing_play",
    name: "Juego por Bandas",
    icon: "🚀",
    desc: "Apertura a extremos y carrileros para doblar y colgar centros al área",
    inPossession: { passingStyle: "mixed", tempo: "normal", width: "wide" },
    inTransition: { loss: "regroup", win: "counter" },
    outOfPossession: { defensiveLine: "mid", pressing: "mid", defenseWidth: "balanced" }
  },
  direct_football: {
    id: "direct_football",
    name: "Fútbol Directo",
    icon: "🎯",
    desc: "Balones largos directos a la referencia ofensiva, segundas jugadas y verticalidad",
    inPossession: { passingStyle: "direct", tempo: "fast", width: "center" },
    inTransition: { loss: "counterpress", win: "counter" },
    outOfPossession: { defensiveLine: "mid", pressing: "high", defenseWidth: "balanced" }
  }
};
const TACTICAL_OPTIONS = {
  // 1. Fase Ofensiva (Con Balón)
  passingStyle: [
    { id: "short", label: "Corto", desc: "Posesión paciente, combinar al pie y madurar", icon: "🤝" },
    { id: "mixed", label: "Mixto", desc: "Variedad según la situación del juego", icon: "⚖️" },
    { id: "direct", label: "Directo", desc: "Pases verticales y balones largos al espacio", icon: "🚀" }
  ],
  tempo: [
    { id: "slow", label: "Pausado", desc: "Bajar el ritmo, asegurar pases y cansar al rival", icon: "🐢" },
    { id: "normal", label: "Equilibrado", desc: "Circulación fluida estándar", icon: "⏱️" },
    { id: "fast", label: "Rápido / Vértigo", desc: "Juego a 1-2 toques, velocidad y desmarques", icon: "⚡" }
  ],
  width: [
    { id: "wide", label: "Por Bandas", desc: "Abrir el campo, buscar extremos y centros", icon: "↔️" },
    { id: "balanced", label: "Equilibrado", desc: "Distribución armónica del ataque", icon: "📐" },
    { id: "center", label: "Por el Centro", desc: "Paredes interiores y filtrar entre líneas", icon: "🎯" }
  ],
  // 2. Transición
  transitionLoss: [
    { id: "counterpress", label: "Presión tras Pérdida", desc: "Contrapresión instantánea en tromba para robar arriba", icon: "💥" },
    { id: "regroup", label: "Replegarse", desc: "Retroceder ordenadamente hacia campo propio", icon: "🛡️" }
  ],
  transitionWin: [
    { id: "counter", label: "Contraatacar", desc: "Lanzar el contraataque con velocidad al espacio", icon: "🏹" },
    { id: "hold", label: "Mantener Posesión", desc: "Asegurar el cuero y reiniciar la construcción", icon: "🔄" }
  ],
  // 3. Fase Defensiva (Sin Balón)
  defensiveLine: [
    { id: "low", label: "Bloque Bajo", desc: "Línea retrasada en el borde del área, sin conceder espaldas", icon: "🧱" },
    { id: "mid", label: "Bloque Medio", desc: "Línea en tres cuartos de campo propio", icon: "📏" },
    { id: "high", label: "Línea Alta", desc: "Adelantar la defensa para achicar y provocar fuera de juego", icon: "🚩" }
  ],
  pressing: [
    { id: "low", label: "Baja / Contención", desc: "Esperar en zona, mantener líneas juntas y no desgastarse", icon: "🧘" },
    { id: "mid", label: "Media", desc: "Presión estándar al entrar en zona activa", icon: "🏃" },
    { id: "high", label: "Asfixiante / Alta", desc: "Acosar la salida de balón rival en su propio campo", icon: "🔥" }
  ],
  defenseWidth: [
    { id: "compact", label: "Cerrado por Dentro", desc: "Línea estrecha (30m) para blindar el área; deja espacio en bandas", icon: "🛡️" },
    { id: "balanced", label: "Equilibrada", desc: "Anchura estándar de la zaga (42-46m)", icon: "📐" },
    { id: "wide", label: "Cerrar Bandas", desc: "Laterales pegados a la cal para secar extremos y tapar centros", icon: "↔️" }
  ]
};
function getDefaultTacticalInstructions() {
  return {
    preset: "tiki_taka",
    inPossession: { passingStyle: "short", tempo: "slow", width: "balanced" },
    inTransition: { loss: "counterpress", win: "hold" },
    outOfPossession: { defensiveLine: "high", pressing: "high", defenseWidth: "balanced" }
  };
}
function detectMatchingPreset(instructions) {
  if (!instructions) return "custom";
  for (const [key, p] of Object.entries(TACTICAL_PRESETS)) {
    if (
      instructions.inPossession?.passingStyle === p.inPossession.passingStyle &&
      instructions.inPossession?.tempo === p.inPossession.tempo &&
      instructions.inPossession?.width === p.inPossession.width &&
      instructions.inTransition?.loss === p.inTransition.loss &&
      instructions.inTransition?.win === p.inTransition.win &&
      instructions.outOfPossession?.defensiveLine === p.outOfPossession.defensiveLine &&
      instructions.outOfPossession?.pressing === p.outOfPossession.pressing
    ) {
      return key;
    }
  }
  return "custom";
}

// =========================================================
// ARCHIVO: js\engine\leagueEngine.js
// =========================================================

// Motor del calendario de LaLiga, clasificación y simulación de partidos paralelos

/**
 * Genera el calendario de 38 jornadas para 20 equipos usando el algoritmo de Berger (Round-Robin)
 */
function generateSchedule(teams) {
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
function initStandings(teams) {
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
function updateStandings(standings, matchResults) {
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

  // Ataque (DC, EI, ED, MCO, MD, MI)
  const attackers = starters.filter(p => ["DC", "EI", "ED", "MCO", "MD", "MI"].includes(p.pos));
  const atk = attackers.length > 0
    ? attackers.reduce((acc, p) => acc + ((p.sho || 70) * 0.45 + (p.dri || 70) * 0.3 + (p.pac || 70) * 0.25), 0) / attackers.length
    : avgOvr;

  // Defensa (DFC, LD, LI, MCD) y Portero (POR)
  const gk = starters.find(p => p.pos === "POR") || (team.players || []).find(p => p.pos === "POR");
  const gkVal = gk ? (gk.par !== undefined ? gk.par : (gk.gks || gk.ovr || 75)) : avgOvr;
  const defenders = starters.filter(p => ["DFC", "LD", "LI", "MCD"].includes(p.pos));
  const def = defenders.length > 0
    ? (defenders.reduce((acc, p) => acc + ((p.def || 70) * 0.5 + (p.phy || 70) * 0.3 + (p.ovr || 70) * 0.2), 0) / defenders.length) * 0.70 + (gkVal * 0.30)
    : avgOvr;

  // Mediocampo (MC, MCD, MCO, MD, MI)
  const midfielders = starters.filter(p => ["MC", "MCD", "MCO", "MD", "MI"].includes(p.pos));
  const mid = midfielders.length > 0
    ? midfielders.reduce((acc, p) => acc + ((p.pas || 70) * 0.4 + (p.dri || 70) * 0.35 + (p.def || 70) * 0.25), 0) / midfielders.length
    : avgOvr;

  return { atk, def, mid, ovr: avgOvr };
}

/**
 * Simulación estocástica realista para los otros partidos de la jornada
 * Combina estadísticas de plantilla, factor campo local y azar del fútbol
 */
function simulateAIParties(match, teamsMap) {
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

  // Factor campo local (sutil empuje equilibrado de +0.4 puntos, strictly <= 0.5%)
  const homeAdvantage = 0.4;

  // Diferenciales entre ataque de uno y defensa del otro
  const homeAtkDiff = (homeStats.atk + homeAdvantage) - awayStats.def;
  const awayAtkDiff = awayStats.atk - (homeStats.def + homeAdvantage * 0.65);
  const midDiff = (homeStats.mid + 0.1) - awayStats.mid;

  // Azar del fútbol (días inspirados, penaltis, errores o paradas milagrosas)
  const homeLuck = (Math.random() - Math.random()) * 0.35;
  const awayLuck = (Math.random() - Math.random()) * 0.35;

  // Cálculo de goles esperados con techo equilibrado para evitar marcadores desorbitados (6-0)
  const baseHomeLambda = 1.25 + (homeAtkDiff * 0.038) + (midDiff * 0.015) + homeLuck;
  const baseAwayLambda = 1.05 + (awayAtkDiff * 0.036) - (midDiff * 0.015) + awayLuck;

  const lambdaHome = Math.max(0.20, Math.min(2.7, baseHomeLambda));
  const lambdaAway = Math.max(0.15, Math.min(2.5, baseAwayLambda));

  const homeScore = samplePoisson(lambdaHome);
  const awayScore = samplePoisson(lambdaAway);

  // Asignar goleadores y asistentes realistas entre los delanteros y medios del equipo
  const scorers = [];
  const pickAssister = (team, scorerId) => {
    const candidates = (team.players || []).slice(0, 14).filter(p => p.id !== scorerId && p.pos !== "POR");
    if (candidates.length === 0 || Math.random() > 0.72) return null;
    const weights = candidates.map(p => (p.pas || 65) * (["MCO", "MC", "EI", "ED", "MD", "MI", "LD", "LI"].includes(p.pos) ? 1.8 : 1.0));
    const total = weights.reduce((a, b) => a + b, 0);
    let r = Math.random() * total;
    for (let i = 0; i < candidates.length; i++) {
      r -= weights[i];
      if (r <= 0) return candidates[i];
    }
    return candidates[0];
  };

  for (let i = 0; i < homeScore; i++) {
    const scorer = pickScorer(homeTeam);
    scorer.goals = (scorer.goals || 0) + 1;
    scorer._aiMatchGoals = (scorer._aiMatchGoals || 0) + 1;
    const assister = pickAssister(homeTeam, scorer.id);
    if (assister) {
      assister.assists = (assister.assists || 0) + 1;
      assister._aiMatchAssists = (assister._aiMatchAssists || 0) + 1;
    }
    scorers.push({
      teamId: homeTeam.id,
      teamName: homeTeam.shortName,
      playerName: scorer.name,
      assisterName: assister ? assister.name : null,
      player: scorer,
      minute: Math.floor(Math.random() * 88) + 2
    });
  }
  for (let i = 0; i < awayScore; i++) {
    const scorer = pickScorer(awayTeam);
    scorer.goals = (scorer.goals || 0) + 1;
    scorer._aiMatchGoals = (scorer._aiMatchGoals || 0) + 1;
    const assister = pickAssister(awayTeam, scorer.id);
    if (assister) {
      assister.assists = (assister.assists || 0) + 1;
      assister._aiMatchAssists = (assister._aiMatchAssists || 0) + 1;
    }
    scorers.push({
      teamId: awayTeam.id,
      teamName: awayTeam.shortName,
      playerName: scorer.name,
      assisterName: assister ? assister.name : null,
      player: scorer,
      minute: Math.floor(Math.random() * 88) + 2
    });
  }

  // Desgaste físico y notas de partido (Mejora 5) para los futbolistas de ambos equipos de la IA
  let bestAiPlayer = null;
  let bestAiRating = -1;

  [
    { team: homeTeam, gf: homeScore, ga: awayScore },
    { team: awayTeam, gf: awayScore, ga: homeScore }
  ].forEach(({ team, gf, ga }) => {
    (team.players || []).forEach((p, idx) => {
      if (idx < 11) {
        p.matchMinutes = 90;
        const isGK = p.pos === "POR";
        const phyFactor = (120 - Math.min(95, Math.max(45, (p.phy || 70)))) / 50;
        const drain = isGK ? (6 + Math.random() * 3) : ((31 * phyFactor) + (Math.random() * 4 - 2));
        p.energy = Math.max(25, Math.round((p.energy !== undefined ? p.energy : 100) - drain));
      } else {
        // Suplente que entra ocasionalmente
        if (idx < 14 && Math.random() < 0.40) {
          p.matchMinutes = 25;
          p.energy = Math.max(35, Math.round((p.energy !== undefined ? p.energy : 100) - 10));
        } else {
          p.matchMinutes = 0;
        }
      }

      if (p.matchMinutes > 0) {
        const mGoals = p._aiMatchGoals || 0;
        const mAssists = p._aiMatchAssists || 0;
        let r = 6.5 + ((Math.random() - 0.48) * 0.8);
        r += mGoals * 1.1 + mAssists * 0.65;
        if (gf > ga) r += 0.25;
        else if (gf < ga) r -= 0.2;
        if (ga === 0 && ["POR", "DFC", "LD", "LI", "MCD"].includes(p.pos)) r += 0.4;
        const finalRating = Math.round(Math.max(4.5, Math.min(10.0, r)) * 10) / 10;
        p.lastMatchRating = finalRating;
        p.ratingSum = (p.ratingSum || 0) + finalRating;
        p.matchesRated = (p.matchesRated || 0) + 1;
        p.avgRating = Number((p.ratingSum / p.matchesRated).toFixed(2));
        if (finalRating > bestAiRating) {
          bestAiRating = finalRating;
          bestAiPlayer = p;
        }
      }
      delete p._aiMatchGoals;
      delete p._aiMatchAssists;
    });

    // Lesiones ocasionales por acumulación de minutos o lances en los partidos de la IA
    if (Math.random() < 0.04) {
      const candidates = (team.players || []).slice(0, 11).filter(p => p.pos !== "POR" && !p.injury);
      if (candidates.length > 0) {
        const victim = candidates[Math.floor(Math.random() * candidates.length)];
        const cause = (victim.energy < 60) ? "fatigue" : (Math.random() < 0.5 ? "foul" : "random");
        victim.injury = generateRandomInjury(cause);
      }
    }

    // Tarjetas y disciplina para partidos de la IA
    const outfieldStarters = (team.players || []).slice(0, 11).filter(p => p.pos !== "POR");
    if (outfieldStarters.length > 0) {
      // 1 o 2 tarjetas amarillas por partido en promedio para el equipo
      const numYellows = Math.random() < 0.60 ? 1 : (Math.random() < 0.28 ? 2 : 0);
      for (let y = 0; y < numYellows; y++) {
        const p = outfieldStarters[Math.floor(Math.random() * outfieldStarters.length)];
        if (p) {
          p.seasonYellows = (p.seasonYellows || 0) + 1;
          if (p.seasonYellows % 5 === 0 && !p.suspension) {
            p.suspension = { roundsLeft: 1, reason: "Ciclo de 5 Amarillas", justAcquired: true };
          }
        }
      }
      // Roja ocasional (1.4% de probabilidad por equipo)
      if (Math.random() < 0.014) {
        const p = outfieldStarters[Math.floor(Math.random() * outfieldStarters.length)];
        if (p) {
          p.seasonReds = (p.seasonReds || 0) + 1;
          p.suspension = { roundsLeft: 1, reason: "Tarjeta Roja", justAcquired: true };
        }
      }
    }
  });

  if (bestAiPlayer) {
    bestAiPlayer.mvpCount = (bestAiPlayer.mvpCount || 0) + 1;
  }

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

/**
 * Reduce las jornadas de sanción de los futbolistas tras disputarse la jornada.
 */
function processSuspensionRecovery(teams) {
  if (!teams) return;
  teams.forEach(team => {
    (team.players || []).forEach(player => {
      if (player.suspension) {
        player.suspension.roundsLeft -= 1;
        if (player.suspension.roundsLeft <= 0) {
          delete player.suspension;
        }
      }
    });
  });
}

// =========================================================
// ARCHIVO: js\engine\saveManager.js
// =========================================================

// Gestor de guardado en LocalStorage con soporte para 3 ranuras independientes (Slots 1, 2 y 3)

const LEGACY_KEY = "ENTRENATE_TE_TE_LALIGA_REAL_V8";
const ACTIVE_SLOT_KEY = "ENTRENATE_TE_TE_ACTIVE_SLOT";
const CURRENT_SCHEMA = "LALIGA_REAL_V8";
const MAX_SAVE_SLOTS = 3;

function getSlotStorageKey(slot = 1) {
  const s = Math.max(1, Math.min(MAX_SAVE_SLOTS, parseInt(slot, 10) || 1));
  return `ENTRENATE_TE_TE_SLOT_${s}`;
}
class SaveManager {
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
      const targetSlot = slot !== null ? Math.max(1, Math.min(MAX_SAVE_SLOTS, parseInt(slot, 10) || 1)) : this.getActiveSlot();
      
      const data = {
        schemaVersion: CURRENT_SCHEMA,
        saveSlot: targetSlot,
        userTeamId: gameState.userTeamId,
        currentRound: gameState.currentRound || 1,
        schedule: gameState.schedule || [],
        standings: gameState.standings || [],
        teams: gameState.teams || [],
        userTactics: gameState.userTactics || null,
        weeklyTraining: gameState.weeklyTraining || "recovery",
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
        if (!parsed.weeklyTraining) {
          parsed.weeklyTraining = "recovery";
        }
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

// =========================================================
// ARCHIVO: js\engine\matchEngine.js
// =========================================================

// Motor de simulación de partido 2D interactivo con cambios en vivo (sin comentarios de texto)
class MatchSimulator {
  constructor(homeTeam, awayTeam, options = {}) {
    let realHome = homeTeam;
    let realAway = awayTeam;
    let realOpts = options;

    if (homeTeam && typeof homeTeam === "object" && !awayTeam && (homeTeam.homeTeam || homeTeam.awayTeam)) {
      realOpts = homeTeam;
      realHome = homeTeam.homeTeam;
      realAway = homeTeam.awayTeam;
    }

    this.homeTeam = realHome ? JSON.parse(JSON.stringify(realHome)) : { id: "home", name: "Local", players: [] };
    this.awayTeam = realAway ? JSON.parse(JSON.stringify(realAway)) : { id: "away", name: "Visitante", players: [] };
    options = realOpts || {};

    this.minute = 0;
    this.firstHalfExtra = Math.floor(Math.random() * 5) + 1; // Descuento aleatorio 1 a 5 min en 1ª parte
    this.secondHalfExtra = Math.floor(Math.random() * 5) + 1; // Descuento aleatorio 1 a 5 min en 2ª parte
    this.halfTimeMinute = 45 + this.firstHalfExtra;
    this.maxMinutes = 90 + this.secondHalfExtra;
    this.userSpeed = options.speed || 1; // Velocidad elegida por el usuario
    this.speed = this.userSpeed;
    this.showKeyHighlights = options.showKeyHighlights !== false;
    this.highlightTimeouts = [];
    this.setPieceTimeouts = [];
    this.skipCurrentHighlight = null;
    this.isHighlightRunning = false;
    this.isSkippingToEnd = false;
    this.isRunning = false;
    this.isFinished = false;
    this.isHalfTime = false;
    this.halfTimeTriggered = false;
    this.isSecondHalf = false;
    this.loopTimeout = null;

    this.homeScore = 0;
    this.awayScore = 0;

    this.homeMentality = options.homeMentality || "balanced";
    this.awayMentality = options.awayMentality || "balanced";

    this.homeFormation = options.homeFormation || "4-3-3";
    this.awayFormation = options.awayFormation || "4-3-3";

    this.homePlayerRoles = options.homePlayerRoles || {};
    this.awayPlayerRoles = options.awayPlayerRoles || {};

    // Posiciones personalizadas manuales de jugadores en el campo
    this.homeCustomPositions = options.homeCustomPositions || {};
    this.awayCustomPositions = options.awayCustomPositions || {};

    // Instrucciones tácticas por estados (Con balón / Transición / Sin balón)
    this.homeInstructions = options.homeInstructions ? JSON.parse(JSON.stringify(options.homeInstructions)) : getDefaultTacticalInstructions();
    this.awayInstructions = options.awayInstructions ? JSON.parse(JSON.stringify(options.awayInstructions)) : getDefaultTacticalInstructions();
    this.lastPossession = "home";

    // Límite de 5 cambios oficiales en 3 ventanas durante el partido (el descanso no consume ventana)
    this.homeSubsRemaining = 5;
    this.awaySubsRemaining = 5;
    this.homeWindowsRemaining = 3;
    this.awayWindowsRemaining = 3;

    // Estadísticas en tiempo real
    this.stats = {
      possession: { home: 50, away: 50 },
      possessionTicks: { home: 0, away: 0 },
      shots: { home: 0, away: 0 },
      shotsOnTarget: { home: 0, away: 0 },
      fouls: { home: 0, away: 0 },
      corners: { home: 0, away: 0 },
      yellowCards: { home: 0, away: 0 },
      redCards: { home: 0, away: 0 }
    };

    this.events = []; // Lista de goles, tarjetas, etc.
    this.currentAlert = null; // Alerta visual momentánea (ej: "¡GOL!", "¡PARADÓN!")
    this.currentAlertTimer = 0;

    // Inicializar jugadores en el campo para la animación 2D según alineación óptima y formación
    const homeOpt = buildOptimalLineup(this.homeTeam, this.homeFormation);
    const awayOpt = buildOptimalLineup(this.awayTeam, this.awayFormation);

    this.homePlayersOnPitch = options.homeLineup && Array.isArray(options.homeLineup) && options.homeLineup.length === 11
      ? options.homeLineup.map(id => this.homeTeam.players.find(p => p.id === id) || (typeof id === 'object' ? id : null)).filter(Boolean)
      : homeOpt.lineup;
    this.homeBench = options.homeBench && Array.isArray(options.homeBench)
      ? options.homeBench.map(id => this.homeTeam.players.find(p => p.id === id) || (typeof id === 'object' ? id : null)).filter(Boolean)
      : homeOpt.bench;

    this.awayPlayersOnPitch = options.awayLineup && Array.isArray(options.awayLineup) && options.awayLineup.length === 11
      ? options.awayLineup.map(id => this.awayTeam.players.find(p => p.id === id) || (typeof id === 'object' ? id : null)).filter(Boolean)
      : awayOpt.lineup;
    this.awayBench = options.awayBench && Array.isArray(options.awayBench)
      ? options.awayBench.map(id => this.awayTeam.players.find(p => p.id === id) || (typeof id === 'object' ? id : null)).filter(Boolean)
      : awayOpt.bench;

    // Inicializar cómputo de minutos de partido, desgaste y valoración en vivo (Rating 1.0 - 10.0)
    const initPlayerMatchStats = (p, isStarter) => {
      p.matchMinutes = 0;
      p.matchGoals = 0;
      p.matchAssists = 0;
      p.matchSaves = 0;
      p.matchTackles = 0;
      p.matchKeyPasses = 0;
      p.matchShots = 0;
      p.matchRating = isStarter ? 6.5 : 6.0;
      p.playedInMatch = isStarter;
    };
    this.homePlayersOnPitch.forEach(p => initPlayerMatchStats(p, true));
    this.homeBench.forEach(p => initPlayerMatchStats(p, false));
    this.awayPlayersOnPitch.forEach(p => initPlayerMatchStats(p, true));
    this.awayBench.forEach(p => initPlayerMatchStats(p, false));

    // Inicializar cómputo del partido: Motor Autónomo 20 Ticks/Seg + Replay Buffer Circular (15s = 300 ticks)
    this.useRealTime = true;
    this.matchSecond = 0;
    this.highlightInterval = null;
    this.realTimeMinute = 0;
    this.lastMinuteProcessed = 0;
    this.tickEmitTimer = 0;
    this.possessionTimeHome = 0.5;
    this.possessionTimeAway = 0.5;
    this.foulCooldown = 0;
    this.setPieceCooldown = 0;
    this.replayBuffer = [];
    this.maxReplayBufferFrames = 300; // 15 segundos a 20 ticks/segundo
    this.activeReplay = null;
    this.lastHighlightMinute = -4;
    this._liveAtkMomentum = { home: 0.5, away: 0.5 };
    this._pendingTickOutcome = null;
    this._recordingReplayOnly = false;
    this.ball = {
      x: 50, y: 50, z: 0,
      targetX: 50, targetY: 50, targetZ: 0,
      possession: "home",
      xm: 52.5, ym: 34, zm: 0,
      vx: 0, vy: 0, vz: 0,
      carrier: null,
      passTarget: null,
      passTeam: null,
      shotTeam: null,
      shotMeta: null,
      lastTouchTeam: "home",
      lastTouchPlayer: null,
      assistCandidate: null,
      pickupCooldown: 0
    };
    this.init2DPositions();

    this.onTick = options.onTick || (() => {});
    this.onFinish = options.onFinish || (() => {});
    this.onAlert = options.onAlert || (() => {});
    this.hasCustomOnGoal = typeof options.onGoal === "function";
    this.onGoal = options.onGoal || (() => {});
    this.onHalfTime = options.onHalfTime || (() => {});
    this.hasCustomOnSub = typeof options.onSubstitution === "function";
    this.onSubstitution = options.onSubstitution || (() => {});
    this.onHighlightStart = options.onHighlightStart || (() => {});
    this.onHighlightPhase = options.onHighlightPhase || (() => {});
    this.onHighlightEnd = options.onHighlightEnd || (() => {});
    this.onCommentary = options.onCommentary || (() => {});
    this.commentaryCooldown = 0;

    this.userSide = options.userSide || "home";
    this.aiSide = this.userSide === "home" ? "away" : "home";
    this.lastAISubMinute = 0;

    // Mejora 1: Charlas de vestuario (Pre-partido y Descanso)
    this.activeTeamTalk = null;
    this.halftimeTalkUsed = false;
    if (options.preMatchTalk) {
      this.applyTeamTalk("pre", options.preMatchTalk, true);
    }

    // Mejora 2: Gritos desde la banda en vivo (Touchline Shouts)
    this.activeShout = null;
    this.shoutCooldownUntil = 0;

    // Mejora 3: Plan de Entrenamiento Semanal del usuario
    this.weeklyTraining = options.weeklyTraining || "recovery";
    this.applyWeeklyTrainingBonuses();

    // Mejora 6: Clima dinámico del partido con efecto real en el césped y tácticas
    this.weather = this.resolveWeather(options.weather);

    // Asistente / Segundo Entrenador en Vivo (Live Coaching Staff FM)
    this.assistantCoachName = options.assistantName || (this.userSide === "home" ? (this.homeTeam.assistantName || "Segundo Entrenador") : (this.awayTeam.assistantName || "Segundo Entrenador"));
    this.nextAssistantCheckMinute = 12 + Math.floor(Math.random() * 4);
    this.lastAssistantAdviceMinute = -99;
    this.currentPendingAdvice = null;
    this.activeAssistantAdvice = null;
    this.onAssistantAdvice = options.onAssistantAdvice || (() => {});
    this.onAssistantFeedback = options.onAssistantFeedback || (() => {});

    this.hasCustomOnSetPiece = typeof options.onSetPiece === "function";
    this.onSetPiece = options.onSetPiece || (() => {});
    this.isSetPieceRunning = false;
    this.pauseRequested = false;

    this.onInjury = options.onInjury || (() => {});
    this.onCard = options.onCard || (() => {});
    this.matchCards = { yellows: {}, reds: {} };

    this.isHalfTime = false;
    this.halfTimeTriggered = false;
    this.isSecondHalf = false;

    // Instrucciones individuales: Marcaje al Hombre (Feature A)
    this.homeManMarking = options.homeManMarking ? JSON.parse(JSON.stringify(options.homeManMarking)) : {};
    this.awayManMarking = options.awayManMarking ? JSON.parse(JSON.stringify(options.awayManMarking)) : {};

    // Aliento de la Grada (Feature B)
    this.activeCrowdRoar = null;
    this.crowdRoarCooldownUntil = 0;
    this.crowdRoarUnlockedByHighlight = false;
  }

  getFormationCoords(formationKey, isHome, customPositions = null) {
    const form = FORMATIONS[formationKey] || FORMATIONS["4-3-3"];
    const custom = customPositions || (isHome ? this.homeCustomPositions : this.awayCustomPositions) || {};
    return form.slots.map((s, idx) => {
      const c = custom[idx];
      const effX = (c && c.x !== undefined) ? c.x : s.x;
      const effY = (c && c.y !== undefined) ? c.y : s.y;
      const px = isHome 
        ? 5 + ((88 - effY) / 70) * 70 
        : 100 - (5 + ((88 - effY) / 70) * 70);
      const py = isHome ? effX : 100 - effX;
      return { x: px, y: py };
    });
  }

  _createPhysicsPlayer(p, idx, coord, side) {
    const isKeeper = p.pos === "POR" || idx === 0;
    const pac = Number(p.pac || p.ovr || 70);
    const dri = Number(p.dri || p.ovr || 70);
    const xm = ((coord?.x ?? (side === "home" ? 25 : 75)) / 100) * 105;
    const ym = ((coord?.y ?? 50) / 100) * 68;
    const maxSpeed = isKeeper ? 5.8 + (pac - 50) * 0.025 : 6.4 + (pac - 50) * 0.045;
    const acceleration = isKeeper ? 13.5 : 15.0 + ((pac + dri) * 0.5 - 50) * 0.12;
    return {
      player: p,
      side,
      number: p.number || (idx + 1),
      isKeeper,
      baseX: coord?.x ?? (side === "home" ? 25 : 75),
      baseY: coord?.y ?? 50,
      curX: coord?.x ?? (side === "home" ? 25 : 75),
      curY: coord?.y ?? 50,
      targetX: coord?.x ?? (side === "home" ? 25 : 75),
      targetY: coord?.y ?? 50,
      xm,
      ym,
      vx: 0,
      vy: 0,
      maxSpeed,
      acceleration,
      desiredX: xm,
      desiredY: ym,
      aiState: isKeeper ? "GK" : "ANCHOR",
      decisionTimer: Math.random() * 0.45,
      controlTimer: 0,
      tackleCooldown: 0,
      speedMps: 0,
      animPhase: Math.random() * Math.PI * 2,
      facingX: side === "home" ? 1 : -1,
      facingZ: 0
    };
  }

  init2DPositions() {
    const homeCoords = this.getFormationCoords(this.homeFormation, true);
    const awayCoords = this.getFormationCoords(this.awayFormation, false);

    this.home2D = this.homePlayersOnPitch.map((p, idx) =>
      this._createPhysicsPlayer(p, idx, homeCoords[idx], "home")
    );

    this.away2D = this.awayPlayersOnPitch.map((p, idx) =>
      this._createPhysicsPlayer(p, idx, awayCoords[idx], "away")
    );

    // Asignar saque inicial al delantero centro local
    if (this.ball) {
      const kicker = this.home2D[9] || this.home2D[this.home2D.length - 1];
      if (kicker) {
        kicker.xm = 52.5;
        kicker.ym = 34;
        kicker.curX = 50;
        kicker.curY = 50;
        this.ball.carrier = kicker;
        this.ball.xm = 52.5;
        this.ball.ym = 34;
        this.ball.zm = 0;
        this.ball.possession = "home";
        this.ball.lastTouchTeam = "home";
        this.ball.lastTouchPlayer = kicker;
      }
    }
  }

  clearAllTimeouts() {
    if (this.loopTimeout) {
      clearTimeout(this.loopTimeout);
      this.loopTimeout = null;
    }
    if (this.highlightInterval) {
      clearInterval(this.highlightInterval);
      this.highlightInterval = null;
    }
    if (this.highlightTimeouts && this.highlightTimeouts.length > 0) {
      this.highlightTimeouts.forEach(clearTimeout);
      this.highlightTimeouts = [];
    }
    if (this.setPieceTimeouts && this.setPieceTimeouts.length > 0) {
      this.setPieceTimeouts.forEach(clearTimeout);
      this.setPieceTimeouts = [];
    }
    const wasVisualActive = this.isHighlightRunning || this.isSetPieceRunning;
    this.isHighlightRunning = false;
    this.isSetPieceRunning = false;
    this.activeReplay = null;
    if (wasVisualActive && this.onHighlightEnd) {
      this.onHighlightEnd();
    }
  }

  start() {
    if (this.isSetPieceRunning || this.isHighlightRunning || this.isFinished || this.isHalfTime) return;
    if (this.isRunning) return;
    this.isRunning = true;
    this.pauseRequested = false;
    if (this.loopTimeout) {
      clearTimeout(this.loopTimeout);
      this.loopTimeout = null;
    }
    if (this.onTick) this.onTick(this.getState());
    this.loop();
  }

  pause() {
    this.isRunning = false;
    if (this.loopTimeout) {
      clearTimeout(this.loopTimeout);
      this.loopTimeout = null;
    }
    if (this.highlightInterval) {
      clearInterval(this.highlightInterval);
      this.highlightInterval = null;
    }
    if (this.onTick) this.onTick(this.getState());
  }

  setSpeed(speedMultiplier) {
    this.userSpeed = speedMultiplier;
    if (!this.isHighlightRunning) {
      this.speed = speedMultiplier;
    }
  }

  setMentality(teamSide, mentalityId) {
    if (teamSide === "home") this.homeMentality = mentalityId;
    if (teamSide === "away") this.awayMentality = mentalityId;
  }

  setTacticalInstructions(teamSide, instructions) {
    if (!instructions) return;
    if (teamSide === "home") {
      this.homeInstructions = JSON.parse(JSON.stringify(instructions));
    } else {
      this.awayInstructions = JSON.parse(JSON.stringify(instructions));
    }
    this.update2DPositions();
  }

  // MEJORA 3: Aplicar bonificaciones del Plan de Entrenamiento Semanal al equipo del usuario (sobre la copia del partido)
  applyWeeklyTrainingBonuses() {
    const userTeamObj = this.userSide === "home" ? this.homeTeam : this.awayTeam;
    const userPitch = this.userSide === "home" ? this.homePlayersOnPitch : this.awayPlayersOnPitch;
    const userBench = this.userSide === "home" ? this.homeBench : this.awayBench;
    const allUserPlayers = Array.from(new Set([...(userTeamObj?.players || []), ...userPitch, ...userBench]));

    if (this.weeklyTraining === "recovery") {
      allUserPlayers.forEach(p => {
        p.energy = Math.min(100, (p.energy !== undefined ? p.energy : 100) + 4);
      });
    } else if (this.weeklyTraining === "finishing") {
      allUserPlayers.forEach(p => {
        if (["DC", "EI", "ED", "MCO", "MD", "MI", "MC"].includes(p.pos)) {
          p.sho = Math.min(99, (p.sho || 72) + 4);
        }
      });
    } else if (this.weeklyTraining === "defensive") {
      allUserPlayers.forEach(p => {
        if (p.pos === "POR") {
          p.par = Math.min(99, (p.par !== undefined ? p.par : (p.gks || p.ovr || 75)) + 4);
        } else if (["DFC", "LD", "LI", "MCD", "MC"].includes(p.pos)) {
          p.def = Math.min(99, (p.def || 72) + 4);
        }
      });
    }
  }

  // MEJORA 6: Resolver clima del partido y sus modificadores sobre el césped
  resolveWeather(weatherOption) {
    const catalog = {
      sunny: {
        id: "sunny",
        icon: "☀️",
        label: "Soleado · 22°C",
        pitchLabel: "Césped seco (Pase corto +4%, Calor 2ªP)",
        shortPassBonus: 0.04,
        longShotBonus: 0,
        drainModFirstHalf: 1.0,
        drainModSecondHalf: 1.05,
        highPressExtraDrain: 1.0,
        foulMod: 1.0,
        atkSharpness: 1.0
      },
      rain: {
        id: "rain",
        icon: "🌧️",
        label: "Lluvia · 13°C",
        pitchLabel: "Césped rápido (+Peligro tiros lejanos, +Desgaste presión)",
        shortPassBonus: -0.02,
        longShotBonus: 5.5,
        drainModFirstHalf: 1.04,
        drainModSecondHalf: 1.06,
        highPressExtraDrain: 1.12,
        foulMod: 1.12,
        atkSharpness: 1.02
      },
      night: {
        id: "night",
        icon: "🌙",
        label: "Noche cerrada · 16°C",
        pitchLabel: "Focos y fresco (-6% fatiga, +4% velocidad transición)",
        shortPassBonus: 0.02,
        longShotBonus: 1.5,
        drainModFirstHalf: 0.94,
        drainModSecondHalf: 0.94,
        highPressExtraDrain: 0.97,
        foulMod: 0.96,
        atkSharpness: 1.04
      }
    };

    if (weatherOption && typeof weatherOption === "object" && weatherOption.id && catalog[weatherOption.id]) {
      return { ...catalog[weatherOption.id], ...weatherOption };
    }
    if (typeof weatherOption === "string" && catalog[weatherOption]) {
      return catalog[weatherOption];
    }
    const keys = ["sunny", "night", "rain"];
    const rand = Math.random();
    const chosenKey = rand < 0.45 ? "sunny" : (rand < 0.78 ? "night" : "rain");
    return catalog[chosenKey] || keys[0];
  }

  // Ajustar valoración en vivo (1.0 a 10.0) de un futbolista
  adjustPlayerRating(player, delta) {
    if (!player) return;
    player.playedInMatch = true;
    const cur = player.matchRating !== undefined ? player.matchRating : 6.5;
    player.matchRating = Math.round(Math.max(3.5, Math.min(10.0, cur + delta)) * 10) / 10;
  }

  // MEJORA 1: Aplicar charla de vestuario (Pre-partido o Descanso) con efecto real según contexto
  applyTeamTalk(phase = "pre", talkId = "confidence", silent = false) {
    const userPitch = this.userSide === "home" ? this.homePlayersOnPitch : this.awayPlayersOnPitch;
    const userScore = this.userSide === "home" ? this.homeScore : this.awayScore;
    const oppScore = this.userSide === "home" ? this.awayScore : this.homeScore;
    const diff = userScore - oppScore;

    let talkData = {
      id: talkId,
      phase,
      label: "Confianza Plena",
      icon: "💪",
      atkMod: 1.0,
      midMod: 1.0,
      defMod: 1.0,
      foulMod: 1.0,
      drainMod: 1.0,
      expiresAtMinute: phase === "pre" ? 28 : 75,
      feedback: "El vestuario asiente con motivación."
    };

    if (phase === "pre") {
      if (talkId === "passionate") {
        talkData = {
          id: "passionate",
          phase: "pre",
          label: "¡Salid a morder!",
          icon: "🔥",
          atkMod: 1.09,
          midMod: 1.06,
          defMod: 0.98,
          foulMod: 1.15,
          drainMod: 1.05,
          expiresAtMinute: 28,
          feedback: "🔥 ¡El equipo sale enchufadísimo! (+9% Ataque y +6% Medular en el arranque)"
        };
        userPitch.forEach(p => this.adjustPlayerRating(p, 0.1));
      } else if (talkId === "tactical") {
        talkData = {
          id: "tactical",
          phase: "pre",
          label: "Orden y Concentración",
          icon: "🧠",
          atkMod: 1.0,
          midMod: 1.06,
          defMod: 1.09,
          foulMod: 0.85,
          drainMod: 0.96,
          expiresAtMinute: 32,
          feedback: "🧠 Bloques juntos y máxima concentración (+9% Defensa y +6% Control)"
        };
        userPitch.forEach(p => this.adjustPlayerRating(p, 0.1));
      } else if (talkId === "calm") {
        talkData = {
          id: "calm",
          phase: "pre",
          label: "Cabeza Fría / Sin Presión",
          icon: "🧊",
          atkMod: 1.02,
          midMod: 1.04,
          defMod: 1.05,
          foulMod: 0.65,
          drainMod: 0.92,
          expiresAtMinute: 35,
          feedback: "🧊 Jugadores tranquilos: -35% riesgo de faltas/tarjetas y ahorro físico"
        };
      } else {
        // confidence
        talkData = {
          id: "confidence",
          phase: "pre",
          label: "Confianza Plena",
          icon: "💪",
          atkMod: 1.05,
          midMod: 1.05,
          defMod: 1.05,
          foulMod: 0.95,
          drainMod: 1.0,
          expiresAtMinute: 30,
          feedback: "💪 Moral alta en el once titular (+5% global en todas las líneas)"
        };
        userPitch.forEach(p => this.adjustPlayerRating(p, 0.15));
      }
    } else {
      // Descanso (contextual según el marcador)
      this.halftimeTalkUsed = true;
      if (talkId === "aggressive") {
        if (diff <= 0) {
          talkData = {
            id: "aggressive",
            phase: "ht",
            label: "Bronca / Exigir Reacción",
            icon: "😡",
            atkMod: 1.13,
            midMod: 1.09,
            defMod: 1.03,
            foulMod: 1.12,
            drainMod: 1.04,
            expiresAtMinute: 76,
            feedback: "😡 ¡El vestuario reacciona con orgullo herido! (+13% Ataque, +9% Medular y +3% Energía)"
          };
          userPitch.forEach(p => {
            p.energy = Math.min(100, (p.energy || 75) + 3);
            this.adjustPlayerRating(p, 0.15);
          });
        } else {
          talkData = {
            id: "aggressive",
            phase: "ht",
            label: "Bronca Innecesaria",
            icon: "😡",
            atkMod: 0.95,
            midMod: 0.96,
            defMod: 0.97,
            foulMod: 1.25,
            drainMod: 1.05,
            expiresAtMinute: 70,
            feedback: "⚠️ Los jugadores no entienden la bronca ganando el partido (-4% precisión y más nervios)"
          };
          userPitch.forEach(p => this.adjustPlayerRating(p, -0.1));
        }
      } else if (talkId === "encourage") {
        const boost = diff < 0 ? 1.11 : (diff === 0 ? 1.08 : 1.05);
        talkData = {
          id: "encourage",
          phase: "ht",
          label: "¡Creer en la Victoria!",
          icon: "🔥",
          atkMod: boost,
          midMod: 1.06,
          defMod: 1.04,
          foulMod: 0.95,
          drainMod: 1.0,
          expiresAtMinute: 78,
          feedback: diff < 0
            ? "🔥 ¡Conjura de remontada en el vestuario! (+11% Ataque y fe ciega)"
            : "🔥 ¡El equipo sale enchufado a por más goles en la 2ª mitad! (+8% empuje)"
        };
        userPitch.forEach(p => this.adjustPlayerRating(p, 0.15));
      } else if (talkId === "praise") {
        if (diff > 0) {
          talkData = {
            id: "praise",
            phase: "ht",
            label: "Elogiar el Gran Trabajo",
            icon: "👏",
            atkMod: 1.06,
            midMod: 1.08,
            defMod: 1.08,
            foulMod: 0.85,
            drainMod: 0.95,
            expiresAtMinute: 80,
            feedback: "👏 ¡Moral por las nubes! El equipo se siente invencible (+8% Control y Defensa)"
          };
          userPitch.forEach(p => this.adjustPlayerRating(p, 0.2));
        } else {
          talkData = {
            id: "praise",
            phase: "ht",
            label: "Elogio Complaciente",
            icon: "👏",
            atkMod: 0.97,
            midMod: 0.98,
            defMod: 0.97,
            foulMod: 0.95,
            drainMod: 0.96,
            expiresAtMinute: 70,
            feedback: "😐 Elogiar sin ir ganando relaja en exceso a algunos jugadores (-3% intensidad)"
          };
        }
      } else if (talkId === "calm_control") {
        talkData = {
          id: "calm_control",
          phase: "ht",
          label: "Cabeza Fría y Cerrar Espacios",
          icon: "🧊",
          atkMod: 0.98,
          midMod: 1.06,
          defMod: 1.10,
          foulMod: 0.60,
          drainMod: 0.90,
          expiresAtMinute: 82,
          feedback: "🧊 Máxima disciplina táctica: +10% Defensa y -40% riesgo de tarjetas"
        };
        userPitch.forEach(p => this.adjustPlayerRating(p, 0.1));
      }
    }

    this.activeTeamTalk = talkData;
    if (!silent && !this.isSkippingToEnd) {
      this.triggerAlert("VESTUARIO", talkData.feedback, this.userSide, 3600);
    }
    if (this.onTick) this.onTick(this.getState());
    return talkData;
  }

  // MEJORA 2: Órdenes rápidas de banda (Gritos desde el banquillo en vivo)
  triggerShout(shoutId) {
    if (this.isFinished || this.isHalfTime) {
      return { success: false, reason: "El balón no está en juego." };
    }
    if (this.minute < this.shoutCooldownUntil) {
      const waitMins = this.shoutCooldownUntil - this.minute;
      return { success: false, reason: `Espera ${waitMins} min para dar otra orden desde la banda.` };
    }

    const duration = 12; // 12 minutos de efecto activo
    const cooldown = 10; // 10 minutos de enfriamiento tras usarse (o total desde activación: 10 min)
    const expiresAt = Math.min(this.maxMinutes, this.minute + duration);
    this.shoutCooldownUntil = this.minute + 10;

    const catalog = {
      CROSS_BOX: {
        id: "CROSS_BOX",
        label: "¡Colgad balones!",
        icon: "📢",
        atkMod: 1.11,
        midMod: 1.02,
        defMod: 0.96,
        foulMod: 1.0,
        drainMod: 1.04,
        possBonus: 0,
        alertText: "📢 ¡Orden desde la banda: «¡Colgad balones al área!» (+Centros y remate durante 12')"
      },
      SHOOT_ON_SIGHT: {
        id: "SHOOT_ON_SIGHT",
        label: "¡Tirad a puerta!",
        icon: "🚀",
        atkMod: 1.13,
        midMod: 1.0,
        defMod: 0.97,
        foulMod: 1.0,
        drainMod: 1.03,
        possBonus: -0.02,
        alertText: "🚀 ¡Orden desde la banda: «¡Disparad en cuanto podáis!» (+Tiros y peligro durante 12')"
      },
      EASY_TACKLES: {
        id: "EASY_TACKLES",
        label: "¡Cuidado entradas!",
        icon: "🛡️",
        atkMod: 0.97,
        midMod: 1.03,
        defMod: 1.08,
        foulMod: 0.45,
        drainMod: 0.94,
        possBonus: 0,
        alertText: "🛡️ ¡Orden desde la banda: «¡Sin faltas, aguantad de pie!» (-55% faltas/tarjetas y +8% Defensa)"
      },
      WASTE_TIME: {
        id: "WASTE_TIME",
        label: "¡Dormid el balón!",
        icon: "⏱️",
        atkMod: 0.86,
        midMod: 1.10,
        defMod: 1.09,
        foulMod: 0.85,
        drainMod: 0.86,
        possBonus: 0.09,
        alertText: "⏱️ ¡Orden desde la banda: «¡Dormid el partido, posesiones largas!» (+Posesión y cerrojo durante 12')"
      }
    };

    const chosen = catalog[shoutId];
    if (!chosen) return { success: false, reason: "Orden no reconocida" };

    this.activeShout = {
      ...chosen,
      startedAtMinute: this.minute,
      expiresAtMinute: expiresAt
    };

    this.triggerAlert("BANDA", chosen.alertText, this.userSide, 3400);
    if (this.onTick) this.onTick(this.getState());
    return { success: true, shout: this.activeShout };
  }

  // FEATURE B: Pedir el Aliento de la Grada (Factor Campo Local para Remontar)
  triggerCrowdRoar() {
    if (this.isFinished || this.isHalfTime) {
      return { success: false, reason: "El partido está detenido." };
    }
    if (this.userSide !== "home") {
      return { success: false, reason: "Solo puedes pedir el aliento del estadio cuando juegas en casa como local." };
    }
    if (this.homeScore > this.awayScore) {
      return { success: false, reason: "Tu equipo va ganando el partido; la afición ya está satisfecha y en fiesta." };
    }
    if (this.activeCrowdRoar) {
      const left = Math.max(1, this.activeCrowdRoar.expiresAtMinute - this.minute);
      return { success: false, reason: `¡La grada ya está ruge al máximo animando al equipo (${left} min restantes)!` };
    }
    const isCooldown = this.minute < this.crowdRoarCooldownUntil;
    if (isCooldown && !this.crowdRoarUnlockedByHighlight) {
      const wait = this.crowdRoarCooldownUntil - this.minute;
      return { success: false, reason: `La grada recupera el aliento. Podrás activarla en ${wait} min o tras una jugada clave.` };
    }

    // Activar aliento durante 10 minutos con un plus comedido (+0.4%, strictly <= 0.5%)
    this.activeCrowdRoar = {
      startedAtMinute: this.minute,
      expiresAtMinute: Math.min(this.maxMinutes, this.minute + 10),
      boostPct: 0.004
    };
    this.crowdRoarCooldownUntil = this.minute + 15;
    this.crowdRoarUnlockedByHighlight = false;

    // Apenas un ligero chispazo de concentración anímica
    this.homePlayersOnPitch.forEach(p => {
      p.energy = Math.min(100, (p.energy || 75) + 0.1);
    });

    this.triggerAlert("GRADA", "🏟️ ¡El estadio empuja con su aliento al equipo! (+0.4% aliento)", "home", 3800);
    if (this.onTick) this.onTick(this.getState());
    return { success: true, activeCrowdRoar: this.activeCrowdRoar };
  }

  // FEATURE A: Asignar o modificar marcaje al hombre individual
  setManMarking(side, markerId, targetId, intensity = "tight") {
    const isHome = side === "home";
    const markingMap = isHome ? this.homeManMarking : this.awayManMarking;
    if (!markingMap) return false;

    if (!targetId || intensity === "none") {
      delete markingMap[markerId];
    } else {
      markingMap[markerId] = {
        targetId,
        intensity: ["light", "tight", "aggressive"].includes(intensity) ? intensity : "tight"
      };
    }
    return true;
  }

  // Obtener marcaje activo de un marcador si ambos jugadores están en el campo
  getActiveMarkingForMarker(side, markerId) {
    const isHome = side === "home";
    const markingMap = isHome ? this.homeManMarking : this.awayManMarking;
    const task = markingMap ? markingMap[markerId] : null;
    if (!task || !task.targetId) return null;

    const myPitch = isHome ? this.homePlayersOnPitch : this.awayPlayersOnPitch;
    const oppPitch = isHome ? this.awayPlayersOnPitch : this.homePlayersOnPitch;

    const markerOnPitch = myPitch.some(p => p.id === markerId);
    const targetOnPitch = oppPitch.some(p => p.id === task.targetId);

    if (markerOnPitch && targetOnPitch) {
      return {
        markerId,
        targetId: task.targetId,
        intensity: task.intensity || "tight"
      };
    }
    return null;
  }

  // Obtener todos los marcadores rivales que están vigilando a un jugador objetivo
  getActiveMarkersOnTarget(targetSide, targetId) {
    const targetIsHome = targetSide === "home";
    const oppSide = targetIsHome ? "away" : "home";
    const oppMarkingMap = targetIsHome ? this.awayManMarking : this.homeManMarking;
    if (!oppMarkingMap) return [];

    const oppPitch = targetIsHome ? this.awayPlayersOnPitch : this.homePlayersOnPitch;
    const myPitch = targetIsHome ? this.homePlayersOnPitch : this.awayPlayersOnPitch;

    const targetOnPitch = myPitch.some(p => p.id === targetId);
    if (!targetOnPitch) return [];

    const activeMarkers = [];
    for (const markerId in oppMarkingMap) {
      const task = oppMarkingMap[markerId];
      if (task && task.targetId === targetId) {
        if (oppPitch.some(p => p.id === markerId)) {
          activeMarkers.push({
            markerId,
            targetId,
            intensity: task.intensity || "tight"
          });
        }
      }
    }
    return activeMarkers;
  }

  // Realizar sustitución en vivo
  makeSubstitution(teamSide, pitchPlayerId, benchPlayerId, isHalfTime = false) {
    const isHome = teamSide === "home";
    const onPitchList = isHome ? this.homePlayersOnPitch : this.awayPlayersOnPitch;
    const benchList = isHome ? this.homeBench : this.awayBench;
    const remaining = isHome ? this.homeSubsRemaining : this.awaySubsRemaining;
    const remainingWindows = isHome ? this.homeWindowsRemaining : this.awayWindowsRemaining;

    if (remaining <= 0) return { success: false, reason: "Ya se han realizado los 5 cambios permitidos" };
    if (!isHalfTime && remainingWindows <= 0) return { success: false, reason: "Ya se han agotado las 3 ventanas de cambios permitidas en juego" };

    const pitchIndex = onPitchList.findIndex(p => p.id === pitchPlayerId);
    const benchIndex = benchList.findIndex(p => p.id === benchPlayerId);

    if (pitchIndex === -1 || benchIndex === -1) {
      return { success: false, reason: "Jugador no encontrado" };
    }

    const outPlayer = onPitchList[pitchIndex];
    const inPlayer = benchList[benchIndex];

    if (inPlayer.injury) {
      return { success: false, reason: `${inPlayer.name} está lesionado y no puede entrar al campo.` };
    }
    if (inPlayer.suspension && inPlayer.suspension.roundsLeft > 0) {
      return { success: false, reason: `${inPlayer.name} está sancionado y no puede entrar al campo.` };
    }
    if (inPlayer.subbedOut) {
      return { success: false, reason: `${inPlayer.name} ya fue sustituido anteriormente en este partido.` };
    }

    outPlayer.subbedOut = true;
    inPlayer.playedInMatch = true;
    if (!inPlayer.matchRating || inPlayer.matchRating < 6.5) inPlayer.matchRating = 6.5;

    // Intercambiar
    onPitchList[pitchIndex] = inPlayer;
    benchList.splice(benchIndex, 1);
    benchList.push(outPlayer);

    const target2D = isHome ? this.home2D[pitchIndex] : this.away2D[pitchIndex];
    if (isHome) {
      this.homeSubsRemaining--;
      if (!isHalfTime) this.homeWindowsRemaining--;
    } else {
      this.awaySubsRemaining--;
      if (!isHalfTime) this.awayWindowsRemaining--;
    }
    if (target2D) {
      const pac = Number(inPlayer.pac || inPlayer.ovr || 70);
      const dri = Number(inPlayer.dri || inPlayer.ovr || 70);
      target2D.player = inPlayer;
      target2D.number = inPlayer.number || (pitchIndex + 1);
      target2D.maxSpeed = target2D.isKeeper ? 5.8 + (pac - 50) * 0.025 : 6.4 + (pac - 50) * 0.045;
      target2D.acceleration = target2D.isKeeper ? 13.5 : 15.0 + ((pac + dri) * 0.5 - 50) * 0.12;
    }

    this.triggerAlert("CAMBIO", `🔄 Cambio: entra ${inPlayer.name} por ${outPlayer.name}`, isHome ? "home" : "away");

    return {
      success: true,
      inPlayer,
      outPlayer,
      remaining: isHome ? this.homeSubsRemaining : this.awaySubsRemaining,
      windowsRemaining: isHome ? this.homeWindowsRemaining : this.awayWindowsRemaining
    };
  }

  // Aplicar ajustes tácticos completos (formación, mentalidad, cambios de puesto y sustituciones)
  applyTacticalChanges(teamSide, newFormationKey, newMentality, newLineupPlayerIds, newBenchPlayerIds, isHalfTime = false, newPlayerRoles = null, newCustomPositions = null, newManMarking = null) {
    const isHome = teamSide === "home";
    const currentPitch = isHome ? this.homePlayersOnPitch : this.awayPlayersOnPitch;
    const currentPitchIds = currentPitch.map(p => p.id);
    const remaining = isHome ? this.homeSubsRemaining : this.awaySubsRemaining;
    const remainingWindows = isHome ? this.homeWindowsRemaining : this.awayWindowsRemaining;

    if (newCustomPositions) {
      if (isHome) this.homeCustomPositions = newCustomPositions;
      else this.awayCustomPositions = newCustomPositions;
    }

    if (newManMarking !== null && typeof newManMarking === "object") {
      if (isHome) this.homeManMarking = JSON.parse(JSON.stringify(newManMarking));
      else this.awayManMarking = JSON.parse(JSON.stringify(newManMarking));
    }

    // Detectar qué futbolistas entran desde el banquillo
    const subsInIds = newLineupPlayerIds.filter(id => !currentPitchIds.includes(id));
    const subsOutIds = currentPitchIds.filter(id => !newLineupPlayerIds.includes(id));

    if (subsInIds.length > 0) {
      if (subsInIds.length > remaining) {
        return {
          success: false,
          reason: `Solo te quedan ${remaining} cambios permitidos (has intentado realizar ${subsInIds.length}).`
        };
      }

      // Si no es el descanso, verificar ventanas de cambios disponibles (máximo 3 ventanas en juego)
      if (!isHalfTime && remainingWindows <= 0) {
        return {
          success: false,
          reason: "Ya has agotado las 3 ventanas de cambios permitidas en el partido. En el descanso no cuentan, pero durante el juego ya no puedes hacer más cambios."
        };
      }
    }

    const allTeamPlayers = isHome 
      ? [...this.homePlayersOnPitch, ...this.homeBench]
      : [...this.awayPlayersOnPitch, ...this.awayBench];

    for (const inId of subsInIds) {
      const inP = allTeamPlayers.find(p => p.id === inId);
      if (inP?.injury) {
        return { success: false, reason: `${inP.name} está lesionado y no puede saltar al terreno de juego.` };
      }
      if (inP?.suspension && inP.suspension.roundsLeft > 0) {
        return { success: false, reason: `${inP.name} está sancionado y no puede saltar al terreno de juego.` };
      }
      if (inP?.subbedOut) {
        return { success: false, reason: `${inP.name} ya ha sido sustituido en este partido y no puede volver a entrar.` };
      }
    }

    const newPitch = newLineupPlayerIds.map(id => allTeamPlayers.find(p => p.id === id)).filter(Boolean);
    const newBench = newBenchPlayerIds.map(id => allTeamPlayers.find(p => p.id === id)).filter(Boolean);

    const expectedPitchCount = currentPitch.length || 11;
    if (newPitch.length !== expectedPitchCount) {
      return {
        success: false,
        reason: expectedPitchCount === 11
          ? "La alineación debe contar exactamente con 11 futbolistas."
          : `La alineación debe mantener los ${expectedPitchCount} futbolistas disponibles en el campo.`
      };
    }

    // Registrar parejas de cambio para rótulos y estadísticas
    const subsPairs = [];
    for (let i = 0; i < subsInIds.length; i++) {
      const inP = allTeamPlayers.find(p => p.id === subsInIds[i]);
      const outP = allTeamPlayers.find(p => p.id === subsOutIds[i]);
      if (outP) outP.subbedOut = true;
      if (inP) {
        inP.playedInMatch = true;
        if (!inP.matchRating || inP.matchRating < 6.5) inP.matchRating = 6.5;
      }
      if (inP && outP) {
        subsPairs.push({ inPlayer: inP, outPlayer: outP });
      }
    }

    // Actualizar estado del simulador
    if (newPlayerRoles) {
      if (isHome) {
        this.homePlayerRoles = { ...this.homePlayerRoles, ...newPlayerRoles };
      } else {
        this.awayPlayerRoles = { ...this.awayPlayerRoles, ...newPlayerRoles };
      }
    }
    if (isHome) {
      this.homeSubsRemaining -= subsInIds.length;
      if (!isHalfTime && subsInIds.length > 0) {
        this.homeWindowsRemaining--;
      }
      this.homePlayersOnPitch = newPitch;
      this.homeBench = newBench;
      if (newFormationKey) this.homeFormation = newFormationKey;
      if (newMentality) this.homeMentality = newMentality;
    } else {
      this.awaySubsRemaining -= subsInIds.length;
      if (!isHalfTime && subsInIds.length > 0) {
        this.awayWindowsRemaining--;
      }
      this.awayPlayersOnPitch = newPitch;
      this.awayBench = newBench;
      if (newFormationKey) this.awayFormation = newFormationKey;
      if (newMentality) this.awayMentality = newMentality;
    }

    // Limpiar marcajes de futbolistas que salen sustituidos
    if (subsOutIds.length > 0) {
      const activeMarking = isHome ? this.homeManMarking : this.awayManMarking;
      if (activeMarking) {
        subsOutIds.forEach(outId => {
          delete activeMarking[outId];
        });
      }
    }

    // Reposicionar jugadores en 2D según el nuevo esquema táctico
    const activeFormation = isHome ? this.homeFormation : this.awayFormation;
    const newCoords = this.getFormationCoords(activeFormation, isHome);
    const old2D = isHome ? this.home2D : this.away2D;

    const updated2D = newPitch.map((p, idx) => {
      const existing = old2D.find(item => item.player.id === p.id);
      const coord = newCoords[idx] || { x: isHome ? 25 : 75, y: 50 };
      const fresh = this._createPhysicsPlayer(p, idx, coord, teamSide);
      if (existing) {
        fresh.curX = existing.curX;
        fresh.curY = existing.curY;
        fresh.xm = existing.xm !== undefined ? existing.xm : (existing.curX / 100) * 105;
        fresh.ym = existing.ym !== undefined ? existing.ym : (existing.curY / 100) * 68;
        fresh.vx = existing.vx || 0;
        fresh.vy = existing.vy || 0;
        fresh.animPhase = existing.animPhase;
        fresh.facingX = existing.facingX;
        fresh.facingZ = existing.facingZ || 0;
        if (this.ball && this.ball.carrier === existing) {
          this.ball.carrier = fresh;
        }
        if (this.ball && this.ball.passTarget === existing) {
          this.ball.passTarget = fresh;
        }
      }
      return fresh;
    });

    if (isHome) this.home2D = updated2D;
    else this.away2D = updated2D;

    return {
      success: true,
      subsCount: subsInIds.length,
      subsPairs,
      remaining: isHome ? this.homeSubsRemaining : this.awaySubsRemaining,
      windowsRemaining: isHome ? this.homeWindowsRemaining : this.awayWindowsRemaining
    };
  }

  // Comprobar y ejecutar sustituciones tácticas automáticas de la IA rival
  checkAISubstitutions() {
    if (this.isHalfTime || this.isFinished || !this.isRunning) return;
    const aiSubsRemaining = this.aiSide === "home" ? this.homeSubsRemaining : this.awaySubsRemaining;
    const aiWindowsRemaining = this.aiSide === "home" ? this.homeWindowsRemaining : this.awayWindowsRemaining;
    if (aiSubsRemaining <= 0 || aiWindowsRemaining <= 0) return;

    // La IA realiza cambios realistas entre el minuto 56 y el 86
    if (this.minute < 56 || this.minute > 86) return;
    if (this.minute - this.lastAISubMinute < 7) return;

    const aiPitch = this.aiSide === "home" ? this.homePlayersOnPitch : this.awayPlayersOnPitch;
    const aiBenchRaw = this.aiSide === "home" ? this.homeBench : this.awayBench;
    const aiBench = (aiBenchRaw || []).filter(p => !p.injury);

    if (aiBench.length === 0) return;

    // Buscar jugadores de campo con energía más baja (< 68%) o al llegar a minutos clave
    const outfieldPitch = aiPitch.filter(p => p.pos !== "POR");
    if (outfieldPitch.length === 0) return;
    outfieldPitch.sort((a, b) => (a.energy || 100) - (b.energy || 100));
    const mostTired = outfieldPitch[0];

    const isKeyMinute = [60, 68, 76, 83].includes(this.minute);
    const isVeryTired = mostTired && (mostTired.energy || 100) < 66;

    if (!isKeyMinute && !isVeryTired && Math.random() > 0.22) return;

    // Buscar sustituto adecuado en el banquillo (no lesionado)
    const samePos = aiBench.filter(p => p.pos === mostTired.pos);
    let candidate = null;
    if (samePos.length > 0) {
      candidate = samePos.sort((a, b) => (b.ovr || 70) - (a.ovr || 70))[0];
    } else {
      const hasPos = (p, list) => {
        const all = [p.pos, ...(Array.isArray(p.secondaryPos) ? p.secondaryPos : [])].filter(Boolean);
        return list.some(x => all.includes(x));
      };
      const isAtk = hasPos(mostTired, ["DC", "EI", "ED", "MD", "MI"]);
      const isMid = hasPos(mostTired, ["MC", "MCD", "MCO", "MD", "MI"]);
      const isDef = hasPos(mostTired, ["DFC", "LD", "LI"]);

      const lineCandidates = aiBench.filter(p => {
        if (isAtk) return hasPos(p, ["DC", "EI", "ED", "MD", "MI"]);
        if (isMid) return hasPos(p, ["MC", "MCD", "MCO", "MD", "MI"]);
        if (isDef) return hasPos(p, ["DFC", "LD", "LI"]);
        return false;
      });

      if (lineCandidates.length > 0) {
        candidate = lineCandidates.sort((a, b) => (b.ovr || 70) - (a.ovr || 70))[0];
      } else {
        candidate = aiBench.filter(p => p.pos !== "POR").sort((a, b) => (b.ovr || 70) - (a.ovr || 70))[0];
      }
    }

    if (candidate && mostTired) {
      this.lastAISubMinute = this.minute;
      const res = this.makeSubstitution(this.aiSide, mostTired.id, candidate.id);
      if (res.success && !this.isSkippingToEnd && this.hasCustomOnSub) {
        this.pause();
        this.onSubstitution({
          teamSide: this.aiSide,
          team: this.aiSide === "home" ? this.homeTeam : this.awayTeam,
          subs: [{ outPlayer: res.outPlayer, inPlayer: res.inPlayer }],
          minute: this.minute,
          remaining: this.aiSide === "home" ? this.homeSubsRemaining : this.awaySubsRemaining
        });
        return true;
      }
    }
    return false;
  }

  // Activar lesión de un jugador durante el partido por fatiga, lance o falta
  triggerPlayerInjury(player, teamSide, cause = "random") {
    if (!player || player.injury) return false;

    const injuryData = generateRandomInjury(cause);
    player.injury = injuryData;
    player.energy = Math.max(10, (player.energy || 50) - 28);

    const teamObj = teamSide === "home" ? this.homeTeam : this.awayTeam;
    if (!this.isSkippingToEnd) {
      const alertMsg = `${injuryData.icon} ¡LESIÓN! ${player.name} (${injuryData.type}) - ${injuryData.roundsLeft}j de baja`;
      this.triggerAlert("LESIÓN", alertMsg, teamSide, 5000);
    }

    this.events.push({
      minute: this.minute,
      type: "INJURY",
      team: teamSide,
      teamName: teamObj.shortName || teamObj.name,
      player: player.name,
      playerId: player.id,
      injury: injuryData
    });

    this.onInjury({
      player,
      injury: injuryData,
      teamSide,
      minute: this.minute,
      team: teamObj,
      isSkippingToEnd: this.isSkippingToEnd
    });

    // Si es el equipo de la IA rival (o si estamos saltando al final), gestionar sustitución inmediata de emergencia
    if (teamSide === this.aiSide || this.isSkippingToEnd) {
      return this.handleAIInjurySub(player, teamSide);
    }
    return !this.isRunning;
  }

  // Sustitución forzosa por lesión para el equipo IA
  handleAIInjurySub(injuredPlayer, teamSide) {
    const isHome = teamSide === "home";
    const remaining = isHome ? this.homeSubsRemaining : this.awaySubsRemaining;
    const remainingWindows = isHome ? this.homeWindowsRemaining : this.awayWindowsRemaining;
    const aiBenchRaw = isHome ? this.homeBench : this.awayBench;
    const aiBench = (aiBenchRaw || []).filter(p => !p.injury && !(p.suspension && p.suspension.roundsLeft > 0) && !p.subbedOut);

    if (remaining <= 0 || remainingWindows <= 0 || aiBench.length === 0) return false;

    const samePos = aiBench.filter(p => p.pos === injuredPlayer.pos);
    let candidate = null;
    if (samePos.length > 0) {
      candidate = samePos.sort((a, b) => (b.ovr || 70) - (a.ovr || 70))[0];
    } else {
      candidate = aiBench.filter(p => p.pos !== "POR").sort((a, b) => (b.ovr || 70) - (a.ovr || 70))[0] || aiBench[0];
    }

    if (candidate) {
      const res = this.makeSubstitution(teamSide, injuredPlayer.id, candidate.id, this.isHalfTime);
      if (res.success && !this.isSkippingToEnd && this.hasCustomOnSub) {
        this.pause();
        this.onSubstitution({
          teamSide,
          team: teamSide === "home" ? this.homeTeam : this.awayTeam,
          subs: [{ outPlayer: res.outPlayer, inPlayer: res.inPlayer }],
          minute: this.minute,
          remaining: res.remaining,
          forcedInjury: true
        });
        return true;
      }
    }
    return false;
  }

  loop() {
    if (!this.isRunning || this.isFinished || this.isHighlightRunning || this.isSetPieceRunning) return;

    // 1. Comprobar si ya corresponde el descanso
    if (this.minute >= this.halfTimeMinute && !this.halfTimeTriggered && !this.isSecondHalf) {
      this.halfTimeTriggered = true;
      this.isHalfTime = true;
      this.pause();
      this.triggerAlert("DESCANSO", "📣 ¡Final de la 1ª Parte! Descanso", "neutral", 3200);
      this.onHalfTime(this.getState());
      return;
    }

    // 2. Comprobar si finalizó el partido
    if (this.minute >= this.maxMinutes) {
      this.finish();
      return;
    }

    const hadHighlight = this.stepMinute();
    this.onTick(this.getState());

    // Si la jugada clave se ha iniciado, el loop asíncrono toma el control hasta su resolución
    if (hadHighlight) {
      return;
    }

    // 3. Comprobar descanso tras avanzar el minuto
    if (this.minute >= this.halfTimeMinute && !this.halfTimeTriggered && !this.isSecondHalf) {
      this.halfTimeTriggered = true;
      this.isHalfTime = true;
      this.pause();
      this.triggerAlert("DESCANSO", "📣 ¡Final de la 1ª Parte! Descanso", "neutral", 3200);
      this.onHalfTime(this.getState());
      return;
    }

    if (this.minute >= this.maxMinutes) {
      this.finish();
      return;
    }

    // Intervalo de tiempo dinámico según velocidad (Fluido y ágil estilo Football Manager)
    const baseInterval = 460; // ms por minuto en 1x (ritmo televisivo dinámico)
    const interval = Math.max(50, Math.round(baseInterval / this.speed));

    if (this.loopTimeout) {
      clearTimeout(this.loopTimeout);
    }
    this.loopTimeout = setTimeout(() => this.loop(), interval);
  }

  // Simulación paso a paso de cada minuto de partido
  stepMinute() {
    if (this.isSkippingToEnd) {
      this.isSetPieceRunning = false;
      this.isHighlightRunning = false;
    } else if (this.isSetPieceRunning) {
      return false;
    }

    this.minute++;

    // Descuentos en directo: aviso al llegar a los minutos 45 y 90
    if (this.minute === 45 && !this.halfTimeTriggered && !this.isSecondHalf) {
      this.triggerAlert("DESCUENTO", `⏱️ +${this.firstHalfExtra} min de añadido (1ª Parte)`, "neutral", 3500);
    } else if (this.minute === 90 && this.isSecondHalf) {
      this.triggerAlert("DESCUENTO", `⏱️ +${this.secondHalfExtra} min de añadido (2ª Parte)`, "neutral", 3500);
    }

    // Comprobar si se ha cumplido el tiempo reglamentario más el descuento antes de generar jugadas
    if (this.minute >= this.halfTimeMinute && !this.halfTimeTriggered && !this.isSecondHalf) {
      this.halfTimeTriggered = true;
      this.isHalfTime = true;
      this.pause();
      this.triggerAlert("DESCANSO", "📣 ¡Final de la 1ª Parte! Descanso", "neutral", 3200);
      this.onHalfTime(this.getState());
      return true;
    }

    if (this.minute >= this.maxMinutes) {
      this.finish();
      return true;
    }

    // Modificadores de mentalidad y desgaste físico
    const mentMods = {
      very_defensive: { atk: 0.65, def: 1.35, drain: 0.85 },
      defensive: { atk: 0.85, def: 1.15, drain: 0.92 },
      balanced: { atk: 1.0, def: 1.0, drain: 1.0 },
      offensive: { atk: 1.25, def: 0.85, drain: 1.10 },
      very_offensive: { atk: 1.45, def: 0.70, drain: 1.20 }
    };

    const homeMod = mentMods[this.homeMentality] || mentMods.balanced;
    const awayMod = mentMods[this.awayMentality] || mentMods.balanced;

    // Modificadores de fatiga según ritmo, presión táctica y clima del partido (Mejora 6)
    const w = this.weather || { drainModFirstHalf: 1.0, drainModSecondHalf: 1.0, highPressExtraDrain: 1.0 };
    const weatherHalfDrain = this.isSecondHalf ? (w.drainModSecondHalf || 1.0) : (w.drainModFirstHalf || 1.0);
    const homePressMod = this.homeInstructions?.outOfPossession?.pressing === "high" ? (1.18 * (w.highPressExtraDrain || 1.0)) : (this.homeInstructions?.outOfPossession?.pressing === "low" ? 0.82 : 1.0);
    const homeTempoMod = this.homeInstructions?.inPossession?.tempo === "fast" ? 1.12 : (this.homeInstructions?.inPossession?.tempo === "slow" ? 0.88 : 1.0);
    const awayPressMod = this.awayInstructions?.outOfPossession?.pressing === "high" ? (1.18 * (w.highPressExtraDrain || 1.0)) : (this.awayInstructions?.outOfPossession?.pressing === "low" ? 0.82 : 1.0);
    const awayTempoMod = this.awayInstructions?.inPossession?.tempo === "fast" ? 1.12 : (this.awayInstructions?.inPossession?.tempo === "slow" ? 0.88 : 1.0);

    // Expiración de charlas de vestuario y gritos de banda activos
    if (this.activeTeamTalk && this.minute > this.activeTeamTalk.expiresAtMinute) {
      this.activeTeamTalk = null;
    }
    if (this.activeShout && this.minute > this.activeShout.expiresAtMinute) {
      this.activeShout = null;
    }

    // Expiración y feedback del consejo del Segundo Entrenador / Cuerpo Técnico
    if (this.activeAssistantAdvice) {
      if (this.minute >= this.activeAssistantAdvice.feedbackMinute && !this.activeAssistantAdvice.feedbackDelivered) {
        this.activeAssistantAdvice.feedbackDelivered = true;
        this._deliverAssistantFeedback(this.activeAssistantAdvice);
      }
      if (this.minute >= this.activeAssistantAdvice.expiresAtMinute) {
        this.activeAssistantAdvice = null;
      }
    }

    // Comprobación periódica de análisis del Segundo Entrenador (cada 12-15 minutos)
    if (!this.isSkippingToEnd && !this.isFinished && !this.isHalfTime && !this.isHighlightRunning && !this.isSetPieceRunning) {
      if (this.minute >= this.nextAssistantCheckMinute && !this.currentPendingAdvice) {
        this._checkAssistantCoaching();
      }
    }

    const userDrainTalkMod = (this.activeTeamTalk ? this.activeTeamTalk.drainMod : 1.0) * (this.activeShout ? this.activeShout.drainMod : 1.0) * (this.weeklyTraining === "recovery" ? 0.93 : 1.0);
    const homeTalkDrain = (this.userSide === "home" ? userDrainTalkMod : 1.0) * weatherHalfDrain;
    const awayTalkDrain = (this.userSide === "away" ? userDrainTalkMod : 1.0) * weatherHalfDrain * 1.002; // Factor campo sutil: el visitante acusa levemente el viaje (+0.2%)

    // Desgaste físico gradual y acumulación de minutos según atributos físicos (PHY), media (OVR), posición, mentalidad y estilo táctico
    this.homePlayersOnPitch.forEach(p => {
      p.matchMinutes = (p.matchMinutes || 0) + 1;
      p.playedInMatch = true;
      const isGK = p.pos === "POR";
      const phyFactor = (120 - Math.min(95, Math.max(45, (p.phy || 70)))) / 50;
      const ovrFactor = 0.95 - (Math.max(65, Math.min(95, (p.ovr || 70))) - 65) * 0.005; // Mayor media resiste mejor el esfuerzo
      const rate = isGK ? 0.04 : (0.28 * phyFactor * ovrFactor * homeMod.drain * homePressMod * homeTempoMod * homeTalkDrain);
      p.energy = Math.max(25, (p.energy || 100) - rate);
      if (this.minute % 18 === 0 && Math.random() < 0.45) {
        this.adjustPlayerRating(p, 0.1);
      }
    });

    this.awayPlayersOnPitch.forEach(p => {
      p.matchMinutes = (p.matchMinutes || 0) + 1;
      p.playedInMatch = true;
      const isGK = p.pos === "POR";
      const phyFactor = (120 - Math.min(95, Math.max(45, (p.phy || 70)))) / 50;
      const ovrFactor = 0.95 - (Math.max(65, Math.min(95, (p.ovr || 70))) - 65) * 0.005;
      const rate = isGK ? 0.04 : (0.28 * phyFactor * ovrFactor * awayMod.drain * awayPressMod * awayTempoMod * awayTalkDrain);
      p.energy = Math.max(25, (p.energy || 100) - rate);
      if (this.minute % 18 === 0 && Math.random() < 0.45) {
        this.adjustPlayerRating(p, 0.1);
      }
    });

    // Comprobación de riesgo de lesión por acumulación de minutos y fatiga física (< 58% energía)
    let injuryInterrupted = false;
    const checkFatigueInjury = (player, teamSide) => {
      if (injuryInterrupted || player.injury || player.pos === "POR") return;
      const energy = player.energy !== undefined ? player.energy : 100;
      if (energy < 58) {
        const fatigueRisk = (58 - energy) / 100;
        const phyFactor = Math.max(0.5, (player.phy || 70) / 100);
        const trainingMod = (teamSide === this.userSide && this.weeklyTraining === "recovery") ? 0.65 : 1.0;
        const chance = ((fatigueRisk * 0.0032) / phyFactor) * trainingMod;
        if (Math.random() < chance) {
          if (this.triggerPlayerInjury(player, teamSide, "fatigue")) {
            injuryInterrupted = true;
          }
        }
      }
    };
    this.homePlayersOnPitch.forEach(p => checkFatigueInjury(p, "home"));
    this.awayPlayersOnPitch.forEach(p => checkFatigueInjury(p, "away"));
    if (injuryInterrupted && !this.isSkippingToEnd) {
      this.update2DPositions();
      return true;
    }

    // Modificadores de efectividad ofensiva y defensiva
    let homeAtkBonus = 0;
    if (this.homeInstructions?.inPossession?.passingStyle === "direct") homeAtkBonus += 0.08;
    if (this.homeInstructions?.inPossession?.tempo === "fast") homeAtkBonus += 0.10;
    else if (this.homeInstructions?.inPossession?.tempo === "slow") homeAtkBonus -= 0.08;

    let awayAtkBonus = 0;
    if (this.awayInstructions?.inPossession?.passingStyle === "direct") awayAtkBonus += 0.08;
    if (this.awayInstructions?.inPossession?.tempo === "fast") awayAtkBonus += 0.10;
    else if (this.awayInstructions?.inPossession?.tempo === "slow") awayAtkBonus -= 0.08;

    // Modificador de bloque defensivo rival
    let homeDefBonus = this.homeInstructions?.outOfPossession?.defensiveLine === "low" ? 0.12 : (this.homeInstructions?.outOfPossession?.defensiveLine === "high" ? -0.06 : 0);
    let awayDefBonus = this.awayInstructions?.outOfPossession?.defensiveLine === "low" ? 0.12 : (this.awayInstructions?.outOfPossession?.defensiveLine === "high" ? -0.06 : 0);

    // Bono de solidez defensiva del asistente (+15%)
    if (this.activeAssistantAdvice && this.activeAssistantAdvice.isGoodReading) {
      const cat = this.activeAssistantAdvice.category;
      if (cat === "DEFENSIVE" || cat === "COUNTER" || cat === "HOLD_LEAD") {
        if (this.userSide === "home") homeDefBonus += 0.15;
        else awayDefBonus += 0.15;
      }
    }

    // Factor Campo: El equipo local cuenta con un sutil empuje ambiental base (+0.2 ATA / +0.2 DEF)
    const homeAtk = (this.calcTeamPower(this.homePlayersOnPitch, "atk", "home") + 0.2) * (homeMod.atk + homeAtkBonus);
    const homeDef = (this.calcTeamPower(this.homePlayersOnPitch, "def", "home") + 0.2) * (homeMod.def + homeDefBonus);
    const awayAtk = this.calcTeamPower(this.awayPlayersOnPitch, "atk", "away") * (awayMod.atk + awayAtkBonus);
    const awayDef = this.calcTeamPower(this.awayPlayersOnPitch, "def", "away") * (awayMod.def + awayDefBonus);

    // Disputa de la posesión con impacto de estilo de pase, presión alta y sutil factor campo en la medular (+0.1)
    const midHome = this.calcTeamPower(this.homePlayersOnPitch, "mid", "home") + 0.1;
    const midAway = this.calcTeamPower(this.awayPlayersOnPitch, "mid", "away");

    const wShortBonus = this.weather?.shortPassBonus || 0;
    let possModHome = 0;
    if (this.homeInstructions?.inPossession?.passingStyle === "short") possModHome += (0.06 + wShortBonus);
    else if (this.homeInstructions?.inPossession?.passingStyle === "direct") possModHome -= 0.05;
    if (this.homeInstructions?.outOfPossession?.pressing === "high") possModHome += 0.04;

    let possModAway = 0;
    if (this.awayInstructions?.inPossession?.passingStyle === "short") possModAway += (0.06 + wShortBonus);
    else if (this.awayInstructions?.inPossession?.passingStyle === "direct") possModAway -= 0.05;
    if (this.awayInstructions?.outOfPossession?.pressing === "high") possModAway += 0.04;

    if (this.activeShout && this.activeShout.possBonus) {
      if (this.userSide === "home") possModHome += this.activeShout.possBonus;
      else possModAway += this.activeShout.possBonus;
    }

    // Ventaja base ambiental del estadio local en posesión (+0.4% comedido, strictly <= 0.5%)
    const probHomePoss = Math.max(0.20, Math.min(0.80, (midHome / (midHome + midAway)) + 0.004 + possModHome - possModAway));

    // Si el balón ya está en juego o en posesión de un equipo, NO reasignar posesión por sorteo en cada minuto;
    // la posesión cambia únicamente por robos físicos (_attemptTackle), intercepciones (_stepBallPhysics) o saques físicos.
    const ballAlreadyInPlay = Boolean(
      this.ball && (
        this.ball.carrier ||
        this.ball.passTarget ||
        this.ball.shotTeam ||
        this.ball.possession ||
        Math.hypot(this.ball.vx || 0, this.ball.vy || 0) > 0.35
      )
    );
    let currentPoss = ballAlreadyInPlay
      ? (this.ball.carrier?.side || this.ball.passTeam || this.ball.possession || this.lastPossession || "home")
      : (Math.random() < probHomePoss ? "home" : "away");

    this.lastPossession = currentPoss;
    this.ball.possession = currentPoss;

    if (currentPoss === "home") {
      this.stats.possessionTicks.home++;
    } else {
      this.stats.possessionTicks.away++;
    }

    const totalTicks = this.stats.possessionTicks.home + this.stats.possessionTicks.away;
    this.stats.possession.home = Math.round((this.stats.possessionTicks.home / totalTicks) * 100);
    this.stats.possession.away = 100 - this.stats.possession.home;

    // Modificadores tácticos de ímpetu ofensivo en la simulación autónoma a 20 ticks/segundo
    const lateHomeSurge = (this.minute >= 70 && this.homeScore <= this.awayScore) ? 0.003 : 0;
    let homeChanceMult = 0.25 + lateHomeSurge;
    if (this.minute <= 15) homeChanceMult *= 0.85;
    const leadDiffHome = this.homeScore - this.awayScore;
    if (leadDiffHome >= 3) homeChanceMult *= 0.40;
    else if (leadDiffHome >= 2) homeChanceMult *= 0.65;

    let awayChanceMult = 0.24;
    if (this.minute <= 15) awayChanceMult *= 0.85;
    const leadDiffAway = this.awayScore - this.homeScore;
    if (leadDiffAway >= 3) awayChanceMult *= 0.40;
    else if (leadDiffAway >= 2) awayChanceMult *= 0.65;

    if (this.activeShout) {
      if (this.userSide === "home" && this.activeShout.id === "SHOOT_ON_SIGHT") homeChanceMult *= 1.20;
      else if (this.userSide === "home" && this.activeShout.id === "WASTE_TIME") homeChanceMult *= 0.70;
      else if (this.userSide === "away" && this.activeShout.id === "WASTE_TIME") homeChanceMult *= 0.75;

      if (this.userSide === "away" && this.activeShout.id === "SHOOT_ON_SIGHT") awayChanceMult *= 1.20;
      else if (this.userSide === "away" && this.activeShout.id === "WASTE_TIME") awayChanceMult *= 0.70;
      else if (this.userSide === "home" && this.activeShout.id === "WASTE_TIME") awayChanceMult *= 0.75;
    }

    if (this.activeAssistantAdvice) {
      const isUserHome = this.userSide === "home";
      const isUserAway = this.userSide === "away";
      const cat = this.activeAssistantAdvice.category;
      const isGood = this.activeAssistantAdvice.isGoodReading;
      if (isGood) {
        if (cat === "OFFENSIVE" || cat === "HIGH_PRESS" || cat === "WIDE_PLAY") {
          homeChanceMult *= (isUserHome ? 1.15 : 1.0);
          awayChanceMult *= (isUserAway ? 1.15 : 1.0);
        } else if (cat === "DEFENSIVE" || cat === "COUNTER" || cat === "HOLD_LEAD") {
          homeChanceMult *= (!isUserHome ? 0.85 : 1.0);
          awayChanceMult *= (!isUserAway ? 0.85 : 1.0);
        } else if (cat === "SUBSTITUTION") {
          homeChanceMult *= (isUserHome ? 1.10 : 0.90);
          awayChanceMult *= (isUserAway ? 1.10 : 0.90);
        }
      } else {
        homeChanceMult *= (!isUserHome ? 1.10 : 1.0);
        awayChanceMult *= (!isUserAway ? 1.10 : 1.0);
      }
    }

    const homeAttackScore = (homeAtk / (homeAtk + awayDef)) * homeChanceMult;
    const awayAttackScore = (awayAtk / (awayAtk + homeDef)) * awayChanceMult;

    // 1. MOTOR DE FÍSICA Y AGENTES A 20 TICKS/SEGUNDO (Cero plantillas enlatadas)
    // En FAST_SIM avanzamos el motor físico autónomo calculando ticks de dt = 0.05s (20 Hz)
    // y grabando el buffer circular replayBuffer (últimos 15 segundos = 300 ticks).
    const emergentPaused = this._runAutonomousMinuteTicks(currentPoss, homeAttackScore, awayAttackScore);
    if (emergentPaused) {
      return !this.isSkippingToEnd;
    }

    // Posibles faltas y tarjetas en disputas del centro del campo
    const baseFoulChance = 0.052 * (this.weather?.foulMod || 1.0);
    const pressingHome = this.homeInstructions?.outOfPossession?.pressing || "mid";
    const pressingAway = this.awayInstructions?.outOfPossession?.pressing || "mid";
    const pressFoulMod = (pressingHome === "high" || pressingAway === "high") ? 1.30 : ((pressingHome === "low" && pressingAway === "low") ? 0.65 : 1.0);

    if (Math.random() < baseFoulChance * pressFoulMod) {
      const foulTeam = Math.random() > 0.5 ? "home" : "away";
      const userFoulMod = (this.activeTeamTalk ? this.activeTeamTalk.foulMod : 1.0) * (this.activeShout ? this.activeShout.foulMod : 1.0);
      if (foulTeam === this.userSide && userFoulMod < 1.0 && Math.random() > userFoulMod) {
        this._syncMetersTo2D();
        return false;
      }
      this.stats.fouls[foulTeam]++;
      const victimTeam = foulTeam === "home" ? "away" : "home";
      const foulTeamObj = foulTeam === "home" ? this.homeTeam : this.awayTeam;
      const foulPitch = foulTeam === "home" ? this.homePlayersOnPitch : this.awayPlayersOnPitch;
      const foulCandidates = foulPitch.filter(p => p.pos !== "POR");
      const committingPlayer = foulCandidates.length > 0
        ? foulCandidates[Math.floor(Math.random() * foulCandidates.length)]
        : foulPitch[0];

      const cardMod = foulTeam === this.userSide ? userFoulMod : 1.0;
      const isDirectRed = Math.random() < (0.015 * cardMod);
      const isYellow = !isDirectRed && Math.random() < (0.22 * cardMod);

      if (isDirectRed && committingPlayer) {
        this.adjustPlayerRating(committingPlayer, -1.5);
        this.stats.redCards[foulTeam]++;
        this.matchCards.reds[committingPlayer.id] = { player: committingPlayer, reason: "Roja directa", minute: this.minute, team: foulTeam };
        if (foulTeam === "home") {
          this.homePlayersOnPitch = this.homePlayersOnPitch.filter(p => p.id !== committingPlayer.id);
          this.home2D = this.home2D.filter(p => p.player?.id !== committingPlayer.id);
        } else {
          this.awayPlayersOnPitch = this.awayPlayersOnPitch.filter(p => p.id !== committingPlayer.id);
          this.away2D = this.away2D.filter(p => p.player?.id !== committingPlayer.id);
        }
        this._syncMetersTo2D();
        this.triggerAlert("ROJA DIRECTA", `🟥 ¡ROJA DIRECTA para ${committingPlayer.name} (${foulTeamObj.shortName})!`, foulTeam, 4000);
        this.events.push({
          minute: this.minute,
          type: "RED_CARD",
          team: foulTeam,
          teamName: foulTeamObj.shortName,
          player: committingPlayer.name,
          playerId: committingPlayer.id,
          reason: "Roja directa"
        });
        this.onCard({ type: "RED", player: committingPlayer, teamSide: foulTeam, minute: this.minute });
      } else if (isYellow && committingPlayer) {
        if (this.matchCards.yellows[committingPlayer.id]) {
          this.adjustPlayerRating(committingPlayer, -1.2);
          this.stats.yellowCards[foulTeam]++;
          this.stats.redCards[foulTeam]++;
          this.matchCards.reds[committingPlayer.id] = { player: committingPlayer, reason: "Segunda amarilla", minute: this.minute, team: foulTeam };
          if (foulTeam === "home") {
            this.homePlayersOnPitch = this.homePlayersOnPitch.filter(p => p.id !== committingPlayer.id);
            this.home2D = this.home2D.filter(p => p.player?.id !== committingPlayer.id);
          } else {
            this.awayPlayersOnPitch = this.awayPlayersOnPitch.filter(p => p.id !== committingPlayer.id);
            this.away2D = this.away2D.filter(p => p.player?.id !== committingPlayer.id);
          }
          this._syncMetersTo2D();
          this.triggerAlert("EXPULSIÓN", `🟥 ¡Segunda amarilla y EXPULSIÓN para ${committingPlayer.name} (${foulTeamObj.shortName})!`, foulTeam, 4000);
          this.events.push({
            minute: this.minute,
            type: "RED_CARD",
            team: foulTeam,
            teamName: foulTeamObj.shortName,
            player: committingPlayer.name,
            playerId: committingPlayer.id,
            reason: "Segunda amarilla"
          });
          this.onCard({ type: "SECOND_YELLOW", player: committingPlayer, teamSide: foulTeam, minute: this.minute });
        } else {
          this.adjustPlayerRating(committingPlayer, -0.4);
          this.stats.yellowCards[foulTeam]++;
          this.matchCards.yellows[committingPlayer.id] = { player: committingPlayer, minute: this.minute, team: foulTeam };
          this.triggerAlert("TARJETA", `🟨 Tarjeta amarilla para ${committingPlayer.name} (${foulTeamObj.shortName})`, foulTeam, 2800);
          this.events.push({
            minute: this.minute,
            type: "YELLOW_CARD",
            team: foulTeam,
            teamName: foulTeamObj.shortName,
            player: committingPlayer.name,
            playerId: committingPlayer.id
          });
          this.onCard({ type: "YELLOW", player: committingPlayer, teamSide: foulTeam, minute: this.minute });
        }
      }

      // Riesgo de lesión por entrada dura
      const foulTeamMentality = foulTeam === "home" ? this.homeMentality : this.awayMentality;
      const aggMod = (foulTeamMentality === "very_offensive" || foulTeamMentality === "offensive") ? 1.4 : 1.0;
      const injuryFoulChance = (isYellow ? 0.075 : 0.018) * aggMod;
      let foulInjuryPaused = false;
      if (Math.random() < injuryFoulChance) {
        const victimPitch = victimTeam === "home" ? this.homePlayersOnPitch : this.awayPlayersOnPitch;
        const eligible = victimPitch.filter(p => !p.injury);
        if (eligible.length > 0) {
          const victim = eligible[Math.floor(Math.random() * eligible.length)];
          foulInjuryPaused = this.triggerPlayerInjury(victim, victimTeam, "foul");
        }
      }

      if (foulInjuryPaused && !this.isSkippingToEnd) {
        this._syncMetersTo2D();
        return true;
      }

      // Si la falta ocurre en zona peligrosa o dentro del área:
      // - Dentro del área rival (|X| > 36 y |Z| < 20.16) -> PENALTI
      // - Fuera del área en campo rival -> FALTA DIRECTA
      if (!this.isHighlightRunning && !this.isSetPieceRunning && (this.minute - this.lastHighlightMinute >= 2)) {
        const bxCentered = (this.ball.xm ?? 52.5) - 52.5;
        const bzCentered = (this.ball.ym ?? 34.0) - 34.0;
        const isVictimHome = victimTeam === "home";
        const inRivalBox = isVictimHome
          ? (bxCentered > 36.0 && Math.abs(bzCentered) < 20.16)
          : (bxCentered < -36.0 && Math.abs(bzCentered) < 20.16);

        if (inRivalBox) {
          this.lastHighlightMinute = this.minute;
          if (this.triggerSetPiece(victimTeam, "PENALTY")) {
            return true;
          }
        } else if (Math.random() < 0.28) {
          this.lastHighlightMinute = this.minute;
          if (this.triggerSetPiece(victimTeam, "FREE_KICK")) {
            return true;
          }
        }
      }
    }

    // Lance fortuito aislado del juego
    if (Math.random() < 0.0006) {
      const side = Math.random() > 0.5 ? "home" : "away";
      const pitch = side === "home" ? this.homePlayersOnPitch : this.awayPlayersOnPitch;
      const eligible = pitch.filter(p => !p.injury);
      if (eligible.length > 0) {
        const victim = eligible[Math.floor(Math.random() * eligible.length)];
        if (this.triggerPlayerInjury(victim, side, "random") && !this.isSkippingToEnd) {
          this._syncMetersTo2D();
          return true;
        }
      }
    }

    // Comprobar y realizar posibles cambios tácticos de la IA rival
    if (this.checkAISubstitutions() && !this.isSkippingToEnd) {
      this._syncMetersTo2D();
      return true;
    }

    this._syncMetersTo2D();
    return false;
  }

  // =========================================================================================
  // 2. BUFFER DE GRABACIÓN Y REPRODUCCIÓN 3D (replayBuffer - 15 SEGUNDOS A 20 TICKS/SEGUNDO)
  // =========================================================================================
  _setTickCommentary(text, badge = "MATCH ENGINE") {
    if (!text) return;
    this._currentTickCommentary = { text, badge };
    if (!this._recordingReplayOnly && !this._tactical2DOnly) {
      this._emitCommentary(text, badge, 1.4);
    }
  }

  _recordReplayFrame(eventTag = null) {
    const snapTeam = (arr) => arr.map(item => ({
      id: item.player?.id,
      xm: item.xm ?? 52.5,
      ym: item.ym ?? 34.0,
      vx: item.vx ?? 0,
      vy: item.vy ?? 0,
      facing: item.facing ?? 0,
      pose: item.pose || "idle",
      aiState: item.aiState || "POSITIONING"
    }));

    const frame = {
      minute: this.minute,
      second: this.matchSecond || 0,
      eventTag,
      commentary: this._currentTickCommentary || null,
      ball: {
        xm: this.ball.xm ?? 52.5,
        ym: this.ball.ym ?? 34.0,
        zm: this.ball.zm ?? 0,
        vx: this.ball.vx ?? 0,
        vy: this.ball.vy ?? 0,
        vz: this.ball.vz ?? 0,
        possession: this.ball.possession,
        carrierId: this.ball.carrier?.player?.id || null
      },
      home: snapTeam(this.home2D),
      away: snapTeam(this.away2D)
    };

    this._currentTickCommentary = null;
    this.replayBuffer.push(frame);
    if (this.replayBuffer.length > this.maxReplayBufferFrames) {
      this.replayBuffer.shift();
    }
    return frame;
  }

  // Avanza el motor autónomo a 20 ticks/segundo durante FAST_SIM grabando en replayBuffer.
  // Si emerge una ocasión clara de gol, falta peligrosa, penalti o córner, pausa FAST_SIM
  // y lanza la reproducción de los últimos 12-15 segundos reales del buffer en 3D.
  _runAutonomousMinuteTicks(currentPoss, homeAttackScore, awayAttackScore) {
    const dt = 0.05; // 20 ticks por segundo (50ms físicos por tick)
    const ticksPerSimStep = 90; // 4,5 segundos continuos de simulación por pulso (90 ticks a 20 Hz)

    // NO reasignar this.ball.carrier por sorteo de posesión en cada minuto si el balón ya está en juego o en posesión de un equipo;
    // solo inicializar en el saque inicial si aún no se ha puesto el balón en movimiento.
    const ballInPlayOrPossession = Boolean(
      this.ball.carrier ||
      this.ball.passTarget ||
      this.ball.shotTeam ||
      this.ball.lastTouchPlayer ||
      Math.hypot(this.ball.vx || 0, this.ball.vy || 0) > 0.25
    );
    if (!ballInPlayOrPossession) {
      const initSide = this.ball.possession || currentPoss || "home";
      const teamArr = initSide === "home" ? this.home2D : this.away2D;
      const fielders = teamArr.filter(p => !p.isKeeper);
      if (fielders.length > 0) {
        fielders.sort((a, b) => Math.hypot(a.xm - this.ball.xm, a.ym - this.ball.ym) - Math.hypot(b.xm - this.ball.xm, b.ym - this.ball.ym));
        this.ball.carrier = fielders[0];
        this.ball.possession = initSide;
        this.ball.lastTouchTeam = initSide;
        this.ball.lastTouchPlayer = fielders[0];
      }
    }

    this._liveAtkMomentum = {
      home: homeAttackScore,
      away: awayAttackScore,
      preferredPoss: currentPoss
    };

    this._recordingReplayOnly = true;
    this._pendingTickOutcome = null;

    // Asegurar que el replayBuffer acumule al menos 150 frames (7.5 segundos reales, dentro del rango 120-180 frames = 6 a 9s)
    // de elaboración de la jugada previos a cualquier disparo/ocasión para que en el 3D se vea toda la construcción táctica.
    const minBuildupFramesBeforeClimax = 150;

    let triggeredOutcome = null;
    for (let t = 0; t < ticksPerSimStep; t++) {
      this.stepRealTimePhysics(dt);
      this._recordReplayFrame();

      if (this._pendingTickOutcome) {
        if (this.replayBuffer.length >= minBuildupFramesBeforeClimax) {
          triggeredOutcome = this._pendingTickOutcome;
          this._pendingTickOutcome = null;
          break;
        } else {
          // Si aún no hay al menos 120-180 frames de elaboración grabados en el buffer, seguir acumulando elaboración
          this._pendingTickOutcome = null;
        }
      }
    }

    this._recordingReplayOnly = false;

    if (!triggeredOutcome) {
      return false;
    }

    // Cooldown mínimo entre jugadas reproducidas para mantener ritmo televisivo (6-10 jugadas por parte)
    if (triggeredOutcome.outcome !== "GOAL" && triggeredOutcome.outcome !== "PENALTY" && (this.minute - this.lastHighlightMinute < 3)) {
      return false;
    }
    this.lastHighlightMinute = this.minute;

    // Si la jugada emergente desembocó en PENALTI o FALTA DIRECTA en zona peligrosa:
    if (triggeredOutcome.outcome === "PENALTY") {
      if (this.triggerSetPiece(triggeredOutcome.attackingSide, "PENALTY")) {
        return true;
      }
      return false;
    }
    if (triggeredOutcome.outcome === "FREE_KICK") {
      if (this.triggerSetPiece(triggeredOutcome.attackingSide, "FREE_KICK", triggeredOutcome.spot)) {
        return true;
      }
      return false;
    }

    // Grabar 34 ticks adicionales (1.7 segundos) de continuación física tras el impacto/desenlace
    // (celebración, balón entrando en la red, despeje del portero o salida por línea de fondo)
    const climaxFrameIndex = Math.max(0, this.replayBuffer.length - 1);
    for (let f = 0; f < 34; f++) {
      this._stepFollowThroughTick(dt, triggeredOutcome);
      this._recordReplayFrame("FOLLOW_THROUGH");
    }

    // Extraer los últimos 12-15 segundos (hasta 280 frames a 20 Hz = 14s) para reproducir en el visor 3D
    const takeFrames = Math.min(this.replayBuffer.length, 280);
    const startIdx = Math.max(0, this.replayBuffer.length - takeFrames);
    const playbackFrames = this.replayBuffer.slice(startIdx);
    const relativeClimaxIdx = Math.max(0, climaxFrameIndex - startIdx);

    this.startReplayHighlight(playbackFrames, relativeClimaxIdx, triggeredOutcome, () => {
      if (this.minute >= this.halfTimeMinute && !this.halfTimeTriggered && !this.isSecondHalf) {
        this.halfTimeTriggered = true;
        this.isHalfTime = true;
        this.pause();
        this.onHalfTime(this.getState());
        return;
      }
      if (this.pauseRequested) {
        this.pauseRequested = false;
        this.pause();
        this.triggerAlert("PAUSA", "⏸ Partido en pausa", "neutral", 2500);
        return;
      }
      if (this.isRunning && !this.isFinished) {
        this.loop();
      }
    });

    return true;
  }

  // Avanza la inercia física posterior al remate (balón en la red, rechace o salida de fondo)
  _stepFollowThroughTick(dt, outcomeInfo) {
    this.ball.xm += (this.ball.vx || 0) * dt;
    this.ball.ym += (this.ball.vy || 0) * dt;
    this.ball.zm = Math.max(0, (this.ball.zm || 0) + (this.ball.vz || 0) * dt);
    if (this.ball.zm > 0) {
      this.ball.vz = (this.ball.vz || 0) - 9.81 * dt;
    } else {
      this.ball.vz = 0;
      this.ball.vx = (this.ball.vx || 0) * 0.88;
      this.ball.vy = (this.ball.vy || 0) * 0.88;
    }

    if (outcomeInfo.outcome === "GOAL") {
      // Frenado contra la red de la portería (profundidad 2.2m detrás de la línea de gol)
      if (this.ball.xm > 107.0) { this.ball.xm = 107.0; this.ball.vx = 0; this.ball.vy *= 0.5; }
      if (this.ball.xm < -2.0) { this.ball.xm = -2.0; this.ball.vx = 0; this.ball.vy *= 0.5; }
      this.ball.ym = Math.max(30.4, Math.min(37.6, this.ball.ym));
    } else {
      this.ball.xm = Math.max(-3.5, Math.min(108.5, this.ball.xm));
      this.ball.ym = Math.max(-2.5, Math.min(70.5, this.ball.ym));
    }

    // Los jugadores desaceleran suavemente siguiendo la acción
    const stepTeamFollow = (arr) => {
      for (const p of arr) {
        p.vx = (p.vx || 0) * 0.90;
        p.vy = (p.vy || 0) * 0.90;
        p.xm = Math.max(1, Math.min(104, (p.xm || 52.5) + p.vx * dt));
        p.ym = Math.max(1, Math.min(67, (p.ym || 34.0) + p.vy * dt));
        if (outcomeInfo.shooter && p.player?.id === outcomeInfo.shooter.id && outcomeInfo.outcome === "GOAL") {
          p.pose = "celebrate";
        } else {
          p.pose = Math.hypot(p.vx, p.vy) > 1.2 ? "run" : "idle";
        }
      }
    };
    stepTeamFollow(this.home2D);
    stepTeamFollow(this.away2D);
  }

  // Inicia la reproducción en el visor 3D a velocidad 1x de los frames grabados en replayBuffer
  startReplayHighlight(frames, climaxFrameIndex, outcomeInfo, onComplete) {
    if (!frames || frames.length === 0) {
      if (onComplete) onComplete();
      return;
    }

    this.isHighlightRunning = true;
    this.speed = 1;

    const attackingSide = outcomeInfo.attackingSide || "home";
    const isHome = attackingSide === "home";
    const atkTeam = isHome ? this.homeTeam : this.awayTeam;
    const defTeam = isHome ? this.awayTeam : this.homeTeam;
    const shooter = outcomeInfo.shooter || (isHome ? this.homePlayersOnPitch[9] : this.awayPlayersOnPitch[9]) || this.homePlayersOnPitch[0];
    const passer = outcomeInfo.passer || null;
    const defender = outcomeInfo.defender || (isHome ? this.awayPlayersOnPitch[3] : this.homePlayersOnPitch[3]) || this.awayPlayersOnPitch[0];
    const goalkeeper = outcomeInfo.goalkeeper || (isHome ? this.awayPlayersOnPitch[0] : this.homePlayersOnPitch[0]);
    const outcome = outcomeInfo.outcome || "WIDE";

    const firstLiveCommentFrame = frames.find(f => f.commentary && f.commentary.text);
    const buildNote = firstLiveCommentFrame
      ? firstLiveCommentFrame.commentary.text
      : (outcomeInfo.buildNote || `⚡ ${atkTeam.shortName} mueve el balón buscando espacios ante el bloque de ${defTeam.shortName}.`);
    const shotNote = outcomeInfo.shotNote || `🎯 ¡${shooter?.name || "El atacante"} finaliza la jugada ante ${goalkeeper?.name || "el portero"}!`;

    this.activeReplay = {
      frames,
      cursor: 0,
      lastCommentFrameIdx: -1,
      tickRate: 20, // 20 ticks por segundo (velocidad 1x real)
      climaxFrameIndex,
      climaxCommitted: false,
      outcomeInfo: {
        ...outcomeInfo,
        attackingSide,
        atkTeam,
        defTeam,
        shooter,
        passer,
        defender,
        goalkeeper,
        outcome,
        buildNote,
        shotNote
      },
      onComplete
    };

    // Reloj de partido en tiempo real (1s real = 1s de partido) durante la reproducción
    if (this.highlightInterval) {
      clearInterval(this.highlightInterval);
      this.highlightInterval = null;
    }
    this.highlightInterval = setInterval(() => {
      if (!this.isRunning || (!this.isHighlightRunning && !this.isSetPieceRunning)) {
        return;
      }
      this.matchSecond = (this.matchSecond || 0) + 1;
      if (this.matchSecond >= 60) {
        this.matchSecond = 0;
        this.minute++;
      }
      if (this.onTick) this.onTick(this.getState());
    }, 1000);

    // Colocar el estado inicial del frame 0 del buffer
    this._applyInterpolatedReplayFrame(0);

    const baseHighlightData = {
      type: outcomeInfo.isSetPiece ? "SET_PIECE_REPLAY" : "KEY_CHANCE",
      playPattern: outcomeInfo.playPattern || "AUTONOMOUS_AGENT_PLAY",
      situationalContext: outcomeInfo.situationalContext || "OPEN_PLAY",
      attackingSide,
      atkTeam,
      defTeam,
      shooter,
      passer,
      defender,
      goalkeeper,
      outcome,
      commentary: buildNote,
      minute: this.minute,
      totalDuration: Math.round((frames.length / 20) * 1000)
    };

    if (this.onHighlightStart) {
      this.onHighlightStart({
        ...baseHighlightData,
        phase: "BUILDUP",
        phaseLabel: outcomeInfo.headline || "JUGADA EN DIRECTO",
        phaseDuration: Math.round((frames.length / 20) * 1000),
        tacticalNote: buildNote
      });
    }

    // Permitir saltar la reproducción inmediatamente
    this.skipCurrentHighlight = () => {
      if (!this.activeReplay) return;
      this.finishActiveReplay(true);
    };

    if (this.isSkippingToEnd || !this.showKeyHighlights) {
      this.finishActiveReplay(true);
    }
  }

  // Interpola con spline cúbica Catmull-Rom entre ticks de replayBuffer (20 Hz -> 60 FPS C1 continuos en 3D)
  _applyInterpolatedReplayFrame(cursor) {
    if (!this.activeReplay || !this.activeReplay.frames.length) return;
    const frames = this.activeReplay.frames;
    const maxIdx = frames.length - 1;
    const idxA = Math.max(0, Math.min(maxIdx, Math.floor(cursor)));
    const idxB = Math.min(maxIdx, idxA + 1);
    const idx0 = Math.max(0, idxA - 1);
    const idx3 = Math.min(maxIdx, idxB + 1);
    const alpha = Math.max(0, Math.min(1, cursor - idxA));

    const f0 = frames[idx0];
    const fA = frames[idxA];
    const fB = frames[idxB];
    const f3 = frames[idx3];

    const cSpline = (p0, p1, p2, p3, t) => {
      const v0 = (p2 - p0) * 0.5;
      const v1 = (p3 - p1) * 0.5;
      const t2 = t * t;
      const t3 = t2 * t;
      return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
    };

    // Interpolar balón con curva cúbica continua
    this.ball.xm = cSpline(f0.ball.xm, fA.ball.xm, fB.ball.xm, f3.ball.xm, alpha);
    this.ball.ym = cSpline(f0.ball.ym, fA.ball.ym, fB.ball.ym, f3.ball.ym, alpha);
    this.ball.zm = Math.max(0, cSpline(f0.ball.zm, fA.ball.zm, fB.ball.zm, f3.ball.zm, alpha));
    this.ball.vx = fA.ball.vx + (fB.ball.vx - fA.ball.vx) * alpha;
    this.ball.vy = fA.ball.vy + (fB.ball.vy - fA.ball.vy) * alpha;
    this.ball.vz = fA.ball.vz + (fB.ball.vz - fA.ball.vz) * alpha;
    this.ball.possession = fB.ball.possession;

    const applyTeam = (targetArr, snap0, snapA, snapB, snap3) => {
      for (let i = 0; i < targetArr.length; i++) {
        const item = targetArr[i];
        const sA = snapA.find(s => s.id === item.player?.id) || snapA[i];
        const sB = snapB.find(s => s.id === item.player?.id) || snapB[i];
        if (!sA || !sB) continue;
        const s0 = snap0.find(s => s.id === item.player?.id) || snap0[i] || sA;
        const s3 = snap3.find(s => s.id === item.player?.id) || snap3[i] || sB;

        item.xm = cSpline(s0.xm, sA.xm, sB.xm, s3.xm, alpha);
        item.ym = cSpline(s0.ym, sA.ym, sB.ym, s3.ym, alpha);
        item.vx = sA.vx + (sB.vx - sA.vx) * alpha;
        item.vy = sA.vy + (sB.vy - sA.vy) * alpha;

        // Interpolar ángulo de orientación suavemente
        let dAngle = (sB.facing ?? 0) - (sA.facing ?? 0);
        while (dAngle > Math.PI) dAngle -= Math.PI * 2;
        while (dAngle < -Math.PI) dAngle += Math.PI * 2;
        item.facing = (sA.facing ?? 0) + dAngle * alpha;
        item.pose = alpha < 0.5 ? sA.pose : sB.pose;
        item.aiState = sB.aiState;
      }
    };

    applyTeam(this.home2D, f0.home, fA.home, fB.home, f3.home);
    applyTeam(this.away2D, f0.away, fA.away, fB.away, f3.away);

    const all2D = [...this.home2D, ...this.away2D];
    this.ball.carrier = fB.ball.carrierId ? (all2D.find(p => p.player?.id === fB.ball.carrierId) || null) : null;

    this._syncMetersTo2D();
  }

  // Llamado en cada frame de requestAnimationFrame (60 FPS) desde el visor 3D
  stepReplayPlayback(dtSeconds) {
    if (!this.activeReplay) return false;
    if (!this.isRunning && !this.isHighlightRunning && !this.isSetPieceRunning) return false;

    const rep = this.activeReplay;
    rep.cursor += dtSeconds * rep.tickRate;

    this._applyInterpolatedReplayFrame(rep.cursor);

    // Espejo de narración en tiempo real: emitir exactamente el comentario nacido en cada tick físico alcanzado
    const currIdx = Math.min(rep.frames.length - 1, Math.floor(rep.cursor));
    if (currIdx > rep.lastCommentFrameIdx) {
      for (let k = rep.lastCommentFrameIdx + 1; k <= currIdx; k++) {
        const f = rep.frames[k];
        if (f && f.commentary && f.commentary.text) {
          if (this.onCommentary) {
            this.onCommentary(f.commentary.text, f.commentary.badge || "EN VIVO");
          }
          if (this.onHighlightPhase) {
            this.onHighlightPhase({
              phase: f.eventTag || "LIVE",
              phaseLabel: f.commentary.badge || "EN VIVO",
              tacticalNote: f.commentary.text,
              commentary: f.commentary.text
            });
          }
        }
      }
      rep.lastCommentFrameIdx = currIdx;
    }

    // Cuando el cursor alcanza el tick exacto del impacto/gol, aplicamos el resultado al marcador y alertas
    if (!rep.climaxCommitted && rep.cursor >= rep.climaxFrameIndex) {
      rep.climaxCommitted = true;
      this._commitReplayClimax(rep.outcomeInfo, false);
    }

    if (rep.cursor >= rep.frames.length - 1) {
      this.finishActiveReplay(false);
      return false;
    }
    return true;
  }

  // Registra las estadísticas y goles en el instante exacto en que ocurren físicamente en el replay 3D
  _commitReplayClimax(info, isSkip = false) {
    const { attackingSide, atkTeam, defTeam, shooter, passer, defender, goalkeeper, outcome } = info;
    const isHome = attackingSide === "home";
    const defPlayers = isHome ? this.awayPlayersOnPitch : this.homePlayersOnPitch;

    this.stats.shots[attackingSide]++;
    if (shooter) shooter.matchShots = (shooter.matchShots || 0) + 1;
    if (passer && passer.id !== shooter?.id) {
      passer.matchKeyPasses = (passer.matchKeyPasses || 0) + 1;
      this.adjustPlayerRating(passer, 0.15);
    }

    if (outcome === "BLOCK") {
      if (defender) {
        defender.matchTackles = (defender.matchTackles || 0) + 1;
        this.adjustPlayerRating(defender, 0.35);
      }
      this.triggerAlert("BLOQUEO", `🛡️ ¡Bloqueo defensivo de ${defender?.name || "la defensa"}!`, isHome ? "away" : "home", isSkip ? 1800 : 2800);
    } else if (outcome === "POST") {
      if (shooter) this.adjustPlayerRating(shooter, 0.2);
      this.triggerAlert("AL PALO", `🥅 ¡Al palo! El disparo de ${shooter?.name || "el atacante"} se estrella en la madera`, attackingSide, isSkip ? 1800 : 2800);
    } else if (outcome === "WIDE") {
      if (shooter) this.adjustPlayerRating(shooter, -0.08);
      this.triggerAlert("DISPARO FUERA", `💨 Disparo desviado de ${shooter?.name || "el atacante"}`, attackingSide, isSkip ? 1600 : 2600);
    } else if (outcome === "SAVE") {
      this.stats.shotsOnTarget[attackingSide]++;
      if (shooter) this.adjustPlayerRating(shooter, 0.15);
      if (goalkeeper) {
        goalkeeper.matchSaves = (goalkeeper.matchSaves || 0) + 1;
        this.adjustPlayerRating(goalkeeper, 0.45);
      }
      this.triggerAlert("PARADÓN", `🧤 ¡Intervención salvadora de ${goalkeeper?.name || "el portero"} ante ${shooter?.name || "el rematador"}!`, isHome ? "away" : "home", isSkip ? 2000 : 3000);
    } else if (outcome === "GOAL") {
      this.stats.shotsOnTarget[attackingSide]++;
      if (isHome) this.homeScore++;
      else this.awayScore++;

      if (shooter) {
        shooter.goals = (shooter.goals || 0) + 1;
        shooter.matchGoals = (shooter.matchGoals || 0) + 1;
        this.adjustPlayerRating(shooter, 1.15);
      }
      if (passer && passer.id !== shooter?.id) {
        passer.assists = (passer.assists || 0) + 1;
        passer.matchAssists = (passer.matchAssists || 0) + 1;
        this.adjustPlayerRating(passer, 0.65);
      }
      if (goalkeeper) this.adjustPlayerRating(goalkeeper, -0.25);
      defPlayers.filter(p => ["DFC", "LD", "LI", "MCD"].includes(p.pos)).forEach(d => this.adjustPlayerRating(d, -0.15));

      this.events.push({
        type: "GOAL",
        minute: this.minute,
        teamSide: attackingSide,
        teamId: atkTeam.id,
        teamName: atkTeam.shortName,
        playerName: shooter?.name || "Goleador",
        assisterName: (passer && passer.id !== shooter?.id) ? passer.name : null,
        currentScore: `${this.homeScore} - ${this.awayScore}`,
        isSetPiece: Boolean(info.isSetPiece),
        setPieceType: info.setPieceType || null
      });

      if (!this.isSkippingToEnd) {
        this.triggerAlert("GOL", `⚽ ¡GOOOOOOL DE ${(shooter?.name || atkTeam.shortName).toUpperCase()}! (${this.homeScore}-${this.awayScore})`, attackingSide, isSkip ? 2400 : 4200);
        if (this.onTick) this.onTick(this.getState());
      }
    }
  }

  finishActiveReplay(isSkip = false) {
    if (!this.activeReplay) return;
    const rep = this.activeReplay;
    this.activeReplay = null;

    if (!rep.climaxCommitted) {
      rep.climaxCommitted = true;
      const lastIdx = rep.frames.length - 1;
      if (lastIdx >= 0) {
        const lastF = rep.frames[lastIdx];
        this.ball.xm = lastF.ball.xm;
        this.ball.ym = lastF.ball.ym;
        this.ball.zm = lastF.ball.zm;
      }
      this._commitReplayClimax(rep.outcomeInfo, true);
    }

    const { outcome, attackingSide, atkTeam, defTeam, shooter, passer, defender, goalkeeper, shotNote, saveBecomesCorner } = rep.outcomeInfo;
    const isHome = attackingSide === "home";
    const onComplete = rep.onComplete;

    if (outcome === "GOAL") {
      this.resetKickoff(isHome ? "away" : "home");
      if (this.highlightInterval) {
        clearInterval(this.highlightInterval);
        this.highlightInterval = null;
      }
      this.isHighlightRunning = false;
      this.isSetPieceRunning = false;
      this.activeSetPiece = null;
      this.speed = this.userSpeed;
      this.skipCurrentHighlight = null;

      if (!this.isSkippingToEnd && this.onHighlightEnd) {
        this.onHighlightEnd({
          outcome: "GOAL",
          tacticalAnalysis: shotNote,
          attackingSide,
          shooter,
          passer,
          defender,
          goalkeeper
        });
      }

      if (!this.isSkippingToEnd && this.hasCustomOnGoal) {
        this.onGoal({
          shooter,
          passer,
          attackingSide,
          concedingSide: isHome ? "away" : "home",
          atkTeam,
          defTeam,
          minute: this.minute,
          formattedMinute: this.getFormattedMinute(),
          score: `${this.homeScore} - ${this.awayScore}`,
          isSkipped: isSkip
        });
      } else if (onComplete) {
        onComplete();
      }
      return;
    }

    // Si una parada desvió el balón por línea de fondo a córner:
    this.concludeHighlight({
      outcome,
      tacticalAnalysis: shotNote,
      onComplete: () => {
        if (outcome === "SAVE" && saveBecomesCorner && !this.isFinished && !this.isHalfTime && this.showKeyHighlights && !isSkip && !this.isSkippingToEnd) {
          const startedSP = this.triggerSetPiece(attackingSide, "CORNER", null, onComplete);
          if (!startedSP && onComplete) onComplete();
        } else if (onComplete) {
          onComplete();
        }
      }
    });
  }

  concludeHighlight({ outcome, tacticalAnalysis, onComplete }) {
    if (this.highlightInterval) {
      clearInterval(this.highlightInterval);
      this.highlightInterval = null;
    }
    this.isHighlightRunning = false;
    this.isSetPieceRunning = false;
    this.activeSetPiece = null;
    this.activeReplay = null;
    this.speed = this.userSpeed;
    this.skipCurrentHighlight = null;
    this.crowdRoarUnlockedByHighlight = true;
    if (this.highlightTimeouts && this.highlightTimeouts.length > 0) {
      this.highlightTimeouts.forEach(clearTimeout);
      this.highlightTimeouts = [];
    }

    this._syncMetersTo2D();
    if (this.onHighlightEnd) {
      this.onHighlightEnd({
        outcome,
        tacticalAnalysis,
        pauseRequested: this.pauseRequested
      });
    }

    if (this.minute >= this.halfTimeMinute && !this.halfTimeTriggered && !this.isSecondHalf) {
      this.halfTimeTriggered = true;
      this.isHalfTime = true;
      this.pause();
      this.triggerAlert("DESCANSO", "📣 ¡Final de la 1ª Parte! Descanso", "neutral", 3200);
      this.onHalfTime(this.getState());
      return;
    }

    if (this.minute >= this.maxMinutes) {
      this.finish();
      return;
    }

    if (onComplete) onComplete();
  }

  // =========================================================================================
  // 3. GEOMETRÍA VECTORIAL ESTRICTA DE BALÓN PARADO (FALTAS, PENALTIS Y CÓRNERS FIFA)
  // =========================================================================================
  // Genera un punto de falta directa SIEMPRE ESTRICTAMENTE FUERA del área de penalti (|X| > 36 y |Z| < 20.16 es penalti)
  generateFreeKickSpot(attackingSide) {
    const isHome = attackingSide === "home";

    // Coordenadas centradas FIFA: X en [-52.5, 52.5], Z en [-34, 34]
    // Área rival: |X| >= 36.0 y |Z| <= 20.16
    const isLateral = Math.random() < 0.28;
    let cx, cz;
    if (isLateral) {
      // Falta lateral fuera del área (|Z| entre 21.5m y 30.5m, |X| entre 28m y 45m)
      const absX = 28.0 + Math.random() * 16.0;
      cx = isHome ? absX : -absX;
      const absZ = 21.5 + Math.random() * 8.5;
      cz = Math.random() < 0.5 ? -absZ : absZ;
    } else {
      // Falta frontal o semifrontal fuera de la frontal del área (|X| entre 24.5m y 34.5m, distancia a portería 18m-28m)
      const absX = 24.5 + Math.random() * 9.8; // Máximo 34.3m (< 36.0m del área)
      cx = isHome ? absX : -absX;
      cz = (Math.random() * 2 - 1) * 17.5;
    }

    // Guardia matemática estricta: prohibido caer dentro del área de penalti (|X| >= 35.5 y |Z| <= 20.5)
    if (Math.abs(cx) >= 35.5 && Math.abs(cz) <= 20.5) {
      cx = isHome ? 34.2 : -34.2;
    }

    const xm = cx + 52.5;
    const ym = cz + 34.0;
    const spotX = (xm / 105) * 100;
    const spotY = (ym / 68) * 100;

    const goalX = isHome ? 52.5 : -52.5;
    const distanceMeters = Math.round(Math.hypot(goalX - cx, 0 - cz));

    return { spot: { x: spotX, y: spotY, xm, ym, cx, cz }, distanceMeters };
  }

  // Activar jugada a balón parado (CORNER, FREE_KICK o PENALTY) con geometría vectorial FIFA
  triggerSetPiece(attackingSide, type = "CORNER", customSpotData = null, postSetPieceCallback = null) {
    if (this.isFinished || this.isHalfTime || this.isHighlightRunning || this.isSetPieceRunning) return false;

    const isHome = attackingSide === "home";
    const atkTeam = isHome ? this.homeTeam : this.awayTeam;
    const defTeam = isHome ? this.awayTeam : this.homeTeam;
    const atkPlayers = isHome ? this.homePlayersOnPitch : this.awayPlayersOnPitch;
    const defPlayers = isHome ? this.awayPlayersOnPitch : this.homePlayersOnPitch;

    let actualType = type;
    let spotX, spotY, xm, ym, distanceMeters = 11;

    if (actualType === "CORNER") {
      // Córner exacto en la esquina (X = ±52.5, Z = ±34)
      const cx = isHome ? 52.5 : -52.5;
      const cz = Math.random() < 0.5 ? -34.0 : 34.0;
      xm = cx + 52.5;
      ym = cz + 34.0;
      spotX = (xm / 105) * 100;
      spotY = (ym / 68) * 100;
      distanceMeters = 34;
    } else if (actualType === "PENALTY") {
      // Penalti exacto en el punto fatídico (X = ±41.5, Z = 0)
      const cx = isHome ? 41.5 : -41.5;
      const cz = 0;
      xm = cx + 52.5;
      ym = cz + 34.0;
      spotX = (xm / 105) * 100;
      spotY = (ym / 68) * 100;
      distanceMeters = 11;
    } else {
      const fkData = customSpotData || this.generateFreeKickSpot(attackingSide);
      spotX = fkData.spot.x;
      spotY = fkData.spot.y;
      xm = fkData.spot.xm ?? (spotX * 1.05);
      ym = fkData.spot.ym ?? (spotY * 0.68);
      const cx = xm - 52.5;
      const cz = ym - 34.0;

      // Si por cualquier motivo las coordenadas entrantes están dentro del área rival (|X| > 36 y |Z| < 20.16), es PENALTI
      const insideRivalBox = isHome
        ? (cx > 36.0 && Math.abs(cz) < 20.16)
        : (cx < -36.0 && Math.abs(cz) < 20.16);

      if (insideRivalBox) {
        actualType = "PENALTY";
        const penCx = isHome ? 41.5 : -41.5;
        xm = penCx + 52.5;
        ym = 34.0;
        spotX = (xm / 105) * 100;
        spotY = 50;
        distanceMeters = 11;
      } else {
        const goalCx = isHome ? 52.5 : -52.5;
        distanceMeters = fkData.distanceMeters || Math.round(Math.hypot(goalCx - cx, 0 - cz));
        if (distanceMeters > 34) {
          this.ball.xm = xm;
          this.ball.ym = ym;
          this.ball.zm = 0;
          this.ball.possession = attackingSide;
          this._syncMetersTo2D();
          if (!this.isSkippingToEnd) {
            this.triggerAlert("FALTA", `⚠️ Falta a ${distanceMeters}m de portería para ${atkTeam.shortName}. Saque en corto.`, attackingSide, 2200);
          }
          return false;
        }
      }
    }

    // Modo simulación instantánea hasta el final
    if (this.isSkippingToEnd) {
      if (actualType === "CORNER") this.stats.corners[attackingSide]++;
      this.stats.shots[attackingSide]++;
      const convChance = actualType === "PENALTY" ? 0.76 : 0.08;
      if (Math.random() < (actualType === "PENALTY" ? 0.88 : 0.35)) {
        this.stats.shotsOnTarget[attackingSide]++;
        if (Math.random() < convChance) {
          const outfield = atkPlayers.filter(p => p.pos !== "POR");
          const scorer = outfield[Math.floor(Math.random() * outfield.length)] || atkPlayers[0];
          if (isHome) this.homeScore++;
          else this.awayScore++;
          if (scorer) {
            scorer.goals = (scorer.goals || 0) + 1;
            this.events.push({
              type: "GOAL",
              minute: this.minute,
              teamSide: attackingSide,
              teamId: atkTeam.id,
              teamName: atkTeam.shortName,
              playerName: scorer.name,
              currentScore: `${this.homeScore} - ${this.awayScore}`
            });
          }
        }
      }
      return false;
    }

    this.isSetPieceRunning = true;

    const cornerSide = spotY < 50 ? "banda izquierda" : "banda derecha";
    const setPieceInfo = {
      type: actualType,
      attackingSide,
      atkTeam,
      defTeam,
      atkPlayers,
      defPlayers,
      spot: { x: spotX, y: spotY, xm, ym },
      distanceMeters,
      cornerSide,
      minute: this.minute
    };

    if (attackingSide === this.userSide && this.hasCustomOnSetPiece && actualType !== "PENALTY") {
      this.pause();
      this.onSetPiece(setPieceInfo);
    } else {
      const aiSetup = this.buildAISetPieceSetup(setPieceInfo);
      this.executeSetPiece(aiSetup, () => {
        if (postSetPieceCallback) {
          postSetPieceCallback();
        }
      });
    }
    return true;
  }

  buildAISetPieceSetup(info) {
    const outfield = info.atkPlayers.filter(p => p.pos !== "POR");
    const sortedKickers = [...outfield].sort((a, b) => ((b.pas || 70) + (b.sho || 70)) - ((a.pas || 70) + (a.sho || 70)));
    const taker = sortedKickers[0] || outfield[0];
    const nonTakers = outfield.filter(p => p.id !== taker.id);

    let targetStrategy = "DIRECT_SHOT";
    if (info.type === "PENALTY") {
      targetStrategy = "DIRECT_SHOT";
    } else if (info.type === "FREE_KICK") {
      if (info.distanceMeters && info.distanceMeters <= 27) {
        targetStrategy = Math.random() < 0.72 ? "DIRECT_SHOT" : "PENALTY_SPOT";
      } else {
        targetStrategy = Math.random() < 0.55 ? "PENALTY_SPOT" : "FAR_POST";
      }
    } else {
      const strategies = ["NEAR_POST", "PENALTY_SPOT", "FAR_POST"];
      targetStrategy = strategies[Math.floor(Math.random() * strategies.length)];
    }

    const zones = ["NEAR_POST", "PENALTY_SPOT", "FAR_POST", "EDGE_BOX", "SHORT_OPTION", "STAY_BACK"];
    const placements = {};
    zones.forEach((z, idx) => {
      if (nonTakers[idx]) placements[z] = nonTakers[idx];
    });

    return {
      type: info.type,
      attackingSide: info.attackingSide,
      spot: info.spot,
      distanceMeters: info.distanceMeters,
      taker,
      targetStrategy,
      placements
    };
  }

  // Posiciona los 22 jugadores y el balón aplicando estrictamente los vectores matemáticos FIFA
  _applyStrictSetPieceGeometry(type, attackingSide, spotXm, spotYm, taker, placements = {}) {
    const isHome = attackingSide === "home";
    const atk2D = isHome ? this.home2D : this.away2D;
    const def2D = isHome ? this.away2D : this.home2D;

    const goalXm = isHome ? 105.0 : 0.0;
    const goalYm = 34.0;

    // Coordenadas FIFA centradas: X = xm - 52.5, Z = ym - 34.0
    let ballCx = spotXm - 52.5;
    let ballCz = spotYm - 34.0;

    if (type === "PENALTY") {
      ballCx = isHome ? 41.5 : -41.5;
      ballCz = 0.0;
    } else if (type === "CORNER") {
      ballCx = isHome ? 52.5 : -52.5;
      ballCz = ballCz < 0 ? -34.0 : 34.0;
    } else {
      // FALTA DIRECTA: estrictamente fuera del área rival (|X| < 35.2 si |Z| < 20.5)
      if (Math.abs(ballCx) >= 35.2 && Math.abs(ballCz) <= 20.5) {
        ballCx = isHome ? 34.0 : -34.0;
      }
    }

    const bXm = ballCx + 52.5;
    const bYm = ballCz + 34.0;

    this.ball.xm = bXm;
    this.ball.ym = bYm;
    this.ball.zm = 0;
    this.ball.vx = 0;
    this.ball.vy = 0;
    this.ball.vz = 0;
    this.ball.carrier = null;
    this.ball.passTarget = null;
    this.ball.shotTeam = null;
    this.ball.possession = attackingSide;

    // Vector unitario desde el balón (ballPos) hacia el centro de la portería rival (goalPos = (±52.5, 0))
    const vecX = goalXm - bXm;
    const vecY = goalYm - bYm;
    const vecLen = Math.hypot(vecX, vecY) || 1;
    const ux = vecX / vecLen;
    const uy = vecY / vecLen;
    // Vector perpendicular a la línea de tiro para alinear los hombros de la barrera
    const perpX = -uy;
    const perpY = ux;

    const placeItem = (item, xm, ym, faceX = goalXm, faceY = goalYm) => {
      if (!item) return;
      item.xm = Math.max(0.4, Math.min(104.6, xm));
      item.ym = Math.max(0.4, Math.min(67.6, ym));
      item.vx = 0;
      item.vy = 0;
      item.pose = "idle";
      item.aiState = "SET_PIECE";
      item.facing = Math.atan2(faceY - item.ym, faceX - item.xm);
    };

    const kickerItem = atk2D.find(p => p.player?.id === taker?.id) || atk2D.find(p => !p.isKeeper) || atk2D[1];
    const atkGk = atk2D.find(p => p.isKeeper) || atk2D[0];
    const defGk = def2D.find(p => p.isKeeper) || def2D[0];
    const otherAtk = atk2D.filter(p => p !== kickerItem && p !== atkGk);
    const otherDef = def2D.filter(p => p !== defGk);

    // Portero atacante en su área
    placeItem(atkGk, isHome ? 6.0 : 99.0, 34.0, bXm, bYm);

    if (type === "PENALTY") {
      // PENALTI REGLAMENTARIO FIFA:
      // 1. Balón en (41.5, 0) -> xm = 94.0 (home) o 11.0 (away), ym = 34.0
      // 2. Portero sobre la línea de gol (52.5, 0) -> xm = 105.0 (home) o 0.0 (away), ym = 34.0
      placeItem(defGk, isHome ? 104.85 : 0.15, 34.0, bXm, bYm);
      // 3. Lanzador a 3m detrás del balón (38.5, 0) -> xm = 91.0 (home) o 14.0 (away), ym = 34.0
      placeItem(kickerItem, isHome ? (bXm - 3.0) : (bXm + 3.0), 34.0, goalXm, goalYm);

      // 4. Los otros 20 jugadores estrictamente fuera del área (|X| < 35.5) y fuera del semicírculo (dist > 9.15m del punto de penalti)
      const edgeLineXm = isHome ? (52.5 + 34.8) : (52.5 - 34.8); // |X| = 34.8 < 35.5
      const zOffsets = [-17.5, -13.0, -9.8, -6.8, 6.8, 9.8, 13.0, 17.5, -21.0];
      otherAtk.forEach((p, idx) => {
        const zOff = zOffsets[idx % zOffsets.length];
        let px = edgeLineXm - (isHome ? (idx % 2) * 1.4 : -(idx % 2) * 1.4);
        let py = 34.0 + zOff;
        // Asegurar distancia > 9.4m al punto de penalti (semicírculo reglamentario)
        const dPen = Math.hypot(px - bXm, py - bYm);
        if (dPen < 9.5) {
          px = isHome ? (bXm - Math.sqrt(Math.max(1, 9.6 * 9.6 - zOff * zOff))) : (bXm + Math.sqrt(Math.max(1, 9.6 * 9.6 - zOff * zOff)));
        }
        placeItem(p, px, py, goalXm, goalYm);
      });
      otherDef.forEach((p, idx) => {
        const zOff = zOffsets[idx % zOffsets.length] + (idx % 2 === 0 ? 1.1 : -1.1);
        let px = edgeLineXm - (isHome ? 0.7 : -0.7);
        let py = 34.0 + zOff;
        const dPen = Math.hypot(px - bXm, py - bYm);
        if (dPen < 9.5) {
          px = isHome ? (bXm - Math.sqrt(Math.max(1, 9.6 * 9.6 - zOff * zOff))) : (bXm + Math.sqrt(Math.max(1, 9.6 * 9.6 - zOff * zOff)));
        }
        placeItem(p, px, py, bXm, bYm);
      });
    } else if (type === "FREE_KICK") {
      // FALTA DIRECTA REGLAMENTARIA FIFA:
      // 1. Lanzador a 1.5m detrás del balón en dirección opuesta a la portería
      placeItem(kickerItem, bXm - ux * 1.5, bYm - uy * 1.5, goalXm, goalYm);

      // 2. Barrera de 4 defensas sobre el vector balón->portería exactamente a 9.15 metros del balón,
      //    alineados perpendicularmente al ángulo de tiro (separación de 0.75m hombro con hombro)
      const wallCenterXm = bXm + ux * 9.15;
      const wallCenterYm = bYm + uy * 9.15;
      const wallDefenders = otherDef.slice(0, 4);
      const boxDefenders = otherDef.slice(4);

      wallDefenders.forEach((dp, idx) => {
        const lateralOffset = (idx - 1.5) * 0.78;
        placeItem(
          dp,
          wallCenterXm + perpX * lateralOffset,
          wallCenterYm + perpY * lateralOffset,
          bXm,
          bYm
        );
      });

      // 3. Portero bajo palos cubriendo el palo lejano a la barrera
      const farPostOffset = ballCz < 0 ? 1.25 : -1.25;
      placeItem(defGk, isHome ? 104.5 : 0.5, 34.0 + farPostOffset, bXm, bYm);

      // 4. Resto de atacantes y defensores en la frontal/área respetando el fuera de juego y distancia
      const lineXm = isHome ? Math.max(wallCenterXm + 2.5, 89.5) : Math.min(wallCenterXm - 2.5, 15.5);
      const atkZones = [
        { xm: lineXm, ym: 26.0 },
        { xm: lineXm + (isHome ? 1.5 : -1.5), ym: 31.0 },
        { xm: lineXm + (isHome ? 1.5 : -1.5), ym: 37.0 },
        { xm: lineXm, ym: 42.0 },
        { xm: isHome ? 82.0 : 23.0, ym: 30.0 },
        { xm: isHome ? 82.0 : 23.0, ym: 38.0 },
        { xm: isHome ? 64.0 : 41.0, ym: 24.0 },
        { xm: isHome ? 64.0 : 41.0, ym: 44.0 },
        { xm: isHome ? 54.0 : 51.0, ym: 34.0 }
      ];
      otherAtk.forEach((ap, idx) => {
        const z = atkZones[idx % atkZones.length];
        placeItem(ap, z.xm, z.ym, goalXm, goalYm);
      });
      boxDefenders.forEach((dp, idx) => {
        const z = atkZones[idx % atkZones.length];
        placeItem(dp, z.xm + (isHome ? 1.6 : -1.6), z.ym + 0.6, bXm, bYm);
      });
    } else {
      // CÓRNER REGLAMENTARIO FIFA:
      // 1. Balón en la esquina exacta (X = ±52.5, Z = ±34 -> xm = 105 o 0, ym = 0 o 68)
      // 2. Lanzador junto al banderín de córner
      const cornerSignX = isHome ? 1 : -1;
      const cornerSignY = ballCz < 0 ? -1 : 1;
      placeItem(
        kickerItem,
        bXm - cornerSignX * 0.9,
        bYm - cornerSignY * 0.9,
        isHome ? 94.0 : 11.0,
        34.0
      );

      // 3. Portero en el área chica
      placeItem(defGk, isHome ? 104.2 : 0.8, 34.0, bXm, bYm);

      // 4. Atacantes y defensas repartidos dentro del área entre el punto de penalti (|X| = 41.5 -> xm = 94 / 11)
      //    y el área pequeña (|X| = 47.0 -> xm = 99.5 / 5.5)
      const boxTargetsCentered = [
        { cx: 46.5, cz: -3.2 }, // Primer palo área pequeña
        { cx: 44.2, cz: 0.0 },  // Corazón del área
        { cx: 41.8, cz: 1.5 },  // Punto de penalti
        { cx: 45.8, cz: 4.2 },  // Segundo palo
        { cx: 42.5, cz: -4.8 }, // Segundo escalón primer palo
        { cx: 35.0, cz: -3.0 }, // Rechace frontal
        { cx: 34.5, cz: 4.5 },  // Rechace frontal 2
        { cx: 12.0, cz: -8.0 }, // Cierre defensivo medio campo
        { cx: 12.0, cz: 8.0 }   // Cierre defensivo medio campo 2
      ];

      otherAtk.forEach((ap, idx) => {
        const t = boxTargetsCentered[idx % boxTargetsCentered.length];
        const txm = 52.5 + (isHome ? t.cx : -t.cx);
        const tym = 34.0 + (ballCz < 0 ? t.cz : -t.cz);
        placeItem(ap, txm, tym, goalXm, goalYm);
      });

      const defTargetsCentered = [
        { cx: 48.0, cz: -3.4 }, // Poste cercano
        { cx: 47.2, cz: -1.5 },
        { cx: 45.0, cz: 0.4 },
        { cx: 42.4, cz: 1.8 },
        { cx: 46.2, cz: 4.0 },
        { cx: 43.2, cz: -4.2 },
        { cx: 36.2, cz: -2.2 },
        { cx: 35.8, cz: 3.8 },
        { cx: 24.0, cz: 0.0 },
        { cx: 18.0, cz: 5.0 }
      ];
      otherDef.forEach((dp, idx) => {
        const t = defTargetsCentered[idx % defTargetsCentered.length];
        const txm = 52.5 + (isHome ? t.cx : -t.cx);
        const tym = 34.0 + (ballCz < 0 ? t.cz : -t.cz);
        placeItem(dp, txm, tym, bXm, bYm);
      });
    }

    this._syncMetersTo2D();
    return { kickerItem, defGk, otherAtk, otherDef, bXm, bYm, ux, uy, goalXm, goalYm };
  }

  // Simula la jugada a balón parado a 20 ticks/segundo, la graba en replayBuffer y la reproduce en 3D
  executeSetPiece(setup, onDone) {
    this.isRunning = true;
    this.isSetPieceRunning = true;
    this.speed = 1;

    const { type, attackingSide, spot, taker, targetStrategy, placements } = setup;
    const isHome = attackingSide === "home";
    const atkTeam = isHome ? this.homeTeam : this.awayTeam;
    const defTeam = isHome ? this.awayTeam : this.homeTeam;
    const defPlayers = isHome ? this.awayPlayersOnPitch : this.homePlayersOnPitch;
    const goalkeeper = defPlayers.find(p => p.pos === "POR") || defPlayers[0];

    if (type === "CORNER") {
      this.stats.corners[attackingSide]++;
    }

    const spotXm = spot.xm ?? (spot.x * 1.05);
    const spotYm = spot.ym ?? (spot.y * 0.68);

    // 1. Aplicar geometría vectorial estricta FIFA
    const geom = this._applyStrictSetPieceGeometry(type, attackingSide, spotXm, spotYm, taker, placements);
    const { kickerItem, defGk, otherAtk, otherDef, bXm, bYm, goalXm, goalYm } = geom;

    // 2. Vaciar el buffer y grabar la preparación a balón parado + ejecución física a 20 Hz
    this.replayBuffer = [];
    const dt = 0.05; // 20 ticks/segundo

    // Fase de preparación y toma de carrera (24 ticks = 1.2s)
    const runupStartXm = kickerItem.xm;
    const runupStartYm = kickerItem.ym;
    for (let t = 0; t < 24; t++) {
      const p = t / 24;
      if (t >= 10) {
        const rAlpha = (t - 10) / 14;
        kickerItem.xm = runupStartXm + (bXm - runupStartXm) * (rAlpha * 0.82);
        kickerItem.ym = runupStartYm + (bYm - runupStartYm) * (rAlpha * 0.82);
        kickerItem.pose = "run";
      }
      // En córners y faltas colgadas, los atacantes inician el desmarque dentro del área
      if (type !== "PENALTY" && t >= 12) {
        otherAtk.slice(0, 4).forEach((ap, idx) => {
          ap.xm += (isHome ? 0.14 : -0.14);
          ap.ym += (idx % 2 === 0 ? 0.05 : -0.05);
          ap.pose = "run";
        });
        otherDef.slice(type === "FREE_KICK" ? 4 : 0, (type === "FREE_KICK" ? 8 : 4)).forEach((dp) => {
          dp.xm += (isHome ? 0.11 : -0.11);
          dp.pose = "run";
        });
      }
      this._recordReplayFrame("SET_PIECE_RUNUP");
    }

    // 3. Ejecución física tick a tick (Cero resultados precalculados: el balón se lanza con velocidad real y la física decide)
    kickerItem.pose = "kick";
    kickerItem.poseTimer = 0.38;
    const spLabel = type === "PENALTY" ? "Penalti" : (type === "CORNER" ? "Saque de Esquina" : "Falta Directa");

    this._recordingReplayOnly = true;
    this._pendingTickOutcome = null;

    let outcome = "WIDE";
    let finalShooter = taker;
    let finalPasser = null;
    let finalDefender = otherDef[0]?.player || null;
    let finalGoalkeeper = goalkeeper;

    if (type === "PENALTY" || (type === "FREE_KICK" && targetStrategy === "DIRECT_SHOT")) {
      const isPen = type === "PENALTY";
      this._setTickCommentary(
        isPen
          ? `🥅 ¡${taker.name} toma carrera desde los 11 metros y ejecuta el lanzamiento!`
          : `🎯 ¡${taker.name} golpea la falta directa buscando superar la barrera a 9.15m!`,
        isPen ? "PENALTI" : "FALTA DIRECTA"
      );
      this._launchBallShot(kickerItem, attackingSide, isPen ? "NORMAL" : "FINESSE");
      if (!isPen) {
        // Elevar trayectoria inicial para salvar la barrera a 9.15m con caída Magnus
        this.ball.vz = 4.65;
        this.ball.spin = bYm > 34 ? -2.9 : 2.9;
      } else {
        this.ball.vz = 1.65 + Math.random() * 0.85;
      }
    } else {
      // Centro físico al área en Córner o Falta Lateral: los jugadores atacan y defienden el balón tick a tick
      const boxTargetItem = otherAtk[0] || kickerItem;
      finalPasser = taker;
      finalShooter = boxTargetItem.player || taker;
      const meetXm = isHome ? (94.0 + (Math.random() * 3.5 - 1.5)) : (11.0 + (Math.random() * 3.5 - 1.5));
      const meetYm = targetStrategy === "NEAR_POST"
        ? (bYm < 34 ? 29.5 : 38.5)
        : (targetStrategy === "FAR_POST" ? (bYm < 34 ? 39.2 : 28.8) : (34.0 + (Math.random() * 4.0 - 2.0)));

      this._setTickCommentary(
        `🚩 ¡${taker.name} cuelga el balón con rosca al corazón del área buscando rematador!`,
        spLabel.toUpperCase()
      );
      this._launchBallPass(kickerItem, boxTargetItem, attackingSide, {
        x: meetXm,
        y: meetYm,
        isLofted: true,
        spin: bYm > 34 ? -2.2 : 2.2,
        kind: "CROSS"
      });
    }

    let triggeredOutcome = null;
    const maxSetPieceTicks = 76; // Hasta 3.8s de física continua en tiempo real para resolver el envío/remate
    for (let t = 0; t < maxSetPieceTicks; t++) {
      this.stepRealTimePhysics(dt);
      this._recordReplayFrame("SET_PIECE_LIVE");
      if (this._pendingTickOutcome) {
        triggeredOutcome = this._pendingTickOutcome;
        this._pendingTickOutcome = null;
        break;
      }
    }
    this._recordingReplayOnly = false;

    const climaxFrameIdx = Math.max(0, this.replayBuffer.length - 1);
    if (triggeredOutcome) {
      outcome = triggeredOutcome.outcome || "WIDE";
      if (triggeredOutcome.shooter) finalShooter = triggeredOutcome.shooter;
      if (triggeredOutcome.passer) finalPasser = triggeredOutcome.passer;
      if (triggeredOutcome.defender) finalDefender = triggeredOutcome.defender;
      if (triggeredOutcome.goalkeeper) finalGoalkeeper = triggeredOutcome.goalkeeper;
    } else {
      outcome = "BLOCK";
      this._setTickCommentary(`🛡️ La zaga de ${defTeam.shortName} despeja el peligro tras la disputa en el área.`, "DESPEJE");
      this._recordReplayFrame("SET_PIECE_CLEAR");
    }

    // 4. Grabar 28 ticks (1.4s) de continuación post-impacto
    const outcomeInfo = {
      isSetPiece: true,
      setPieceType: type,
      attackingSide,
      shooter: finalShooter,
      passer: finalPasser,
      defender: finalDefender,
      goalkeeper: finalGoalkeeper,
      outcome,
      headline: `BALÓN PARADO · ${spLabel.toUpperCase()}`,
      buildNote: `⚽ ${spLabel} para ${atkTeam.shortName}. Ejecuta ${taker.name}.`,
      shotNote: triggeredOutcome?.shotNote || (outcome === "GOAL"
        ? `⚽ ¡Golazo de ${finalShooter.name} en acción de ${spLabel.toLowerCase()}!`
        : `🧤 Acción de ${spLabel.toLowerCase()} resuelta por la física en el área.`)
    };

    for (let f = 0; f < 28; f++) {
      this._stepFollowThroughTick(dt, outcomeInfo);
      this._recordReplayFrame("SET_PIECE_FOLLOW");
    }

    const playbackFrames = this.replayBuffer.slice();
    this.startReplayHighlight(playbackFrames, climaxFrameIdx, outcomeInfo, () => {
      if (onDone) onDone();
      if (this.isRunning && !this.isFinished && !this.isHalfTime && !this.pauseRequested) {
        this.loop();
      }
    });
  }

  // Colocar a los equipos y balón para sacar del centro del campo tras un gol
  resetKickoff(concedingSide = "away") {
    this.ball.x = 50;
    this.ball.y = 50;
    this.ball.z = 0;
    this.ball.targetX = 50;
    this.ball.targetY = 50;
    this.ball.targetZ = 0;
    this.ball.possession = concedingSide;
    this.ball.xm = 52.5;
    this.ball.ym = 34;
    this.ball.zm = 0;
    this.ball.vx = 0;
    this.ball.vy = 0;
    this.ball.vz = 0;
    this.ball.passTarget = null;
    this.ball.passTeam = null;
    this.ball.shotTeam = null;
    this.ball.shotMeta = null;
    this.ball.assistCandidate = null;
    this.ball.pickupCooldown = 0.25;

    const baseCoords = [
      { x: 5, y: 50 },  // POR
      { x: 20, y: 20 }, // LI
      { x: 18, y: 40 }, // DFC
      { x: 18, y: 60 }, // DFC
      { x: 20, y: 80 }, // LD
      { x: 34, y: 50 }, // MCD
      { x: 44, y: 35 }, // MC
      { x: 44, y: 65 }, // MC/MCO
      { x: 42, y: 22 }, // EI
      { x: concedingSide === "home" ? 50 : 44, y: 50 }, // DC
      { x: 42, y: 78 }  // ED
    ];

    this.home2D.forEach((p, idx) => {
      p.targetX = baseCoords[idx]?.x || 25;
      p.targetY = baseCoords[idx]?.y || 50;
      p.curX = p.targetX;
      p.curY = p.targetY;
      p.xm = (p.curX / 100) * 105;
      p.ym = (p.curY / 100) * 68;
      p.vx = 0;
      p.vy = 0;
      p.facingX = 1;
      p.facingZ = 0;
      p.decisionTimer = 0.25;
      p.controlTimer = 0;
      p.speedMps = 0;
    });

    this.away2D.forEach((p, idx) => {
      let tx = 100 - (baseCoords[idx]?.x || 25);
      if (concedingSide === "away" && idx === 9) {
        tx = 50; // Delantero visitante en el centro para el saque
      }
      p.targetX = tx;
      p.targetY = 100 - (baseCoords[idx]?.y || 50);
      p.curX = p.targetX;
      p.curY = p.targetY;
      p.xm = (p.curX / 100) * 105;
      p.ym = (p.curY / 100) * 68;
      p.vx = 0;
      p.vy = 0;
      p.facingX = -1;
      p.facingZ = 0;
      p.decisionTimer = 0.25;
      p.controlTimer = 0;
      p.speedMps = 0;
    });

    const kickerList = concedingSide === "home" ? this.home2D : this.away2D;
    const kicker = kickerList[9] || kickerList[kickerList.length - 1] || null;
    this.ball.carrier = kicker;
    this.ball.lastTouchTeam = concedingSide;
    this.ball.lastTouchPlayer = kicker;
  }

  getPlayerRole(player, side = null) {
    if (!player) return null;
    const playerSide = side || (this.homePlayersOnPitch.some(p => p.id === player.id) ? "home" : "away");
    const rolesMap = playerSide === "home" ? this.homePlayerRoles : this.awayPlayerRoles;
    const roleId = rolesMap ? rolesMap[player.id] : null;
    return getRoleDetails(player.pos, roleId);
  }

  pickPlayerForAction(players, preferredPositions, actionType = "pass", side = null) {
    const nonGk = players.filter(p => p.pos !== "POR");
    const basePool = nonGk.length > 0 ? nonGk : players;
    const hasPrefPos = (p) => {
      if (preferredPositions.includes(p.pos)) return true;
      if (Array.isArray(p.secondaryPos) && p.secondaryPos.some(sp => preferredPositions.includes(sp))) return true;
      return false;
    };
    let candidates = basePool.filter(hasPrefPos);
    if (candidates.length === 0) candidates = [...basePool];

    // Ponderar candidatos según su función táctica individual (rol) y atributos
    const weights = candidates.map(p => {
      const role = this.getPlayerRole(p, side);
      const roleId = role?.id || "";
      const posBonus = hasPrefPos(p) ? 1.35 : 0.75;

      if (actionType === "finish_box" || actionType === "shoot") {
        let rMult = role?.shootWeight !== undefined ? role.shootWeight : 0.6;
        if (roleId === "st_target") rMult = 2.8;
        else if (roleId === "st_poacher" || roleId === "am_shadow_striker") rMult = 2.4;
        else if (roleId === "w_inside_forward") rMult = 1.85;
        else if (roleId === "cm_box_to_box") rMult = 1.55;
        return posBonus * rMult * Math.pow((p.sho || 70) / 72, 1.8);
      }
      if (actionType === "aerial_finish") {
        let rMult = 0.6;
        if (roleId === "st_target") rMult = 3.2;
        else if (roleId === "cm_box_to_box" || roleId === "am_shadow_striker") rMult = 1.65;
        else if (roleId === "st_poacher") rMult = 1.45;
        return posBonus * rMult * Math.pow(((p.sho || 70) + (p.phy || 70)) / 144, 1.8);
      }
      if (actionType === "poacher_run") {
        let rMult = 0.65;
        if (roleId === "st_poacher") rMult = 3.1;
        else if (roleId === "w_inside_forward" || roleId === "am_shadow_striker") rMult = 2.3;
        else if (roleId === "w_winger") rMult = 1.7;
        else if (roleId === "st_target") rMult = 1.4;
        return posBonus * rMult * Math.pow(((p.pac || 70) + (p.sho || 70)) / 144, 1.8);
      }
      if (actionType === "dribble_wing") {
        let rMult = 0.55;
        if (roleId === "w_winger") rMult = 3.3;
        else if (roleId === "w_inside_forward") rMult = 2.4;
        else if (roleId === "fb_attacking") rMult = 2.25;
        else if (roleId === "st_poacher" || roleId === "am_playmaker") rMult = 1.5;
        return posBonus * rMult * Math.pow(((p.dri || 70) + (p.pac || 70)) / 144, 1.8);
      }
      if (actionType === "inside_cut") {
        let rMult = 0.55;
        if (roleId === "w_inside_forward") rMult = 3.5;
        else if (roleId === "w_winger") rMult = 2.2;
        else if (roleId === "am_shadow_striker" || roleId === "am_playmaker") rMult = 1.95;
        else if (roleId === "st_poacher" || roleId === "st_false_nine") rMult = 1.75;
        return posBonus * rMult * Math.pow(((p.dri || 70) + (p.sho || 70)) / 144, 1.8);
      }
      if (actionType === "overlap_fullback") {
        let rMult = 0.5;
        if (roleId === "fb_attacking") rMult = 3.6;
        else if (roleId === "w_winger") rMult = 2.0;
        else if (roleId === "fb_balanced" || roleId === "cm_box_to_box") rMult = 1.4;
        return posBonus * rMult * Math.pow(((p.pac || 70) + (p.pas || 70)) / 144, 1.6);
      }
      if (actionType === "false_nine") {
        let rMult = 0.55;
        if (roleId === "st_false_nine") rMult = 3.8;
        else if (roleId === "am_playmaker") rMult = 2.6;
        else if (roleId === "cm_playmaker") rMult = 1.9;
        else if (roleId === "w_inside_forward") rMult = 1.4;
        return posBonus * rMult * Math.pow(((p.pas || 70) + (p.dri || 70)) / 144, 1.7);
      }
      if (actionType === "target_hold") {
        let rMult = 0.6;
        if (roleId === "st_target") rMult = 3.4;
        else if (roleId === "st_false_nine") rMult = 2.5;
        else if (roleId === "am_shadow_striker" || roleId === "cm_box_to_box") rMult = 1.6;
        return posBonus * rMult * Math.pow(((p.phy || 70) + (p.pas || 70)) / 144, 1.6);
      }
      if (actionType === "box_to_box_arrival") {
        let rMult = 0.6;
        if (roleId === "cm_box_to_box") rMult = 3.4;
        else if (roleId === "am_shadow_striker") rMult = 2.8;
        else if (roleId === "cm_playmaker" || roleId === "w_inside_forward") rMult = 1.7;
        else if (roleId === "st_poacher" || roleId === "st_target") rMult = 1.4;
        return posBonus * rMult * Math.pow(((p.sho || 70) + (p.phy || 70)) / 144, 1.7);
      }
      if (actionType === "ball_winner") {
        let rMult = 0.6;
        if (roleId === "cm_ball_winner") rMult = 3.4;
        else if (roleId === "dm_destroyer") rMult = 3.0;
        else if (roleId === "cb_stopper") rMult = 2.5;
        else if (roleId === "cm_box_to_box" || roleId === "w_defensive") rMult = 1.8;
        return posBonus * rMult * Math.pow(((p.def || 70) + (p.phy || 70)) / 144, 1.7);
      }
      if (actionType === "playmaker_pass" || actionType === "pass") {
        let rMult = role?.passWeight !== undefined ? role.passWeight : 0.6;
        if (roleId === "am_playmaker") rMult = 2.9;
        else if (roleId === "cm_playmaker") rMult = 2.7;
        else if (roleId === "st_false_nine") rMult = 2.5;
        else if (roleId === "dm_playmaker") rMult = 2.3;
        else if (roleId === "cb_ball_playing") rMult = 1.7;
        else if (roleId === "w_winger" || roleId === "fb_attacking") rMult = 1.45;
        return posBonus * rMult * Math.pow((p.pas || 70) / 72, 1.8);
      }
      return posBonus;
    });

    const totalWeight = weights.reduce((a, b) => a + b, 0);
    let rand = Math.random() * totalWeight;
    for (let i = 0; i < candidates.length; i++) {
      rand -= weights[i];
      if (rand <= 0) return candidates[i];
    }
    return candidates[0];
  }

  triggerAlert(title, text, side, duration = 2200) {
    this.currentAlert = { title, text, side, until: Date.now() + duration };
    this.onAlert(this.currentAlert);
  }

  calcTeamPower(players, type, side = null) {
    if (!players || players.length === 0) return 75;
    const isHome = side === "home";
    const coords2D = isHome ? this.home2D : this.away2D;
    let sum = 0;
    players.forEach(p => {
      const role = this.getPlayerRole(p, side);
      const item2D = coords2D?.find(item => item.player?.id === p.id);
      const pOvr = p.ovr ?? 75;
      const pEnergy = p.energy !== undefined ? p.energy : 100;
      let power = 75;
      if (type === "atk") {
        const sho = p.sho ?? pOvr;
        const dri = p.dri ?? pOvr;
        const pac = p.pac ?? pOvr;
        power = (sho * 0.4 + dri * 0.3 + pac * 0.3) * (0.6 + pEnergy / 250);
        if (role && role.atkMod) power *= (1 + role.atkMod);
        // Si el jugador está adelantado manualmente hacia la portería rival (avance ofensivo)
        if (item2D) {
          const advX = isHome ? item2D.baseX : (100 - item2D.baseX);
          if (advX > 55) power *= 1.10;
        }
      } else if (type === "mid") {
        const pas = p.pas ?? pOvr;
        const dri = p.dri ?? pOvr;
        const def = p.def ?? pOvr;
        power = (pas * 0.4 + dri * 0.3 + def * 0.3) * (0.6 + pEnergy / 250);
        if (role && role.midMod) power *= role.midMod;
        // Si el jugador está centrado hacia la medular (amplitud interior)
        if (item2D && item2D.baseY >= 35 && item2D.baseY <= 65) power *= 1.08;
      } else if (type === "def") {
        if (p.pos === "POR") {
          const gkPar = p.par !== undefined ? p.par : (p.gks || pOvr);
          power = (gkPar * 0.75 + (p.phy || 70) * 0.25) * (0.6 + pEnergy / 250);
        } else {
          const def = p.def ?? pOvr;
          const phy = p.phy ?? pOvr;
          const pac = p.pac ?? pOvr;
          power = (def * 0.5 + phy * 0.3 + pac * 0.2) * (0.6 + pEnergy / 250);
        }
        if (role && role.defMod) power *= role.defMod;
        // Si el jugador está retrasado hacia campo propio (refuerzo defensivo)
        if (item2D) {
          const advX = isHome ? item2D.baseX : (100 - item2D.baseX);
          if (advX < 45) power *= 1.10;
        }
      }

      // Feature A: Impacto del Marcaje al Hombre en atributos de cada futbolista
      if (side) {
        // Reducción si este jugador está marcado al hombre
        const markers = this.getActiveMarkersOnTarget(side, p.id);
        if (markers.length > 0) {
          const isAggressive = markers.some(m => m.intensity === "aggressive");
          const isTight = markers.some(m => m.intensity === "tight");
          const redFactor = isAggressive ? 0.64 : (isTight ? 0.76 : 0.88);
          if (type === "atk" || type === "mid") {
            power *= redFactor;
          }
        }

        // Bonus a defensa si este futbolista es un marcador asignado
        const markingTask = this.getActiveMarkingForMarker(side, p.id);
        if (markingTask && type === "def") {
          const defBoost = markingTask.intensity === "aggressive" ? 1.14 : (markingTask.intensity === "tight" ? 1.10 : 1.06);
          power *= defBoost;
        }
      }

      sum += power;
    });

    let avgPower = sum / players.length;
    if (type === "atk" && this.weather?.atkSharpness) {
      avgPower *= this.weather.atkSharpness;
    }
    if (side === this.userSide) {
      if (this.weeklyTraining === "finishing" && type === "atk") {
        avgPower *= 1.07;
      } else if (this.weeklyTraining === "defensive" && type === "def") {
        avgPower *= 1.07;
      }
      if (this.activeTeamTalk && this.minute <= this.activeTeamTalk.expiresAtMinute) {
        if (type === "atk") avgPower *= (this.activeTeamTalk.atkMod || 1.0);
        else if (type === "mid") avgPower *= (this.activeTeamTalk.midMod || 1.0);
        else if (type === "def") avgPower *= (this.activeTeamTalk.defMod || 1.0);
      }
      if (this.activeShout && this.minute <= this.activeShout.expiresAtMinute) {
        if (type === "atk") avgPower *= (this.activeShout.atkMod || 1.0);
        else if (type === "mid") avgPower *= (this.activeShout.midMod || 1.0);
        else if (type === "def") avgPower *= (this.activeShout.defMod || 1.0);
      }
    }

    // Factor Campo: El equipo local cuenta con un sutil empuje ambiental equilibrado (+0.4%, strictly <= 0.5%)
    if (side === "home") {
      avgPower *= 1.004;
    }

    // Feature B: Aliento de la Grada (Sutil impulso anímico para remontar: ~0.4% promedio, strictly <= 0.5%)
    if (this.activeCrowdRoar && side === "home" && this.minute <= this.activeCrowdRoar.expiresAtMinute) {
      if (type === "atk") avgPower *= 1.005;
      else if (type === "mid") avgPower *= 1.004;
      else if (type === "def") avgPower *= 1.003;
    }

    return avgPower;
  }

  update2DPositions() {
    // Los jugadores fijan sus coordenadas objetivo siguiendo dinámicamente la táctica oficial FIFA (105x68m)
    const ballX = this.ball.targetX !== undefined ? this.ball.targetX : (this.ball.x ?? 50);
    const ballY = this.ball.targetY !== undefined ? this.ball.targetY : (this.ball.y ?? 50);

    // 1. Modificadores tácticos del equipo local
    const homeDefLine = this.homeInstructions?.outOfPossession?.defensiveLine || "mid";
    const homeLineShiftX = homeDefLine === "high" ? 14 : (homeDefLine === "low" ? -14 : 0);
    const homePressing = this.homeInstructions?.outOfPossession?.pressing || "mid";
    const homePressShiftX = (this.ball.possession === "away" && homePressing === "high") ? 6 : 0;
    const homeAtkWidth = this.homeInstructions?.inPossession?.width || "balanced";
    const homeDefWidth = this.homeInstructions?.outOfPossession?.defenseWidth || "balanced";

    this.home2D.forEach((p, idx) => {
      const playerObj = p.player || this.homePlayersOnPitch[idx];
      if (!playerObj) return;
      if (p.isKeeper) {
        p.targetX = 4;
        p.targetY = Math.max(42, Math.min(58, 50 + (ballY - 50) * 0.15));
        return;
      }
      const role = this.getPlayerRole(playerObj, "home");
      const pushMod = role?.pushMod || 0;
      const isDef = playerObj.pos === "DFC" || playerObj.pos === "LI" || playerObj.pos === "LD";
      const isFullback = playerObj.pos === "LI" || playerObj.pos === "LD";
      const isWinger = playerObj.pos === "EI" || playerObj.pos === "ED";

      const lineXMod = isDef ? homeLineShiftX : (homeLineShiftX * 0.45);
      const shiftX = (ballX - 50) * 0.32 + (pushMod * 0.35) + lineXMod + homePressShiftX;

      let shiftY = (ballY - 50) * 0.22; // Basculación suave de bloque hacia el balón
      
      // En posesión: Anchura de ataque
      if (this.ball.possession === "home") {
        if (isWinger || isFullback) {
          if (homeAtkWidth === "wide") {
            // Pegados a la cal (Z = -31m y +31m -> Y = 4.4% y 95.6%)
            shiftY = p.baseY < 50 ? (5 - p.baseY) : (95 - p.baseY);
          } else if (homeAtkWidth === "center") {
            // Metidos por dentro (Z = -14m y +14m -> Y = 29% y 71%)
            shiftY = p.baseY < 50 ? (29 - p.baseY) : (71 - p.baseY);
          }
        }
      } else {
        // Sin posesión: Anchura defensiva
        if (isFullback) {
          if (homeDefWidth === "compact") {
            // Cerrados por dentro (Z = -15m y +15m -> Y = 28% y 72%), dejando las bandas abiertas
            shiftY = p.baseY < 50 ? (28 - p.baseY) : (72 - p.baseY);
          } else if (homeDefWidth === "wide") {
            // Cerrar bandas / Marcar extremos (Z = -30.5m y +30.5m -> Y = 5% y 95%)
            shiftY = p.baseY < 50 ? (5 - p.baseY) : (95 - p.baseY);
          }
        } else if (playerObj.pos === "DFC") {
          // Centrales separados 12-15 metros (Y = 40% y 60%)
          shiftY = p.baseY < 50 ? (41 - p.baseY) : (59 - p.baseY);
        }
      }

      // Micro-ajustes sutiles de perfilado para no parecer estatuas
      const idleStep = Math.sin(Date.now() * 0.003 + idx) * 0.6;
      p.targetX = Math.max(6, Math.min(94, p.baseX + shiftX + idleStep));
      p.targetY = Math.max(5, Math.min(95, p.baseY + shiftY));
    });

    // 2. Modificadores tácticos del equipo visitante
    const awayDefLine = this.awayInstructions?.outOfPossession?.defensiveLine || "mid";
    const awayLineShiftX = awayDefLine === "high" ? -14 : (awayDefLine === "low" ? 14 : 0);
    const awayPressing = this.awayInstructions?.outOfPossession?.pressing || "mid";
    const awayPressShiftX = (this.ball.possession === "home" && awayPressing === "high") ? -6 : 0;
    const awayAtkWidth = this.awayInstructions?.inPossession?.width || "balanced";
    const awayDefWidth = this.awayInstructions?.outOfPossession?.defenseWidth || "balanced";

    this.away2D.forEach((p, idx) => {
      const playerObj = p.player || this.awayPlayersOnPitch[idx];
      if (!playerObj) return;
      if (p.isKeeper) {
        p.targetX = 96;
        p.targetY = Math.max(42, Math.min(58, 50 + (ballY - 50) * 0.15));
        return;
      }
      const role = this.getPlayerRole(playerObj, "away");
      const pushMod = role?.pushMod || 0;
      const isDef = playerObj.pos === "DFC" || playerObj.pos === "LI" || playerObj.pos === "LD";
      const isFullback = playerObj.pos === "LI" || playerObj.pos === "LD";
      const isWinger = playerObj.pos === "EI" || playerObj.pos === "ED";

      const lineXMod = isDef ? awayLineShiftX : (awayLineShiftX * 0.45);
      const shiftX = (ballX - 50) * 0.32 - (pushMod * 0.35) + lineXMod + awayPressShiftX;

      let shiftY = (ballY - 50) * 0.22;
      if (this.ball.possession === "away") {
        if (isWinger || isFullback) {
          if (awayAtkWidth === "wide") {
            shiftY = p.baseY < 50 ? (5 - p.baseY) : (95 - p.baseY);
          } else if (awayAtkWidth === "center") {
            shiftY = p.baseY < 50 ? (29 - p.baseY) : (71 - p.baseY);
          }
        }
      } else {
        if (isFullback) {
          if (awayDefWidth === "compact") {
            shiftY = p.baseY < 50 ? (28 - p.baseY) : (72 - p.baseY);
          } else if (awayDefWidth === "wide") {
            shiftY = p.baseY < 50 ? (5 - p.baseY) : (95 - p.baseY);
          }
        } else if (playerObj.pos === "DFC") {
          shiftY = p.baseY < 50 ? (41 - p.baseY) : (59 - p.baseY);
        }
      }

      const idleStep = Math.sin(Date.now() * 0.003 + idx + 3) * 0.6;
      p.targetX = Math.max(6, Math.min(94, p.baseX + shiftX + idleStep));
      p.targetY = Math.max(5, Math.min(95, p.baseY + shiftY));
    });

    // 3. FUERZA DE SEPARACIÓN OBLIGATORIA (Ningún jugador a menos de 6.5 - 8.0m de un compañero)
    const applyTeammateSeparation = (teamArr) => {
      const minDistM = 6.8; // Metros
      for (let iter = 0; iter < 3; iter++) {
        for (let i = 0; i < teamArr.length; i++) {
          for (let j = i + 1; j < teamArr.length; j++) {
            const p1 = teamArr[i], p2 = teamArr[j];
            if (p1.isKeeper || p2.isKeeper) continue;
            const dxM = (p1.targetX - p2.targetX) * 1.05;
            const dyM = (p1.targetY - p2.targetY) * 0.68;
            const distM = Math.hypot(dxM, dyM);
            if (distM < minDistM && distM > 0.05) {
              const pushM = (minDistM - distM) * 0.45;
              const pushPctX = (dxM / distM) * (pushM / 1.05);
              const pushPctY = (dyM / distM) * (pushM / 0.68);
              p1.targetX = Math.max(4, Math.min(96, p1.targetX + pushPctX));
              p1.targetY = Math.max(4, Math.min(96, p1.targetY + pushPctY));
              p2.targetX = Math.max(4, Math.min(96, p2.targetX - pushPctX));
              p2.targetY = Math.max(4, Math.min(96, p2.targetY - pushPctY));
            }
          }
        }
      }
    };
    applyTeammateSeparation(this.home2D);
    applyTeammateSeparation(this.away2D);
  }

  // Formato televisivo oficial del minuto con descuento y segundos en jugada 3D en vivo
  getFormattedMinute(includeSeconds = false) {
    const isLive3D = this.isHighlightRunning || this.isSetPieceRunning;
    const secStr = (isLive3D || includeSeconds) ? `:${String(Math.floor(this.matchSecond || 0)).padStart(2, "0")}` : "'";
    if (!this.isSecondHalf && !this.halfTimeTriggered) {
      if (this.minute > 45) {
        return `45+${this.minute - 45}${secStr}`;
      }
      return `${this.minute}${secStr}`;
    } else {
      if (this.minute > 90) {
        return `90+${this.minute - 90}${secStr}`;
      }
      return `${this.minute}${secStr}`;
    }
  }

  // Reanudar el partido tras la pausa del descanso
  resumeSecondHalf() {
    this.isHalfTime = false;
    this.halfTimeTriggered = true;
    this.isSecondHalf = true;
    this.minute = 45; // El reloj de la 2ª parte comienza reglamentariamente en el minuto 45
    this.realTimeMinute = 45;
    this.lastMinuteProcessed = 45;
    // Recuperación energética por los 15 minutos de descanso según físico
    this.homePlayersOnPitch.forEach(p => { 
      const htRecovery = 3 + ((p.phy || 70) / 22);
      p.energy = Math.min(100, (p.energy || 100) + htRecovery); 
    });
    this.awayPlayersOnPitch.forEach(p => { 
      const htRecovery = 3 + ((p.phy || 70) / 22);
      p.energy = Math.min(100, (p.energy || 100) + htRecovery); 
    });

    // Saque de centro para la 2ª mitad
    this.resetKickoff(this.userSide === "home" ? "away" : "home");
    this.start();
  }

  // Saltar instantáneamente al final del partido (FAST_SIM ultrarrápido)
  skipToEnd() {
    this.clearAllTimeouts();
    this.isSkippingToEnd = true;
    this.halfTimeTriggered = true;
    this.isHalfTime = false;
    this.isSecondHalf = true;
    this.isHighlightRunning = false;
    this.isSetPieceRunning = false;
    this.pauseRequested = false;
    this.isRunning = true;

    let safetyGuard = 0;
    while (!this.isFinished && this.minute < this.maxMinutes && safetyGuard < 150) {
      this.stepMinute();
      safetyGuard++;
    }
    this.isSkippingToEnd = false;
    if (!this.isFinished) {
      this.finish();
    }
  }

  finish() {
    this.clearAllTimeouts();
    this.minute = this.maxMinutes;
    this.isRunning = false;
    const wasVisualActive = this.isHighlightRunning || this.isSetPieceRunning;
    this.isHighlightRunning = false;
    this.isSetPieceRunning = false;
    this.activeReplay = null;
    if (wasVisualActive && this.onHighlightEnd) {
      this.onHighlightEnd();
    }
    this.isFinished = true;

    // Bonus de valoración final por portería a cero (Clean Sheet) y victoria
    const homeAll = this.homeTeam.players || [...this.homePlayersOnPitch, ...this.homeBench];
    const awayAll = this.awayTeam.players || [...this.awayPlayersOnPitch, ...this.awayBench];

    if (this.awayScore === 0) {
      homeAll.forEach(p => {
        if ((p.matchMinutes || 0) >= 45) {
          if (p.pos === "POR") this.adjustPlayerRating(p, 0.5);
          else if (["DFC", "LD", "LI", "MCD"].includes(p.pos)) this.adjustPlayerRating(p, 0.3);
        }
      });
    }
    if (this.homeScore === 0) {
      awayAll.forEach(p => {
        if ((p.matchMinutes || 0) >= 45) {
          if (p.pos === "POR") this.adjustPlayerRating(p, 0.5);
          else if (["DFC", "LD", "LI", "MCD"].includes(p.pos)) this.adjustPlayerRating(p, 0.3);
        }
      });
    }
    if (this.homeScore > this.awayScore) {
      homeAll.forEach(p => { if ((p.matchMinutes || 0) >= 20) this.adjustPlayerRating(p, 0.2); });
    } else if (this.awayScore > this.homeScore) {
      awayAll.forEach(p => { if ((p.matchMinutes || 0) >= 20) this.adjustPlayerRating(p, 0.2); });
    }

    this.onFinish(this.getResult());
  }

  // MEJORA 5: Calcular el MVP del Partido (o de la 1ª parte) según nota en tiempo real
  computeMVP() {
    const homeAll = (this.homeTeam.players || [...this.homePlayersOnPitch, ...this.homeBench])
      .filter(p => p.playedInMatch || (p.matchMinutes || 0) > 0)
      .map(p => ({ ...p, teamId: this.homeTeam.id, teamName: this.homeTeam.shortName || this.homeTeam.name, teamSide: "home" }));
    const awayAll = (this.awayTeam.players || [...this.awayPlayersOnPitch, ...this.awayBench])
      .filter(p => p.playedInMatch || (p.matchMinutes || 0) > 0)
      .map(p => ({ ...p, teamId: this.awayTeam.id, teamName: this.awayTeam.shortName || this.awayTeam.name, teamSide: "away" }));

    const allPlayed = [...homeAll, ...awayAll];
    if (allPlayed.length === 0) return null;

    allPlayed.sort((a, b) => {
      const rDiff = (b.matchRating || 6.5) - (a.matchRating || 6.5);
      if (Math.abs(rDiff) > 0.05) return rDiff;
      const gDiff = (b.matchGoals || 0) - (a.matchGoals || 0);
      if (gDiff !== 0) return gDiff;
      const aDiff = (b.matchAssists || 0) - (a.matchAssists || 0);
      if (aDiff !== 0) return aDiff;
      return (b.ovr || 70) - (a.ovr || 70);
    });

    const best = allPlayed[0];
    return {
      ...best,
      rating: best.matchRating || 6.5,
      goals: best.matchGoals || 0,
      assists: best.matchAssists || 0,
      saves: best.matchSaves || 0
    };
  }

  getState() {
    return {
      minute: this.minute,
      formattedMinute: this.getFormattedMinute(),
      firstHalfExtra: this.firstHalfExtra,
      secondHalfExtra: this.secondHalfExtra,
      halfTimeMinute: this.halfTimeMinute,
      maxMinutes: this.maxMinutes,
      homeScore: this.homeScore,
      awayScore: this.awayScore,
      homeTeam: this.homeTeam,
      awayTeam: this.awayTeam,
      stats: this.stats,
      events: this.events,
      homeSubsRemaining: this.homeSubsRemaining,
      awaySubsRemaining: this.awaySubsRemaining,
      homeWindowsRemaining: this.homeWindowsRemaining,
      awayWindowsRemaining: this.awayWindowsRemaining,
      homePlayersOnPitch: this.homePlayersOnPitch,
      homeBench: this.homeBench,
      awayPlayersOnPitch: this.awayPlayersOnPitch,
      awayBench: this.awayBench,
      home2D: this.home2D,
      away2D: this.away2D,
      ball: this.ball,
      homeMentality: this.homeMentality,
      awayMentality: this.awayMentality,
      homeInstructions: this.homeInstructions,
      awayInstructions: this.awayInstructions,
      activeTeamTalk: this.activeTeamTalk,
      halftimeTalkUsed: this.halftimeTalkUsed,
      activeShout: this.activeShout,
      shoutCooldownUntil: this.shoutCooldownUntil,
      activeCrowdRoar: this.activeCrowdRoar,
      crowdRoarCooldownUntil: this.crowdRoarCooldownUntil,
      crowdRoarUnlockedByHighlight: this.crowdRoarUnlockedByHighlight,
      homeManMarking: this.homeManMarking,
      awayManMarking: this.awayManMarking,
      weeklyTraining: this.weeklyTraining,
      weather: this.weather,
      currentMvp: this.computeMVP(),
      activeAssistantAdvice: this.activeAssistantAdvice,
      currentPendingAdvice: this.currentPendingAdvice,
      assistantCoachName: this.assistantCoachName,
      isRunning: this.isRunning,
      isHalfTime: this.isHalfTime,
      isSecondHalf: this.isSecondHalf,
      isFinished: this.isFinished
    };
  }

  // =========================================================================
  // SISTEMA DE ASISTENTE / CUERPO TÉCNICO EN VIVO (Live Coaching Staff FM)
  // =========================================================================

  _checkAssistantCoaching() {
    if (this.isSkippingToEnd || this.isFinished || this.isHalfTime || this.isHighlightRunning || this.isSetPieceRunning) return;
    if (this.currentPendingAdvice) return;

    const userSide = this.userSide;
    const oppSide = userSide === "home" ? "away" : "home";
    const userTeam = userSide === "home" ? this.homeTeam : this.awayTeam;
    const oppTeam = userSide === "home" ? this.awayTeam : this.homeTeam;
    const userScore = userSide === "home" ? this.homeScore : this.awayScore;
    const oppScore = userSide === "home" ? this.awayScore : this.homeScore;
    const userShots = this.stats.shots[userSide] || 0;
    const oppShots = this.stats.shots[oppSide] || 0;
    const userOnTarget = this.stats.shotsOnTarget[userSide] || 0;
    const oppOnTarget = this.stats.shotsOnTarget[oppSide] || 0;
    const userPoss = this.stats.possession[userSide] || 50;
    const oppPoss = this.stats.possession[oppSide] || 50;
    const userPitch = userSide === "home" ? this.homePlayersOnPitch : this.awayPlayersOnPitch;
    const userBench = userSide === "home" ? this.homeBench : this.awayBench;
    const userInst = userSide === "home" ? this.homeInstructions : this.awayInstructions;
    const oppInst = oppSide === "home" ? this.homeInstructions : this.awayInstructions;
    const userMentality = userSide === "home" ? this.homeMentality : this.awayMentality;
    const oppMentality = oppSide === "home" ? this.homeMentality : this.awayMentality;
    const userSubsRemaining = userSide === "home" ? this.homeSubsRemaining : this.awaySubsRemaining;
    const userWindowsRemaining = userSide === "home" ? this.homeWindowsRemaining : this.awayWindowsRemaining;

    let advice = null;

    // 1. REGLA MINUTO 70+: Marcador apretado o necesidad de remontar
    if (this.minute >= 70) {
      if (userScore - oppScore === 1 && userMentality !== "defensive" && userMentality !== "very_defensive") {
        advice = {
          id: "adv_" + this.minute + "_" + Math.floor(Math.random() * 1000),
          urgency: "AJUSTE FINAL",
          category: "HOLD_LEAD",
          title: "Cerrar el partido y asegurar la victoria",
          diagnosis: `Vamos ganando por la mínima (${userScore}-${oppScore}) a falta de pocos minutos. El ${oppTeam.name} va a volcarse a la desesperada con balones al área.`,
          recommendation: `Recomendación: Bajar bloque a 'Bajo', pausar el ritmo y cambiar mentalidad a 'Defensiva' para amarrar los 3 puntos.`,
          action: {
            type: "TACTIC_PRESET",
            changes: {
              mentality: "defensive",
              defensiveLine: "low",
              tempo: "slow"
            }
          },
          isGoodReading: Math.random() < 0.75
        };
      } else if (userScore < oppScore && userMentality !== "very_offensive") {
        advice = {
          id: "adv_" + this.minute + "_" + Math.floor(Math.random() * 1000),
          urgency: "URGENTE",
          category: "OFFENSIVE",
          title: "Ir con todo arriba",
          diagnosis: `Vamos perdiendo (${userScore}-${oppScore}) y se acaba el tiempo. Necesitamos volcar efectivos en campo rival y asumir riesgos inmediatos.`,
          recommendation: `Recomendación: Cambiar a mentalidad 'Al Ataque', adelantar la defensa y ordenar presión asfixiante.`,
          action: {
            type: "TACTIC_PRESET",
            changes: {
              mentality: "very_offensive",
              defensiveLine: "high",
              pressing: "high",
              tempo: "fast"
            }
          },
          isGoodReading: Math.random() < 0.75
        };
      }
    }

    // 2. REGLA INDIVIDUAL: Fatiga extrema (<50%), tarjeta amarilla o bajo rendimiento (<6.3)
    if (!advice && userSubsRemaining > 0 && userWindowsRemaining > 0) {
      const tiredP = userPitch.filter(p => p.pos !== "POR").sort((a, b) => (a.energy || 100) - (b.energy || 100))[0];
      const yellowP = userPitch.find(p => p.pos !== "POR" && (p.yellowCards > 0 || p.hasYellow));
      const lowRatingP = userPitch.filter(p => p.pos !== "POR" && p.matchRating && p.matchRating < 6.3 && (p.matchMinutes || 0) >= 30).sort((a, b) => a.matchRating - b.matchRating)[0];

      if (tiredP && (tiredP.energy || 100) < 50) {
        const candidate = userBench.filter(b => !b.injury && (!b.suspension || b.suspension.roundsLeft <= 0) && (b.energy || 100) >= 65 && !b.subbedOut)
          .sort((a, b) => {
            const affA = getPositionAffinity(a, tiredP.pos);
            const affB = getPositionAffinity(b, tiredP.pos);
            if (affB !== affA) return affB - affA;
            return (b.ovr || 70) - (a.ovr || 70);
          })[0];
        if (candidate && getPositionAffinity(candidate, tiredP.pos) >= 0.75) {
          advice = {
            id: "adv_" + this.minute + "_" + Math.floor(Math.random() * 1000),
            urgency: "ALERTA FÍSICA",
            category: "SUBSTITUTION",
            title: `Fatiga crítica de ${tiredP.name}`,
            diagnosis: `${tiredP.name} (${tiredP.pos}) está al ${Math.round(tiredP.energy || 100)}% de energía y perdiendo todos los duelos individuales por agotamiento.`,
            recommendation: `Recomendación: Sustituir a ${tiredP.name} por ${candidate.name} (${candidate.pos}, OVR ${candidate.ovr}) para meter piernas frescas.`,
            action: {
              type: "SUBSTITUTION",
              playerOutId: tiredP.id,
              playerInId: candidate.id,
              playerOutName: tiredP.name,
              playerInName: candidate.name
            },
            isGoodReading: Math.random() < 0.75
          };
        }
      } else if (yellowP && this.minute >= 35) {
        const candidate = userBench.filter(b => !b.injury && (!b.suspension || b.suspension.roundsLeft <= 0) && !b.subbedOut)
          .sort((a, b) => {
            const affA = getPositionAffinity(a, yellowP.pos);
            const affB = getPositionAffinity(b, yellowP.pos);
            if (affB !== affA) return affB - affA;
            return (b.ovr || 70) - (a.ovr || 70);
          })[0];
        if (candidate && getPositionAffinity(candidate, yellowP.pos) >= 0.75) {
          advice = {
            id: "adv_" + this.minute + "_" + Math.floor(Math.random() * 1000),
            urgency: "RIESGO DE EXPULSIÓN",
            category: "SUBSTITUTION",
            title: `Peligro de roja para ${yellowP.name}`,
            diagnosis: `${yellowP.name} tiene tarjeta amarilla y está sufriendo al corte. Un segundo error nos dejaría con 10 futbolistas.`,
            recommendation: `Recomendación: Dar entrada a ${candidate.name} (${candidate.pos}) para proteger la zona sin riesgo de expulsión.`,
            action: {
              type: "SUBSTITUTION",
              playerOutId: yellowP.id,
              playerInId: candidate.id,
              playerOutName: yellowP.name,
              playerInName: candidate.name
            },
            isGoodReading: Math.random() < 0.75
          };
        }
      } else if (lowRatingP && this.minute >= 40) {
        const candidate = userBench.filter(b => !b.injury && (!b.suspension || b.suspension.roundsLeft <= 0) && !b.subbedOut)
          .sort((a, b) => {
            const affA = getPositionAffinity(a, lowRatingP.pos);
            const affB = getPositionAffinity(b, lowRatingP.pos);
            if (affB !== affA) return affB - affA;
            return (b.ovr || 70) - (a.ovr || 70);
          })[0];
        if (candidate && getPositionAffinity(candidate, lowRatingP.pos) >= 0.75) {
          advice = {
            id: "adv_" + this.minute + "_" + Math.floor(Math.random() * 1000),
            urgency: "BAJO RENDIMIENTO",
            category: "SUBSTITUTION",
            title: `Desconexión de ${lowRatingP.name}`,
            diagnosis: `${lowRatingP.name} (${lowRatingP.pos}) está muy impreciso (nota ${(lowRatingP.matchRating || 6.0).toFixed(1)}) y no logra generar ventajas.`,
            recommendation: `Recomendación: Dar entrada a ${candidate.name} para revitalizar el juego y cambiar la dinámica.`,
            action: {
              type: "SUBSTITUTION",
              playerOutId: lowRatingP.id,
              playerInId: candidate.id,
              playerOutName: lowRatingP.name,
              playerInName: candidate.name
            },
            isGoodReading: Math.random() < 0.75
          };
        }
      }
    }

    // 3. REGLA DOMINIO / ASEDIO RIVAL: Si el rival genera mucho peligro o juega muy ofensivo
    if (!advice && (oppShots > userShots + 1 || oppPoss > 53 || oppMentality === "offensive" || oppMentality === "very_offensive")) {
      if (userInst?.outOfPossession?.defensiveLine === "high") {
        advice = {
          id: "adv_" + this.minute + "_" + Math.floor(Math.random() * 1000),
          urgency: "DESAJUSTE DEFENSIVO",
          category: "DEFENSIVE",
          title: "Asedio rival a nuestra espalda",
          diagnosis: `El ${oppTeam.name} nos está ganando la espalda con pases en profundidad sobre nuestra línea adelantada.`,
          recommendation: `Recomendación: Bajar el bloque defensivo a 'Bajo' y ordenar repliegue rápido tras pérdida.`,
          action: {
            type: "TACTIC_PRESET",
            changes: {
              defensiveLine: "low",
              transitionLoss: "regroup"
            }
          },
          isGoodReading: Math.random() < 0.75
        };
      } else if (userInst?.inTransition?.win !== "counter") {
        advice = {
          id: "adv_" + this.minute + "_" + Math.floor(Math.random() * 1000),
          urgency: "OPORTUNIDAD TÁCTICA",
          category: "COUNTER",
          title: "Jugar al Contraataque",
          diagnosis: `El ${oppTeam.name} está volcado en nuestro campo dejando enormes autopistas libres a la espalda de sus centrales.`,
          recommendation: `Recomendación: Activar 'Contraatacar' al recuperar, acelerar el tempo y buscar transiciones verticales al espacio.`,
          action: {
            type: "TACTIC_PRESET",
            changes: {
              transitionWin: "counter",
              passingStyle: "direct",
              tempo: "fast"
            }
          },
          isGoodReading: Math.random() < 0.75
        };
      } else {
        advice = {
          id: "adv_" + this.minute + "_" + Math.floor(Math.random() * 1000),
          urgency: "AJUSTE DEFENSIVO",
          category: "DEFENSIVE",
          title: "Juntar líneas en bloque compacto",
          diagnosis: `Hay demasiada separación entre nuestra zaga y la medular, facilitando que el ${oppTeam.name} reciba solo entre líneas.`,
          recommendation: `Recomendación: Juntar líneas pasando a 'Bloque Medio' y contención en zona para cerrar pasillos interiores.`,
          action: {
            type: "TACTIC_PRESET",
            changes: {
              defensiveLine: "mid",
              pressing: "low",
              width: "balanced"
            }
          },
          isGoodReading: Math.random() < 0.75
        };
      }
    }

    // 4. REGLA RIVAL ENCERRADO ATRÁS: Mucha posesión pero pocas ocasiones
    if (!advice && (userPoss >= 52 || oppInst?.outOfPossession?.defensiveLine === "low") && userOnTarget <= 2) {
      if (userInst?.outOfPossession?.pressing !== "high") {
        advice = {
          id: "adv_" + this.minute + "_" + Math.floor(Math.random() * 1000),
          urgency: "ASFIXIA RIVAL",
          category: "HIGH_PRESS",
          title: "Subir la presión alta",
          diagnosis: `El ${oppTeam.name} está encerrado en su área pero los dejamos respirar y sacar el balón sin agobio.`,
          recommendation: `Recomendación: Subir la presión a 'Asfixiante / Alta' para forzar pérdidas en su propio balcón del área.`,
          action: {
            type: "TACTIC_PRESET",
            changes: {
              pressing: "high",
              defensiveLine: "high",
              transitionLoss: "counterpress"
            }
          },
          isGoodReading: Math.random() < 0.75
        };
      } else if (userInst?.inPossession?.width !== "wide") {
        advice = {
          id: "adv_" + this.minute + "_" + Math.floor(Math.random() * 1000),
          urgency: "DESATASCAR ATAQUE",
          category: "WIDE_PLAY",
          title: "Abrir el campo por las bandas",
          diagnosis: `Estamos chocando contra un muro por el centro. El rival acumula muchos defensas en el carril interior.`,
          recommendation: `Recomendación: Abrir el ataque 'Por Bandas' para que extremos y laterales doblen por fuera y pongan centros.`,
          action: {
            type: "TACTIC_PRESET",
            changes: {
              width: "wide"
            }
          },
          isGoodReading: Math.random() < 0.75
        };
      } else {
        advice = {
          id: "adv_" + this.minute + "_" + Math.floor(Math.random() * 1000),
          urgency: "PRESIÓN OFENSIVA",
          category: "OFFENSIVE",
          title: "Adelantar la línea defensiva",
          diagnosis: `Maduramos la jugada demasiado lejos del área rival, permitiendo que el ${oppTeam.name} bascule sin sufrir.`,
          recommendation: `Recomendación: Adelantar la 'Línea Alta' y subir el tempo para meter al rival dentro de su portería.`,
          action: {
            type: "TACTIC_PRESET",
            changes: {
              defensiveLine: "high",
              tempo: "fast"
            }
          },
          isGoodReading: Math.random() < 0.75
        };
      }
    }

    if (advice) {
      this.currentPendingAdvice = advice;
      this.lastAssistantAdviceMinute = this.minute;
      this.nextAssistantCheckMinute = this.minute + 13 + Math.floor(Math.random() * 4);
      if (this.onAssistantAdvice) {
        this.onAssistantAdvice(advice);
      }
    }
  }

  acceptAssistantAdvice(adviceId) {
    if (!this.currentPendingAdvice || (adviceId && this.currentPendingAdvice.id !== adviceId)) {
      return { success: false, reason: "No hay consejo activo para aplicar" };
    }
    const advice = this.currentPendingAdvice;
    this.currentPendingAdvice = null;

    // Aplicar las modificaciones tácticas o sustitución
    if (advice.action.type === "TACTIC_PRESET") {
      const ch = advice.action.changes || {};
      if (ch.mentality) {
        this.setMentality(this.userSide, ch.mentality);
      }
      const inst = this.userSide === "home" ? this.homeInstructions : this.awayInstructions;
      if (ch.defensiveLine) inst.outOfPossession.defensiveLine = ch.defensiveLine;
      if (ch.pressing) inst.outOfPossession.pressing = ch.pressing;
      if (ch.width) inst.inPossession.width = ch.width;
      if (ch.tempo) inst.inPossession.tempo = ch.tempo;
      if (ch.passingStyle) inst.inPossession.passingStyle = ch.passingStyle;
      if (ch.transitionLoss) inst.inTransition.loss = ch.transitionLoss;
      if (ch.transitionWin) inst.inTransition.win = ch.transitionWin;
      this.setTacticalInstructions(this.userSide, inst);
    } else if (advice.action.type === "SUBSTITUTION") {
      const res = this.makeSubstitution(this.userSide, advice.action.playerOutId, advice.action.playerInId, false);
      if (res.success && !this.isSkippingToEnd && this.hasCustomOnSub) {
        this.pause();
        this.onSubstitution({
          teamSide: this.userSide,
          playerIn: res.inPlayer,
          playerOut: res.outPlayer,
          minute: this.minute,
          remainingSubs: this.userSide === "home" ? this.homeSubsRemaining : this.awaySubsRemaining
        });
      }
    }

    // Activar impacto real en el partido (durante 20 minutos con feedback a los 10 minutos)
    this.activeAssistantAdvice = {
      id: advice.id,
      category: advice.category,
      isGoodReading: advice.isGoodReading,
      appliedAtMinute: this.minute,
      feedbackMinute: this.minute + 10,
      expiresAtMinute: this.minute + 20,
      feedbackDelivered: false,
      diagnosis: advice.diagnosis,
      recommendation: advice.recommendation,
      title: advice.title,
      playerOutName: advice.action?.playerOutName,
      playerInName: advice.action?.playerInName
    };

    this.triggerAlert("CUERPO TÉCNICO", `📋 Ajuste táctico aplicado: ${advice.title}`, this.userSide, 3200);
    return { success: true, advice: this.activeAssistantAdvice };
  }

  dismissAssistantAdvice() {
    this.currentPendingAdvice = null;
    this.nextAssistantCheckMinute = this.minute + 12 + Math.floor(Math.random() * 4);
    return { success: true };
  }

  _deliverAssistantFeedback(adv) {
    let feedbackText = "";
    const oppTeam = this.userSide === "home" ? this.awayTeam : this.homeTeam;

    if (adv.isGoodReading) {
      if (adv.category === "HIGH_PRESS") {
        feedbackText = `Míster, subir la presión ha surtido efecto: hemos recuperado el control del balón y el rival está embotellado.`;
      } else if (adv.category === "WIDE_PLAY") {
        feedbackText = `Míster, abrir el campo por bandas ha funcionado: estamos doblando por fuera y generando peligro constante.`;
      } else if (adv.category === "DEFENSIVE" || adv.category === "HOLD_LEAD") {
        feedbackText = `Míster, el repliegue defensivo nos ha dado solidez atrás: el ${oppTeam.name} ya no encuentra huecos fáciles.`;
      } else if (adv.category === "COUNTER") {
        feedbackText = `Míster, jugar al contraataque está saliendo bien: salimos rápido con espacios y los sorprendemos descolocados.`;
      } else if (adv.category === "SUBSTITUTION") {
        feedbackText = `Míster, la sustitución de ${adv.playerOutName || 'jugador'} por ${adv.playerInName || 'suplente'} ha revitalizado al equipo de inmediato.`;
      } else {
        feedbackText = `Míster, el ajuste táctico ha surtido efecto: el equipo tiene mucho mejor control y solidez.`;
      }
    } else {
      if (adv.category === "DEFENSIVE" || adv.category === "HOLD_LEAD") {
        feedbackText = `Míster, ajustar la defensa nos ha dejado demasiado hundidos: el rival está apretando y colgando balones peligrosos.`;
      } else if (adv.category === "HIGH_PRESS" || adv.category === "OFFENSIVE") {
        feedbackText = `Míster, adelantar tanto las líneas nos está costando la espalda: el rival encuentra pasillos al contragolpe.`;
      } else if (adv.category === "WIDE_PLAY") {
        feedbackText = `Míster, volcarnos a bandas ha dejado desprotegido el centro del campo y estamos sufriendo en la transición.`;
      } else {
        feedbackText = `Míster, el ajuste táctico no ha salido como esperábamos: el rival se ha adaptado rápido y nos está creando peligro.`;
      }
    }

    if (this.onAssistantFeedback) {
      this.onAssistantFeedback({
        success: adv.isGoodReading,
        text: feedbackText,
        minute: this.minute,
        category: adv.category
      });
    }

    this.triggerAlert(adv.isGoodReading ? "ANÁLISIS POSITIVO" : "AVISO TÁCTICO", feedbackText, "neutral", 4000);
  }

  // =========================================================================
  // MOTOR DE SIMULACIÓN CONTINUA EN TIEMPO REAL (105x68m, Steering, IA 22)
  // =========================================================================

  _distPointToSegment(px, py, ax, ay, bx, by) {
    const abx = bx - ax;
    const aby = by - ay;
    const lenSq = abx * abx + aby * aby;
    if (lenSq < 1e-6) return Math.hypot(px - ax, py - ay);
    const t = Math.max(0, Math.min(1, ((px - ax) * abx + (py - ay) * aby) / lenSq));
    return Math.hypot(px - (ax + t * abx), py - (ay + t * aby));
  }

  _emitCommentary(text, tag = "MATCH ENGINE", minGap = 1.4) {
    if (!text || this.commentaryCooldown > 0) return;
    this.commentaryCooldown = minGap;
    if (this.onCommentary) this.onCommentary(text, tag);
  }

  _sync2DToMeters() {
    const syncArr = (arr) => {
      for (let i = 0; i < arr.length; i++) {
        const p = arr[i];
        p.xm = Math.max(0.4, Math.min(104.6, ((p.curX ?? 50) / 100) * 105));
        p.ym = Math.max(0.4, Math.min(67.6, ((p.curY ?? 50) / 100) * 68));
        p.vx = 0;
        p.vy = 0;
        p.speedMps = 0;
        p.controlTimer = 0;
      }
    };
    syncArr(this.home2D);
    syncArr(this.away2D);

    if (this.ball) {
      this.ball.xm = Math.max(0.5, Math.min(104.5, ((this.ball.x ?? 50) / 100) * 105));
      this.ball.ym = Math.max(0.5, Math.min(67.5, ((this.ball.y ?? 50) / 100) * 68));
      this.ball.zm = Math.max(0, (this.ball.z ?? 0) / 2.75);
      this.ball.vx = 0;
      this.ball.vy = 0;
      this.ball.vz = 0;
      this.ball.passTarget = null;
      this.ball.passTeam = null;
      this.ball.shotTeam = null;
      this.ball.shotMeta = null;
      const possList = this.ball.possession === "away" ? this.away2D : this.home2D;
      let nearest = null;
      let minD = 999;
      for (let i = 0; i < possList.length; i++) {
        const d = Math.hypot(possList[i].xm - this.ball.xm, possList[i].ym - this.ball.ym);
        if (d < minD) { minD = d; nearest = possList[i]; }
      }
      this.ball.carrier = nearest;
      if (nearest) nearest.decisionTimer = 0.25;
    }
  }

  _syncEntityTo2D(p) {
    p.curX = (p.xm / 105) * 100;
    p.curY = (p.ym / 68) * 100;
    p.targetX = p.curX;
    p.targetY = p.curY;
    const speed = Math.hypot(p.vx || 0, p.vy || 0);
    p.speedMps = speed;
    if (p.poseTimer && p.poseTimer > 0) {
      p.poseTimer = Math.max(0, p.poseTimer - 0.05);
      p.animPhase = (p.animPhase || 0) + speed * 0.045;
      return;
    }
    if (speed > 0.45) {
      p.facingX = p.vx / speed;
      p.facingZ = p.vy / speed;
      p.facing = Math.atan2(p.vy, p.vx);
      p.animPhase = (p.animPhase || 0) + speed * 0.045;
      p.pose = speed > 5.8 ? "sprint" : "run";
    } else if (this.ball) {
      const dx = (this.ball.xm ?? 52.5) - p.xm;
      const dy = (this.ball.ym ?? 34.0) - p.ym;
      const d = Math.hypot(dx, dy) || 1;
      p.facingX = dx / d;
      p.facingZ = dy / d;
      p.facing = Math.atan2(dy, dx);
      if (!p.pose || p.pose === "run" || p.pose === "sprint" || p.pose === "kick") p.pose = "idle";
    }
  }

  _syncBallTo2D() {
    this.ball.x = ((this.ball.xm ?? 52.5) / 105) * 100;
    this.ball.y = ((this.ball.ym ?? 34.0) / 68) * 100;
    this.ball.z = Math.max(0, (this.ball.zm ?? 0) * 2.75);
    this.ball.targetX = this.ball.x;
    this.ball.targetY = this.ball.y;
    this.ball.targetZ = this.ball.z;
  }

  _syncMetersTo2D() {
    for (let i = 0; i < this.home2D.length; i++) this._syncEntityTo2D(this.home2D[i]);
    for (let i = 0; i < this.away2D.length; i++) this._syncEntityTo2D(this.away2D[i]);
    this._syncBallTo2D();
  }

  // Avanza un tick físico puro (dt = 0.05s = 20 Hz) de los 22 agentes autónomos y el balón
  stepRealTimePhysics(dt = 0.05) {
    if (this.foulCooldown > 0) this.foulCooldown = Math.max(0, this.foulCooldown - dt);
    if (this.commentaryCooldown > 0) this.commentaryCooldown = Math.max(0, this.commentaryCooldown - dt);

    const allPlayers = [...this.home2D, ...this.away2D];
    this._updateTeamAI("home", this.home2D, this.away2D, allPlayers, dt);
    this._updateTeamAI("away", this.away2D, this.home2D, allPlayers, dt);
    this._stepBallPhysics(dt, allPlayers);
    this._syncMetersTo2D();
  }

  _steerPlayer(p, targetX, targetY, desiredSpeedRatio, dt, allPlayers) {
    const energy = p.player?.energy !== undefined ? p.player.energy : 100;
    const fatigueFactor = Math.max(0.68, 0.72 + (energy / 100) * 0.28);
    const effMaxSpeed = (p.maxSpeed || 7.4) * fatigueFactor;
    const effAccel = (p.acceleration || 16.5) * fatigueFactor;

    const dx = targetX - p.xm;
    const dy = targetY - p.ym;
    const dist = Math.hypot(dx, dy);

    let desiredVx = 0;
    let desiredVy = 0;
    if (dist > 0.12) {
      const slowRadius = 2.2;
      const targetSpeed = effMaxSpeed * Math.min(1, desiredSpeedRatio) * (dist < slowRadius ? (dist / slowRadius) : 1);
      desiredVx = (dx / dist) * targetSpeed;
      desiredVy = (dy / dist) * targetSpeed;
    }

    // Fuerza de separación obligatoria entre compañeros (mínimo 6.5m salvo el poseedor en duelo directo)
    // y repulsión de contacto físico con rivales (1.35m)
    let sepX = 0;
    let sepY = 0;
    const isCarrierOrReceiver = (this.ball.carrier === p || this.ball.passTarget === p || p.isKeeper);
    for (let i = 0; i < allPlayers.length; i++) {
      const other = allPlayers[i];
      if (other === p) continue;
      const ox = p.xm - other.xm;
      const oy = p.ym - other.ym;
      const odSq = ox * ox + oy * oy;
      if (odSq < 0.0001) continue;

      const sameTeam = other.side === p.side;
      if (sameTeam && !isCarrierOrReceiver && !other.isKeeper) {
        // Ningún jugador puede apelotonarse a menos de 6.5m de un compañero de su mismo equipo
        const minMateDist = 6.5;
        if (odSq < minMateDist * minMateDist) {
          const od = Math.sqrt(odSq);
          const push = (minMateDist - od) / minMateDist;
          sepX += (ox / od) * push * 4.2;
          sepY += (oy / od) * push * 4.2;
        }
      } else if (odSq < 1.82) {
        const od = Math.sqrt(odSq);
        const push = (1.35 - od) / 1.35;
        sepX += (ox / od) * push * 3.0;
        sepY += (oy / od) * push * 3.0;
      }
    }

    const steerX = (desiredVx + sepX) - p.vx;
    const steerY = (desiredVy + sepY) - p.vy;
    const steerMag = Math.hypot(steerX, steerY);
    const maxDeltaV = effAccel * dt;

    if (steerMag > maxDeltaV && steerMag > 0.0001) {
      p.vx += (steerX / steerMag) * maxDeltaV;
      p.vy += (steerY / steerMag) * maxDeltaV;
    } else {
      p.vx += steerX;
      p.vy += steerY;
    }

    const curSpeed = Math.hypot(p.vx, p.vy);
    if (curSpeed > effMaxSpeed) {
      p.vx = (p.vx / curSpeed) * effMaxSpeed;
      p.vy = (p.vy / curSpeed) * effMaxSpeed;
    }

    p.xm = Math.max(0.4, Math.min(104.6, p.xm + p.vx * dt));
    p.ym = Math.max(0.4, Math.min(67.6, p.ym + p.vy * dt));
    p.desiredX = targetX;
    p.desiredY = targetY;
    if (p.tackleCooldown > 0) p.tackleCooldown = Math.max(0, p.tackleCooldown - dt);
  }

  _getOffsideLineX(attackingTeam, opps) {
    const isHomeAtk = attackingTeam === "home";
    const oppGoalX = isHomeAtk ? 105 : 0;
    const sorted = opps
      .map(o => Math.abs(oppGoalX - o.xm))
      .sort((a, b) => a - b);
    const secondLastDist = sorted.length >= 2 ? sorted[1] : (sorted[0] ?? 15);
    const secondLastX = isHomeAtk ? (oppGoalX - secondLastDist) : (oppGoalX + secondLastDist);
    return isHomeAtk ? Math.max(secondLastX, this.ball.xm) : Math.min(secondLastX, this.ball.xm);
  }

  _computeTeamBlockAnchors(side, mates, inPossession) {
    const isHome = side === "home";
    const attackDir = isHome ? 1 : -1;
    const customMap = isHome ? this.homeCustomPositions : this.awayCustomPositions;
    const inst = isHome ? this.homeInstructions : this.awayInstructions;
    const mentality = isHome ? this.homeMentality : this.awayMentality;

    let mentalityShift = 0;
    if (mentality === "very_offensive" || mentality === "ULTRA_OFFENSIVE") mentalityShift = 8.0;
    else if (mentality === "offensive" || mentality === "OFFENSIVE") mentalityShift = 4.5;
    else if (mentality === "defensive" || mentality === "DEFENSIVE") mentalityShift = -5.0;
    else if (mentality === "very_defensive" || mentality === "ULTRA_DEFENSIVE") mentalityShift = -9.0;

    // 1. ALTURA DE LÍNEA DEFENSIVA (Bloque Alto en X ≈ 0 / xm ≈ 50..54, Bloque Bajo en |X| ≈ 35 / xm ≈ 17 o 88)
    const defLine = inst?.outOfPossession?.defensiveLine || inst?.outOfPossession?.defLine || "mid";
    let lineShift = 0;
    if (defLine === "high" || defLine === "muy_alta" || defLine === "alta") lineShift = 11.5;
    else if (defLine === "low" || defLine === "baja" || defLine === "muy_baja") lineShift = -9.5;

    // 2. ANCHURA TÁCTICA EN POSESIÓN Y SIN POSESIÓN
    const atkWidth = inst?.inPossession?.width || "balanced";
    const defWidth = inst?.outOfPossession?.defenseWidth || "balanced";

    let lateralScale = 1.0;
    if (inPossession) {
      // Juego Abierto por Bandas: extremos/laterales pegados a la cal (Z = ±30m -> ym = 3.5 y 64.5)
      // Juego Interior: carriles interiores (Z = ±14m -> ym = 20 y 48)
      if (atkWidth === "wide") lateralScale = 1.32;
      else if (atkWidth === "center") lateralScale = 0.62;
      else lateralScale = 1.02;
    } else {
      // Defensa Cerrada: bloque compacto en el centro (Z entre -15m y +15m -> ym entre 19 y 49, ancho 30-35m)
      // Cerrar Bandas: laterales abiertos a Z = ±28m (ancho 48-52m) vigilando a los extremos
      if (defWidth === "compact") lateralScale = 0.64;
      else if (defWidth === "wide") lateralScale = 1.26;
      else lateralScale = 0.94;
    }

    const ballShiftX = (this.ball.xm - 52.5) * 0.44;
    // Basculación lateral del 25% hacia donde está el balón
    const ballShiftY = (this.ball.ym - 34) * 0.25;
    const possShiftX = inPossession ? 7.5 : -5.5;
    const teamCentroidX = 52.5 + ballShiftX + attackDir * (mentalityShift + lineShift + possShiftX) * 0.58;

    const outfield = [];
    let minBX = 999, maxBX = -999, sumBX = 0;
    for (let i = 0; i < mates.length; i++) {
      const p = mates[i];
      if (p.isKeeper) continue;
      const custom = customMap && p.player ? customMap[p.player.id] : null;
      const basePctX = custom && typeof custom.x === "number" ? custom.x : p.baseX;
      const basePctY = custom && typeof custom.y === "number" ? custom.y : p.baseY;
      const baseXm = (basePctX / 100) * 105;
      const baseYm = (basePctY / 100) * 68;
      if (baseXm < minBX) minBX = baseXm;
      if (baseXm > maxBX) maxBX = baseXm;
      sumBX += baseXm;
      outfield.push({ p, baseXm, baseYm });
    }

    const baseCentroidX = outfield.length > 0 ? sumBX / outfield.length : 52.5;
    const baseSpan = Math.max(1, maxBX - minBX);
    const maxAllowedSpan = inPossession ? 39.0 : 32.0;
    const spanScale = baseSpan > maxAllowedSpan ? (maxAllowedSpan / baseSpan) : 1.0;

    const anchors = new Map();
    const defCandidates = [];

    for (let i = 0; i < mates.length; i++) {
      const p = mates[i];
      if (p.isKeeper) {
        const ownGoalX = isHome ? 1.8 : 103.2;
        const ballDistFromGoal = Math.abs(this.ball.xm - ownGoalX);
        const stepOut = Math.min(7.5, Math.max(0, (ballDistFromGoal - 18) * 0.14));
        const gkX = ownGoalX + attackDir * stepOut;
        const gkY = Math.max(29.8, Math.min(38.2, 34 + (this.ball.ym - 34) * 0.24));
        anchors.set(p, { x: gkX, y: gkY });
      }
    }

    for (let i = 0; i < outfield.length; i++) {
      const { p, baseXm, baseYm } = outfield[i];
      const relX = (baseXm - baseCentroidX) * spanScale;
      const ax = Math.max(5.0, Math.min(100.0, teamCentroidX + relX));

      // Escalar la anchura lateral respecto al eje central Z=0 (ym=34) + basculación 25%
      const centeredZ = (baseYm - 34.0) * lateralScale;
      let ay = 34.0 + centeredZ + ballShiftY;

      // Si tenemos orden "Juego Abierto por Bandas", fijar extremos/laterales en Z = ±30m (ym = 4.0 o 64.0)
      const pos = p.player?.pos || "";
      if (inPossession && atkWidth === "wide" && ["EI", "ED", "MI", "MD", "LI", "LD"].includes(pos)) {
        ay = baseYm < 34 ? 4.0 : 64.0;
      } else if (!inPossession && defWidth === "wide" && ["LI", "LD"].includes(pos)) {
        ay = baseYm < 34 ? 5.5 : 62.5;
      }

      ay = Math.max(3.2, Math.min(64.8, ay));
      anchors.set(p, { x: ax, y: ay });
      defCandidates.push({ p, distOwnGoal: isHome ? baseXm : (105 - baseXm) });
    }

    // En defensa, los 4 defensas mantienen línea horizontal coordinada según la altura de línea defensiva
    if (!inPossession && defCandidates.length >= 4) {
      defCandidates.sort((a, b) => a.distOwnGoal - b.distOwnGoal);
      const backFour = defCandidates.slice(0, 4);
      let avgDefX = 0;
      for (let i = 0; i < backFour.length; i++) {
        avgDefX += anchors.get(backFour[i].p).x;
      }
      avgDefX /= 4;

      if (defLine === "high" || defLine === "muy_alta" || defLine === "alta") {
        avgDefX = isHome ? Math.max(avgDefX, 46.0) : Math.min(avgDefX, 59.0);
      } else if (defLine === "low" || defLine === "baja" || defLine === "muy_baja") {
        avgDefX = isHome ? Math.min(avgDefX, 19.5) : Math.max(avgDefX, 85.5);
      }

      // Ordenar los 4 defensas de banda izquierda a banda derecha para garantizar 35-50m de ancho sin pisarse
      backFour.sort((a, b) => anchors.get(a.p).y - anchors.get(b.p).y);
      const targetLineWidth = defWidth === "compact" ? 34.0 : (defWidth === "wide" ? 50.0 : 42.0);
      for (let i = 0; i < backFour.length; i++) {
        const slotZ = ((i / 3) - 0.5) * targetLineWidth;
        const slotY = Math.max(4.0, Math.min(64.0, 34.0 + slotZ + ballShiftY * 0.7));
        anchors.set(backFour[i].p, { x: avgDefX, y: slotY });
      }
    }

    // Garantizar separación mínima de 6.8 metros entre cualquier par de anclas del mismo equipo
    const anchorEntries = Array.from(anchors.entries()).filter(([k]) => !k.isKeeper);
    for (let iter = 0; iter < 2; iter++) {
      for (let i = 0; i < anchorEntries.length; i++) {
        for (let j = i + 1; j < anchorEntries.length; j++) {
          const a = anchorEntries[i][1];
          const b = anchorEntries[j][1];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 6.8 && dist > 0.001) {
            const push = (6.8 - dist) * 0.5;
            const ux = dx / dist;
            const uy = dy / dist;
            a.x = Math.max(4, Math.min(101, a.x - ux * push));
            a.y = Math.max(3.2, Math.min(64.8, a.y - uy * push));
            b.x = Math.max(4, Math.min(101, b.x + ux * push));
            b.y = Math.max(3.2, Math.min(64.8, b.y + uy * push));
          }
        }
      }
    }

    return anchors;
  }

  // Selecciona dinámicamente una intención táctica orgánica evitando repetir la anterior
  _getTeamAttackIntent(team) {
    if (!this._teamAttackIntent) this._teamAttackIntent = { home: null, away: null };
    if (!this._teamIntentTimer) this._teamIntentTimer = { home: 0, away: 0 };

    const isHome = team === "home";
    const atkInst = isHome ? this.homeInstructions : this.awayInstructions;
    const defInst = isHome ? this.awayInstructions : this.homeInstructions;
    const width = atkInst?.inPossession?.width || "balanced";
    const oppDefLine = defInst?.outOfPossession?.defensiveLine || defInst?.outOfPossession?.defLine || "mid";
    const oppDefWidth = defInst?.outOfPossession?.defenseWidth || "balanced";

    if (!this._teamAttackIntent[team] || this._teamIntentTimer[team] <= 0) {
      const pool = ["WING_OVERLAP", "CUT_INSIDE_FINESSE", "ONE_TWO_COMBINATION", "THROUGH_BALL_BREAK", "FLANK_SWITCH", "LONG_SHOT_SCREEN"];
      if (width === "wide" || oppDefWidth === "compact") {
        pool.push("WING_OVERLAP", "FLANK_SWITCH", "CUT_INSIDE_FINESSE");
      }
      if (oppDefLine === "high" || oppDefLine === "alta" || oppDefLine === "muy_alta") {
        pool.push("THROUGH_BALL_BREAK", "THROUGH_BALL_BREAK");
      }
      if (oppDefLine === "low" || oppDefLine === "baja" || oppDefLine === "muy_baja") {
        pool.push("ONE_TWO_COMBINATION", "LONG_SHOT_SCREEN", "CUT_INSIDE_FINESSE");
      }
      const prev = this._teamAttackIntent[team];
      const filtered = pool.filter(i => i !== prev);
      this._teamAttackIntent[team] = filtered[Math.floor(Math.random() * filtered.length)] || "ONE_TWO_COMBINATION";
      this._teamIntentTimer[team] = 6.5 + Math.random() * 5.0; // Cambia orgánicamente cada 6.5-11.5s
    }
    return this._teamAttackIntent[team];
  }

  _launchBallPass(passer, receiver, team, customLead = null) {
    const targetX = customLead ? customLead.x : receiver.xm;
    const targetY = customLead ? customLead.y : receiver.ym;
    const dist = Math.hypot(targetX - passer.xm, targetY - passer.ym);
    const lateralDelta = Math.abs(targetY - passer.ym);
    const isLoftedSwitch = (customLead && customLead.isLofted) || dist > 23 || lateralDelta > 19;
    const passSkill = Number(passer.player?.pas || passer.player?.ovr || 72);
    const passSpeed = isLoftedSwitch
      ? Math.min(26.0, Math.max(14.5, 13.5 + dist * 0.35 + (passSkill - 65) * 0.06))
      : Math.min(21.5, Math.max(12.0, 11.0 + dist * 0.42 + (passSkill - 65) * 0.06));
    const estFlight = Math.min(1.35, dist / passSpeed);

    const leadX = customLead
      ? Math.max(2, Math.min(103, customLead.x))
      : Math.max(2, Math.min(103, receiver.xm + receiver.vx * estFlight * 0.65));
    const leadY = customLead
      ? Math.max(2, Math.min(66, customLead.y))
      : Math.max(2, Math.min(66, receiver.ym + receiver.vy * estFlight * 0.65));

    const dx = leadX - this.ball.xm;
    const dy = leadY - this.ball.ym;

    const inaccuracy = Math.max(0.01, (100 - passSkill) * 0.001);
    const angle = Math.atan2(dy, dx) + (Math.random() - 0.5) * inaccuracy;

    this.ball.carrier = null;
    this.ball.passTarget = receiver;
    this.ball.passTeam = team;
    this.ball.shotTeam = null;
    this.ball.shotMeta = null;
    this.ball.assistCandidate = passer;
    this.ball.lastTouchTeam = team;
    this.ball.lastTouchPlayer = passer;
    this.ball.possession = team;
    this.ball.pickupCooldown = 0.14;
    this.ball.vx = Math.cos(angle) * passSpeed;
    this.ball.vy = Math.sin(angle) * passSpeed;
    this.ball.vz = isLoftedSwitch ? Math.min(8.2, 3.0 + dist * 0.13) : 0.08;
    // Efecto de rosca en centros bombeados y cambios de orientación
    this.ball.spin = (customLead && customLead.spin) ? customLead.spin : (isLoftedSwitch ? (targetY > 34 ? -1.4 : 1.4) : 0);

    passer.pose = "kick";
    passer.poseTimer = 0.35;
    passer.facing = angle;
    passer.facingX = Math.cos(angle);
    passer.facingZ = Math.sin(angle);
    passer.aiState = "SUPPORT";
    passer.decisionTimer = 0.42;

    // Pared / Give-and-Go: si el pasador envía el balón al delantero o mediapunta en campo rival,
    // tira un desmarque inmediato hacia adelante para recibir la devolución al primer toque
    const isHome = team === "home";
    const inOppHalf = isHome ? (passer.xm > 48) : (passer.xm < 57);
    const isForwardPass = isHome ? (receiver.xm > passer.xm + 2.5) : (receiver.xm < passer.xm - 2.5);
    if (!passer.isKeeper && inOppHalf && isForwardPass && dist < 18.0 && Math.random() < 0.62) {
      passer.giveAndGoTimer = 1.65;
      passer.giveAndGoPartner = receiver;
    }

    // Espejo de narración en tiempo real nacido de la acción física real ejecutada en este tick
    if (!this._tactical2DOnly) {
      const pName = passer.player?.name || "Jugador";
      const rName = receiver.player?.name || "Compañero";
      const attackDir = isHome ? 1 : -1;
      const forwardGain = (leadX - passer.xm) * attackDir;
      const passKind = customLead?.kind || "PASS";

      if (passKind === "ONE_TWO") {
        this._setTickCommentary(`✨ ¡Pared al primer toque! ${pName} devuelve al espacio para la ruptura de ${rName}.`, "PARED 1-2");
      } else if (passKind === "CUTBACK") {
        this._setTickCommentary(`🎯 ¡Pase de la muerte atrás de ${pName}! ${rName} llega libre desde segunda línea.`, "PASE DE LA MUERTE");
      } else if (passKind === "CROSS") {
        this._setTickCommentary(`🎯 ¡Centro tenso y con rosca de ${pName} al área buscando a ${rName}!`, "CENTRO AL ÁREA");
      } else if (passKind === "SWITCH" || (isLoftedSwitch && lateralDelta > 20)) {
        this._setTickCommentary(`⚡ ¡Cambio de orientación de ${pName}! Abre al lado débil donde ${rName} recibe sin marca.`, "CAMBIO DE JUEGO");
      } else if (passKind === "THROUGH") {
        this._setTickCommentary(`🎯 ¡Balón filtrado de ${pName} al pasillo libre para el desmarque de ${rName}!`, "PASE FILTRADO");
      } else if (passKind === "WING") {
        this._setTickCommentary(`🚀 ${pName} proyecta por la banda hacia ${rName} aprovechando el carril exterior.`, "ATAQUE BANDA");
      } else if (passKind === "RECYCLE" || forwardGain < -1.5) {
        this._setTickCommentary(`🧠 ${pName} ve cerrado el carril interior y descarga con ${rName} libre de marca.`, "CIRCULACIÓN");
      } else if (forwardGain > 4.5) {
        this._setTickCommentary(`👟 ${pName} rompe líneas conectando en ventaja con ${rName}.`, "CONSTRUCCIÓN");
      } else {
        this._setTickCommentary(`👟 ${pName} se apoya en corto con ${rName} moviendo el bloque rival.`, "POSESIÓN");
      }
    }
  }

  _launchBallShot(shooter, team, shotStyle = "NORMAL") {
    const isHome = team === "home";
    const goalX = isHome ? 105.4 : -0.4;
    const sho = Number(shooter.player?.sho || shooter.player?.ovr || 74);
    const energy = shooter.player?.energy !== undefined ? shooter.player.energy : 100;

    const opps = isHome ? this.away2D : this.home2D;
    let nearestOppDist = 99;
    let nearestDef = null;
    for (let i = 0; i < opps.length; i++) {
      if (opps[i].isKeeper) continue;
      const d = Math.hypot(opps[i].xm - shooter.xm, opps[i].ym - shooter.ym);
      if (d < nearestOppDist) {
        nearestOppDist = d;
        nearestDef = opps[i];
      }
    }

    const pressureSpread = nearestOppDist < 2.2 ? 1.85 : (nearestOppDist < 4.2 ? 0.95 : 0.35);
    const skillSpread = Math.max(0.35, (96 - sho) * 0.045) + (100 - energy) * 0.012;
    const totalSpread = skillSpread + pressureSpread;

    const oppGK = opps.find(o => o.isKeeper);
    // Si es tiro con rosca desde la esquina del área (finesse), busca el palo lejano con efecto
    const isFinesse = shotStyle === "FINESSE" || (Math.abs(shooter.ym - 34) > 7.5 && Math.hypot(goalX - shooter.xm, 34 - shooter.ym) > 13.5);
    const preferredCornerY = isFinesse
      ? (shooter.ym > 34 ? 31.1 : 36.9)
      : (oppGK && oppGK.ym > 34 ? 31.35 : 36.65);
    const aimY = preferredCornerY + (Math.random() - 0.5) * totalSpread * 1.85;

    const dx = goalX - this.ball.xm;
    const dy = aimY - this.ball.ym;
    const dist = Math.hypot(dx, dy) || 1;
    const shotSpeed = (isFinesse ? 22.8 : 25.0) + (sho - 60) * 0.16 + Math.random() * 3.0;

    const onTargetAim = aimY >= 30.34 && aimY <= 37.66;
    if (!this._tactical2DOnly && !this._recordingReplayOnly) {
      if (isHome) this.stats.shots.home += 1;
      else this.stats.shots.away += 1;
      if (shooter.player) shooter.player.matchShots = (shooter.player.matchShots || 0) + 1;
    }

    this.ball.carrier = null;
    this.ball.passTarget = null;
    this.ball.passTeam = null;
    this.ball.shotTeam = team;
    this.ball.shotMeta = {
      scorer: shooter,
      assist: this.ball.assistCandidate && this.ball.assistCandidate !== shooter ? this.ball.assistCandidate : null,
      nearestDef,
      oppGK,
      team,
      onTargetAim,
      aimY,
      shotStyle: isFinesse ? "FINESSE" : "POWER"
    };
    this.ball.lastTouchTeam = team;
    this.ball.lastTouchPlayer = shooter;
    this.ball.possession = team;
    this.ball.pickupCooldown = 0.08;
    this.ball.vx = (dx / dist) * shotSpeed;
    this.ball.vy = (dy / dist) * shotSpeed;
    this.ball.vz = isFinesse ? Math.min(2.35, 1.35 + Math.random() * 0.9) : Math.min(2.15, 0.65 + Math.random() * 1.3);
    // Efecto Magnus en tiros con rosca hacia el palo largo
    this.ball.spin = isFinesse ? (shooter.ym > 34 ? -2.8 : 2.8) : ((Math.random() - 0.5) * 0.8);

    const isCloseAerial = this.ball.zm > 0.7 && dist < 13.5;
    shooter.pose = isCloseAerial ? "jump" : "kick";
    shooter.poseTimer = 0.40;
    shooter.facing = Math.atan2(dy, dx);
    shooter.facingX = dx / dist;
    shooter.facingZ = dy / dist;
    shooter.aiState = "SUPPORT";
    shooter.decisionTimer = 0.6;

    if (!this._tactical2DOnly) {
      const sName = shooter.player?.name || "El atacante";
      if (isCloseAerial) {
        this._setTickCommentary(`💥 ¡${sName} se eleva en el área y conecta un remate directo a portería!`, "REMATE");
      } else if (isFinesse) {
        this._setTickCommentary(`✨ ¡${sName} encuentra hueco a ${Math.round(dist)}m y busca el palo largo con rosca!`, "DISPARO");
      } else {
        this._setTickCommentary(`🚀 ¡${sName} ve línea de tiro despejada a ${Math.round(dist)}m y suelta un latigazo!`, "DISPARO");
      }
    }
  }

  // Evalúa en tiempo real la densidad defensiva y el balance numérico (evitando pases 4v2 o a jugadores rodeados)
  _evaluateSpatialDensity(tx, ty, mates, opps, excludeCarrier = null, receiver = null) {
    let oppClose = 0; // Rivales en radio crítico de 4.6m
    let oppMed = 0;   // Rivales en radio de ayuda defensiva de 7.8m
    let mateClose = receiver ? 1 : 0; // Compañeros de apoyo en 5.8m (incluyendo al propio receptor)
    let nearestOppDist = 99;

    for (let i = 0; i < opps.length; i++) {
      const o = opps[i];
      if (o.isKeeper) continue;
      // Predicción corta de posición del defensor (0.2s)
      const ox = o.xm + (o.vx || 0) * 0.2;
      const oy = o.ym + (o.vy || 0) * 0.2;
      const d = Math.hypot(ox - tx, oy - ty);
      if (d < nearestOppDist) nearestOppDist = d;
      if (d < 4.6) oppClose++;
      if (d < 7.8) oppMed++;
    }

    for (let i = 0; i < mates.length; i++) {
      const m = mates[i];
      if (m === excludeCarrier || m === receiver || m.isKeeper) continue;
      const d = Math.hypot(m.xm - tx, m.ym - ty);
      if (d < 5.8) mateClose++;
    }

    // Bloqueo por inferioridad numérica / embudo defensivo (ej. 4v2, 3v1, 2v1 sobre el receptor)
    const isOutnumberedCrowd = (oppClose >= 2 && oppClose > mateClose) || (oppMed >= 3 && oppMed > mateClose + 1);
    return {
      oppClose,
      oppMed,
      mateClose,
      nearestOppDist,
      numericalBalance: mateClose - oppClose,
      isOutnumberedCrowd
    };
  }

  // Comprueba físicamente si el pasillo de pase entre (ax,ay) y (bx,by) será interceptado por un defensor
  _isPassCorridorBlocked(ax, ay, bx, by, opps, isLofted = false) {
    const abx = bx - ax;
    const aby = by - ay;
    const dist = Math.hypot(abx, aby);
    if (dist < 0.5) return false;
    const ballSpd = isLofted ? Math.min(24.0, 13.5 + dist * 0.35) : Math.min(20.5, 11.5 + dist * 0.40);

    for (let i = 0; i < opps.length; i++) {
      const o = opps[i];
      if (o.isKeeper) continue;
      const apx = o.xm - ax;
      const apy = o.ym - ay;
      const t = (apx * abx + apy * aby) / (dist * dist);
      // Ignorar rivales detrás del pasador o más allá del punto de recepción
      if (t < 0.08 || t > 1.02) continue;

      const projX = ax + t * abx;
      const projY = ay + t * aby;
      const perpDist = Math.hypot(o.xm - projX, o.ym - projY);

      if (!isLofted) {
        // Pase raso: bloqueado si hay un rival en el cono directo o si llega antes al punto de corte
        const coneWidth = 1.45 + t * 1.15;
        if (perpDist < coneWidth) return true;
        const ballTimeToProj = (t * dist) / ballSpd;
        const oppSpd = o.maxSpeed || 7.2;
        const oppTimeToProj = Math.max(0, perpDist - 0.95) / oppSpd;
        if (perpDist < 4.2 && oppTimeToProj < ballTimeToProj * 0.88) return true;
      } else {
        // Pase elevado: solo puede ser cortado cerca de la salida o en la caída final
        if (t > 0.82 && perpDist < 1.85) return true;
      }
    }
    return false;
  }

  // Evalúa 8 direcciones en 360° alrededor del poseedor para encontrar el vector de conducción con mayor espacio libre
  _findBestOpenSpaceDribble(carrier, team, mates, opps) {
    const isHome = team === "home";
    const attackDir = isHome ? 1 : -1;
    const baseAngle = isHome ? 0 : Math.PI;
    const rayOffsets = [0, 0.42, -0.42, 0.88, -0.88, 1.38, -1.38, 2.15, -2.15];
    const stepDist = 6.2;

    let bestRay = null;
    let bestRayScore = -999;

    for (let r = 0; r < rayOffsets.length; r++) {
      const ang = baseAngle + rayOffsets[r];
      const tx = carrier.xm + Math.cos(ang) * stepDist;
      const ty = carrier.ym + Math.sin(ang) * stepDist;
      if (tx < 4.5 || tx > 100.5 || ty < 4.5 || ty > 63.5) continue;

      const dens = this._evaluateSpatialDensity(tx, ty, mates, opps, carrier, null);
      if (dens.oppClose >= 2 || dens.nearestOppDist < 2.6) continue;
      if (this._isPassCorridorBlocked(carrier.xm, carrier.ym, tx, ty, opps, false)) continue;

      const forwardGain = (tx - carrier.xm) * attackDir;
      const centerBias = -Math.abs(ty - 34) * 0.14;
      const score = Math.min(30, dens.nearestOppDist * 3.8) - dens.oppClose * 18.0 - dens.oppMed * 4.5 + forwardGain * 2.1 + centerBias;

      if (score > bestRayScore) {
        bestRayScore = score;
        bestRay = {
          x: tx,
          y: ty,
          score,
          nearestOppDist: dens.nearestOppDist,
          forwardGain,
          isDiagonalCut: Math.abs(carrier.ym - 34) > 14 && Math.abs(ty - 34) < Math.abs(carrier.ym - 34) - 2.0
        };
      }
    }
    return bestRay;
  }

  // =========================================================================================
  // EVALUACIÓN DE OPCIONES DE PASE (evaluatePassOptions) Y DESMARQUE ACTIVO SIN BALÓN
  // =========================================================================================
  // Evalúa para cada compañero disponible una puntuación determinista basada en:
  // 1) Distancia al defensa rival más cercano (premia fuertemente el espacio libre y penaliza 4 vs 2)
  // 2) Si la línea recta entre pasador y receptor está despejada de rivales
  // 3) Avance hacia la portería rival
  evaluatePassOptions(carrier, team, mates, opps) {
    const isHome = team === "home";
    const attackDir = isHome ? 1 : -1;
    const goalX = isHome ? 105 : 0;
    const goalY = 34;
    const carrierDistToGoal = Math.hypot(goalX - carrier.xm, goalY - carrier.ym);
    const offsideLineX = this._getOffsideLineX(team, opps);

    const defInst = isHome ? this.awayInstructions : this.homeInstructions;
    const oppDefWidth = defInst?.outOfPossession?.defenseWidth || "balanced";
    const oppDefLine = defInst?.outOfPossession?.defensiveLine || defInst?.outOfPossession?.defLine || "mid";

    const inFinalThird = isHome ? (carrier.xm > 75) : (carrier.xm < 30);
    const nearByline = isHome ? (carrier.xm > 89.5) : (carrier.xm < 15.5);
    const onWing = carrier.ym < 16.5 || carrier.ym > 51.5;

    const evaluatedOptions = [];

    for (let i = 0; i < mates.length; i++) {
      const m = mates[i];
      if (m === carrier || m.isKeeper) continue;

      const passDist = Math.hypot(m.xm - carrier.xm, m.ym - carrier.ym);
      if (passDist < 3.8 || passDist > 49.0) continue;

      // Descartar compañeros en posición de fuera de juego
      const isOffside = isHome ? (m.xm > offsideLineX + 0.35) : (m.xm < offsideLineX - 0.35);
      if (isOffside) continue;

      const forwardGain = (m.xm - carrier.xm) * attackDir;
      const isWinger = m.ym < 15.5 || m.ym > 52.5;
      const isOppositeFlank = (carrier.ym < 25 && m.ym > 43) || (carrier.ym > 43 && m.ym < 25);
      const inBox = (isHome ? m.xm > 76 : m.xm < 29) && Math.abs(m.ym - 34) < 17.5;

      // Puntos candidatos de recepción para este compañero (al pie y al espacio libre donde se está desmarcando)
      const candidateTargets = [];

      // A) Recepción al pie / bolsillo de apoyo actual
      candidateTargets.push({
        x: Math.max(3.0, Math.min(102.0, m.xm + (m.vx || 0) * 0.35)),
        y: Math.max(3.0, Math.min(65.0, m.ym + (m.vy || 0) * 0.35)),
        isLofted: false,
        spin: 0,
        kind: forwardGain < -1.5 ? "RECYCLE" : "PASS",
        tacticalFit: forwardGain < -1.5 ? 5.0 : 0
      });

      // B) Si el compañero ya está desmarcándose hacia un bolsillo libre (unmarkedTarget), evaluar pase a ese espacio
      if (m.unmarkedTarget) {
        candidateTargets.push({
          x: Math.max(3.5, Math.min(101.5, isHome ? Math.min(offsideLineX - 0.4, m.unmarkedTarget.x) : Math.max(offsideLineX + 0.4, m.unmarkedTarget.x))),
          y: Math.max(3.5, Math.min(64.5, m.unmarkedTarget.y)),
          isLofted: false,
          spin: 0,
          kind: ((m.unmarkedTarget.x - carrier.xm) * attackDir > 3.5) ? "THROUGH" : "PASS",
          tacticalFit: 8.0
        });
      }

      // C) Devolución de pared (Give-and-Go 1-2) al espacio
      if (m.giveAndGoTimer > 0 && m.giveAndGoPartner === carrier) {
        candidateTargets.push({
          x: isHome ? Math.min(offsideLineX - 0.4, m.xm + 5.5) : Math.max(offsideLineX + 0.4, m.xm - 5.5),
          y: Math.max(5.0, Math.min(63.0, m.ym + (34 - m.ym) * 0.16)),
          isLofted: false,
          spin: 0,
          kind: "ONE_TWO",
          tacticalFit: 14.0
        });
      }

      // D) Pase filtrado al espacio (Through Ball) hacia portería
      if (forwardGain > 1.8 && (isHome ? (m.xm > 44 && m.xm <= offsideLineX + 0.2) : (m.xm < 61 && m.xm >= offsideLineX - 0.2))) {
        const throughX = isHome
          ? Math.min(97.0, Math.min(offsideLineX + 1.2, m.xm + 6.8))
          : Math.max(8.0, Math.max(offsideLineX - 1.2, m.xm - 6.8));
        const throughY = Math.max(5.5, Math.min(62.5, m.ym + (34 - m.ym) * 0.20));
        candidateTargets.push({
          x: throughX,
          y: throughY,
          isLofted: false,
          spin: 0,
          kind: "THROUGH",
          tacticalFit: (oppDefLine === "high" || oppDefLine === "alta" || oppDefLine === "muy_alta") ? 12.0 : 8.5
        });
      }

      // E) Cambio de orientación a compañero abierto en banda contraria
      if (isOppositeFlank && passDist > 17.5) {
        candidateTargets.push({
          x: isHome ? Math.min(offsideLineX - 0.4, m.xm + 4.2) : Math.max(offsideLineX + 0.4, m.xm - 4.2),
          y: m.ym,
          isLofted: true,
          spin: m.ym > 34 ? -1.8 : 1.8,
          kind: "SWITCH",
          tacticalFit: oppDefWidth === "compact" ? 13.0 : 9.0
        });
      }

      // F) Apertura a banda / doblaje de lateral
      if (isWinger && forwardGain > 0.5) {
        candidateTargets.push({
          x: isHome ? Math.min(offsideLineX - 0.4, m.xm + 4.2) : Math.max(offsideLineX + 0.4, m.xm - 4.2),
          y: m.ym,
          isLofted: passDist > 24.0,
          spin: 0,
          kind: "WING",
          tacticalFit: (m.aiState === "OVERLAP" || oppDefWidth === "compact") ? 10.5 : 7.0
        });
      }

      // G) Pase de la muerte atrás (Cutback) o centro tenso si el pasador está en banda en último tercio y el receptor en el área
      if (inFinalThird && onWing && inBox) {
        const isCutbackZone = nearByline && Math.abs(m.ym - 34) < 10.5 && (isHome ? (m.xm >= 83 && m.xm <= 95.5) : (m.xm >= 9.5 && m.xm <= 22));
        candidateTargets.push({
          x: isCutbackZone
            ? (isHome ? Math.min(95.0, m.xm + 1.2) : Math.max(10.0, m.xm - 1.2))
            : (isHome ? Math.min(97.2, Math.max(88.5, m.xm + 2.2)) : Math.max(7.8, Math.min(16.5, m.xm - 2.2))),
          y: Math.max(24.0, Math.min(44.0, m.ym)),
          isLofted: !isCutbackZone,
          spin: !isCutbackZone ? (carrier.ym > 34 ? -2.2 : 2.2) : 0,
          kind: isCutbackZone ? "CUTBACK" : "CROSS",
          tacticalFit: isCutbackZone ? 14.0 : 9.0
        });
      }

      let bestCandForMate = null;
      let bestCandScore = -9999;

      for (let c = 0; c < candidateTargets.length; c++) {
        const cand = candidateTargets[c];
        const dens = this._evaluateSpatialDensity(cand.x, cand.y, mates, opps, carrier, m);

        // 1) PUNTUACIÓN POR DISTANCIA AL DEFENSA MÁS CERCANO (Premia fuertemente el espacio libre y castiga el 4 vs 2)
        const nearestDefDist = dens.nearestOppDist;
        let spaceScore = Math.min(88.0, nearestDefDist * 8.6)
          - dens.oppClose * 32.0
          - dens.oppMed * 8.5
          + dens.numericalBalance * 13.5;

        // Bonus extra a jugador desmarcado; si nearestDefenderDist > 6.5m (ej. 4 vs 2 con compañero abierto en banda),
        // disparar el peso de spaceScore para que el pase se ejecute inmediatamente en vez de conducir hacia el centro (y = 34)
        if (nearestDefDist > 6.5 && dens.oppClose === 0) {
          spaceScore += 68.0 + Math.min(32.0, (nearestDefDist - 6.5) * 6.5);
        } else if (dens.oppClose === 0 && nearestDefDist >= 5.0) {
          spaceScore += 28.0;
        }
        if (dens.isOutnumberedCrowd || nearestDefDist < 2.35) {
          spaceScore -= 85.0;
        }

        // 2) PUNTUACIÓN DE LÍNEA DE PASE RECTA DESPEJADA ENTRE PASADOR Y RECEPTOR
        let minLineDist = 99;
        const cDist = Math.hypot(cand.x - carrier.xm, cand.y - carrier.ym) || 1;
        for (let j = 0; j < opps.length; j++) {
          const o = opps[j];
          if (o.isKeeper) continue;
          const projT = ((o.xm - carrier.xm) * (cand.x - carrier.xm) + (o.ym - carrier.ym) * (cand.y - carrier.ym)) / (cDist * cDist);
          if (projT >= 0.06 && projT <= 1.02) {
            const segD = this._distPointToSegment(o.xm, o.ym, carrier.xm, carrier.ym, cand.x, cand.y);
            if (segD < minLineDist) minLineDist = segD;
          }
        }
        const corridorBlocked = this._isPassCorridorBlocked(carrier.xm, carrier.ym, cand.x, cand.y, opps, cand.isLofted);
        const isLineClear = !corridorBlocked && (cand.isLofted ? minLineDist >= 1.75 : minLineDist >= 2.25);

        let lineClearScore = 0;
        if (!isLineClear) {
          lineClearScore = -95.0; // Línea bloqueada por un rival
        } else {
          lineClearScore = 20.0 + Math.min(18.0, (minLineDist - 2.0) * 3.8);
        }

        // 3) PUNTUACIÓN DE AVANCE HACIA LA PORTERÍA RIVAL
        const targetDistToGoal = Math.hypot(goalX - cand.x, goalY - cand.y);
        const goalDistGain = carrierDistToGoal - targetDistToGoal;
        const forwardXGain = (cand.x - carrier.xm) * attackDir;
        const advanceScore = goalDistGain * 1.95 + forwardXGain * 1.35;

        // El ajuste táctico solo suma si el receptor está libre y la línea está despejada
        const validTacticalBonus = (isLineClear && !dens.isOutnumberedCrowd && dens.oppClose === 0) ? cand.tacticalFit : 0;
        const totalScore = spaceScore + lineClearScore + advanceScore + validTacticalBonus;

        if (totalScore > bestCandScore) {
          bestCandScore = totalScore;
          bestCandForMate = {
            receiver: m,
            lead: cand,
            score: totalScore,
            spaceScore,
            lineClearScore,
            advanceScore,
            nearestDefenderDist: nearestDefDist,
            minLineDist,
            isLineClear,
            isOutnumberedCrowd: dens.isOutnumberedCrowd,
            oppClose: dens.oppClose
          };
        }
      }

      if (bestCandForMate) {
        evaluatedOptions.push(bestCandForMate);
      }
    }

    // Ordenar de mayor a menor puntuación (el compañero libre gana siempre por amplio margen sobre un delantero marcado en 4 vs 2)
    evaluatedOptions.sort((a, b) => b.score - a.score);
    const bestViable = evaluatedOptions.find(opt =>
      opt.isLineClear &&
      !opt.isOutnumberedCrowd &&
      opt.nearestDefenderDist >= 2.3 &&
      opt.score > -10
    ) || null;

    return {
      bestOption: bestViable,
      allOptions: evaluatedOptions
    };
  }

  // Calcula dinámicamente para cada jugador sin balón una zona de desmarque lejos de los defensas rivales
  // y con línea de pase abierta respecto al poseedor
  _findUnmarkedOffBallSpace(player, baseAnchorX, baseAnchorY, carrier, team, mates, opps, offsideLineX) {
    const isHome = team === "home";
    const attackDir = isHome ? 1 : -1;
    const goalX = isHome ? 105 : 0;
    const goalY = 34;
    const refX = carrier ? carrier.xm : this.ball.xm;
    const refY = carrier ? carrier.ym : this.ball.ym;

    // 1. Vector de repulsión directa respecto a los defensas cercanos (< 6.5m) para alejarse de la marca
    let repulseX = 0;
    let repulseY = 0;
    for (let j = 0; j < opps.length; j++) {
      const o = opps[j];
      if (o.isKeeper) continue;
      const dx = player.xm - o.xm;
      const dy = player.ym - o.ym;
      const d = Math.hypot(dx, dy);
      if (d < 6.5 && d > 0.05) {
        const strength = ((6.5 - d) / 6.5) * 4.8;
        repulseX += (dx / d) * strength;
        repulseY += (dy / d) * strength;
      }
    }

    const centerX = Math.max(5.0, Math.min(100.0, baseAnchorX + repulseX * 0.65));
    const centerY = Math.max(4.0, Math.min(64.0, baseAnchorY + repulseY * 0.85));

    // 2. Muestrear bolsillos de espacio candidato alrededor del ancla (desmarque de ruptura, diagonal, apoyo, amplitud)
    const offsets = [
      { dx: 0, dy: 0 },
      { dx: attackDir * 5.2, dy: 0 },
      { dx: attackDir * 4.8, dy: 5.5 },
      { dx: attackDir * 4.8, dy: -5.5 },
      { dx: 0, dy: 6.5 },
      { dx: 0, dy: -6.5 },
      { dx: -attackDir * 3.8, dy: 4.5 },
      { dx: -attackDir * 3.8, dy: -4.5 },
      { dx: repulseX * 1.2, dy: repulseY * 1.2 }
    ];

    let bestSpot = { x: centerX, y: centerY, score: -9999 };

    for (let k = 0; k < offsets.length; k++) {
      let cx = centerX + offsets[k].dx;
      let cy = centerY + offsets[k].dy;

      // Respetar línea de fuera de juego y límites del campo
      cx = isHome ? Math.min(cx, offsideLineX - 0.85) : Math.max(cx, offsideLineX + 0.85);
      cx = Math.max(4.5, Math.min(100.5, cx));
      cy = Math.max(3.8, Math.min(64.2, cy));

      // Distancia al defensa rival más cercano (prioridad máxima: alejarse de los defensas)
      let nearestDef = 99;
      let defCrowding = 0;
      for (let j = 0; j < opps.length; j++) {
        const o = opps[j];
        if (o.isKeeper) continue;
        const d = Math.hypot(o.xm - cx, o.ym - cy);
        if (d < nearestDef) nearestDef = d;
        if (d < 5.0) defCrowding += (5.0 - d) * 6.5;
      }

      // Evitar amontonarse con otros compañeros de ataque (< 6.8m)
      let mateCrowding = 0;
      for (let j = 0; j < mates.length; j++) {
        const m = mates[j];
        if (m === player || m.isKeeper) continue;
        const targetMx = m.unmarkedTarget ? m.unmarkedTarget.x : m.xm;
        const targetMy = m.unmarkedTarget ? m.unmarkedTarget.y : m.ym;
        const dm = Math.hypot(targetMx - cx, targetMy - cy);
        if (dm < 6.8) mateCrowding += (6.8 - dm) * 8.0;
      }

      // Comprobar si desde este punto ofrece una línea de pase limpia al jugador con balón
      let minPassLineDist = 99;
      const distFromBall = Math.hypot(cx - refX, cy - refY);
      if (distFromBall > 3.5 && distFromBall < 42.0) {
        for (let j = 0; j < opps.length; j++) {
          const o = opps[j];
          if (o.isKeeper) continue;
          const segD = this._distPointToSegment(o.xm, o.ym, refX, refY, cx, cy);
          if (segD < minPassLineDist) minPassLineDist = segD;
        }
      }
      const lineBonus = minPassLineDist >= 2.6 ? Math.min(18.0, minPassLineDist * 3.2) : -22.0;

      // Avance hacia portería sin perder estructura táctica
      const distGoal = Math.hypot(goalX - cx, goalY - cy);
      const baseDistGoal = Math.hypot(goalX - baseAnchorX, goalY - baseAnchorY);
      const advanceBonus = (baseDistGoal - distGoal) * 1.45;
      const anchorDriftPenalty = Math.hypot(cx - baseAnchorX, cy - baseAnchorY) * 0.85;

      const score = Math.min(42.0, nearestDef * 5.2)
        - defCrowding
        - mateCrowding
        + lineBonus
        + advanceBonus
        - anchorDriftPenalty;

      if (score > bestSpot.score) {
        bestSpot = { x: cx, y: cy, score, nearestDef };
      }
    }

    player.unmarkedTarget = bestSpot;
    return bestSpot;
  }

  // TOMA DE DECISIONES DEL JUGADOR CON BALÓN EN TIEMPO REAL (Basada en evaluatePassOptions + Pitch Control)
  _evaluateCarrierDecision(carrier, team, mates, opps) {
    const isHome = team === "home";
    const goalX = isHome ? 105 : 0;
    const goalY = 34;
    const dxGoal = goalX - carrier.xm;
    const dyGoal = goalY - carrier.ym;
    const distToGoal = Math.hypot(dxGoal, dyGoal);
    const goalAngle = Math.atan2(dyGoal, dxGoal);
    const intent = this._getTeamAttackIntent(team);

    let minFrontalOppDist = 99;
    let nearestAnyOpp = 99;
    for (let i = 0; i < opps.length; i++) {
      const o = opps[i];
      const dx = o.xm - carrier.xm;
      const dy = o.ym - carrier.ym;
      const d = Math.hypot(dx, dy);
      if (d < nearestAnyOpp) nearestAnyOpp = d;

      const oppAngle = Math.atan2(dy, dx);
      const angleDiff = Math.abs(Math.atan2(Math.sin(oppAngle - goalAngle), Math.cos(oppAngle - goalAngle)));
      const segDist = this._distPointToSegment(o.xm, o.ym, carrier.xm, carrier.ym, goalX, goalY);
      if ((angleDiff <= Math.PI / 5 || segDist < 2.8) && d <= distToGoal + 1.0) {
        if (d < minFrontalOppDist) minFrontalOppDist = d;
      }
    }

    // 1. EVALUAR TODAS LAS OPCIONES DE PASE CON evaluatePassOptions ANTES DE DECIDIR UN DISPARO LEJANO
    const inOpponentHalf = isHome ? (carrier.xm > 52.5) : (carrier.xm < 52.5);
    if (inOpponentHalf) {
      carrier.decisionTimer = Math.min(carrier.decisionTimer || 0.14, 0.14);
    }
    const { bestOption, allOptions } = this.evaluatePassOptions(carrier, team, mates, opps);

    // Si existe un compañero libre en el último tercio (nearestDefenderDist >= 5.0 y isLineClear === true, como en un 4 vs 2 en banda o segundo palo)
    // y el portador está a más de 13 metros de portería o con un rival a menos de 3.2 metros en su línea de tiro,
    // priorizar SIEMPRE el pase al compañero libre sobre el disparo o la conducción.
    const bestReceiverInFinalThird = Boolean(
      bestOption &&
      (isHome
        ? (bestOption.receiver.xm >= 70.0 || bestOption.lead.x >= 70.0)
        : (bestOption.receiver.xm <= 35.0 || bestOption.lead.x <= 35.0))
    );
    const hasOpenTeammateInFinalThird = Boolean(
      bestOption &&
      bestOption.isLineClear === true &&
      bestOption.nearestDefenderDist >= 5.0 &&
      bestReceiverInFinalThird
    );

    if (hasOpenTeammateInFinalThird && (distToGoal > 13.0 || minFrontalOppDist < 3.2)) {
      carrier.openDribbleTarget = null;
      this._launchBallPass(carrier, bestOption.receiver, team, bestOption.lead);
      return;
    }

    // Si hay un compañero muy libre con nearestDefenderDist > 6.5m y línea despejada en cualquier zona de ataque,
    // ejecutar el pase inmediatamente en lugar de seguir conduciendo hacia el centro (y = 34)
    if (bestOption && bestOption.nearestDefenderDist > 6.5 && bestOption.isLineClear && (distToGoal > 13.0 || minFrontalOppDist < 3.2)) {
      carrier.openDribbleTarget = null;
      this._launchBallPass(carrier, bestOption.receiver, team, bestOption.lead);
      return;
    }

    // 2. DISPARO A PUERTA (shotRange normal reducido a 16.5m dentro del área; fuera del área exige minFrontalOppDist >= 3.2m)
    if (!carrier.isKeeper) {
      const shotRange = intent === "LONG_SHOT_SCREEN" ? 22.5 : (intent === "CUT_INSIDE_FINESSE" ? 19.5 : 16.5);
      const isOutsideBox = distToGoal > 16.5 || (isHome ? carrier.xm < 88.5 : carrier.xm > 16.5);
      const hasClearShotLane = isOutsideBox
        ? (minFrontalOppDist >= 3.2)
        : (minFrontalOppDist >= 1.95 || (distToGoal < 11.5 && minFrontalOppDist >= 1.35));

      if (distToGoal <= shotRange && hasClearShotLane) {
        const isWideAngle = Math.abs(carrier.ym - 34) > 14.5 && (isHome ? carrier.xm > 91 : carrier.xm < 14);
        if (!isWideAngle) {
          this._launchBallShot(carrier, team, intent === "CUT_INSIDE_FINESSE" ? "FINESSE" : "NORMAL");
          return;
        }
      }
    }

    // 3. EVALUAR VECTOR DE CONDUCCIÓN AL ESPACIO LIBRE EN 360°
    const bestDribbleRay = !carrier.isKeeper ? this._findBestOpenSpaceDribble(carrier, team, mates, opps) : null;

    // 4. COMPARAR PASE ÓPTIMO VS CONDUCCIÓN AL ESPACIO LIBRE
    if (bestDribbleRay && !carrier.isKeeper) {
      const passScore = bestOption ? bestOption.score : -999;
      // Si no hay pase claro o el poseedor tiene una autopista libre por delante mejor que el pase (y ningún compañero tiene > 6.5m de ventaja)
      const shouldDribble = !bestOption ||
        (bestOption.nearestDefenderDist <= 6.5 && bestDribbleRay.nearestOppDist >= 5.2 && bestDribbleRay.forwardGain > 2.5 && (bestDribbleRay.score + 18.0 > passScore) && distToGoal < 42.0);

      if (shouldDribble) {
        carrier.openDribbleTarget = bestDribbleRay;
        carrier.aiState = bestDribbleRay.isDiagonalCut ? "CUT_INSIDE" : "SPRINT_TO_GOAL";
        if (!this._tactical2DOnly && (!carrier._lastDribbleCommentAt || (this.matchSecond !== carrier._lastDribbleCommentAt))) {
          carrier._lastDribbleCommentAt = this.matchSecond;
          const cName = carrier.player?.name || "El poseedor";
          this._setTickCommentary(
            bestDribbleRay.isDiagonalCut
              ? `⚡ ${cName} traza la diagonal hacia dentro buscando ángulo libre.`
              : `⚡ ${cName} detecta a los delanteros vigilados y conduce hacia el espacio libre.`,
            "CONDUCCIÓN"
          );
        }
        return;
      }
    }

    if (bestOption) {
      carrier.openDribbleTarget = null;
      this._launchBallPass(carrier, bestOption.receiver, team, bestOption.lead);
      return;
    }

    // 5. VÁLVULA DE ESCAPE SI HAY BLOQUEO (4 vs 2): buscar en allOptions al compañero con mayor distancia a defensas y línea limpia
    const safestRecycle = allOptions.find(opt => opt.isLineClear && opt.nearestDefenderDist >= 2.2);
    if (safestRecycle) {
      carrier.openDribbleTarget = null;
      this._launchBallPass(carrier, safestRecycle.receiver, team, {
        ...safestRecycle.lead,
        kind: "RECYCLE"
      });
      return;
    }

    if (bestDribbleRay) {
      carrier.openDribbleTarget = bestDribbleRay;
    }
    carrier.aiState = "SPRINT_TO_GOAL";
  }

  _updateTeamAI(team, mates, opps, allPlayers, dt) {
    const isHome = team === "home";
    const attackDir = isHome ? 1 : -1;
    const inPossession = this.ball.possession === team;
    const carrier = this.ball.carrier;
    const carrierInTeam = carrier && carrier.side === team ? carrier : null;
    const anchors = this._computeTeamBlockAnchors(team, mates, inPossession);

    if (this._teamIntentTimer && this._teamIntentTimer[team] > 0) {
      this._teamIntentTimer[team] = Math.max(0, this._teamIntentTimer[team] - dt);
    }

    if (inPossession) {
      const intent = this._getTeamAttackIntent(team);
      const offsideLineX = this._getOffsideLineX(team, opps);
      const clampOnsideX = (tx, player) => {
        if (this.ball.carrier === null && this.ball.passTarget === player && this.ball.passTeam === team) {
          return tx;
        }
        return isHome ? Math.min(tx, offsideLineX - 0.9) : Math.max(tx, offsideLineX + 0.9);
      };

      const carrierReadyToPass = carrierInTeam && carrierInTeam.controlTimer <= 0 && carrierInTeam.decisionTimer <= 0.25;
      const ballInWideFinalThird = (isHome ? this.ball.xm > 72 : this.ball.xm < 33) && (this.ball.ym < 18 || this.ball.ym > 50);

      const forwardIds = new Set();
      const boxRunners = [];
      mates.forEach(m => {
        if (m !== carrierInTeam && !m.isKeeper) {
          const pos = m.player?.pos || "";
          const isAttackerPos = ["DC", "ED", "EI", "SD", "MCO", "MD", "MI"].includes(pos);
          const isAheadBase = isHome ? (m.baseX >= 58) : (m.baseX <= 42);
          if (isAttackerPos || isAheadBase) {
            forwardIds.add(m);
            boxRunners.push(m);
          }
        }
      });

      // Detectar si un lateral debe doblar por fuera (OVERLAP) al extremo con balón
      let overlapFullback = null;
      if (carrierInTeam && !carrierInTeam.isKeeper && Math.abs(carrierInTeam.ym - 34) > 14 && (isHome ? carrierInTeam.xm > 48 : carrierInTeam.xm < 57)) {
        const sameSideTop = carrierInTeam.ym < 34;
        overlapFullback = mates.find(m =>
          m !== carrierInTeam &&
          ["LD", "LI", "CAD", "CAI"].includes(m.player?.pos) &&
          (sameSideTop ? m.ym < 34 : m.ym > 34)
        ) || null;
      }

      let looseChaser = null;
      if (!carrierInTeam && (!this.ball.passTarget || this.ball.passTarget.side !== team)) {
        let bestD = 999;
        for (let i = 0; i < mates.length; i++) {
          if (mates[i].isKeeper) continue;
          const d = Math.hypot(mates[i].xm - this.ball.xm, mates[i].ym - this.ball.ym);
          if (d < bestD) {
            bestD = d;
            looseChaser = mates[i];
          }
        }
      }

      for (let i = 0; i < mates.length; i++) {
        const p = mates[i];
        const anchor = anchors.get(p) || { x: p.xm, y: p.ym };
        if (p.giveAndGoTimer > 0) p.giveAndGoTimer = Math.max(0, p.giveAndGoTimer - dt);

        if (p === looseChaser) {
          p.aiState = "RECEIVE";
          this._steerPlayer(p, this.ball.xm + this.ball.vx * 0.15, this.ball.ym + this.ball.vy * 0.15, 0.98, dt, allPlayers);
          continue;
        }

        if (p === carrierInTeam) {
          if (p.controlTimer > 0) {
            p.controlTimer = Math.max(0, p.controlTimer - dt);
            p.aiState = "CONTROL";
            const pivotX = isHome ? Math.min(104, p.xm + 3.5) : Math.max(1, p.xm - 3.5);
            this._steerPlayer(p, pivotX, 34 + (p.ym - 34) * 0.5, 0.25, dt, allPlayers);
            continue;
          }
          const inOpponentHalf = isHome ? (p.xm > 52.5) : (p.xm < 52.5);
          if (inOpponentHalf && p.decisionTimer > 0.14) {
            p.decisionTimer = 0.14;
          }
          p.decisionTimer -= dt;
          if (p.decisionTimer <= 0) {
            let pressed = false;
            for (let j = 0; j < opps.length; j++) {
              if (Math.hypot(opps[j].xm - p.xm, opps[j].ym - p.ym) < 3.4) {
                pressed = true;
                break;
              }
            }
            p.decisionTimer = inOpponentHalf ? 0.14 : (pressed ? 0.22 : 0.34);
            this._evaluateCarrierDecision(p, team, mates, opps);
          }

          if (this.ball.carrier === p) {
            const goalX = isHome ? 105 : 0;
            const dGoalNow = Math.hypot(goalX - p.xm, 34 - p.ym);
            if (!p.isKeeper && (p.aiState === "SPRINT_TO_GOAL" || p.aiState === "CUT_INSIDE") && dGoalNow <= 16.5 && Math.abs(p.ym - 34) < 14.5) {
              // Comprobar si hay rival bloqueando a menos de 2.2m o un compañero desmarcado antes de chutar en conducción
              let minFrontDist = 99;
              for (let j = 0; j < opps.length; j++) {
                const od = Math.hypot(opps[j].xm - p.xm, opps[j].ym - p.ym);
                const isAhead = isHome ? (opps[j].xm >= p.xm - 0.3) : (opps[j].xm <= p.xm + 0.3);
                if (isAhead && od < minFrontDist) minFrontDist = od;
              }
              if (dGoalNow <= 13.0 && minFrontDist >= 1.85) {
                this._launchBallShot(p, team, p.aiState === "CUT_INSIDE" ? "FINESSE" : "NORMAL");
                continue;
              }
            }

            // Conducción inteligente hacia el vector de espacio libre 360° evaluado tick a tick
            let driveX = isHome ? 94 : 11;
            let driveY = 34;
            if (p.openDribbleTarget) {
              driveX = p.openDribbleTarget.x;
              driveY = p.openDribbleTarget.y;
            } else if (p.aiState === "CUT_INSIDE") {
              driveX = isHome ? Math.min(93, p.xm + 8) : Math.max(12, p.xm - 8);
              driveY = p.ym > 34 ? Math.max(29, p.ym - 9.5) : Math.min(39, p.ym + 9.5);
            } else {
              // Vector de evasión lateral respecto al rival frontal más cercano
              let evadeY = 0;
              for (let j = 0; j < opps.length; j++) {
                const o = opps[j];
                if (o.isKeeper) continue;
                const d = Math.hypot(o.xm - p.xm, o.ym - p.ym);
                const ahead = isHome ? (o.xm > p.xm - 0.5 && o.xm < p.xm + 6.5) : (o.xm < p.xm + 0.5 && o.xm > p.xm - 6.5);
                if (ahead && d < 6.0) {
                  evadeY += (p.ym >= o.ym ? 5.5 : -5.5) * (1 - d / 6.0);
                }
              }
              driveX = isHome ? Math.min(96, p.xm + 12) : Math.max(9, p.xm - 12);
              driveY = Math.max(6, Math.min(62, p.ym + (34 - p.ym) * 0.25 + evadeY));
            }

            const speedRatio = p.aiState === "SPRINT_TO_GOAL" ? 0.98 : 0.90;
            this._steerPlayer(p, driveX, driveY, speedRatio, dt, allPlayers);
          } else {
            this._steerPlayer(p, clampOnsideX(anchor.x, p), anchor.y, 0.74, dt, allPlayers);
          }
        } else if (this.ball.carrier === null && this.ball.passTarget === p && this.ball.passTeam === team) {
          p.aiState = "RECEIVE";
          this._steerPlayer(p, this.ball.xm + this.ball.vx * 0.18, this.ball.ym + this.ball.vy * 0.18, 0.98, dt, allPlayers);
        } else if (p.giveAndGoTimer > 0) {
          // Carrera de pared (Give-and-Go): busca el bolsillo libre de defensas hacia adelante
          p.aiState = "MAKE_RUN";
          const baseWallX = clampOnsideX(p.xm + attackDir * 9.5, p);
          const baseWallY = Math.max(8, Math.min(60, p.ym + (34 - p.ym) * 0.32));
          const freeSpot = this._findUnmarkedOffBallSpace(p, baseWallX, baseWallY, carrierInTeam, team, mates, opps, offsideLineX);
          this._steerPlayer(p, clampOnsideX(freeSpot.x, p), freeSpot.y, 0.98, dt, allPlayers);
        } else if (p === overlapFullback) {
          // Doblaje de lateral por fuera buscando zona libre en banda
          p.aiState = "OVERLAP";
          const overX = clampOnsideX(carrierInTeam.xm + attackDir * 9.0, p);
          const overY = carrierInTeam.ym < 34 ? 4.2 : 63.8;
          const freeSpot = this._findUnmarkedOffBallSpace(p, overX, overY, carrierInTeam, team, mates, opps, offsideLineX);
          this._steerPlayer(p, clampOnsideX(freeSpot.x, p), freeSpot.y, 0.97, dt, allPlayers);
        } else if (ballInWideFinalThird && forwardIds.has(p)) {
          // Desmarques activos en el área: parten de los 3 carriles (1er palo, 2º palo, penalti) y se separan de sus marcadores
          p.aiState = "MAKE_RUN";
          const rIdx = boxRunners.indexOf(p);
          const ballTop = this.ball.ym < 34;
          let boxTargetX, boxTargetY;
          if (rIdx % 3 === 0) {
            boxTargetX = isHome ? 96.5 : 8.5;
            boxTargetY = ballTop ? 29.0 : 39.0;
          } else if (rIdx % 3 === 1) {
            boxTargetX = isHome ? 95.0 : 10.0;
            boxTargetY = ballTop ? 39.5 : 28.5;
          } else {
            boxTargetX = isHome ? 89.5 : 15.5;
            boxTargetY = 34.0;
          }
          const freeBoxSpot = this._findUnmarkedOffBallSpace(p, clampOnsideX(boxTargetX, p), boxTargetY, carrierInTeam, team, mates, opps, offsideLineX);
          this._steerPlayer(p, clampOnsideX(freeBoxSpot.x, p), freeBoxSpot.y, 0.96, dt, allPlayers);
        } else if (forwardIds.has(p)) {
          // Delanteros y extremos sin balón: se desmarcan activamente alejándose de los centrales/laterales rivales
          p.aiState = "MAKE_RUN";
          const edgeX = isHome ? Math.min(anchor.x + 5.0, offsideLineX - 0.9) : Math.max(anchor.x - 5.0, offsideLineX + 0.9);
          const freeAttackSpot = this._findUnmarkedOffBallSpace(p, edgeX, anchor.y, carrierInTeam, team, mates, opps, offsideLineX);
          this._steerPlayer(p, clampOnsideX(freeAttackSpot.x, p), freeAttackSpot.y, carrierReadyToPass ? 0.95 : 0.86, dt, allPlayers);
        } else if (!p.isKeeper) {
          // Centrocampistas y defensas de apoyo: se mueven a bolsillos lejos de rivales para ofrecer línea de pase limpia
          p.aiState = "SUPPORT";
          const freeSupportSpot = this._findUnmarkedOffBallSpace(p, anchor.x, anchor.y, carrierInTeam, team, mates, opps, offsideLineX);
          this._steerPlayer(p, clampOnsideX(freeSupportSpot.x, p), freeSupportSpot.y, 0.82, dt, allPlayers);
        } else {
          p.aiState = "GK";
          this._steerPlayer(p, anchor.x, anchor.y, 0.78, dt, allPlayers);
        }
      }
    } else {
      // DISCIPLINA DEFENSIVA: 1 presionador directo + cobertura + marcaje en el área
      let solePresser = null;
      let minBallDist = 999;
      for (let i = 0; i < mates.length; i++) {
        const m = mates[i];
        if (m.isKeeper) continue;
        const d = Math.hypot(m.xm - this.ball.xm, m.ym - this.ball.ym);
        if (d < minBallDist) {
          minBallDist = d;
          solePresser = m;
        }
      }

      const ownGoalX = isHome ? 1.8 : 103.2;
      const ownGoalY = 34;

      const ballInOwnHalf = isHome ? (this.ball.xm < 52.5) : (this.ball.xm > 52.5);
      let coverCB = null;
      if (ballInOwnHalf) {
        let bestCBDist = 999;
        for (let i = 0; i < mates.length; i++) {
          const m = mates[i];
          if (m.isKeeper || m === solePresser) continue;
          const pos = m.player?.pos || "";
          const isDef = pos === "DFC" || pos === "LI" || pos === "LD" || pos === "MCD";
          if (!isDef) continue;
          const d = Math.hypot(m.xm - this.ball.xm, m.ym - this.ball.ym) - (pos === "DFC" ? 4.0 : 0);
          if (d < bestCBDist) {
            bestCBDist = d;
            coverCB = m;
          }
        }
      }

      for (let i = 0; i < mates.length; i++) {
        const p = mates[i];
        const anchor = anchors.get(p) || { x: p.xm, y: p.ym };

        if (p.isKeeper) {
          p.aiState = "GK";
          const gkX = isHome ? 1.5 : 103.5;
          const gkSkill = Number(p.player?.por || p.player?.par || p.player?.ovr || 74);
          const reflexRatio = Math.max(0.75, Math.min(1.12, 0.78 + (gkSkill - 55) * 0.006));
          const oppShotIncoming = this.ball.shotTeam && this.ball.shotTeam !== team &&
            ((isHome && this.ball.vx < -0.5) || (!isHome && this.ball.vx > 0.5));

          if (oppShotIncoming) {
            const tCross = (gkX - this.ball.xm) / this.ball.vx;
            if (tCross > 0 && tCross < 2.2) {
              const predY = Math.max(30.2, Math.min(37.8, this.ball.ym + this.ball.vy * tCross));
              p.pose = "dive";
              this._steerPlayer(p, gkX, predY, reflexRatio, dt, allPlayers);
              continue;
            }
          }

          const ballInBox = isHome ? (this.ball.xm < 16.5 && Math.abs(this.ball.ym - 34) < 18) : (this.ball.xm > 88.5 && Math.abs(this.ball.ym - 34) < 18);
          if (ballInBox && this.ball.carrier === null && Math.hypot(this.ball.vx, this.ball.vy) < 8.5) {
            this._steerPlayer(p, this.ball.xm, this.ball.ym, 0.96, dt, allPlayers);
          } else {
            this._steerPlayer(p, anchor.x, anchor.y, 0.85, dt, allPlayers);
          }
          continue;
        }

        if (p === solePresser) {
          p.aiState = "PRESSING";
          const b2gX = ownGoalX - this.ball.xm;
          const b2gY = ownGoalY - this.ball.ym;
          const b2gLen = Math.hypot(b2gX, b2gY) || 1;
          const targetX = this.ball.xm + (b2gX / b2gLen) * 0.4;
          const targetY = this.ball.ym + (b2gY / b2gLen) * 0.4;
          this._steerPlayer(p, targetX, targetY, 1.0, dt, allPlayers);

          if (this.ball.carrier && this.ball.carrier.side !== team && p.tackleCooldown <= 0) {
            const dCarrier = Math.hypot(p.xm - this.ball.carrier.xm, p.ym - this.ball.carrier.ym);
            if (dCarrier < 1.55) {
              this._attemptTackle(p, this.ball.carrier, team);
            }
          }
        } else if (p === coverCB) {
          p.aiState = "COVER_FRONTAL";
          const segT = 0.28;
          const blockX = Math.max(2.0, Math.min(103.0, this.ball.xm + (ownGoalX - this.ball.xm) * segT));
          const blockY = Math.max(4.0, Math.min(64.0, this.ball.ym + (ownGoalY - this.ball.ym) * segT));
          this._steerPlayer(p, blockX, blockY, 0.96, dt, allPlayers);

          if (this.ball.carrier && this.ball.carrier.side !== team && p.tackleCooldown <= 0) {
            const dCarrier = Math.hypot(p.xm - this.ball.carrier.xm, p.ym - this.ball.carrier.ym);
            if (dCarrier < 1.55) {
              this._attemptTackle(p, this.ball.carrier, team);
            }
          }
        } else {
          p.aiState = "DEFEND_ZONE";
          const b2gX = ownGoalX - this.ball.xm;
          const b2gY = ownGoalY - this.ball.ym;
          const b2gLen = Math.hypot(b2gX, b2gY) || 1;
          const coverY = Math.max(4.0, Math.min(64.0, anchor.y + (b2gY / b2gLen) * 1.4));
          this._steerPlayer(p, anchor.x, coverY, 0.82, dt, allPlayers);
        }
      }
    }
  }

  _attemptTackle(defender, carrier, defTeam) {
    defender.tackleCooldown = 0.9;
    const defStat = Number(defender.player?.def || defender.player?.ovr || 70);
    const driStat = Number(carrier.player?.dri || carrier.player?.ovr || 70);
    const winChance = Math.max(0.22, Math.min(0.75, 0.44 + (defStat - driStat) * 0.008));

    if (Math.random() < winChance) {
      const prevCarrierName = carrier.player?.name || "el atacante";
      const defName = defender.player?.name || "El defensor";
      this.ball.carrier = defender;
      this.ball.possession = defTeam;
      this.ball.lastTouchTeam = defTeam;
      this.ball.lastTouchPlayer = defender;
      this.ball.assistCandidate = null;
      this.ball.pickupCooldown = 0.2;
      defender.pose = "tackle";
      defender.poseTimer = 0.36;
      defender.controlTimer = 0.25 + Math.random() * 0.15;
      defender.decisionTimer = Math.max(defender.controlTimer, 0.32);
      if (!this._tactical2DOnly) {
        this._setTickCommentary(`🛡️ ¡Anticipación y robo físico de ${defName} sobre ${prevCarrierName}!`, "ROBO DEFENSIVO");
        if (!this._recordingReplayOnly && defender.player) {
          defender.player.matchTackles = (defender.player.matchTackles || 0) + 1;
        }
      }
    } else if (!this._tactical2DOnly && this.foulCooldown <= 0 && Math.random() < 0.09) {
      this.foulCooldown = 4.0;
      const attackingTeam = carrier.side;
      if (!this._recordingReplayOnly) {
        if (attackingTeam === "home") this.stats.fouls.away += 1;
        else this.stats.fouls.home += 1;
      }

      // Evaluar si la entrada ilegal se produjo físicamente dentro del área de penalti (|X| > 36 y |Z| < 20.16)
      const cx = carrier.xm - 52.5;
      const cz = carrier.ym - 34.0;
      const isHomeAtk = attackingTeam === "home";
      const inRivalPenaltyBox = isHomeAtk
        ? (cx > 36.0 && Math.abs(cz) < 20.16)
        : (cx < -36.0 && Math.abs(cz) < 20.16);
      const distToRivalGoal = Math.hypot((isHomeAtk ? 52.5 : -52.5) - cx, 0 - cz);

      if (this._recordingReplayOnly) {
        if (inRivalPenaltyBox) {
          this._pendingTickOutcome = {
            outcome: "PENALTY",
            attackingSide: attackingTeam,
            shooter: carrier.player,
            defender: defender.player
          };
          return;
        }
        if (distToRivalGoal <= 31.0) {
          this._pendingTickOutcome = {
            outcome: "FREE_KICK",
            attackingSide: attackingTeam,
            shooter: carrier.player,
            defender: defender.player,
            spot: {
              spot: {
                x: (carrier.xm / 105) * 100,
                y: (carrier.ym / 68) * 100,
                xm: carrier.xm,
                ym: carrier.ym,
                cx,
                cz
              },
              distanceMeters: Math.round(distToRivalGoal)
            }
          };
          return;
        }
      }

      if (!this._recordingReplayOnly && Math.random() < 0.14 && defender.player) {
        this._awardCardRealTime(defender.player, defTeam, "YELLOW");
      }

      const mates = attackingTeam === "home" ? this.home2D : this.away2D;
      const opps = attackingTeam === "home" ? this.away2D : this.home2D;
      const { bestOption, allOptions } = this.evaluatePassOptions(carrier, attackingTeam, mates, opps);
      const chosen = bestOption || allOptions[0];
      if (chosen) {
        this._launchBallPass(carrier, chosen.receiver, attackingTeam, chosen.lead);
      }
    }
  }

  _awardCardRealTime(player, side, cardType) {
    if (!player) return;
    const min = Math.max(1, this.minute);
    if (cardType === "YELLOW") {
      player.matchYellowCards = (player.matchYellowCards || 0) + 1;
      const isSecondYellow = player.matchYellowCards >= 2;
      if (!this.matchCards || typeof this.matchCards !== "object" || Array.isArray(this.matchCards)) {
        this.matchCards = { yellows: {}, reds: {} };
      }
      if (isSecondYellow) {
        this.matchCards.reds[player.id] = { player, reason: "Segunda amarilla", minute: min, team: side };
        if (this.stats.redCards) this.stats.redCards[side] = (this.stats.redCards[side] || 0) + 1;
      } else {
        this.matchCards.yellows[player.id] = { player, minute: min, team: side };
        if (this.stats.yellowCards) this.stats.yellowCards[side] = (this.stats.yellowCards[side] || 0) + 1;
      }
      this.events.push({
        minute: min,
        type: isSecondYellow ? "RED_CARD" : "YELLOW_CARD",
        team: side,
        player: player.name,
        text: isSecondYellow
          ? `🟥 ¡Segunda amarilla y expulsión para ${player.name}!`
          : `🟨 Tarjeta amarilla para ${player.name}.`
      });
      if (this.onCard) {
        this.onCard({ minute: min, team: side, player, type: isSecondYellow ? "RED" : "YELLOW" });
      }
    }
  }

  _handleRealTimeGoal(scoringSide) {
    const isHome = scoringSide === "home";
    const meta = this.ball.shotMeta || {};
    const scorer2D = meta.scorer || this.ball.lastTouchPlayer;
    const assist2D = meta.assist;
    const scorerObj = scorer2D?.player || null;
    const assistObj = assist2D?.player || null;

    // Si estamos grabando en FAST_SIM para el replayBuffer, NO sumar el gol todavía:
    // se sumará en _commitReplayClimax en el instante exacto en que el balón cruce la línea de gol en 3D
    if (this._recordingReplayOnly) {
      const atkTeam = isHome ? this.homeTeam : this.awayTeam;
      const defTeam = isHome ? this.awayTeam : this.homeTeam;
      const gkObj = meta.oppGK?.player || (isHome ? this.awayPlayersOnPitch[0] : this.homePlayersOnPitch[0]);
      const defObj = meta.nearestDef?.player || null;
      const sName = scorerObj?.name || atkTeam.shortName;

      this._setTickCommentary(`⚽ ¡GOOOOL de ${sName}! El balón cruza físicamente la línea de meta.`, "¡GOL!");

      this._pendingTickOutcome = {
        outcome: "GOAL",
        attackingSide: scoringSide,
        shooter: scorerObj,
        passer: assistObj,
        defender: defObj,
        goalkeeper: gkObj,
        headline: "OCASIÓN MANIFIESTA DE GOL",
        buildNote: `⚡ ${atkTeam.shortName} mueve el balón buscando espacios frente a ${defTeam.shortName}.`,
        shotNote: `⚽ ¡Definición letal de ${sName} al fondo de la red!`
      };
      this.ball.shotTeam = null;
      return;
    }

    if (isHome) this.homeScore += 1;
    else this.awayScore += 1;

    if (scorerObj) {
      scorerObj.matchGoals = (scorerObj.matchGoals || 0) + 1;
      scorerObj.matchRating = Math.min(10, (scorerObj.matchRating || 6.5) + 1.1);
    }
    if (assistObj && assistObj !== scorerObj) {
      assistObj.matchAssists = (assistObj.matchAssists || 0) + 1;
      assistObj.matchRating = Math.min(10, (assistObj.matchRating || 6.5) + 0.6);
    }

    const scorerName = scorerObj?.name || (isHome ? "Delantero local" : "Delantero visitante");
    const assistName = assistObj && assistObj !== scorerObj ? assistObj.name : null;
    const min = Math.max(1, this.minute);
    const tName = isHome ? (this.homeTeam.shortName || this.homeTeam.name) : (this.awayTeam.shortName || this.awayTeam.name);

    this.events.push({
      minute: min,
      type: "GOAL",
      team: scoringSide,
      player: scorerName,
      assist: assistName,
      text: `⚽ ¡GOL de ${scorerName} (${tName}) en el ${min}'!${assistName ? ` Asistencia de ${assistName}.` : ""}`
    });

    const concedingSide = isHome ? "away" : "home";
    const atkTeam = isHome ? this.homeTeam : this.awayTeam;

    if (scoringSide === "home") this.stats.shotsOnTarget.home += 1;
    else this.stats.shotsOnTarget.away += 1;

    this.ball.xm = isHome ? 105.9 : -0.9;
    this.ball.ym = Math.max(30.6, Math.min(37.4, this.ball.ym));
    this.ball.zm = Math.min(2.2, Math.max(0.2, this.ball.zm));
    this.ball.vx = 0;
    this.ball.vy = 0;
    this.ball.vz = 0;
    this.ball.carrier = null;
    this.ball.shotTeam = null;
    this._syncBallTo2D();

    if (this.isSkippingToEnd) {
      this.resetKickoff(concedingSide);
    } else {
      this.pause();
    }

    if (this.onGoal) {
      this.onGoal({
        minute: min,
        scoringSide,
        concedingSide,
        atkTeam,
        shooter: scorerObj || { name: scorerName },
        scorer: scorerName,
        assist: assistName,
        score: `${this.homeScore} - ${this.awayScore}`,
        homeScore: this.homeScore,
        awayScore: this.awayScore,
        isSkipped: this.isSkippingToEnd,
        state: this.getState()
      });
    }
    if (this.onTick) this.onTick(this.getState());
  }

  _restartFromCornerOrGoalKick(side, cornerSide, isCorner) {
    const isHomeAttacking = side === "home";
    const mates = isHomeAttacking ? this.home2D : this.away2D;
    const tName = isHomeAttacking ? (this.homeTeam.shortName || this.homeTeam.name) : (this.awayTeam.shortName || this.awayTeam.name);

    if (isCorner) {
      if (!this._recordingReplayOnly) {
        if (isHomeAttacking) this.stats.corners.home += 1;
        else this.stats.corners.away += 1;
      }

      const cx = cornerSide === "right" ? 104.2 : 0.8;
      const cy = this.ball.ym < 34 ? 1.2 : 66.8;
      const taker = mates.find(m => !m.isKeeper) || mates[1];
      if (taker) {
        taker.xm = cx;
        taker.ym = cy;
        taker.vx = 0;
        taker.vy = 0;
        this.ball.xm = cx;
        this.ball.ym = cy;
        this.ball.zm = 0;
        this.ball.vx = 0;
        this.ball.vy = 0;
        this.ball.vz = 0;
        this.ball.shotTeam = null;
        this.ball.carrier = taker;
        this.ball.possession = side;
        const opps = isHomeAttacking ? this.away2D : this.home2D;
        const { bestOption, allOptions } = this.evaluatePassOptions(taker, side, mates, opps);
        const chosen = bestOption || allOptions[0];
        if (chosen) {
          this._launchBallPass(taker, chosen.receiver, side, chosen.lead);
        }
      }
    } else {
      const gk = mates.find(m => m.isKeeper) || mates[0];
      if (gk) {
        const gx = isHomeAttacking ? 5.5 : 99.5;
        gk.xm = gx;
        gk.ym = 34;
        gk.vx = 0;
        gk.vy = 0;
        this.ball.xm = gx;
        this.ball.ym = 34;
        this.ball.zm = 0;
        this.ball.vx = 0;
        this.ball.vy = 0;
        this.ball.vz = 0;
        this.ball.shotTeam = null;
        this.ball.carrier = gk;
        this.ball.possession = side;
        gk.decisionTimer = 0.25;
      }
    }
  }

  _stepBallPhysics(dt, allPlayers) {
    const b = this.ball;
    if (b.pickupCooldown > 0) b.pickupCooldown = Math.max(0, b.pickupCooldown - dt);

    if (b.carrier) {
      const c = b.carrier;
      const fx = c.facingX !== undefined ? c.facingX : (c.side === "home" ? 1 : -1);
      const fz = c.facingZ !== undefined ? c.facingZ : 0;
      const cSpd = Math.hypot(c.vx || 0, c.vy || 0);
      const touchNudge = cSpd > 0.6 ? (0.48 + 0.26 * Math.max(0, Math.sin((c.animPhase || 0) * 2.2))) : 0.52;
      const targetBx = Math.max(0.2, Math.min(104.8, c.xm + fx * touchNudge));
      const targetBy = Math.max(0.2, Math.min(67.8, c.ym + fz * touchNudge));
      const lerpBall = Math.min(1, dt * 15.5);
      b.xm += (targetBx - b.xm) * lerpBall;
      b.ym += (targetBy - b.ym) * lerpBall;
      b.zm = Math.max(0, (b.zm || 0) * 0.6);
      b.vx = c.vx;
      b.vy = c.vy;
      b.vz = 0;
      return;
    }

    // Efecto Magnus (rosca lateral en tiros con curva y centros tensos)
    if (b.spin && Math.abs(b.spin) > 0.05) {
      const spdH = Math.hypot(b.vx, b.vy);
      if (spdH > 3.0) {
        const nx = -b.vy / spdH;
        const ny = b.vx / spdH;
        b.vx += nx * b.spin * dt * 1.45;
        b.vy += ny * b.spin * dt * 1.45;
      }
      b.spin *= Math.exp(-1.1 * dt);
    }

    b.xm += b.vx * dt;
    b.ym += b.vy * dt;
    b.zm += b.vz * dt;

    b.vz -= 9.81 * dt;
    if (b.zm <= 0) {
      b.zm = 0;
      if (b.vz < -1.1) {
        b.vz = -b.vz * 0.45;
      } else {
        b.vz = 0;
      }
    }

    const damp = b.zm < 0.25 ? Math.exp(-1.15 * dt) : Math.exp(-0.22 * dt);
    b.vx *= damp;
    b.vy *= damp;
    if (b.zm === 0 && Math.hypot(b.vx, b.vy) < 0.25) {
      b.passTeam = null;
      b.shotTeam = null;
    }

    // Comprobar porterías y líneas de fondo:
    // X >= 52.5 -> xm >= 105, X <= -52.5 -> xm <= 0; |Z| < 3.66 -> |ym - 34| < 3.66; Y < 2.44 -> zm < 2.44
    const absZ = Math.abs(b.ym - 34);
    const inGoalMouthY = absZ < 3.66 && b.zm < 2.44;
    const hitPostY = (absZ >= 3.66 && absZ <= 3.92 && b.zm <= 2.52) || (absZ < 3.66 && b.zm >= 2.44 && b.zm <= 2.60);

    if (b.xm >= 105 || b.xm <= 0) {
      const crossingSide = b.xm >= 105 ? "home" : "away";
      if (inGoalMouthY) {
        this._handleRealTimeGoal(crossingSide);
        return;
      }

      // Si había un disparo a puerta que se estrella en el poste o sale rozando el palo durante FAST_SIM:
      if (this._recordingReplayOnly && b.shotTeam === crossingSide) {
        const meta = b.shotMeta || {};
        const isPost = hitPostY;
        const isCloseWide = absZ < 6.8;
        if (isPost || isCloseWide) {
          const sName = meta.scorer?.player?.name || "el atacante";
          const note = isPost
            ? `🥅 ¡Al palo! El disparo de ${sName} se estrella violentamente en la madera.`
            : `💨 ¡Fuera! El disparo de ${sName} cruza la línea de fondo lamiendo el poste.`;
          this._setTickCommentary(note, isPost ? "AL PALO" : "FUERA");
          this._pendingTickOutcome = {
            outcome: isPost ? "POST" : "WIDE",
            attackingSide: crossingSide,
            shooter: meta.scorer?.player || null,
            passer: meta.assist?.player || null,
            defender: meta.nearestDef?.player || null,
            goalkeeper: meta.oppGK?.player || null,
            headline: isPost ? "¡DISPARO A LA MADERA!" : "OCASIÓN CLARA DE PELIGRO",
            shotNote: note
          };
          b.shotTeam = null;
          if (isPost) b.vx = -b.vx * 0.55;
          return;
        }
      }

      const isCorner = crossingSide === "home" ? (b.lastTouchTeam === "away") : (b.lastTouchTeam === "home");
      this._restartFromCornerOrGoalKick(
        isCorner ? crossingSide : (crossingSide === "home" ? "away" : "home"),
        crossingSide === "home" ? "right" : "left",
        isCorner
      );
      return;
    }

    // Saque de banda si sale por los laterales (y <= 0 o y >= 68)
    if (b.ym <= 0.1 || b.ym >= 67.9) {
      const throwTeam = b.lastTouchTeam === "home" ? "away" : "home";
      const mates = throwTeam === "home" ? this.home2D : this.away2D;
      b.ym = b.ym <= 0.1 ? 0.6 : 67.4;
      b.xm = Math.max(3, Math.min(102, b.xm));
      b.zm = 0;
      b.vx = 0;
      b.vy = 0;
      b.vz = 0;
      b.shotTeam = null;
      const taker = mates.filter(m => !m.isKeeper).sort((a, c) => Math.hypot(a.xm - b.xm, a.ym - b.ym) - Math.hypot(c.xm - b.xm, c.ym - b.ym))[0];
      if (taker) {
        taker.xm = b.xm;
        taker.ym = b.ym;
        b.carrier = taker;
        b.possession = throwTeam;
        taker.decisionTimer = 0.2;
      }
      return;
    }

    // Intercepción en vuelo / paradas físicas del portero (< 1.2m) / bloqueos defensivos
    if (b.pickupCooldown <= 0) {
      const ballSpeed = Math.hypot(b.vx, b.vy);
      for (let i = 0; i < allPlayers.length; i++) {
        const p = allPlayers[i];
        const dist = Math.hypot(p.xm - b.xm, p.ym - b.ym);
        const reach = p.isKeeper ? 1.25 : 1.05;
        const maxZ = p.isKeeper ? 2.44 : 1.75;
        if (dist > reach || b.zm > maxZ) continue;

        if (b.shotTeam && p.side !== b.shotTeam) {
          const shotSide = b.shotTeam;
          const meta = b.shotMeta || {};

          if (p.isKeeper) {
            p.pose = "dive";
            const saveBecomesCorner = ballSpeed >= 22.0;
            const gkName = p.player?.name || "el portero";
            const shName = meta.scorer?.player?.name || "el delantero";
            const saveText = `🧤 ¡Paradón físico de ${gkName} desviando el remate de ${shName}!`;
            this._setTickCommentary(saveText, "PARADÓN");

            if (this._recordingReplayOnly) {
              this._pendingTickOutcome = {
                outcome: "SAVE",
                attackingSide: shotSide,
                shooter: meta.scorer?.player || null,
                passer: meta.assist?.player || null,
                defender: meta.nearestDef?.player || null,
                goalkeeper: p.player || null,
                saveBecomesCorner,
                headline: "¡INTERVENCIÓN DEL GUARDAMETA!",
                shotNote: saveText
              };
            } else if (!this._tactical2DOnly) {
              if (shotSide === "home") this.stats.shotsOnTarget.home += 1;
              else this.stats.shotsOnTarget.away += 1;
              if (p.player) p.player.matchSaves = (p.player.matchSaves || 0) + 1;
            }

            if (!saveBecomesCorner) {
              b.carrier = p;
              b.shotTeam = null;
              b.shotMeta = null;
              b.possession = p.side;
              b.lastTouchTeam = p.side;
              b.lastTouchPlayer = p;
              p.decisionTimer = 0.35;
            } else {
              b.vx = (p.side === "home" ? 1 : -1) * 8.5;
              b.vy = (b.ym >= 34 ? 1 : -1) * 11.5;
              b.vz = 2.4;
              b.shotTeam = null;
              b.lastTouchTeam = p.side;
              b.lastTouchPlayer = p;
              b.pickupCooldown = 0.25;
            }
            return;
          } else if (ballSpeed > 10 && Math.random() < 0.52) {
            // Bloqueo físico de un defensa interponiéndose en la trayectoria del tiro
            b.vx = -b.vx * 0.35 + (Math.random() - 0.5) * 4;
            b.vy = -b.vy * 0.35 + (Math.random() - 0.5) * 4;
            b.shotTeam = null;
            b.lastTouchTeam = p.side;
            b.lastTouchPlayer = p;
            b.pickupCooldown = 0.2;
            const defName = p.player?.name || "El central";
            const shName = meta.scorer?.player?.name || "el atacante";
            const blockText = `🛡️ ¡${defName} se cruza en la trayectoria y bloquea el disparo de ${shName}!`;
            this._setTickCommentary(blockText, "BLOQUEO");

            if (this._recordingReplayOnly && Math.random() < 0.45) {
              this._pendingTickOutcome = {
                outcome: "BLOCK",
                attackingSide: shotSide,
                shooter: meta.scorer?.player || null,
                passer: meta.assist?.player || null,
                defender: p.player || null,
                goalkeeper: meta.oppGK?.player || null,
                headline: "¡BLOQUEO DEFENSIVO IN EXTREMIS!",
                shotNote: blockText
              };
            }
            return;
          }
        } else if (!b.shotTeam) {
          if (p.side !== b.passTeam || p === b.passTarget || ballSpeed < 12) {
            const interceptChance = p.side !== b.passTeam ? (ballSpeed > 18 ? 0.62 : 0.85) : 0.94;
            if (Math.random() < interceptChance) {
              const wasIntercept = b.passTeam && p.side !== b.passTeam;
              b.carrier = p;
              b.passTarget = null;
              b.passTeam = null;
              b.possession = p.side;
              b.lastTouchTeam = p.side;
              b.lastTouchPlayer = p;
              b.pickupCooldown = 0.15;
              const isHome = p.side === "home";
              const goalX = isHome ? 105 : 0;
              const inAttackingBox = !p.isKeeper && Math.abs(goalX - p.xm) < 16.5;
              const inOpponentHalf = isHome ? (p.xm > 52.5) : (p.xm < 52.5);
              p.controlTimer = inAttackingBox ? 0.04 : (inOpponentHalf ? 0.08 : (0.18 + Math.random() * 0.10));
              p.decisionTimer = inAttackingBox ? 0.06 : (inOpponentHalf ? 0.14 : Math.max(p.controlTimer, wasIntercept ? 0.24 : 0.30));
              if (wasIntercept && !this._tactical2DOnly) {
                this._setTickCommentary(`🛡️ ¡${p.player?.name || "La defensa"} lee la línea de pase e intercepta el envío!`, "INTERCEPCIÓN");
              }
              return;
            }
          }
        }
      }
    }
  }

  _processRealTimeMinute(m) {
    this.minute = m;

    // Desgaste físico y minutos jugados
    const drainTeam = (players, inst) => {
      const press = inst?.outOfPossession?.pressing || "normal";
      const drainMult = press === "muy_alto" ? 1.25 : (press === "alto" ? 1.12 : 1.0);
      players.forEach(p => {
        p.matchMinutes = (p.matchMinutes || 0) + 1;
        if (p.pos !== "POR") {
          p.energy = Math.max(15, (p.energy ?? 100) - (0.34 * drainMult));
        }
      });
    };
    drainTeam(this.homePlayersOnPitch, this.homeInstructions);
    drainTeam(this.awayPlayersOnPitch, this.awayInstructions);

    // Expirar gritos y charlas temporales
    if (this.activeShout && m >= this.activeShout.expiresAt) {
      this.activeShout = null;
    }
    if (this.activeTeamTalk && m >= this.activeTeamTalk.expiresAt) {
      this.activeTeamTalk = null;
    }
    if (this.activeCrowdRoar && m >= this.activeCrowdRoar.expiresAt) {
      this.activeCrowdRoar = null;
    }

    // Sustituciones automáticas de la IA
    if (m >= 58 && (m % 8 === 0)) {
      if (this.userSide !== "home") this.checkAISubstitutions("home");
      if (this.userSide !== "away") this.checkAISubstitutions("away");
    }

    // Descanso (al alcanzar halfTimeMinute, p.ej. 45+descuento)
    const htMin = this.halfTimeMinute || 45;
    if (m >= htMin && !this.halfTimeTriggered && !this.isSecondHalf) {
      this.halfTimeTriggered = true;
      this.isHalfTime = true;
      this.isRunning = false;
      if (this.onHalfTime) this.onHalfTime(this.getState());
      if (this.onTick) this.onTick(this.getState());
      return;
    }

    // Final del partido (minuto 90+)
    if (m >= this.maxMinutes) {
      this.finish();
    }
  }

  // Simulación táctica visual en 2D con Utility AI (sin avanzar reloj ni duplicar estadísticas/goles oficiales)
  stepTactical2D(rawDt) {
    if (!this.isRunning || this.isFinished || this.isHalfTime || this.isSetPieceRunning || this.isHighlightRunning) {
      return;
    }
    const dt = Math.min(0.05, Math.max(0.001, rawDt || 0.016));
    if (this.foulCooldown > 0) this.foulCooldown = Math.max(0, this.foulCooldown - dt);
    if (this.commentaryCooldown > 0) this.commentaryCooldown = Math.max(0, this.commentaryCooldown - dt);

    const physScale = this.speed >= 4 ? 2.2 : (this.speed >= 2 ? 1.5 : 1.0);
    const simDt = dt * physScale;
    const substeps = Math.max(1, Math.ceil(simDt / 0.025));
    const subDt = simDt / substeps;
    const allPlayers = [...this.home2D, ...this.away2D];

    const savedShotsH = this.stats.shots.home;
    const savedShotsA = this.stats.shots.away;
    const savedOnTargetH = this.stats.shotsOnTarget.home;
    const savedOnTargetA = this.stats.shotsOnTarget.away;
    const savedCornersH = this.stats.corners.home;
    const savedCornersA = this.stats.corners.away;
    const savedFoulsH = this.stats.fouls.home;
    const savedFoulsA = this.stats.fouls.away;

    this._tactical2DOnly = true;
    try {
      for (let s = 0; s < substeps; s++) {
        this._updateTeamAI("home", this.home2D, this.away2D, allPlayers, subDt);
        this._updateTeamAI("away", this.away2D, this.home2D, allPlayers, subDt);
        this._stepBallPhysics(subDt, allPlayers);
      }
    } finally {
      this._tactical2DOnly = false;
      this.stats.shots.home = savedShotsH;
      this.stats.shots.away = savedShotsA;
      this.stats.shotsOnTarget.home = savedOnTargetH;
      this.stats.shotsOnTarget.away = savedOnTargetA;
      this.stats.corners.home = savedCornersH;
      this.stats.corners.away = savedCornersA;
      this.stats.fouls.home = savedFoulsH;
      this.stats.fouls.away = savedFoulsA;
    }

    for (let i = 0; i < allPlayers.length; i++) {
      this._syncEntityTo2D(allPlayers[i]);
    }
    this._syncBallTo2D();
  }

  stepRealTime(rawDt) {
    this.useRealTime = true;
    if (!this.isRunning || this.isFinished || this.isHalfTime || this.isSetPieceRunning || this.isHighlightRunning) {
      return;
    }

    const dt = Math.min(0.05, Math.max(0.001, rawDt || 0.016));
    if (this.foulCooldown > 0) this.foulCooldown = Math.max(0, this.foulCooldown - dt);
    if (this.commentaryCooldown > 0) this.commentaryCooldown = Math.max(0, this.commentaryCooldown - dt);

    const physScale = this.isSkippingToEnd ? 1.5 : (this.speed >= 4 ? 2.5 : (this.speed >= 2 ? 1.65 : 1.0));
    const simDt = dt * physScale;
    const substeps = Math.max(1, Math.ceil(simDt / 0.025));
    const subDt = simDt / substeps;

    const allPlayers = [...this.home2D, ...this.away2D];

    for (let s = 0; s < substeps; s++) {
      this._updateTeamAI("home", this.home2D, this.away2D, allPlayers, subDt);
      this._updateTeamAI("away", this.away2D, this.home2D, allPlayers, subDt);
      this._stepBallPhysics(subDt, allPlayers);
      if (this.isFinished || this.isHalfTime || !this.isRunning) break;
    }

    // Sincronizar coordenadas normalizadas (0..100) para el motor 3D Three.js
    for (let i = 0; i < allPlayers.length; i++) {
      this._syncEntityTo2D(allPlayers[i]);
    }
    this._syncBallTo2D();

    // Posesión continua en tiempo real
    if (this.ball.possession === "home") this.possessionTimeHome += dt;
    else this.possessionTimeAway += dt;
    const totalPoss = this.possessionTimeHome + this.possessionTimeAway;
    if (totalPoss > 0) {
      const homePct = Math.max(15, Math.min(85, Math.round((this.possessionTimeHome / totalPoss) * 100)));
      this.stats.possession.home = homePct;
      this.stats.possession.away = 100 - homePct;
    }

    // Reloj continuo del partido
    const matchMinPerSec = this.speed >= 4 ? 5.8 : (this.speed >= 2 ? 2.9 : 1.45);
    this.realTimeMinute += dt * matchMinPerSec;
    const targetMinute = Math.min(this.maxMinutes, Math.floor(this.realTimeMinute));
    while (this.lastMinuteProcessed < targetMinute && !this.isFinished && !this.isHalfTime) {
      this.lastMinuteProcessed += 1;
      this._processRealTimeMinute(this.lastMinuteProcessed);
    }

    this.tickEmitTimer += dt;
    if (!this.isSkippingToEnd && this.tickEmitTimer >= 0.25 && !this.isFinished && !this.isHalfTime) {
      this.tickEmitTimer = 0;
      if (this.onTick) this.onTick(this.getState());
    }
  }

  getResult() {
    return {
      homeTeamId: this.homeTeam.id,
      awayTeamId: this.awayTeam.id,
      homeScore: this.homeScore,
      awayScore: this.awayScore,
      stats: this.stats,
      events: this.events,
      cards: this.matchCards,
      scorers: this.events.filter(e => e.type === "GOAL"),
      mvp: this.computeMVP(),
      weather: this.weather,
      weeklyTraining: this.weeklyTraining,
      homePlayers: this.homeTeam.players || [...this.homePlayersOnPitch, ...this.homeBench],
      awayPlayers: this.awayTeam.players || [...this.awayPlayersOnPitch, ...this.awayBench]
    };
  }
}

if (typeof window !== "undefined") {
  window.MatchSimulator = MatchSimulator;
}

// =========================================================
// ARCHIVO: js\ui\saveSlotsModal.js
// =========================================================

// Modal visual para gestionar las 3 ranuras de guardado en caché / LocalStorage
function renderSaveSlotsModal(container, options = {}) {
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

// =========================================================
// ARCHIVO: js\ui\teamSelectView.js
// =========================================================

// Vista de Selección de Equipo de LaLiga
function renderTeamSelect(container, teams, onSelectTeam, onOpenSaveSlots = null) {
  let selectedIndex = 0;

  function update() {
    const team = teams[selectedIndex];
    const topPlayers = [...team.players].sort((a, b) => b.ovr - a.ovr).slice(0, 4);
    const slots = SaveManager.getAllSlotsMetadata();
    const occupiedCount = slots.filter(s => !s.isEmpty).length;

    container.innerHTML = `
      <div class="min-h-screen bg-slate-950 text-white flex flex-col justify-between p-4 max-w-md mx-auto select-none">
        <!-- Encabezado -->
        <header class="pt-2 pb-3">
          <div class="flex items-center justify-between mb-2">
            <div class="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-xs font-semibold">
              <span>⚽</span> TEMPORADA 2026 / 2027
            </div>
            <button id="btn-open-slots" class="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-full text-sky-400 hover:text-white text-xs font-bold transition active:scale-95 shadow-sm">
              <span>📁</span> Partidas (${occupiedCount}/3)
            </button>
          </div>
          <div class="text-center">
            <h1 class="text-2xl font-black tracking-tight text-white">ENTRENATE TE TE</h1>
            <p class="text-xs text-slate-400 mt-1">Elige tu club para iniciar la temporada hacia el título</p>
          </div>
        </header>

        <!-- Selector de Clubes (Carrusel / Selector) -->
        <div class="flex-1 flex flex-col justify-center">
          <!-- Tarjeta Principal del Club -->
          <div class="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-2xl relative overflow-hidden transition-all duration-300">
            <!-- Resplandor de color del equipo -->
            <div class="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-20 pointer-events-none" style="background-color: ${team.primaryColor};"></div>
            
            <!-- Controles de navegación de equipos -->
            <div class="flex items-center justify-between mb-4">
              <button id="btn-prev-team" class="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 active:scale-95 flex items-center justify-center text-slate-300 transition-all">
                ❮
              </button>
              <div class="text-center">
                <span class="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Club ${selectedIndex + 1} de ${teams.length}</span>
                <h2 class="text-2xl font-black text-white leading-tight">${team.name}</h2>
                <span class="text-xs text-slate-400 font-medium">📍 ${team.stadium}</span>
              </div>
              <button id="btn-next-team" class="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 active:scale-95 flex items-center justify-center text-slate-300 transition-all">
                ❯
              </button>
            </div>

            <!-- Escudo / Siglas estilizadas -->
            <div class="my-3 flex justify-center">
              <div class="w-20 h-20 rounded-2xl flex items-center justify-center font-black text-2xl shadow-lg border-2 border-slate-700/50" style="background: linear-gradient(135deg, ${team.primaryColor}, ${team.secondaryColor}); color: ${team.textColor};">
                ${team.shortName}
              </div>
            </div>

            <!-- Estadísticas clave del equipo -->
            <div class="grid grid-cols-3 gap-2 my-4 text-center">
              <div class="bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80">
                <div class="text-[10px] text-slate-400 uppercase font-semibold">Media General</div>
                <div class="text-xl font-black text-amber-400">${team.reputation}</div>
              </div>
              <div class="bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80">
                <div class="text-[10px] text-slate-400 uppercase font-semibold">Presupuesto</div>
                <div class="text-xl font-black text-emerald-400">${(team.budget / 1000000).toFixed(0)}M€</div>
              </div>
              <div class="bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80">
                <div class="text-[10px] text-slate-400 uppercase font-semibold">Táctica Base</div>
                <div class="text-xl font-black text-sky-400">${team.defaultFormation}</div>
              </div>
            </div>

            <!-- Jugadores Estrella -->
            <div class="mt-4">
              <div class="text-[11px] uppercase font-bold text-slate-400 mb-2 flex items-center gap-1.5">
                <span>⭐</span> Figuras de la plantilla:
              </div>
              <div class="grid grid-cols-2 gap-2">
                ${topPlayers.map(p => `
                  <div class="bg-slate-950/50 px-2.5 py-2 rounded-xl border border-slate-800 flex items-center justify-between">
                    <div class="truncate mr-1">
                      <div class="text-xs font-bold text-white truncate">${p.name}</div>
                      <div class="text-[10px] text-slate-400">${p.pos}</div>
                    </div>
                    <span class="text-xs font-black px-1.5 py-0.5 rounded ${p.ovr >= 85 ? 'bg-amber-500/20 text-amber-400' : 'bg-slate-800 text-slate-300'}">
                      ${p.ovr}
                    </span>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Botón ver plantilla completa antes de confirmar -->
            <button id="btn-view-squad-modal" class="w-full mt-4 py-2 bg-slate-800/70 hover:bg-slate-800 active:scale-98 text-xs font-semibold text-slate-300 rounded-xl transition">
              🔍 Ver plantilla completa (${team.players.length} futbolistas)
            </button>
          </div>
        </div>

        <!-- Botón de Confirmación -->
        <footer class="pt-4">
          <button id="btn-confirm-team" class="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 active:scale-98 text-white font-extrabold text-base rounded-2xl shadow-xl shadow-emerald-500/20 transition-all flex items-center justify-center gap-2">
            <span>TOMAR EL CONTROL DE ${team.name.toUpperCase()}</span>
            <span>➜</span>
          </button>
        </footer>

        <!-- Modal de Plantilla Previa (Opcional) -->
        <div id="modal-squad" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 hidden flex flex-col justify-end">
          <div class="bg-slate-900 border-t border-slate-700 rounded-t-3xl p-5 max-h-[80vh] flex flex-col">
            <div class="flex justify-between items-center mb-3">
              <div>
                <h3 class="font-bold text-lg text-white">Plantilla de ${team.name}</h3>
                <p class="text-xs text-slate-400">${team.players.length} jugadores con medias actualizadas</p>
              </div>
              <button id="btn-close-modal" class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 font-bold">✕</button>
            </div>
            <div class="overflow-y-auto space-y-1.5 flex-1 pr-1">
              ${team.players.map(p => `
                <div class="flex items-center justify-between p-2 rounded-lg bg-slate-950/60 border border-slate-800/60 text-xs">
                  <div class="flex items-center gap-2">
                    <span class="w-6 font-mono text-[10px] text-slate-500 font-bold">#${p.number}</span>
                    <span class="px-1.5 py-0.5 rounded bg-slate-800 font-bold text-[10px] ${p.pos === 'DC' || p.pos === 'EI' || p.pos === 'ED' ? 'text-red-400' : p.pos === 'MC' || p.pos === 'MCD' || p.pos === 'MCO' ? 'text-amber-400' : p.pos === 'POR' ? 'text-purple-400' : 'text-sky-400'}">${p.pos}</span>
                    <span class="font-medium text-slate-200">${p.name}</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="text-[10px] text-slate-400 hidden sm:block">${p.pos === 'POR' ? `PAR ${p.par !== undefined ? p.par : p.ovr} | REF ${p.pac} | PAS ${p.pas}` : `RIT ${p.pac} | TIR ${p.sho} | PAS ${p.pas}`}</div>
                    <span class="font-black text-amber-400 text-xs">${p.ovr}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;

    const btnSlots = container.querySelector("#btn-open-slots");
    if (btnSlots) {
      btnSlots.onclick = () => {
        onOpenSaveSlots?.();
      };
    }

    // Eventos
    container.querySelector("#btn-prev-team").onclick = () => {
      selectedIndex = (selectedIndex - 1 + teams.length) % teams.length;
      update();
    };

    container.querySelector("#btn-next-team").onclick = () => {
      selectedIndex = (selectedIndex + 1) % teams.length;
      update();
    };

    container.querySelector("#btn-confirm-team").onclick = () => {
      onSelectTeam(teams[selectedIndex]);
    };

    const modal = container.querySelector("#modal-squad");
    container.querySelector("#btn-view-squad-modal").onclick = () => {
      modal.classList.remove("hidden");
    };
    container.querySelector("#btn-close-modal").onclick = () => {
      modal.classList.add("hidden");
    };
  }

  update();
}

// =========================================================
// ARCHIVO: js\ui\tacticsView.js
// =========================================================

// Vista de la Pizarra Táctica, Alineaciones y Estilos de Juego por Estados
function renderTacticsView(container, gameState, onSaveTactics, onBackToHub) {
  const team = gameState.teams.find(t => t.id === gameState.userTeamId);
  const defaultOptimal = buildOptimalLineup(team);
  let tactics = gameState.userTactics || {
    formation: defaultOptimal.formationKey,
    mentality: "balanced",
    lineup: defaultOptimal.lineupIds,
    bench: defaultOptimal.benchIds,
    playerRoles: {},
    customPositions: {}
  };
  if (!tactics.playerRoles) tactics.playerRoles = {};
  if (!tactics.customPositions) tactics.customPositions = {};
  if (!tactics.instructions) {
    tactics.instructions = getDefaultTacticalInstructions();
  }

  let activeTab = "lineup"; // "lineup" o "instructions"
  let selectedPlayerId = null;
  let showAllRolesList = false;

  function render() {
    const formationKey = tactics.formation;
    const formation = FORMATIONS[formationKey] || FORMATIONS["4-3-3"];

    // Obtener objetos de jugador
    const lineupPlayers = tactics.lineup.map(id => team.players.find(p => p.id === id)).filter(Boolean);
    const benchPlayers = tactics.bench.map(id => team.players.find(p => p.id === id)).filter(Boolean);

    const averages = calculateTeamAverages(lineupPlayers, formationKey, tactics.customPositions);
    const matchingPresetKey = detectMatchingPreset(tactics.instructions);
    const currentPreset = TACTICAL_PRESETS[matchingPresetKey] || null;

    container.innerHTML = `
      <div class="min-h-screen bg-slate-950 text-white flex flex-col pb-20 select-none">
        <!-- Barra Superior -->
        <header class="bg-slate-900 border-b border-slate-800 px-4 py-3 sticky top-0 z-20 flex items-center justify-between shadow-md">
          <div class="flex items-center gap-2">
            ${onBackToHub ? `
              <button id="btn-tactics-back" class="text-xs bg-slate-800 hover:bg-slate-700 text-sky-400 hover:text-white px-2.5 py-1.5 rounded-lg border border-slate-700 font-bold active:scale-95 transition flex items-center gap-1 shadow-sm" title="Volver al Menú Principal">
                <span>❮</span> Inicio
              </button>
            ` : ''}
            <div class="w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs shadow" style="background: linear-gradient(135deg, ${team.primaryColor}, ${team.secondaryColor}); color: ${team.textColor};">
              ${team.shortName}
            </div>
            <div>
              <h2 class="text-sm font-bold leading-tight">Pizarra Táctica</h2>
              <span class="text-[10px] text-slate-400">Media del 11: <b class="text-amber-400">${averages.overall}</b> (DEL ${averages.attack} | MED ${averages.midfield} | DEF ${averages.defense})</span>
            </div>
          </div>
          <div class="flex items-center gap-1.5">
            <button id="btn-save-tactics" class="text-xs bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 rounded-lg border border-emerald-500 font-bold active:scale-95 transition flex items-center gap-1 shadow-md shadow-emerald-600/20">
              <span>💾</span> Guardar
            </button>
            <button id="btn-auto-align" class="text-xs bg-slate-800 hover:bg-slate-700 text-sky-400 px-2.5 py-1.5 rounded-lg border border-slate-700 font-semibold active:scale-95 transition">
              ⚡ Auto 11
            </button>
          </div>
        </header>

        <!-- Selector de Sistema y Mentalidad -->
        <div class="p-3 bg-slate-900/50 border-b border-slate-800 flex flex-col gap-2">
          <!-- Formaciones -->
          <div class="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
            <span class="text-[10px] uppercase font-bold text-slate-500 mr-1">Sistema:</span>
            ${Object.keys(FORMATIONS).map(fKey => `
              <button class="btn-formation px-3 py-1 rounded-full font-bold transition whitespace-nowrap ${tactics.formation === fKey ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20' : 'bg-slate-800 text-slate-400 hover:text-white'}" data-formation="${fKey}">
                ${fKey}
              </button>
            `).join('')}
          </div>

          <!-- Mentalidad -->
          <div class="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
            <span class="text-[10px] uppercase font-bold text-slate-500 mr-1">Actitud:</span>
            ${MENTALITIES.map(m => `
              <button class="btn-mentality px-2.5 py-0.5 rounded-lg text-[11px] font-semibold transition whitespace-nowrap ${tactics.mentality === m.id ? 'bg-emerald-600 text-white border border-emerald-400' : 'bg-slate-800/80 text-slate-400 hover:text-white'}" data-mentality="${m.id}">
                ${m.label}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Pestañas Principales: Alineación vs Estilo e Instrucciones -->
        <div class="px-3 pt-2 pb-1 bg-slate-900/70 border-b border-slate-800 flex gap-2">
          <button id="tab-nav-lineup" class="flex-1 py-2 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${activeTab === 'lineup' ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25 border border-sky-400' : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'}">
            <span>⚽ Pizarra y Campo</span>
          </button>
          <button id="tab-nav-instructions" class="flex-1 py-2 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${activeTab === 'instructions' ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 border border-amber-400' : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'}">
            <span>🧠 Estilos e Instrucciones</span>
            <span class="px-1.5 py-0.2 rounded-md ${activeTab === 'instructions' ? 'bg-slate-950/80 text-amber-300' : 'bg-slate-800 text-amber-400'} text-[10px] font-extrabold">
              ${currentPreset ? currentPreset.icon : '⚙️'}
            </span>
          </button>
        </div>

        ${activeTab === "lineup" ? `
          <!-- Terreno de Juego Táctico (Campo Vertical) -->
          <div class="p-3">
            <div id="tactics-pitch-container" class="relative w-full max-w-sm mx-auto aspect-[3/4] bg-gradient-to-b from-emerald-800 via-emerald-700 to-emerald-900 rounded-2xl border-2 border-emerald-500/40 shadow-inner overflow-hidden p-2 select-none touch-pan-y">
              <!-- Líneas del campo de fútbol -->
              <div class="absolute inset-2 border-2 border-white/30 rounded-xl pointer-events-none"></div>
              <!-- Área portería rival arriba -->
              <div class="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-14 border-b-2 border-x-2 border-white/30 pointer-events-none"></div>
              <!-- Círculo central -->
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-white/30 rounded-full pointer-events-none"></div>
              <!-- Línea de medio campo -->
              <div class="absolute top-1/2 left-2 right-2 h-0.5 bg-white/30 -translate-y-1/2 pointer-events-none"></div>
              <!-- Área portería propia abajo -->
              <div class="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-14 border-t-2 border-x-2 border-white/30 pointer-events-none"></div>

              <!-- Jugadores en el Campo -->
              ${formation.slots.map((slot, index) => {
                const player = lineupPlayers[index];
                if (!player) return "";
                const effSlot = getEffectiveSlotCoords(formationKey, index, tactics.customPositions);
                const effRating = calculateEffectiveRating(player, effSlot.pos);
                const isSelected = selectedPlayerId === player.id;
                const isInjured = Boolean(player.injury);
                const roleId = (tactics.playerRoles && tactics.playerRoles[player.id]) || getDefaultRoleForPosition(effSlot.pos);
                const role = getRoleDetails(effSlot.pos, roleId);
                const fatigue = player.fatigueLoad || 0;

                return `
                  <div class="slot-player absolute -translate-x-1/2 -translate-y-1/2 ${isSelected ? 'cursor-grab active:cursor-grabbing touch-none ring-2 ring-amber-400 ring-offset-2 ring-offset-slate-900 z-30 scale-105' : 'cursor-pointer touch-manipulation z-10'} flex flex-col items-center transition-transform active:scale-95 select-none"
                       style="left: ${effSlot.x}%; top: ${effSlot.y}%;"
                       data-player-id="${player.id}"
                       data-slot-index="${index}">
                    <!-- Ficha con dorsal y valoración -->
                    <div class="w-10 h-10 rounded-full border-2 ${isSelected ? 'border-amber-400 bg-amber-500 text-black shadow-lg shadow-amber-400/50 scale-110 ring-2 ring-amber-300' : isInjured ? 'border-rose-500 bg-rose-950 text-rose-200 animate-pulse' : effSlot.isCustom ? 'border-amber-400 bg-slate-900 text-white shadow-md ring-1 ring-amber-400/80' : 'border-white/80 bg-slate-900 text-white shadow-md'} flex flex-col items-center justify-center relative transition-all">
                      <span class="text-[9px] font-black leading-none">${effRating}</span>
                      <span class="text-[8px] font-bold ${isInjured ? 'text-rose-300' : effSlot.isCustom ? 'text-amber-300 font-extrabold' : 'text-slate-300'} leading-none">${slot.label}</span>
                      <!-- Barra de energía en miniatura -->
                      <div class="absolute -bottom-1 w-6 h-1 bg-black/60 rounded-full overflow-hidden">
                        <div class="h-full ${player.energy > 70 ? 'bg-emerald-400' : player.energy > 50 ? 'bg-amber-400' : 'bg-red-500'}" style="width: ${player.energy || 100}%;"></div>
                      </div>
                      ${effSlot.isCustom ? `
                        <div class="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-amber-400 text-slate-950 text-[7px] font-black flex items-center justify-center shadow" title="Posición ajustada libremente">📍</div>
                      ` : ''}
                    </div>
                    <!-- Nombre del futbolista -->
                    <div class="bg-black/80 px-1.5 py-0.5 rounded text-[9px] font-bold text-white tracking-tight mt-1 truncate max-w-[70px] text-center border border-white/10 shadow">
                      ${player.name.split(' ').slice(-1)[0]}
                    </div>
                    ${isSelected ? `
                      <div class="mt-0.5 px-1.5 py-0.2 rounded-full bg-amber-400 text-slate-950 font-black text-[7px] shadow-md animate-pulse uppercase tracking-tight">
                        ✋ Mover
                      </div>
                    ` : ''}
                    <!-- Función / Rol asignado o Lesión / Sanción / Sobrecarga -->
                    ${isInjured ? `
                      <div class="mt-0.5 px-1 py-0.2 rounded bg-rose-900 border border-rose-500 text-[7.5px] font-bold text-rose-200 truncate max-w-[76px] text-center shadow-sm">
                        🚑 ${player.injury.roundsLeft}j
                      </div>
                    ` : player.suspension ? `
                      <div class="mt-0.5 px-1 py-0.2 rounded bg-amber-950 border border-amber-500/70 text-[7.5px] font-bold text-amber-300 truncate max-w-[76px] text-center shadow-sm">
                        🛑 ${player.suspension.roundsLeft}j
                      </div>
                    ` : fatigue >= 40 ? `
                      <div class="mt-0.5 px-1 py-0.2 rounded bg-amber-950 border border-amber-500/80 text-[7px] font-bold text-amber-300 truncate max-w-[76px] text-center shadow-sm">
                        🔥 Sobrecarga
                      </div>
                    ` : `
                      <div class="mt-0.5 px-1 py-0.2 rounded bg-sky-950/90 border border-sky-500/40 text-[7.5px] font-bold text-sky-300 truncate max-w-[76px] text-center shadow-sm">
                        ${role.icon} ${role.tag}
                      </div>
                    `}
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Paneles del Futbolista Titular Seleccionado: Ajuste Posicional y Función Táctica -->
          ${(() => {
            if (!selectedPlayerId) return "";
            const selSlotIndex = tactics.lineup.indexOf(selectedPlayerId);
            if (selSlotIndex === -1) return ""; // Está en el banquillo
            const selSlot = formation.slots[selSlotIndex];
            const selPlayer = team.players.find(p => p.id === selectedPlayerId);
            if (!selPlayer || !selSlot) return "";

            const effSlot = getEffectiveSlotCoords(formationKey, selSlotIndex, tactics.customPositions);
            const curRoleId = (tactics.playerRoles && tactics.playerRoles[selPlayer.id]) || getDefaultRoleForPosition(effSlot.pos);
            const curRole = getRoleDetails(effSlot.pos, curRoleId);
            const availRoles = getAvailableRolesForPosition(effSlot.pos);
            const posLabel = getPositionAdjustmentLabel(selSlot, effSlot);

            return `
              <div class="mx-3 my-2 space-y-2 animate-fadeIn">
                <!-- Panel 1: Ajuste Libre de Posición en el Campo -->
                <div class="p-3 bg-slate-900 border border-amber-500/40 rounded-2xl shadow-xl">
                  <div class="flex items-center justify-between mb-2 pb-1.5 border-b border-slate-800">
                    <div class="flex items-center gap-2">
                      <span class="text-xl">📍</span>
                      <div>
                        <span class="text-[9px] uppercase font-bold text-amber-400">Posición en el Campo · ${selPlayer.name} (${selSlot.label})</span>
                        <h4 class="text-xs font-black text-white">${posLabel}</h4>
                      </div>
                    </div>
                    ${effSlot.isCustom ? `
                      <button id="btn-reset-pos" class="text-[10px] font-bold text-rose-400 hover:text-rose-300 px-2 py-1 rounded-lg bg-rose-950/70 border border-rose-800/80 transition flex items-center gap-1 active:scale-95 shadow-sm">
                        <span>↺</span> Posición base
                      </button>
                    ` : ''}
                  </div>

                  <div class="text-[10px] text-slate-400 mb-2 font-medium">
                    Ajusta su posición para acercarlo al mediocentro, al delantero o abrirlo a banda (arrastra en la pizarra o usa los botones):
                  </div>

                  <!-- Botones de Nudge Direccional -->
                  <div class="grid grid-cols-2 gap-2 mb-2.5">
                    <div class="bg-slate-950/80 p-2 rounded-xl border border-slate-800 flex flex-col gap-1.5">
                      <span class="text-[9px] font-bold text-slate-400 uppercase tracking-wider text-center">Altura (Ataque / Defensa)</span>
                      <div class="flex items-center gap-1.5">
                        <button class="btn-nudge-pos flex-1 py-1.5 px-1 bg-slate-800 hover:bg-slate-700 text-sky-300 font-bold text-[10px] rounded-lg border border-slate-700 active:scale-95 transition flex items-center justify-center gap-1" data-axis="y" data-delta="-5">
                          <span>▲</span> Adelantar (+DC)
                        </button>
                        <button class="btn-nudge-pos flex-1 py-1.5 px-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-[10px] rounded-lg border border-slate-700 active:scale-95 transition flex items-center justify-center gap-1" data-axis="y" data-delta="5">
                          <span>▼</span> Retrasar (+MC)
                        </button>
                      </div>
                    </div>

                    <div class="bg-slate-950/80 p-2 rounded-xl border border-slate-800 flex flex-col gap-1.5">
                      <span class="text-[9px] font-bold text-slate-400 uppercase tracking-wider text-center">Amplitud (Banda / Centro)</span>
                      <div class="flex items-center gap-1.5">
                        <button class="btn-nudge-pos flex-1 py-1.5 px-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-[10px] rounded-lg border border-slate-700 active:scale-95 transition flex items-center justify-center gap-1" data-axis="x" data-delta="-5">
                          <span>◀</span> Izquierda
                        </button>
                        <button class="btn-nudge-pos flex-1 py-1.5 px-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-[10px] rounded-lg border border-slate-700 active:scale-95 transition flex items-center justify-center gap-1" data-axis="x" data-delta="5">
                          <span>▶</span> Derecha
                        </button>
                      </div>
                    </div>
                  </div>

                  <!-- Sliders de Ajuste Fino -->
                  <div class="space-y-2 bg-slate-950/60 p-2 rounded-xl border border-slate-800/80 text-[10px]">
                    <div class="flex items-center justify-between text-slate-400">
                      <span>Profundidad en campo: <b class="text-white">${effSlot.y < 35 ? 'Delantera / Ofensivo' : (effSlot.y > 65 ? 'Defensa / Retrasado' : 'Medio campo')}</b></span>
                      <span class="font-mono text-amber-400 font-bold">Y: ${Math.round(effSlot.y)}%</span>
                    </div>
                    <input type="range" class="slider-pos-y w-full accent-amber-400 bg-slate-800 h-1.5 rounded-lg appearance-none cursor-pointer" min="12" max="88" value="${effSlot.y}">

                    <div class="flex items-center justify-between text-slate-400 pt-1">
                      <span>Anchura / Amplitud: <b class="text-white">${effSlot.x < 35 ? 'Banda Izquierda' : (effSlot.x > 65 ? 'Banda Derecha' : 'Interior / Centro')}</b></span>
                      <span class="font-mono text-amber-400 font-bold">X: ${Math.round(effSlot.x)}%</span>
                    </div>
                    <input type="range" class="slider-pos-x w-full accent-amber-400 bg-slate-800 h-1.5 rounded-lg appearance-none cursor-pointer" min="10" max="90" value="${effSlot.x}">
                  </div>
                </div>

                <!-- Panel 2: Función Táctica / Rol -->
                <div class="p-3 bg-slate-900 border border-sky-500/50 rounded-2xl shadow-xl">
                  <div class="flex items-center justify-between mb-2 pb-1.5 border-b border-slate-800">
                    <div class="flex items-center gap-2">
                      <span class="text-xl">${curRole.icon}</span>
                      <div>
                        <span class="text-[9px] uppercase font-bold text-sky-400">Función táctica · ${curRole.name}</span>
                        <h4 class="text-xs font-black text-white">${curRole.tag}</h4>
                      </div>
                    </div>
                    <button id="btn-close-role-box" class="text-[10px] font-bold text-emerald-400 hover:text-white px-2 py-1 rounded-lg bg-emerald-950/80 border border-emerald-500/50 flex items-center gap-1 active:scale-95 shadow">✓ Fijar posición</button>
                  </div>
                  <div class="text-[10px] text-slate-400 mb-2 font-medium">Elige la función táctica de este futbolista según su posición:</div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    ${availRoles.map(r => `
                      <button class="btn-assign-role p-2 rounded-xl border text-left transition flex items-start gap-2 ${r.id === curRoleId ? 'bg-sky-500/25 border-sky-400 text-white shadow-sm ring-1 ring-sky-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 active:scale-98'}" data-role-id="${r.id}" data-player-id="${selPlayer.id}">
                        <span class="text-base mt-0.5 flex-shrink-0">${r.icon}</span>
                        <div class="min-w-0">
                          <div class="text-xs font-bold ${r.id === curRoleId ? 'text-sky-300' : 'text-slate-200'}">${r.name}</div>
                          <div class="text-[9.5px] text-slate-400 leading-tight mt-0.5">${r.desc}</div>
                        </div>
                      </button>
                    `).join('')}
                  </div>
                </div>
              </div>
            `;
          })()}

          <!-- Botón para ver y ajustar todas las funciones del 11 -->
          <div class="px-4 text-center my-2 flex items-center justify-center gap-2">
            <button id="btn-toggle-all-roles" class="text-xs bg-slate-900 hover:bg-slate-800 text-sky-400 border border-slate-800 hover:border-sky-500/40 px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 shadow-sm">
              <span>⚙️</span>
              <span>${showAllRolesList ? 'Ocultar funciones' : 'Ver funciones de los 11'}</span>
            </button>
          </div>

          <!-- Lista Desplegable de Todas las Funciones del 11 -->
          ${showAllRolesList ? `
            <div class="mx-3 mb-3 bg-slate-900 border border-slate-800 rounded-2xl p-3 space-y-2">
              <div class="flex items-center justify-between pb-1.5 border-b border-slate-800">
                <span class="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>⚙️</span> Funciones e Instrucciones del 11 Titular
                </span>
                <span class="text-[10px] text-slate-400">Personaliza cada puesto</span>
              </div>
              <div class="space-y-1.5 max-h-64 overflow-y-auto pr-1 no-scrollbar">
                ${formation.slots.map((slot, idx) => {
                  const p = lineupPlayers[idx];
                  if (!p) return "";
                  const curRoleId = (tactics.playerRoles && tactics.playerRoles[p.id]) || getDefaultRoleForPosition(slot.pos);
                  const availRoles = getAvailableRolesForPosition(slot.pos);
                  return `
                    <div class="flex items-center justify-between p-2 rounded-xl bg-slate-950 border border-slate-800/80 text-xs">
                      <div class="flex items-center gap-2 min-w-0">
                        <span class="w-8 text-center font-extrabold text-[10px] px-1 py-0.5 rounded bg-slate-800 text-sky-400 flex-shrink-0">${slot.label}</span>
                        <span class="font-bold text-white truncate text-xs">${p.name.split(' ').slice(-1)[0]}</span>
                      </div>
                      <select class="select-player-role bg-slate-900 border border-slate-700 text-sky-300 text-[11px] font-bold rounded-lg px-2 py-1 outline-none focus:border-sky-400 max-w-[190px]" data-player-id="${p.id}" data-pos="${slot.pos}">
                        ${availRoles.map(r => `
                          <option value="${r.id}" ${r.id === curRoleId ? 'selected' : ''}>
                            ${r.icon} ${r.name} (${r.tag})
                          </option>
                        `).join('')}
                      </select>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Instrucción de ayuda -->
          <div class="px-4 text-center">
            <p class="text-[11px] text-slate-400">
              ${selectedPlayerId ? '👉 Puedes elegir su función arriba o tocar otro jugador del campo/banquillo para moverlo.' : '💡 Toca a un jugador para elegir su función táctica o cambiar su posición.'}
            </p>
          </div>

          <!-- Banquillo y Reservas -->
          <div class="px-3 mt-3 flex-1">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <span>🪑</span> Banquillo de Suplentes (${benchPlayers.length})
              </h3>
            </div>
            <div class="space-y-1.5">
              ${benchPlayers.map(p => {
                const isSelected = selectedPlayerId === p.id;
                const isInjured = Boolean(p.injury);
                const isSuspended = Boolean(p.suspension);
                return `
                  <div class="bench-player flex items-center justify-between p-2 rounded-xl border ${isSelected ? 'border-amber-400 bg-amber-500/10' : isInjured ? 'border-rose-900/80 bg-rose-950/20' : isSuspended ? 'border-amber-900/80 bg-amber-950/20' : 'border-slate-800 bg-slate-900/60'} cursor-pointer active:scale-98 transition"
                       data-player-id="${p.id}">
                    <div class="flex items-center gap-2">
                      <span class="w-5 text-center font-mono text-[10px] text-slate-500 font-bold">#${p.number}</span>
                      <span class="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] font-bold ${p.pos === 'DC' || p.pos === 'EI' || p.pos === 'ED' ? 'text-red-400' : p.pos === 'MC' || p.pos === 'MCD' || p.pos === 'MCO' ? 'text-amber-400' : p.pos === 'POR' ? 'text-purple-400' : 'text-sky-400'}">${p.pos}</span>
                      ${p.secondaryPos ? `<span class="text-[9px] font-semibold text-amber-300/80" title="Posiciones secundarias">(${Array.isArray(p.secondaryPos) ? p.secondaryPos.join('/') : p.secondaryPos})</span>` : ''}
                      <span class="text-xs font-bold text-slate-200">${p.name}</span>
                      ${isInjured ? `<span class="px-1.5 py-0.5 rounded bg-rose-900/90 border border-rose-500/60 text-[8.5px] font-bold text-rose-300">🚑 ${p.injury.roundsLeft}j</span>` : ''}
                      ${isSuspended ? `<span class="px-1.5 py-0.5 rounded bg-amber-900/90 border border-amber-500/60 text-[8.5px] font-bold text-amber-300">🛑 ${p.suspension.roundsLeft}j</span>` : ''}
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="text-[10px] font-mono ${(p.energy || 100) >= 80 ? 'text-emerald-400' : (p.energy || 100) >= 65 ? 'text-amber-400' : 'text-rose-400'} font-bold">⚡${Math.round(p.energy !== undefined ? p.energy : 100)}%</span>
                      <div class="w-10 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div class="h-full ${(p.energy || 100) >= 80 ? 'bg-emerald-400' : (p.energy || 100) >= 65 ? 'bg-amber-400' : 'bg-red-500'}" style="width: ${p.energy !== undefined ? p.energy : 100}%;"></div>
                      </div>
                      <span class="text-xs font-black ${isInjured || isSuspended ? 'text-slate-500' : 'text-amber-400'} px-1.5 py-0.5 bg-slate-800/80 rounded">${p.ovr}</span>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>

            <!-- Botones de Acción al final del banquillo -->
            <div class="mt-4 pt-1 space-y-2">
              <button id="btn-save-tactics-bottom" class="w-full py-3 bg-emerald-600 hover:bg-emerald-500 active:scale-98 text-white font-black text-xs rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 border border-emerald-500/50">
                <span class="text-sm">💾</span>
                <span>Guardar Alineación y Cambios</span>
              </button>
              ${onBackToHub ? `
                <button id="btn-tactics-back-bottom" class="w-full py-2.5 bg-slate-900 hover:bg-slate-800 active:scale-98 text-slate-300 hover:text-white font-bold text-xs rounded-xl transition flex items-center justify-center gap-2 border border-slate-800">
                  <span>🏠</span>
                  <span>Volver al Menú Principal (Jugar Jornada ${gameState.currentRound})</span>
                </button>
              ` : ''}
            </div>
          </div>
        ` : `
          <!-- VISTA DE ESTILOS E INSTRUCCIONES POR ESTADOS -->
          <div class="p-3 space-y-4 max-w-lg mx-auto w-full">
            <!-- Selector de Presets Rápidos (Estilos de Juego Conocidos) -->
            <div class="bg-slate-900 border border-slate-800 rounded-2xl p-3 shadow-lg">
              <div class="flex items-center justify-between mb-2">
                <div>
                  <h3 class="text-xs font-black uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <span>🧠</span> Estilos de Juego Predefinidos
                  </h3>
                  <p class="text-[10px] text-slate-400">Aplica una filosofía táctica con un solo toque o personaliza los parámetros abajo.</p>
                </div>
                <span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase ${currentPreset ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-slate-800 text-slate-400'}">
                  ${currentPreset ? currentPreset.name : 'Personalizado'}
                </span>
              </div>

              <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
                ${Object.entries(TACTICAL_PRESETS).map(([key, preset]) => {
                  const isActive = matchingPresetKey === key;
                  return `
                    <button class="btn-preset-card p-2.5 rounded-xl border text-left transition flex flex-col justify-between ${isActive ? 'bg-amber-500/20 border-amber-400 shadow-md ring-1 ring-amber-400/60' : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700 active:scale-98'}" data-preset-key="${key}">
                      <div>
                        <div class="flex items-center justify-between mb-1">
                          <span class="text-base">${preset.icon}</span>
                          ${isActive ? '<span class="text-[8px] font-black uppercase px-1 py-0.2 rounded bg-amber-400 text-slate-950 font-mono">ACTIVO</span>' : ''}
                        </div>
                        <div class="text-[11px] font-extrabold ${isActive ? 'text-amber-300' : 'text-white'} leading-tight">${preset.name}</div>
                        <div class="text-[8.5px] text-slate-400 line-clamp-2 mt-1 leading-snug">${preset.desc}</div>
                      </div>
                    </button>
                  `;
                }).join('')}
              </div>
            </div>

            <!-- FASE 1: CON BALÓN (FASE OFENSIVA) -->
            <div class="bg-slate-900 border border-sky-500/40 rounded-2xl p-3 shadow-lg space-y-3">
              <div class="flex items-center gap-2 pb-1.5 border-b border-slate-800">
                <span class="w-6 h-6 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center text-sm font-bold">1</span>
                <div>
                  <h4 class="text-xs font-black text-sky-300 uppercase tracking-wide">Fase Ofensiva · Con Balón</h4>
                  <p class="text-[9.5px] text-slate-400">Cómo mueve y elabora el juego tu equipo en posesión</p>
                </div>
              </div>

              <!-- Estilo de Pase -->
              <div>
                <div class="text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                  <span>Estilo de Pase</span>
                  <span class="text-sky-400 font-mono text-[9px]">${TACTICAL_OPTIONS.passingStyle.find(o => o.id === tactics.instructions.inPossession.passingStyle)?.label}</span>
                </div>
                <div class="grid grid-cols-3 gap-1.5">
                  ${TACTICAL_OPTIONS.passingStyle.map(opt => {
                    const isSel = tactics.instructions.inPossession.passingStyle === opt.id;
                    return `
                      <button class="btn-tactic-opt p-2 rounded-xl border text-center transition flex flex-col items-center justify-center ${isSel ? 'bg-sky-500/25 border-sky-400 text-white shadow-sm ring-1 ring-sky-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 active:scale-98'}" data-phase="inPossession" data-param="passingStyle" data-val="${opt.id}">
                        <span class="text-sm mb-0.5">${opt.icon}</span>
                        <span class="text-[11px] font-bold ${isSel ? 'text-sky-300' : 'text-slate-200'}">${opt.label}</span>
                        <span class="text-[8px] text-slate-400 leading-tight mt-0.5 line-clamp-1">${opt.desc}</span>
                      </button>
                    `;
                  }).join('')}
                </div>
              </div>

              <!-- Ritmo de Juego -->
              <div>
                <div class="text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                  <span>Ritmo de Circulación</span>
                  <span class="text-sky-400 font-mono text-[9px]">${TACTICAL_OPTIONS.tempo.find(o => o.id === tactics.instructions.inPossession.tempo)?.label}</span>
                </div>
                <div class="grid grid-cols-3 gap-1.5">
                  ${TACTICAL_OPTIONS.tempo.map(opt => {
                    const isSel = tactics.instructions.inPossession.tempo === opt.id;
                    return `
                      <button class="btn-tactic-opt p-2 rounded-xl border text-center transition flex flex-col items-center justify-center ${isSel ? 'bg-sky-500/25 border-sky-400 text-white shadow-sm ring-1 ring-sky-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 active:scale-98'}" data-phase="inPossession" data-param="tempo" data-val="${opt.id}">
                        <span class="text-sm mb-0.5">${opt.icon}</span>
                        <span class="text-[11px] font-bold ${isSel ? 'text-sky-300' : 'text-slate-200'}">${opt.label}</span>
                        <span class="text-[8px] text-slate-400 leading-tight mt-0.5 line-clamp-1">${opt.desc}</span>
                      </button>
                    `;
                  }).join('')}
                </div>
              </div>

              <!-- Zona de Ataque / Anchura -->
              <div>
                <div class="text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                  <span>Zona de Ataque / Anchura</span>
                  <span class="text-sky-400 font-mono text-[9px]">${TACTICAL_OPTIONS.width.find(o => o.id === tactics.instructions.inPossession.width)?.label}</span>
                </div>
                <div class="grid grid-cols-3 gap-1.5">
                  ${TACTICAL_OPTIONS.width.map(opt => {
                    const isSel = tactics.instructions.inPossession.width === opt.id;
                    return `
                      <button class="btn-tactic-opt p-2 rounded-xl border text-center transition flex flex-col items-center justify-center ${isSel ? 'bg-sky-500/25 border-sky-400 text-white shadow-sm ring-1 ring-sky-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 active:scale-98'}" data-phase="inPossession" data-param="width" data-val="${opt.id}">
                        <span class="text-sm mb-0.5">${opt.icon}</span>
                        <span class="text-[11px] font-bold ${isSel ? 'text-sky-300' : 'text-slate-200'}">${opt.label}</span>
                        <span class="text-[8px] text-slate-400 leading-tight mt-0.5 line-clamp-1">${opt.desc}</span>
                      </button>
                    `;
                  }).join('')}
                </div>
              </div>
            </div>

            <!-- FASE 2: EN TRANSICIÓN -->
            <div class="bg-slate-900 border border-amber-500/40 rounded-2xl p-3 shadow-lg space-y-3">
              <div class="flex items-center gap-2 pb-1.5 border-b border-slate-800">
                <span class="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center text-sm font-bold">2</span>
                <div>
                  <h4 class="text-xs font-black text-amber-300 uppercase tracking-wide">Fase de Transición</h4>
                  <p class="text-[9.5px] text-slate-400">Comportamiento en los segundos clave de pérdida o recuperación</p>
                </div>
              </div>

              <!-- Tras Pérdida -->
              <div>
                <div class="text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                  <span>Al perder el balón</span>
                  <span class="text-amber-400 font-mono text-[9px]">${TACTICAL_OPTIONS.transitionLoss.find(o => o.id === tactics.instructions.inTransition.loss)?.label}</span>
                </div>
                <div class="grid grid-cols-2 gap-2">
                  ${TACTICAL_OPTIONS.transitionLoss.map(opt => {
                    const isSel = tactics.instructions.inTransition.loss === opt.id;
                    return `
                      <button class="btn-tactic-opt p-2.5 rounded-xl border text-left transition flex items-start gap-2 ${isSel ? 'bg-amber-500/25 border-amber-400 text-white shadow-sm ring-1 ring-amber-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 active:scale-98'}" data-phase="inTransition" data-param="loss" data-val="${opt.id}">
                        <span class="text-base mt-0.5 flex-shrink-0">${opt.icon}</span>
                        <div>
                          <div class="text-xs font-bold ${isSel ? 'text-amber-300' : 'text-slate-200'}">${opt.label}</div>
                          <div class="text-[8.5px] text-slate-400 leading-snug mt-0.5">${opt.desc}</div>
                        </div>
                      </button>
                    `;
                  }).join('')}
                </div>
              </div>

              <!-- Tras Recuperación -->
              <div>
                <div class="text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                  <span>Al recuperar el balón</span>
                  <span class="text-amber-400 font-mono text-[9px]">${TACTICAL_OPTIONS.transitionWin.find(o => o.id === tactics.instructions.inTransition.win)?.label}</span>
                </div>
                <div class="grid grid-cols-2 gap-2">
                  ${TACTICAL_OPTIONS.transitionWin.map(opt => {
                    const isSel = tactics.instructions.inTransition.win === opt.id;
                    return `
                      <button class="btn-tactic-opt p-2.5 rounded-xl border text-left transition flex items-start gap-2 ${isSel ? 'bg-amber-500/25 border-amber-400 text-white shadow-sm ring-1 ring-amber-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 active:scale-98'}" data-phase="inTransition" data-param="win" data-val="${opt.id}">
                        <span class="text-base mt-0.5 flex-shrink-0">${opt.icon}</span>
                        <div>
                          <div class="text-xs font-bold ${isSel ? 'text-amber-300' : 'text-slate-200'}">${opt.label}</div>
                          <div class="text-[8.5px] text-slate-400 leading-snug mt-0.5">${opt.desc}</div>
                        </div>
                      </button>
                    `;
                  }).join('')}
                </div>
              </div>
            </div>

            <!-- FASE 3: SIN BALÓN (FASE DEFENSIVA) -->
            <div class="bg-slate-900 border border-rose-500/40 rounded-2xl p-3 shadow-lg space-y-3">
              <div class="flex items-center gap-2 pb-1.5 border-b border-slate-800">
                <span class="w-6 h-6 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center text-sm font-bold">3</span>
                <div>
                  <h4 class="text-xs font-black text-rose-300 uppercase tracking-wide">Fase Defensiva · Sin Balón</h4>
                  <p class="text-[9.5px] text-slate-400">Altura del bloque defensivo y agresividad en la recuperación</p>
                </div>
              </div>

              <!-- Altura de la Línea Defensiva -->
              <div>
                <div class="text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                  <span>Altura de la Línea Defensiva</span>
                  <span class="text-rose-400 font-mono text-[9px]">${TACTICAL_OPTIONS.defensiveLine.find(o => o.id === tactics.instructions.outOfPossession.defensiveLine)?.label}</span>
                </div>
                <div class="grid grid-cols-3 gap-1.5">
                  ${TACTICAL_OPTIONS.defensiveLine.map(opt => {
                    const isSel = tactics.instructions.outOfPossession.defensiveLine === opt.id;
                    return `
                      <button class="btn-tactic-opt p-2 rounded-xl border text-center transition flex flex-col items-center justify-center ${isSel ? 'bg-rose-500/25 border-rose-400 text-white shadow-sm ring-1 ring-rose-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 active:scale-98'}" data-phase="outOfPossession" data-param="defensiveLine" data-val="${opt.id}">
                        <span class="text-sm mb-0.5">${opt.icon}</span>
                        <span class="text-[11px] font-bold ${isSel ? 'text-rose-300' : 'text-slate-200'}">${opt.label}</span>
                        <span class="text-[8px] text-slate-400 leading-tight mt-0.5 line-clamp-1">${opt.desc}</span>
                      </button>
                    `;
                  }).join('')}
                </div>
              </div>

              <!-- Intensidad de Presión -->
              <div>
                <div class="text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                  <span>Intensidad de Presión</span>
                  <span class="text-rose-400 font-mono text-[9px]">${TACTICAL_OPTIONS.pressing.find(o => o.id === tactics.instructions.outOfPossession.pressing)?.label}</span>
                </div>
                <div class="grid grid-cols-3 gap-1.5">
                  ${TACTICAL_OPTIONS.pressing.map(opt => {
                    const isSel = tactics.instructions.outOfPossession.pressing === opt.id;
                    return `
                      <button class="btn-tactic-opt p-2 rounded-xl border text-center transition flex flex-col items-center justify-center ${isSel ? 'bg-rose-500/25 border-rose-400 text-white shadow-sm ring-1 ring-rose-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 active:scale-98'}" data-phase="outOfPossession" data-param="pressing" data-val="${opt.id}">
                        <span class="text-sm mb-0.5">${opt.icon}</span>
                        <span class="text-[11px] font-bold ${isSel ? 'text-rose-300' : 'text-slate-200'}">${opt.label}</span>
                        <span class="text-[8px] text-slate-400 leading-tight mt-0.5 line-clamp-1">${opt.desc}</span>
                      </button>
                    `;
                  }).join('')}
                </div>
              </div>

              <!-- Anchura Defensiva (Control de Bandas) -->
              <div>
                <div class="text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                  <span>Anchura Defensiva (Control de Bandas)</span>
                  <span class="text-rose-400 font-mono text-[9px]">${TACTICAL_OPTIONS.defenseWidth.find(o => o.id === (tactics.instructions.outOfPossession.defenseWidth || 'balanced'))?.label || 'Equilibrada'}</span>
                </div>
                <div class="grid grid-cols-3 gap-1.5">
                  ${TACTICAL_OPTIONS.defenseWidth.map(opt => {
                    const isSel = (tactics.instructions.outOfPossession.defenseWidth || 'balanced') === opt.id;
                    return `
                      <button class="btn-tactic-opt p-2 rounded-xl border text-center transition flex flex-col items-center justify-center ${isSel ? 'bg-rose-500/25 border-rose-400 text-white shadow-sm ring-1 ring-rose-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 active:scale-98'}" data-phase="outOfPossession" data-param="defenseWidth" data-val="${opt.id}">
                        <span class="text-sm mb-0.5">${opt.icon}</span>
                        <span class="text-[11px] font-bold ${isSel ? 'text-rose-300' : 'text-slate-200'}">${opt.label}</span>
                        <span class="text-[8px] text-slate-400 leading-tight mt-0.5 line-clamp-1">${opt.desc}</span>
                      </button>
                    `;
                  }).join('')}
                </div>
              </div>
            </div>

            <!-- Panel de Análisis del Impacto en el Motor -->
            <div class="bg-slate-900/60 border border-slate-800 rounded-2xl p-3 text-[10px] text-slate-400 space-y-1">
              <div class="font-bold text-white flex items-center gap-1.5 mb-1">
                <span>⚡</span> Impacto en la Simulación del Partido
              </div>
              <p>• <b class="text-slate-200">Fatiga y Físico:</b> ${tactics.instructions.outOfPossession.pressing === 'high' ? 'Presión asfixiante genera mayor desgaste físico y más faltas cometidas.' : tactics.instructions.outOfPossession.pressing === 'low' ? 'Baja presión conserva energía para los 90 minutos.' : 'Desgaste equilibrado.'}</p>
              <p>• <b class="text-slate-200">Construcción:</b> ${tactics.instructions.inPossession.passingStyle === 'short' ? 'Pase corto maximiza el % de posesión y reduce pérdidas fortuitas.' : tactics.instructions.inPossession.passingStyle === 'direct' ? 'Pase directo genera ocasiones verticales más veloces.' : 'Estilo versátil mixto.'}</p>
              <p>• <b class="text-slate-200">Transiciones:</b> ${tactics.instructions.inTransition.loss === 'counterpress' ? 'Contrapresión activa alertas de robo inmediato en campo rival.' : 'Repliegue ordenado protege el área propia.'}</p>
            </div>

            <!-- Botones de Acción al final de las instrucciones tácticas -->
            <div class="mt-4 pt-1 space-y-2">
              <button id="btn-save-tactics-instructions" class="w-full py-3 bg-emerald-600 hover:bg-emerald-500 active:scale-98 text-white font-black text-xs rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 border border-emerald-500/50">
                <span class="text-sm">💾</span>
                <span>Guardar Estilo e Instrucciones Tácticas</span>
              </button>
              ${onBackToHub ? `
                <button id="btn-tactics-back-instr" class="w-full py-2.5 bg-slate-900 hover:bg-slate-800 active:scale-98 text-slate-300 hover:text-white font-bold text-xs rounded-xl transition flex items-center justify-center gap-2 border border-slate-800">
                  <span>🏠</span>
                  <span>Volver al Menú Principal (Jugar Jornada ${gameState.currentRound})</span>
                </button>
              ` : ''}
            </div>
          </div>
        `}
      </div>
    `;

    // Eventos de Pestañas
    const tabLineup = container.querySelector("#tab-nav-lineup");
    const tabInstr = container.querySelector("#tab-nav-instructions");
    if (tabLineup) {
      tabLineup.onclick = () => {
        activeTab = "lineup";
        render();
      };
    }
    if (tabInstr) {
      tabInstr.onclick = () => {
        activeTab = "instructions";
        render();
      };
    }

    // Eventos Formación y Mentalidad
    container.querySelectorAll(".btn-formation").forEach(btn => {
      btn.onclick = () => {
        tactics.formation = btn.dataset.formation;
        tactics.customPositions = {}; // Reiniciar posiciones personalizadas al cambiar esquema base
        onSaveTactics(tactics);
        render();
      };
    });

    container.querySelectorAll(".btn-mentality").forEach(btn => {
      btn.onclick = () => {
        tactics.mentality = btn.dataset.mentality;
        onSaveTactics(tactics);
        render();
      };
    });

    // Auto-alinear
    const btnAuto = container.querySelector("#btn-auto-align");
    if (btnAuto) {
      btnAuto.onclick = () => {
        autoAlignLineup();
        onSaveTactics(tactics);
        render();
      };
    }

    // Botones de Guardar Alineación / Táctica
    function showSaveConfirmationToast() {
      const existing = document.getElementById("tactics-save-toast");
      if (existing) existing.remove();

      const toast = document.createElement("div");
      toast.id = "tactics-save-toast";
      toast.className = "fixed top-16 left-1/2 -translate-x-1/2 z-50 bg-emerald-600 text-white px-4 py-2.5 rounded-xl shadow-2xl border border-emerald-400 flex items-center gap-2 text-xs font-bold animate-bounce transition-opacity duration-300 pointer-events-none";
      toast.innerHTML = `
        <span class="text-base">✅</span>
        <span>¡Alineación y táctica guardadas con éxito!</span>
      `;
      document.body.appendChild(toast);

      setTimeout(() => {
        toast.style.opacity = "0";
        setTimeout(() => toast.remove(), 400);
      }, 2000);
    }

    function handleSaveClick(btn) {
      onSaveTactics(tactics);
      showSaveConfirmationToast();
      if (btn) {
        const origHTML = btn.innerHTML;
        const origClass = btn.className;
        btn.innerHTML = `<span>✅</span> <span>¡Guardada!</span>`;
        btn.className = origClass.replace("bg-emerald-600", "bg-teal-500").replace("border-emerald-500", "border-teal-400");
        setTimeout(() => {
          if (btn && btn.isConnected) {
            btn.innerHTML = origHTML;
            btn.className = origClass;
          }
        }, 1800);
      }
    }

    const btnSaveHeader = container.querySelector("#btn-save-tactics");
    if (btnSaveHeader) btnSaveHeader.onclick = () => handleSaveClick(btnSaveHeader);

    const btnSaveBottom = container.querySelector("#btn-save-tactics-bottom");
    if (btnSaveBottom) btnSaveBottom.onclick = () => handleSaveClick(btnSaveBottom);

    const btnSaveInstr = container.querySelector("#btn-save-tactics-instructions");
    if (btnSaveInstr) btnSaveInstr.onclick = () => handleSaveClick(btnSaveInstr);

    // Eventos de Volver al Inicio / Hub
    if (onBackToHub) {
      const handleBackToHub = () => {
        onSaveTactics(tactics);
        onBackToHub();
      };
      const btnBackHeader = container.querySelector("#btn-tactics-back");
      if (btnBackHeader) btnBackHeader.onclick = handleBackToHub;
      const btnBackBottom = container.querySelector("#btn-tactics-back-bottom");
      if (btnBackBottom) btnBackBottom.onclick = handleBackToHub;
      const btnBackInstr = container.querySelector("#btn-tactics-back-instr");
      if (btnBackInstr) btnBackInstr.onclick = handleBackToHub;
    }

    // Controles de Ajuste Manual de Posición en el Campo (Nudge botones)
    container.querySelectorAll(".btn-nudge-pos").forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        if (!selectedPlayerId) return;
        const selSlotIndex = tactics.lineup.indexOf(selectedPlayerId);
        if (selSlotIndex === -1) return;
        const axis = btn.dataset.axis;
        const delta = parseInt(btn.dataset.delta, 10);
        const effSlot = getEffectiveSlotCoords(formationKey, selSlotIndex, tactics.customPositions);
        if (!tactics.customPositions) tactics.customPositions = {};
        const isGK = selSlotIndex === 0;

        if (axis === "x") {
          const newX = Math.max(isGK ? 38 : 10, Math.min(isGK ? 62 : 90, effSlot.x + delta));
          tactics.customPositions[selSlotIndex] = { x: newX, y: effSlot.y };
        } else {
          const newY = Math.max(isGK ? 82 : 12, Math.min(isGK ? 90 : 88, effSlot.y + delta));
          tactics.customPositions[selSlotIndex] = { x: effSlot.x, y: newY };
        }
        onSaveTactics(tactics);
        render();
      };
    });

    // Sliders de Posición Fina
    const sliderY = container.querySelector(".slider-pos-y");
    if (sliderY) {
      sliderY.oninput = (e) => {
        if (!selectedPlayerId) return;
        const selSlotIndex = tactics.lineup.indexOf(selectedPlayerId);
        if (selSlotIndex === -1) return;
        const effSlot = getEffectiveSlotCoords(formationKey, selSlotIndex, tactics.customPositions);
        const val = parseInt(e.target.value, 10);
        if (!tactics.customPositions) tactics.customPositions = {};
        tactics.customPositions[selSlotIndex] = { x: effSlot.x, y: val };
        const slotEl = container.querySelector(`.slot-player[data-slot-index="${selSlotIndex}"]`);
        if (slotEl) slotEl.style.top = `${val}%`;
      };
      sliderY.onchange = () => {
        onSaveTactics(tactics);
        render();
      };
    }

    const sliderX = container.querySelector(".slider-pos-x");
    if (sliderX) {
      sliderX.oninput = (e) => {
        if (!selectedPlayerId) return;
        const selSlotIndex = tactics.lineup.indexOf(selectedPlayerId);
        if (selSlotIndex === -1) return;
        const effSlot = getEffectiveSlotCoords(formationKey, selSlotIndex, tactics.customPositions);
        const val = parseInt(e.target.value, 10);
        if (!tactics.customPositions) tactics.customPositions = {};
        tactics.customPositions[selSlotIndex] = { x: val, y: effSlot.y };
        const slotEl = container.querySelector(`.slot-player[data-slot-index="${selSlotIndex}"]`);
        if (slotEl) slotEl.style.left = `${val}%`;
      };
      sliderX.onchange = () => {
        onSaveTactics(tactics);
        render();
      };
    }

    // Botón restablecer posición original
    const btnResetPos = container.querySelector("#btn-reset-pos");
    if (btnResetPos) {
      btnResetPos.onclick = (e) => {
        e.stopPropagation();
        if (!selectedPlayerId) return;
        const selSlotIndex = tactics.lineup.indexOf(selectedPlayerId);
        if (selSlotIndex !== -1 && tactics.customPositions) {
          delete tactics.customPositions[selSlotIndex];
          onSaveTactics(tactics);
          render();
        }
      };
    }

    // Arrastre libre con el dedo o ratón directamente en la pizarra (solo activo para el futbolista seleccionado)
    let tacticsJustDragged = false;
    const pitchBox = container.querySelector("#tactics-pitch-container");
    if (pitchBox && selectedPlayerId) {
      const selectedSlotEl = pitchBox.querySelector(`.slot-player[data-player-id="${selectedPlayerId}"]`);
      if (selectedSlotEl) {
        const slotIdx = parseInt(selectedSlotEl.dataset.slotIndex, 10);
        const pId = selectedPlayerId;

        let dragMoved = false;
        let startX = 0, startY = 0;

        const onPointerDown = (e) => {
          if (e.button !== 0 && e.pointerType === "mouse") return;
          dragMoved = false;
          startX = e.clientX;
          startY = e.clientY;

          const onPointerMove = (me) => {
            const dist = Math.hypot(me.clientX - startX, me.clientY - startY);
            if (!dragMoved && dist > 5) {
              dragMoved = true;
            }
            if (dragMoved) {
              const rect = pitchBox.getBoundingClientRect();
              let nx = ((me.clientX - rect.left) / rect.width) * 100;
              let ny = ((me.clientY - rect.top) / rect.height) * 100;
              const isGK = slotIdx === 0;
              nx = Math.max(isGK ? 38 : 10, Math.min(isGK ? 62 : 90, nx));
              ny = Math.max(isGK ? 82 : 12, Math.min(isGK ? 90 : 88, ny));
              selectedSlotEl.style.left = `${nx}%`;
              selectedSlotEl.style.top = `${ny}%`;
              selectedSlotEl.dataset.dragX = nx;
              selectedSlotEl.dataset.dragY = ny;
            }
          };

          const onPointerUp = () => {
            window.removeEventListener("pointermove", onPointerMove);
            window.removeEventListener("pointerup", onPointerUp);
            if (dragMoved) {
              tacticsJustDragged = true;
              setTimeout(() => { tacticsJustDragged = false; }, 200);
              const finalX = parseFloat(selectedSlotEl.dataset.dragX);
              const finalY = parseFloat(selectedSlotEl.dataset.dragY);
              if (!isNaN(finalX) && !isNaN(finalY)) {
                if (!tactics.customPositions) tactics.customPositions = {};
                tactics.customPositions[slotIdx] = { x: Math.round(finalX), y: Math.round(finalY) };
                selectedPlayerId = pId;
                onSaveTactics(tactics);
                render();
              }
            }
          };

          window.addEventListener("pointermove", onPointerMove);
          window.addEventListener("pointerup", onPointerUp);
        };

        selectedSlotEl.addEventListener("pointerdown", onPointerDown);
      }

      pitchBox.onclick = (e) => {
        if (tacticsJustDragged) return;
        if (!e.target.closest(".slot-player")) {
          if (selectedPlayerId) {
            selectedPlayerId = null;
            render();
          }
        }
      };
    }

    // Eventos Pestaña Instrucciones: Presets 1-Click
    container.querySelectorAll(".btn-preset-card").forEach(btn => {
      btn.onclick = () => {
        const pKey = btn.dataset.presetKey;
        const preset = TACTICAL_PRESETS[pKey];
        if (preset) {
          tactics.instructions = {
            preset: pKey,
            inPossession: { ...preset.inPossession },
            inTransition: { ...preset.inTransition },
            outOfPossession: { ...preset.outOfPossession }
          };
          onSaveTactics(tactics);
          render();
        }
      };
    });

    // Eventos Pestaña Instrucciones: Parámetros individuales
    container.querySelectorAll(".btn-tactic-opt").forEach(btn => {
      btn.onclick = () => {
        const phase = btn.dataset.phase;
        const param = btn.dataset.param;
        const val = btn.dataset.val;
        if (tactics.instructions && tactics.instructions[phase]) {
          tactics.instructions[phase][param] = val;
          tactics.instructions.preset = detectMatchingPreset(tactics.instructions);
          onSaveTactics(tactics);
          render();
        }
      };
    });

    // Toggle para ver la lista completa de funciones del 11
    const btnToggleAllRoles = container.querySelector("#btn-toggle-all-roles");
    if (btnToggleAllRoles) {
      btnToggleAllRoles.onclick = () => {
        showAllRolesList = !showAllRolesList;
        render();
      };
    }

    // Cambiar función desde el selector desplegable
    container.querySelectorAll(".select-player-role").forEach(sel => {
      sel.onchange = (e) => {
        const pId = sel.dataset.playerId;
        const rId = e.target.value;
        if (!tactics.playerRoles) tactics.playerRoles = {};
        tactics.playerRoles[pId] = rId;
        onSaveTactics(tactics);
        render();
      };
    });

    // Asignar función desde el panel del jugador seleccionado
    container.querySelectorAll(".btn-assign-role").forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const pId = btn.dataset.playerId;
        const rId = btn.dataset.roleId;
        if (!tactics.playerRoles) tactics.playerRoles = {};
        tactics.playerRoles[pId] = rId;
        onSaveTactics(tactics);
        render();
      };
    });

    // Cerrar panel de rol
    const btnCloseRoleBox = container.querySelector("#btn-close-role-box");
    if (btnCloseRoleBox) {
      btnCloseRoleBox.onclick = (e) => {
        e.stopPropagation();
        selectedPlayerId = null;
        render();
      };
    }

    // Intercambio táctico al tocar jugadores en la pestaña campo
    container.querySelectorAll(".slot-player, .bench-player").forEach(el => {
      el.onclick = () => {
        if (tacticsJustDragged) return;
        const playerId = el.dataset.playerId;
        handlePlayerTap(playerId);
      };
    });
  }

  function handlePlayerTap(tappedId) {
    if (!selectedPlayerId) {
      selectedPlayerId = tappedId;
      render();
      return;
    }

    if (selectedPlayerId === tappedId) {
      selectedPlayerId = null;
      render();
      return;
    }

    // Intercambiar selectedPlayerId y tappedId
    const inLineup1 = tactics.lineup.indexOf(selectedPlayerId);
    const inBench1 = tactics.bench.indexOf(selectedPlayerId);

    const inLineup2 = tactics.lineup.indexOf(tappedId);
    const inBench2 = tactics.bench.indexOf(tappedId);

    if (inLineup1 !== -1 && inLineup2 !== -1) {
      // Ambos en el 11: intercambian posiciones
      const tmp = tactics.lineup[inLineup1];
      tactics.lineup[inLineup1] = tactics.lineup[inLineup2];
      tactics.lineup[inLineup2] = tmp;
    } else if (inLineup1 !== -1 && inBench2 !== -1) {
      // Uno en el 11 y otro en el banquillo
      const benchP = team.players.find(p => p.id === tappedId);
      if (benchP && benchP.injury) {
        alert(`⚠️ ${benchP.name} está lesionado (${benchP.injury.type}) y no puede alinearse como titular.`);
        return;
      }
      if (benchP && benchP.suspension && benchP.suspension.roundsLeft > 0) {
        alert(`🟥 ${benchP.name} está sancionado (${benchP.suspension.reason}) y no puede alinearse como titular.`);
        return;
      }
      tactics.lineup[inLineup1] = tappedId;
      tactics.bench[inBench2] = selectedPlayerId;
    } else if (inBench1 !== -1 && inLineup2 !== -1) {
      const benchP = team.players.find(p => p.id === selectedPlayerId);
      if (benchP && benchP.injury) {
        alert(`⚠️ ${benchP.name} está lesionado (${benchP.injury.type}) y no puede alinearse como titular.`);
        return;
      }
      if (benchP && benchP.suspension && benchP.suspension.roundsLeft > 0) {
        alert(`🟥 ${benchP.name} está sancionado (${benchP.suspension.reason}) y no puede alinearse como titular.`);
        return;
      }
      tactics.bench[inBench1] = tappedId;
      tactics.lineup[inLineup2] = selectedPlayerId;
    } else if (inBench1 !== -1 && inBench2 !== -1) {
      // Ambos en banquillo
      const tmp = tactics.bench[inBench1];
      tactics.bench[inBench1] = tactics.bench[inBench2];
      tactics.bench[inBench2] = tmp;
    }

    selectedPlayerId = null;
    onSaveTactics(tactics);
    render();
  }

  function autoAlignLineup() {
    const formationKey = tactics.formation;
    const formation = FORMATIONS[formationKey] || FORMATIONS["4-3-3"];
    const getMatchFitness = p => (p.ovr || 70) * (0.6 + ((p.energy !== undefined ? p.energy : 100) / 250));
    const availablePlayers = [...team.players].filter(p => !p.injury && !p.suspension).sort((a, b) => getMatchFitness(b) - getMatchFitness(a));
    const used = new Set();
    const newLineup = [];

    // Portero
    const gk = availablePlayers.find(p => p.pos === "POR");
    if (gk) {
      newLineup[0] = gk.id;
      used.add(gk.id);
    }

    // Resto de posiciones
    formation.slots.forEach((slot, idx) => {
      if (idx === 0) return;
      let best = availablePlayers.find(p => !used.has(p.id) && (
        p.pos === slot.pos ||
        (Array.isArray(p.secondaryPos) && p.secondaryPos.includes(slot.pos)) ||
        (typeof p.secondaryPos === "string" && p.secondaryPos.includes(slot.pos))
      ));
      if (!best) {
        best = availablePlayers.find(p => !used.has(p.id) && p.pos !== "POR");
      }
      if (best) {
        newLineup[idx] = best.id;
        used.add(best.id);
      }
    });

    const newBench = team.players.filter(p => !used.has(p.id)).map(p => p.id);

    tactics.lineup = newLineup;
    tactics.bench = newBench;
  }

  render();
}

// =========================================================
// ARCHIVO: js\ui\squadView.js
// =========================================================

// Vista de la Plantilla Completa y Ficha Detallada de Futbolistas
function renderSquadView(container, gameState, onBackToHub) {
  const team = gameState.teams.find(t => t.id === gameState.userTeamId);
  let filter = "ALL";
  let activePlayerModal = null;

  function render() {
    const hasAnyPos = (p, list) => {
      const all = [
        ...(p.pos ? p.pos.split(/[\s,\/]+/) : []),
        ...(Array.isArray(p.secondaryPos) ? p.secondaryPos : (p.secondaryPos ? String(p.secondaryPos).split(/[\s,\/]+/) : []))
      ].map(s => s.trim().toUpperCase());
      return list.some(target => all.includes(target));
    };

    let filteredPlayers = [...team.players];
    if (filter === "GK") filteredPlayers = filteredPlayers.filter(p => hasAnyPos(p, ["POR"]));
    else if (filter === "DEF") filteredPlayers = filteredPlayers.filter(p => hasAnyPos(p, ["DFC", "LD", "LI"]));
    else if (filter === "MID") filteredPlayers = filteredPlayers.filter(p => hasAnyPos(p, ["MCD", "MC", "MCO"]));
    else if (filter === "ATT") filteredPlayers = filteredPlayers.filter(p => hasAnyPos(p, ["DC", "EI", "ED"]));

    // Ordenar por OVR descendente
    filteredPlayers.sort((a, b) => b.ovr - a.ovr);

    container.innerHTML = `
      <div class="min-h-screen bg-slate-950 text-white flex flex-col pb-20 select-none">
        <!-- Header -->
        <header class="bg-slate-900 border-b border-slate-800 px-4 py-3 sticky top-0 z-20 flex items-center justify-between">
          <div class="flex items-center gap-2">
            ${onBackToHub ? `
              <button id="btn-squad-back" class="text-xs bg-slate-800 hover:bg-slate-700 text-sky-400 hover:text-white px-2.5 py-1.5 rounded-lg border border-slate-700 font-bold active:scale-95 transition flex items-center gap-1 shadow-sm" title="Volver al Menú Principal">
                <span>❮</span> Inicio
              </button>
            ` : ''}
            <div>
              <h2 class="text-sm font-bold">Plantilla de Jugadores</h2>
              <p class="text-[10px] text-slate-400">${team.players.length} futbolistas inscritos</p>
            </div>
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
                  <div class="flex items-center gap-2 mt-1 flex-wrap">
                    <span class="text-[10px] text-slate-400">⚽ ${p.goals || 0}</span>
                    ${(p.assists || 0) > 0 ? `<span class="text-[10px] text-sky-400">👟 ${p.assists}</span>` : ''}
                    ${p.avgRating ? `<span class="text-[10px] font-mono font-bold px-1.5 py-0.2 rounded bg-amber-500/15 border border-amber-500/40 text-amber-300">⭐ ${p.avgRating.toFixed(2)}</span>` : ''}
                    ${(p.mvpCount || 0) > 0 ? `<span class="text-[10px] font-bold text-yellow-400">🏆 ${p.mvpCount}</span>` : ''}
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
                  ${p.pos === "POR" ? `
                    <div class="text-[10px] text-amber-400 font-mono font-bold">🧤 PAR ${p.par !== undefined ? p.par : p.ovr}</div>
                    <div class="text-[10px] text-slate-400 font-mono">REF ${p.pac} | PAS ${p.pas}</div>
                  ` : `
                    <div class="text-[10px] text-slate-400 font-mono">PAC ${p.pac} | SHO ${p.sho}</div>
                    <div class="text-[10px] text-slate-400 font-mono">PAS ${p.pas} | DEF ${p.def}</div>
                  `}
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

    // Volver al Inicio
    const btnBack = container.querySelector("#btn-squad-back");
    if (btnBack && onBackToHub) {
      btnBack.onclick = () => onBackToHub();
    }

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
                  ${p.secondaryPos ? `<span class="text-xs px-2 py-0.5 bg-slate-800/80 border border-slate-700/60 rounded font-bold text-amber-300/90" title="Posiciones secundarias">+ ${Array.isArray(p.secondaryPos) ? p.secondaryPos.join(', ') : p.secondaryPos}</span>` : ''}
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
            <div class="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">
              ${p.pos === "POR" ? "🧤 Atributos de Portería" : "Atributos Principales"}
            </div>
            ${(p.pos === "POR" ? [
              { label: "Paradas (PAR)", val: p.par !== undefined ? p.par : p.ovr, color: "bg-amber-400" },
              { label: "Reflejos / Ritmo (PAC)", val: p.pac, color: "bg-emerald-500" },
              { label: "Saque / Pase (PAS)", val: p.pas, color: "bg-sky-500" },
              { label: "Salidas / Agilidad (DRI)", val: p.dri, color: "bg-amber-500" },
              { label: "Colocación (DEF)", val: p.def, color: "bg-indigo-500" },
              { label: "Físico (PHY)", val: p.phy, color: "bg-purple-500" }
            ] : [
              { label: "Ritmo (PAC)", val: p.pac, color: "bg-emerald-500" },
              { label: "Tiro (SHO)", val: p.sho, color: "bg-red-500" },
              { label: "Pase (PAS)", val: p.pas, color: "bg-sky-500" },
              { label: "Regate (DRI)", val: p.dri, color: "bg-amber-500" },
              { label: "Defensa (DEF)", val: p.def, color: "bg-indigo-500" },
              { label: "Físico (PHY)", val: p.phy, color: "bg-purple-500" }
            ]).map(attr => `
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
          <div class="grid grid-cols-4 gap-2 text-center">
            <div class="p-2 rounded-xl bg-slate-950 border border-slate-800">
              <span class="text-[9px] text-slate-500 font-bold uppercase block">Goles / Asis</span>
              <div class="text-sm font-black text-amber-400">⚽ ${p.goals || 0} <span class="text-sky-400 text-xs">👟 ${p.assists || 0}</span></div>
            </div>
            <div class="p-2 rounded-xl bg-slate-950 border border-slate-800">
              <span class="text-[9px] text-slate-500 font-bold uppercase block">Nota Media</span>
              <div class="text-sm font-black text-emerald-400">${p.avgRating ? `⭐ ${p.avgRating.toFixed(2)}` : '—'}</div>
              <div class="text-[8.5px] text-slate-400 font-semibold">${p.matchesRated || 0} part.</div>
            </div>
            <div class="p-2 rounded-xl bg-slate-950 border border-slate-800">
              <span class="text-[9px] text-slate-500 font-bold uppercase block">Premios MVP</span>
              <div class="text-sm font-black text-yellow-400">🏆 ${p.mvpCount || 0}</div>
              <div class="text-[8.5px] text-slate-400 font-semibold">${p.lastMatchRating ? `Últ: ${p.lastMatchRating.toFixed(1)}` : 'Temporada'}</div>
            </div>
            <div class="p-2 rounded-xl bg-slate-950 border border-slate-800">
              <span class="text-[9px] text-slate-500 font-bold uppercase block">Condición</span>
              <div class="text-sm font-black ${(p.energy || 100) >= 85 ? 'text-emerald-400' : (p.energy || 100) >= 70 ? 'text-amber-400' : 'text-rose-400'}">${Math.round(p.energy !== undefined ? p.energy : 100)}%</div>
              <div class="text-[8.5px] ${(p.energy || 100) >= 85 ? 'text-emerald-400' : (p.energy || 100) >= 70 ? 'text-amber-400' : 'text-rose-400'} font-bold truncate">${(p.fatigueLoad || 0) >= 40 ? 'Sobrecarga' : (p.energy || 100) >= 85 ? 'Óptimo' : (p.energy || 100) >= 70 ? 'Cansado' : 'Fatigado'}</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  render();
}

// =========================================================
// ARCHIVO: js\ui\standingsView.js
// =========================================================

// Vista de la Clasificación Completa de LaLiga, Pichichi y Ranking MVP / Valoraciones
function renderStandingsView(container, gameState, onBackToHub) {
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

// =========================================================
// ARCHIVO: js\ui\seasonEndView.js
// =========================================================

// Vista de Final de Temporada (Jornada 38 completada)
function renderSeasonEndView(container, gameState, onRestartSeason, onNewGame) {
  const standings = gameState.standings;
  const championRow = standings[0];
  const userTeam = gameState.teams.find(t => t.id === gameState.userTeamId);
  const userPosition = standings.findIndex(r => r.teamId === gameState.userTeamId) + 1;
  const isChampion = userPosition === 1;

  const topScorers = Object.entries(gameState.topScorers || {})
    .map(([name, goals]) => ({ name, goals }))
    .sort((a, b) => b.goals - a.goals);
  const pichichi = topScorers[0] || { name: "N/A", goals: 0 };

  // Calcular el MVP de la Temporada de LaLiga (Mejora 5)
  const allLeaguePlayers = [];
  (gameState.teams || []).forEach(t => {
    (t.players || []).forEach(p => {
      if ((p.matchesRated || 0) >= 5 && p.avgRating) {
        allLeaguePlayers.push({ ...p, teamShort: t.shortName });
      }
    });
  });
  allLeaguePlayers.sort((a, b) => (b.avgRating || 0) - (a.avgRating || 0) || (b.mvpCount || 0) - (a.mvpCount || 0));
  const seasonMvp = allLeaguePlayers[0] || null;

  container.innerHTML = `
    <div class="min-h-screen bg-slate-950 text-white flex flex-col justify-between p-4 max-w-md mx-auto select-none">
      <header class="text-center pt-4">
        <div class="text-4xl mb-2">${isChampion ? '🏆🥇🎉' : '🏅'}</div>
        <h1 class="text-2xl font-black ${isChampion ? 'text-amber-400' : 'text-white'}">
          ${isChampion ? '¡CAMPEÓN DE LALIGA!' : 'TEMPORADA FINALIZADA'}
        </h1>
        <p class="text-xs text-slate-400 mt-1">Has completado las 38 jornadas oficiales</p>
      </header>

      <!-- Resumen del logro -->
      <div class="bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-2xl my-auto space-y-4 text-center">
        <!-- Tarjeta de posición final -->
        <div class="p-4 rounded-2xl bg-slate-950/80 border border-slate-800">
          <div class="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Tu posición final con ${userTeam.name}</div>
          <div class="text-4xl font-black text-white my-1">
            <span class="${isChampion ? 'text-amber-400' : userPosition <= 4 ? 'text-sky-400' : userPosition <= 6 ? 'text-emerald-400' : userPosition >= 18 ? 'text-red-400' : 'text-slate-300'}">
              ${userPosition}º
            </span>
          </div>
          <div class="text-xs font-semibold ${isChampion ? 'text-amber-400' : userPosition <= 4 ? 'text-sky-400' : userPosition <= 6 ? 'text-emerald-400' : userPosition >= 18 ? 'text-red-400' : 'text-slate-400'}">
            ${isChampion ? '⭐ Campeón de LaLiga EA Sports ⭐' : userPosition <= 4 ? '🎟 Clasificado para la UEFA Champions League' : userPosition <= 5 ? '🎟 Clasificado para la UEFA Europa League' : userPosition <= 6 ? '🎟 Clasificado para la UEFA Conference League' : userPosition >= 18 ? '⚠️ Descenso a Segunda División' : 'Permanencia asegurada en la zona media'}
          </div>
        </div>

        <!-- Trofeo Pichichi -->
        <div class="p-3 rounded-2xl bg-slate-950/60 border border-slate-800 text-left flex items-center justify-between">
          <div class="flex items-center gap-2.5">
            <span class="text-2xl">⚽</span>
            <div>
              <div class="text-[10px] text-slate-400 uppercase font-bold">Máximo Goleador (Pichichi)</div>
              <div class="text-xs font-bold text-white">${pichichi.name}</div>
            </div>
          </div>
          <div class="text-sm font-black text-amber-400 font-mono">${pichichi.goals} goles</div>
        </div>

        ${seasonMvp ? `
          <!-- Trofeo MVP de la Temporada (Mejora 5) -->
          <div class="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/40 text-left flex items-center justify-between">
            <div class="flex items-center gap-2.5">
              <span class="text-2xl">🏆</span>
              <div>
                <div class="text-[10px] text-amber-300 uppercase font-bold">MVP de LaLiga (Mejor Nota Media)</div>
                <div class="text-xs font-bold text-white">${seasonMvp.name} <span class="text-[10px] text-slate-400">(${seasonMvp.teamShort})</span></div>
              </div>
            </div>
            <div class="text-sm font-black text-emerald-400 font-mono">⭐ ${seasonMvp.avgRating.toFixed(2)}</div>
          </div>
        ` : ''}

        <!-- Cuadro de Honor -->
        <div class="text-left text-xs space-y-1.5 p-3 rounded-2xl bg-slate-950/60 border border-slate-800">
          <div class="text-[10px] uppercase font-bold text-slate-400 mb-1">Cuadro de Honor:</div>
          <div class="flex justify-between text-slate-300">
            <span>🏆 Campeón:</span>
            <b class="text-amber-400">${championRow.teamName} (${championRow.points} pts)</b>
          </div>
          <div class="flex justify-between text-slate-300">
            <span>🥈 Subcampeón:</span>
            <span class="text-white">${standings[1]?.teamName || '-'}</span>
          </div>
          <div class="flex justify-between text-slate-300">
            <span>🥉 Tercer puesto:</span>
            <span class="text-white">${standings[2]?.teamName || '-'}</span>
          </div>
          <div class="flex justify-between text-slate-300">
            <span>⬇️ Descendidos:</span>
            <span class="text-red-400">${standings.slice(17, 20).map(r => r.shortName).join(', ')}</span>
          </div>
        </div>
      </div>

      <!-- Acciones Finales -->
      <footer class="pt-4 space-y-2">
        <button id="btn-next-season" class="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-600 active:scale-98 text-white font-extrabold text-sm rounded-2xl shadow-xl shadow-emerald-500/20">
          JUGAR OTRA TEMPORADA CON ${userTeam.shortName} ➔
        </button>
        <button id="btn-new-club" class="w-full py-3 bg-slate-900 hover:bg-slate-800 active:scale-98 text-slate-400 hover:text-white font-bold text-xs rounded-xl border border-slate-800">
          Elegir Otro Equipo de LaLiga
        </button>
      </footer>
    </div>
  `;

  container.querySelector("#btn-next-season").onclick = () => {
    onRestartSeason();
  };

  container.querySelector("#btn-new-club").onclick = () => {
    onNewGame();
  };
}

// =========================================================
// ARCHIVO: js\ui\matchView.js
// =========================================================

// Vista del Día de Partido: Alineación Previa al Encuentro, Radar 2D y Cambios en Vivo

// Utilidades de color y contraste visual para equipaciones
function hexToRgb(hex) {
  if (!hex) return { r: 0, g: 0, b: 0 };
  let c = String(hex).replace("#", "").trim();
  if (c.length === 3) c = c[0] + c[0] + c[1] + c[1] + c[2] + c[2];
  const num = parseInt(c, 16);
  if (isNaN(num)) return { r: 0, g: 0, b: 0 };
  return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
}
function areColorsConfusing(hex1, hex2) {
  if (!hex1 || !hex2) return false;
  if (String(hex1).toLowerCase() === String(hex2).toLowerCase()) return true;
  const c1 = hexToRgb(hex1);
  const c2 = hexToRgb(hex2);
  const dr = c1.r - c2.r;
  const dg = c1.g - c2.g;
  const db = c1.b - c2.b;
  // Distancia cromática perceptual en el ojo humano
  const dist = Math.sqrt(dr * dr * 0.299 + dg * dg * 0.587 + db * db * 0.114);
  return dist < 65;
}
function resolveMatchKits(homeTeam, awayTeam) {
  const hPrimary = homeTeam.primaryColor || "#ffffff";
  const hSecondary = homeTeam.secondaryColor || "#1e293b";
  const hText = homeTeam.textColor || "#ffffff";

  let aPrimary = awayTeam.primaryColor || "#000000";
  let aSecondary = awayTeam.secondaryColor || "#ffffff";
  let aText = awayTeam.textColor || "#ffffff";

  // Si la camiseta principal del rival coincide o es muy similar a la del equipo local
  if (areColorsConfusing(hPrimary, aPrimary)) {
    // 1. Probar la segunda equipación oficial (awayKit) del visitante
    if (awayTeam.awayKit && !areColorsConfusing(hPrimary, awayTeam.awayKit.primaryColor)) {
      aPrimary = awayTeam.awayKit.primaryColor;
      aSecondary = awayTeam.awayKit.secondaryColor || "#ffffff";
      aText = awayTeam.awayKit.textColor || "#ffffff";
    }
    // 2. Si no tiene o aún confunde, probar el color secundario del visitante
    else if (!areColorsConfusing(hPrimary, aSecondary)) {
      aPrimary = aSecondary;
      aSecondary = awayTeam.primaryColor || "#ffffff";
      aText = awayTeam.textColor || "#ffffff";
    }
    // 3. Fallback inteligente de contraste absoluto
    else {
      const hRgb = hexToRgb(hPrimary);
      const hLum = (hRgb.r * 299 + hRgb.g * 587 + hRgb.b * 114) / 1000;
      if (hLum > 130) {
        aPrimary = "#18181b";
        aSecondary = "#38bdf8";
        aText = "#ffffff";
      } else {
        aPrimary = "#facc15";
        aSecondary = "#18181b";
        aText = "#0f172a";
      }
    }
  }

  // Porteros: garantizar contraste total frente a las camisetas de los jugadores de campo
  let hKeeper = "#10b981"; // Verde esmeralda
  if (areColorsConfusing(hPrimary, hKeeper) || areColorsConfusing(aPrimary, hKeeper)) {
    hKeeper = "#06b6d4"; // Cian neón
  }

  let aKeeper = "#f59e0b"; // Ámbar neón
  if (areColorsConfusing(hPrimary, aKeeper) || areColorsConfusing(aPrimary, aKeeper) || areColorsConfusing(hKeeper, aKeeper)) {
    aKeeper = "#ec4899"; // Rosa neón
  }

  return {
    home: {
      jersey: hPrimary,
      shorts: hSecondary,
      socks: hPrimary,
      collar: hSecondary,
      keeper: hKeeper,
      number: hText
    },
    away: {
      jersey: aPrimary,
      shorts: aSecondary,
      socks: aPrimary,
      collar: aSecondary,
      keeper: aKeeper,
      number: aText
    }
  };
}
function renderMatchView(container, gameState, onMatchFinished, onBackToHub) {
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
      bench: userTeam.players.slice(11).map(p => p.id),
      playerRoles: {}
    };
  }
  if (!gameState.userTactics.playerRoles) {
    gameState.userTactics.playerRoles = {};
  }
  if (!gameState.userTactics.customPositions) {
    gameState.userTactics.customPositions = {};
  }
  if (!gameState.userTactics.instructions) {
    gameState.userTactics.instructions = getDefaultTacticalInstructions();
  }
  if (!gameState.userTactics.manMarking) {
    gameState.userTactics.manMarking = {};
  } else {
    // Limpiar marcajes individuales huérfanos que apunten a jugadores que no pertenecen al rival actual
    const currentOppIds = new Set(opponentTeam.players.map(p => p.id));
    Object.keys(gameState.userTactics.manMarking).forEach(markerId => {
      const task = gameState.userTactics.manMarking[markerId];
      if (task && task.targetId && !currentOppIds.has(task.targetId)) {
        delete gameState.userTactics.manMarking[markerId];
      }
    });
  }

  let preMatchTab = "USER"; // "USER" o "OPPONENT"
  let preMatchSubTab = "PITCH"; // "PITCH" o "STYLE"
  let selectedPreMatchPlayerId = null;
  let preMatchSaveFeedback = null;
  let masterTacticsForNextMatches = null;
  let showPreMatchAllRoles = false;
  let selectedPreMatchTalk = "confidence";

  const PRE_MATCH_TALKS = [
    { id: "passionate", icon: "🔥", label: "¡Salid a morder!", desc: "+9% Ataque y +6% Medular (1ª mitad)" },
    { id: "tactical", icon: "🧠", label: "Orden y Concentración", desc: "+9% Defensa y +6% Control (1ª mitad)" },
    { id: "confidence", icon: "💪", label: "Confianza Plena", desc: "+5% Equilibrado y moral alta" },
    { id: "calm", icon: "🧊", label: "Cabeza Fría", desc: "-35% riesgo tarjetas y ahorro físico" }
  ];

  // MEJORA 3: Metadatos del Plan de Entrenamiento Semanal activo
  const WEEKLY_TRAINING_META = {
    recovery: { id: "recovery", icon: "🧘", label: "Recuperación y Fisio", shortEffect: "+4% Frescura y -35% riesgo lesión" },
    set_pieces: { id: "set_pieces", icon: "🚩", label: "Laboratorio Balón Parado", shortEffect: "+15% Córners y Faltas" },
    finishing: { id: "finishing", icon: "🎯", label: "Definición y Puntería", shortEffect: "+4 Tiro (SHO) y +7% Ataque" },
    defensive: { id: "defensive", icon: "🧱", label: "Muro y Basculación", shortEffect: "+4 Defensa/Parada y +7% Solidez" }
  };
  const activeWeeklyTraining = WEEKLY_TRAINING_META[gameState.weeklyTraining || "recovery"] || WEEKLY_TRAINING_META.recovery;

  // MEJORA 6: Clima dinámico del partido con impacto en el césped y tácticas
  const WEATHER_CATALOG = {
    sunny: {
      id: "sunny",
      icon: "☀️",
      label: "Soleado · 22°C",
      shortBadge: "☀️ Soleado 22°C",
      pitchEffect: "Césped seco (+4% Pase corto · Calor en 2ª parte)"
    },
    rain: {
      id: "rain",
      icon: "🌧️",
      label: "Lluvia · 13°C",
      shortBadge: "🌧️ Lluvia · Césped rápido",
      pitchEffect: "Césped húmedo y rápido (+Peligro tiros lejanos · +12% fatiga presión alta)"
    },
    night: {
      id: "night",
      icon: "🌙",
      label: "Noche cerrada · 16°C",
      shortBadge: "🌙 Noche · Focos",
      pitchEffect: "Fresco nocturno bajo focos (-6% fatiga física · +4% velocidad transición)"
    }
  };
  const weatherKeys = ["sunny", "night", "rain"];
  const weatherSeed = ((gameState.currentRound || 1) * 7 + (homeTeam.id || "").length * 3 + (awayTeam.id || "").length * 5) % 10;
  const initialWeatherKey = weatherSeed < 4 ? "sunny" : (weatherSeed < 7 ? "night" : "rain");
  let matchWeather = WEATHER_CATALOG[initialWeatherKey] || WEATHER_CATALOG.sunny;

  // MEJORA 4: Generador del Informe del Analista Rival (Scouting Táctico)
  function buildOpponentAnalystReport(oppTeam, oppData, oppAvg, userAvg) {
    const lineup = oppData.lineup || [];
    const sortedByOvr = [...lineup].sort((a, b) => (b.ovr || 70) - (a.ovr || 70));
    const starPlayer = sortedByOvr[0] || { name: "Estrella Rival", pos: "DC", ovr: 80, sho: 80, pas: 78, pac: 80 };

    // Estilo táctico del rival según club y formación
    const isTopPossession = oppTeam.id === "real_madrid" || oppTeam.id === "barcelona" || oppAvg.overall >= 83;
    const isCounterTeam = oppTeam.id === "atletico" || oppData.formationKey === "5-3-2" || oppData.formationKey === "4-4-2";
    const isDirectPhysical = oppTeam.id === "athletic" || oppTeam.id === "osasuna" || oppTeam.id === "getafe" || oppTeam.id === "mallorca";

    let styleTitle = `Juego por bandas (${oppData.formationKey})`;
    let styleDesc = "Busca amplitud con extremos y centros laterales al área.";
    if (isTopPossession) {
      styleTitle = `Dominio y Posesión Alta (${oppData.formationKey})`;
      styleDesc = "Línea adelantada, presión tras pérdida y mucha circulación interior.";
    } else if (isCounterTeam) {
      styleTitle = `Bloque Compacto y Transición (${oppData.formationKey})`;
      styleDesc = "Se repliega con orden y lanza contraataques verticales al recuperar.";
    } else if (isDirectPhysical) {
      styleTitle = `Fútbol Directo y Centros (${oppData.formationKey})`;
      styleDesc = "Intenso en duelos divididos, juego aéreo y segundas jugadas.";
    }

    // Detectar eslabón débil en la defensa o portería rival
    const backline = lineup.filter(p => ["LD", "LI", "DFC", "POR", "MCD"].includes(p.pos));
    const fullbacks = lineup.filter(p => ["LD", "LI"].includes(p.pos));
    const centerbacks = lineup.filter(p => p.pos === "DFC");

    const slowestFB = [...fullbacks].sort((a, b) => (a.pac || 75) - (b.pac || 75))[0];
    const weakestCB = [...centerbacks].sort((a, b) => ((a.def || 75) + (a.pac || 70)) - ((b.def || 75) + (b.pac || 70)))[0];
    const tiredStarter = [...lineup].sort((a, b) => (a.energy !== undefined ? a.energy : 100) - (b.energy !== undefined ? b.energy : 100))[0];
    const lowestStarter = [... backline.length ? backline : lineup].sort((a, b) => (a.ovr || 75) - (b.ovr || 75))[0];

    let weaknessText = "";
    let recPlan = {
      label: "Ataque por Bandas y Ritmo Alto",
      mentality: (userAvg.overall >= oppAvg.overall) ? "offensive" : "balanced",
      passingStyle: "mixed",
      tempo: "fast",
      width: "wide",
      transitionLoss: "counterpress",
      transitionWin: "counter",
      defensiveLine: "mid",
      pressing: "high"
    };

    if (tiredStarter && (tiredStarter.energy !== undefined ? tiredStarter.energy : 100) < 82) {
      weaknessText = `${tiredStarter.name} (${tiredStarter.pos}) llega justo de físico (${Math.round(tiredStarter.energy)}% energía). Un ritmo alto y presión constante le pasará factura.`;
      recPlan = {
        label: "Ritmo Alto y Presión Asfixiante",
        mentality: userAvg.overall >= oppAvg.overall - 2 ? "offensive" : "balanced",
        passingStyle: "direct",
        tempo: "fast",
        width: "wide",
        transitionLoss: "counterpress",
        transitionWin: "counter",
        defensiveLine: "high",
        pressing: "high"
      };
    } else if (slowestFB && (slowestFB.pac || 75) <= 76) {
      weaknessText = `Su lateral ${slowestFB.name} (${slowestFB.pos}) sufre en velocidad (${slowestFB.pac || 72} PAC). Abrir el campo y encarar por bandas generará peligro claro.`;
      recPlan = {
        label: "Explotar las Bandas y Centros",
        mentality: userAvg.overall >= oppAvg.overall - 1 ? "offensive" : "balanced",
        passingStyle: "mixed",
        tempo: "fast",
        width: "wide",
        transitionLoss: "counterpress",
        transitionWin: "counter",
        defensiveLine: "mid",
        pressing: "mid"
      };
    } else if (isTopPossession && oppAvg.overall > userAvg.overall + 3) {
      const targetDef = weakestCB || lowestStarter;
      weaknessText = `Adelantan mucho la zaga con ${targetDef ? targetDef.name : 'sus centrales'}. Si cerramos espacios atrás y salimos en pase directo al espacio les sorprenderemos.`;
      recPlan = {
        label: "Bloque Sólido y Contraataque Letal",
        mentality: "defensive",
        passingStyle: "direct",
        tempo: "fast",
        width: "balanced",
        transitionLoss: "regroup",
        transitionWin: "counter",
        defensiveLine: "low",
        pressing: "mid"
      };
    } else {
      const targetDef = weakestCB || lowestStarter || sortedByOvr[sortedByOvr.length - 1];
      weaknessText = `${targetDef.name} (${targetDef.pos} · ${targetDef.ovr} OVR) es su pieza más vulnerable atrás (${targetDef.def || 72} DEF). Dominar por dentro con pases cortos filtrados abrirá huecos.`;
      recPlan = {
        label: "Control Interior y Pase Filtrado",
        mentality: userAvg.overall >= oppAvg.overall ? "offensive" : "balanced",
        passingStyle: "short",
        tempo: "fast",
        width: "center",
        transitionLoss: "counterpress",
        transitionWin: "hold",
        defensiveLine: "high",
        pressing: "high"
      };
    }

    if (matchWeather.id === "rain") {
      recPlan.passingStyle = "direct";
      recPlan.tempo = "fast";
      recPlan.label += " (Césped Rápido 🌧️)";
    }

    return {
      starPlayer,
      styleTitle,
      styleDesc,
      weaknessText,
      recPlan
    };
  }

  function getOpponentLineup(oppTeam) {
    const optimal = buildOptimalLineup(oppTeam);
    return {
      formationKey: optimal.formationKey,
      formation: optimal.formation,
      lineup: optimal.lineup,
      bench: optimal.bench
    };
  }

  // ==========================================
  // PANEL REUTILIZABLE DE ESTILOS E INSTRUCCIONES POR ESTADOS
  // ==========================================
  function renderTacticalInstructionsPanel(instructions, prefix) {
    if (!instructions) instructions = getDefaultTacticalInstructions();
    if (!instructions.inPossession) instructions.inPossession = { passingStyle: "short", tempo: "slow", width: "balanced" };
    if (!instructions.inTransition) instructions.inTransition = { loss: "counterpress", win: "hold" };
    if (!instructions.outOfPossession) instructions.outOfPossession = { defensiveLine: "high", pressing: "high" };

    const matchingPresetKey = detectMatchingPreset(instructions);
    const currentPreset = TACTICAL_PRESETS[matchingPresetKey] || null;

    return `
      <div class="p-3 space-y-3.5 max-w-lg mx-auto w-full select-none animate-fadeIn">
        <!-- Selector de Presets Rápidos -->
        <div class="bg-slate-900 border border-slate-800 rounded-2xl p-3 shadow-lg">
          <div class="flex items-center justify-between mb-2">
            <div>
              <h3 class="text-xs font-black uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <span>🧠</span> Estilos de Juego Predefinidos
              </h3>
              <p class="text-[10px] text-slate-400">Filosofías tácticas con 1 toque o ajusta parámetros libres abajo.</p>
            </div>
            <span class="px-2 py-0.5 rounded-full text-[9px] font-black uppercase ${currentPreset ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-slate-800 text-slate-400'}">
              ${currentPreset ? currentPreset.name : 'Personalizado'}
            </span>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
            ${Object.entries(TACTICAL_PRESETS).map(([key, preset]) => {
              const isActive = matchingPresetKey === key;
              return `
                <button type="button" class="btn-${prefix}-preset p-2 rounded-xl border text-left transition flex flex-col justify-between ${isActive ? 'bg-amber-500/20 border-amber-400 shadow-md ring-1 ring-amber-400/60' : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700 active:scale-98'}" data-preset-key="${key}">
                  <div>
                    <div class="flex items-center justify-between mb-1">
                      <span class="text-base">${preset.icon}</span>
                      ${isActive ? '<span class="text-[8px] font-black uppercase px-1 py-0.2 rounded bg-amber-400 text-slate-950 font-mono">ACTIVO</span>' : ''}
                    </div>
                    <div class="text-[11px] font-extrabold ${isActive ? 'text-amber-300' : 'text-white'} leading-tight">${preset.name}</div>
                    <div class="text-[8.5px] text-slate-400 line-clamp-2 mt-1 leading-snug">${preset.desc}</div>
                  </div>
                </button>
              `;
            }).join('')}
          </div>
        </div>

        <!-- FASE 1: CON BALÓN (FASE OFENSIVA) -->
        <div class="bg-slate-900 border border-sky-500/40 rounded-2xl p-3 shadow-lg space-y-3">
          <div class="flex items-center gap-2 pb-1.5 border-b border-slate-800">
            <span class="w-6 h-6 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <h4 class="text-xs font-black text-sky-300 uppercase tracking-wide">Fase Ofensiva · Con Balón</h4>
              <p class="text-[9.5px] text-slate-400">Cómo circula y madura la jugada tu equipo en posesión</p>
            </div>
          </div>

          <!-- Estilo de Pase -->
          <div>
            <div class="text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center justify-between">
              <span>Estilo de Pase</span>
              <span class="text-sky-400 font-mono text-[9px]">${TACTICAL_OPTIONS.passingStyle.find(o => o.id === instructions.inPossession?.passingStyle)?.label || 'Mixto'}</span>
            </div>
            <div class="grid grid-cols-3 gap-1.5">
              ${TACTICAL_OPTIONS.passingStyle.map(opt => {
                const isSel = instructions.inPossession?.passingStyle === opt.id;
                return `
                  <button type="button" class="btn-${prefix}-opt p-2 rounded-xl border text-center transition flex flex-col items-center justify-center ${isSel ? 'bg-sky-500/25 border-sky-400 text-white shadow-sm ring-1 ring-sky-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 active:scale-98'}" data-phase="inPossession" data-param="passingStyle" data-val="${opt.id}">
                    <span class="text-sm mb-0.5">${opt.icon}</span>
                    <span class="text-[11px] font-bold ${isSel ? 'text-sky-300' : 'text-slate-200'}">${opt.label}</span>
                    <span class="text-[8px] text-slate-400 leading-tight mt-0.5 line-clamp-1">${opt.desc}</span>
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Ritmo de Circulación -->
          <div>
            <div class="text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center justify-between">
              <span>Ritmo de Circulación</span>
              <span class="text-sky-400 font-mono text-[9px]">${TACTICAL_OPTIONS.tempo.find(o => o.id === instructions.inPossession?.tempo)?.label || 'Equilibrado'}</span>
            </div>
            <div class="grid grid-cols-3 gap-1.5">
              ${TACTICAL_OPTIONS.tempo.map(opt => {
                const isSel = instructions.inPossession?.tempo === opt.id;
                return `
                  <button type="button" class="btn-${prefix}-opt p-2 rounded-xl border text-center transition flex flex-col items-center justify-center ${isSel ? 'bg-sky-500/25 border-sky-400 text-white shadow-sm ring-1 ring-sky-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 active:scale-98'}" data-phase="inPossession" data-param="tempo" data-val="${opt.id}">
                    <span class="text-sm mb-0.5">${opt.icon}</span>
                    <span class="text-[11px] font-bold ${isSel ? 'text-sky-300' : 'text-slate-200'}">${opt.label}</span>
                    <span class="text-[8px] text-slate-400 leading-tight mt-0.5 line-clamp-1">${opt.desc}</span>
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Zona de Ataque / Anchura -->
          <div>
            <div class="text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center justify-between">
              <span>Zona de Ataque / Anchura</span>
              <span class="text-sky-400 font-mono text-[9px]">${TACTICAL_OPTIONS.width.find(o => o.id === instructions.inPossession?.width)?.label || 'Equilibrado'}</span>
            </div>
            <div class="grid grid-cols-3 gap-1.5">
              ${TACTICAL_OPTIONS.width.map(opt => {
                const isSel = instructions.inPossession?.width === opt.id;
                return `
                  <button type="button" class="btn-${prefix}-opt p-2 rounded-xl border text-center transition flex flex-col items-center justify-center ${isSel ? 'bg-sky-500/25 border-sky-400 text-white shadow-sm ring-1 ring-sky-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 active:scale-98'}" data-phase="inPossession" data-param="width" data-val="${opt.id}">
                    <span class="text-sm mb-0.5">${opt.icon}</span>
                    <span class="text-[11px] font-bold ${isSel ? 'text-sky-300' : 'text-slate-200'}">${opt.label}</span>
                    <span class="text-[8px] text-slate-400 leading-tight mt-0.5 line-clamp-1">${opt.desc}</span>
                  </button>
                `;
              }).join('')}
            </div>
          </div>
        </div>

        <!-- FASE 2: EN TRANSICIÓN -->
        <div class="bg-slate-900 border border-amber-500/40 rounded-2xl p-3 shadow-lg space-y-3">
          <div class="flex items-center gap-2 pb-1.5 border-b border-slate-800">
            <span class="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <h4 class="text-xs font-black text-amber-300 uppercase tracking-wide">Fase de Transición</h4>
              <p class="text-[9.5px] text-slate-400">Reacción en los segundos clave de pérdida o recuperación</p>
            </div>
          </div>

          <!-- Tras Pérdida -->
          <div>
            <div class="text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center justify-between">
              <span>Al perder el balón</span>
              <span class="text-amber-400 font-mono text-[9px]">${TACTICAL_OPTIONS.transitionLoss.find(o => o.id === instructions.inTransition?.loss)?.label || 'Replegarse'}</span>
            </div>
            <div class="grid grid-cols-2 gap-2">
              ${TACTICAL_OPTIONS.transitionLoss.map(opt => {
                const isSel = instructions.inTransition?.loss === opt.id;
                return `
                  <button type="button" class="btn-${prefix}-opt p-2.5 rounded-xl border text-left transition flex items-start gap-2 ${isSel ? 'bg-amber-500/25 border-amber-400 text-white shadow-sm ring-1 ring-amber-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 active:scale-98'}" data-phase="inTransition" data-param="loss" data-val="${opt.id}">
                    <span class="text-base mt-0.5 flex-shrink-0">${opt.icon}</span>
                    <div>
                      <div class="text-xs font-bold ${isSel ? 'text-amber-300' : 'text-slate-200'}">${opt.label}</div>
                      <div class="text-[8.5px] text-slate-400 leading-snug mt-0.5">${opt.desc}</div>
                    </div>
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Tras Recuperación -->
          <div>
            <div class="text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center justify-between">
              <span>Al recuperar el balón</span>
              <span class="text-amber-400 font-mono text-[9px]">${TACTICAL_OPTIONS.transitionWin.find(o => o.id === instructions.inTransition?.win)?.label || 'Contraatacar'}</span>
            </div>
            <div class="grid grid-cols-2 gap-2">
              ${TACTICAL_OPTIONS.transitionWin.map(opt => {
                const isSel = instructions.inTransition?.win === opt.id;
                return `
                  <button type="button" class="btn-${prefix}-opt p-2.5 rounded-xl border text-left transition flex items-start gap-2 ${isSel ? 'bg-amber-500/25 border-amber-400 text-white shadow-sm ring-1 ring-amber-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 active:scale-98'}" data-phase="inTransition" data-param="win" data-val="${opt.id}">
                    <span class="text-base mt-0.5 flex-shrink-0">${opt.icon}</span>
                    <div>
                      <div class="text-xs font-bold ${isSel ? 'text-amber-300' : 'text-slate-200'}">${opt.label}</div>
                      <div class="text-[8.5px] text-slate-400 leading-snug mt-0.5">${opt.desc}</div>
                    </div>
                  </button>
                `;
              }).join('')}
            </div>
          </div>
        </div>

        <!-- FASE 3: SIN BALÓN (FASE DEFENSIVA) -->
        <div class="bg-slate-900 border border-rose-500/40 rounded-2xl p-3 shadow-lg space-y-3">
          <div class="flex items-center gap-2 pb-1.5 border-b border-slate-800">
            <span class="w-6 h-6 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <h4 class="text-xs font-black text-rose-300 uppercase tracking-wide">Fase Defensiva · Sin Balón</h4>
              <p class="text-[9.5px] text-slate-400">Altura del bloque defensivo y agresividad en la recuperación</p>
            </div>
          </div>

          <!-- Altura de la Línea Defensiva -->
          <div>
            <div class="text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center justify-between">
              <span>Altura de la Línea Defensiva</span>
              <span class="text-rose-400 font-mono text-[9px]">${TACTICAL_OPTIONS.defensiveLine.find(o => o.id === instructions.outOfPossession?.defensiveLine)?.label || 'Bloque Medio'}</span>
            </div>
            <div class="grid grid-cols-3 gap-1.5">
              ${TACTICAL_OPTIONS.defensiveLine.map(opt => {
                const isSel = instructions.outOfPossession?.defensiveLine === opt.id;
                return `
                  <button type="button" class="btn-${prefix}-opt p-2 rounded-xl border text-center transition flex flex-col items-center justify-center ${isSel ? 'bg-rose-500/25 border-rose-400 text-white shadow-sm ring-1 ring-rose-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 active:scale-98'}" data-phase="outOfPossession" data-param="defensiveLine" data-val="${opt.id}">
                    <span class="text-sm mb-0.5">${opt.icon}</span>
                    <span class="text-[11px] font-bold ${isSel ? 'text-rose-300' : 'text-slate-200'}">${opt.label}</span>
                    <span class="text-[8px] text-slate-400 leading-tight mt-0.5 line-clamp-1">${opt.desc}</span>
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Intensidad de Presión -->
          <div>
            <div class="text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center justify-between">
              <span>Intensidad de Presión</span>
              <span class="text-rose-400 font-mono text-[9px]">${TACTICAL_OPTIONS.pressing.find(o => o.id === instructions.outOfPossession?.pressing)?.label || 'Media'}</span>
            </div>
            <div class="grid grid-cols-3 gap-1.5">
              ${TACTICAL_OPTIONS.pressing.map(opt => {
                const isSel = instructions.outOfPossession?.pressing === opt.id;
                return `
                  <button type="button" class="btn-${prefix}-opt p-2 rounded-xl border text-center transition flex flex-col items-center justify-center ${isSel ? 'bg-rose-500/25 border-rose-400 text-white shadow-sm ring-1 ring-rose-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 active:scale-98'}" data-phase="outOfPossession" data-param="pressing" data-val="${opt.id}">
                    <span class="text-sm mb-0.5">${opt.icon}</span>
                    <span class="text-[11px] font-bold ${isSel ? 'text-rose-300' : 'text-slate-200'}">${opt.label}</span>
                    <span class="text-[8px] text-slate-400 leading-tight mt-0.5 line-clamp-1">${opt.desc}</span>
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Anchura Defensiva / Control de Bandas -->
          <div>
            <div class="text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-1.5 flex items-center justify-between">
              <span>Anchura Defensiva (Control de Bandas)</span>
              <span class="text-rose-400 font-mono text-[9px]">${TACTICAL_OPTIONS.defenseWidth.find(o => o.id === (instructions.outOfPossession?.defenseWidth || 'balanced'))?.label || 'Equilibrada'}</span>
            </div>
            <div class="grid grid-cols-3 gap-1.5">
              ${TACTICAL_OPTIONS.defenseWidth.map(opt => {
                const isSel = (instructions.outOfPossession?.defenseWidth || 'balanced') === opt.id;
                return `
                  <button type="button" class="btn-${prefix}-opt p-2 rounded-xl border text-center transition flex flex-col items-center justify-center ${isSel ? 'bg-rose-500/25 border-rose-400 text-white shadow-sm ring-1 ring-rose-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 active:scale-98'}" data-phase="outOfPossession" data-param="defenseWidth" data-val="${opt.id}">
                    <span class="text-sm mb-0.5">${opt.icon}</span>
                    <span class="text-[11px] font-bold ${isSel ? 'text-rose-300' : 'text-slate-200'}">${opt.label}</span>
                    <span class="text-[8px] text-slate-400 leading-tight mt-0.5 line-clamp-1">${opt.desc}</span>
                  </button>
                `;
              }).join('')}
            </div>
          </div>
        </div>

        <!-- Panel de Impacto en el Motor -->
        <div class="bg-slate-900/60 border border-slate-800 rounded-2xl p-3 text-[10px] text-slate-400 space-y-1">
          <div class="font-bold text-white flex items-center gap-1.5 mb-1">
            <span>⚡</span> Impacto en la Simulación del Partido
          </div>
          <p>• <b class="text-slate-200">Fatiga y Físico:</b> ${instructions.outOfPossession?.pressing === 'high' ? 'Presión asfixiante genera mayor desgaste físico y más faltas.' : instructions.outOfPossession?.pressing === 'low' ? 'Baja presión conserva energía para los 90 minutos.' : 'Desgaste equilibrado estándar.'}</p>
          <p>• <b class="text-slate-200">Construcción:</b> ${instructions.inPossession?.passingStyle === 'short' ? 'Pase corto maximiza el % de posesión y reduce pérdidas fortuitas.' : instructions.inPossession?.passingStyle === 'direct' ? 'Pase directo genera ocasiones verticales más veloces.' : 'Estilo versátil mixto.'}</p>
          <p>• <b class="text-slate-200">Transiciones:</b> ${instructions.inTransition?.loss === 'counterpress' ? 'Contrapresión activa alertas de robo inmediato en campo rival.' : 'Repliegue ordenado protege el área propia.'}</p>
        </div>
      </div>
    `;
  }

  function bindTacticalInstructionsPanel(container, instructions, prefix, onUpdate) {
    container.querySelectorAll(`.btn-${prefix}-preset`).forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const pKey = btn.dataset.presetKey;
        const preset = TACTICAL_PRESETS[pKey];
        if (preset) {
          instructions.preset = pKey;
          instructions.inPossession = { ...preset.inPossession };
          instructions.inTransition = { ...preset.inTransition };
          instructions.outOfPossession = { ...preset.outOfPossession };
          onUpdate();
        }
      };
    });

    container.querySelectorAll(`.btn-${prefix}-opt`).forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const phase = btn.dataset.phase;
        const param = btn.dataset.param;
        const val = btn.dataset.val;
        if (instructions && instructions[phase]) {
          instructions[phase][param] = val;
          instructions.preset = detectMatchingPreset(instructions);
          onUpdate();
        }
      };
    });
  }

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

    const oppData = getOpponentLineup(opponentTeam);
    const oppAverages = calculateTeamAverages(oppData.lineup, oppData.formationKey);
    const analystReport = buildOpponentAnalystReport(opponentTeam, oppData, oppAverages, averages);

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
              <h2 class="text-sm font-extrabold text-white leading-tight">${preMatchTab === 'USER' ? 'Mi Alineación Oficial' : 'Alineación del Rival'}</h2>
            </div>
            ${preMatchTab === 'USER' ? `
              <div class="flex items-center gap-1.5">
                <button id="btn-pre-save-header" class="text-xs bg-emerald-600 hover:bg-emerald-500 text-white px-2.5 py-1 rounded-lg border border-emerald-500 font-bold active:scale-95 transition flex items-center gap-1 shadow-sm">
                  <span>💾</span> Guardar
                </button>
                <button id="btn-pre-auto" class="text-xs bg-slate-800 hover:bg-slate-700 text-sky-400 px-2 py-1 rounded-lg border border-slate-700 font-bold active:scale-95 transition">
                  ⚡ Auto 11
                </button>
              </div>
            ` : `
              <div class="w-12"></div>
            `}
          </div>
        </header>

        <!-- Tarjeta de Enfrentamiento (Clickeable para alternar pestañas) -->
        <div class="p-3 bg-slate-900/60 border-b border-slate-800 flex items-center justify-between text-xs">
          <div id="btn-matchup-user" class="flex items-center gap-2 cursor-pointer p-1 rounded-xl transition ${preMatchTab === 'USER' ? 'ring-2 ring-sky-500/80 bg-sky-500/10' : 'hover:bg-slate-800/50'}">
            <div class="w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs shadow" style="background: linear-gradient(135deg, ${userTeam.primaryColor}, ${userTeam.secondaryColor}); color: ${userTeam.textColor};">
              ${userTeam.shortName}
            </div>
            <div>
              <div class="font-black text-white text-xs">${userTeam.name}</div>
              <div class="text-[10px] text-slate-400">${isUserHome ? 'Local · 🏟️ Factor Campo' : 'Visitante'} · Media <b class="text-amber-400">${averages.overall}</b></div>
            </div>
          </div>
          <span class="font-mono font-bold text-slate-500 bg-slate-950 px-2 py-0.5 rounded-full border border-slate-800">VS</span>
          <div id="btn-matchup-rival" class="flex items-center gap-2 text-right cursor-pointer p-1 rounded-xl transition ${preMatchTab === 'OPPONENT' ? 'ring-2 ring-amber-500/80 bg-amber-500/10' : 'hover:bg-slate-800/50'}">
            <div>
              <div class="font-black text-white text-xs">${opponentTeam.name}</div>
              <div class="text-[10px] text-slate-400">${!isUserHome ? 'Local · 🏟️ Factor Campo' : 'Visitante'} · Media <b class="text-amber-400">${oppAverages.overall}</b></div>
            </div>
            <div class="w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs shadow" style="background: linear-gradient(135deg, ${opponentTeam.primaryColor}, ${opponentTeam.secondaryColor}); color: ${opponentTeam.textColor};">
              ${opponentTeam.shortName}
            </div>
          </div>
        </div>

        <!-- MEJORA 3, MEJORA 6 y FACTOR CAMPO: Barra de Clima, Factor Campo y Entrenamiento Semanal -->
        <div class="px-3 py-1.5 bg-slate-950/90 border-b border-slate-800/80 flex items-center justify-between gap-1.5 text-[10px]">
          <div class="flex items-center gap-1 text-sky-300 font-bold truncate" title="${matchWeather.pitchEffect}">
            <span>${matchWeather.icon}</span>
            <span>${matchWeather.label}</span>
          </div>
          <div class="flex items-center gap-1 px-2 py-0.5 rounded-full ${isUserHome ? 'bg-amber-500/15 border border-amber-500/40 text-amber-300' : 'bg-slate-800/80 border border-slate-700 text-slate-400'} font-bold whitespace-nowrap" title="${isUserHome ? 'Juegas en tu estadio (+4% empuje de tu afición)' : 'Juegas fuera de casa: El rival cuenta con el empuje de su estadio'}">
            <span>🏟️</span>
            <span>${isUserHome ? 'Local (+Factor Campo)' : 'Visitante'}</span>
          </div>
          <div class="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 font-bold whitespace-nowrap" title="${activeWeeklyTraining.shortEffect}">
            <span>${activeWeeklyTraining.icon}</span>
            <span>${activeWeeklyTraining.label}</span>
          </div>
        </div>

        <!-- Selector de Pestañas: Mi Equipo vs Rival -->
        <div class="px-3 pt-2.5 pb-1 flex gap-2 bg-slate-900/40 border-b border-slate-800">
          <button id="tab-pre-user" class="flex-1 py-2 px-3 rounded-xl text-xs font-black transition flex items-center justify-center gap-2 ${preMatchTab === 'USER' ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25 border border-sky-400' : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'}">
            <span class="w-2.5 h-2.5 rounded-full inline-block" style="background-color: ${userTeam.primaryColor};"></span>
            <span>👕 Mi 11 (${userTeam.shortName})</span>
          </button>
          <button id="tab-pre-rival" class="flex-1 py-2 px-3 rounded-xl text-xs font-black transition flex items-center justify-center gap-2 ${preMatchTab === 'OPPONENT' ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 border border-amber-400' : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'}">
            <span class="w-2.5 h-2.5 rounded-full inline-block" style="background-color: ${opponentTeam.primaryColor};"></span>
            <span>🛡️ Ver Rival (${opponentTeam.shortName})</span>
          </button>
        </div>

        ${preMatchTab === 'USER' ? `
          <!-- SELECTORES TÁCTICOS USUARIO -->
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

            <!-- Estilo Táctico Activo -->
            <div class="flex items-center justify-between pt-1 border-t border-slate-800/80 text-xs">
              <div class="flex items-center gap-1.5">
                <span class="text-[10px] uppercase font-bold text-slate-500">Estilo:</span>
                <span class="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold text-[10.5px] flex items-center gap-1">
                  <span>${TACTICAL_PRESETS[detectMatchingPreset(tactics.instructions)] ? TACTICAL_PRESETS[detectMatchingPreset(tactics.instructions)].icon : '🧠'}</span>
                  <span>${TACTICAL_PRESETS[detectMatchingPreset(tactics.instructions)] ? TACTICAL_PRESETS[detectMatchingPreset(tactics.instructions)].name : 'Personalizado'}</span>
                </span>
              </div>
              <span class="text-[9.5px] text-slate-400">
                ${tactics.instructions?.inPossession?.passingStyle === 'short' ? 'Pase Corto' : tactics.instructions?.inPossession?.passingStyle === 'direct' ? 'Pase Directo' : 'Pase Mixto'} · 
                ${tactics.instructions?.inTransition?.loss === 'counterpress' ? 'Contrapresión' : 'Repliegue'} · 
                ${tactics.instructions?.outOfPossession?.defensiveLine === 'high' ? 'Línea Alta' : tactics.instructions?.outOfPossession?.defensiveLine === 'low' ? 'Bloque Bajo' : 'Bloque Medio'}
              </span>
            </div>
          </div>

          <!-- Pestañas de Previa: Mi 11 y Campo vs Estilos e Instrucciones -->
          <div class="px-3 pt-2 pb-1 bg-slate-900/60 border-b border-slate-800 flex gap-2">
            <button id="btn-pre-subtab-pitch" type="button" class="flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${preMatchSubTab === 'PITCH' ? 'bg-sky-500 text-white shadow-md border border-sky-400' : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'}">
              <span>⚽ Mi 11 y Campo</span>
            </button>
            <button id="btn-pre-subtab-style" type="button" class="flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${preMatchSubTab === 'STYLE' ? 'bg-amber-500 text-slate-950 shadow-md border border-amber-400' : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'}">
              <span>🧠 Estilos e Instrucciones</span>
              <span class="px-1.5 py-0.2 rounded text-[10px] font-extrabold ${preMatchSubTab === 'STYLE' ? 'bg-slate-950/80 text-amber-300' : 'bg-slate-800 text-amber-400'}">
                ${TACTICAL_PRESETS[detectMatchingPreset(tactics.instructions)] ? TACTICAL_PRESETS[detectMatchingPreset(tactics.instructions)].icon : '⚙️'}
              </span>
            </button>
          </div>

          <!-- Banner Alerta de Lesiones en Titulares -->
          ${(() => {
            const injuredStarters = lineupPlayers.filter(p => p.injury);
            if (injuredStarters.length === 0) return "";
            return `
              <div class="mx-3 mt-2 p-2.5 rounded-xl bg-rose-500/20 border border-rose-500/60 flex items-center justify-between text-xs text-rose-200 shadow-md">
                <div class="flex items-center gap-2">
                  <span class="text-xl flex-shrink-0">🚑</span>
                  <div>
                    <span class="font-extrabold text-white">¡Bajas por lesión en el 11 titular!</span>
                    <p class="text-[10px] text-rose-300">${injuredStarters.map(p => `${p.name.split(' ').slice(-1)[0]} (${p.injury.roundsLeft}j)`).join(', ')} no pueden jugar.</p>
                  </div>
                </div>
                <button id="btn-pre-replace-injured" class="text-[10px] bg-rose-600 hover:bg-rose-500 text-white font-bold px-2.5 py-1.5 rounded-lg active:scale-95 transition shadow whitespace-nowrap">
                  ⚡ Sustituir
                </button>
              </div>
            `;
          })()}

          <!-- Banner Alerta de Sanciones en Titulares -->
          ${(() => {
            const suspendedStarters = lineupPlayers.filter(p => p.suspension && p.suspension.roundsLeft > 0);
            if (suspendedStarters.length === 0) return "";
            return `
              <div class="mx-3 mt-2 p-2.5 rounded-xl bg-amber-500/20 border border-amber-500/60 flex items-center justify-between text-xs text-amber-200 shadow-md">
                <div class="flex items-center gap-2">
                  <span class="text-xl flex-shrink-0">🛑</span>
                  <div>
                    <span class="font-extrabold text-white">¡Bajas por sanción en el 11 titular!</span>
                    <p class="text-[10px] text-amber-300">${suspendedStarters.map(p => `${p.name.split(' ').slice(-1)[0]} (${p.suspension.reason})`).join(', ')} no pueden jugar.</p>
                  </div>
                </div>
                <button id="btn-pre-replace-suspended" class="text-[10px] bg-amber-600 hover:bg-amber-500 text-white font-bold px-2.5 py-1.5 rounded-lg active:scale-95 transition shadow whitespace-nowrap">
                  ⚡ Sustituir
                </button>
              </div>
            `;
          })()}

          <!-- Banner Alerta de Fatiga si hay titulares cansados -->
          ${(() => {
            const tiredCount = lineupPlayers.filter(p => (p.energy !== undefined ? p.energy : 100) < 78).length;
            if (tiredCount === 0) return "";
            return `
              <div class="mx-3 mt-2 p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-2 text-[11px] text-amber-300">
                <span class="text-sm flex-shrink-0">⚠️</span>
                <div class="leading-tight">
                  <span class="font-bold text-amber-400">Fatiga acumulada:</span> ${tiredCount} titular${tiredCount > 1 ? 'es tienen' : ' tiene'} &lt;78% de energía. Da descanso o rota con suplentes.
                </div>
              </div>
            `;
          })()}

          <!-- Banner de Confirmación de Guardado de Táctica -->
          ${preMatchSaveFeedback ? `
            <div id="pre-save-feedback" class="mx-3 mt-2 p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-between text-xs text-emerald-300 shadow-md transition-all">
              <div class="flex items-center gap-2">
                <span class="text-base flex-shrink-0">💾</span>
                <span class="font-bold">${preMatchSaveFeedback}</span>
              </div>
              <span class="text-[10px] text-emerald-400 font-mono bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-500/40 font-bold">Guardada</span>
            </div>
          ` : ''}

          <!-- Contenido de Mi 11 vs Estilos e Instrucciones -->
          ${preMatchSubTab === 'PITCH' ? `
            <!-- Terreno de Juego Táctico Interactivo Usuario -->
            <div class="p-3 flex-1 flex flex-col justify-center">
            <div id="pre-match-pitch-container" class="relative w-full aspect-[3/4] max-w-[340px] mx-auto bg-gradient-to-b from-emerald-800 via-emerald-700 to-emerald-900 rounded-2xl border-2 border-emerald-500/40 shadow-inner overflow-hidden p-2 select-none touch-pan-y">
              <div class="absolute inset-2 border-2 border-white/30 rounded-xl pointer-events-none"></div>
              <div class="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-12 border-b-2 border-x-2 border-white/30 pointer-events-none"></div>
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-white/30 rounded-full pointer-events-none"></div>
              <div class="absolute top-1/2 left-2 right-2 h-0.5 bg-white/30 -translate-y-1/2 pointer-events-none"></div>
              <div class="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-12 border-t-2 border-x-2 border-white/30 pointer-events-none"></div>

              <!-- Fichas de los 11 titulares usuario con soporte de posición libre -->
              ${formation.slots.map((slot, index) => {
                const player = lineupPlayers[index];
                if (!player) return "";
                const effSlot = getEffectiveSlotCoords(formationKey, index, tactics.customPositions);
                const effRating = calculateEffectiveRating(player, effSlot.pos);
                const isSelected = selectedPreMatchPlayerId === player.id;
                const isInjured = Boolean(player.injury);
                const roleId = (tactics.playerRoles && tactics.playerRoles[player.id]) || getDefaultRoleForPosition(effSlot.pos);
                const role = getRoleDetails(effSlot.pos, roleId);
                const fatigue = player.fatigueLoad || 0;

                return `
                  <div class="slot-pre-player absolute -translate-x-1/2 -translate-y-1/2 ${isSelected ? 'cursor-grab active:cursor-grabbing touch-none ring-2 ring-amber-400 ring-offset-2 ring-offset-slate-900 z-30 scale-105' : 'cursor-pointer touch-manipulation z-10'} flex flex-col items-center transition-transform active:scale-95 select-none"
                       style="left: ${effSlot.x}%; top: ${effSlot.y}%;"
                       data-player-id="${player.id}"
                       data-slot-index="${index}">
                    <div class="w-9 h-9 rounded-full border-2 ${isSelected ? 'border-amber-400 bg-amber-500 text-black shadow-lg shadow-amber-400/50 scale-110 ring-2 ring-amber-300' : isInjured ? 'border-rose-500 bg-rose-950 text-rose-200 animate-pulse' : effSlot.isCustom ? 'border-amber-400 bg-slate-900 text-white shadow-md ring-1 ring-amber-400/80' : 'border-white/80 bg-slate-900 text-white shadow-md'} flex flex-col items-center justify-center relative transition-all">
                      <span class="text-[9px] font-black leading-none">${effRating}</span>
                      <span class="text-[7px] font-bold ${isInjured ? 'text-rose-300' : effSlot.isCustom ? 'text-amber-300 font-extrabold' : 'text-slate-300'} leading-none">${slot.label}</span>
                      <div class="absolute -bottom-1 w-5 h-1 bg-black/60 rounded-full overflow-hidden">
                        <div class="h-full ${(player.energy || 100) >= 80 ? 'bg-emerald-400' : (player.energy || 100) >= 65 ? 'bg-amber-400' : 'bg-red-500'}" style="width: ${player.energy || 100}%;"></div>
                      </div>
                      ${effSlot.isCustom ? `
                        <div class="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-amber-400 text-slate-950 text-[6.5px] font-black flex items-center justify-center shadow">📍</div>
                      ` : ''}
                    </div>
                    <div class="bg-black/80 px-1 py-0.5 rounded text-[8px] font-bold text-white tracking-tight mt-0.5 truncate max-w-[65px] text-center border border-white/10 shadow">
                      ${player.name.split(' ').slice(-1)[0]}
                    </div>
                    ${isSelected ? `
                      <div class="mt-0.5 px-1.5 py-0.2 rounded-full bg-amber-400 text-slate-950 font-black text-[7px] shadow-md animate-pulse uppercase tracking-tight">
                        ✋ Mover
                      </div>
                    ` : ''}
                    <!-- Rol / Función del jugador, Lesión o Sanción / Sobrecarga -->
                    ${isInjured ? `
                      <div class="mt-0.5 px-1 py-0.2 rounded bg-rose-900 border border-rose-500 text-[7px] font-bold text-rose-200 truncate max-w-[70px] text-center shadow-sm">
                        🚑 ${player.injury.roundsLeft}j
                      </div>
                    ` : player.suspension ? `
                      <div class="mt-0.5 px-1 py-0.2 rounded bg-amber-950 border border-amber-500 text-[7px] font-bold text-amber-200 truncate max-w-[70px] text-center shadow-sm">
                        🛑 ${player.suspension.roundsLeft}j
                      </div>
                    ` : fatigue >= 40 ? `
                      <div class="mt-0.5 px-1 py-0.2 rounded bg-amber-950 border border-amber-500/80 text-[6.5px] font-bold text-amber-300 truncate max-w-[70px] text-center shadow-sm">
                        🔥 Sobrecarga
                      </div>
                    ` : `
                      <div class="mt-0.5 px-1 py-0.2 rounded bg-sky-950/90 border border-sky-500/40 text-[7px] font-bold text-sky-300 truncate max-w-[70px] text-center shadow-sm">
                        ${role.icon} ${role.tag}
                      </div>
                    `}
                    ${(() => {
                      const mk = tactics.manMarking && tactics.manMarking[player.id];
                      if (!mk || !mk.targetId) return "";
                      const targetP = oppData.lineup.find(p => p.id === mk.targetId);
                      const tName = targetP ? targetP.name.split(' ').slice(-1)[0] : 'Rival';
                      const iIcon = mk.intensity === 'aggressive' ? '⚔️' : mk.intensity === 'tight' ? '🔒' : '👁️';
                      return `
                        <div class="mt-0.5 px-1 py-0.2 rounded bg-rose-950/90 border border-rose-500/70 text-[6.5px] font-black text-rose-300 truncate max-w-[70px] text-center shadow-sm" title="Marcaje individual a ${tName}">
                          ${iIcon} ${tName}
                        </div>
                      `;
                    })()}
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Panel de Asignación de Función Táctica y Ajuste de Posición Pre-Partido -->
          ${(() => {
            if (!selectedPreMatchPlayerId) return "";
            const selSlotIndex = tactics.lineup.indexOf(selectedPreMatchPlayerId);
            if (selSlotIndex === -1) return "";
            const selSlot = formation.slots[selSlotIndex];
            const selPlayer = userTeam.players.find(p => p.id === selectedPreMatchPlayerId);
            if (!selPlayer || !selSlot) return "";

            const effSlot = getEffectiveSlotCoords(formationKey, selSlotIndex, tactics.customPositions);
            const curRoleId = (tactics.playerRoles && tactics.playerRoles[selPlayer.id]) || getDefaultRoleForPosition(effSlot.pos);
            const curRole = getRoleDetails(effSlot.pos, curRoleId);
            const availRoles = getAvailableRolesForPosition(effSlot.pos);
            const posLabel = getPositionAdjustmentLabel(selSlot, effSlot);

            const oppOutfield = oppData.lineup.filter(p => p.pos !== "POR");
            const oppStarOvr = Math.max(...oppOutfield.map(p => p.ovr || 70), 70);
            const curMarking = (tactics.manMarking && tactics.manMarking[selPlayer.id]) || null;
            const curTargetId = curMarking?.targetId || "";
            const curIntensity = curMarking?.intensity || "tight";

            return `
              <div class="mx-3 my-2 space-y-2 animate-fadeIn">
                <!-- Ajuste de Posición Manual en el Campo -->
                <div class="p-2.5 bg-slate-900 border border-amber-500/40 rounded-2xl shadow-xl">
                  <div class="flex items-center justify-between mb-1.5 pb-1 border-b border-slate-800">
                    <div class="flex items-center gap-1.5">
                      <span class="text-sm">📍</span>
                      <span class="text-[10px] font-bold text-amber-400">Posición: ${posLabel}</span>
                    </div>
                    ${effSlot.isCustom ? `
                      <button id="btn-pre-reset-pos" class="text-[9.5px] font-bold text-rose-400 hover:text-rose-300 px-2 py-0.5 rounded bg-rose-950/70 border border-rose-800/80 active:scale-95 transition">
                        ↺ Restablecer
                      </button>
                    ` : ''}
                  </div>
                  <div class="text-[9.5px] text-slate-400 mb-1.5">Ajusta la posición de ${selPlayer.name.split(' ').slice(-1)[0]}:</div>
                  <div class="grid grid-cols-2 gap-1.5">
                    <div class="flex items-center gap-1">
                      <button class="btn-pre-nudge-pos flex-1 py-1.5 px-1 bg-slate-800 hover:bg-slate-700 text-sky-300 font-bold text-[10px] rounded-lg border border-slate-700 active:scale-95 transition" data-axis="y" data-delta="-5">
                        ▲ Adelantar
                      </button>
                      <button class="btn-pre-nudge-pos flex-1 py-1.5 px-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-[10px] rounded-lg border border-slate-700 active:scale-95 transition" data-axis="y" data-delta="5">
                        ▼ Retrasar
                      </button>
                    </div>
                    <div class="flex items-center gap-1">
                      <button class="btn-pre-nudge-pos flex-1 py-1.5 px-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-[10px] rounded-lg border border-slate-700 active:scale-95 transition" data-axis="x" data-delta="-5">
                        ◀ Izquierda
                      </button>
                      <button class="btn-pre-nudge-pos flex-1 py-1.5 px-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-[10px] rounded-lg border border-slate-700 active:scale-95 transition" data-axis="x" data-delta="5">
                        ▶ Derecha
                      </button>
                    </div>
                  </div>

                  <!-- Deslizadores de ajuste fino pre-partido -->
                  <div class="space-y-1.5 bg-slate-950/60 p-2 rounded-xl border border-slate-800/80 text-[10px] mt-2">
                    <div class="flex items-center justify-between text-slate-400">
                      <span>Profundidad (Y): <b class="text-white">${effSlot.y < 35 ? 'Delantera / Ofensivo' : (effSlot.y > 65 ? 'Defensa / Retrasado' : 'Medio campo')}</b></span>
                      <span class="font-mono text-amber-400 font-bold">${Math.round(effSlot.y)}%</span>
                    </div>
                    <input type="range" class="slider-pre-pos-y w-full accent-amber-400 bg-slate-800 h-1.5 rounded-lg appearance-none cursor-pointer" min="${selSlotIndex === 0 ? 82 : 12}" max="${selSlotIndex === 0 ? 90 : 88}" value="${effSlot.y}">

                    <div class="flex items-center justify-between text-slate-400 pt-1">
                      <span>Amplitud (X): <b class="text-white">${effSlot.x < 35 ? 'Banda Izquierda' : (effSlot.x > 65 ? 'Banda Derecha' : 'Interior / Centro')}</b></span>
                      <span class="font-mono text-amber-400 font-bold">${Math.round(effSlot.x)}%</span>
                    </div>
                    <input type="range" class="slider-pre-pos-x w-full accent-amber-400 bg-slate-800 h-1.5 rounded-lg appearance-none cursor-pointer" min="${selSlotIndex === 0 ? 38 : 10}" max="${selSlotIndex === 0 ? 62 : 90}" value="${effSlot.x}">
                  </div>
                </div>

                <!-- Función Táctica / Rol -->
                <div class="p-3 bg-slate-900 border border-sky-500/50 rounded-2xl shadow-xl">
                  <div class="flex items-center justify-between mb-2 pb-1.5 border-b border-slate-800">
                    <div class="flex items-center gap-2">
                      <span class="text-xl">${curRole.icon}</span>
                      <div>
                        <span class="text-[9px] uppercase font-bold text-sky-400">Función táctica · ${selPlayer.name}</span>
                        <h4 class="text-xs font-black text-white">${curRole.name}</h4>
                      </div>
                    </div>
                    <button id="btn-pre-close-role-box" class="text-[10px] font-bold text-emerald-400 hover:text-white px-2 py-1 rounded bg-emerald-950/80 border border-emerald-500/50 flex items-center gap-1 active:scale-95 shadow">✓ Fijar posición</button>
                  </div>
                  <div class="text-[10px] text-slate-400 mb-2 font-medium">Instrucción individual en este partido:</div>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    ${availRoles.map(r => `
                      <button class="btn-pre-assign-role p-2 rounded-xl border text-left transition flex items-start gap-2 ${r.id === curRoleId ? 'bg-sky-500/25 border-sky-400 text-white shadow-sm ring-1 ring-sky-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 active:scale-98'}" data-role-id="${r.id}" data-player-id="${selPlayer.id}">
                        <span class="text-base mt-0.5 flex-shrink-0">${r.icon}</span>
                        <div class="min-w-0">
                          <div class="text-xs font-bold ${r.id === curRoleId ? 'text-sky-300' : 'text-slate-200'}">${r.name}</div>
                          <div class="text-[9.5px] text-slate-400 leading-tight mt-0.5">${r.desc}</div>
                        </div>
                      </button>
                    `).join('')}
                  </div>
                </div>

                <!-- Instrucción Individual: Marcaje al Hombre Rival -->
                ${selSlot.pos !== "POR" ? `
                  <div class="p-3 bg-slate-900 border border-rose-500/50 rounded-2xl shadow-xl space-y-2">
                    <div class="flex items-center justify-between pb-1.5 border-b border-slate-800">
                      <div class="flex items-center gap-2">
                        <span class="text-lg">🎯</span>
                        <div>
                          <span class="text-[9px] uppercase font-bold text-rose-400">Instrucción de Marcaje</span>
                          <h4 class="text-xs font-black text-white">Marcaje al Hombre Rival</h4>
                        </div>
                      </div>
                      ${curTargetId ? `
                        <button id="btn-pre-clear-mark" class="text-[9.5px] font-bold text-rose-400 hover:text-white px-2 py-0.5 rounded bg-rose-950/80 border border-rose-800/80 active:scale-95 transition">
                          Desactivar
                        </button>
                      ` : ''}
                    </div>

                    <div class="text-[9.5px] text-slate-400">
                      Asigna a ${selPlayer.name.split(' ').slice(-1)[0]} la tarea de neutralizar a un jugador rival específico.
                    </div>

                    <!-- Selector de Rival -->
                    <div>
                      <label class="block text-[9px] uppercase font-bold text-slate-400 mb-1">Jugador Rival a Marcar:</label>
                      <select id="select-pre-mark-target" class="w-full bg-slate-950 border border-slate-700 text-white font-bold text-xs rounded-xl px-2.5 py-1.5 outline-none focus:border-rose-400" data-marker-id="${selPlayer.id}">
                        <option value="">-- Sin marcaje individual asignado --</option>
                        ${oppOutfield.map(op => `
                          <option value="${op.id}" ${op.id === curTargetId ? 'selected' : ''}>
                            ${op.pos} · ${op.name} (${op.ovr} OVR)${op.ovr === oppStarOvr ? ' ⭐ Peligro principal' : ''}
                          </option>
                        `).join('')}
                      </select>
                    </div>

                    <!-- Intensidad de Marcaje -->
                    ${curTargetId ? `
                      <div class="pt-1">
                        <span class="block text-[9px] uppercase font-bold text-slate-400 mb-1.5">Intensidad del Marcaje:</span>
                        <div class="grid grid-cols-3 gap-1.5 text-center">
                          <button class="btn-pre-mark-intensity p-1.5 rounded-xl border text-left transition flex flex-col gap-0.5 ${curIntensity === 'light' ? 'bg-amber-500/25 border-amber-400 text-white ring-1 ring-amber-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700'} active:scale-95" data-intensity="light" data-marker-id="${selPlayer.id}">
                            <div class="flex items-center gap-1 font-bold text-[10px] ${curIntensity === 'light' ? 'text-amber-300' : 'text-slate-200'}">
                              <span>👁️</span> Suave
                            </div>
                            <div class="text-[8px] text-slate-400 leading-tight">Vigilancia cercana (-12% rival, +4% fatiga)</div>
                          </button>
                          <button class="btn-pre-mark-intensity p-1.5 rounded-xl border text-left transition flex flex-col gap-0.5 ${curIntensity === 'tight' ? 'bg-sky-500/25 border-sky-400 text-white ring-1 ring-sky-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700'} active:scale-95" data-intensity="tight" data-marker-id="${selPlayer.id}">
                            <div class="flex items-center gap-1 font-bold text-[10px] ${curIntensity === 'tight' ? 'text-sky-300' : 'text-slate-200'}">
                              <span>🔒</span> Férreo
                            </div>
                            <div class="text-[8px] text-slate-400 leading-tight">Pegajoso (-24% rival, +10% fatiga, +12% faltas)</div>
                          </button>
                          <button class="btn-pre-mark-intensity p-1.5 rounded-xl border text-left transition flex flex-col gap-0.5 ${curIntensity === 'aggressive' ? 'bg-rose-500/25 border-rose-400 text-white ring-1 ring-rose-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700'} active:scale-95" data-intensity="aggressive" data-marker-id="${selPlayer.id}">
                            <div class="flex items-center gap-1 font-bold text-[10px] ${curIntensity === 'aggressive' ? 'text-rose-300' : 'text-slate-200'}">
                              <span>⚔️</span> Secante
                            </div>
                            <div class="text-[8px] text-slate-400 leading-tight">Asfixiante (-36% rival, +18% fatiga, +28% faltas)</div>
                          </button>
                        </div>
                      </div>
                    ` : ''}
                  </div>
                ` : ''}
              </div>
            `;
          })()}

          <!-- Botón para ver y ajustar todas las funciones del 11 -->
          <div class="px-4 text-center my-1.5 flex items-center justify-center gap-2">
            <button id="btn-pre-toggle-all-roles" class="text-xs bg-slate-900 hover:bg-slate-800 text-sky-400 border border-slate-800 hover:border-sky-500/40 px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 shadow-sm">
              <span>⚙️</span>
              <span>${showPreMatchAllRoles ? 'Ocultar funciones del 11' : 'Ver funciones de los 11'}</span>
            </button>
          </div>

          <!-- Lista Desplegable de Todas las Funciones del 11 -->
          ${showPreMatchAllRoles ? `
            <div class="mx-3 mb-3 bg-slate-900 border border-slate-800 rounded-2xl p-3 space-y-2">
              <div class="flex items-center justify-between pb-1.5 border-b border-slate-800">
                <span class="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>⚙️</span> Funciones e Instrucciones del 11 Titular
                </span>
                <span class="text-[10px] text-slate-400">Personaliza cada puesto</span>
              </div>
              <div class="space-y-1.5 max-h-60 overflow-y-auto pr-1 no-scrollbar">
                ${formation.slots.map((slot, idx) => {
                  const p = lineupPlayers[idx];
                  if (!p) return "";
                  const curRoleId = (tactics.playerRoles && tactics.playerRoles[p.id]) || getDefaultRoleForPosition(slot.pos);
                  const availRoles = getAvailableRolesForPosition(slot.pos);
                  return `
                    <div class="flex items-center justify-between p-2 rounded-xl bg-slate-950 border border-slate-800/80 text-xs">
                      <div class="flex items-center gap-2 min-w-0">
                        <span class="w-8 text-center font-extrabold text-[10px] px-1 py-0.5 rounded bg-slate-800 text-sky-400 flex-shrink-0">${slot.label}</span>
                        <span class="font-bold text-white truncate text-xs">${p.name.split(' ').slice(-1)[0]}</span>
                      </div>
                      <select class="select-pre-player-role bg-slate-900 border border-slate-700 text-sky-300 text-[11px] font-bold rounded-lg px-2 py-1 outline-none focus:border-sky-400 max-w-[190px]" data-player-id="${p.id}" data-pos="${slot.pos}">
                        ${availRoles.map(r => `
                          <option value="${r.id}" ${r.id === curRoleId ? 'selected' : ''}>
                            ${r.icon} ${r.name} (${r.tag})
                          </option>
                        `).join('')}
                      </select>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Instrucción de intercambio -->
          <div class="px-4 text-center my-1">
            <p class="text-[11px] text-slate-400">
              ${selectedPreMatchPlayerId ? '👉 Puedes elegir su función arriba o tocar otro futbolista para intercambiarlo.' : '💡 Toca un futbolista para elegir su función o cambiar su posición.'}
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
                const isInjured = Boolean(p.injury);
                const isSuspended = Boolean(p.suspension && p.suspension.roundsLeft > 0);
                return `
                  <div class="bench-pre-card flex-shrink-0 bg-slate-900 border ${isSelected ? 'border-amber-400 bg-amber-500/20' : isInjured ? 'border-rose-900/80 bg-rose-950/20' : isSuspended ? 'border-amber-900/80 bg-amber-950/20' : 'border-slate-800'} p-2 rounded-xl text-center cursor-pointer active:scale-95 transition min-w-[76px]" data-player-id="${p.id}">
                    <div class="flex items-center justify-center gap-1">
                      <span class="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-slate-800 ${p.pos === 'DC' || p.pos === 'EI' || p.pos === 'ED' ? 'text-red-400' : p.pos === 'MC' || p.pos === 'MCD' || p.pos === 'MCO' ? 'text-amber-400' : p.pos === 'POR' ? 'text-purple-400' : 'text-sky-400'}">${p.pos}</span>
                      ${isInjured ? `<span class="text-[8px] px-1 py-0.2 rounded bg-rose-900/90 text-rose-200 font-bold border border-rose-500/50">🚑 ${p.injury.roundsLeft}j</span>` : ''}
                      ${isSuspended ? `<span class="text-[8px] px-1 py-0.2 rounded bg-amber-900/90 text-amber-200 font-bold border border-amber-500/50">🛑 ${p.suspension.roundsLeft}j</span>` : ''}
                    </div>
                    <div class="text-[10px] font-bold text-white truncate max-w-[70px] mt-1">${p.name.split(' ').slice(-1)[0]}</div>
                    <div class="text-xs font-black ${isInjured || isSuspended ? 'text-slate-500' : 'text-amber-400'} mt-0.5">${p.ovr}</div>
                    <div class="text-[9px] font-mono font-bold ${(p.energy || 100) >= 80 ? 'text-emerald-400' : (p.energy || 100) >= 65 ? 'text-amber-400' : 'text-rose-400'} mt-0.5">⚡${Math.round(p.energy !== undefined ? p.energy : 100)}%</div>
                    <div class="w-10 h-1 bg-slate-800 rounded-full mx-auto mt-0.5 overflow-hidden">
                      <div class="h-full ${(p.energy || 100) >= 80 ? 'bg-emerald-400' : (p.energy || 100) >= 65 ? 'bg-amber-400' : 'bg-red-500'}" style="width: ${p.energy || 100}%;"></div>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
          ` : `
            ${renderTacticalInstructionsPanel(tactics.instructions, 'pre')}
          `}

          <!-- MEJORA 4: Informe del Analista Rival (Scouting Táctico) -->
          <div class="px-3 mb-2">
            <div class="bg-slate-900/95 border border-sky-500/35 rounded-2xl p-3 shadow-md space-y-2">
              <div class="flex items-center justify-between border-b border-slate-800 pb-1.5">
                <span class="text-[10px] uppercase font-extrabold text-sky-400 flex items-center gap-1.5">
                  <span>🕵️</span> Informe del Analista · Scouting de ${opponentTeam.shortName}
                </span>
                <span class="text-[9px] px-2 py-0.5 rounded-full bg-slate-800 text-amber-300 font-bold border border-slate-700">
                  ${analystReport.styleTitle}
                </span>
              </div>
              <div class="grid grid-cols-1 gap-1.5 text-[10px]">
                <div class="flex items-start gap-1.5 bg-slate-950/70 p-2 rounded-xl border border-slate-800/80">
                  <span class="text-xs flex-shrink-0">⭐</span>
                  <div class="leading-snug text-slate-300">
                    <b class="text-amber-300">Amenaza Estrella:</b> <span class="text-white font-bold">${analystReport.starPlayer.name}</span> (${analystReport.starPlayer.pos} · Media ${analystReport.starPlayer.ovr}) — ${analystReport.styleDesc}
                  </div>
                </div>
                <div class="flex items-start gap-1.5 bg-slate-950/70 p-2 rounded-xl border border-slate-800/80">
                  <span class="text-xs flex-shrink-0">🎯</span>
                  <div class="leading-snug text-slate-300">
                    <b class="text-emerald-400">Punto Débil Detectado:</b> ${analystReport.weaknessText}
                  </div>
                </div>
              </div>
              <div class="flex items-center justify-between gap-2 pt-1">
                <div class="text-[9.5px] text-slate-400 truncate">
                  💡 Plan sugerido: <b class="text-sky-300">${analystReport.recPlan.label}</b>
                </div>
                <button type="button" id="btn-apply-analyst-plan" class="px-2.5 py-1.5 rounded-xl bg-sky-500/20 hover:bg-sky-500/30 border border-sky-400/60 text-sky-300 font-extrabold text-[10px] active:scale-95 transition whitespace-nowrap flex items-center gap-1 shadow-sm">
                  <span>⚡</span> Aplicar Plan del Analista
                </button>
              </div>
            </div>
          </div>

          <!-- MEJORA 1: Charla de Vestuario Pre-Partido -->
          <div class="px-3 mb-2">
            <div class="bg-slate-900/90 border border-amber-500/30 rounded-2xl p-2.5 shadow-md">
              <div class="flex items-center justify-between mb-1.5">
                <span class="text-[10px] uppercase font-extrabold text-amber-400 flex items-center gap-1">
                  <span>🗣️</span> Charla de Vestuario Pre-Partido
                </span>
                <span class="text-[9px] text-emerald-400 font-semibold">
                  ${PRE_MATCH_TALKS.find(t => t.id === selectedPreMatchTalk)?.desc || ''}
                </span>
              </div>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                ${PRE_MATCH_TALKS.map(t => {
                  const isSel = selectedPreMatchTalk === t.id;
                  return `
                    <button type="button" class="btn-pre-talk p-1.5 rounded-xl border text-left transition flex items-center gap-1.5 ${isSel ? 'bg-amber-500/20 border-amber-400 text-white shadow ring-1 ring-amber-400/60' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 active:scale-95'}" data-talk="${t.id}">
                      <span class="text-sm flex-shrink-0">${t.icon}</span>
                      <div class="min-w-0">
                        <div class="text-[10px] font-extrabold ${isSel ? 'text-amber-300' : 'text-white'} truncate leading-tight">${t.label}</div>
                        <div class="text-[8px] text-slate-400 truncate leading-tight">${t.desc}</div>
                      </div>
                    </button>
                  `;
                }).join('')}
              </div>
            </div>
          </div>

          <!-- Botón de Confirmación y Saltar al Campo con Guardado -->
          <footer class="px-3 space-y-2">
            <button id="btn-pre-save-tactics" class="w-full py-2.5 bg-slate-900 hover:bg-slate-800 active:scale-98 text-sky-400 hover:text-sky-300 border border-sky-500/40 hover:border-sky-400 font-bold text-xs rounded-xl transition flex items-center justify-center gap-2 shadow-sm">
              <span class="text-sm">💾</span>
              <span>Guardar formación y 11 para siguientes partidos</span>
            </button>
            <button id="btn-start-match-confirmed" class="w-full py-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 active:scale-98 text-white font-extrabold text-sm rounded-2xl shadow-xl shadow-emerald-500/25 transition-all flex items-center justify-center gap-2">
              <span>⚽ ¡CONFIRMAR 11 Y SALTAR AL CAMPO!</span>
              <span>➔</span>
            </button>
          </footer>
        ` : `
          <!-- VISTA DE ALINEACIÓN DEL RIVAL -->
          <div class="p-3 bg-slate-900/40 border-b border-slate-800 flex items-center justify-between text-xs">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 rounded-lg bg-slate-800 border border-slate-700 text-amber-400 font-extrabold text-[11px] font-mono">
                ${oppData.formationKey}
              </span>
              <span class="text-xs font-bold text-white">${opponentTeam.name}</span>
            </div>
            <div class="text-[11px] text-slate-400">
              Media titular: <b class="text-amber-400">${oppAverages.overall}</b>
            </div>
          </div>

          <!-- Terreno de Juego Táctico Rival -->
          <div class="p-3 flex-1 flex flex-col justify-center">
            <div class="relative w-full aspect-[3/4] max-w-[340px] mx-auto bg-gradient-to-b from-emerald-900 via-emerald-800 to-emerald-950 rounded-2xl border-2 border-amber-500/40 shadow-inner overflow-hidden p-2">
              <div class="absolute inset-2 border-2 border-white/30 rounded-xl pointer-events-none"></div>
              <div class="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-12 border-b-2 border-x-2 border-white/30 pointer-events-none"></div>
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-white/30 rounded-full pointer-events-none"></div>
              <div class="absolute top-1/2 left-2 right-2 h-0.5 bg-white/30 -translate-y-1/2 pointer-events-none"></div>
              <div class="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-12 border-t-2 border-x-2 border-white/30 pointer-events-none"></div>

              <!-- Fichas de los 11 titulares del rival -->
              ${oppData.formation.slots.map((slot, index) => {
                const player = oppData.lineup[index];
                if (!player) return "";
                const effRating = calculateEffectiveRating(player, slot.pos);

                return `
                  <div class="slot-pre-opp-player absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none z-10"
                       style="left: ${slot.x}%; top: ${slot.y}%;">
                    <div class="w-9 h-9 rounded-full border-2 border-white/80 flex flex-col items-center justify-center relative shadow-md"
                         style="background: linear-gradient(135deg, ${opponentTeam.primaryColor}, ${opponentTeam.secondaryColor}); color: ${opponentTeam.textColor};">
                      <span class="text-[9px] font-black leading-none">${effRating}</span>
                      <span class="text-[7px] font-bold leading-none opacity-90">${slot.label}</span>
                      <div class="absolute -bottom-1 w-5 h-1 bg-black/60 rounded-full overflow-hidden">
                        <div class="h-full bg-emerald-400" style="width: ${player.energy || 100}%;"></div>
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

          <div class="px-4 text-center my-1">
            <p class="text-[11px] text-amber-400 font-semibold">
              🔍 Esta es la alineación confirmada del rival para el encuentro.
            </p>
          </div>

          <!-- MEJORA 4: Informe del Analista en la Pestaña del Rival -->
          <div class="px-3 mb-3">
            <div class="bg-slate-900/95 border border-amber-500/40 rounded-2xl p-3 shadow-md space-y-1.5 text-[10px]">
              <div class="font-extrabold text-amber-400 uppercase flex items-center justify-between">
                <span>🕵️ Análisis Táctico del Rival</span>
                <span class="text-sky-300">${analystReport.styleTitle}</span>
              </div>
              <p class="text-slate-300 leading-snug">⭐ <b class="text-white">Figura clave:</b> ${analystReport.starPlayer.name} (${analystReport.starPlayer.pos}, ${analystReport.starPlayer.ovr} OVR).</p>
              <p class="text-slate-300 leading-snug">🎯 <b class="text-emerald-400">Cómo hacerles daño:</b> ${analystReport.weaknessText}</p>
            </div>
          </div>

          <!-- Banquillo del Rival -->
          <div class="px-3 mb-3">
            <div class="text-[10px] uppercase font-bold text-slate-400 mb-1.5 flex items-center justify-between">
              <span>🪑 Suplentes del Rival (${oppData.bench.length})</span>
              <span class="text-slate-500 font-normal">Convocatoria rival</span>
            </div>
            <div class="flex gap-1.5 overflow-x-auto pb-2 no-scrollbar">
              ${oppData.bench.map(p => `
                <div class="flex-shrink-0 bg-slate-900 border border-slate-800 p-2 rounded-xl text-center min-w-[76px]">
                  <span class="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-slate-800 ${p.pos === 'DC' || p.pos === 'EI' || p.pos === 'ED' ? 'text-red-400' : p.pos === 'MC' || p.pos === 'MCD' || p.pos === 'MCO' ? 'text-amber-400' : p.pos === 'POR' ? 'text-purple-400' : 'text-sky-400'}">${p.pos}</span>
                  <div class="text-[10px] font-bold text-white truncate max-w-[70px] mt-1">${p.name.split(' ').slice(-1)[0]}</div>
                  <div class="text-xs font-black text-amber-400 mt-0.5">${p.ovr}</div>
                  <div class="text-[9px] font-mono font-bold ${(p.energy || 100) >= 80 ? 'text-emerald-400' : (p.energy || 100) >= 65 ? 'text-amber-400' : 'text-rose-400'} mt-0.5">⚡${Math.round(p.energy !== undefined ? p.energy : 100)}%</div>
                  <div class="w-10 h-1 bg-slate-800 rounded-full mx-auto mt-0.5 overflow-hidden">
                    <div class="h-full ${(p.energy || 100) >= 80 ? 'bg-emerald-400' : (p.energy || 100) >= 65 ? 'bg-amber-400' : 'bg-red-500'}" style="width: ${p.energy || 100}%;"></div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Botones desde la vista del rival -->
          <footer class="px-3 flex gap-2">
            <button id="btn-pre-to-user" class="flex-1 py-4 bg-slate-800 hover:bg-slate-700 active:scale-98 text-white font-bold text-xs rounded-2xl border border-slate-700 transition flex items-center justify-center gap-1.5">
              <span>👕 Modificar mi 11</span>
            </button>
            <button id="btn-start-match-from-rival" class="flex-1 py-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 active:scale-98 text-white font-extrabold text-xs rounded-2xl shadow-xl shadow-emerald-500/25 transition flex items-center justify-center gap-1.5">
              <span>⚽ ¡SALTAR AL CAMPO!</span>
              <span>➔</span>
            </button>
          </footer>
        `}
      </div>
    `;

    // Eventos Pre-Partido
    container.querySelector("#btn-pre-back")?.addEventListener("click", () => {
      SaveManager.saveGame(gameState);
      if (onBackToHub) onBackToHub();
    });

    container.querySelector("#tab-pre-user")?.addEventListener("click", () => {
      preMatchTab = "USER";
      renderPreMatch();
    });

    container.querySelector("#tab-pre-rival")?.addEventListener("click", () => {
      preMatchTab = "OPPONENT";
      renderPreMatch();
    });

    container.querySelector("#btn-matchup-user")?.addEventListener("click", () => {
      preMatchTab = "USER";
      renderPreMatch();
    });

    container.querySelector("#btn-matchup-rival")?.addEventListener("click", () => {
      preMatchTab = "OPPONENT";
      renderPreMatch();
    });

    container.querySelector("#btn-pre-to-user")?.addEventListener("click", () => {
      preMatchTab = "USER";
      renderPreMatch();
    });

    container.querySelector("#btn-start-match-from-rival")?.addEventListener("click", () => {
      const curInjured = lineupPlayers.filter(p => p.injury);
      if (curInjured.length > 0) {
        alert(`⚠️ No puedes comenzar el partido con jugadores lesionados en el once titular (${curInjured.map(p => p.name).join(', ')}).\n\nSustitúyelos por futbolistas disponibles del banquillo o pulsa '⚡ Sustituir'.`);
        return;
      }
      SaveManager.saveGame(gameState);
      startLiveSimulation();
    });

    const btnReplaceInjured = container.querySelector("#btn-pre-replace-injured");
    if (btnReplaceInjured) {
      btnReplaceInjured.onclick = () => {
        replaceInjuredStarters();
        renderPreMatch();
      };
    }

    const btnReplaceSuspended = container.querySelector("#btn-pre-replace-suspended");
    if (btnReplaceSuspended) {
      btnReplaceSuspended.onclick = () => {
        replaceInjuredStarters();
        renderPreMatch();
      };
    }

    const btnAuto = container.querySelector("#btn-pre-auto");
    if (btnAuto) {
      btnAuto.onclick = () => {
        autoAlignLineup();
        masterTacticsForNextMatches = JSON.parse(JSON.stringify(gameState.userTactics));
        SaveManager.saveGame(gameState);
        preMatchSaveFeedback = `¡Alineación automática generada y guardada para los siguientes partidos!`;
        renderPreMatch();
      };
    }

    container.querySelectorAll(".btn-pre-formation").forEach(b => {
      b.onclick = () => {
        tactics.formation = b.dataset.formation;
        masterTacticsForNextMatches = JSON.parse(JSON.stringify(gameState.userTactics));
        SaveManager.saveGame(gameState);
        renderPreMatch();
      };
    });

    container.querySelectorAll(".btn-pre-mentality").forEach(b => {
      b.onclick = () => {
        tactics.mentality = b.dataset.mentality;
        masterTacticsForNextMatches = JSON.parse(JSON.stringify(gameState.userTactics));
        SaveManager.saveGame(gameState);
        renderPreMatch();
      };
    });

    container.querySelectorAll(".btn-pre-talk").forEach(b => {
      b.onclick = () => {
        selectedPreMatchTalk = b.dataset.talk;
        renderPreMatch();
      };
    });

    // MEJORA 4: Botón para aplicar con 1 clic el Plan Táctico recomendado por el Analista
    const btnApplyAnalyst = container.querySelector("#btn-apply-analyst-plan");
    if (btnApplyAnalyst) {
      btnApplyAnalyst.onclick = () => {
        const plan = analystReport.recPlan;
        tactics.mentality = plan.mentality;
        if (!tactics.instructions) tactics.instructions = getDefaultTacticalInstructions();
        tactics.instructions.inPossession = {
          passingStyle: plan.passingStyle,
          tempo: plan.tempo,
          width: plan.width
        };
        tactics.instructions.inTransition = {
          loss: plan.transitionLoss,
          win: plan.transitionWin
        };
        tactics.instructions.outOfPossession = {
          defensiveLine: plan.defensiveLine,
          pressing: plan.pressing
        };
        tactics.instructions.preset = detectMatchingPreset(tactics.instructions);
        masterTacticsForNextMatches = JSON.parse(JSON.stringify(gameState.userTactics));
        SaveManager.saveGame(gameState);
        preMatchSaveFeedback = `🕵️ Plan del Analista aplicado: «${plan.label}»`;
        renderPreMatch();
      };
    }

    // Pestañas Mi 11 vs Estilos e Instrucciones
    const btnSubPitch = container.querySelector("#btn-pre-subtab-pitch");
    if (btnSubPitch) {
      btnSubPitch.onclick = () => {
        preMatchSubTab = "PITCH";
        renderPreMatch();
      };
    }
    const btnSubStyle = container.querySelector("#btn-pre-subtab-style");
    if (btnSubStyle) {
      btnSubStyle.onclick = () => {
        preMatchSubTab = "STYLE";
        renderPreMatch();
      };
    }
    if (preMatchSubTab === "STYLE") {
      bindTacticalInstructionsPanel(container, tactics.instructions, 'pre', () => {
        masterTacticsForNextMatches = JSON.parse(JSON.stringify(gameState.userTactics));
        SaveManager.saveGame(gameState);
        renderPreMatch();
      });
    }

    // Ajuste de posición libre pre-partido
    container.querySelectorAll(".btn-pre-nudge-pos").forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        if (!selectedPreMatchPlayerId) return;
        const selSlotIndex = tactics.lineup.indexOf(selectedPreMatchPlayerId);
        if (selSlotIndex === -1) return;
        const axis = btn.dataset.axis;
        const delta = parseInt(btn.dataset.delta, 10);
        const effSlot = getEffectiveSlotCoords(tactics.formation, selSlotIndex, tactics.customPositions);
        if (!tactics.customPositions) tactics.customPositions = {};
        const isGK = selSlotIndex === 0;

        if (axis === "x") {
          const newX = Math.max(isGK ? 38 : 10, Math.min(isGK ? 62 : 90, effSlot.x + delta));
          tactics.customPositions[selSlotIndex] = { x: newX, y: effSlot.y };
        } else {
          const newY = Math.max(isGK ? 82 : 12, Math.min(isGK ? 90 : 88, effSlot.y + delta));
          tactics.customPositions[selSlotIndex] = { x: effSlot.x, y: newY };
        }
        masterTacticsForNextMatches = JSON.parse(JSON.stringify(gameState.userTactics));
        SaveManager.saveGame(gameState);
        renderPreMatch();
      };
    });

    const btnPreResetPos = container.querySelector("#btn-pre-reset-pos");
    if (btnPreResetPos) {
      btnPreResetPos.onclick = (e) => {
        e.stopPropagation();
        if (!selectedPreMatchPlayerId) return;
        const selSlotIndex = tactics.lineup.indexOf(selectedPreMatchPlayerId);
        if (selSlotIndex !== -1 && tactics.customPositions) {
          delete tactics.customPositions[selSlotIndex];
          masterTacticsForNextMatches = JSON.parse(JSON.stringify(gameState.userTactics));
          SaveManager.saveGame(gameState);
          renderPreMatch();
        }
      };
    }

    // Sliders de Posición Fina Pre-Partido
    const sliderPreY = container.querySelector(".slider-pre-pos-y");
    if (sliderPreY) {
      sliderPreY.oninput = (e) => {
        if (!selectedPreMatchPlayerId) return;
        const selSlotIndex = tactics.lineup.indexOf(selectedPreMatchPlayerId);
        if (selSlotIndex === -1) return;
        const effSlot = getEffectiveSlotCoords(formationKey, selSlotIndex, tactics.customPositions);
        const val = parseInt(e.target.value, 10);
        if (!tactics.customPositions) tactics.customPositions = {};
        tactics.customPositions[selSlotIndex] = { x: effSlot.x, y: val };
        const slotEl = container.querySelector(`.slot-pre-player[data-slot-index="${selSlotIndex}"]`);
        if (slotEl) slotEl.style.top = `${val}%`;
      };
      sliderPreY.onchange = () => {
        masterTacticsForNextMatches = JSON.parse(JSON.stringify(gameState.userTactics));
        SaveManager.saveGame(gameState);
        renderPreMatch();
      };
    }

    const sliderPreX = container.querySelector(".slider-pre-pos-x");
    if (sliderPreX) {
      sliderPreX.oninput = (e) => {
        if (!selectedPreMatchPlayerId) return;
        const selSlotIndex = tactics.lineup.indexOf(selectedPreMatchPlayerId);
        if (selSlotIndex === -1) return;
        const effSlot = getEffectiveSlotCoords(formationKey, selSlotIndex, tactics.customPositions);
        const val = parseInt(e.target.value, 10);
        if (!tactics.customPositions) tactics.customPositions = {};
        tactics.customPositions[selSlotIndex] = { x: val, y: effSlot.y };
        const slotEl = container.querySelector(`.slot-pre-player[data-slot-index="${selSlotIndex}"]`);
        if (slotEl) slotEl.style.left = `${val}%`;
      };
      sliderPreX.onchange = () => {
        masterTacticsForNextMatches = JSON.parse(JSON.stringify(gameState.userTactics));
        SaveManager.saveGame(gameState);
        renderPreMatch();
      };
    }

    // Arrastre libre con el dedo o ratón directamente en la previa pre-partido (solo activo para el futbolista seleccionado)
    let preJustDragged = false;
    const prePitchBox = container.querySelector("#pre-match-pitch-container");
    if (prePitchBox && selectedPreMatchPlayerId) {
      const selectedSlotEl = prePitchBox.querySelector(`.slot-pre-player[data-player-id="${selectedPreMatchPlayerId}"]`);
      if (selectedSlotEl) {
        const slotIdx = parseInt(selectedSlotEl.dataset.slotIndex, 10);
        const pId = selectedPreMatchPlayerId;
        let dragMoved = false;
        let startX = 0, startY = 0;

        const onPointerDown = (e) => {
          if (e.button !== 0 && e.pointerType === "mouse") return;
          dragMoved = false;
          startX = e.clientX;
          startY = e.clientY;

          const onPointerMove = (me) => {
            const dist = Math.hypot(me.clientX - startX, me.clientY - startY);
            if (!dragMoved && dist > 5) {
              dragMoved = true;
            }
            if (dragMoved) {
              const rect = prePitchBox.getBoundingClientRect();
              let nx = ((me.clientX - rect.left) / rect.width) * 100;
              let ny = ((me.clientY - rect.top) / rect.height) * 100;
              const isGK = slotIdx === 0;
              nx = Math.max(isGK ? 38 : 10, Math.min(isGK ? 62 : 90, nx));
              ny = Math.max(isGK ? 82 : 12, Math.min(isGK ? 90 : 88, ny));
              selectedSlotEl.style.left = `${nx}%`;
              selectedSlotEl.style.top = `${ny}%`;
              selectedSlotEl.dataset.dragX = nx;
              selectedSlotEl.dataset.dragY = ny;
            }
          };

          const onPointerUp = () => {
            window.removeEventListener("pointermove", onPointerMove);
            window.removeEventListener("pointerup", onPointerUp);
            if (dragMoved) {
              preJustDragged = true;
              setTimeout(() => { preJustDragged = false; }, 200);
              const finalX = parseFloat(selectedSlotEl.dataset.dragX);
              const finalY = parseFloat(selectedSlotEl.dataset.dragY);
              if (!isNaN(finalX) && !isNaN(finalY)) {
                if (!tactics.customPositions) tactics.customPositions = {};
                tactics.customPositions[slotIdx] = { x: Math.round(finalX), y: Math.round(finalY) };
                selectedPreMatchPlayerId = pId;
                masterTacticsForNextMatches = JSON.parse(JSON.stringify(gameState.userTactics));
                SaveManager.saveGame(gameState);
                renderPreMatch();
              }
            }
          };

          window.addEventListener("pointermove", onPointerMove);
          window.addEventListener("pointerup", onPointerUp);
        };

        selectedSlotEl.addEventListener("pointerdown", onPointerDown);
      }

      prePitchBox.onclick = (e) => {
        if (preJustDragged) return;
        if (!e.target.closest(".slot-pre-player")) {
          if (selectedPreMatchPlayerId) {
            selectedPreMatchPlayerId = null;
            renderPreMatch();
          }
        }
      };
    }

    container.querySelectorAll(".slot-pre-player, .bench-pre-card").forEach(el => {
      el.onclick = () => {
        if (preJustDragged) return;
        handlePrePlayerTap(el.dataset.playerId);
      };
    });

    container.querySelectorAll(".btn-pre-assign-role").forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const pId = btn.dataset.playerId;
        const rId = btn.dataset.roleId;
        if (!tactics.playerRoles) tactics.playerRoles = {};
        tactics.playerRoles[pId] = rId;
        masterTacticsForNextMatches = JSON.parse(JSON.stringify(gameState.userTactics));
        SaveManager.saveGame(gameState);
        renderPreMatch();
      };
    });

    const btnPreCloseRole = container.querySelector("#btn-pre-close-role-box");
    if (btnPreCloseRole) {
      btnPreCloseRole.onclick = (e) => {
        e.stopPropagation();
        selectedPreMatchPlayerId = null;
        renderPreMatch();
      };
    }

    // Handlers de Marcaje al Hombre Pre-Partido
    const selectPreMark = container.querySelector("#select-pre-mark-target");
    if (selectPreMark) {
      selectPreMark.onchange = (e) => {
        const markerId = selectPreMark.dataset.markerId;
        const targetId = e.target.value;
        if (!tactics.manMarking) tactics.manMarking = {};
        if (!targetId) {
          delete tactics.manMarking[markerId];
        } else {
          tactics.manMarking[markerId] = {
            targetId,
            intensity: tactics.manMarking[markerId]?.intensity || "tight"
          };
        }
        masterTacticsForNextMatches = JSON.parse(JSON.stringify(gameState.userTactics));
        SaveManager.saveGame(gameState);
        renderPreMatch();
      };
    }

    container.querySelectorAll(".btn-pre-mark-intensity").forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const markerId = btn.dataset.markerId;
        const intensity = btn.dataset.intensity;
        if (!tactics.manMarking) tactics.manMarking = {};
        if (tactics.manMarking[markerId]) {
          tactics.manMarking[markerId].intensity = intensity;
        } else {
          // Si no había rival seleccionado todavía, buscar la estrella del rival
          const oppOutfield = oppData.lineup.filter(p => p.pos !== "POR");
          const oppStar = oppOutfield.slice().sort((a, b) => (b.ovr || 70) - (a.ovr || 70))[0];
          if (oppStar) {
            tactics.manMarking[markerId] = {
              targetId: oppStar.id,
              intensity
            };
          }
        }
        masterTacticsForNextMatches = JSON.parse(JSON.stringify(gameState.userTactics));
        SaveManager.saveGame(gameState);
        renderPreMatch();
      };
    });

    const btnClearMark = container.querySelector("#btn-pre-clear-mark");
    if (btnClearMark) {
      btnClearMark.onclick = (e) => {
        e.stopPropagation();
        if (selectedPreMatchPlayerId && tactics.manMarking) {
          delete tactics.manMarking[selectedPreMatchPlayerId];
          masterTacticsForNextMatches = JSON.parse(JSON.stringify(gameState.userTactics));
          SaveManager.saveGame(gameState);
          renderPreMatch();
        }
      };
    }

    const btnPreToggleAll = container.querySelector("#btn-pre-toggle-all-roles");
    if (btnPreToggleAll) {
      btnPreToggleAll.onclick = () => {
        showPreMatchAllRoles = !showPreMatchAllRoles;
        renderPreMatch();
      };
    }

    container.querySelectorAll(".select-pre-player-role").forEach(sel => {
      sel.onchange = (e) => {
        const pId = sel.dataset.playerId;
        const rId = e.target.value;
        if (!tactics.playerRoles) tactics.playerRoles = {};
        tactics.playerRoles[pId] = rId;
        masterTacticsForNextMatches = JSON.parse(JSON.stringify(gameState.userTactics));
        SaveManager.saveGame(gameState);
        renderPreMatch();
      };
    });

    const savePreTacticsAction = () => {
      masterTacticsForNextMatches = JSON.parse(JSON.stringify(gameState.userTactics));
      SaveManager.saveGame(gameState);
      preMatchSaveFeedback = `¡Plantilla (${tactics.formation}), alineación y funciones guardadas para futuros partidos!`;
      renderPreMatch();
    };

    const btnSaveTactics = container.querySelector("#btn-pre-save-tactics");
    if (btnSaveTactics) {
      btnSaveTactics.onclick = savePreTacticsAction;
    }

    const btnSaveHeader = container.querySelector("#btn-pre-save-header");
    if (btnSaveHeader) {
      btnSaveHeader.onclick = savePreTacticsAction;
    }

    const btnConfirm = container.querySelector("#btn-start-match-confirmed");
    if (btnConfirm) {
      btnConfirm.onclick = () => {
        const curInjured = lineupPlayers.filter(p => p.injury);
        if (curInjured.length > 0) {
          alert(`⚠️ No puedes comenzar el partido con jugadores lesionados en el once titular (${curInjured.map(p => p.name).join(', ')}).\n\nSustitúyelos por futbolistas disponibles del banquillo o pulsa '⚡ Sustituir'.`);
          return;
        }
        const curSuspended = lineupPlayers.filter(p => p.suspension && p.suspension.roundsLeft > 0);
        if (curSuspended.length > 0) {
          alert(`⚠️ No puedes comenzar el partido con jugadores sancionados en el once titular (${curSuspended.map(p => `${p.name} - ${p.suspension.reason}`).join(', ')}).\n\nSustitúyelos por futbolistas disponibles del banquillo o pulsa '⚡ Sustituir'.`);
          return;
        }
        masterTacticsForNextMatches = JSON.parse(JSON.stringify(gameState.userTactics));
        SaveManager.saveGame(gameState);
        startLiveSimulation();
      };
    }
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

    if (inLineup1 !== -1 && inBench2 !== -1) {
      const benchP = userTeam.players.find(p => p.id === tappedId);
      if (benchP && benchP.injury) {
        alert(`⚠️ ${benchP.name} está lesionado (${benchP.injury.type}) y no puede entrar como titular.`);
        return;
      }
      if (benchP && benchP.suspension && benchP.suspension.roundsLeft > 0) {
        alert(`🟥 ${benchP.name} está sancionado (${benchP.suspension.reason}) y no puede entrar como titular.`);
        return;
      }
      tactics.lineup[inLineup1] = tappedId;
      tactics.bench[inBench2] = selectedPreMatchPlayerId;
    } else if (inBench1 !== -1 && inLineup2 !== -1) {
      const benchP = userTeam.players.find(p => p.id === selectedPreMatchPlayerId);
      if (benchP && benchP.injury) {
        alert(`⚠️ ${benchP.name} está lesionado (${benchP.injury.type}) y no puede entrar como titular.`);
        return;
      }
      if (benchP && benchP.suspension && benchP.suspension.roundsLeft > 0) {
        alert(`🟥 ${benchP.name} está sancionado (${benchP.suspension.reason}) y no puede entrar como titular.`);
        return;
      }
      tactics.bench[inBench1] = tappedId;
      tactics.lineup[inLineup2] = selectedPreMatchPlayerId;
    } else if (inLineup1 !== -1 && inLineup2 !== -1) {
      const tmp = tactics.lineup[inLineup1];
      tactics.lineup[inLineup1] = tactics.lineup[inLineup2];
      tactics.lineup[inLineup2] = tmp;
    } else if (inBench1 !== -1 && inBench2 !== -1) {
      const tmp = tactics.bench[inBench1];
      tactics.bench[inBench1] = tactics.bench[inBench2];
      tactics.bench[inBench2] = tmp;
    }

    selectedPreMatchPlayerId = null;
    SaveManager.saveGame(gameState);
    renderPreMatch();
  }

  function replaceInjuredStarters() {
    const tactics = gameState.userTactics;
    const formation = FORMATIONS[tactics.formation] || FORMATIONS["4-3-3"];
    const healthyBench = tactics.bench
      .map(id => userTeam.players.find(p => p.id === id))
      .filter(p => p && !p.injury && !p.suspension)
      .sort((a, b) => (b.ovr || 70) - (a.ovr || 70));

    let replacedCount = 0;
    tactics.lineup.forEach((id, idx) => {
      const p = userTeam.players.find(x => x.id === id);
      if (p && (p.injury || (p.suspension && p.suspension.roundsLeft > 0))) {
        const slot = formation.slots[idx];
        let subIndex = healthyBench.findIndex(b => b.pos === slot.pos);
        if (subIndex === -1 && slot.pos !== "POR") {
          subIndex = healthyBench.findIndex(b => b.pos !== "POR");
        }
        if (subIndex === -1 && healthyBench.length > 0) subIndex = 0;

        if (subIndex !== -1 && healthyBench[subIndex]) {
          const replacement = healthyBench.splice(subIndex, 1)[0];
          const oldId = tactics.lineup[idx];
          tactics.lineup[idx] = replacement.id;
          const bIdx = tactics.bench.indexOf(replacement.id);
          if (bIdx !== -1) tactics.bench.splice(bIdx, 1);
          tactics.bench.push(oldId);
          replacedCount++;
        }
      }
    });

    if (replacedCount > 0) {
      SaveManager.saveGame(gameState);
      preMatchSaveFeedback = `¡Se han sustituido ${replacedCount} jugador(es) no disponibles por suplentes!`;
    }
  }

  function autoAlignLineup() {
    const tactics = gameState.userTactics;
    const formation = FORMATIONS[tactics.formation] || FORMATIONS["4-3-3"];
    // Ponderar media con condición física y descartar futbolistas de baja médica o sancionados
    const getMatchFitness = p => (p.ovr || 70) * (0.6 + ((p.energy !== undefined ? p.energy : 100) / 250));
    const availablePlayers = [...userTeam.players].filter(p => !p.injury && !p.suspension).sort((a, b) => getMatchFitness(b) - getMatchFitness(a));
    const used = new Set();
    const newLineup = [];

    const gk = availablePlayers.find(p => p.pos === "POR");
    if (gk) {
      newLineup[0] = gk.id;
      used.add(gk.id);
    }

    formation.slots.forEach((slot, idx) => {
      if (idx === 0) return;
      let best = availablePlayers.find(p => !used.has(p.id) && p.pos === slot.pos);
      if (!best) {
        best = availablePlayers.find(p => !used.has(p.id) && p.pos !== "POR");
      }
      if (!best) {
        best = availablePlayers.find(p => !used.has(p.id));
      }
      if (best) {
        newLineup[idx] = best.id;
        used.add(best.id);
      }
    });

    tactics.lineup = newLineup;
    tactics.bench = userTeam.players.filter(p => !used.has(p.id)).map(p => p.id);
    SaveManager.saveGame(gameState);
  }

  // ==========================================
  // FASE 2: SIMULACIÓN EN VIVO (PARTIDO)
  // ==========================================
  function startLiveSimulation() {
    // Guardar la configuración táctica oficial pre-partido para los siguientes partidos
    masterTacticsForNextMatches = JSON.parse(JSON.stringify(gameState.userTactics));
    SaveManager.saveGame(gameState);

    // Resolver equipaciones contrastadas oficiales para el partido
    const matchKits = resolveMatchKits(homeTeam, awayTeam);

    // Aplicar alineaciones oficiales de ambos equipos
    const oppLineupData = getOpponentLineup(opponentTeam);
    if (isUserHome) {
      sortTeamByTactics(homeTeam, gameState.userTactics);
      sortTeamByTactics(awayTeam, {
        lineup: oppLineupData.lineup.map(p => p.id),
        bench: oppLineupData.bench.map(p => p.id)
      });
    } else {
      sortTeamByTactics(awayTeam, gameState.userTactics);
      sortTeamByTactics(homeTeam, {
        lineup: oppLineupData.lineup.map(p => p.id),
        bench: oppLineupData.bench.map(p => p.id)
      });
    }

    const oppPresetKey = (opponentTeam.id === "real_madrid" || opponentTeam.id === "barcelona") ? "tiki_taka" : (opponentTeam.id === "atletico") ? "counter_attack" : (opponentTeam.id === "athletic" || opponentTeam.id === "osasuna") ? "direct_football" : "wing_play";
    const oppInstructions = TACTICAL_PRESETS[oppPresetKey] || getDefaultTacticalInstructions();
    let userShowHighlights = true;
    try {
      userShowHighlights = localStorage.getItem("match_show_highlights") !== "false";
    } catch(e) {}

    const oppLineupIds = oppLineupData.lineup.map(p => p.id);
    const oppBenchIds = oppLineupData.bench.map(p => p.id);

    const simulator = new MatchSimulator(homeTeam, awayTeam, {
      speed: 1, // Ritmo fluido Football Manager por defecto
      showKeyHighlights: userShowHighlights,
      userSide: isUserHome ? "home" : "away",
      preMatchTalk: selectedPreMatchTalk,
      weeklyTraining: gameState.weeklyTraining || "recovery",
      weather: matchWeather,
      homeFormation: isUserHome ? gameState.userTactics.formation : oppLineupData.formationKey,
      awayFormation: !isUserHome ? gameState.userTactics.formation : oppLineupData.formationKey,
      homeLineup: isUserHome ? gameState.userTactics.lineup : oppLineupIds,
      homeBench: isUserHome ? gameState.userTactics.bench : oppBenchIds,
      awayLineup: !isUserHome ? gameState.userTactics.lineup : oppLineupIds,
      awayBench: !isUserHome ? gameState.userTactics.bench : oppBenchIds,
      homeMentality: isUserHome ? gameState.userTactics.mentality : "balanced",
      awayMentality: !isUserHome ? gameState.userTactics.mentality : "balanced",
      homePlayerRoles: isUserHome ? (gameState.userTactics.playerRoles || {}) : {},
      awayPlayerRoles: !isUserHome ? (gameState.userTactics.playerRoles || {}) : {},
      homeCustomPositions: isUserHome ? (gameState.userTactics.customPositions || {}) : {},
      awayCustomPositions: !isUserHome ? (gameState.userTactics.customPositions || {}) : {},
      homeInstructions: isUserHome ? gameState.userTactics.instructions : oppInstructions,
      awayInstructions: !isUserHome ? gameState.userTactics.instructions : oppInstructions,
      homeManMarking: isUserHome ? (gameState.userTactics.manMarking || {}) : {},
      awayManMarking: !isUserHome ? (gameState.userTactics.manMarking || {}) : {},
      onTick: updateMatchUI,
      onAlert: showMatchAlert,
      onCommentary: (text, badge) => {
        if (!isKickoffInProgress) {
          updateFMCommentary(text, badge || "MATCH ENGINE", Boolean(currentHighlightData || simulator.activeReplay));
        }
      },
      onGoal: (goalData) => handleGoalSequence(goalData),
      onHalfTime: (htState) => handleHalfTimeSequence(htState),
      onSubstitution: (subData) => handleSubstitutionChyron(subData),
      onHighlightStart: (hlData) => handleHighlightStart(hlData),
      onHighlightPhase: (phaseData) => handleHighlightPhase(phaseData),
      onHighlightEnd: (endData) => handleHighlightEnd(endData),
      onSetPiece: (spInfo) => openSetPieceModal(spInfo),
      onInjury: (injData) => handleInjurySequence(injData),
      onAssistantAdvice: (advice) => handleAssistantAdvice(advice),
      onAssistantFeedback: (fb) => handleAssistantFeedback(fb),
      onFinish: handleLiveMatchEnd
    });

    let alertTimeout = null;
    let subSelectedPitchId = null;
    const pendingUserSubs = [];
    let subChyronTimeout = null;

    container.innerHTML = `
      <div class="min-h-screen bg-slate-950 text-white flex flex-col justify-between select-none max-w-md mx-auto">
        <!-- Marcador Superior -->
        <header class="bg-slate-900 border-b border-slate-800 p-3 sticky top-0 z-20 shadow-lg">
          <div class="flex items-center justify-between text-xs font-semibold text-slate-400 mb-2">
            <div class="flex items-center gap-2">
              <span>🏆 JORNADA ${gameState.currentRound} / 38</span>
              <span id="match-weather-badge" class="px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-[10px] font-bold text-sky-300" title="${matchWeather.pitchEffect}">
                ${matchWeather.shortBadge}
              </span>
            </div>
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
              <div class="w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm shadow border border-slate-700/60" style="background: linear-gradient(135deg, ${matchKits.away.jersey}, ${matchKits.away.shorts}); color: ${matchKits.away.number};">
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

          <div id="match-viewport-wrapper" class="relative w-full aspect-[16/9] min-h-[310px] max-w-5xl mx-auto bg-slate-950 rounded-2xl border-2 border-slate-800 shadow-2xl overflow-hidden transition-all duration-300">
            <!-- Canvas 3D -->
            <canvas id="match-canvas" class="w-full h-full block cursor-pointer" title="Toca para cambiar de cámara"></canvas>

            <!-- Badge de Cámara 3D TV, Selector de Modo Jugadas Clave y Pantalla Completa Panorámica -->
            <div class="absolute top-2 right-2 flex items-center gap-1.5 z-20">
              <button id="btn-toggle-fullscreen" class="flex items-center gap-1 bg-slate-950/90 backdrop-blur-md px-2 py-1 rounded-lg border border-slate-700/80 text-[9px] font-bold shadow-lg text-slate-300 hover:text-white hover:border-slate-500 active:scale-95 transition cursor-pointer" title="Expandir a Pantalla Completa Panorámica">
                <span id="btn-fullscreen-icon">⛶</span>
                <span class="hidden sm:inline">16:9</span>
              </button>
              <button id="btn-toggle-hl-mode" class="flex items-center gap-1 bg-slate-950/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-amber-500/70 text-[9px] font-bold shadow-lg text-amber-400 active:scale-95 transition cursor-pointer" title="Elegir ver o pasar automáticamente las jugadas clave">
                <span id="btn-toggle-hl-icon">🎬</span>
                <span id="btn-toggle-hl-text">Jugadas: VER</span>
              </button>
              <div id="camera-mode-badge" class="flex items-center bg-slate-950/85 backdrop-blur-md px-2 py-1 rounded-lg border border-emerald-500/50 text-[9px] font-bold shadow-lg text-emerald-400 pointer-events-none">
                <span>🎥 3D TV</span>
              </div>
            </div>

            <!-- Banner de Replay (Repetición) -->
            <div id="replay-badge" class="absolute top-2 left-2 flex items-center gap-1.5 px-2.5 py-1 bg-red-600/95 text-white font-mono font-black text-[10px] rounded-lg shadow-lg uppercase tracking-wider hidden animate-pulse z-20">
              <span class="w-2 h-2 rounded-full bg-white animate-ping"></span>
              <span id="replay-badge-text">📹 REPETICIÓN</span>
            </div>

            <!-- HUD de Cámara de Acción y Táctica FM26 -->
            <div id="highlight-action-hud" class="absolute top-2 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-20 transition-all duration-300 opacity-0 -translate-y-2 max-w-[90%]">
              <div class="flex items-center gap-1.5 bg-slate-950/95 backdrop-blur-md px-3 py-1 rounded-full border border-amber-400 shadow-2xl">
                <span class="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                <span id="hl-hud-title" class="text-[9.5px] font-black uppercase text-amber-400 tracking-wider font-mono">🎥 JUGADA CLAVE</span>
                <button id="btn-skip-highlight" class="pointer-events-auto ml-1.5 px-2.5 py-0.5 rounded-full bg-amber-400 hover:bg-amber-300 active:scale-90 text-slate-950 font-black text-[9px] shadow transition flex items-center gap-1 cursor-pointer" title="Pasar / saltar la visualización de esta jugada">
                  <span>⏭ Saltar</span>
                </button>
              </div>
              <div id="hl-hud-subtitle" class="mt-1 text-[10.5px] font-bold text-white bg-slate-900/90 px-3 py-0.5 rounded-xl border border-slate-700/80 shadow text-center truncate">
                Construcción de la jugada
              </div>
            </div>

            <!-- Barra de Retransmisión y Comentarios FM (Estilo Oficial Football Manager - Como en la foto) -->
            <div id="fm-broadcast-ticker" class="absolute bottom-2.5 left-3 right-3 flex items-center bg-[#54121d]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-rose-500/40 shadow-2xl z-20 transition-all duration-300 pointer-events-none">
              <div id="fm-ticker-badge" class="px-2 py-0.5 rounded-full bg-rose-600 text-white font-mono font-black text-[8.5px] uppercase tracking-wider shadow mr-2.5 flex-shrink-0 flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                <span id="fm-ticker-badge-text">MATCH ENGINE</span>
              </div>
              <div id="fm-ticker-text" class="text-[11px] font-semibold text-rose-100 truncate flex-1">
                Comienza el encuentro en el estadio...
              </div>
            </div>

            <!-- Toast de Análisis Táctico FM26 (Vinculado internamente) -->
            <div id="tactical-analysis-toast" class="hidden">
              <div id="tactical-analysis-icon"></div>
              <div id="tactical-analysis-text"></div>
            </div>

            <!-- Widget Flotante del Cuerpo Técnico / Segundo Entrenador (Live Coaching Staff FM) -->
            <div id="live-assistant-card" class="absolute bottom-14 right-2 sm:right-3 max-w-[340px] sm:max-w-[360px] w-full bg-slate-950/95 backdrop-blur-md border border-amber-500/80 rounded-2xl p-3 shadow-2xl z-30 transition-all duration-300 opacity-0 translate-y-4 pointer-events-none ring-1 ring-amber-400/30">
              <div class="flex items-start justify-between gap-2 mb-1.5">
                <div class="flex items-center gap-2">
                  <div class="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white text-base font-black shadow border border-amber-300/50 flex-shrink-0">
                    👔
                  </div>
                  <div>
                    <div class="flex items-center gap-1.5">
                      <span id="ast-coach-name" class="text-[11px] font-black text-white tracking-tight">Segundo Entrenador</span>
                      <span id="ast-urgency-badge" class="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 text-[8.5px] font-extrabold uppercase tracking-wider border border-amber-500/40">CONSEJO TÁCTICO</span>
                    </div>
                    <div class="flex items-center gap-1 text-[9px] text-amber-300 font-semibold">
                      <span>⏸ Partido pausado · Decisión táctica</span>
                    </div>
                  </div>
                </div>
                <button id="btn-ast-close" class="text-slate-400 hover:text-white text-xs p-1 rounded-lg transition cursor-pointer" title="Cerrar consejo">✕</button>
              </div>

              <!-- Diagnóstico -->
              <div class="bg-slate-900/90 border border-slate-800 rounded-xl p-2 mb-2 text-slate-200">
                <div class="text-[9px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1 mb-0.5">
                  <span>🔍 Diagnóstico en vivo</span>
                </div>
                <p id="ast-diagnosis" class="text-[10.5px] text-slate-300 leading-snug font-medium">
                  El rival nos está ganando la espalda con envíos largos.
                </p>
              </div>

              <!-- Recomendación -->
              <div class="bg-amber-950/40 border border-amber-500/40 rounded-xl p-2 mb-2.5">
                <div class="text-[9px] font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1 mb-0.5">
                  <span>💡 Propuesta del cuerpo técnico</span>
                </div>
                <p id="ast-recommendation" class="text-[11px] text-amber-100 font-bold leading-tight">
                  Bajar bloque defensivo a 'Bajo' y repliegue rápido.
                </p>
              </div>

              <!-- Botones de acción directa -->
              <div class="flex items-center gap-2">
                <button id="btn-ast-apply" class="flex-1 py-1.5 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 active:scale-95 text-white font-extrabold text-[11px] shadow-lg transition flex items-center justify-center gap-1.5 cursor-pointer border border-emerald-400/40">
                  <span>⚡ Aplicar ajuste</span>
                </button>
                <button id="btn-ast-ignore" class="py-1.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-300 font-bold text-[11px] border border-slate-700 transition cursor-pointer">
                  <span>Ignorar</span>
                </button>
              </div>
            </div>

            <!-- Notificación de Feedback del Segundo Entrenador tras 10 min -->
            <div id="live-assistant-feedback" class="absolute top-12 left-1/2 -translate-x-1/2 max-w-[360px] sm:max-w-[420px] w-full bg-slate-950/95 backdrop-blur-md border border-emerald-500/60 rounded-2xl p-2.5 shadow-2xl z-30 transition-all duration-300 opacity-0 -translate-y-4 pointer-events-none flex items-center gap-2.5">
              <div id="ast-feedback-icon" class="w-8 h-8 rounded-xl flex items-center justify-center text-lg flex-shrink-0 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                ✅
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-center justify-between">
                  <span class="text-[9.5px] font-black text-amber-400 uppercase tracking-wider">SEGUNDO ENTRENADOR · FEEDBACK</span>
                  <span id="ast-feedback-minute" class="text-[9px] text-slate-400 font-mono font-bold">58'</span>
                </div>
                <p id="ast-feedback-text" class="text-[10.5px] text-slate-200 font-medium leading-snug">
                  Míster, subir la presión ha surtido efecto, hemos recuperado el control.
                </p>
              </div>
            </div>

            <!-- Banner de Saque de Centro -->
            <div id="kickoff-badge" class="absolute top-10 right-2 flex items-center gap-1.5 px-2.5 py-1 bg-sky-600/90 text-white font-mono font-bold text-[10px] rounded-lg shadow-lg hidden z-20">
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
                  Saque de centro...
                </span>
              </div>
            </div>

            <!-- Rótulo Televisivo Oficial de Sustituciones (TV Broadcast Chyron) -->
            <div id="sub-cinematic" class="absolute inset-0 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center p-3 text-center z-30 transition-all duration-300 opacity-0 pointer-events-none transform scale-95">
              <div id="sub-team-header" class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/95 text-white font-black text-[10px] tracking-wider uppercase mb-2 border border-slate-700 shadow-lg">
                <span id="sub-team-dot" class="w-2.5 h-2.5 rounded-full inline-block"></span>
                <span id="sub-team-title">CAMBIO EN EQUIPO</span>
                <span id="sub-minute-badge" class="px-1.5 py-0.5 rounded bg-black/60 text-amber-400 font-mono font-bold">65'</span>
              </div>

              <!-- Lista de parejas de sustituciones -->
              <div id="sub-players-container" class="w-full max-w-[320px] space-y-1.5 my-1">
              </div>

              <div class="mt-2.5 flex items-center justify-center gap-3">
                <span id="sub-remaining-text" class="text-[9px] text-slate-400 font-semibold">4 cambios restantes</span>
                <button id="btn-sub-skip" class="text-[9px] bg-slate-800/90 hover:bg-slate-700 text-sky-400 px-2.5 py-1 rounded-lg border border-slate-700 font-bold active:scale-95 transition">
                  Continuar ▶
                </button>
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
                <span class="w-2.5 h-2.5 rounded-full inline-block" style="background-color: ${matchKits.away.jersey};"></span>
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
                <div id="bar-poss-a" class="h-full transition-all duration-300" style="width: 50%; background-color: ${matchKits.away.jersey};"></div>
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
          <!-- Barra de Gritos desde la Banda (Mejora 2) y Estado de Charla / Orden Activa -->
          <div class="bg-slate-950/90 border border-slate-800 rounded-xl p-2 flex flex-col gap-1.5">
            <div class="flex items-center justify-between px-0.5">
              <span class="text-[9px] font-black uppercase tracking-wider text-amber-400 flex items-center gap-1">
                <span>📣 Gritos desde la Banda</span>
              </span>
              <span id="active-boost-badge" class="text-[9px] font-bold px-2 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-slate-400 truncate max-w-[195px]">
                Sin orden activa
              </span>
            </div>
            <div id="shouts-bar" class="grid grid-cols-4 gap-1.5">
              <button class="btn-touchline-shout py-1.5 px-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-[9px] font-extrabold text-slate-200 flex flex-col items-center justify-center gap-0.5 active:scale-95 transition" data-shout="CROSS_BOX" title="Mayor frecuencia de centros al área (+remate aéreo)">
                <span class="text-xs leading-none">📢</span>
                <span class="leading-tight truncate w-full text-center">Colgad balones</span>
              </button>
              <button class="btn-touchline-shout py-1.5 px-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-[9px] font-extrabold text-slate-200 flex flex-col items-center justify-center gap-0.5 active:scale-95 transition" data-shout="SHOOT_ON_SIGHT" title="Probar disparo desde cualquier posición (+tiros)">
                <span class="text-xs leading-none">🚀</span>
                <span class="leading-tight truncate w-full text-center">Tirad a puerta</span>
              </button>
              <button class="btn-touchline-shout py-1.5 px-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-[9px] font-extrabold text-slate-200 flex flex-col items-center justify-center gap-0.5 active:scale-95 transition" data-shout="EASY_TACKLES" title="Frenar agresividad defensiva (-faltas y -tarjetas)">
                <span class="text-xs leading-none">🛡️</span>
                <span class="leading-tight truncate w-full text-center">Cuidado entradas</span>
              </button>
              <button class="btn-touchline-shout py-1.5 px-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-[9px] font-extrabold text-slate-200 flex flex-col items-center justify-center gap-0.5 active:scale-95 transition" data-shout="WASTE_TIME" title="Posesión larga, enfriar el partido y ahorrar piernas">
                <span class="text-xs leading-none">⏱️</span>
                <span class="leading-tight truncate w-full text-center">Dormid el balón</span>
              </button>
            </div>
            ${isUserHome ? `
              <div class="mt-1 pt-1.5 border-t border-slate-800/80 flex items-center gap-1.5">
                <button id="btn-rally-crowd" class="flex-1 py-1.5 px-2 rounded-xl bg-slate-900 border border-slate-700/80 text-[9.5px] font-extrabold text-slate-300 flex items-center justify-between gap-1.5 active:scale-95 transition disabled:opacity-40 disabled:cursor-not-allowed shadow-sm" title="Pide al estadio que empuje al equipo para remontar (Disponible si empatas o pierdes de local tras jugada clave o cada 15 min)">
                  <div class="flex items-center gap-1.5 min-w-0">
                    <span class="text-sm">🏟️</span>
                    <span id="btn-rally-crowd-text" class="truncate font-bold">¡Pedir aliento a la afición!</span>
                  </div>
                  <span id="btn-rally-crowd-badge" class="px-1.5 py-0.5 rounded-full bg-slate-800 text-[8px] font-black uppercase text-slate-400 flex-shrink-0">
                    +4% Empuje
                  </span>
                </button>
              </div>
            ` : ''}
          </div>

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
              <span>📋 TÁCTICA Y CAMBIOS</span>
              <span id="subs-count-badge" class="px-2 py-0.5 rounded-full bg-black/40 text-[10px] font-mono">5 rest. (3 vent.)</span>
            </button>

            <button id="btn-cycle-mentality" class="py-3 px-3 bg-slate-800 hover:bg-slate-700 active:scale-98 text-sky-400 font-bold text-xs rounded-xl border border-slate-700 whitespace-nowrap">
              🎯 <span id="mentality-label">${MENTALITIES.find(m => m.id === gameState.userTactics.mentality)?.label || 'Equilibrada'}</span>
            </button>
          </div>
        </footer>

        <!-- Modal de Alerta Médica por Lesión en Vivo -->
        <div id="modal-injury-alert" class="fixed inset-0 bg-black/85 backdrop-blur-md z-50 hidden flex flex-col justify-center p-4">
          <div class="bg-slate-900 border-2 border-rose-500/80 rounded-3xl p-5 max-w-sm mx-auto w-full shadow-2xl text-center">
            <div class="w-14 h-14 mx-auto rounded-full bg-rose-500/20 border-2 border-rose-500/60 flex items-center justify-center text-3xl mb-3 animate-bounce">
              🚑
            </div>
            <span class="inline-block px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 font-extrabold text-[11px] tracking-wider uppercase mb-2 border border-rose-500/40">
              PARTE MÉDICO EN DIRECTO
            </span>
            <h3 id="injury-modal-title" class="text-base font-black text-white leading-tight mb-1">¡Lesión en el terreno de juego!</h3>
            <p id="injury-modal-desc" class="text-xs text-rose-300 font-medium mb-3"></p>
            <div id="injury-modal-detail" class="bg-slate-950 p-3 rounded-2xl border border-slate-800 text-left text-xs mb-4 space-y-1"></div>
            <button id="btn-injury-sub-now" class="w-full py-3 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 text-white font-extrabold text-sm rounded-xl shadow-lg shadow-rose-600/30 transition active:scale-98 flex items-center justify-center gap-2">
              <span>🔄 Realizar cambio por lesión</span>
            </button>
          </div>
        </div>

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

        <!-- Modal de Descanso (Pausa en el min 45 para cambios y táctica) -->
        <div id="modal-halftime" class="fixed inset-0 bg-black/85 backdrop-blur-md z-50 hidden flex flex-col justify-center p-4">
          <div class="bg-slate-900 border-2 border-sky-500/50 rounded-3xl p-5 max-w-sm mx-auto w-full shadow-2xl text-center">
            <div id="ht-modal-badge" class="inline-block px-3 py-1 rounded-full bg-sky-500/20 text-sky-400 font-extrabold text-[11px] tracking-wider uppercase mb-2 border border-sky-400/40">
              ⏸️ DESCANSO (45')
            </div>
            
            <div class="flex items-center justify-between my-3 px-2">
              <div class="w-11 h-11 rounded-xl flex items-center justify-center font-black text-sm shadow border border-slate-700" style="background: linear-gradient(135deg, ${homeTeam.primaryColor}, ${homeTeam.secondaryColor}); color: ${homeTeam.textColor};">
                ${homeTeam.shortName}
              </div>
              <div class="text-3xl font-black font-mono tracking-widest text-white">
                <span id="ht-home-score">0</span>
                <span class="text-slate-600 text-xl">-</span>
                <span id="ht-away-score">0</span>
              </div>
              <div class="w-11 h-11 rounded-xl flex items-center justify-center font-black text-sm shadow border border-slate-700" style="background: linear-gradient(135deg, ${matchKits.away.jersey}, ${matchKits.away.shorts}); color: ${matchKits.away.number};">
                ${awayTeam.shortName}
              </div>
            </div>

            <!-- Resumen Estadístico del 1er Tiempo -->
            <div class="bg-slate-950/70 rounded-2xl p-3 border border-slate-800 text-xs my-2.5 space-y-2">
              <div>
                <div class="flex justify-between text-[10px] font-bold text-slate-400 mb-1">
                  <span><span id="ht-stat-poss-h">50</span>% Posesión</span>
                  <span><span id="ht-stat-poss-a">50</span>%</span>
                </div>
                <div class="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden flex">
                  <div id="ht-bar-poss-h" class="h-full" style="width: 50%; background-color: ${homeTeam.primaryColor};"></div>
                  <div id="ht-bar-poss-a" class="h-full" style="width: 50%; background-color: ${matchKits.away.jersey};"></div>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-2 text-center text-[11px] pt-1">
                <div class="p-1 rounded-lg bg-slate-900 border border-slate-800">
                  <span class="text-slate-400 text-[9px] block uppercase">Tiros</span>
                  <b class="text-white"><span id="ht-shots-h">0</span> - <span id="ht-shots-a">0</span></b>
                </div>
                <div class="p-1 rounded-lg bg-slate-900 border border-slate-800">
                  <span class="text-slate-400 text-[9px] block uppercase">A Puerta</span>
                  <b class="text-emerald-400"><span id="ht-ontarget-h">0</span> - <span id="ht-ontarget-a">0</span></b>
                </div>
              </div>
              <div id="ht-mvp-preview" class="pt-1 border-t border-slate-800/80 text-[10px] text-amber-300 font-bold flex items-center justify-between px-1"></div>
            </div>

            <!-- Charla de Vestuario en el Descanso (Mejora 1) -->
            <div class="bg-slate-950/90 rounded-2xl p-2.5 border border-amber-500/30 text-left my-2.5">
              <div class="flex items-center justify-between mb-1.5">
                <span class="text-[10px] font-black uppercase tracking-wider text-amber-400">🗣️ Charla de Descanso</span>
                <span class="text-[9px] text-slate-400 font-semibold">Efecto 45' - 68'</span>
              </div>
              <div class="grid grid-cols-2 gap-1.5">
                <button class="btn-ht-talk p-2 rounded-xl border border-slate-800 bg-slate-900 hover:border-rose-500/50 text-left transition active:scale-95" data-talk="aggressive">
                  <div class="text-[10px] font-extrabold text-rose-400">😡 Bronca / Exigir</div>
                  <div class="text-[8.5px] text-slate-400 leading-tight mt-0.5">Ideal si vas perdiendo o empatando</div>
                </button>
                <button class="btn-ht-talk p-2 rounded-xl border border-slate-800 bg-slate-900 hover:border-amber-500/50 text-left transition active:scale-95" data-talk="encourage">
                  <div class="text-[10px] font-extrabold text-amber-300">🔥 ¡Creer en Ganar!</div>
                  <div class="text-[8.5px] text-slate-400 leading-tight mt-0.5">Empuje ofensivo y moral al ataque</div>
                </button>
                <button class="btn-ht-talk p-2 rounded-xl border border-slate-800 bg-slate-900 hover:border-emerald-500/50 text-left transition active:scale-95" data-talk="praise">
                  <div class="text-[10px] font-extrabold text-emerald-400">👏 Elogiar Trabajo</div>
                  <div class="text-[8.5px] text-slate-400 leading-tight mt-0.5">Refuerza notas si vas ganando</div>
                </button>
                <button class="btn-ht-talk p-2 rounded-xl border border-slate-800 bg-slate-900 hover:border-sky-500/50 text-left transition active:scale-95" data-talk="calm_control">
                  <div class="text-[10px] font-extrabold text-sky-300">🧊 Cerrar Espacios</div>
                  <div class="text-[8.5px] text-slate-400 leading-tight mt-0.5">+Solidez atrás y -tarjetas</div>
                </button>
              </div>
              <div id="ht-talk-feedback" class="hidden mt-1.5 text-[9.5px] font-bold text-emerald-300 bg-emerald-950/50 border border-emerald-500/30 rounded-lg px-2 py-1 text-center"></div>
            </div>

            <div class="space-y-2 mt-3">
              <button id="btn-ht-subs" class="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 text-white font-extrabold text-xs rounded-xl shadow-lg active:scale-98 transition flex items-center justify-center gap-2">
                <span>🔄 HACER CAMBIOS O AJUSTES</span>
                <span id="ht-subs-badge" class="px-2 py-0.5 rounded-full bg-black/40 text-[10px] font-mono">5 rest.</span>
              </button>

              <button id="btn-ht-continue" class="w-full py-3.5 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 text-white font-extrabold text-xs rounded-xl shadow-lg active:scale-98 transition flex items-center justify-center gap-1.5">
                <span>▶ REANUDAR 2ª PARTE</span>
                <span>➔</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Modal Táctico de Balón Parado (Pizarra de Córners y Faltas Peligrosas) -->
        <div id="modal-setpiece" class="fixed inset-0 bg-slate-950/95 backdrop-blur-md z-50 hidden flex flex-col justify-between overflow-y-auto">
          <div class="max-w-md w-full mx-auto flex flex-col min-h-screen text-white select-none pb-4">
            <!-- Header Balón Parado -->
            <header class="bg-slate-900 border-b border-slate-800 px-4 py-3 sticky top-0 z-20 shadow-md flex items-center justify-between">
              <div>
                <span id="setpiece-badge-type" class="text-[10px] uppercase font-black text-amber-400 bg-amber-400/10 border border-amber-400/30 px-2 py-0.5 rounded-full">🚩 CÓRNER A FAVOR</span>
                <h2 id="setpiece-title" class="text-sm font-extrabold text-white leading-tight mt-0.5">Pizarra de Balón Parado</h2>
              </div>
              <button id="btn-setpiece-auto" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-[10px] font-bold text-sky-400 active:scale-95 transition">
                ⚡ Auto
              </button>
            </header>

            <!-- Selector de Lanzador y Estrategia -->
            <div class="p-3 bg-slate-900/60 border-b border-slate-800 space-y-2">
              <div class="flex items-center justify-between gap-2">
                <span class="text-[10px] uppercase font-bold text-slate-400 flex-shrink-0">🎯 Lanzador:</span>
                <select id="setpiece-taker-select" class="flex-1 bg-slate-800 border border-slate-700 text-white font-bold text-xs rounded-xl px-2 py-1.5 outline-none truncate">
                </select>
              </div>

              <div>
                <span class="text-[10px] uppercase font-bold text-slate-400 block mb-1">📐 Tipo de Envío / Remate:</span>
                <div id="setpiece-strategy-chips" class="grid grid-cols-2 gap-1.5 text-xs">
                </div>
              </div>
            </div>

            <!-- Terreno de Juego: Pizarra del Área y Zonas de Remate -->
            <div class="p-3 flex-1 flex flex-col justify-center">
              <div class="relative w-full aspect-[4/3] max-w-[340px] mx-auto bg-gradient-to-b from-emerald-800 via-emerald-700 to-emerald-900 rounded-2xl border-2 border-emerald-500/40 shadow-inner overflow-hidden p-2">
                <!-- Portería y líneas del área -->
                <div class="absolute inset-2 border-2 border-white/30 rounded-xl pointer-events-none"></div>
                <div class="absolute top-2 left-1/2 -translate-x-1/2 w-44 h-24 border-b-2 border-x-2 border-white/30 pointer-events-none"></div>
                <div class="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-10 border-b-2 border-x-2 border-white/40 pointer-events-none"></div>
                <!-- Punto de penalti -->
                <div class="absolute top-20 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white pointer-events-none"></div>
                <!-- Portería blanca -->
                <div class="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-2 bg-white/90 rounded-b shadow pointer-events-none"></div>

                <!-- Punto de balón / saque -->
                <div id="setpiece-ball-spot" class="absolute w-5 h-5 rounded-full bg-amber-400 border-2 border-white shadow-lg animate-pulse flex items-center justify-center text-[10px] z-20">
                  ⚽
                </div>

                <!-- Zonas interactivas de colocación de rematadores -->
                <div id="setpiece-interactive-zones" class="absolute inset-0"></div>
              </div>

              <!-- Indicación de asignación -->
              <div class="text-center mt-2 px-2">
                <p id="setpiece-hint-text" class="text-[11px] text-slate-400">
                  💡 Toca un futbolista y luego una zona del área para ubicarlo en la jugada ensayada.
                </p>
              </div>
            </div>

            <!-- Fichas de futbolistas de campo para asignar -->
            <div class="px-3 mb-2">
              <div class="text-[10px] uppercase font-bold text-slate-400 mb-1.5 flex items-center justify-between">
                <span>🏃 Tus futbolistas en el área</span>
                <span class="text-slate-500 font-normal">Toca para seleccionar</span>
              </div>
              <div id="setpiece-players-pool" class="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar"></div>
            </div>

            <!-- Botones de Acción -->
            <footer class="px-3 flex gap-2">
              <button id="btn-setpiece-save-layout" class="py-3 px-3.5 bg-slate-800 hover:bg-slate-700 active:scale-95 text-sky-400 font-bold text-xs rounded-xl border border-sky-500/40 flex items-center justify-center gap-1.5 transition whitespace-nowrap shadow">
                <span>💾</span>
                <span>Guardar</span>
              </button>
              <button id="btn-setpiece-confirm" class="flex-1 py-3.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 active:scale-98 text-white font-extrabold text-xs rounded-xl shadow-xl shadow-emerald-500/25 transition flex items-center justify-center gap-2">
                <span>⚽ EJECUTAR JUGADA ENSAYADA</span>
                <span>➔</span>
              </button>
            </footer>
          </div>
        </div>

        <!-- Modal Táctico de Descanso y En Directo (Pizarra Oficial Completa) -->
        <div id="modal-halftime-tactics" class="fixed inset-0 bg-slate-950/95 backdrop-blur-md z-50 hidden flex flex-col justify-between overflow-y-auto">
          <div class="max-w-md w-full mx-auto flex flex-col min-h-screen text-white select-none pb-4">
            <!-- Header Táctico -->
            <header class="bg-slate-900 border-b border-slate-800 px-4 py-3 sticky top-0 z-20 shadow-md flex items-center justify-between">
              <div>
                <span id="tactics-modal-stage" class="text-[10px] uppercase font-bold text-amber-400">Pizarra Táctica</span>
                <h2 id="tactics-modal-title" class="text-sm font-extrabold text-white leading-tight">Pizarra Táctica y Cambios</h2>
              </div>
              <div id="ht-tactic-remaining-badge" class="px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono font-bold text-amber-400">
                5 cambios rest.
              </div>
            </header>

            <!-- Controles de Formación y Mentalidad -->
            <div class="p-3 bg-slate-900/60 border-b border-slate-800 space-y-2">
              <div class="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
                <span class="text-[10px] uppercase font-bold text-slate-500 mr-1">Sistema:</span>
                <div id="ht-formation-buttons" class="flex gap-1.5 overflow-x-auto no-scrollbar"></div>
              </div>
              <div class="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
                <span class="text-[10px] uppercase font-bold text-slate-500 mr-1">Mentalidad:</span>
                <div id="ht-mentality-buttons" class="flex gap-1.5 overflow-x-auto no-scrollbar"></div>
              </div>
            </div>

            <!-- Pestañas del Modal: Campo y Cambios vs Estilos por Estados -->
            <div class="px-3 pt-2 pb-1 bg-slate-900/60 border-b border-slate-800 flex gap-2">
              <button id="btn-ht-tab-pitch" type="button" class="flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 bg-sky-500 text-white shadow-md border border-sky-400">
                <span>⚽ Campo y Funciones</span>
              </button>
              <button id="btn-ht-tab-style" type="button" class="flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 bg-slate-900 text-slate-400 hover:text-white border border-slate-800">
                <span>🧠 Estilos e Instrucciones</span>
                <span id="ht-style-badge" class="px-1.5 py-0.2 rounded text-[10px] font-extrabold bg-slate-800 text-amber-400"></span>
              </button>
            </div>

            <!-- Contenedor del Campo y Cambios -->
            <div id="ht-pitch-wrapper" class="flex-1 flex flex-col justify-between">
              <!-- Terreno de Juego Táctico Interactivo -->
              <div class="p-3 flex-1 flex flex-col justify-center">
                <div id="ht-pitch-container" class="relative w-full aspect-[3/4] max-w-[340px] mx-auto bg-gradient-to-b from-emerald-800 via-emerald-700 to-emerald-900 rounded-2xl border-2 border-emerald-500/40 shadow-inner overflow-hidden p-2 select-none touch-pan-y">
                  <div class="absolute inset-2 border-2 border-white/30 rounded-xl pointer-events-none"></div>
                  <div class="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-12 border-b-2 border-x-2 border-white/30 pointer-events-none"></div>
                  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-white/30 rounded-full pointer-events-none"></div>
                  <div class="absolute top-1/2 left-2 right-2 h-0.5 bg-white/30 -translate-y-1/2 pointer-events-none"></div>
                  <div class="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-12 border-t-2 border-x-2 border-white/30 pointer-events-none"></div>

                  <!-- Fichas de los 11 titulares -->
                  <div id="ht-pitch-slots" class="absolute inset-0"></div>
                </div>
              </div>

              <!-- Indicación de Intercambio -->
              <div class="px-4 text-center my-1">
                <p id="ht-instruction-text" class="text-[11px] text-slate-400">
                  💡 Toca un futbolista para modificar su función táctica, puesto o sustituirlo por un suplente.
                </p>
                <div id="ht-pending-subs-text" class="text-[10px] text-emerald-400 font-bold mt-0.5 hidden">
                  🔄 0 cambios seleccionados
                </div>
              </div>

              <!-- Panel de Asignación de Función del Futbolista Seleccionado -->
              <div id="ht-role-assignment-panel" class="px-3"></div>

              <!-- Botón para ver y ajustar todas las funciones del 11 -->
              <div class="px-4 text-center my-1.5 flex items-center justify-center gap-2">
                <button id="btn-ht-toggle-roles" type="button" class="text-xs bg-slate-900 hover:bg-slate-800 text-sky-400 border border-slate-800 hover:border-sky-500/40 px-3 py-1.5 rounded-xl font-bold transition flex items-center gap-1.5 shadow-sm">
                  <span>⚙️</span>
                  <span id="ht-toggle-roles-text">Ver funciones de los 11</span>
                </button>
              </div>

              <!-- Lista Desplegable de Todas las Funciones del 11 -->
              <div id="ht-all-roles-container" class="px-3 mb-2 hidden"></div>

              <!-- Lista del Banquillo (Suplentes) -->
              <div class="px-3 mb-3">
                <div class="text-[10px] uppercase font-bold text-slate-400 mb-1.5 flex items-center justify-between">
                  <span>🪑 Suplentes disponibles</span>
                  <span class="text-slate-500 font-normal">Toca para poner de titular</span>
                </div>
                <div id="ht-bench-scroll" class="flex gap-1.5 overflow-x-auto pb-2 no-scrollbar"></div>
              </div>
            </div>

            <!-- Contenedor de Estilos e Instrucciones por Estados -->
            <div id="ht-style-wrapper" class="flex-1 hidden"></div>

            <!-- Botones de Acción al Pie -->
            <footer class="px-3 flex gap-2">
              <button id="btn-ht-tactic-cancel" class="py-3.5 px-4 bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-300 font-bold text-xs rounded-xl border border-slate-700 transition">
                ✕ Descartar
              </button>
              <button id="btn-ht-tactic-confirm" class="flex-1 py-3.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 active:scale-98 text-white font-extrabold text-xs rounded-xl shadow-xl shadow-emerald-500/25 transition flex items-center justify-center gap-2">
                <span id="tactics-modal-btn-confirm-text">⚽ GUARDAR AJUSTES Y VOLVER</span>
                <span>➔</span>
              </button>
            </footer>
          </div>
        </div>

        <!-- Modal Final de Partido -->
        <div id="modal-match-end" class="fixed inset-0 bg-black/90 backdrop-blur-md z-50 hidden flex flex-col justify-center p-4 overflow-y-auto">
          <div class="bg-slate-900 border border-slate-700 rounded-3xl p-5 max-w-sm mx-auto w-full shadow-2xl text-center my-auto">
            <span class="text-xs uppercase font-extrabold tracking-widest text-slate-400">FINAL DEL PARTIDO</span>
            <div class="my-2.5 flex items-center justify-center gap-4">
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
            <!-- Tarjeta MVP del Partido y Notas (Mejora 5) -->
            <div id="final-mvp-card" class="my-2.5"></div>
            <!-- Estadísticas del Partido -->
            <div id="final-match-stats" class="my-2.5 bg-slate-950/70 p-2.5 rounded-2xl border border-slate-800 text-left"></div>
            <div id="final-ratings-summary" class="my-2 text-left"></div>
            <div class="my-2 py-2 border-y border-slate-800 text-left text-xs max-h-24 overflow-y-auto" id="final-scorers-list"></div>
            <div class="my-2.5 text-left">
              <div class="text-[10px] uppercase font-bold text-slate-400 mb-1">Otros partidos de la Jornada ${gameState.currentRound}:</div>
              <div class="space-y-1 text-[11px] max-h-28 overflow-y-auto bg-slate-950/60 p-2 rounded-xl border border-slate-800" id="other-results-list"></div>
            </div>
            <button id="btn-finish-match-continue" class="w-full py-3.5 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 text-white font-extrabold text-sm rounded-xl shadow-lg active:scale-98 transition">
              CONTINUAR AL HUB ➔
            </button>
          </div>
        </div>
      </div>
    `;

    // Canvas Setup (WebGL 3D Three.js primario con fallback 2D)
    const canvas = container.querySelector("#match-canvas");
    let ctx = null;

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

    // ==========================================
    // MOTOR GRÁFICO 3D ESTILO FOOTBALL MANAGER 26 (UNITY ENGINE)
    // ==========================================
    let cameraMode = "broadcast"; // "broadcast" (TV Tele) | "tactical" (Elevada) | "goal" (Detrás de Portería)
    let cameraPitchX = 50;
    let cameraPitchY = 50;
    let cameraZoom = 1.0;
    let ballRotation = 0;
    let ballTrail = [];
    let netRippleH = 0;
    let netRippleA = 0;

    function getKitColors() {
      return matchKits;
    }

    const kits = matchKits;

    // ==========================================
    // ESTADO DE JUGADAS CLAVE Y REPETICIONES
    // ==========================================
    const replayBuffer = [];
    let isReplaying = false;
    let replayFrames = [];
    let replayFrameIndex = 0;
    let isKickoffInProgress = false;
    let currentHighlightStartFrame = null;
    let currentHighlightData = null;
    let tacticalToastTimeout = null;
    let lastCarrierPlayerId = null;
    const matchUiTimeouts = [];
    const registerUiTimeout = (fn, ms) => {
      const id = setTimeout(fn, ms);
      matchUiTimeouts.push(id);
      return id;
    };
    const clearAllMatchUiTimeouts = () => {
      while (matchUiTimeouts.length > 0) {
        clearTimeout(matchUiTimeouts.pop());
      }
      if (subChyronTimeout) {
        clearTimeout(subChyronTimeout);
        subChyronTimeout = null;
      }
      if (tacticalToastTimeout) {
        clearTimeout(tacticalToastTimeout);
        tacticalToastTimeout = null;
      }
    };

    function updateFMCommentary(text, badge = "MATCH ENGINE", isHighlight = false) {
      const ticker = container.querySelector("#fm-broadcast-ticker");
      const badgeEl = container.querySelector("#fm-ticker-badge-text");
      const textEl = container.querySelector("#fm-ticker-text");
      if (!ticker || !textEl) return;
      textEl.textContent = text;
      if (badgeEl && badge) badgeEl.textContent = badge;
      if (isHighlight) {
        ticker.className = "absolute bottom-2.5 left-3 right-3 flex items-center bg-[#781827]/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-amber-400/90 shadow-2xl z-20 transition-all duration-300 ring-2 ring-amber-400/60 pointer-events-none";
        setTimeout(() => {
          if (ticker) ticker.className = "absolute bottom-2.5 left-3 right-3 flex items-center bg-[#54121d]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-rose-500/40 shadow-2xl z-20 transition-all duration-300 pointer-events-none";
        }, 4000);
      }
    }

    function handleHighlightStart(hlData) {
      currentHighlightStartFrame = Math.max(0, replayBuffer.length - 12);
      currentHighlightData = { ...hlData };

      const atkTeam = hlData.atkTeam || (hlData.attackingSide === "home" ? homeTeam : awayTeam) || { name: "Ataque", shortName: "ATA" };
      const defTeam = hlData.defTeam || (hlData.attackingSide === "home" ? awayTeam : homeTeam) || { name: "Defensa", shortName: "DEF" };
      const atkShort = (atkTeam.shortName || atkTeam.name || "ATA").toUpperCase();
      const atkName = atkTeam.name || atkTeam.shortName || "Ataque";

      const hud = container.querySelector("#highlight-action-hud");
      const hudTitle = container.querySelector("#hl-hud-title");
      const hudSub = container.querySelector("#hl-hud-subtitle");
      if (hud && hudTitle && hudSub) {
        hudTitle.textContent = `🎥 ENFOQUE DE ACCIÓN · ${atkShort}`;
        hudSub.textContent = hlData.tacticalNote || hlData.commentary || "Apertura y construcción de jugada";
        hud.classList.remove("opacity-0", "-translate-y-2");
        hud.classList.add("opacity-100", "translate-y-0");
      }

      updateFMCommentary(hlData.tacticalNote || hlData.commentary || `¡Jugada de peligro de ${atkName}!`, atkShort, true);
      showMatchAlert({ text: `⚡ ¡Jugada de peligro de ${atkName}!` });
    }

    function handleHighlightPhase(phaseData) {
      if (!currentHighlightData) currentHighlightData = {};
      Object.assign(currentHighlightData, phaseData);

      const hudSub = container.querySelector("#hl-hud-subtitle");
      if (hudSub && phaseData.tacticalNote) {
        hudSub.textContent = phaseData.tacticalNote;
      }

      if (phaseData.tacticalNote) {
        const badgeLabel = phaseData.phaseLabel || (phaseData.phase === "BUILDUP" ? "CONSTRUCCIÓN" : phaseData.phase === "PASS" ? "ASISTENCIA" : "EN VIVO");
        updateFMCommentary(phaseData.tacticalNote, badgeLabel, true);
      }
    }

    function handleHighlightEnd(endData = null) {
      const hud = container.querySelector("#highlight-action-hud");
      if (hud) {
        hud.classList.remove("opacity-100", "translate-y-0");
        hud.classList.add("opacity-0", "-translate-y-2");
      }

      if (endData && endData.tacticalAnalysis) {
        showTacticalToast(endData.tacticalAnalysis, endData.outcome);
      }
      currentHighlightData = null;

      // Si el usuario había pedido pausa durante la visualización de la jugada clave
      // y la jugada no termina en parada a córner ni gol (que tienen su propia secuencia posterior):
      if (simulator.pauseRequested && endData?.outcome !== "SAVE" && endData?.outcome !== "GOAL") {
        simulator.pauseRequested = false;
        simulator.pause();
        const iconPP = container.querySelector("#play-pause-icon");
        const textPP = container.querySelector("#play-pause-text");
        if (iconPP) iconPP.textContent = "▶";
        if (textPP) textPP.textContent = "Reanudar";
        showMatchAlert({ text: "⏸ Partido en pausa tras la jugada clave" });
      }
    }

    function showTacticalToast(message, outcome = "NEUTRAL") {
      const toast = container.querySelector("#tactical-analysis-toast");
      const icon = container.querySelector("#tactical-analysis-icon");
      const text = container.querySelector("#tactical-analysis-text");
      if (text) text.textContent = message;
      if (icon) {
        icon.textContent = outcome === "GOAL" ? "⚽" : outcome === "SAVE" ? "🧤" : outcome === "BLOCK" ? "🛡️" : "📊";
      }

      updateFMCommentary(message, "ANÁLISIS TÁCTICO", true);

      if (toast && !toast.classList.contains("hidden")) {
        toast.classList.remove("opacity-0", "translate-y-3", "pointer-events-none");
        toast.classList.add("opacity-100", "translate-y-0");

        if (tacticalToastTimeout) clearTimeout(tacticalToastTimeout);
        tacticalToastTimeout = setTimeout(() => {
          toast.classList.remove("opacity-100", "translate-y-0");
          toast.classList.add("opacity-0", "translate-y-3", "pointer-events-none");
        }, 4500);
      }
    }

    let currentAssistantAdvice = null;
    let assistantFeedbackTimeout = null;

    function handleAssistantAdvice(advice) {
      currentAssistantAdvice = advice;
      const card = container.querySelector("#live-assistant-card");
      if (!card) return;

      // Pausar automáticamente la simulación para permitir decidir sin prisa ni tapar el partido
      if (simulator.isRunning) {
        simulator.pause();
      }
      const iconPP = container.querySelector("#play-pause-icon");
      const textPP = container.querySelector("#play-pause-text");
      if (iconPP) iconPP.textContent = "▶";
      if (textPP) textPP.textContent = "Reanudar";

      const coachNameEl = card.querySelector("#ast-coach-name");
      const badgeEl = card.querySelector("#ast-urgency-badge");
      const diagEl = card.querySelector("#ast-diagnosis");
      const recEl = card.querySelector("#ast-recommendation");

      if (coachNameEl) coachNameEl.textContent = simulator.assistantCoachName || "Segundo Entrenador";
      if (badgeEl) {
        badgeEl.textContent = advice.urgency || "CONSEJO TÁCTICO";
        if (advice.urgency === "URGENTE" || advice.urgency === "RIESGO DE EXPULSIÓN") {
          badgeEl.className = "px-1.5 py-0.5 rounded bg-red-500/20 text-red-400 text-[8.5px] font-extrabold uppercase tracking-wider border border-red-500/40 animate-pulse";
        } else if (advice.urgency === "ALERTA FÍSICA" || advice.urgency === "DESAJUSTE DEFENSIVO") {
          badgeEl.className = "px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 text-[8.5px] font-extrabold uppercase tracking-wider border border-amber-500/40";
        } else {
          badgeEl.className = "px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-400 text-[8.5px] font-extrabold uppercase tracking-wider border border-sky-500/40";
        }
      }
      if (diagEl) diagEl.textContent = advice.diagnosis;
      if (recEl) recEl.textContent = advice.recommendation;

      card.classList.remove("opacity-0", "translate-y-4", "pointer-events-none");
      card.classList.add("opacity-100", "translate-y-0", "pointer-events-auto");

      updateFMCommentary(`💡 ${simulator.assistantCoachName || 'Segundo Entrenador'} pausa para ajuste: ${advice.title}`, "CUERPO TÉCNICO", true);
    }

    function hideAssistantAdviceCard(autoResume = false) {
      const card = container.querySelector("#live-assistant-card");
      if (card) {
        card.classList.remove("opacity-100", "translate-y-0", "pointer-events-auto");
        card.classList.add("opacity-0", "translate-y-4", "pointer-events-none");
      }
      currentAssistantAdvice = null;

      // Reanudar automáticamente la simulación si no se había pedido pausa manual y el partido sigue en juego
      if (autoResume && !simulator.isFinished && !simulator.isHalfTime && !simulator.pauseRequested) {
        if (!simulator.isRunning) {
          simulator.start();
        }
        const iconPP = container.querySelector("#play-pause-icon");
        const textPP = container.querySelector("#play-pause-text");
        if (iconPP) iconPP.textContent = "⏸";
        if (textPP) textPP.textContent = "Pausar";
      }
    }

    function handleAssistantFeedback(fb) {
      const fbCard = container.querySelector("#live-assistant-feedback");
      if (!fbCard) return;

      const iconEl = fbCard.querySelector("#ast-feedback-icon");
      const minEl = fbCard.querySelector("#ast-feedback-minute");
      const textEl = fbCard.querySelector("#ast-feedback-text");

      if (iconEl) {
        iconEl.textContent = fb.success ? "✅" : "⚠️";
        iconEl.className = `w-8 h-8 rounded-xl flex items-center justify-center text-lg flex-shrink-0 ${fb.success ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'}`;
      }
      if (minEl) minEl.textContent = `${fb.minute}'`;
      if (textEl) textEl.textContent = fb.text;

      fbCard.className = `absolute top-12 left-1/2 -translate-x-1/2 max-w-[360px] sm:max-w-[420px] w-full bg-slate-950/95 backdrop-blur-md border ${fb.success ? 'border-emerald-500/70 shadow-emerald-950/40' : 'border-amber-500/70 shadow-amber-950/40'} rounded-2xl p-2.5 shadow-2xl z-30 transition-all duration-300 opacity-100 translate-y-0 pointer-events-auto flex items-center gap-2.5`;

      updateFMCommentary(fb.text, fb.success ? "INFORME +" : "INFORME -", true);

      if (assistantFeedbackTimeout) clearTimeout(assistantFeedbackTimeout);
      assistantFeedbackTimeout = setTimeout(() => {
        fbCard.classList.remove("opacity-100", "translate-y-0", "pointer-events-auto");
        fbCard.classList.add("opacity-0", "-translate-y-4", "pointer-events-none");
      }, 6500);
    }

    function handleGoalSequence(goalData) {
      handleHighlightEnd();
      if (goalData.concedingSide === "home") {
        netRippleH = 1.0;
      } else {
        netRippleA = 1.0;
      }

      // Pausar la simulación durante la celebración del gol (sin repetición posterior)
      simulator.pause();

      const elGoalOverlay = container.querySelector("#goal-cinematic");
      const elScorer = container.querySelector("#goal-scorer-name");
      const elScore = container.querySelector("#goal-score-display");
      const elMinute = container.querySelector("#goal-minute-display");

      if (elScorer) elScorer.textContent = `${goalData.shooter?.name || goalData.scorer || "Jugador"}`;
      if (elScore) elScore.textContent = goalData.score || `${goalData.homeScore ?? 0} - ${goalData.awayScore ?? 0}`;
      if (elMinute) elMinute.textContent = `Minuto ${goalData.minute}' · ${goalData.atkTeam?.name || ""}`;

      if (elGoalOverlay) {
        elGoalOverlay.classList.remove("opacity-0", "pointer-events-none", "scale-95");
        elGoalOverlay.classList.add("opacity-100", "scale-100");
      }

      currentHighlightStartFrame = null;

      let goalDismissed = false;
      let goalTimer = null;
      const finishGoalCelebration = () => {
        if (goalDismissed) return;
        goalDismissed = true;
        if (goalTimer) { clearTimeout(goalTimer); goalTimer = null; }
        if (elGoalOverlay) {
          elGoalOverlay.classList.remove("opacity-100", "scale-100");
          elGoalOverlay.classList.add("opacity-0", "pointer-events-none", "scale-95");
          elGoalOverlay.onclick = null;
        }
        startKickoffSequence(goalData.concedingSide);
      };

      if (elGoalOverlay) {
        elGoalOverlay.classList.remove("pointer-events-none");
        elGoalOverlay.onclick = finishGoalCelebration;
      }
      goalTimer = registerUiTimeout(finishGoalCelebration, goalData.isSkipped ? 1100 : 2000);
    }

    function startKickoffSequence(concedingSide) {
      if (simulator.isFinished) return;
      isKickoffInProgress = true;
      const kickoffBadge = container.querySelector("#kickoff-badge");
      if (kickoffBadge) kickoffBadge.classList.remove("hidden");

      // Colocar jugadores y balón en posición de saque de centro (0,0,0)
      simulator.resetKickoff(concedingSide);

      // Pausa breve para mostrar a los 22 jugadores colocados antes de reanudar la física real
      registerUiTimeout(() => {
        if (kickoffBadge) kickoffBadge.classList.add("hidden");
        isKickoffInProgress = false;
        if (simulator.isFinished) return;

        if (simulator.minute >= simulator.halfTimeMinute && !simulator.halfTimeTriggered && !simulator.isSecondHalf) {
          simulator.halfTimeTriggered = true;
          simulator.isHalfTime = true;
          simulator.pause();
          simulator.onHalfTime(simulator.getState());
          return;
        }

        if (simulator.minute >= simulator.maxMinutes) {
          simulator.finish();
          return;
        }

        if (simulator.pauseRequested) {
          simulator.pauseRequested = false;
          simulator.pause();
          const iconPP = container.querySelector("#play-pause-icon");
          const textPP = container.querySelector("#play-pause-text");
          if (iconPP) iconPP.textContent = "▶";
          if (textPP) textPP.textContent = "Reanudar";
        } else {
          simulator.start();
        }
      }, 650);
    }

    function handleSubstitutionChyron(subData) {
      showSubstitutionChyron(subData, () => {
        if (!simulator.isFinished && !simulator.isHalfTime) {
          if (simulator.pauseRequested) {
            simulator.pauseRequested = false;
            simulator.pause();
            const iconPP = container.querySelector("#play-pause-icon");
            const textPP = container.querySelector("#play-pause-text");
            if (iconPP) iconPP.textContent = "▶";
            if (textPP) textPP.textContent = "Reanudar";
            return;
          }
          simulator.start();
          const iconPP = container.querySelector("#play-pause-icon");
          const textPP = container.querySelector("#play-pause-text");
          if (iconPP) iconPP.textContent = "⏸";
          if (textPP) textPP.textContent = "Pausar";
        }
      });
    }

    function showSubstitutionChyron(subData, onDone) {
      simulator.pause();
      const iconPP = container.querySelector("#play-pause-icon");
      const textPP = container.querySelector("#play-pause-text");
      if (iconPP) iconPP.textContent = "▶";
      if (textPP) textPP.textContent = "Reanudar";

      const subOverlay = container.querySelector("#sub-cinematic");
      const dot = container.querySelector("#sub-team-dot");
      const title = container.querySelector("#sub-team-title");
      const minBadge = container.querySelector("#sub-minute-badge");
      const containerPlayers = container.querySelector("#sub-players-container");
      const remText = container.querySelector("#sub-remaining-text");
      const btnSkip = container.querySelector("#btn-sub-skip");

      if (!subOverlay || !containerPlayers) {
        if (onDone) onDone();
        return;
      }

      const team = subData.team;
      const count = (subData.subs || []).length;
      if (dot) dot.style.backgroundColor = team.primaryColor || "#38bdf8";
      if (title) title.textContent = count > 1 ? `DOBLE CAMBIO EN ${team.name.toUpperCase()}` : `CAMBIO EN ${team.name.toUpperCase()}`;
      if (minBadge) minBadge.textContent = `${subData.minute || simulator.minute}'`;
      if (remText) {
        if (subData.isHalfTime || simulator.isHalfTime) {
          remText.textContent = `${subData.remaining} cambios restantes · Descanso (no gasta ventana)`;
        } else if (subData.windowsRemaining !== undefined) {
          remText.textContent = `${subData.remaining} cambios restantes · ${subData.windowsRemaining} ventanas restantes`;
        } else {
          remText.textContent = `${subData.remaining} cambios restantes`;
        }
      }

      containerPlayers.innerHTML = (subData.subs || []).map(pair => `
        <div class="flex items-center justify-between bg-slate-900/95 border border-slate-700/80 rounded-xl p-2 shadow-xl">
          <!-- SALE (ROJO) -->
          <div class="flex items-center gap-1.5 flex-1 min-w-0 text-left">
            <div class="w-6 h-6 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400 flex items-center justify-center font-black text-xs flex-shrink-0">
              🔻
            </div>
            <div class="truncate">
              <div class="text-[8px] uppercase font-bold text-red-400 leading-none">Sale</div>
              <div class="text-[11px] font-bold text-white truncate leading-tight">${pair.outPlayer.name}</div>
              <div class="text-[8px] text-slate-400 font-mono">${pair.outPlayer.pos} · ${pair.outPlayer.ovr}</div>
            </div>
          </div>

          <div class="px-2 text-slate-500 font-black text-xs flex-shrink-0">➔</div>

          <!-- ENTRA (VERDE) -->
          <div class="flex items-center gap-1.5 flex-1 min-w-0 text-right justify-end">
            <div class="truncate">
              <div class="text-[8px] uppercase font-bold text-emerald-400 leading-none">Entra</div>
              <div class="text-[11px] font-bold text-white truncate leading-tight">${pair.inPlayer.name}</div>
              <div class="text-[8px] text-slate-400 font-mono">${pair.inPlayer.pos} · ${pair.inPlayer.ovr}</div>
            </div>
            <div class="w-6 h-6 rounded-lg bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 flex items-center justify-center font-black text-xs flex-shrink-0">
              🔺
            </div>
          </div>
        </div>
      `).join('');

      // Mostrar overlay
      subOverlay.classList.remove("opacity-0", "pointer-events-none", "scale-95");
      subOverlay.classList.add("opacity-100", "scale-100");

      showMatchAlert({ text: `🔄 Cambio en ${team.name}` });

      const closeChyron = () => {
        if (subChyronTimeout) clearTimeout(subChyronTimeout);
        subChyronTimeout = null;
        subOverlay.classList.remove("opacity-100", "scale-100");
        subOverlay.classList.add("opacity-0", "pointer-events-none", "scale-95");
        if (onDone) onDone();
      };

      if (btnSkip) btnSkip.onclick = closeChyron;

      if (subChyronTimeout) clearTimeout(subChyronTimeout);
      subChyronTimeout = setTimeout(closeChyron, 3200);
    }

    // ==========================================
    // SIMULACIÓN GENERAL EN 2D (CAMPO CENITAL Y FICHAS CIRCULARES)
    // ==========================================
    function drawPitch2D(ctx, w, h) {
      const dpr = window.devicePixelRatio || 1;
      const padX = Math.round(w * 0.038);
      const padY = Math.round(h * 0.052);
      const pitchW = w - padX * 2;
      const pitchH = h - padY * 2;

      // Césped de fondo con bandas alternas de siega
      ctx.fillStyle = "#166534";
      ctx.fillRect(0, 0, w, h);

      const stripes = 10;
      const stripeW = pitchW / stripes;
      for (let i = 0; i < stripes; i++) {
        ctx.fillStyle = (i % 2 === 0) ? "#15803d" : "#166534";
        ctx.fillRect(padX + i * stripeW, padY, stripeW, pitchH);
      }

      // Líneas reglamentarias 2D
      ctx.strokeStyle = "rgba(255, 255, 255, 0.82)";
      ctx.lineWidth = Math.max(1.5, 2.0 * dpr);
      ctx.lineJoin = "round";

      // Rectángulo perimetral
      ctx.strokeRect(padX, padY, pitchW, pitchH);

      // Línea de medio campo
      const midX = padX + pitchW / 2;
      const midY = padY + pitchH / 2;
      ctx.beginPath();
      ctx.moveTo(midX, padY);
      ctx.lineTo(midX, padY + pitchH);
      ctx.stroke();

      // Círculo central y punto de saque
      const centerR = Math.min(pitchW * 0.12, pitchH * 0.22);
      ctx.beginPath();
      ctx.arc(midX, midY, centerR, 0, Math.PI * 2);
      ctx.stroke();

      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(midX, midY, 2.4 * dpr, 0, Math.PI * 2);
      ctx.fill();

      // Áreas Grandes (18 yardas)
      const boxW = pitchW * 0.165;
      const boxH = pitchH * 0.58;
      const boxTopY = padY + (pitchH - boxH) / 2;
      ctx.strokeRect(padX, boxTopY, boxW, boxH);
      ctx.strokeRect(padX + pitchW - boxW, boxTopY, boxW, boxH);

      // Áreas Pequeñas (6 yardas)
      const sixW = pitchW * 0.058;
      const sixH = pitchH * 0.30;
      const sixTopY = padY + (pitchH - sixH) / 2;
      ctx.strokeRect(padX, sixTopY, sixW, sixH);
      ctx.strokeRect(padX + pitchW - sixW, sixTopY, sixW, sixH);

      // Puntos de penalti
      const penDist = pitchW * 0.11;
      ctx.beginPath();
      ctx.arc(padX + penDist, midY, 2.2 * dpr, 0, Math.PI * 2);
      ctx.arc(padX + pitchW - penDist, midY, 2.2 * dpr, 0, Math.PI * 2);
      ctx.fill();

      // Semicírculos del área (D)
      ctx.beginPath();
      ctx.arc(padX + penDist, midY, centerR * 0.85, -0.62 * Math.PI, 0.62 * Math.PI);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(padX + pitchW - penDist, midY, centerR * 0.85, 0.38 * Math.PI, 1.62 * Math.PI);
      ctx.stroke();

      // Arcos de córner
      const cornerR = Math.min(pitchW * 0.02, 9 * dpr);
      ctx.beginPath();
      ctx.arc(padX, padY, cornerR, 0, 0.5 * Math.PI);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(padX, padY + pitchH, cornerR, 1.5 * Math.PI, 2 * Math.PI);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(padX + pitchW, padY, cornerR, 0.5 * Math.PI, Math.PI);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(padX + pitchW, padY + pitchH, cornerR, Math.PI, 1.5 * Math.PI);
      ctx.stroke();

      // Porterías exteriores
      const goalW = Math.max(4, padX * 0.68);
      const goalH = sixH * 0.75;
      const goalTopY = padY + (pitchH - goalH) / 2;
      ctx.fillStyle = "rgba(255, 255, 255, 0.12)";
      ctx.fillRect(padX - goalW, goalTopY, goalW, goalH);
      ctx.strokeRect(padX - goalW, goalTopY, goalW, goalH);
      ctx.fillRect(padX + pitchW, goalTopY, goalW, goalH);
      ctx.strokeRect(padX + pitchW, goalTopY, goalW, goalH);

      return { padX, padY, pitchW, pitchH, dpr };
    }

    function drawPlayerToken2D(ctx, p, side, isCarrier, padX, padY, pitchW, pitchH, dpr) {
      const px = padX + (p.curX / 100) * pitchW;
      const py = padY + (p.curY / 100) * pitchH;
      const kit = side === "home" ? kits.home : kits.away;
      const primaryColor = p.isKeeper ? (kit.keeper || "#10b981") : (kit.jersey || (side === "home" ? homeTeam.primaryColor : awayTeam.primaryColor));
      const secondaryColor = p.isKeeper ? "#ffffff" : (kit.collar || kit.shorts || "#ffffff");
      const numberColor = p.isKeeper ? "#0f172a" : (kit.number || "#ffffff");
      const r = Math.max(5.5, 6.8 * dpr);

      // Sombra suave en el césped
      ctx.fillStyle = "rgba(0, 20, 6, 0.42)";
      ctx.beginPath();
      ctx.ellipse(px + 1.2 * dpr, py + 1.2 * dpr, r * 0.95, r * 0.65, 0, 0, Math.PI * 2);
      ctx.fill();

      // Halo dorado si lleva el balón
      if (isCarrier) {
        const pulse = Math.sin(performance.now() * 0.01) * 1.5 * dpr;
        ctx.strokeStyle = "#fbbf24";
        ctx.lineWidth = 2.2 * dpr;
        ctx.beginPath();
        ctx.arc(px, py, r + 2.8 * dpr + pulse, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fillStyle = "rgba(251, 191, 36, 0.22)";
        ctx.fill();
      }

      // Ficha circular 2D (🔴) con color de la equipación
      ctx.beginPath();
      ctx.arc(px, py, r, 0, Math.PI * 2);
      ctx.fillStyle = primaryColor;
      ctx.fill();

      // Borde circular con color secundario de la equipación
      ctx.strokeStyle = secondaryColor;
      ctx.lineWidth = Math.max(1.2, 1.8 * dpr);
      ctx.stroke();

      // Dorsal centrado (sin nombres en el campo)
      ctx.font = `900 ${Math.max(6.5, Math.round(r * 1.05))}px sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = numberColor;
      ctx.fillText(`${p.number}`, px, py + 0.3 * dpr);
    }

    function drawBallToken2D(ctx, bxCoord, byCoord, padX, padY, pitchW, pitchH, dpr) {
      const bx = padX + (bxCoord / 100) * pitchW;
      const by = padY + (byCoord / 100) * pitchH;
      const r = Math.max(3.2, 4.2 * dpr);

      // Sombra sutil
      ctx.fillStyle = "rgba(0, 20, 6, 0.42)";
      ctx.beginPath();
      ctx.ellipse(bx + 1.0 * dpr, by + 1.0 * dpr, r, r * 0.6, 0, 0, Math.PI * 2);
      ctx.fill();

      // Esfera 2D
      ctx.beginPath();
      ctx.arc(bx, by, r, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.fill();
      ctx.strokeStyle = "#0f172a";
      ctx.lineWidth = Math.max(1.0, 1.2 * dpr);
      ctx.stroke();

      // Detalle central
      ctx.fillStyle = "#0f172a";
      ctx.beginPath();
      ctx.arc(bx, by, r * 0.35, 0, Math.PI * 2);
      ctx.fill();
    }

    // MEJORA 6: Efectos visuales atmosféricos sobre el césped (Lluvia, Focos Nocturnos o Brillo Solar)
    function drawWeatherOverlay(ctx, w, h, weatherId) {
      if (!ctx) return;
      ctx.save();
      if (weatherId === "rain") {
        // Brillo húmedo azulado sobre el césped
        ctx.fillStyle = "rgba(14, 116, 144, 0.08)";
        ctx.fillRect(0, 0, w, h);

        // Gotas de lluvia diagonales animadas
        const now = performance.now();
        ctx.strokeStyle = "rgba(186, 230, 253, 0.36)";
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        const dropCount = 42;
        for (let i = 0; i < dropCount; i++) {
          const seedX = ((i * 97) % 100) / 100;
          const seedY = ((i * 53) % 100) / 100;
          const speed = 0.00065 + (i % 4) * 0.00012;
          const prog = (seedY + now * speed) % 1.0;
          const x = ((seedX + prog * 0.12) % 1.0) * w;
          const y = prog * h;
          ctx.moveTo(x, y);
          ctx.lineTo(x - 4, y + 11);
        }
        ctx.stroke();
      } else if (weatherId === "night") {
        // Haces de luz de los focos del estadio desde las 4 esquinas
        const corners = [
          [0, 0],
          [w, 0],
          [0, h],
          [w, h]
        ];
        corners.forEach(([cx, cy]) => {
          const grad = ctx.createRadialGradient(cx, cy, 4, cx, cy, Math.max(w, h) * 0.48);
          grad.addColorStop(0, "rgba(224, 242, 254, 0.14)");
          grad.addColorStop(0.5, "rgba(186, 230, 253, 0.04)");
          grad.addColorStop(1, "rgba(15, 23, 42, 0)");
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, w, h);
        });
      } else if (weatherId === "sunny") {
        // Cálido reflejo solar diagonal sobre el césped
        const sunGrad = ctx.createLinearGradient(0, 0, w * 0.7, h * 0.7);
        sunGrad.addColorStop(0, "rgba(253, 224, 71, 0.07)");
        sunGrad.addColorStop(0.5, "rgba(253, 224, 71, 0.02)");
        sunGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = sunGrad;
        ctx.fillRect(0, 0, w, h);
      }
      ctx.restore();
    }

    // ==========================================
    // MOTOR GRÁFICO 3D REALISTA CON THREE.JS (WEBGL)
    // ==========================================
    let threeEngine = null;
    let threeInitAttempted = false;
    let threeCdnLoading = false;
    let canvas3d = null;

    function ensureThreeLoadedAndInit() {
      if (threeEngine || threeInitAttempted) return;
      if (typeof window !== "undefined" && window.THREE) {
        threeInitAttempted = true;
        try {
          if (!canvas3d && canvas && canvas.parentElement) {
            canvas3d = document.createElement("canvas");
            canvas3d.id = "match-canvas-3d";
            canvas3d.className = "w-full h-full block";
            canvas3d.style.position = "absolute";
            canvas3d.style.inset = "0";
            canvas3d.style.width = "100%";
            canvas3d.style.height = "100%";
            canvas3d.style.pointerEvents = "none";
            canvas3d.style.display = "none";
            canvas3d.style.zIndex = "5";
            canvas.parentElement.appendChild(canvas3d);
          }
          threeEngine = createThreeMatchEngine(canvas3d || canvas);
        } catch (err) {
          console.warn("Fallback a Canvas 2D:", err);
          threeEngine = null;
        }
        return;
      }
      if (!threeCdnLoading && typeof document !== "undefined") {
        threeCdnLoading = true;
        const script = document.createElement("script");
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
        script.async = true;
        script.onload = () => {
          threeCdnLoading = false;
        };
        script.onerror = () => {
          threeCdnLoading = false;
          threeInitAttempted = true;
        };
        document.head.appendChild(script);
      }
    }

    function createThreeMatchEngine(targetCanvas) {
      if (!targetCanvas || !window.THREE) return null;
      const THREE = window.THREE;

      const PITCH_L = 105; // Eje X: -52.5 (Portería Local) a +52.5 (Portería Visitante)
      const PITCH_W = 68;  // Eje Z: -34 (Banda superior/fondo) a +34 (Banda inferior/cámara)

      const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
      const simToWorldX = (sx) => ((sx - 50) / 100) * PITCH_L;
      const simToWorldZ = (sy) => ((sy - 50) / 100) * PITCH_W;
      const simToWorldY = (sz) => Math.max(0, (sz || 0) * 0.36);

      const renderer = new THREE.WebGLRenderer({
        canvas: targetCanvas,
        antialias: true,
        alpha: false,
        powerPreference: "high-performance"
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      if (THREE.ACESFilmicToneMapping !== undefined) {
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.06;
      }
      if (THREE.sRGBEncoding !== undefined) {
        renderer.outputEncoding = THREE.sRGBEncoding;
      }

      const scene = new THREE.Scene();
      const skyColorHex = matchWeather.id === "night" ? 0x050b16 : (matchWeather.id === "rain" ? 0x0c1424 : 0x081120);
      scene.background = new THREE.Color(skyColorHex);
      scene.fog = new THREE.FogExp2(skyColorHex, 0.0020);

      // 1. CÁMARA ESTILO RETRANSMISIÓN TV (PerspectiveCamera en lateral largo Y: 21.5, Z: 36.0, FOV: 35)
      const rect0 = targetCanvas.getBoundingClientRect();
      const initAspect = (rect0.width > 0 && rect0.height > 0) ? (rect0.width / rect0.height) : (16 / 9);
      const camera = new THREE.PerspectiveCamera(35, initAspect, 1.0, 340);
      camera.position.set(0, 21.5, 36.0);
      const camLookCurrent = new THREE.Vector3(0, 0.55, -1.5);
      camera.lookAt(camLookCurrent);

      // 2. ILUMINACIÓN AMBIENTAL SUAVE (HemisphereLight) + DIRECCIONAL CON SOMBRAS PROYECTADAS (castShadow)
      const ambientIntensity = matchWeather.id === "sunny" ? 0.44 : (matchWeather.id === "rain" ? 0.36 : 0.40);
      const ambientLight = new THREE.AmbientLight(0xeef6ff, ambientIntensity);
      scene.add(ambientLight);

      // HemisphereLight: luz suave del cielo nocturno/estadio arriba y rebote verdoso del césped abajo
      const hemiSkyColor = matchWeather.id === "sunny" ? 0xe0f2fe : 0xc7e2ff;
      const hemiGroundColor = 0x14532d;
      const hemiLight = new THREE.HemisphereLight(hemiSkyColor, hemiGroundColor, 0.56);
      hemiLight.position.set(0, 68, 0);
      scene.add(hemiLight);

      // Luz Direccional principal (Focos del estadio / Sol) con sombras proyectadas nítidas sobre jugadores y balón
      const sunColor = matchWeather.id === "sunny" ? 0xfff9e6 : (matchWeather.id === "rain" ? 0xe2e8f0 : 0xfff8eb);
      const dirLight = new THREE.DirectionalLight(sunColor, matchWeather.id === "sunny" ? 1.42 : 1.32);
      dirLight.position.set(34, 60, 36);
      dirLight.castShadow = true;
      dirLight.shadow.mapSize.width = 2048;
      dirLight.shadow.mapSize.height = 2048;
      dirLight.shadow.camera.near = 12;
      dirLight.shadow.camera.far = 150;
      dirLight.shadow.camera.left = -60;
      dirLight.shadow.camera.right = 60;
      dirLight.shadow.camera.top = 42;
      dirLight.shadow.camera.bottom = -42;
      dirLight.shadow.bias = -0.0004;
      if (dirLight.shadow.normalBias !== undefined) {
        dirLight.shadow.normalBias = 0.015;
      }
      scene.add(dirLight);

      // Contraluz suave desde la tribuna opuesta para perfilar hombros y siluetas de jugadores
      const fillLight = new THREE.DirectionalLight(0x93c5fd, 0.38);
      fillLight.position.set(-38, 40, -36);
      scene.add(fillLight);

      const disposableTextures = [];
      const disposableGeometries = [];
      const disposableMaterials = [];
      const trackTex = (t) => {
        if (t) {
          if (THREE.sRGBEncoding !== undefined) t.encoding = THREE.sRGBEncoding;
          disposableTextures.push(t);
        }
        return t;
      };
      const trackGeo = (g) => { if (g) disposableGeometries.push(g); return g; };
      const trackMat = (m) => { if (m) disposableMaterials.push(m); return m; };

      // 3. TEXTURA PROCEDURAL DE CÉSPED CON FRANJAS DE CORTE REALISTAS, RUGOSIDAD (roughnessMap/bumpMap) Y LÍNEAS DE CAL NÍTIDAS
      const APRON_X = 8; // Margen por cada fondo (total ancho X = 121)
      const APRON_Z = 6; // Margen por cada banda (total ancho Z = 80)
      const TOTAL_W = PITCH_L + APRON_X * 2;
      const TOTAL_H = PITCH_W + APRON_Z * 2;
      const maxAniso = renderer.capabilities.getMaxAnisotropy ? Math.min(16, renderer.capabilities.getMaxAnisotropy()) : 4;

      function buildPitchCanvasTexture() {
        const cw = 2048;
        const ch = Math.round(cw * (TOTAL_H / TOTAL_W)); // ~1354
        const c = document.createElement("canvas");
        c.width = cw;
        c.height = ch;
        const g = c.getContext("2d");

        const m2pxX = (m) => ((m + TOTAL_W / 2) / TOTAL_W) * cw;
        const m2pxZ = (m) => ((m + TOTAL_H / 2) / TOTAL_H) * ch;
        const scaleX = cw / TOTAL_W;
        const scaleZ = ch / TOTAL_H;

        // Moqueta perimetral oscura alrededor del césped
        g.fillStyle = "#12421c";
        g.fillRect(0, 0, cw, ch);

        const x0 = m2pxX(-PITCH_L / 2);
        const z0 = m2pxZ(-PITCH_W / 2);
        const pw = PITCH_L * scaleX;
        const ph = PITCH_W * scaleZ;

        // 18 Franjas verticales de siega con degradado longitudinal de reflexión de la hierba
        const numStripes = 18;
        const stripeW = pw / numStripes;
        for (let i = 0; i < numStripes; i++) {
          const sx = x0 + i * stripeW;
          const stripeGrad = g.createLinearGradient(sx, z0, sx, z0 + ph);
          if (i % 2 === 0) {
            stripeGrad.addColorStop(0, "#1d662b");
            stripeGrad.addColorStop(0.5, "#237632");
            stripeGrad.addColorStop(1, "#1c6329");
          } else {
            stripeGrad.addColorStop(0, "#278037");
            stripeGrad.addColorStop(0.5, "#2f9040");
            stripeGrad.addColorStop(1, "#267c35");
          }
          g.fillStyle = stripeGrad;
          g.fillRect(sx, z0, stripeW + 0.9, ph);

          // Sutil línea de transición del rodillo cortacésped entre franjas
          g.fillStyle = (i % 2 === 0) ? "rgba(255,255,255,0.025)" : "rgba(0,20,5,0.035)";
          g.fillRect(sx, z0, 2.2, ph);
        }

        // Pasadas horizontales cruzadas de cortacésped (damero profesional de estadio)
        const hStripes = 12;
        const hStripeH = ph / hStripes;
        for (let j = 0; j < hStripes; j++) {
          g.fillStyle = (j % 2 === 0) ? "rgba(255, 255, 255, 0.032)" : "rgba(0, 18, 6, 0.024)";
          g.fillRect(x0, z0 + j * hStripeH, pw, hStripeH);
        }

        // Micro-briznas orgánicas de hierba y desgaste sutil en bocas de gol
        for (let n = 0; n < 14000; n++) {
          const rx = x0 + Math.random() * pw;
          const rz = z0 + Math.random() * ph;
          g.fillStyle = (n % 2 === 0) ? "rgba(255,255,255,0.034)" : "rgba(0,22,6,0.044)";
          g.fillRect(rx, rz, 1.8, 2.2);
        }
        [m2pxX(-PITCH_L / 2 + 3.0), m2pxX(PITCH_L / 2 - 3.0)].forEach(wx => {
          const wear = g.createRadialGradient(wx, m2pxZ(0), 3, wx, m2pxZ(0), 7.2 * scaleX);
          wear.addColorStop(0, "rgba(124, 104, 64, 0.18)");
          wear.addColorStop(1, "rgba(124, 104, 64, 0)");
          g.fillStyle = wear;
          g.beginPath();
          g.arc(wx, m2pxZ(0), 7.2 * scaleX, 0, Math.PI * 2);
          g.fill();
        });

        // LÍNEAS DE CAL BLANCAS ULTRA NÍTIDAS CON REALCE DE PIGMENTO
        g.save();
        g.strokeStyle = "rgba(252, 254, 255, 0.98)";
        g.fillStyle = "#ffffff";
        g.lineWidth = Math.max(5.0, 0.25 * scaleX);
        g.lineJoin = "round";
        g.lineCap = "round";
        g.shadowColor = "rgba(255, 255, 255, 0.28)";
        g.shadowBlur = 1.5;

        // Bandas y líneas de fondo
        g.strokeRect(x0, z0, pw, ph);

        // Línea de medio campo
        const midX = m2pxX(0);
        const midZ = m2pxZ(0);
        g.beginPath();
        g.moveTo(midX, z0);
        g.lineTo(midX, z0 + ph);
        g.stroke();

        // Círculo central (radio 9.15m) y punto central
        g.beginPath();
        g.ellipse(midX, midZ, 9.15 * scaleX, 9.15 * scaleZ, 0, 0, Math.PI * 2);
        g.stroke();

        g.beginPath();
        g.arc(midX, midZ, 0.48 * scaleX, 0, Math.PI * 2);
        g.fill();

        // Áreas grandes (16.5m x 40.32m) y áreas pequeñas (5.5m x 18.32m) en ambos lados
        const penW = 16.5 * scaleX;
        const penH = 40.32 * scaleZ;
        const penTopZ = m2pxZ(-40.32 / 2);
        g.strokeRect(x0, penTopZ, penW, penH);
        g.strokeRect(x0 + pw - penW, penTopZ, penW, penH);

        const sixW = 5.5 * scaleX;
        const sixH = 18.32 * scaleZ;
        const sixTopZ = m2pxZ(-18.32 / 2);
        g.strokeRect(x0, sixTopZ, sixW, sixH);
        g.strokeRect(x0 + pw - sixW, sixTopZ, sixW, sixH);

        // Puntos de penalti (a 11m de cada línea de gol)
        const penSpotLeftX = m2pxX(-PITCH_L / 2 + 11.0);
        const penSpotRightX = m2pxX(PITCH_L / 2 - 11.0);
        g.beginPath();
        g.arc(penSpotLeftX, midZ, 0.44 * scaleX, 0, Math.PI * 2);
        g.arc(penSpotRightX, midZ, 0.44 * scaleX, 0, Math.PI * 2);
        g.fill();

        // Semicírculos de área (radio 9.15m desde el punto de penalti, fuera del área de 16.5m)
        const dAngle = Math.acos((16.5 - 11.0) / 9.15); // ~0.926 rad
        g.beginPath();
        g.ellipse(penSpotLeftX, midZ, 9.15 * scaleX, 9.15 * scaleZ, 0, -dAngle, dAngle);
        g.stroke();

        g.beginPath();
        g.ellipse(penSpotRightX, midZ, 9.15 * scaleX, 9.15 * scaleZ, 0, Math.PI - dAngle, Math.PI + dAngle);
        g.stroke();

        // 4 Arcos de córner (radio 1.0m)
        const cR = 1.15 * scaleX;
        g.beginPath(); g.arc(x0, z0, cR, 0, Math.PI * 0.5); g.stroke();
        g.beginPath(); g.arc(x0 + pw, z0, cR, Math.PI * 0.5, Math.PI); g.stroke();
        g.beginPath(); g.arc(x0 + pw, z0 + ph, cR, Math.PI, Math.PI * 1.5); g.stroke();
        g.beginPath(); g.arc(x0, z0 + ph, cR, Math.PI * 1.5, Math.PI * 2); g.stroke();

        // Líneas del área técnica junto a la banda
        g.strokeStyle = "rgba(255, 255, 255, 0.62)";
        g.lineWidth = Math.max(2.2, 0.14 * scaleX);
        g.strokeRect(m2pxX(-22), m2pxZ(PITCH_W / 2 + 1.0), 14 * scaleX, 3.2 * scaleZ);
        g.strokeRect(m2pxX(8), m2pxZ(PITCH_W / 2 + 1.0), 14 * scaleX, 3.2 * scaleZ);
        g.restore();

        const tex = new THREE.CanvasTexture(c);
        tex.anisotropy = maxAniso;
        tex.needsUpdate = true;
        return trackTex(tex);
      }

      // Mapa procedural de rugosidad y micro-relieve de hierba (roughnessMap + bumpMap)
      function buildPitchRoughnessBumpTexture() {
        const rw = 1024, rh = 677;
        const rc = document.createElement("canvas");
        rc.width = rw;
        rc.height = rh;
        const rg = rc.getContext("2d");

        rg.fillStyle = "#d4d4d8";
        rg.fillRect(0, 0, rw, rh);

        const numStripes = 18;
        const stripeW = rw / numStripes;
        for (let i = 0; i < numStripes; i++) {
          // Alternar rugosidad según dirección de peinado de las briznas de césped
          rg.fillStyle = (i % 2 === 0) ? "#c8c8d0" : "#dedee6";
          rg.fillRect(i * stripeW, 0, stripeW, rh);
        }

        for (let n = 0; n < 18000; n++) {
          const rx = Math.random() * rw;
          const ry = Math.random() * rh;
          rg.fillStyle = (n % 2 === 0) ? "rgba(255,255,255,0.14)" : "rgba(40,40,45,0.14)";
          rg.fillRect(rx, ry, 2, 2);
        }

        const rTex = new THREE.CanvasTexture(rc);
        rTex.anisotropy = maxAniso;
        rTex.needsUpdate = true;
        return disposableTextures.push(rTex), rTex;
      }

      const pitchBumpRoughTex = buildPitchRoughnessBumpTexture();
      const pitchGeo = trackGeo(new THREE.PlaneGeometry(TOTAL_W, TOTAL_H));
      const pitchMat = trackMat(new THREE.MeshStandardMaterial({
        map: buildPitchCanvasTexture(),
        bumpMap: pitchBumpRoughTex,
        bumpScale: 0.045,
        roughnessMap: pitchBumpRoughTex,
        roughness: matchWeather.id === "rain" ? 0.76 : 0.88,
        metalness: 0.02
      }));
      const pitchMesh = new THREE.Mesh(pitchGeo, pitchMat);
      pitchMesh.rotation.x = -Math.PI / 2;
      pitchMesh.receiveShadow = true;
      scene.add(pitchMesh);

      // Suelo oscuro perimetral amplio bajo las gradas para eliminar por completo cualquier vacío exterior
      const outerGroundGeo = trackGeo(new THREE.PlaneGeometry(340, 260));
      const outerGroundMat = trackMat(new THREE.MeshStandardMaterial({ color: 0x050912, roughness: 0.96, metalness: 0.02 }));
      const outerGround = new THREE.Mesh(outerGroundGeo, outerGroundMat);
      outerGround.rotation.x = -Math.PI / 2;
      outerGround.position.y = -0.05;
      outerGround.receiveShadow = true;
      scene.add(outerGround);

      // 4. BANDERINES DE CÓRNER 3D
      const cornerFlags = [];
      const poleGeo = trackGeo(new THREE.CylinderGeometry(0.055, 0.055, 1.55, 8));
      const poleMat = trackMat(new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 }));
      const flagGeo = trackGeo(new THREE.PlaneGeometry(0.62, 0.40, 3, 1));
      const flagMat = trackMat(new THREE.MeshStandardMaterial({
        color: 0xef4444,
        emissive: 0x450a0a,
        side: THREE.DoubleSide,
        roughness: 0.5
      }));

      [
        [-PITCH_L / 2, -PITCH_W / 2],
        [PITCH_L / 2, -PITCH_W / 2],
        [-PITCH_L / 2, PITCH_W / 2],
        [PITCH_L / 2, PITCH_W / 2]
      ].forEach(([cx, cz]) => {
        const fg = new THREE.Group();
        fg.position.set(cx, 0, cz);
        const pole = new THREE.Mesh(poleGeo, poleMat);
        pole.position.y = 0.775;
        pole.castShadow = true;
        fg.add(pole);

        const cloth = new THREE.Mesh(flagGeo, flagMat);
        cloth.position.set(0.31, 1.32, 0);
        fg.add(cloth);
        scene.add(fg);
        cornerFlags.push(cloth);
      });

      // 5. PORTERÍAS 3D PROFESIONALES CON REDES
      function buildNetTexture() {
        const nc = document.createElement("canvas");
        nc.width = 128;
        nc.height = 128;
        const ng = nc.getContext("2d");
        ng.clearRect(0, 0, 128, 128);
        ng.strokeStyle = "rgba(248, 250, 252, 0.78)";
        ng.lineWidth = 2.2;
        const step = 16;
        for (let i = 0; i <= 128; i += step) {
          ng.beginPath();
          ng.moveTo(i, 0); ng.lineTo(i, 128);
          ng.moveTo(0, i); ng.lineTo(128, i);
          ng.stroke();
        }
        const tex = new THREE.CanvasTexture(nc);
        tex.wrapS = THREE.RepeatWrapping;
        tex.wrapT = THREE.RepeatWrapping;
        tex.repeat.set(6, 3);
        return trackTex(tex);
      }

      const netTex = buildNetTexture();
      const netMat = trackMat(new THREE.MeshBasicMaterial({
        map: netTex,
        transparent: true,
        opacity: 0.75,
        side: THREE.DoubleSide,
        depthWrite: false
      }));
      const postMat = trackMat(new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.22,
        metalness: 0.18
      }));
      const stanchionMat = trackMat(new THREE.MeshStandardMaterial({
        color: 0x64748b,
        roughness: 0.45,
        metalness: 0.5
      }));

      function createGoal3D(goalX, dirSign) {
        // dirSign = -1 para portería local (se extiende hacia -X), +1 para visitante (se extiende hacia +X)
        const gGroup = new THREE.Group();
        gGroup.position.set(goalX, 0, 0);

        const goalW = 7.32;
        const halfW = goalW / 2; // 3.66m
        const goalH = 2.44;
        const depth = 2.25;
        const postR = 0.085;

        const vPostGeo = trackGeo(new THREE.CylinderGeometry(postR, postR, goalH, 16));
        const hBarGeo = trackGeo(new THREE.CylinderGeometry(postR, postR, goalW + postR * 2, 16));

        // Dos postes verticales
        const postNear = new THREE.Mesh(vPostGeo, postMat);
        postNear.position.set(0, goalH / 2, halfW);
        postNear.castShadow = true;
        gGroup.add(postNear);

        const postFar = new THREE.Mesh(vPostGeo, postMat);
        postFar.position.set(0, goalH / 2, -halfW);
        postFar.castShadow = true;
        gGroup.add(postFar);

        // Larguero horizontal
        const crossbar = new THREE.Mesh(hBarGeo, postMat);
        crossbar.rotation.x = Math.PI / 2;
        crossbar.position.set(0, goalH, 0);
        crossbar.castShadow = true;
        gGroup.add(crossbar);

        // Soportes traseros y base de red
        const backFrameGeo = trackGeo(new THREE.CylinderGeometry(0.045, 0.045, goalW, 10));
        const backBotBar = new THREE.Mesh(backFrameGeo, stanchionMat);
        backBotBar.rotation.x = Math.PI / 2;
        backBotBar.position.set(dirSign * depth, 0.05, 0);
        gGroup.add(backBotBar);

        const backTopBar = new THREE.Mesh(backFrameGeo, stanchionMat);
        backTopBar.rotation.x = Math.PI / 2;
        backTopBar.position.set(dirSign * (depth * 0.85), goalH * 0.96, 0);
        gGroup.add(backTopBar);

        const sideBotGeo = trackGeo(new THREE.CylinderGeometry(0.045, 0.045, depth, 8));
        [-halfW, halfW].forEach(zSide => {
          const sb = new THREE.Mesh(sideBotGeo, stanchionMat);
          sb.rotation.z = Math.PI / 2;
          sb.position.set(dirSign * (depth / 2), 0.05, zSide);
          gGroup.add(sb);
        });

        // Contenedor de mallas de red (permite deformación por impacto de gol)
        const netGroup = new THREE.Group();

        // Red trasera
        const backNetGeo = trackGeo(new THREE.PlaneGeometry(goalW, goalH, 8, 4));
        const backNet = new THREE.Mesh(backNetGeo, netMat);
        backNet.rotation.y = Math.PI / 2;
        backNet.position.set(dirSign * depth, goalH / 2, 0);
        netGroup.add(backNet);

        // Red superior (techo)
        const topNetGeo = trackGeo(new THREE.PlaneGeometry(depth, goalW));
        const topNet = new THREE.Mesh(topNetGeo, netMat);
        topNet.rotation.x = Math.PI / 2;
        topNet.position.set(dirSign * (depth / 2), goalH, 0);
        netGroup.add(topNet);

        // Redes laterales (izquierda y derecha)
        const sideNetGeo = trackGeo(new THREE.PlaneGeometry(depth, goalH));
        const sideNear = new THREE.Mesh(sideNetGeo, netMat);
        sideNear.position.set(dirSign * (depth / 2), goalH / 2, halfW);
        netGroup.add(sideNear);

        const sideFar = new THREE.Mesh(sideNetGeo, netMat);
        sideFar.position.set(dirSign * (depth / 2), goalH / 2, -halfW);
        netGroup.add(sideFar);

        gGroup.add(netGroup);
        scene.add(gGroup);
        return { gGroup, netGroup, dirSign };
      }

      const homeGoal3D = createGoal3D(-PITCH_L / 2, -1);
      const awayGoal3D = createGoal3D(PITCH_L / 2, 1);

      // 6. ESTADIO Y AMBIENTE: VALLAS PUBLICITARIAS PERIMETRALES Y GRADAS OSCURAS CON PÚBLICO MOTEADO
      function buildAdboardTexture() {
        const ac = document.createElement("canvas");
        ac.width = 2048;
        ac.height = 128;
        const ag = ac.getContext("2d");

        const sponsors = [
          { bg: "#0f172a", fg: "#38bdf8", accent: "#0284c7", text: "⚽ LALIGA EA SPORTS" },
          { bg: homeTeam.primaryColor || "#dc2626", fg: "#ffffff", accent: "#fbbf24", text: `🏟️ ${(homeTeam.name || "LOCAL").toUpperCase()}` },
          { bg: "#f8fafc", fg: "#1e1b4b", accent: "#e11d48", text: "FOOTBALL MANAGER 3D" },
          { bg: "#064e3b", fg: "#6ee7b7", accent: "#10b981", text: "⚡ ENTRENATE TE TE" },
          { bg: awayTeam.primaryColor || "#2563eb", fg: "#ffffff", accent: "#38bdf8", text: `🛡️ ${(awayTeam.name || "VISITANTE").toUpperCase()}` },
          { bg: "#18181b", fg: "#facc15", accent: "#f59e0b", text: "★ MATCH ENGINE TV ★" }
        ];

        const segW = ac.width / sponsors.length;
        sponsors.forEach((sp, i) => {
          const sx = i * segW;
          ag.fillStyle = sp.bg;
          ag.fillRect(sx, 0, segW, ac.height);

          // Franja diagonal decorativa estilo Premier/LaLiga
          ag.fillStyle = sp.accent;
          ag.beginPath();
          ag.moveTo(sx, 0);
          ag.lineTo(sx + 28, 0);
          ag.lineTo(sx + 10, ac.height);
          ag.lineTo(sx, ac.height);
          ag.closePath();
          ag.fill();

          // Borde superior LED brillante
          ag.fillStyle = "rgba(255,255,255,0.28)";
          ag.fillRect(sx, 0, segW, 6);

          ag.font = "900 44px 'Arial Black', Impact, sans-serif";
          ag.textAlign = "center";
          ag.textBaseline = "middle";
          ag.fillStyle = sp.fg;
          ag.fillText(sp.text, sx + segW / 2 + 8, ac.height / 2 + 2, segW - 36);
        });

        const tex = new THREE.CanvasTexture(ac);
        tex.wrapS = THREE.RepeatWrapping;
        tex.wrapT = THREE.ClampToEdgeWrapping;
        return trackTex(tex);
      }

      const adTex = buildAdboardTexture();
      const adMat = trackMat(new THREE.MeshStandardMaterial({
        map: adTex,
        roughness: 0.4,
        metalness: 0.1,
        emissive: 0x111827,
        emissiveIntensity: 0.25
      }));

      // Vallas LED en banda lejana (Z = -36.8), banda cercana (Z = +36.8) y ambos fondos (X = ±56.5)
      const adH = 1.05;
      const farAdGeo = trackGeo(new THREE.BoxGeometry(PITCH_L + 7.6, adH, 0.25));
      const farAd = new THREE.Mesh(farAdGeo, adMat);
      farAd.position.set(0, adH / 2, -PITCH_W / 2 - 2.9);
      farAd.castShadow = true;
      scene.add(farAd);

      const nearAd = new THREE.Mesh(farAdGeo, adMat);
      nearAd.position.set(0, adH / 2, PITCH_W / 2 + 3.4);
      scene.add(nearAd);

      const endAdGeo = trackGeo(new THREE.BoxGeometry(0.25, adH, PITCH_W + 6.3));
      const leftAd = new THREE.Mesh(endAdGeo, adMat);
      leftAd.position.set(-PITCH_L / 2 - 3.8, adH / 2, 0);
      leftAd.castShadow = true;
      scene.add(leftAd);

      const rightAd = new THREE.Mesh(endAdGeo, adMat);
      rightAd.position.set(PITCH_L / 2 + 3.8, adH / 2, 0);
      rightAd.castShadow = true;
      scene.add(rightAd);

      // Banquillos técnicos (Local y Visitante) en la banda
      const dugoutGeo = trackGeo(new THREE.BoxGeometry(10.5, 2.1, 1.8));
      const dugoutMat = trackMat(new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.5, metalness: 0.3 }));
      [-15, 15].forEach(bx => {
        const bench = new THREE.Mesh(dugoutGeo, dugoutMat);
        bench.position.set(bx, 1.05, -PITCH_W / 2 - 4.3);
        bench.castShadow = true;
        scene.add(bench);
      });

      // GRADAS OSCURAS ESCALONADAS CON PÚBLICO MOTEADO AL FONDO (Estilo Football Manager)
      function buildCrowdStandTexture() {
        const sc = document.createElement("canvas");
        sc.width = 1024;
        sc.height = 512;
        const sg = sc.getContext("2d");

        // Hormigón oscuro de las gradas
        sg.fillStyle = "#0f172a";
        sg.fillRect(0, 0, sc.width, sc.height);

        const rows = 26;
        const rowH = sc.height / rows;
        const homeCol = homeTeam.primaryColor || "#dc2626";
        const awayCol = awayTeam.primaryColor || "#2563eb";
        const palette = [
          homeCol, homeCol, homeCol,
          awayCol,
          "#e2e8f0", "#cbd5e1", "#334155", "#475569", "#1e293b", "#f59e0b", "#94a3b8"
        ];

        for (let r = 0; r < rows; r++) {
          const ry = r * rowH;
          sg.fillStyle = (r % 2 === 0) ? "#0f172a" : "#162033";
          sg.fillRect(0, ry, sc.width, rowH);

          // Línea de escalón de hormigón
          sg.fillStyle = "rgba(148, 163, 184, 0.12)";
          sg.fillRect(0, ry, sc.width, 2);

          // Público moteado en cada fila
          const cols = 150;
          const colW = sc.width / cols;
          for (let c = 0; c < cols; c++) {
            // Pasillos de escaleras amarillas cada 25 columnas
            if (c % 25 === 12 || c % 25 === 13) {
              sg.fillStyle = (c % 25 === 12) ? "#475569" : "#eab308";
              sg.fillRect(c * colW, ry, colW * 0.9, rowH * 0.8);
              continue;
            }
            const seed = (r * 73 + c * 31) % 100;
            if (seed < 14) continue; // Hueco de butaca oscura

            const col = palette[(r * 17 + c * 23) % palette.length];
            const px = c * colW + (r % 2) * 2;
            const py = ry + rowH * 0.52;

            // Torso moteado
            sg.fillStyle = col;
            sg.fillRect(px - 2.4, py - 2.2, 4.8, 5.2);

            // Cabeza del espectador
            sg.fillStyle = (seed % 3 === 0) ? "#d6a27a" : "#f1c27d";
            sg.beginPath();
            sg.arc(px, py - 3.8, 1.9, 0, Math.PI * 2);
            sg.fill();
          }
        }

        const tex = new THREE.CanvasTexture(sc);
        tex.wrapS = THREE.RepeatWrapping;
        tex.wrapT = THREE.ClampToEdgeWrapping;
        return trackTex(tex);
      }

      const crowdTex = buildCrowdStandTexture();
      const standMat = trackMat(new THREE.MeshStandardMaterial({
        map: crowdTex,
        roughness: 0.92,
        metalness: 0.05
      }));
      const concreteMat = trackMat(new THREE.MeshStandardMaterial({
        color: 0x0f172a,
        roughness: 0.9,
        metalness: 0.1
      }));
      const roofMat = trackMat(new THREE.MeshStandardMaterial({
        color: 0x1e293b,
        roughness: 0.7,
        metalness: 0.35
      }));

      // Función para crear una tribuna escalonada completa en cualquiera de los 4 costados
      function createStadiumStand(width, distFromCenter, rotY) {
        const stGroup = new THREE.Group();
        stGroup.rotation.y = rotY;

        // Muro bajo de primera fila (podium)
        const wallGeo = trackGeo(new THREE.BoxGeometry(width, 2.2, 1.5));
        const wallMesh = new THREE.Mesh(wallGeo, concreteMat);
        wallMesh.position.set(0, 1.1, -distFromCenter);
        stGroup.add(wallMesh);

        // Rampa principal de grada baja y alta con público moteado
        const tierSlopeGeo = trackGeo(new THREE.PlaneGeometry(width, 26));
        const tierSlope = new THREE.Mesh(tierSlopeGeo, standMat);
        tierSlope.rotation.x = Math.PI * 0.31; // Inclinación hacia el césped
        tierSlope.position.set(0, 9.2, -distFromCenter - 10.5);
        stGroup.add(tierSlope);

        // Cierre trasero oscuro y marquesina superior (evita ver vacío detrás de las bandas)
        const backWallGeo = trackGeo(new THREE.BoxGeometry(width + 16, 22, 3));
        const backWall = new THREE.Mesh(backWallGeo, concreteMat);
        backWall.position.set(0, 11, -distFromCenter - 21.5);
        stGroup.add(backWall);

        const roofGeo = trackGeo(new THREE.BoxGeometry(width + 16, 1.0, 16));
        const roof = new THREE.Mesh(roofGeo, roofMat);
        roof.position.set(0, 21.8, -distFromCenter - 14.5);
        stGroup.add(roof);

        scene.add(stGroup);
      }

      // 4 Gradas perimetrales (Norte/Fondo, Sur/Cámara, Oeste/Gol Local, Este/Gol Visitante) + Cerramiento de esquinas del anillo
      createStadiumStand(PITCH_L + 44, PITCH_W / 2 + 5.8, 0);               // Tribuna Norte (frente a la cámara TV)
      createStadiumStand(PITCH_L + 44, PITCH_W / 2 + 8.5, Math.PI);         // Tribuna Sur (detrás de cámara)
      createStadiumStand(PITCH_W + 44, PITCH_L / 2 + 6.5, Math.PI / 2);     // Fondo Oeste (Portería Local)
      createStadiumStand(PITCH_W + 44, PITCH_L / 2 + 6.5, -Math.PI / 2);    // Fondo Este (Portería Visitante)

      // Esquinas diagonales cerradas del estadio y anillo perimetral oscuro para eliminar cualquier hueco gris
      const cornerWedgeGeo = trackGeo(new THREE.BoxGeometry(28, 22, 6));
      [
        [-PITCH_L / 2 - 12, -PITCH_W / 2 - 11, Math.PI * 0.25],
        [PITCH_L / 2 + 12, -PITCH_W / 2 - 11, -Math.PI * 0.25],
        [-PITCH_L / 2 - 12, PITCH_W / 2 + 12, Math.PI * 0.75],
        [PITCH_L / 2 + 12, PITCH_W / 2 + 12, -Math.PI * 0.75]
      ].forEach(([cx, cz, ry]) => {
        const cw = new THREE.Mesh(cornerWedgeGeo, concreteMat);
        cw.position.set(cx, 11, cz);
        cw.rotation.y = ry;
        scene.add(cw);
      });

      // 4 Torres de iluminación en las esquinas del estadio
      const towerPoleGeo = trackGeo(new THREE.CylinderGeometry(0.6, 0.9, 34, 8));
      const towerHeadGeo = trackGeo(new THREE.BoxGeometry(6.5, 3.2, 1.2));
      const towerGlowMat = trackMat(new THREE.MeshBasicMaterial({ color: 0xfefce8 }));
      [
        [-PITCH_L / 2 - 14, -PITCH_W / 2 - 12, 0.6],
        [PITCH_L / 2 + 14, -PITCH_W / 2 - 12, -0.6],
        [-PITCH_L / 2 - 14, PITCH_W / 2 + 14, 2.5],
        [PITCH_L / 2 + 14, PITCH_W / 2 + 14, -2.5]
      ].forEach(([tx, tz, ry]) => {
        const tGroup = new THREE.Group();
        tGroup.position.set(tx, 0, tz);
        tGroup.rotation.y = ry;
        const pole = new THREE.Mesh(towerPoleGeo, roofMat);
        pole.position.y = 17;
        tGroup.add(pole);
        const head = new THREE.Mesh(towerHeadGeo, towerGlowMat);
        head.position.set(0, 33.5, 0);
        head.rotation.x = 0.35;
        tGroup.add(head);
        scene.add(tGroup);
      });

      // 7. MODELADO 3D ANATÓMICO ESTILO FOOTBALL MANAGER 27 (HUMANOIDES MULTI-ARTICULADOS)
      const jerseyTexCache = new Map();
      const faceTexCache = new Map();
      const sockTexCache = new Map();

      function getJerseyTexture(jerseyHex, collarHex, numHex, number, playerName, isKeeper) {
        const cleanLast = String(playerName || "").trim().split(/\s+/).slice(-1)[0].toUpperCase().slice(0, 11);
        const key = `${jerseyHex}_${collarHex}_${numHex}_${number}_${cleanLast}_${isKeeper ? 1 : 0}`;
        if (jerseyTexCache.has(key)) return jerseyTexCache.get(key);

        const jc = document.createElement("canvas");
        jc.width = 512;
        jc.height = 512;
        const jg = jc.getContext("2d");

        // Fondo de tela técnica deportiva
        jg.fillStyle = jerseyHex || "#ef4444";
        jg.fillRect(0, 0, 512, 512);

        // Micro-textura de tejido transpirable y sombreado anatómico de pecho/espalda
        for (let y = 0; y < 512; y += 6) {
          jg.fillStyle = (y % 12 === 0) ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.035)";
          jg.fillRect(0, y, 512, 3);
        }

        // Sombreado volumétrico (cilindro mapeado: 0.25 = frente pecho, 0.75 = espalda dorsal)
        const grad = jg.createLinearGradient(0, 0, 512, 0);
        grad.addColorStop(0.00, "rgba(0,0,0,0.22)");
        grad.addColorStop(0.18, "rgba(255,255,255,0.08)");
        grad.addColorStop(0.32, "rgba(0,0,0,0.08)");
        grad.addColorStop(0.50, "rgba(0,0,0,0.24)");
        grad.addColorStop(0.75, "rgba(255,255,255,0.06)");
        grad.addColorStop(1.00, "rgba(0,0,0,0.22)");
        jg.fillStyle = grad;
        jg.fillRect(0, 0, 512, 512);

        // Cuello y ribete deportivo
        jg.fillStyle = collarHex || "#ffffff";
        jg.fillRect(0, 0, 512, 26);
        jg.fillStyle = "rgba(0,0,0,0.18)";
        jg.fillRect(0, 26, 512, 6);

        // Costuras laterales y patrocinador sutil en pecho (zona x ~ 128)
        jg.fillStyle = "rgba(255,255,255,0.16)";
        jg.fillRect(4, 32, 12, 460);
        jg.fillRect(244, 32, 12, 460);

        // Escudo del club en pecho izquierdo (x ~ 162, y ~ 115)
        jg.save();
        jg.fillStyle = collarHex || "#ffffff";
        jg.beginPath();
        jg.moveTo(156, 98);
        jg.lineTo(180, 98);
        jg.lineTo(180, 120);
        jg.lineTo(168, 134);
        jg.lineTo(156, 120);
        jg.closePath();
        jg.fill();
        jg.strokeStyle = "rgba(15,23,42,0.55)";
        jg.lineWidth = 2.5;
        jg.stroke();
        jg.restore();

        // Pequeño dorsal / sponsor en el pecho (x ~ 128)
        jg.fillStyle = numHex || "#ffffff";
        jg.globalAlpha = 0.85;
        jg.font = "900 32px 'Arial Black', sans-serif";
        jg.textAlign = "center";
        jg.textBaseline = "middle";
        jg.fillText(`${number || 9}`, 110, 118);
        jg.fillRect(88, 185, 80, 10);
        jg.globalAlpha = 1.0;

        // ESPALDA (x ~ 384): Apellido + Dorsal grande nítido estilo retransmisión TV
        if (cleanLast) {
          jg.font = "800 30px 'Arial Narrow', Impact, sans-serif";
          jg.textAlign = "center";
          jg.textBaseline = "middle";
          jg.lineWidth = 5;
          jg.strokeStyle = "rgba(15, 23, 42, 0.72)";
          jg.strokeText(cleanLast, 384, 102);
          jg.fillStyle = numHex || "#ffffff";
          jg.fillText(cleanLast, 384, 102);
        }

        jg.font = "900 176px 'Arial Black', Impact, sans-serif";
        jg.textAlign = "center";
        jg.textBaseline = "middle";
        jg.lineWidth = 10;
        jg.strokeStyle = "rgba(15, 23, 42, 0.78)";
        jg.strokeText(`${number || 9}`, 384, 268);
        jg.fillStyle = numHex || "#ffffff";
        jg.fillText(`${number || 9}`, 384, 268);

        const tex = new THREE.CanvasTexture(jc);
        tex.needsUpdate = true;
        trackTex(tex);
        jerseyTexCache.set(key, tex);
        return tex;
      }

      function getFaceTexture(skinHexInt, hairHexInt, hasBeard) {
        const key = `${skinHexInt}_${hairHexInt}_${hasBeard ? 1 : 0}`;
        if (faceTexCache.has(key)) return faceTexCache.get(key);

        const fc = document.createElement("canvas");
        fc.width = 256;
        fc.height = 128;
        const fg = fc.getContext("2d");

        const skinStr = "#" + skinHexInt.toString(16).padStart(6, "0");
        const hairStr = "#" + hairHexInt.toString(16).padStart(6, "0");

        fg.fillStyle = skinStr;
        fg.fillRect(0, 0, 256, 128);

        // Sombreado sutil de mejillas y mandíbula
        const faceGrad = fg.createLinearGradient(0, 0, 0, 128);
        faceGrad.addColorStop(0, "rgba(255,255,255,0.08)");
        faceGrad.addColorStop(0.7, "rgba(0,0,0,0.04)");
        faceGrad.addColorStop(1, "rgba(0,0,0,0.16)");
        fg.fillStyle = faceGrad;
        fg.fillRect(0, 0, 256, 128);

        // Rostro centrado en u = 0.25 (x = 64) para esfera estándar Three.js mirando hacia +Z
        const cx = 64;
        // Cejas
        fg.fillStyle = hairStr;
        fg.fillRect(cx - 20, 50, 13, 3.5);
        fg.fillRect(cx + 7, 50, 13, 3.5);

        // Ojos realistas
        fg.fillStyle = "#f8fafc";
        fg.beginPath();
        fg.ellipse(cx - 13, 59, 5.2, 3.2, 0, 0, Math.PI * 2);
        fg.ellipse(cx + 13, 59, 5.2, 3.2, 0, 0, Math.PI * 2);
        fg.fill();

        fg.fillStyle = "#1e293b";
        fg.beginPath();
        fg.arc(cx - 13, 59, 2.3, 0, Math.PI * 2);
        fg.arc(cx + 13, 59, 2.3, 0, Math.PI * 2);
        fg.fill();

        // Sombra de nariz
        fg.fillStyle = "rgba(80, 40, 20, 0.22)";
        fg.beginPath();
        fg.moveTo(cx, 58);
        fg.lineTo(cx - 3.5, 73);
        fg.lineTo(cx + 3.5, 73);
        fg.closePath();
        fg.fill();

        // Barba / sombra facial opcional
        if (hasBeard) {
          fg.fillStyle = hairStr;
          fg.globalAlpha = 0.36;
          fg.beginPath();
          fg.ellipse(cx, 88, 22, 16, 0, 0, Math.PI * 2);
          fg.fill();
          fg.globalAlpha = 1.0;
        }

        // Boca
        fg.strokeStyle = "rgba(110, 52, 42, 0.65)";
        fg.lineWidth = 2.6;
        fg.beginPath();
        fg.moveTo(cx - 8, 83);
        fg.quadraticCurveTo(cx, 86, cx + 8, 83);
        fg.stroke();

        const tex = new THREE.CanvasTexture(fc);
        tex.needsUpdate = true;
        trackTex(tex);
        faceTexCache.set(key, tex);
        return tex;
      }

      function getSockTexture(socksHex, accentHex) {
        const key = `${socksHex}_${accentHex}`;
        if (sockTexCache.has(key)) return sockTexCache.get(key);
        const sc = document.createElement("canvas");
        sc.width = 64;
        sc.height = 128;
        const sg = sc.getContext("2d");
        sg.fillStyle = socksHex || "#ffffff";
        sg.fillRect(0, 0, 64, 128);
        // Franjas superiores de la media
        sg.fillStyle = accentHex || "#ffffff";
        sg.fillRect(0, 8, 64, 10);
        sg.fillRect(0, 24, 64, 6);
        // Vendaje blanco en tobillo (detalle clásico de futbolista)
        sg.fillStyle = "#f8fafc";
        sg.fillRect(0, 108, 64, 20);
        const tex = new THREE.CanvasTexture(sc);
        tex.needsUpdate = true;
        trackTex(tex);
        sockTexCache.set(key, tex);
        return tex;
      }

      // Geometrías anatómicas compartidas (altura final exacta 1.80m sobre campo 105x68m)
      // Siluetas esculpidas con THREE.LatheGeometry (perfiles curvos, nada cuadrado)
      function buildLatheGeo(profile, segments, remapV) {
        // Perfil siempre de abajo a arriba para que las normales apunten hacia fuera
        if (profile[0][1] > profile[profile.length - 1][1]) profile = profile.slice().reverse();
        const pts = profile.map(([r, y]) => new THREE.Vector2(Math.max(0.0005, r), y));
        const geo = new THREE.LatheGeometry(pts, segments || 20);
        if (remapV) {
          // UV vertical proporcional a la altura real para que la textura (dorsal/escudo) no se deforme
          const pos = geo.attributes.position;
          const uv = geo.attributes.uv;
          let yMin = Infinity, yMax = -Infinity;
          for (let i = 0; i < pos.count; i++) {
            const y = pos.getY(i);
            if (y < yMin) yMin = y;
            if (y > yMax) yMax = y;
          }
          const span = Math.max(0.0001, yMax - yMin);
          for (let i = 0; i < pos.count; i++) {
            uv.setY(i, (pos.getY(i) - yMin) / span);
          }
          uv.needsUpdate = true;
        }
        geo.computeVertexNormals();
        return trackGeo(geo);
      }

      // Torso atlético en V: cintura fina, dorsales y pecho marcados, hombros anchos y trapecio suave
      const sharedTorsoLatheGeo = buildLatheGeo([
        [0.000, -0.040], [0.150, -0.040], [0.172, -0.010], [0.176, 0.050],
        [0.168, 0.120], [0.166, 0.180], [0.180, 0.250], [0.205, 0.320],
        [0.226, 0.390], [0.238, 0.450], [0.236, 0.495], [0.215, 0.530],
        [0.170, 0.556], [0.115, 0.572], [0.070, 0.580], [0.000, 0.582]
      ], 28, true);
      const sharedCollarGeo = trackGeo(new THREE.TorusGeometry(0.082, 0.018, 8, 20));
      const sharedNeckGeo = buildLatheGeo([
        [0.000, -0.07], [0.090, -0.07], [0.078, -0.02], [0.066, 0.03], [0.064, 0.07], [0.000, 0.07]
      ], 14);
      const sharedShoulderCapGeo = trackGeo(new THREE.SphereGeometry(0.094, 16, 12));
      // Pantalón: cadera redondeada y perneras con caída natural acampanada
      const sharedPelvisGeo = buildLatheGeo([
        [0.000, -0.105], [0.150, -0.105], [0.196, -0.075], [0.212, -0.010],
        [0.206, 0.050], [0.186, 0.095], [0.000, 0.100]
      ], 24);
      const sharedShortLegGeo = buildLatheGeo([
        [0.108, 0.115], [0.116, 0.060], [0.122, -0.010], [0.130, -0.075], [0.136, -0.115], [0.131, -0.122]
      ], 18);
      const sharedHipJointGeo = trackGeo(new THREE.SphereGeometry(0.112, 16, 12));
      const sharedHeadGeo = trackGeo(new THREE.SphereGeometry(0.135, 20, 16));
      const sharedEarGeo = trackGeo(new THREE.SphereGeometry(0.026, 8, 8));
      const sharedHairCapGeo = trackGeo(new THREE.SphereGeometry(0.143, 18, 12, 0, Math.PI * 2, 0, Math.PI * 0.56));
      const sharedHairFadeGeo = buildLatheGeo([
        [0.000, -0.035], [0.135, -0.035], [0.132, 0.015], [0.105, 0.040], [0.000, 0.045]
      ], 16);
      const sharedHairBunGeo = trackGeo(new THREE.SphereGeometry(0.055, 10, 10));
      // Extremidades con perfil muscular (cuádriceps, gemelo, antebrazo)
      const sharedThighGeo = buildLatheGeo([
        [0.092, 0.185], [0.101, 0.110], [0.100, 0.030], [0.092, -0.050], [0.080, -0.130], [0.073, -0.185]
      ], 16);
      const sharedKneeCapGeo = trackGeo(new THREE.SphereGeometry(0.075, 14, 10));
      const sharedCalfGeo = buildLatheGeo([
        [0.072, 0.195], [0.079, 0.120], [0.077, 0.050], [0.064, -0.040], [0.052, -0.130], [0.048, -0.195]
      ], 16);
      const sharedAnkleGeo = trackGeo(new THREE.SphereGeometry(0.050, 12, 10));
      // Botas redondeadas: horma elipsoidal + puntera + talón + suela ovalada
      const sharedBootUpperGeo = trackGeo(new THREE.SphereGeometry(0.056, 16, 12));
      const sharedBootToeGeo = trackGeo(new THREE.SphereGeometry(0.052, 14, 10));
      const sharedBootHeelGeo = trackGeo(new THREE.SphereGeometry(0.048, 12, 10));
      const sharedBootSoleGeo = trackGeo(new THREE.CylinderGeometry(0.056, 0.056, 0.020, 20));
      const sharedSleeveGeo = buildLatheGeo([
        [0.080, 0.125], [0.083, 0.060], [0.078, -0.020], [0.072, -0.090], [0.070, -0.120]
      ], 16);
      const sharedUpperArmGeo = buildLatheGeo([
        [0.064, 0.020], [0.060, -0.060], [0.054, -0.120]
      ], 14);
      const sharedElbowCapGeo = trackGeo(new THREE.SphereGeometry(0.056, 12, 10));
      const sharedForearmGeo = buildLatheGeo([
        [0.054, 0.130], [0.058, 0.070], [0.052, 0.000], [0.043, -0.080], [0.038, -0.130]
      ], 14);
      const sharedWristGeo = trackGeo(new THREE.SphereGeometry(0.039, 10, 8));
      const sharedHandGeo = trackGeo(new THREE.SphereGeometry(0.048, 12, 10));
      const sharedGloveGeo = trackGeo(new THREE.SphereGeometry(0.062, 14, 10));
      const sharedCarrierRingGeo = trackGeo(new THREE.RingGeometry(0.48, 0.66, 28));
      const sharedShadowDiscGeo = trackGeo(new THREE.CircleGeometry(0.44, 18));

      const skinTones = [0xf5cba7, 0xe5b887, 0xd49b6a, 0x8d5524, 0x6b3e26, 0xf1c27d];
      const hairColors = [0x171412, 0x3b2314, 0x6b3e19, 0x0f172a, 0x9a6b32, 0x2c1e16];
      const bootColors = [0x111827, 0xf97316, 0x38bdf8, 0xfacc15, 0xec4899, 0x22c55e, 0xf8fafc];

      const shadowDiscMat = trackMat(new THREE.MeshBasicMaterial({
        color: 0x021206,
        transparent: true,
        opacity: 0.40,
        depthWrite: false
      }));
      const carrierRingMat = trackMat(new THREE.MeshBasicMaterial({
        color: 0xfbbf24,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.90
      }));
      const soleMat = trackMat(new THREE.MeshStandardMaterial({ color: 0x090d16, roughness: 0.7 }));

      function createPlayer3DModel(side, pData, index) {
        const root = new THREE.Group();
        const bodyGroup = new THREE.Group();
        root.add(bodyGroup);

        const kit = side === "home" ? kits.home : kits.away;
        const isGK = Boolean(pData.isKeeper);
        const jerseyHex = isGK ? (kit.keeper || "#10b981") : (kit.jersey || (side === "home" ? homeTeam.primaryColor : awayTeam.primaryColor) || "#ef4444");
        const shortsHex = isGK ? (kit.keeper || "#065f46") : (kit.shorts || "#ffffff");
        const socksHex = isGK ? (kit.keeper || "#10b981") : (kit.socks || jerseyHex);
        const collarHex = isGK ? "#ffffff" : (kit.collar || "#ffffff");
        const numHex = isGK ? "#0f172a" : (kit.number || "#ffffff");

        const seed = (pData.number || (index + 1)) * 17 + (side === "home" ? 3 : 11);
        const skinCol = skinTones[seed % skinTones.length];
        const hairCol = hairColors[(seed * 3) % hairColors.length];
        const bootCol = bootColors[(seed * 7) % bootColors.length];
        const hairStyle = seed % 5; // 0: clásico, 1: fade alto, 2: rapado, 3: rizado/volumen, 4: moño/coleta
        const hasBeard = (seed % 3) === 0;

        const jerseyMat = trackMat(new THREE.MeshStandardMaterial({
          map: getJerseyTexture(jerseyHex, collarHex, numHex, pData.number || (index + 1), pData.player?.name, isGK),
          roughness: 0.58,
          metalness: 0.04
        }));
        const solidJerseyMat = trackMat(new THREE.MeshStandardMaterial({ color: jerseyHex, roughness: 0.60, metalness: 0.04 }));
        const collarMat = trackMat(new THREE.MeshStandardMaterial({ color: collarHex, roughness: 0.55 }));
        const shortsMat = trackMat(new THREE.MeshStandardMaterial({ color: shortsHex, roughness: 0.65 }));
        const socksMat = trackMat(new THREE.MeshStandardMaterial({
          map: getSockTexture(socksHex, collarHex),
          roughness: 0.68
        }));
        const skinMat = trackMat(new THREE.MeshStandardMaterial({ color: skinCol, roughness: 0.58, metalness: 0.02 }));
        const faceMat = trackMat(new THREE.MeshStandardMaterial({
          map: getFaceTexture(skinCol, hairCol, hasBeard),
          roughness: 0.56,
          metalness: 0.02
        }));
        const hairMat = trackMat(new THREE.MeshStandardMaterial({ color: hairCol, roughness: 0.86 }));
        const bootMat = trackMat(new THREE.MeshStandardMaterial({ color: bootCol, roughness: 0.34, metalness: 0.18 }));
        const gloveMat = trackMat(new THREE.MeshStandardMaterial({ color: isGK ? 0xd9f99d : skinCol, roughness: 0.48 }));

        // Sombra de contacto en césped + Aro de portador
        const contactShadow = new THREE.Mesh(sharedShadowDiscGeo, shadowDiscMat);
        contactShadow.rotation.x = -Math.PI / 2;
        contactShadow.position.y = 0.02;
        root.add(contactShadow);

        const carrierRing = new THREE.Mesh(sharedCarrierRingGeo, carrierRingMat);
        carrierRing.rotation.x = -Math.PI / 2;
        carrierRing.position.y = 0.032;
        carrierRing.visible = false;
        root.add(carrierRing);

        // --- TREN SUPERIOR (Torso atlético en V esculpido con LatheGeometry + Hombros + Cuello + Cabeza) ---
        const torsoGroup = new THREE.Group();
        torsoGroup.position.set(0, 0.94, 0);
        bodyGroup.add(torsoGroup);

        // Pecho, espalda y cintura en una sola superficie curva continua con textura de camiseta
        const upperTorso = new THREE.Mesh(sharedTorsoLatheGeo, jerseyMat);
        upperTorso.scale.set(1.14, 1.0, 0.70);
        upperTorso.castShadow = true;
        upperTorso.receiveShadow = true;
        torsoGroup.add(upperTorso);

        // Cuello de la camiseta
        const collarRing = new THREE.Mesh(sharedCollarGeo, collarMat);
        collarRing.rotation.x = Math.PI / 2;
        collarRing.scale.set(1.0, 0.82, 1.0);
        collarRing.position.set(0, 0.575, 0);
        torsoGroup.add(collarRing);

        // Deltoides redondeados que funden torso y brazo sin cortes
        [-0.252, 0.252].forEach(sx => {
          const sh = new THREE.Mesh(sharedShoulderCapGeo, solidJerseyMat);
          sh.scale.set(1.0, 0.92, 0.88);
          sh.position.set(sx, 0.485, 0);
          sh.castShadow = true;
          torsoGroup.add(sh);
        });

        // Cuello anatómico y Cabeza con rostro + orejas + peinado variado
        const neck = new THREE.Mesh(sharedNeckGeo, skinMat);
        neck.position.set(0, 0.63, 0.005);
        neck.castShadow = true;
        torsoGroup.add(neck);

        const headGroup = new THREE.Group();
        headGroup.position.set(0, 0.79, 0.012);
        const headMesh = new THREE.Mesh(sharedHeadGeo, faceMat);
        headMesh.scale.set(0.88, 1.04, 0.95);
        headMesh.castShadow = true;
        headGroup.add(headMesh);

        // Orejas
        [-0.118, 0.118].forEach(ex => {
          const ear = new THREE.Mesh(sharedEarGeo, skinMat);
          ear.scale.set(0.65, 1.15, 0.8);
          ear.position.set(ex, 0.0, -0.01);
          headGroup.add(ear);
        });

        // Peinado según semilla del futbolista
        if (hairStyle !== 2) {
          const hairCap = new THREE.Mesh(sharedHairCapGeo, hairMat);
          hairCap.scale.set(hairStyle === 3 ? 0.98 : 0.91, hairStyle === 3 ? 1.12 : 1.02, 0.98);
          hairCap.rotation.x = -0.20;
          hairCap.position.set(0, 0.018, -0.008);
          hairCap.castShadow = true;
          headGroup.add(hairCap);

          if (hairStyle === 1) {
            const topFade = new THREE.Mesh(sharedHairFadeGeo, hairMat);
            topFade.scale.set(0.85, 1.0, 0.90);
            topFade.position.set(0, 0.115, 0.0);
            headGroup.add(topFade);
          } else if (hairStyle === 4) {
            const bun = new THREE.Mesh(sharedHairBunGeo, hairMat);
            bun.position.set(0, 0.07, -0.145);
            headGroup.add(bun);
          }
        }
        torsoGroup.add(headGroup);

        // --- BRAZOS MULTI-ARTICULADOS (Hombro -> Codo -> Muñeca -> Mano/Guante) con esferas de unión ---
        const armSkinMat = isGK ? solidJerseyMat : skinMat;
        function buildArticulatedArm(sideSign) {
          const armPivot = new THREE.Group();
          armPivot.position.set(sideSign * 0.272, 0.478, 0);

          // Esfera de hombro (mismo material que la manga) que rota con el brazo
          const shoulderJoint = new THREE.Mesh(sharedShoulderCapGeo, solidJerseyMat);
          shoulderJoint.scale.set(0.86, 0.86, 0.86);
          shoulderJoint.castShadow = true;
          armPivot.add(shoulderJoint);

          const sleeve = new THREE.Mesh(sharedSleeveGeo, solidJerseyMat);
          sleeve.position.y = -0.11;
          sleeve.castShadow = true;
          armPivot.add(sleeve);

          // Bíceps visible bajo la manga
          const upperArm = new THREE.Mesh(sharedUpperArmGeo, armSkinMat);
          upperArm.position.y = -0.225;
          upperArm.castShadow = true;
          armPivot.add(upperArm);

          const elbowPivot = new THREE.Group();
          elbowPivot.position.set(0, -0.255, 0);

          // Esfera de codo (mismo material que antebrazo) que oculta el corte al flexionar
          const elbowJoint = new THREE.Mesh(sharedElbowCapGeo, armSkinMat);
          elbowPivot.add(elbowJoint);

          const forearm = new THREE.Mesh(sharedForearmGeo, armSkinMat);
          forearm.position.y = -0.13;
          forearm.castShadow = true;
          elbowPivot.add(forearm);

          const wrist = new THREE.Mesh(sharedWristGeo, isGK ? gloveMat : skinMat);
          wrist.position.y = -0.262;
          elbowPivot.add(wrist);

          const hand = new THREE.Mesh(isGK ? sharedGloveGeo : sharedHandGeo, gloveMat);
          hand.scale.set(0.82, 1.12, 0.62);
          hand.position.y = -0.302;
          hand.castShadow = true;
          elbowPivot.add(hand);

          armPivot.add(elbowPivot);
          torsoGroup.add(armPivot);
          return { armPivot, elbowPivot };
        }

        const leftArmRig = buildArticulatedArm(-1);
        const rightArmRig = buildArticulatedArm(1);

        // --- PELVIS Y PANTALÓN CORTO (LatheGeometry redondeada) ---
        const pelvis = new THREE.Mesh(sharedPelvisGeo, shortsMat);
        pelvis.scale.set(1.04, 1.0, 0.76);
        pelvis.position.set(0, 0.88, 0);
        pelvis.castShadow = true;
        bodyGroup.add(pelvis);

        // --- PIERNAS MULTI-ARTICULADAS (Cadera -> Rodilla -> Tobillo -> Bota) con esferas de unión ---
        function buildArticulatedLeg(offsetX) {
          const hipPivot = new THREE.Group();
          hipPivot.position.set(offsetX, 0.84, 0);

          // Esfera de cadera (material del pantalón) para unir pelvis y pernera sin cortes
          const hipJoint = new THREE.Mesh(sharedHipJointGeo, shortsMat);
          hipJoint.scale.set(1.0, 0.95, 0.92);
          hipJoint.castShadow = true;
          hipPivot.add(hipJoint);

          // Pernera con caída natural que acompaña al muslo
          const shortLeg = new THREE.Mesh(sharedShortLegGeo, shortsMat);
          shortLeg.position.y = -0.085;
          shortLeg.castShadow = true;
          hipPivot.add(shortLeg);

          // Muslo atlético (cuádriceps)
          const thigh = new THREE.Mesh(sharedThighGeo, skinMat);
          thigh.position.y = -0.225;
          thigh.castShadow = true;
          hipPivot.add(thigh);

          // Pivote de rodilla (flexión natural al correr y chutar)
          const kneePivot = new THREE.Group();
          kneePivot.position.set(0, -0.41, 0);

          // Rótula esférica dentro del pivote: cubre la unión muslo-gemelo en cualquier flexión
          const kneeCap = new THREE.Mesh(sharedKneeCapGeo, skinMat);
          kneeCap.scale.set(1.0, 1.0, 1.02);
          kneeCap.castShadow = true;
          kneePivot.add(kneeCap);

          // Gemelo con media y franjas
          const calf = new THREE.Mesh(sharedCalfGeo, socksMat);
          calf.position.y = -0.195;
          calf.castShadow = true;
          kneePivot.add(calf);

          // Tobillo redondeado
          const ankle = new THREE.Mesh(sharedAnkleGeo, socksMat);
          ankle.position.y = -0.385;
          kneePivot.add(ankle);

          // Bota de fútbol redondeada: horma elipsoidal + puntera + talón + suela ovalada
          const bootGroup = new THREE.Group();
          bootGroup.position.set(0, -0.40, 0.04);

          const bootUpper = new THREE.Mesh(sharedBootUpperGeo, bootMat);
          bootUpper.scale.set(0.98, 0.78, 2.05);
          bootUpper.position.set(0, 0.002, 0.012);
          bootUpper.castShadow = true;
          bootGroup.add(bootUpper);

          const bootToe = new THREE.Mesh(sharedBootToeGeo, bootMat);
          bootToe.scale.set(0.96, 0.66, 1.15);
          bootToe.position.set(0, -0.014, 0.098);
          bootToe.castShadow = true;
          bootGroup.add(bootToe);

          const bootHeel = new THREE.Mesh(sharedBootHeelGeo, bootMat);
          bootHeel.scale.set(1.0, 0.92, 0.95);
          bootHeel.position.set(0, 0.004, -0.078);
          bootGroup.add(bootHeel);

          const bootSole = new THREE.Mesh(sharedBootSoleGeo, soleMat);
          bootSole.scale.set(1.0, 1.0, 2.35);
          bootSole.position.set(0, -0.044, 0.012);
          bootGroup.add(bootSole);

          kneePivot.add(bootGroup);
          hipPivot.add(kneePivot);
          bodyGroup.add(hipPivot);
          return { hipPivot, kneePivot };
        }

        const leftLegRig = buildArticulatedLeg(-0.112);
        const rightLegRig = buildArticulatedLeg(0.112);

        // Variación natural de estatura humana (1.76m - 1.88m)
        const heightScale = 0.96 + ((seed % 7) * 0.014);
        bodyGroup.scale.set(heightScale, heightScale, heightScale);

        // Etiqueta flotante con el nombre (visible solo en portador o receptor del pase)
        const buildNameTagTexture = (rawName, teamSide) => {
          const nc = document.createElement("canvas");
          nc.width = 320;
          nc.height = 76;
          const ng = nc.getContext("2d");
          const parts = String(rawName || "Jugador").trim().split(/\s+/);
          const shortLabel = parts.length > 1 ? `${parts[0][0]}. ${parts.slice(1).join(" ")}` : parts[0];
          const accent = teamSide === "home" ? (homeTeam.primaryColor || "#ef4444") : (awayTeam.primaryColor || "#3b82f6");

          ng.fillStyle = "rgba(15, 23, 42, 0.88)";
          ng.strokeStyle = accent;
          ng.lineWidth = 4;
          const rx = 10, ry = 10, rw = 300, rh = 56, rad = 16;
          ng.beginPath();
          ng.moveTo(rx + rad, ry);
          ng.lineTo(rx + rw - rad, ry);
          ng.quadraticCurveTo(rx + rw, ry, rx + rw, ry + rad);
          ng.lineTo(rx + rw, ry + rh - rad);
          ng.quadraticCurveTo(rx + rw, ry + rh, rx + rw - rad, ry + rh);
          ng.lineTo(rx + rad, ry + rh);
          ng.quadraticCurveTo(rx, ry + rh, rx, ry + rh - rad);
          ng.lineTo(rx, ry + rad);
          ng.quadraticCurveTo(rx, ry, rx + rad, ry);
          ng.closePath();
          ng.fill();
          ng.stroke();

          ng.fillStyle = "#ffffff";
          ng.font = "bold 28px Inter, system-ui, sans-serif";
          ng.textAlign = "center";
          ng.textBaseline = "middle";
          ng.fillText(shortLabel.slice(0, 18), 160, 39);

          const tex = new THREE.CanvasTexture(nc);
          tex.minFilter = THREE.LinearFilter;
          return trackTex(tex);
        };

        const nameSpriteMat = trackMat(new THREE.SpriteMaterial({
          map: buildNameTagTexture(pData.player?.name || `#${pData.number}`, side),
          transparent: true,
          depthTest: false,
          depthWrite: false
        }));
        const nameSprite = new THREE.Sprite(nameSpriteMat);
        nameSprite.position.set(0, 2.25, 0);
        nameSprite.scale.set(2.6, 0.62, 1);
        nameSprite.visible = false;
        nameSprite.renderOrder = 20;
        root.add(nameSprite);

        scene.add(root);
        return {
          root,
          bodyGroup,
          torsoGroup,
          headGroup,
          leftLeg: leftLegRig.hipPivot,
          leftKnee: leftLegRig.kneePivot,
          rightLeg: rightLegRig.hipPivot,
          rightKnee: rightLegRig.kneePivot,
          leftArm: leftArmRig.armPivot,
          leftElbow: leftArmRig.elbowPivot,
          rightArm: rightArmRig.armPivot,
          rightElbow: rightArmRig.elbowPivot,
          carrierRing,
          nameSprite,
          nameSpriteMat,
          buildNameTagTexture,
          lastLabelName: pData.player?.name || `#${pData.number}`,
          jerseyMat,
          solidJerseyMat,
          shortsMat,
          socksMat,
          skinMat,
          hairMat,
          bootMat,
          jerseyHex,
          shortsHex,
          socksHex,
          skinCol,
          hairCol,
          bootCol,
          heightScale,
          smoothSpeed: 0,
          kickT: 9,
          kickActive: false,
          prevKickPose: false,
          side,
          lastNumber: pData.number,
          isKeeper: isGK,
          yaw: side === "home" ? Math.PI / 2 : -Math.PI / 2,
          stridePhase: index * 1.3,
          prevX: simToWorldX(pData.curX ?? 50),
          prevZ: simToWorldZ(pData.curY ?? 50)
        };
      }

      const homeModels = simulator.home2D.map((p, i) => createPlayer3DModel("home", p, i));
      const awayModels = simulator.away2D.map((p, i) => createPlayer3DModel("away", p, i));

      // Balón 3D esférico con textura de pentágonos y sombra proyectada
      function buildBallTexture() {
        const bc = document.createElement("canvas");
        bc.width = 256;
        bc.height = 128;
        const bg = bc.getContext("2d");
        bg.fillStyle = "#ffffff";
        bg.fillRect(0, 0, 256, 128);

        // Pentágonos clásicos y detalles geométricos de balón oficial
        bg.fillStyle = "#0f172a";
        const spots = [
          [32, 32], [96, 28], [160, 32], [224, 28],
          [64, 64], [128, 64], [192, 64],
          [32, 98], [96, 100], [160, 98], [224, 100]
        ];
        spots.forEach(([sx, sy]) => {
          bg.beginPath();
          bg.arc(sx, sy, 12, 0, Math.PI * 2);
          bg.fill();
        });
        bg.strokeStyle = "#334155";
        bg.lineWidth = 2.5;
        for (let i = 0; i < spots.length - 1; i++) {
          bg.beginPath();
          bg.moveTo(spots[i][0], spots[i][1]);
          bg.lineTo(spots[i + 1][0], spots[i + 1][1]);
          bg.stroke();
        }
        const tex = new THREE.CanvasTexture(bc);
        return trackTex(tex);
      }

      const ballRadius = 0.25;
      const ballGeo = trackGeo(new THREE.SphereGeometry(ballRadius, 24, 24));
      const ballMat = trackMat(new THREE.MeshStandardMaterial({
        map: buildBallTexture(),
        roughness: 0.32,
        metalness: 0.08
      }));
      const ballMesh = new THREE.Mesh(ballGeo, ballMat);
      ballMesh.castShadow = true;
      ballMesh.receiveShadow = true;
      ballMesh.position.set(0, ballRadius, 0);
      scene.add(ballMesh);

      // Sombra de contacto directa bajo el balón para máxima claridad visual de altura
      const ballShadowGeo = trackGeo(new THREE.CircleGeometry(0.30, 20));
      const ballShadowMat = trackMat(new THREE.MeshBasicMaterial({
        color: 0x020617,
        transparent: true,
        opacity: 0.48,
        depthWrite: false
      }));
      const ballGroundShadow = new THREE.Mesh(ballShadowGeo, ballShadowMat);
      ballGroundShadow.rotation.x = -Math.PI / 2;
      ballGroundShadow.position.set(0, 0.025, 0);
      scene.add(ballGroundShadow);

      // Partículas 3D de lluvia si el clima del partido es lluvioso
      let rainSystem = null;
      if (matchWeather.id === "rain") {
        const rainCount = 900;
        const rainGeo = trackGeo(new THREE.BufferGeometry());
        const positions = new Float32Array(rainCount * 3);
        for (let i = 0; i < rainCount; i++) {
          positions[i * 3] = (Math.random() - 0.5) * 130;
          positions[i * 3 + 1] = Math.random() * 38;
          positions[i * 3 + 2] = (Math.random() - 0.5) * 85;
        }
        rainGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        const rainMat = trackMat(new THREE.PointsMaterial({
          color: 0xbae6fd,
          size: 0.28,
          transparent: true,
          opacity: 0.52
        }));
        rainSystem = new THREE.Points(rainGeo, rainMat);
        scene.add(rainSystem);
      }

      // Interacción al tocar el canvas: alternar ángulo de cámara 3D manteniendo TV Broadcast por defecto
      const camBadgeEl = container.querySelector("#camera-mode-badge");
      targetCanvas.onclick = () => {
        if (cameraMode === "broadcast") {
          cameraMode = "action";
          if (camBadgeEl) camBadgeEl.innerHTML = `<span>🎥 3D ZOOM</span>`;
        } else if (cameraMode === "action") {
          cameraMode = "tactical";
          if (camBadgeEl) camBadgeEl.innerHTML = `<span>🎥 3D TÁCTICA</span>`;
        } else {
          cameraMode = "broadcast";
          if (camBadgeEl) camBadgeEl.innerHTML = `<span>🎥 3D TV</span>`;
        }
      };

      let prevBallWX = 0;
      let prevBallWZ = 0;
      let smoothFocusX = 0;
      let smoothFocusZ = 0;
      let lastCamRenderTs = performance.now();

      function updateAndRender(closestLiveP, minLiveDist) {
        const rect = targetCanvas.getBoundingClientRect();
        const w = rect.width > 0 ? rect.width : 480;
        const h = rect.height > 0 ? rect.height : 290;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        if (targetCanvas.width !== Math.round(w * dpr) || targetCanvas.height !== Math.round(h * dpr)) {
          renderer.setSize(w, h, false);
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        }

        const nowMs = performance.now();
        const frameDt = Math.min(0.05, Math.max(0.004, (nowMs - lastCamRenderTs) * 0.001));
        lastCamRenderTs = nowMs;
        const nowSec = nowMs * 0.001;

        // Ondulación suave de banderines de córner y marquesina LED
        cornerFlags.forEach((fl, idx) => {
          fl.rotation.y = Math.sin(nowSec * 4.5 + idx) * 0.18;
        });

        // Deformación elástica de las redes de portería tras un gol
        if (netRippleH > 0.005) {
          netRippleH *= 0.92;
          const wave = Math.sin(nowSec * 24) * netRippleH * 0.22;
          homeGoal3D.netGroup.scale.set(1 + netRippleH * 0.25 + wave, 1, 1 + wave * 0.4);
        } else {
          homeGoal3D.netGroup.scale.set(1, 1, 1);
        }
        if (netRippleA > 0.005) {
          netRippleA *= 0.92;
          const wave = Math.sin(nowSec * 24) * netRippleA * 0.22;
          awayGoal3D.netGroup.scale.set(1 + netRippleA * 0.25 + wave, 1, 1 + wave * 0.4);
        } else {
          awayGoal3D.netGroup.scale.set(1, 1, 1);
        }

        // Posición 3D del balón
        const ballWX = simToWorldX(simulator.ball.x);
        const ballWZ = simToWorldZ(simulator.ball.y);
        // En simulación continua y replayBuffer, usar siempre la altura física real de simulator.ball.z
        const ballWY = ballRadius + simToWorldY(simulator.ball.z);

        const bvx = ballWX - prevBallWX;
        const bvz = ballWZ - prevBallWZ;
        prevBallWX = ballWX;
        prevBallWZ = ballWZ;

        ballMesh.position.set(ballWX, ballWY, ballWZ);
        ballMesh.rotation.z -= bvx * 1.6;
        ballMesh.rotation.x += bvz * 1.6;

        ballGroundShadow.position.set(ballWX, 0.025, ballWZ);
        const heightScale = Math.max(0.45, 1 - (ballWY - ballRadius) * 0.12);
        ballGroundShadow.scale.set(heightScale, heightScale, 1);
        ballShadowMat.opacity = Math.max(0.14, 0.48 * heightScale);

        // Jugador focal: quien conduce o, en cuanto suelta el pase, el receptor objetivo
        const focusPlayer = simulator.useRealTime
          ? (simulator.ball.carrier || simulator.ball.passTarget || (minLiveDist < 4.5 ? closestLiveP : null))
          : (minLiveDist < 5.8 ? closestLiveP : null);

        // Animación continua de vallas LED perimetrales estilo TV
        if (adTex) {
          adTex.offset.x = (nowSec * 0.025) % 1;
        }

        // Actualizar los 22 jugadores 3D (11 Locales + 11 Visitantes)
        const syncTeamModels = (simArr, modelsArr) => {
          simArr.forEach((p, idx) => {
            const m = modelsArr[idx];
            if (!m) return;

            // Si hubo sustitución y cambió el dorsal o nombre, actualizar texturas
            if (p.number && p.number !== m.lastNumber) {
              m.lastNumber = p.number;
              const kit = m.side === "home" ? kits.home : kits.away;
              const jerseyHex = m.isKeeper ? (kit.keeper || "#10b981") : (kit.jersey || (m.side === "home" ? homeTeam.primaryColor : awayTeam.primaryColor) || "#ef4444");
              const collarHex = m.isKeeper ? "#ffffff" : (kit.collar || "#ffffff");
              const numHex = m.isKeeper ? "#0f172a" : (kit.number || "#ffffff");
              m.jerseyMat.map = getJerseyTexture(jerseyHex, collarHex, numHex, p.number, p.player?.name, m.isKeeper);
              m.jerseyMat.needsUpdate = true;
            }
            const curName = p.player?.name || `#${p.number}`;
            if (m.nameSpriteMat && curName !== m.lastLabelName) {
              m.lastLabelName = curName;
              m.nameSpriteMat.map = m.buildNameTagTexture(curName, m.side);
              m.nameSpriteMat.needsUpdate = true;
            }

            const wx = simToWorldX(p.curX);
            const wz = simToWorldZ(p.curY);
            const wy = Math.max(0, (p.curZ || 0) * 1.15);

            const vx = wx - m.prevX;
            const vz = wz - m.prevZ;
            const speed = Math.hypot(vx, vz);
            m.prevX = wx;
            m.prevZ = wz;

            m.root.position.set(wx, wy, wz);

            // Orientación corporal suave (lerp del ángulo): mira hacia donde corre o hacia el balón
            let targetYaw = m.yaw;
            if (simulator.useRealTime && p.facingX !== undefined && p.facingZ !== undefined) {
              if ((p.speedMps || 0) > 0.45) {
                targetYaw = Math.atan2(p.facingX, p.facingZ);
              } else {
                const dbx = ballWX - wx;
                const dbz = ballWZ - wz;
                if (Math.hypot(dbx, dbz) > 0.15) {
                  targetYaw = Math.atan2(dbx, dbz);
                }
              }
            } else if (speed > 0.018) {
              targetYaw = Math.atan2(vx, vz);
            } else {
              const dbx = ballWX - wx;
              const dbz = ballWZ - wz;
              if (Math.hypot(dbx, dbz) > 0.2) {
                targetYaw = Math.atan2(dbx, dbz);
              }
            }
            const angleDiff = Math.atan2(Math.sin(targetYaw - m.yaw), Math.cos(targetYaw - m.yaw));
            m.yaw += angleDiff * 0.14;
            m.bodyGroup.rotation.y = m.yaw;

            // Seguimiento natural de cabeza hacia el balón
            if (m.headGroup) {
              const ballYaw = Math.atan2(ballWX - wx, ballWZ - wz);
              const headDelta = Math.atan2(Math.sin(ballYaw - m.yaw), Math.cos(ballYaw - m.yaw));
              m.headGroup.rotation.y = Math.max(-0.65, Math.min(0.65, headDelta * 0.65));
            }

            // Aro indicador y etiqueta flotante solo sobre portador o receptor del pase
            const isFocus = (p === focusPlayer);
            m.carrierRing.visible = isFocus;
            if (m.nameSprite) {
              m.nameSprite.visible = isFocus;
            }
            if (isFocus) {
              const pulse = 1 + Math.sin(nowSec * 8) * 0.08;
              m.carrierRing.scale.set(pulse, pulse, 1);
            }

            // Animación procedural fluida (independiente de FPS): carrera biomecánica, golpeo en 3 fases y poses especiales
            const simPose = p.pose;
            const dtA = Math.max(0.001, Math.min(0.05, frameDt || (1 / 60)));
            const kJoint = 1 - Math.exp(-14 * dtA);
            const damp = (cur, target, k) => cur + (target - cur) * (k === undefined ? kJoint : k);

            // Velocidad real medida en el visor (m/s) suavizada para evitar saltos de ritmo
            const measuredMps = Math.min(10.5, speed / dtA);
            m.smoothSpeed = (m.smoothSpeed || 0) + (measuredMps - (m.smoothSpeed || 0)) * (1 - Math.exp(-7 * dtA));
            const mps = m.smoothSpeed;

            const isKickPose = (simPose === "kick" || simPose === "SHOT_FOLLOW_THROUGH" || simPose === "PASS_DELIVERY" || simPose === "SHOOT" || simPose === "PASS");
            if (isKickPose && !m.prevKickPose) {
              m.kickT = 0;
              m.kickActive = true;
            }
            m.prevKickPose = isKickPose;
            if (m.kickActive) {
              m.kickT += dtA;
              if (!isKickPose && m.kickT > 0.62) m.kickActive = false;
            }

            let tBodyY = 0, tBodyRX = 0, tBodyRZ = 0;
            let tTorsoRX = 0.02, tTorsoRY = 0, tTorsoRZ = 0;
            let tLLegX = 0, tRLegX = 0, tLLegZ = 0, tRLegZ = 0, tLKneeX = 0.10, tRKneeX = 0.10;
            let tLArmX = 0.04, tRArmX = 0.04, tLArmZ = -0.10, tRArmZ = 0.10;
            let tLElbowX = -0.30, tRElbowX = -0.30;
            let k = kJoint;

            if (simPose === "dive" || simPose === "DIVE_LEFT" || simPose === "DIVE_RIGHT") {
              const dir = simPose === "DIVE_RIGHT" ? -1 : (ballWZ >= wz ? -1 : 1);
              tBodyY = 0.35;
              tBodyRZ = dir * 1.28;
              tLArmX = -2.65; tRArmX = -2.65;
              tLElbowX = -0.15; tRElbowX = -0.15;
              tLLegX = 0.22; tRLegX = -0.18;
              tLKneeX = 0.35; tRKneeX = 0.45;
              k = 1 - Math.exp(-10 * dtA);
            } else if (simPose === "SLIDE_BLOCK" || simPose === "slide") {
              tBodyY = -0.35;
              tBodyRX = -0.92;
              tLLegX = -1.15; tRLegX = 0.45;
              tLKneeX = 0.15; tRKneeX = 1.25;
              tLArmX = -0.5; tRArmX = 0.65;
              tLElbowX = -0.6; tRElbowX = -0.8;
              k = 1 - Math.exp(-10 * dtA);
            } else if (simPose === "jump" || simPose === "HEADER") {
              tBodyY = 0.48;
              tTorsoRX = 0.20;
              tLLegX = -0.22; tRLegX = 0.18;
              tLKneeX = 0.68; tRKneeX = 0.72;
              tLArmX = -0.45; tRArmX = -0.45;
              tLArmZ = -0.55; tRArmZ = 0.55;
              tLElbowX = -0.75; tRElbowX = -0.75;
              k = 1 - Math.exp(-10 * dtA);
            } else if (simPose === "celebrate" || simPose === "CELEBRATE_JUMP") {
              tBodyY = Math.abs(Math.sin(nowSec * 10 + idx)) * 0.36;
              tLArmX = -2.55; tRArmX = -2.55;
              tLArmZ = -0.35; tRArmZ = 0.35;
              tLElbowX = -0.25; tRElbowX = -0.25;
              tLLegX = 0.2; tRLegX = -0.2;
              tLKneeX = 0.45; tRKneeX = 0.45;
            } else if (m.kickActive) {
              // GOLPEO EN 3 FASES: armado (pierna atrás, rodilla flexionada) -> impacto (latigazo) -> acompañamiento
              const t = m.kickT;
              const ease = (x) => x * x * (3 - 2 * x);
              let legX, kneeX;
              if (t < 0.17) {
                const u = ease(t / 0.17);
                legX = 0.78 * u;
                kneeX = 0.15 + 1.25 * u;
                tTorsoRX = -0.04 - 0.08 * u;
                tTorsoRY = 0.22 * u;
              } else if (t < 0.29) {
                const u = ease((t - 0.17) / 0.12);
                legX = 0.78 - 1.98 * u;
                kneeX = 1.40 - 1.25 * u;
                tTorsoRY = 0.22 - 0.50 * u;
                tTorsoRX = -0.12 + 0.02 * u;
              } else {
                const u = ease(Math.min(1, (t - 0.29) / 0.33));
                legX = -1.20 + 0.75 * u;
                kneeX = 0.15 + 0.20 * u;
                tTorsoRY = -0.28 + 0.20 * u;
                tTorsoRX = -0.10 + 0.08 * u;
              }
              tRLegX = legX;
              tRKneeX = kneeX;
              tLLegX = 0.16;
              tLKneeX = 0.32;
              tBodyY = -0.035;
              // Brazos de equilibrio: el contrario abierto y adelantado, el del lado del golpeo atrás
              tLArmX = -0.45; tLArmZ = -0.72; tLElbowX = -0.55;
              tRArmX = 0.55; tRArmZ = 0.30; tRElbowX = -0.70;
              tTorsoRZ = 0.06;
              k = 1 - Math.exp(-26 * dtA);
            } else {
              // CARRERA BIOMECÁNICA: cadencia y amplitud dependientes de la velocidad real (trote -> sprint)
              const gaitW = clamp((mps - 0.25) / 1.4, 0, 1);
              const strideHz = 0.85 + Math.min(mps, 9) * 0.135;
              m.stridePhase += Math.PI * 2 * strideHz * dtA * (0.35 + 0.65 * gaitW);
              const ph = m.stridePhase;
              const s = Math.sin(ph);
              const c = Math.cos(ph);
              const sprintF = clamp((mps - 3.5) / 4.5, 0, 1);

              const hipAmp = (0.22 + Math.min(mps, 9) * 0.075) * gaitW;
              const kneeAmp = (0.45 + Math.min(mps, 9) * 0.15) * gaitW;
              const armAmp = (0.16 + Math.min(mps, 9) * 0.085) * gaitW;

              // Caderas en oposición (avance = rotación negativa)
              tLLegX = -s * hipAmp;
              tRLegX = s * hipAmp;
              // Rodilla: flexión máxima en la fase de recobro (pierna pasando bajo el cuerpo hacia delante),
              // leve amortiguación en el apoyo y talón alto al esprintar
              const swingL = Math.max(0, c);
              const swingR = Math.max(0, -c);
              tLKneeX = 0.10 + kneeAmp * Math.pow(swingL, 1.4) + 0.14 * gaitW * Math.max(0, s) * (1 - swingL);
              tRKneeX = 0.10 + kneeAmp * Math.pow(swingR, 1.4) + 0.14 * gaitW * Math.max(0, -s) * (1 - swingR);

              // Brazos contrarios a las piernas con codos más cerrados al esprintar
              tLArmX = s * armAmp + 0.04;
              tRArmX = -s * armAmp + 0.04;
              tLArmZ = -0.10 - 0.05 * sprintF;
              tRArmZ = 0.10 + 0.05 * sprintF;
              const elbowBase = 0.30 + (0.55 + 0.45 * sprintF) * gaitW;
              tLElbowX = -elbowBase - 0.22 * gaitW * Math.max(0, -s);
              tRElbowX = -elbowBase - 0.22 * gaitW * Math.max(0, s);

              // Rebote vertical (2 por zancada), inclinación del tronco hacia delante y contra-rotación de hombros
              tBodyY = Math.abs(s) * Math.min(0.055, 0.007 * mps) * gaitW - 0.012 * gaitW;
              tTorsoRX = 0.03 + Math.min(0.30, 0.028 * mps) * gaitW;
              tTorsoRY = s * (0.05 + 0.06 * sprintF) * gaitW;
              tBodyRZ = c * 0.025 * gaitW;

              // Inclinación hacia el interior de la curva al cambiar de dirección a velocidad
              tBodyRZ += clamp(-angleDiff * 0.9 * Math.min(1, mps / 6), -0.18, 0.18);

              if (gaitW < 1) {
                // Reposo activo: respiración, peso repartido, rodillas ligeramente flexionadas
                const idleW = 1 - gaitW;
                const br = Math.sin(nowSec * 2.2 + idx * 0.7);
                tBodyY += br * 0.006 * idleW;
                tTorsoRX += br * 0.012 * idleW;
                tLArmX += br * 0.03 * idleW;
                tRArmX -= br * 0.03 * idleW;
                tLKneeX += 0.06 * idleW;
                tRKneeX += 0.06 * idleW;
                tLLegZ = -0.03 * idleW;
                tRLegZ = 0.03 * idleW;
              }
            }

            m.bodyGroup.position.y = damp(m.bodyGroup.position.y, tBodyY, k);
            m.bodyGroup.rotation.x = damp(m.bodyGroup.rotation.x, tBodyRX, k);
            m.bodyGroup.rotation.z = damp(m.bodyGroup.rotation.z, tBodyRZ, k);
            if (m.torsoGroup) {
              m.torsoGroup.rotation.x = damp(m.torsoGroup.rotation.x, tTorsoRX, k);
              m.torsoGroup.rotation.y = damp(m.torsoGroup.rotation.y, tTorsoRY, k);
              m.torsoGroup.rotation.z = damp(m.torsoGroup.rotation.z, tTorsoRZ, k);
            }
            m.leftLeg.rotation.x = damp(m.leftLeg.rotation.x, tLLegX, k);
            m.rightLeg.rotation.x = damp(m.rightLeg.rotation.x, tRLegX, k);
            m.leftLeg.rotation.z = damp(m.leftLeg.rotation.z, tLLegZ, k);
            m.rightLeg.rotation.z = damp(m.rightLeg.rotation.z, tRLegZ, k);
            if (m.leftKnee) m.leftKnee.rotation.x = damp(m.leftKnee.rotation.x, tLKneeX, k);
            if (m.rightKnee) m.rightKnee.rotation.x = damp(m.rightKnee.rotation.x, tRKneeX, k);
            m.leftArm.rotation.x = damp(m.leftArm.rotation.x, tLArmX, k);
            m.rightArm.rotation.x = damp(m.rightArm.rotation.x, tRArmX, k);
            m.leftArm.rotation.z = damp(m.leftArm.rotation.z, tLArmZ, k);
            m.rightArm.rotation.z = damp(m.rightArm.rotation.z, tRArmZ, k);
            if (m.leftElbow) m.leftElbow.rotation.x = damp(m.leftElbow.rotation.x, tLElbowX, k);
            if (m.rightElbow) m.rightElbow.rotation.x = damp(m.rightElbow.rotation.x, tRElbowX, k);
          });
        };

        syncTeamModels(simulator.home2D, homeModels);
        syncTeamModels(simulator.away2D, awayModels);

        // Actualizar lluvia 3D si está activa
        if (rainSystem) {
          const posAttr = rainSystem.geometry.attributes.position;
          for (let i = 0; i < posAttr.count; i++) {
            let py = posAttr.getY(i) - 1.15;
            let px = posAttr.getX(i) - 0.18;
            if (py < 0) {
              py = 36;
              px = (Math.random() - 0.5) * 130;
            }
            posAttr.setXYZ(i, px, py, posAttr.getZ(i));
          }
          posAttr.needsUpdate = true;
        }

        // CÁMARA ESTILO RETRANSMISIÓN TV CON DOBLE INTERPOLACIÓN EXPONENCIAL (LERP SIN TIRONES) Y ZOOM EN LAS ÁREAS
        // Primero filtramos el punto focal del balón para absorber pases rápidos o rebotes bruscos
        const focusAlpha = 1 - Math.exp(-3.6 * frameDt);
        smoothFocusX += (ballWX - smoothFocusX) * focusAlpha;
        smoothFocusZ += (ballWZ - smoothFocusZ) * focusAlpha;

        const absBallX = Math.abs(smoothFocusX);
        const areaProximity = Math.max(0, Math.min(1, (absBallX - 22) / 28)); // 0 en centro, -> 1 al acercarse al área
        const highlightBoost = currentHighlightData ? 0.45 : 0;
        const zoomFactor = Math.min(1, areaProximity + highlightBoost);

        let targetCamX, targetCamY, targetCamZ, targetFov;
        let targetLookX, targetLookY, targetLookZ;

        if (cameraMode === "tactical") {
          targetCamX = smoothFocusX * 0.38;
          targetCamY = 44;
          targetCamZ = 50 + smoothFocusZ * 0.12;
          targetFov = 40;
          targetLookX = smoothFocusX * 0.55;
          targetLookY = 0.4;
          targetLookZ = smoothFocusZ * 0.25;
        } else if (cameraMode === "action") {
          targetCamX = smoothFocusX * 0.80;
          targetCamY = 20 - zoomFactor * 2.5;
          targetCamZ = 31 + smoothFocusZ * 0.30 - zoomFactor * 3.5;
          targetFov = 33 - zoomFactor * 2.5;
          targetLookX = smoothFocusX * 0.92;
          targetLookY = 0.8;
          targetLookZ = smoothFocusZ * 0.45;
        } else {
          // "broadcast" (Por defecto): Cámara TV cercana a la acción (Y=21.5, Z=36.0, FOV=35) con seguimiento suave y ligero zoom al área
          targetCamX = smoothFocusX * 0.65;
          targetCamY = 21.5 - zoomFactor * 2.2;
          targetCamZ = (36.0 - zoomFactor * 3.2) + smoothFocusZ * 0.22;
          targetFov = 35 - zoomFactor * 2.0;

          targetLookX = smoothFocusX * 0.72;
          targetLookY = 0.55;
          targetLookZ = smoothFocusZ * 0.28 - 1.2;
        }

        // Interpolación exponencial independiente de FPS (1 - exp(-k * dt)) para eliminar cualquier tirón
        const camPosLerp = 1 - Math.exp(-3.0 * frameDt);
        const camLookLerp = 1 - Math.exp(-3.8 * frameDt);
        camera.position.x += (targetCamX - camera.position.x) * camPosLerp;
        camera.position.y += (targetCamY - camera.position.y) * camPosLerp;
        camera.position.z += (targetCamZ - camera.position.z) * camPosLerp;

        camLookCurrent.x += (targetLookX - camLookCurrent.x) * camLookLerp;
        camLookCurrent.y += (targetLookY - camLookCurrent.y) * camLookLerp;
        camLookCurrent.z += (targetLookZ - camLookCurrent.z) * camLookLerp;
        camera.lookAt(camLookCurrent);

        if (Math.abs(camera.fov - targetFov) > 0.02) {
          camera.fov += (targetFov - camera.fov) * camPosLerp;
          camera.updateProjectionMatrix();
        }

        renderer.render(scene, camera);
      }

      function dispose() {
        try {
          disposableTextures.forEach(t => t.dispose && t.dispose());
          disposableGeometries.forEach(g => g.dispose && g.dispose());
          disposableMaterials.forEach(m => m.dispose && m.dispose());
          renderer.dispose();
        } catch (e) {}
      }

      return { updateAndRender, dispose };
    }

    let lastRealTimeTs = null;

    function drawPitch() {
      if (!canvas) return;

      const nowTs = performance.now();
      const dtSec = lastRealTimeTs !== null
        ? Math.min(0.05, Math.max(0.004, (nowTs - lastRealTimeTs) / 1000))
        : (1 / 60);
      lastRealTimeTs = nowTs;

      // Inicializar motor 3D Three.js si está disponible (para jugadas clave)
      ensureThreeLoadedAndInit();

      // Si hay un highlight o jugada a balón parado activa, avanzar el replayBuffer a 1x (60 FPS interpolados)
      // sin que ninguna animación legacy sobreescriba curX/curY de home2D y away2D
      const is3DHighlightActive = Boolean(simulator.activeReplay || simulator.isHighlightRunning || simulator.isSetPieceRunning);
      if (is3DHighlightActive && typeof simulator.stepReplayPlayback === "function") {
        simulator.stepReplayPlayback(dtSec);
      }

      if (is3DHighlightActive) {
        if (threeEngine && canvas3d) {
          canvas3d.style.display = "block";
          canvas.style.display = "none";

          // Buscar al futbolista poseedor o más cercano al balón en el replay 3D
          let closestLiveP = simulator.ball.carrier || null;
          let minLiveDist = closestLiveP ? 0.5 : 999;
          if (!closestLiveP) {
            [...simulator.home2D, ...simulator.away2D].forEach(p => {
              const d = Math.hypot(p.curX - simulator.ball.x, p.curY - simulator.ball.y);
              if (d < minLiveDist) {
                minLiveDist = d;
                closestLiveP = p;
              }
            });
          }
          threeEngine.updateAndRender(closestLiveP, minLiveDist);
        } else {
          if (canvas3d) canvas3d.style.display = "none";
          canvas.style.display = "block";
          if (!ctx) ctx = canvas.getContext("2d");
          if (ctx) {
            resizeCanvas();
            const w = canvas.width;
            const h = canvas.height;
            const pDim = drawPitch2D(ctx, w, h);
            const { padX, padY, pitchW, pitchH, dpr } = pDim;
            simulator.home2D.forEach(p => {
              drawPlayerToken2D(ctx, p, "home", (p === simulator.ball.carrier), padX, padY, pitchW, pitchH, dpr);
            });
            simulator.away2D.forEach(p => {
              drawPlayerToken2D(ctx, p, "away", (p === simulator.ball.carrier), padX, padY, pitchW, pitchH, dpr);
            });
            drawBallToken2D(ctx, simulator.ball.x, simulator.ball.y, padX, padY, pitchW, pitchH, dpr);
            drawWeatherOverlay(ctx, w, h, matchWeather.id);
          }
        }
      } else {
        // MODO FAST_SIM (Tiempo entre jugadas clave):
        // Mostrar las posiciones físicas reales curX/curY calculadas por el motor autónomo a 20 Hz sin sobreescribirlas
        if (canvas3d) canvas3d.style.display = "none";
        canvas.style.display = "block";
        if (!ctx) ctx = canvas.getContext("2d");
        if (ctx) {
          resizeCanvas();
          const w = canvas.width;
          const h = canvas.height;

          // Buscar jugador poseedor o más cercano al balón en 2D
          let closestLiveP = simulator.ball.carrier || null;
          let minLiveDist = closestLiveP ? 0.5 : 999;
          if (!closestLiveP) {
            [...simulator.home2D, ...simulator.away2D].forEach(p => {
              const d = Math.hypot(p.curX - simulator.ball.x, p.curY - simulator.ball.y);
              if (d < minLiveDist) {
                minLiveDist = d;
                closestLiveP = p;
              }
            });
          }

          const pDim = drawPitch2D(ctx, w, h);
          const { padX, padY, pitchW, pitchH, dpr } = pDim;
          simulator.home2D.forEach(p => {
            drawPlayerToken2D(ctx, p, "home", (p === closestLiveP && minLiveDist < 5.5), padX, padY, pitchW, pitchH, dpr);
          });
          simulator.away2D.forEach(p => {
            drawPlayerToken2D(ctx, p, "away", (p === closestLiveP && minLiveDist < 5.5), padX, padY, pitchW, pitchH, dpr);
          });
          drawBallToken2D(ctx, simulator.ball.x, simulator.ball.y, padX, padY, pitchW, pitchH, dpr);
          drawWeatherOverlay(ctx, w, h, matchWeather.id);
        }
      }

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
      if (elTimer) {
        if (state.isHalfTime) {
          elTimer.textContent = "Descanso";
          elTimer.className = "px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-mono font-bold";
        } else {
          elTimer.textContent = state.formattedMinute || `${state.minute}'`;
          const isAdded = (!simulator.halfTimeTriggered && !simulator.isSecondHalf && state.minute > 45) || (state.minute > 90);
          elTimer.className = isAdded
            ? "px-2.5 py-0.5 rounded-full bg-amber-500/30 text-amber-300 font-mono font-extrabold animate-pulse"
            : "px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 font-mono font-bold animate-pulse";
        }
      }
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
      const windows = isUserHome ? state.homeWindowsRemaining : state.awayWindowsRemaining;
      if (subsBadge) {
        subsBadge.textContent = `${remaining} rest. (${windows} vent.)`;
        if (windows <= 0 || remaining <= 0) {
          subsBadge.className = "px-2 py-0.5 rounded-full bg-red-900/60 text-red-300 text-[10px] font-mono";
        } else {
          subsBadge.className = "px-2 py-0.5 rounded-full bg-black/40 text-[10px] font-mono";
        }
      }

      // Actualizar estado de Gritos desde la Banda y Charla activa (Mejoras 1 y 2)
      const boostBadge = container.querySelector("#active-boost-badge");
      if (boostBadge) {
        if (state.activeShout) {
          const left = Math.max(1, (state.activeShout.expiresAtMinute || state.minute) - state.minute);
          boostBadge.textContent = `${state.activeShout.icon} ${state.activeShout.label} (${left}')`;
          boostBadge.className = "text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/60 text-amber-300 animate-pulse truncate max-w-[195px]";
        } else if (state.activeTeamTalk) {
          const left = Math.max(1, (state.activeTeamTalk.expiresAtMinute || state.minute) - state.minute);
          boostBadge.textContent = `${state.activeTeamTalk.icon} Charla: ${state.activeTeamTalk.label} (${left}')`;
          boostBadge.className = "text-[9px] font-bold px-2 py-0.5 rounded-full bg-sky-500/20 border border-sky-400/50 text-sky-300 truncate max-w-[195px]";
        } else if (state.activeCrowdRoar) {
          const left = Math.max(1, (state.activeCrowdRoar.expiresAtMinute || state.minute) - state.minute);
          boostBadge.textContent = `🏟️ Rugido Grada (+0.4% aliento) (${left}')`;
          boostBadge.className = "text-[9px] font-black px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-400 text-amber-300 animate-pulse truncate max-w-[195px]";
        } else if (state.shoutCooldownUntil > state.minute) {
          const cd = state.shoutCooldownUntil - state.minute;
          boostBadge.textContent = `⏳ Voz en descanso (${cd} min)`;
          boostBadge.className = "text-[9px] font-bold px-2 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-slate-400 truncate max-w-[195px]";
        } else {
          boostBadge.textContent = "✅ Banda lista para dar órdenes";
          boostBadge.className = "text-[9px] font-bold px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 truncate max-w-[195px]";
        }
      }

      container.querySelectorAll(".btn-touchline-shout").forEach(btn => {
        const sId = btn.dataset.shout;
        const isCurrentActive = state.activeShout && state.activeShout.id === sId;
        const onCooldown = state.shoutCooldownUntil > state.minute && !isCurrentActive;
        if (isCurrentActive) {
          btn.className = "btn-touchline-shout py-1.5 px-1 rounded-lg bg-amber-500/25 border-2 border-amber-400 text-[9px] font-extrabold text-amber-300 flex flex-col items-center justify-center gap-0.5 shadow transition";
        } else if (onCooldown) {
          btn.className = "btn-touchline-shout py-1.5 px-1 rounded-lg bg-slate-950/60 border border-slate-800/60 text-[9px] font-bold text-slate-500 opacity-60 flex flex-col items-center justify-center gap-0.5 cursor-not-allowed transition";
        } else {
          btn.className = "btn-touchline-shout py-1.5 px-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-[9px] font-extrabold text-slate-200 flex flex-col items-center justify-center gap-0.5 active:scale-95 transition";
        }
      });

      // Actualizar botón de Aliento a la Grada (si el usuario juega de local)
      const btnRally = container.querySelector("#btn-rally-crowd");
      const btnRallyText = container.querySelector("#btn-rally-crowd-text");
      const btnRallyBadge = container.querySelector("#btn-rally-crowd-badge");
      if (btnRally) {
        const isLosingOrDrawing = state.homeScore <= state.awayScore;
        const isCooldown = (state.crowdRoarCooldownUntil || 0) > state.minute;
        const isUnlocked = Boolean(state.crowdRoarUnlockedByHighlight);
        const canTrigger = isLosingOrDrawing && (!isCooldown || isUnlocked);

        if (state.activeCrowdRoar) {
          const left = Math.max(1, (state.activeCrowdRoar.expiresAtMinute || state.minute) - state.minute);
          btnRally.disabled = true;
          btnRally.className = "flex-1 py-1.5 px-2 rounded-xl bg-emerald-500/25 border-2 border-emerald-400 text-[9.5px] font-black text-emerald-300 flex items-center justify-between gap-1.5 shadow-lg shadow-emerald-500/20 animate-pulse";
          if (btnRallyText) btnRallyText.textContent = `¡Estadio enardecido! (${left}')`;
          if (btnRallyBadge) {
            btnRallyBadge.textContent = "+4% EMPUJE";
            btnRallyBadge.className = "px-1.5 py-0.5 rounded-full bg-emerald-400 text-slate-950 text-[8px] font-black uppercase";
          }
        } else if (!isLosingOrDrawing) {
          btnRally.disabled = true;
          btnRally.className = "flex-1 py-1.5 px-2 rounded-xl bg-slate-950/60 border border-slate-800 text-[9.5px] font-bold text-slate-500 opacity-60 flex items-center justify-between gap-1.5 cursor-not-allowed";
          if (btnRallyText) btnRallyText.textContent = "Grada tranquila (vas ganando)";
          if (btnRallyBadge) {
            btnRallyBadge.textContent = "Calma";
            btnRallyBadge.className = "px-1.5 py-0.5 rounded-full bg-slate-800 text-slate-500 text-[8px] font-bold uppercase";
          }
        } else if (canTrigger) {
          btnRally.disabled = false;
          btnRally.className = "flex-1 py-1.5 px-2 rounded-xl bg-gradient-to-r from-amber-500/30 to-rose-500/30 hover:from-amber-500/40 hover:to-rose-500/40 border-2 border-amber-400 text-[9.5px] font-black text-amber-200 flex items-center justify-between gap-1.5 shadow-md active:scale-95 transition cursor-pointer";
          if (btnRallyText) btnRallyText.textContent = isUnlocked ? "¡Pedir rugido a la grada! (Jugada clave)" : "¡Pedir aliento a la afición!";
          if (btnRallyBadge) {
            btnRallyBadge.textContent = "LISTO ⚡";
            btnRallyBadge.className = "px-1.5 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[8px] font-black uppercase animate-bounce";
          }
        } else {
          const cd = (state.crowdRoarCooldownUntil || 0) - state.minute;
          btnRally.disabled = true;
          btnRally.className = "flex-1 py-1.5 px-2 rounded-xl bg-slate-950/60 border border-slate-800 text-[9.5px] font-bold text-slate-500 opacity-60 flex items-center justify-between gap-1.5 cursor-not-allowed";
          if (btnRallyText) btnRallyText.textContent = `Grada recuperando el aliento (${cd} min)`;
          if (btnRallyBadge) {
            btnRallyBadge.textContent = "Espera jugada";
            btnRallyBadge.className = "px-1.5 py-0.5 rounded-full bg-slate-800 text-slate-500 text-[8px] font-bold uppercase";
          }
        }
      }

      // Sincronización continua del botón de pausa / reanudar
      const elIconPP = container.querySelector("#play-pause-icon");
      const elTextPP = container.querySelector("#play-pause-text");
      if (elIconPP && elTextPP) {
        if (simulator.isHighlightRunning || simulator.isSetPieceRunning) {
          if (simulator.pauseRequested) {
            elIconPP.textContent = "▶";
            elTextPP.textContent = "Pausa pedida";
          } else {
            elIconPP.textContent = "⏸";
            elTextPP.textContent = "Pausar";
          }
        } else if (!simulator.isRunning || simulator.isHalfTime) {
          elIconPP.textContent = "▶";
          elTextPP.textContent = "Reanudar";
        } else {
          elIconPP.textContent = "⏸";
          elTextPP.textContent = "Pausar";
        }
      }
    }

    function handleHalfTimeSequence(htState) {
      hideAssistantAdviceCard();
      const modalHT = container.querySelector("#modal-halftime");
      const htBadge = container.querySelector("#ht-modal-badge");
      const htHScore = container.querySelector("#ht-home-score");
      const htAScore = container.querySelector("#ht-away-score");
      const htPossH = container.querySelector("#ht-stat-poss-h");
      const htPossA = container.querySelector("#ht-stat-poss-a");
      const htBarPossH = container.querySelector("#ht-bar-poss-h");
      const htBarPossA = container.querySelector("#ht-bar-poss-a");
      const htShotsH = container.querySelector("#ht-shots-h");
      const htShotsA = container.querySelector("#ht-shots-a");
      const htTargetH = container.querySelector("#ht-ontarget-h");
      const htTargetA = container.querySelector("#ht-ontarget-a");
      const htSubsBadge = container.querySelector("#ht-subs-badge");

      if (htBadge) {
        htBadge.textContent = `⏸️ DESCANSO (Final 1ª Parte · 45+${simulator.firstHalfExtra}')`;
      }
      if (htHScore) htHScore.textContent = htState.homeScore;
      if (htAScore) htAScore.textContent = htState.awayScore;
      if (htPossH) htPossH.textContent = htState.stats.possession.home;
      if (htPossA) htPossA.textContent = htState.stats.possession.away;
      if (htBarPossH) htBarPossH.style.width = `${htState.stats.possession.home}%`;
      if (htBarPossA) htBarPossA.style.width = `${htState.stats.possession.away}%`;
      if (htShotsH) htShotsH.textContent = htState.stats.shots.home;
      if (htShotsA) htShotsA.textContent = htState.stats.shots.away;
      if (htTargetH) htTargetH.textContent = htState.stats.shotsOnTarget.home;
      if (htTargetA) htTargetA.textContent = htState.stats.shotsOnTarget.away;

      const remainingSubs = isUserHome ? htState.homeSubsRemaining : htState.awaySubsRemaining;
      if (htSubsBadge) htSubsBadge.textContent = `${remainingSubs} rest. (Descanso: no gasta ventana)`;

      // Mostrar mejor jugador de la 1ª parte (Mejora 5)
      const htMvpPreview = container.querySelector("#ht-mvp-preview");
      if (htMvpPreview && htState.currentMvp) {
        const mvpTeamShort = htState.currentMvp.teamSide === "home" ? homeTeam.shortName : awayTeam.shortName;
        htMvpPreview.innerHTML = `
          <span>⭐ Destacado 1ªP: <b class="text-white">${htState.currentMvp.name}</b> (${mvpTeamShort})</span>
          <span class="px-1.5 py-0.5 rounded bg-amber-500/20 border border-amber-400/50 text-amber-300 font-mono font-black">${htState.currentMvp.rating.toFixed(1)}</span>
        `;
      }

      // Reiniciar estado de charla de descanso (Mejora 1)
      const htTalkFeedback = container.querySelector("#ht-talk-feedback");
      if (htTalkFeedback) {
        htTalkFeedback.classList.add("hidden");
        htTalkFeedback.textContent = "";
      }
      container.querySelectorAll(".btn-ht-talk").forEach(btn => {
        btn.disabled = false;
        btn.classList.remove("ring-2", "ring-amber-400", "bg-amber-500/20", "opacity-50");
        btn.onclick = () => {
          const talkId = btn.dataset.talk;
          const res = simulator.applyTeamTalk("ht", talkId, false);
          container.querySelectorAll(".btn-ht-talk").forEach(b => {
            b.disabled = true;
            if (b === btn) {
              b.classList.add("ring-2", "ring-amber-400", "bg-amber-500/20");
            } else {
              b.classList.add("opacity-50");
            }
          });
          if (htTalkFeedback && res) {
            htTalkFeedback.textContent = `${res.feedback || res.label}`;
            htTalkFeedback.classList.remove("hidden");
          }
          updateMatchUI(simulator.getState());
        };
      });

      const elTimer = container.querySelector("#match-timer");
      if (elTimer) {
        elTimer.textContent = "Descanso";
        elTimer.className = "px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-mono font-bold";
      }
      if (iconPP) iconPP.textContent = "▶";
      if (textPP) textPP.textContent = "Reanudar";

      if (modalHT) modalHT.classList.remove("hidden");
    }

    function showMatchAlert(alert) {
      const box = container.querySelector("#match-alert-box");
      const content = container.querySelector("#match-alert-content");
      if (!box || !content) return;
      const msgText = typeof alert === "string" ? alert : (alert?.text || "");
      if (!msgText) return;
      content.textContent = msgText;
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
      if (simulator.isHalfTime) {
        container.querySelector("#modal-halftime")?.classList.add("hidden");
        simulator.resumeSecondHalf();
        iconPP.textContent = "⏸";
        textPP.textContent = "Pausar";
        showMatchAlert({ text: "📣 ¡Comienza la 2ª Parte!" });
        return;
      }
      if (simulator.isHighlightRunning || simulator.isSetPieceRunning) {
        if (!simulator.pauseRequested) {
          simulator.pauseRequested = true;
          iconPP.textContent = "▶";
          textPP.textContent = "Pausa pedida";
          showMatchAlert({ text: "⏸ Pausa solicitada: se pausará al terminar la jugada" });
        } else {
          simulator.pauseRequested = false;
          iconPP.textContent = "⏸";
          textPP.textContent = "Pausar";
          showMatchAlert({ text: "▶ Pausa cancelada: el juego continuará" });
        }
        return;
      }
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

    // Botones de Gritos desde la Banda en vivo (Mejora 2)
    container.querySelectorAll(".btn-touchline-shout").forEach(btn => {
      btn.onclick = () => {
        const shoutId = btn.dataset.shout;
        const res = simulator.triggerShout(shoutId);
        if (!res.success) {
          showMatchAlert({ text: `⏳ ${res.reason}` });
          return;
        }
        showMatchAlert({ text: `${res.shout.icon} ¡Orden desde la banda: ${res.shout.label}!` });
        updateFMCommentary(res.shout.alertText || `📣 Gritas desde el área técnica: "${res.shout.label}"`, "tactical");
        updateMatchUI(simulator.getState());
      };
    });

    // Botón de Aliento a la Grada (Remontada en casa)
    const btnRallyClick = container.querySelector("#btn-rally-crowd");
    if (btnRallyClick) {
      btnRallyClick.onclick = () => {
        const res = simulator.triggerCrowdRoar();
        if (!res.success) {
          showMatchAlert({ text: `⏳ ${res.reason}` });
          return;
        }
        showMatchAlert({ text: `🏟️ ¡El estadio ruge y empuja al equipo! (+0.4% aliento de remontada)` });
        updateFMCommentary(`🏟️ Pides el aliento de la grada: todo el estadio se levanta y ruge al unísono para guiar la remontada del equipo.`, "tactical");
        updateMatchUI(simulator.getState());
      };
    }

    container.querySelector("#btn-skip-end").onclick = () => {
      clearAllMatchUiTimeouts();
      currentHighlightData = null;
      isKickoffInProgress = false;
      container.querySelector("#modal-setpiece")?.classList.add("hidden");
      container.querySelector("#modal-halftime")?.classList.add("hidden");
      container.querySelector("#modal-halftime-tactics")?.classList.add("hidden");
      container.querySelector("#modal-injury-alert")?.classList.add("hidden");
      container.querySelector("#modal-live-subs")?.classList.add("hidden");
      container.querySelector("#kickoff-badge")?.classList.add("hidden");
      const hud = container.querySelector("#highlight-action-hud");
      if (hud) {
        hud.classList.remove("opacity-100", "translate-y-0");
        hud.classList.add("opacity-0", "-translate-y-2");
      }
      const goalOverlay = container.querySelector("#goal-cinematic");
      if (goalOverlay) {
        goalOverlay.classList.remove("opacity-100", "scale-100");
        goalOverlay.classList.add("opacity-0", "pointer-events-none", "scale-95");
      }
      const subOverlay = container.querySelector("#sub-cinematic");
      if (subOverlay) {
        subOverlay.classList.remove("opacity-100", "scale-100");
        subOverlay.classList.add("opacity-0", "pointer-events-none", "scale-95");
      }
      simulator.skipToEnd();
    };

    // Botón para pasar la visualización de la jugada clave activa en directo
    const btnSkipHighlight = container.querySelector("#btn-skip-highlight");
    if (btnSkipHighlight) {
      btnSkipHighlight.onclick = (e) => {
        e.stopPropagation();
        if (simulator.skipCurrentHighlight) {
          simulator.skipCurrentHighlight();
          showMatchAlert({ text: "⏭ Jugada clave saltada" });
        }
      };
    }

    // Selector / Toggle de Modo Jugadas Clave (Elegir verlas o pasarlas automáticamente)
    const btnToggleHl = container.querySelector("#btn-toggle-hl-mode");
    const iconToggleHl = container.querySelector("#btn-toggle-hl-icon");
    const textToggleHl = container.querySelector("#btn-toggle-hl-text");

    const updateHlModeUI = () => {
      if (userShowHighlights) {
        if (iconToggleHl) iconToggleHl.textContent = "🎬";
        if (textToggleHl) textToggleHl.textContent = "Jugadas: VER";
        if (btnToggleHl) {
          btnToggleHl.className = "flex items-center gap-1 bg-slate-950/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-amber-500/80 text-[9px] font-bold shadow-lg text-amber-400 active:scale-95 transition cursor-pointer";
        }
      } else {
        if (iconToggleHl) iconToggleHl.textContent = "⚡";
        if (textToggleHl) textToggleHl.textContent = "Jugadas: SALTAR";
        if (btnToggleHl) {
          btnToggleHl.className = "flex items-center gap-1 bg-slate-950/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-700/80 text-[9px] font-bold shadow-lg text-slate-400 active:scale-95 transition cursor-pointer";
        }
      }
    };
    updateHlModeUI();

    if (btnToggleHl) {
      btnToggleHl.onclick = () => {
        userShowHighlights = !userShowHighlights;
        try {
          localStorage.setItem("match_show_highlights", userShowHighlights ? "true" : "false");
        } catch(e) {}
        simulator.showKeyHighlights = userShowHighlights;
        updateHlModeUI();
        showMatchAlert({ text: userShowHighlights ? "🎬 Jugadas clave activadas (Modo visualización)" : "⚡ Jugadas clave en modo rápido (Resolución directa)" });
      };
    }

    // Toggle de Pantalla Completa / Vista Panorámica Ampliada 16:9
    const btnToggleFs = container.querySelector("#btn-toggle-fullscreen");
    const viewportWrapper = container.querySelector("#match-viewport-wrapper");
    if (btnToggleFs && viewportWrapper) {
      btnToggleFs.onclick = () => {
        if (!document.fullscreenElement) {
          if (viewportWrapper.requestFullscreen) {
            viewportWrapper.requestFullscreen().catch(() => {});
          } else if (viewportWrapper.webkitRequestFullscreen) {
            viewportWrapper.webkitRequestFullscreen();
          }
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen().catch(() => {});
          }
        }
      };
    }

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

    // Botones del Asistente / Segundo Entrenador en Vivo
    const btnAstApply = container.querySelector("#btn-ast-apply");
    const btnAstIgnore = container.querySelector("#btn-ast-ignore");
    const btnAstClose = container.querySelector("#btn-ast-close");

    if (btnAstApply) {
      btnAstApply.onclick = (e) => {
        e.stopPropagation();
        if (!currentAssistantAdvice) return;
        const adv = currentAssistantAdvice;
        const res = simulator.acceptAssistantAdvice(adv.id);
        if (res.success) {
          // Sincronizar gameState.userTactics
          if (adv.action.type === "TACTIC_PRESET") {
            const ch = adv.action.changes || {};
            if (ch.mentality) {
              gameState.userTactics.mentality = ch.mentality;
              const newIdx = mentalities.findIndex(m => m.id === ch.mentality);
              if (newIdx !== -1) {
                curMentIndex = newIdx;
                if (mentLabel) mentLabel.textContent = mentalities[newIdx].label;
              }
            }
            if (!gameState.userTactics.instructions) gameState.userTactics.instructions = getDefaultTacticalInstructions();
            const inst = gameState.userTactics.instructions;
            if (ch.defensiveLine) inst.outOfPossession.defensiveLine = ch.defensiveLine;
            if (ch.pressing) inst.outOfPossession.pressing = ch.pressing;
            if (ch.width) inst.inPossession.width = ch.width;
            if (ch.tempo) inst.inPossession.tempo = ch.tempo;
            if (ch.passingStyle) inst.inPossession.passingStyle = ch.passingStyle;
            if (ch.transitionLoss) inst.inTransition.loss = ch.transitionLoss;
            if (ch.transitionWin) inst.inTransition.win = ch.transitionWin;
          } else if (adv.action.type === "SUBSTITUTION") {
            const outId = adv.action.playerOutId;
            const inId = adv.action.playerInId;
            if (Array.isArray(gameState.userTactics.lineup) && Array.isArray(gameState.userTactics.bench)) {
              const outIdx = gameState.userTactics.lineup.indexOf(outId);
              const inIdx = gameState.userTactics.bench.indexOf(inId);
              if (outIdx !== -1 && inIdx !== -1) {
                gameState.userTactics.lineup[outIdx] = inId;
                gameState.userTactics.bench[inIdx] = outId;
              }
            }
          }
          SaveManager.saveGame(gameState);
          showMatchAlert({ text: `📋 ¡Ajuste táctico aplicado: ${adv.title}!` });
          hideAssistantAdviceCard(true);
        }
      };
    }

    if (btnAstIgnore) {
      btnAstIgnore.onclick = (e) => {
        e.stopPropagation();
        simulator.dismissAssistantAdvice();
        hideAssistantAdviceCard(true);
        showMatchAlert({ text: "Manteniendo el plan táctico actual" });
      };
    }

    if (btnAstClose) {
      btnAstClose.onclick = (e) => {
        e.stopPropagation();
        simulator.dismissAssistantAdvice();
        hideAssistantAdviceCard(true);
      };
    }

    // Modal de Cambios en Vivo y Descanso
    const modalSubs = container.querySelector("#modal-live-subs");
    const btnSubs = container.querySelector("#btn-subs");
    const btnCloseSubs = container.querySelector("#btn-close-subs");

    const modalHT = container.querySelector("#modal-halftime");
    const btnHtSubs = container.querySelector("#btn-ht-subs");
    const btnHtContinue = container.querySelector("#btn-ht-continue");

    if (btnHtSubs) {
      btnHtSubs.onclick = () => {
        openTacticsModal(false);
      };
    }

    if (btnHtContinue) {
      btnHtContinue.onclick = () => {
        if (modalHT) modalHT.classList.add("hidden");
        simulator.resumeSecondHalf();
        iconPP.textContent = "⏸";
        textPP.textContent = "Pausar";
        showMatchAlert({ text: "📣 ¡Comienza la 2ª Parte!" });
      };
    }

    btnSubs.onclick = () => {
      openTacticsModal(!simulator.isHalfTime);
    };

    function openTacticsModal(isLive = false, options = {}) {
      const wasRunning = options.forceResume ? true : simulator.isRunning;
      if (isLive) {
        simulator.pause();
        iconPP.textContent = "▶";
        textPP.textContent = "Reanudar";
      } else {
        if (modalHT) modalHT.classList.add("hidden");
      }

      const modalHTTactics = container.querySelector("#modal-halftime-tactics");
      if (!modalHTTactics) return;

      const elStage = modalHTTactics.querySelector("#tactics-modal-stage");
      if (elStage) {
        if (isLive) {
          const isAddedFirstHalf = !simulator.halfTimeTriggered && !simulator.isSecondHalf && simulator.minute >= 45;
          elStage.textContent = isAddedFirstHalf 
            ? `1ª Parte (Tiempo de Descuento: ${simulator.getFormattedMinute ? simulator.getFormattedMinute() : simulator.minute + "'"}) · En Directo`
            : `Minuto ${simulator.getFormattedMinute ? simulator.getFormattedMinute() : simulator.minute + "'"} · En Directo`;
        } else {
          elStage.textContent = "⏸️ Descanso Oficial · Ajustes y Cambios para la 2ª Parte";
        }
      }

      const elTitle = modalHTTactics.querySelector("#tactics-modal-title");
      if (elTitle) {
        if (isLive) {
          const isAddedFirstHalf = !simulator.halfTimeTriggered && !simulator.isSecondHalf && simulator.minute >= 45;
          elTitle.textContent = isAddedFirstHalf ? "Cambios en Vivo (Descuento 1ª Parte)" : "Pizarra Táctica y Sustituciones";
        } else {
          elTitle.textContent = "Pizarra Táctica de Descanso";
        }
      }

      const elConfirmText = modalHTTactics.querySelector("#tactics-modal-btn-confirm-text");
      if (elConfirmText) {
        elConfirmText.textContent = isLive ? "⚽ APLICAR CAMBIOS Y CONTINUAR" : "⚽ GUARDAR CAMBIOS Y VOLVER AL DESCANSO";
      }

      const teamSide = isUserHome ? "home" : "away";
      let htFormationKey = isUserHome ? simulator.homeFormation : simulator.awayFormation;
      let htMentality = isUserHome ? simulator.homeMentality : simulator.awayMentality;

      const currentPitch = isUserHome ? simulator.homePlayersOnPitch : simulator.awayPlayersOnPitch;
      const currentBench = isUserHome ? simulator.homeBench : simulator.awayBench;
      const initialPitchIds = currentPitch.map(p => p.id);

      let htLineupIds = [...initialPitchIds];
      let htBenchIds = currentBench.map(p => p.id);
      let htSelectedPlayerId = options.preselectPlayerId || null;
      let htSubTab = "pitch"; // "pitch" o "style"
      let htPlayerRoles = {
        ...(teamSide === "home" ? simulator.homePlayerRoles : simulator.awayPlayerRoles || {}),
        ...(gameState.userTactics.playerRoles || {})
      };
      let htCustomPositions = JSON.parse(JSON.stringify(
        (teamSide === "home" ? simulator.homeCustomPositions : simulator.awayCustomPositions) ||
        gameState.userTactics.customPositions ||
        {}
      ));
      let htInstructions = JSON.parse(JSON.stringify(
        (teamSide === "home" ? simulator.homeInstructions : simulator.awayInstructions) ||
        gameState.userTactics.instructions ||
        getDefaultTacticalInstructions()
      ));
      let htManMarking = JSON.parse(JSON.stringify(
        (teamSide === "home" ? simulator.homeManMarking : simulator.awayManMarking) ||
        gameState.userTactics.manMarking ||
        {}
      ));
      let showHTAllRoles = false;
      let htJustDragged = false;

      const startRemaining = isUserHome ? simulator.homeSubsRemaining : simulator.awaySubsRemaining;
      const startWindows = isUserHome ? simulator.homeWindowsRemaining : simulator.awayWindowsRemaining;

      function renderHTTactics() {
        const formation = FORMATIONS[htFormationKey] || FORMATIONS["4-3-3"];
        const allSimPlayers = [...currentPitch, ...currentBench];
        const allTeamPlayers = userTeam.players;
        const getPlayer = (id) => allSimPlayers.find(p => p.id === id) || allTeamPlayers.find(p => p.id === id);

        const subsMadeCount = htLineupIds.filter(id => !initialPitchIds.includes(id)).length;
        const curRemaining = startRemaining - subsMadeCount;

        // Badge superior
        const elBadge = modalHTTactics.querySelector("#ht-tactic-remaining-badge");
        if (elBadge) {
          if (!isLive) {
            elBadge.textContent = `${curRemaining} de 5 cambios · ⏸️ Descanso (no gasta ventana)`;
            elBadge.className = "px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono font-bold text-emerald-400";
          } else {
            elBadge.textContent = `${curRemaining} de 5 cambios · 🪟 ${startWindows} vent. rest.`;
            elBadge.className = startWindows > 0 && curRemaining > 0
              ? "px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono font-bold text-amber-400"
              : "px-2.5 py-1 rounded-full bg-red-950/80 border border-red-500/50 text-xs font-mono font-bold text-red-400";
          }
        }

        // Subtítulo con cambios pendientes
        const elPending = modalHTTactics.querySelector("#ht-pending-subs-text");
        if (elPending) {
          if (subsMadeCount > 0) {
            elPending.classList.remove("hidden");
            elPending.textContent = isLive
              ? `🔄 ${subsMadeCount} cambio${subsMadeCount > 1 ? 's' : ''} preparado${subsMadeCount > 1 ? 's' : ''}`
              : `🔄 ${subsMadeCount} cambio${subsMadeCount > 1 ? 's' : ''} preparado${subsMadeCount > 1 ? 's' : ''} para la 2ª parte`;
          } else {
            elPending.classList.add("hidden");
          }
        }

        // Formaciones
        const containerForm = modalHTTactics.querySelector("#ht-formation-buttons");
        if (containerForm) {
          containerForm.innerHTML = Object.keys(FORMATIONS).map(fKey => `
            <button class="btn-ht-form px-3 py-1 rounded-full font-bold transition whitespace-nowrap text-xs ${htFormationKey === fKey ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20' : 'bg-slate-800 text-slate-400 hover:text-white'}" data-formation="${fKey}">
              ${fKey}
            </button>
          `).join('');

          containerForm.querySelectorAll(".btn-ht-form").forEach(b => {
            b.onclick = () => {
              htFormationKey = b.dataset.formation;
              htCustomPositions = {}; // Reiniciar posiciones libres al cambiar de esquema
              renderHTTactics();
            };
          });
        }

        // Mentalidades
        const containerMent = modalHTTactics.querySelector("#ht-mentality-buttons");
        if (containerMent) {
          containerMent.innerHTML = mentalities.map(m => `
            <button class="btn-ht-ment px-2.5 py-0.5 rounded-lg text-[11px] font-semibold transition whitespace-nowrap ${htMentality === m.id ? 'bg-emerald-600 text-white border border-emerald-400' : 'bg-slate-800/80 text-slate-400 hover:text-white'}" data-mentality="${m.id}">
              ${m.label}
            </button>
          `).join('');

          containerMent.querySelectorAll(".btn-ht-ment").forEach(b => {
            b.onclick = () => {
              htMentality = b.dataset.mentality;
              renderHTTactics();
            };
          });
        }

        // Pestañas Sub-Modal (Campo y Funciones vs Estilos e Instrucciones)
        const btnTabPitch = modalHTTactics.querySelector("#btn-ht-tab-pitch");
        const btnTabStyle = modalHTTactics.querySelector("#btn-ht-tab-style");
        const pitchWrapper = modalHTTactics.querySelector("#ht-pitch-wrapper");
        const styleWrapper = modalHTTactics.querySelector("#ht-style-wrapper");
        const badgeStyle = modalHTTactics.querySelector("#ht-style-badge");

        const curPresetKey = detectMatchingPreset(htInstructions);
        const curPreset = TACTICAL_PRESETS[curPresetKey] || null;
        if (badgeStyle) {
          badgeStyle.textContent = curPreset ? `${curPreset.icon} ${curPreset.name.split(' ')[0]}` : '⚙️ Personalizado';
        }

        if (btnTabPitch && btnTabStyle && pitchWrapper && styleWrapper) {
          btnTabPitch.onclick = (e) => {
            e.stopPropagation();
            htSubTab = "pitch";
            renderHTTactics();
          };
          btnTabStyle.onclick = (e) => {
            e.stopPropagation();
            htSubTab = "style";
            renderHTTactics();
          };

          if (htSubTab === "pitch") {
            btnTabPitch.className = "flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 bg-sky-500 text-white shadow-md border border-sky-400";
            btnTabStyle.className = "flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 bg-slate-900 text-slate-400 hover:text-white border border-slate-800";
            pitchWrapper.classList.remove("hidden");
            styleWrapper.classList.add("hidden");
          } else {
            btnTabPitch.className = "flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 bg-slate-900 text-slate-400 hover:text-white border border-slate-800";
            btnTabStyle.className = "flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 bg-amber-500 text-slate-950 shadow-md border border-amber-400";
            pitchWrapper.classList.add("hidden");
            styleWrapper.classList.remove("hidden");
            styleWrapper.innerHTML = renderTacticalInstructionsPanel(htInstructions, 'ht');
            bindTacticalInstructionsPanel(styleWrapper, htInstructions, 'ht', () => renderHTTactics());
          }
        }

        // Texto de instrucciones
        const elInstr = modalHTTactics.querySelector("#ht-instruction-text");
        if (elInstr) {
          if (htSelectedPlayerId) {
            const selPlayer = getPlayer(htSelectedPlayerId);
            elInstr.innerHTML = `<span class="text-amber-400 font-bold">👉 Seleccionado: ${selPlayer?.name}</span>. Modifica su función abajo o toca otro futbolista para sustituirlo.`;
          } else {
            elInstr.textContent = "💡 Toca un futbolista para modificar su función táctica, intercambiar puesto o sustituirlo por un suplente.";
          }
        }

        // Terreno de juego táctico con slots
        const pitchSlots = modalHTTactics.querySelector("#ht-pitch-slots");
        if (pitchSlots) {
          pitchSlots.innerHTML = formation.slots.map((slot, index) => {
            const playerId = htLineupIds[index];
            const player = getPlayer(playerId);
            if (!player) return "";
            const effSlot = getEffectiveSlotCoords(htFormationKey, index, htCustomPositions);
            const effRating = calculateEffectiveRating(player, effSlot.pos);
            const isSelected = htSelectedPlayerId === player.id;
            const isNewSub = !initialPitchIds.includes(player.id);
            const curRoleId = (htPlayerRoles && htPlayerRoles[player.id]) || getDefaultRoleForPosition(effSlot.pos);
            const r = getRoleDetails(effSlot.pos, curRoleId);

            return `
              <div class="slot-ht-player absolute -translate-x-1/2 -translate-y-1/2 ${isSelected ? 'cursor-grab active:cursor-grabbing touch-none ring-2 ring-amber-400 ring-offset-2 ring-offset-slate-900 z-30 scale-105' : 'cursor-pointer touch-manipulation z-10'} flex flex-col items-center transition-transform active:scale-95 select-none"
                   style="left: ${effSlot.x}%; top: ${effSlot.y}%;"
                   data-player-id="${player.id}"
                   data-slot-index="${index}">
                <div class="w-9 h-9 rounded-full border-2 ${isSelected ? 'border-amber-400 bg-amber-500 text-black shadow-lg shadow-amber-400/50 scale-110 ring-2 ring-amber-300' : isNewSub ? 'border-emerald-400 bg-emerald-950 text-emerald-300 shadow-md ring-2 ring-emerald-500/50' : effSlot.isCustom ? 'border-amber-400 bg-slate-900 text-white shadow-md ring-1 ring-amber-400/80' : 'border-white/80 bg-slate-900 text-white shadow-md'} flex flex-col items-center justify-center relative transition-all">
                  <span class="text-[9px] font-black leading-none">${effRating}</span>
                  <span class="text-[7px] font-bold ${isNewSub ? 'text-emerald-400' : effSlot.isCustom ? 'text-amber-300 font-extrabold' : 'text-slate-300'} leading-none">${slot.label}</span>
                  <div class="absolute -bottom-1 w-5 h-1 bg-black/60 rounded-full overflow-hidden">
                    <div class="h-full ${player.energy > 70 ? 'bg-emerald-400' : player.energy > 50 ? 'bg-amber-400' : 'bg-red-500'}" style="width: ${player.energy || 100}%;"></div>
                  </div>
                  <div class="absolute -top-1.5 -left-2 px-1 py-0.2 rounded-full ${(player.matchRating || 6.5) >= 7.5 ? 'bg-emerald-500 text-slate-950' : (player.matchRating || 6.5) < 6.0 ? 'bg-rose-500 text-white' : 'bg-amber-400 text-slate-950'} text-[6.5px] font-black shadow leading-none">
                    ${(player.matchRating || 6.5).toFixed(1)}
                  </div>
                  ${effSlot.isCustom ? `
                    <div class="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-amber-400 text-slate-950 text-[6.5px] font-black flex items-center justify-center shadow">📍</div>
                  ` : ''}
                </div>
                <div class="bg-black/80 px-1 py-0.5 rounded text-[8px] font-bold text-white tracking-tight mt-0.5 truncate max-w-[65px] text-center border border-white/10 shadow">
                  ${isNewSub ? '🔺 ' : ''}${player.name.split(' ').slice(-1)[0]}
                </div>
                <div class="mt-0.5 px-1 py-0.2 rounded bg-sky-950/80 border border-sky-500/30 text-[7px] font-bold text-sky-300 truncate max-w-[70px] text-center">
                  ${r.icon} ${r.tag}
                </div>
                ${(() => {
                  const mk = htManMarking && htManMarking[player.id];
                  if (!mk || !mk.targetId) return "";
                  const oppPitch = isUserHome ? simulator.awayPlayersOnPitch : simulator.homePlayersOnPitch;
                  const targetP = oppPitch.find(p => p.id === mk.targetId) || opponentTeam.players.find(p => p.id === mk.targetId);
                  const tName = targetP ? targetP.name.split(' ').slice(-1)[0] : 'Rival';
                  const iIcon = mk.intensity === 'aggressive' ? '⚔️' : mk.intensity === 'tight' ? '🔒' : '👁️';
                  return `
                    <div class="mt-0.5 px-1 py-0.2 rounded bg-rose-950/90 border border-rose-500/70 text-[6.5px] font-black text-rose-300 truncate max-w-[70px] text-center shadow-sm" title="Marcaje en vivo a ${tName}">
                      ${iIcon} ${tName}
                    </div>
                  `;
                })()}
                ${isSelected ? `
                  <div class="mt-0.5 px-1.5 py-0.2 rounded-full bg-amber-400 text-slate-950 font-black text-[7px] shadow-md animate-pulse uppercase tracking-tight">
                    ✋ Mover
                  </div>
                ` : ''}
              </div>
            `;
          }).join('');

          // Arrastre libre con el dedo o ratón directamente en la pizarra de cambios/descanso (solo activo para el seleccionado)
          const htPitchBox = modalHTTactics.querySelector("#ht-pitch-slots")?.parentElement;
          if (htPitchBox && htSelectedPlayerId) {
            const selectedSlotEl = pitchSlots.querySelector(`.slot-ht-player[data-player-id="${htSelectedPlayerId}"]`);
            if (selectedSlotEl) {
              const slotIdx = parseInt(selectedSlotEl.dataset.slotIndex, 10);
              const pId = htSelectedPlayerId;
              let dragMoved = false;
              let startX = 0, startY = 0;

              const onPointerDown = (e) => {
                if (e.button !== 0 && e.pointerType === "mouse") return;
                dragMoved = false;
                startX = e.clientX;
                startY = e.clientY;

                const onPointerMove = (me) => {
                  const dist = Math.hypot(me.clientX - startX, me.clientY - startY);
                  if (!dragMoved && dist > 5) {
                    dragMoved = true;
                  }
                  if (dragMoved) {
                    const rect = htPitchBox.getBoundingClientRect();
                    let nx = ((me.clientX - rect.left) / rect.width) * 100;
                    let ny = ((me.clientY - rect.top) / rect.height) * 100;
                    const isGK = slotIdx === 0;
                    nx = Math.max(isGK ? 38 : 10, Math.min(isGK ? 62 : 90, nx));
                    ny = Math.max(isGK ? 82 : 12, Math.min(isGK ? 90 : 88, ny));
                    selectedSlotEl.style.left = `${nx}%`;
                    selectedSlotEl.style.top = `${ny}%`;
                    selectedSlotEl.dataset.dragX = nx;
                    selectedSlotEl.dataset.dragY = ny;
                  }
                };

                const onPointerUp = () => {
                  window.removeEventListener("pointermove", onPointerMove);
                  window.removeEventListener("pointerup", onPointerUp);
                  if (dragMoved) {
                    htJustDragged = true;
                    setTimeout(() => { htJustDragged = false; }, 200);
                    const finalX = parseFloat(selectedSlotEl.dataset.dragX);
                    const finalY = parseFloat(selectedSlotEl.dataset.dragY);
                    if (!isNaN(finalX) && !isNaN(finalY)) {
                      htCustomPositions[slotIdx] = { x: Math.round(finalX), y: Math.round(finalY) };
                      htSelectedPlayerId = pId;
                      renderHTTactics();
                    }
                  }
                };

                window.addEventListener("pointermove", onPointerMove);
                window.addEventListener("pointerup", onPointerUp);
              };

              selectedSlotEl.addEventListener("pointerdown", onPointerDown);
            }
          }

          if (htPitchBox) {
            htPitchBox.onclick = (e) => {
              if (htJustDragged) return;
              if (!e.target.closest(".slot-ht-player")) {
                if (htSelectedPlayerId) {
                  htSelectedPlayerId = null;
                  renderHTTactics();
                }
              }
            };
          }

          pitchSlots.querySelectorAll(".slot-ht-player").forEach(el => {
            el.onclick = () => {
              if (htJustDragged) return;
              handleHTPlayerTap(el.dataset.playerId);
            };
          });
        }

        // Panel de asignación de función táctica individual y posición en vivo si hay titular seleccionado
        const rolePanel = modalHTTactics.querySelector("#ht-role-assignment-panel");
        if (rolePanel) {
          const selSlotIndex = htLineupIds.indexOf(htSelectedPlayerId);
          if (selSlotIndex !== -1) {
            const selSlot = formation.slots[selSlotIndex];
            const selPlayer = getPlayer(htSelectedPlayerId);
            if (selPlayer && selSlot) {
              const effSlot = getEffectiveSlotCoords(htFormationKey, selSlotIndex, htCustomPositions);
              const curRoleId = (htPlayerRoles && htPlayerRoles[selPlayer.id]) || getDefaultRoleForPosition(effSlot.pos);
              const curRole = getRoleDetails(effSlot.pos, curRoleId);
              const availRoles = getAvailableRolesForPosition(effSlot.pos);
              const posLabel = getPositionAdjustmentLabel(selSlot, effSlot);

              const oppPitch = isUserHome ? simulator.awayPlayersOnPitch : simulator.homePlayersOnPitch;
              const oppOutfieldPitch = oppPitch.filter(p => !p.isKeeper && p.pos !== "POR");
              const oppPitchStarOvr = Math.max(...oppOutfieldPitch.map(p => p.ovr || 70), 70);
              const curMarking = (htManMarking && htManMarking[selPlayer.id]) || null;
              const curTargetId = curMarking?.targetId || "";
              const curIntensity = curMarking?.intensity || "tight";

              rolePanel.innerHTML = `
                <div class="my-2 space-y-2 animate-fadeIn">
                  <!-- Ajuste de posición manual en descanso/directo -->
                  <div class="p-3 bg-slate-900 border border-amber-500/40 rounded-2xl shadow-xl">
                    <div class="flex items-center justify-between mb-2 pb-1.5 border-b border-slate-800">
                      <div class="flex items-center gap-2">
                        <span class="text-xl">📍</span>
                        <div>
                          <span class="text-[9px] uppercase font-bold text-amber-400">Posición · ${selPlayer.name} (${selSlot.label})</span>
                          <h4 class="text-xs font-black text-white">${posLabel}</h4>
                        </div>
                      </div>
                      ${effSlot.isCustom ? `
                        <button id="btn-ht-reset-pos" class="text-[10px] font-bold text-rose-400 hover:text-rose-300 px-2 py-1 rounded-lg bg-rose-950/70 border border-rose-800/80 active:scale-95 transition flex items-center gap-1 shadow-sm">
                          <span>↺</span> Posición base
                        </button>
                      ` : ''}
                    </div>

                    <div class="text-[10px] text-slate-400 mb-2 font-medium">
                      Arrastra la ficha en el campo o ajusta con botones y deslizadores:
                    </div>

                    <div class="grid grid-cols-2 gap-2 mb-2">
                      <div class="bg-slate-950/80 p-2 rounded-xl border border-slate-800 flex flex-col gap-1.5">
                        <span class="text-[9px] font-bold text-slate-400 uppercase tracking-wider text-center">Altura (Ataque / Defensa)</span>
                        <div class="flex items-center gap-1.5">
                          <button class="btn-ht-nudge-pos flex-1 py-1.5 px-1 bg-slate-800 hover:bg-slate-700 text-sky-300 font-bold text-[10px] rounded-lg border border-slate-700 active:scale-95 transition flex items-center justify-center gap-1" data-axis="y" data-delta="-5">
                            <span>▲</span> Adelantar (+DC)
                          </button>
                          <button class="btn-ht-nudge-pos flex-1 py-1.5 px-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-[10px] rounded-lg border border-slate-700 active:scale-95 transition flex items-center justify-center gap-1" data-axis="y" data-delta="5">
                            <span>▼</span> Retrasar (+MC)
                          </button>
                        </div>
                      </div>

                      <div class="bg-slate-950/80 p-2 rounded-xl border border-slate-800 flex flex-col gap-1.5">
                        <span class="text-[9px] font-bold text-slate-400 uppercase tracking-wider text-center">Amplitud (Banda / Centro)</span>
                        <div class="flex items-center gap-1.5">
                          <button class="btn-ht-nudge-pos flex-1 py-1.5 px-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-[10px] rounded-lg border border-slate-700 active:scale-95 transition flex items-center justify-center gap-1" data-axis="x" data-delta="-5">
                            <span>◀</span> Izquierda
                          </button>
                          <button class="btn-ht-nudge-pos flex-1 py-1.5 px-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-[10px] rounded-lg border border-slate-700 active:scale-95 transition flex items-center justify-center gap-1" data-axis="x" data-delta="5">
                            <span>▶</span> Derecha
                          </button>
                        </div>
                      </div>
                    </div>

                    <!-- Deslizadores de ajuste fino en vivo -->
                    <div class="space-y-1.5 bg-slate-950/60 p-2 rounded-xl border border-slate-800/80 text-[10px]">
                      <div class="flex items-center justify-between text-slate-400">
                        <span>Profundidad en campo (Y): <b class="text-white">${effSlot.y < 35 ? 'Delantera / Ofensivo' : (effSlot.y > 65 ? 'Defensa / Retrasado' : 'Medio campo')}</b></span>
                        <span class="font-mono text-amber-400 font-bold">${Math.round(effSlot.y)}%</span>
                      </div>
                      <input type="range" class="slider-ht-pos-y w-full accent-amber-400 bg-slate-800 h-1.5 rounded-lg appearance-none cursor-pointer" min="${selSlotIndex === 0 ? 82 : 12}" max="${selSlotIndex === 0 ? 90 : 88}" value="${effSlot.y}">

                      <div class="flex items-center justify-between text-slate-400 pt-1">
                        <span>Anchura / Amplitud (X): <b class="text-white">${effSlot.x < 35 ? 'Banda Izquierda' : (effSlot.x > 65 ? 'Banda Derecha' : 'Interior / Centro')}</b></span>
                        <span class="font-mono text-amber-400 font-bold">${Math.round(effSlot.x)}%</span>
                      </div>
                      <input type="range" class="slider-ht-pos-x w-full accent-amber-400 bg-slate-800 h-1.5 rounded-lg appearance-none cursor-pointer" min="${selSlotIndex === 0 ? 38 : 10}" max="${selSlotIndex === 0 ? 62 : 90}" value="${effSlot.x}">
                    </div>
                  </div>

                  <!-- Función / Rol -->
                  <div class="p-3 bg-slate-900 border border-sky-500/50 rounded-2xl shadow-xl">
                    <div class="flex items-center justify-between mb-2 pb-1.5 border-b border-slate-800">
                      <div class="flex items-center gap-2">
                        <span class="text-xl">${curRole.icon}</span>
                        <div>
                          <span class="text-[9px] uppercase font-bold text-sky-400">Función en vivo · ${selPlayer.name} (${selSlot.label})</span>
                          <h4 class="text-xs font-black text-white">${curRole.name}</h4>
                        </div>
                      </div>
                      <button id="btn-ht-close-role-panel" class="text-[10px] font-bold text-emerald-400 hover:text-white px-2 py-1 rounded bg-emerald-950/80 border border-emerald-500/50 flex items-center gap-1 active:scale-95 shadow">✓ Fijar posición</button>
                    </div>
                    <div class="text-[10px] text-slate-400 mb-2 font-medium">Modificar instrucción de juego para el partido:</div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      ${availRoles.map(r => `
                        <button class="btn-ht-assign-role p-2 rounded-xl border text-left transition flex items-start gap-2 ${r.id === curRoleId ? 'bg-sky-500/25 border-sky-400 text-white shadow-sm ring-1 ring-sky-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 active:scale-98'}" data-role-id="${r.id}" data-player-id="${selPlayer.id}">
                          <span class="text-base mt-0.5 flex-shrink-0">${r.icon}</span>
                          <div class="min-w-0">
                            <div class="text-xs font-bold ${r.id === curRoleId ? 'text-sky-300' : 'text-slate-200'}">${r.name}</div>
                            <div class="text-[9.5px] text-slate-400 leading-tight mt-0.5">${r.desc}</div>
                          </div>
                        </button>
                      `).join('')}
                    </div>
                  </div>

                  <!-- Marcaje al Hombre Rival en Vivo -->
                  ${selSlot.pos !== "POR" ? `
                    <div class="p-3 bg-slate-900 border border-rose-500/50 rounded-2xl shadow-xl space-y-2">
                      <div class="flex items-center justify-between pb-1.5 border-b border-slate-800">
                        <div class="flex items-center gap-2">
                          <span class="text-lg">🎯</span>
                          <div>
                            <span class="text-[9px] uppercase font-bold text-rose-400">Instrucción en Vivo</span>
                            <h4 class="text-xs font-black text-white">Marcaje al Hombre Rival</h4>
                          </div>
                        </div>
                        ${curTargetId ? `
                          <button id="btn-ht-clear-mark" class="text-[9.5px] font-bold text-rose-400 hover:text-white px-2 py-0.5 rounded bg-rose-950/80 border border-rose-800/80 active:scale-95 transition">
                            Desactivar
                          </button>
                        ` : ''}
                      </div>

                      <div class="text-[9.5px] text-slate-400">
                        Ordena a ${selPlayer.name.split(' ').slice(-1)[0]} perseguir y anular a un rival que esté en el campo.
                      </div>

                      <div>
                        <label class="block text-[9px] uppercase font-bold text-slate-400 mb-1">Jugador Rival en Terreno de Juego:</label>
                        <select id="select-ht-mark-target" class="w-full bg-slate-950 border border-slate-700 text-white font-bold text-xs rounded-xl px-2.5 py-1.5 outline-none focus:border-rose-400" data-marker-id="${selPlayer.id}">
                          <option value="">-- Sin marcaje individual asignado --</option>
                          ${oppOutfieldPitch.map(op => `
                            <option value="${op.id}" ${op.id === curTargetId ? 'selected' : ''}>
                              ${op.pos} · ${op.name} (${op.ovr || 70} OVR)${(op.ovr || 70) === oppPitchStarOvr ? ' ⭐ Peligro principal' : ''}
                            </option>
                          `).join('')}
                        </select>
                      </div>

                      ${curTargetId ? `
                        <div class="pt-1">
                          <span class="block text-[9px] uppercase font-bold text-slate-400 mb-1.5">Intensidad del Marcaje:</span>
                          <div class="grid grid-cols-3 gap-1.5 text-center">
                            <button class="btn-ht-mark-intensity p-1.5 rounded-xl border text-left transition flex flex-col gap-0.5 ${curIntensity === 'light' ? 'bg-amber-500/25 border-amber-400 text-white ring-1 ring-amber-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700'} active:scale-95" data-intensity="light" data-marker-id="${selPlayer.id}">
                              <div class="flex items-center gap-1 font-bold text-[10px] ${curIntensity === 'light' ? 'text-amber-300' : 'text-slate-200'}">
                                <span>👁️</span> Suave
                              </div>
                              <div class="text-[8px] text-slate-400 leading-tight">Vigilancia (-12% rival, +4% fatiga)</div>
                            </button>
                            <button class="btn-ht-mark-intensity p-1.5 rounded-xl border text-left transition flex flex-col gap-0.5 ${curIntensity === 'tight' ? 'bg-sky-500/25 border-sky-400 text-white ring-1 ring-sky-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700'} active:scale-95" data-intensity="tight" data-marker-id="${selPlayer.id}">
                              <div class="flex items-center gap-1 font-bold text-[10px] ${curIntensity === 'tight' ? 'text-sky-300' : 'text-slate-200'}">
                                <span>🔒</span> Férreo
                              </div>
                              <div class="text-[8px] text-slate-400 leading-tight">Pegajoso (-24% rival, +10% fatiga, +12% faltas)</div>
                            </button>
                            <button class="btn-ht-mark-intensity p-1.5 rounded-xl border text-left transition flex flex-col gap-0.5 ${curIntensity === 'aggressive' ? 'bg-rose-500/25 border-rose-400 text-white ring-1 ring-rose-400' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700'} active:scale-95" data-intensity="aggressive" data-marker-id="${selPlayer.id}">
                              <div class="flex items-center gap-1 font-bold text-[10px] ${curIntensity === 'aggressive' ? 'text-rose-300' : 'text-slate-200'}">
                                <span>⚔️</span> Secante
                              </div>
                              <div class="text-[8px] text-slate-400 leading-tight">Asfixiante (-36% rival, +18% fatiga, +28% faltas)</div>
                            </button>
                          </div>
                        </div>
                      ` : ''}
                    </div>
                  ` : ''}
                </div>
              `;

              const btnClose = rolePanel.querySelector("#btn-ht-close-role-panel");
              if (btnClose) {
                btnClose.onclick = (e) => {
                  e.stopPropagation();
                  htSelectedPlayerId = null;
                  renderHTTactics();
                };
              }

              // Sliders de ajuste fino en vivo
              const sliderHtY = rolePanel.querySelector(".slider-ht-pos-y");
              if (sliderHtY) {
                sliderHtY.oninput = (e) => {
                  const val = parseInt(e.target.value, 10);
                  htCustomPositions[selSlotIndex] = { x: effSlot.x, y: val };
                  const slotEl = pitchSlots.querySelector(`.slot-ht-player[data-slot-index="${selSlotIndex}"]`);
                  if (slotEl) slotEl.style.top = `${val}%`;
                };
                sliderHtY.onchange = () => {
                  renderHTTactics();
                };
              }

              const sliderHtX = rolePanel.querySelector(".slider-ht-pos-x");
              if (sliderHtX) {
                sliderHtX.oninput = (e) => {
                  const val = parseInt(e.target.value, 10);
                  htCustomPositions[selSlotIndex] = { x: val, y: effSlot.y };
                  const slotEl = pitchSlots.querySelector(`.slot-ht-player[data-slot-index="${selSlotIndex}"]`);
                  if (slotEl) slotEl.style.left = `${val}%`;
                };
                sliderHtX.onchange = () => {
                  renderHTTactics();
                };
              }

              rolePanel.querySelectorAll(".btn-ht-nudge-pos").forEach(btn => {
                btn.onclick = (e) => {
                  e.stopPropagation();
                  const axis = btn.dataset.axis;
                  const delta = parseInt(btn.dataset.delta, 10);
                  const isGK = selSlotIndex === 0;
                  if (axis === "x") {
                    const newX = Math.max(isGK ? 38 : 10, Math.min(isGK ? 62 : 90, effSlot.x + delta));
                    htCustomPositions[selSlotIndex] = { x: newX, y: effSlot.y };
                  } else {
                    const newY = Math.max(isGK ? 82 : 12, Math.min(isGK ? 90 : 88, effSlot.y + delta));
                    htCustomPositions[selSlotIndex] = { x: effSlot.x, y: newY };
                  }
                  renderHTTactics();
                };
              });

              const btnResetPos = rolePanel.querySelector("#btn-ht-reset-pos");
              if (btnResetPos) {
                btnResetPos.onclick = (e) => {
                  e.stopPropagation();
                  delete htCustomPositions[selSlotIndex];
                  renderHTTactics();
                };
              }

              rolePanel.querySelectorAll(".btn-ht-assign-role").forEach(btn => {
                btn.onclick = (e) => {
                  e.stopPropagation();
                  const pId = btn.dataset.playerId;
                  const rId = btn.dataset.roleId;
                  htPlayerRoles[pId] = rId;
                  renderHTTactics();
                };
              });

              // Handlers de Marcaje al Hombre en Vivo
              const selectHtMark = rolePanel.querySelector("#select-ht-mark-target");
              if (selectHtMark) {
                selectHtMark.onchange = (e) => {
                  const markerId = selectHtMark.dataset.markerId;
                  const targetId = e.target.value;
                  if (!htManMarking) htManMarking = {};
                  if (!targetId) {
                    delete htManMarking[markerId];
                  } else {
                    htManMarking[markerId] = {
                      targetId,
                      intensity: htManMarking[markerId]?.intensity || "tight"
                    };
                  }
                  renderHTTactics();
                };
              }

              rolePanel.querySelectorAll(".btn-ht-mark-intensity").forEach(btn => {
                btn.onclick = (e) => {
                  e.stopPropagation();
                  const markerId = btn.dataset.markerId;
                  const intensity = btn.dataset.intensity;
                  if (!htManMarking) htManMarking = {};
                  if (htManMarking[markerId]) {
                    htManMarking[markerId].intensity = intensity;
                  } else {
                    const oppStar = oppOutfieldPitch.slice().sort((a, b) => (b.ovr || 70) - (a.ovr || 70))[0];
                    if (oppStar) {
                      htManMarking[markerId] = {
                        targetId: oppStar.id,
                        intensity
                      };
                    }
                  }
                  renderHTTactics();
                };
              });

              const btnHtClearMark = rolePanel.querySelector("#btn-ht-clear-mark");
              if (btnHtClearMark) {
                btnHtClearMark.onclick = (e) => {
                  e.stopPropagation();
                  if (htSelectedPlayerId && htManMarking) {
                    delete htManMarking[htSelectedPlayerId];
                    renderHTTactics();
                  }
                };
              }
            } else {
              rolePanel.innerHTML = "";
            }
          } else {
            rolePanel.innerHTML = "";
          }
        }

        // Botón y panel de desplegable de todas las funciones del 11
        const btnToggleRoles = modalHTTactics.querySelector("#btn-ht-toggle-roles");
        const allRolesContainer = modalHTTactics.querySelector("#ht-all-roles-container");
        const toggleRolesText = modalHTTactics.querySelector("#ht-toggle-roles-text");

        if (btnToggleRoles && allRolesContainer) {
          if (toggleRolesText) {
            toggleRolesText.textContent = showHTAllRoles ? "Ocultar funciones del 11" : "Ver funciones de los 11";
          }
          if (showHTAllRoles) {
            allRolesContainer.classList.remove("hidden");
            allRolesContainer.innerHTML = `
              <div class="bg-slate-900 border border-slate-800 rounded-2xl p-3 space-y-2 shadow-lg">
                <div class="flex items-center justify-between pb-1.5 border-b border-slate-800">
                  <span class="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>⚙️</span> Funciones e Instrucciones de los 11 en Campo
                  </span>
                  <span class="text-[10px] text-slate-400">Personaliza cada rol</span>
                </div>
                <div class="space-y-1.5 max-h-56 overflow-y-auto pr-1 no-scrollbar">
                  ${formation.slots.map((slot, idx) => {
                    const pId = htLineupIds[idx];
                    const p = getPlayer(pId);
                    if (!p) return "";
                    const curRoleId = (htPlayerRoles && htPlayerRoles[p.id]) || getDefaultRoleForPosition(slot.pos);
                    const availRoles = getAvailableRolesForPosition(slot.pos);
                    return `
                      <div class="flex items-center justify-between p-2 rounded-xl bg-slate-950 border border-slate-800/80 text-xs">
                        <div class="flex items-center gap-2 min-w-0">
                          <span class="w-8 text-center font-extrabold text-[10px] px-1 py-0.5 rounded bg-slate-800 text-sky-400 flex-shrink-0">${slot.label}</span>
                          <span class="font-bold text-white truncate text-xs">${p.name.split(' ').slice(-1)[0]}</span>
                        </div>
                        <select class="select-ht-player-role bg-slate-900 border border-slate-700 text-sky-300 text-[11px] font-bold rounded-lg px-2 py-1 outline-none focus:border-sky-400 max-w-[185px]" data-player-id="${p.id}" data-pos="${slot.pos}">
                          ${availRoles.map(r => `
                            <option value="${r.id}" ${r.id === curRoleId ? 'selected' : ''}>
                              ${r.icon} ${r.name} (${r.tag})
                            </option>
                          `).join('')}
                        </select>
                      </div>
                    `;
                  }).join('')}
                </div>
              </div>
            `;

            allRolesContainer.querySelectorAll(".select-ht-player-role").forEach(sel => {
              sel.onchange = (e) => {
                const pId = sel.dataset.playerId;
                htPlayerRoles[pId] = e.target.value;
                renderHTTactics();
              };
            });
          } else {
            allRolesContainer.classList.add("hidden");
            allRolesContainer.innerHTML = "";
          }

          btnToggleRoles.onclick = (e) => {
            e.stopPropagation();
            showHTAllRoles = !showHTAllRoles;
            renderHTTactics();
          };
        }

        // Banquillo de suplentes
        const benchScroll = modalHTTactics.querySelector("#ht-bench-scroll");
        if (benchScroll) {
          const benchPlayers = htBenchIds.map(id => getPlayer(id)).filter(Boolean);
          benchScroll.innerHTML = benchPlayers.map(p => {
            const isSelected = htSelectedPlayerId === p.id;
            const wasStarter = initialPitchIds.includes(p.id);

            return `
              <div class="bench-ht-card flex-shrink-0 bg-slate-900 border ${isSelected ? 'border-amber-400 bg-amber-500/20' : wasStarter ? 'border-red-500/50 bg-red-950/20' : 'border-slate-800'} p-2 rounded-xl text-center cursor-pointer active:scale-95 transition min-w-[76px]" data-player-id="${p.id}">
                <div class="flex items-center justify-center gap-1">
                  <span class="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-slate-800 ${p.pos === 'DC' || p.pos === 'EI' || p.pos === 'ED' ? 'text-red-400' : p.pos === 'MC' || p.pos === 'MCD' || p.pos === 'MCO' ? 'text-amber-400' : p.pos === 'POR' ? 'text-purple-400' : 'text-sky-400'}">${p.pos}</span>
                  ${wasStarter ? '<span class="text-[8px] text-red-400">🔻</span>' : ''}
                </div>
                <div class="text-[10px] font-bold text-white truncate max-w-[70px] mt-1">${p.name.split(' ').slice(-1)[0]}</div>
                <div class="flex items-center justify-center gap-1 mt-0.5">
                  <span class="text-xs font-black text-amber-400">${p.ovr}</span>
                  ${p.playedInMatch ? `<span class="text-[8px] font-mono font-bold px-1 rounded bg-slate-800 text-emerald-300">⭐${(p.matchRating || 6.5).toFixed(1)}</span>` : ''}
                </div>
                <div class="w-10 h-1 bg-slate-800 rounded-full mx-auto mt-1 overflow-hidden">
                  <div class="h-full bg-emerald-400" style="width: ${p.energy || 100}%;"></div>
                </div>
              </div>
            `;
          }).join('');

          benchScroll.querySelectorAll(".bench-ht-card").forEach(el => {
            el.onclick = () => {
              handleHTPlayerTap(el.dataset.playerId);
            };
          });
        }
      }

      function handleHTPlayerTap(tappedId) {
        if (!htSelectedPlayerId) {
          htSelectedPlayerId = tappedId;
          renderHTTactics();
          return;
        }

        if (htSelectedPlayerId === tappedId) {
          htSelectedPlayerId = null;
          renderHTTactics();
          return;
        }

        const inLineup1 = htLineupIds.indexOf(htSelectedPlayerId);
        const inBench1 = htBenchIds.indexOf(htSelectedPlayerId);

        const inLineup2 = htLineupIds.indexOf(tappedId);
        const inBench2 = htBenchIds.indexOf(tappedId);

        if (inLineup1 !== -1 && inLineup2 !== -1) {
          // Ambos en el campo: intercambio posicional
          const tmp = htLineupIds[inLineup1];
          htLineupIds[inLineup1] = htLineupIds[inLineup2];
          htLineupIds[inLineup2] = tmp;
        } else if (inLineup1 !== -1 && inBench2 !== -1) {
          // Titular sale por Suplente
          const allSimPlayers = [...currentPitch, ...currentBench];
          const benchP = allSimPlayers.find(p => p.id === tappedId) || userTeam.players.find(p => p.id === tappedId);
          if (benchP && benchP.injury) {
            alert(`⚠️ ${benchP.name} está lesionado (${benchP.injury.type}) y no puede entrar al campo.`);
            htSelectedPlayerId = null;
            renderHTTactics();
            return;
          }
          if (benchP && benchP.suspension) {
            alert(`🟥 ${benchP.name} está sancionado y no puede entrar al campo.`);
            htSelectedPlayerId = null;
            renderHTTactics();
            return;
          }
          if (benchP && benchP.subbedOut && !initialPitchIds.includes(tappedId)) {
            alert(`⚠️ ${benchP.name} ya fue sustituido anteriormente y no puede reingresar.`);
            htSelectedPlayerId = null;
            renderHTTactics();
            return;
          }
          if (isLive && startWindows <= 0) {
            alert("Has agotado las 3 ventanas de cambios permitidas en el partido. Los cambios en el descanso no consumen ventana, pero en juego ya no puedes hacer más cambios.");
            htSelectedPlayerId = null;
            renderHTTactics();
            return;
          }
          const testLineup = [...htLineupIds];
          testLineup[inLineup1] = tappedId;
          const testSubsCount = testLineup.filter(id => !initialPitchIds.includes(id)).length;

          if (testSubsCount > startRemaining) {
            alert(`No puedes realizar más cambios. Límite de ${startRemaining} cambios disponibles alcanzado.`);
            htSelectedPlayerId = null;
            renderHTTactics();
            return;
          }

          htLineupIds[inLineup1] = tappedId;
          htBenchIds[inBench2] = htSelectedPlayerId;
        } else if (inBench1 !== -1 && inLineup2 !== -1) {
          // Suplente entra por Titular
          const allSimPlayers = [...currentPitch, ...currentBench];
          const benchP = allSimPlayers.find(p => p.id === htSelectedPlayerId) || userTeam.players.find(p => p.id === htSelectedPlayerId);
          if (benchP && benchP.injury) {
            alert(`⚠️ ${benchP.name} está lesionado (${benchP.injury.type}) y no puede entrar al campo.`);
            htSelectedPlayerId = null;
            renderHTTactics();
            return;
          }
          if (benchP && benchP.suspension) {
            alert(`🟥 ${benchP.name} está sancionado y no puede entrar al campo.`);
            htSelectedPlayerId = null;
            renderHTTactics();
            return;
          }
          if (benchP && benchP.subbedOut && !initialPitchIds.includes(htSelectedPlayerId)) {
            alert(`⚠️ ${benchP.name} ya fue sustituido anteriormente y no puede reingresar.`);
            htSelectedPlayerId = null;
            renderHTTactics();
            return;
          }
          if (isLive && startWindows <= 0) {
            alert("Has agotado las 3 ventanas de cambios permitidas en el partido. Los cambios en el descanso no consumen ventana, pero en juego ya no puedes hacer más cambios.");
            htSelectedPlayerId = null;
            renderHTTactics();
            return;
          }
          const testLineup = [...htLineupIds];
          testLineup[inLineup2] = htSelectedPlayerId;
          const testSubsCount = testLineup.filter(id => !initialPitchIds.includes(id)).length;

          if (testSubsCount > startRemaining) {
            alert(`No puedes realizar más cambios. Límite de ${startRemaining} cambios disponibles alcanzado.`);
            htSelectedPlayerId = null;
            renderHTTactics();
            return;
          }

          htBenchIds[inBench1] = tappedId;
          htLineupIds[inLineup2] = htSelectedPlayerId;
        } else if (inBench1 !== -1 && inBench2 !== -1) {
          // Ambos en banquillo
          const tmp = htBenchIds[inBench1];
          htBenchIds[inBench1] = htBenchIds[inBench2];
          htBenchIds[inBench2] = tmp;
        }

        htSelectedPlayerId = null;
        renderHTTactics();
      }

      // Eventos de confirmación y cancelación
      const btnConfirm = modalHTTactics.querySelector("#btn-ht-tactic-confirm");
      const btnCancel = modalHTTactics.querySelector("#btn-ht-tactic-cancel");

      btnCancel.onclick = () => {
        modalHTTactics.classList.add("hidden");
        if (isLive) {
          if (wasRunning && !simulator.isFinished && !simulator.isHalfTime) {
            simulator.start();
            iconPP.textContent = "⏸";
            textPP.textContent = "Pausar";
          }
        } else {
          if (modalHT) modalHT.classList.remove("hidden");
        }
      };

      btnConfirm.onclick = () => {
        const res = simulator.applyTacticalChanges(
          teamSide,
          htFormationKey,
          htMentality,
          htLineupIds,
          htBenchIds,
          !isLive,
          htPlayerRoles,
          htCustomPositions,
          htManMarking
        );

        if (!res.success) {
          alert(res.reason);
          return;
        }

        gameState.userTactics.formation = htFormationKey;
        gameState.userTactics.mentality = htMentality;
        if (htLineupIds.length === 11) {
          gameState.userTactics.lineup = [...htLineupIds];
          gameState.userTactics.bench = [...htBenchIds];
        }
        gameState.userTactics.playerRoles = { ...htPlayerRoles };
        gameState.userTactics.customPositions = { ...htCustomPositions };
        gameState.userTactics.manMarking = { ...htManMarking };
        gameState.userTactics.instructions = JSON.parse(JSON.stringify(htInstructions));

        simulator.setTacticalInstructions(teamSide, htInstructions);

        if (teamSide === "home") {
          simulator.homePlayerRoles = { ...simulator.homePlayerRoles, ...htPlayerRoles };
          simulator.homeCustomPositions = { ...htCustomPositions };
        } else {
          simulator.awayPlayerRoles = { ...simulator.awayPlayerRoles, ...htPlayerRoles };
          simulator.awayCustomPositions = { ...htCustomPositions };
        }

        if (masterTacticsForNextMatches) {
          masterTacticsForNextMatches.formation = htFormationKey;
          masterTacticsForNextMatches.mentality = htMentality;
          masterTacticsForNextMatches.playerRoles = { ...htPlayerRoles };
          masterTacticsForNextMatches.customPositions = { ...htCustomPositions };
          masterTacticsForNextMatches.manMarking = { ...htManMarking };
          masterTacticsForNextMatches.instructions = JSON.parse(JSON.stringify(htInstructions));
        }
        SaveManager.saveGame(gameState);

        if (mentLabel) {
          mentLabel.textContent = mentalities.find(m => m.id === htMentality)?.label || "Equilibrada";
        }

        modalHTTactics.classList.add("hidden");

        const htSubsBadge = container.querySelector("#ht-subs-badge");
        if (htSubsBadge) htSubsBadge.textContent = `${res.remaining} rest. (Descanso: no gasta ventana)`;

        const subsBadge = container.querySelector("#subs-count-badge");
        if (subsBadge) {
          subsBadge.textContent = `${res.remaining} rest. (${res.windowsRemaining} vent.)`;
          if (res.windowsRemaining <= 0 || res.remaining <= 0) {
            subsBadge.className = "px-2 py-0.5 rounded-full bg-red-900/60 text-red-300 text-[10px] font-mono";
          }
        }

        if (isLive) {
          if (res.subsCount > 0) {
            showSubstitutionChyron({
              teamSide: teamSide,
              team: userTeam,
              subs: res.subsPairs,
              minute: simulator.minute,
              remaining: res.remaining,
              windowsRemaining: res.windowsRemaining,
              isHalfTime: false
            }, () => {
              if (wasRunning && !simulator.isFinished && !simulator.isHalfTime) {
                simulator.start();
                iconPP.textContent = "⏸";
                textPP.textContent = "Pausar";
              }
            });
          } else {
            showMatchAlert({ text: "🎯 Esquema táctico y posiciones actualizadas" });
            if (wasRunning && !simulator.isFinished && !simulator.isHalfTime) {
              simulator.start();
              iconPP.textContent = "⏸";
              textPP.textContent = "Pausar";
            }
          }
        } else {
          if (res.subsCount > 0) {
            showSubstitutionChyron({
              teamSide: teamSide,
              team: userTeam,
              subs: res.subsPairs,
              minute: 45,
              remaining: res.remaining,
              windowsRemaining: res.windowsRemaining,
              isHalfTime: true
            }, () => {
              if (modalHT) modalHT.classList.remove("hidden");
            });
          } else {
            showMatchAlert({ text: "🎯 Esquema táctico actualizado para la 2ª parte" });
            if (modalHT) modalHT.classList.remove("hidden");
          }
        }
      };

      modalHTTactics.classList.remove("hidden");
      renderHTTactics();
    }

    function openSetPieceModal(spInfo) {
      simulator.pause();
      simulator.isSetPieceRunning = true;
      const iconPP = container.querySelector("#play-pause-icon");
      const textPP = container.querySelector("#play-pause-text");
      if (iconPP) iconPP.textContent = "▶";
      if (textPP) textPP.textContent = "Reanudar";

      const modalSP = container.querySelector("#modal-setpiece");
      if (!modalSP) return;

      const badgeType = modalSP.querySelector("#setpiece-badge-type");
      const title = modalSP.querySelector("#setpiece-title");
      const btnAuto = modalSP.querySelector("#btn-setpiece-auto");
      const takerSelect = modalSP.querySelector("#setpiece-taker-select");
      const chipsContainer = modalSP.querySelector("#setpiece-strategy-chips");
      const ballSpot = modalSP.querySelector("#setpiece-ball-spot");
      const zonesContainer = modalSP.querySelector("#setpiece-interactive-zones");
      const poolContainer = modalSP.querySelector("#setpiece-players-pool");
      const btnConfirm = modalSP.querySelector("#btn-setpiece-confirm");
      const hintText = modalSP.querySelector("#setpiece-hint-text");

      const isCorner = spInfo.type === "CORNER";
      const isHome = spInfo.attackingSide === "home";
      const isLeftCorner = spInfo.spot.y < 50;

      if (badgeType) {
        badgeType.textContent = isCorner 
          ? `🚩 CÓRNER BANDA ${isLeftCorner ? "IZQUIERDA" : "DERECHA"} (${spInfo.minute}')` 
          : `🎯 FALTA PELIGROSA (${spInfo.distanceMeters ? spInfo.distanceMeters + 'm · ' : ''}${spInfo.minute}')`;
        badgeType.className = isCorner
          ? "text-[10px] uppercase font-black text-sky-400 bg-sky-400/10 border border-sky-400/30 px-2.5 py-0.5 rounded-full"
          : "text-[10px] uppercase font-black text-amber-400 bg-amber-400/10 border border-amber-400/30 px-2.5 py-0.5 rounded-full";
      }
      if (title) {
        title.textContent = isCorner 
          ? `Pizarra Táctica · Saque de Esquina (${isLeftCorner ? "Banda Izquierda" : "Banda Derecha"})` 
          : `Pizarra Táctica · Falta a ${spInfo.distanceMeters || 24} metros`;
      }

      // Ubicación física del balón en la mini pizarra del área
      if (ballSpot) {
        if (isCorner) {
          ballSpot.style.left = isLeftCorner ? "12px" : "calc(100% - 24px)";
          ballSpot.style.top = "10px";
        } else {
          const pctY = Math.max(16, Math.min(84, spInfo.spot.y));
          const distM = spInfo.distanceMeters || 24;
          const topPct = Math.max(54, Math.min(92, 52 + (distM - 16) * 2.1));
          ballSpot.style.left = `${pctY}%`;
          ballSpot.style.top = `${topPct}%`;
        }
      }

      const atkPlayers = isHome ? simulator.homePlayersOnPitch : simulator.awayPlayersOnPitch;
      const outfield = atkPlayers.filter(p => p.pos !== "POR");

      // Ordenar lanzadores sugeridos por stats (PAS y SHO)
      const sortedTakers = [...outfield].sort((a, b) => {
        const scoreA = isCorner ? ((a.pas || 70) * 1.3 + (a.sho || 70) * 0.7) : ((a.sho || 70) * 1.3 + (a.pas || 70) * 0.7);
        const scoreB = isCorner ? ((b.pas || 70) * 1.3 + (b.sho || 70) * 0.7) : ((b.sho || 70) * 1.3 + (b.pas || 70) * 0.7);
        return scoreB - scoreA;
      });

      const spTypeKey = isCorner ? "CORNER" : "FREE_KICK";
      const savedSP = gameState.userTactics?.savedSetPieces?.[spTypeKey];

      let selectedTakerId = sortedTakers[0]?.id || outfield[0]?.id;
      if (savedSP && savedSP.takerId && outfield.some(p => p.id === savedSP.takerId)) {
        selectedTakerId = savedSP.takerId;
      }

      if (takerSelect) {
        takerSelect.innerHTML = outfield.map(p => {
          const statText = isCorner ? `PAS ${p.pas || 70} · OVR ${p.ovr}` : `SHO ${p.sho || 70} · PAS ${p.pas || 70}`;
          return `<option value="${p.id}" ${p.id === selectedTakerId ? 'selected' : ''}>${p.name} (${p.pos}) — ${statText}</option>`;
        }).join('');
      }

      const strategies = isCorner ? [
        { id: "PENALTY_SPOT", label: "🎯 Al Punto de Penalti", desc: "Balón colgado al centro del área" },
        { 
          id: "NEAR_POST", 
          label: isLeftCorner ? "📐 1er Palo (Palo Izq.)" : "📐 1er Palo (Palo Dcho.)", 
          desc: isLeftCorner ? "Envío tenso al palo corto izquierdo" : "Envío tenso al palo corto derecho" 
        },
        { 
          id: "FAR_POST", 
          label: isLeftCorner ? "📐 2º Palo (Palo Dcho.)" : "📐 2º Palo (Palo Izq.)", 
          desc: isLeftCorner ? "Balón colgado al segundo poste derecho" : "Balón colgado al segundo poste izquierdo" 
        },
        { id: "SHORT_PASS", label: "🤝 Saque en Corto", desc: "Pase en corto para abrir ángulo" }
      ] : [
        { id: "DIRECT_SHOT", label: "💥 Disparo Directo", desc: "Tiro a la escuadra o palo del portero" },
        { id: "PENALTY_SPOT", label: "🎯 Al Punto de Penalti", desc: "Centro bombeado al corazón del área" },
        { id: "NEAR_POST", label: "📐 Al Primer Palo", desc: "Centro cerrado buscando desvío" },
        { id: "FAR_POST", label: "📐 Al Segundo Palo", desc: "Balón colgado al segundo poste" },
        { id: "SHORT_PASS", label: "🤝 Pase en Corto", desc: "Pase a la frontal del área para remate" }
      ];

      let currentStrategy = isCorner ? "PENALTY_SPOT" : "DIRECT_SHOT";
      if (savedSP && savedSP.strategy && strategies.some(s => s.id === savedSP.strategy)) {
        currentStrategy = savedSP.strategy;
      }

      // El 1er palo se ubica siempre en el poste más cercano a la esquina donde se saca el córner
      const zoneDefs = [
        { 
          id: "NEAR_POST", 
          name: "1er Palo", 
          x: isLeftCorner ? 26 : 74, 
          y: 24, 
          desc: isCorner ? (isLeftCorner ? "Palo corto (Izq.)" : "Palo corto (Dcho.)") : "Anticipación", 
          color: "text-amber-300" 
        },
        { id: "PENALTY_SPOT", name: "Pto. Penalti", x: 50, y: 40, desc: "Rematador principal", color: "text-emerald-300" },
        { 
          id: "FAR_POST", 
          name: "2º Palo", 
          x: isLeftCorner ? 74 : 26, 
          y: 24, 
          desc: isCorner ? (isLeftCorner ? "Palo largo (Dcho.)" : "Palo largo (Izq.)") : "Llegada desde atrás", 
          color: "text-amber-300" 
        },
        { id: "EDGE_BOX", name: "Frontal", x: 50, y: 64, desc: "Tiro de rechace", color: "text-sky-300" },
        { id: "SHORT_OPTION", name: "En Corto", x: (isLeftCorner ? 18 : 82), y: isCorner ? 26 : 58, desc: "Apoyo para pase", color: "text-indigo-300" },
        { id: "STAY_BACK", name: "Cierre", x: 50, y: 84, desc: "Contención defensiva", color: "text-slate-300" }
      ];

      let placements = {};
      let selectedPoolPlayerId = null;

      function autoAssignPlacements() {
        placements = {};
        const pool = outfield.filter(p => p.id !== selectedTakerId);

        const poolByHeadingSho = [...pool].sort((a, b) => ((b.sho || 70) * 1.2 + (b.ovr || 70)) - ((a.sho || 70) * 1.2 + (a.ovr || 70)));
        const pPen = poolByHeadingSho[0];
        if (pPen) placements["PENALTY_SPOT"] = pPen.id;

        const rem1 = pool.filter(p => p.id !== pPen?.id);
        const pNear = rem1.sort((a, b) => ((b.sho || 70) + (b.pac || 70)) - ((a.sho || 70) + (a.pac || 70)))[0];
        if (pNear) placements["NEAR_POST"] = pNear.id;

        const rem2 = rem1.filter(p => p.id !== pNear?.id);
        const pFar = rem2.sort((a, b) => (b.ovr || 70) - (a.ovr || 70))[0];
        if (pFar) placements["FAR_POST"] = pFar.id;

        const rem3 = rem2.filter(p => p.id !== pFar?.id);
        const pEdge = rem3.sort((a, b) => ((b.sho || 70) + (b.pas || 70)) - ((a.sho || 70) + (a.pas || 70)))[0];
        if (pEdge) placements["EDGE_BOX"] = pEdge.id;

        const rem4 = rem3.filter(p => p.id !== pEdge?.id);
        const pShort = rem4.sort((a, b) => (b.pas || 70) - (a.pas || 70))[0];
        if (pShort) placements["SHORT_OPTION"] = pShort.id;

        const rem5 = rem4.filter(p => p.id !== pShort?.id);
        const pBack = rem5.sort((a, b) => (b.def || 70) - (a.def || 70))[0];
        if (pBack) placements["STAY_BACK"] = pBack.id;
      }

      function loadSavedOrAutoPlacements() {
        if (savedSP && savedSP.placements && Object.keys(savedSP.placements).length > 0) {
          placements = {};
          const availablePool = outfield.filter(p => p.id !== selectedTakerId);
          const usedPIds = new Set();
          // Primero colocamos los futbolistas guardados que siguen en el campo
          Object.keys(savedSP.placements).forEach(zId => {
            const pId = savedSP.placements[zId];
            if (pId && pId !== selectedTakerId && availablePool.some(p => p.id === pId) && !usedPIds.has(pId)) {
              placements[zId] = pId;
              usedPIds.add(pId);
            }
          });
          // Si quedan zonas vacías, rellenar con los restantes
          const remainingPool = availablePool.filter(p => !usedPIds.has(p.id));
          zoneDefs.forEach(z => {
            if (!placements[z.id] && remainingPool.length > 0) {
              const nextP = remainingPool.shift();
              placements[z.id] = nextP.id;
            }
          });
        } else {
          autoAssignPlacements();
        }
      }
      loadSavedOrAutoPlacements();

      function renderSetPieceBoard() {
        // 1. Renderizar opciones / chips de estrategia
        if (chipsContainer) {
          chipsContainer.innerHTML = strategies.map(st => {
            const isActive = st.id === currentStrategy;
            return `
              <button class="sp-strategy-btn p-2 rounded-xl border text-left transition flex flex-col justify-center ${isActive ? 'bg-gradient-to-r from-emerald-600 to-teal-600 border-emerald-400 text-white shadow-lg ring-2 ring-emerald-400/40' : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:border-slate-500'}" data-strategy="${st.id}">
                <div class="font-extrabold text-[11px] truncate flex items-center justify-between">
                  <span>${st.label}</span>
                  ${isActive ? '<span class="text-xs">✔</span>' : ''}
                </div>
                <div class="text-[9px] ${isActive ? 'text-emerald-100' : 'text-slate-400'} truncate">${st.desc}</div>
              </button>
            `;
          }).join('');

          chipsContainer.querySelectorAll(".sp-strategy-btn").forEach(btn => {
            btn.onclick = () => {
              currentStrategy = btn.dataset.strategy;
              renderSetPieceBoard();
            };
          });
        }

        // 2. Renderizar Zonas en la pizarra táctica del área
        if (zonesContainer) {
          zonesContainer.innerHTML = zoneDefs.map(zone => {
            const isTarget = (zone.id === currentStrategy) || (currentStrategy === "DIRECT_SHOT" && zone.id === "PENALTY_SPOT");
            const assignedPId = placements[zone.id];
            const assignedPlayer = assignedPId ? outfield.find(p => p.id === assignedPId) : null;

            return `
              <div class="sp-zone-slot absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform active:scale-95" style="left: ${zone.x}%; top: ${zone.y}%;" data-zone="${zone.id}">
                <div class="flex flex-col items-center">
                  <div class="px-2 py-1 rounded-xl text-center border backdrop-blur-md shadow-md min-w-[72px] transition ${isTarget ? 'bg-amber-500/25 border-amber-400 ring-2 ring-amber-400/60 shadow-amber-500/30' : (assignedPlayer ? 'bg-slate-900/90 border-emerald-500/80 shadow-emerald-500/10' : 'bg-slate-900/80 border-slate-600/70 hover:border-slate-400')}">
                    <div class="flex items-center justify-between gap-1 text-[8px] font-black uppercase ${isTarget ? 'text-amber-300 font-extrabold' : 'text-slate-400'}">
                      <span class="truncate">${zone.name}</span>
                      ${isTarget ? '<span class="text-[8px] bg-amber-400 text-slate-950 font-black px-1 rounded">OBJ</span>' : ''}
                    </div>
                    ${assignedPlayer ? `
                      <div class="font-extrabold text-[10px] text-white truncate max-w-[80px]">${assignedPlayer.name}</div>
                      <div class="text-[8px] text-emerald-400 font-mono">${assignedPlayer.pos} · ${assignedPlayer.ovr}</div>
                    ` : `
                      <div class="text-[9px] text-slate-500 italic py-0.5">+ Colocar</div>
                    `}
                  </div>
                </div>
              </div>
            `;
          }).join('');

          zonesContainer.querySelectorAll(".sp-zone-slot").forEach(slot => {
            slot.onclick = () => {
              const zoneId = slot.dataset.zone;
              if (selectedPoolPlayerId) {
                // Si el jugador ya estaba en otra zona, liberarla
                Object.keys(placements).forEach(z => {
                  if (placements[z] === selectedPoolPlayerId) {
                    delete placements[z];
                  }
                });
                placements[zoneId] = selectedPoolPlayerId;
                selectedPoolPlayerId = null;
                renderSetPieceBoard();
              } else if (placements[zoneId]) {
                // Desasignar jugador de la zona al tocarla
                delete placements[zoneId];
                renderSetPieceBoard();
              }
            };
          });
        }

        // 3. Renderizar Pool de futbolistas de campo disponibles
        if (poolContainer) {
          const pool = outfield.filter(p => p.id !== selectedTakerId);
          poolContainer.innerHTML = pool.map(p => {
            const isSelected = selectedPoolPlayerId === p.id;
            let assignedZoneName = null;
            Object.keys(placements).forEach(zId => {
              if (placements[zId] === p.id) {
                const zDef = zoneDefs.find(zd => zd.id === zId);
                assignedZoneName = zDef ? zDef.name : zId;
              }
            });

            return `
              <div class="sp-pool-item flex-shrink-0 p-2 rounded-xl border cursor-pointer select-none transition min-w-[104px] ${isSelected ? 'bg-cyan-500/25 border-cyan-400 ring-2 ring-cyan-400/50 shadow-lg' : (assignedZoneName ? 'bg-slate-900/90 border-slate-700' : 'bg-slate-950/80 border-slate-800 hover:border-slate-600')}" data-id="${p.id}">
                <div class="flex items-center justify-between gap-1 mb-1">
                  <span class="px-1.5 py-0.2 rounded bg-slate-800 text-[9px] font-bold text-sky-400">${p.pos}</span>
                  <span class="text-[9px] font-mono font-bold text-amber-400">${p.ovr}</span>
                </div>
                <div class="font-extrabold text-[11px] text-white truncate max-w-[94px]">${p.name}</div>
                <div class="flex justify-between text-[8px] text-slate-400 mt-1">
                  <span>REM: <b>${p.sho || 70}</b></span>
                  <span>PAS: <b>${p.pas || 70}</b></span>
                </div>
                <div class="mt-1">
                  ${assignedZoneName ? `
                    <span class="inline-block text-[8px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-1.5 py-0.2 rounded font-bold truncate max-w-full">
                      📍 ${assignedZoneName}
                    </span>
                  ` : `
                    <span class="inline-block text-[8px] bg-slate-800 text-slate-400 px-1.5 py-0.2 rounded">
                      Disponible
                    </span>
                  `}
                </div>
              </div>
            `;
          }).join('');

          poolContainer.querySelectorAll(".sp-pool-item").forEach(item => {
            item.onclick = () => {
              const pId = item.dataset.id;
              if (selectedPoolPlayerId === pId) {
                selectedPoolPlayerId = null;
              } else {
                selectedPoolPlayerId = pId;
              }
              renderSetPieceBoard();
            };
          });
        }

        // 4. Actualizar texto de instrucción dinámica
        if (hintText) {
          if (selectedPoolPlayerId) {
            const selP = outfield.find(p => p.id === selectedPoolPlayerId);
            hintText.innerHTML = `👉 <b class="text-cyan-400">${selP?.name}</b> seleccionado. Ahora <b>toca una zona del área</b> para ubicarlo allí.`;
          } else {
            hintText.innerHTML = `💡 Toca un futbolista y luego una zona del área para ubicarlo en la jugada ensayada.`;
          }
        }
      }

      if (takerSelect) {
        takerSelect.onchange = () => {
          selectedTakerId = takerSelect.value;
          // Si el lanzador estaba asignado a alguna zona, retirarlo
          Object.keys(placements).forEach(zId => {
            if (placements[zId] === selectedTakerId) {
              delete placements[zId];
            }
          });
          if (selectedPoolPlayerId === selectedTakerId) {
            selectedPoolPlayerId = null;
          }
          renderSetPieceBoard();
        };
      }

      if (btnAuto) {
        btnAuto.onclick = () => {
          selectedTakerId = sortedTakers[0]?.id || outfield[0]?.id;
          if (takerSelect) takerSelect.value = selectedTakerId;
          autoAssignPlacements();
          renderSetPieceBoard();
          showMatchAlert({ text: "⚡ Pizarra táctica de balón parado optimizada automáticamente" });
        };
      }

      const btnSaveLayout = modalSP.querySelector("#btn-setpiece-save-layout");
      if (btnSaveLayout) {
        btnSaveLayout.onclick = () => {
          if (!gameState.userTactics.savedSetPieces) gameState.userTactics.savedSetPieces = {};
          gameState.userTactics.savedSetPieces[spTypeKey] = {
            strategy: currentStrategy,
            takerId: selectedTakerId,
            placements: { ...placements }
          };
          if (masterTacticsForNextMatches) {
            if (!masterTacticsForNextMatches.savedSetPieces) masterTacticsForNextMatches.savedSetPieces = {};
            masterTacticsForNextMatches.savedSetPieces[spTypeKey] = {
              strategy: currentStrategy,
              takerId: selectedTakerId,
              placements: { ...placements }
            };
          }
          SaveManager.saveGame(gameState);
          if (hintText) {
            hintText.innerHTML = `💾 <b class="text-emerald-400">¡Disposición de ${isCorner ? 'córner' : 'falta'} guardada con éxito para futuros partidos!</b>`;
          }
          showMatchAlert({ text: `💾 Disposición de jugada ensayada guardada` });
        };
      }

      if (btnConfirm) {
        btnConfirm.onclick = () => {
          const currentTaker = outfield.find(p => p.id === selectedTakerId) || outfield[0];
          const resolvedPlacements = {};
          Object.keys(placements).forEach(zId => {
            const pId = placements[zId];
            const pObj = outfield.find(p => p.id === pId);
            if (pObj) resolvedPlacements[zId] = pObj;
          });

          // Auto-guardar la disposición táctica elegida para futuras ocasiones
          if (!gameState.userTactics.savedSetPieces) gameState.userTactics.savedSetPieces = {};
          gameState.userTactics.savedSetPieces[spTypeKey] = {
            strategy: currentStrategy,
            takerId: selectedTakerId,
            placements: { ...placements }
          };
          if (masterTacticsForNextMatches) {
            if (!masterTacticsForNextMatches.savedSetPieces) masterTacticsForNextMatches.savedSetPieces = {};
            masterTacticsForNextMatches.savedSetPieces[spTypeKey] = {
              strategy: currentStrategy,
              takerId: selectedTakerId,
              placements: { ...placements }
            };
          }
          SaveManager.saveGame(gameState);

          modalSP.classList.add("hidden");

          const stratObj = strategies.find(s => s.id === currentStrategy);
          showMatchAlert({ text: `⚽ ¡${currentTaker.name} listo para ejecutar! Estrategia: ${stratObj?.label || 'Balón al área'}` });

          if (simulator.pauseRequested) {
            if (iconPP) iconPP.textContent = "▶";
            if (textPP) textPP.textContent = "Pausa pedida";
          } else {
            if (iconPP) iconPP.textContent = "⏸";
            if (textPP) textPP.textContent = "Pausar";
          }

          simulator.isRunning = true;
          simulator.executeSetPiece({
            type: spInfo.type,
            attackingSide: spInfo.attackingSide,
            spot: spInfo.spot,
            distanceMeters: spInfo.distanceMeters,
            taker: currentTaker,
            targetStrategy: currentStrategy,
            placements: resolvedPlacements
          }, () => {
            if (!simulator.isFinished && !simulator.isHalfTime) {
              if (simulator.pauseRequested) {
                simulator.pauseRequested = false;
                simulator.pause();
                if (iconPP) iconPP.textContent = "▶";
                if (textPP) textPP.textContent = "Reanudar";
                showMatchAlert({ text: "⏸ Partido en pausa tras la jugada a balón parado" });
              } else {
                if (!simulator.isRunning) simulator.start();
                if (iconPP) iconPP.textContent = "⏸";
                if (textPP) textPP.textContent = "Pausar";
              }
            }
          });
        };
      }

      modalSP.classList.remove("hidden");
      renderSetPieceBoard();
    }

    btnCloseSubs.onclick = () => {
      modalSubs.classList.add("hidden");
      if (simulator.isHalfTime) {
        // En el descanso se vuelve a mostrar el modal de descanso tras hacer cambios
        if (modalHT) {
          const htSubsBadge = container.querySelector("#ht-subs-badge");
          const remainingSubs = isUserHome ? simulator.homeSubsRemaining : simulator.awaySubsRemaining;
          if (htSubsBadge) htSubsBadge.textContent = `${remainingSubs} rest. (Descanso)`;
          modalHT.classList.remove("hidden");
        }
        if (pendingUserSubs.length > 0) {
          showSubstitutionChyron({
            teamSide: isUserHome ? "home" : "away",
            team: userTeam,
            subs: [...pendingUserSubs],
            minute: 45,
            remaining: isUserHome ? simulator.homeSubsRemaining : simulator.awaySubsRemaining,
            windowsRemaining: isUserHome ? simulator.homeWindowsRemaining : simulator.awayWindowsRemaining,
            isHalfTime: true
          }, () => {
            if (modalHT) modalHT.classList.remove("hidden");
          });
          pendingUserSubs.length = 0;
        }
      } else {
        if (pendingUserSubs.length > 0) {
          showSubstitutionChyron({
            teamSide: isUserHome ? "home" : "away",
            team: userTeam,
            subs: [...pendingUserSubs],
            minute: simulator.minute,
            remaining: isUserHome ? simulator.homeSubsRemaining : simulator.awaySubsRemaining,
            windowsRemaining: isUserHome ? simulator.homeWindowsRemaining : simulator.awayWindowsRemaining,
            isHalfTime: false
          }, () => {
            if (!simulator.isFinished && !simulator.isHalfTime) {
              simulator.start();
              iconPP.textContent = "⏸";
              textPP.textContent = "Pausar";
            }
          });
          pendingUserSubs.length = 0;
        } else {
          simulator.start();
          iconPP.textContent = "⏸";
          textPP.textContent = "Pausar";
        }
      }
    };

    function handleInjurySequence(injData) {
      // 1. Sincronizar de inmediato la lesión en gameState.teams para persistencia
      const isUserSide = injData.teamSide === (isUserHome ? "home" : "away");
      const targetTeam = injData.teamSide === "home" ? homeTeam : awayTeam;
      const realP = targetTeam.players.find(p => p.id === injData.player.id);
      if (realP) {
        realP.injury = injData.injury;
        realP.energy = Math.round(injData.player.energy !== undefined ? injData.player.energy : 50);
      }
      SaveManager.saveGame(gameState);

      if (injData.isSkippingToEnd || simulator.isSkippingToEnd) return;

      if (isUserSide) {
        // Pausar el simulador para que el usuario gestione la lesión obligatoria
        simulator.pause();
        const iconPP = container.querySelector("#play-pause-icon");
        const textPP = container.querySelector("#play-pause-text");
        if (iconPP) iconPP.textContent = "▶";
        if (textPP) textPP.textContent = "Reanudar";

        const modalInj = container.querySelector("#modal-injury-alert");
        const titleInj = container.querySelector("#injury-modal-title");
        const descInj = container.querySelector("#injury-modal-desc");
        const detailInj = container.querySelector("#injury-modal-detail");
        const btnSubNow = container.querySelector("#btn-injury-sub-now");

        if (titleInj) titleInj.textContent = `¡${injData.player.name} ha caído lesionado!`;
        if (descInj) descInj.textContent = `El cuerpo médico atiende al futbolista y confirma que no puede continuar en el encuentro.`;
        if (detailInj) {
          const sevLabels = { light: "Leve", moderate: "Moderada", severe: "Grave" };
          detailInj.innerHTML = `
            <div class="flex justify-between border-b border-slate-900 pb-1">
              <span class="text-slate-400">Lesión:</span>
              <b class="text-rose-400 font-bold">${injData.injury.type}</b>
            </div>
            <div class="flex justify-between border-b border-slate-900 py-1">
              <span class="text-slate-400">Gravedad:</span>
              <b class="text-amber-400 font-bold">${sevLabels[injData.injury.severity] || "Moderada"}</b>
            </div>
            <div class="flex justify-between pt-1">
              <span class="text-slate-400">Baja estimada:</span>
              <b class="text-white font-mono font-bold">${injData.injury.roundsLeft} jornada(s)</b>
            </div>
          `;
        }

        const remaining = isUserHome ? simulator.homeSubsRemaining : simulator.awaySubsRemaining;
        const remainingWindows = isUserHome ? simulator.homeWindowsRemaining : simulator.awayWindowsRemaining;

        if (btnSubNow) {
          if (remaining > 0 && (remainingWindows > 0 || simulator.isHalfTime)) {
            btnSubNow.innerHTML = `<span>🔄 Realizar cambio por lesión (${remaining} restantes)</span>`;
            btnSubNow.onclick = () => {
              if (modalInj) modalInj.classList.add("hidden");
              subSelectedPitchId = injData.player.id;
              openTacticsModal(!simulator.isHalfTime, { forceResume: true, preselectPlayerId: injData.player.id });
            };
          } else {
            btnSubNow.innerHTML = `<span>⚠️ Sin cambios disponibles (Continuar con jugador tocado)</span>`;
            btnSubNow.onclick = () => {
              if (modalInj) modalInj.classList.add("hidden");
              if (!simulator.isFinished && !simulator.isHalfTime) {
                simulator.start();
                if (iconPP) iconPP.textContent = "⏸";
                if (textPP) textPP.textContent = "Pausar";
              }
            };
          }
        }

        if (modalInj) modalInj.classList.remove("hidden");
      }
    }

    function renderMatchSubsModal() {
      const userPlayersOnPitch = isUserHome ? simulator.homePlayersOnPitch : simulator.awayPlayersOnPitch;
      const userBench = isUserHome ? simulator.homeBench : simulator.awayBench;
      const pitchList = container.querySelector("#sub-pitch-list");
      const benchList = container.querySelector("#sub-bench-list");

      pitchList.innerHTML = userPlayersOnPitch.map(p => {
        const isInjured = Boolean(p.injury);
        const isSelected = subSelectedPitchId === p.id;
        return `
          <div class="sub-pitch-item p-2 rounded-xl border ${isSelected ? 'border-red-400 bg-red-500/25' : isInjured ? 'border-rose-500 bg-rose-950/60' : 'border-slate-800 bg-slate-950/70'} flex items-center justify-between text-xs cursor-pointer active:scale-98" data-id="${p.id}">
            <div class="flex items-center gap-2">
              <span class="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] font-bold text-sky-400">${p.pos}</span>
              <span class="font-bold text-white">${p.name}</span>
              ${isInjured ? `<span class="px-1.5 py-0.5 rounded bg-rose-900 border border-rose-500 text-[9px] font-bold text-rose-200">🚑 ${p.injury.roundsLeft}j</span>` : ''}
            </div>
            <div class="flex items-center gap-2">
              <span class="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-emerald-400">⭐ ${(p.matchRating || 6.5).toFixed(1)}</span>
              <span class="text-[10px] text-slate-400">⚡ ${Math.round(p.energy)}%</span>
              <span class="font-bold text-amber-400">${p.ovr}</span>
            </div>
          </div>
        `;
      }).join('');

      benchList.innerHTML = userBench.map(p => {
        const isInjured = Boolean(p.injury);
        return `
          <div class="sub-bench-item p-2 rounded-xl border ${isInjured ? 'border-rose-900/60 bg-rose-950/20' : 'border-slate-800 bg-slate-950/70 hover:border-emerald-500/60'} flex items-center justify-between text-xs cursor-pointer active:scale-98" data-id="${p.id}">
            <div class="flex items-center gap-2">
              <span class="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] font-bold text-emerald-400">${p.pos}</span>
              <span class="font-bold text-white">${p.name}</span>
              ${isInjured ? `<span class="px-1.5 py-0.5 rounded bg-rose-900/90 border border-rose-500/60 text-[9px] font-bold text-rose-300">🚑 ${p.injury.roundsLeft}j</span>` : ''}
            </div>
            <div class="flex items-center gap-2">
              <span class="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-emerald-400">⭐ ${(p.matchRating || 6.5).toFixed(1)}</span>
              <span class="text-[10px] text-slate-400">⚡ ${Math.round(p.energy)}%</span>
              <span class="font-bold text-amber-400">${p.ovr}</span>
            </div>
          </div>
        `;
      }).join('');

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
          const benchP = userBench.find(p => p.id === benchId);
          if (benchP && benchP.injury) {
            alert(`⚠️ ${benchP.name} está lesionado (${benchP.injury.type}) y no puede saltar al terreno de juego.`);
            return;
          }
          const res = simulator.makeSubstitution(isUserHome ? "home" : "away", subSelectedPitchId, benchId, simulator.isHalfTime);
          if (res.success) {
            pendingUserSubs.push({ outPlayer: res.outPlayer, inPlayer: res.inPlayer });
            subSelectedPitchId = null;
            renderMatchSubsModal();
          } else {
            alert(res.reason);
          }
        };
      });
    }

    function handleLiveMatchEnd(result) {
      hideAssistantAdviceCard();
      clearAllMatchUiTimeouts();
      // Sincronizar estados finales de energía, goles, asistencias, notas, MVP, minutos y lesiones de ambos equipos con gameState
      const syncTeamPlayers = (simPlayers, realTeam) => {
        if (!simPlayers || !realTeam) return;
        simPlayers.forEach(pSim => {
          const pReal = realTeam.players.find(p => p.id === pSim.id);
          if (pReal) {
            pReal.energy = Math.round(pSim.energy !== undefined ? pSim.energy : 100);
            pReal.goals = pSim.goals || 0;
            pReal.assists = pSim.assists || 0;
            pReal.matchMinutes = pSim.matchMinutes || 0;
            if (pSim.playedInMatch || (pSim.matchMinutes || 0) > 0) {
              const rating = Number((pSim.matchRating || 6.5).toFixed(2));
              pReal.lastMatchRating = rating;
              pReal.ratingSum = (pReal.ratingSum || 0) + rating;
              pReal.matchesRated = (pReal.matchesRated || 0) + 1;
              pReal.avgRating = Number((pReal.ratingSum / pReal.matchesRated).toFixed(2));
            }
            if (result.mvp && result.mvp.id === pReal.id) {
              pReal.mvpCount = (pReal.mvpCount || 0) + 1;
            }
            if (pSim.injury) pReal.injury = pSim.injury;
            delete pReal.subbedOut;
          }
        });
      };

      syncTeamPlayers(result.homePlayers, homeTeam);
      syncTeamPlayers(result.awayPlayers, awayTeam);

      // Sincronizar tarjetas y sanciones disciplinarias de ambos equipos
      if (result.cards) {
        const allMatchPlayers = [...homeTeam.players, ...awayTeam.players];
        if (result.cards.yellows) {
          Object.keys(result.cards.yellows).forEach(pId => {
            const pReal = allMatchPlayers.find(p => p.id === pId);
            if (pReal) {
              pReal.seasonYellows = (pReal.seasonYellows || 0) + 1;
              if (pReal.seasonYellows % 5 === 0 && !pReal.suspension) {
                pReal.suspension = { roundsLeft: 1, reason: "Ciclo de 5 Amarillas", justAcquired: true };
              }
            }
          });
        }
        if (result.cards.reds) {
          Object.keys(result.cards.reds).forEach(pId => {
            const rCard = result.cards.reds[pId];
            const pReal = allMatchPlayers.find(p => p.id === pId);
            if (pReal) {
              pReal.seasonReds = (pReal.seasonReds || 0) + 1;
              pReal.suspension = { roundsLeft: 1, reason: rCard?.reason || "Tarjeta Roja", justAcquired: true };
            }
          });
        }
      }

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

      // Renderizar MVP del Partido y Mejores Notas (Mejora 5)
      const fMvpCard = container.querySelector("#final-mvp-card");
      if (fMvpCard && result.mvp) {
        const mvpTeam = result.mvp.teamSide === "home" ? homeTeam : awayTeam;
        const statsParts = [];
        if (result.mvp.goals > 0) statsParts.push(`⚽ ${result.mvp.goals} gol${result.mvp.goals > 1 ? 'es' : ''}`);
        if (result.mvp.assists > 0) statsParts.push(`👟 ${result.mvp.assists} asist.`);
        if (result.mvp.saves > 0) statsParts.push(`🧤 ${result.mvp.saves} paradas`);
        if (statsParts.length === 0) statsParts.push(`Actuación decisiva`);
        fMvpCard.innerHTML = `
          <div class="bg-gradient-to-r from-amber-500/20 via-yellow-500/15 to-amber-500/20 border border-amber-400/50 rounded-2xl p-2.5 flex items-center justify-between text-left shadow-lg">
            <div class="flex items-center gap-2.5 min-w-0">
              <div class="w-9 h-9 rounded-xl bg-amber-400/20 border border-amber-400/60 flex items-center justify-center text-lg flex-shrink-0">🏆</div>
              <div class="min-w-0">
                <div class="text-[9px] font-black uppercase tracking-wider text-amber-300">MVP DEL PARTIDO</div>
                <div class="text-xs font-extrabold text-white truncate">${result.mvp.name} <span class="text-[10px] font-bold text-slate-400">(${mvpTeam.shortName} · ${result.mvp.pos})</span></div>
                <div class="text-[9.5px] text-amber-200/90 font-semibold">${statsParts.join(' · ')}</div>
              </div>
            </div>
            <div class="px-2.5 py-1 rounded-xl bg-amber-400 text-slate-950 font-black font-mono text-sm flex-shrink-0 shadow">
              ${result.mvp.rating.toFixed(1)}
            </div>
          </div>
        `;
      }

      // Renderizar Estadísticas del Partido (Posesión, Tiros a Puerta, Tiros Totales)
      const fMatchStats = container.querySelector("#final-match-stats");
      if (fMatchStats) {
        const stats = result.stats || {};
        const posHome = stats.possession?.home ?? 50;
        const posAway = stats.possession?.away ?? (100 - posHome);
        const shotsHome = stats.shots?.home ?? 0;
        const shotsAway = stats.shots?.away ?? 0;
        const onTargetHome = stats.shotsOnTarget?.home ?? 0;
        const onTargetAway = stats.shotsOnTarget?.away ?? 0;

        const totalShots = shotsHome + shotsAway;
        const shotsHomePct = totalShots > 0 ? Math.round((shotsHome / totalShots) * 100) : 50;
        const shotsAwayPct = 100 - shotsHomePct;

        const totalOnTarget = onTargetHome + onTargetAway;
        const onTargetHomePct = totalOnTarget > 0 ? Math.round((onTargetHome / totalOnTarget) * 100) : 50;
        const onTargetAwayPct = 100 - onTargetHomePct;

        fMatchStats.innerHTML = `
          <div class="text-[9.5px] uppercase font-bold text-slate-400 tracking-wider text-center mb-2 flex items-center justify-center gap-1.5">
            <span>📊</span>
            <span>Estadísticas del Partido</span>
          </div>
          <div class="space-y-2">
            <!-- Posesión -->
            <div>
              <div class="flex justify-between items-center text-xs font-bold mb-1">
                <span class="text-sky-400 font-mono">${posHome}%</span>
                <span class="text-[9.5px] text-slate-300 font-extrabold uppercase tracking-wide">Posesión</span>
                <span class="text-indigo-400 font-mono">${posAway}%</span>
              </div>
              <div class="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden flex">
                <div class="bg-sky-500 h-full transition-all duration-500" style="width: ${posHome}%"></div>
                <div class="bg-indigo-500 h-full transition-all duration-500" style="width: ${posAway}%"></div>
              </div>
            </div>

            <!-- Tiros a Puerta -->
            <div>
              <div class="flex justify-between items-center text-xs font-bold mb-1">
                <span class="text-sky-400 font-mono">${onTargetHome}</span>
                <span class="text-[9.5px] text-slate-300 font-extrabold uppercase tracking-wide">Tiros a Puerta</span>
                <span class="text-indigo-400 font-mono">${onTargetAway}</span>
              </div>
              <div class="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden flex">
                <div class="bg-sky-500 h-full transition-all duration-500" style="width: ${onTargetHomePct}%"></div>
                <div class="bg-indigo-500 h-full transition-all duration-500" style="width: ${onTargetAwayPct}%"></div>
              </div>
            </div>

            <!-- Tiros Totales -->
            <div>
              <div class="flex justify-between items-center text-xs font-bold mb-1">
                <span class="text-sky-400 font-mono">${shotsHome}</span>
                <span class="text-[9.5px] text-slate-300 font-extrabold uppercase tracking-wide">Tiros Totales</span>
                <span class="text-indigo-400 font-mono">${shotsAway}</span>
              </div>
              <div class="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden flex">
                <div class="bg-sky-500 h-full transition-all duration-500" style="width: ${shotsHomePct}%"></div>
                <div class="bg-indigo-500 h-full transition-all duration-500" style="width: ${shotsAwayPct}%"></div>
              </div>
            </div>
          </div>
        `;
      }

      const fRatingsSummary = container.querySelector("#final-ratings-summary");
      if (fRatingsSummary) {
        const userSimPlayers = (isUserHome ? result.homePlayers : result.awayPlayers) || [];
        const playedUser = userSimPlayers
          .filter(p => p.playedInMatch || (p.matchMinutes || 0) > 0)
          .sort((a, b) => (b.matchRating || 6.5) - (a.matchRating || 6.5));
        const top3 = playedUser.slice(0, 3);
        if (top3.length > 0) {
          fRatingsSummary.innerHTML = `
            <div class="text-[9.5px] uppercase font-bold text-slate-400 mb-1">⭐ Mejores Notas de tu Equipo:</div>
            <div class="grid grid-cols-3 gap-1.5">
              ${top3.map(p => {
                const r = (p.matchRating || 6.5).toFixed(1);
                const badgeColor = p.matchRating >= 7.5 ? 'text-emerald-400 border-emerald-500/40 bg-emerald-950/40' : p.matchRating >= 6.5 ? 'text-amber-300 border-amber-500/30 bg-slate-950/80' : 'text-rose-400 border-rose-500/30 bg-rose-950/40';
                return `
                  <div class="p-1.5 rounded-xl border ${badgeColor} flex items-center justify-between text-[10px]">
                    <span class="font-bold text-white truncate mr-1">${p.name.split(' ').slice(-1)[0]}</span>
                    <span class="font-mono font-black">${r}</span>
                  </div>
                `;
              }).join('')}
            </div>
          `;
        }
      }

      if (fScorers) {
        let itemsHtml = "";
        if (result.scorers.length > 0) {
          itemsHtml += result.scorers.map(s => `
            <div class="flex items-center justify-between text-slate-300 py-0.5">
              <span>⚽ <b>${s.playerName}</b> ${s.assisterName ? `<span class="text-[10px] text-sky-400">(👟 ${s.assisterName})</span>` : ''} (${s.teamName})</span>
              <span class="font-mono text-slate-500 font-bold">${s.minute}'</span>
            </div>
          `).join('');
        }
        if (result.cards) {
          if (result.cards.yellows) {
            Object.values(result.cards.yellows).forEach(c => {
              const teamObj = c.team === "home" ? homeTeam : awayTeam;
              itemsHtml += `
                <div class="flex items-center justify-between text-amber-300/90 py-0.5 text-[11px]">
                  <span>🟨 <b>${c.player?.name}</b> (${teamObj?.shortName})</span>
                  <span class="font-mono text-amber-500 font-bold">${c.minute}'</span>
                </div>
              `;
            });
          }
          if (result.cards.reds) {
            Object.values(result.cards.reds).forEach(c => {
              const teamObj = c.team === "home" ? homeTeam : awayTeam;
              itemsHtml += `
                <div class="flex items-center justify-between text-rose-400 py-0.5 text-[11px]">
                  <span>🟥 <b>${c.player?.name}</b> (${teamObj?.shortName}) - ${c.reason}</span>
                  <span class="font-mono text-rose-500 font-bold">${c.minute}'</span>
                </div>
              `;
            });
          }
        }
        if (!itemsHtml) {
          itemsHtml = `<span class="text-slate-500 italic">Sin goles ni tarjetas en el encuentro</span>`;
        }
        fScorers.innerHTML = itemsHtml;
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
        if (threeEngine && threeEngine.dispose) {
          threeEngine.dispose();
          threeEngine = null;
        }
        // Asegurar que la formación y alineación guardadas se preserven para los siguientes partidos
        if (masterTacticsForNextMatches) {
          gameState.userTactics = JSON.parse(JSON.stringify(masterTacticsForNextMatches));
        }
        SaveManager.saveGame(gameState);
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

// =========================================================
// ARCHIVO: js\ui\hubView.js
// =========================================================

// Vista del Hub Principal del Manager
function renderHubView(container, gameState, callbacks) {
  const userTeam = (gameState.teams || []).find(t => t.id === gameState.userTeamId) || (gameState.teams && gameState.teams[0]);
  if (!userTeam) {
    callbacks?.onReset?.();
    return;
  }
  const activeSlot = SaveManager.getActiveSlot();
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

  // Goleador del equipo, mejor valorado (MVP), enfermería y sanciones
  const teamScorers = [...(userTeam.players || [])].sort((a, b) => (b.goals || 0) - (a.goals || 0));
  const topTeamScorer = teamScorers[0] || { name: "Sin datos", goals: 0 };
  const ratedPlayers = [...(userTeam.players || [])].sort((a, b) => {
    const rDiff = (b.avgRating || 0) - (a.avgRating || 0);
    if (Math.abs(rDiff) > 0.01) return rDiff;
    const mvpDiff = (b.mvpCount || 0) - (a.mvpCount || 0);
    if (mvpDiff !== 0) return mvpDiff;
    return (b.ovr || 70) - (a.ovr || 70);
  });
  const topRatedPlayer = ratedPlayers[0] || { name: "Sin datos", avgRating: 0, mvpCount: 0 };
  const injuredPlayers = (userTeam.players || []).filter(p => p.injury && p.injury.roundsLeft > 0);
  const suspendedPlayers = (userTeam.players || []).filter(p => p.suspension && p.suspension.roundsLeft > 0);

  if (!gameState.weeklyTraining) {
    gameState.weeklyTraining = "recovery";
  }

  const WEEKLY_TRAININGS = [
    {
      id: "recovery",
      icon: "🧘",
      label: "Recuperación y Fisio",
      badge: "+10% Energía · -35% Lesión",
      desc: "Baños de hielo y descarga muscular: +4% frescura inmediata, -35% riesgo de lesión muscular y +10% recuperación post-partido."
    },
    {
      id: "set_pieces",
      icon: "🚩",
      label: "Balón Parado",
      badge: "+15% Córners y Faltas",
      desc: "Pizarra de estrategia: +15% de precisión y remate en todos tus córners y faltas directas en esta jornada."
    },
    {
      id: "finishing",
      icon: "🎯",
      label: "Definición y Puntería",
      badge: "+4 Tiro · +7% Ataque",
      desc: "Sesión intensiva de remate: +4 en Tiro (SHO) para tus atacantes y +7% de efectividad goleadora en esta jornada."
    },
    {
      id: "defensive",
      icon: "🧱",
      label: "Muro y Basculación",
      badge: "+4 Defensa · +7% Solidez",
      desc: "Trabajo táctico de bloque: +4 en Defensa/Parada para zagueros y portero, y +7% de solidez defensiva en esta jornada."
    }
  ];
  const activeTrainingObj = WEEKLY_TRAININGS.find(t => t.id === gameState.weeklyTraining) || WEEKLY_TRAININGS[0];

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
              <div class="flex items-center gap-2 mt-0.5">
                <span class="text-xs text-slate-400 font-medium">📍 ${userTeam.stadium}</span>
                <button id="btn-header-slots" class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700/80 text-[10px] font-bold text-sky-400 active:scale-95 transition" title="Cambiar o gestionar partida">
                  <span>💾</span> Ranura ${activeSlot}
                </button>
              </div>
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

        <!-- MEJORA 3: Plan de Entrenamiento Semanal -->
        <div class="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-3.5 shadow-lg">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-extrabold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <span>🏋️</span> Plan de Entrenamiento Semanal
            </span>
            <span class="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              ${activeTrainingObj.badge}
            </span>
          </div>
          <div class="grid grid-cols-2 gap-2 mb-2">
            ${WEEKLY_TRAININGS.map(wt => {
              const isSel = gameState.weeklyTraining === wt.id;
              return `
                <button type="button" class="btn-weekly-training p-2 rounded-xl border text-left transition flex items-center gap-2 ${isSel ? 'bg-emerald-500/20 border-emerald-400 text-white shadow-md ring-1 ring-emerald-400/60' : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 active:scale-95'}" data-training="${wt.id}">
                  <span class="text-lg flex-shrink-0">${wt.icon}</span>
                  <div class="min-w-0">
                    <div class="text-[11px] font-extrabold ${isSel ? 'text-emerald-300' : 'text-white'} truncate leading-tight">${wt.label}</div>
                    <div class="text-[9px] ${isSel ? 'text-emerald-200' : 'text-slate-400'} truncate leading-tight mt-0.5">${wt.badge}</div>
                  </div>
                </button>
              `;
            }).join('')}
          </div>
          <div class="text-[10px] text-slate-300 bg-slate-950/70 border border-slate-800/80 rounded-xl px-2.5 py-1.5 leading-snug">
            <span class="font-bold text-emerald-400">${activeTrainingObj.icon} Enfoque activo:</span> ${activeTrainingObj.desc}
          </div>
        </div>

        <!-- Fila de Resumen de Plantilla y Rendimiento -->
        <div class="grid grid-cols-2 gap-3">
          <!-- Goleador del Club -->
          <div class="bg-slate-900/80 border border-slate-800 p-3.5 rounded-2xl">
            <span class="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-1">Máximo Goleador</span>
            <div class="flex items-center gap-2">
              <span class="text-xl">⚽</span>
              <div class="truncate">
                <div class="text-xs font-bold text-white truncate">${topTeamScorer?.name || '-'}</div>
                <div class="text-[11px] font-black text-amber-400">${topTeamScorer?.goals || 0} goles ${(topTeamScorer?.assists || 0) > 0 ? `<span class="text-sky-400 font-bold">· 👟 ${topTeamScorer.assists}</span>` : ''}</div>
              </div>
            </div>
          </div>

          <!-- Mejor Valorado / MVP del Club (Mejora 5) -->
          <div class="bg-slate-900/80 border border-slate-800 p-3.5 rounded-2xl">
            <span class="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-1">Líder Valoración / MVP</span>
            <div class="flex items-center gap-2">
              <span class="text-xl">⭐</span>
              <div class="truncate">
                <div class="text-xs font-bold text-white truncate">${topRatedPlayer?.name || '-'}</div>
                <div class="text-[11px] font-black text-emerald-400">${topRatedPlayer?.avgRating ? `Media ${topRatedPlayer.avgRating.toFixed(2)}` : `OVR ${topRatedPlayer?.ovr || 80}`} ${(topRatedPlayer?.mvpCount || 0) > 0 ? `<span class="text-yellow-400 font-bold">· 🏆 ${topRatedPlayer.mvpCount}</span>` : ''}</div>
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
          <button id="btn-save-game" class="w-full py-3 bg-sky-600 hover:bg-sky-500 active:scale-98 text-white font-bold text-xs rounded-xl shadow-lg shadow-sky-500/20 flex items-center justify-center gap-2">
            <span>💾</span> Guardar en Ranura ${activeSlot}
          </button>
          <button id="btn-manage-slots" class="w-full py-3 bg-slate-800 hover:bg-slate-700 active:scale-98 text-slate-200 font-bold text-xs rounded-xl border border-slate-700 flex items-center justify-center gap-2">
            <span>📁</span> Cambiar / Gestionar Partidas (3 Ranuras)
          </button>
          <button id="btn-reset-game" class="w-full py-3 bg-red-500/10 hover:bg-red-500/20 active:scale-98 text-red-400 font-bold text-xs rounded-xl border border-red-500/30 flex items-center justify-center gap-2">
            <span>🗑</span> Reiniciar Temporada Actual
          </button>
        </div>
      </div>
    </div>
  `;

  // Evento Jugar Partido
  container.querySelector("#btn-play-match").onclick = () => {
    callbacks.onStartMatch();
  };

  // MEJORA 3: Selección del Plan de Entrenamiento Semanal
  container.querySelectorAll(".btn-weekly-training").forEach(btn => {
    btn.onclick = () => {
      const trId = btn.dataset.training;
      if (trId && gameState.weeklyTraining !== trId) {
        gameState.weeklyTraining = trId;
        SaveManager.saveGame(gameState);
        renderHubView(container, gameState, callbacks);
      }
    };
  });

  // Botón Ranuras en la Cabecera
  const btnHeaderSlots = container.querySelector("#btn-header-slots");
  if (btnHeaderSlots) {
    btnHeaderSlots.onclick = () => {
      callbacks.onManageSlots?.();
    };
  }

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
    alert(`✅ ¡Partida guardada con éxito en la Ranura ${activeSlot}!`);
    modalOpt.classList.add("hidden");
  };

  const btnManageSlots = container.querySelector("#btn-manage-slots");
  if (btnManageSlots) {
    btnManageSlots.onclick = () => {
      modalOpt.classList.add("hidden");
      callbacks.onManageSlots?.();
    };
  }

  container.querySelector("#btn-reset-game").onclick = () => {
    if (confirm("¿Estás seguro de que deseas reiniciar la partida actual? Perderás el progreso de la temporada.")) {
      callbacks.onReset();
    }
  };
}

// =========================================================
// ARCHIVO: js\app.js
// =========================================================

// Controlador Principal del Juego (State Manager & Router)

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
            manMarking: {},
            instructions: getDefaultTacticalInstructions()
          };
        } else {
          if (!this.state.userTactics.instructions) {
            this.state.userTactics.instructions = getDefaultTacticalInstructions();
          }
          if (!this.state.userTactics.customPositions) {
            this.state.userTactics.customPositions = {};
          }
          if (!this.state.userTactics.manMarking) {
            this.state.userTactics.manMarking = {};
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
        manMarking: {},
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
          manMarking: {},
          instructions: getDefaultTacticalInstructions()
        };
      } else {
        if (!this.state.userTactics.manMarking) {
          this.state.userTactics.manMarking = {};
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