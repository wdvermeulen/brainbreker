import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "hostGame",
  initialState: {
    game: undefined,
    currentPage: 0,
  },
  reducers: {
    setGame: (state, { payload }) => {
      state.game = payload;
    },
  },
});

export const { setGame } = slice.actions;

export default slice.reducer;
