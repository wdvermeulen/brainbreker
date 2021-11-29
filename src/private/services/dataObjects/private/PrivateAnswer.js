export default class PrivateAnswer {
  constructor(reduxAnswer, pageId) {
    this.id = reduxAnswer.id;
    this.description = reduxAnswer.description;
    this.value = reduxAnswer.value;
    this.privateAnswerPageId = pageId;
  }
}
