const Thought = require("../models/thoughts");

module.exports = (userId, emoji, thought) => {
  return new Promise(async (resolve, reject) => {
    try {
      const date = new Date();
      const dateString = `${date.getDate()}/${date.getMonth()}`;

      // Create thought data
      await Thought.create({
        dateString: dateString,
        emoji: emoji,
        thought: thought,
        publisher: userId
      });

      // Return the thought
      const thoughtSaved = await Thought.findOne({ emoji, thought });

      resolve(thoughtSaved);
    } catch (error) {
      reject(error);
    }
  });
};
