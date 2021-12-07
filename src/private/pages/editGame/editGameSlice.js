import { createSlice } from "@reduxjs/toolkit";
import { checkTypeEnum, pageTypeEnum } from "../../../sharedResources/enum";

const defaultPage = {
  title: "",
  description: "",
  hasTimeLimit: true,
  timeLimit: 10,
  checkType: Object.keys(checkTypeEnum)[0],
  pointsForSpeed: true,
  file: "",
  pageType: Object.keys(pageTypeEnum)[0],
  numberOfOptions: 4,
  answers: [
    { description: "", value: 0 },
    { description: "", value: 0 },
    { description: "", value: 0 },
    { description: "", value: 0 },
  ],
};

const editGameSlice = createSlice({
  name: "editGame",
  initialState: {
    name: "Game 1",
    currentPage: 0,
    pages: [defaultPage],
    _version: 0,
  },
  reducers: {
    setGame: (state, action) => {
      state.name = action.payload.name;
      state.pages = action.payload.pages;
      state._version = action.payload._version;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEditing: (state, action) => {
      state.editing = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = Math.max(
        Math.min(action.payload.pageNumber, state.pages.length),
        0
      );
    },
    nextPage: (state) => {
      if (state.currentPage <= state.pages.length)
        state.pages.push(defaultPage);
      state.currentPage += 1;
    },
    previousPage: (state) => {
      state.currentPage = Math.max(state.currentPage - 1, 0);
    },

    resetCurrentPage: (state) => {
      console.log("resetSlice");
      state.pages[state.currentPage] = defaultPage;
    },
    removeCurrentPage: (state) => {
      if (state.currentPage >= state.pages.length) {
        state.currentPage -= 1;
        state.pages.splice(state.currentPage + 1, 1);
      } else if (state.pages.length !== 0) {
        state.pages.splice(state.currentPage, 1);
      } else {
        state.pages[state.currentPage] = defaultPage;
      }
    },
    setQuestionTitle: (state, action) => {
      state.pages[state.currentPage].title = action.payload;
    },
    setQuestionDescription: (state, action) => {
      state.pages[state.currentPage].description = action.payload;
    },
    setHasTimeLimit: (state, action) => {
      state.pages[state.currentPage].hasTimeLimit = action.payload;
    },
    setTimeLimit: (state, action) => {
      state.pages[state.currentPage].timeLimit = Math.min(
        Math.max(action.payload, 5),
        1800
      );
    },
    setCheckType: (state, action) => {
      state.pages[state.currentPage].checkType = action.payload;
    },
    setPointsForSpeed: (state, action) => {
      state.pages[state.currentPage].pointsForSpeed = action.payload;
    },
    setFile: (state, action) => {
      state.pages[state.currentPage].file = action.payload;
    },
    setPageType: (state, action) => {
      state.pages[state.currentPage].pageType = action.payload;
    },
    setAnswerDescription: (state, action) => {
      state.pages[state.currentPage].answers[
        action.payload.answerIndex
      ].description = action.payload.description;
    },
    setNumberOfOptions: (state, action) => {
      state.pages[state.currentPage].numberOfOptions = Math.max(
        Math.min(action.payload, 99),
        0
      );
      while (
        state.pages[state.currentPage].answers.length < 98 &&
        state.pages[state.currentPage].answers.length < action.payload
      ) {
        state.pages[state.currentPage].answers.push({
          description: "",
          value: 0,
        });
      }
      while (
        state.pages[state.currentPage].answers.length > 1 &&
        state.pages[state.currentPage].answers.length > action.payload &&
        state.pages[state.currentPage].answers[
          state.pages[state.currentPage].answers.length - 1
        ].description === ""
      ) {
        state.pages[state.currentPage].answers.pop();
      }
    },
    setAnswerValue: (state, action) => {
      state.pages[state.currentPage].answers[action.payload.answerIndex].value =
        action.payload.value;
    },
  },
});

export const {
  setGame,
  setName,
  setEditing,
  setCurrentPage,
  nextPage,
  previousPage,
  resetCurrentPage,
  removeCurrentPage,
  setQuestionTitle,
  setQuestionDescription,
  setHasTimeLimit,
  setTimeLimit,
  setPointsForSpeed,
  setCheckType,
  //TODO
  // setFile,
  setPageType,
  setAnswerDescription,
  setNumberOfOptions,
  setAnswerValue,
} = editGameSlice.actions;

export default editGameSlice.reducer;
