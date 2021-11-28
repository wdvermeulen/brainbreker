import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "hostGame",
  initialState: {
    game: {
      name: "",
      currentPage: 0,
      pages: [],
    },
    reducers: {
      setGame: (state, { payload }) => {
        state.game = payload;
      },
    },
  },
});

export const { setGame } = slice.actions;

export default slice.reducer;
