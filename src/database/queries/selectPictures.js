const pictures = require("../models/pictures");

const selectPictures = userId => pictures.find({ publisher: userId });
module.exports = selectPictures;
