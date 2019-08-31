const selectPictures = require("../../database/queries/selectPictures");

const getPictures = async (req, res) => {
  try {
    let { id } = req.auth;
    const result = await selectPictures(id);
    console.log(result);
    res.send({ images: result, error: null });
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};

module.exports = getPictures;
