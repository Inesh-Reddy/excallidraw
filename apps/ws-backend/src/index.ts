import { WebSocket, WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function connection(ws) {
  console.log(`WS : connected on port : 8080`);
  ws.on("message", function message(data) {
    ws.send("pong");
  });
});
