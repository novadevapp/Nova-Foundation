const express = require("express");
const path = require("path");
const compresion = require("compression");
const helmet = require("helmet");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const app = express();

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

app.post("/api/v1/login", (req, res) => {
  const id = "trial";
  const username = "more";
  console.log("This is a issue", process.env.SECRET);
  const signed = jwt.sign({ id, username }, process.env.SECRET);

  res.send({ jwt: signed });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});

app.set("PORT", process.env.PORT || 9000);

module.exports = app;
