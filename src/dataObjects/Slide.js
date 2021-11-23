export default class Slide {
  constructor(reduxSlide, quizId) {
    this.title = reduxSlide.title;
    this.description = reduxSlide.description;
    this.hasTimeLimit = reduxSlide.hasTimeLimit;
    this.timeLimit = reduxSlide.timeLimit;
    this.autoCheck = reduxSlide.autoCheck;
    this.pointsForSpeed = reduxSlide.pointsForSpeed;
    this.file = reduxSlide.file;
    this.type = reduxSlide.type;
    this.numberOfOptions = reduxSlide.numberOfOptions;
    this.slideQuizId = quizId;
  }
}
