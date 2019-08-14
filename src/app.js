const express = require("express");
const path = require("path");
const compresion = require("compression");
const helmet = require("helmet");
const connect = require('./database/config/connection');

const app = express();

connect();

const middleware = [
  helmet(),
  compresion(),
  express.json(),
  express.static(path.join(__dirname, "..", "client", "build"))
];
app.use(middleware);

app.get("/express_backend", (req, res) => {
  res.send({ express: " YOUR BACKEND IS CONNECTED" });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});

app.set("PORT", process.env.PORT || 9000);

module.exports = app;
