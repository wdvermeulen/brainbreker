import { combineReducers, configureStore } from "@reduxjs/toolkit";
import newGame from "../pages/loggedIn/newGame/slice";

export default configureStore({
  reducer: combineReducers({
    newGame,
  }),
});
