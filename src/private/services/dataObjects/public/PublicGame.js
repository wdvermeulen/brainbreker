import { getTimeToLive } from "../../../../utils";

export default class PublicGame {
  constructor(game, hostID) {
    // TODO: Force this value to be unique in API
    this.pin = Math.floor(Math.random() * 8998) + 1001;
    this.name = game.name;
    this.privategameID = game.id;
    this.score = [];
    this.hostPeerID = hostID;
    this.ttl = getTimeToLive;
  }
}
