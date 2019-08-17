const jwt = require('jsonwebtoken');

exports.verify = (cookie) => new Promise((resolve, reject) => {
  jwt.verify(cookie, process.env.SECRET, (error, decoded) => {
    if (error) reject(error);
    else resolve(decoded);
  })
})