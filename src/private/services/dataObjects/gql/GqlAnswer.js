export default class GqlAnswer {
  constructor(reduxAnswer, pageId) {
    this.id = reduxAnswer.id;
    this.description = reduxAnswer.description;
    this.value = reduxAnswer.value;
    this.privateAnswerPageId = pageId;
  }
}
