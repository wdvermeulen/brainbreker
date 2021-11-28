import { combineReducers, configureStore } from "@reduxjs/toolkit";
import editGame from "./private/pages/editGame/slice";
import hostGame from "./private/pages/hostGame/slice";

export default configureStore({
  reducer: combineReducers({
    editGame,
    hostGame,
  }),
});
