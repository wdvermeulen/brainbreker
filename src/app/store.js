import { combineReducers, configureStore } from "@reduxjs/toolkit";
import editGame from "../pages/private/editGame/slice";

export default configureStore({
  reducer: combineReducers({
    editGame,
  }),
});
