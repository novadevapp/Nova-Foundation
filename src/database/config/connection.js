const mongoose = require('mongoose');
require('dotenv').config();

// Reassigning Promise method in mongoose 
// Promise library in mongoose is deprecated

mongoose.Promise = global.Promise;

// Mongodb URI for different enviroments
let MONGO_URI = process.env.MONGODB_DEVELOPMENT_URI;

if (process.env.NODE_ENV === 'test') {
  MONGO_URI = process.env.MONGODB_TEST_URI;
}

if (process.env.NODE_ENV === 'production') {
  MONGO_URI = process.env.MONGODB_PRODUCTION_URI;
}

if (!MONGO_URI) {
  console.log('No Mongodb URI is found!');
}

// connect mongoose to mongodb

mongoose.connection.on('connected', () => {
  console.log('Connection Made successfully!');
});

mongoose.connection.on('disconnected', () => {
  console.log('Connection Disconnected')
});

mongoose.connection.on('error', (error) => {
  console.log(`Error: ${error}`);
});

// Close all connections when the app is terminated

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log("Mongoose default connection is disconnected due to application termination");
    process.exit(0);
  });
});

// Get default connection 

module.exports = () => mongoose.connect(MONGO_URI,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
  });

