const jwt = require('jsonwebtoken');
require('dotenv').config();

// PS: jwt does not return a promise

// Create Cookie

exports.create = (payload) => new Promise((resolve, reject) => {
  jwt.sign(payload, process.env.SECRET, (error, jwt) => {
    if (error) reject(error);
    else resolve(jwt);
  });
});

//Verify Cookie Here

exports.verify = (cookie) => new Promise((resolve, reject) => {
  jwt.verify(cookie, process.env.SECRET, (error, decoded) => {
    if (error) reject(error);
    else resolve(decoded);
  })
})
