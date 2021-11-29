import { useDispatch, useSelector } from "react-redux";
import PublicGameService from "../services/PublicGameService";
import { setGame as setGameToPlay } from "./playGame/slice";

function useGame() {
  const dispatch = useDispatch();
  const publicGameService = new PublicGameService();
  return {
    game: useSelector((state) => state.playGame.game),
    setGame: async (pin) =>
      dispatch(setGameToPlay(await publicGameService.read(pin))),
  };
}

export { useGame };
