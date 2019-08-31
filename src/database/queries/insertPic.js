const Picture = require("../models/pictures");

module.exports = pictureObject => {
  return new Promise(async (resolve, reject) => {
    try {
      // Create new pic reference
      await Picture.create(pictureObject);
      // Return the picture
      const picture = await Picture.findOne({
        title: pictureObject.title,
        content: pictureObject.content
      });
      resolve(picture);
    } catch (error) {
      reject(error);
    }
  });
};
