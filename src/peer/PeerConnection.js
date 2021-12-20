import Peer from "peerjs";
import { createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setConnectedUsers, setMyID, userConnected } from "./peerSlice";

export const PeerContext = createContext(null);

let peerConnect;

const PeerConnection = ({ children }) => {
  const dispatch = useDispatch();
  const peers = {};

  const connectTo = async (hostID, myUsername) => {
    const conn = await peerConnect.connect(hostID, {
      label: myUsername,
      reliable: true,
    });
    conn.on("open", function () {
      console.log("Registering", hostID);
      dispatch(setMyID(hostID));
      conn.send("requestPeerList");
      conn.on("data", (data) => {
        console.log("data received", data);
        dispatch(data);
      });
      conn.on("error", console.error);
    });
  };

  const broadcast = (data) => {
    console.log("broadcast to:", peers);
    Object.entries(peers).forEach(([, conn]) => {
      conn.send(data);
    });
  };

  const send = (id, data) => peers[id].send(data);

  if (!peerConnect) {
    peerConnect = new Peer();
    peerConnect.on("open", (userID) => {
      dispatch(setMyID(userID));
    });
    peerConnect.on("connection", (conn) => {
      console.log("Registering", conn.peer, conn, peers);
      peers[conn.label] = conn;
      dispatch(userConnected({ username: conn.label, connection: conn.peer }));

      conn.on("data", (data) => {
        console.log("data received", data);
        console.log("sending setPeerList", Object.keys(peers));
        if (data === "requestPeerList")
          broadcast(setConnectedUsers(Object.keys(peers)));
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
