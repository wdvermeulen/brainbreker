import { createSlice } from "@reduxjs/toolkit";

const peerSlice = createSlice({
  name: "peer",
  initialState: {
    myID: "",
    peers: {},
  },
  reducers: {
    setMyID: (state, { payload }) => {
      state.myID = payload;
    },
    userConnected: (state, { payload: { username, connection } }) => {
      state.peers[username] = connection;
    },
    userDisconnected: (state, { payload }) => {
      delete state.peers[payload];
    },
    setConnectedUsers: (state, { payload }) => {
      state.peers = payload;
    },
  },
});

export const { setMyID, userConnected, userDisconnected, setConnectedUsers } =
  peerSlice.actions;

export default peerSlice.reducer;
