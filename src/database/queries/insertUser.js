const User = require('../models/users');

module.exports = (username, displayName, babyName, email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Create new user
      await User.create({
        username,
        displayName,
        babyName,
        email,
        password,
      });
      // Return the user
      const user = await User.findOne({ username, password });
      resolve(user);
    } catch (error) {
      reject(error);
    }
  });
}