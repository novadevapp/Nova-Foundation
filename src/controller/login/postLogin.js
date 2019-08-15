const postLogin = (req, res) => {
  const id = "trial";
  const username = "more";
  console.log("This is a issue", process.env.SECRET);
  const signed = jwt.sign({ id, username }, process.env.SECRET);

  res.send({ jwt: signed });
};

module.exports = postLogin;
