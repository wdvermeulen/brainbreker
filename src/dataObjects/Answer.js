export default class Answer {
  constructor(reduxAnswer, slideId) {
    this.description = reduxAnswer.description;
    this.value = reduxAnswer.value;
    this.answerSlideId = slideId;
  }
}
