import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import GameLayout from "../../../components/gamePage/GameLayout";
import { rooms } from "./constants";
import { useHostGame, usePage } from "./hostGameHooks";
import Lobby from "./Lobby";

const HostGame = () => {
  const { initGame, currentRoom, myID, game } = useHostGame();
  const page = usePage();
  const { gameID } = useParams();

  useEffect(() => {
    if ((!game || game?.id !== gameID) && myID.length > 0) {
      initGame(myID);
    }
  }, [myID, game, gameID, initGame]);
  console.log(currentRoom);
  if (game) {
    if (currentRoom === rooms.LOBBY) return <Lobby />;
    if (currentRoom === rooms.GAME) return <GameLayout {...page} />;
  }
  return <div className="glass-tile" />;
};
export default HostGame;
