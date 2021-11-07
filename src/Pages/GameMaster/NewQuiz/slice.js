import { combineReducers, createSlice } from "@reduxjs/toolkit";
import slide from "./Slide/slice";

const slice = createSlice({
  name: "newQuiz",
  initialState: {
    currentSlide: 0,
    editing: "",
  },
  reducers: {
    setEditing: (state, action) => {
      state.editing = action.payload;
    },
    setCurrentSlide: (state, action) => {
      state.currentSlide = action.payload;
    },
    nextSlide: (state) => {
      state.currentSlide += 1;
    },
    previousSlide: (state) => {
      state.currentSlide -= 1;
    },
  },
});

export const { setEditing, setCurrentSlide, nextSlide, previousSlide } =
  slice.actions;

export default combineReducers({
  current: slice.reducer,
  slide: slide,
});
