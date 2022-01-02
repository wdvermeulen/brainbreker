const pageTypeDefinition = {
  MULTIPLE_CHOICE: "Multiple choice",
  //TODO
  // OPEN: "Open",
  // OPEN_LIST: "Open list",
  // APPROXIMATION: "Approximation",
  // ORDER: "Order",
  // TITLE_CARD: "Title card",
  // PUZZLE: "Puzzle",
  // VOTE: "Voting"
};

const checkTypeDefinition = {
  PREDEFINED_ANSWER: "Predefined answer",
  GAMEMASTERS_AFTERWARDS: "Check afterwards",
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
