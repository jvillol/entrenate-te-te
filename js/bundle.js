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
      { id: "rma_1", name: "Thibaut Courtois", number: 1, pos: "POR", ovr: 89, pac: 46, sho: 16, pas: 75, dri: 48, def: 16, phy: 77, energy: 100 },
      { id: "rma_2", name: "Andriy Lunin", number: 13, pos: "POR", ovr: 81, pac: 42, sho: 14, pas: 70, dri: 45, def: 15, phy: 73, energy: 100 },
      { id: "rma_3", name: "Dani Carvajal", number: 2, pos: "LD", ovr: 86, pac: 81, sho: 54, pas: 78, dri: 81, def: 83, phy: 82, energy: 100 },
      { id: "rma_4", name: "Trent Alexander-Arnold", number: 12, pos: "LD", ovr: 87, pac: 76, sho: 76, pas: 91, dri: 81, def: 80, phy: 74, energy: 100 },
      { id: "rma_5", name: "Eder Militao", number: 3, pos: "DFC", ovr: 85, pac: 85, sho: 50, pas: 71, dri: 72, def: 86, phy: 83, energy: 100 },
      { id: "rma_6", name: "Antonio Rudiger", number: 22, pos: "DFC", ovr: 87, pac: 82, sho: 53, pas: 71, dri: 67, def: 87, phy: 86, energy: 100 },
      { id: "rma_7", name: "David Alaba", number: 4, pos: "DFC", ovr: 82, pac: 74, sho: 68, pas: 82, dri: 77, def: 83, phy: 74, energy: 100 },
      { id: "rma_8", name: "Ferland Mendy", number: 23, pos: "LI", ovr: 83, pac: 89, sho: 62, pas: 74, dri: 78, def: 82, phy: 85, energy: 100 },
      { id: "rma_9", name: "Fran Garcia", number: 20, pos: "LI", ovr: 79, pac: 91, sho: 58, pas: 72, dri: 77, def: 74, phy: 73, energy: 100 },
      { id: "rma_10", name: "Aurelien Tchouameni", number: 14, pos: "MCD", ovr: 86, pac: 72, sho: 70, pas: 81, dri: 80, def: 85, phy: 86, energy: 100 },
      { id: "rma_11", name: "Federico Valverde", number: 8, pos: "MC", ovr: 88, pac: 88, sho: 83, pas: 84, dri: 84, def: 81, phy: 84, energy: 100 },
      { id: "rma_12", name: "Eduardo Camavinga", number: 6, pos: "MC", ovr: 84, pac: 81, sho: 68, pas: 82, dri: 84, def: 81, phy: 82, energy: 100 },
      { id: "rma_13", name: "Jude Bellingham", number: 5, pos: "MCO", ovr: 90, pac: 80, sho: 87, pas: 84, dri: 88, def: 78, phy: 83, energy: 100 },
      { id: "rma_14", name: "Arda Guler", number: 15, pos: "MCO", ovr: 81, pac: 75, sho: 76, pas: 83, dri: 85, def: 52, phy: 58, energy: 100 },
      { id: "rma_15", name: "Brahim Diaz", number: 21, pos: "MCO", ovr: 82, pac: 85, sho: 77, pas: 79, dri: 86, def: 36, phy: 56, energy: 100 },
      { id: "rma_16", name: "Rodrygo", number: 11, pos: "ED", ovr: 86, pac: 89, sho: 82, pas: 81, dri: 88, def: 32, phy: 61, energy: 100 },
      { id: "rma_17", name: "Vinicius Junior", number: 7, pos: "EI", ovr: 91, pac: 95, sho: 84, pas: 81, dri: 91, def: 29, phy: 69, energy: 100 },
      { id: "rma_18", name: "Kylian Mbappe", number: 9, pos: "DC", ovr: 91, pac: 97, sho: 90, pas: 80, dri: 92, def: 36, phy: 78, energy: 100 },
      { id: "rma_19", name: "Endrick", number: 16, pos: "DC", ovr: 79, pac: 88, sho: 80, pas: 66, dri: 81, def: 32, phy: 79, energy: 100 }
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
      { id: "ath_1", name: "Unai Simon", number: 1, pos: "POR", ovr: 86, pac: 46, sho: 18, pas: 75, dri: 46, def: 20, phy: 82, energy: 100 },
      { id: "ath_2", name: "Julen Agirrezabala", number: 13, pos: "POR", ovr: 80, pac: 44, sho: 16, pas: 70, dri: 42, def: 20, phy: 77, energy: 100 },
      { id: "ath_3", name: "Oscar de Marcos", number: 18, pos: "LD", ovr: 79, pac: 78, sho: 66, pas: 75, dri: 76, def: 77, phy: 75, energy: 100 },
      { id: "ath_4", name: "Andoni Gorosabel", number: 2, pos: "LD", ovr: 78, pac: 80, sho: 55, pas: 72, dri: 74, def: 76, phy: 75, energy: 100 },
      { id: "ath_5", name: "Dani Vivian", number: 4, pos: "DFC", ovr: 83, pac: 78, sho: 40, pas: 68, dri: 64, def: 84, phy: 84, energy: 100 },
      { id: "ath_6", name: "Aitor Paredes", number: 5, pos: "DFC", ovr: 80, pac: 74, sho: 38, pas: 66, dri: 62, def: 81, phy: 82, energy: 100 },
      { id: "ath_7", name: "Yeray Alvarez", number: 3, pos: "DFC", ovr: 80, pac: 72, sho: 42, pas: 68, dri: 65, def: 81, phy: 80, energy: 100 },
      { id: "ath_8", name: "Unai Nunez", number: 14, pos: "DFC", ovr: 78, pac: 68, sho: 36, pas: 64, dri: 60, def: 79, phy: 80, energy: 100 },
      { id: "ath_9", name: "Yuri Berchiche", number: 17, pos: "LI", ovr: 80, pac: 79, sho: 70, pas: 74, dri: 77, def: 79, phy: 81, energy: 100 },
      { id: "ath_10", name: "Inigo Lekue", number: 15, pos: "LI", ovr: 76, pac: 78, sho: 56, pas: 72, dri: 73, def: 74, phy: 74, energy: 100 },
      { id: "ath_11", name: "Inigo Ruiz de Galarreta", number: 16, pos: "MC", ovr: 81, pac: 68, sho: 68, pas: 82, dri: 79, def: 76, phy: 74, energy: 100 },
      { id: "ath_12", name: "Mikel Vesga", number: 6, pos: "MCD", ovr: 78, pac: 58, sho: 66, pas: 77, dri: 72, def: 78, phy: 80, energy: 100 },
      { id: "ath_13", name: "Benat Prados", number: 24, pos: "MC", ovr: 80, pac: 76, sho: 65, pas: 79, dri: 78, def: 78, phy: 78, energy: 100 },
      { id: "ath_14", name: "Mikel Jauregizar", number: 28, pos: "MC", ovr: 77, pac: 74, sho: 68, pas: 78, dri: 76, def: 74, phy: 76, energy: 100 },
      { id: "ath_15", name: "Oihan Sancet", number: 8, pos: "MCO", ovr: 83, pac: 76, sho: 82, pas: 82, dri: 84, def: 62, phy: 79, energy: 100 },
      { id: "ath_16", name: "Unai Gomez", number: 20, pos: "MC", ovr: 77, pac: 75, sho: 74, pas: 76, dri: 77, def: 68, phy: 76, energy: 100 },
      { id: "ath_17", name: "Inaki Williams", number: 9, pos: "ED", ovr: 83, pac: 93, sho: 80, pas: 77, dri: 82, def: 48, phy: 83, energy: 100 },
      { id: "ath_18", name: "Alex Berenguer", number: 7, pos: "EI", ovr: 80, pac: 82, sho: 77, pas: 78, dri: 82, def: 52, phy: 68, energy: 100 },
      { id: "ath_19", name: "Nico Williams", number: 10, pos: "EI", ovr: 87, pac: 94, sho: 82, pas: 83, dri: 89, def: 42, phy: 72, energy: 100 },
      { id: "ath_20", name: "Gorka Guruzeta", number: 12, pos: "DC", ovr: 81, pac: 78, sho: 82, pas: 74, dri: 78, def: 44, phy: 77, energy: 100 },
      { id: "ath_21", name: "Alvaro Djalo", number: 11, pos: "ED", ovr: 79, pac: 88, sho: 78, pas: 73, dri: 82, def: 40, phy: 68, energy: 100 }
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
      { id: "vil_1", name: "Diego Conde", number: 13, pos: "POR", ovr: 79, pac: 44, sho: 18, pas: 70, dri: 42, def: 20, phy: 78, energy: 100 },
      { id: "vil_2", name: "Luiz Junior", number: 1, pos: "POR", ovr: 78, pac: 42, sho: 16, pas: 68, dri: 40, def: 20, phy: 77, energy: 100 },
      { id: "vil_3", name: "Kiko Femenia", number: 23, pos: "LD", ovr: 77, pac: 79, sho: 54, pas: 73, dri: 74, def: 75, phy: 72, energy: 100 },
      { id: "vil_4", name: "Juan Foyth", number: 8, pos: "LD", ovr: 80, pac: 76, sho: 52, pas: 74, dri: 76, def: 81, phy: 80, energy: 100 },
      { id: "vil_5", name: "Raul Albiol", number: 3, pos: "DFC", ovr: 78, pac: 52, sho: 38, pas: 68, dri: 62, def: 80, phy: 77, energy: 100 },
      { id: "vil_6", name: "Logan Costa", number: 2, pos: "DFC", ovr: 80, pac: 74, sho: 36, pas: 65, dri: 60, def: 81, phy: 84, energy: 100 },
      { id: "vil_7", name: "Eric Bailly", number: 4, pos: "DFC", ovr: 78, pac: 75, sho: 40, pas: 64, dri: 63, def: 79, phy: 80, energy: 100 },
      { id: "vil_8", name: "Willy Kambwala", number: 5, pos: "DFC", ovr: 75, pac: 76, sho: 34, pas: 62, dri: 60, def: 76, phy: 78, energy: 100 },
      { id: "vil_9", name: "Sergi Cardona", number: 12, pos: "LI", ovr: 78, pac: 80, sho: 56, pas: 73, dri: 75, def: 76, phy: 76, energy: 100 },
      { id: "vil_10", name: "Alfonso Pedraza", number: 24, pos: "LI", ovr: 78, pac: 82, sho: 68, pas: 74, dri: 77, def: 74, phy: 78, energy: 100 },
      { id: "vil_11", name: "Pape Gueye", number: 18, pos: "MCD", ovr: 80, pac: 74, sho: 68, pas: 77, dri: 77, def: 80, phy: 83, energy: 100 },
      { id: "vil_12", name: "Santi Comesana", number: 14, pos: "MC", ovr: 80, pac: 73, sho: 72, pas: 79, dri: 78, def: 78, phy: 80, energy: 100 },
      { id: "vil_13", name: "Dani Parejo", number: 10, pos: "MC", ovr: 81, pac: 50, sho: 78, pas: 87, dri: 78, def: 68, phy: 66, energy: 100 },
      { id: "vil_14", name: "Pape Gueye", number: 18, pos: "MCD", ovr: 79, pac: 72, sho: 68, pas: 76, dri: 75, def: 78, phy: 82, energy: 100 },
      { id: "vil_15", name: "Ramon Terrats", number: 20, pos: "MC", ovr: 76, pac: 72, sho: 66, pas: 77, dri: 76, def: 72, phy: 74, energy: 100 },
      { id: "vil_16", name: "Denis Suarez", number: 6, pos: "MCO", ovr: 77, pac: 74, sho: 72, pas: 80, dri: 80, def: 56, phy: 64, energy: 100 },
      { id: "vil_17", name: "Yeremy Pino", number: 21, pos: "ED", ovr: 81, pac: 84, sho: 79, pas: 78, dri: 83, def: 46, phy: 68, energy: 100 },
      { id: "vil_18", name: "Nicolas Pepe", number: 19, pos: "ED", ovr: 80, pac: 87, sho: 78, pas: 76, dri: 83, def: 40, phy: 68, energy: 100 },
      { id: "vil_19", name: "Ilias Akhomach", number: 11, pos: "ED", ovr: 78, pac: 85, sho: 72, pas: 75, dri: 83, def: 42, phy: 62, energy: 100 },
      { id: "vil_20", name: "Ayoze Perez", number: 22, pos: "DC", ovr: 83, pac: 82, sho: 83, pas: 79, dri: 84, def: 48, phy: 72, energy: 100 },
      { id: "vil_21", name: "Gerard Moreno", number: 7, pos: "DC", ovr: 82, pac: 76, sho: 84, pas: 80, dri: 82, def: 46, phy: 72, energy: 100 },
      { id: "vil_22", name: "Thierno Barry", number: 15, pos: "DC", ovr: 78, pac: 83, sho: 78, pas: 68, dri: 76, def: 38, phy: 84, energy: 100 }
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
      { id: "rso_1", name: "Alex Remiro", number: 1, pos: "POR", ovr: 84, pac: 46, sho: 18, pas: 74, dri: 44, def: 20, phy: 80, energy: 100 },
      { id: "rso_2", name: "Unai Marrero", number: 13, pos: "POR", ovr: 74, pac: 42, sho: 16, pas: 66, dri: 40, def: 20, phy: 73, energy: 100 },
      { id: "rso_3", name: "Jon Aramburu", number: 27, pos: "LD", ovr: 78, pac: 82, sho: 54, pas: 72, dri: 74, def: 78, phy: 77, energy: 100 },
      { id: "rso_4", name: "Alvaro Odriozola", number: 2, pos: "LD", ovr: 76, pac: 84, sho: 53, pas: 70, dri: 74, def: 74, phy: 70, energy: 100 },
      { id: "rso_5", name: "Igor Zubeldia", number: 5, pos: "DFC", ovr: 80, pac: 68, sho: 46, pas: 73, dri: 67, def: 81, phy: 81, energy: 100 },
      { id: "rso_6", name: "Nayef Aguerd", number: 21, pos: "DFC", ovr: 81, pac: 75, sho: 42, pas: 72, dri: 66, def: 82, phy: 82, energy: 100 },
      { id: "rso_7", name: "Jon Pacheco", number: 20, pos: "DFC", ovr: 78, pac: 69, sho: 40, pas: 70, dri: 64, def: 79, phy: 78, energy: 100 },
      { id: "rso_8", name: "Aritz Elustondo", number: 6, pos: "DFC", ovr: 77, pac: 66, sho: 44, pas: 68, dri: 64, def: 78, phy: 78, energy: 100 },
      { id: "rso_9", name: "Javi Lopez", number: 12, pos: "LI", ovr: 77, pac: 81, sho: 52, pas: 72, dri: 74, def: 75, phy: 73, energy: 100 },
      { id: "rso_10", name: "Sergio Gomez", number: 17, pos: "LI", ovr: 80, pac: 81, sho: 74, pas: 82, dri: 81, def: 72, phy: 72, energy: 100 },
      { id: "rso_11", name: "Aihen Munoz", number: 3, pos: "LI", ovr: 77, pac: 78, sho: 54, pas: 72, dri: 74, def: 75, phy: 74, energy: 100 },
      { id: "rso_12", name: "Martin Zubimendi", number: 4, pos: "MCD", ovr: 85, pac: 72, sho: 68, pas: 83, dri: 81, def: 84, phy: 81, energy: 100 },
      { id: "rso_13", name: "Benat Turrientes", number: 22, pos: "MC", ovr: 78, pac: 72, sho: 70, pas: 79, dri: 78, def: 74, phy: 74, energy: 100 },
      { id: "rso_14", name: "Brais Mendez", number: 23, pos: "MC", ovr: 82, pac: 74, sho: 80, pas: 83, dri: 82, def: 72, phy: 74, energy: 100 },
      { id: "rso_15", name: "Luka Sucic", number: 24, pos: "MC", ovr: 80, pac: 74, sho: 77, pas: 81, dri: 80, def: 68, phy: 76, energy: 100 },
      { id: "rso_16", name: "Arsen Zakharyan", number: 8, pos: "MCO", ovr: 78, pac: 74, sho: 75, pas: 80, dri: 80, def: 58, phy: 70, energy: 100 },
      { id: "rso_17", name: "Takefusa Kubo", number: 14, pos: "ED", ovr: 84, pac: 89, sho: 79, pas: 82, dri: 88, def: 48, phy: 63, energy: 100 },
      { id: "rso_18", name: "Sheraldo Becker", number: 11, pos: "ED", ovr: 78, pac: 92, sho: 75, pas: 71, dri: 78, def: 40, phy: 76, energy: 100 },
      { id: "rso_19", name: "Ander Barrenetxea", number: 7, pos: "EI", ovr: 80, pac: 84, sho: 77, pas: 78, dri: 83, def: 48, phy: 68, energy: 100 },
      { id: "rso_20", name: "Mikel Oyarzabal", number: 10, pos: "DC", ovr: 83, pac: 78, sho: 83, pas: 81, dri: 82, def: 52, phy: 76, energy: 100 },
      { id: "rso_21", name: "Orri Oskarsson", number: 9, pos: "DC", ovr: 78, pac: 79, sho: 79, pas: 66, dri: 74, def: 36, phy: 79, energy: 100 },
      { id: "rso_22", name: "Umar Sadiq", number: 19, pos: "DC", ovr: 77, pac: 80, sho: 77, pas: 65, dri: 73, def: 35, phy: 80, energy: 100 }
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
      { id: "bet_1", name: "Rui Silva", number: 1, pos: "POR", ovr: 80, pac: 44, sho: 18, pas: 70, dri: 42, def: 20, phy: 78, energy: 100 },
      { id: "bet_2", name: "Adrian San Miguel", number: 13, pos: "POR", ovr: 74, pac: 40, sho: 16, pas: 66, dri: 38, def: 20, phy: 74, energy: 100 },
      { id: "bet_3", name: "Hector Bellerin", number: 2, pos: "LD", ovr: 78, pac: 84, sho: 54, pas: 72, dri: 77, def: 75, phy: 70, energy: 100 },
      { id: "bet_4", name: "Youssouf Sabaly", number: 23, pos: "LD", ovr: 77, pac: 80, sho: 56, pas: 71, dri: 75, def: 76, phy: 74, energy: 100 },
      { id: "bet_5", name: "Diego Llorente", number: 3, pos: "DFC", ovr: 80, pac: 70, sho: 44, pas: 71, dri: 66, def: 81, phy: 80, energy: 100 },
      { id: "bet_6", name: "Marc Bartra", number: 5, pos: "DFC", ovr: 79, pac: 68, sho: 55, pas: 74, dri: 70, def: 79, phy: 76, energy: 100 },
      { id: "bet_7", name: "Natan", number: 6, pos: "DFC", ovr: 78, pac: 72, sho: 38, pas: 66, dri: 62, def: 79, phy: 82, energy: 100 },
      { id: "bet_8", name: "Romain Perraud", number: 15, pos: "LI", ovr: 77, pac: 80, sho: 66, pas: 73, dri: 75, def: 74, phy: 77, energy: 100 },
      { id: "bet_9", name: "Ricardo Rodriguez", number: 12, pos: "LI", ovr: 77, pac: 66, sho: 68, pas: 79, dri: 74, def: 77, phy: 75, energy: 100 },
      { id: "bet_10", name: "Mateo Flores", number: 28, pos: "MC", ovr: 74, pac: 72, sho: 64, pas: 75, dri: 74, def: 72, phy: 73, energy: 100 },
      { id: "bet_11", name: "Sergi Altimira", number: 16, pos: "MC", ovr: 77, pac: 72, sho: 64, pas: 78, dri: 77, def: 75, phy: 76, energy: 100 },
      { id: "bet_12", name: "Marc Roca", number: 21, pos: "MC", ovr: 78, pac: 66, sho: 70, pas: 80, dri: 75, def: 77, phy: 77, energy: 100 },
      { id: "bet_13", name: "William Carvalho", number: 14, pos: "MC", ovr: 78, pac: 52, sho: 70, pas: 82, dri: 79, def: 75, phy: 79, energy: 100 },
      { id: "bet_14", name: "Pablo Fornals", number: 18, pos: "MC", ovr: 80, pac: 74, sho: 75, pas: 81, dri: 81, def: 68, phy: 72, energy: 100 },
      { id: "bet_15", name: "Giovani Lo Celso", number: 20, pos: "MCO", ovr: 83, pac: 75, sho: 80, pas: 84, dri: 85, def: 66, phy: 72, energy: 100 },
      { id: "bet_16", name: "Isco Alarcon", number: 22, pos: "MCO", ovr: 84, pac: 70, sho: 81, pas: 86, dri: 88, def: 62, phy: 68, energy: 100 },
      { id: "bet_17", name: "Abde Ezzalzouli", number: 10, pos: "EI", ovr: 80, pac: 91, sho: 74, pas: 73, dri: 86, def: 42, phy: 68, energy: 100 },
      { id: "bet_18", name: "Chimy Avila", number: 9, pos: "ED", ovr: 78, pac: 80, sho: 80, pas: 71, dri: 77, def: 52, phy: 82, energy: 100 },
      { id: "bet_19", name: "Juanmi", number: 7, pos: "EI", ovr: 77, pac: 76, sho: 78, pas: 72, dri: 78, def: 40, phy: 68, energy: 100 },
      { id: "bet_20", name: "Vitor Roque", number: 8, pos: "DC", ovr: 79, pac: 86, sho: 79, pas: 68, dri: 80, def: 38, phy: 77, energy: 100 },
      { id: "bet_21", name: "Cedric Bakambu", number: 11, pos: "DC", ovr: 77, pac: 81, sho: 78, pas: 66, dri: 76, def: 38, phy: 75, energy: 100 }
    ]
  },
  {
    id: "gir",
    name: "Girona FC",
    shortName: "GIR",
    city: "Girona",
    stadium: "Montilivi",
    primaryColor: "#CD1227",
    secondaryColor: "#FFFFFF",
    textColor: "#0F172A",
    budget: 50000000,
    reputation: 84,
    defaultFormation: "4-3-3",
    players: [
      { id: "gir_1", name: "Paulo Gazzaniga", number: 13, pos: "POR", ovr: 80, pac: 44, sho: 18, pas: 72, dri: 42, def: 20, phy: 78, energy: 100 },
      { id: "gir_2", name: "Pau Lopez", number: 25, pos: "POR", ovr: 78, pac: 42, sho: 16, pas: 70, dri: 40, def: 20, phy: 76, energy: 100 },
      { id: "gir_3", name: "Arnau Martinez", number: 4, pos: "LD", ovr: 79, pac: 78, sho: 58, pas: 76, dri: 78, def: 78, phy: 76, energy: 100 },
      { id: "gir_4", name: "Alejandro Frances", number: 16, pos: "LD", ovr: 77, pac: 79, sho: 45, pas: 70, dri: 71, def: 77, phy: 77, energy: 100 },
      { id: "gir_5", name: "David Lopez", number: 5, pos: "DFC", ovr: 79, pac: 60, sho: 55, pas: 75, dri: 68, def: 81, phy: 78, energy: 100 },
      { id: "gir_6", name: "Daley Blind", number: 17, pos: "DFC", ovr: 79, pac: 52, sho: 66, pas: 84, dri: 77, def: 80, phy: 74, energy: 100 },
      { id: "gir_7", name: "Ladislav Krejci", number: 18, pos: "DFC", ovr: 79, pac: 72, sho: 64, pas: 74, dri: 70, def: 80, phy: 83, energy: 100 },
      { id: "gir_8", name: "Miguel Gutierrez", number: 3, pos: "LI", ovr: 81, pac: 83, sho: 66, pas: 80, dri: 82, def: 76, phy: 75, energy: 100 },
      { id: "gir_9", name: "Oriol Romeu", number: 14, pos: "MCD", ovr: 78, pac: 55, sho: 58, pas: 75, dri: 71, def: 80, phy: 84, energy: 100 },
      { id: "gir_10", name: "Yangel Herrera", number: 21, pos: "MC", ovr: 81, pac: 75, sho: 76, pas: 78, dri: 79, def: 78, phy: 84, energy: 100 },
      { id: "gir_11", name: "Ivan Martin", number: 23, pos: "MC", ovr: 80, pac: 74, sho: 73, pas: 81, dri: 81, def: 72, phy: 74, energy: 100 },
      { id: "gir_12", name: "Donny van de Beek", number: 6, pos: "MC", ovr: 78, pac: 70, sho: 77, pas: 78, dri: 78, def: 68, phy: 72, energy: 100 },
      { id: "gir_13", name: "Viktor Tsygankov", number: 8, pos: "ED", ovr: 82, pac: 84, sho: 80, pas: 82, dri: 84, def: 48, phy: 68, energy: 100 },
      { id: "gir_14", name: "Yaser Asprilla", number: 10, pos: "ED", ovr: 78, pac: 86, sho: 74, pas: 77, dri: 83, def: 42, phy: 64, energy: 100 },
      { id: "gir_15", name: "Portu", number: 24, pos: "ED", ovr: 77, pac: 84, sho: 75, pas: 74, dri: 78, def: 55, phy: 74, energy: 100 },
      { id: "gir_16", name: "Bryan Gil", number: 20, pos: "EI", ovr: 79, pac: 87, sho: 72, pas: 78, dri: 85, def: 48, phy: 64, energy: 100 },
      { id: "gir_17", name: "Arnaut Danjuma", number: 11, pos: "EI", ovr: 78, pac: 86, sho: 79, pas: 74, dri: 82, def: 40, phy: 72, energy: 100 },
      { id: "gir_18", name: "Bojan Miovski", number: 19, pos: "DC", ovr: 78, pac: 80, sho: 79, pas: 68, dri: 75, def: 38, phy: 79, energy: 100 },
      { id: "gir_19", name: "Abel Ruiz", number: 9, pos: "DC", ovr: 78, pac: 78, sho: 78, pas: 73, dri: 78, def: 42, phy: 78, energy: 100 },
      { id: "gir_20", name: "Cristhian Stuani", number: 7, pos: "DC", ovr: 77, pac: 58, sho: 82, pas: 67, dri: 70, def: 44, phy: 80, energy: 100 }
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
      { id: "sev_1", name: "Orjan Nyland", number: 13, pos: "POR", ovr: 79, pac: 44, sho: 18, pas: 70, dri: 42, def: 20, phy: 78, energy: 100 },
      { id: "sev_2", name: "Alvaro Fernandez", number: 1, pos: "POR", ovr: 75, pac: 42, sho: 16, pas: 66, dri: 40, def: 20, phy: 74, energy: 100 },
      { id: "sev_3", name: "Jose Angel Carmona", number: 32, pos: "LD", ovr: 77, pac: 81, sho: 54, pas: 70, dri: 73, def: 77, phy: 78, energy: 100 },
      { id: "sev_4", name: "Jesus Navas", number: 16, pos: "LD", ovr: 78, pac: 80, sho: 64, pas: 79, dri: 80, def: 74, phy: 68, energy: 100 },
      { id: "sev_5", name: "Loic Bade", number: 22, pos: "DFC", ovr: 81, pac: 78, sho: 40, pas: 68, dri: 65, def: 82, phy: 83, energy: 100 },
      { id: "sev_6", name: "Marcao", number: 23, pos: "DFC", ovr: 77, pac: 66, sho: 42, pas: 68, dri: 64, def: 78, phy: 82, energy: 100 },
      { id: "sev_7", name: "Kike Salas", number: 4, pos: "DFC", ovr: 76, pac: 70, sho: 46, pas: 68, dri: 63, def: 77, phy: 80, energy: 100 },
      { id: "sev_8", name: "Adria Pedrosa", number: 3, pos: "LI", ovr: 77, pac: 84, sho: 60, pas: 72, dri: 76, def: 74, phy: 73, energy: 100 },
      { id: "sev_9", name: "Valentin Barco", number: 19, pos: "LI", ovr: 76, pac: 82, sho: 66, pas: 77, dri: 80, def: 70, phy: 68, energy: 100 },
      { id: "sev_10", name: "Lucien Agoume", number: 20, pos: "MCD", ovr: 77, pac: 70, sho: 60, pas: 76, dri: 75, def: 78, phy: 81, energy: 100 },
      { id: "sev_11", name: "Nemanja Gudelj", number: 6, pos: "MCD", ovr: 78, pac: 64, sho: 72, pas: 76, dri: 72, def: 79, phy: 82, energy: 100 },
      { id: "sev_12", name: "Saul Niguez", number: 17, pos: "MC", ovr: 80, pac: 73, sho: 76, pas: 78, dri: 78, def: 77, phy: 80, energy: 100 },
      { id: "sev_13", name: "Djibril Sow", number: 20, pos: "MC", ovr: 78, pac: 76, sho: 68, pas: 78, dri: 77, def: 76, phy: 77, energy: 100 },
      { id: "sev_14", name: "Albert Sambi Lokonga", number: 12, pos: "MC", ovr: 77, pac: 74, sho: 68, pas: 78, dri: 79, def: 74, phy: 76, energy: 100 },
      { id: "sev_15", name: "Juanlu Sanchez", number: 26, pos: "MC", ovr: 77, pac: 80, sho: 67, pas: 75, dri: 77, def: 74, phy: 76, energy: 100 },
      { id: "sev_16", name: "Dodi Lukebakio", number: 11, pos: "ED", ovr: 81, pac: 89, sho: 80, pas: 76, dri: 84, def: 42, phy: 77, energy: 100 },
      { id: "sev_17", name: "Suso", number: 10, pos: "ED", ovr: 78, pac: 68, sho: 79, pas: 83, dri: 82, def: 40, phy: 58, energy: 100 },
      { id: "sev_18", name: "Chidera Ejuke", number: 21, pos: "EI", ovr: 78, pac: 89, sho: 71, pas: 72, dri: 86, def: 38, phy: 64, energy: 100 },
      { id: "sev_19", name: "Peque Fernandez", number: 14, pos: "MCO", ovr: 76, pac: 77, sho: 74, pas: 76, dri: 78, def: 44, phy: 65, energy: 100 },
      { id: "sev_20", name: "Isaac Romero", number: 7, pos: "DC", ovr: 79, pac: 83, sho: 80, pas: 72, dri: 79, def: 48, phy: 78, energy: 100 },
      { id: "sev_21", name: "Kelechi Iheanacho", number: 9, pos: "DC", ovr: 77, pac: 77, sho: 78, pas: 72, dri: 78, def: 38, phy: 76, energy: 100 }
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
      { id: "val_1", name: "Giorgi Mamardashvili", number: 25, pos: "POR", ovr: 84, pac: 46, sho: 20, pas: 72, dri: 46, def: 20, phy: 84, energy: 100 },
      { id: "val_2", name: "Stole Dimitrievski", number: 13, pos: "POR", ovr: 78, pac: 44, sho: 18, pas: 68, dri: 42, def: 20, phy: 77, energy: 100 },
      { id: "val_3", name: "Thierry Correia", number: 12, pos: "LD", ovr: 78, pac: 88, sho: 54, pas: 71, dri: 76, def: 75, phy: 78, energy: 100 },
      { id: "val_4", name: "Dimitri Foulquier", number: 20, pos: "LD", ovr: 76, pac: 79, sho: 50, pas: 68, dri: 71, def: 76, phy: 81, energy: 100 },
      { id: "val_5", name: "Cristhian Mosquera", number: 3, pos: "DFC", ovr: 79, pac: 79, sho: 36, pas: 67, dri: 65, def: 80, phy: 82, energy: 100 },
      { id: "val_6", name: "Cesar Tarrega", number: 15, pos: "DFC", ovr: 77, pac: 72, sho: 36, pas: 65, dri: 60, def: 78, phy: 83, energy: 100 },
      { id: "val_7", name: "Yarek Gasiorowski", number: 24, pos: "DFC", ovr: 76, pac: 74, sho: 38, pas: 68, dri: 64, def: 77, phy: 79, energy: 100 },
      { id: "val_8", name: "Jose Luis Gaya", number: 14, pos: "LI", ovr: 82, pac: 83, sho: 63, pas: 78, dri: 80, def: 79, phy: 75, energy: 100 },
      { id: "val_9", name: "Jesus Vazquez", number: 21, pos: "LI", ovr: 75, pac: 81, sho: 52, pas: 69, dri: 73, def: 73, phy: 72, energy: 100 },
      { id: "val_10", name: "Pepelu", number: 18, pos: "MCD", ovr: 80, pac: 68, sho: 72, pas: 81, dri: 77, def: 80, phy: 80, energy: 100 },
      { id: "val_11", name: "Enzo Barrenechea", number: 5, pos: "MCD", ovr: 77, pac: 71, sho: 62, pas: 75, dri: 74, def: 78, phy: 80, energy: 100 },
      { id: "val_12", name: "Javi Guerra", number: 8, pos: "MC", ovr: 79, pac: 76, sho: 74, pas: 79, dri: 80, def: 73, phy: 76, energy: 100 },
      { id: "val_13", name: "Andre Almeida", number: 10, pos: "MCO", ovr: 78, pac: 72, sho: 71, pas: 81, dri: 81, def: 64, phy: 66, energy: 100 },
      { id: "val_14", name: "Diego Lopez", number: 16, pos: "ED", ovr: 78, pac: 83, sho: 76, pas: 75, dri: 79, def: 54, phy: 72, energy: 100 },
      { id: "val_15", name: "Fran Perez", number: 23, pos: "ED", ovr: 75, pac: 84, sho: 68, pas: 71, dri: 78, def: 45, phy: 65, energy: 100 },
      { id: "val_16", name: "Luis Rioja", number: 22, pos: "EI", ovr: 78, pac: 85, sho: 74, pas: 76, dri: 80, def: 52, phy: 70, energy: 100 },
      { id: "val_17", name: "Sergi Canos", number: 7, pos: "EI", ovr: 76, pac: 80, sho: 74, pas: 74, dri: 78, def: 50, phy: 71, energy: 100 },
      { id: "val_18", name: "Hugo Duro", number: 9, pos: "DC", ovr: 79, pac: 79, sho: 80, pas: 68, dri: 76, def: 48, phy: 80, energy: 100 },
      { id: "val_19", name: "Rafa Mir", number: 11, pos: "DC", ovr: 77, pac: 80, sho: 77, pas: 64, dri: 73, def: 42, phy: 82, energy: 100 },
      { id: "val_20", name: "Dani Gomez", number: 17, pos: "DC", ovr: 75, pac: 80, sho: 75, pas: 66, dri: 75, def: 38, phy: 72, energy: 100 }
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
      { id: "cel_1", name: "Vicente Guaita", number: 13, pos: "POR", ovr: 78, pac: 42, sho: 18, pas: 70, dri: 42, def: 20, phy: 76, energy: 100 },
      { id: "cel_2", name: "Ivan Villar", number: 1, pos: "POR", ovr: 74, pac: 40, sho: 16, pas: 66, dri: 38, def: 20, phy: 73, energy: 100 },
      { id: "cel_3", name: "Oscar Mingueza", number: 3, pos: "LD", ovr: 80, pac: 81, sho: 68, pas: 80, dri: 79, def: 77, phy: 76, energy: 100 },
      { id: "cel_4", name: "Javier Manquillo", number: 22, pos: "LD", ovr: 75, pac: 78, sho: 50, pas: 68, dri: 72, def: 75, phy: 74, energy: 100 },
      { id: "cel_5", name: "Carl Starfelt", number: 2, pos: "DFC", ovr: 78, pac: 68, sho: 36, pas: 64, dri: 60, def: 80, phy: 82, energy: 100 },
      { id: "cel_6", name: "Jailson", number: 16, pos: "DFC", ovr: 76, pac: 66, sho: 58, pas: 72, dri: 69, def: 77, phy: 80, energy: 100 },
      { id: "cel_7", name: "Carlos Dominguez", number: 24, pos: "DFC", ovr: 76, pac: 68, sho: 36, pas: 66, dri: 61, def: 77, phy: 79, energy: 100 },
      { id: "cel_8", name: "Marcos Alonso", number: 20, pos: "LI", ovr: 77, pac: 68, sho: 73, pas: 77, dri: 74, def: 76, phy: 77, energy: 100 },
      { id: "cel_9", name: "Mihailo Ristic", number: 21, pos: "LI", ovr: 75, pac: 78, sho: 66, pas: 73, dri: 74, def: 73, phy: 75, energy: 100 },
      { id: "cel_10", name: "Fran Beltran", number: 8, pos: "MC", ovr: 78, pac: 74, sho: 65, pas: 80, dri: 78, def: 76, phy: 75, energy: 100 },
      { id: "cel_11", name: "Damian Rodriguez", number: 28, pos: "MC", ovr: 76, pac: 71, sho: 63, pas: 78, dri: 76, def: 74, phy: 73, energy: 100 },
      { id: "cel_12", name: "Hugo Sotelo", number: 33, pos: "MC", ovr: 76, pac: 72, sho: 66, pas: 78, dri: 77, def: 70, phy: 72, energy: 100 },
      { id: "cel_13", name: "Ilaix Moriba", number: 6, pos: "MC", ovr: 77, pac: 75, sho: 71, pas: 76, dri: 78, def: 74, phy: 81, energy: 100 },
      { id: "cel_14", name: "Williot Swedberg", number: 19, pos: "EI", ovr: 77, pac: 83, sho: 76, pas: 74, dri: 79, def: 48, phy: 72, energy: 100 },
      { id: "cel_15", name: "Jonathan Bamba", number: 17, pos: "EI", ovr: 78, pac: 85, sho: 74, pas: 76, dri: 81, def: 46, phy: 71, energy: 100 },
      { id: "cel_16", name: "Iago Aspas", number: 10, pos: "DC", ovr: 82, pac: 76, sho: 84, pas: 84, dri: 84, def: 42, phy: 66, energy: 100 },
      { id: "cel_17", name: "Borja Iglesias", number: 7, pos: "DC", ovr: 79, pac: 75, sho: 80, pas: 68, dri: 74, def: 40, phy: 82, energy: 100 },
      { id: "cel_18", name: "Anastasios Douvikas", number: 11, pos: "DC", ovr: 77, pac: 78, sho: 78, pas: 66, dri: 75, def: 38, phy: 78, energy: 100 }
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
      { id: "osa_1", name: "Sergio Herrera", number: 1, pos: "POR", ovr: 79, pac: 44, sho: 18, pas: 70, dri: 42, def: 20, phy: 78, energy: 100 },
      { id: "osa_2", name: "Aitor Fernandez", number: 13, pos: "POR", ovr: 76, pac: 42, sho: 16, pas: 68, dri: 40, def: 20, phy: 75, energy: 100 },
      { id: "osa_3", name: "Jesus Areso", number: 12, pos: "LD", ovr: 78, pac: 86, sho: 56, pas: 74, dri: 76, def: 75, phy: 78, energy: 100 },
      { id: "osa_4", name: "Flavien Boyomo", number: 22, pos: "DFC", ovr: 78, pac: 78, sho: 36, pas: 66, dri: 64, def: 79, phy: 83, energy: 100 },
      { id: "osa_5", name: "Alejandro Catena", number: 24, pos: "DFC", ovr: 78, pac: 64, sho: 44, pas: 68, dri: 62, def: 80, phy: 82, energy: 100 },
      { id: "osa_6", name: "Jorge Herrando", number: 4, pos: "DFC", ovr: 76, pac: 68, sho: 34, pas: 64, dri: 58, def: 78, phy: 80, energy: 100 },
      { id: "osa_7", name: "Juan Cruz", number: 3, pos: "LI", ovr: 76, pac: 74, sho: 48, pas: 68, dri: 68, def: 77, phy: 78, energy: 100 },
      { id: "osa_8", name: "Abel Bretones", number: 23, pos: "LI", ovr: 77, pac: 82, sho: 60, pas: 72, dri: 75, def: 74, phy: 76, energy: 100 },
      { id: "osa_9", name: "Lucas Torro", number: 6, pos: "MCD", ovr: 78, pac: 62, sho: 62, pas: 75, dri: 72, def: 80, phy: 84, energy: 100 },
      { id: "osa_10", name: "Jon Moncayola", number: 7, pos: "MC", ovr: 78, pac: 77, sho: 71, pas: 77, dri: 77, def: 76, phy: 79, energy: 100 },
      { id: "osa_11", name: "Pablo Ibanez", number: 18, pos: "MC", ovr: 76, pac: 72, sho: 68, pas: 75, dri: 74, def: 74, phy: 78, energy: 100 },
      { id: "osa_12", name: "Aimar Oroz", number: 10, pos: "MCO", ovr: 80, pac: 75, sho: 76, pas: 81, dri: 82, def: 65, phy: 72, energy: 100 },
      { id: "osa_13", name: "Ruben Garcia", number: 14, pos: "ED", ovr: 77, pac: 76, sho: 74, pas: 78, dri: 78, def: 58, phy: 68, energy: 100 },
      { id: "osa_14", name: "Ruben Pena", number: 15, pos: "ED", ovr: 76, pac: 81, sho: 66, pas: 73, dri: 76, def: 72, phy: 72, energy: 100 },
      { id: "osa_15", name: "Bryan Zaragoza", number: 19, pos: "EI", ovr: 81, pac: 93, sho: 77, pas: 77, dri: 87, def: 40, phy: 58, energy: 100 },
      { id: "osa_16", name: "Moi Gomez", number: 16, pos: "EI", ovr: 77, pac: 74, sho: 73, pas: 79, dri: 79, def: 62, phy: 68, energy: 100 },
      { id: "osa_17", name: "Ante Budimir", number: 17, pos: "DC", ovr: 81, pac: 68, sho: 83, pas: 68, dri: 72, def: 42, phy: 84, energy: 100 },
      { id: "osa_18", name: "Raul Garcia de Haro", number: 9, pos: "DC", ovr: 76, pac: 74, sho: 77, pas: 66, dri: 74, def: 36, phy: 77, energy: 100 }
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
      { id: "get_1", name: "David Soria", number: 13, pos: "POR", ovr: 80, pac: 44, sho: 18, pas: 70, dri: 42, def: 20, phy: 79, energy: 100 },
      { id: "get_2", name: "Jiri Letacek", number: 1, pos: "POR", ovr: 74, pac: 42, sho: 16, pas: 66, dri: 40, def: 20, phy: 75, energy: 100 },
      { id: "get_3", name: "Juan Iglesias", number: 21, pos: "LD", ovr: 76, pac: 78, sho: 50, pas: 70, dri: 72, def: 76, phy: 76, energy: 100 },
      { id: "get_4", name: "Allan Nyom", number: 12, pos: "LD", ovr: 74, pac: 72, sho: 48, pas: 65, dri: 68, def: 75, phy: 82, energy: 100 },
      { id: "get_5", name: "Djene Dakonam", number: 2, pos: "DFC", ovr: 78, pac: 78, sho: 38, pas: 65, dri: 66, def: 80, phy: 80, energy: 100 },
      { id: "get_6", name: "Omar Alderete", number: 15, pos: "DFC", ovr: 78, pac: 70, sho: 48, pas: 66, dri: 62, def: 79, phy: 84, energy: 100 },
      { id: "get_7", name: "Domingos Duarte", number: 22, pos: "DFC", ovr: 76, pac: 64, sho: 36, pas: 63, dri: 59, def: 78, phy: 80, energy: 100 },
      { id: "get_8", name: "Diego Rico", number: 16, pos: "LI", ovr: 77, pac: 76, sho: 62, pas: 74, dri: 74, def: 76, phy: 77, energy: 100 },
      { id: "get_9", name: "Fabrizio Angileri", number: 3, pos: "LI", ovr: 75, pac: 78, sho: 58, pas: 71, dri: 72, def: 74, phy: 75, energy: 100 },
      { id: "get_10", name: "Mauro Arambarri", number: 8, pos: "MC", ovr: 79, pac: 74, sho: 76, pas: 77, dri: 76, def: 79, phy: 82, energy: 100 },
      { id: "get_11", name: "Luis Milla", number: 5, pos: "MC", ovr: 78, pac: 72, sho: 68, pas: 82, dri: 78, def: 74, phy: 72, energy: 100 },
      { id: "get_12", name: "Chrisantus Uche", number: 6, pos: "MC", ovr: 76, pac: 78, sho: 70, pas: 73, dri: 76, def: 74, phy: 82, energy: 100 },
      { id: "get_13", name: "Carles Perez", number: 17, pos: "ED", ovr: 77, pac: 84, sho: 76, pas: 74, dri: 80, def: 46, phy: 68, energy: 100 },
      { id: "get_14", name: "Peter Federico", number: 11, pos: "ED", ovr: 75, pac: 85, sho: 70, pas: 71, dri: 78, def: 42, phy: 64, energy: 100 },
      { id: "get_15", name: "Alex Sola", number: 7, pos: "EI", ovr: 76, pac: 84, sho: 68, pas: 72, dri: 77, def: 60, phy: 71, energy: 100 },
      { id: "get_16", name: "Borja Mayoral", number: 9, pos: "DC", ovr: 80, pac: 78, sho: 82, pas: 72, dri: 78, def: 42, phy: 75, energy: 100 },
      { id: "get_17", name: "Bertug Yildirim", number: 19, pos: "DC", ovr: 75, pac: 76, sho: 76, pas: 62, dri: 72, def: 36, phy: 80, energy: 100 },
      { id: "get_18", name: "Alvaro Rodriguez", number: 18, pos: "DC", ovr: 74, pac: 75, sho: 74, pas: 60, dri: 70, def: 38, phy: 82, energy: 100 }
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
      { id: "ala_1", name: "Antonio Sivera", number: 1, pos: "POR", ovr: 79, pac: 44, sho: 18, pas: 70, dri: 42, def: 20, phy: 78, energy: 100 },
      { id: "ala_2", name: "Jesus Owono", number: 31, pos: "POR", ovr: 74, pac: 42, sho: 16, pas: 66, dri: 40, def: 20, phy: 74, energy: 100 },
      { id: "ala_3", name: "Nahuel Tenaglia", number: 14, pos: "LD", ovr: 77, pac: 78, sho: 52, pas: 71, dri: 73, def: 77, phy: 79, energy: 100 },
      { id: "ala_4", name: "Hugo Novoa", number: 2, pos: "LD", ovr: 75, pac: 84, sho: 60, pas: 70, dri: 76, def: 70, phy: 72, energy: 100 },
      { id: "ala_5", name: "Abdel Abqar", number: 5, pos: "DFC", ovr: 78, pac: 74, sho: 34, pas: 65, dri: 60, def: 80, phy: 83, energy: 100 },
      { id: "ala_6", name: "Aleksandar Sedlar", number: 4, pos: "DFC", ovr: 76, pac: 64, sho: 40, pas: 65, dri: 60, def: 77, phy: 78, energy: 100 },
      { id: "ala_7", name: "Moussa Diarra", number: 22, pos: "DFC", ovr: 76, pac: 72, sho: 36, pas: 64, dri: 62, def: 77, phy: 79, energy: 100 },
      { id: "ala_8", name: "Manu Sanchez", number: 3, pos: "LI", ovr: 77, pac: 80, sho: 55, pas: 73, dri: 75, def: 75, phy: 74, energy: 100 },
      { id: "ala_9", name: "Antonio Blanco", number: 8, pos: "MCD", ovr: 78, pac: 73, sho: 64, pas: 78, dri: 76, def: 78, phy: 79, energy: 100 },
      { id: "ala_10", name: "Ander Guevara", number: 6, pos: "MC", ovr: 77, pac: 68, sho: 65, pas: 78, dri: 76, def: 76, phy: 76, energy: 100 },
      { id: "ala_11", name: "Jon Guridi", number: 18, pos: "MC", ovr: 77, pac: 72, sho: 72, pas: 76, dri: 76, def: 74, phy: 78, energy: 100 },
      { id: "ala_12", name: "Joan Jordan", number: 24, pos: "MC", ovr: 77, pac: 66, sho: 72, pas: 79, dri: 76, def: 74, phy: 74, energy: 100 },
      { id: "ala_13", name: "Carlos Vicente", number: 7, pos: "ED", ovr: 79, pac: 86, sho: 76, pas: 76, dri: 81, def: 55, phy: 73, energy: 100 },
      { id: "ala_14", name: "Luka Romero", number: 17, pos: "ED", ovr: 75, pac: 81, sho: 72, pas: 74, dri: 80, def: 40, phy: 58, energy: 100 },
      { id: "ala_15", name: "Tomas Conechny", number: 10, pos: "EI", ovr: 76, pac: 80, sho: 75, pas: 73, dri: 78, def: 52, phy: 74, energy: 100 },
      { id: "ala_16", name: "Carlos Martin", number: 19, pos: "EI", ovr: 75, pac: 81, sho: 74, pas: 70, dri: 76, def: 42, phy: 68, energy: 100 },
      { id: "ala_17", name: "Toni Martinez", number: 11, pos: "DC", ovr: 77, pac: 79, sho: 78, pas: 65, dri: 74, def: 38, phy: 80, energy: 100 },
      { id: "ala_18", name: "Kike Garcia", number: 17, pos: "DC", ovr: 76, pac: 68, sho: 77, pas: 67, dri: 71, def: 46, phy: 82, energy: 100 },
      { id: "ala_19", name: "Asier Villalibre", number: 9, pos: "DC", ovr: 76, pac: 74, sho: 76, pas: 66, dri: 72, def: 38, phy: 83, energy: 100 }
    ]
  },
  {
    id: "lpa",
    name: "UD Las Palmas",
    shortName: "LPA",
    city: "Las Palmas",
    stadium: "Gran Canaria",
    primaryColor: "#FFD100",
    secondaryColor: "#004B9B",
    textColor: "#0F172A",
    budget: 33000000,
    reputation: 79,
    defaultFormation: "4-3-3",
    players: [
      { id: "lpa_1", name: "Jasper Cillessen", number: 1, pos: "POR", ovr: 78, pac: 44, sho: 18, pas: 73, dri: 44, def: 20, phy: 76, energy: 100 },
      { id: "lpa_2", name: "Dinko Horkas", number: 13, pos: "POR", ovr: 74, pac: 42, sho: 16, pas: 66, dri: 40, def: 20, phy: 74, energy: 100 },
      { id: "lpa_3", name: "Viti Rozada", number: 18, pos: "LD", ovr: 75, pac: 82, sho: 58, pas: 71, dri: 74, def: 73, phy: 72, energy: 100 },
      { id: "lpa_4", name: "Marvin Park", number: 2, pos: "LD", ovr: 76, pac: 89, sho: 60, pas: 70, dri: 77, def: 68, phy: 70, energy: 100 },
      { id: "lpa_5", name: "Alex Suarez", number: 4, pos: "DFC", ovr: 76, pac: 71, sho: 38, pas: 68, dri: 64, def: 77, phy: 78, energy: 100 },
      { id: "lpa_6", name: "Scott McKenna", number: 15, pos: "DFC", ovr: 77, pac: 66, sho: 35, pas: 66, dri: 60, def: 78, phy: 83, energy: 100 },
      { id: "lpa_7", name: "Mika Marmol", number: 3, pos: "DFC", ovr: 77, pac: 76, sho: 40, pas: 75, dri: 72, def: 78, phy: 76, energy: 100 },
      { id: "lpa_8", name: "Alex Munoz", number: 23, pos: "LI", ovr: 76, pac: 77, sho: 58, pas: 72, dri: 73, def: 75, phy: 76, energy: 100 },
      { id: "lpa_9", name: "Daley Sinkgraven", number: 22, pos: "LI", ovr: 75, pac: 78, sho: 56, pas: 74, dri: 75, def: 72, phy: 70, energy: 100 },
      { id: "lpa_10", name: "Kirian Rodriguez", number: 20, pos: "MC", ovr: 79, pac: 70, sho: 74, pas: 83, dri: 80, def: 74, phy: 74, energy: 100 },
      { id: "lpa_11", name: "Enzo Loiodice", number: 12, pos: "MC", ovr: 76, pac: 72, sho: 66, pas: 78, dri: 77, def: 74, phy: 73, energy: 100 },
      { id: "lpa_12", name: "Javi Munoz", number: 5, pos: "MC", ovr: 77, pac: 74, sho: 70, pas: 78, dri: 76, def: 75, phy: 76, energy: 100 },
      { id: "lpa_13", name: "Jose Campana", number: 8, pos: "MC", ovr: 76, pac: 64, sho: 72, pas: 81, dri: 77, def: 67, phy: 68, energy: 100 },
      { id: "lpa_14", name: "Alberto Moleiro", number: 10, pos: "MCO", ovr: 80, pac: 83, sho: 76, pas: 81, dri: 84, def: 50, phy: 62, energy: 100 },
      { id: "lpa_15", name: "Manu Fuster", number: 7, pos: "ED", ovr: 77, pac: 78, sho: 75, pas: 79, dri: 80, def: 52, phy: 65, energy: 100 },
      { id: "lpa_16", name: "Sandro Ramirez", number: 19, pos: "DC", ovr: 77, pac: 82, sho: 78, pas: 74, dri: 79, def: 44, phy: 73, energy: 100 },
      { id: "lpa_17", name: "Fabio Silva", number: 37, pos: "DC", ovr: 78, pac: 80, sho: 78, pas: 71, dri: 78, def: 38, phy: 76, energy: 100 },
      { id: "lpa_18", name: "Jaime Mata", number: 9, pos: "DC", ovr: 75, pac: 69, sho: 76, pas: 68, dri: 71, def: 46, phy: 77, energy: 100 }
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
      { id: "ray_1", name: "Augusto Batalla", number: 13, pos: "POR", ovr: 79, pac: 44, sho: 18, pas: 70, dri: 42, def: 20, phy: 78, energy: 100 },
      { id: "ray_2", name: "Dani Cardenas", number: 1, pos: "POR", ovr: 75, pac: 42, sho: 16, pas: 68, dri: 40, def: 20, phy: 74, energy: 100 },
      { id: "ray_3", name: "Andrei Ratiu", number: 2, pos: "LD", ovr: 78, pac: 89, sho: 55, pas: 71, dri: 75, def: 76, phy: 77, energy: 100 },
      { id: "ray_4", name: "Ivan Balliu", number: 20, pos: "LD", ovr: 76, pac: 78, sho: 50, pas: 70, dri: 72, def: 75, phy: 74, energy: 100 },
      { id: "ray_5", name: "Florian Lejeune", number: 24, pos: "DFC", ovr: 79, pac: 64, sho: 65, pas: 74, dri: 65, def: 80, phy: 82, energy: 100 },
      { id: "ray_6", name: "Abdul Mumin", number: 16, pos: "DFC", ovr: 77, pac: 75, sho: 36, pas: 66, dri: 63, def: 78, phy: 81, energy: 100 },
      { id: "ray_7", name: "Aridane Hernandez", number: 5, pos: "DFC", ovr: 75, pac: 58, sho: 38, pas: 62, dri: 56, def: 76, phy: 81, energy: 100 },
      { id: "ray_8", name: "Pep Chavarria", number: 3, pos: "LI", ovr: 76, pac: 82, sho: 56, pas: 71, dri: 74, def: 74, phy: 74, energy: 100 },
      { id: "ray_9", name: "Alfonso Espino", number: 12, pos: "LI", ovr: 76, pac: 81, sho: 58, pas: 72, dri: 74, def: 75, phy: 77, energy: 100 },
      { id: "ray_10", name: "Pathe Ciss", number: 6, pos: "MCD", ovr: 77, pac: 71, sho: 64, pas: 75, dri: 74, def: 78, phy: 82, energy: 100 },
      { id: "ray_11", name: "Oscar Valentin", number: 23, pos: "MCD", ovr: 77, pac: 73, sho: 60, pas: 75, dri: 74, def: 78, phy: 79, energy: 100 },
      { id: "ray_12", name: "Unai Lopez", number: 17, pos: "MC", ovr: 77, pac: 72, sho: 74, pas: 80, dri: 78, def: 70, phy: 68, energy: 100 },
      { id: "ray_13", name: "Gerard Gumbau", number: 4, pos: "MC", ovr: 76, pac: 66, sho: 71, pas: 78, dri: 74, def: 75, phy: 76, energy: 100 },
      { id: "ray_14", name: "James Rodriguez", number: 10, pos: "MCO", ovr: 81, pac: 66, sho: 82, pas: 86, dri: 82, def: 48, phy: 64, energy: 100 },
      { id: "ray_15", name: "Isi Palazon", number: 7, pos: "ED", ovr: 79, pac: 81, sho: 77, pas: 80, dri: 82, def: 62, phy: 73, energy: 100 },
      { id: "ray_16", name: "Jorge de Frutos", number: 19, pos: "ED", ovr: 78, pac: 86, sho: 75, pas: 74, dri: 79, def: 55, phy: 72, energy: 100 },
      { id: "ray_17", name: "Alvaro Garcia", number: 18, pos: "EI", ovr: 80, pac: 89, sho: 77, pas: 77, dri: 81, def: 58, phy: 72, energy: 100 },
      { id: "ray_18", name: "Sergio Camello", number: 14, pos: "DC", ovr: 77, pac: 80, sho: 77, pas: 72, dri: 77, def: 44, phy: 72, energy: 100 },
      { id: "ray_19", name: "Raul de Tomas", number: 9, pos: "DC", ovr: 76, pac: 75, sho: 78, pas: 71, dri: 77, def: 38, phy: 73, energy: 100 }
    ]
  },
  {
    id: "mll",
    name: "RCD Mallorca",
    shortName: "MLL",
    city: "Palma de Mallorca",
    stadium: "Mallorca Son Moix",
    primaryColor: "#E20613",
    secondaryColor: "#000000",
    textColor: "#FFFFFF",
    budget: 36000000,
    reputation: 81,
    defaultFormation: "4-4-2",
    players: [
      { id: "mll_1", name: "Dominik Greif", number: 1, pos: "POR", ovr: 78, pac: 44, sho: 18, pas: 70, dri: 42, def: 20, phy: 77, energy: 100 },
      { id: "mll_2", name: "Leo Roman", number: 13, pos: "POR", ovr: 76, pac: 42, sho: 16, pas: 68, dri: 40, def: 20, phy: 75, energy: 100 },
      { id: "mll_3", name: "Pablo Maffeo", number: 23, pos: "LD", ovr: 78, pac: 83, sho: 54, pas: 72, dri: 76, def: 77, phy: 78, energy: 100 },
      { id: "mll_4", name: "Antonio Sanchez", number: 6, pos: "LD", ovr: 76, pac: 77, sho: 66, pas: 74, dri: 76, def: 73, phy: 76, energy: 100 },
      { id: "mll_5", name: "Antonio Raillo", number: 21, pos: "DFC", ovr: 79, pac: 64, sho: 48, pas: 68, dri: 62, def: 81, phy: 84, energy: 100 },
      { id: "mll_6", name: "Martin Valjent", number: 24, pos: "DFC", ovr: 78, pac: 72, sho: 36, pas: 68, dri: 64, def: 80, phy: 79, energy: 100 },
      { id: "mll_7", name: "Jose Copete", number: 22, pos: "DFC", ovr: 76, pac: 68, sho: 34, pas: 63, dri: 58, def: 77, phy: 80, energy: 100 },
      { id: "mll_8", name: "Johan Mojica", number: 22, pos: "LI", ovr: 77, pac: 86, sho: 62, pas: 73, dri: 77, def: 72, phy: 75, energy: 100 },
      { id: "mll_9", name: "Toni Lato", number: 3, pos: "LI", ovr: 76, pac: 82, sho: 58, pas: 72, dri: 74, def: 74, phy: 73, energy: 100 },
      { id: "mll_10", name: "Samu Costa", number: 12, pos: "MCD", ovr: 80, pac: 73, sho: 66, pas: 76, dri: 75, def: 80, phy: 85, energy: 100 },
      { id: "mll_11", name: "Omar Mascarell", number: 5, pos: "MCD", ovr: 76, pac: 62, sho: 60, pas: 75, dri: 72, def: 77, phy: 79, energy: 100 },
      { id: "mll_12", name: "Sergi Darder", number: 10, pos: "MC", ovr: 81, pac: 72, sho: 76, pas: 84, dri: 82, def: 71, phy: 74, energy: 100 },
      { id: "mll_13", name: "Manu Morlanes", number: 8, pos: "MC", ovr: 77, pac: 70, sho: 68, pas: 80, dri: 78, def: 72, phy: 70, energy: 100 },
      { id: "mll_14", name: "Dani Rodriguez", number: 14, pos: "MC", ovr: 78, pac: 75, sho: 74, pas: 78, dri: 78, def: 70, phy: 74, energy: 100 },
      { id: "mll_15", name: "Robert Navarro", number: 27, pos: "ED", ovr: 77, pac: 82, sho: 72, pas: 76, dri: 81, def: 48, phy: 64, energy: 100 },
      { id: "mll_16", name: "Takuma Asano", number: 11, pos: "ED", ovr: 77, pac: 87, sho: 74, pas: 70, dri: 78, def: 44, phy: 72, energy: 100 },
      { id: "mll_17", name: "Chiquinho", number: 19, pos: "EI", ovr: 76, pac: 85, sho: 72, pas: 73, dri: 79, def: 42, phy: 68, energy: 100 },
      { id: "mll_18", name: "Vedat Muriqi", number: 7, pos: "DC", ovr: 81, pac: 72, sho: 82, pas: 68, dri: 72, def: 48, phy: 86, energy: 100 },
      { id: "mll_19", name: "Cyle Larin", number: 17, pos: "DC", ovr: 77, pac: 79, sho: 78, pas: 66, dri: 74, def: 38, phy: 82, energy: 100 },
      { id: "mll_20", name: "Abdon Prats", number: 9, pos: "DC", ovr: 75, pac: 68, sho: 77, pas: 66, dri: 72, def: 40, phy: 78, energy: 100 }
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
      { id: "esp_1", name: "Angel Fortuno", number: 1, pos: "POR", ovr: 74, pac: 44, sho: 16, pas: 68, dri: 42, def: 18, phy: 74, energy: 100 },
      { id: "esp_2", name: "Fernando Pacheco", number: 13, pos: "POR", ovr: 76, pac: 42, sho: 16, pas: 68, dri: 40, def: 20, phy: 75, energy: 100 },
      { id: "esp_3", name: "Alvaro Tejero", number: 12, pos: "LD", ovr: 77, pac: 79, sho: 60, pas: 74, dri: 74, def: 75, phy: 73, energy: 100 },
      { id: "esp_4", name: "Omar El Hilali", number: 23, pos: "LD", ovr: 76, pac: 80, sho: 50, pas: 69, dri: 72, def: 76, phy: 76, energy: 100 },
      { id: "esp_5", name: "Marash Kumbulla", number: 4, pos: "DFC", ovr: 78, pac: 66, sho: 36, pas: 65, dri: 60, def: 79, phy: 82, energy: 100 },
      { id: "esp_6", name: "Leandro Cabrera", number: 6, pos: "DFC", ovr: 77, pac: 62, sho: 40, pas: 64, dri: 58, def: 78, phy: 81, energy: 100 },
      { id: "esp_7", name: "Sergi Gomez", number: 3, pos: "DFC", ovr: 76, pac: 63, sho: 38, pas: 66, dri: 60, def: 77, phy: 77, energy: 100 },
      { id: "esp_8", name: "Carlos Romero", number: 22, pos: "LI", ovr: 77, pac: 82, sho: 63, pas: 73, dri: 76, def: 75, phy: 74, energy: 100 },
      { id: "esp_9", name: "Brian Olivan", number: 14, pos: "LI", ovr: 76, pac: 76, sho: 58, pas: 73, dri: 73, def: 75, phy: 74, energy: 100 },
      { id: "esp_10", name: "Alex Kral", number: 20, pos: "MCD", ovr: 80, pac: 77, sho: 67, pas: 77, dri: 79, def: 79, phy: 83, energy: 100 },
      { id: "esp_11", name: "Jose Gragera", number: 18, pos: "MC", ovr: 77, pac: 69, sho: 65, pas: 76, dri: 73, def: 77, phy: 80, energy: 100 },
      { id: "esp_12", name: "Pol Lozano", number: 10, pos: "MC", ovr: 76, pac: 71, sho: 62, pas: 76, dri: 75, def: 75, phy: 75, energy: 100 },
      { id: "esp_13", name: "Edu Exposito", number: 8, pos: "MC", ovr: 77, pac: 72, sho: 74, pas: 78, dri: 77, def: 70, phy: 72, energy: 100 },
      { id: "esp_14", name: "Jofre Carreras", number: 17, pos: "ED", ovr: 79, pac: 86, sho: 74, pas: 75, dri: 81, def: 54, phy: 71, energy: 100 },
      { id: "esp_15", name: "Irvin Cardona", number: 24, pos: "EI", ovr: 76, pac: 82, sho: 75, pas: 70, dri: 77, def: 42, phy: 72, energy: 100 },
      { id: "esp_16", name: "Javi Puado", number: 7, pos: "DC", ovr: 81, pac: 84, sho: 81, pas: 77, dri: 81, def: 53, phy: 76, energy: 100 },
      { id: "esp_17", name: "Alejo Veliz", number: 9, pos: "DC", ovr: 78, pac: 78, sho: 79, pas: 64, dri: 74, def: 37, phy: 82, energy: 100 },
      { id: "esp_18", name: "Walid Cheddira", number: 16, pos: "DC", ovr: 76, pac: 80, sho: 76, pas: 65, dri: 75, def: 40, phy: 77, energy: 100 }
    ]
  },
  {
    id: "leg",
    name: "CD Leganes",
    shortName: "LEG",
    city: "Leganes",
    stadium: "Estadio Municipal Butarque",
    primaryColor: "#0055A5",
    secondaryColor: "#FFFFFF",
    textColor: "#0F172A",
    budget: 30000000,
    reputation: 78,
    defaultFormation: "4-2-3-1",
    players: [
      { id: "leg_1", name: "Marko Dmitrovic", number: 13, pos: "POR", ovr: 78, pac: 42, sho: 18, pas: 69, dri: 40, def: 20, phy: 78, energy: 100 },
      { id: "leg_2", name: "Juan Soriano", number: 1, pos: "POR", ovr: 75, pac: 42, sho: 16, pas: 66, dri: 40, def: 20, phy: 74, energy: 100 },
      { id: "leg_3", name: "Valentin Rosier", number: 12, pos: "LD", ovr: 78, pac: 85, sho: 52, pas: 71, dri: 76, def: 77, phy: 79, energy: 100 },
      { id: "leg_4", name: "Adria Altimira", number: 2, pos: "LD", ovr: 75, pac: 82, sho: 54, pas: 70, dri: 74, def: 72, phy: 71, energy: 100 },
      { id: "leg_5", name: "Matija Nastasic", number: 22, pos: "DFC", ovr: 78, pac: 56, sho: 40, pas: 67, dri: 61, def: 80, phy: 80, energy: 100 },
      { id: "leg_6", name: "Sergio Gonzalez", number: 6, pos: "DFC", ovr: 76, pac: 65, sho: 37, pas: 63, dri: 59, def: 77, phy: 79, energy: 100 },
      { id: "leg_7", name: "Jorge Saenz", number: 3, pos: "DFC", ovr: 76, pac: 64, sho: 35, pas: 62, dri: 58, def: 77, phy: 80, energy: 100 },
      { id: "leg_8", name: "Javi Hernandez", number: 20, pos: "LI", ovr: 76, pac: 78, sho: 55, pas: 71, dri: 73, def: 75, phy: 75, energy: 100 },
      { id: "leg_9", name: "Enric Franquesa", number: 15, pos: "LI", ovr: 75, pac: 83, sho: 58, pas: 70, dri: 74, def: 72, phy: 72, energy: 100 },
      { id: "leg_10", name: "Renato Tapia", number: 5, pos: "MCD", ovr: 80, pac: 67, sho: 61, pas: 76, dri: 75, def: 81, phy: 85, energy: 100 },
      { id: "leg_11", name: "Yvan Neyou", number: 17, pos: "MC", ovr: 78, pac: 76, sho: 66, pas: 77, dri: 78, def: 78, phy: 80, energy: 100 },
      { id: "leg_12", name: "Darko Brasanac", number: 14, pos: "MC", ovr: 76, pac: 70, sho: 68, pas: 75, dri: 74, def: 75, phy: 76, energy: 100 },
      { id: "leg_13", name: "Seydouba Cisse", number: 8, pos: "MC", ovr: 76, pac: 78, sho: 70, pas: 74, dri: 77, def: 70, phy: 75, energy: 100 },
      { id: "leg_14", name: "Oscar Rodriguez", number: 7, pos: "MCO", ovr: 79, pac: 73, sho: 81, pas: 82, dri: 80, def: 56, phy: 69, energy: 100 },
      { id: "leg_15", name: "Juan Cruz", number: 11, pos: "ED", ovr: 80, pac: 86, sho: 79, pas: 77, dri: 84, def: 48, phy: 68, energy: 100 },
      { id: "leg_16", name: "Dani Raba", number: 10, pos: "EI", ovr: 77, pac: 80, sho: 76, pas: 77, dri: 80, def: 46, phy: 68, energy: 100 },
      { id: "leg_17", name: "Munir El Haddadi", number: 23, pos: "EI", ovr: 76, pac: 78, sho: 76, pas: 75, dri: 78, def: 42, phy: 66, energy: 100 },
      { id: "leg_18", name: "Sebastien Haller", number: 18, pos: "DC", ovr: 79, pac: 64, sho: 80, pas: 71, dri: 73, def: 43, phy: 85, energy: 100 },
      { id: "leg_19", name: "Miguel de la Fuente", number: 9, pos: "DC", ovr: 76, pac: 79, sho: 76, pas: 65, dri: 74, def: 42, phy: 78, energy: 100 }
    ]
  },
  {
    id: "vld",
    name: "Real Valladolid",
    shortName: "VLD",
    city: "Valladolid",
    stadium: "Jose Zorrilla",
    primaryColor: "#5B2B82",
    secondaryColor: "#FFFFFF",
    textColor: "#0F172A",
    budget: 30000000,
    reputation: 78,
    defaultFormation: "4-3-3",
    players: [
      { id: "vld_1", name: "Karl Hein", number: 13, pos: "POR", ovr: 79, pac: 44, sho: 18, pas: 71, dri: 44, def: 20, phy: 78, energy: 100 },
      { id: "vld_2", name: "Andre Ferreira", number: 1, pos: "POR", ovr: 74, pac: 42, sho: 16, pas: 66, dri: 40, def: 20, phy: 74, energy: 100 },
      { id: "vld_3", name: "Luis Perez", number: 2, pos: "LD", ovr: 77, pac: 81, sho: 52, pas: 70, dri: 74, def: 76, phy: 76, energy: 100 },
      { id: "vld_4", name: "Lucas Rosa", number: 22, pos: "LD", ovr: 76, pac: 82, sho: 54, pas: 70, dri: 75, def: 74, phy: 74, energy: 100 },
      { id: "vld_5", name: "Eray Comert", number: 15, pos: "DFC", ovr: 78, pac: 66, sho: 41, pas: 67, dri: 62, def: 79, phy: 81, energy: 100 },
      { id: "vld_6", name: "Javi Sanchez", number: 5, pos: "DFC", ovr: 76, pac: 66, sho: 37, pas: 65, dri: 61, def: 77, phy: 78, energy: 100 },
      { id: "vld_7", name: "David Torres", number: 3, pos: "DFC", ovr: 75, pac: 68, sho: 34, pas: 64, dri: 60, def: 76, phy: 76, energy: 100 },
      { id: "vld_8", name: "Cenk Ozkacar", number: 6, pos: "DFC", ovr: 76, pac: 68, sho: 36, pas: 64, dri: 60, def: 77, phy: 79, energy: 100 },
      { id: "vld_9", name: "Stanko Juric", number: 20, pos: "MCD", ovr: 78, pac: 68, sho: 64, pas: 75, dri: 72, def: 79, phy: 84, energy: 100 },
      { id: "vld_10", name: "Mario Martin", number: 12, pos: "MCD", ovr: 75, pac: 72, sho: 58, pas: 74, dri: 73, def: 75, phy: 77, energy: 100 },
      { id: "vld_11", name: "Kike Perez", number: 8, pos: "MC", ovr: 77, pac: 73, sho: 71, pas: 78, dri: 77, def: 72, phy: 75, energy: 100 },
      { id: "vld_12", name: "Selim Amallah", number: 21, pos: "MCO", ovr: 78, pac: 74, sho: 77, pas: 78, dri: 79, def: 66, phy: 78, energy: 100 },
      { id: "vld_13", name: "Victor Meseguer", number: 4, pos: "MC", ovr: 76, pac: 70, sho: 68, pas: 75, dri: 74, def: 74, phy: 77, energy: 100 },
      { id: "vld_14", name: "Anuar Tuhami", number: 23, pos: "MC", ovr: 75, pac: 76, sho: 67, pas: 73, dri: 75, def: 72, phy: 76, energy: 100 },
      { id: "vld_15", name: "Raul Moro", number: 11, pos: "EI", ovr: 80, pac: 91, sho: 75, pas: 75, dri: 85, def: 41, phy: 63, energy: 100 },
      { id: "vld_16", name: "Darwin Machis", number: 7, pos: "EI", ovr: 76, pac: 85, sho: 75, pas: 72, dri: 80, def: 42, phy: 68, energy: 100 },
      { id: "vld_17", name: "Amath Ndiaye", number: 19, pos: "ED", ovr: 76, pac: 87, sho: 72, pas: 69, dri: 78, def: 43, phy: 67, energy: 100 },
      { id: "vld_18", name: "Ivan Sanchez", number: 10, pos: "ED", ovr: 76, pac: 78, sho: 71, pas: 77, dri: 80, def: 52, phy: 64, energy: 100 },
      { id: "vld_19", name: "Mamadou Sylla", number: 9, pos: "DC", ovr: 76, pac: 81, sho: 75, pas: 64, dri: 74, def: 41, phy: 78, energy: 100 },
      { id: "vld_20", name: "Juanmi Latasa", number: 14, pos: "DC", ovr: 76, pac: 72, sho: 75, pas: 62, dri: 70, def: 44, phy: 84, energy: 100 },
      { id: "vld_21", name: "Marcos Andre", number: 18, pos: "DC", ovr: 76, pac: 78, sho: 75, pas: 66, dri: 76, def: 38, phy: 77, energy: 100 }
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
  const energyFactor = 0.5 + (player.energy / 100) * 0.5; // La energía baja reduce rendimiento
  return Math.round(player.ovr * affinity * energyFactor);
}

// Media global de un equipo en base a su 11 inicial
function calculateTeamAverages(lineupPlayers, formationKey) {
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
 * Simulación estocástica realista para los otros partidos de la jornada
 */
function simulateAIParties(match, teamsMap) {
  const homeTeam = teamsMap[match.homeTeamId];
  const awayTeam = teamsMap[match.awayTeamId];

  if (!homeTeam || !awayTeam) return match;

  // Medias aproximadas de los mejores 11
  const homeOvr = homeTeam.reputation || 80;
  const awayOvr = awayTeam.reputation || 80;

  // Factor campo local (+2 puntos efectivos)
  const effectiveHome = homeOvr + 2.5;
  const effectiveAway = awayOvr;

  const diff = effectiveHome - effectiveAway;

  // Cálculo de goles mediante distribución de Poisson aproximada
  const baseHomeLambda = Math.max(0.4, 1.45 + (diff * 0.08));
  const baseAwayLambda = Math.max(0.3, 1.15 - (diff * 0.08));

  const homeScore = samplePoisson(baseHomeLambda);
  const awayScore = samplePoisson(baseAwayLambda);

  // Asignar goleadores realistas entre los delanteros y medios del equipo
  const scorers = [];
  for (let i = 0; i < homeScore; i++) {
    const scorer = pickScorer(homeTeam);
    scorers.push({ teamId: homeTeam.id, player: scorer, minute: Math.floor(Math.random() * 88) + 2 });
  }
  for (let i = 0; i < awayScore; i++) {
    const scorer = pickScorer(awayTeam);
    scorers.push({ teamId: awayTeam.id, player: scorer, minute: Math.floor(Math.random() * 88) + 2 });
  }

  return {
    ...match,
    played: true,
    homeScore,
    awayScore,
    scorers
  };
}

function samplePoisson(lambda) {
  let L = Math.exp(-lambda);
  let p = 1.0;
  let k = 0;
  do {
    k++;
    p *= Math.random();
  } while (p > L);
  return Math.min(k - 1, 7); // Tope realista de goles en un partido
}

function pickScorer(team) {
  if (!team || !team.players || team.players.length === 0) return { name: "Jugador", id: "" };
  // Mayor probabilidad a DC, EI, ED, MCO
  const weights = team.players.map(p => {
    if (p.pos === "DC") return (p.sho || 75) * 3.5;
    if (p.pos === "EI" || p.pos === "ED") return (p.sho || 75) * 2.5;
    if (p.pos === "MCO") return (p.sho || 75) * 1.8;
    if (p.pos === "MC") return (p.sho || 70) * 1.0;
    if (p.pos === "DFC" || p.pos === "LD" || p.pos === "LI") return 15;
    return 0; // POR
  });

  const total = weights.reduce((a, b) => a + b, 0);
  let r = Math.random() * total;
  for (let i = 0; i < team.players.length; i++) {
    r -= weights[i];
    if (r <= 0) return team.players[i];
  }
  return team.players[team.players.length - 1];
}

// =========================================================
// ARCHIVO: js\engine\saveManager.js
// =========================================================

// Gestor de guardado en LocalStorage para partidas persistentes

const SAVE_KEY = "ENTRENATE_TE_TE_LALIGA_REAL_V7";
const CURRENT_SCHEMA = "LALIGA_REAL_V7";
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
    this.maxMinutes = 90 + Math.floor(Math.random() * 5); // Tiempo añadido
    this.speed = options.speed || 1; // Multiplicador de velocidad
    this.isRunning = false;
    this.isFinished = false;

    this.homeScore = 0;
    this.awayScore = 0;

    this.homeMentality = options.homeMentality || "balanced";
    this.awayMentality = options.awayMentality || "balanced";

    // Límite de 5 cambios oficiales
    this.homeSubsRemaining = 5;
    this.awaySubsRemaining = 5;

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

    // Inicializar posiciones 3D relativas (x: 0-100, y: 0-100, z: 0-25)
    this.ball = { x: 50, y: 50, z: 0, targetX: 50, targetY: 50, targetZ: 0, possession: "home" };
    this.init2DPositions();

    this.onTick = options.onTick || (() => {});
    this.onFinish = options.onFinish || (() => {});
    this.onAlert = options.onAlert || (() => {});
  }

  init2DPositions() {
    // Configurar posiciones base 3D en campo horizontal (0 = portería local, 100 = portería visitante)
    const baseCoords = [
      { x: 5, y: 50 },  // POR
      { x: 22, y: 20 }, // LI
      { x: 20, y: 40 }, // DFC
      { x: 20, y: 60 }, // DFC
      { x: 22, y: 80 }, // LD
      { x: 38, y: 50 }, // MCD
      { x: 48, y: 35 }, // MC
      { x: 48, y: 65 }, // MC/MCO
      { x: 68, y: 20 }, // EI
      { x: 74, y: 50 }, // DC
      { x: 68, y: 80 }  // ED
    ];

    this.home2D = this.homePlayersOnPitch.map((p, idx) => ({
      player: p,
      number: p.number || (idx + 1),
      isKeeper: p.pos === "POR" || idx === 0,
      baseX: baseCoords[idx]?.x || 25,
      baseY: baseCoords[idx]?.y || 50,
      curX: baseCoords[idx]?.x || 25,
      curY: baseCoords[idx]?.y || 50,
      targetX: baseCoords[idx]?.x || 25,
      targetY: baseCoords[idx]?.y || 50,
      animPhase: Math.random() * Math.PI * 2,
      facingX: 1
    }));

    this.away2D = this.awayPlayersOnPitch.map((p, idx) => ({
      player: p,
      number: p.number || (idx + 1),
      isKeeper: p.pos === "POR" || idx === 0,
      baseX: 100 - (baseCoords[idx]?.x || 25),
      baseY: 100 - (baseCoords[idx]?.y || 50),
      curX: 100 - (baseCoords[idx]?.x || 25),
      curY: 100 - (baseCoords[idx]?.y || 50),
      targetX: 100 - (baseCoords[idx]?.x || 25),
      targetY: 100 - (baseCoords[idx]?.y || 50),
      animPhase: Math.random() * Math.PI * 2,
      facingX: -1
    }));
  }

  start() {
    this.isRunning = true;
    this.loop();
  }

  pause() {
    this.isRunning = false;
  }

  setSpeed(speedMultiplier) {
    this.speed = speedMultiplier;
  }

  setMentality(teamSide, mentalityId) {
    if (teamSide === "home") this.homeMentality = mentalityId;
    if (teamSide === "away") this.awayMentality = mentalityId;
  }

  // Realizar sustitución en vivo
  makeSubstitution(teamSide, pitchPlayerId, benchPlayerId) {
    const isHome = teamSide === "home";
    const onPitchList = isHome ? this.homePlayersOnPitch : this.awayPlayersOnPitch;
    const benchList = isHome ? this.homeBench : this.awayBench;
    const remaining = isHome ? this.homeSubsRemaining : this.awaySubsRemaining;

    if (remaining <= 0) return { success: false, reason: "Ya se han realizado los 5 cambios permitidos" };

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
      this.home2D[pitchIndex].player = inPlayer;
    } else {
      this.awaySubsRemaining--;
      this.away2D[pitchIndex].player = inPlayer;
    }

    this.triggerAlert("CAMBIO", `🔄 Cambio: entra ${inPlayer.name} por ${outPlayer.name}`, isHome ? "home" : "away");

    return { success: true, inPlayer, outPlayer };
  }

  loop() {
    if (!this.isRunning || this.isFinished) return;

    this.stepMinute();
    this.onTick(this.getState());

    if (this.minute >= this.maxMinutes) {
      this.finish();
      return;
    }

    // Intervalo de tiempo dinámico según velocidad (Pausado y visualmente legible)
    const baseInterval = 850; // ms por minuto en 1x (a 0.5x dura ~2.5 minutos de partido emocionante)
    const interval = Math.max(80, Math.round(baseInterval / this.speed));

    setTimeout(() => this.loop(), interval);
  }

  // Simulación paso a paso de cada minuto de partido
  stepMinute() {
    this.minute++;

    // Desgaste físico gradual
    this.homePlayersOnPitch.forEach(p => { p.energy = Math.max(30, (p.energy || 100) - 0.4); });
    this.awayPlayersOnPitch.forEach(p => { p.energy = Math.max(30, (p.energy || 100) - 0.4); });

    // Modificadores de mentalidad
    const mentMods = {
      very_defensive: { atk: 0.65, def: 1.35 },
      defensive: { atk: 0.85, def: 1.15 },
      balanced: { atk: 1.0, def: 1.0 },
      offensive: { atk: 1.25, def: 0.85 },
      very_offensive: { atk: 1.45, def: 0.70 }
    };

    const homeMod = mentMods[this.homeMentality] || mentMods.balanced;
    const awayMod = mentMods[this.awayMentality] || mentMods.balanced;

    const homeAtk = (this.calcTeamPower(this.homePlayersOnPitch, "atk") + 2) * homeMod.atk;
    const homeDef = (this.calcTeamPower(this.homePlayersOnPitch, "def") + 2) * homeMod.def;
    const awayAtk = this.calcTeamPower(this.awayPlayersOnPitch, "atk") * awayMod.atk;
    const awayDef = this.calcTeamPower(this.awayPlayersOnPitch, "def") * awayMod.def;

    // Disputa de la posesión
    const midHome = this.calcTeamPower(this.homePlayersOnPitch, "mid");
    const midAway = this.calcTeamPower(this.awayPlayersOnPitch, "mid");
    const probHomePoss = (midHome / (midHome + midAway)) + 0.03; // Ligera ventaja local

    const currentPoss = Math.random() < probHomePoss ? "home" : "away";
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
      this.ball.targetX = 65 + Math.random() * 28;
      this.ball.targetY = 20 + Math.random() * 60;

      // Ocasión de ataque local
      const attackScore = (homeAtk / (homeAtk + awayDef)) * 0.28;
      if (chanceRoll < attackScore) {
        this.ball.targetZ = 10 + Math.random() * 12; // Arco 3D hacia portería
        this.resolveGoalOpportunity("home");
      } else if (chanceRoll < attackScore + 0.05) {
        // Córner o falta colgada al área
        this.ball.targetZ = 18;
        this.stats.corners.home++;
        this.triggerAlert("CÓRNER", `🚩 Córner para ${this.homeTeam.shortName}`, "home");
      } else {
        // Pase o centro medio
        this.ball.targetZ = Math.random() < 0.3 ? 4 + Math.random() * 6 : 0;
      }
    } else {
      // Balón atacando hacia la izquierda (x: 50 -> 10)
      this.ball.targetX = 35 - Math.random() * 28;
      this.ball.targetY = 20 + Math.random() * 60;

      const attackScore = (awayAtk / (awayAtk + homeDef)) * 0.26;
      if (chanceRoll < attackScore) {
        this.ball.targetZ = 10 + Math.random() * 12;
        this.resolveGoalOpportunity("away");
      } else if (chanceRoll < attackScore + 0.05) {
        this.ball.targetZ = 18;
        this.stats.corners.away++;
        this.triggerAlert("CÓRNER", `🚩 Córner para ${this.awayTeam.shortName}`, "away");
      } else {
        this.ball.targetZ = Math.random() < 0.3 ? 4 + Math.random() * 6 : 0;
      }
    }

    // Posibles faltas y tarjetas (independientes del ataque)
    if (Math.random() < 0.06) {
      const foulTeam = Math.random() > 0.5 ? "home" : "away";
      this.stats.fouls[foulTeam]++;
      if (Math.random() < 0.22) {
        this.stats.yellowCards[foulTeam]++;
        const teamName = foulTeam === "home" ? this.homeTeam.shortName : this.awayTeam.shortName;
        this.triggerAlert("TARJETA", `🟨 Tarjeta amarilla para ${teamName}`, foulTeam);
      }
    }

    // Actualizar coordenadas 3D de los jugadores hacia el balón para visualización dinámica
    this.update2DPositions();
  }

  resolveGoalOpportunity(attackingSide) {
    const isHome = attackingSide === "home";
    const atkTeam = isHome ? this.homeTeam : this.awayTeam;
    const defTeam = isHome ? this.awayTeam : this.homeTeam;
    const atkPlayers = isHome ? this.homePlayersOnPitch : this.awayPlayersOnPitch;
    const defPlayers = isHome ? this.awayPlayersOnPitch : this.homePlayersOnPitch;

    this.stats.shots[attackingSide]++;

    // Seleccionar rematador (delantero o centrocampista)
    const shooter = this.pickPlayerForAction(atkPlayers, ["DC", "EI", "ED", "MCO", "MC"]);
    const goalkeeper = defPlayers.find(p => p.pos === "POR") || defPlayers[0];

    const shotQuality = (shooter.sho || 75) + (Math.random() * 30 - 15);
    const gkSavePower = (goalkeeper.ovr || 78) + (Math.random() * 25 - 10);

    // ¿Va a puerta?
    const onTarget = Math.random() < 0.65;
    if (!onTarget) {
      if (Math.random() < 0.12) {
        this.triggerAlert("AL PALO", `🥅 ¡Al palo! Disparo de ${shooter.name} a la madera`, attackingSide);
      } else {
        this.triggerAlert("DISPARO FUERA", `💨 Disparo fuera de ${shooter.name}`, attackingSide);
      }
      return;
    }

    this.stats.shotsOnTarget[attackingSide]++;

    // ¿Es Gol o Paradón?
    if (shotQuality > gkSavePower + 8) {
      // ¡GOL!
      if (isHome) this.homeScore++;
      else this.awayScore++;

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

      this.triggerAlert("GOL", `⚽ ¡GOOOOOOL DE ${shooter.name.toUpperCase()}! (${this.homeScore}-${this.awayScore})`, attackingSide, 3500);
    } else {
      // Paradón del portero rival
      this.triggerAlert("PARADÓN", `🧤 ¡Paradón de ${goalkeeper.name} ante ${shooter.name}!`, attackingSide === "home" ? "away" : "home");
    }
  }

  pickPlayerForAction(players, preferredPositions) {
    const candidates = players.filter(p => preferredPositions.includes(p.pos));
    if (candidates.length > 0) {
      return candidates[Math.floor(Math.random() * candidates.length)];
    }
    return players[Math.floor(Math.random() * players.length)];
  }

  triggerAlert(title, text, side, duration = 2200) {
    this.currentAlert = { title, text, side, until: Date.now() + duration };
    this.onAlert(this.currentAlert);
  }

  calcTeamPower(players, type) {
    if (!players || players.length === 0) return 75;
    let sum = 0;
    players.forEach(p => {
      if (type === "atk") sum += (p.sho * 0.4 + p.dri * 0.3 + p.pac * 0.3) * (0.6 + p.energy / 250);
      else if (type === "mid") sum += (p.pas * 0.4 + p.dri * 0.3 + p.def * 0.3) * (0.6 + p.energy / 250);
      else if (type === "def") sum += (p.def * 0.5 + p.phy * 0.3 + p.pac * 0.2) * (0.6 + p.energy / 250);
    });
    return sum / players.length;
  }

  update2DPositions() {
    // Los jugadores se desplazan suavemente siguiendo la fase de juego
    const ballX = this.ball.targetX;
    const ballY = this.ball.targetY;

    // Suavizado del balón
    this.ball.x += (ballX - this.ball.x) * 0.45;
    this.ball.y += (ballY - this.ball.y) * 0.45;

    // Altura vertical del balón (z)
    if (this.ball.targetZ !== undefined) {
      this.ball.z += ((this.ball.targetZ || 0) - (this.ball.z || 0)) * 0.35;
      if (Math.abs(this.ball.z - (this.ball.targetZ || 0)) < 1) {
        this.ball.targetZ = 0;
      }
    } else {
      this.ball.z = 0;
    }

    this.home2D.forEach(p => {
      const shiftX = (ballX - 50) * 0.35;
      const shiftY = (ballY - 50) * 0.25;
      p.targetX = Math.max(3, Math.min(95, p.baseX + shiftX + (Math.random() * 4 - 2)));
      p.targetY = Math.max(8, Math.min(92, p.baseY + shiftY + (Math.random() * 4 - 2)));

      const dx = p.targetX - p.curX;
      const dy = p.targetY - p.curY;
      const dist = Math.hypot(dx, dy);

      p.curX += dx * 0.25;
      p.curY += dy * 0.25;

      if (Math.abs(dx) > 0.2) {
        p.facingX = dx > 0 ? 1 : -1;
      }
      p.animPhase += dist * 0.2 + 0.08;
    });

    this.away2D.forEach(p => {
      const shiftX = (ballX - 50) * 0.35;
      const shiftY = (ballY - 50) * 0.25;
      p.targetX = Math.max(5, Math.min(97, p.baseX + shiftX + (Math.random() * 4 - 2)));
      p.targetY = Math.max(8, Math.min(92, p.baseY + shiftY + (Math.random() * 4 - 2)));

      const dx = p.targetX - p.curX;
      const dy = p.targetY - p.curY;
      const dist = Math.hypot(dx, dy);

      p.curX += dx * 0.25;
      p.curY += dy * 0.25;

      if (Math.abs(dx) > 0.2) {
        p.facingX = dx > 0 ? 1 : -1;
      }
      p.animPhase += dist * 0.2 + 0.08;
    });
  }

  // Saltar instantáneamente al final del partido
  skipToEnd() {
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
      maxMinutes: this.maxMinutes,
      homeScore: this.homeScore,
      awayScore: this.awayScore,
      homeTeam: this.homeTeam,
      awayTeam: this.awayTeam,
      stats: this.stats,
      events: this.events,
      homeSubsRemaining: this.homeSubsRemaining,
      awaySubsRemaining: this.awaySubsRemaining,
      homePlayersOnPitch: this.homePlayersOnPitch,
      homeBench: this.homeBench,
      awayPlayersOnPitch: this.awayPlayersOnPitch,
      awayBench: this.awayBench,
      home2D: this.home2D,
      away2D: this.away2D,
      ball: this.ball,
      homeMentality: this.homeMentality,
      awayMentality: this.awayMentality,
      isRunning: this.isRunning,
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
      scorers: this.events.filter(e => e.type === "GOAL")
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

// Vista de la Pizarra Táctica y Alineaciones
function renderTacticsView(container, gameState, onSaveTactics) {
  const team = gameState.teams.find(t => t.id === gameState.userTeamId);
  let tactics = gameState.userTactics || {
    formation: team.defaultFormation || "4-3-3",
    mentality: "balanced",
    lineup: team.players.slice(0, 11).map(p => p.id),
    bench: team.players.slice(11).map(p => p.id)
  };

  let selectedPlayerId = null;

  function render() {
    const formationKey = tactics.formation;
    const formation = FORMATIONS[formationKey] || FORMATIONS["4-3-3"];

    // Obtener objetos de jugador
    const lineupPlayers = tactics.lineup.map(id => team.players.find(p => p.id === id)).filter(Boolean);
    const benchPlayers = tactics.bench.map(id => team.players.find(p => p.id === id)).filter(Boolean);

    const averages = calculateTeamAverages(lineupPlayers, formationKey);

    container.innerHTML = `
      <div class="min-h-screen bg-slate-950 text-white flex flex-col pb-20 select-none">
        <!-- Barra Superior -->
        <header class="bg-slate-900 border-b border-slate-800 px-4 py-3 sticky top-0 z-20 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs" style="background: linear-gradient(135deg, ${team.primaryColor}, ${team.secondaryColor}); color: ${team.textColor};">
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

        <!-- Terreno de Juego Táctico (Campo Vertical) -->
        <div class="p-3">
          <div class="relative w-full max-w-sm mx-auto aspect-[3/4] bg-gradient-to-b from-emerald-800 via-emerald-700 to-emerald-900 rounded-2xl border-2 border-emerald-500/40 shadow-inner overflow-hidden p-2">
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
              const effRating = calculateEffectiveRating(player, slot.pos);
              const isSelected = selectedPlayerId === player.id;

              return `
                <div class="slot-player absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer flex flex-col items-center transition-transform active:scale-95 z-10"
                     style="left: ${slot.x}%; top: ${slot.y}%;"
                     data-player-id="${player.id}">
                  <!-- Ficha con dorsal y valoración -->
                  <div class="w-10 h-10 rounded-full border-2 ${isSelected ? 'border-amber-400 bg-amber-500 text-black shadow-lg shadow-amber-400/50 scale-110' : 'border-white/80 bg-slate-900 text-white shadow-md'} flex flex-col items-center justify-center relative transition-all">
                    <span class="text-[9px] font-black leading-none">${effRating}</span>
                    <span class="text-[8px] font-bold text-slate-300 leading-none">${slot.label}</span>
                    <!-- Barra de energía en miniatura -->
                    <div class="absolute -bottom-1 w-6 h-1 bg-black/60 rounded-full overflow-hidden">
                      <div class="h-full ${player.energy > 70 ? 'bg-emerald-400' : player.energy > 50 ? 'bg-amber-400' : 'bg-red-500'}" style="width: ${player.energy}%;"></div>
                    </div>
                  </div>
                  <!-- Nombre del futbolista -->
                  <div class="bg-black/80 px-1.5 py-0.5 rounded text-[9px] font-bold text-white tracking-tight mt-1 truncate max-w-[70px] text-center border border-white/10 shadow">
                    ${player.name.split(' ').slice(-1)[0]}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Instrucción de ayuda -->
        <div class="px-4 text-center">
          <p class="text-[11px] text-slate-400">
            ${selectedPlayerId ? '👉 Ahora toca otro jugador del campo o del banquillo para intercambiarlos.' : '💡 Toca a un jugador para cambiar su posición o sustituirlo.'}
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
              return `
                <div class="bench-player flex items-center justify-between p-2 rounded-xl border ${isSelected ? 'border-amber-400 bg-amber-500/10' : 'border-slate-800 bg-slate-900/60'} cursor-pointer active:scale-98 transition"
                     data-player-id="${p.id}">
                  <div class="flex items-center gap-2">
                    <span class="w-5 text-center font-mono text-[10px] text-slate-500 font-bold">#${p.number}</span>
                    <span class="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] font-bold ${p.pos === 'DC' || p.pos === 'EI' || p.pos === 'ED' ? 'text-red-400' : p.pos === 'MC' || p.pos === 'MCD' || p.pos === 'MCO' ? 'text-amber-400' : p.pos === 'POR' ? 'text-purple-400' : 'text-sky-400'}">${p.pos}</span>
                    <span class="text-xs font-bold text-slate-200">${p.name}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <div class="w-12 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div class="h-full bg-emerald-400" style="width: ${p.energy}%;"></div>
                    </div>
                    <span class="text-xs font-black text-amber-400 px-1.5 py-0.5 bg-slate-800/80 rounded">${p.ovr}</span>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;

    // Eventos
    container.querySelectorAll(".btn-formation").forEach(btn => {
      btn.onclick = () => {
        tactics.formation = btn.dataset.formation;
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

    // Auto-alinear (seleccionar automáticamente a los mejores para cada puesto)
    const btnAuto = container.querySelector("#btn-auto-align");
    if (btnAuto) {
      btnAuto.onclick = () => {
        autoAlignLineup();
        onSaveTactics(tactics);
        render();
      };
    }

    // Intercambio táctico al tocar jugadores
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
    const allPlayers = [...team.players].sort((a, b) => b.ovr - a.ovr);
    const used = new Set();
    const newLineup = [];

    // Asignar mejor portero primero
    const gk = allPlayers.find(p => p.pos === "POR");
    if (gk) {
      newLineup[0] = gk.id;
      used.add(gk.id);
    }

    // Para el resto de posiciones
    formation.slots.forEach((slot, idx) => {
      if (idx === 0) return; // Ya asignamos portero
      // Buscar mejor jugador con posición exacta no usado
      let best = allPlayers.find(p => !used.has(p.id) && p.pos === slot.pos);
      // Si no hay exacto, el mejor que quede
      if (!best) {
        best = allPlayers.find(p => !used.has(p.id) && p.pos !== "POR");
      }
      if (best) {
        newLineup[idx] = best.id;
        used.add(best.id);
      }
    });

    const newBench = allPlayers.filter(p => !used.has(p.id)).map(p => p.id);

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

                <!-- Nombre y Goles -->
                <div>
                  <h4 class="text-xs font-bold text-white leading-tight">${p.name}</h4>
                  <div class="flex items-center gap-2 mt-1">
                    <span class="text-[10px] text-slate-400">⚽ ${p.goals || 0} goles</span>
                    <span class="text-[10px] text-slate-400">⚡ ${Math.round(p.energy || 100)}%</span>
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
              <div class="text-base font-black text-emerald-400">${Math.round(p.energy || 100)}%</div>
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
      bench: userTeam.players.slice(11).map(p => p.id)
    };
  }

  let selectedPreMatchPlayerId = null;

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
              <h2 class="text-sm font-extrabold text-white leading-tight">Alineación Oficial</h2>
            </div>
            <button id="btn-pre-auto" class="text-xs bg-slate-800 hover:bg-slate-700 text-sky-400 px-2 py-1 rounded-lg border border-slate-700 font-bold active:scale-95 transition">
              ⚡ Auto 11
            </button>
          </div>
        </header>

        <!-- Tarjeta de Enfrentamiento -->
        <div class="p-3 bg-slate-900/60 border-b border-slate-800 flex items-center justify-between text-xs">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs shadow" style="background: linear-gradient(135deg, ${userTeam.primaryColor}, ${userTeam.secondaryColor}); color: ${userTeam.textColor};">
              ${userTeam.shortName}
            </div>
            <div>
              <div class="font-black text-white text-xs">${userTeam.name}</div>
              <div class="text-[10px] text-slate-400">${isUserHome ? 'Local' : 'Visitante'} · Media <b class="text-amber-400">${averages.overall}</b></div>
            </div>
          </div>
          <span class="font-mono font-bold text-slate-500 bg-slate-950 px-2 py-0.5 rounded-full border border-slate-800">VS</span>
          <div class="flex items-center gap-2 text-right">
            <div>
              <div class="font-black text-white text-xs">${opponentTeam.name}</div>
              <div class="text-[10px] text-slate-400">Rival · Media <b class="text-slate-300">${opponentTeam.reputation}</b></div>
            </div>
            <div class="w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs shadow" style="background: linear-gradient(135deg, ${opponentTeam.primaryColor}, ${opponentTeam.secondaryColor}); color: ${opponentTeam.textColor};">
              ${opponentTeam.shortName}
            </div>
          </div>
        </div>

        <!-- Selectores Tácticos (Sistema y Mentalidad) -->
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
        </div>

        <!-- Terreno de Juego Táctico Interactivo -->
        <div class="p-3 flex-1 flex flex-col justify-center">
          <div class="relative w-full aspect-[3/4] max-w-[340px] mx-auto bg-gradient-to-b from-emerald-800 via-emerald-700 to-emerald-900 rounded-2xl border-2 border-emerald-500/40 shadow-inner overflow-hidden p-2">
            <!-- Líneas del campo -->
            <div class="absolute inset-2 border-2 border-white/30 rounded-xl pointer-events-none"></div>
            <div class="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-12 border-b-2 border-x-2 border-white/30 pointer-events-none"></div>
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-white/30 rounded-full pointer-events-none"></div>
            <div class="absolute top-1/2 left-2 right-2 h-0.5 bg-white/30 -translate-y-1/2 pointer-events-none"></div>
            <div class="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-12 border-t-2 border-x-2 border-white/30 pointer-events-none"></div>

            <!-- Fichas de los 11 titulares -->
            ${formation.slots.map((slot, index) => {
              const player = lineupPlayers[index];
              if (!player) return "";
              const effRating = calculateEffectiveRating(player, slot.pos);
              const isSelected = selectedPreMatchPlayerId === player.id;

              return `
                <div class="slot-pre-player absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer flex flex-col items-center transition-transform active:scale-95 z-10"
                     style="left: ${slot.x}%; top: ${slot.y}%;"
                     data-player-id="${player.id}">
                  <div class="w-9 h-9 rounded-full border-2 ${isSelected ? 'border-amber-400 bg-amber-500 text-black shadow-lg shadow-amber-400/50 scale-110' : 'border-white/80 bg-slate-900 text-white shadow-md'} flex flex-col items-center justify-center relative transition-all">
                    <span class="text-[9px] font-black leading-none">${effRating}</span>
                    <span class="text-[7px] font-bold text-slate-300 leading-none">${slot.label}</span>
                    <div class="absolute -bottom-1 w-5 h-1 bg-black/60 rounded-full overflow-hidden">
                      <div class="h-full ${player.energy > 70 ? 'bg-emerald-400' : player.energy > 50 ? 'bg-amber-400' : 'bg-red-500'}" style="width: ${player.energy}%;"></div>
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

        <!-- Instrucción de intercambio -->
        <div class="px-4 text-center my-1">
          <p class="text-[11px] text-slate-400">
            ${selectedPreMatchPlayerId ? '👉 Ahora toca otro titular o un suplente del banquillo para intercambiarlo.' : '💡 Toca un futbolista para modificar su puesto o sustituirlo.'}
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
              return `
                <div class="bench-pre-card flex-shrink-0 bg-slate-900 border ${isSelected ? 'border-amber-400 bg-amber-500/20' : 'border-slate-800'} p-2 rounded-xl text-center cursor-pointer active:scale-95 transition min-w-[76px]" data-player-id="${p.id}">
                  <span class="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-slate-800 ${p.pos === 'DC' || p.pos === 'EI' || p.pos === 'ED' ? 'text-red-400' : p.pos === 'MC' || p.pos === 'MCD' || p.pos === 'MCO' ? 'text-amber-400' : p.pos === 'POR' ? 'text-purple-400' : 'text-sky-400'}">${p.pos}</span>
                  <div class="text-[10px] font-bold text-white truncate max-w-[70px] mt-1">${p.name.split(' ').slice(-1)[0]}</div>
                  <div class="text-xs font-black text-amber-400 mt-0.5">${p.ovr}</div>
                  <div class="w-10 h-1 bg-slate-800 rounded-full mx-auto mt-1 overflow-hidden">
                    <div class="h-full bg-emerald-400" style="width: ${p.energy}%;"></div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Botón de Confirmación y Saltar al Campo -->
        <footer class="px-3">
          <button id="btn-start-match-confirmed" class="w-full py-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 active:scale-98 text-white font-extrabold text-sm rounded-2xl shadow-xl shadow-emerald-500/25 transition-all flex items-center justify-center gap-2">
            <span>⚽ ¡CONFIRMAR 11 Y SALTAR AL CAMPO!</span>
            <span>➔</span>
          </button>
        </footer>
      </div>
    `;

    // Eventos Pre-Partido
    container.querySelector("#btn-pre-back").onclick = () => {
      if (onBackToHub) onBackToHub();
    };

    container.querySelector("#btn-pre-auto").onclick = () => {
      autoAlignLineup();
      renderPreMatch();
    };

    container.querySelectorAll(".btn-pre-formation").forEach(b => {
      b.onclick = () => {
        tactics.formation = b.dataset.formation;
        renderPreMatch();
      };
    });

    container.querySelectorAll(".btn-pre-mentality").forEach(b => {
      b.onclick = () => {
        tactics.mentality = b.dataset.mentality;
        renderPreMatch();
      };
    });

    container.querySelectorAll(".slot-pre-player, .bench-pre-card").forEach(el => {
      el.onclick = () => {
        handlePrePlayerTap(el.dataset.playerId);
      };
    });

    container.querySelector("#btn-start-match-confirmed").onclick = () => {
      startLiveSimulation();
    };
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

    if (inLineup1 !== -1 && inLineup2 !== -1) {
      const tmp = tactics.lineup[inLineup1];
      tactics.lineup[inLineup1] = tactics.lineup[inLineup2];
      tactics.lineup[inLineup2] = tmp;
    } else if (inLineup1 !== -1 && inBench2 !== -1) {
      tactics.lineup[inLineup1] = tappedId;
      tactics.bench[inBench2] = selectedPreMatchPlayerId;
    } else if (inBench1 !== -1 && inLineup2 !== -1) {
      tactics.bench[inBench1] = tappedId;
      tactics.lineup[inLineup2] = selectedPreMatchPlayerId;
    } else if (inBench1 !== -1 && inBench2 !== -1) {
      const tmp = tactics.bench[inBench1];
      tactics.bench[inBench1] = tactics.bench[inBench2];
      tactics.bench[inBench2] = tmp;
    }

    selectedPreMatchPlayerId = null;
    renderPreMatch();
  }

  function autoAlignLineup() {
    const tactics = gameState.userTactics;
    const formation = FORMATIONS[tactics.formation] || FORMATIONS["4-3-3"];
    const allPlayers = [...userTeam.players].sort((a, b) => b.ovr - a.ovr);
    const used = new Set();
    const newLineup = [];

    const gk = allPlayers.find(p => p.pos === "POR");
    if (gk) {
      newLineup[0] = gk.id;
      used.add(gk.id);
    }

    formation.slots.forEach((slot, idx) => {
      if (idx === 0) return;
      let best = allPlayers.find(p => !used.has(p.id) && p.pos === slot.pos);
      if (!best) {
        best = allPlayers.find(p => !used.has(p.id) && p.pos !== "POR");
      }
      if (best) {
        newLineup[idx] = best.id;
        used.add(best.id);
      }
    });

    tactics.lineup = newLineup;
    tactics.bench = allPlayers.filter(p => !used.has(p.id)).map(p => p.id);
  }

  // ==========================================
  // FASE 2: SIMULACIÓN EN VIVO (PARTIDO)
  // ==========================================
  function startLiveSimulation() {
    // Aplicar alineación final elegida
    if (isUserHome) {
      sortTeamByTactics(homeTeam, gameState.userTactics);
    } else {
      sortTeamByTactics(awayTeam, gameState.userTactics);
    }

    const simulator = new MatchSimulator(homeTeam, awayTeam, {
      speed: 0.5, // Velocidad pausada y disfrutable por defecto (simulación más lenta)
      homeMentality: isUserHome ? gameState.userTactics.mentality : "balanced",
      awayMentality: !isUserHome ? gameState.userTactics.mentality : "balanced",
      onTick: updateMatchUI,
      onAlert: showMatchAlert,
      onFinish: handleLiveMatchEnd
    });

    let alertTimeout = null;
    let subSelectedPitchId = null;

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

        <!-- Radar 2D del Terreno de Juego -->
        <div class="relative p-3 flex-1 flex flex-col justify-center items-center">
          <div id="match-alert-box" class="absolute top-6 left-4 right-4 z-30 transition-all duration-300 opacity-0 pointer-events-none transform -translate-y-2">
            <div id="match-alert-content" class="bg-slate-900/95 border-2 border-amber-400/80 shadow-2xl text-white px-4 py-2.5 rounded-2xl text-center text-xs font-extrabold flex items-center justify-center gap-2">
            </div>
          </div>

          <div class="relative w-full aspect-[16/10] bg-slate-900 rounded-2xl border-2 border-slate-800 shadow-2xl overflow-hidden">
            <canvas id="match-canvas" class="w-full h-full block"></canvas>
            
            <div class="absolute bottom-2 left-2 right-2 flex justify-between items-center px-2 py-1 bg-black/60 backdrop-blur-sm rounded-lg text-[9px] text-slate-300">
              <div class="flex items-center gap-1.5">
                <span class="w-2.5 h-2.5 rounded-full inline-block" style="background-color: ${homeTeam.primaryColor};"></span>
                <span>${homeTeam.shortName}</span>
              </div>
              <div class="flex items-center gap-1 text-amber-400 font-bold">
                <span>⚽ Balón</span>
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
              <button class="btn-speed px-2 py-1 rounded-lg bg-sky-500 text-white shadow font-extrabold" data-speed="0.5">🐢 0.5x</button>
              <button class="btn-speed px-2 py-1 rounded-lg text-slate-400 hover:text-white" data-speed="1">⚽ 1x</button>
              <button class="btn-speed px-2 py-1 rounded-lg text-slate-400 hover:text-white" data-speed="2">⚡ 2x</button>
            </div>

            <button id="btn-skip-end" class="py-2.5 px-3 bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-300 font-bold text-xs rounded-xl border border-slate-700 transition">
              ⏩ Final
            </button>
          </div>

          <div class="flex items-center gap-2">
            <button id="btn-subs" class="flex-1 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 active:scale-98 text-white font-extrabold text-xs rounded-xl shadow-lg flex items-center justify-center gap-2">
              <span>🔄 HACER CAMBIOS</span>
              <span id="subs-count-badge" class="px-2 py-0.5 rounded-full bg-black/40 text-[10px] font-mono">5 rest.</span>
            </button>

            <button id="btn-cycle-mentality" class="py-3 px-3 bg-slate-800 hover:bg-slate-700 active:scale-98 text-sky-400 font-bold text-xs rounded-xl border border-slate-700 whitespace-nowrap">
              🎯 <span id="mentality-label">${MENTALITIES.find(m => m.id === gameState.userTactics.mentality)?.label || 'Equilibrada'}</span>
            </button>
          </div>
        </footer>

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
    // MOTOR GRÁFICO 3D (ESTADIO Y MONIGOTES)
    // ==========================================
    function getKitColors() {
      const hPrimary = homeTeam.primaryColor || "#ffffff";
      const hSecondary = homeTeam.secondaryColor || "#1e293b";
      let aPrimary = awayTeam.primaryColor || "#000000";
      let aSecondary = awayTeam.secondaryColor || "#ffffff";

      // Si los colores coinciden visualmente, la visita usa su segunda equipación
      if (hPrimary.toLowerCase() === aPrimary.toLowerCase()) {
        aPrimary = awayTeam.secondaryColor || "#f59e0b";
      }

      return {
        home: {
          jersey: hPrimary,
          shorts: hSecondary,
          keeper: "#10b981", // Verde neón
          number: homeTeam.textColor || "#ffffff"
        },
        away: {
          jersey: aPrimary,
          shorts: aSecondary,
          keeper: "#f59e0b", // Ámbar neón
          number: awayTeam.textColor || "#ffffff"
        }
      };
    }

    const kits = getKitColors();

    // Proyección de coordenadas 3D a pantalla con perspectiva isométrica
    function toScreen3D(pitchX, pitchY, pitchZ = 0, w, h) {
      const nx = Math.max(-5, Math.min(105, pitchX)) / 100;
      const ny = Math.max(-5, Math.min(105, pitchY)) / 100;

      // Inclinación vertical del terreno
      const topY = h * 0.17;
      const botY = h * 0.86;
      const groundY = topY + ny * (botY - topY);

      // Perspectiva horizontal (trapecio: más estrecho al fondo, más ancho al frente)
      const topXMin = w * 0.13;
      const topXMax = w * 0.87;
      const botXMin = w * 0.04;
      const botXMax = w * 0.96;

      const leftX = topXMin + ny * (botXMin - topXMin);
      const rightX = topXMax + ny * (botXMax - topXMax);
      const groundX = leftX + nx * (rightX - leftX);

      // Escala por profundidad (objetos al fondo son más pequeños)
      const scale = 0.72 + ny * 0.52;

      // Elevación vertical 3D (eje Z para balones altos)
      const screenX = groundX;
      const screenY = groundY - (pitchZ * scale * 2.2);

      return { groundX, groundY, screenX, screenY, scale };
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

    function draw3DGoal(ctx, x, y1, y2, dir, w, h) {
      const gPost1 = toScreen3D(x, y1, 0, w, h);
      const gPost2 = toScreen3D(x, y2, 0, w, h);
      const gTop1 = toScreen3D(x, y1, 11, w, h);
      const gTop2 = toScreen3D(x, y2, 11, w, h);

      const netBackX = x - dir * 4;
      const tNet1 = toScreen3D(netBackX, y1, 9, w, h);
      const tNet2 = toScreen3D(netBackX, y2, 9, w, h);

      // Malla de la red translúcida
      ctx.beginPath();
      ctx.moveTo(gTop1.screenX, gTop1.screenY);
      ctx.lineTo(gTop2.screenX, gTop2.screenY);
      ctx.lineTo(tNet2.screenX, tNet2.screenY);
      ctx.lineTo(tNet1.screenX, tNet1.screenY);
      ctx.closePath();
      ctx.fillStyle = "rgba(255, 255, 255, 0.16)";
      ctx.fill();

      // Postes y larguero 3D
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 2.5;

      ctx.beginPath();
      ctx.moveTo(gPost1.groundX, gPost1.groundY);
      ctx.lineTo(gTop1.screenX, gTop1.screenY);
      ctx.lineTo(gTop2.screenX, gTop2.screenY);
      ctx.lineTo(gPost2.groundX, gPost2.groundY);
      ctx.stroke();
    }

    function draw3DPitch(ctx, w, h) {
      // Grada y noche de fondo
      ctx.fillStyle = "#080c14";
      ctx.fillRect(0, 0, w, h);

      // Perímetro exterior del césped
      const pTL = toScreen3D(-4, -4, 0, w, h);
      const pTR = toScreen3D(104, -4, 0, w, h);
      const pBR = toScreen3D(104, 104, 0, w, h);
      const pBL = toScreen3D(-4, 104, 0, w, h);

      ctx.beginPath();
      ctx.moveTo(pTL.groundX, pTL.groundY);
      ctx.lineTo(pTR.groundX, pTR.groundY);
      ctx.lineTo(pBR.groundX, pBR.groundY);
      ctx.lineTo(pBL.groundX, pBL.groundY);
      ctx.closePath();
      ctx.fillStyle = "#14532d";
      ctx.fill();

      // Bandas de césped cortado en perspectiva 3D
      const numStripes = 10;
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
        ctx.fillStyle = i % 2 === 0 ? "#15803d" : "#16a34a";
        ctx.fill();
      }

      // Valla publicitaria de fondo
      const adL = toScreen3D(0, 0, 0, w, h);
      const adR = toScreen3D(100, 0, 0, w, h);
      ctx.beginPath();
      ctx.moveTo(adL.groundX, adL.groundY - 14);
      ctx.lineTo(adR.groundX, adR.groundY - 14);
      ctx.lineTo(adR.groundX, adR.groundY);
      ctx.lineTo(adL.groundX, adL.groundY);
      ctx.closePath();
      ctx.fillStyle = "#1e293b";
      ctx.fill();
      ctx.strokeStyle = "rgba(56, 189, 248, 0.45)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Líneas blancas del terreno de juego
      ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
      ctx.lineWidth = 1.8;

      // Líneas de banda y fondo
      const cTL = toScreen3D(0, 0, 0, w, h);
      const cTR = toScreen3D(100, 0, 0, w, h);
      const cBR = toScreen3D(100, 100, 0, w, h);
      const cBL = toScreen3D(0, 100, 0, w, h);

      ctx.beginPath();
      ctx.moveTo(cTL.groundX, cTL.groundY);
      ctx.lineTo(cTR.groundX, cTR.groundY);
      ctx.lineTo(cBR.groundX, cBR.groundY);
      ctx.lineTo(cBL.groundX, cBL.groundY);
      ctx.closePath();
      ctx.stroke();

      // Línea de medio campo
      const midT = toScreen3D(50, 0, 0, w, h);
      const midB = toScreen3D(50, 100, 0, w, h);
      ctx.beginPath();
      ctx.moveTo(midT.groundX, midT.groundY);
      ctx.lineTo(midB.groundX, midB.groundY);
      ctx.stroke();

      // Círculo central 3D elíptico
      ctx.beginPath();
      for (let a = 0; a <= Math.PI * 2 + 0.1; a += 0.2) {
        const cx = 50 + Math.cos(a) * 9.15;
        const cy = 50 + Math.sin(a) * 9.15;
        const pt = toScreen3D(cx, cy, 0, w, h);
        if (a === 0) ctx.moveTo(pt.groundX, pt.groundY);
        else ctx.lineTo(pt.groundX, pt.groundY);
      }
      ctx.stroke();

      // Punto central
      const centerDot = toScreen3D(50, 50, 0, w, h);
      ctx.beginPath();
      ctx.arc(centerDot.groundX, centerDot.groundY, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.fill();

      // Áreas Locales
      draw3DBox(ctx, 0, 18, 16, 82, w, h);
      draw3DBox(ctx, 0, 36, 6, 64, w, h);

      // Áreas Visitantes
      draw3DBox(ctx, 84, 18, 100, 82, w, h);
      draw3DBox(ctx, 94, 36, 100, 64, w, h);

      // Porterías 3D
      draw3DGoal(ctx, 0, 44, 56, -1, w, h);
      draw3DGoal(ctx, 100, 44, 56, 1, w, h);
    }

    // Dibujo del monigote 3D con equipación y animación de carrera
    function drawMonigote3D(ctx, item) {
      const { groundX, groundY, scale, facingX, animPhase, side, isKeeper, number } = item;
      const kit = side === "home" ? kits.home : kits.away;
      const jerseyColor = isKeeper ? kit.keeper : kit.jersey;
      const shortsColor = kit.shorts;

      const sc = scale;

      // 1. Sombra ovalada suave bajo los pies
      ctx.beginPath();
      ctx.ellipse(groundX, groundY, 7.5 * sc, 3.2 * sc, 0, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0, 0, 0, 0.35)";
      ctx.fill();

      const hipY = groundY - 11 * sc;
      const neckY = groundY - 22 * sc;
      const headY = groundY - 26 * sc;

      // Ciclo de carrera
      const legStride = Math.sin(animPhase) * 5 * sc * facingX;
      const armStride = Math.cos(animPhase) * 4 * sc * facingX;

      // 2. Piernas
      ctx.strokeStyle = shortsColor;
      ctx.lineWidth = 2.2 * sc;
      ctx.lineCap = "round";

      // Pierna trasera
      ctx.beginPath();
      ctx.moveTo(groundX - 2 * sc, hipY);
      ctx.lineTo(groundX - 2 * sc - legStride, groundY);
      ctx.stroke();

      // Bota trasera
      ctx.fillStyle = "#0f172a";
      ctx.fillRect(groundX - 3 * sc - legStride, groundY - 2 * sc, 4 * sc * facingX, 2.5 * sc);

      // Pierna delantera
      ctx.beginPath();
      ctx.moveTo(groundX + 2 * sc, hipY);
      ctx.lineTo(groundX + 2 * sc + legStride, groundY);
      ctx.stroke();

      // Bota delantera
      ctx.fillStyle = "#0f172a";
      ctx.fillRect(groundX + 1 * sc + legStride, groundY - 2 * sc, 4 * sc * facingX, 2.5 * sc);

      // 3. Brazo trasero
      ctx.strokeStyle = jerseyColor;
      ctx.lineWidth = 2 * sc;
      ctx.beginPath();
      ctx.moveTo(groundX, neckY + 3 * sc);
      ctx.lineTo(groundX - armStride, hipY);
      ctx.stroke();

      // 4. Torso con camiseta oficial
      const torsoW = 8.5 * sc;
      const torsoH = 10 * sc;
      ctx.fillStyle = jerseyColor;
      ctx.beginPath();
      ctx.roundRect(groundX - torsoW / 2, neckY, torsoW, torsoH, 2 * sc);
      ctx.fill();

      ctx.strokeStyle = "rgba(0, 0, 0, 0.25)";
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // Dorsal en la camiseta
      ctx.fillStyle = kit.number;
      ctx.font = `bold ${Math.round(6.5 * sc)}px monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(`${number}`, groundX, neckY + torsoH / 2);

      // 5. Brazo delantero
      ctx.strokeStyle = jerseyColor;
      ctx.lineWidth = 2 * sc;
      ctx.beginPath();
      ctx.moveTo(groundX, neckY + 3 * sc);
      ctx.lineTo(groundX + armStride, hipY);
      ctx.stroke();

      // Guantes del portero
      if (isKeeper) {
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(groundX + armStride, hipY, 2.2 * sc, 0, Math.PI * 2);
        ctx.fill();
      }

      // 6. Cabeza del monigote 3D
      const headR = 3.8 * sc;
      ctx.beginPath();
      ctx.arc(groundX, headY, headR, 0, Math.PI * 2);
      ctx.fillStyle = "#fcd34d"; // Tono de piel estilizado
      ctx.fill();
      ctx.strokeStyle = "rgba(0, 0, 0, 0.2)";
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // Pelo / silueta superior
      ctx.beginPath();
      ctx.arc(groundX, headY - 1 * sc, headR * 0.9, Math.PI, 0);
      ctx.fillStyle = "#1e293b";
      ctx.fill();
    }

    // Dibujo del balón 3D con sombra y altura en el aire
    function drawBall3D(ctx, item) {
      const { groundX, groundY, screenX, screenY, scale, z } = item;

      // Sombra en el césped que se achica con la elevación Z
      const shadowR = Math.max(2, 4.8 * scale - (z || 0) * 0.1);
      const shadowAlpha = Math.max(0.12, 0.42 - (z || 0) * 0.015);
      ctx.beginPath();
      ctx.ellipse(groundX, groundY, shadowR * 1.3, shadowR * 0.7, 0, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 0, 0, ${shadowAlpha})`;
      ctx.fill();

      // Esfera del balón 3D
      const ballR = 4.2 * scale;
      ctx.beginPath();
      ctx.arc(screenX, screenY, ballR, 0, Math.PI * 2);

      const grad = ctx.createRadialGradient(
        screenX - ballR * 0.35, screenY - ballR * 0.35, ballR * 0.1,
        screenX, screenY, ballR
      );
      grad.addColorStop(0, "#ffffff");
      grad.addColorStop(0.7, "#e2e8f0");
      grad.addColorStop(1, "#64748b");
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.strokeStyle = "#0f172a";
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Bucle principal de renderizado 3D a 60 FPS
    function drawPitch() {
      if (!ctx || !canvas) return;
      resizeCanvas();
      const w = canvas.width;
      const h = canvas.height;

      // 1. Dibujar terreno de juego en perspectiva 3D
      draw3DPitch(ctx, w, h);

      // 2. Recolectar entidades para depth sorting (Z-ordering de atrás a adelante)
      const state = simulator.getState();
      const entities = [];

      state.home2D.forEach(p => {
        const pt = toScreen3D(p.curX, p.curY, 0, w, h);
        entities.push({
          type: "player",
          side: "home",
          number: p.number,
          isKeeper: p.isKeeper,
          animPhase: p.animPhase || 0,
          facingX: p.facingX || 1,
          groundX: pt.groundX,
          groundY: pt.groundY,
          scale: pt.scale
        });
      });

      state.away2D.forEach(p => {
        const pt = toScreen3D(p.curX, p.curY, 0, w, h);
        entities.push({
          type: "player",
          side: "away",
          number: p.number,
          isKeeper: p.isKeeper,
          animPhase: p.animPhase || 0,
          facingX: p.facingX || -1,
          groundX: pt.groundX,
          groundY: pt.groundY,
          scale: pt.scale
        });
      });

      const bPos = toScreen3D(state.ball.x, state.ball.y, state.ball.z || 0, w, h);
      entities.push({
        type: "ball",
        groundX: bPos.groundX,
        groundY: bPos.groundY,
        screenX: bPos.screenX,
        screenY: bPos.screenY,
        scale: bPos.scale,
        z: state.ball.z || 0
      });

      // Ordenar por profundidad (los que están más arriba en pantalla se dibujan primero)
      entities.sort((a, b) => a.groundY - b.groundY);

      // 3. Dibujar cada elemento en orden de profundidad
      entities.forEach(item => {
        if (item.type === "player") {
          drawMonigote3D(ctx, item);
        } else if (item.type === "ball") {
          drawBall3D(ctx, item);
        }
      });

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
      if (elTimer) elTimer.textContent = `${state.minute}'`;
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
      if (subsBadge) subsBadge.textContent = `${remaining} rest.`;
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

    // Modal de Cambios en Vivo
    const modalSubs = container.querySelector("#modal-live-subs");
    const btnSubs = container.querySelector("#btn-subs");
    const btnCloseSubs = container.querySelector("#btn-close-subs");

    btnSubs.onclick = () => {
      simulator.pause();
      iconPP.textContent = "▶";
      textPP.textContent = "Reanudar";
      renderMatchSubsModal();
      modalSubs.classList.remove("hidden");
    };

    btnCloseSubs.onclick = () => {
      modalSubs.classList.add("hidden");
      simulator.start();
      iconPP.textContent = "⏸";
      textPP.textContent = "Pausar";
    };

    function renderMatchSubsModal() {
      const userPlayersOnPitch = isUserHome ? simulator.homePlayersOnPitch : simulator.awayPlayersOnPitch;
      const userBench = isUserHome ? simulator.homeBench : simulator.awayBench;
      const pitchList = container.querySelector("#sub-pitch-list");
      const benchList = container.querySelector("#sub-bench-list");

      pitchList.innerHTML = userPlayersOnPitch.map(p => `
        <div class="sub-pitch-item p-2 rounded-xl border ${subSelectedPitchId === p.id ? 'border-red-400 bg-red-500/20' : 'border-slate-800 bg-slate-950/70'} flex items-center justify-between text-xs cursor-pointer active:scale-98" data-id="${p.id}">
          <div class="flex items-center gap-2">
            <span class="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] font-bold text-sky-400">${p.pos}</span>
            <span class="font-bold text-white">${p.name}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-[10px] text-slate-400">⚡ ${Math.round(p.energy)}%</span>
            <span class="font-bold text-amber-400">${p.ovr}</span>
          </div>
        </div>
      `).join('');

      benchList.innerHTML = userBench.map(p => `
        <div class="sub-bench-item p-2 rounded-xl border border-slate-800 bg-slate-950/70 flex items-center justify-between text-xs cursor-pointer hover:border-emerald-500/60 active:scale-98" data-id="${p.id}">
          <div class="flex items-center gap-2">
            <span class="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] font-bold text-emerald-400">${p.pos}</span>
            <span class="font-bold text-white">${p.name}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-[10px] text-slate-400">⚡ ${Math.round(p.energy)}%</span>
            <span class="font-bold text-amber-400">${p.ovr}</span>
          </div>
        </div>
      `).join('');

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
          const res = simulator.makeSubstitution(isUserHome ? "home" : "away", subSelectedPitchId, benchId);
          if (res.success) {
            subSelectedPitchId = null;
            renderMatchSubsModal();
          } else {
            alert(res.reason);
          }
        };
      });
    }

    function handleLiveMatchEnd(result) {
      userMatch.played = true;
      userMatch.homeScore = result.homeScore;
      userMatch.awayScore = result.awayScore;
      userMatch.scorers = result.scorers;

      const teamsMap = {};
      gameState.teams.forEach(t => { teamsMap[t.id] = t; });

      currentRoundData.matches.forEach(m => {
        if (!m.played) {
          simulateAIParties(m, teamsMap);
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
        if (result.scorers.length > 0) {
          fScorers.innerHTML = result.scorers.map(s => `
            <div class="flex items-center justify-between text-slate-300 py-0.5">
              <span>⚽ <b>${s.playerName}</b> (${s.teamName})</span>
              <span class="font-mono text-slate-500 font-bold">${s.minute}'</span>
            </div>
          `).join('');
        } else {
          fScorers.innerHTML = `<span class="text-slate-500 italic">Sin goles en el encuentro</span>`;
        }
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
  const userTeam = gameState.teams.find(t => t.id === gameState.userTeamId);
  const currentRoundIndex = gameState.currentRound - 1;
  const currentRoundData = gameState.schedule[currentRoundIndex];

  // Encontrar el partido del usuario en esta jornada
  const userMatch = currentRoundData?.matches.find(
    m => m.homeTeamId === userTeam.id || m.awayTeamId === userTeam.id
  );

  const isHome = userMatch?.homeTeamId === userTeam.id;
  const opponentId = isHome ? userMatch?.awayTeamId : userMatch?.homeTeamId;
  const opponentTeam = gameState.teams.find(t => t.id === opponentId);

  // Clasificación actual del usuario
  const userStanding = gameState.standings.find(r => r.teamId === userTeam.id);
  const userRank = gameState.standings.indexOf(userStanding) + 1;
  const opponentStanding = gameState.standings.find(r => r.teamId === opponentId);
  const opponentRank = gameState.standings.indexOf(opponentStanding) + 1;

  // Próximas 3 jornadas
  const upcomingFixtures = gameState.schedule.slice(currentRoundIndex, currentRoundIndex + 3).map(round => {
    const m = round.matches.find(x => x.homeTeamId === userTeam.id || x.awayTeamId === userTeam.id);
    const opId = m?.homeTeamId === userTeam.id ? m?.awayTeamId : m?.homeTeamId;
    const op = gameState.teams.find(t => t.id === opId);
    return {
      round: round.roundNumber,
      isHome: m?.homeTeamId === userTeam.id,
      opponent: op
    };
  });

  // Goleador del equipo
  const teamScorers = [...userTeam.players].sort((a, b) => (b.goals || 0) - (a.goals || 0));
  const topTeamScorer = teamScorers[0];

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
      // Comprobar si hay partida guardada con la versión oficial
      const saved = SaveManager.loadGame();
      if (saved && saved.userTeamId && saved.schemaVersion === "LALIGA_REAL_V7") {
        this.state = saved;
        if (this.state.isSeasonOver) {
          this.currentView = "season_end";
        } else {
          this.currentView = "hub";
        }
      } else {
        this.currentView = "team_select";
      }
    } catch (e) {
      console.warn("Estado previo no compatible, iniciando nueva partida:", e);
      this.currentView = "team_select";
    }

    this.render();
  }

  startNewGame(selectedTeam) {
    const teams = JSON.parse(JSON.stringify(TEAMS_DATA));
    const schedule = generateSchedule(teams);
    const standings = initStandings(teams);

    this.state = {
      schemaVersion: "LALIGA_REAL_V7",
      userTeamId: selectedTeam.id,
      currentRound: 1,
      schedule,
      standings,
      teams,
      userTactics: {
        formation: selectedTeam.defaultFormation || "4-3-3",
        mentality: "balanced",
        lineup: selectedTeam.players.slice(0, 11).map(p => p.id),
        bench: selectedTeam.players.slice(11).map(p => p.id)
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
      bench: userTeam.players.slice(11).map(p => p.id)
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

  // Recuperación física de los futbolistas entre jornadas
  recoverPlayersEnergy() {
    if (!this.state || !this.state.teams) return;
    this.state.teams.forEach(team => {
      team.players.forEach(p => {
        // Recuperan 25-35 puntos de energía por semana de descanso
        p.energy = Math.min(100, (p.energy || 100) + 30);
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