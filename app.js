const express = require("express");
const http = require("http");
const app = express();
const path = require("path");
const sever = http.createServer(app);
const socketIo = require("socket.io");

const io = socketIo(sever);

const PORT = process.env.PORT || 5000;

io.on("connection", (socket) => {
  socket.on("plus", (data) => {
    socket.emit("data", data);
  });
  socket.on("delete", () => {});
});

sever.listen(PORT, () => {
  console.log("성공", PORT);
});
