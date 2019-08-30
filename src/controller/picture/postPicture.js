const { config, uploader } = require("cloudinary").v2;
const path = require("path");

const postPicture = async (req, res) => {
  console.log(req.file);
  const { title } = req.body;
  let { id } = req.auth;
  file.name = `${Date.now()}${path.extname(file.name)}`;

  const image = {};
  image.url = req.file.url;
  image.id = req.file.public_id;

  console.log({ image });
  // Image.create(image) // save image information in database
  // .then(newImage => res.json(newImage))
  //.catch(err => console.log(err));
};

module.exports = postPicture;
