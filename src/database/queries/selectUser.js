const User = require('../models/users');

module.exports = (option) => User.findOne(option);