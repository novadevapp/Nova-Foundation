const express = require("express");
const postLogin = require("./postLogin");
const route = express.Router();

route.post("/", postLogin);

module.exports = route;
