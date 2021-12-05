export default class PublicGame {
  constructor(game) {
    console.log(game);
    this.pin = Math.floor(Math.random() * 9998) + 1;
    this.id = game.id;
    this.name = game.name;
  }
}
