import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PrivateGameService from "../../services/PrivateGameService";

const HostGame = () => {
  const { gameID } = useParams();
  const [game, setGame] = useState();
  const privateGameService = new PrivateGameService();

  async function fetchGame(gameID) {
    const game = await privateGameService.read(gameID);
    setGame(game);
  }

  useEffect(() => {
    if (!game) fetchGame(gameID);
  });

  console.log(game);
  return <>{game?.name}</>;
};
export default HostGame;
