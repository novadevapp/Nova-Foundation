const admin = require("../../database/firebaseStorage/config");
const pictuers = async (req, res) => {
  const bucket = admin.storage().bucket();

  // the id of user
  const options = {
    prefix: "1/"
  };

  const optionSignUrl = {
    version: "v4",
    action: "read",
    expires: Date.now() + 15 * 60 * 1000 // 15 minutes
  };

  const [files] = await bucket.getFiles(options);
  const imagesName = files.filter(file => file.name.split("1/")[1]);
  const images = [];
  imagesName.forEach(async (file, index) => {
    const [url] = await bucket.file(file.name).getSignedUrl(optionSignUrl);
    images.push(url);
    if (images.length === imagesName.length) res.send({ images });
  });
};
module.exports = pictuers;
