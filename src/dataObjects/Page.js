export default class Page {
  constructor(reduxSlide, gameId) {
    this.title = reduxSlide.title;
    this.description = reduxSlide.description;
    this.hasTimeLimit = reduxSlide.hasTimeLimit;
    this.timeLimit = reduxSlide.timeLimit;
    this.checkType = reduxSlide.checkType;
    this.pointsForSpeed = reduxSlide.pointsForSpeed;
    this.file = reduxSlide.file;
    this.questionType = reduxSlide.questionType;
    this.numberOfOptions = reduxSlide.numberOfOptions;
    this.slideGameId = gameId;
  }
}
