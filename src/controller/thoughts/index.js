const router = require("express").Router();

const postThoughts = require("./postThoughts");
const getThoughts = require("./getThoughts");

router.post("/status", postThoughts);
router.get("/thoughts", getThoughts);

module.exports = router;
