import { createSlice } from "@reduxjs/toolkit";
import { roomDefinition } from "../../../sharedResources/constants";
import { getRandomName } from "../../../utils";

const playGameSlice = createSlice({
  name: "playGame",
  initialState: {
    userName: getRandomName(),
    page: 0,
    room: roomDefinition.LOBBY,
  },
  reducers: {
    setGame: (state, { payload }) => {
      state.game = payload;
    },
    setPage: (state, { payload }) => {
      state.page = payload;
    },
    setUserName: (state, { payload }) => {
      state.userName = payload;
    },
    gotoRoom: (state, { payload }) => {
      state.room = payload;
    },
  },
});

export const { setGame, setPage, setUserName, gotoRoom } =
  playGameSlice.actions;

export default playGameSlice.reducer;
