export default class ReduxGame {
  constructor(gqlGame) {
    this.gameId = gqlGame.id;
    this.name = gqlGame.name;
    this.currentPage = gqlGame.currentPage;
    this.pages = gqlGame.pages.items;
    this.connectedUsers = gqlGame.connectedUsers.items;
    this.connectedGamemasters = gqlGame.connectedGamemasters.items;
    this.connectedTeams = gqlGame.connectedTeams.items;
    this.createdAt = gqlGame.createdAt;
    this.updatedAt = gqlGame.updatedAt;
  }
}
