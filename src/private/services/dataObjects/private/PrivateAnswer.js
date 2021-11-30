export default class PrivateAnswer {
  constructor(reduxAnswer) {
    this.description = reduxAnswer.description;
    this.value = reduxAnswer.value;
  }
}
