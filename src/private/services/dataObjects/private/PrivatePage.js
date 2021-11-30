export default class PrivatePage {
  constructor(reduxPage) {
    this.title = reduxPage.title;
    this.description = reduxPage.description;
    this.hasTimeLimit = reduxPage.hasTimeLimit;
    this.timeLimit = reduxPage.timeLimit;
    this.checkType = reduxPage.checkType;
    this.pointsForSpeed = reduxPage.pointsForSpeed;
    this.file = reduxPage.file;
    this.questionType = reduxPage.questionType;
    this.numberOfOptions = reduxPage.numberOfOptions;
    this.answers = reduxPage.answers.map((page) => new PrivatePage(page));
  }
}
