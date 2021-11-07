import { combineReducers, configureStore } from "@reduxjs/toolkit";
import newQuiz from "../Pages/GameMaster/NewQuiz/slice";

export default configureStore({
  reducer: combineReducers({
    newQuiz,
  }),
});
