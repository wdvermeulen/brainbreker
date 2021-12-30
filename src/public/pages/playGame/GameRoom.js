import React from "react";
import GameLayout from "../../../components/gamePage/GameLayout";
import { usePage } from "./playGameHooks";

const GameRoom = () => {
  const page = usePage();
  if (page.currentPage !== undefined) return <GameLayout {...page} />;
  else return <></>;
};

export default GameRoom;
