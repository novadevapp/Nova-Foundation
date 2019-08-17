module.exports = (req, res) => {
  res.clearCookie();
  res.send({ logout: true });
}