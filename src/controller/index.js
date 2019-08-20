const router = require('express').Router();

const register = require('./signup');
const login = require('./login');
const pictures = require('./picture');
const checkLogin = require('./checkLogin')
const authenticate = require('../middlewares/authenticate');
const logout = require('./logout');
const poems = require('./poems');

router.use('/register', register);
// router.use('/login', login);

// Unlock Cookie Middleware
router.use(authenticate);
router.get('/login-status', checkLogin);
router.get('/logout', logout); 
router.use(pictures);
// router.use('/poems', poems);

module.exports = router;
