export default class Game {
  constructor(reduxGame) {
    this.id = reduxGame.gameId;
    this.name = reduxGame.name;
  }
}
