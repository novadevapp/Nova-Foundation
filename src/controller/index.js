const express = require('express');

const pictures = require('./picture');
const checkLogin = require('./checkLogin')
const authenticate = require('../middlewares/authenticate');
const login = require('./login');
const register = require('./signup');
const logout = require('./logout');

const route = express.Router();


// route.use(register);  
// route.use(login);

// Unlock Cookie Middleware
route.use(authenticate);
route.get('/login-status', checkLogin);
route.use(pictures);
route.get('/logout', logout); 

module.exports = route;