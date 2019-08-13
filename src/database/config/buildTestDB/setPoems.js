const Poem = require('../../models/poems');
const User = require('../../models/users');
const connect = require('../../config/connection');

module.exports = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await User.findOne({ name: 'Sarah' });
      const PoemOne = {
        title: "My First Child",
        content: "Since the day I you were in my tummy, I knew I'd be a great mommy, I'd love to feel every kick you gave, How I wish I'd see you wave...",
        publisher: user._id,
      }
      await Poem.create([PoemOne]);
      resolve();
    } catch (error) {
      reject(error)
    }
  });
}
