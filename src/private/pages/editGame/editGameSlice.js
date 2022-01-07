import { createSlice } from "@reduxjs/toolkit";
import {
  checkTypeDefinition,
  pageTypeDefinition,
  timeSteps,
} from "../../../sharedResources/constants";

const defaultPage = {
  title: "",
  description: "",
  hasTimeLimit: false,
  timeLimit: 3,
  checkType: Object.keys(checkTypeDefinition)[0],
  pointsForSpeed: true,
  file: "",
  pageType: Object.keys(pageTypeDefinition)[0],
  numberOfOptions: 4,
  answers: [
    { description: "", value: 0 },
    { description: "", value: 0 },
    { description: "", value: 0 },
    { description: "", value: 0 },
  ],
};

const initialState = {
  name: "",
  currentPage: 0,
  pages: [{ ...defaultPage, id: Math.random().toString() }],
};

const editGameSlice = createSlice({
  name: "editGame",
  initialState,
  reducers: {
    setGame: (state, action) => {
      state.name = action.payload.name;
      state.pages = action.payload.pages;
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
    addNewPage: (state) => {
      state.pages.push({ ...defaultPage, id: Math.random().toString() });
      state.currentPage = state.pages.length - 1;
    },
    movePage: (state, { payload: { startIndex, endIndex } }) => {
      const result = Array.from(state.pages);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);

      state.pages = result;

      if (startIndex === state.currentPage) state.currentPage = endIndex;
      else if (startIndex < state.currentPage && endIndex >= state.currentPage)
        state.currentPage--;
      else if (startIndex > state.currentPage && endIndex <= state.currentPage)
        state.currentPage++;
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
        Math.max(action.payload, 0),
        timeSteps.length
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
      if (action.payload.value === "-" || action.payload.value === "")
        state.pages[state.currentPage].answers[
          action.payload.answerIndex
        ].value = action.payload.value;
      else
        state.pages[state.currentPage].answers[
          action.payload.answerIndex
        ].value = parseInt(action.payload.value);
    },
    reset: (state, payload) => {
      state = initialState;
    },
  },
});

export const {
  setGame,
  setName,
  setEditing,
  setCurrentPage,
  addNewPage,
  movePage,
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
  reset,
} = editGameSlice.actions;

export default editGameSlice.reducer;
