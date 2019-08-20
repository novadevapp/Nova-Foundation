const bcrypt = require("bcrypt");
module.exports = (pass1, pass2) => bcrypt.compare(pass1, pass2);
