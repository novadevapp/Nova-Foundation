const router = require('express').Router();

const signup = require('./signup');
const pictures = require('./picture');
const login = require('./login');
const poems = require('./poems');
const postStatus = require("./checkLogin");

router.use('/register', signup);
// router.use('/login', login);

router.get("/login-status", postStatus);
// router.use('/poems', poems);
router.use(pictures);

module.exports = router;
