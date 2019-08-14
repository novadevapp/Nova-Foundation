const admin = require("../../database/firebaseStorage/config");
const pictuers = async (req, res) => {
  const bucket = admin.storage().bucket();

  // the id of user we must take it from the cookie
  let { id } = req.cookies;
  id = 1; // disable this line when compelete the app (for testing)
  const options = {
    prefix: `${id}/`
  };

  const optionSignUrl = {
    version: "v4",
    action: "read",
    expires: Date.now() + 15 * 60 * 1000 // 15 minutes
  };
  try {
    const [files] = await bucket.getFiles(options);
    const imagesName = files.filter(file => file.name.split("1/")[1]);
    const images = [];
    imagesName.forEach(async (file) => {
      const [url] = await bucket.file(file.name).getSignedUrl(optionSignUrl);
      images.push(url);
      if (images.length === imagesName.length) res.send({ images });
    });
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};
module.exports = pictuers;
