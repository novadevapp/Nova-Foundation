const jwt = require("jsonwebtoken");
const loginStatus = (req, res) => {
  console.log(req.cookies);

  // needs { auth: "ok" } for routing on front end
  res.send({ auth: "ok" });
};

module.exports = loginStatus;
