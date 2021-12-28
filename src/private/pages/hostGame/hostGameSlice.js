import { createSlice } from "@reduxjs/toolkit";
import { roomDefinition } from "../../../sharedResources/constants";

const hostGameSlice = createSlice({
  name: "hostGame",
  initialState: {
    game: undefined,
    currentRoom: roomDefinition.LOBBY,
    currentPage: 0,
    pin: 0,
    userList: [],
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
    addUserToList: (state, { payload }) => {
      state.userList.push(payload);
    },
    gotoRoom: (state, { payload }) => {
      state.currentRoom = payload;
    },
  },
});

export const { setGame, setCurrentPage, setPin, addUserToList, gotoRoom } =
  hostGameSlice.actions;

export default hostGameSlice.reducer;
