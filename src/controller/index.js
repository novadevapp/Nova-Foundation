const router = require('express').Router();

const pictures = require('./picture');
const checkLogin = require('./checkLogin')
const authenticate = require('../middlewares/authenticate');
const login = require('./login');
const register = require('./signup');
const logout = require('./logout');
const poems = require('./poems');
const postStatus = require("./checkLogin");

router.use('/register', register);
// router.use('/login', login);

// Unlock Cookie Middleware
router.use(authenticate);
router.get('/login-status', checkLogin);
router.get('/logout', logout); 
router.get("/login-status", postStatus);
router.use(pictures);
// router.use('/poems', poems);

module.exports = router;
