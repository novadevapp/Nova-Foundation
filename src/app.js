const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const compresion = require("compression");
const helmet = require("helmet");

const app = express();

const middleware = [
  helmet(),
  compresion(),
  bodyParser.urlencoded({ extended: false }),
  bodyParser.json(),
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
