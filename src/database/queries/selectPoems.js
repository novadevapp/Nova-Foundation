const poems = require("../models/poems");

const selectPoems = userId =>
  poems.find({ publisher: userId }, "title content");
module.exports = selectPoems;
