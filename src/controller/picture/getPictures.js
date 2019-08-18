const admin = require("../../database/firebaseStorage/config");
const pictuers = async (req, res) => {
  const bucket = admin.storage().bucket();

  // the id of user we must take it from the cookie
  // let { id } = req.auth;
  const id = 1;
  const options = {
    prefix: `images/${id}/`
  };

  const optionSignUrl = {
    version: "v4",
    action: "read",
    expires: Date.now() + 15 * 60 * 1000 // 15 minutes
  };
  try {
    const [files] = await bucket.getFiles(options);
    const imagesFiles = files.filter(
      file => file.name.split(options.prefix)[1]
    );
    const images = [];
    imagesFiles.forEach(async file => {
      const [url] = await bucket.file(file.name).getSignedUrl(optionSignUrl);
      images.push({fileName: file.name, url});
      if (images.length === imagesFiles.length) res.send({ images });
    });
  } catch (error) {
    res.status(500).send({ error: error });
  }
};
module.exports = pictuers;
