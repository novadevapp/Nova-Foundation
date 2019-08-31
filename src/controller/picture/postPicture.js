const insertPic = require("../../database/queries/insertPic");

const postPicture = async (req, res) => {
  try {
    const { title } = req.body;
    const userId = req.auth.id;

    const image = {};
    image.url = req.file.url;
    image.id = req.file.public_id;

    console.log("this is the image", image);

    const insertedPic = await insertPic({
      title,
      content: image.url,
      public_id: image.id,
      publisher: userId
    });

    if (insertedPic) {
      return res.send({ data: { message: "Success" }, error: null });
    }
    // Error in Insert
    throw Error("error");
  } catch (error) {
    // Error Case
    res.status(500).send({ data: null, error: "Internal Server Error" });
  }
};

module.exports = postPicture;
