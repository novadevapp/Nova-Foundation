const Thought = require("../models/thoughts");
// userId, as a param when brought upto date
module.exports = (emoji, thought) => {
  return new Promise(async (resolve, reject) => {
    try {
      const date = new Date();

      const dateString = `${date.getDate()}/${date.getMonth()}`;

      // Create thought data
      await Thought.create({
        // userId,
        dateString,
        emoji,
        thought
      });

      // Return the thought
      const thoughtSaved = await Thought.findOne({ emoji, thought });

      console.log({ thoughtSaved });
      resolve(thoughtSaved);
    } catch (error) {
      reject(error);
    }
  });
};
