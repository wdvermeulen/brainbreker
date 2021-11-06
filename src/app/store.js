import { combineReducers, configureStore } from "@reduxjs/toolkit";
import newQuizReducer from "../Pages/GameMaster/NewQuiz/slice";
import slidesReducer from "../Pages/GameMaster/NewQuiz/Slide/slice";

export default configureStore({
  reducer: {
    newQuiz: combineReducers(newQuizReducer, { slides: slidesReducer }),
  },
});
