const express = require("express");
const path = require("path");
const compresion = require("compression");
const helmet = require("helmet");
const multer = require("multer");
const admin = require("./firebase/index");
const cookie = require("cookie-parser");
const generateUrls = require("./helpers/generateUrl");

const app = express();

const middleware = [
  helmet(),
  compresion(),
  express.json(),
  cookie(),
  express.static(path.join(__dirname, "..", "client", "build"))
];
app.use(middleware);

app.get("/express_backend", (req, res) => {
  res.send({ express: " YOUR BACKEND IS CONNECTED" });
});

app.post("/api/v1/send-pic", async (req, res) => {
  console.log("this is a trial", req.body);
  try {
    const file = req.body.file;
    const userId = 1;
    const options = {
      action: "write",
      expires: Date.now() + 60 * 60 * 1000,
      version: "v4"
    };
    const bucket = admin.storage().bucket();
    const imgeUrlRef = bucket.file(`/images/${userId}/${file}`);
    const [imageUrl] = await imgeUrlRef.getSignedUrl(options);
    res.send({ imageUrl, file });
  } catch (error) {
    console.log(error);
  }
});

app.get("/api/v1/image", async (req, res) => {
  try {
    const userId = 1;
    // for filtering the files//
    const options = {
      prefix: `images/${userId}`
      // there is another property: delimiter: '/'
    };

    const bucket = admin.storage().bucket();

    //to get all files//
    const [imageUrlRefs] = await bucket.getFiles(options);
    const urls = await Promise.all(
      imageUrlRefs.map(file => {
        return generateUrls(file.name, file.name);
      })
    );
    res.send(urls);
  } catch (error) {
    console.log(error);
  }
});

app.delete("/api/v1/image", async (req, res) => {
  try {
    const userId = 1;
    const imageName = req.body.imageName;
    const bucket = admin.storage().bucket();

    //delete a file
    await bucket.file(`/images/${userId}/${imageName}`).delete();
    res.send({ id: imageName });
  } catch (error) {
    console.log(error);
  }
});

//this is not a best solution to how to render the image,
//but it still works. will try to search for an alternative //
app.post("/api/v1/get-img", async (req, res) => {
  const userId = 1;
  const imageName = req.body.imageName;

  const options = {
    action: "read",
    expires: Date.now() + 60 * 60 * 1000,
    version: "v4"
  };

  const bucket = admin.storage().bucket();
  //how to get one file
  const imgeUrlRef = await bucket.file(`/images/${userId}/${imageName}`);
  const [imageUrl] = await imgeUrlRef.getSignedUrl(options);
  res.send(imageUrl);
});

//new feature, downloading the photo; still in progress
app.post("/api/v1/download", async (req, res) => {
  try {
    const splitPath = req.body.imageName.split("/");
    const imageName = splitPath[splitPath.length - 1];
    const bucket = admin.storage().bucket();
    const options = {
      // The path to which the file should be downloaded, e.g. "./file.txt"
      destination: `/${imageName}`
    };

    // Downloads the file
    await bucket.file(req.body.imageName).download(options);
  } catch (error) {
    console.log(error);
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});

app.set("PORT", process.env.PORT || 9000);

module.exports = app;
