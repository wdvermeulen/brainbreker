import { useDispatch, useSelector } from "react-redux";
import { setGame } from "./slice";

function useGame() {
  const dispatch = useDispatch();
  return [
    useSelector((state) => state.hostGame.game),
    (game) => {
      dispatch(setGame(game));
    },
  ];
}

function usePage() {
  return {
    questionTitle: {
      value: useSelector(
        (state) =>
          state.hostGame.game?.pages.items[state.hostGame.currentPage].title
      ),
    },
    questionDescription: {
      value: useSelector(
        (state) =>
          state.hostGame.game?.pages.items[state.hostGame.currentPage]
            .description
      ),
    },
    questionType: {
      value: useSelector((state) => state.hostGame.game?.type),
    },
    timeLimit: {
      value: useSelector(
        (state) =>
          state.hostGame.game?.pages.items[state.hostGame.currentPage].timeLimit
      ),
    },
    useAnswerDescription: function (answerIndex) {
      return {
        value: useSelector(
          (state) =>
            state.hostGame.game?.pages.items[state.hostGame.currentPage]
              .privateAnswers.items[answerIndex].description
        ),
      };
    },
    numberOfOptions: {
      value: useSelector(
        (state) =>
          state.hostGame.game?.pages.items[state.hostGame.currentPage]
            .numberOfOptions
      ),
    },
    currentPage: useSelector((state) => state.hostGame.currentPage),
  };
}
export { useGame, usePage };
