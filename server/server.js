const express = require("express");
// const { join } = require("path");

const PORT = process.env.PORT || 3001;

const app = express();

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

const server = app.listen(PORT, function() {
  console.log(`[express] 'app' listening on port ${PORT}`);
});

module.exports = {
  server: server,
  app: app
};
