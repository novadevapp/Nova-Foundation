const express = require("express");
const path = require("path");
const compresion = require("compression");
const helmet = require("helmet");
const admin = require("./firebase/index");
const cookie = require("cookie-parser");
const formidable = require("formidable");

const app = express();

const middleware = [
  helmet(),
  compresion(),
  express.json(),
  cookie(),
  express.static(path.join(__dirname, "..", "client", "build"))
];

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(middleware);

const postPiC = async (req, path, res) => {
  // [START storage_upload_file]
  // Imports the Google Cloud client library
  const { Storage } = require("@google-cloud/storage");

  // Creates a client
  const storage = new Storage();

  /**
   * TODO(developer): Uncomment the following lines before running the sample.
   */
  const bucketName = "nova-foundation.appspot.com";
  const filename = path;

  // Uploads a local file to the bucket
  await storage.bucket(bucketName).upload(filename, {
    // Support for HTTP requests made with `Accept-Encoding: gzip`
    gzip: true,
    // By setting the option `destination`, you can change the name of the
    // object you are uploading to a bucket.
    metadata: {
      // Enable long-lived HTTP caching headers
      // Use only if the contents of the file will never change
      // (If the contents will change, use cacheControl: 'no-cache')
      cacheControl: "public, max-age=31536000"
    }
  });

  console.log(`${filename} uploaded to ${bucketName}.`);
  // [END storage_upload_file]
};

app.get("/express_backend", (req, res) => {
  res.send({ express: " YOUR BACKEND IS CONNECTED" });
});

app.post("/api/v1/send-pic", (req, res) => {
  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {
    postPiC(req, files.file.path, res);
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});

app.set("PORT", process.env.PORT || 9000);

module.exports = app;
