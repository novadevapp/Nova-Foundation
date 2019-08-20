const express = require("express");

const getPoems = require("./getPoems");
const postPoem = require('./postPoem');

const route = express.Router();

route.route('/')
.get(getPoems)
.post(postPoem)

module.exports = route;
