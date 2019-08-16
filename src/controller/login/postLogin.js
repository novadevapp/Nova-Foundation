const jwt = require("jsonwebtoken");
const postLogin = (req, res) => {
  const id = "trial";
  const username = "more";
  const signed = jwt.sign({ id, username }, process.env.SECRET);
  res.cookie("cookienvf", signed, { maxAge: 900000 });
  res.send({ jwt: signed });
};

module.exports = postLogin;
