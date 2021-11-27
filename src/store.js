import { combineReducers, configureStore } from "@reduxjs/toolkit";
import editGame from "./private/pages/editGame/slice";

export default configureStore({
  reducer: combineReducers({
    editGame,
  }),
});
