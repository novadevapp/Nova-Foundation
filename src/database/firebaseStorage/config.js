const admin = require("firebase-admin");

const serviceAccount = JSON.parse(process.env.SERVICE_ACCOUNT);
const bucketURL = process.env.BOCKET_URL;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: bucketURL
});

module.exports = admin;
