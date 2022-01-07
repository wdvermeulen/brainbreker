const pageTypeDefinition = {
  MULTIPLE_CHOICE: "Multiple choice vraag",
  TITLE_CARD: "Titel pagina",
  //TODO
  // OPEN: "Open vraag",
  // OPEN_LIST: "Open lijst",
  // APPROXIMATION: "Approximation",
  // ORDER: "Order",
  // TITLE_CARD: "Title card",
  // PUZZLE: "Puzzle",
  // VOTE: "Voting"
};

const checkTypeDefinition = {
  GAMEMASTERS_AFTERWARDS: "Achteraf controleren",
  PREDEFINED_ANSWER: "Automatisch controleren",
  //TODO
  // USERS_VOTE: "Players vote",
  // GAMEMASTERS_VOTE: "Game masters vote",
};

const roomDefinition = {
  LOBBY: "lobby",
  GAME: "game",
  VICTORY: "victory",
};

const timeSteps = [
  5, 10, 15, 20, 30, 45, 60, 120, 180, 240, 300, 360, 420, 480, 540, 600, 900,
  1800, 2700, 3600,
];

export { pageTypeDefinition, checkTypeDefinition, roomDefinition, timeSteps };
