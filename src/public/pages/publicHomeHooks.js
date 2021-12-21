import { useDispatch, useSelector } from "react-redux";
import PublicGameService from "../services/PublicGameService";
import { setGame as setGameToPlay } from "./playGame/playGameSlice";

function useGame() {
  const dispatch = useDispatch();
  const publicGameService = new PublicGameService();
  return {
    game: useSelector((state) => state.playGame.game),
    setGame: async (pin) => {
      const game = await publicGameService.read(pin);
      dispatch(setGameToPlay(game));
      return game;
    },
  };
}

export { useGame };
