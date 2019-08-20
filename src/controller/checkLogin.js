module.exports = (req, res) => {
  //User is authenticated
  res.send({ auth: 'ok', username: req.auth.username });
}
