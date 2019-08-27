require('dotenv').config();
const mongoose = require('mongoose');


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

// event listners on mongoose connection object

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
    console.log("Mongoose is diconnected due to the app termination");
    process.exit(0);
  });
});

// Get default connection 

module.exports = () => mongoose.connect(MONGO_URI,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

