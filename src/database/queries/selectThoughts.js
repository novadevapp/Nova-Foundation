const thoughts = require("../models/thoughts");

const selectThoughts = userId =>
  thoughts.find({ publisher: userId }, "dateString  emoji thought");
module.exports = selectThoughts;
