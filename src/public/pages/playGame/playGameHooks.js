import { useDispatch, useSelector } from "react-redux";
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
  };
}

export { usePlayGame, usePage };
