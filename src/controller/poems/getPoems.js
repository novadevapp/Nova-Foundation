const selectPoems = require("../../database/queries/selectPoems");

const getPoems = async (req, res) => {
  try {
    let { id } = req.auth;
    const result = await selectPoems(id);
    res.send({ data: result, error: null });
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};

module.exports = getPoems;
