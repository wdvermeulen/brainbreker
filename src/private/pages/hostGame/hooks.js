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

export { useGame };
