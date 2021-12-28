import { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PeerContext } from "../../../peer/PeerConnection";
import { roomDefinition } from "../../../sharedResources/constants";
import { useGame } from "../publicHomeHooks";
import GameRoom from "./GameRoom";
import Lobby from "./Lobby";
import { usePlayGame } from "./playGameHooks";

let isConnected = false;

const PlayGame = () => {
  const { game, setGame } = useGame();
  const { pin } = useParams();
  const { userName, room } = usePlayGame();
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

  if (!game) return <div className="glass-tile center">Niet verbonden</div>;

  if (room === roomDefinition.LOBBY) return <Lobby />;
  if (room === roomDefinition.GAME) return <GameRoom />;
};

export default PlayGame;
