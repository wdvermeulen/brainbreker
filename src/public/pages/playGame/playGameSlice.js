import { createSlice } from "@reduxjs/toolkit";
import { getRandomName } from "../../../utils";

const playGameSlice = createSlice({
  name: "playGame",
  initialState: {
    userName: getRandomName(),
    currentPage: 0,
    userList: [],
  },
  reducers: {
    setGame: (state, { payload }) => {
      state.game = payload;
    },
    setUserName: (state, { payload }) => {
      state.userName = payload;
    },
    setUserList: (state, { payload }) => {
      state.userList = payload;
    },
    addUserToList: (state, { payload }) => {
      state.userList.push(payload);
    },
  },
});

export const { setGame, setUserName, setUserList, addUserToList } =
  playGameSlice.actions;

export default playGameSlice.reducer;
