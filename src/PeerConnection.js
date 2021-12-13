import Peer from "peerjs";

class PeerConnection {
  constructor(handleMessage) {
    this.peer = new Peer();
    this.peers = {};
    this.id = null;
    this.handleMessage = handleMessage;
  }

  connect(onConnect) {
    const self = this;
    this.peer.on("open", function (userID) {
      console.log("My peer ID is: ", userID);
      self.id = userID;
      if (onConnect) onConnect(userID);
    });
    this.peer.on("connection", function (conn) {
      console.log("Registering", conn.peer, conn, self.peers);
      conn.send(self.peers);

      self.peers[conn.peer] = conn;

      conn.on("data", self.handleMessage);
      conn.on("error", (e) => console.error(e));
    });
  }

  broadcast(data) {
    this.peers.forEach((peer) => {
      peer.send(data);
    });
  }

  send(id, data) {
    this.peers[id].send(data);
  }

  connectTo(id) {
    const conn = this.peer.connect(id);
    const self = this;
    conn.on("open", function () {
      console.log("Registering", id);
      self.peers[id] = conn;
      conn.on("data", self.handleMessage);
      conn.on("error", (e) => console.error(e));
    });
  }
}

export default PeerConnection;
