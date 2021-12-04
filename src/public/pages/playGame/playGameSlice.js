import { createSlice } from "@reduxjs/toolkit";

const playGameSlice = createSlice({
  name: "playGame",
  initialState: {
    game: null,
    currentPage: 0,
  },
  reducers: {
    setGame: (state, { payload }) => {
      state.game = payload;
    },
  },
});

export const { setGame } = playGameSlice.actions;

export default playGameSlice.reducer;
