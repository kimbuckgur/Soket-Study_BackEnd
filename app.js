const express = require("express");
const http = require("http");
const app = express();
const path = require("path");
const sever = http.createServer(app);
const socketIo = require("socket.io");

const io = socketIo(sever);

const PORT = process.env.PORT || 5000;

io.on("connection", (socket) => {
  console.log("연결성공");
  socket.on("list")
});

sever.listen(PORT, () => {
  console.log("성공", PORT);
});
