export default class PrivateGame {
  constructor(reduxGame) {
    this.id = reduxGame.gameId;
    this.name = reduxGame.name;
  }
}
