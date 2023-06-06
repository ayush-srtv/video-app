const express = require("express");
const app = express();
const http = require('http').Server(app);
const io = require("socket.io")(http);

// const { join } = require("path");

const PORT = process.env.PORT || 3001;

app.all("/api/:name", (req, res) => {
  res.status(200).json({ message: `Yo, ${req.params.name}!` });
});

app.all("/api/json/:name", (req, res) => {
  res.status(200).json({ message: `Hello, ${req.params.name}!` });
});

// The "catchall" handler: for any request that doesn't
// match one above.
app.all("*", (req, res) => {
  res.send("EXPRESS SERVER");
});

io.on('connection', function(socket) {
  console.log("a user connected");
  socket.on('stream', function(stream) {
    socket.broadcast.emit("stream", stream);
  });
  socket.on('disconnect', function () {
    console.log("user disconnected");
  });
});

const server = http.listen(PORT, function() {
  console.log(`[express] 'app' listening on port ${PORT}`);
});

module.exports = {
  server: server,
  app: app
};
