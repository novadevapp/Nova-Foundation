const express = require("express");

const pictures = require("./getPictures");
const postPicture = require("./postPicture");
const deletePicture = require("./deletePicture");

const route = express.Router();

route
  .route("/pictures")
  .get(pictures)
  .delete(deletePicture);
  
route.post("/add-picture", postPicture);

module.exports = route;
