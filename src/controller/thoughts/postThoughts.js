const insertThoughts = require("../../database/queries/insertThoughts");

module.exports = async (req, res) => {
  try {
    const {
      data: { value, select }
    } = req.body;

    let { id } = req.auth;

    const insertedData = await insertThoughts(id, select, value);
    if (insertedData) {
      return res.send({ data: { message: "Success" }, error: null });
    }
  } catch (error) {
    res.status(500).send({ data: null, error: "Internal Server Error" });
  }
};
