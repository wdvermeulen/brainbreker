import Peer from "peerjs";
import { createContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAnswer } from "../private/pages/hostGame/hostGameSlice";
import { commandDefinition } from "./peerConstants";
import {
  connectUser,
  disconnectUser,
  setConnectedUsers,
  setMyID,
} from "./peerSlice";

export const PeerContext = createContext({ peers: {}, count: -1 });

let peerConnect;
let peers = {};
let serverConnection;

function usePeers() {
  return {
    peers,
    addPeer: (conn) => (peers[conn.peer] = conn),
    removePeer: (id) => delete peers[id],
  };
}

const PeerConnection = ({ children }) => {
  const dispatch = useDispatch();
  const { peers, addPeer, removePeer } = usePeers();

  const connectTo = async (hostID, myUsername) => {
    console.log("connecting");

    serverConnection = await peerConnect.connect(hostID, {
      label: myUsername,
      reliable: true,
    });
    serverConnection.on("open", function () {
      console.log("Registering", hostID);
      serverConnection.send({ command: commandDefinition.REQUEST_PEER_LIST });
      serverConnection.on("data", (data) => {
        console.log("data received", data);
        dispatch(data);
      });
      serverConnection.on("error", (e) =>
        console.error("peerError encountered", e)
      );
    });
  };

  const broadcast = (data) => {
    console.log("Broadcast to:", peers, data);
    Object.entries(peers).forEach(([, conn]) => {
      conn.send(data);
    });
  };

  const send = (data, id) => {
    console.log("Send to:", id, data);
    if (id && peers[id]) peers[id].send(data);
    else if (serverConnection) serverConnection.send(data);
  };

  useEffect(() => {
    if (!peerConnect) {
      peerConnect = new Peer({ debug: 2 });
      peerConnect.on("open", (userID) => {
        dispatch(setMyID(userID));
      });
      peerConnect.on("connection", (conn) => {
        console.log("Connection received", conn.label, conn, peers);
        addPeer(conn);
        dispatch(
          connectUser({ peerID: conn.peer, username: conn.label.value })
        );

        conn.on("data", ({ command, value }) => {
          console.log("Data received", command, value, conn);
          switch (command) {
            case commandDefinition.REQUEST_PEER_LIST:
              const dtoPeers = {};
              for (const key in peers) dtoPeers[key] = peers[key].label.value;
              broadcast(setConnectedUsers(dtoPeers));
              break;
            case commandDefinition.ADD_ANSWER:
              dispatch(addAnswer({ key: conn.peer, value }));
          }
        });
        conn.on("close", () => {
          console.log("Disconnected", conn.label.value, conn);
          removePeer(conn.peer);
          dispatch(disconnectUser(conn.peer));
          broadcast(disconnectUser(conn.peer));
        });
        conn.on("error", (e) =>
          console.error("serverError encountered", e, conn)
        );
      });
    }
  });

  return (
    <PeerContext.Provider value={{ connectTo, broadcast, send }}>
      {children}
    </PeerContext.Provider>
  );
};

export default PeerConnection;
