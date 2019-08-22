const thoughts = require("../models/thoughts");

const selectThoughts = userId => {
  return thoughts.find({ publisher: userId });
};
module.exports = selectThoughts;
