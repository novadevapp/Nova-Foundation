const User = require('../models/users');

module.exports = (name, nickName, babyName, email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Create new user
      await User.create({
        username: name,
        displayName: nickName,
        babyName,
        email,
        password,
      });
      // Return the user
      const user = await User.findOne({ username: name, password });
      resolve(user._id);
    } catch (error) {
      reject(error);
    }
  });
}