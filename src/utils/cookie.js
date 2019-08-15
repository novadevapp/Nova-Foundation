const jwt = require('jsonwebtoken');

// PS: jwt does not return a promise

// Create Cookie

exports.create = (payload) => new Promise((resolve, reject) => {
  jwt.sign(payload, process.env.SECRET, (error, jwt) => {
    if (error) reject(error);
    else resolve(jwt);
  });
});

// Verify Cookie Here

