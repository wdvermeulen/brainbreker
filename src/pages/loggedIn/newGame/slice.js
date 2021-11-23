import { createSlice } from "@reduxjs/toolkit";
import { checkTypeEnum, questionTypeEnum } from "../../../sharedResources/enum";

const defaultSlide = {
  title: "",
  description: "",
  hasTimeLimit: true,
  timeLimit: 10,
  checkType: Object.keys(checkTypeEnum)[0],
  pointsForSpeed: true,
  file: "",
  questionType: Object.keys(questionTypeEnum)[0],
  numberOfOptions: 4,
  answers: [
    { description: "", value: 0 },
    { description: "", value: 0 },
    { description: "", value: 0 },
    { description: "", value: 0 },
  ],
};

const slice = createSlice({
  name: "newGame",
  initialState: {
    name: "Quiz 1",
    currentSlide: 0,
    slides: [defaultSlide],
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEditing: (state, action) => {
      state.editing = action.payload;
    },
    setCurrentSlide: (state, action) => {
      state.currentSlide = Math.max(
        Math.min(action.payload.slideNumber, state.slides.length),
        0
      );
    },
    nextSlide: (state) => {
      if (state.currentSlide <= state.slides.length)
        state.slides.push(defaultSlide);
      state.currentSlide += 1;
    },
    previousSlide: (state) => {
      state.currentSlide = Math.max(state.currentSlide - 1, 0);
    },

    resetCurrentSlide: (state) => {
      console.log("resetSlice");
      state.slides[state.currentSlide] = defaultSlide;
    },
    removeCurrentSlide: (state) => {
      if (state.currentSlide >= state.slides.length) {
        state.currentSlide -= 1;
        state.slides.splice(state.currentSlide + 1, 1);
      } else if (state.slides.length !== 0) {
        state.slides.splice(state.currentSlide, 1);
      } else {
        state.slides[state.currentSlide] = defaultSlide;
      }
    },
    setQuestionTitle: (state, action) => {
      state.slides[state.currentSlide].title = action.payload;
    },
    setQuestionDescription: (state, action) => {
      state.slides[state.currentSlide].description = action.payload;
    },
    setHasTimeLimit: (state, action) => {
      state.slides[state.currentSlide].hasTimeLimit = action.payload;
    },
    setTimeLimit: (state, action) => {
      state.slides[state.currentSlide].timeLimit = Math.min(
        Math.max(action.payload, 5),
        1800
      );
    },
    setCheckType: (state, action) => {
      state.slides[state.currentSlide].checkType = action.payload;
    },
    setPointsForSpeed: (state, action) => {
      state.slides[state.currentSlide].pointsForSpeed = action.payload;
    },
    setFile: (state, action) => {
      state.slides[state.currentSlide].file = action.payload;
    },
    setQuestionType: (state, action) => {
      state.slides[state.currentSlide].questionType = action.payload;
    },
    setAnswerDescription: (state, action) => {
      state.slides[state.currentSlide].answers[
        action.payload.answerIndex
      ].description = action.payload.description;
    },
    setNumberOfOptions: (state, action) => {
      state.slides[state.currentSlide].numberOfOptions = Math.max(
        Math.min(action.payload, 99),
        0
      );
      while (
        state.slides[state.currentSlide].answers.length < 98 &&
        state.slides[state.currentSlide].answers.length < action.payload
      ) {
        state.slides[state.currentSlide].answers.push({
          description: "",
          value: 0,
        });
      }
      while (
        state.slides[state.currentSlide].answers.length > 1 &&
        state.slides[state.currentSlide].answers.length > action.payload &&
        state.slides[state.currentSlide].answers[
          state.slides[state.currentSlide].answers.length - 1
        ].description === ""
      ) {
        state.slides[state.currentSlide].answers.pop();
      }
    },
    setAnswerValue: (state, action) => {
      state.slides[state.currentSlide].answers[
        action.payload.answerIndex
      ].value = action.payload.value;
    },
  },
});

export const {
  setName,
  setEditing,
  setCurrentSlide,
  nextSlide,
  previousSlide,
  resetCurrentSlide,
  removeCurrentSlide,
  setQuestionTitle,
  setQuestionDescription,
  setHasTimeLimit,
  setTimeLimit,
  setPointsForSpeed,
  setCheckType,
  //TODO
  // setFile,
  setQuestionType,
  setAnswerDescription,
  setNumberOfOptions,
  setAnswerValue,
} = slice.actions;

export default slice.reducer;
