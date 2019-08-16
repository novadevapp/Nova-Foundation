const express = require("express");
const postStatus = require("./checkLogin");
const login = require("./login");
const pictures = require("./picture");

const route = express.Router();

route.use(pictures);
route.use(login);
route.get("/login-status", postStatus);

module.exports = route;
