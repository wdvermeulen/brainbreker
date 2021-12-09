import React, { useEffect } from "react";
import QRCode from "qrcode.react";
import GameLayout from "../../../components/gamePage/GameLayout";
import { url } from "../../../SiteRoute";
import { useHostGame, usePage } from "./hostGameHooks";

const HostGame = () => {
  const { initGame, game, pin } = useHostGame();
  const page = usePage();
  const gameUrl = window.location.origin + url.PLAY_GAME + pin;

  useEffect(() => {
    if (!game) initGame();
  }, [game, initGame]);

  if (game) {
    return (
      <>
        <div className="glass-tile">
          <h2>{game.name}</h2>
          Startcode: {pin}
          <br />
          {gameUrl} <br />
          <QRCode
            style={{ border: "10px solid white", borderRadius: "5px" }}
            value={gameUrl}
          />
        </div>
        <div className="glass-tile">Er zijn nog geen deelnemers.</div>
        {false && <GameLayout {...page} />}
      </>
    );
  }
  return <div className="glass-tile" />;
};
export default HostGame;
