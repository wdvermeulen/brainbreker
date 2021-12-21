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
    connectUser: (state, { payload: { peerID, username } }) => {
      state.peers[peerID] = username;
    },
    disconnectUser: (state, { payload }) => {
      delete state.peers[payload];
    },
    setConnectedUsers: (state, { payload }) => {
      state.peers = payload;
    },
  },
});

export const { setMyID, connectUser, disconnectUser, setConnectedUsers } =
  peerSlice.actions;

export default peerSlice.reducer;
