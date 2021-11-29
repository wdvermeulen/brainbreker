import { combineReducers, configureStore } from "@reduxjs/toolkit";
import editGame from "./private/pages/editGame/slice";
import hostGame from "./private/pages/hostGame/slice";
import playGame from "./public/pages/playGame/slice";

export default configureStore({
  reducer: combineReducers({
    editGame,
    hostGame,
    playGame,
  }),
});
