import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "hostGame",
  initialState: {
    game: undefined,
    currentPage: 0,
    pin: 0,
  },
  reducers: {
    setGame: (state, { payload }) => {
      state.game = payload;
    },
    setPin: (state, { payload }) => {
      state.pin = payload;
    },
  },
});

export const { setGame, setPin } = slice.actions;

export default slice.reducer;
