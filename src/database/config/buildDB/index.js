const mongoose = require('mongoose');

const connect = require('../connection');
const Poem = require('../../models/poems');
const User = require('../../models/users');

// This function is to rebuild our local & production db

const rebuildDB = () => new Promise(async (resolve, reject) => {
  try {

    // Connect to DB 
    await connect();

    // delete all documents in collections
    // using drop collection throws error if a collection is not found

    await User.deleteMany();
    await Poem.deleteMany();
    
    // set documents 

    mongoose.disconnect();

    resolve('done rebuilding');

  } catch (error) {
    reject(error)
  }
});

rebuildDB()
  .then(console.log)
  .catch(console.log)