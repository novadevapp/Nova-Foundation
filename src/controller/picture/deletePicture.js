const cloudinary = require("cloudinary").v2;
const deletePic = require("../../database/queries/deletePic");

const deletePicture = async (req, res) => {
  try {
    let { id } = req.auth;
    const { public_id } = req.body.data;
    cloudinary.config();
    cloudinary.uploader.destroy(public_id).then(result => {
      console.log(result);
      deletePic(public_id);
    });
    res.send({ data: "Delete File" });
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};

module.exports = deletePicture;
