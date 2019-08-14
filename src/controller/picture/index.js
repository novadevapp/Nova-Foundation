const express = require('express');

const pictures = require('./getPictures');

const route = express.Router();

route.get('/pictures', pictures);

module.exports = route;