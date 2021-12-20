import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PeerContext } from "../../../peer/PeerConnection";
import { setUserName } from "./playGameSlice";

function usePlayGame() {
  const dispatch = useDispatch();

  return {
    userName: {
      value: useSelector((state) => state.playGame.userName),
      onChange: (e) => dispatch(setUserName(e.target.value)),
    },
    userList: useSelector((state) => state.peer.peers),
  };
}

function useOnClickJoin() {
  const peerContext = useContext(PeerContext);
  const userName = useSelector((state) => state.playGame.userName);
  const hostPeerID = useSelector((state) => state.playGame.game?.hostPeerID);
  return () => {
    peerContext.connectTo(hostPeerID, userName);
  };
}

export { usePlayGame, useOnClickJoin };
