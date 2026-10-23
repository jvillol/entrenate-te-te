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
        const isGK = p.pos === "POR";
        const phyFactor = (120 - Math.min(95, Math.max(45, (p.phy || 70)))) / 50;
        const drain = isGK ? (6 + Math.random() * 3) : ((31 * phyFactor) + (Math.random() * 4 - 2));
        p.energy = Math.max(25, Math.round((p.energy !== undefined ? p.energy : 100) - drain));
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

    this.homeScore = 0;
    this.awayScore = 0;

    this.homeMentality = options.homeMentality || "balanced";
    this.awayMentality = options.awayMentality || "balanced";

    this.homeFormation = options.homeFormation || "4-3-3";
    this.awayFormation = options.awayFormation || "4-3-3";

    this.homePlayerRoles = options.homePlayerRoles || {};
    this.awayPlayerRoles = options.awayPlayerRoles || {};

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
    this.onHighlightEnd = options.onHighlightEnd || (() => {});

    this.userSide = options.userSide || "home";
    this.aiSide = this.userSide === "home" ? "away" : "home";
    this.lastAISubMinute = 0;

    this.onSetPiece = options.onSetPiece || (() => {});
    this.isSetPieceRunning = false;

    this.onInjury = options.onInjury || (() => {});

    this.isHalfTime = false;
    this.halfTimeTriggered = false;
  }

  getFormationCoords(formationKey, isHome) {
    const form = FORMATIONS[formationKey] || FORMATIONS["4-3-3"];
    return form.slots.map(s => {
      const px = isHome 
        ? 5 + ((88 - s.y) / 70) * 70 
        : 100 - (5 + ((88 - s.y) / 70) * 70);
      const py = isHome ? s.x : 100 - s.x;
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
    this.isRunning = true;
    this.loop();
  }

  pause() {
    this.isRunning = false;
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
  applyTacticalChanges(teamSide, newFormationKey, newMentality, newLineupPlayerIds, newBenchPlayerIds, isHalfTime = false) {
    const isHome = teamSide === "home";
    const currentPitch = isHome ? this.homePlayersOnPitch : this.awayPlayersOnPitch;
    const currentPitchIds = currentPitch.map(p => p.id);
    const remaining = isHome ? this.homeSubsRemaining : this.awaySubsRemaining;
    const remainingWindows = isHome ? this.homeWindowsRemaining : this.awayWindowsRemaining;

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
    if (!this.isRunning || this.isFinished || this.isHighlightRunning) return;

    // 1. Comprobar si ya corresponde el descanso
    if (this.minute >= this.halfTimeMinute && !this.halfTimeTriggered) {
      this.halfTimeTriggered = true;
      this.isHalfTime = true;
      this.pause();
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
    if (this.minute >= this.halfTimeMinute && !this.halfTimeTriggered) {
      this.halfTimeTriggered = true;
      this.isHalfTime = true;
      this.pause();
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

    setTimeout(() => this.loop(), interval);
  }

  // Simulación paso a paso de cada minuto de partido
  stepMinute() {
    this.minute++;

    // Descuentos en directo: aviso al llegar a los minutos 45 y 90
    if (this.minute === 45 && !this.halfTimeTriggered) {
      this.triggerAlert("DESCUENTO", `⏱️ +${this.firstHalfExtra} min de añadido (1ª Parte)`, "neutral", 3500);
    } else if (this.minute === 90) {
      this.triggerAlert("DESCUENTO", `⏱️ +${this.secondHalfExtra} min de añadido (2ª Parte)`, "neutral", 3500);
    }

    // Comprobar si se ha cumplido el tiempo reglamentario más el descuento antes de generar jugadas
    if (this.minute >= this.halfTimeMinute && !this.halfTimeTriggered) {
      this.halfTimeTriggered = true;
      this.isHalfTime = true;
      this.pause();
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

    // Desgaste físico gradual según atributos físicos (PHY), posición y mentalidad táctica
    this.homePlayersOnPitch.forEach(p => {
      const isGK = p.pos === "POR";
      const phyFactor = (120 - Math.min(95, Math.max(45, (p.phy || 70)))) / 50;
      const rate = isGK ? 0.08 : (0.42 * phyFactor * homeMod.drain);
      p.energy = Math.max(25, (p.energy || 100) - rate);
    });

    this.awayPlayersOnPitch.forEach(p => {
      const isGK = p.pos === "POR";
      const phyFactor = (120 - Math.min(95, Math.max(45, (p.phy || 70)))) / 50;
      const rate = isGK ? 0.08 : (0.42 * phyFactor * awayMod.drain);
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

    const homeAtk = (this.calcTeamPower(this.homePlayersOnPitch, "atk", "home") + 2) * homeMod.atk;
    const homeDef = (this.calcTeamPower(this.homePlayersOnPitch, "def", "home") + 2) * homeMod.def;
    const awayAtk = this.calcTeamPower(this.awayPlayersOnPitch, "atk", "away") * awayMod.atk;
    const awayDef = this.calcTeamPower(this.awayPlayersOnPitch, "def", "away") * awayMod.def;

    // Disputa de la posesión
    const midHome = this.calcTeamPower(this.homePlayersOnPitch, "mid", "home");
    const midAway = this.calcTeamPower(this.awayPlayersOnPitch, "mid", "away");
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
        this.executeKeyHighlight("home", () => {
          if (this.minute >= this.halfTimeMinute && !this.halfTimeTriggered) {
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
      this.ball.targetX = 35 - Math.random() * 28;
      this.ball.targetY = 20 + Math.random() * 60;

      const attackScore = (awayAtk / (awayAtk + homeDef)) * 0.26;
      if (chanceRoll < attackScore) {
        this.executeKeyHighlight("away", () => {
          if (this.minute >= this.halfTimeMinute && !this.halfTimeTriggered) {
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

    // Posibles faltas y tarjetas (con opción de falta peligrosa a balón parado)
    if (Math.random() < 0.065) {
      const foulTeam = Math.random() > 0.5 ? "home" : "away";
      this.stats.fouls[foulTeam]++;
      const victimTeam = foulTeam === "home" ? "away" : "home";
      const isYellow = Math.random() < 0.22;

      if (isYellow) {
        this.stats.yellowCards[foulTeam]++;
        const teamName = foulTeam === "home" ? this.homeTeam.shortName : this.awayTeam.shortName;
        this.triggerAlert("TARJETA", `🟨 Tarjeta amarilla para ${teamName}`, foulTeam);
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

  // Ejecución de jugada clave en varias fases a ritmo normal (Estilo Football Manager)
  executeKeyHighlight(attackingSide, onComplete) {
    this.isHighlightRunning = true;
    this.speed = 1; // Ajuste automático a ritmo normal y fluido durante la ocasión trascendental

    const isHome = attackingSide === "home";
    const atkTeam = isHome ? this.homeTeam : this.awayTeam;
    const defTeam = isHome ? this.awayTeam : this.homeTeam;
    const atkPlayers = isHome ? this.homePlayersOnPitch : this.awayPlayersOnPitch;
    const defPlayers = isHome ? this.awayPlayersOnPitch : this.homePlayersOnPitch;

    const passer = this.pickPlayerForAction(atkPlayers, ["MC", "MCD", "MCO", "EI", "ED", "LD", "LI", "DC"], "pass");
    const shooter = this.pickPlayerForAction(atkPlayers, ["DC", "EI", "ED", "MCO", "MC", "LD", "LI"], "shoot");
    const goalkeeper = defPlayers.find(p => p.pos === "POR") || defPlayers[0];

    const passerRole = this.getPlayerRole(passer, attackingSide);
    const shooterRole = this.getPlayerRole(shooter, attackingSide);

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

    // Notificar al visor de partido del inicio de la jugada clave
    if (this.onHighlightStart) {
      this.onHighlightStart({
        type: "KEY_CHANCE",
        attackingSide,
        atkTeam,
        defTeam,
        passer,
        shooter,
        passerRole,
        shooterRole,
        commentary: chanceComment,
        minute: this.minute
      });
    }

    // FASE 1: Construcción y arranque de la jugada de peligro en tres cuartos
    const midX = isHome ? (60 + Math.random() * 8) : (40 - Math.random() * 8);
    const midY = 32 + Math.random() * 36;
    this.ball.targetX = midX;
    this.ball.targetY = midY;
    this.ball.targetZ = 0;
    this.update2DPositions();

    setTimeout(() => {
      if (!this.isRunning && !this.isHighlightRunning) return;

      // FASE 2: Pase filtrado y desmarque al área del rematador
      const boxX = isHome ? (83 + Math.random() * 6) : (17 - Math.random() * 6);
      const boxY = 38 + Math.random() * 24;
      this.ball.targetX = boxX;
      this.ball.targetY = boxY;
      this.ball.targetZ = 3 + Math.random() * 4;
      this.update2DPositions();

      setTimeout(() => {
        if (!this.isRunning && !this.isHighlightRunning) return;

        // FASE 3: Remate y resolución (Gol, Paradón, Palo o Fuera)
        this.stats.shots[attackingSide]++;
        const shotQuality = (shooter.sho || 75) + (Math.random() * 30 - 15);
        const gkSavePower = (goalkeeper.ovr || 78) + (Math.random() * 25 - 10);
        const onTarget = Math.random() < 0.68;

        if (!onTarget) {
          const isPost = Math.random() < 0.22;
          if (isPost) {
            this.ball.targetX = isHome ? 99 : 1;
            this.ball.targetY = Math.random() < 0.5 ? 44.5 : 55.5; // Directo a la madera
            this.ball.targetZ = 7;
            this.triggerAlert("AL PALO", `🥅 ¡Al palo! Disparo de ${shooter.name} a la madera`, attackingSide, 3000);
          } else {
            this.ball.targetX = isHome ? 104 : -4;
            this.ball.targetY = Math.random() < 0.5 ? 32 : 68;
            this.ball.targetZ = 10;
            this.triggerAlert("DISPARO FUERA", `💨 Disparo fuera de ${shooter.name}`, attackingSide, 2600);
          }

          setTimeout(() => {
            this.isHighlightRunning = false;
            this.speed = this.userSpeed;
            if (this.onHighlightEnd) this.onHighlightEnd();

            // Comprobar descanso o final tras la resolución de la jugada
            if (this.minute >= this.halfTimeMinute && !this.halfTimeTriggered) {
              this.halfTimeTriggered = true;
              this.isHalfTime = true;
              this.pause();
              this.onHalfTime(this.getState());
              return;
            }

            if (this.minute >= this.maxMinutes) {
              this.finish();
              return;
            }

            if (onComplete) onComplete();
          }, 1400);

        } else {
          this.stats.shotsOnTarget[attackingSide]++;

          if (shotQuality > gkSavePower + 6) {
            // ¡GOOOOOOLAZO!
            if (isHome) {
              this.homeScore++;
              this.ball.targetX = 99;
              this.ball.targetY = 46 + Math.random() * 8;
              this.ball.targetZ = 6 + Math.random() * 5;
            } else {
              this.awayScore++;
              this.ball.targetX = 1;
              this.ball.targetY = 46 + Math.random() * 8;
              this.ball.targetZ = 6 + Math.random() * 5;
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

            this.triggerAlert("GOL", `⚽ ¡GOOOOOOL DE ${shooter.name.toUpperCase()}! (${this.homeScore}-${this.awayScore})`, attackingSide, 4500);

            this.isHighlightRunning = false;
            this.speed = this.userSpeed;
            if (this.onHighlightEnd) this.onHighlightEnd();

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

          } else {
            // ¡PARADÓN DEL GUARDAMETA!
            this.ball.targetX = isHome ? 98 : 2;
            this.ball.targetY = 48 + Math.random() * 4;
            this.ball.targetZ = 5;

            setTimeout(() => {
              this.ball.targetX = isHome ? 88 : 12;
              this.ball.targetY = Math.random() < 0.5 ? 26 : 74;
              this.ball.targetZ = 0;
              this.triggerAlert("PARADÓN", `🧤 ¡Paradón de ${goalkeeper.name} ante ${shooter.name}!`, isHome ? "away" : "home", 3200);
              this.stats.corners[attackingSide]++;

              setTimeout(() => {
                this.isHighlightRunning = false;
                this.speed = this.userSpeed;
                if (this.onHighlightEnd) this.onHighlightEnd();

                // Comprobar descanso o final tras la resolución de la jugada
                if (this.minute >= this.halfTimeMinute && !this.halfTimeTriggered) {
                  this.halfTimeTriggered = true;
                  this.isHalfTime = true;
                  this.pause();
                  this.onHalfTime(this.getState());
                  return;
                }

                if (this.minute >= this.maxMinutes) {
                  this.finish();
                  return;
                }

                if (onComplete) onComplete();
              }, 1300);
            }, 600);
          }
        }
      }, 1000);
    }, 1100);
  }

  // Activar jugada a balón parado (Córner o Falta peligrosa)
  triggerSetPiece(attackingSide, type = "CORNER") {
    if (this.isFinished || this.isHalfTime || this.isHighlightRunning || this.isSetPieceRunning) return;
    this.isSetPieceRunning = true;

    const isHome = attackingSide === "home";
    const atkTeam = isHome ? this.homeTeam : this.awayTeam;
    const defTeam = isHome ? this.awayTeam : this.homeTeam;
    const atkPlayers = isHome ? this.homePlayersOnPitch : this.awayPlayersOnPitch;
    const defPlayers = isHome ? this.awayPlayersOnPitch : this.homePlayersOnPitch;

    let spotX, spotY;
    if (type === "CORNER") {
      spotX = isHome ? 99.5 : 0.5;
      spotY = Math.random() < 0.5 ? 0.8 : 99.2;
    } else {
      spotX = isHome ? (73 + Math.random() * 8) : (27 - Math.random() * 8);
      spotY = 30 + Math.random() * 40;
    }

    const setPieceInfo = {
      type,
      attackingSide,
      atkTeam,
      defTeam,
      atkPlayers,
      defPlayers,
      spot: { x: spotX, y: spotY },
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
    const strategies = info.type === "FREE_KICK"
      ? ["DIRECT_SHOT", "NEAR_POST", "PENALTY_SPOT", "FAR_POST", "SHORT_PASS"]
      : ["NEAR_POST", "PENALTY_SPOT", "FAR_POST", "SHORT_PASS"];
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
        if (this.minute >= this.halfTimeMinute && !this.halfTimeTriggered) {
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
    let sum = 0;
    players.forEach(p => {
      const role = this.getPlayerRole(p, side);
      let power = 75;
      if (type === "atk") {
        power = (p.sho * 0.4 + p.dri * 0.3 + p.pac * 0.3) * (0.6 + p.energy / 250);
        if (role && role.atkMod) power *= (1 + role.atkMod);
      } else if (type === "mid") {
        power = (p.pas * 0.4 + p.dri * 0.3 + p.def * 0.3) * (0.6 + p.energy / 250);
        if (role && role.midMod) power *= role.midMod;
      } else if (type === "def") {
        power = (p.def * 0.5 + p.phy * 0.3 + p.pac * 0.2) * (0.6 + p.energy / 250);
        if (role && role.defMod) power *= role.defMod;
      }
      sum += power;
    });
    return sum / players.length;
  }

  update2DPositions() {
    // Los jugadores fijan sus coordenadas objetivo siguiendo dinámicamente la jugada, el balón y su función táctica (subir, desdoblar, etc.)
    const ballX = this.ball.targetX;
    const ballY = this.ball.targetY;

    this.home2D.forEach((p, idx) => {
      const playerObj = this.homePlayersOnPitch[idx];
      const role = this.getPlayerRole(playerObj, "home");
      const pushMod = role?.pushMod || 0; // ej: +14 para Carrilero Ofensivo, +6 Central con Salida
      const shiftX = (ballX - 50) * 0.35 + (pushMod * 0.35);
      const shiftY = (ballY - 50) * 0.25;
      p.targetX = Math.max(3, Math.min(95, p.baseX + shiftX + (Math.random() * 4 - 2)));
      p.targetY = Math.max(8, Math.min(92, p.baseY + shiftY + (Math.random() * 4 - 2)));
    });

    this.away2D.forEach((p, idx) => {
      const playerObj = this.awayPlayersOnPitch[idx];
      const role = this.getPlayerRole(playerObj, "away");
      const pushMod = role?.pushMod || 0;
      const shiftX = (ballX - 50) * 0.35 - (pushMod * 0.35);
      const shiftY = (ballY - 50) * 0.25;
      p.targetX = Math.max(5, Math.min(97, p.baseX + shiftX + (Math.random() * 4 - 2)));
      p.targetY = Math.max(8, Math.min(92, p.baseY + shiftY + (Math.random() * 4 - 2)));
    });
  }

  // Formato televisivo oficial del minuto con descuento (ej: 45+2', 90+4')
  getFormattedMinute() {
    if (!this.halfTimeTriggered) {
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
    this.isHighlightRunning = false;
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
      isRunning: this.isRunning,
      isHalfTime: this.isHalfTime,
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

// Vista de la Pizarra Táctica y Alineaciones
function renderTacticsView(container, gameState, onSaveTactics) {
  const team = gameState.teams.find(t => t.id === gameState.userTeamId);
  let tactics = gameState.userTactics || {
    formation: team.defaultFormation || "4-3-3",
    mentality: "balanced",
    lineup: team.players.slice(0, 11).map(p => p.id),
    bench: team.players.slice(11).map(p => p.id),
    playerRoles: {}
  };
  if (!tactics.playerRoles) tactics.playerRoles = {};

  let selectedPlayerId = null;
  let showAllRolesList = false;

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
              const isInjured = Boolean(player.injury);
              const roleId = (tactics.playerRoles && tactics.playerRoles[player.id]) || getDefaultRoleForPosition(slot.pos);
              const role = getRoleDetails(slot.pos, roleId);

              return `
                <div class="slot-player absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer flex flex-col items-center transition-transform active:scale-95 z-10"
                     style="left: ${slot.x}%; top: ${slot.y}%;"
                     data-player-id="${player.id}">
                  <!-- Ficha con dorsal y valoración -->
                  <div class="w-10 h-10 rounded-full border-2 ${isSelected ? 'border-amber-400 bg-amber-500 text-black shadow-lg shadow-amber-400/50 scale-110' : isInjured ? 'border-rose-500 bg-rose-950 text-rose-200 animate-pulse' : 'border-white/80 bg-slate-900 text-white shadow-md'} flex flex-col items-center justify-center relative transition-all">
                    <span class="text-[9px] font-black leading-none">${effRating}</span>
                    <span class="text-[8px] font-bold ${isInjured ? 'text-rose-300' : 'text-slate-300'} leading-none">${slot.label}</span>
                    <!-- Barra de energía en miniatura -->
                    <div class="absolute -bottom-1 w-6 h-1 bg-black/60 rounded-full overflow-hidden">
                      <div class="h-full ${player.energy > 70 ? 'bg-emerald-400' : player.energy > 50 ? 'bg-amber-400' : 'bg-red-500'}" style="width: ${player.energy}%;"></div>
                    </div>
                  </div>
                  <!-- Nombre del futbolista -->
                  <div class="bg-black/80 px-1.5 py-0.5 rounded text-[9px] font-bold text-white tracking-tight mt-1 truncate max-w-[70px] text-center border border-white/10 shadow">
                    ${player.name.split(' ').slice(-1)[0]}
                  </div>
                  <!-- Función / Rol asignado o Lesión -->
                  ${isInjured ? `
                    <div class="mt-0.5 px-1 py-0.2 rounded bg-rose-900 border border-rose-500 text-[7.5px] font-bold text-rose-200 truncate max-w-[76px] text-center shadow-sm">
                      🚑 ${player.injury.roundsLeft}j
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

        <!-- Panel de Asignación de Función / Rol Táctico del Jugador Seleccionado -->
        ${(() => {
          if (!selectedPlayerId) return "";
          const selSlotIndex = tactics.lineup.indexOf(selectedPlayerId);
          if (selSlotIndex === -1) return ""; // Está en el banquillo
          const selSlot = formation.slots[selSlotIndex];
          const selPlayer = team.players.find(p => p.id === selectedPlayerId);
          if (!selPlayer || !selSlot) return "";

          const curRoleId = (tactics.playerRoles && tactics.playerRoles[selPlayer.id]) || getDefaultRoleForPosition(selSlot.pos);
          const curRole = getRoleDetails(selSlot.pos, curRoleId);
          const availRoles = getAvailableRolesForPosition(selSlot.pos);

          return `
            <div class="mx-3 my-2 p-3 bg-slate-900 border border-sky-500/50 rounded-2xl shadow-xl animate-fadeIn">
              <div class="flex items-center justify-between mb-2 pb-1.5 border-b border-slate-800">
                <div class="flex items-center gap-2">
                  <span class="text-xl">${curRole.icon}</span>
                  <div>
                    <span class="text-[9px] uppercase font-bold text-sky-400">Función táctica · ${selPlayer.name} (${selSlot.label})</span>
                    <h4 class="text-xs font-black text-white">${curRole.name}</h4>
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
              return `
                <div class="bench-player flex items-center justify-between p-2 rounded-xl border ${isSelected ? 'border-amber-400 bg-amber-500/10' : isInjured ? 'border-rose-900/80 bg-rose-950/20' : 'border-slate-800 bg-slate-900/60'} cursor-pointer active:scale-98 transition"
                     data-player-id="${p.id}">
                  <div class="flex items-center gap-2">
                    <span class="w-5 text-center font-mono text-[10px] text-slate-500 font-bold">#${p.number}</span>
                    <span class="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] font-bold ${p.pos === 'DC' || p.pos === 'EI' || p.pos === 'ED' ? 'text-red-400' : p.pos === 'MC' || p.pos === 'MCD' || p.pos === 'MCO' ? 'text-amber-400' : p.pos === 'POR' ? 'text-purple-400' : 'text-sky-400'}">${p.pos}</span>
                    <span class="text-xs font-bold text-slate-200">${p.name}</span>
                    ${isInjured ? `<span class="px-1.5 py-0.5 rounded bg-rose-900/90 border border-rose-500/60 text-[8.5px] font-bold text-rose-300">🚑 ${p.injury.roundsLeft}j</span>` : ''}
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-[10px] font-mono ${(p.energy || 100) >= 80 ? 'text-emerald-400' : (p.energy || 100) >= 65 ? 'text-amber-400' : 'text-rose-400'} font-bold">⚡${Math.round(p.energy !== undefined ? p.energy : 100)}%</span>
                    <div class="w-10 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div class="h-full ${(p.energy || 100) >= 80 ? 'bg-emerald-400' : (p.energy || 100) >= 65 ? 'bg-amber-400' : 'bg-red-500'}" style="width: ${p.energy !== undefined ? p.energy : 100}%;"></div>
                    </div>
                    <span class="text-xs font-black ${isInjured ? 'text-slate-500' : 'text-amber-400'} px-1.5 py-0.5 bg-slate-800/80 rounded">${p.ovr}</span>
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
    // Considerar tanto la media del jugador como su estado físico actual y descartar lesionados
    const getMatchFitness = p => (p.ovr || 70) * (0.6 + ((p.energy !== undefined ? p.energy : 100) / 250));
    const availablePlayers = [...team.players].filter(p => !p.injury).sort((a, b) => getMatchFitness(b) - getMatchFitness(a));
    const used = new Set();
    const newLineup = [];

    // Asignar mejor portero primero
    const gk = availablePlayers.find(p => p.pos === "POR");
    if (gk) {
      newLineup[0] = gk.id;
      used.add(gk.id);
    }

    // Para el resto de posiciones
    formation.slots.forEach((slot, idx) => {
      if (idx === 0) return; // Ya asignamos portero
      // Buscar mejor jugador con posición exacta no usado
      let best = availablePlayers.find(p => !used.has(p.id) && p.pos === slot.pos);
      // Si no hay exacto, el mejor que quede
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

                <!-- Nombre y Goles -->
                <div>
                  <div class="flex items-center gap-1.5 flex-wrap">
                    <h4 class="text-xs font-bold text-white leading-tight">${p.name}</h4>
                    ${p.injury ? `<span class="px-1.5 py-0.2 rounded bg-rose-950/90 border border-rose-500/60 text-[8px] font-bold text-rose-300">🚑 ${p.injury.type} (${p.injury.roundsLeft}j)</span>` : ''}
                  </div>
                  <div class="flex items-center gap-2 mt-1">
                    <span class="text-[10px] text-slate-400">⚽ ${p.goals || 0}</span>
                    <span class="text-[10px] font-mono ${(p.energy || 100) >= 85 ? 'text-emerald-400' : (p.energy || 100) >= 70 ? 'text-amber-400' : 'text-rose-400 font-bold'}">⚡ ${Math.round(p.energy !== undefined ? p.energy : 100)}%</span>
                    <span class="text-[9px] text-slate-500 font-mono">FIS ${p.phy || 70}</span>
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
              <div class="text-[9px] ${(p.energy || 100) >= 85 ? 'text-emerald-400' : (p.energy || 100) >= 70 ? 'text-amber-400' : 'text-rose-400'} font-bold">${(p.energy || 100) >= 85 ? 'Óptimo' : (p.energy || 100) >= 70 ? 'Cansado' : 'Fatigado'}</div>
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

  let preMatchTab = "USER"; // "USER" o "OPPONENT"
  let selectedPreMatchPlayerId = null;
  let preMatchSaveFeedback = null;
  let masterTacticsForNextMatches = null;
  let showPreMatchAllRoles = false;

  function getOpponentLineup(oppTeam) {
    const formationKey = oppTeam.defaultFormation || "4-3-3";
    const formation = FORMATIONS[formationKey] || FORMATIONS["4-3-3"];
    // El rival también gestiona la energía y descarta futbolistas que estén en el parte médico
    const getMatchFitness = p => (p.ovr || 70) * (0.6 + ((p.energy !== undefined ? p.energy : 100) / 250));
    const allPlayers = [...oppTeam.players].filter(p => !p.injury).sort((a, b) => getMatchFitness(b) - getMatchFitness(a));
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

          <!-- Terreno de Juego Táctico Interactivo Usuario -->
          <div class="p-3 flex-1 flex flex-col justify-center">
            <div class="relative w-full aspect-[3/4] max-w-[340px] mx-auto bg-gradient-to-b from-emerald-800 via-emerald-700 to-emerald-900 rounded-2xl border-2 border-emerald-500/40 shadow-inner overflow-hidden p-2">
              <div class="absolute inset-2 border-2 border-white/30 rounded-xl pointer-events-none"></div>
              <div class="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-12 border-b-2 border-x-2 border-white/30 pointer-events-none"></div>
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-white/30 rounded-full pointer-events-none"></div>
              <div class="absolute top-1/2 left-2 right-2 h-0.5 bg-white/30 -translate-y-1/2 pointer-events-none"></div>
              <div class="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-12 border-t-2 border-x-2 border-white/30 pointer-events-none"></div>

              <!-- Fichas de los 11 titulares usuario -->
              ${formation.slots.map((slot, index) => {
                const player = lineupPlayers[index];
                if (!player) return "";
                const effRating = calculateEffectiveRating(player, slot.pos);
                const isSelected = selectedPreMatchPlayerId === player.id;
                const isInjured = Boolean(player.injury);
                const roleId = (tactics.playerRoles && tactics.playerRoles[player.id]) || getDefaultRoleForPosition(slot.pos);
                const role = getRoleDetails(slot.pos, roleId);

                return `
                  <div class="slot-pre-player absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer flex flex-col items-center transition-transform active:scale-95 z-10"
                       style="left: ${slot.x}%; top: ${slot.y}%;"
                       data-player-id="${player.id}">
                    <div class="w-9 h-9 rounded-full border-2 ${isSelected ? 'border-amber-400 bg-amber-500 text-black shadow-lg shadow-amber-400/50 scale-110' : isInjured ? 'border-rose-500 bg-rose-950 text-rose-200 animate-pulse' : 'border-white/80 bg-slate-900 text-white shadow-md'} flex flex-col items-center justify-center relative transition-all">
                      <span class="text-[9px] font-black leading-none">${effRating}</span>
                      <span class="text-[7px] font-bold ${isInjured ? 'text-rose-300' : 'text-slate-300'} leading-none">${slot.label}</span>
                      <div class="absolute -bottom-1 w-5 h-1 bg-black/60 rounded-full overflow-hidden">
                        <div class="h-full ${(player.energy || 100) >= 80 ? 'bg-emerald-400' : (player.energy || 100) >= 65 ? 'bg-amber-400' : 'bg-red-500'}" style="width: ${player.energy || 100}%;"></div>
                      </div>
                    </div>
                    <div class="bg-black/80 px-1 py-0.5 rounded text-[8px] font-bold text-white tracking-tight mt-0.5 truncate max-w-[65px] text-center border border-white/10 shadow">
                      ${player.name.split(' ').slice(-1)[0]}
                    </div>
                    <!-- Rol / Función del jugador o badge de lesión -->
                    ${isInjured ? `
                      <div class="mt-0.5 px-1 py-0.2 rounded bg-rose-900 border border-rose-500 text-[7px] font-bold text-rose-200 truncate max-w-[70px] text-center shadow-sm">
                        🚑 ${player.injury.roundsLeft}j
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

          <!-- Panel de Asignación de Función Táctica Pre-Partido -->
          ${(() => {
            if (!selectedPreMatchPlayerId) return "";
            const selSlotIndex = tactics.lineup.indexOf(selectedPreMatchPlayerId);
            if (selSlotIndex === -1) return "";
            const selSlot = formation.slots[selSlotIndex];
            const selPlayer = userTeam.players.find(p => p.id === selectedPreMatchPlayerId);
            if (!selPlayer || !selSlot) return "";

            const curRoleId = (tactics.playerRoles && tactics.playerRoles[selPlayer.id]) || getDefaultRoleForPosition(selSlot.pos);
            const curRole = getRoleDetails(selSlot.pos, curRoleId);
            const availRoles = getAvailableRolesForPosition(selSlot.pos);

            return `
              <div class="mx-3 my-2 p-3 bg-slate-900 border border-sky-500/50 rounded-2xl shadow-xl animate-fadeIn">
                <div class="flex items-center justify-between mb-2 pb-1.5 border-b border-slate-800">
                  <div class="flex items-center gap-2">
                    <span class="text-xl">${curRole.icon}</span>
                    <div>
                      <span class="text-[9px] uppercase font-bold text-sky-400">Función táctica · ${selPlayer.name} (${selSlot.label})</span>
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
                return `
                  <div class="bench-pre-card flex-shrink-0 bg-slate-900 border ${isSelected ? 'border-amber-400 bg-amber-500/20' : isInjured ? 'border-rose-900/80 bg-rose-950/20' : 'border-slate-800'} p-2 rounded-xl text-center cursor-pointer active:scale-95 transition min-w-[76px]" data-player-id="${p.id}">
                    <div class="flex items-center justify-center gap-1">
                      <span class="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-slate-800 ${p.pos === 'DC' || p.pos === 'EI' || p.pos === 'ED' ? 'text-red-400' : p.pos === 'MC' || p.pos === 'MCD' || p.pos === 'MCO' ? 'text-amber-400' : p.pos === 'POR' ? 'text-purple-400' : 'text-sky-400'}">${p.pos}</span>
                      ${isInjured ? `<span class="text-[8px] px-1 py-0.2 rounded bg-rose-900/90 text-rose-200 font-bold border border-rose-500/50">🚑 ${p.injury.roundsLeft}j</span>` : ''}
                    </div>
                    <div class="text-[10px] font-bold text-white truncate max-w-[70px] mt-1">${p.name.split(' ').slice(-1)[0]}</div>
                    <div class="text-xs font-black ${isInjured ? 'text-slate-500' : 'text-amber-400'} mt-0.5">${p.ovr}</div>
                    <div class="text-[9px] font-mono font-bold ${(p.energy || 100) >= 80 ? 'text-emerald-400' : (p.energy || 100) >= 65 ? 'text-amber-400' : 'text-rose-400'} mt-0.5">⚡${Math.round(p.energy !== undefined ? p.energy : 100)}%</div>
                    <div class="w-10 h-1 bg-slate-800 rounded-full mx-auto mt-0.5 overflow-hidden">
                      <div class="h-full ${(p.energy || 100) >= 80 ? 'bg-emerald-400' : (p.energy || 100) >= 65 ? 'bg-amber-400' : 'bg-red-500'}" style="width: ${p.energy || 100}%;"></div>
                    </div>
                  </div>
                `;
              }).join('')}
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

    const btnAuto = container.querySelector("#btn-pre-auto");
    if (btnAuto) {
      btnAuto.onclick = () => {
        autoAlignLineup();
        SaveManager.saveGame(gameState);
        preMatchSaveFeedback = `¡Alineación automática generada y guardada para los siguientes partidos!`;
        renderPreMatch();
      };
    }

    container.querySelectorAll(".btn-pre-formation").forEach(b => {
      b.onclick = () => {
        tactics.formation = b.dataset.formation;
        SaveManager.saveGame(gameState);
        renderPreMatch();
      };
    });

    container.querySelectorAll(".btn-pre-mentality").forEach(b => {
      b.onclick = () => {
        tactics.mentality = b.dataset.mentality;
        SaveManager.saveGame(gameState);
        renderPreMatch();
      };
    });

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
        SaveManager.saveGame(gameState);
        renderPreMatch();
      };
    });

    const btnSaveTactics = container.querySelector("#btn-pre-save-tactics");
    if (btnSaveTactics) {
      btnSaveTactics.onclick = () => {
        SaveManager.saveGame(gameState);
        preMatchSaveFeedback = `¡Formación (${tactics.formation}) y alineación guardadas para futuros partidos!`;
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
      .filter(p => p && !p.injury)
      .sort((a, b) => (b.ovr || 70) - (a.ovr || 70));

    let replacedCount = 0;
    tactics.lineup.forEach((id, idx) => {
      const p = userTeam.players.find(x => x.id === id);
      if (p && p.injury) {
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
      preMatchSaveFeedback = `¡Se han sustituido ${replacedCount} jugador(es) lesionados por suplentes disponibles!`;
    }
  }

  function autoAlignLineup() {
    const tactics = gameState.userTactics;
    const formation = FORMATIONS[tactics.formation] || FORMATIONS["4-3-3"];
    // Ponderar media con condición física y descartar futbolistas de baja médica
    const getMatchFitness = p => (p.ovr || 70) * (0.6 + ((p.energy !== undefined ? p.energy : 100) / 250));
    const availablePlayers = [...userTeam.players].filter(p => !p.injury).sort((a, b) => getMatchFitness(b) - getMatchFitness(a));
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

    const simulator = new MatchSimulator(homeTeam, awayTeam, {
      speed: 1, // Ritmo fluido Football Manager por defecto
      userSide: isUserHome ? "home" : "away",
      homeFormation: isUserHome ? gameState.userTactics.formation : oppLineupData.formationKey,
      awayFormation: !isUserHome ? gameState.userTactics.formation : oppLineupData.formationKey,
      homeMentality: isUserHome ? gameState.userTactics.mentality : "balanced",
      awayMentality: !isUserHome ? gameState.userTactics.mentality : "balanced",
      homePlayerRoles: isUserHome ? (gameState.userTactics.playerRoles || {}) : {},
      awayPlayerRoles: !isUserHome ? (gameState.userTactics.playerRoles || {}) : {},
      onTick: updateMatchUI,
      onAlert: showMatchAlert,
      onGoal: (goalData) => handleGoalSequence(goalData),
      onHalfTime: (htState) => handleHalfTimeSequence(htState),
      onSubstitution: (subData) => handleSubstitutionChyron(subData),
      onHighlightStart: (hlData) => handleHighlightStart(hlData),
      onHighlightEnd: () => handleHighlightEnd(),
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

          <div class="relative w-full aspect-[16/10] bg-slate-900 rounded-2xl border-2 border-slate-800 shadow-2xl overflow-hidden">
            <!-- Canvas 3D -->
            <canvas id="match-canvas" class="w-full h-full block cursor-pointer" title="Toca para cambiar de cámara"></canvas>

            <!-- Selector de Cámaras FM26 (TV Broadcast / Táctica / Gol) -->
            <div class="absolute top-2 right-2 flex items-center bg-slate-950/85 backdrop-blur-md p-0.5 rounded-lg border border-slate-700/80 z-20 text-[9px] font-bold shadow-lg">
              <button id="cam-btn-broadcast" class="btn-cam px-2 py-0.5 rounded-md bg-emerald-500 text-white shadow transition" data-cam="broadcast">📺 TV</button>
              <button id="cam-btn-tactical" class="btn-cam px-2 py-0.5 rounded-md text-slate-400 hover:text-white transition" data-cam="tactical">🦅 Táctica</button>
              <button id="cam-btn-goal" class="btn-cam px-2 py-0.5 rounded-md text-slate-400 hover:text-white transition" data-cam="goal">🥅 Gol</button>
            </div>

            <!-- Banner de Replay (Repetición) -->
            <div id="replay-badge" class="absolute top-2 left-2 flex items-center gap-1.5 px-2.5 py-1 bg-red-600/95 text-white font-mono font-black text-[10px] rounded-lg shadow-lg uppercase tracking-wider hidden animate-pulse z-20">
              <span class="w-2 h-2 rounded-full bg-white animate-ping"></span>
              <span id="replay-badge-text">📹 REPETICIÓN</span>
            </div>

            <!-- Banner de Ocasión Clave (Highlight en directo) -->
            <div id="highlight-badge" class="absolute top-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 bg-amber-500/95 text-slate-950 font-black text-[10px] rounded-full shadow-2xl border border-amber-300 uppercase tracking-wider hidden animate-bounce z-20 whitespace-nowrap">
              <span class="w-2 h-2 rounded-full bg-slate-950 animate-ping"></span>
              <span id="highlight-badge-text">🔥 OCASIÓN CLAVE</span>
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
                  Repetición en directo...
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
              <button id="btn-setpiece-confirm" class="w-full py-3.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 active:scale-98 text-white font-extrabold text-xs rounded-xl shadow-xl shadow-emerald-500/25 transition flex items-center justify-center gap-2">
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
                <span id="tactics-modal-stage" class="text-[10px] uppercase font-bold text-amber-400">Descanso (45') · Ajustes Tácticos</span>
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
                💡 Toca un futbolista para modificar su puesto o sustituirlo por un suplente.
              </p>
              <div id="ht-pending-subs-text" class="text-[10px] text-emerald-400 font-bold mt-0.5 hidden">
                🔄 0 cambios seleccionados
              </div>
            </div>

            <!-- Lista del Banquillo (Suplentes) -->
            <div class="px-3 mb-3">
              <div class="text-[10px] uppercase font-bold text-slate-400 mb-1.5 flex items-center justify-between">
                <span>🪑 Suplentes disponibles</span>
                <span class="text-slate-500 font-normal">Toca para poner de titular</span>
              </div>
              <div id="ht-bench-scroll" class="flex gap-1.5 overflow-x-auto pb-2 no-scrollbar"></div>
            </div>

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

    // Proyección de coordenadas 3D a pantalla con perspectiva de retransmisión televisiva FM26
    function toScreen3D(pitchX, pitchY, pitchZ = 0, w, h) {
      let groundX, groundY, scale;

      if (cameraMode === "tactical") {
        // Vista Táctica Elevada (Cámara táctica superior estilo FM26)
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

        scale = (0.68 + ny * 0.44) * (w / 380);
      } else if (cameraMode === "goal") {
        // Vista Tras Portería (Cámara cinematográfica de gol)
        const isTargetRight = cameraPitchX >= 50;
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

        scale = (0.75 + ny * 0.58) * (w / 380);
      } else {
        // "broadcast" - TV Retransmisión estilo FM26 (Unity Engine)
        const zoom = Math.max(0.9, Math.min(1.28, cameraZoom));
        const camOffsetX = (cameraPitchX - 50) * 0.36;
        const camOffsetY = (cameraPitchY - 50) * 0.16;

        const relX = pitchX - camOffsetX;
        const relY = pitchY - camOffsetY;

        const nx = relX / 100;
        const ny = Math.max(-12, Math.min(112, relY)) / 100;

        // Inclinación vertical del terreno con zoom cinematográfico
        const baseTopY = h * 0.20;
        const baseBotY = h * 0.88;
        const midY = (baseTopY + baseBotY) / 2;
        const topY = midY - (midY - baseTopY) * zoom;
        const botY = midY + (baseBotY - midY) * zoom;

        groundY = topY + ny * (botY - topY);

        // Perspectiva horizontal trapezoidal con zoom
        const midX = w / 2;
        const baseTopSpan = w * 0.76 * zoom;
        const baseBotSpan = w * 0.94 * zoom;

        const leftX = (midX - baseTopSpan / 2) + ny * ((midX - baseBotSpan / 2) - (midX - baseTopSpan / 2));
        const rightX = (midX + baseTopSpan / 2) + ny * ((midX + baseBotSpan / 2) - (midX + baseTopSpan / 2));
        groundX = leftX + nx * (rightX - leftX);

        scale = (0.74 + ny * 0.54) * (w / 380) * zoom;
      }

      // Elevación vertical 3D (eje Z para balones aéreos y saltos de cabeza)
      const screenX = groundX;
      const screenY = groundY - (pitchZ * scale * 2.4);

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

      // 6. Franjas segadas de césped cortado profesional FM26 (16 franjas verticales con textura)
      const numStripes = 16;
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

        // Tonalidad de césped rica y realista de Unity Engine
        ctx.fillStyle = i % 2 === 0 ? "#145f2c" : "#1a7538";
        ctx.fill();
      }

      // Brillo e iluminación cenital en el centro del terreno
      const pitchCenter = toScreen3D(50, 50, 0, w, h);
      const pitchSheen = ctx.createRadialGradient(
        pitchCenter.groundX, pitchCenter.groundY, 8,
        pitchCenter.groundX, pitchCenter.groundY, w * 0.48
      );
      pitchSheen.addColorStop(0, "rgba(255, 255, 255, 0.10)");
      pitchSheen.addColorStop(0.6, "rgba(255, 255, 255, 0.03)");
      pitchSheen.addColorStop(1, "rgba(0, 0, 0, 0.12)");
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

    // Dibujo del futbolista 3D humanoide articulado estilo Football Manager 26
    function drawMonigote3D(ctx, item) {
      const { groundX, groundY, scale, facingX, animPhase, side, isKeeper, number, name, isCarrier } = item;
      const kit = side === "home" ? kits.home : kits.away;
      const jerseyColor = isKeeper ? kit.keeper : kit.jersey;
      const shortsColor = kit.shorts;
      const socksColor = kit.socks || jerseyColor;

      const sc = scale;
      const nowMs = performance.now();

      // 1. Proyección de las 4 sombras del estadio (Corner Floodlights)
      drawStadiumShadows(ctx, groundX, groundY, sc, 0, 7.2);

      const hipY = groundY - 12 * sc;
      const neckY = groundY - 24 * sc;
      const headY = groundY - 28.5 * sc;

      // Inclinación aerodinámica de carrera cuando se conduce el balón
      const bodyLean = isCarrier ? facingX * 1.8 * sc : 0;

      // Cálculo de zancada de carrera (articulación de rodillas, codos y zancada)
      const legCycle = Math.sin(animPhase);
      const legStrideBack = -legCycle * 5.6 * sc * facingX;
      const legStrideFront = legCycle * 5.6 * sc * facingX;
      const kneeBendBack = Math.max(0, -legCycle) * 2.4 * sc;
      const kneeBendFront = Math.max(0, legCycle) * 2.4 * sc;

      const armCycle = Math.cos(animPhase);
      const armStrideBack = -armCycle * 4.6 * sc * facingX;
      const armStrideFront = armCycle * 4.6 * sc * facingX;

      // 2. Pierna trasera
      // Muslo (Pantalón con caída deportiva)
      ctx.strokeStyle = shortsColor;
      ctx.lineWidth = 2.8 * sc;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(groundX - 2.2 * sc, hipY);
      ctx.lineTo(groundX - 2.2 * sc + legStrideBack * 0.5, hipY + 5.8 * sc - kneeBendBack);
      ctx.stroke();

      // Media / Calceta con ribete
      ctx.strokeStyle = socksColor;
      ctx.lineWidth = 2.3 * sc;
      ctx.beginPath();
      ctx.moveTo(groundX - 2.2 * sc + legStrideBack * 0.5, hipY + 5.8 * sc - kneeBendBack);
      ctx.lineTo(groundX - 2.2 * sc + legStrideBack, groundY - 1.2 * sc);
      ctx.stroke();

      // Bota deportiva trasera con suela de tacos blanca/neón
      ctx.fillStyle = "#0f172a";
      ctx.fillRect(groundX - 3.4 * sc + legStrideBack, groundY - 2.2 * sc, 4.6 * sc * facingX, 2.4 * sc);
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(groundX - 3.4 * sc + legStrideBack, groundY - 0.7 * sc, 4.6 * sc * facingX, 0.9 * sc);

      // 3. Brazo trasero
      ctx.strokeStyle = jerseyColor;
      ctx.lineWidth = 2.3 * sc;
      ctx.beginPath();
      ctx.moveTo(groundX + bodyLean, neckY + 3.8 * sc);
      ctx.lineTo(groundX + armStrideBack + bodyLean, hipY);
      ctx.stroke();

      // Mano o guante trasero
      ctx.fillStyle = isKeeper ? "#ffffff" : "#fcd34d";
      ctx.beginPath();
      ctx.arc(groundX + armStrideBack + bodyLean, hipY + 0.8 * sc, 1.4 * sc, 0, Math.PI * 2);
      ctx.fill();

      // 4. Pierna delantera
      // Muslo (Pantalón)
      ctx.strokeStyle = shortsColor;
      ctx.lineWidth = 2.8 * sc;
      ctx.beginPath();
      ctx.moveTo(groundX + 2.2 * sc, hipY);
      ctx.lineTo(groundX + 2.2 * sc + legStrideFront * 0.5, hipY + 5.8 * sc - kneeBendFront);
      ctx.stroke();

      // Media / Calceta delantera
      ctx.strokeStyle = socksColor;
      ctx.lineWidth = 2.3 * sc;
      ctx.beginPath();
      ctx.moveTo(groundX + 2.2 * sc + legStrideFront * 0.5, hipY + 5.8 * sc - kneeBendFront);
      ctx.lineTo(groundX + 2.2 * sc + legStrideFront, groundY - 1.2 * sc);
      ctx.stroke();

      // Bota delantera con suela
      ctx.fillStyle = "#0f172a";
      ctx.fillRect(groundX + 1.2 * sc + legStrideFront, groundY - 2.2 * sc, 4.6 * sc * facingX, 2.4 * sc);
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(groundX + 1.2 * sc + legStrideFront, groundY - 0.7 * sc, 4.6 * sc * facingX, 0.9 * sc);

      // 5. Torso con Camiseta Oficial 3D (Gradiente de iluminación y dorsales)
      const torsoW = 9.6 * sc;
      const torsoH = 11.5 * sc;

      ctx.save();
      ctx.translate(groundX + bodyLean, neckY);

      // Sombreado de volumen muscular de la camiseta
      const jerseyGrad = ctx.createLinearGradient(0, 0, 0, torsoH);
      jerseyGrad.addColorStop(0, jerseyColor);
      jerseyGrad.addColorStop(1, kit.shorts || "#0f172a");
      ctx.fillStyle = jerseyColor;
      ctx.beginPath();
      ctx.roundRect(-torsoW / 2, 0, torsoW, torsoH, 2.8 * sc);
      ctx.fill();

      // Detalle de cuello / ribete oficial
      ctx.fillStyle = kit.collar || "#ffffff";
      ctx.beginPath();
      ctx.ellipse(0, 1 * sc, 2.6 * sc, 1.3 * sc, 0, 0, Math.PI * 2);
      ctx.fill();

      // Borde de costura y sombreado lateral
      ctx.strokeStyle = "rgba(0, 0, 0, 0.28)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Dorsal oficial en la espalda
      ctx.fillStyle = kit.number;
      ctx.font = `900 ${Math.round(7.2 * sc)}px monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(`${number}`, 0, torsoH * 0.56);
      ctx.restore();

      // 6. Brazo delantero
      ctx.strokeStyle = jerseyColor;
      ctx.lineWidth = 2.3 * sc;
      ctx.beginPath();
      ctx.moveTo(groundX + bodyLean, neckY + 3.8 * sc);
      ctx.lineTo(groundX + armStrideFront + bodyLean, hipY);
      ctx.stroke();

      // Guante de portero o mano anatómica
      if (isKeeper) {
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(groundX + armStrideFront + bodyLean, hipY + 0.8 * sc, 2.5 * sc, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "#10b981";
        ctx.lineWidth = 0.9;
        ctx.stroke();
      } else {
        ctx.fillStyle = "#fcd34d";
        ctx.beginPath();
        ctx.arc(groundX + armStrideFront + bodyLean, hipY + 0.8 * sc, 1.4 * sc, 0, Math.PI * 2);
        ctx.fill();
      }

      // 7. Cabeza y Pelo 3D Estilizado
      const headR = 4.3 * sc;
      const headX = groundX + bodyLean * 1.2;

      ctx.beginPath();
      ctx.arc(headX, headY, headR, 0, Math.PI * 2);
      ctx.fillStyle = "#fcd34d"; // Tono de piel
      ctx.fill();
      ctx.strokeStyle = "rgba(0, 0, 0, 0.25)";
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // Cabello modelado 3D con volumen
      ctx.beginPath();
      ctx.arc(headX, headY - 1.3 * sc, headR * 0.94, Math.PI, 0);
      ctx.fillStyle = (number % 2 === 0) ? "#1e293b" : "#451a03";
      ctx.fill();

      // 8. Rótulo Televisivo e Indicador de Jugada FM26
      const lastName = name ? name.split(' ').slice(-1)[0].toUpperCase() : `${number}`;
      const tagY = headY - headR - (isCarrier ? 13 * sc : 7.5 * sc);

      if (isCarrier) {
        // Indicador de Posesión FM26: Rombo de neón turquesa pulsante sobre el portador
        const bobDiamond = Math.sin(nowMs * 0.008) * 2 * sc;
        const dY = headY - headR - 6.5 * sc + bobDiamond;

        ctx.fillStyle = "#22d3ee";
        ctx.beginPath();
        ctx.moveTo(headX, dY - 4.5 * sc);
        ctx.lineTo(headX + 3.4 * sc, dY);
        ctx.lineTo(headX, dY + 4.5 * sc);
        ctx.lineTo(headX - 3.4 * sc, dY);
        ctx.closePath();
        ctx.fill();

        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 1;
        ctx.stroke();

        // Rótulo destacado de transmisión en directo estilo FM26
        const tagText = `${number} ${lastName}`;
        ctx.font = `900 ${Math.max(9, Math.round(9.8 * sc))}px system-ui, -apple-system, sans-serif`;
        const textW = ctx.measureText(tagText).width;
        const pillW = textW + 16 * sc;
        const pillH = 13 * sc;

        // Píldora de cristal oscuro con ribete neón del club
        ctx.fillStyle = "rgba(10, 15, 30, 0.90)";
        ctx.beginPath();
        ctx.roundRect(headX - pillW / 2, tagY - pillH / 2, pillW, pillH, pillH / 2);
        ctx.fill();
        ctx.strokeStyle = kit.jersey;
        ctx.lineWidth = 1.6;
        ctx.stroke();

        // Texto del futbolista
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(tagText, headX, tagY + 0.5);
      } else {
        // Rótulo discreto estilo FM26 para el resto de futbolistas
        const tagText = lastName;
        ctx.font = `bold ${Math.max(7, Math.round(7.4 * sc))}px system-ui, -apple-system, sans-serif`;
        const textW = ctx.measureText(tagText).width;
        const pillW = textW + 9 * sc;
        const pillH = 9.5 * sc;

        ctx.fillStyle = "rgba(10, 15, 30, 0.74)";
        ctx.beginPath();
        ctx.roundRect(headX - pillW / 2, tagY - pillH / 2, pillW, pillH, pillH / 2);
        ctx.fill();

        ctx.fillStyle = "rgba(255, 255, 255, 0.92)";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(tagText, headX, tagY);
      }
    }

    // Dibujo del balón 3D FM26 con sombra de altura cuádruple, paneles y estela de disparo
    function drawBall3D(ctx, item) {
      const { groundX, groundY, screenX, screenY, scale, z } = item;

      // 1. Sombras del balón en el césped proyectadas por los 4 focos
      drawStadiumShadows(ctx, groundX, groundY, scale, z || 0, 4.2);

      // 2. Estela cinemática de velocidad en tiros y jugadas clave
      if (ballTrail.length > 1) {
        for (let t = 0; t < ballTrail.length - 1; t++) {
          const tPt = toScreen3D(ballTrail[t].x, ballTrail[t].y, ballTrail[t].z || 0, canvas.width, canvas.height);
          const tAlpha = (t / ballTrail.length) * 0.42;
          ctx.beginPath();
          ctx.arc(tPt.screenX, tPt.screenY, (3.2 * scale) * (0.35 + (t / ballTrail.length) * 0.65), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${tAlpha})`;
          ctx.fill();
        }
      }

      // 3. Esfera del balón 3D con luz radial de focos de estadio
      const ballR = 4.6 * scale;
      ctx.beginPath();
      ctx.arc(screenX, screenY, ballR, 0, Math.PI * 2);

      const grad = ctx.createRadialGradient(
        screenX - ballR * 0.4, screenY - ballR * 0.4, ballR * 0.08,
        screenX, screenY, ballR
      );
      grad.addColorStop(0, "#ffffff");
      grad.addColorStop(0.65, "#f1f5f9");
      grad.addColorStop(1, "#334155");
      ctx.fillStyle = grad;
      ctx.fill();

      ctx.strokeStyle = "#0f172a";
      ctx.lineWidth = 1.1;
      ctx.stroke();

      // 4. Paneles pentagonales del balón oficial LaLiga / FM26 rotando
      ctx.save();
      ctx.translate(screenX, screenY);
      ctx.rotate(ballRotation);

      // Pentágono central
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

      // Detalles aerodinámicos de color LaLiga (naranja / rojo flúor)
      ctx.strokeStyle = "#f97316";
      ctx.lineWidth = 1.3 * scale;
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

    function handleHighlightStart(hlData) {
      // Registrar el frame EXACTO donde arranca la jugada clave para la repetición
      currentHighlightStartFrame = Math.max(0, replayBuffer.length - 12);

      const hlBadge = container.querySelector("#highlight-badge");
      const hlText = container.querySelector("#highlight-badge-text");
      if (hlBadge && hlText) {
        hlText.textContent = `🔥 OCASIÓN CLAVE · ${hlData.atkTeam.shortName}`;
        hlBadge.classList.remove("hidden");
      }

      showMatchAlert({ text: `⚡ ¡Jugada de peligro de ${hlData.atkTeam.name}!` });
    }

    function handleHighlightEnd() {
      const hlBadge = container.querySelector("#highlight-badge");
      if (hlBadge) hlBadge.classList.add("hidden");
    }

    function handleGoalSequence(goalData) {
      handleHighlightEnd();
      // Ondulación física de la red al encajar el gol
      if (goalData.concedingSide === "home") {
        netRippleH = 1.0;
      } else {
        netRippleA = 1.0;
      }

      // 1. Pausar la simulación para que el reloj no avance durante celebración y repetición
      simulator.pause();

      const elGoalOverlay = container.querySelector("#goal-cinematic");
      const elScorer = container.querySelector("#goal-scorer-name");
      const elScore = container.querySelector("#goal-score-display");
      const elMinute = container.querySelector("#goal-minute-display");
      const replayBadge = container.querySelector("#replay-badge");
      const replayText = container.querySelector("#replay-badge-text");

      if (elScorer) elScorer.textContent = `${goalData.shooter.name}`;
      if (elScore) elScore.textContent = goalData.score;
      if (elMinute) elMinute.textContent = `Minuto ${goalData.minute}' · ${goalData.atkTeam.name}`;

      // Mostrar cartel cinematográfico de GOL
      if (elGoalOverlay) {
        elGoalOverlay.classList.remove("opacity-0", "pointer-events-none", "scale-95");
        elGoalOverlay.classList.add("opacity-100", "scale-100");
      }

      // Extraer el clip de la jugada clave EXACTA (desde el arranque de la ocasión de peligro)
      const startIdx = (currentHighlightStartFrame !== null && currentHighlightStartFrame !== undefined)
        ? currentHighlightStartFrame
        : Math.max(0, replayBuffer.length - 130);

      const recordedClip = replayBuffer.slice(startIdx);
      const finalClip = recordedClip.length >= 35 ? recordedClip : replayBuffer.slice(-100);
      currentHighlightStartFrame = null;

      setTimeout(() => {
        // Desvanecer overlay cinematográfico
        if (elGoalOverlay) {
          elGoalOverlay.classList.remove("opacity-100", "scale-100");
          elGoalOverlay.classList.add("opacity-0", "pointer-events-none", "scale-95");
        }

        // Si tenemos suficientes frames, reproducir la repetición de la jugada clave
        if (finalClip.length > 20) {
          isReplaying = true;
          replayFrames = finalClip;
          replayFrameIndex = 0;
          if (replayBadge) {
            if (replayText) replayText.textContent = `📹 REPETICIÓN: GOLAZO · ${goalData.shooter.name.toUpperCase()}`;
            replayBadge.classList.remove("hidden");
          }

          const pollReplay = setInterval(() => {
            if (!isReplaying) {
              clearInterval(pollReplay);
              if (replayBadge) replayBadge.classList.add("hidden");
              startKickoffSequence(goalData.concedingSide);
            }
          }, 80);
        } else {
          startKickoffSequence(goalData.concedingSide);
        }
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
          if (simulator.minute >= simulator.halfTimeMinute && !simulator.halfTimeTriggered) {
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

    function drawPitch() {
      if (!ctx || !canvas) return;
      resizeCanvas();
      const w = canvas.width;
      const h = canvas.height;

      // 1. Seguimiento cinemático de cámara TV Broadcast FM26 con Lookahead y Zoom dinámico
      const activeBallX = (isReplaying && replayFrames.length > 0 && replayFrames[Math.floor(replayFrameIndex)])
        ? (replayFrames[Math.floor(replayFrameIndex)].ball?.x || 50)
        : (simulator.ball?.x || 50);
      const activeBallY = (isReplaying && replayFrames.length > 0 && replayFrames[Math.floor(replayFrameIndex)])
        ? (replayFrames[Math.floor(replayFrameIndex)].ball?.y || 50)
        : (simulator.ball?.y || 50);

      // Lookahead: la cámara se anticipa sutilmente al sentido del ataque
      const ballVelX = activeBallX - lastBallX;
      const ballVelY = activeBallY - lastBallY;
      const lookaheadX = Math.max(-8, Math.min(8, ballVelX * 10));
      const lookaheadY = Math.max(-5, Math.min(5, ballVelY * 8));

      const targetCamX = Math.max(24, Math.min(76, activeBallX + lookaheadX));
      const targetCamY = Math.max(32, Math.min(68, activeBallY + lookaheadY));

      cameraPitchX += (targetCamX - cameraPitchX) * 0.058;
      cameraPitchY += (targetCamY - cameraPitchY) * 0.058;

      // Zoom dinámico: acercamiento sutil en jugadas de peligro / ocasiones clave para mayor impacto
      const isBoxPlay = (activeBallX < 24 || activeBallX > 76);
      const isHighlight = (currentHighlightStartFrame !== null || isReplaying);
      const targetZoom = (isHighlight || isBoxPlay) ? 1.15 : 1.0;
      cameraZoom += (targetZoom - cameraZoom) * 0.04;

      // Desvanecimiento físico de ondulación de red tras gol
      netRippleH *= 0.95;
      netRippleA *= 0.95;

      // Giro de rotación del balón y estela de velocidad en tiros potentes
      const bMoveDist = Math.hypot(ballVelX, ballVelY);
      ballRotation += (bMoveDist * 0.38) + 0.03;

      if (bMoveDist > 1.3 || (simulator.ball?.z || 0) > 1.8) {
        ballTrail.push({
          x: activeBallX,
          y: activeBallY,
          z: simulator.ball?.z || 0
        });
        if (ballTrail.length > 7) ballTrail.shift();
      } else {
        if (ballTrail.length > 0) ballTrail.shift();
      }

      lastBallX = activeBallX;
      lastBallY = activeBallY;

      // 2. Dibujar estadio, gradas, focos, vallas y terreno de juego en perspectiva 3D
      draw3DPitch(ctx, w, h);

      const entities = [];

      if (isReplaying && replayFrames.length > 0) {
        // MODO REPETICIÓN A CÁMARA LENTA (0.65x)
        const frame = replayFrames[Math.floor(replayFrameIndex)];
        if (frame) {
          // Identificar portador más cercano al balón en repetición
          let closestReplayP = null;
          let minReplayDist = 999;
          [...frame.home, ...frame.away].forEach(p => {
            const d = Math.hypot(p.curX - frame.ball.x, p.curY - frame.ball.y);
            if (d < minReplayDist) {
              minReplayDist = d;
              closestReplayP = p;
            }
          });

          frame.home.forEach(p => {
            const pt = toScreen3D(p.curX, p.curY, 0, w, h);
            entities.push({
              type: "player",
              side: "home",
              number: p.number,
              name: p.name,
              isKeeper: p.isKeeper,
              animPhase: p.animPhase || 0,
              facingX: p.facingX || 1,
              isCarrier: (p === closestReplayP && minReplayDist < 5.5),
              groundX: pt.groundX,
              groundY: pt.groundY,
              scale: pt.scale
            });
          });

          frame.away.forEach(p => {
            const pt = toScreen3D(p.curX, p.curY, 0, w, h);
            entities.push({
              type: "player",
              side: "away",
              number: p.number,
              name: p.name,
              isKeeper: p.isKeeper,
              animPhase: p.animPhase || 0,
              facingX: p.facingX || -1,
              isCarrier: (p === closestReplayP && minReplayDist < 5.5),
              groundX: pt.groundX,
              groundY: pt.groundY,
              scale: pt.scale
            });
          });

          const bPos = toScreen3D(frame.ball.x, frame.ball.y, frame.ball.z || 0, w, h);
          entities.push({
            type: "ball",
            groundX: bPos.groundX,
            groundY: bPos.groundY,
            screenX: bPos.screenX,
            screenY: bPos.screenY,
            scale: bPos.scale,
            z: frame.ball.z || 0
          });
        }

        replayFrameIndex += 0.65;
        if (replayFrameIndex >= replayFrames.length) {
          isReplaying = false;
        }
      } else {
        // MODO NORMAL EN DIRECTO (60 FPS FLUIDO ESTILO FOOTBALL MANAGER 26)
        // Interpolación continua y suave del balón
        simulator.ball.x += (simulator.ball.targetX - simulator.ball.x) * 0.16;
        simulator.ball.y += (simulator.ball.targetY - simulator.ball.y) * 0.16;
        if (simulator.ball.targetZ !== undefined) {
          simulator.ball.z += ((simulator.ball.targetZ || 0) - (simulator.ball.z || 0)) * 0.18;
          if (Math.abs((simulator.ball.z || 0) - (simulator.ball.targetZ || 0)) < 0.2) {
            simulator.ball.targetZ = 0;
          }
        } else {
          simulator.ball.z = 0;
        }

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

        // Interpolación y animación de carrera suave para jugadores locales
        simulator.home2D.forEach(p => {
          const dx = p.targetX - p.curX;
          const dy = p.targetY - p.curY;
          const dist = Math.hypot(dx, dy);
          p.curX += dx * 0.14;
          p.curY += dy * 0.14;
          if (Math.abs(dx) > 0.08) {
            p.facingX = dx > 0 ? 1 : -1;
          }
          p.animPhase = (p.animPhase || 0) + (dist > 0.12 ? 0.22 : 0.04);

          const pt = toScreen3D(p.curX, p.curY, 0, w, h);
          entities.push({
            type: "player",
            side: "home",
            number: p.number,
            name: p.player?.name,
            isKeeper: p.isKeeper,
            animPhase: p.animPhase,
            facingX: p.facingX,
            isCarrier: (p === closestLiveP && minLiveDist < 5.5),
            groundX: pt.groundX,
            groundY: pt.groundY,
            scale: pt.scale
          });
        });

        // Interpolación y animación de carrera suave para jugadores visitantes
        simulator.away2D.forEach(p => {
          const dx = p.targetX - p.curX;
          const dy = p.targetY - p.curY;
          const dist = Math.hypot(dx, dy);
          p.curX += dx * 0.14;
          p.curY += dy * 0.14;
          if (Math.abs(dx) > 0.08) {
            p.facingX = dx > 0 ? 1 : -1;
          }
          p.animPhase = (p.animPhase || 0) + (dist > 0.12 ? 0.22 : 0.04);

          const pt = toScreen3D(p.curX, p.curY, 0, w, h);
          entities.push({
            type: "player",
            side: "away",
            number: p.number,
            name: p.player?.name,
            isKeeper: p.isKeeper,
            animPhase: p.animPhase,
            facingX: p.facingX,
            isCarrier: (p === closestLiveP && minLiveDist < 5.5),
            groundX: pt.groundX,
            groundY: pt.groundY,
            scale: pt.scale
          });
        });

        const bPos = toScreen3D(simulator.ball.x, simulator.ball.y, simulator.ball.z || 0, w, h);
        entities.push({
          type: "ball",
          groundX: bPos.groundX,
          groundY: bPos.groundY,
          screenX: bPos.screenX,
          screenY: bPos.screenY,
          scale: bPos.scale,
          z: simulator.ball.z || 0
        });

        // Grabar snapshot para repeticiones mientras el juego esté activo y no en saque
        if (simulator.isRunning && !isKickoffInProgress) {
          replayBuffer.push({
            home: simulator.home2D.map(p => ({
              curX: p.curX,
              curY: p.curY,
              animPhase: p.animPhase,
              facingX: p.facingX,
              number: p.number,
              name: p.player?.name,
              isKeeper: p.isKeeper
            })),
            away: simulator.away2D.map(p => ({
              curX: p.curX,
              curY: p.curY,
              animPhase: p.animPhase,
              facingX: p.facingX,
              number: p.number,
              name: p.player?.name,
              isKeeper: p.isKeeper
            })),
            ball: { x: simulator.ball.x, y: simulator.ball.y, z: simulator.ball.z || 0 }
          });
          if (replayBuffer.length > 300) {
            replayBuffer.shift();
          }
        }
      }

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

    // Eventos del Selector de Cámara FM26
    const camBtns = container.querySelectorAll(".btn-cam");
    camBtns.forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        cameraMode = btn.dataset.cam;
        camBtns.forEach(b => {
          b.className = b.dataset.cam === cameraMode
            ? "btn-cam px-2 py-0.5 rounded-md bg-emerald-500 text-white shadow transition"
            : "btn-cam px-2 py-0.5 rounded-md text-slate-400 hover:text-white transition";
        });
        showMatchAlert({ text: `📷 Cámara: ${cameraMode === "broadcast" ? "TV Retransmisión" : cameraMode === "tactical" ? "Vista Táctica Elevada" : "Detrás de Portería"}` });
      };
    });

    if (canvas) {
      canvas.onclick = () => {
        const modes = ["broadcast", "tactical", "goal"];
        const curIdx = modes.indexOf(cameraMode);
        cameraMode = modes[(curIdx + 1) % modes.length];
        camBtns.forEach(b => {
          b.className = b.dataset.cam === cameraMode
            ? "btn-cam px-2 py-0.5 rounded-md bg-emerald-500 text-white shadow transition"
            : "btn-cam px-2 py-0.5 rounded-md text-slate-400 hover:text-white transition";
        });
        showMatchAlert({ text: `📷 Cámara: ${cameraMode === "broadcast" ? "TV Retransmisión" : cameraMode === "tactical" ? "Vista Táctica Elevada" : "Detrás de Portería"}` });
      };
    }

    // Actualización de UI
    function updateMatchUI(state) {
      const elTimer = container.querySelector("#match-timer");
      const elHScore = container.querySelector("#home-score");
      const elAScore = container.querySelector("#away-score");
      if (elTimer) {
        if (state.isHalfTime) {
          elTimer.textContent = "45' (Descanso)";
          elTimer.className = "px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-mono font-bold";
        } else {
          elTimer.textContent = state.formattedMinute || `${state.minute}'`;
          const isAdded = (!simulator.halfTimeTriggered && state.minute > 45) || (state.minute > 90);
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
        htBadge.textContent = `⏸️ DESCANSO (45+${simulator.firstHalfExtra}')`;
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
        elTimer.textContent = "45' (Descanso)";
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
        elStage.textContent = isLive 
          ? `Minuto ${simulator.getFormattedMinute ? simulator.getFormattedMinute() : simulator.minute + "'"} · En Directo`
          : "Descanso (45') · Ajustes Tácticos";
      }

      const elTitle = modalHTTactics.querySelector("#tactics-modal-title");
      if (elTitle) {
        elTitle.textContent = isLive ? "Pizarra Táctica y Sustituciones" : "Pizarra Táctica y Cambios";
      }

      const elConfirmText = modalHTTactics.querySelector("#tactics-modal-btn-confirm-text");
      if (elConfirmText) {
        elConfirmText.textContent = isLive ? "⚽ APLICAR CAMBIOS Y CONTINUAR" : "⚽ GUARDAR AJUSTES Y VOLVER";
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

        // Texto de instrucciones
        const elInstr = modalHTTactics.querySelector("#ht-instruction-text");
        if (elInstr) {
          if (htSelectedPlayerId) {
            const selPlayer = getPlayer(htSelectedPlayerId);
            elInstr.innerHTML = `<span class="text-amber-400 font-bold">👉 Seleccionado: ${selPlayer?.name}</span>. Toca otro futbolista para intercambiar puesto o sustituirlo.`;
          } else {
            elInstr.textContent = "💡 Toca un futbolista para modificar su puesto o sustituirlo por un suplente.";
          }
        }

        // Terreno de juego táctico con slots
        const pitchSlots = modalHTTactics.querySelector("#ht-pitch-slots");
        if (pitchSlots) {
          pitchSlots.innerHTML = formation.slots.map((slot, index) => {
            const playerId = htLineupIds[index];
            const player = getPlayer(playerId);
            if (!player) return "";
            const effRating = calculateEffectiveRating(player, slot.pos);
            const isSelected = htSelectedPlayerId === player.id;
            const isNewSub = !initialPitchIds.includes(player.id);

            return `
              <div class="slot-ht-player absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer flex flex-col items-center transition-transform active:scale-95 z-10"
                   style="left: ${slot.x}%; top: ${slot.y}%;"
                   data-player-id="${player.id}">
                <div class="w-9 h-9 rounded-full border-2 ${isSelected ? 'border-amber-400 bg-amber-500 text-black shadow-lg shadow-amber-400/50 scale-110' : isNewSub ? 'border-emerald-400 bg-emerald-950 text-emerald-300 shadow-md ring-2 ring-emerald-500/50' : 'border-white/80 bg-slate-900 text-white shadow-md'} flex flex-col items-center justify-center relative transition-all">
                  <span class="text-[9px] font-black leading-none">${effRating}</span>
                  <span class="text-[7px] font-bold ${isNewSub ? 'text-emerald-400' : 'text-slate-300'} leading-none">${slot.label}</span>
                  <div class="absolute -bottom-1 w-5 h-1 bg-black/60 rounded-full overflow-hidden">
                    <div class="h-full ${player.energy > 70 ? 'bg-emerald-400' : player.energy > 50 ? 'bg-amber-400' : 'bg-red-500'}" style="width: ${player.energy || 100}%;"></div>
                  </div>
                </div>
                <div class="bg-black/80 px-1 py-0.5 rounded text-[8px] font-bold text-white tracking-tight mt-0.5 truncate max-w-[65px] text-center border border-white/10 shadow">
                  ${isNewSub ? '🔺 ' : ''}${player.name.split(' ').slice(-1)[0]}
                </div>
                ${(() => {
                  const rId = (gameState.userTactics.playerRoles && gameState.userTactics.playerRoles[player.id]) || getDefaultRoleForPosition(slot.pos);
                  const r = getRoleDetails(slot.pos, rId);
                  return `<div class="mt-0.5 px-1 py-0.2 rounded bg-sky-950/80 border border-sky-500/30 text-[7px] font-bold text-sky-300 truncate max-w-[70px] text-center">${r.icon} ${r.tag}</div>`;
                })()}
              </div>
            `;
          }).join('');

          pitchSlots.querySelectorAll(".slot-ht-player").forEach(el => {
            el.onclick = () => {
              handleHTPlayerTap(el.dataset.playerId);
            };
          });
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
          !isLive
        );

        if (!res.success) {
          alert(res.reason);
          return;
        }

        gameState.userTactics.formation = htFormationKey;
        gameState.userTactics.mentality = htMentality;
        gameState.userTactics.lineup = [...htLineupIds];
        gameState.userTactics.bench = [...htBenchIds];

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
          : `🎯 FALTA PELIGROSA A FAVOR (${spInfo.minute}')`;
        badgeType.className = isCorner
          ? "text-[10px] uppercase font-black text-sky-400 bg-sky-400/10 border border-sky-400/30 px-2.5 py-0.5 rounded-full"
          : "text-[10px] uppercase font-black text-amber-400 bg-amber-400/10 border border-amber-400/30 px-2.5 py-0.5 rounded-full";
      }
      if (title) {
        title.textContent = isCorner ? "Pizarra Táctica · Saque de Esquina" : "Pizarra Táctica · Falta Peligrosa";
      }

      // Ubicación física del balón en la mini pizarra del área
      if (ballSpot) {
        if (isCorner) {
          const isLeft = spInfo.spot.y < 50;
          ballSpot.style.left = isLeft ? "12px" : "calc(100% - 24px)";
          ballSpot.style.top = "10px";
        } else {
          const pctY = Math.max(16, Math.min(84, spInfo.spot.y));
          ballSpot.style.left = `${pctY}%`;
          ballSpot.style.top = "76%";
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

      let selectedTakerId = sortedTakers[0]?.id || outfield[0]?.id;

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
      autoAssignPlacements();

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

      if (btnConfirm) {
        btnConfirm.onclick = () => {
          const currentTaker = outfield.find(p => p.id === selectedTakerId) || outfield[0];
          const resolvedPlacements = {};
          Object.keys(placements).forEach(zId => {
            const pId = placements[zId];
            const pObj = outfield.find(p => p.id === pId);
            if (pObj) resolvedPlacements[zId] = pObj;
          });

          modalSP.classList.add("hidden");

          const stratObj = strategies.find(s => s.id === currentStrategy);
          showMatchAlert({ text: `⚽ ¡${currentTaker.name} listo para ejecutar! Estrategia: ${stratObj?.label || 'Balón al área'}` });

          if (iconPP) iconPP.textContent = "⏸";
          if (textPP) textPP.textContent = "Pausar";

          simulator.executeSetPiece({
            type: spInfo.type,
            attackingSide: spInfo.attackingSide,
            spot: spInfo.spot,
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

  // Goleador del equipo y enfermería
  const teamScorers = [...userTeam.players].sort((a, b) => (b.goals || 0) - (a.goals || 0));
  const topTeamScorer = teamScorers[0];
  const injuredPlayers = userTeam.players.filter(p => p.injury);

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
        bench: selectedTeam.players.slice(11).map(p => p.id),
        playerRoles: {}
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
      playerRoles: {}
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

  // Recuperación física y evolución del parte médico de lesiones entre jornadas
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

        const curEnergy = p.energy !== undefined ? p.energy : 100;

        // Si continúa lesionado, su energía no recupera al 100% hasta tener el alta médica
        if (p.injury && p.injury.roundsLeft > 1) {
          p.energy = Math.min(80, curEnergy + 8);
          return;
        }

        // Si ya está prácticamente descansado (suplente o apenas participó), recupera al 100%
        if (curEnergy >= 94) {
          p.energy = 100;
          return;
        }

        // Base semanal de recuperación
        const baseRecovery = 18;

        // Bonificación por Físico (PHY): mayor fondo físico y velocidad de regeneración
        const phyBonus = Math.max(0, ((p.phy || 70) - 50) * 0.40);

        // Bonificación por Media (OVR): profesionalismo y nutrición
        const ovrBonus = Math.max(0, ((p.ovr || 70) - 60) * 0.22);

        // Bonificación extra para jugadores de banquillo o con pocos minutos
        const restBonus = curEnergy > 78 ? 10 : 0;

        const totalRecovery = baseRecovery + phyBonus + ovrBonus + restBonus;
        p.energy = Math.min(100, Math.round(curEnergy + totalRecovery));
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