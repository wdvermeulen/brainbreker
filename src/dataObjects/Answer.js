export default class Answer {
  constructor(reduxAnswer, slideId) {
    this.id = reduxAnswer.id;
    this.description = reduxAnswer.description;
    this.value = reduxAnswer.value;
    this.answerSlideId = slideId;
  }
}
