import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "slide",
  initialState: {
    question: {
      title: "Question 1",
      description: "",
    },
    hasTimeLimit: true,
    timeLimit: 10,
    autoCheck: true,
    pointsForSpeed: true,
    file: "",
    type: 0,
    numberOfOptions: 4,
    answers: [
      { description: "", value: 0 },
      { description: "", value: 0 },
      { description: "", value: 0 },
      { description: "", value: 0 },
    ],
  },
  reducers: {
    setQuestionTitle: (state, action) => {
      state.question.title = action.payload;
    },
    setQuestionDescription: (state, action) => {
      state.question.description = action.payload;
    },
    setHasTimeLimit: (state, action) => {
      state.hasTimeLimit = action.payload;
    },
    setTimeLimit: (state, action) => {
      state.timeLimit = Math.min(Math.max(action.payload, 5), 1800);
    },
    setAutoCheck: (state, action) => {
      state.autoCheck = action.payload;
    },
    setPointsForSpeed: (state, action) => {
      state.pointsForSpeed = action.payload;
    },
    setFile: (state, action) => {
      state.file = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    setAnswerDescription: (state, action) => {
      state.answers[action.payload.answerIndex].description =
        action.payload.description;
    },
    //TODO: currently causes crashes
    setNumberOfOptions: (state, action) => {
      console.log("Access", state.numberOfOptions, action.payload);
      state.numberOfOptions = Math.max(Math.min(action.payload, 99), 0);
      console.log("2", state.numberOfOptions, action.payload);
      while (
        state.answers.length < 98 &&
        state.answers.length < action.payload
      ) {
        console.log("3", state.answers, action.payload);
        state.answers.push({ description: "", value: 0 });
        console.log("4", state.answers, action.payload);
      }
      while (
        state.answers.length > 1 &&
        state.answers.length > action.payload &&
        state.answers[state.answers.length - 1].description === ""
      ) {
        console.log("5", state.answers, action.payload);
        state.answers.pop();
      }
      console.log("6", state.answers);
    },
    setAnswerValue: (state, action) => {
      console.log(
        state.answers[action.payload.answerIndex].value,
        action.payload
      );
      state.answers[action.payload.answerIndex].value = action.payload.value;
    },
  },
});

export const {
  setQuestionTitle,
  setQuestionDescription,
  setHasTimeLimit,
  setTimeLimit,
  setPointsForSpeed,
  setAutoCheck,
  //TODO
  // setFile,
  // setType,
  setAnswerDescription,
  setNumberOfOptions,
  setAnswerValue,
} = slice.actions;

export default slice.reducer;
