const admin = require("../../database/firebaseStorage/config");
const axios = require("axios");
const path = require("path");

const postPicture = async (req, res) => {
  try {
    const { file } = req.files;
    const bucket = admin.storage().bucket();
    let { id } = req.auth;
    file.name = `${Date.now()}${path.extname(file.name)}`;

    const options = {
      action: "write",
      expires: Date.now() + 60 * 60 * 1000,
      version: "v4"
    };

    const imgeUrlRef = bucket.file(`/images/${id}/${file.name}`);
    const [url] = await imgeUrlRef.getSignedUrl(options);
    await axios.put(url, file.data);
    res.send({ data: true });
  } catch (err) {
    res.status(500).send({ error: "Internale Server Error" });
  }
};

module.exports = postPicture;
