export default class PublicGame {
  constructor(game, publicGameUserListId) {
    console.log(game);
    // TODO: Force this value to be unique in API
    this.pin = Math.floor(Math.random() * 9998) + 1;
    this.name = game.name;
    this.privategameID = game.id;
    this.score = [];
    this.publicGameUserListId = publicGameUserListId;
  }
}
