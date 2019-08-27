const bcrypt = require('bcrypt');

module.exports = pass => bcrypt.hash(pass, 10);

