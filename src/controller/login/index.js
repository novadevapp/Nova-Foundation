const express = require("express");
const postLogin = require("./postLogin");
const postStatus = require("./checkLogin");
const route = express.Router();

route.post("/login", postLogin);
route.post("/login-status", postStatus);
module.exports = route;
