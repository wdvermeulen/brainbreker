import React, { useEffect } from "react";
import QRCode from "qrcode.react";
import Col from "../../../components/Col";
import GameLayout from "../../../components/gamePage/GameLayout";
import { styled } from "../../../sharedStyles/theme";
import { url } from "../../../SiteRoute";
import { useHostGame, usePage } from "./hostGameHooks";
import PeerConnection from "../../../PeerConnection";

const StyledHostGame = styled(Col, {
  maxWidth: "30rem",
  margin: "0 auto",
});

const HostGame = () => {
  const { initGame, game, pin } = useHostGame();
  const page = usePage();
  const gameUrl = window.location.origin + url.PLAY_GAME + pin;

  useEffect(() => {
    if (!game) {
      initGame();
    }
  }, [game, initGame]);

  if (game) {
    return (
      <StyledHostGame>
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
      </StyledHostGame>
    );
  }
  return <div className="glass-tile" />;
};
export default HostGame;
