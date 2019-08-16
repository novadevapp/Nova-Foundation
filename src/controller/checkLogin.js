const jwt = require("jsonwebtoken");
const loginStatus = (req, res) => {
  console.log(req.cookie);

  const verify = jwt.verify(req.body.jwt, process.env.SECRET, function(
    err,
    decoded
  ) {
    console.log(decoded); // bar
    // write query to match database and token
  });
 // needs { auth: "ok" } for routing on front end
  res.send({ auth: "ok" });
};

module.exports = loginStatus;
