const setUsers = require('./setUsers');
const setPoems = require('./setPoems');
const Poem = require('../../models/poems');
const User = require('../../models/users');
const connect = require('../connection');

module.exports = () => new Promise(async (resolve, reject) => {
  try {
    // connection
    await connect();
    // delete all documents in collections
    // using drop collection throws error if a collection is not found

    await User.deleteMany();
    await Poem.deleteMany();

    // set documents in collections

    await setUsers();
    await setPoems();

    resolve();

  } catch (error) {
    reject(error)
  }
});
