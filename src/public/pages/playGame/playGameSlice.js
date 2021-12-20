import { createSlice } from "@reduxjs/toolkit";
import { getRandomName } from "../../../utils";

const playGameSlice = createSlice({
  name: "playGame",
  initialState: {
    userName: getRandomName(),
    currentPage: 0,
    // userList: null,
  },
  reducers: {
    setGame: (state, { payload }) => {
      state.game = payload;
    },
    setUserName: (state, { payload }) => {
      state.userName = payload;
    },
  },
});

export const { setGame, setUserName } = playGameSlice.actions;

export default playGameSlice.reducer;
