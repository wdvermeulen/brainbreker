import React from "react";
import GameLayout from "../../../components/gamePage/GameLayout";
import { usePage } from "./playGameHooks";

const GameRoom = () => {
  const page = usePage();
  return <GameLayout {...page} />;
};

export default GameRoom;
