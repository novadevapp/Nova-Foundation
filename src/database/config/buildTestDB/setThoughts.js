const thought = require("../../models/thoughts");
const User = require("../../models/users");

module.exports = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await User.findOne({ username: "Sarah" });
      const ThoughtOne = {
        dateString: "8/8",
        emoji: "hopeful",
        thought: "The weather is nice",
        publisher: user._id
      };
      await thought.create([ThoughtOne]);
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};
