import PrivatePage from "./PrivatePage";

export default class PrivateGame {
  constructor(reduxGame) {
    this.id = reduxGame.gameID;
    this.name = reduxGame.name;
    this.pages = reduxGame.pages.map((page) => new PrivatePage(page));
  }
}
