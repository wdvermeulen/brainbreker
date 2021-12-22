import React, { useEffect } from "react";
import QRCode from "react-qr-code";
import { useParams } from "react-router-dom";
import Col from "../../../components/Col";
import GameLayout from "../../../components/gamePage/GameLayout";
import { styled } from "../../../sharedStyles/theme";
import { url } from "../../../SiteRoute";
import { useHostGame, usePage } from "./hostGameHooks";

const StyledHostGame = styled(Col, {
  maxWidth: "30rem",
  margin: "0 auto",
});

const HostGame = () => {
  const { initGame, myID, game, pin, players } = useHostGame();
  const page = usePage();
  const gameUrl = window.location.origin + url.PLAY_GAME + pin;
  const { gameID } = useParams();

  console.log("players", players);

  useEffect(() => {
    if ((!game || game?.id !== gameID) && myID.length > 0) {
      initGame(myID);
    }
  }, [myID, game, gameID, initGame]);

  if (game) {
    return (
      <StyledHostGame>
        <div className="glass-tile">
          <h2>{game.name}</h2>
          Startcode: {pin}
          <br />
          {gameUrl} <br />
          <QRCode
            style={{
              marginTop: "20px",
              border: "10px solid white",
              borderRadius: "5px",
              boxSizing: "content-box",
            }}
            value={gameUrl}
            size={128}
          />
        </div>
        <div className="glass-tile">
          {players ? (
            <ol>
              {Object.entries(players).map(([id, name]) => (
                <li key={id}>{name}</li>
              ))}
            </ol>
          ) : (
            "Er zijn nog geen deelnemers."
          )}
        </div>
        {false && <GameLayout {...page} />}
      </StyledHostGame>
    );
  }
  return <div className="glass-tile" />;
};
export default HostGame;
