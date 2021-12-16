import { combineReducers, configureStore } from "@reduxjs/toolkit";
import peer from "./peer/peerSlice";
import editGame from "./private/pages/editGame/editGameSlice";
import hostGame from "./private/pages/hostGame/hostGameSlice";
import playGame from "./public/pages/playGame/playGameSlice";

export default configureStore({
  reducer: combineReducers({
    peer,
    editGame,
    hostGame,
    playGame,
  }),
});
