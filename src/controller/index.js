const express = require("express");

const login = require("./login");
const pictures = require("./picture");

const route = express.Router();

route.use(pictures);
route.use(login);

module.exports = route;
