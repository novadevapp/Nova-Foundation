const express = require("express");

const getPoems = require("./getPoems");

const route = express.Router();

route.route("/poems").get(getPoems);

module.exports = route;
