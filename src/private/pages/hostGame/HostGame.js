import React, { useEffect } from "react";
import GameLayout from "../../../components/gamePage/GameLayout";
import { useHostGame, usePage } from "./hooks";

const HostGame = () => {
  const { initGame, game, pin } = useHostGame();
  const page = usePage();

  useEffect(() => {
    if (!game) initGame();
  }, [game, initGame]);

  if (game) {
    return (
      <>
        <>{pin}</>
        <GameLayout {...page} />
      </>
    );
  }
  return <div className="glass-tile" />;
};
export default HostGame;
