const validateUser = require('./validate');
const hashPassword = require('../../utils/hash');
const insertUser = require('../../database/queries/insertUser');
const findUser = require('../../database/queries/selectUser');
const { create } = require('../../utils/cookie');

module.exports = async (req, res) => {
  try {
    const { data: { name, nickName, babyName, email, password } } = req.body;

    // Check if email already exists
    const user = await findUser({ email });
    if (user) throw Error('Email Already Exists');

    // Validate User Info
    if (validateUser(name, nickName, babyName, email, password).valid) {
      // hash password
      const hashedPassword = await hashPassword(password);

      // Insert Into database
      const insertedUser = await insertUser(name, nickName, babyName, email, hashedPassword);
      if (insertedUser._id) {
        // Create Cookie
        const cookie = await create({ id: insertedUser._id, username: insertedUser.username });
        // Set Cookie... maxAge => 2 months
        res.cookie('jwt', cookie, { 'maxAge': 1000 * 3600 * 24 * 30 * 2 }, { 'HttpOnly': true})
        return res.send({ data: { username: insertedUser.displayName }, error: null });
      }
    }
    // Validation Error
    throw Error('Validation Error');

  } catch (error) {
    // Error Cases
    switch (error.message) {
      case 'Validation Error':
        res.status(422).send({ data: null, error: 'Validation Error' });
        break;
      case 'Email Already Exists':
        res.status(401).send({ data: null, error: error.message });
        break;
      default:
        res.status(500).send({ data: null, error: 'Internal Server Error' });
    }
  }
}