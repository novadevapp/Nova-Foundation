const router = require('express').Router();

const postUser = require('./postUser');

router.post('/', postUser);

module.exports = router;

