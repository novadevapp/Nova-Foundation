const postLogin = (req, res) => {
  const id = "trial";
  const username = "more";
  console.log("This is a issue", process.env.SECRET);
  const signed = jwt.sign({ id, username }, process.env.SECRET);
  res.cookie("cookienvf", signed, { maxAge: 900000 });
  console.log("testing");
  res.send({ jwt: signed });
};

module.exports = postLogin;
