const router = require('express').Router();

const pictures = require('./picture');
const checkLogin = require('./checkLogin')
const authenticate = require('../middlewares/authenticate');
const login = require('./login');
const register = require('./signup');
const poems = require('./poems');

router.use('/register', register);
// router.use('/login', login);

// Unlock Cookie Middleware
router.use(authenticate);
router.get('/login-status', checkLogin);
router.use(pictures);
router.use(poems);

module.exports = router;
