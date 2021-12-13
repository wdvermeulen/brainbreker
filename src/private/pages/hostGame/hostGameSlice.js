import { createSlice } from "@reduxjs/toolkit";

const hostGameSlice = createSlice({
  name: "hostGame",
  initialState: {
    game: undefined,
    currentPage: 0,
    pin: 0,
    userID: null,
  },
  reducers: {
    setGame: (state, { payload }) => {
      state.game = payload;
    },
    setPin: (state, { payload }) => {
      state.pin = payload;
    },
    setUserID: (state, { payload }) => {
      state.userID = payload;
    },
  },
});

export const { setGame, setPin, setUserID } = hostGameSlice.actions;

export default hostGameSlice.reducer;
