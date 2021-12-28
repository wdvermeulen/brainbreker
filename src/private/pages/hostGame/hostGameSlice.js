import { createSlice } from "@reduxjs/toolkit";
import { roomDefinition } from "../../../sharedResources/constants";

const hostGameSlice = createSlice({
  name: "hostGame",
  initialState: {
    game: undefined,
    currentRoom: roomDefinition.LOBBY,
    currentPage: 0,
    pin: 0,
    answers: {},
  },
  reducers: {
    setGame: (state, { payload }) => {
      state.game = payload;
    },
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload;
    },
    setPin: (state, { payload }) => {
      state.pin = payload;
    },
    gotoRoom: (state, { payload }) => {
      state.currentRoom = payload;
    },
    addAnswer: (state, { payload: { key, value } }) => {
      state.answers[key] = value;
    },
  },
});

export const { setGame, setCurrentPage, setPin, gotoRoom, addAnswer } =
  hostGameSlice.actions;

export default hostGameSlice.reducer;
