import React from "react";
import QRCode from "react-qr-code";
import Col from "../../../components/Col";
import { roomDefinition } from "../../../sharedResources/constants";
import { styled } from "../../../sharedStyles/theme";
import { url } from "../../../SiteRoute";
import { useGotoPage, useHostGame } from "./hostGameHooks";

const StyledLobby = styled(Col, {
  maxWidth: "30rem",
  margin: "0 auto",
});

const Lobby = () => {
  const { gotoRoom, game, pin, players } = useHostGame();
  const gotoPage = useGotoPage();
  const gameUrl = window.location.origin + url.PLAY_GAME + pin;

  return (
    <StyledLobby>
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
        <br />
        <button
          onClick={() => {
            gotoRoom(roomDefinition.GAME);
            gotoPage(0);
          }}
        >
          Spel starten
        </button>
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
    </StyledLobby>
  );
};

export default Lobby;
