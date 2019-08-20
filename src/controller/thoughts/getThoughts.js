const selectThoughts = require("../../database/queries/selectThoughts");

const getPoems = async (req, res) => {
  try {
    let { id } = req.auth;
    const result = await selectThoughts(id);
    console.log(result);
    res.send({ data: result, error: null });
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};

module.exports = getPoems;
