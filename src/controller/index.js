const express = require('express');

const pictures = require('./picture');

const route = express.Router();

route.use(pictures);

module.exports = route;