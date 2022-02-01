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
  pages: [{ ...defaultPage, id: Math.random().toString() }],
};

const editGameSlice = createSlice({
  name: "editGame",
  initialState,
  reducers: {
    setGame: (state, action) => {
      state.name = action.payload.name;
      state.pages = action.payload.pages.map((page) => ({
        ...page,
        id: Math.random().toString(),
      }));
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEditing: (state, action) => {
      state.editing = action.payload;
    },
    addNewPage: (state) => {
      state.pages.push({ ...defaultPage, id: Math.random().toString() });
    },
    movePage: (state, { payload: { startIndex, endIndex } }) => {
      const result = Array.from(state.pages);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);

      state.pages = result;

      // if (startIndex === state.currentPage) state.currentPage = endIndex;
      // else if (startIndex < state.currentPage && endIndex >= state.currentPage)
      //   state.currentPage--;
      // else if (startIndex > state.currentPage && endIndex <= state.currentPage)
      //   state.currentPage++;
    },
    removePage: (state, { payload }) => {
      if (payload >= state.pages.length) {
        state.pages.splice(payload, 1);
      } else if (state.pages.length !== 0) {
        state.pages.splice(payload, 1);
      } else {
        state.pages[payload] = defaultPage;
      }
    },
    setQuestionTitle: (state, { payload: { title, pageNumber } }) => {
      state.pages[pageNumber].title = title;
    },
    setQuestionDescription: (
      state,
      { payload: { description, pageNumber } }
    ) => {
      state.pages[pageNumber].description = description;
    },
    setHasTimeLimit: (state, { payload: { hasTimeLimit, pageNumber } }) => {
      state.pages[pageNumber].hasTimeLimit = hasTimeLimit;
    },
    setTimeLimit: (state, { payload: { timeLimit, pageNumber } }) => {
      state.pages[pageNumber].timeLimit = Math.min(
        Math.max(timeLimit, 0),
        timeSteps.length
      );
    },
    setCheckType: (state, { payload: { checkType, pageNumber } }) => {
      state.pages[pageNumber].checkType = checkType;
    },
    setPointsForSpeed: (state, { payload: { pointsForSpeed, pageNumber } }) => {
      state.pages[pageNumber].pointsForSpeed = pointsForSpeed;
    },
    setFile: (state, { payload: { file, pageNumber } }) => {
      state.pages[pageNumber].file = file;
    },
    setPageType: (state, { payload: { pageType, pageNumber } }) => {
      state.pages[pageNumber].pageType = pageType;
    },
    setAnswerDescription: (
      state,
      { payload: { description, answerIndex, pageNumber } }
    ) => {
      state.pages[pageNumber].answers[answerIndex].description = description;
    },
    setNumberOfOptions: (
      state,
      { payload: { numberOfOptions, pageNumber } }
    ) => {
      state.pages[pageNumber].numberOfOptions = Math.max(
        Math.min(numberOfOptions, 99),
        0
      );
      while (
        state.pages[pageNumber].answers.length < 98 &&
        state.pages[pageNumber].answers.length < numberOfOptions
      ) {
        state.pages[pageNumber].answers.push({
          description: "",
          value: 0,
        });
      }
      while (
        state.pages[pageNumber].answers.length > 1 &&
        state.pages[pageNumber].answers.length > numberOfOptions &&
        state.pages[pageNumber].answers[
          state.pages[pageNumber].answers.length - 1
        ].description === ""
      ) {
        state.pages[pageNumber].answers.pop();
      }
    },
    setAnswerValue: (
      state,
      { payload: { value, answerIndex, pageNumber } }
    ) => {
      if (value === "-" || value === "")
        state.pages[pageNumber].answers[answerIndex].value = value;
      else state.pages[pageNumber].answers[answerIndex].value = parseInt(value);
    },
    reset: (state) => {
      state = initialState;
    },
  },
});

export const {
  setGame,
  setName,
  setEditing,
  addNewPage,
  movePage,
  removePage,
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
