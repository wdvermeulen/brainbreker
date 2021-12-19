import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PrivateGameService from "../../services/PrivateGameService";
import PublicGameService from "../../services/PublicGameService";
import { setGame, setPin } from "./hostGameSlice";

function useHostGame() {
  const dispatch = useDispatch();
  const { gameID } = useParams();

  const initGame = async (myID) => {
    const {
      data: { getPrivateGame },
    } = await new PrivateGameService().read(gameID);
    dispatch(setGame(getPrivateGame));
    try {
      const game = await new PublicGameService().readByPrivateGameID(gameID);
      dispatch(setPin(game.pin));
      game.hostID = myID;
      await new PublicGameService().update(game);
    } catch (e1) {
      try {
        const pin = await new PublicGameService().create(getPrivateGame, myID);
        dispatch(setPin(pin));
      } catch (e2) {
        console.error("useHostGame.initGame() error", e2, e1);
      }
    }
  };

  return {
    initGame,
    myID: useSelector((state) => state.peer.myID),
    game: useSelector((state) => state.hostGame.game),
    pin: useSelector((state) => state.hostGame.pin),
    players: useSelector((state) => state.peer.peers),
  };
}

function usePage() {
  return {
    questionTitle: {
      value: useSelector(
        (state) => state.hostGame.game?.pages[state.hostGame.currentPage].title
      ),
    },
    questionDescription: {
      value: useSelector(
        (state) =>
          state.hostGame.game?.pages[state.hostGame.currentPage].description
      ),
    },
    pageType: {
      value: useSelector((state) => state.hostGame.game?.type),
    },
    timeLimit: {
      value: useSelector(
        (state) =>
          state.hostGame.game?.pages[state.hostGame.currentPage].timeLimit
      ),
    },
    useAnswerDescription: function (answerIndex) {
      return {
        value: useSelector(
          (state) =>
            state.hostGame.game?.pages[state.hostGame.currentPage]
              .privateAnswers[answerIndex].description
        ),
      };
    },
    numberOfOptions: {
      value: useSelector(
        (state) =>
          state.hostGame.game?.pages[state.hostGame.currentPage].numberOfOptions
      ),
    },
    currentPage: useSelector((state) => state.hostGame.currentPage),
  };
}
export { useHostGame, usePage };
