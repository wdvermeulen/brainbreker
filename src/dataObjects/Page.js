export default class Page {
  constructor(reduxPage, gameId) {
    this.id = reduxPage.pageId;
    this.title = reduxPage.title;
    this.description = reduxPage.description;
    this.hasTimeLimit = reduxPage.hasTimeLimit;
    this.timeLimit = reduxPage.timeLimit;
    this.checkType = reduxPage.checkType;
    this.pointsForSpeed = reduxPage.pointsForSpeed;
    this.file = reduxPage.file;
    this.questionType = reduxPage.questionType;
    this.numberOfOptions = reduxPage.numberOfOptions;
    this.slideGameId = gameId;
  }
}
