import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PeerContext } from "../../../peer/PeerConnection";
import PrivateGameService from "../../services/PrivateGameService";
import PublicGameService from "../../services/PublicGameService";
import {
  gotoRoom as gotoRoomPrivate,
  setCurrentPage,
  setGame,
  setPin,
} from "./hostGameSlice";
import {
  gotoRoom as gotoRoomPublic,
  setPage,
} from "../../../public/pages/playGame/playGameSlice";

function useHostGame() {
  const dispatch = useDispatch();
  const { gameID } = useParams();
  const peerContext = useContext(PeerContext);
  const initGame = async (myID) => {
    const {
      data: { getPrivateGame },
    } = await new PrivateGameService().read(gameID);
    dispatch(setGame(getPrivateGame));
    try {
      const game = await new PublicGameService().readByPrivateGameID(gameID);
      dispatch(setPin(game.pin));
      await new PublicGameService().update({ id: game.id, hostPeerID: myID });
    } catch (e1) {
      console.log("Creating a new game. Haven't found an existing game: ", e1);
      try {
        const pin = await new PublicGameService().create(getPrivateGame, myID);
        dispatch(setPin(pin));
      } catch (e2) {
        console.error("useHostGame.initGame() error", e2, e1);
      }
    }
  };

  const gotoRoom = async (room) => {
    peerContext.broadcast(gotoRoomPublic(room));
    dispatch(gotoRoomPrivate(room));
  };

  return {
    initGame,
    gotoRoom,
    currentRoom: useSelector((state) => state.hostGame.currentRoom),
    myID: useSelector((state) => state.peer.myID),
    game: useSelector((state) => state.hostGame.game),
    pin: useSelector((state) => state.hostGame.pin),
    players: useSelector((state) => state.peer.peers),
  };
}

function useGotoPage() {
  const dispatch = useDispatch();
  const peerContext = useContext(PeerContext);
  const pages = useSelector((state) => state.hostGame.game.pages);

  return (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
    peerContext.broadcast(setPage(pages[pageNumber]));
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
            state.hostGame.game?.pages[state.hostGame.currentPage].answers[
              answerIndex
            ].description
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
export { useHostGame, useGotoPage, usePage };
