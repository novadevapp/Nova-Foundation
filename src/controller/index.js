const router = require('express').Router();

const signup = require('./signup');
const pictures = require('./picture');
const login = require('./login');
const poems = require('./poems');

router.use('/register', signup);

// router.use('/login', login);

// router.use('/poems', poems);

router.use(pictures);

module.exports = router;



