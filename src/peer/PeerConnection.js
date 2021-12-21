import Peer from "peerjs";
import { createContext } from "react";
import { useDispatch } from "react-redux";
import {
  connectUser,
  disconnectUser,
  setConnectedUsers,
  setMyID,
} from "./peerSlice";

export const PeerContext = createContext(null);

let peerConnect;

const PeerConnection = ({ children }) => {
  const dispatch = useDispatch();
  const peers = {};

  const connectTo = async (hostID, myUsername) => {
    console.log("connecting");

    const conn = await peerConnect.connect(hostID, {
      label: myUsername,
      reliable: true,
    });
    conn.on("open", function () {
      console.log("Registering", hostID);
      conn.send("requestPeerList");
      conn.on("data", (data) => {
        console.log("data received", data);
        dispatch(data);
      });
      conn.on("error", console.error);
    });
  };

  const broadcast = (data) => {
    console.log("Broadcast to:", peers, data);
    Object.entries(peers).forEach(([, conn]) => {
      conn.send(data);
    });
  };

  const send = (id, data) => peers[id].send(data);

  if (!peerConnect) {
    peerConnect = new Peer({ debug: 2 });
    peerConnect.on("open", (userID) => {
      dispatch(setMyID(userID));
    });
    peerConnect.on("connection", (conn) => {
      console.log("Connection received", conn.label, conn, peers);
      peers[conn.peer] = conn;
      dispatch(connectUser({ peerID: conn.peer, username: conn.label.value }));

      conn.on("data", (data) => {
        console.log("Data received", data);
        if (data === "requestPeerList") {
          const dtoPeers = {};
          for (const key in peers) {
            dtoPeers[key] = peers[key].label.value;
          }
          broadcast(setConnectedUsers(dtoPeers));
        }
      });
      conn.on("close", () => {
        console.log("Disconnected", conn.label.value);
        delete peers[conn.peer];
        dispatch(disconnectUser(conn.peer));
        broadcast(disconnectUser(conn.peer));
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
