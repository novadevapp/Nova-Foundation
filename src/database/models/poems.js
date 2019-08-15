const mongoose = require('mongoose');
const { Schema } = mongoose;

const PoemSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
  },
  // a reference to users collection
  publisher: {
    type: Schema.Types.ObjectId,
    ref: 'users',                 
  }
});

module.exports = mongoose.model('poems', PoemSchema);
