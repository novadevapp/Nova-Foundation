const hashPassword = require("../../utils/hash");
const findUser = require("../../database/queries/selectUser");
const { create } = require("../../utils/cookie");

module.exports = async (req, res) => {
  try {
    const {
      data: { email, password }
    } = req.body;

    // Check if email already exists
    const user = await findUser({ email });
    if (!user) throw Error("Email or password were incorrect");
    console.log({ user });
    // hash password
    const hashedPassword = await hashPassword(password);

    if (!insertedUser._id === hashedPassword)
      throw Error("Email or password were incorrect");

    // Create Cookie
    const cookie = await create({
      id: insertedUser._id,
      username: insertedUser.username
    });
    // Set Cookie... maxAge => 2 months
    res.cookie(
      "jwt",
      cookie,
      { maxAge: 1000 * 3600 * 24 * 30 * 2 },
      { HttpOnly: true }
    );
    return res.send({ data: { message: "Success" }, error: null });
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
