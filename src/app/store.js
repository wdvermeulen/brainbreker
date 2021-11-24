import { combineReducers, configureStore } from "@reduxjs/toolkit";
import newGame from "../pages/private/newGame/slice";

export default configureStore({
  reducer: combineReducers({
    newGame,
  }),
});
