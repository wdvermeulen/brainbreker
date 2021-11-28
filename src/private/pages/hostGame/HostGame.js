import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import GameLayout from "../../../components/gamePage/GameLayout";
import PrivateGameService from "../../services/PrivateGameService";
import { useGame, usePage } from "./hooks";

const HostGame = () => {
  const { gameID } = useParams();
  const [game, setGame] = useGame();
  const page = usePage();

  const privateGameService = new PrivateGameService();

  async function fetchGame() {
    setGame(await privateGameService.read(gameID));
  }

  useEffect(() => {
    if (!game) fetchGame();
  });

  console.log(game);

  if (game) {
    return <GameLayout {...page} />;
  }
  return <div className="glass-tile" />;
};
export default HostGame;
