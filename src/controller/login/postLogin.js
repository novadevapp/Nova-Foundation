const findUser = require("../../database/queries/selectUser");
const { create } = require("../../utils/cookie");
const compare = require("../../utils/compare");

module.exports = async (req, res) => {
  try {
    const {
      data: { email, password }
    } = req.body;

    // Check if user exists
    const user = await findUser({ email });
    if (!user) throw Error("Email or password were incorrect");

    // Check if password matches
    const compareRes = await compare(password, user.password);
    if (!compareRes) {
      throw Error("Email or password were incorrect");
    } else {
      const cookie = await create({
        id: user._id,
        username: user.username
      });

      res.cookie(
        "jwt",
        cookie,
        { maxAge: 1000 * 3600 * 24 * 30 * 2 },
        { HttpOnly: true }
      );
      return res.send({ data: { username: user.displayName }, error: null });
    }
  } catch (error) {
    // Error Cases
    switch (error.message) {
      case "Email or password were incorrect":
        res.status(401).send({ data: null, error: error.message });
        break;
      default:
        res.status(500).send({ data: null, error: "Internal Server Error" });
    }
  }
};
