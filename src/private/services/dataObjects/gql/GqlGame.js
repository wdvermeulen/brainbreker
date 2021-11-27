export default class GqlGame {
  constructor(reduxGame) {
    this.id = reduxGame.gameId;
    this.name = reduxGame.name;
  }
}
