const router = require('express').Router();

const signup = require('./signup');
const login = require('./login');
const pictures = require('./picture');
const poems = require('./poems');

router.use('/register', signup);

// router.use('/login', login);

// router.use('/pictures', pictures);

// router.use('/poems', poems);


module.exports = router;