import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PeerContext } from "../../../peer/PeerConnection";
import { commandDefinition } from "../../../peer/peerConstants";
import { setUserName } from "./playGameSlice";

function usePlayGame() {
  const dispatch = useDispatch();

  return {
    userName: {
      value: useSelector((state) => state.playGame.userName),
      onChange: (e) => dispatch(setUserName(e.target.value)),
    },
    userList: useSelector((state) => state.peer.peers),
    room: useSelector((state) => state.playGame.room),
  };
}

function usePage() {
  const peerContext = useContext(PeerContext);
  return {
    questionTitle: {
      value: useSelector((state) => state.playGame.page?.title),
    },
    questionDescription: {
      value: useSelector((state) => state.playGame.page?.description),
    },
    pageType: {
      value: useSelector((state) => state.playGame.page?.type),
    },
    timeLimit: {
      value: useSelector((state) => state.playGame.page?.timeLimit),
    },
    useAnswerDescription: function (answerIndex) {
      return {
        value: useSelector(
          (state) => state.playGame.page?.answers[answerIndex].description
        ),
      };
    },
    numberOfOptions: {
      value: useSelector((state) => state.playGame.page?.numberOfOptions),
    },
    currentPage: useSelector((state) => state.playGame.page?.currentPage),
    giveAnswer: (answer) => {
      peerContext.send({
        command: commandDefinition.ADD_ANSWER,
        value: answer,
      });
    },
  };
}

export { usePlayGame, usePage };
