const Poem = require('../models/poems');

module.exports = (poemObject) => {
  return new Promise(async (resolve, reject) => {
    try {
      // Create new poem
      await Poem.create(poemObject);
      // Return the poem
      const poem = await Poem.findOne({
        title: poemObject.title,
        content: poemObject.content,
      });
      resolve(poem);
    } catch (error) {
      reject(error);
    }
  });
}