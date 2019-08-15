const admin = require("../../database/firebaseStorage/config");

const deletePicture = async (req, res) => {
  try {
    let { id } = req.cookies;
    // disable this line
    id = 1;
    console.log(req.body);
    const { fileName } = req.body.data;
    const bucket = admin.storage().bucket();

    await bucket.file(`${fileName}`).delete();
    res.send({ data: 'Delete File' });
  } catch (error) {
      console.log(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};

module.exports = deletePicture;
