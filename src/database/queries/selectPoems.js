const poems = require("../models/poems");

const selectPoems = userId =>
poems.find({ publisher: userId });
module.exports = selectPoems;
