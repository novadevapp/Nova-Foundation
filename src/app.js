require("dotenv").config();

const express = require("express");
const path = require("path");
const compresion = require("compression");
const helmet = require("helmet");

const cookie = require("cookie-parser");

const connect = require("./database/config/connection");
const controller = require("./controller");

const app = express();

connect();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const middleware = [helmet(), compresion(), express.json(), cookie()];

app.use(middleware);

app.use("/api/v1", controller);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "..", "client", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
  });
}

app.set("PORT", process.env.PORT || 9000);

module.exports = app;
