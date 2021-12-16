import { createSlice } from "@reduxjs/toolkit";

const hostGameSlice = createSlice({
  name: "hostGame",
  initialState: {
    game: undefined,
    currentPage: 0,
    pin: 0,
    userList: [],
  },
  reducers: {
    setGame: (state, { payload }) => {
      state.game = payload;
    },
    setPin: (state, { payload }) => {
      state.pin = payload;
    },
    addUserToList: (state, { payload }) => {
      state.userList.push(payload);
    },
  },
});

export const { setGame, setPin, addUserToList } = hostGameSlice.actions;

export default hostGameSlice.reducer;
