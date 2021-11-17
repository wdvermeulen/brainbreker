import { combineReducers, createSlice } from "@reduxjs/toolkit";
import slide from "./Slide/slice";

function storeCurrentSlide(state, slide) {
  if (state.currentSlide <= state.slides.length) state.slides.push(slide);
  else state.slides[state.currentSlide] = slide;
}

const slice = createSlice({
  name: "newQuiz",
  initialState: {
    currentSlide: 0,
    editing: "",
    slides: [],
  },
  reducers: {
    setEditing: (state, action) => {
      state.editing = action.payload;
    },
    setCurrentSlide: (state, action) => {
      storeCurrentSlide(state, action.payload.slide);
      state.currentSlide = action.payload.slideNumber;
    },
    nextSlide: (state, action) => {
      console.log(state.currentSlide);

      storeCurrentSlide(state, action.payload);
      state.currentSlide += 1;
    },
    previousSlide: (state, action) => {
      storeCurrentSlide(state, action.payload);
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
