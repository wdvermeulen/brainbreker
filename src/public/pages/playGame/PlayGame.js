import { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Col from "../../../components/Col";
import Logo from "../../../components/logo/Logo";
import { PeerContext } from "../../../peer/PeerConnection";
import { styled } from "../../../sharedStyles/theme";
import { useGame } from "../publicHomeHooks";
import { usePlayGame } from "./playGameHooks";

const StyledPlayGame = styled(Col, {
  maxWidth: "$columnMaxWidth",
  margin: "0 auto",
});

let isConnected = false;

const PlayGame = () => {
  const { game, setGame } = useGame();
  const { pin } = useParams();
  const playGame = usePlayGame();
  const { userName, userList } = playGame;
  const peerContext = useContext(PeerContext);
  const myID = useSelector((state) => state.peer.myID);

  useEffect(() => {
    if ((!game || game.pin.toString() !== pin) && pin.length > 3) setGame(pin);
  });

  useEffect(() => {
    if (game && !isConnected && myID) {
      peerContext.connectTo(game.hostPeerID, userName);
      isConnected = true;
    }
  });

  return (
    <StyledPlayGame>
      <Logo />
      {game ? (
        <>
          <div className="glass-tile center">
            <div>
              <label htmlFor="nameInput">Uw gebruikersnaam: </label>
            </div>
            <input
              id="nameInput"
              type="text"
              maxLength={64}
              minLength={1}
              {...userName}
            />
          </div>
          <div className="glass-tile center">
            <div>Verbonden met: {game?.name}</div>
            <ol>
              {Object.entries(userList).map(([id, user]) => {
                console.log("id, user", id, user);
                return <li key={id}>{user}</li>;
              })}
            </ol>
          </div>
        </>
      ) : (
        <div className="glass-tile center">Niet verbonden</div>
      )}
    </StyledPlayGame>
  );
};

export default PlayGame;
