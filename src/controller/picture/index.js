const express = require('express');

const pictures = require('./getPictures');
const postPicture = require('./postPicture');

const route = express.Router();

route.get('/pictures', pictures);
route.post('/add-picture', postPicture);

module.exports = route;