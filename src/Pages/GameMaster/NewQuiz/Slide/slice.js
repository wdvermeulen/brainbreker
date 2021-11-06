import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "slides",
  initialState: {
    question: {
      title: "",
      description: "",
    },
    type: 0,
    numberOfOptions: 4,
    autoCheck: true,
    time: 500,
    file: "",
    answers: [
      { description: "", value: 0 },
      { description: "", value: 0 },
      { description: "", value: 0 },
      { description: "", value: 0 },
    ],
  },
  reducers: {
    // setEditing: (state, action) => {
    //   state.editing = action.payload;
    // },
    // setCurrentSlide: (state, action) => {
    //   state.currentSlide = action.payload;
    // },
    // nextSlide: (state) => {
    //   state.currentSlide += 1;
    // },
    // previousSlide: (state) => {
    //   state.currentSlide -= 1;
    // },
  },
});

// export const { setEditing, setCurrentSlide, nextSlide, previousSlide } =
//   slice.actions;

export default slice.reducer;
