export default class PrivatePage {
  constructor(reduxPage) {
    this.answers = reduxPage.answers;
    this.checkType = reduxPage.checkType;
    this.description = reduxPage.description;
    this.file = reduxPage.file;
    this.hasTimeLimit = reduxPage.hasTimeLimit;
    this.numberOfOptions = reduxPage.numberOfOptions;
    this.pageType = reduxPage.pageType;
    this.pointsForSpeed = reduxPage.pointsForSpeed;
    this.timeLimit = reduxPage.timeLimit;
    this.title = reduxPage.title;
  }
}
