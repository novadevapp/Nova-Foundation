const express = require('express');

const pictures = require('./picture');
const poems = require('./poems');
const authonticate = require('../middleware/authenticate')

const route = express.Router();


route.use(authonticate)
route.use(pictures);
route.use(poems);

module.exports = route;