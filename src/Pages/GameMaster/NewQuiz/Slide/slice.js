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
      state.timeLimit = action.payload;
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
      state.answers[action.payload.answer].description =
        action.payload.description;
    },
    setValue: (state, action) => {
      state.answers[action.payload.answer].value = action.payload.value;
    },
    setNumberOfOptions: (state, { payload }) => {
      state.numberOfOptions = Math.max(Math.min(payload, 99), 0);
      while (state.answers < 98 && state.answers.length < payload) {
        state.answers.push({ description: "", value: 0 });
      }
      while (
        state.answers > 1 &&
        state.answers.length > payload &&
        state.answers[state.answers.length - 1].description === ""
      ) {
        state.answers.pop();
      }
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
  setFile,
  setType,
  setAnswerDescription,
  setValue,
  setNumberOfOptions,
} = slice.actions;

export default slice.reducer;
