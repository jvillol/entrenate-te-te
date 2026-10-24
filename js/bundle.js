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
    budget: 140000000,
    reputation: 95,
    defaultFormation: "4-3-3",
    players: [
      { id: "rma_1", name: "Thibaut Courtois", number: 1, pos: "POR", ovr: 89, pot: 89, pac: 46, sho: 16, pas: 75, dri: 48, def: 16, phy: 77, energy: 100 },
      { id: "rma_2", name: "Andriy Lunin", number: 13, pos: "POR", ovr: 81, pot: 85, pac: 42, sho: 14, pas: 70, dri: 45, def: 15, phy: 73, energy: 100 },
      { id: "rma_3", name: "Trent Alexander-Arnold", number: 12, pos: "LD", ovr: 87, pot: 88, pac: 76, sho: 77, pas: 92, dri: 82, def: 81, phy: 75, energy: 100 },
      { id: "rma_4", name: "Dani Carvajal", number: 2, pos: "LD", ovr: 85, pot: 85, pac: 79, sho: 54, pas: 78, dri: 80, def: 83, phy: 81, energy: 100 },
      { id: "rma_5", name: "Antonio Rudiger", number: 22, pos: "DFC", ovr: 87, pot: 87, pac: 82, sho: 53, pas: 71, dri: 67, def: 87, phy: 86, energy: 100 },
      { id: "rma_6", name: "Eder Militao", number: 3, pos: "DFC", ovr: 85, pot: 87, pac: 85, sho: 50, pas: 71, dri: 72, def: 86, phy: 83, energy: 100 },
      { id: "rma_7", name: "Ferland Mendy", number: 23, pos: "LI", ovr: 83, pot: 83, pac: 89, sho: 62, pas: 74, dri: 78, def: 82, phy: 85, energy: 100 },
      { id: "rma_8", name: "Fran Garcia", number: 20, pos: "LI", ovr: 79, pot: 82, pac: 91, sho: 58, pas: 72, dri: 77, def: 74, phy: 73, energy: 100 },
      { id: "rma_9", name: "Aurelien Tchouameni", number: 14, pos: "MCD", ovr: 86, pot: 89, pac: 73, sho: 71, pas: 82, dri: 81, def: 86, phy: 87, energy: 100 },
      { id: "rma_10", name: "Federico Valverde", number: 8, pos: "MC", ovr: 89, pot: 91, pac: 89, sho: 84, pas: 85, dri: 85, def: 82, phy: 85, energy: 100 },
      { id: "rma_11", name: "Eduardo Camavinga", number: 6, pos: "MC", ovr: 85, pot: 90, pac: 82, sho: 69, pas: 83, dri: 85, def: 82, phy: 83, energy: 100 },
      { id: "rma_12", name: "Jude Bellingham", number: 5, pos: "MCO", ovr: 90, pot: 94, pac: 81, sho: 87, pas: 85, dri: 89, def: 79, phy: 84, energy: 100 },
      { id: "rma_13", name: "Brahim Diaz", number: 21, pos: "MCO", ovr: 83, pot: 85, pac: 86, sho: 78, pas: 80, dri: 87, def: 36, phy: 56, energy: 100 },
      { id: "rma_14", name: "Arda Guler", number: 15, pos: "MCO", ovr: 82, pot: 89, pac: 76, sho: 77, pas: 84, dri: 86, def: 53, phy: 60, energy: 100 },
      { id: "rma_15", name: "Rodrygo", number: 11, pos: "ED", ovr: 86, pot: 89, pac: 89, sho: 83, pas: 82, dri: 88, def: 32, phy: 62, energy: 100 },
      { id: "rma_16", name: "Vinicius Junior", number: 7, pos: "EI", ovr: 91, pot: 93, pac: 96, sho: 85, pas: 82, dri: 92, def: 30, phy: 70, energy: 100 },
      { id: "rma_17", name: "Kylian Mbappe", number: 9, pos: "DC", ovr: 92, pot: 93, pac: 97, sho: 91, pas: 82, dri: 93, def: 36, phy: 79, energy: 100 },
      { id: "rma_18", name: "Endrick", number: 16, pos: "DC", ovr: 80, pot: 91, pac: 89, sho: 81, pas: 68, dri: 82, def: 33, phy: 80, energy: 100 }
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
    budget: 95000000,
    reputation: 94,
    defaultFormation: "4-3-3",
    players: [
      { id: "bar_1", name: "Rodri", number: 14, pos: "MCD", ovr: 90, pot: 91, pac: 66, sho: 74, pas: 86, dri: 81, def: 87, phy: 85, energy: 100 },
      { id: "bar_2", name: "Pedri", number: 8, pos: "MC", ovr: 90, pot: 93, pac: 80, sho: 78, pas: 91, dri: 92, def: 72, phy: 75, energy: 100 },
      { id: "bar_3", name: "Lamine Yamal", number: 19, pos: "ED", ovr: 90, pot: 95, pac: 92, sho: 84, pas: 87, dri: 93, def: 36, phy: 66, energy: 100 },
      { id: "bar_4", name: "Raphinha", number: 11, pos: "DC", ovr: 88, pot: 90, pac: 91, sho: 85, pas: 84, dri: 88, def: 55, phy: 76, energy: 100 },
      { id: "bar_5", name: "Joan Garcia", number: 13, pos: "POR", ovr: 86, pot: 89, pac: 50, sho: 16, pas: 82, dri: 52, def: 16, phy: 78, energy: 100 },
      { id: "bar_6", name: "Pau Cubarsi", number: 2, pos: "DFC", ovr: 86, pot: 91, pac: 76, sho: 45, pas: 85, dri: 78, def: 87, phy: 81, energy: 100 },
      { id: "bar_7", name: "Eric Garcia", number: 24, pos: "LD", ovr: 85, pot: 86, pac: 75, sho: 56, pas: 80, dri: 78, def: 86, phy: 79, energy: 100 },
      { id: "bar_8", name: "Fermin Lopez", number: 16, pos: "MCO", ovr: 85, pot: 88, pac: 83, sho: 84, pas: 81, dri: 85, def: 69, phy: 76, energy: 100 },
      { id: "bar_9", name: "Joao Cancelo", number: 20, pos: "LI", ovr: 83, pot: 88, pac: 81, sho: 72, pas: 84, dri: 85, def: 77, phy: 71, energy: 100 },
      { id: "bar_10", name: "Anthony Gordon", number: 17, pos: "EI", ovr: 82, pot: 85, pac: 91, sho: 78, pas: 76, dri: 83, def: 54, phy: 73, energy: 100 },
      { id: "bar_11", name: "Gerard Martin", number: 35, pos: "DFC", ovr: 79, pot: 84, pac: 74, sho: 42, pas: 71, dri: 72, def: 80, phy: 77, energy: 100 },
      { id: "bar_12", name: "Jules Kounde", number: 23, pos: "LD", ovr: 85, pot: 87, pac: 83, sho: 48, pas: 74, dri: 76, def: 87, phy: 80, energy: 100 },
      { id: "bar_13", name: "Frenkie de Jong", number: 21, pos: "MC", ovr: 86, pot: 87, pac: 80, sho: 70, pas: 86, dri: 87, def: 78, phy: 77, energy: 100 },
      { id: "bar_14", name: "Dani Olmo", number: 10, pos: "MCO", ovr: 84, pot: 85, pac: 76, sho: 81, pas: 83, dri: 86, def: 50, phy: 63, energy: 100 },
      { id: "bar_15", name: "Gavi", number: 6, pos: "MC", ovr: 83, pot: 86, pac: 77, sho: 68, pas: 80, dri: 83, def: 74, phy: 80, energy: 100 },
      { id: "bar_16", name: "Karim Adeyemi", number: 22, pos: "ED", ovr: 82, pot: 85, pac: 96, sho: 76, pas: 70, dri: 82, def: 35, phy: 69, energy: 100 },
      { id: "bar_17", name: "Alejandro Balde", number: 3, pos: "LI", ovr: 82, pot: 85, pac: 91, sho: 51, pas: 74, dri: 79, def: 76, phy: 67, energy: 100 },
      { id: "bar_18", name: "Andreas Christensen", number: 15, pos: "DFC", ovr: 79, pot: 83, pac: 64, sho: 32, pas: 72, dri: 69, def: 82, phy: 72, energy: 100 },
      { id: "bar_19", name: "Gabriel Jesus", number: 9, pos: "DC", ovr: 79, pot: 84, pac: 80, sho: 79, pas: 73, dri: 84, def: 40, phy: 72, energy: 100 },
      { id: "bar_20", name: "Marc Bernal", number: 28, pos: "MCD", ovr: 78, pot: 88, pac: 72, sho: 68, pas: 79, dri: 78, def: 77, phy: 77, energy: 100 },
      { id: "bar_21", name: "Dominik Livakovic", number: 25, pos: "POR", ovr: 78, pot: 82, pac: 45, sho: 15, pas: 70, dri: 47, def: 16, phy: 73, energy: 100 },
      { id: "bar_22", name: "Wojciech Szczesny", number: 1, pos: "POR", ovr: 81, pot: 87, pac: 44, sho: 16, pas: 74, dri: 45, def: 16, phy: 72, energy: 100 },
      { id: "bar_23", name: "Roony Bardghji", number: 27, pos: "ED", ovr: 74, pot: 85, pac: 79, sho: 72, pas: 71, dri: 78, def: 32, phy: 63, energy: 100 },
      { id: "bar_24", name: "Xavi Espart", number: 32, pos: "LD", ovr: 71, pot: 85, pac: 78, sho: 50, pas: 68, dri: 70, def: 70, phy: 68, energy: 100 }
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
    budget: 90000000,
    reputation: 91,
    defaultFormation: "5-3-2",
    players: [
      { id: "atm_1", name: "Jan Oblak", number: 13, pos: "POR", ovr: 88, pot: 91, pac: 46, sho: 16, pas: 74, dri: 48, def: 16, phy: 76, energy: 100 },
      { id: "atm_2", name: "Julian Alvarez", number: 19, pos: "DC", ovr: 86, pot: 89, pac: 85, sho: 85, pas: 80, dri: 85, def: 55, phy: 79, energy: 100 },
      { id: "atm_3", name: "Alejandro Grimaldo", number: 3, pos: "LI", ovr: 85, pot: 86, pac: 82, sho: 79, pas: 86, dri: 84, def: 77, phy: 69, energy: 100 },
      { id: "atm_4", name: "Marcos Llorente", number: 14, pos: "LD", ovr: 85, pot: 86, pac: 90, sho: 80, pas: 81, dri: 82, def: 79, phy: 82, energy: 100 },
      { id: "atm_5", name: "Ademola Lookman", number: 11, pos: "EI", ovr: 83, pot: 84, pac: 88, sho: 81, pas: 77, dri: 86, def: 38, phy: 66, energy: 100 },
      { id: "atm_6", name: "Morten Hjulmand", number: 5, pos: "MCD", ovr: 83, pot: 86, pac: 73, sho: 67, pas: 79, dri: 77, def: 83, phy: 84, energy: 100 },
      { id: "atm_7", name: "David Hancko", number: 15, pos: "DFC", ovr: 83, pot: 83, pac: 78, sho: 65, pas: 76, dri: 75, def: 84, phy: 82, energy: 100 },
      { id: "atm_8", name: "Alex Baena", number: 10, pos: "MCO", ovr: 83, pot: 85, pac: 76, sho: 78, pas: 84, dri: 83, def: 64, phy: 72, energy: 100 },
      { id: "atm_9", name: "Pablo Barrios", number: 8, pos: "MC", ovr: 83, pot: 87, pac: 78, sho: 72, pas: 82, dri: 83, def: 77, phy: 78, energy: 100 },
      { id: "atm_10", name: "Cristian Romero", number: 17, pos: "DFC", ovr: 82, pot: 84, pac: 74, sho: 46, pas: 65, dri: 68, def: 84, phy: 84, energy: 100 },
      { id: "atm_11", name: "Marc Pubill", number: 16, pos: "DFC", ovr: 81, pot: 88, pac: 82, sho: 55, pas: 72, dri: 76, def: 80, phy: 81, energy: 100 },
      { id: "atm_12", name: "Alexander Sorloth", number: 9, pos: "DC", ovr: 83, pot: 84, pac: 82, sho: 84, pas: 72, dri: 77, def: 38, phy: 87, energy: 100 },
      { id: "atm_13", name: "Juan Musso", number: 1, pos: "POR", ovr: 82, pot: 82, pac: 44, sho: 15, pas: 70, dri: 46, def: 15, phy: 74, energy: 100 },
      { id: "atm_14", name: "Giuliano Simeone", number: 22, pos: "ED", ovr: 82, pot: 85, pac: 87, sho: 78, pas: 74, dri: 82, def: 60, phy: 78, energy: 100 },
      { id: "atm_15", name: "Koke", number: 6, pos: "MC", ovr: 81, pot: 86, pac: 60, sho: 71, pas: 83, dri: 77, def: 77, phy: 76, energy: 100 },
      { id: "atm_16", name: "Robin Le Normand", number: 24, pos: "DFC", ovr: 81, pot: 83, pac: 69, sho: 37, pas: 64, dri: 63, def: 82, phy: 80, energy: 100 },
      { id: "atm_17", name: "Jonathan David", number: 7, pos: "DC", ovr: 80, pot: 83, pac: 83, sho: 81, pas: 72, dri: 80, def: 34, phy: 76, energy: 100 },
      { id: "atm_18", name: "Lee Kang In", number: 18, pos: "ED", ovr: 80, pot: 83, pac: 76, sho: 76, pas: 82, dri: 84, def: 48, phy: 62, energy: 100 },
      { id: "atm_19", name: "Johnny Cardoso", number: 4, pos: "MCD", ovr: 80, pot: 84, pac: 73, sho: 65, pas: 75, dri: 76, def: 79, phy: 81, energy: 100 },
      { id: "atm_20", name: "Obed Vargas", number: 21, pos: "MCD", ovr: 72, pot: 83, pac: 70, sho: 58, pas: 71, dri: 72, def: 71, phy: 72, energy: 100 },
      { id: "atm_21", name: "Rodri Mendoza", number: 26, pos: "MC", ovr: 72, pot: 82, pac: 71, sho: 64, pas: 73, dri: 75, def: 64, phy: 66, energy: 100 },
      { id: "atm_22", name: "Arnau Ortiz", number: 27, pos: "EI", ovr: 71, pot: 79, pac: 81, sho: 66, pas: 68, dri: 74, def: 42, phy: 63, energy: 100 }
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
    textColor: "#0F172A",
    budget: 55000000,
    reputation: 87,
    defaultFormation: "4-2-3-1",
    players: [
      { id: "ath_1", name: "Unai Simon", number: 1, pos: "POR", ovr: 84, pot: 86, pac: 46, sho: 16, pas: 75, dri: 48, def: 16, phy: 77, energy: 100 },
      { id: "ath_2", name: "Julen Agirrezabala", number: 13, pos: "POR", ovr: 78, pot: 83, pac: 43, sho: 15, pas: 71, dri: 45, def: 15, phy: 74, energy: 100 },
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
    budget: 60000000,
    reputation: 85,
    defaultFormation: "4-4-2",
    players: [
      { id: "vil_1", name: "Diego Conde", number: 13, pos: "POR", ovr: 79, pot: 82, pac: 43, sho: 15, pas: 71, dri: 44, def: 15, phy: 74, energy: 100 },
      { id: "vil_2", name: "Luiz Junior", number: 1, pos: "POR", ovr: 77, pot: 83, pac: 42, sho: 14, pas: 69, dri: 43, def: 14, phy: 73, energy: 100 },
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
    textColor: "#0F172A",
    budget: 58000000,
    reputation: 86,
    defaultFormation: "4-3-3",
    players: [
      { id: "rso_1", name: "Alex Remiro", number: 1, pos: "POR", ovr: 84, pot: 85, pac: 46, sho: 16, pas: 74, dri: 48, def: 16, phy: 76, energy: 100 },
      { id: "rso_2", name: "Unai Marrero", number: 13, pos: "POR", ovr: 71, pot: 79, pac: 39, sho: 14, pas: 65, dri: 42, def: 14, phy: 68, energy: 100 },
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
    textColor: "#0F172A",
    budget: 52000000,
    reputation: 85,
    defaultFormation: "4-2-3-1",
    players: [
      { id: "bet_1", name: "Rui Silva", number: 1, pos: "POR", ovr: 80, pot: 81, pac: 42, sho: 15, pas: 71, dri: 45, def: 15, phy: 74, energy: 100 },
      { id: "bet_2", name: "Adrian San Miguel", number: 13, pos: "POR", ovr: 73, pot: 73, pac: 38, sho: 13, pas: 66, dri: 40, def: 14, phy: 69, energy: 100 },
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
    textColor: "#0F172A",
    budget: 35000000,
    reputation: 80,
    defaultFormation: "4-2-3-1",
    players: [
      { id: "dep_1", name: "Helton Leite", number: 1, pos: "POR", ovr: 74, pot: 74, pac: 41, sho: 14, pas: 68, dri: 42, def: 14, phy: 73, energy: 100 },
      { id: "dep_2", name: "German Parreno", number: 13, pos: "POR", ovr: 68, pot: 68, pac: 37, sho: 13, pas: 63, dri: 39, def: 13, phy: 68, energy: 100 },
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
    primaryColor: "#D4001F",
    secondaryColor: "#FFFFFF",
    textColor: "#0F172A",
    budget: 48000000,
    reputation: 84,
    defaultFormation: "4-3-3",
    players: [
      { id: "sev_1", name: "Orjan Nyland", number: 13, pos: "POR", ovr: 79, pot: 79, pac: 42, sho: 15, pas: 71, dri: 44, def: 15, phy: 73, energy: 100 },
      { id: "sev_2", name: "Alvaro Fernandez", number: 1, pos: "POR", ovr: 74, pot: 77, pac: 40, sho: 14, pas: 68, dri: 42, def: 14, phy: 71, energy: 100 },
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
    secondaryColor: "#000000",
    textColor: "#0F172A",
    budget: 45000000,
    reputation: 83,
    defaultFormation: "4-4-2",
    players: [
      { id: "val_1", name: "Giorgi Mamardashvili", number: 25, pos: "POR", ovr: 83, pot: 87, pac: 46, sho: 16, pas: 74, dri: 48, def: 16, phy: 78, energy: 100 },
      { id: "val_2", name: "Stole Dimitrievski", number: 13, pos: "POR", ovr: 78, pot: 78, pac: 42, sho: 15, pas: 72, dri: 44, def: 15, phy: 75, energy: 100 },
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
    budget: 42000000,
    reputation: 82,
    defaultFormation: "3-4-3",
    players: [
      { id: "cel_1", name: "Vicente Guaita", number: 13, pos: "POR", ovr: 79, pot: 79, pac: 41, sho: 15, pas: 72, dri: 44, def: 15, phy: 73, energy: 100 },
      { id: "cel_2", name: "Ivan Villar", number: 1, pos: "POR", ovr: 73, pot: 75, pac: 40, sho: 14, pas: 66, dri: 42, def: 14, phy: 71, energy: 100 },
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
    primaryColor: "#0A1E40",
    secondaryColor: "#D91A2A",
    textColor: "#FFFFFF",
    budget: 40000000,
    reputation: 82,
    defaultFormation: "4-3-3",
    players: [
      { id: "osa_1", name: "Sergio Herrera", number: 1, pos: "POR", ovr: 80, pot: 80, pac: 43, sho: 15, pas: 72, dri: 45, def: 15, phy: 74, energy: 100 },
      { id: "osa_2", name: "Aitor Fernandez", number: 13, pos: "POR", ovr: 75, pot: 75, pac: 40, sho: 14, pas: 68, dri: 42, def: 14, phy: 71, energy: 100 },
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
    budget: 35000000,
    reputation: 80,
    defaultFormation: "5-3-2",
    players: [
      { id: "get_1", name: "David Soria", number: 13, pos: "POR", ovr: 81, pot: 81, pac: 44, sho: 16, pas: 72, dri: 46, def: 16, phy: 75, energy: 100 },
      { id: "get_2", name: "Jiri Letacek", number: 1, pos: "POR", ovr: 72, pot: 76, pac: 38, sho: 14, pas: 65, dri: 41, def: 14, phy: 71, energy: 100 },
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
    textColor: "#0F172A",
    budget: 34000000,
    reputation: 80,
    defaultFormation: "4-2-3-1",
    players: [
      { id: "ala_1", name: "Antonio Sivera", number: 1, pos: "POR", ovr: 79, pot: 81, pac: 44, sho: 15, pas: 70, dri: 46, def: 15, phy: 73, energy: 100 },
      { id: "ala_2", name: "Jesus Owono", number: 31, pos: "POR", ovr: 70, pot: 76, pac: 38, sho: 13, pas: 64, dri: 40, def: 14, phy: 68, energy: 100 },
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
    secondaryColor: "#A6192E",
    textColor: "#FFFFFF",
    budget: 35000000,
    reputation: 80,
    defaultFormation: "4-2-3-1",
    players: [
      { id: "lev_1", name: "Andres Fernandez", number: 1, pos: "POR", ovr: 75, pot: 75, pac: 40, sho: 14, pas: 68, dri: 42, def: 14, phy: 72, energy: 100 },
      { id: "lev_2", name: "Alfonso Pastor", number: 13, pos: "POR", ovr: 68, pot: 74, pac: 38, sho: 13, pas: 63, dri: 39, def: 13, phy: 68, energy: 100 },
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
    primaryColor: "#E30613",
    secondaryColor: "#FFFFFF",
    textColor: "#0F172A",
    budget: 34000000,
    reputation: 80,
    defaultFormation: "4-2-3-1",
    players: [
      { id: "ray_1", name: "Augusto Batalla", number: 13, pos: "POR", ovr: 79, pot: 81, pac: 42, sho: 15, pas: 70, dri: 44, def: 15, phy: 74, energy: 100 },
      { id: "ray_2", name: "Dani Cardenas", number: 1, pos: "POR", ovr: 74, pot: 77, pac: 40, sho: 14, pas: 68, dri: 42, def: 14, phy: 71, energy: 100 },
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
    secondaryColor: "#000000",
    textColor: "#FFFFFF",
    budget: 32000000,
    reputation: 79,
    defaultFormation: "4-2-3-1",
    players: [
      { id: "rac_1", name: "Jokin Ezkieta", number: 1, pos: "POR", ovr: 75, pot: 78, pac: 42, sho: 14, pas: 70, dri: 44, def: 14, phy: 73, energy: 100 },
      { id: "rac_2", name: "Miquel Parera", number: 13, pos: "POR", ovr: 70, pot: 71, pac: 39, sho: 13, pas: 65, dri: 41, def: 13, phy: 70, energy: 100 },
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
    textColor: "#0F172A",
    budget: 32000000,
    reputation: 79,
    defaultFormation: "4-4-2",
    players: [
      { id: "esp_1", name: "Joan Garcia", number: 1, pos: "POR", ovr: 78, pot: 84, pac: 43, sho: 15, pas: 71, dri: 46, def: 15, phy: 73, energy: 100 },
      { id: "esp_2", name: "Fernando Pacheco", number: 13, pos: "POR", ovr: 74, pot: 74, pac: 39, sho: 14, pas: 67, dri: 42, def: 14, phy: 72, energy: 100 },
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
    textColor: "#0F172A",
    budget: 30000000,
    reputation: 79,
    defaultFormation: "4-2-3-1",
    players: [
      { id: "mal_1", name: "Alfonso Herrero", number: 1, pos: "POR", ovr: 75, pot: 76, pac: 42, sho: 14, pas: 69, dri: 44, def: 14, phy: 73, energy: 100 },
      { id: "mal_2", name: "Carlos Lopez", number: 13, pos: "POR", ovr: 67, pot: 75, pac: 38, sho: 13, pas: 62, dri: 39, def: 13, phy: 68, energy: 100 },
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
    primaryColor: "#006837",
    secondaryColor: "#FFFFFF",
    textColor: "#FFFFFF",
    budget: 31000000,
    reputation: 79,
    defaultFormation: "4-4-2",
    players: [
      { id: "elc_1", name: "Matias Dituro", number: 13, pos: "POR", ovr: 75, pot: 75, pac: 40, sho: 14, pas: 72, dri: 45, def: 14, phy: 72, energy: 100 },
      { id: "elc_2", name: "Miguel San Roman", number: 1, pos: "POR", ovr: 69, pot: 71, pac: 38, sho: 13, pas: 64, dri: 40, def: 13, phy: 69, energy: 100 },
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

// Cálculo de penalización si un jugador juega fuera de su posición natural
function getPositionAffinity(playerPos, slotPos) {
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
function calculateEffectiveRating(player, slotPos) {
  const affinity = getPositionAffinity(player.pos, slotPos);
  const curEnergy = player.energy !== undefined ? player.energy : 100;
  const energyFactor = 0.5 + (curEnergy / 100) * 0.5; // La energía baja reduce rendimiento
  const injuryPenalty = player.injury ? 0.40 : 1.0; // Los futbolistas lesionados ven mermado su rendimiento drásticamente
  return Math.round(player.ovr * affinity * energyFactor * injuryPenalty);
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
    icon: picked.icon
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
    outOfPossession: { defensiveLine: "high", pressing: "high" }
  },
  gegenpress: {
    id: "gegenpress",
    name: "Gegenpress (Presión Alta)",
    icon: "⚡",
    desc: "Ritmo asfixiante, recuperación inmediata tras pérdida y transiciones verticales rápidas",
    inPossession: { passingStyle: "mixed", tempo: "fast", width: "wide" },
    inTransition: { loss: "counterpress", win: "counter" },
    outOfPossession: { defensiveLine: "high", pressing: "high" }
  },
  counter_attack: {
    id: "counter_attack",
    name: "Contraataque Fluido",
    icon: "🏹",
    desc: "Bloque bajo ordenado, repliegue rápido y salida vertical fulgurante al espacio",
    inPossession: { passingStyle: "direct", tempo: "fast", width: "wide" },
    inTransition: { loss: "regroup", win: "counter" },
    outOfPossession: { defensiveLine: "low", pressing: "mid" }
  },
  catenaccio: {
    id: "catenaccio",
    name: "Autobús Defensivo",
    icon: "🛡️",
    desc: "Bloque muy bajo, cerrojo en el área, repliegue masivo y balones largos sin riesgos",
    inPossession: { passingStyle: "direct", tempo: "slow", width: "center" },
    inTransition: { loss: "regroup", win: "hold" },
    outOfPossession: { defensiveLine: "low", pressing: "low" }
  },
  wing_play: {
    id: "wing_play",
    name: "Juego por Bandas",
    icon: "🚀",
    desc: "Apertura a extremos y carrileros para doblar y colgar centros al área",
    inPossession: { passingStyle: "mixed", tempo: "normal", width: "wide" },
    inTransition: { loss: "regroup", win: "counter" },
    outOfPossession: { defensiveLine: "mid", pressing: "mid" }
  },
  direct_football: {
    id: "direct_football",
    name: "Fútbol Directo",
    icon: "🎯",
    desc: "Balones largos directos a la referencia ofensiva, segundas jugadas y verticalidad",
    inPossession: { passingStyle: "direct", tempo: "fast", width: "center" },
    inTransition: { loss: "counterpress", win: "counter" },
    outOfPossession: { defensiveLine: "mid", pressing: "high" }
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
  ]
};
function getDefaultTacticalInstructions() {
  return {
    preset: "tiki_taka",
    inPossession: { passingStyle: "short", tempo: "slow", width: "balanced" },
    inTransition: { loss: "counterpress", win: "hold" },
    outOfPossession: { defensiveLine: "high", pressing: "high" }
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
            p.suspension = { roundsLeft: 1, reason: "Ciclo de 5 Amarillas" };
          }
        }
      }
      // Roja ocasional (1.4% de probabilidad por equipo)
      if (Math.random() < 0.014) {
        const p = outfieldStarters[Math.floor(Math.random() * outfieldStarters.length)];
        if (p) {
          p.seasonReds = (p.seasonReds || 0) + 1;
          p.suspension = { roundsLeft: 1, reason: "Tarjeta Roja" };
        }
      }
    }
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

// Gestor de guardado en LocalStorage para partidas persistentes

const SAVE_KEY = "ENTRENATE_TE_TE_LALIGA_REAL_V8";
const CURRENT_SCHEMA = "LALIGA_REAL_V8";
class SaveManager {
  static hasSavedGame() {
    try {
      const data = this.loadGame();
      return data !== null;
    } catch (e) {
      return false;
    }
  }

  static saveGame(gameState) {
    try {
      const data = {
        schemaVersion: CURRENT_SCHEMA,
        userTeamId: gameState.userTeamId,
        currentRound: gameState.currentRound,
        schedule: gameState.schedule,
        standings: gameState.standings,
        teams: gameState.teams,
        userTactics: gameState.userTactics,
        topScorers: gameState.topScorers || {},
        isSeasonOver: gameState.isSeasonOver || false,
        timestamp: Date.now()
      };
      localStorage.setItem(SAVE_KEY, JSON.stringify(data));
      return true;
    } catch (e) {
      console.error("Error al guardar la partida:", e);
      return false;
    }
  }

  static loadGame() {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (parsed && parsed.schemaVersion === CURRENT_SCHEMA && parsed.userTeamId) {
        return parsed;
      }
      // Limpiar versiones obsoletas
      localStorage.removeItem(SAVE_KEY);
      return null;
    } catch (e) {
      console.error("Error al cargar la partida:", e);
      return null;
    }
  }

  static deleteGame() {
    try {
      localStorage.removeItem(SAVE_KEY);
      localStorage.removeItem("ENTRENATE_TE_TE_26_27_V3");
      localStorage.removeItem("ENTRENATE_TE_TE_26_27");
      return true;
    } catch (e) {
      return false;
    }
  }
}

// =========================================================
// ARCHIVO: js\engine\matchEngine.js
// =========================================================

// Motor de simulación de partido 2D interactivo con cambios en vivo (sin comentarios de texto)
class MatchSimulator {
  constructor(homeTeam, awayTeam, options = {}) {
    this.homeTeam = JSON.parse(JSON.stringify(homeTeam));
    this.awayTeam = JSON.parse(JSON.stringify(awayTeam));

    this.minute = 0;
    this.firstHalfExtra = Math.floor(Math.random() * 5) + 1; // Descuento aleatorio 1 a 5 min en 1ª parte
    this.secondHalfExtra = Math.floor(Math.random() * 5) + 1; // Descuento aleatorio 1 a 5 min en 2ª parte
    this.halfTimeMinute = 45 + this.firstHalfExtra;
    this.maxMinutes = 90 + this.secondHalfExtra;
    this.userSpeed = options.speed || 1; // Velocidad elegida por el usuario
    this.speed = this.userSpeed;
    this.isHighlightRunning = false;
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

    // Inicializar jugadores en el campo para la animación 2D
    this.homePlayersOnPitch = this.homeTeam.players.slice(0, 11);
    this.homeBench = this.homeTeam.players.slice(11);

    this.awayPlayersOnPitch = this.awayTeam.players.slice(0, 11);
    this.awayBench = this.awayTeam.players.slice(11);

    // Inicializar cómputo de minutos de partido y desgaste
    [...this.homePlayersOnPitch, ...this.homeBench].forEach(p => { p.matchMinutes = 0; });
    [...this.awayPlayersOnPitch, ...this.awayBench].forEach(p => { p.matchMinutes = 0; });

    // Inicializar posiciones 3D relativas (x: 0-100, y: 0-100, z: 0-25)
    this.ball = { x: 50, y: 50, z: 0, targetX: 50, targetY: 50, targetZ: 0, possession: "home" };
    this.init2DPositions();

    this.onTick = options.onTick || (() => {});
    this.onFinish = options.onFinish || (() => {});
    this.onAlert = options.onAlert || (() => {});
    this.onGoal = options.onGoal || (() => {});
    this.onHalfTime = options.onHalfTime || (() => {});
    this.onSubstitution = options.onSubstitution || (() => {});
    this.onHighlightStart = options.onHighlightStart || (() => {});
    this.onHighlightPhase = options.onHighlightPhase || (() => {});
    this.onHighlightEnd = options.onHighlightEnd || (() => {});

    this.userSide = options.userSide || "home";
    this.aiSide = this.userSide === "home" ? "away" : "home";
    this.lastAISubMinute = 0;

    this.onSetPiece = options.onSetPiece || (() => {});
    this.isSetPieceRunning = false;

    this.onInjury = options.onInjury || (() => {});
    this.onCard = options.onCard || (() => {});
    this.matchCards = { yellows: {}, reds: {} };

    this.isHalfTime = false;
    this.halfTimeTriggered = false;
    this.isSecondHalf = false;
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

  init2DPositions() {
    const homeCoords = this.getFormationCoords(this.homeFormation, true);
    const awayCoords = this.getFormationCoords(this.awayFormation, false);

    this.home2D = this.homePlayersOnPitch.map((p, idx) => ({
      player: p,
      number: p.number || (idx + 1),
      isKeeper: p.pos === "POR" || idx === 0,
      baseX: homeCoords[idx]?.x || 25,
      baseY: homeCoords[idx]?.y || 50,
      curX: homeCoords[idx]?.x || 25,
      curY: homeCoords[idx]?.y || 50,
      targetX: homeCoords[idx]?.x || 25,
      targetY: homeCoords[idx]?.y || 50,
      animPhase: Math.random() * Math.PI * 2,
      facingX: 1
    }));

    this.away2D = this.awayPlayersOnPitch.map((p, idx) => ({
      player: p,
      number: p.number || (idx + 1),
      isKeeper: p.pos === "POR" || idx === 0,
      baseX: awayCoords[idx]?.x || 75,
      baseY: awayCoords[idx]?.y || 50,
      curX: awayCoords[idx]?.x || 75,
      curY: awayCoords[idx]?.y || 50,
      targetX: awayCoords[idx]?.x || 75,
      targetY: awayCoords[idx]?.y || 50,
      animPhase: Math.random() * Math.PI * 2,
      facingX: -1
    }));
  }

  start() {
    if (this.isSetPieceRunning || this.isFinished || this.isHalfTime) return;
    if (this.isRunning) return;
    this.isRunning = true;
    this.onTick(this.getState());

    const baseInterval = 460;
    const interval = Math.max(50, Math.round(baseInterval / this.speed));

    if (this.loopTimeout) {
      clearTimeout(this.loopTimeout);
    }
    this.loopTimeout = setTimeout(() => this.loop(), interval);
  }

  pause() {
    this.isRunning = false;
    if (this.loopTimeout) {
      clearTimeout(this.loopTimeout);
      this.loopTimeout = null;
    }
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

    // Intercambiar
    onPitchList[pitchIndex] = inPlayer;
    benchList.splice(benchIndex, 1);
    benchList.push(outPlayer);

    if (isHome) {
      this.homeSubsRemaining--;
      if (!isHalfTime) this.homeWindowsRemaining--;
      this.home2D[pitchIndex].player = inPlayer;
    } else {
      this.awaySubsRemaining--;
      if (!isHalfTime) this.awayWindowsRemaining--;
      this.away2D[pitchIndex].player = inPlayer;
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
  applyTacticalChanges(teamSide, newFormationKey, newMentality, newLineupPlayerIds, newBenchPlayerIds, isHalfTime = false, newPlayerRoles = null, newCustomPositions = null) {
    const isHome = teamSide === "home";
    const currentPitch = isHome ? this.homePlayersOnPitch : this.awayPlayersOnPitch;
    const currentPitchIds = currentPitch.map(p => p.id);
    const remaining = isHome ? this.homeSubsRemaining : this.awaySubsRemaining;
    const remainingWindows = isHome ? this.homeWindowsRemaining : this.awayWindowsRemaining;

    if (newCustomPositions) {
      if (isHome) this.homeCustomPositions = newCustomPositions;
      else this.awayCustomPositions = newCustomPositions;
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

    const newPitch = newLineupPlayerIds.map(id => allTeamPlayers.find(p => p.id === id)).filter(Boolean);
    const newBench = newBenchPlayerIds.map(id => allTeamPlayers.find(p => p.id === id)).filter(Boolean);

    if (newPitch.length !== 11) {
      return { success: false, reason: "La alineación debe contar exactamente con 11 futbolistas." };
    }

    // Registrar parejas de cambio para rótulos y estadísticas
    const subsPairs = [];
    for (let i = 0; i < subsInIds.length; i++) {
      const inP = allTeamPlayers.find(p => p.id === subsInIds[i]);
      const outP = allTeamPlayers.find(p => p.id === subsOutIds[i]);
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

    // Reposicionar jugadores en 2D según el nuevo esquema táctico
    const activeFormation = isHome ? this.homeFormation : this.awayFormation;
    const newCoords = this.getFormationCoords(activeFormation, isHome);
    const old2D = isHome ? this.home2D : this.away2D;

    const updated2D = newPitch.map((p, idx) => {
      const existing = old2D.find(item => item.player.id === p.id);
      const coord = newCoords[idx] || { x: isHome ? 25 : 75, y: 50 };
      return {
        player: p,
        number: p.number || (idx + 1),
        isKeeper: p.pos === "POR" || idx === 0,
        baseX: coord.x,
        baseY: coord.y,
        curX: existing ? existing.curX : coord.x,
        curY: existing ? existing.curY : coord.y,
        targetX: coord.x,
        targetY: coord.y,
        animPhase: existing ? existing.animPhase : (Math.random() * Math.PI * 2),
        facingX: isHome ? 1 : -1
      };
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
      const isAtk = ["DC", "EI", "ED"].includes(mostTired.pos);
      const isMid = ["MC", "MCD", "MCO"].includes(mostTired.pos);
      const isDef = ["DFC", "LD", "LI"].includes(mostTired.pos);

      const lineCandidates = aiBench.filter(p => {
        if (isAtk) return ["DC", "EI", "ED"].includes(p.pos);
        if (isMid) return ["MC", "MCD", "MCO"].includes(p.pos);
        if (isDef) return ["DFC", "LD", "LI"].includes(p.pos);
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
      if (res.success) {
        this.pause();
        this.onSubstitution({
          teamSide: this.aiSide,
          team: this.aiSide === "home" ? this.homeTeam : this.awayTeam,
          subs: [{ outPlayer: res.outPlayer, inPlayer: res.inPlayer }],
          minute: this.minute,
          remaining: this.aiSide === "home" ? this.homeSubsRemaining : this.awaySubsRemaining
        });
      }
    }
  }

  // Activar lesión de un jugador durante el partido por fatiga, lance o falta
  triggerPlayerInjury(player, teamSide, cause = "random") {
    if (!player || player.injury) return;

    const injuryData = generateRandomInjury(cause);
    player.injury = injuryData;
    player.energy = Math.max(10, (player.energy || 50) - 28);

    const teamObj = teamSide === "home" ? this.homeTeam : this.awayTeam;
    const alertMsg = `${injuryData.icon} ¡LESIÓN! ${player.name} (${injuryData.type}) - ${injuryData.roundsLeft}j de baja`;
    this.triggerAlert("LESIÓN", alertMsg, teamSide, 5000);

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
      team: teamObj
    });

    // Si es el equipo de la IA rival, gestionar sustitución inmediata de emergencia
    if (teamSide === this.aiSide) {
      this.handleAIInjurySub(player, teamSide);
    }
  }

  // Sustitución forzosa por lesión para el equipo IA
  handleAIInjurySub(injuredPlayer, teamSide) {
    const isHome = teamSide === "home";
    const remaining = isHome ? this.homeSubsRemaining : this.awaySubsRemaining;
    const remainingWindows = isHome ? this.homeWindowsRemaining : this.awayWindowsRemaining;
    const aiBenchRaw = isHome ? this.homeBench : this.awayBench;
    const aiBench = (aiBenchRaw || []).filter(p => !p.injury);

    if (remaining <= 0 || remainingWindows <= 0 || aiBench.length === 0) return;

    const samePos = aiBench.filter(p => p.pos === injuredPlayer.pos);
    let candidate = null;
    if (samePos.length > 0) {
      candidate = samePos.sort((a, b) => (b.ovr || 70) - (a.ovr || 70))[0];
    } else {
      candidate = aiBench.filter(p => p.pos !== "POR").sort((a, b) => (b.ovr || 70) - (a.ovr || 70))[0] || aiBench[0];
    }

    if (candidate) {
      const res = this.makeSubstitution(teamSide, injuredPlayer.id, candidate.id, this.isHalfTime);
      if (res.success) {
        this.onSubstitution({
          teamSide,
          team: teamSide === "home" ? this.homeTeam : this.awayTeam,
          subs: [{ outPlayer: res.outPlayer, inPlayer: res.inPlayer }],
          minute: this.minute,
          remaining: res.remaining,
          forcedInjury: true
        });
      }
    }
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
    if (this.isSetPieceRunning) return false;

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

    // Modificadores de fatiga según ritmo y presión táctica
    const homePressMod = this.homeInstructions?.outOfPossession?.pressing === "high" ? 1.18 : (this.homeInstructions?.outOfPossession?.pressing === "low" ? 0.82 : 1.0);
    const homeTempoMod = this.homeInstructions?.inPossession?.tempo === "fast" ? 1.12 : (this.homeInstructions?.inPossession?.tempo === "slow" ? 0.88 : 1.0);
    const awayPressMod = this.awayInstructions?.outOfPossession?.pressing === "high" ? 1.18 : (this.awayInstructions?.outOfPossession?.pressing === "low" ? 0.82 : 1.0);
    const awayTempoMod = this.awayInstructions?.inPossession?.tempo === "fast" ? 1.12 : (this.awayInstructions?.inPossession?.tempo === "slow" ? 0.88 : 1.0);

    // Desgaste físico gradual y acumulación de minutos según atributos físicos (PHY), posición, mentalidad y estilo táctico
    this.homePlayersOnPitch.forEach(p => {
      p.matchMinutes = (p.matchMinutes || 0) + 1;
      const isGK = p.pos === "POR";
      const phyFactor = (120 - Math.min(95, Math.max(45, (p.phy || 70)))) / 50;
      const rate = isGK ? 0.08 : (0.42 * phyFactor * homeMod.drain * homePressMod * homeTempoMod);
      p.energy = Math.max(25, (p.energy || 100) - rate);
    });

    this.awayPlayersOnPitch.forEach(p => {
      p.matchMinutes = (p.matchMinutes || 0) + 1;
      const isGK = p.pos === "POR";
      const phyFactor = (120 - Math.min(95, Math.max(45, (p.phy || 70)))) / 50;
      const rate = isGK ? 0.08 : (0.42 * phyFactor * awayMod.drain * awayPressMod * awayTempoMod);
      p.energy = Math.max(25, (p.energy || 100) - rate);
    });

    // Comprobación de riesgo de lesión por acumulación de minutos y fatiga física (< 58% energía)
    const checkFatigueInjury = (player, teamSide) => {
      if (player.injury || player.pos === "POR") return;
      const energy = player.energy !== undefined ? player.energy : 100;
      if (energy < 58) {
        const fatigueRisk = (58 - energy) / 100;
        const phyFactor = Math.max(0.5, (player.phy || 70) / 100);
        const chance = (fatigueRisk * 0.0032) / phyFactor;
        if (Math.random() < chance) {
          this.triggerPlayerInjury(player, teamSide, "fatigue");
        }
      }
    };
    this.homePlayersOnPitch.forEach(p => checkFatigueInjury(p, "home"));
    this.awayPlayersOnPitch.forEach(p => checkFatigueInjury(p, "away"));

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
    const homeDefBonus = this.homeInstructions?.outOfPossession?.defensiveLine === "low" ? 0.12 : (this.homeInstructions?.outOfPossession?.defensiveLine === "high" ? -0.06 : 0);
    const awayDefBonus = this.awayInstructions?.outOfPossession?.defensiveLine === "low" ? 0.12 : (this.awayInstructions?.outOfPossession?.defensiveLine === "high" ? -0.06 : 0);

    const homeAtk = (this.calcTeamPower(this.homePlayersOnPitch, "atk", "home") + 2) * (homeMod.atk + homeAtkBonus);
    const homeDef = (this.calcTeamPower(this.homePlayersOnPitch, "def", "home") + 2) * (homeMod.def + homeDefBonus);
    const awayAtk = this.calcTeamPower(this.awayPlayersOnPitch, "atk", "away") * (awayMod.atk + awayAtkBonus);
    const awayDef = this.calcTeamPower(this.awayPlayersOnPitch, "def", "away") * (awayMod.def + awayDefBonus);

    // Disputa de la posesión con impacto de estilo de pase y presión alta
    const midHome = this.calcTeamPower(this.homePlayersOnPitch, "mid", "home");
    const midAway = this.calcTeamPower(this.awayPlayersOnPitch, "mid", "away");

    let possModHome = 0;
    if (this.homeInstructions?.inPossession?.passingStyle === "short") possModHome += 0.06;
    else if (this.homeInstructions?.inPossession?.passingStyle === "direct") possModHome -= 0.05;
    if (this.homeInstructions?.outOfPossession?.pressing === "high") possModHome += 0.04;

    let possModAway = 0;
    if (this.awayInstructions?.inPossession?.passingStyle === "short") possModAway += 0.06;
    else if (this.awayInstructions?.inPossession?.passingStyle === "direct") possModAway -= 0.05;
    if (this.awayInstructions?.outOfPossession?.pressing === "high") possModAway += 0.04;

    const probHomePoss = Math.max(0.20, Math.min(0.80, (midHome / (midHome + midAway)) + 0.03 + possModHome - possModAway));

    let currentPoss = Math.random() < probHomePoss ? "home" : "away";

    // 1. TRANSICIÓN TRAS PÉRDIDA: CONTRAPRESIÓN INSTANTÁNEA
    if (this.lastPossession === "home" && currentPoss === "away") {
      if (this.homeInstructions?.inTransition?.loss === "counterpress" && Math.random() < 0.35) {
        currentPoss = "home"; // ¡Robo inmediato arriba!
        this.triggerAlert("CONTRAPRESIÓN", `💥 ¡Presión tras pérdida de ${this.homeTeam.shortName}! Robo en campo rival`, "home", 2500);
      }
    } else if (this.lastPossession === "away" && currentPoss === "home") {
      if (this.awayInstructions?.inTransition?.loss === "counterpress" && Math.random() < 0.35) {
        currentPoss = "away"; // ¡Robo inmediato arriba!
        this.triggerAlert("CONTRAPRESIÓN", `💥 ¡Presión tras pérdida de ${this.awayTeam.shortName}! Robo en campo rival`, "away", 2500);
      }
    }

    // 2. TRANSICIÓN TRAS RECUPERACIÓN: CONTRAATAQUE VERTICAL
    if (this.lastPossession !== currentPoss) {
      const activeInst = currentPoss === "home" ? this.homeInstructions : this.awayInstructions;
      const activeTeam = currentPoss === "home" ? this.homeTeam : this.awayTeam;
      if (activeInst?.inTransition?.win === "counter" && Math.random() < 0.42) {
        this.triggerAlert("CONTRAATAQUE", `🏹 ¡Contraataque veloz de ${activeTeam.shortName}!`, currentPoss, 2500);
      }
    }

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

    // Probabilidad de ocasión de gol en este minuto
    const chanceRoll = Math.random();

    if (currentPoss === "home") {
      // Posición del balón en el campo atacando hacia la derecha (x: 50 -> 90)
      const widthInst = this.homeInstructions?.inPossession?.width || "balanced";
      let ballYTarget = 20 + Math.random() * 60;
      if (widthInst === "wide") {
        ballYTarget = Math.random() < 0.5 ? (12 + Math.random() * 20) : (68 + Math.random() * 20);
      } else if (widthInst === "center") {
        ballYTarget = 36 + Math.random() * 28;
      }

      this.ball.targetX = 65 + Math.random() * 28;
      this.ball.targetY = ballYTarget;

      // Ocasión de ataque local
      const attackScore = (homeAtk / (homeAtk + awayDef)) * 0.28;
      if (chanceRoll < attackScore) {
        this.executeKeyHighlight("home", () => {
          if (this.minute >= this.halfTimeMinute && !this.halfTimeTriggered && !this.isSecondHalf) {
            this.halfTimeTriggered = true;
            this.isHalfTime = true;
            this.pause();
            this.onHalfTime(this.getState());
            return;
          }
          if (this.isRunning && !this.isFinished) {
            this.loop();
          }
        });
        return true;
      } else if (chanceRoll < attackScore + 0.055) {
        // Balón parado (Córner o Falta peligrosa)
        const isCorner = Math.random() < 0.65;
        this.triggerSetPiece("home", isCorner ? "CORNER" : "FREE_KICK");
        return true;
      } else {
        // Pase o centro medio
        this.ball.targetZ = Math.random() < 0.3 ? 4 + Math.random() * 6 : 0;
      }
    } else {
      // Balón atacando hacia la izquierda (x: 50 -> 10)
      const widthInstAway = this.awayInstructions?.inPossession?.width || "balanced";
      let ballYTargetAway = 20 + Math.random() * 60;
      if (widthInstAway === "wide") {
        ballYTargetAway = Math.random() < 0.5 ? (12 + Math.random() * 20) : (68 + Math.random() * 20);
      } else if (widthInstAway === "center") {
        ballYTargetAway = 36 + Math.random() * 28;
      }

      this.ball.targetX = 35 - Math.random() * 28;
      this.ball.targetY = ballYTargetAway;

      const attackScore = (awayAtk / (awayAtk + homeDef)) * 0.26;
      if (chanceRoll < attackScore) {
        this.executeKeyHighlight("away", () => {
          if (this.minute >= this.halfTimeMinute && !this.halfTimeTriggered && !this.isSecondHalf) {
            this.halfTimeTriggered = true;
            this.isHalfTime = true;
            this.pause();
            this.onHalfTime(this.getState());
            return;
          }
          if (this.isRunning && !this.isFinished) {
            this.loop();
          }
        });
        return true;
      } else if (chanceRoll < attackScore + 0.055) {
        // Balón parado (Córner o Falta peligrosa)
        const isCorner = Math.random() < 0.65;
        this.triggerSetPiece("away", isCorner ? "CORNER" : "FREE_KICK");
        return true;
      } else {
        this.ball.targetZ = Math.random() < 0.3 ? 4 + Math.random() * 6 : 0;
      }
    }

    // Posibles faltas y tarjetas (afectadas por la intensidad de presión)
    const baseFoulChance = 0.065;
    const pressingHome = this.homeInstructions?.outOfPossession?.pressing || "mid";
    const pressingAway = this.awayInstructions?.outOfPossession?.pressing || "mid";
    const pressFoulMod = (pressingHome === "high" || pressingAway === "high") ? 1.30 : ((pressingHome === "low" && pressingAway === "low") ? 0.65 : 1.0);

    if (Math.random() < baseFoulChance * pressFoulMod) {
      const foulTeam = Math.random() > 0.5 ? "home" : "away";
      this.stats.fouls[foulTeam]++;
      const victimTeam = foulTeam === "home" ? "away" : "home";
      const foulTeamObj = foulTeam === "home" ? this.homeTeam : this.awayTeam;
      const foulPitch = foulTeam === "home" ? this.homePlayersOnPitch : this.awayPlayersOnPitch;
      const foulCandidates = foulPitch.filter(p => p.pos !== "POR");
      const committingPlayer = foulCandidates.length > 0
        ? foulCandidates[Math.floor(Math.random() * foulCandidates.length)]
        : foulPitch[0];

      const isDirectRed = Math.random() < 0.015;
      const isYellow = !isDirectRed && Math.random() < 0.22;

      if (isDirectRed && committingPlayer) {
        this.stats.redCards[foulTeam]++;
        this.matchCards.reds[committingPlayer.id] = { player: committingPlayer, reason: "Roja directa", minute: this.minute, team: foulTeam };
        if (foulTeam === "home") {
          this.homePlayersOnPitch = this.homePlayersOnPitch.filter(p => p.id !== committingPlayer.id);
        } else {
          this.awayPlayersOnPitch = this.awayPlayersOnPitch.filter(p => p.id !== committingPlayer.id);
        }
        this.update2DPositions();
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
          // Segunda amarilla y expulsión
          this.stats.yellowCards[foulTeam]++;
          this.stats.redCards[foulTeam]++;
          this.matchCards.reds[committingPlayer.id] = { player: committingPlayer, reason: "Segunda amarilla", minute: this.minute, team: foulTeam };
          if (foulTeam === "home") {
            this.homePlayersOnPitch = this.homePlayersOnPitch.filter(p => p.id !== committingPlayer.id);
          } else {
            this.awayPlayersOnPitch = this.awayPlayersOnPitch.filter(p => p.id !== committingPlayer.id);
          }
          this.update2DPositions();
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
          // Primera amarilla
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

      // Riesgo de lesión por agresividad o entrada dura del rival
      const foulTeamMentality = foulTeam === "home" ? this.homeMentality : this.awayMentality;
      const aggMod = (foulTeamMentality === "very_offensive" || foulTeamMentality === "offensive") ? 1.4 : 1.0;
      const injuryFoulChance = (isYellow ? 0.075 : 0.018) * aggMod;
      if (Math.random() < injuryFoulChance) {
        const victimPitch = victimTeam === "home" ? this.homePlayersOnPitch : this.awayPlayersOnPitch;
        const eligible = victimPitch.filter(p => !p.injury);
        if (eligible.length > 0) {
          const victim = eligible[Math.floor(Math.random() * eligible.length)];
          this.triggerPlayerInjury(victim, victimTeam, "foul");
        }
      }

      if (Math.random() < 0.40 && !this.isHighlightRunning && !this.isSetPieceRunning) {
        this.triggerSetPiece(victimTeam, "FREE_KICK");
        return true;
      }
    }

    // Lance fortuito aislado del juego (esguince, mala caída por puro azar)
    if (Math.random() < 0.0006) {
      const side = Math.random() > 0.5 ? "home" : "away";
      const pitch = side === "home" ? this.homePlayersOnPitch : this.awayPlayersOnPitch;
      const eligible = pitch.filter(p => !p.injury);
      if (eligible.length > 0) {
        const victim = eligible[Math.floor(Math.random() * eligible.length)];
        this.triggerPlayerInjury(victim, side, "random");
      }
    }

    // Comprobar y realizar posibles cambios tácticos de la IA rival
    this.checkAISubstitutions();

    // Actualizar coordenadas 3D de los jugadores hacia el balón para visualización dinámica
    this.update2DPositions();
    return false;
  }

  // Ejecución de jugada clave en varias fases cinematográficas estilo Football Manager
  executeKeyHighlight(attackingSide, onComplete) {
    this.isHighlightRunning = true;
    this.speed = 1; // Ritmo deliberado para apreciar la jugada en detalle

    const isHome = attackingSide === "home";
    const atkTeam = isHome ? this.homeTeam : this.awayTeam;
    const defTeam = isHome ? this.awayTeam : this.homeTeam;
    const atkPlayers = isHome ? this.homePlayersOnPitch : this.awayPlayersOnPitch;
    const defPlayers = isHome ? this.awayPlayersOnPitch : this.homePlayersOnPitch;

    // Selección de protagonistas de la jugada completa de 15 segundos
    const shooter = this.pickPlayerForAction(atkPlayers, ["DC", "EI", "ED", "MCO", "MC", "LD", "LI"], "shoot");
    const passer = this.pickPlayerForAction(atkPlayers.filter(p => p.id !== shooter.id), ["EI", "ED", "MCO", "MC", "LD", "LI", "DC"], "pass");
    const pivot = atkPlayers.find(p => (p.pos === "MCD" || p.pos === "MC") && p.id !== passer.id && p.id !== shooter.id)
      || atkPlayers.find(p => p.id !== passer.id && p.id !== shooter.id && p.pos !== "POR")
      || atkPlayers[0];
    const supportAttacker = atkPlayers.find(p => p.id !== passer.id && p.id !== shooter.id && p.id !== pivot.id && p.pos !== "POR") || atkPlayers[1];

    const goalkeeper = defPlayers.find(p => p.pos === "POR") || defPlayers[0];
    const defender = defPlayers.find(p => (p.pos === "DFC" || p.pos === "MCD" || p.pos === "LD" || p.pos === "LI") && p.id !== goalkeeper.id) || defPlayers[1];
    const defender2 = defPlayers.find(p => (p.pos === "DFC" || p.pos === "LD" || p.pos === "LI") && p.id !== defender.id && p.id !== goalkeeper.id) || defPlayers[2];

    const passerRole = this.getPlayerRole(passer, attackingSide);
    const shooterRole = this.getPlayerRole(shooter, attackingSide);
    const defenderRole = this.getPlayerRole(defender, isHome ? "away" : "home");

    const atk2D = isHome ? this.home2D : this.away2D;
    const def2D = isHome ? this.away2D : this.home2D;

    const passerItem = atk2D.find(p => p.player?.id === passer.id);
    const shooterItem = atk2D.find(p => p.player?.id === shooter.id);
    const defItem = def2D.find(p => p.player?.id === defender.id) || def2D.find(p => !p.isKeeper);
    const gkItem = def2D.find(p => p.isKeeper) || def2D[0];

    let chanceComment = `⚡ ¡Ocasión de peligro de ${atkTeam.shortName}!`;
    if (passerRole && passerRole.tag === "Organizador") {
      chanceComment = `🧠 ${passer.name} (Organizador) canaliza el juego con un pase magistral`;
    } else if (passerRole && passerRole.tag === "Ofensivo") {
      chanceComment = `🚀 ${passer.name} (Carrilero) sube con potencia por la banda y centra`;
    } else if (passerRole && passerRole.tag === "Creativo") {
      chanceComment = `✨ ${passer.name} (Mediapunta) filtra un balón con magia`;
    } else if (passerRole && passerRole.tag === "Salida") {
      chanceComment = `🎯 ${passer.name} (Central) rompe líneas con pase largo milimétrico`;
    } else if (passerRole && passerRole.tag === "Falso 9") {
      chanceComment = `🧠 ${passer.name} (Falso 9) baja a recibir y filtra al espacio`;
    }

    // Coordenadas calculadas para la jugada en campo
    const midX = isHome ? (58 + Math.random() * 8) : (42 - Math.random() * 8);
    const midY = 28 + Math.random() * 44;
    const boxX = isHome ? (83 + Math.random() * 6) : (17 - Math.random() * 6);
    const boxY = 36 + Math.random() * 28;

    // Determinar resultado y rincón de disparo de forma coherente
    const shotQuality = (shooter.sho || 75) + (Math.random() * 30 - 15);
    const gkSavePower = (goalkeeper.ovr || 78) + (Math.random() * 25 - 10);
    const onTarget = Math.random() < 0.72;
    const isDefenderBlock = !onTarget && Math.random() < 0.22;

    let outcome = "GOAL";
    let targetCorner = "TOP_RIGHT";
    const cornersPool = ["TOP_RIGHT", "TOP_LEFT", "BOTTOM_RIGHT", "BOTTOM_LEFT"];
    targetCorner = cornersPool[Math.floor(Math.random() * cornersPool.length)];

    // Dirección específica para disparos fuera (garantiza que jamás entre entre los palos)
    let wideDirection = "RIGHT";
    const wideRand = Math.random();
    if (wideRand < 0.42) wideDirection = "RIGHT";
    else if (wideRand < 0.84) wideDirection = "LEFT";
    else wideDirection = "HIGH";

    if (isDefenderBlock) {
      outcome = "BLOCK";
    } else if (!onTarget) {
      outcome = Math.random() < 0.35 ? "POST" : "WIDE";
    } else {
      if (shotQuality > gkSavePower + 3) {
        outcome = "GOAL";
      } else {
        outcome = "SAVE";
      }
    }

    // Selección de patrón táctico de la jugada clave (con variedad real y sin repetir el anterior)
    const allPatterns = [
      "TIKI_TAKA_CENTRAL",
      "WING_CROSS_HEADER",
      "NEAR_WING_CUTBACK",
      "COUNTER_THROUGH_BALL",
      "INDIVIDUAL_SLALOM",
      "LONG_RANGE_BOMB"
    ];
    const teamInst = isHome ? this.homeInstructions : this.awayInstructions;
    let candidatePatterns = allPatterns.filter(p => p !== this.lastHighlightPattern);
    if (teamInst?.inPossession?.width === "wide" && Math.random() < 0.45) {
      candidatePatterns = ["WING_CROSS_HEADER", "NEAR_WING_CUTBACK"].filter(p => p !== this.lastHighlightPattern);
    } else if (teamInst?.inPossession?.passingStyle === "short" && Math.random() < 0.45) {
      candidatePatterns = ["TIKI_TAKA_CENTRAL", "INDIVIDUAL_SLALOM"].filter(p => p !== this.lastHighlightPattern);
    } else if (teamInst?.inTransition?.win === "counter" && Math.random() < 0.45) {
      candidatePatterns = ["COUNTER_THROUGH_BALL", "LONG_RANGE_BOMB"].filter(p => p !== this.lastHighlightPattern);
    }
    if (candidatePatterns.length === 0) candidatePatterns = allPatterns;
    const playPattern = candidatePatterns[Math.floor(Math.random() * candidatePatterns.length)];
    this.lastHighlightPattern = playPattern;
    const patternSeed = Math.random();

    const patternDescriptions = {
      TIKI_TAKA_CENTRAL: {
        buildNote: `🧠 ${pivot.name} combina en corto con ${supportAttacker.name} buscando abrir la defensa por el centro`,
        progAlert: ["PARED EN LA FRONTAL", `✨ ¡Pared eléctrica entre ${supportAttacker.name} y ${passer.name} en la media luna!`],
        progNote: `✨ ${passer.name} tira la pared en la frontal mientras ${shooter.name} rompe entre los centrales`,
        passAlert: ["PASE FILTRADO", `🎯 ¡Pase interior milimétrico de ${passer.name} dejando solo a ${shooter.name}!`],
        passNote: `🎯 Pase raso entre líneas de ${passer.name}. ¡${shooter.name} controla en el punto de penalti!`,
        shotNote: `⚽ ¡${shooter.name} define de primeras ante la salida del portero!`
      },
      WING_CROSS_HEADER: {
        buildNote: `🔄 ${pivot.name} levanta la cabeza y cambia la orientación en largo hacia la banda derecha`,
        progAlert: ["DESBORDE EN BANDA", `🚀 ${passer.name} encara al lateral a toda velocidad hasta la línea de fondo`],
        progNote: `🚀 ${passer.name} gana línea de fondo mientras ${shooter.name} y ${supportAttacker.name} cargan el área`,
        passAlert: ["CENTRO AL ÁREA", `🎯 ¡Centro tenso con rosca de ${passer.name} al corazón del área!`],
        passNote: `🎯 Centro bombeado de ${passer.name} buscando el remate en el segundo palo`,
        shotNote: `⚽ ¡${shooter.name} se eleva sobre la defensa y conecta un remate letal!`
      },
      NEAR_WING_CUTBACK: {
        buildNote: `⚡ ${pivot.name} abre hacia el costado izquierdo para la subida de ${passer.name}`,
        progAlert: ["INTERNADA EN EL ÁREA", `🔥 ¡${passer.name} recorta hacia adentro y se mete hasta la cocina por la izquierda!`],
        progNote: `🔥 ${passer.name} rompe por el costado izquierdo del área atrayendo a dos defensores`,
        passAlert: ["PASE DE LA MUERTE", `🎯 ¡Pase atrás raso de ${passer.name} buscando la llegada desde segunda línea!`],
        passNote: `🎯 Pase de la muerte de ${passer.name} hacia la frontal del área pequeña`,
        shotNote: `⚽ ¡${shooter.name} llega en carrera y empalma de primeras a portería!`
      },
      COUNTER_THROUGH_BALL: {
        buildNote: `🏹 ¡Recuperación y transición relámpago! ${pivot.name} lanza la contra con la defensa adelantada`,
        progAlert: ["CONTRAATAQUE VELOZ", `⚡ ${passer.name} conduce a campo abierto con ${shooter.name} tirando el desmarque de ruptura`],
        progNote: `⚡ La defensa rival corre hacia atrás desesperada intentando cerrar el hueco`,
        passAlert: ["BALÓN AL ESPACIO", `🎯 ¡Pase en profundidad de ${passer.name} a la espalda de los centrales!`],
        passNote: `🎯 ¡${shooter.name} gana la carrera al espacio y se planta en el mano a mano!`,
        shotNote: `⚽ ¡${shooter.name} encara al guardameta y cruza el disparo!`
      },
      INDIVIDUAL_SLALOM: {
        buildNote: `✨ ${pivot.name} cede en banda para ${passer.name}, que arrastra marcas y entrega a ${shooter.name}`,
        progAlert: ["JUGADA INDIVIDUAL", `🪄 ¡Slalom espectacular de ${shooter.name} sorteando rivales en diagonal hacia el área!`],
        progNote: `🪄 ${shooter.name} recorta en seco, tira una pared rápida con ${supportAttacker.name} y se perfila`,
        passAlert: ["RECORTE EN LA FRONTAL", `🔥 ¡${shooter.name} deja sentado a ${defender.name} con un amago en el borde del área!`],
        passNote: `🔥 Hueco abierto en la frontal tras la bicicleta y recorte de ${shooter.name}`,
        shotNote: `⚽ ¡${shooter.name} busca la escuadra con un golpeo con rosca!`
      },
      LONG_RANGE_BOMB: {
        buildNote: `🔄 Circulación paciente de ${pivot.name} y ${supportAttacker.name} frente al bloque bajo rival`,
        progAlert: ["BÚSQUEDA DE HUECO", `🧠 ${passer.name} pisa el balón en tres cuartos y atrae a la línea de presión`],
        progNote: `🧠 La defensa se hunde en su área; ${passer.name} prepara la dejada de cara`,
        passAlert: ["DEJADA EN LA FRONTAL", `🎯 ¡${passer.name} toca de cara para la llegada libre de ${shooter.name}!`],
        passNote: `🎯 ${shooter.name} acomoda el balón a 22 metros con ángulo de disparo`,
        shotNote: `🚀 ¡${shooter.name} suelta un latigazo descomunal desde fuera del área!`
      }
    };
    const pDesc = patternDescriptions[playPattern] || patternDescriptions.TIKI_TAKA_CENTRAL;

    const baseHighlightData = {
      type: "KEY_CHANCE",
      playPattern,
      patternSeed,
      attackingSide,
      atkTeam,
      defTeam,
      pivot,
      passer,
      shooter,
      supportAttacker,
      defender,
      defender2,
      goalkeeper,
      passerRole,
      shooterRole,
      defenderRole,
      outcome,
      targetCorner,
      wideDirection,
      passStart: { x: midX, y: midY },
      passEnd: { x: boxX, y: boxY },
      commentary: chanceComment,
      minute: this.minute,
      totalDuration: 15000
    };

    // FASE 1: Construcción y circulación en la medular (0.0s - 4.5s)
    this.ball.targetX = midX;
    this.ball.targetY = midY;
    this.ball.targetZ = 0;
    this.ball.possession = attackingSide;

    if (passerItem) {
      passerItem.targetX = midX;
      passerItem.targetY = midY;
    }
    if (defItem) {
      defItem.targetX = midX + (isHome ? 7 : -7);
      defItem.targetY = midY + (Math.random() * 4 - 2);
    }
    if (shooterItem) {
      shooterItem.targetX = isHome ? midX + 13 : midX - 13;
      shooterItem.targetY = midY + (Math.random() < 0.5 ? -10 : 10);
    }
    this.update2DPositions();

    if (this.onHighlightStart) {
      this.onHighlightStart({
        ...baseHighlightData,
        phase: "BUILDUP",
        phaseLabel: "Inicio de la jugada",
        phaseDuration: 4500,
        tacticalNote: pDesc.buildNote
      });
    }
    if (this.onHighlightPhase) {
      this.onHighlightPhase({
        ...baseHighlightData,
        phase: "BUILDUP",
        phaseLabel: "Inicio de la jugada",
        phaseDuration: 4500,
        tacticalNote: pDesc.buildNote
      });
    }

    // FASE 2: Progresión (4.5s - 8.5s)
    setTimeout(() => {
      if (!this.isRunning && !this.isHighlightRunning) return;

      this.triggerAlert(pDesc.progAlert[0], pDesc.progAlert[1], attackingSide, 3200);

      if (this.onHighlightPhase) {
        this.onHighlightPhase({
          ...baseHighlightData,
          phase: "PROGRESSION",
          phaseLabel: "Progresión ofensiva",
          phaseDuration: 4000,
          tacticalNote: pDesc.progNote
        });
      }

      // FASE 3: Pase clave / generación de espacio (8.5s - 11.5s)
      setTimeout(() => {
        if (!this.isRunning && !this.isHighlightRunning) return;

        const isLob = playPattern === "WING_CROSS_HEADER" || Math.random() < 0.35;
        const passZ = isLob ? 4.5 + Math.random() * 2.5 : 0;
        this.ball.targetX = boxX;
        this.ball.targetY = boxY;
        this.ball.targetZ = passZ;

        if (shooterItem) {
          shooterItem.targetX = boxX;
          shooterItem.targetY = boxY;
        }
        if (defItem) {
          defItem.targetX = boxX + (isHome ? -5 : 5);
          defItem.targetY = boxY + (Math.random() * 6 - 3);
        }
        if (gkItem) {
          gkItem.targetX = isHome ? 96.5 : 3.5;
          gkItem.targetY = 48 + (boxY - 50) * 0.22;
        }
        this.update2DPositions();

        this.triggerAlert(pDesc.passAlert[0], pDesc.passAlert[1], attackingSide, 2800);

        if (this.onHighlightPhase) {
          this.onHighlightPhase({
            ...baseHighlightData,
            phase: "KEY_PASS",
            phaseLabel: "Último pase y control",
            phaseDuration: 3000,
            tacticalNote: pDesc.passNote
          });
        }

        // FASE 4: Disparo a puerta y desenlace físico en pantalla (11.5s - 15.0s)
        setTimeout(() => {
          if (!this.isRunning && !this.isHighlightRunning) return;

          this.stats.shots[attackingSide]++;

          if (this.onHighlightPhase) {
            this.onHighlightPhase({
              ...baseHighlightData,
              phase: "SHOT",
              phaseLabel: "Remate a portería",
              phaseDuration: 3500,
              tacticalNote: pDesc.shotNote
            });
          }

          if (outcome === "BLOCK") {
            // Bloqueo de la zaga
            this.ball.targetX = boxX + (isHome ? -3 : 3);
            this.ball.targetY = boxY + (Math.random() * 8 - 4);
            this.ball.targetZ = 1.2;
            this.triggerAlert("BLOQUEO", `🛡️ ¡Bloqueo providencial de ${defender.name}!`, isHome ? "away" : "home", 3200);

            const analysis = attackingSide === this.userSide
              ? `🛡️ Disparo bloqueado por ${defender.name}. El central tapó el ángulo con una segada impecable.`
              : `🛡️ ¡Gran anticipación de tu zaga! ${defender.name} se lanzó al suelo y neutralizó el tiro.`;

            setTimeout(() => {
              this.concludeHighlight({ outcome: "BLOCK", tacticalAnalysis: analysis, onComplete });
            }, 3500);

          } else if (outcome === "POST") {
            this.ball.targetX = isHome ? 99 : 1;
            this.ball.targetY = targetCorner.includes("RIGHT") ? 55.5 : 44.5;
            this.ball.targetZ = 7;
            this.triggerAlert("AL PALO", `🥅 ¡Al palo! El disparo de ${shooter.name} se estrella en la madera`, attackingSide, 3200);
            const analysis = `🥅 ¡Al palo! La madera evitó el gol de ${shooter.name} tras superar al guardameta.`;

            setTimeout(() => {
              this.concludeHighlight({ outcome: "POST", tacticalAnalysis: analysis, onComplete });
            }, 3500);

          } else if (outcome === "WIDE") {
            this.ball.targetX = isHome ? 105 : -5;
            this.ball.targetY = wideDirection === "RIGHT" ? 64 : (wideDirection === "LEFT" ? 36 : 50);
            this.ball.targetZ = wideDirection === "HIGH" ? 14 : 4;
            this.triggerAlert("DISPARO FUERA", `💨 Disparo desviado de ${shooter.name}`, attackingSide, 3000);
            const analysis = `💨 El remate de ${shooter.name} se marcha claramente fuera sin encontrar portería.`;

            setTimeout(() => {
              this.concludeHighlight({ outcome: "WIDE", tacticalAnalysis: analysis, onComplete });
            }, 3500);

          } else if (outcome === "SAVE") {
            this.stats.shotsOnTarget[attackingSide]++;
            this.ball.targetX = isHome ? 98 : 2;
            this.ball.targetY = targetCorner.includes("RIGHT") ? 54 : 46;
            this.ball.targetZ = 5;

            setTimeout(() => {
              this.triggerAlert("PARADÓN", `🧤 ¡Paradón providencial de ${goalkeeper.name} ante ${shooter.name}! ¡El balón sale a córner!`, isHome ? "away" : "home", 3200);
              const analysis = attackingSide === this.userSide
                ? `🧤 ¡Paradón de ${goalkeeper.name}! Estirada espectacular desviando el tiro a saque de esquina.`
                : `🧤 ¡Intervención salvadora de ${goalkeeper.name}! Tu portero voló para desviar el balón a córner.`;

              this.concludeHighlight({
                outcome: "SAVE",
                tacticalAnalysis: analysis,
                onComplete: () => {
                  // Tras la parada en jugada clave, el balón sale a córner y se permite sacar la jugada ensayada
                  if (!this.isFinished && !this.isHalfTime) {
                    this.triggerSetPiece(attackingSide, "CORNER");
                  } else if (onComplete) {
                    onComplete();
                  }
                }
              });
            }, 3500);

          } else {
            // ¡GOOOOL!
            this.stats.shotsOnTarget[attackingSide]++;
            if (isHome) {
              this.homeScore++;
              this.ball.targetX = 99.5;
              this.ball.targetY = targetCorner.includes("RIGHT") ? 54 : 46;
              this.ball.targetZ = targetCorner.includes("TOP") ? 9 : 2;
            } else {
              this.awayScore++;
              this.ball.targetX = 0.5;
              this.ball.targetY = targetCorner.includes("RIGHT") ? 54 : 46;
              this.ball.targetZ = targetCorner.includes("TOP") ? 9 : 2;
            }

            shooter.goals = (shooter.goals || 0) + 1;
            const event = {
              type: "GOAL",
              minute: this.minute,
              teamSide: attackingSide,
              teamId: atkTeam.id,
              teamName: atkTeam.shortName,
              playerName: shooter.name,
              currentScore: `${this.homeScore} - ${this.awayScore}`
            };
            this.events.push(event);

            this.triggerAlert("GOL", `⚽ ¡GOOOOOOLAZO DE ${shooter.name.toUpperCase()}! (${this.homeScore}-${this.awayScore})`, attackingSide, 4500);

            const analysis = attackingSide === this.userSide
              ? `🎯 ¡Golazo! Jugada construida a la perfección y definición inapelable de ${shooter.name}.`
              : `⚠️ Despiste en la marca: ${shooter.name} aprovechó el centro y fusiló la portería.`;

            setTimeout(() => {
              this.isHighlightRunning = false;
              this.speed = this.userSpeed;
              if (this.onHighlightEnd) {
                this.onHighlightEnd({
                  outcome: "GOAL",
                  tacticalAnalysis: analysis,
                  attackingSide,
                  shooter,
                  passer,
                  defender,
                  goalkeeper
                });
              }

              this.onGoal({
                shooter,
                passer,
                attackingSide,
                concedingSide: isHome ? "away" : "home",
                atkTeam,
                defTeam,
                minute: this.minute,
                formattedMinute: this.getFormattedMinute(),
                score: `${this.homeScore} - ${this.awayScore}`
              });
            }, 3500);
          }
        }, 3000);
      }, 4000);
    }, 4500);
  }

  concludeHighlight({ outcome, tacticalAnalysis, onComplete }) {
    this.isHighlightRunning = false;
    this.speed = this.userSpeed;

    if (this.onHighlightEnd) {
      this.onHighlightEnd({
        outcome,
        tacticalAnalysis
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

  // Generar punto y distancia real en metros de una falta con distribución aleatoria
  generateFreeKickSpot(attackingSide) {
    const isHome = attackingSide === "home";

    // Generar distancia al azar entre 17m y 60m:
    // ~35% faltas directas peligrosas al borde del área (17m - 25m)
    // ~35% faltas para centro / colgar al área (26m - 34m)
    // ~30% faltas lejanas en medio campo (35m - 60m)
    const roll = Math.random();
    let targetDist;
    if (roll < 0.35) {
      targetDist = 17 + Math.random() * 8.5; // 17m a 25.5m (muy peligrosas para tiro directo)
    } else if (roll < 0.70) {
      targetDist = 26 + Math.random() * 8.5; // 26m a 34.5m (peligrosas para centro al área)
    } else {
      targetDist = 35 + Math.random() * 25;  // 35m a 60m (faltas en la medular)
    }

    const maxAngle = Math.min(0.95, 28 / targetDist);
    const angle = (Math.random() * 2 - 1) * maxAngle;

    const dxMeters = targetDist * Math.cos(angle);
    const dyMeters = targetDist * Math.sin(angle);

    const pitchX = isHome ? (100 - dxMeters / 1.05) : (dxMeters / 1.05);
    const pitchY = 50 + (dyMeters / 0.68);

    const spotX = Math.max(8, Math.min(92, pitchX));
    const spotY = Math.max(14, Math.min(86, pitchY));

    const realDx = (isHome ? (100 - spotX) : spotX) * 1.05;
    const realDy = (50 - spotY) * 0.68;
    const distanceMeters = Math.round(Math.sqrt(realDx * realDx + realDy * realDy));

    return { spot: { x: spotX, y: spotY }, distanceMeters };
  }

  // Activar jugada a balón parado (Córner o Falta peligrosa)
  triggerSetPiece(attackingSide, type = "CORNER", customSpotData = null) {
    if (this.isFinished || this.isHalfTime || this.isHighlightRunning || this.isSetPieceRunning) return;

    const isHome = attackingSide === "home";
    const atkTeam = isHome ? this.homeTeam : this.awayTeam;
    const defTeam = isHome ? this.awayTeam : this.homeTeam;
    const atkPlayers = isHome ? this.homePlayersOnPitch : this.awayPlayersOnPitch;
    const defPlayers = isHome ? this.awayPlayersOnPitch : this.homePlayersOnPitch;

    let spotX, spotY, distanceMeters = null;
    if (type === "CORNER") {
      spotX = isHome ? 99.5 : 0.5;
      spotY = Math.random() < 0.5 ? 0.8 : 99.2;
    } else {
      const fkData = customSpotData || this.generateFreeKickSpot(attackingSide);
      spotX = fkData.spot.x;
      spotY = fkData.spot.y;
      distanceMeters = fkData.distanceMeters;

      // REQUISITO: Si la falta no es peligrosa (>34m), es falta lejana en la medular.
      // Se saca rápido sin interrumpir con la pizarra táctica de jugada ensayada.
      if (distanceMeters > 34) {
        this.ball.x = spotX;
        this.ball.y = spotY;
        this.ball.z = 0;
        this.ball.targetX = spotX;
        this.ball.targetY = spotY;
        this.ball.targetZ = 0;
        this.ball.possession = attackingSide;
        this.triggerAlert("FALTA", `⚠️ Falta a ${distanceMeters}m de portería cometida sobre ${atkTeam.shortName}. Saque rápido.`, attackingSide, 2600);
        return;
      }
    }

    this.isSetPieceRunning = true;

    const setPieceInfo = {
      type,
      attackingSide,
      atkTeam,
      defTeam,
      atkPlayers,
      defPlayers,
      spot: { x: spotX, y: spotY },
      distanceMeters,
      minute: this.minute
    };

    if (attackingSide === this.userSide) {
      // El usuario ataca a balón parado: pausar y abrir la pizarra táctica interactiva
      this.pause();
      this.onSetPiece(setPieceInfo);
    } else {
      // La IA rival ejecuta su jugada automáticamente en 3D
      const aiSetup = this.buildAISetPieceSetup(setPieceInfo);
      this.executeSetPiece(aiSetup, () => {
        this.isSetPieceRunning = false;
        if (!this.isFinished && !this.isHalfTime && this.isRunning) {
          this.loop();
        }
      });
    }
  }

  // Generar configuración automática para la IA rival en balón parado
  buildAISetPieceSetup(info) {
    const outfield = info.atkPlayers.filter(p => p.pos !== "POR");
    const sortedKickers = [...outfield].sort((a, b) => ((b.pas || 70) + (b.sho || 70)) - ((a.pas || 70) + (a.sho || 70)));
    const taker = sortedKickers[0] || outfield[0];

    const nonTakers = outfield.filter(p => p.id !== taker.id);
    let strategies;
    if (info.type === "FREE_KICK") {
      if (info.distanceMeters && info.distanceMeters <= 24) {
        strategies = ["DIRECT_SHOT", "DIRECT_SHOT", "NEAR_POST", "PENALTY_SPOT"];
      } else {
        strategies = ["PENALTY_SPOT", "FAR_POST", "NEAR_POST", "DIRECT_SHOT", "SHORT_PASS"];
      }
    } else {
      strategies = ["NEAR_POST", "PENALTY_SPOT", "FAR_POST", "SHORT_PASS"];
    }
    const targetStrategy = strategies[Math.floor(Math.random() * strategies.length)];

    const zones = ["NEAR_POST", "PENALTY_SPOT", "FAR_POST", "EDGE_BOX", "SHORT_OPTION", "STAY_BACK"];
    const placements = {};
    zones.forEach((z, idx) => {
      if (nonTakers[idx]) {
        placements[z] = nonTakers[idx];
      }
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

  // Ejecución física y cinemática 3D de la jugada a balón parado con Azar + Estadísticas
  executeSetPiece(setup, onDone) {
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

    // FASE 1: Colocar balón, lanzador y rematadores en el área
    this.ball.targetX = spot.x;
    this.ball.targetY = spot.y;
    this.ball.targetZ = 0;

    const kickerObj = (isHome ? this.home2D : this.away2D).find(p => p.player?.id === taker.id);
    if (kickerObj) {
      kickerObj.curX = spot.x + (isHome ? -1.8 : 1.8);
      kickerObj.curY = spot.y + (spot.y < 50 ? 1.5 : -1.5);
      kickerObj.targetX = kickerObj.curX;
      kickerObj.targetY = kickerObj.curY;
      kickerObj.facingX = isHome ? 1 : -1;
    }

    const zoneCoords = {
      NEAR_POST: { x: isHome ? 93 : 7, y: spot.y < 50 ? 44 : 56 },
      PENALTY_SPOT: { x: isHome ? 89 : 11, y: 50 },
      FAR_POST: { x: isHome ? 94 : 6, y: spot.y < 50 ? 56 : 44 },
      EDGE_BOX: { x: isHome ? 81 : 19, y: 50 },
      SHORT_OPTION: { x: isHome ? spot.x - 7 : spot.x + 7, y: spot.y < 50 ? 18 : 82 },
      STAY_BACK: { x: isHome ? 46 : 54, y: 50 }
    };

    Object.keys(placements || {}).forEach(zone => {
      const p = placements[zone];
      if (!p) return;
      const p2D = (isHome ? this.home2D : this.away2D).find(item => item.player?.id === p.id);
      const coord = zoneCoords[zone];
      if (p2D && coord) {
        p2D.curX = coord.x + (Math.random() * 2 - 1);
        p2D.curY = coord.y + (Math.random() * 2 - 1);
        p2D.targetX = p2D.curX;
        p2D.targetY = p2D.curY;
      }
    });

    // Colocar defensores marcando en el área y formando barrera si es falta
    const def2D = isHome ? this.away2D : this.home2D;
    def2D.forEach((dp, idx) => {
      if (dp.isKeeper) {
        dp.curX = isHome ? 99 : 1;
        dp.curY = 50;
        dp.targetX = dp.curX;
        dp.targetY = dp.curY;
      } else if (type === "FREE_KICK" && idx < 4) {
        const dirX = isHome ? 1 : -1;
        dp.curX = spot.x + dirX * 9.5;
        dp.curY = spot.y + (idx - 1.5) * 2.2;
        dp.targetX = dp.curX;
        dp.targetY = dp.curY;
      } else {
        dp.curX = (isHome ? 91 : 9) + (Math.random() * 4 - 2);
        dp.curY = 40 + Math.random() * 20;
        dp.targetX = dp.curX;
        dp.targetY = dp.curY;
      }
    });

    this.triggerAlert("BALÓN PARADO", `⚽ ${type === "CORNER" ? "Córner" : "Falta"} de ${atkTeam.shortName}`, attackingSide, 2600);

    // FASE 2: Lanzamiento del balón con parábola y cálculo de Azar + Atributos
    setTimeout(() => {
      const baseStat = targetStrategy === "DIRECT_SHOT" ? (taker.sho || 75) : (taker.pas || 75);
      const azarLanzamiento = (Math.random() * 44 - 22);
      const kickQuality = baseStat + azarLanzamiento;

      let destX, destY, destZ;
      if (targetStrategy === "DIRECT_SHOT") {
        destX = isHome ? 99 : 1;
        destY = Math.random() < 0.5 ? 46.5 : 53.5;
        destZ = 7 + Math.random() * 4;
      } else if (targetStrategy === "SHORT_PASS") {
        const shortCoord = zoneCoords.SHORT_OPTION || zoneCoords.EDGE_BOX;
        destX = shortCoord.x;
        destY = shortCoord.y;
        destZ = 0.5;
      } else {
        const zoneCoord = zoneCoords[targetStrategy] || zoneCoords.PENALTY_SPOT;
        destX = zoneCoord.x + (Math.random() * 3 - 1.5);
        destY = zoneCoord.y + (Math.random() * 3 - 1.5);
        destZ = 9 + Math.random() * 5;
      }

      this.ball.targetX = destX;
      this.ball.targetY = destY;
      this.ball.targetZ = destZ;

      // FASE 3: Remate, despeje, palo, parada o GOL
      setTimeout(() => {
        this.stats.shots[attackingSide]++;

        if (targetStrategy === "DIRECT_SHOT") {
          const isSave = kickQuality < 80;
          const isGoal = kickQuality >= 80 && Math.random() < 0.65;
          const isPost = !isGoal && kickQuality >= 72 && Math.random() < 0.5;

          if (isGoal) {
            this.handleSetPieceGoal(attackingSide, taker, null, "TIRO DIRECTO");
          } else if (isPost) {
            this.triggerAlert("AL PALO", `🥅 ¡Al palo el lanzamiento de ${taker.name}!`, attackingSide, 3000);
            this.finishSetPiecePlay("GOAL_KICK", attackingSide, onDone);
          } else if (isSave) {
            this.triggerAlert("PARADÓN", `🧤 ¡Paradón de ${goalkeeper.name}!`, isHome ? "away" : "home", 3000);
            this.finishSetPiecePlay("SAVE", attackingSide, onDone);
          } else {
            this.triggerAlert("FUERA", `⚠️ ¡El tiro de ${taker.name} se marcha alto!`, attackingSide, 2500);
            this.finishSetPiecePlay("GOAL_KICK", attackingSide, onDone);
          }
        } else {
          const targetPlayer = placements[targetStrategy] || placements["PENALTY_SPOT"] || placements["NEAR_POST"];

          if (!targetPlayer) {
            this.triggerAlert("DESPEJE", "🛡️ Despeje de la defensa", isHome ? "away" : "home", 2500);
            this.finishSetPiecePlay("DESPEJE", attackingSide, onDone);
            return;
          }

          const remateStat = (targetPlayer.sho || 75);
          const azarRemate = (Math.random() * 38 - 19);
          const remateScore = remateStat + azarRemate;

          const gkStat = (goalkeeper.ovr || 78);
          const azarGK = (Math.random() * 30 - 15);
          const gkScore = gkStat + azarGK;

          if (kickQuality < 56) {
            this.triggerAlert("DESPEJE", "🛡️ Despeje de la defensa", isHome ? "away" : "home", 2500);
            this.finishSetPiecePlay("DESPEJE", attackingSide, onDone);
          } else if (remateScore > gkScore + 5) {
            this.handleSetPieceGoal(attackingSide, targetPlayer, taker, "JUGADA ENSAYADA");
          } else if (remateScore > gkScore - 4) {
            if (Math.random() < 0.3) {
              this.triggerAlert("AL PALO", `🥅 ¡Al palo el cabezazo de ${targetPlayer.name}!`, attackingSide, 3000);
              this.finishSetPiecePlay("GOAL_KICK", attackingSide, onDone);
            } else {
              this.triggerAlert("PARADÓN", `🧤 ¡Paradón de ${goalkeeper.name}!`, isHome ? "away" : "home", 3000);
              this.finishSetPiecePlay("SAVE", attackingSide, onDone);
            }
          } else {
            this.triggerAlert("FUERA", `⚠️ ¡Remate desviado de ${targetPlayer.name}!`, attackingSide, 2500);
            this.finishSetPiecePlay("GOAL_KICK", attackingSide, onDone);
          }
        }
      }, 1400);
    }, 1500);
  }

  handleSetPieceGoal(attackingSide, scorer, assister, style) {
    const isHome = attackingSide === "home";
    const atkTeam = isHome ? this.homeTeam : this.awayTeam;
    const defTeam = isHome ? this.awayTeam : this.homeTeam;

    if (isHome) this.homeScore++;
    else this.awayScore++;

    scorer.goals = (scorer.goals || 0) + 1;

    this.ball.targetX = isHome ? 99.5 : 0.5;
    this.ball.targetY = 47 + Math.random() * 6;
    this.ball.targetZ = 5 + Math.random() * 4;

    const event = {
      type: "GOAL",
      minute: this.minute,
      teamSide: attackingSide,
      teamId: atkTeam.id,
      teamName: atkTeam.shortName,
      playerName: scorer.name,
      currentScore: `${this.homeScore} - ${this.awayScore}`
    };
    this.events.push(event);

    this.triggerAlert("GOL", `⚽ ¡GOOOOOOLAZO DE ${scorer.name.toUpperCase()}! (${this.homeScore}-${this.awayScore})`, attackingSide, 4500);

    this.isSetPieceRunning = false;
    this.speed = this.userSpeed;

    this.onGoal({
      shooter: scorer,
      passer: assister,
      attackingSide,
      concedingSide: isHome ? "away" : "home",
      atkTeam,
      defTeam,
      minute: this.minute,
      formattedMinute: this.getFormattedMinute(),
      score: `${this.homeScore} - ${this.awayScore}`
    });
  }

  finishSetPiecePlay(outcome = "GOAL_KICK", attackingSide = "home", onDone = null) {
    const isHome = attackingSide === "home";
    const defSide = isHome ? "away" : "home";
    const defTeam = isHome ? this.awayTeam : this.homeTeam;

    setTimeout(() => {
      // 1. Ejecutar saque de puerta reglamentario o posesión del equipo defensor
      if (outcome === "GOAL_KICK") {
        this.triggerAlert("SAQUE DE PUERTA", `🧤 Saque de puerta para ${defTeam.shortName}`, defSide, 2200);

        // Posicionar el balón en el área de meta para el saque de puerta
        const gkX = isHome ? 94 : 6;
        const gkY = 50;
        this.ball.x = gkX;
        this.ball.y = gkY;
        this.ball.z = 0;
        this.ball.targetX = gkX;
        this.ball.targetY = gkY;
        this.ball.targetZ = 0;
        this.ball.possession = defSide;

        // Posicionar al portero defensor junto al balón
        const def2D = isHome ? this.away2D : this.home2D;
        const gkItem = def2D.find(p => p.isKeeper) || def2D[0];
        if (gkItem) {
          gkItem.curX = gkX;
          gkItem.curY = gkY;
          gkItem.targetX = gkX;
          gkItem.targetY = gkY;
        }

        // El portero efectúa el saque de puerta por alto hacia el centro del campo
        setTimeout(() => {
          this.ball.targetX = isHome ? 54 - Math.random() * 12 : 46 + Math.random() * 12;
          this.ball.targetY = 32 + Math.random() * 36;
          this.ball.targetZ = 7 + Math.random() * 4;
          this.update2DPositions();
        }, 700);
      } else {
        // Despeje o parada: el equipo defensor se hace con la posesión y juega en corto
        this.ball.possession = defSide;
        this.ball.targetX = isHome ? 70 - Math.random() * 12 : 30 + Math.random() * 12;
        this.ball.targetY = 30 + Math.random() * 40;
        this.ball.targetZ = 0;
        this.update2DPositions();
      }

      // 2. Transición y reanudación automática de la simulación
      setTimeout(() => {
        this.isSetPieceRunning = false;
        this.speed = this.userSpeed;

        // Reposicionar a los 22 futbolistas a sus posiciones dinámicas de juego
        this.update2DPositions();

        // Comprobar descanso reglamentario
        if (this.minute >= this.halfTimeMinute && !this.halfTimeTriggered && !this.isSecondHalf) {
          this.halfTimeTriggered = true;
          this.isHalfTime = true;
          this.pause();
          this.onHalfTime(this.getState());
          return;
        }

        // Comprobar final de partido
        if (this.minute >= this.maxMinutes) {
          this.finish();
          return;
        }

        if (onDone) onDone();

        // Reanudar la simulación activa para que el partido continúe con total fluidez
        if (!this.isFinished && !this.isHalfTime) {
          this.isRunning = true;
          this.loop();
        }
      }, outcome === "GOAL_KICK" ? 1600 : 1100);
    }, 1000);
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
      p.facingX = 1;
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
      p.facingX = -1;
    });
  }

  getPlayerRole(player, side = null) {
    if (!player) return null;
    const playerSide = side || (this.homePlayersOnPitch.some(p => p.id === player.id) ? "home" : "away");
    const rolesMap = playerSide === "home" ? this.homePlayerRoles : this.awayPlayerRoles;
    const roleId = rolesMap ? rolesMap[player.id] : null;
    return getRoleDetails(player.pos, roleId);
  }

  pickPlayerForAction(players, preferredPositions, actionType = "pass") {
    let candidates = players.filter(p => preferredPositions.includes(p.pos));
    if (candidates.length === 0) candidates = [...players];

    // Ponderar candidatos según su rol táctico y atributos
    const weights = candidates.map(p => {
      const role = this.getPlayerRole(p);
      if (actionType === "pass") {
        const roleWeight = role?.passWeight !== undefined ? role.passWeight : 0.6;
        return roleWeight * ((p.pas || 70) / 70);
      } else if (actionType === "shoot") {
        const roleWeight = role?.shootWeight !== undefined ? role.shootWeight : 0.6;
        return roleWeight * ((p.sho || 70) / 70);
      }
      return 1;
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
      let power = 75;
      if (type === "atk") {
        power = (p.sho * 0.4 + p.dri * 0.3 + p.pac * 0.3) * (0.6 + p.energy / 250);
        if (role && role.atkMod) power *= (1 + role.atkMod);
        // Si el jugador está adelantado manualmente hacia la portería rival (avance ofensivo)
        if (item2D) {
          const advX = isHome ? item2D.baseX : (100 - item2D.baseX);
          if (advX > 55) power *= 1.10;
        }
      } else if (type === "mid") {
        power = (p.pas * 0.4 + p.dri * 0.3 + p.def * 0.3) * (0.6 + p.energy / 250);
        if (role && role.midMod) power *= role.midMod;
        // Si el jugador está centrado hacia la medular (amplitud interior)
        if (item2D && item2D.baseY >= 35 && item2D.baseY <= 65) power *= 1.08;
      } else if (type === "def") {
        power = (p.def * 0.5 + p.phy * 0.3 + p.pac * 0.2) * (0.6 + p.energy / 250);
        if (role && role.defMod) power *= role.defMod;
        // Si el jugador está retrasado hacia campo propio (refuerzo defensivo)
        if (item2D) {
          const advX = isHome ? item2D.baseX : (100 - item2D.baseX);
          if (advX < 45) power *= 1.10;
        }
      }
      sum += power;
    });
    return sum / players.length;
  }

  update2DPositions() {
    // Los jugadores fijan sus coordenadas objetivo siguiendo dinámicamente la jugada, el balón y su función táctica (subir, desdoblar, etc.)
    const ballX = this.ball.targetX;
    const ballY = this.ball.targetY;

    // Modificadores tácticos del equipo local (Línea defensiva, anchura y presión)
    const homeDefLine = this.homeInstructions?.outOfPossession?.defensiveLine || "mid";
    const homeLineShiftX = homeDefLine === "high" ? 8 : (homeDefLine === "low" ? -7 : 0);
    const homePressing = this.homeInstructions?.outOfPossession?.pressing || "mid";
    const homePressShiftX = (this.ball.possession === "away" && homePressing === "high") ? 5 : 0;
    const homeWidth = this.homeInstructions?.inPossession?.width || "balanced";

    this.home2D.forEach((p, idx) => {
      const playerObj = this.homePlayersOnPitch[idx];
      const role = this.getPlayerRole(playerObj, "home");
      const pushMod = role?.pushMod || 0; // ej: +14 para Carrilero Ofensivo, +6 Central con Salida
      const isDef = playerObj.pos === "DFC" || playerObj.pos === "LI" || playerObj.pos === "LD";
      const isWing = playerObj.pos === "LI" || playerObj.pos === "LD" || playerObj.pos === "EI" || playerObj.pos === "ED";

      const lineXMod = isDef ? homeLineShiftX : (homeLineShiftX * 0.5);
      const shiftX = (ballX - 50) * 0.35 + (pushMod * 0.35) + lineXMod + homePressShiftX;

      let shiftY = (ballY - 50) * 0.25;
      if (this.ball.possession === "home" && isWing) {
        if (homeWidth === "wide") shiftY += (p.baseY < 50 ? -8 : 8);
        else if (homeWidth === "center") shiftY += (p.baseY < 50 ? 6 : -6);
      }

      p.targetX = Math.max(3, Math.min(95, p.baseX + shiftX + (Math.random() * 4 - 2)));
      p.targetY = Math.max(8, Math.min(92, p.baseY + shiftY + (Math.random() * 4 - 2)));
    });

    // Modificadores tácticos del equipo visitante (Línea defensiva, anchura y presión)
    const awayDefLine = this.awayInstructions?.outOfPossession?.defensiveLine || "mid";
    const awayLineShiftX = awayDefLine === "high" ? -8 : (awayDefLine === "low" ? 7 : 0);
    const awayPressing = this.awayInstructions?.outOfPossession?.pressing || "mid";
    const awayPressShiftX = (this.ball.possession === "home" && awayPressing === "high") ? -5 : 0;
    const awayWidth = this.awayInstructions?.inPossession?.width || "balanced";

    this.away2D.forEach((p, idx) => {
      const playerObj = this.awayPlayersOnPitch[idx];
      const role = this.getPlayerRole(playerObj, "away");
      const pushMod = role?.pushMod || 0;
      const isDef = playerObj.pos === "DFC" || playerObj.pos === "LI" || playerObj.pos === "LD";
      const isWing = playerObj.pos === "LI" || playerObj.pos === "LD" || playerObj.pos === "EI" || playerObj.pos === "ED";

      const lineXMod = isDef ? awayLineShiftX : (awayLineShiftX * 0.5);
      const shiftX = (ballX - 50) * 0.35 - (pushMod * 0.35) + lineXMod + awayPressShiftX;

      let shiftY = (ballY - 50) * 0.25;
      if (this.ball.possession === "away" && isWing) {
        if (awayWidth === "wide") shiftY += (p.baseY < 50 ? -8 : 8);
        else if (awayWidth === "center") shiftY += (p.baseY < 50 ? 6 : -6);
      }

      p.targetX = Math.max(5, Math.min(97, p.baseX + shiftX + (Math.random() * 4 - 2)));
      p.targetY = Math.max(8, Math.min(92, p.baseY + shiftY + (Math.random() * 4 - 2)));
    });
  }

  // Formato televisivo oficial del minuto con descuento (ej: 45+2', 90+4')
  getFormattedMinute() {
    if (!this.isSecondHalf && !this.halfTimeTriggered) {
      if (this.minute > 45) {
        return `45+${this.minute - 45}'`;
      }
      return `${this.minute}'`;
    } else {
      if (this.minute > 90) {
        return `90+${this.minute - 90}'`;
      }
      return `${this.minute}'`;
    }
  }

  // Reanudar el partido tras la pausa del descanso
  resumeSecondHalf() {
    this.isHalfTime = false;
    this.halfTimeTriggered = true;
    this.isSecondHalf = true;
    this.minute = 45; // El reloj de la 2ª parte comienza reglamentariamente en el minuto 45
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

  // Saltar instantáneamente al final del partido
  skipToEnd() {
    this.halfTimeTriggered = true;
    this.isHalfTime = false;
    this.isSecondHalf = true;
    this.isHighlightRunning = false;
    this.isSetPieceRunning = false;
    while (this.minute < this.maxMinutes) {
      this.stepMinute();
    }
    this.finish();
  }

  finish() {
    this.minute = this.maxMinutes;
    this.isRunning = false;
    this.isFinished = true;
    this.onFinish(this.getResult());
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
      isRunning: this.isRunning,
      isHalfTime: this.isHalfTime,
      isSecondHalf: this.isSecondHalf,
      isFinished: this.isFinished
    };
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
      homePlayers: [...this.homePlayersOnPitch, ...this.homeBench],
      awayPlayers: [...this.awayPlayersOnPitch, ...this.awayBench]
    };
  }
}

// =========================================================
// ARCHIVO: js\ui\teamSelectView.js
// =========================================================

// Vista de Selección de Equipo de LaLiga
function renderTeamSelect(container, teams, onSelectTeam) {
  let selectedIndex = 0;

  function update() {
    const team = teams[selectedIndex];
    const topPlayers = [...team.players].sort((a, b) => b.ovr - a.ovr).slice(0, 4);

    container.innerHTML = `
      <div class="min-h-screen bg-slate-950 text-white flex flex-col justify-between p-4 max-w-md mx-auto select-none">
        <!-- Encabezado -->
        <header class="text-center pt-2 pb-4">
          <div class="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-xs font-semibold mb-2">
            <span>⚽</span> TEMPORADA 2026 / 2027 (FC 27)
          </div>
          <h1 class="text-2xl font-black tracking-tight text-white">ENTRENATE TE TE</h1>
          <p class="text-xs text-slate-400 mt-1">Elige tu club para iniciar la temporada hacia el título</p>
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
                    <div class="text-[10px] text-slate-400 hidden sm:block">RIT ${p.pac} | TIR ${p.sho} | PAS ${p.pas}</div>
                    <span class="font-black text-amber-400 text-xs">${p.ovr}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;

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
function renderTacticsView(container, gameState, onSaveTactics) {
  const team = gameState.teams.find(t => t.id === gameState.userTeamId);
  let tactics = gameState.userTactics || {
    formation: team.defaultFormation || "4-3-3",
    mentality: "balanced",
    lineup: team.players.slice(0, 11).map(p => p.id),
    bench: team.players.slice(11).map(p => p.id),
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
            <div class="w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs shadow" style="background: linear-gradient(135deg, ${team.primaryColor}, ${team.secondaryColor}); color: ${team.textColor};">
              ${team.shortName}
            </div>
            <div>
              <h2 class="text-sm font-bold leading-tight">Pizarra Táctica</h2>
              <span class="text-[10px] text-slate-400">Media del 11: <b class="text-amber-400">${averages.overall}</b> (DEL ${averages.attack} | MED ${averages.midfield} | DEF ${averages.defense})</span>
            </div>
          </div>
          <button id="btn-auto-align" class="text-xs bg-slate-800 hover:bg-slate-700 text-sky-400 px-2.5 py-1.5 rounded-lg border border-slate-700 font-semibold active:scale-95 transition">
            ⚡ Auto 11
          </button>
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
            <div id="tactics-pitch-container" class="relative w-full max-w-sm mx-auto aspect-[3/4] bg-gradient-to-b from-emerald-800 via-emerald-700 to-emerald-900 rounded-2xl border-2 border-emerald-500/40 shadow-inner overflow-hidden p-2 select-none touch-none">
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
                  <div class="slot-player absolute -translate-x-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing flex flex-col items-center transition-transform active:scale-95 z-10 touch-none"
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
                    <button id="btn-close-role-box" class="text-slate-400 hover:text-white text-xs px-2 py-0.5 rounded bg-slate-800">✕</button>
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

    // Arrastre libre con el dedo o ratón directamente en la pizarra
    const pitchBox = container.querySelector("#tactics-pitch-container");
    if (pitchBox) {
      container.querySelectorAll(".slot-player").forEach(slotEl => {
        const slotIdx = parseInt(slotEl.dataset.slotIndex, 10);
        const pId = slotEl.dataset.playerId;

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
              slotEl.style.left = `${nx}%`;
              slotEl.style.top = `${ny}%`;
              slotEl.dataset.dragX = nx;
              slotEl.dataset.dragY = ny;
            }
          };

          const onPointerUp = () => {
            window.removeEventListener("pointermove", onPointerMove);
            window.removeEventListener("pointerup", onPointerUp);
            if (dragMoved) {
              const finalX = parseFloat(slotEl.dataset.dragX);
              const finalY = parseFloat(slotEl.dataset.dragY);
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

        slotEl.addEventListener("pointerdown", onPointerDown);
      });
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
      tactics.lineup[inLineup1] = tappedId;
      tactics.bench[inBench2] = selectedPlayerId;
    } else if (inBench1 !== -1 && inLineup2 !== -1) {
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
      let best = availablePlayers.find(p => !used.has(p.id) && p.pos === slot.pos);
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
function renderSquadView(container, gameState) {
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

// =========================================================
// ARCHIVO: js\ui\standingsView.js
// =========================================================

// Vista de la Clasificación Completa de LaLiga y Tabla del Pichichi
function renderStandingsView(container, gameState) {
  let activeTab = "TABLE"; // "TABLE" o "PICHICHI"

  function render() {
    const standings = gameState.standings;
    const topScorers = Object.entries(gameState.topScorers || {})
      .map(([name, goals]) => ({ name, goals }))
      .sort((a, b) => b.goals - a.goals)
      .slice(0, 15);

    container.innerHTML = `
      <div class="min-h-screen bg-slate-950 text-white flex flex-col pb-20 select-none">
        <!-- Header -->
        <header class="bg-slate-900 border-b border-slate-800 px-4 py-3 sticky top-0 z-20 flex items-center justify-between">
          <div>
            <h2 class="text-sm font-bold">LaLiga EA Sports</h2>
            <p class="text-[10px] text-slate-400">Jornada ${gameState.currentRound} de 38</p>
          </div>
          <!-- Selector de Pestañas -->
          <div class="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-bold">
            <button id="tab-table" class="px-3 py-1 rounded-lg transition ${activeTab === 'TABLE' ? 'bg-sky-500 text-white shadow' : 'text-slate-400'}">
              Tabla
            </button>
            <button id="tab-pichichi" class="px-3 py-1 rounded-lg transition ${activeTab === 'PICHICHI' ? 'bg-sky-500 text-white shadow' : 'text-slate-400'}">
              Pichichi
            </button>
          </div>
        </header>

        <!-- Contenido -->
        <div class="p-2 flex-1 overflow-y-auto">
          ${activeTab === "TABLE" ? renderTable(standings) : renderPichichi(topScorers)}
        </div>
      </div>
    `;

    container.querySelector("#tab-table").onclick = () => {
      activeTab = "TABLE";
      render();
    };

    container.querySelector("#tab-pichichi").onclick = () => {
      activeTab = "PICHICHI";
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
              <div class="flex items-center gap-2.5">
                <span class="w-6 font-mono font-bold text-center ${idx === 0 ? 'text-amber-400 text-sm' : idx === 1 ? 'text-slate-300' : idx === 2 ? 'text-amber-600' : 'text-slate-500'}">
                  ${idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : idx + 1}
                </span>
                <span class="font-bold text-white">${s.name}</span>
              </div>
              <div class="flex items-center gap-1.5">
                <span class="font-mono font-black text-amber-400 text-sm">${s.goals}</span>
                <span class="text-[10px] text-slate-400">goles</span>
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

  let preMatchTab = "USER"; // "USER" o "OPPONENT"
  let preMatchSubTab = "PITCH"; // "PITCH" o "STYLE"
  let selectedPreMatchPlayerId = null;
  let preMatchSaveFeedback = null;
  let masterTacticsForNextMatches = null;
  let showPreMatchAllRoles = false;

  function getOpponentLineup(oppTeam) {
    const formationKey = oppTeam.defaultFormation || "4-3-3";
    const formation = FORMATIONS[formationKey] || FORMATIONS["4-3-3"];
    // El rival también gestiona la energía y descarta futbolistas que estén en el parte médico o sancionados
    const getMatchFitness = p => (p.ovr || 70) * (0.6 + ((p.energy !== undefined ? p.energy : 100) / 250));
    const allPlayers = [...oppTeam.players].filter(p => !p.injury && !p.suspension).sort((a, b) => getMatchFitness(b) - getMatchFitness(a));
    const used = new Set();
    const lineup = [];

    const gk = allPlayers.find(p => p.pos === "POR") || allPlayers[0];
    if (gk) {
      lineup[0] = gk;
      used.add(gk.id);
    }

    formation.slots.forEach((slot, idx) => {
      if (idx === 0) return;
      let best = allPlayers.find(p => !used.has(p.id) && p.pos === slot.pos);
      if (!best) {
        best = allPlayers.find(p => !used.has(p.id) && p.pos !== "POR");
      }
      if (!best) {
        best = allPlayers.find(p => !used.has(p.id));
      }
      if (best) {
        lineup[idx] = best;
        used.add(best.id);
      }
    });

    const bench = allPlayers.filter(p => !used.has(p.id));
    return { formationKey, formation, lineup, bench };
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
              <button id="btn-pre-auto" class="text-xs bg-slate-800 hover:bg-slate-700 text-sky-400 px-2 py-1 rounded-lg border border-slate-700 font-bold active:scale-95 transition">
                ⚡ Auto 11
              </button>
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
              <div class="text-[10px] text-slate-400">${isUserHome ? 'Local' : 'Visitante'} · Media <b class="text-amber-400">${averages.overall}</b></div>
            </div>
          </div>
          <span class="font-mono font-bold text-slate-500 bg-slate-950 px-2 py-0.5 rounded-full border border-slate-800">VS</span>
          <div id="btn-matchup-rival" class="flex items-center gap-2 text-right cursor-pointer p-1 rounded-xl transition ${preMatchTab === 'OPPONENT' ? 'ring-2 ring-amber-500/80 bg-amber-500/10' : 'hover:bg-slate-800/50'}">
            <div>
              <div class="font-black text-white text-xs">${opponentTeam.name}</div>
              <div class="text-[10px] text-slate-400">Rival · Media <b class="text-amber-400">${oppAverages.overall}</b></div>
            </div>
            <div class="w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs shadow" style="background: linear-gradient(135deg, ${opponentTeam.primaryColor}, ${opponentTeam.secondaryColor}); color: ${opponentTeam.textColor};">
              ${opponentTeam.shortName}
            </div>
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
            <div class="relative w-full aspect-[3/4] max-w-[340px] mx-auto bg-gradient-to-b from-emerald-800 via-emerald-700 to-emerald-900 rounded-2xl border-2 border-emerald-500/40 shadow-inner overflow-hidden p-2">
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
                  <div class="slot-pre-player absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer flex flex-col items-center transition-transform active:scale-95 z-10"
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
                    <button id="btn-pre-close-role-box" class="text-slate-400 hover:text-white text-xs px-2 py-0.5 rounded bg-slate-800">✕</button>
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

    container.querySelectorAll(".slot-pre-player, .bench-pre-card").forEach(el => {
      el.onclick = () => {
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

    const btnSaveTactics = container.querySelector("#btn-pre-save-tactics");
    if (btnSaveTactics) {
      btnSaveTactics.onclick = () => {
        masterTacticsForNextMatches = JSON.parse(JSON.stringify(gameState.userTactics));
        SaveManager.saveGame(gameState);
        preMatchSaveFeedback = `¡Plantilla (${tactics.formation}), alineación y funciones guardadas para futuros partidos!`;
        renderPreMatch();
      };
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
      tactics.lineup[inLineup1] = tappedId;
      tactics.bench[inBench2] = selectedPreMatchPlayerId;
    } else if (inBench1 !== -1 && inLineup2 !== -1) {
      const benchP = userTeam.players.find(p => p.id === selectedPreMatchPlayerId);
      if (benchP && benchP.injury) {
        alert(`⚠️ ${benchP.name} está lesionado (${benchP.injury.type}) y no puede entrar como titular.`);
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

    const simulator = new MatchSimulator(homeTeam, awayTeam, {
      speed: 1, // Ritmo fluido Football Manager por defecto
      userSide: isUserHome ? "home" : "away",
      homeFormation: isUserHome ? gameState.userTactics.formation : oppLineupData.formationKey,
      awayFormation: !isUserHome ? gameState.userTactics.formation : oppLineupData.formationKey,
      homeMentality: isUserHome ? gameState.userTactics.mentality : "balanced",
      awayMentality: !isUserHome ? gameState.userTactics.mentality : "balanced",
      homePlayerRoles: isUserHome ? (gameState.userTactics.playerRoles || {}) : {},
      awayPlayerRoles: !isUserHome ? (gameState.userTactics.playerRoles || {}) : {},
      homeCustomPositions: isUserHome ? (gameState.userTactics.customPositions || {}) : {},
      awayCustomPositions: !isUserHome ? (gameState.userTactics.customPositions || {}) : {},
      homeInstructions: isUserHome ? gameState.userTactics.instructions : oppInstructions,
      awayInstructions: !isUserHome ? gameState.userTactics.instructions : oppInstructions,
      onTick: updateMatchUI,
      onAlert: showMatchAlert,
      onGoal: (goalData) => handleGoalSequence(goalData),
      onHalfTime: (htState) => handleHalfTimeSequence(htState),
      onSubstitution: (subData) => handleSubstitutionChyron(subData),
      onHighlightStart: (hlData) => handleHighlightStart(hlData),
      onHighlightPhase: (phaseData) => handleHighlightPhase(phaseData),
      onHighlightEnd: (endData) => handleHighlightEnd(endData),
      onSetPiece: (spInfo) => openSetPieceModal(spInfo),
      onInjury: (injData) => handleInjurySequence(injData),
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
            <span>🏆 JORNADA ${gameState.currentRound} / 38</span>
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
              <div class="w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm shadow border border-slate-700/60" style="background: linear-gradient(135deg, ${awayTeam.primaryColor}, ${awayTeam.secondaryColor}); color: ${awayTeam.textColor};">
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

          <div class="relative w-full aspect-[16/10] sm:aspect-[16/9] min-h-[300px] sm:min-h-[390px] bg-slate-950 rounded-2xl border-2 border-slate-800 shadow-2xl overflow-hidden">
            <!-- Canvas 3D -->
            <canvas id="match-canvas" class="w-full h-full block cursor-pointer" title="Toca para cambiar de cámara"></canvas>

            <!-- Badge de Vista 2D para simulación normal -->
            <div class="absolute top-2 right-2 flex items-center bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-700/80 z-20 text-[9px] font-bold shadow-lg text-emerald-400">
              <span>⚽ Simulación 2D</span>
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
                <span id="hl-hud-title" class="text-[9.5px] font-black uppercase text-amber-400 tracking-wider font-mono">🎥 ENFOQUE DE ACCIÓN · JUGADA CLAVE</span>
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
                <span class="w-2.5 h-2.5 rounded-full inline-block" style="background-color: ${awayTeam.primaryColor};"></span>
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
                <div id="bar-poss-a" class="h-full transition-all duration-300" style="width: 50%; background-color: ${awayTeam.primaryColor};"></div>
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
              <div class="w-11 h-11 rounded-xl flex items-center justify-center font-black text-sm shadow border border-slate-700" style="background: linear-gradient(135deg, ${awayTeam.primaryColor}, ${awayTeam.secondaryColor}); color: ${awayTeam.textColor};">
                ${awayTeam.shortName}
              </div>
            </div>

            <!-- Resumen Estadístico del 1er Tiempo -->
            <div class="bg-slate-950/70 rounded-2xl p-3 border border-slate-800 text-xs my-3 space-y-2">
              <div>
                <div class="flex justify-between text-[10px] font-bold text-slate-400 mb-1">
                  <span><span id="ht-stat-poss-h">50</span>% Posesión</span>
                  <span><span id="ht-stat-poss-a">50</span>%</span>
                </div>
                <div class="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden flex">
                  <div id="ht-bar-poss-h" class="h-full" style="width: 50%; background-color: ${homeTeam.primaryColor};"></div>
                  <div id="ht-bar-poss-a" class="h-full" style="width: 50%; background-color: ${awayTeam.primaryColor};"></div>
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
            </div>

            <div class="space-y-2 mt-4">
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
                <div class="relative w-full aspect-[3/4] max-w-[340px] mx-auto bg-gradient-to-b from-emerald-800 via-emerald-700 to-emerald-900 rounded-2xl border-2 border-emerald-500/40 shadow-inner overflow-hidden p-2">
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
        <div id="modal-match-end" class="fixed inset-0 bg-black/90 backdrop-blur-md z-50 hidden flex flex-col justify-center p-4">
          <div class="bg-slate-900 border border-slate-700 rounded-3xl p-5 max-w-sm mx-auto w-full shadow-2xl text-center">
            <span class="text-xs uppercase font-extrabold tracking-widest text-slate-400">FINAL DEL PARTIDO</span>
            <div class="my-3 flex items-center justify-center gap-4">
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
            <div class="my-3 py-2 border-y border-slate-800 text-left text-xs max-h-28 overflow-y-auto" id="final-scorers-list"></div>
            <div class="my-3 text-left">
              <div class="text-[10px] uppercase font-bold text-slate-400 mb-1">Otros partidos de la Jornada ${gameState.currentRound}:</div>
              <div class="space-y-1 text-[11px] max-h-32 overflow-y-auto bg-slate-950/60 p-2 rounded-xl border border-slate-800" id="other-results-list"></div>
            </div>
            <button id="btn-finish-match-continue" class="w-full py-3.5 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 text-white font-extrabold text-sm rounded-xl shadow-lg active:scale-98 transition">
              CONTINUAR AL HUB ➔
            </button>
          </div>
        </div>
      </div>
    `;

    // Canvas Setup
    const canvas = container.querySelector("#match-canvas");
    const ctx = canvas ? canvas.getContext("2d") : null;

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
    resizeCanvas();

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
      const hPrimary = homeTeam.primaryColor || "#ffffff";
      const hSecondary = homeTeam.secondaryColor || "#1e293b";
      let aPrimary = awayTeam.primaryColor || "#000000";
      let aSecondary = awayTeam.secondaryColor || "#ffffff";

      if (hPrimary.toLowerCase() === aPrimary.toLowerCase()) {
        aPrimary = awayTeam.secondaryColor || "#f59e0b";
      }

      return {
        home: {
          jersey: hPrimary,
          shorts: hSecondary,
          socks: hPrimary,
          collar: hSecondary,
          keeper: "#10b981", // Verde neón
          number: homeTeam.textColor || "#ffffff"
        },
        away: {
          jersey: aPrimary,
          shorts: aSecondary,
          socks: aPrimary,
          collar: aSecondary,
          keeper: "#f59e0b", // Ámbar neón
          number: awayTeam.textColor || "#ffffff"
        }
      };
    }

    const kits = getKitColors();

    // Proyección de coordenadas 3D a pantalla con perspectiva isométrica de retransmisión televisiva Football Manager (Exacta al pantallazo)
    function toScreen3D(pitchX, pitchY, pitchZ = 0, w, h) {
      let groundX, groundY, scale;
      const baseResScale = Math.min(w / 460, h / 290);

      if (cameraMode === "tactical") {
        // Vista Táctica Elevada (Cámara panorámica para observar colocación táctica del bloque)
        const camOffset = (cameraPitchX - 50) * 0.16;
        const relX = pitchX - camOffset;
        const nx = relX / 100;
        const ny = Math.max(-8, Math.min(108, pitchY)) / 100;

        const topY = h * 0.14;
        const botY = h * 0.94;
        groundY = topY + ny * (botY - topY);

        const topXMin = w * 0.08;
        const topXMax = w * 0.92;
        const botXMin = w * 0.02;
        const botXMax = w * 0.98;

        const leftX = topXMin + ny * (botXMin - topXMin);
        const rightX = topXMax + ny * (botXMax - topXMax);
        groundX = leftX + nx * (rightX - leftX);

        scale = (0.68 + ny * 0.44) * baseResScale;
      } else if (cameraMode === "goal") {
        // Vista Tras Portería (Cámara cinemática de gol detrás de la red)
        const camOffset = (cameraPitchX - 50) * 0.46;
        const relX = pitchX - camOffset;
        const nx = relX / 100;
        const ny = Math.max(-12, Math.min(112, pitchY)) / 100;

        const topY = h * 0.18;
        const botY = h * 0.88;
        groundY = topY + ny * (botY - topY);

        const topXMin = w * 0.14;
        const topXMax = w * 0.86;
        const botXMin = w * 0.01;
        const botXMax = w * 0.99;

        const leftX = topXMin + ny * (botXMin - topXMin);
        const rightX = topXMax + ny * (botXMax - topXMax);
        groundX = leftX + nx * (rightX - leftX);

        scale = (0.75 + ny * 0.58) * baseResScale;
      } else if (cameraMode === "action") {
        // Vista de Acción FM (Primer plano cinemático con inclinación diagonal e inmersión)
        const zoom = Math.max(1.20, Math.min(1.65, cameraZoom));
        const tiltAngle = ((cameraPitchX - 50) / 50) * 0.20; // Giro diagonal
        const cosT = Math.cos(tiltAngle);
        const sinT = Math.sin(tiltAngle);

        const dx = (pitchX - cameraPitchX);
        const dy = (pitchY - 50);

        const rx = dx * cosT - dy * sinT;
        const ry = dx * sinT + dy * cosT;

        const normY = Math.max(-0.2, Math.min(1.2, (ry + 50) / 100));
        const depthFactor = 0.74 + normY * 0.52;

        const midX = w * 0.50;
        const midY = h * 0.53;
        const spanX = w * 0.96 * zoom;
        const spanY = h * 0.74 * zoom;

        groundX = midX + (rx / 50) * (spanX * 0.5) * depthFactor;
        groundY = midY + (ry / 50) * (spanY * 0.5);

        scale = depthFactor * baseResScale * zoom;
      } else {
        // "broadcast" - Vista lateral clásica de retransmisión televisiva (como estaba)
        const zoom = Math.max(0.95, Math.min(1.25, cameraZoom));
        const camOffsetX = (cameraPitchX - 50) * 0.38;
        const camOffsetY = (cameraPitchY - 50) * 0.18;

        const relX = pitchX - camOffsetX;
        const relY = pitchY - camOffsetY;

        const nx = relX / 100;
        const ny = Math.max(-10, Math.min(110, relY)) / 100;

        const baseTopY = h * 0.20;
        const baseBotY = h * 0.88;
        const midY = (baseTopY + baseBotY) / 2;
        const topY = midY - (midY - baseTopY) * zoom;
        const botY = midY + (baseBotY - midY) * zoom;

        groundY = topY + ny * (botY - topY);

        const midX = w / 2;
        const baseTopSpan = w * 0.78 * zoom;
        const baseBotSpan = w * 0.94 * zoom;

        const leftX = (midX - baseTopSpan / 2) + ny * ((midX - baseBotSpan / 2) - (midX - baseTopSpan / 2));
        const rightX = (midX + baseTopSpan / 2) + ny * ((midX + baseBotSpan / 2) - (midX + baseTopSpan / 2));
        groundX = leftX + nx * (rightX - leftX);

        scale = (0.74 + ny * 0.54) * baseResScale * zoom;
      }

      // Elevación vertical 3D (eje Z para balones aéreos y saltos de cabeza)
      const screenX = groundX;
      const screenY = groundY - (pitchZ * scale * 2.3);

      return { groundX, groundY, screenX, screenY, scale };
    }

    // Sistema de 4 sombras suaves de proyectores en esquinas del estadio (Sello característico Football Manager)
    function drawStadiumShadows(ctx, groundX, groundY, scale, heightZ = 0, radius = 6.0) {
      const zOffset = Math.min(heightZ, 25);
      const expand = 1 + zOffset * 0.08;
      const fade = Math.max(0.04, 0.22 - zOffset * 0.007);

      const rX = radius * scale * expand;
      const rY = (radius * 0.44) * scale * expand;

      // Desplazamientos proyectados por los 4 focos del estadio
      const dist = (6.5 + zOffset * 0.65) * scale;
      const shadows = [
        { dx: dist * 0.85, dy: dist * 0.42 },   // Foco Noroeste (hacia Sureste)
        { dx: -dist * 0.85, dy: dist * 0.42 },  // Foco Noreste (hacia Suroeste)
        { dx: dist * 0.65, dy: -dist * 0.32 },  // Foco Suroeste (hacia Noreste)
        { dx: -dist * 0.65, dy: -dist * 0.32 }  // Foco Sureste (hacia Noroeste)
      ];

      ctx.fillStyle = `rgba(0, 0, 0, ${fade})`;
      shadows.forEach(s => {
        ctx.beginPath();
        ctx.ellipse(groundX + s.dx, groundY + s.dy, rX, rY, 0, 0, Math.PI * 2);
        ctx.fill();
      });

      // Sombra central densa de oclusión ambiental bajo los pies/balón
      const aoFade = Math.max(0.05, 0.55 - zOffset * 0.025);
      ctx.fillStyle = `rgba(0, 0, 0, ${aoFade})`;
      ctx.beginPath();
      ctx.ellipse(groundX, groundY, (radius * 0.8) * scale, (radius * 0.35) * scale, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    function draw3DBox(ctx, x1, y1, x2, y2, w, h) {
      const p1 = toScreen3D(x1, y1, 0, w, h);
      const p2 = toScreen3D(x2, y1, 0, w, h);
      const p3 = toScreen3D(x2, y2, 0, w, h);
      const p4 = toScreen3D(x1, y2, 0, w, h);

      ctx.beginPath();
      ctx.moveTo(p1.groundX, p1.groundY);
      ctx.lineTo(p2.groundX, p2.groundY);
      ctx.lineTo(p3.groundX, p3.groundY);
      ctx.lineTo(p4.groundX, p4.groundY);
      ctx.closePath();
      ctx.stroke();
    }

    // Portería 3D realista con postes cilíndricos, larguero, tensión de red física y deformación por gol
    function draw3DGoal(ctx, x, y1, y2, dir, w, h) {
      const gPost1 = toScreen3D(x, y1, 0, w, h);
      const gPost2 = toScreen3D(x, y2, 0, w, h);
      const gTop1 = toScreen3D(x, y1, 10.5, w, h);
      const gTop2 = toScreen3D(x, y2, 10.5, w, h);

      const ripple = dir === -1 ? netRippleH : netRippleA;
      const rippleBack = ripple * 2.8;

      const netBackX = x - dir * (4.2 + rippleBack);
      const tNet1 = toScreen3D(netBackX, y1, 8.5, w, h);
      const tNet2 = toScreen3D(netBackX, y2, 8.5, w, h);
      const bNet1 = toScreen3D(netBackX, y1, 0, w, h);
      const bNet2 = toScreen3D(netBackX, y2, 0, w, h);

      // Sombra de los postes en el suelo
      ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
      ctx.beginPath();
      ctx.ellipse(gPost1.groundX, gPost1.groundY, 4, 2, 0, 0, Math.PI * 2);
      ctx.ellipse(gPost2.groundX, gPost2.groundY, 4, 2, 0, 0, Math.PI * 2);
      ctx.fill();

      // Red superior y trasera con volumen y transparencia translúcida
      ctx.fillStyle = "rgba(240, 249, 255, 0.22)";
      ctx.beginPath();
      ctx.moveTo(gTop1.screenX, gTop1.screenY);
      ctx.lineTo(gTop2.screenX, gTop2.screenY);
      ctx.lineTo(tNet2.screenX, tNet2.screenY);
      ctx.lineTo(tNet1.screenX, tNet1.screenY);
      ctx.closePath();
      ctx.fill();

      // Red de fondo con efecto de bombeo por impacto de gol
      ctx.fillStyle = "rgba(240, 249, 255, 0.16)";
      ctx.beginPath();
      ctx.moveTo(tNet1.screenX, tNet1.screenY);
      ctx.lineTo(tNet2.screenX, tNet2.screenY);
      ctx.lineTo(bNet2.groundX, bNet2.groundY);
      ctx.lineTo(bNet1.groundX, bNet1.groundY);
      ctx.closePath();
      ctx.fill();

      // Trama hexagonal/diagonal de la red
      ctx.strokeStyle = "rgba(255, 255, 255, 0.28)";
      ctx.lineWidth = 0.9;
      ctx.beginPath();
      for (let s = 0.2; s <= 0.8; s += 0.2) {
        const mxTop = gTop1.screenX + (gTop2.screenX - gTop1.screenX) * s;
        const myTop = gTop1.screenY + (gTop2.screenY - gTop1.screenY) * s;
        const mxBot = bNet1.groundX + (bNet2.groundX - bNet1.groundX) * s;
        const myBot = bNet1.groundY + (bNet2.groundY - bNet1.groundY) * s;
        ctx.moveTo(mxTop, myTop);
        ctx.lineTo(mxBot, myBot);
      }
      ctx.stroke();

      // Postes y larguero 3D blancos con acabado brillante y reborde metálico
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 3.2;
      ctx.lineCap = "round";

      ctx.beginPath();
      ctx.moveTo(gPost1.groundX, gPost1.groundY);
      ctx.lineTo(gTop1.screenX, gTop1.screenY);
      ctx.lineTo(gTop2.screenX, gTop2.screenY);
      ctx.lineTo(gPost2.groundX, gPost2.groundY);
      ctx.stroke();

      // Tirantes traseros de sujeción
      ctx.strokeStyle = "rgba(226, 232, 240, 0.7)";
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.moveTo(gTop1.screenX, gTop1.screenY);
      ctx.lineTo(tNet1.screenX, tNet1.screenY);
      ctx.lineTo(bNet1.groundX, bNet1.groundY);
      ctx.moveTo(gTop2.screenX, gTop2.screenY);
      ctx.lineTo(tNet2.screenX, tNet2.screenY);
      ctx.lineTo(bNet2.groundX, bNet2.groundY);
      ctx.stroke();
    }

    // Dibujo del Estadio 3D estilo FM26: Gradas multitudinarias, focos volumétricos, vallas LED y césped segado
    function draw3DPitch(ctx, w, h) {
      const nowMs = performance.now();

      // 1. Cielo nocturno y atmósfera de estadio con gradiente cinemático
      const skyGrad = ctx.createLinearGradient(0, 0, 0, h * 0.28);
      skyGrad.addColorStop(0, "#020617");
      skyGrad.addColorStop(0.65, "#0b1536");
      skyGrad.addColorStop(1, "#1e293b");
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, w, h);

      // Cerchas y vigas metálicas del techo del estadio (Estructura arquitectónica)
      ctx.strokeStyle = "rgba(30, 41, 59, 0.7)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      for (let tx = 0; tx <= w; tx += w * 0.12) {
        ctx.moveTo(tx, 0);
        ctx.lineTo(tx + w * 0.06, h * 0.08);
        ctx.lineTo(tx + w * 0.12, 0);
      }
      ctx.stroke();

      // 2. Grada del Estadio con Miles de Aficionados (Crowd Backdrop animado)
      const standTopY = h * 0.03;
      const standBotY = h * 0.19;
      const numRows = 8;
      for (let r = 0; r < numRows; r++) {
        const rowY = standTopY + (r / numRows) * (standBotY - standTopY);
        const rowH = (standBotY - standTopY) / numRows;

        // Base de gradas de hormigón
        ctx.fillStyle = r % 2 === 0 ? "#0f172a" : "#1e293b";
        ctx.fillRect(0, rowY, w, rowH);

        // Mosaico de hinchas con colores de equipaciones locales y visitantes
        const dots = Math.floor(w / 6.5);
        for (let d = 0; d < dots; d++) {
          const dx = d * 6.5 + (r % 2 === 0 ? 3 : 0);
          const colorSeed = (d * 19 + r * 37) % 11;
          let fanColor = "#334155";
          if (colorSeed < 3) fanColor = homeTeam.primaryColor || "#38bdf8";
          else if (colorSeed < 5) fanColor = awayTeam.primaryColor || "#f59e0b";
          else if (colorSeed < 7) fanColor = "#f8fafc";
          else if (colorSeed < 9) fanColor = "#64748b";

          // Sutil animación de hinchas ondeando banderas o celebrando
          const bob = Math.sin(nowMs * 0.003 + d * 0.5 + r) * 0.8;
          ctx.fillStyle = fanColor;
          ctx.beginPath();
          ctx.arc(dx, rowY + rowH * 0.55 + bob, 1.4, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Flashes de cámaras fotográficas de los hinchas durante remates a portería
      if (currentHighlightData && currentHighlightData.phase === "SHOT") {
        for (let f = 0; f < 8; f++) {
          if (Math.random() < 0.45) {
            const fx = Math.random() * w;
            const fy = standTopY + Math.random() * (standBotY - standTopY);
            const fr = 2.0 + Math.random() * 3.2;
            ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
            ctx.beginPath();
            ctx.arc(fx, fy, fr, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // 3. Focos de Estadio Profesionales (4 Torres de Iluminación Volumétrica)
      const floodlights = [
        { x: w * 0.06, y: h * 0.035, angle: 0.3 },
        { x: w * 0.94, y: h * 0.035, angle: -0.3 }
      ];

      floodlights.forEach(fl => {
        // Haz volumétrico cónico suave hacia el centro del campo
        const beam = ctx.createRadialGradient(fl.x, fl.y, 6, fl.x + fl.angle * w * 0.3, h * 0.6, w * 0.5);
        beam.addColorStop(0, "rgba(255, 255, 255, 0.45)");
        beam.addColorStop(0.25, "rgba(224, 242, 254, 0.18)");
        beam.addColorStop(1, "rgba(224, 242, 254, 0)");
        ctx.fillStyle = beam;
        ctx.beginPath();
        ctx.moveTo(fl.x - 14, fl.y);
        ctx.lineTo(fl.x - w * 0.38, h * 0.9);
        ctx.lineTo(fl.x + w * 0.38, h * 0.9);
        ctx.lineTo(fl.x + 14, fl.y);
        ctx.closePath();
        ctx.fill();

        // Estructura y lámparas LED de la torre
        ctx.fillStyle = "#ffffff";
        for (let bx = -8; bx <= 8; bx += 4) {
          for (let by = -4; by <= 4; by += 4) {
            ctx.beginPath();
            ctx.arc(fl.x + bx, fl.y + by, 1.4, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      });

      // 4. Vallas publicitarias LED dinámicas en la banda superior (Estilo FM26 con marquesina animada)
      const adL = toScreen3D(0, -2.2, 0, w, h);
      const adR = toScreen3D(100, -2.2, 0, w, h);
      const adPitchL = toScreen3D(0, 0, 0, w, h);
      const adPitchR = toScreen3D(100, 0, 0, w, h);

      ctx.beginPath();
      ctx.moveTo(adL.groundX, adL.groundY - 11);
      ctx.lineTo(adR.groundX, adR.groundY - 11);
      ctx.lineTo(adPitchR.groundX, adPitchR.groundY);
      ctx.lineTo(adPitchL.groundX, adPitchL.groundY);
      ctx.closePath();
      ctx.fillStyle = "#050914";
      ctx.fill();

      // Borde LED luminoso superior
      ctx.strokeStyle = "rgba(56, 189, 248, 0.9)";
      ctx.lineWidth = 1.8;
      ctx.stroke();

      // Marquesina LED animada con marcas oficiales
      const ledCycle = (nowMs * 0.05) % (w * 1.6);
      const adMid = toScreen3D(50, -1, 0, w, h);
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, adL.groundY - 12, w, 14);
      ctx.clip();

      ctx.fillStyle = "#38bdf8";
      ctx.font = `900 ${Math.max(8, Math.round(w * 0.023))}px monospace`;
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      const bannerText = "⚽ FOOTBALL MANAGER 26 · LALIGA EA SPORTS · ENTRENATE-TE-TE · EA SPORTS FC · ADIDAS · NIKE · FLY EMIRATES ⚽   ";
      const repX = (adMid.groundX - w * 0.8) + ledCycle;
      ctx.fillText(bannerText, repX - w * 1.5, adL.groundY - 4);
      ctx.fillText(bannerText, repX, adL.groundY - 4);
      ctx.fillText(bannerText, repX + w * 1.5, adL.groundY - 4);
      ctx.restore();

      // 5. Perímetro exterior de césped de desahogo / moqueta técnica
      const pTL = toScreen3D(-6, -4, 0, w, h);
      const pTR = toScreen3D(106, -4, 0, w, h);
      const pBR = toScreen3D(106, 105, 0, w, h);
      const pBL = toScreen3D(-6, 105, 0, w, h);

      ctx.beginPath();
      ctx.moveTo(pTL.groundX, pTL.groundY);
      ctx.lineTo(pTR.groundX, pTR.groundY);
      ctx.lineTo(pBR.groundX, pBR.groundY);
      ctx.lineTo(pBL.groundX, pBL.groundY);
      ctx.closePath();
      ctx.fillStyle = "#114a27";
      ctx.fill();

      // Banquillos en la banda con siluetas de técnicos y suplentes
      const benchL = toScreen3D(35, 103, 0, w, h);
      const benchR = toScreen3D(65, 103, 0, w, h);
      ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
      ctx.fillRect(benchL.groundX, benchL.groundY - 6, (benchR.groundX - benchL.groundX), 9);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
      ctx.strokeRect(benchL.groundX, benchL.groundY - 6, (benchR.groundX - benchL.groundX), 9);

      // 6. Franjas segadas de césped cortado profesional FM (Alternancia verde esmeralda y textura idéntica a la foto)
      const numStripes = 18;
      for (let i = 0; i < numStripes; i++) {
        const x1 = (i / numStripes) * 100;
        const x2 = ((i + 1) / numStripes) * 100;
        const sTL = toScreen3D(x1, 0, 0, w, h);
        const sTR = toScreen3D(x2, 0, 0, w, h);
        const sBR = toScreen3D(x2, 100, 0, w, h);
        const sBL = toScreen3D(x1, 100, 0, w, h);

        ctx.beginPath();
        ctx.moveTo(sTL.groundX, sTL.groundY);
        ctx.lineTo(sTR.groundX, sTR.groundY);
        ctx.lineTo(sBR.groundX, sBR.groundY);
        ctx.lineTo(sBL.groundX, sBL.groundY);
        ctx.closePath();

        // Tonalidad de césped rica y realista de alta fidelidad FM
        ctx.fillStyle = i % 2 === 0 ? "#216d2f" : "#2a7f39";
        ctx.fill();
      }

      // Textura de corte perpendicular fino del césped
      ctx.strokeStyle = "rgba(255, 255, 255, 0.035)";
      ctx.lineWidth = 1.0;
      for (let ly = 10; ly < 100; ly += 12) {
        const pL = toScreen3D(0, ly, 0, w, h);
        const pR = toScreen3D(100, ly, 0, w, h);
        ctx.beginPath();
        ctx.moveTo(pL.groundX, pL.groundY);
        ctx.lineTo(pR.groundX, pR.groundY);
        ctx.stroke();
      }

      // Sombra proyectada por la visera / cubierta de la grada del estadio (Exacta al pantallazo de Football Manager)
      ctx.save();
      const sh1 = toScreen3D(-4, -2, 0, w, h);
      const sh2 = toScreen3D(42, -2, 0, w, h);
      const sh3 = toScreen3D(18, 102, 0, w, h);
      const sh4 = toScreen3D(-4, 102, 0, w, h);
      ctx.beginPath();
      ctx.moveTo(sh1.groundX, sh1.groundY);
      ctx.lineTo(sh2.groundX, sh2.groundY);
      ctx.lineTo(sh3.groundX, sh3.groundY);
      ctx.lineTo(sh4.groundX, sh4.groundY);
      ctx.closePath();
      ctx.fillStyle = "rgba(0, 22, 6, 0.28)";
      ctx.fill();
      ctx.restore();

      // Brillo e iluminación cenital en el centro del terreno
      const pitchCenter = toScreen3D(50, 50, 0, w, h);
      const pitchSheen = ctx.createRadialGradient(
        pitchCenter.groundX, pitchCenter.groundY, 8,
        pitchCenter.groundX, pitchCenter.groundY, w * 0.48
      );
      pitchSheen.addColorStop(0, "rgba(255, 255, 255, 0.08)");
      pitchSheen.addColorStop(0.6, "rgba(255, 255, 255, 0.02)");
      pitchSheen.addColorStop(1, "rgba(0, 0, 0, 0.10)");
      ctx.fillStyle = pitchSheen;
      ctx.beginPath();
      const pC1 = toScreen3D(0, 0, 0, w, h);
      const pC2 = toScreen3D(100, 0, 0, w, h);
      const pC3 = toScreen3D(100, 100, 0, w, h);
      const pC4 = toScreen3D(0, 100, 0, w, h);
      ctx.moveTo(pC1.groundX, pC1.groundY);
      ctx.lineTo(pC2.groundX, pC2.groundY);
      ctx.lineTo(pC3.groundX, pC3.groundY);
      ctx.lineTo(pC4.groundX, pC4.groundY);
      ctx.closePath();
      ctx.fill();

      // 7. Líneas blancas del terreno de juego nítidas con antialiasing
      ctx.strokeStyle = "rgba(255, 255, 255, 0.92)";
      ctx.lineWidth = 2.1;

      // Líneas de banda y fondo
      ctx.beginPath();
      ctx.moveTo(pC1.groundX, pC1.groundY);
      ctx.lineTo(pC2.groundX, pC2.groundY);
      ctx.lineTo(pC3.groundX, pC3.groundY);
      ctx.lineTo(pC4.groundX, pC4.groundY);
      ctx.closePath();
      ctx.stroke();

      // Línea de medio campo
      const midT = toScreen3D(50, 0, 0, w, h);
      const midB = toScreen3D(50, 100, 0, w, h);
      ctx.beginPath();
      ctx.moveTo(midT.groundX, midT.groundY);
      ctx.lineTo(midB.groundX, midB.groundY);
      ctx.stroke();

      // Círculo central 3D elíptico (radio oficial)
      ctx.beginPath();
      for (let a = 0; a <= Math.PI * 2 + 0.1; a += 0.12) {
        const cx = 50 + Math.cos(a) * 8.8;
        const cy = 50 + Math.sin(a) * 13.5;
        const pt = toScreen3D(cx, cy, 0, w, h);
        if (a === 0) ctx.moveTo(pt.groundX, pt.groundY);
        else ctx.lineTo(pt.groundX, pt.groundY);
      }
      ctx.stroke();

      // Punto central
      const centerDot = toScreen3D(50, 50, 0, w, h);
      ctx.beginPath();
      ctx.arc(centerDot.groundX, centerDot.groundY, 3.0, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.fill();

      // Áreas de Penalti y de Meta (Locales)
      draw3DBox(ctx, 0, 20.5, 15.8, 79.5, w, h); // Área grande
      draw3DBox(ctx, 0, 36.5, 5.3, 63.5, w, h);  // Área pequeña

      // Punto de penalti local (11m)
      const penDotH = toScreen3D(10.5, 50, 0, w, h);
      ctx.beginPath();
      ctx.arc(penDotH.groundX, penDotH.groundY, 2.4, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.fill();

      // Arco del área local (D-box)
      ctx.beginPath();
      for (let a = -0.68; a <= 0.68; a += 0.12) {
        const ax = 10.5 + Math.cos(a) * 8.8;
        const ay = 50 + Math.sin(a) * 13.5;
        const pt = toScreen3D(ax, ay, 0, w, h);
        if (a === -0.68) ctx.moveTo(pt.groundX, pt.groundY);
        else ctx.lineTo(pt.groundX, pt.groundY);
      }
      ctx.stroke();

      // Áreas de Penalti y de Meta (Visitantes)
      draw3DBox(ctx, 84.2, 20.5, 100, 79.5, w, h); // Área grande
      draw3DBox(ctx, 94.7, 36.5, 100, 63.5, w, h); // Área pequeña

      // Punto de penalti visitante (11m)
      const penDotA = toScreen3D(89.5, 50, 0, w, h);
      ctx.beginPath();
      ctx.arc(penDotA.groundX, penDotA.groundY, 2.4, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.fill();

      // Arco del área visitante (D-box)
      ctx.beginPath();
      for (let a = Math.PI - 0.68; a <= Math.PI + 0.68; a += 0.12) {
        const ax = 89.5 + Math.cos(a) * 8.8;
        const ay = 50 + Math.sin(a) * 13.5;
        const pt = toScreen3D(ax, ay, 0, w, h);
        if (a === Math.PI - 0.68) ctx.moveTo(pt.groundX, pt.groundY);
        else ctx.lineTo(pt.groundX, pt.groundY);
      }
      ctx.stroke();

      // Arcos de córner en las 4 esquinas
      const corners = [
        { x: 0, y: 0, a1: 0, a2: Math.PI / 2 },
        { x: 100, y: 0, a1: Math.PI / 2, a2: Math.PI },
        { x: 100, y: 100, a1: Math.PI, a2: (3 * Math.PI) / 2 },
        { x: 0, y: 100, a1: (3 * Math.PI) / 2, a2: Math.PI * 2 }
      ];

      corners.forEach(cn => {
        ctx.beginPath();
        for (let a = cn.a1; a <= cn.a2 + 0.05; a += 0.2) {
          const pt = toScreen3D(cn.x + Math.cos(a) * 1.5, cn.y + Math.sin(a) * 2.2, 0, w, h);
          if (a === cn.a1) ctx.moveTo(pt.groundX, pt.groundY);
          else ctx.lineTo(pt.groundX, pt.groundY);
        }
        ctx.stroke();

        // Banderín de córner 3D (Mástil flexible y tela flameando)
        const bBase = toScreen3D(cn.x, cn.y, 0, w, h);
        const bTop = toScreen3D(cn.x, cn.y, 4.6, w, h);
        ctx.strokeStyle = "#fef08a";
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(bBase.groundX, bBase.groundY);
        ctx.lineTo(bTop.screenX, bTop.screenY);
        ctx.stroke();

        // Bandera con ondulación de viento
        const flagWave = Math.sin(nowMs * 0.008 + cn.x) * 1.2;
        ctx.fillStyle = "#ef4444";
        ctx.beginPath();
        ctx.moveTo(bTop.screenX, bTop.screenY);
        ctx.lineTo(bTop.screenX + (cn.x === 0 ? 5.5 : -5.5), bTop.screenY + 2 + flagWave);
        ctx.lineTo(bTop.screenX, bTop.screenY + 4.5);
        ctx.closePath();
        ctx.fill();
      });

      // Porterías 3D oficiales con deformación física de red
      draw3DGoal(ctx, 0, 44.5, 55.5, -1, w, h);
      draw3DGoal(ctx, 100, 44.5, 55.5, 1, w, h);
    }

    // Dibujo de fichas circulares 2D estilo clásico Football Manager (🔴 con los colores de la equipación del equipo)
    // Se usa durante la simulación normal del partido (fuera de las jugadas clave)
    function drawRealisticPlayer3D(ctx, item) {
      const { groundX, groundY, scale, side, isKeeper, number, isCarrier, playerId } = item;
      const kit = side === "home" ? kits.home : kits.away;
      const primaryColor = isKeeper ? (kit.keeper || "#10b981") : (kit.jersey || "#ef4444");
      const secondaryColor = isKeeper ? "#ffffff" : (kit.collar || kit.shorts || "#ffffff");
      const numberColor = isKeeper ? "#0f172a" : (kit.number || "#ffffff");

      const sc = scale;
      const nowMs = performance.now();
      const radius = 7.4 * sc;
      const centerY = groundY - 2.5 * sc;

      ctx.save();

      // 1. Sombra suave bajo la ficha 2D en el césped
      ctx.fillStyle = "rgba(0, 20, 6, 0.42)";
      ctx.beginPath();
      ctx.ellipse(groundX, groundY + 1.2 * sc, radius * 0.95, radius * 0.48, 0, 0, Math.PI * 2);
      ctx.fill();

      // 2. Halo luminoso si el jugador lleva el balón
      if (isCarrier) {
        const pulse = Math.sin(nowMs * 0.01) * 1.5 * sc;
        ctx.strokeStyle = "#fbbf24";
        ctx.lineWidth = 2.0 * sc;
        ctx.beginPath();
        ctx.arc(groundX, centerY, radius + 3.0 * sc + pulse, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fillStyle = "rgba(251, 191, 36, 0.22)";
        ctx.fill();
      }

      // 3. Si es protagonista en repetición, aro indicador
      const isShooter = currentHighlightData && currentHighlightData.shooter?.id === playerId;
      const isPasser = currentHighlightData && currentHighlightData.passer?.id === playerId;
      if (isShooter || isPasser) {
        ctx.strokeStyle = isShooter ? "#10b981" : "#38bdf8";
        ctx.lineWidth = 1.8 * sc;
        ctx.beginPath();
        ctx.arc(groundX, centerY, radius + 2.4 * sc, 0, Math.PI * 2);
        ctx.stroke();
      }

      // 4. Contorno exterior oscuro de contraste sobre el césped
      ctx.beginPath();
      ctx.arc(groundX, centerY, radius + 1.0 * sc, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
      ctx.fill();

      // 5. Círculo principal con el color de la equipación del equipo
      ctx.beginPath();
      ctx.arc(groundX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = primaryColor;
      ctx.fill();

      // Brillo esférico sutil tipo ficha 🔴
      const shineGrad = ctx.createRadialGradient(
        groundX - radius * 0.3,
        centerY - radius * 0.3,
        radius * 0.08,
        groundX,
        centerY,
        radius
      );
      shineGrad.addColorStop(0, "rgba(255, 255, 255, 0.35)");
      shineGrad.addColorStop(0.55, "rgba(255, 255, 255, 0.0)");
      shineGrad.addColorStop(1, "rgba(0, 0, 0, 0.28)");
      ctx.fillStyle = shineGrad;
      ctx.fill();

      // 6. Anillo interior con el color secundario de la equipación
      ctx.strokeStyle = secondaryColor;
      ctx.lineWidth = Math.max(1.2, 1.8 * sc);
      ctx.stroke();

      // 7. Dorsal del jugador centrado en la ficha
      ctx.font = `900 ${Math.max(7, Math.round(7.2 * sc))}px sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.strokeStyle = "rgba(15, 23, 42, 0.75)";
      ctx.lineWidth = Math.max(1.5, 2.0 * sc);
      ctx.strokeText(`${number}`, groundX, centerY + 0.4 * sc);
      ctx.fillStyle = numberColor;
      ctx.fillText(`${number}`, groundX, centerY + 0.4 * sc);

      ctx.restore();
    }

    function drawMonigote3D(ctx, item) {
      drawRealisticPlayer3D(ctx, item);
    }

    // Dibujo del balón 3D con luz solar directional, paneles oficiales y estela de velocidad
    function drawBall3D(ctx, item) {
      const { groundX, groundY, screenX, screenY, scale, z } = item;

      // 1. Sombra direccional en el césped por la luz solar (Consistente con los futbolistas y el estadio)
      const shadowDist = (2.2 + (z || 0) * 0.45) * scale;
      const shadowR = (4.0 + (z || 0) * 0.15) * scale;
      const shadowAlpha = Math.max(0.12, 0.44 - (z || 0) * 0.035);

      ctx.save();
      ctx.fillStyle = `rgba(0, 25, 8, ${shadowAlpha})`;
      ctx.beginPath();
      ctx.ellipse(groundX - shadowDist * 0.85, groundY + shadowDist * 0.45, shadowR, shadowR * 0.52, -0.38, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // 2. Estela cinemática de velocidad en disparos
      if (ballTrail.length > 1) {
        for (let t = 0; t < ballTrail.length - 1; t++) {
          const tPt = toScreen3D(ballTrail[t].x, ballTrail[t].y, ballTrail[t].z || 0, canvas.width, canvas.height);
          const tAlpha = (t / ballTrail.length) * 0.38;
          ctx.beginPath();
          ctx.arc(tPt.screenX, tPt.screenY, (3.0 * scale) * (0.35 + (t / ballTrail.length) * 0.65), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${tAlpha})`;
          ctx.fill();
        }
      }

      // 3. Esfera del balón 3D con luz radial de focos y sol
      const ballR = 4.4 * scale;
      ctx.beginPath();
      ctx.arc(screenX, screenY, ballR, 0, Math.PI * 2);

      const grad = ctx.createRadialGradient(
        screenX - ballR * 0.35, screenY - ballR * 0.35, ballR * 0.08,
        screenX, screenY, ballR
      );
      grad.addColorStop(0, "#ffffff");
      grad.addColorStop(0.7, "#f1f5f9");
      grad.addColorStop(1, "#334155");
      ctx.fillStyle = grad;
      ctx.fill();

      ctx.strokeStyle = "rgba(15, 23, 42, 0.6)";
      ctx.lineWidth = 1.0;
      ctx.stroke();

      // 4. Paneles pentagonales del balón oficial rotando
      ctx.save();
      ctx.translate(screenX, screenY);
      ctx.rotate(ballRotation);

      ctx.fillStyle = "#0f172a";
      ctx.beginPath();
      for (let p = 0; p < 5; p++) {
        const pa = (p * Math.PI * 2) / 5;
        const px = Math.cos(pa) * (ballR * 0.44);
        const py = Math.sin(pa) * (ballR * 0.44);
        if (p === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.fill();

      // Detalles aerodinámicos de color LaLiga
      ctx.strokeStyle = "#f97316";
      ctx.lineWidth = 1.2 * scale;
      ctx.beginPath();
      ctx.arc(0, 0, ballR * 0.74, 0.2, 1.4);
      ctx.stroke();

      ctx.restore();
    }

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

      const hud = container.querySelector("#highlight-action-hud");
      const hudTitle = container.querySelector("#hl-hud-title");
      const hudSub = container.querySelector("#hl-hud-subtitle");
      if (hud && hudTitle && hudSub) {
        hudTitle.textContent = `🎥 ENFOQUE DE ACCIÓN · ${hlData.atkTeam.shortName.toUpperCase()}`;
        hudSub.textContent = hlData.tacticalNote || hlData.commentary || "Apertura y construcción de jugada";
        hud.classList.remove("opacity-0", "-translate-y-2");
        hud.classList.add("opacity-100", "translate-y-0");
      }

      updateFMCommentary(hlData.tacticalNote || hlData.commentary || `¡Jugada de peligro de ${hlData.atkTeam.name}!`, hlData.atkTeam.shortName.toUpperCase(), true);
      showMatchAlert({ text: `⚡ ¡Jugada de peligro de ${hlData.atkTeam.name}!` });
    }

    function handleHighlightPhase(phaseData) {
      if (!currentHighlightData) currentHighlightData = {};
      Object.assign(currentHighlightData, phaseData);

      const hudSub = container.querySelector("#hl-hud-subtitle");
      if (hudSub && phaseData.tacticalNote) {
        hudSub.textContent = phaseData.tacticalNote;
      }

      if (phaseData.tacticalNote) {
        updateFMCommentary(phaseData.tacticalNote, phaseData.phase === "BUILDUP" ? "CONSTRUCCIÓN" : phaseData.phase === "PASS" ? "ASISTENCIA" : "REMATE", true);
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

      if (elScorer) elScorer.textContent = `${goalData.shooter.name}`;
      if (elScore) elScore.textContent = goalData.score;
      if (elMinute) elMinute.textContent = `Minuto ${goalData.minute}' · ${goalData.atkTeam.name}`;

      if (elGoalOverlay) {
        elGoalOverlay.classList.remove("opacity-0", "pointer-events-none", "scale-95");
        elGoalOverlay.classList.add("opacity-100", "scale-100");
      }

      currentHighlightStartFrame = null;

      setTimeout(() => {
        if (elGoalOverlay) {
          elGoalOverlay.classList.remove("opacity-100", "scale-100");
          elGoalOverlay.classList.add("opacity-0", "pointer-events-none", "scale-95");
        }
        startKickoffSequence(goalData.concedingSide);
      }, 2000);
    }

    function startKickoffSequence(concedingSide) {
      isKickoffInProgress = true;
      const kickoffBadge = container.querySelector("#kickoff-badge");
      if (kickoffBadge) kickoffBadge.classList.remove("hidden");

      // Colocar jugadores y balón en posición de saque de centro
      simulator.resetKickoff(concedingSide);

      // Tiempo para ver a los equipos situados en sus campos
      setTimeout(() => {
        // Pase hacia atrás para iniciar la jugada
        if (concedingSide === "home") {
          simulator.ball.targetX = 40;
          simulator.ball.targetY = 48;
        } else {
          simulator.ball.targetX = 60;
          simulator.ball.targetY = 52;
        }

        setTimeout(() => {
          if (kickoffBadge) kickoffBadge.classList.add("hidden");
          isKickoffInProgress = false;

          // Si tras el gol ya se había cumplido el tiempo reglamentario del primer tiempo con su descuento
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

          if (!simulator.isFinished) {
            simulator.start();
            const iconPP = container.querySelector("#play-pause-icon");
            const textPP = container.querySelector("#play-pause-text");
            if (iconPP) iconPP.textContent = "⏸";
            if (textPP) textPP.textContent = "Pausar";
          }
        }, 1100);
      }, 1500);
    }

    function handleSubstitutionChyron(subData) {
      showSubstitutionChyron(subData, () => {
        if (!simulator.isFinished && !simulator.isHalfTime) {
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

    // Bucle principal de renderizado 3D a 60 FPS estilo Football Manager 26
    let lastBallX = 50;
    let lastBallY = 50;

    // ==========================================
    // CÁMARA CINEMÁTICA 3D BROADCAST (ESTILO EA SPORTS FC / PREMIER LEAGUE TV)
    // Exclusiva para Jugadas Clave (perspectiva diagonal 3/4 hacia portería izquierda)
    // ==========================================
    function projectEA3D(u, v, z, w, h) {
      // u: metros desde la línea de fondo hacia el centro del campo (0 = línea de gol, 16.5 = borde área grande, 34 = medular)
      // v: metros a través del ancho del campo (0 = banda lejana sup-dcha, 34 = centro portería, 68 = banda cercana inf-izq)
      // z: altura en metros sobre el césped (2.44 = larguero)
      const uNorm = u / 32;
      const vNorm = v / 55;
      // Factor de expansión por cercanía a cámara (mayor cuando u y v crecen hacia abajo-izquierda/derecha)
      const persp = 1 + uNorm * 0.22 + vNorm * 0.18;

      const baseX = 0.675 * w;
      const baseY = 0.082 * h;

      // Vector a lo largo de la línea de gol (+v: baja hacia la izquierda)
      const vx = -0.0162 * w * (1 + uNorm * 0.14);
      const vy = 0.00565 * h * (1 + uNorm * 0.12);

      // Vector hacia el interior del campo (+u: baja hacia la derecha)
      const ux = 0.0172 * w * (1 + vNorm * 0.06);
      const uy = 0.0156 * h * (1 + vNorm * 0.15);

      const groundX = baseX + v * vx + u * ux;
      const groundY = baseY + v * vy + u * uy;

      const scale = Math.max(0.55, Math.min(1.65, 0.72 * persp));
      const screenY = groundY - z * (0.044 * h) * scale;

      return {
        x: groundX,
        y: screenY,
        groundY: groundY,
        sc: scale * Math.min(w / 480, h / 290)
      };
    }

    function drawFrontalBall(ctx, x, y, zPx, r, sc) {
      // Sombra proyectada sobre el césped
      ctx.save();
      const shadowAlpha = Math.max(0.10, 0.48 - (zPx / (40 * sc)) * 0.32);
      ctx.fillStyle = `rgba(6, 20, 8, ${shadowAlpha})`;
      ctx.beginPath();
      ctx.ellipse(x + 1.5 * sc, y + 1 * sc, r * 1.35, r * 0.62, -0.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      const bY = y - zPx;
      const bR = Math.max(2.8, r);

      // Esfera 3D con iluminación tipo balón oficial Premier/LaLiga (blanco con gráficos magenta/púrpura)
      ctx.beginPath();
      ctx.arc(x, bY, bR, 0, Math.PI * 2);
      const bGrad = ctx.createRadialGradient(x - bR * 0.32, bY - bR * 0.35, bR * 0.08, x, bY, bR);
      bGrad.addColorStop(0, "#ffffff");
      bGrad.addColorStop(0.68, "#f1f5f9");
      bGrad.addColorStop(1, "#475569");
      ctx.fillStyle = bGrad;
      ctx.fill();
      ctx.strokeStyle = "rgba(15, 23, 42, 0.65)";
      ctx.lineWidth = Math.max(0.7, 0.85 * sc);
      ctx.stroke();

      // Anillos cromáticos estilo balón EA Sports (magenta / púrpura / cian)
      ctx.strokeStyle = "#be185d";
      ctx.lineWidth = Math.max(0.9, 1.1 * sc);
      ctx.beginPath();
      ctx.arc(x + bR * 0.1, bY - bR * 0.05, bR * 0.52, 0.2, Math.PI * 1.35);
      ctx.stroke();

      ctx.fillStyle = "#1e1b4b";
      ctx.beginPath();
      ctx.arc(x - bR * 0.22, bY + bR * 0.18, bR * 0.24, 0, Math.PI * 2);
      ctx.fill();
    }

    function drawFrontalAthlete(ctx, ent) {
      const { x, y, sc, kit, number, isKeeper, isReferee, isLinesman, pose, facing, name, elapsed } = ent;
      const jerseyColor = isReferee ? "#1e293b" : (isLinesman ? "#0f172a" : (isKeeper ? (kit.keeper || "#84cc16") : kit.jersey));
      const shortsColor = isReferee || isLinesman ? "#090d16" : (isKeeper ? (kit.keeper || "#84cc16") : (kit.shorts || "#ffffff"));
      const socksColor = isReferee || isLinesman ? "#090d16" : (isKeeper ? "#bef264" : (kit.socks || "#ffffff"));
      const bootColor = isReferee || isLinesman ? "#0f172a" : ((number % 3 === 0) ? "#f97316" : (number % 2 === 0 ? "#e2e8f0" : "#1e293b"));
      const skinTones = ["#f5cba7", "#e59866", "#8d5524", "#f0b27a", "#c68642"];
      const hairColors = ["#1c1917", "#451a03", "#78350f", "#0f172a", "#92400e", "#d97706"];
      const skinColor = skinTones[(number || 1) % skinTones.length];
      const hairColor = hairColors[(number || 1) % hairColors.length];

      ctx.save();
      ctx.translate(x, y);

      // Sombra direccional suave sobre el césped
      const zPx = ent.zPx || 0;
      const shScale = Math.max(0.55, 1 - zPx / (45 * sc));
      ctx.fillStyle = `rgba(8, 24, 6, ${0.38 * shScale})`;
      ctx.beginPath();
      ctx.ellipse(-1.5 * sc, 0.5 * sc, 7.5 * sc * shScale, 3.0 * sc * shScale, -0.22, 0, Math.PI * 2);
      ctx.fill();

      if (zPx > 0) {
        ctx.translate(0, -zPx);
      }

      // 1. PORTERO EN ESTIRADA (DIVE)
      if (pose === "DIVE_RIGHT" || pose === "DIVE_LEFT") {
        const dir = pose === "DIVE_RIGHT" ? 1 : -1;
        ctx.save();
        ctx.translate(0, -9 * sc);
        ctx.rotate(dir * 0.68);

        // Piernas estiradas
        ctx.strokeStyle = skinColor;
        ctx.lineWidth = 2.6 * sc;
        ctx.beginPath();
        ctx.moveTo(-dir * 6 * sc, 0);
        ctx.lineTo(-dir * 14 * sc, 3 * sc);
        ctx.stroke();

        ctx.strokeStyle = socksColor;
        ctx.lineWidth = 2.6 * sc;
        ctx.beginPath();
        ctx.moveTo(-dir * 14 * sc, 3 * sc);
        ctx.lineTo(-dir * 22 * sc, 5 * sc);
        ctx.stroke();

        // Pantalón y torso
        ctx.fillStyle = shortsColor;
        ctx.beginPath();
        ctx.roundRect(-7 * sc, -3.5 * sc, 8 * sc, 6.5 * sc, 1.5 * sc);
        ctx.fill();

        ctx.fillStyle = jerseyColor;
        ctx.beginPath();
        ctx.roundRect(-2 * sc, -4.5 * sc, 12 * sc, 8.5 * sc, 2 * sc);
        ctx.fill();

        // Brazos hacia el balón
        ctx.strokeStyle = jerseyColor;
        ctx.lineWidth = 2.6 * sc;
        ctx.beginPath();
        ctx.moveTo(dir * 7 * sc, -2 * sc);
        ctx.lineTo(dir * 20 * sc, -4 * sc);
        ctx.moveTo(dir * 7 * sc, 2 * sc);
        ctx.lineTo(dir * 18 * sc, 0);
        ctx.stroke();

        // Guantes de portero
        ctx.fillStyle = "#d9f99d";
        ctx.beginPath();
        ctx.arc(dir * 21 * sc, -4 * sc, 2.8 * sc, 0, Math.PI * 2);
        ctx.arc(dir * 19 * sc, 0, 2.5 * sc, 0, Math.PI * 2);
        ctx.fill();

        // Cabeza
        ctx.fillStyle = skinColor;
        ctx.beginPath();
        ctx.arc(dir * 10 * sc, -3.5 * sc, 3.3 * sc, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = hairColor;
        ctx.beginPath();
        ctx.arc(dir * 10 * sc, -4.5 * sc, 3.2 * sc, Math.PI, 0);
        ctx.fill();

        ctx.restore();
        ctx.restore();
        return;
      }

      // 2. PORTERO EN EL SUELO TRAS ESTIRADA
      if (pose === "GROUND_RIGHT" || pose === "GROUND_LEFT" || pose === "CONCEDED") {
        const dir = pose === "GROUND_LEFT" ? -1 : 1;
        ctx.fillStyle = jerseyColor;
        ctx.beginPath();
        ctx.ellipse(0, -3 * sc, 10 * sc, 4 * sc, 0.1 * dir, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = shortsColor;
        ctx.beginPath();
        ctx.ellipse(-dir * 7 * sc, -2.5 * sc, 4.5 * sc, 3.2 * sc, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = skinColor;
        ctx.beginPath();
        ctx.arc(dir * 9.5 * sc, -4.5 * sc, 3.2 * sc, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        return;
      }

      // 3. CENTRAL EN SEGADA DEFENSIVA (SLIDE_BLOCK)
      if (pose === "SLIDE_BLOCK") {
        ctx.strokeStyle = socksColor;
        ctx.lineWidth = 3.2 * sc;
        ctx.beginPath();
        ctx.moveTo(-4 * sc, -3 * sc);
        ctx.lineTo(14 * sc, -1.5 * sc);
        ctx.stroke();

        ctx.fillStyle = bootColor;
        ctx.fillRect(13 * sc, -3.5 * sc, 4.5 * sc, 2.5 * sc);

        ctx.fillStyle = shortsColor;
        ctx.beginPath();
        ctx.roundRect(-7 * sc, -7 * sc, 8 * sc, 5.5 * sc, 1.5 * sc);
        ctx.fill();

        ctx.fillStyle = jerseyColor;
        ctx.beginPath();
        ctx.roundRect(-11 * sc, -14 * sc, 9.5 * sc, 8.5 * sc, 2 * sc);
        ctx.fill();

        ctx.fillStyle = skinColor;
        ctx.beginPath();
        ctx.arc(-7 * sc, -17 * sc, 3.2 * sc, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        return;
      }

      // 4. ANATOMÍA 3D DE FUTBOLISTA DE PIE / EN CARRERA / CHUTANDO / BARRERA
      const runPhase = (elapsed || 0) * 9.5 + (number || 1) * 1.7;
      const isMoving = pose === "DRIBBLE" || pose === "RUNNING_UP" || pose === "SPRINT";
      const stride = isMoving ? Math.sin(runPhase) * 4.8 * sc : 0;
      const kneeLift = isMoving ? Math.max(0, Math.cos(runPhase)) * 2.5 * sc : 0;

      // Orientación: "BACK_LEFT" (atacante mirando hacia portería izq-arriba, vemos su espalda/dorsal y perfil izq)
      // "FRONT_RIGHT" (defensa/portero/barrera mirando hacia el balón abajo-dcha, vemos su pecho)
      const isBackView = facing === "BACK_LEFT";

      let lFootX = -2.4 * sc;
      let lFootY = -0.5 * sc;
      let rFootX = 2.4 * sc;
      let rFootY = -0.5 * sc;
      let lKneeX = -2.4 * sc;
      let lKneeY = -6.2 * sc;
      let rKneeX = 2.4 * sc;
      let rKneeY = -6.2 * sc;
      let torsoLeanX = 0;

      if (pose === "WINDUP_SHOT") {
        // Pierna izquierda plantada junto al balón, pierna derecha armada atrás, brazo derecho extendido (como el #20 de la foto)
        lFootX = -3.8 * sc;
        lFootY = 0.5 * sc;
        lKneeX = -3.2 * sc;
        lKneeY = -6.0 * sc;
        rFootX = 6.8 * sc;
        rFootY = -5.5 * sc;
        rKneeX = 4.2 * sc;
        rKneeY = -7.2 * sc;
        torsoLeanX = -1.8 * sc;
      } else if (pose === "SHOT_FOLLOW_THROUGH" || pose === "PASS_DELIVERY") {
        // Pierna de golpeo lanzada hacia adelante-izquierda tras impactar el balón
        lFootX = 2.5 * sc;
        lFootY = 1.2 * sc;
        lKneeX = 1.2 * sc;
        lKneeY = -5.5 * sc;
        rFootX = -6.5 * sc;
        rFootY = -4.2 * sc;
        rKneeX = -3.5 * sc;
        rKneeY = -7.5 * sc;
        torsoLeanX = -1.2 * sc;
      } else if (pose === "WALL_GUARD") {
        // Barrera defensiva con piernas juntas y manos protegiendo
        lFootX = -1.8 * sc;
        rFootX = 1.8 * sc;
        lKneeX = -1.8 * sc;
        rKneeX = 1.8 * sc;
      } else if (pose === "GK_READY" || pose === "BOUNCE") {
        // Portero con piernas abiertas en tensión bajo palos (como en la foto)
        lFootX = -5.2 * sc;
        rFootX = 5.2 * sc;
        lKneeX = -4.2 * sc;
        rKneeX = 4.2 * sc;
        lKneeY = -5.5 * sc;
        rKneeY = -5.5 * sc;
      } else if (isMoving) {
        lFootX = -2.2 * sc - stride * 0.7;
        lFootY = -0.5 * sc + stride * 0.35 - kneeLift * 0.4;
        rFootX = 2.2 * sc + stride * 0.7;
        rFootY = -0.5 * sc - stride * 0.35;
        lKneeX = -2.0 * sc - stride * 0.35;
        lKneeY = -6.2 * sc - kneeLift * 0.5;
        rKneeX = 2.0 * sc + stride * 0.35;
        rKneeY = -6.2 * sc;
        torsoLeanX = isBackView ? -1.0 * sc : 0.8 * sc;
      }

      const hipY = -11.5 * sc;
      const shoulderY = -22.2 * sc;
      const headY = -26.2 * sc;
      const headR = 3.1 * sc;

      // Muslos (piel + caída del pantalón)
      ctx.lineCap = "round";
      ctx.strokeStyle = skinColor;
      ctx.lineWidth = 2.7 * sc;
      ctx.beginPath();
      ctx.moveTo(-2.2 * sc, hipY + 2 * sc);
      ctx.lineTo(lKneeX, lKneeY);
      ctx.moveTo(2.2 * sc, hipY + 2 * sc);
      ctx.lineTo(rKneeX, rKneeY);
      ctx.stroke();

      // Medias altas hasta debajo de la rodilla
      ctx.strokeStyle = socksColor;
      ctx.lineWidth = 2.5 * sc;
      ctx.beginPath();
      ctx.moveTo(lKneeX, lKneeY + 0.5 * sc);
      ctx.lineTo(lFootX, lFootY);
      ctx.moveTo(rKneeX, rKneeY + 0.5 * sc);
      ctx.lineTo(rFootX, rFootY);
      ctx.stroke();

      // Vuelta superior de la media
      ctx.strokeStyle = jerseyColor;
      ctx.lineWidth = 1.0 * sc;
      ctx.beginPath();
      ctx.moveTo(lKneeX - 1.1 * sc, lKneeY + 1.0 * sc);
      ctx.lineTo(lKneeX + 1.1 * sc, lKneeY + 1.0 * sc);
      ctx.moveTo(rKneeX - 1.1 * sc, rKneeY + 1.0 * sc);
      ctx.lineTo(rKneeX + 1.1 * sc, rKneeY + 1.0 * sc);
      ctx.stroke();

      // Botas con tacos
      ctx.fillStyle = bootColor;
      ctx.beginPath();
      ctx.ellipse(lFootX - (isBackView ? 0.8 * sc : -0.8 * sc), lFootY, 2.7 * sc, 1.25 * sc, isBackView ? -0.2 : 0.2, 0, Math.PI * 2);
      ctx.ellipse(rFootX - (isBackView ? 0.8 * sc : -0.8 * sc), rFootY, 2.7 * sc, 1.25 * sc, isBackView ? -0.2 : 0.2, 0, Math.PI * 2);
      ctx.fill();

      // Pantalón corto (Shorts) con perneras separadas
      ctx.fillStyle = shortsColor;
      ctx.beginPath();
      ctx.moveTo(-4.4 * sc, hipY - 1.5 * sc);
      ctx.lineTo(4.4 * sc, hipY - 1.5 * sc);
      ctx.lineTo(4.2 * sc + (rKneeX - 2.2 * sc) * 0.45, hipY + 3.8 * sc);
      ctx.lineTo(0.4 * sc, hipY + 3.2 * sc);
      ctx.lineTo(0, hipY + 1.5 * sc);
      ctx.lineTo(-0.4 * sc, hipY + 3.2 * sc);
      ctx.lineTo(-4.2 * sc + (lKneeX + 2.2 * sc) * 0.45, hipY + 3.8 * sc);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = "rgba(15, 23, 42, 0.22)";
      ctx.lineWidth = 0.6 * sc;
      ctx.stroke();

      // Torso anatómico con volumen y sombreado lateral
      ctx.save();
      ctx.translate(torsoLeanX, 0);

      const torsoGrad = ctx.createLinearGradient(-5.5 * sc, shoulderY, 5.5 * sc, hipY);
      torsoGrad.addColorStop(0, jerseyColor);
      torsoGrad.addColorStop(0.7, jerseyColor);
      torsoGrad.addColorStop(1, "#0f172a");
      ctx.fillStyle = jerseyColor;
      ctx.beginPath();
      ctx.moveTo(-5.0 * sc, shoulderY);
      ctx.lineTo(5.0 * sc, shoulderY);
      ctx.lineTo(4.1 * sc, hipY - 0.5 * sc);
      ctx.lineTo(-4.1 * sc, hipY - 0.5 * sc);
      ctx.closePath();
      ctx.fill();

      // Sombreado sutil de pliegues en la camiseta
      ctx.fillStyle = "rgba(0, 0, 0, 0.14)";
      ctx.beginPath();
      ctx.moveTo(1.8 * sc, shoulderY);
      ctx.lineTo(5.0 * sc, shoulderY);
      ctx.lineTo(4.1 * sc, hipY - 0.5 * sc);
      ctx.lineTo(1.2 * sc, hipY - 0.5 * sc);
      ctx.closePath();
      ctx.fill();

      // Cuello de la camiseta
      ctx.strokeStyle = kit.collar || "#ffffff";
      ctx.lineWidth = 1.1 * sc;
      ctx.beginPath();
      ctx.arc(0, shoulderY + 0.6 * sc, 2.1 * sc, 0.1 * Math.PI, 0.9 * Math.PI);
      ctx.stroke();

      // Dorsal y nombre en la espalda (como el #20 azul de la referencia)
      if (isBackView && !isReferee && !isLinesman) {
        ctx.fillStyle = kit.number || "#ffffff";
        ctx.font = `900 ${Math.max(6, Math.round(6.2 * sc))}px "Impact", "Arial Black", sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(`${number}`, 0, shoulderY + 5.8 * sc);
      } else if (!isBackView && !isReferee && !isLinesman && !isKeeper) {
        // Detalle de escudo/sponsor en el pecho
        ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
        ctx.fillRect(-2.4 * sc, shoulderY + 3.8 * sc, 4.8 * sc, 1.2 * sc);
      }

      // Brazos articulados (manga corta + antebrazo piel)
      let lArmEndX = -7.5 * sc;
      let lArmEndY = hipY - 1.5 * sc;
      let rArmEndX = 7.5 * sc;
      let rArmEndY = hipY - 1.5 * sc;

      if (pose === "WINDUP_SHOT" || pose === "SHOT_FOLLOW_THROUGH" || pose === "PASS_DELIVERY") {
        // Pose icónica de golpeo: brazo derecho extendido arriba-derecha para equilibrar el cuerpo (igual al #20 de la foto)
        lArmEndX = -8.5 * sc;
        lArmEndY = shoulderY + 4.5 * sc;
        rArmEndX = 12.0 * sc;
        rArmEndY = shoulderY - 2.5 * sc;
      } else if (pose === "WALL_GUARD") {
        // Manos bajas juntas delante del cuerpo protegiendo en la barrera
        lArmEndX = -1.6 * sc;
        lArmEndY = hipY + 1.0 * sc;
        rArmEndX = 1.6 * sc;
        rArmEndY = hipY + 1.0 * sc;
      } else if (pose === "CELEBRATE_JUMP") {
        lArmEndX = -10 * sc;
        lArmEndY = shoulderY - 7 * sc;
        rArmEndX = 10 * sc;
        rArmEndY = shoulderY - 7 * sc;
      } else if (pose === "HANDS_ON_HEAD") {
        lArmEndX = -3.5 * sc;
        lArmEndY = headY;
        rArmEndX = 3.5 * sc;
        rArmEndY = headY;
      } else if (isMoving) {
        lArmEndX = -6.8 * sc + stride * 0.45;
        lArmEndY = shoulderY + 6.5 * sc - stride * 0.3;
        rArmEndX = 6.8 * sc - stride * 0.45;
        rArmEndY = shoulderY + 6.5 * sc + stride * 0.3;
      }

      // Mangas
      const lElbX = (-4.8 * sc + lArmEndX) * 0.5;
      const lElbY = (shoulderY + 1.5 * sc + lArmEndY) * 0.5;
      const rElbX = (4.8 * sc + rArmEndX) * 0.5;
      const rElbY = (shoulderY + 1.5 * sc + rArmEndY) * 0.5;

      ctx.strokeStyle = jerseyColor;
      ctx.lineWidth = 2.6 * sc;
      ctx.beginPath();
      ctx.moveTo(-4.8 * sc, shoulderY + 1.2 * sc);
      ctx.lineTo(lElbX, lElbY);
      ctx.moveTo(4.8 * sc, shoulderY + 1.2 * sc);
      ctx.lineTo(rElbX, rElbY);
      ctx.stroke();

      // Antebrazos piel (o manga larga si es portero/árbitro)
      ctx.strokeStyle = (isKeeper || isReferee) ? jerseyColor : skinColor;
      ctx.lineWidth = 2.0 * sc;
      ctx.beginPath();
      ctx.moveTo(lElbX, lElbY);
      ctx.lineTo(lArmEndX, lArmEndY);
      ctx.moveTo(rElbX, rElbY);
      ctx.lineTo(rArmEndX, rArmEndY);
      ctx.stroke();

      // Manos o guantes
      ctx.fillStyle = isKeeper ? "#bef264" : skinColor;
      ctx.beginPath();
      ctx.arc(lArmEndX, lArmEndY, (isKeeper ? 2.1 : 1.3) * sc, 0, Math.PI * 2);
      ctx.arc(rArmEndX, rArmEndY, (isKeeper ? 2.1 : 1.3) * sc, 0, Math.PI * 2);
      ctx.fill();

      // Banderín de juez de línea si es linier
      if (isLinesman) {
        ctx.strokeStyle = "#e2e8f0";
        ctx.lineWidth = 1.0 * sc;
        ctx.beginPath();
        ctx.moveTo(rArmEndX, rArmEndY);
        ctx.lineTo(rArmEndX + 2.5 * sc, rArmEndY + 5.5 * sc);
        ctx.stroke();
        ctx.fillStyle = "#ef4444";
        ctx.fillRect(rArmEndX + 1.0 * sc, rArmEndY + 3.0 * sc, 3.2 * sc, 2.5 * sc);
        ctx.fillStyle = "#facc15";
        ctx.fillRect(rArmEndX + 2.6 * sc, rArmEndY + 3.0 * sc, 1.6 * sc, 2.5 * sc);
      }

      // Cuello y Cabeza con corte de pelo realista
      ctx.fillStyle = skinColor;
      ctx.fillRect(-1.2 * sc, headY + 1.8 * sc, 2.4 * sc, 2.5 * sc);
      ctx.beginPath();
      ctx.arc(0, headY, headR, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = hairColor;
      ctx.beginPath();
      if (isBackView) {
        ctx.arc(0.2 * sc, headY - 0.4 * sc, headR * 0.96, 0.85 * Math.PI, 2.15 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(0.3 * sc, headY + 0.2 * sc, headR * 0.85, -0.2 * Math.PI, 0.85 * Math.PI);
        ctx.fill();
      } else {
        ctx.arc(0, headY - 0.8 * sc, headR * 0.96, Math.PI, 0);
        ctx.fill();
      }

      // Indicador sutil sobre el jugador activo con balón (estilo cursor EA FC)
      if (ent.isActiveCarrier) {
        ctx.fillStyle = "#38bdf8";
        ctx.beginPath();
        ctx.moveTo(0, headY - 6.2 * sc);
        ctx.lineTo(-2.6 * sc, headY - 9.8 * sc);
        ctx.lineTo(2.6 * sc, headY - 9.8 * sc);
        ctx.closePath();
        ctx.fill();
      }

      ctx.restore();
      ctx.restore();
    }

    function drawFrontalHighlightScene(ctx, w, h, hlData) {
      const now = performance.now();
      if (!hlData.animStartTime) hlData.animStartTime = now;
      const elapsed = (now - hlData.animStartTime) / 1000;

      const outcome = hlData.outcome || "GOAL";
      const targetCorner = hlData.targetCorner || "TOP_RIGHT";
      const wideDirection = hlData.wideDirection || (targetCorner.includes("LEFT") ? "LEFT" : "RIGHT");
      const isHome = hlData.attackingSide === "home";
      const atkTeam = isHome ? homeTeam : awayTeam;
      const defTeam = isHome ? awayTeam : homeTeam;
      const atkKit = isHome ? kits.home : kits.away;
      const defKit = isHome ? kits.away : kits.home;

      const sc = Math.min(w / 460, h / 290);
      const lerp = (a, b, t) => a + (b - a) * Math.max(0, Math.min(1, t));
      const p3d = (u, v, z = 0) => projectEA3D(u, v, z, w, h);

      // 1. FONDO DE GRADAS EN PERSPECTIVA DIAGONAL (FIEL A LA IMAGEN DE REFERENCIA)
      ctx.fillStyle = "#18181b";
      ctx.fillRect(0, 0, w, h);

      // Polígono de la grada tras la línea de fondo (izquierda a centro-arriba) y banda lejana (centro-arriba a derecha)
      const cornerAdBase = p3d(-1.5, -1.2, 0);
      const leftAdBase = p3d(-1.5, 48, 0);
      const rightAdBase = p3d(38, -1.2, 0);

      // Grada de fondo (detrás de la portería, desde x=0 hasta el córner en x≈0.67w)
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(w, 0);
      ctx.lineTo(rightAdBase.x, rightAdBase.y);
      ctx.lineTo(cornerAdBase.x, cornerAdBase.y);
      ctx.lineTo(leftAdBase.x, leftAdBase.y);
      ctx.lineTo(0, leftAdBase.y + 20 * sc);
      ctx.closePath();
      ctx.clip();

      // Base de hormigón y asientos rojos/grises del estadio
      const standGrad = ctx.createLinearGradient(0, 0, 0, h * 0.36);
      standGrad.addColorStop(0, "#1e1b24");
      standGrad.addColorStop(0.5, "#27272a");
      standGrad.addColorStop(1, "#3f3f46");
      ctx.fillStyle = standGrad;
      ctx.fillRect(0, 0, w, h * 0.42);

      // Bloques de asientos rojos visibles entre aficionados (como en la foto)
      for (let r = 0; r < 9; r++) {
        const rowT = r / 9;
        const yLeft = lerp(4 * sc, leftAdBase.y - 14 * sc, rowT);
        const yCorner = lerp(-18 * sc, cornerAdBase.y - 11 * sc, rowT);
        const yRight = lerp(-10 * sc, rightAdBase.y - 11 * sc, rowT);

        // Filas de grada tras portería
        ctx.strokeStyle = r % 2 === 0 ? "#dc2626" : "#991b1b";
        ctx.lineWidth = 4.2 * sc;
        ctx.beginPath();
        ctx.moveTo(0, yLeft);
        ctx.lineTo(cornerAdBase.x, yCorner);
        ctx.lineTo(w, yRight);
        ctx.stroke();
      }

      // Escaleras de hormigón con bordes amarillos de seguridad y vomitorios (como en la parte superior central de la foto)
      const drawStairway = (topX, topY, botX, botY, stairW) => {
        ctx.fillStyle = "#52525b";
        ctx.beginPath();
        ctx.moveTo(topX - stairW * 0.45, topY);
        ctx.lineTo(topX + stairW * 0.45, topY);
        ctx.lineTo(botX + stairW * 0.55, botY);
        ctx.lineTo(botX - stairW * 0.55, botY);
        ctx.closePath();
        ctx.fill();

        const steps = 8;
        for (let s = 0; s <= steps; s++) {
          const st = s / steps;
          const sx = lerp(topX, botX, st);
          const sy = lerp(topY, botY, st);
          const sw = lerp(stairW * 0.45, stairW * 0.55, st);
          ctx.strokeStyle = "#eab308";
          ctx.lineWidth = 1.3 * sc;
          ctx.beginPath();
          ctx.moveTo(sx - sw, sy);
          ctx.lineTo(sx + sw, sy);
          ctx.stroke();
        }
      };

      drawStairway(w * 0.15, -5 * sc, w * 0.21, lerp(leftAdBase.y, cornerAdBase.y, 0.34) - 8 * sc, 15 * sc);
      drawStairway(w * 0.36, -5 * sc, w * 0.41, lerp(leftAdBase.y, cornerAdBase.y, 0.63) - 8 * sc, 14 * sc);
      drawStairway(w * 0.91, -5 * sc, w * 0.93, lerp(cornerAdBase.y, rightAdBase.y, 0.78) - 8 * sc, 16 * sc);

      // Vomitorio / túnel de esquina (arriba al centro-derecha, igual que en la foto)
      ctx.fillStyle = "#d4d4d8";
      ctx.fillRect(w * 0.56, 0, w * 0.14, cornerAdBase.y - 4 * sc);
      ctx.fillStyle = "#18181b";
      ctx.fillRect(w * 0.585, 0, w * 0.055, cornerAdBase.y - 12 * sc);
      drawStairway(w * 0.565, 0, w * 0.58, cornerAdBase.y - 8 * sc, 11 * sc);
      drawStairway(w * 0.685, 0, w * 0.70, cornerAdBase.y - 8 * sc, 12 * sc);

      // Multitud detallada (cabezas y torsos con camisetas granates, rosas, blancas, azules y chaquetas oscuras)
      const fanPalette = ["#881337", "#be123c", "#f472b6", "#fbcfe8", "#e2e8f0", "#1e293b", "#334155", "#7f1d1d", "#2563eb", "#d97706"];
      const crowdCelebrate = (elapsed > 12.4 && outcome === "GOAL") ? Math.abs(Math.sin(now * 0.015)) * 2.5 * sc : 0;

      for (let row = 0; row < 10; row++) {
        const rowT = (row + 0.4) / 10;
        // Grada izquierda (tras portería)
        const numLeftFans = 58;
        for (let i = 0; i < numLeftFans; i++) {
          const uFan = i / numLeftFans;
          const fx = lerp(0, cornerAdBase.x - 22 * sc, uFan);
          // Saltar huecos de escaleras y vomitorio
          if ((fx > w * 0.16 && fx < w * 0.21) || (fx > w * 0.37 && fx < w * 0.41) || (fx > w * 0.55 && fx < w * 0.71)) continue;
          const fyBase = lerp(lerp(4 * sc, leftAdBase.y - 12 * sc, rowT), lerp(-16 * sc, cornerAdBase.y - 10 * sc, rowT), uFan);
          const seed = (row * 73 + i * 31) % 100;
          if (seed < 12) continue; // Asiento libre ocasional mostrando butaca roja
          const jump = (seed % 3 === 0) ? crowdCelebrate : 0;
          const fy = fyBase - jump;
          const shirtCol = fanPalette[seed % fanPalette.length];

          // Torso del aficionado
          ctx.fillStyle = shirtCol;
          ctx.beginPath();
          ctx.roundRect(fx - 2.3 * sc, fy - 4.5 * sc, 4.6 * sc, 5.2 * sc, 1.2 * sc);
          ctx.fill();
          // Cabeza del aficionado
          ctx.fillStyle = seed % 4 === 0 ? "#8d5524" : "#f5cba7";
          ctx.beginPath();
          ctx.arc(fx, fy - 5.8 * sc, 1.55 * sc, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = seed % 2 === 0 ? "#1c1917" : "#451a03";
          ctx.beginPath();
          ctx.arc(fx, fy - 6.2 * sc, 1.5 * sc, Math.PI, 0);
          ctx.fill();
        }

        // Grada derecha (banda lateral superior)
        const numRightFans = 28;
        for (let i = 0; i < numRightFans; i++) {
          const uFan = i / numRightFans;
          const fx = lerp(cornerAdBase.x + 26 * sc, w, uFan);
          if (fx > w * 0.90 && fx < w * 0.95) continue;
          const fyBase = lerp(lerp(-12 * sc, cornerAdBase.y - 10 * sc, rowT), lerp(-6 * sc, rightAdBase.y - 10 * sc, rowT), uFan);
          const seed = (row * 53 + i * 29) % 100;
          if (seed < 14) continue;
          const fy = fyBase - ((seed % 2 === 0) ? crowdCelebrate : 0);
          ctx.fillStyle = fanPalette[(seed + 3) % fanPalette.length];
          ctx.beginPath();
          ctx.roundRect(fx - 2.3 * sc, fy - 4.5 * sc, 4.6 * sc, 5.2 * sc, 1.2 * sc);
          ctx.fill();
          ctx.fillStyle = "#f5cba7";
          ctx.beginPath();
          ctx.arc(fx, fy - 5.8 * sc, 1.5 * sc, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Stewards / Miembros de seguridad con chaleco reflectante naranja y amarillo frente a la valla (igual que en la foto)
      const stewards = [0.22, 0.42, 0.59, 0.62, 0.68, 0.72, 0.75];
      stewards.forEach((stPos, idx) => {
        const sx = w * stPos;
        const sy = stPos < 0.67
          ? lerp(leftAdBase.y, cornerAdBase.y, stPos / 0.67) - 3 * sc
          : lerp(cornerAdBase.y, rightAdBase.y, (stPos - 0.67) / 0.33) - 3 * sc;
        ctx.fillStyle = idx === 5 ? "#bef264" : "#f97316";
        ctx.beginPath();
        ctx.roundRect(sx - 2.2 * sc, sy - 6 * sc, 4.4 * sc, 5.5 * sc, 1 * sc);
        ctx.fill();
        ctx.fillStyle = "#f5cba7";
        ctx.beginPath();
        ctx.arc(sx, sy - 7.5 * sc, 1.5 * sc, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();

      // 2. CÉSPED 3D CON FRANJAS DE CORTE TRANSVERSALES Y LONGITUDINALES (EXACTO A LA REFERENCIA)
      const pitchPolyTL = p3d(-3, -3, 0);
      const pitchPolyBL = p3d(-3, 62, 0);
      const pitchPolyBR = p3d(42, 62, 0);
      const pitchPolyTR = p3d(42, -3, 0);

      ctx.fillStyle = "#2d6a22";
      ctx.beginPath();
      ctx.moveTo(pitchPolyTL.x, pitchPolyTL.y);
      ctx.lineTo(pitchPolyTR.x, pitchPolyTR.y);
      ctx.lineTo(pitchPolyBR.x, pitchPolyBR.y);
      ctx.lineTo(pitchPolyBL.x, pitchPolyBL.y);
      ctx.closePath();
      ctx.fill();

      // Bandas de siega paralelas a la línea de gol (cada 5.5m desde u = -3 hasta u = 40)
      const stripeWidthU = 5.5;
      for (let s = -1; s < 8; s++) {
        const u0 = s * stripeWidthU;
        const u1 = (s + 1) * stripeWidthU;
        const q1 = p3d(u0, -3.5, 0);
        const q2 = p3d(u1, -3.5, 0);
        const q3 = p3d(u1, 64, 0);
        const q4 = p3d(u0, 64, 0);

        ctx.fillStyle = (s % 2 === 0) ? "#2d6b22" : "#357a28";
        ctx.beginPath();
        ctx.moveTo(q1.x, q1.y);
        ctx.lineTo(q2.x, q2.y);
        ctx.lineTo(q3.x, q3.y);
        ctx.lineTo(q4.x, q4.y);
        ctx.closePath();
        ctx.fill();
      }

      // Pasadas longitudinales sutiles de cortacésped (paralelas a la banda)
      for (let lv = 0; lv < 14; lv++) {
        if (lv % 2 === 0) continue;
        const v0 = lv * 5.0;
        const v1 = (lv + 1) * 5.0;
        const l1 = p3d(-3, v0, 0);
        const l2 = p3d(42, v0, 0);
        const l3 = p3d(42, v1, 0);
        const l4 = p3d(-3, v1, 0);
        ctx.fillStyle = "rgba(255, 255, 255, 0.025)";
        ctx.beginPath();
        ctx.moveTo(l1.x, l1.y);
        ctx.lineTo(l2.x, l2.y);
        ctx.lineTo(l3.x, l3.y);
        ctx.lineTo(l4.x, l4.y);
        ctx.closePath();
        ctx.fill();
      }

      // Iluminación ambiental de estadio sobre el terreno de juego
      const grassLight = ctx.createRadialGradient(w * 0.45, h * 0.48, w * 0.05, w * 0.45, h * 0.48, w * 0.65);
      grassLight.addColorStop(0, "rgba(255, 255, 255, 0.06)");
      grassLight.addColorStop(0.6, "rgba(255, 255, 255, 0.0)");
      grassLight.addColorStop(1, "rgba(0, 15, 5, 0.22)");
      ctx.fillStyle = grassLight;
      ctx.fillRect(0, 0, w, h);

      // 3. VALLAS PUBLICITARIAS LED 3D EN ÁNGULO (ESTILO PREMIER LEAGUE / EA SPORTS)
      const draw3DBannerSegment = (pA_bot, pB_bot, pB_top, pA_top, index) => {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(pA_bot.x, pA_bot.y);
        ctx.lineTo(pB_bot.x, pB_bot.y);
        ctx.lineTo(pB_top.x, pB_top.y);
        ctx.lineTo(pA_top.x, pA_top.y);
        ctx.closePath();
        ctx.clip();

        // Fondo blanco luminoso con bloques diagonales púrpura, magenta, cian y verde lima (idéntico a la foto)
        ctx.fillStyle = "#f8fafc";
        ctx.fill();

        const segGrad = ctx.createLinearGradient(pA_bot.x, pA_bot.y, pB_bot.x, pB_bot.y);
        if (index % 2 === 0) {
          segGrad.addColorStop(0, "#3b0764");
          segGrad.addColorStop(0.24, "#3b0764");
          segGrad.addColorStop(0.26, "#ffffff");
          segGrad.addColorStop(0.72, "#ffffff");
          segGrad.addColorStop(0.75, "#ec4899");
          segGrad.addColorStop(0.88, "#f97316");
          segGrad.addColorStop(1, "#84cc16");
        } else {
          segGrad.addColorStop(0, "#38bdf8");
          segGrad.addColorStop(0.18, "#3b0764");
          segGrad.addColorStop(0.22, "#ffffff");
          segGrad.addColorStop(0.74, "#ffffff");
          segGrad.addColorStop(0.78, "#a855f7");
          segGrad.addColorStop(1, "#22c55e");
        }
        ctx.fillStyle = segGrad;
        ctx.fill();

        // Texto rotado siguiendo el ángulo exacto de la valla LED
        const midX = (pA_bot.x + pB_bot.x + pA_top.x + pB_top.x) * 0.25;
        const midY = (pA_bot.y + pB_bot.y + pA_top.y + pB_top.y) * 0.25;
        const angle = Math.atan2(pB_bot.y - pA_bot.y, pB_bot.x - pA_bot.x);
        const segLen = Math.hypot(pB_bot.x - pA_bot.x, pB_bot.y - pA_bot.y);

        ctx.translate(midX, midY);
        if (Math.abs(angle) > Math.PI / 2) {
          ctx.rotate(angle + Math.PI);
        } else {
          ctx.rotate(angle);
        }

        ctx.fillStyle = "#2e1065";
        ctx.font = `900 ${Math.max(6, Math.round(segLen * 0.11))}px "Trebuchet MS", sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        const label = (elapsed > 12.4 && outcome === "GOAL")
          ? `¡GOOOL! ${atkTeam.shortName}`
          : "Premier  •  League";
        ctx.fillText(label, 0, 0);
        ctx.restore();

        // Borde superior oscuro de la pantalla LED
        ctx.strokeStyle = "#0f172a";
        ctx.lineWidth = 1.0 * sc;
        ctx.beginPath();
        ctx.moveTo(pA_top.x, pA_top.y);
        ctx.lineTo(pB_top.x, pB_top.y);
        ctx.stroke();
      };

      // Vallas LED a lo largo de la línea de fondo (desde v = 46 hasta el córner en v = -1.2)
      const goalLineSegs = 5;
      for (let i = 0; i < goalLineSegs; i++) {
        const vStart = 46 - i * (47.2 / goalLineSegs);
        const vEnd = 46 - (i + 1) * (47.2 / goalLineSegs);
        draw3DBannerSegment(
          p3d(-1.4, vStart, 0),
          p3d(-1.4, vEnd, 0),
          p3d(-1.4, vEnd, 1.05),
          p3d(-1.4, vStart, 1.05),
          i
        );
      }

      // Vallas LED a lo largo de la banda lejana (desde u = -1.4 hasta u = 34)
      const touchLineSegs = 3;
      for (let i = 0; i < touchLineSegs; i++) {
        const uStart = -1.4 + i * (35.4 / touchLineSegs);
        const uEnd = -1.4 + (i + 1) * (35.4 / touchLineSegs);
        draw3DBannerSegment(
          p3d(uStart, -1.2, 0),
          p3d(uEnd, -1.2, 0),
          p3d(uEnd, -1.2, 1.05),
          p3d(uStart, -1.2, 1.05),
          i + 1
        );
      }

      // 4. LÍNEAS DE CAL EN PERSPECTIVA 3D EXACTA
      ctx.strokeStyle = "rgba(255, 255, 255, 0.88)";
      ctx.lineWidth = 1.8 * sc;
      ctx.lineJoin = "round";

      const drawPitchLine3D = (u1, v1, u2, v2) => {
        const p1 = p3d(u1, v1, 0);
        const p2 = p3d(u2, v2, 0);
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      };

      // Línea de gol (u = 0) y línea de banda lejana (v = 0)
      drawPitchLine3D(0, 0, 0, 58);
      drawPitchLine3D(0, 0, 42, 0);

      // Área Grande (18 yardas: u = 0..16.5, v = 13.84..54.16)
      drawPitchLine3D(0, 13.84, 16.5, 13.84);
      drawPitchLine3D(16.5, 13.84, 16.5, 54.16);
      drawPitchLine3D(16.5, 54.16, 0, 54.16);

      // Área Pequeña (6 yardas: u = 0..5.5, v = 24.84..43.16)
      drawPitchLine3D(0, 24.84, 5.5, 24.84);
      drawPitchLine3D(5.5, 24.84, 5.5, 43.16);
      drawPitchLine3D(5.5, 43.16, 0, 43.16);

      // Punto de penalti (u = 11.0, v = 34.0)
      const penSpot = p3d(11.0, 34.0, 0);
      ctx.fillStyle = "rgba(255, 255, 255, 0.92)";
      ctx.beginPath();
      ctx.ellipse(penSpot.x, penSpot.y, 2.2 * sc, 1.3 * sc, -0.2, 0, Math.PI * 2);
      ctx.fill();

      // Semicírculo del área grande (D-Arc: radio 9.15m desde (11, 34), para u >= 16.5)
      ctx.beginPath();
      const maxAngle = Math.acos((16.5 - 11.0) / 9.15); // ~0.926 rad
      const arcSteps = 28;
      for (let s = 0; s <= arcSteps; s++) {
        const ang = -maxAngle + (s / arcSteps) * (2 * maxAngle);
        const au = 11.0 + Math.cos(ang) * 9.15;
        const av = 34.0 + Math.sin(ang) * 9.15;
        const ap = p3d(au, av, 0);
        if (s === 0) ctx.moveTo(ap.x, ap.y);
        else ctx.lineTo(ap.x, ap.y);
      }
      ctx.stroke();

      // Arco de córner en (0, 0) y banderín de córner
      ctx.beginPath();
      for (let s = 0; s <= 10; s++) {
        const ang = (s / 10) * (Math.PI / 2);
        const cp = p3d(Math.cos(ang) * 1.2, Math.sin(ang) * 1.2, 0);
        if (s === 0) ctx.moveTo(cp.x, cp.y);
        else ctx.lineTo(cp.x, cp.y);
      }
      ctx.stroke();

      const cFlagBot = p3d(0, 0, 0);
      const cFlagTop = p3d(0, 0, 1.5);
      ctx.strokeStyle = "#f8fafc";
      ctx.lineWidth = 1.2 * sc;
      ctx.beginPath();
      ctx.moveTo(cFlagBot.x, cFlagBot.y);
      ctx.lineTo(cFlagTop.x, cFlagTop.y);
      ctx.stroke();
      ctx.fillStyle = "#ef4444";
      ctx.beginPath();
      ctx.moveTo(cFlagTop.x, cFlagTop.y);
      ctx.lineTo(cFlagTop.x + 4.5 * sc, cFlagTop.y + 1.8 * sc);
      ctx.lineTo(cFlagTop.x, cFlagTop.y + 3.6 * sc);
      ctx.closePath();
      ctx.fill();

      // 5. PORTERÍA 3D CON CAJA DE RED PROFUNDA (u = 0, v = 30.34..37.66, z = 0..2.44)
      const vPostRight = 30.34; // Poste derecho (más cercano al córner superior)
      const vPostLeft = 37.66;  // Poste izquierdo (más cercano al primer plano inferior-izquierdo)
      const goalDepthU = -2.15; // Profundidad hacia atrás de la red

      const pFrontR_bot = p3d(0, vPostRight, 0);
      const pFrontR_top = p3d(0, vPostRight, 2.44);
      const pFrontL_bot = p3d(0, vPostLeft, 0);
      const pFrontL_top = p3d(0, vPostLeft, 2.44);

      const isGoalScored = outcome === "GOAL" && elapsed >= 12.5;
      const netRipple = isGoalScored ? Math.max(0, 1 - (elapsed - 12.5) * 0.45) * Math.sin((elapsed - 12.5) * 18) * 0.35 : 0;

      const pBackR_bot = p3d(goalDepthU - netRipple, vPostRight, 0);
      const pBackR_top = p3d(goalDepthU - netRipple, vPostRight, 2.38);
      const pBackL_bot = p3d(goalDepthU - netRipple, vPostLeft, 0);
      const pBackL_top = p3d(goalDepthU - netRipple, vPostLeft, 2.38);

      // Sombra de los postes y red en el césped
      ctx.strokeStyle = "rgba(0, 20, 5, 0.28)";
      ctx.lineWidth = 2.5 * sc;
      ctx.beginPath();
      ctx.moveTo(pFrontL_bot.x, pFrontL_bot.y);
      ctx.lineTo(pBackL_bot.x, pBackL_bot.y);
      ctx.lineTo(pBackR_bot.x, pBackR_bot.y);
      ctx.lineTo(pFrontR_bot.x, pFrontR_bot.y);
      ctx.stroke();

      // Soportes traseros oscuros/metálicos de la red
      ctx.strokeStyle = "rgba(148, 163, 184, 0.75)";
      ctx.lineWidth = 1.6 * sc;
      ctx.beginPath();
      ctx.moveTo(pFrontR_top.x, pFrontR_top.y);
      ctx.lineTo(pBackR_top.x, pBackR_top.y);
      ctx.lineTo(pBackR_bot.x, pBackR_bot.y);
      ctx.moveTo(pFrontL_top.x, pFrontL_top.y);
      ctx.lineTo(pBackL_top.x, pBackL_top.y);
      ctx.lineTo(pBackL_bot.x, pBackL_bot.y);
      ctx.moveTo(pBackL_bot.x, pBackL_bot.y);
      ctx.lineTo(pBackR_bot.x, pBackR_bot.y);
      ctx.moveTo(pBackL_top.x, pBackL_top.y);
      ctx.lineTo(pBackR_top.x, pBackR_top.y);
      ctx.stroke();

      // Función auxiliar para tejer malla 3D en un cuadrilátero de la red
      const drawNetQuadMesh = (qTL, qTR, qBR, qBL, cols, rows, alpha) => {
        ctx.fillStyle = `rgba(241, 245, 249, ${alpha * 0.45})`;
        ctx.beginPath();
        ctx.moveTo(qTL.x, qTL.y);
        ctx.lineTo(qTR.x, qTR.y);
        ctx.lineTo(qBR.x, qBR.y);
        ctx.lineTo(qBL.x, qBL.y);
        ctx.closePath();
        ctx.fill();

        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.lineWidth = 0.75 * sc;
        ctx.beginPath();
        for (let c = 0; c <= cols; c++) {
          const tc = c / cols;
          const sx = lerp(qTL.x, qTR.x, tc);
          const sy = lerp(qTL.y, qTR.y, tc);
          const ex = lerp(qBL.x, qBR.x, tc);
          const ey = lerp(qBL.y, qBR.y, tc);
          ctx.moveTo(sx, sy);
          ctx.lineTo(ex, ey);
        }
        for (let r = 0; r <= rows; r++) {
          const tr = r / rows;
          const sx = lerp(qTL.x, qBL.x, tr);
          const sy = lerp(qTL.y, qBL.y, tr);
          const ex = lerp(qTR.x, qBR.x, tr);
          const ey = lerp(qTR.y, qBR.y, tr);
          ctx.moveTo(sx, sy);
          ctx.lineTo(ex, ey);
        }
        ctx.stroke();
      };

      // Red lateral derecha (fondo), red trasera, red superior (techo) y red lateral izquierda (primer plano)
      drawNetQuadMesh(pBackR_top, pFrontR_top, pFrontR_bot, pBackR_bot, 7, 10, 0.36);
      drawNetQuadMesh(pBackL_top, pBackR_top, pBackR_bot, pBackL_bot, 22, 10, 0.44);
      drawNetQuadMesh(pBackL_top, pBackR_top, pFrontR_top, pFrontL_top, 20, 6, 0.38);

      // Función que dibuja el marco frontal blanco brillante (postes y larguero) y el lateral izquierdo de la red
      const drawGoalFrontFrame = () => {
        drawNetQuadMesh(pBackL_top, pFrontL_top, pFrontL_bot, pBackL_bot, 7, 10, 0.42);

        // Postes y larguero cilíndricos blancos con volumen
        ctx.strokeStyle = "rgba(15, 23, 42, 0.25)";
        ctx.lineWidth = 4.6 * sc;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.beginPath();
        ctx.moveTo(pFrontL_bot.x, pFrontL_bot.y);
        ctx.lineTo(pFrontL_top.x, pFrontL_top.y);
        ctx.lineTo(pFrontR_top.x, pFrontR_top.y);
        ctx.lineTo(pFrontR_bot.x, pFrontR_bot.y);
        ctx.stroke();

        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 3.4 * sc;
        ctx.beginPath();
        ctx.moveTo(pFrontL_bot.x, pFrontL_bot.y);
        ctx.lineTo(pFrontL_top.x, pFrontL_top.y);
        ctx.lineTo(pFrontR_top.x, pFrontR_top.y);
        ctx.lineTo(pFrontR_bot.x, pFrontR_bot.y);
        ctx.stroke();
      };

      // 6. COREOGRAFÍA DINÁMICA MULTIPATRÓN DE LOS 15 SEGUNDOS EN COORDENADAS 3D (u, v, z)
      // - u = distancia a línea de gol (0 = portería, 11 = penalti, 16.5 = frontal área, 30 = medular)
      // - v = posición lateral (0 = banda lejana sup-dcha, 34 = centro portería, 55 = banda cercana inf-izq)
      const playPattern = hlData.playPattern || "TIKI_TAKA_CENTRAL";
      const seed = hlData.patternSeed !== undefined ? hlData.patternSeed : 0.5;
      const vJit = (seed - 0.5) * 3.2; // Variación sutil adicional entre jugadas del mismo tipo

      let pivU = 27.0, pivV = 31.0, pivPose = "READY";
      let supU = 19.0, supV = 29.0, supPose = "READY";
      let winU = 21.0, winV = 14.0, winPose = "READY";
      let strU = 18.0, strV = 38.0, strZ = 0, strPose = "READY";
      let atkBox1U = 11.5, atkBox1V = 36.5, atkBox1Pose = "RUNNING_UP";
      let atkBox2U = 12.5, atkBox2V = 28.5, atkBox2Pose = "RUNNING_UP";

      // 8 defensores de campo cuyos movimientos se adaptan dinámicamente al patrón de ataque
      let defs = [
        { u: 8.5, v: 39.0, pose: "JOCKEY", facing: "FRONT_RIGHT", num: 2 },
        { u: 8.2, v: 35.0, pose: "JOCKEY", facing: "FRONT_RIGHT", num: 4, name: hlData.defender?.name },
        { u: 8.4, v: 31.0, pose: "JOCKEY", facing: "FRONT_RIGHT", num: 5 },
        { u: 9.0, v: 25.0, pose: "JOCKEY", facing: "FRONT_RIGHT", num: 3 },
        { u: 12.5, v: 37.0, pose: "JOCKEY", facing: "FRONT_RIGHT", num: 6 },
        { u: 13.0, v: 30.0, pose: "JOCKEY", facing: "FRONT_RIGHT", num: 8 },
        { u: 14.5, v: 21.0, pose: "JOCKEY", facing: "FRONT_RIGHT", num: 14 },
        { u: 28.5, v: 41.0, pose: "READY", facing: "BACK_LEFT", num: 17 }
      ];

      let ballU = 26.0, ballV = 31.0, ballZ = 0;
      let activeCarrierId = "PIVOT";
      let shotOriginU = 14.0, shotOriginV = 34.0, shotOriginZ = 0;
      let blockDefIdx = 1; // Índice del defensa que bloquea si outcome === "BLOCK"

      if (playPattern === "TIKI_TAKA_CENTRAL") {
        // PATRÓN 1: Combinación rápida por el centro, pared en la media luna y pase filtrado al punto de penalti
        shotOriginU = 10.6;
        shotOriginV = 34.8 + vJit * 0.5;
        shotOriginZ = 0;
        blockDefIdx = 1;

        // Pivote conduce y toca al mediapunta (0 - 3.0s)
        if (elapsed < 2.4) {
          const t = elapsed / 2.4;
          pivU = lerp(29.0, 24.5, t);
          pivV = lerp(33.0 + vJit, 31.5 + vJit, t);
          pivPose = "DRIBBLE";
          activeCarrierId = "PIVOT";
        } else {
          const t = Math.min(1, (elapsed - 2.4) / 6.0);
          pivU = lerp(24.5, 20.5, t);
          pivV = lerp(31.5 + vJit, 30.0 + vJit, t);
          pivPose = elapsed < 3.0 ? "PASS_DELIVERY" : "RUNNING_UP";
        }

        // Mediapunta (SUPPORT) recibe de espaldas en la media luna y devuelve pared de primeras (3.0 - 5.8s)
        if (elapsed < 3.6) {
          supU = lerp(20.5, 18.2, elapsed / 3.6);
          supV = 33.5 + vJit;
          supPose = "RUNNING_UP";
        } else if (elapsed < 5.6) {
          supU = 18.2;
          supV = 33.5 + vJit;
          supPose = elapsed < 4.8 ? "CONTROL" : "PASS_DELIVERY";
          activeCarrierId = "SUPPORT";
        } else {
          const t = Math.min(1, (elapsed - 5.6) / 4.5);
          supU = lerp(18.2, 14.5, t);
          supV = lerp(33.5 + vJit, 37.5, t);
          supPose = (elapsed > 12.5 && outcome === "GOAL") ? "CELEBRATE_JUMP" : "RUNNING_UP";
        }

        // Interior/Asistente (WINGER) rompe en diagonal para recibir la pared y filtrar al área (5.8 - 9.2s)
        if (elapsed < 5.6) {
          const t = elapsed / 5.6;
          winU = lerp(23.5, 16.8, t);
          winV = lerp(21.0, 26.5 + vJit * 0.5, t);
          winPose = "SPRINT";
        } else if (elapsed < 8.6) {
          const t = (elapsed - 5.6) / 3.0;
          winU = lerp(16.8, 14.2, t);
          winV = lerp(26.5 + vJit * 0.5, 28.5 + vJit * 0.5, t);
          winPose = "DRIBBLE";
          activeCarrierId = "WINGER";
        } else if (elapsed < 9.3) {
          winU = 14.2;
          winV = 28.5 + vJit * 0.5;
          winPose = "PASS_DELIVERY";
          activeCarrierId = "WINGER";
        } else {
          winU = 13.5;
          winV = 28.0 + vJit * 0.5;
          winPose = (elapsed > 12.5 && outcome === "GOAL") ? "CELEBRATE_JUMP" : "READY";
        }

        // Delantero (STRIKER) amaga hacia afuera y tira desmarque de ruptura entre centrales al punto de penalti
        if (elapsed < 6.0) {
          const t = elapsed / 6.0;
          strU = lerp(18.5, 15.0, t);
          strV = lerp(41.5, 39.0, t);
          strPose = "RUNNING_UP";
        } else if (elapsed < 10.4) {
          const t = (elapsed - 6.0) / 4.4;
          strU = lerp(15.0, shotOriginU + 0.5, t);
          strV = lerp(39.0, shotOriginV, t);
          strPose = "SPRINT";
          if (elapsed >= 9.3) activeCarrierId = "STRIKER";
        } else if (elapsed < 11.5) {
          strU = shotOriginU + 0.4;
          strV = shotOriginV;
          strPose = elapsed < 11.0 ? "CONTROL" : "WINDUP_SHOT";
          activeCarrierId = "STRIKER";
        } else {
          strU = shotOriginU;
          strV = shotOriginV;
          strPose = elapsed < 12.6 ? "SHOT_FOLLOW_THROUGH" : (outcome === "GOAL" ? "CELEBRATE_JUMP" : "HANDS_ON_HEAD");
          activeCarrierId = "STRIKER";
        }

        atkBox1U = lerp(16.0, 8.5, Math.min(1, elapsed / 11));
        atkBox1V = lerp(45.0, 42.5, Math.min(1, elapsed / 11));
        atkBox2U = lerp(16.5, 9.2, Math.min(1, elapsed / 11));
        atkBox2V = lerp(16.0, 22.0, Math.min(1, elapsed / 11));

        // Defensores: dos medios salen a presionar la pared en la frontal, centrales intentan cerrar el pase interior
        const dProg = Math.min(1, elapsed / 11.0);
        defs = [
          { u: lerp(12.0, 8.8, dProg), v: lerp(42.5, 40.5, dProg), pose: "RUNNING_UP", facing: "FRONT_RIGHT", num: 2 },
          { u: lerp(12.2, 9.4, dProg), v: lerp(36.5, shotOriginV + 1.2, dProg), pose: (outcome === "BLOCK" && elapsed >= 11.4) ? "SLIDE_BLOCK" : "SPRINT", facing: "FRONT_RIGHT", num: 4, name: hlData.defender?.name },
          { u: lerp(12.0, 9.2, dProg), v: lerp(30.5, shotOriginV - 2.2, dProg), pose: "SPRINT", facing: "FRONT_RIGHT", num: 5 },
          { u: lerp(12.5, 9.5, dProg), v: lerp(23.0, 23.5, dProg), pose: "JOCKEY", facing: "FRONT_RIGHT", num: 3 },
          { u: lerp(17.5, 16.5, Math.min(1, elapsed / 5)), v: lerp(34.5, 33.5, Math.min(1, elapsed / 5)), pose: "JOCKEY", facing: "FRONT_RIGHT", num: 6 },
          { u: lerp(17.0, 14.8, Math.min(1, elapsed / 8)), v: lerp(27.5, 28.5, Math.min(1, elapsed / 8)), pose: "RUNNING_UP", facing: "FRONT_RIGHT", num: 8 },
          { u: lerp(21.0, 17.5, dProg), v: 21.0, pose: "RUNNING_UP", facing: "BACK_LEFT", num: 14 },
          { u: lerp(28.0, 23.5, dProg), v: 38.0, pose: "RUNNING_UP", facing: "BACK_LEFT", num: 17 }
        ];

        // Balón en Fases 1-3 (0 - 11.5s)
        if (elapsed < 2.4) {
          ballU = pivU - 0.6; ballV = pivV + 0.4; ballZ = 0;
        } else if (elapsed < 3.6) {
          const t = (elapsed - 2.4) / 1.2;
          ballU = lerp(24.0, 18.5, t); ballV = lerp(31.5 + vJit, 33.5 + vJit, t); ballZ = 0;
        } else if (elapsed < 4.8) {
          ballU = supU - 0.5; ballV = supV + 0.4; ballZ = 0;
        } else if (elapsed < 5.8) {
          const t = (elapsed - 4.8) / 1.0;
          ballU = lerp(18.0, 16.8, t); ballV = lerp(33.5 + vJit, 26.8 + vJit * 0.5, t); ballZ = 0;
        } else if (elapsed < 8.6) {
          ballU = winU - 0.6; ballV = winV + 0.5; ballZ = 0;
        } else if (elapsed < 10.4) {
          const t = (elapsed - 8.6) / 1.8;
          ballU = lerp(14.0, shotOriginU + 0.2, t); ballV = lerp(28.5 + vJit * 0.5, shotOriginV + 0.4, t); ballZ = 0;
        } else if (elapsed < 11.5) {
          ballU = shotOriginU; ballV = shotOriginV + 0.5; ballZ = 0;
        }

      } else if (playPattern === "WING_CROSS_HEADER") {
        // PATRÓN 2: Cambio de orientación a la banda derecha lejana, sprint por la cal y centro aéreo al área para testarazo/volea
        shotOriginU = 7.8;
        shotOriginV = 35.5 + vJit * 0.5;
        shotOriginZ = 1.35; // Remate aéreo de cabeza / volea en suspensión
        blockDefIdx = 1;

        // Pivote cambia de orientación en largo hacia el extremo derecho (0 - 3.5s)
        if (elapsed < 2.0) {
          const t = elapsed / 2.0;
          pivU = lerp(28.5, 26.0, t);
          pivV = lerp(39.0, 36.5, t);
          pivPose = "DRIBBLE";
          activeCarrierId = "PIVOT";
        } else {
          const t = Math.min(1, (elapsed - 2.0) / 7.0);
          pivU = lerp(26.0, 19.5, t);
          pivV = lerp(36.5, 31.0, t);
          pivPose = elapsed < 2.7 ? "PASS_DELIVERY" : "RUNNING_UP";
        }

        // Extremo derecho (WINGER) pegado a la banda superior derecha (v ≈ 4.5..7.5) desborda hasta línea de fondo
        if (elapsed < 3.6) {
          const t = elapsed / 3.6;
          winU = lerp(22.0, 17.5, t);
          winV = lerp(5.5, 4.8, t);
          winPose = "RUNNING_UP";
        } else if (elapsed < 8.5) {
          const t = (elapsed - 3.6) / 4.9;
          winU = lerp(17.5, 4.2, t);
          winV = lerp(4.8, 7.5, t);
          winPose = "SPRINT";
          activeCarrierId = "WINGER";
        } else if (elapsed < 9.3) {
          winU = 4.2; winV = 7.5;
          winPose = "PASS_DELIVERY";
          activeCarrierId = "WINGER";
        } else {
          winU = 4.0; winV = 8.5;
          winPose = (elapsed > 12.5 && outcome === "GOAL") ? "CELEBRATE_JUMP" : "READY";
        }

        // Delantero centro (STRIKER) carga desde la frontal hasta el corazón del área y salta a cabecear (10.5 - 12.2s)
        if (elapsed < 4.5) {
          strU = lerp(23.0, 18.5, elapsed / 4.5);
          strV = lerp(39.5, 38.0, elapsed / 4.5);
          strPose = "RUNNING_UP";
        } else if (elapsed < 10.6) {
          const t = (elapsed - 4.5) / 6.1;
          strU = lerp(18.5, shotOriginU + 0.6, t);
          strV = lerp(38.0, shotOriginV, t);
          strPose = "SPRINT";
        } else if (elapsed < 12.3) {
          const jumpT = (elapsed - 10.6) / 1.7;
          strU = shotOriginU;
          strV = shotOriginV;
          strZ = Math.sin(jumpT * Math.PI) * 1.15;
          strPose = elapsed < 11.5 ? "WINDUP_SHOT" : "SHOT_FOLLOW_THROUGH";
          activeCarrierId = "STRIKER";
        } else {
          strU = shotOriginU;
          strV = shotOriginV;
          strZ = 0;
          strPose = outcome === "GOAL" ? "CELEBRATE_JUMP" : "HANDS_ON_HEAD";
          activeCarrierId = "STRIKER";
        }

        // Mediapunta (SUPPORT) ataca el primer palo arrastrando marca
        const supT = Math.min(1, elapsed / 10.5);
        supU = lerp(21.0, 6.8, supT);
        supV = lerp(27.0, 27.5, supT);
        supPose = (elapsed > 12.5 && outcome === "GOAL") ? "CELEBRATE_JUMP" : "SPRINT";

        // Otros atacantes cerrando segundo palo y rechace
        atkBox1U = lerp(22.0, 8.8, supT);
        atkBox1V = lerp(45.0, 42.5, supT);
        atkBox2U = lerp(24.0, 14.8, supT);
        atkBox2V = lerp(33.0, 34.0, supT);

        // Defensores: el lateral persigue al extremo por banda, los centrales basculan y saltan en el área
        const dT = Math.min(1, elapsed / 10.5);
        const defJump = (elapsed >= 10.7 && elapsed <= 12.2) ? Math.sin(((elapsed - 10.7) / 1.5) * Math.PI) * 0.75 : 0;
        defs = [
          { u: lerp(18.5, 5.5, dT), v: lerp(8.5, 9.5, dT), pose: "SPRINT", facing: "BACK_LEFT", num: 3 },
          { u: lerp(14.5, 6.8, dT), v: lerp(34.0, shotOriginV - 1.5, dT), z: defJump, pose: (outcome === "BLOCK" && elapsed >= 11.3) ? "SLIDE_BLOCK" : "JOCKEY", facing: "FRONT_RIGHT", num: 4, name: hlData.defender?.name },
          { u: lerp(14.0, 6.2, dT), v: lerp(26.5, 28.0, dT), pose: "JOCKEY", facing: "FRONT_RIGHT", num: 5 },
          { u: lerp(15.0, 8.2, dT), v: lerp(41.5, 41.0, dT), pose: "JOCKEY", facing: "FRONT_RIGHT", num: 2 },
          { u: lerp(19.0, 12.5, dT), v: lerp(29.0, 31.0, dT), pose: "RUNNING_UP", facing: "BACK_LEFT", num: 6 },
          { u: lerp(20.5, 14.0, dT), v: lerp(20.0, 22.0, dT), pose: "RUNNING_UP", facing: "BACK_LEFT", num: 8 },
          { u: lerp(23.0, 16.5, dT), v: 38.0, pose: "RUNNING_UP", facing: "BACK_LEFT", num: 14 },
          { u: 29.0, v: 43.0, pose: "READY", facing: "BACK_LEFT", num: 17 }
        ];

        // Balón (cambio de orientación aéreo -> conducción por banda -> centro bombeado al segundo palo)
        if (elapsed < 2.0) {
          ballU = pivU - 0.6; ballV = pivV - 0.4; ballZ = 0;
        } else if (elapsed < 3.6) {
          const t = (elapsed - 2.0) / 1.6;
          ballU = lerp(26.0, 17.5, t);
          ballV = lerp(36.0, 5.2, t);
          ballZ = Math.sin(t * Math.PI) * 2.8;
        } else if (elapsed < 8.5) {
          ballU = winU - 0.6; ballV = winV + 0.4; ballZ = 0;
        } else if (elapsed < 11.5) {
          const t = (elapsed - 8.5) / 3.0;
          ballU = lerp(4.2, shotOriginU, t);
          ballV = lerp(7.5, shotOriginV, t);
          ballZ = lerp(0, shotOriginZ, t) + Math.sin(t * Math.PI) * 2.4;
        }

      } else if (playPattern === "NEAR_WING_CUTBACK") {
        // PATRÓN 3: Internada eléctrica por la banda izquierda cercana y pase de la muerte atrás ("cutback")
        shotOriginU = 12.2;
        shotOriginV = 33.5 + vJit * 0.5;
        shotOriginZ = 0;
        blockDefIdx = 1;

        // Pivote abre a la banda izquierda cercana (0 - 3.2s)
        if (elapsed < 2.0) {
          const t = elapsed / 2.0;
          pivU = lerp(27.5, 24.5, t);
          pivV = lerp(38.0, 43.5, t);
          pivPose = "DRIBBLE";
          activeCarrierId = "PIVOT";
        } else {
          pivU = lerp(24.5, 20.0, Math.min(1, (elapsed - 2.0) / 6.0));
          pivV = 42.0;
          pivPose = elapsed < 2.6 ? "PASS_DELIVERY" : "RUNNING_UP";
        }

        // Extremo izquierdo (WINGER) recibe abierto en primer plano izquierdo (v ≈ 51) y se mete hasta la línea de fondo del área
        if (elapsed < 3.2) {
          winU = lerp(22.5, 19.0, elapsed / 3.2);
          winV = lerp(52.0, 50.5, elapsed / 3.2);
          winPose = "RUNNING_UP";
        } else if (elapsed < 8.6) {
          const t = (elapsed - 3.2) / 5.4;
          winU = lerp(19.0, 6.2, t);
          winV = lerp(50.5, 43.8, t);
          winPose = "DRIBBLE";
          activeCarrierId = "WINGER";
        } else if (elapsed < 9.3) {
          winU = 6.2; winV = 43.8;
          winPose = "PASS_DELIVERY";
          activeCarrierId = "WINGER";
        } else {
          winU = 5.8; winV = 44.5;
          winPose = (elapsed > 12.5 && outcome === "GOAL") ? "CELEBRATE_JUMP" : "READY";
        }

        // Llegador desde segunda línea / Delantero (STRIKER) ataca el punto de penalti para empalmar el pase atrás
        if (elapsed < 5.5) {
          strU = lerp(25.5, 20.5, elapsed / 5.5);
          strV = lerp(31.0, 32.5, elapsed / 5.5);
          strPose = "RUNNING_UP";
        } else if (elapsed < 10.8) {
          const t = (elapsed - 5.5) / 5.3;
          strU = lerp(20.5, shotOriginU + 0.5, t);
          strV = lerp(32.5, shotOriginV, t);
          strPose = "SPRINT";
          if (elapsed >= 9.3) activeCarrierId = "STRIKER";
        } else if (elapsed < 11.5) {
          strU = shotOriginU;
          strV = shotOriginV;
          strPose = "WINDUP_SHOT";
          activeCarrierId = "STRIKER";
        } else {
          strU = shotOriginU - 0.3;
          strV = shotOriginV;
          strPose = elapsed < 12.6 ? "SHOT_FOLLOW_THROUGH" : (outcome === "GOAL" ? "CELEBRATE_JUMP" : "HANDS_ON_HEAD");
          activeCarrierId = "STRIKER";
        }

        // Otros atacantes arrastran a los centrales al primer palo
        const runT = Math.min(1, elapsed / 9.5);
        supU = lerp(18.0, 6.5, runT);
        supV = lerp(36.5, 37.5, runT);
        supPose = "SPRINT";
        atkBox1U = lerp(19.0, 7.5, runT);
        atkBox1V = lerp(26.0, 29.0, runT);
        atkBox2U = lerp(21.0, 14.5, runT);
        atkBox2V = lerp(20.0, 23.0, runT);

        // Defensores: dos salen a tapar la internada de WINGER en v=44..48 y el resto se hunde hacia el área pequeña
        const dT = Math.min(1, elapsed / 9.5);
        defs = [
          { u: lerp(16.5, 7.2, dT), v: lerp(48.0, 42.5, dT), pose: "SPRINT", facing: "FRONT_RIGHT", num: 2 },
          { u: lerp(14.0, 9.8, dT), v: lerp(36.0, shotOriginV + 0.8, dT), pose: (outcome === "BLOCK" && elapsed >= 11.4) ? "SLIDE_BLOCK" : "JOCKEY", facing: "FRONT_RIGHT", num: 4, name: hlData.defender?.name },
          { u: lerp(12.5, 6.2, dT), v: lerp(34.0, 36.2, dT), pose: "JOCKEY", facing: "FRONT_RIGHT", num: 5 },
          { u: lerp(13.0, 6.8, dT), v: lerp(27.0, 29.5, dT), pose: "JOCKEY", facing: "FRONT_RIGHT", num: 3 },
          { u: lerp(17.5, 9.5, dT), v: lerp(43.0, 44.5, dT), pose: "RUNNING_UP", facing: "BACK_LEFT", num: 6 },
          { u: lerp(18.5, 14.2, dT), v: lerp(29.0, 31.0, dT), pose: "RUNNING_UP", facing: "BACK_LEFT", num: 8 },
          { u: lerp(20.0, 15.5, dT), v: 22.0, pose: "JOCKEY", facing: "FRONT_RIGHT", num: 14 },
          { u: 28.5, v: 35.0, pose: "READY", facing: "BACK_LEFT", num: 17 }
        ];

        if (elapsed < 2.0) {
          ballU = pivU - 0.5; ballV = pivV + 0.5; ballZ = 0;
        } else if (elapsed < 3.2) {
          const t = (elapsed - 2.0) / 1.2;
          ballU = lerp(24.0, 19.0, t); ballV = lerp(43.5, 50.2, t); ballZ = 0;
        } else if (elapsed < 8.6) {
          ballU = winU - 0.5; ballV = winV - 0.5; ballZ = 0;
        } else if (elapsed < 11.5) {
          const t = Math.min(1, (elapsed - 8.6) / 2.2);
          ballU = lerp(6.2, shotOriginU - 0.3, t);
          ballV = lerp(43.8, shotOriginV + 0.4, t);
          ballZ = 0;
        }

      } else if (playPattern === "COUNTER_THROUGH_BALL") {
        // PATRÓN 4: Contraataque relámpago con defensa adelantada corriendo hacia su portería y pase al espacio (mano a mano)
        shotOriginU = 9.2;
        shotOriginV = 33.2 + vJit * 0.5;
        shotOriginZ = 0;
        blockDefIdx = 1;

        // Pivote recupera y lanza rápido a WINGER en el círculo/tres cuartos (0 - 3.0s)
        if (elapsed < 2.2) {
          const t = elapsed / 2.2;
          pivU = lerp(31.0, 26.5, t);
          pivV = lerp(36.0, 32.0, t);
          pivPose = "SPRINT";
          activeCarrierId = "PIVOT";
        } else {
          pivU = lerp(26.5, 21.0, Math.min(1, (elapsed - 2.2) / 6.0));
          pivV = 31.0;
          pivPose = elapsed < 2.8 ? "PASS_DELIVERY" : "RUNNING_UP";
        }

        // Lanzador (WINGER) conduce a toda velocidad y mete un balón al espacio entre centrales (3.0 - 7.8s)
        if (elapsed < 3.2) {
          winU = lerp(26.0, 22.5, elapsed / 3.2);
          winV = lerp(22.0, 23.5, elapsed / 3.2);
          winPose = "SPRINT";
        } else if (elapsed < 7.4) {
          const t = (elapsed - 3.2) / 4.2;
          winU = lerp(22.5, 16.5, t);
          winV = lerp(23.5, 26.0, t);
          winPose = "DRIBBLE";
          activeCarrierId = "WINGER";
        } else if (elapsed < 8.2) {
          winU = 16.5; winV = 26.0;
          winPose = "PASS_DELIVERY";
          activeCarrierId = "WINGER";
        } else {
          winU = lerp(16.5, 13.5, Math.min(1, (elapsed - 8.2) / 3.0));
          winV = 25.5;
          winPose = (elapsed > 12.5 && outcome === "GOAL") ? "CELEBRATE_JUMP" : "READY";
        }

        // Delantero (STRIKER) arranca al límite del fuera de juego en u=20 y se planta solo ante el portero
        if (elapsed < 5.0) {
          const t = elapsed / 5.0;
          strU = lerp(21.5, 18.0, t);
          strV = lerp(38.5, 36.0, t);
          strPose = "RUNNING_UP";
        } else if (elapsed < 10.2) {
          const t = (elapsed - 5.0) / 5.2;
          strU = lerp(18.0, shotOriginU + 1.2, t);
          strV = lerp(36.0, shotOriginV, t);
          strPose = "SPRINT";
          if (elapsed >= 8.2) activeCarrierId = "STRIKER";
        } else if (elapsed < 11.5) {
          const t = (elapsed - 10.2) / 1.3;
          strU = lerp(shotOriginU + 1.2, shotOriginU, t);
          strV = shotOriginV;
          strPose = elapsed < 11.0 ? "DRIBBLE" : "WINDUP_SHOT";
          activeCarrierId = "STRIKER";
        } else {
          strU = shotOriginU - 0.3;
          strV = shotOriginV;
          strPose = elapsed < 12.6 ? "SHOT_FOLLOW_THROUGH" : (outcome === "GOAL" ? "CELEBRATE_JUMP" : "HANDS_ON_HEAD");
          activeCarrierId = "STRIKER";
        }

        const cT = Math.min(1, elapsed / 10.5);
        supU = lerp(27.0, 12.5, cT);
        supV = lerp(44.0, 41.5, cT);
        supPose = "SPRINT";
        atkBox1U = lerp(28.0, 14.0, cT);
        atkBox1V = lerp(15.0, 18.5, cT);
        atkBox2U = lerp(29.5, 18.5, cT);
        atkBox2V = lerp(29.0, 29.5, cT);

        // La línea defensiva rival empieza adelantada (u=20) y corre en sprint hacia su propia portería (BACK_LEFT)
        defs = [
          { u: lerp(20.5, 11.2, cT), v: lerp(42.0, 38.5, cT), pose: "SPRINT", facing: "BACK_LEFT", num: 2 },
          { u: lerp(20.0, 10.1, cT), v: lerp(35.0, shotOriginV + 1.8, cT), pose: (outcome === "BLOCK" && elapsed >= 11.3) ? "SLIDE_BLOCK" : "SPRINT", facing: "BACK_LEFT", num: 4, name: hlData.defender?.name },
          { u: lerp(20.2, 10.6, cT), v: lerp(28.5, shotOriginV - 2.6, cT), pose: "SPRINT", facing: "BACK_LEFT", num: 5 },
          { u: lerp(21.0, 12.5, cT), v: lerp(18.0, 20.5, cT), pose: "SPRINT", facing: "BACK_LEFT", num: 3 },
          { u: lerp(25.0, 16.8, cT), v: 33.0, pose: "SPRINT", facing: "BACK_LEFT", num: 6 },
          { u: lerp(26.5, 18.5, cT), v: 24.0, pose: "SPRINT", facing: "BACK_LEFT", num: 8 },
          { u: lerp(28.0, 21.0, cT), v: 40.0, pose: "RUNNING_UP", facing: "BACK_LEFT", num: 14 },
          { u: 31.0, v: 30.0, pose: "RUNNING_UP", facing: "BACK_LEFT", num: 17 }
        ];

        if (elapsed < 2.2) {
          ballU = pivU - 0.6; ballV = pivV - 0.3; ballZ = 0;
        } else if (elapsed < 3.2) {
          const t = (elapsed - 2.2) / 1.0;
          ballU = lerp(26.0, 22.5, t); ballV = lerp(32.0, 23.8, t); ballZ = 0;
        } else if (elapsed < 7.4) {
          ballU = winU - 0.7; ballV = winV + 0.4; ballZ = 0;
        } else if (elapsed < 10.2) {
          const t = (elapsed - 7.4) / 2.8;
          ballU = lerp(16.2, shotOriginU + 0.6, t);
          ballV = lerp(26.2, shotOriginV + 0.3, t);
          ballZ = 0;
        } else if (elapsed < 11.5) {
          ballU = strU - 0.6; ballV = strV + 0.4; ballZ = 0;
        }

      } else if (playPattern === "INDIVIDUAL_SLALOM") {
        // PATRÓN 5: Slalom individual en diagonal desde la derecha hacia la frontal, pared corta y disparo con rosca
        shotOriginU = 15.2;
        shotOriginV = 36.2 + vJit * 0.5;
        shotOriginZ = 0;
        blockDefIdx = 1;

        // Pivote y extremo inician en corto por la derecha (0 - 3.2s)
        pivU = lerp(27.0, 22.5, Math.min(1, elapsed / 8));
        pivV = 24.0;
        pivPose = elapsed < 2.0 ? "PASS_DELIVERY" : "RUNNING_UP";

        winU = lerp(21.0, 12.0, Math.min(1, elapsed / 9));
        winV = lerp(11.0, 8.5, Math.min(1, elapsed / 9));
        winPose = "RUNNING_UP";

        // Mediapunta/Boya (SUPPORT) en la frontal devuelve una pared de tacón entre los segundos 6.2 y 7.4
        supU = 13.8;
        supV = 31.5;
        supPose = (elapsed >= 6.2 && elapsed <= 7.5) ? "PASS_DELIVERY" : "READY";

        // Protagonista (STRIKER) hace la diagonal sorteando rivales de v=14 a v=36.2
        if (elapsed < 2.2) {
          strU = lerp(23.5, 21.5, elapsed / 2.2);
          strV = lerp(15.0, 16.0, elapsed / 2.2);
          strPose = "RUNNING_UP";
          activeCarrierId = "PIVOT";
        } else if (elapsed < 6.2) {
          const t = (elapsed - 2.2) / 4.0;
          strU = lerp(21.5, 16.8, t);
          strV = lerp(16.0, 28.5, t);
          strPose = "DRIBBLE";
          activeCarrierId = "STRIKER";
        } else if (elapsed < 7.4) {
          const t = (elapsed - 6.2) / 1.2;
          strU = lerp(16.8, 15.8, t);
          strV = lerp(28.5, 33.5, t);
          strPose = "SPRINT";
          activeCarrierId = "SUPPORT";
        } else if (elapsed < 11.0) {
          const t = (elapsed - 7.4) / 3.6;
          strU = lerp(15.8, shotOriginU, t);
          strV = lerp(33.5, shotOriginV, t);
          strPose = "DRIBBLE";
          activeCarrierId = "STRIKER";
        } else if (elapsed < 11.5) {
          strU = shotOriginU;
          strV = shotOriginV;
          strPose = "WINDUP_SHOT";
          activeCarrierId = "STRIKER";
        } else {
          strU = shotOriginU - 0.2;
          strV = shotOriginV;
          strPose = elapsed < 12.6 ? "SHOT_FOLLOW_THROUGH" : (outcome === "GOAL" ? "CELEBRATE_JUMP" : "HANDS_ON_HEAD");
          activeCarrierId = "STRIKER";
        }

        atkBox1U = lerp(15.0, 9.2, Math.min(1, elapsed / 10));
        atkBox1V = lerp(41.0, 43.0, Math.min(1, elapsed / 10));
        atkBox2U = lerp(15.5, 9.5, Math.min(1, elapsed / 10));
        atkBox2V = lerp(24.0, 22.0, Math.min(1, elapsed / 10));

        // Un defensa queda sentado en el césped ("SLIDE_BLOCK") tras el recorte en el segundo 9.2
        const dT = Math.min(1, elapsed / 10.0);
        defs = [
          { u: 9.2, v: 41.5, pose: "JOCKEY", facing: "FRONT_RIGHT", num: 2 },
          { u: lerp(12.5, 11.8, dT), v: lerp(35.0, shotOriginV + 0.5, dT), pose: (outcome === "BLOCK" && elapsed >= 11.3) ? "SLIDE_BLOCK" : "JOCKEY", facing: "FRONT_RIGHT", num: 4, name: hlData.defender?.name },
          { u: 14.5, v: 33.5, pose: elapsed >= 9.0 ? "SLIDE_BLOCK" : "JOCKEY", facing: "FRONT_RIGHT", num: 5 },
          { u: 9.5, v: 25.0, pose: "JOCKEY", facing: "FRONT_RIGHT", num: 3 },
          { u: 17.5, v: 24.5, pose: elapsed >= 5.2 ? "SLIDE_BLOCK" : "JOCKEY", facing: "FRONT_RIGHT", num: 6 },
          { u: 12.0, v: 29.5, pose: "JOCKEY", facing: "FRONT_RIGHT", num: 8 },
          { u: 11.5, v: 16.0, pose: "JOCKEY", facing: "FRONT_RIGHT", num: 14 },
          { u: 29.0, v: 39.0, pose: "READY", facing: "BACK_LEFT", num: 17 }
        ];

        if (elapsed < 2.2) {
          const t = elapsed / 2.2;
          ballU = lerp(26.5, 21.5, t); ballV = lerp(24.0, 16.2, t); ballZ = 0;
        } else if (elapsed < 6.2) {
          ballU = strU - 0.5; ballV = strV + 0.6; ballZ = 0;
        } else if (elapsed < 6.8) {
          const t = (elapsed - 6.2) / 0.6;
          ballU = lerp(16.5, 14.0, t); ballV = lerp(29.0, 31.5, t); ballZ = 0;
        } else if (elapsed < 7.4) {
          const t = (elapsed - 6.8) / 0.6;
          ballU = lerp(14.0, 15.8, t); ballV = lerp(31.5, 33.8, t); ballZ = 0;
        } else if (elapsed < 11.5) {
          ballU = strU - 0.55; ballV = strV + 0.65; ballZ = 0;
        }

      } else {
        // PATRÓN 6 (LONG_RANGE_BOMB): Circulación frente a bloque bajo, dejada de cara y obús lejano (composición homenaje a la foto)
        shotOriginU = 18.2;
        shotOriginV = 41.2 + vJit * 0.4;
        shotOriginZ = 0;
        blockDefIdx = 5;

        if (elapsed < 2.4) {
          const t = elapsed / 2.4;
          pivU = lerp(29.0, 25.5, t);
          pivV = lerp(28.0, 26.0, t);
          pivPose = "DRIBBLE";
          activeCarrierId = "PIVOT";
        } else {
          pivU = 23.5; pivV = 25.0;
          pivPose = elapsed < 3.0 ? "PASS_DELIVERY" : "READY";
        }

        if (elapsed < 3.8) {
          winU = lerp(22.0, 18.5, elapsed / 3.8);
          winV = lerp(15.0, 18.0, elapsed / 3.8);
          winPose = "RUNNING_UP";
        } else if (elapsed < 8.4) {
          const t = (elapsed - 3.8) / 4.6;
          winU = lerp(18.5, 15.5, t);
          winV = lerp(18.0, 31.0, t);
          winPose = "DRIBBLE";
          activeCarrierId = "WINGER";
        } else if (elapsed < 9.2) {
          winU = 15.5; winV = 31.0;
          winPose = "PASS_DELIVERY";
          activeCarrierId = "WINGER";
        } else {
          winU = 15.0; winV = 30.0;
          winPose = (elapsed > 12.5 && outcome === "GOAL") ? "CELEBRATE_JUMP" : "READY";
        }

        if (elapsed < 8.5) {
          const t = elapsed / 8.5;
          strU = lerp(24.0, 19.2, t);
          strV = lerp(43.5, shotOriginV + 0.3, t);
          strPose = "RUNNING_UP";
        } else if (elapsed < 11.0) {
          strU = lerp(19.2, shotOriginU + 0.3, (elapsed - 8.5) / 2.5);
          strV = shotOriginV;
          strPose = "CONTROL";
          activeCarrierId = "STRIKER";
        } else if (elapsed < 11.5) {
          strU = shotOriginU;
          strV = shotOriginV;
          strPose = "WINDUP_SHOT";
          activeCarrierId = "STRIKER";
        } else {
          strU = shotOriginU - 0.2;
          strV = shotOriginV - 0.2;
          strPose = elapsed < 12.6 ? "SHOT_FOLLOW_THROUGH" : (outcome === "GOAL" ? "CELEBRATE_JUMP" : "HANDS_ON_HEAD");
          activeCarrierId = "STRIKER";
        }

        supU = lerp(14.5, 10.6, Math.min(1, elapsed / 10));
        supV = lerp(33.5, 32.0, Math.min(1, elapsed / 10));
        supPose = "RUNNING_UP";
        atkBox1U = lerp(13.0, 9.8, Math.min(1, elapsed / 10));
        atkBox1V = lerp(38.0, 36.2, Math.min(1, elapsed / 10));
        atkBox2U = lerp(15.2, 11.2, Math.min(1, elapsed / 10));
        atkBox2V = lerp(28.5, 26.5, Math.min(1, elapsed / 10));

        const wallPose = (elapsed >= 10.5 && elapsed <= 12.6)
          ? (outcome === "BLOCK" ? "SLIDE_BLOCK" : "WALL_GUARD")
          : "JOCKEY";

        defs = [
          { u: 7.4, v: 38.2, pose: "JOCKEY", facing: "FRONT_RIGHT", num: 2 },
          { u: 7.8, v: 34.5, pose: "JOCKEY", facing: "FRONT_RIGHT", num: 4, name: hlData.defender?.name },
          { u: 8.2, v: 30.8, pose: "JOCKEY", facing: "FRONT_RIGHT", num: 5 },
          { u: 8.6, v: 24.5, pose: "JOCKEY", facing: "FRONT_RIGHT", num: 3 },
          { u: 11.4, v: 43.0, pose: wallPose, facing: "FRONT_RIGHT", num: 6 },
          { u: 11.7, v: 41.6, pose: wallPose, facing: "FRONT_RIGHT", num: 8 },
          { u: 12.0, v: 40.2, pose: wallPose, facing: "FRONT_RIGHT", num: 14 },
          { u: 31.2, v: 39.5, pose: "READY", facing: "BACK_LEFT", num: 17 }
        ];

        if (elapsed < 2.4) {
          ballU = pivU - 0.6; ballV = pivV + 0.4; ballZ = 0;
        } else if (elapsed < 3.8) {
          const t = (elapsed - 2.4) / 1.4;
          ballU = lerp(25.0, 18.5, t); ballV = lerp(26.0, 18.2, t); ballZ = 0;
        } else if (elapsed < 8.4) {
          ballU = winU - 0.5; ballV = winV + 0.6; ballZ = 0;
        } else if (elapsed < 10.4) {
          const t = (elapsed - 8.4) / 2.0;
          ballU = lerp(15.5, shotOriginU - 0.4, t);
          ballV = lerp(31.2, shotOriginV + 0.8, t);
          ballZ = 0;
        } else if (elapsed < 11.5) {
          ballU = shotOriginU - 0.55;
          ballV = shotOriginV + 0.85;
          ballZ = 0;
        }
      }

      // Árbitro principal y Juez de línea
      const refU = 15.8;
      const refV = 24.5;
      const linesmanU = 8.2;
      const linesmanV = -0.5;

      // 6.6 Guardameta bajo palos (u = 0.85, v = 34.0)
      let gkU = 0.85, gkV = 34.0, gkZ = 0, gkPose = "GK_READY";
      const targetShotV = targetCorner.includes("LEFT") ? (vPostLeft - 0.85) : (vPostRight + 0.85);
      const targetShotZ = targetCorner.includes("TOP") ? 2.05 : 0.45;
      const isDiveLeft = targetShotV > 34.0;

      if (elapsed < 11.5) {
        // En el contraataque mano a mano el portero achica un poco más hacia adelante
        gkU = playPattern === "COUNTER_THROUGH_BALL" ? lerp(0.85, 2.4, Math.min(1, elapsed / 11)) : 0.85;
        gkV = 34.0 + Math.sin(now * 0.004) * 0.6;
        gkPose = "GK_READY";
      } else {
        const shotProgress = Math.min(1.0, (elapsed - 11.5) / 0.95);
        if (outcome === "SAVE") {
          if (shotProgress < 0.82) {
            const dp = shotProgress / 0.82;
            gkU = 0.95;
            gkV = lerp(34.0, targetShotV, dp);
            gkZ = Math.sin(dp * Math.PI) * (targetCorner.includes("TOP") ? 1.15 : 0.45);
            gkPose = isDiveLeft ? "DIVE_LEFT" : "DIVE_RIGHT";
          } else {
            gkU = 0.95;
            gkV = targetShotV;
            gkZ = 0;
            gkPose = isDiveLeft ? "GROUND_LEFT" : "GROUND_RIGHT";
          }
        } else if (outcome === "GOAL") {
          if (shotProgress < 0.88) {
            const dp = shotProgress / 0.88;
            gkU = 0.85;
            gkV = lerp(34.0, lerp(34.0, targetShotV, 0.65), dp);
            gkZ = Math.sin(dp * Math.PI) * 0.65;
            gkPose = isDiveLeft ? "DIVE_LEFT" : "DIVE_RIGHT";
          } else {
            gkU = 0.85;
            gkV = lerp(34.0, targetShotV, 0.65);
            gkPose = "CONCEDED";
          }
        } else if (outcome === "POST") {
          if (shotProgress < 0.85) {
            gkV = lerp(34.0, targetShotV, (shotProgress / 0.85) * 0.7);
            gkPose = isDiveLeft ? "DIVE_LEFT" : "DIVE_RIGHT";
          } else {
            gkPose = "GK_READY";
          }
        } else if (outcome === "WIDE") {
          gkV = 34.0 + (wideDirection === "LEFT" ? 1.4 : -1.4);
          gkPose = "GK_READY";
        } else {
          gkPose = "GK_READY";
        }
      }

      // 6.7 DESENLACE FÍSICO DEL DISPARO (11.5s - 15.0s, DESDE LA POSICIÓN EXACTA DEL REMATADOR)
      if (elapsed >= 11.5) {
        const shotProg = Math.min(1.0, (elapsed - 11.5) / 0.95);
        const startU = shotOriginU - 0.4;
        const startV = shotOriginV + 0.4;
        const startZ = shotOriginZ;
        const blkDef = defs[blockDefIdx] || defs[1];

        if (outcome === "GOAL") {
          if (shotProg < 1.0) {
            ballU = lerp(startU, -0.35, shotProg);
            ballV = lerp(startV, targetShotV, shotProg);
            ballZ = lerp(startZ, targetShotZ, shotProg) + Math.sin(shotProg * Math.PI) * 0.65;
          } else {
            const dropP = Math.min(1.0, (elapsed - 12.45) / 1.1);
            ballU = lerp(-0.35, -1.65, dropP * 0.7);
            ballV = targetShotV + Math.sin(dropP * 5) * 0.35;
            ballZ = Math.max(0, lerp(targetShotZ, 0, dropP));
          }
        } else if (outcome === "SAVE") {
          if (shotProg < 0.82) {
            const sp = shotProg / 0.82;
            ballU = lerp(startU, 0.85, sp);
            ballV = lerp(startV, targetShotV, sp);
            ballZ = lerp(startZ, targetShotZ, sp) + Math.sin(sp * Math.PI) * 0.55;
          } else {
            const defP = Math.min(1.5, (elapsed - 12.28) / 1.2);
            const cornerDir = isDiveLeft ? 1 : -1;
            ballU = lerp(0.85, -2.5, defP);
            ballV = targetShotV + cornerDir * defP * 6.5;
            ballZ = Math.max(0, lerp(targetShotZ, 0.2, defP));
          }
        } else if (outcome === "POST") {
          const postV = targetCorner.includes("LEFT") ? vPostLeft : vPostRight;
          const postZ = targetCorner.includes("TOP") ? 2.42 : 1.35;
          if (shotProg < 0.88) {
            const sp = shotProg / 0.88;
            ballU = lerp(startU, 0, sp);
            ballV = lerp(startV, postV, sp);
            ballZ = lerp(startZ, postZ, sp) + Math.sin(sp * Math.PI) * 0.45;
          } else {
            const rebP = Math.min(1.4, (elapsed - 12.34) / 1.2);
            ballU = lerp(0, 7.5, rebP);
            ballV = postV + (postV > 34 ? 1 : -1) * rebP * 4.2;
            ballZ = Math.max(0, lerp(postZ, 0, rebP));
          }
        } else if (outcome === "WIDE") {
          const wideV = wideDirection === "LEFT" ? (vPostLeft + 4.8) : (wideDirection === "RIGHT" ? (vPostRight - 4.8) : 34.0);
          const wideZ = wideDirection === "HIGH" ? 4.2 : 1.6;
          const totalP = Math.min(1.5, (elapsed - 11.5) / 1.0);
          ballU = lerp(startU, -2.8, totalP);
          ballV = lerp(startV, wideV, totalP);
          ballZ = Math.max(0, lerp(startZ, wideZ, Math.min(1, totalP)) + Math.sin(Math.min(1, totalP) * Math.PI) * 0.55);
        } else if (outcome === "BLOCK") {
          if (shotProg < 0.42) {
            const bp = shotProg / 0.42;
            ballU = lerp(startU, blkDef.u, bp);
            ballV = lerp(startV, blkDef.v, bp);
            ballZ = lerp(startZ, 0.35, bp);
          } else {
            const rebP = Math.min(1.2, (shotProg - 0.42) / 0.58);
            ballU = lerp(blkDef.u, blkDef.u + 4.5, rebP);
            ballV = lerp(blkDef.v, blkDef.v + 5.0, rebP);
            ballZ = Math.max(0, (1 - rebP) * 0.4);
          }
        }
      }

      // 7. CONSTRUCCIÓN Y ORDENACIÓN POR PROFUNDIDAD (PAINTER'S ALGORITHM)
      const createEnt = (id, u, v, z, kit, num, pose, facing, opts = {}) => {
        const pt = p3d(u, v, z);
        return {
          id,
          x: pt.x,
          y: pt.groundY,
          zPx: pt.groundY - pt.y,
          sc: pt.sc,
          kit,
          number: num,
          pose,
          facing,
          elapsed,
          ...opts
        };
      };

      const sceneEntities = [
        // Guardameta bajo palos
        createEnt("GK", gkU, gkV, gkZ, defKit, 1, gkPose, "FRONT_RIGHT", { isKeeper: true, name: hlData.goalkeeper?.name }),
        // Defensores dinámicos según el patrón táctico
        ...defs.map((d, idx) => createEnt(`DEF_${idx}`, d.u, d.v, d.z || 0, defKit, d.num, d.pose, d.facing, { name: d.name })),
        // Atacantes acompañando la jugada y protagonistas
        createEnt("ATK_BOX1", atkBox1U, atkBox1V, 0, atkKit, 11, elapsed > 12.5 && outcome === "GOAL" ? "CELEBRATE_JUMP" : atkBox1Pose, "BACK_LEFT"),
        createEnt("ATK_BOX2", atkBox2U, atkBox2V, 0, atkKit, 8, elapsed > 12.5 && outcome === "GOAL" ? "CELEBRATE_JUMP" : atkBox2Pose, "BACK_LEFT"),
        createEnt("SUPPORT", supU, supV, 0, atkKit, 10, supPose, "BACK_LEFT", { isActiveCarrier: activeCarrierId === "SUPPORT", name: hlData.supportAttacker?.name }),
        createEnt("WINGER", winU, winV, 0, atkKit, 7, winPose, "BACK_LEFT", { isActiveCarrier: activeCarrierId === "WINGER", name: hlData.passer?.name }),
        createEnt("PIVOT", pivU, pivV, 0, atkKit, 6, pivPose, "BACK_LEFT", { isActiveCarrier: activeCarrierId === "PIVOT", name: hlData.pivot?.name }),
        createEnt("STRIKER", strU, strV, strZ, atkKit, 9, strPose, "BACK_LEFT", { isActiveCarrier: activeCarrierId === "STRIKER", name: hlData.shooter?.name }),
        // Árbitro principal y Juez de línea
        createEnt("REFEREE", refU, refV, 0, defKit, 99, "READY", "FRONT_RIGHT", { isReferee: true }),
        createEnt("LINESMAN", linesmanU, linesmanV, 0, defKit, 98, "READY", "FRONT_RIGHT", { isLinesman: true }),
        // Balón 3D
        (() => {
          const bPt = p3d(ballU, ballV, ballZ);
          return {
            id: "BALL",
            isBall: true,
            x: bPt.x,
            y: bPt.groundY,
            zPx: bPt.groundY - bPt.y,
            r: 4.1 * bPt.sc,
            sc: bPt.sc
          };
        })()
      ];

      // Ordenar por coordenada Y en pantalla para superposición 3D natural
      sceneEntities.sort((a, b) => a.y - b.y);

      let goalFrameDrawn = false;
      sceneEntities.forEach(ent => {
        if (!goalFrameDrawn && ent.y > pFrontL_bot.y) {
          drawGoalFrontFrame();
          goalFrameDrawn = true;
        }
        if (ent.isBall) {
          drawFrontalBall(ctx, ent.x, ent.y, ent.zPx, ent.r, ent.sc);
        } else {
          drawFrontalAthlete(ctx, ent);
        }
      });
      if (!goalFrameDrawn) {
        drawGoalFrontFrame();
      }

      // Chispazo de impacto en el poste si da a la madera
      if (outcome === "POST" && elapsed >= 12.3 && elapsed <= 13.1) {
        const hitPt = p3d(0, targetCorner.includes("LEFT") ? vPostLeft : vPostRight, targetCorner.includes("TOP") ? 2.42 : 1.35);
        ctx.fillStyle = "rgba(254, 240, 138, 0.92)";
        ctx.beginPath();
        ctx.arc(hitPt.x, hitPt.y, 11 * sc, 0, Math.PI * 2);
        ctx.fill();
      }
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

    function drawPitch() {
      if (!ctx || !canvas) return;
      resizeCanvas();
      const w = canvas.width;
      const h = canvas.height;

      // Si hay una jugada clave activa, dibujamos la cámara frontal cinemática 3D (unos 15 segundos)
      if (currentHighlightData) {
        drawFrontalHighlightScene(ctx, w, h, currentHighlightData);
        if (!simulator.isFinished) {
          requestAnimationFrame(drawPitch);
        }
        return;
      }

      // SIMULACIÓN GENERAL EN 2D (CAMPO CENITAL CON FICHAS CIRCULARES Y SIN NOMBRES)
      const pDim = drawPitch2D(ctx, w, h);
      const { padX, padY, pitchW, pitchH, dpr } = pDim;

      // Interpolación continua y suave del balón
      simulator.ball.x += (simulator.ball.targetX - simulator.ball.x) * 0.16;
      simulator.ball.y += (simulator.ball.targetY - simulator.ball.y) * 0.16;

      // Buscar al futbolista que conduce o disputa el balón
      let closestLiveP = null;
      let minLiveDist = 999;
      [...simulator.home2D, ...simulator.away2D].forEach(p => {
        const d = Math.hypot(p.curX - simulator.ball.x, p.curY - simulator.ball.y);
        if (d < minLiveDist) {
          minLiveDist = d;
          closestLiveP = p;
        }
      });

      // Actualizar rótulo FM inferior cuando cambia el portador del balón (sin dibujar nombres molestos sobre el césped)
      if (closestLiveP && minLiveDist < 5.0 && closestLiveP.player?.name) {
        if (lastCarrierPlayerId !== closestLiveP.player.id && !currentHighlightData && simulator.isRunning && !isKickoffInProgress) {
          lastCarrierPlayerId = closestLiveP.player.id;
          const pSide = closestLiveP.side === "home" ? (homeTeam.shortName || homeTeam.name) : (awayTeam.shortName || awayTeam.name);
          updateFMCommentary(`${closestLiveP.player.name} (${pSide}) conduce con el esférico...`, "MATCH ENGINE");
        }
      }

      // Interpolación y dibujo de posiciones para jugadores locales en 2D
      simulator.home2D.forEach(p => {
        const dx = p.targetX - p.curX;
        const dy = p.targetY - p.curY;
        p.curX += dx * 0.14;
        p.curY += dy * 0.14;
        drawPlayerToken2D(ctx, p, "home", (p === closestLiveP && minLiveDist < 5.5), padX, padY, pitchW, pitchH, dpr);
      });

      // Interpolación y dibujo de posiciones para jugadores visitantes en 2D
      simulator.away2D.forEach(p => {
        const dx = p.targetX - p.curX;
        const dy = p.targetY - p.curY;
        p.curX += dx * 0.14;
        p.curY += dy * 0.14;
        drawPlayerToken2D(ctx, p, "away", (p === closestLiveP && minLiveDist < 5.5), padX, padY, pitchW, pitchH, dpr);
      });

      // Balón 2D
      drawBallToken2D(ctx, simulator.ball.x, simulator.ball.y, padX, padY, pitchW, pitchH, dpr);

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
    }

    function handleHalfTimeSequence(htState) {
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
      content.textContent = alert.text;
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
      if (simulator.isSetPieceRunning) return;
      if (simulator.isHalfTime) {
        container.querySelector("#modal-halftime")?.classList.add("hidden");
        simulator.resumeSecondHalf();
        iconPP.textContent = "⏸";
        textPP.textContent = "Pausar";
        showMatchAlert({ text: "📣 ¡Comienza la 2ª Parte!" });
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

    container.querySelector("#btn-skip-end").onclick = () => {
      simulator.skipToEnd();
    };

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

    function openTacticsModal(isLive = false) {
      const wasRunning = simulator.isRunning;
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
      let htSelectedPlayerId = null;
      let htSubTab = "pitch"; // "pitch" o "style"
      let htPlayerRoles = { ...(gameState.userTactics.playerRoles || {}) };
      let htCustomPositions = JSON.parse(JSON.stringify(gameState.userTactics.customPositions || {}));
      let htInstructions = JSON.parse(JSON.stringify(
        (teamSide === "home" ? simulator.homeInstructions : simulator.awayInstructions) ||
        gameState.userTactics.instructions ||
        getDefaultTacticalInstructions()
      ));
      let showHTAllRoles = false;

      const startRemaining = isUserHome ? simulator.homeSubsRemaining : simulator.awaySubsRemaining;
      const startWindows = isUserHome ? simulator.homeWindowsRemaining : simulator.awayWindowsRemaining;

      function renderHTTactics() {
        const formation = FORMATIONS[htFormationKey] || FORMATIONS["4-3-3"];
        const allTeamPlayers = userTeam.players;
        const getPlayer = (id) => allTeamPlayers.find(p => p.id === id);

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
              <div class="slot-ht-player absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer flex flex-col items-center transition-transform active:scale-95 z-10"
                   style="left: ${effSlot.x}%; top: ${effSlot.y}%;"
                   data-player-id="${player.id}"
                   data-slot-index="${index}">
                <div class="w-9 h-9 rounded-full border-2 ${isSelected ? 'border-amber-400 bg-amber-500 text-black shadow-lg shadow-amber-400/50 scale-110 ring-2 ring-amber-300' : isNewSub ? 'border-emerald-400 bg-emerald-950 text-emerald-300 shadow-md ring-2 ring-emerald-500/50' : effSlot.isCustom ? 'border-amber-400 bg-slate-900 text-white shadow-md ring-1 ring-amber-400/80' : 'border-white/80 bg-slate-900 text-white shadow-md'} flex flex-col items-center justify-center relative transition-all">
                  <span class="text-[9px] font-black leading-none">${effRating}</span>
                  <span class="text-[7px] font-bold ${isNewSub ? 'text-emerald-400' : effSlot.isCustom ? 'text-amber-300 font-extrabold' : 'text-slate-300'} leading-none">${slot.label}</span>
                  <div class="absolute -bottom-1 w-5 h-1 bg-black/60 rounded-full overflow-hidden">
                    <div class="h-full ${player.energy > 70 ? 'bg-emerald-400' : player.energy > 50 ? 'bg-amber-400' : 'bg-red-500'}" style="width: ${player.energy || 100}%;"></div>
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
              </div>
            `;
          }).join('');

          pitchSlots.querySelectorAll(".slot-ht-player").forEach(el => {
            el.onclick = () => {
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

              rolePanel.innerHTML = `
                <div class="my-2 space-y-2 animate-fadeIn">
                  <!-- Ajuste de posición manual en descanso/directo -->
                  <div class="p-2.5 bg-slate-900 border border-amber-500/40 rounded-xl">
                    <div class="flex items-center justify-between mb-1.5 pb-1 border-b border-slate-800">
                      <div class="flex items-center gap-1.5">
                        <span class="text-sm">📍</span>
                        <span class="text-[10px] font-bold text-amber-400">Posición: ${posLabel}</span>
                      </div>
                      ${effSlot.isCustom ? `
                        <button id="btn-ht-reset-pos" class="text-[9.5px] font-bold text-rose-400 hover:text-rose-300 px-2 py-0.5 rounded bg-rose-950/70 border border-rose-800/80 active:scale-95 transition">
                          ↺ Restablecer
                        </button>
                      ` : ''}
                    </div>
                    <div class="grid grid-cols-2 gap-1.5">
                      <div class="flex items-center gap-1">
                        <button class="btn-ht-nudge-pos flex-1 py-1 px-1 bg-slate-800 hover:bg-slate-700 text-sky-300 font-bold text-[9.5px] rounded border border-slate-700 active:scale-95 transition" data-axis="y" data-delta="-5">
                          ▲ Adelantar (+DC)
                        </button>
                        <button class="btn-ht-nudge-pos flex-1 py-1 px-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-[9.5px] rounded border border-slate-700 active:scale-95 transition" data-axis="y" data-delta="5">
                          ▼ Retrasar (+MC)
                        </button>
                      </div>
                      <div class="flex items-center gap-1">
                        <button class="btn-ht-nudge-pos flex-1 py-1 px-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-[9.5px] rounded border border-slate-700 active:scale-95 transition" data-axis="x" data-delta="-5">
                          ◀ Izquierda
                        </button>
                        <button class="btn-ht-nudge-pos flex-1 py-1 px-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-[9.5px] rounded border border-slate-700 active:scale-95 transition" data-axis="x" data-delta="5">
                          ▶ Derecha
                        </button>
                      </div>
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
                      <button id="btn-ht-close-role-panel" class="text-slate-400 hover:text-white text-xs px-2 py-0.5 rounded bg-slate-800">✕</button>
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
                <div class="text-xs font-black text-amber-400 mt-0.5">${p.ovr}</div>
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
          htCustomPositions
        );

        if (!res.success) {
          alert(res.reason);
          return;
        }

        gameState.userTactics.formation = htFormationKey;
        gameState.userTactics.mentality = htMentality;
        gameState.userTactics.lineup = [...htLineupIds];
        gameState.userTactics.bench = [...htBenchIds];
        gameState.userTactics.playerRoles = { ...htPlayerRoles };
        gameState.userTactics.customPositions = { ...htCustomPositions };
        gameState.userTactics.instructions = JSON.parse(JSON.stringify(htInstructions));

        simulator.setTacticalInstructions(teamSide, htInstructions);

        if (teamSide === "home") {
          simulator.homePlayerRoles = { ...simulator.homePlayerRoles, ...htPlayerRoles };
        } else {
          simulator.awayPlayerRoles = { ...simulator.awayPlayerRoles, ...htPlayerRoles };
        }

        if (masterTacticsForNextMatches) {
          masterTacticsForNextMatches.formation = htFormationKey;
          masterTacticsForNextMatches.mentality = htMentality;
          masterTacticsForNextMatches.lineup = [...htLineupIds];
          masterTacticsForNextMatches.bench = [...htBenchIds];
          masterTacticsForNextMatches.playerRoles = { ...htPlayerRoles };
          masterTacticsForNextMatches.customPositions = { ...htCustomPositions };
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

      if (badgeType) {
        badgeType.textContent = isCorner 
          ? `🚩 CÓRNER A FAVOR (${spInfo.minute}')` 
          : `🎯 FALTA PELIGROSA (${spInfo.distanceMeters ? spInfo.distanceMeters + 'm · ' : ''}${spInfo.minute}')`;
        badgeType.className = isCorner
          ? "text-[10px] uppercase font-black text-sky-400 bg-sky-400/10 border border-sky-400/30 px-2.5 py-0.5 rounded-full"
          : "text-[10px] uppercase font-black text-amber-400 bg-amber-400/10 border border-amber-400/30 px-2.5 py-0.5 rounded-full";
      }
      if (title) {
        title.textContent = isCorner 
          ? "Pizarra Táctica · Saque de Esquina" 
          : `Pizarra Táctica · Falta a ${spInfo.distanceMeters || 24} metros`;
      }

      // Ubicación física del balón en la mini pizarra del área
      if (ballSpot) {
        if (isCorner) {
          const isLeft = spInfo.spot.y < 50;
          ballSpot.style.left = isLeft ? "12px" : "calc(100% - 24px)";
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
        { id: "NEAR_POST", label: "📐 Al Primer Palo", desc: "Envío tenso con rosca para prolongar" },
        { id: "FAR_POST", label: "📐 Al Segundo Palo", desc: "Balón templado al palo largo" },
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

      const zoneDefs = [
        { id: "NEAR_POST", name: "1er Palo", x: 26, y: 24, desc: "Anticipación", color: "text-amber-300" },
        { id: "PENALTY_SPOT", name: "Pto. Penalti", x: 50, y: 40, desc: "Rematador principal", color: "text-emerald-300" },
        { id: "FAR_POST", name: "2º Palo", x: 74, y: 24, desc: "Llegada desde atrás", color: "text-amber-300" },
        { id: "EDGE_BOX", name: "Frontal", x: 50, y: 64, desc: "Tiro de rechace", color: "text-sky-300" },
        { id: "SHORT_OPTION", name: "En Corto", x: (spInfo.spot.y < 50 ? 18 : 82), y: isCorner ? 26 : 58, desc: "Apoyo para pase", color: "text-indigo-300" },
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

          if (iconPP) iconPP.textContent = "⏸";
          if (textPP) textPP.textContent = "Pausar";

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
              if (iconPP) iconPP.textContent = "⏸";
              if (textPP) textPP.textContent = "Pausar";
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

      if (isUserSide) {
        // Pausar el simulador para que el usuario gestione la lesión obligatoria
        simulator.pause();
        const iconPP = container.querySelector("#pp-icon");
        const textPP = container.querySelector("#pp-text");
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
              openTacticsModal(true);
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
      // Sincronizar estados finales de energía y lesiones de ambos equipos con gameState
      if (result.homePlayers) {
        result.homePlayers.forEach(pSim => {
          const pReal = homeTeam.players.find(p => p.id === pSim.id);
          if (pReal) {
            pReal.energy = Math.round(pSim.energy !== undefined ? pSim.energy : 100);
            if (pSim.injury) pReal.injury = pSim.injury;
          }
        });
      }
      if (result.awayPlayers) {
        result.awayPlayers.forEach(pSim => {
          const pReal = awayTeam.players.find(p => p.id === pSim.id);
          if (pReal) {
            pReal.energy = Math.round(pSim.energy !== undefined ? pSim.energy : 100);
            if (pSim.injury) pReal.injury = pSim.injury;
          }
        });
      }

      // Sincronizar tarjetas y sanciones disciplinarias de ambos equipos
      if (result.cards) {
        const allMatchPlayers = [...homeTeam.players, ...awayTeam.players];
        if (result.cards.yellows) {
          Object.keys(result.cards.yellows).forEach(pId => {
            const pReal = allMatchPlayers.find(p => p.id === pId);
            if (pReal) {
              pReal.seasonYellows = (pReal.seasonYellows || 0) + 1;
              if (pReal.seasonYellows % 5 === 0 && !pReal.suspension) {
                pReal.suspension = { roundsLeft: 1, reason: "Ciclo de 5 Amarillas" };
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
              pReal.suspension = { roundsLeft: 1, reason: rCard?.reason || "Tarjeta Roja" };
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

      if (fScorers) {
        let itemsHtml = "";
        if (result.scorers.length > 0) {
          itemsHtml += result.scorers.map(s => `
            <div class="flex items-center justify-between text-slate-300 py-0.5">
              <span>⚽ <b>${s.playerName}</b> (${s.teamName})</span>
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

// =========================================================
// ARCHIVO: js\app.js
// =========================================================

// Controlador Principal del Juego (State Manager & Router)

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