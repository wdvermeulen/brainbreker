import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PrivateGameService from "../../services/PrivateGameService";
import PublicGameService from "../../services/PublicGameService";
import { setGame, setPin } from "./slice";

function useHostGame() {
  const dispatch = useDispatch();
  const { gameID } = useParams();
  console.log("now");
  return {
    initGame: async function () {
      const newGame = await new PrivateGameService().read(gameID);
      dispatch(setGame(newGame));
      dispatch(setPin(await new PublicGameService().create(newGame)));
    },
    game: useSelector((state) => state.hostGame.game),
    pin: useSelector((state) => state.hostGame.pin),
  };
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
export { useHostGame, usePage };
