const express = require("express");

const getPoems = require("./getPoems");

const route = express.Router();

route.route('/').get(getPoems);

module.exports = route;
