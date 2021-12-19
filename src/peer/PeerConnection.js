import Peer from "peerjs";
import { createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMyID, userConnected } from "./peerSlice";

export const PeerContext = createContext(null);

let peerConnect;

const PeerConnection = ({ children }) => {
  const dispatch = useDispatch();
  const { peers } = useSelector((state) => state.peer);

  const connectTo = async (hostID, myUsername) => {
    const conn = await peerConnect.connect(hostID, {
      label: myUsername,
      reliable: true,
    });
    conn.on("open", function () {
      console.log("Registering", hostID);
      dispatch(setMyID(hostID));
      conn.send({ myUsername });
      conn.on("data", (data) => {
        console.log("data received", data);
      });
      conn.on("error", console.error);
    });
  };

  const broadcast = (data) =>
    peers.forEach((peer) => {
      peer.send(data);
    });

  const send = (id, data) => peers[id].send(data);

  if (!peerConnect) {
    peerConnect = new Peer();
    peerConnect.on("open", (userID) => {
      dispatch(setMyID(userID));
    });
    peerConnect.on("connection", (conn) => {
      console.log("Registering", conn.peer, conn, peers);
      conn.send(peers);

      dispatch(userConnected({ username: conn.peer, connection: conn }));

      conn.on("data", (data) => {
        console.log("data received", data);
      });
      conn.on("error", console.error);
    });
  }

  return (
    <PeerContext.Provider value={{ connectTo, broadcast, send }}>
      {children}
    </PeerContext.Provider>
  );
};

export default PeerConnection;
