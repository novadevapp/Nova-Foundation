const router = require("express").Router();

const postThoughts = require("./postThoughts");

router.post("/", postThoughts);

module.exports = router;
