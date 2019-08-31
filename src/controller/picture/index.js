const express = require("express");

const getPictures = require("./getPictures");
const postPicture = require("./postPicture");
const deletePicture = require("./deletePicture");
const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");

const route = express.Router();

cloudinary.config();
const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "demo",
  allowedFormats: ["jpg", "png"],
  transformation: [{ width: 500, height: 500, crop: "limit" }]
});
const parser = multer({ storage: storage });

route
  .route("/pictures")
  .get(getPictures)
  .delete(deletePicture);

route.post("/add-picture", parser.single("file"), postPicture);

module.exports = route;
