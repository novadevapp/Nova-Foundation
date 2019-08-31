const mongoose = require("mongoose");
const { Schema } = mongoose;

const PictureSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  public_id: {
    type: String,
    required: true
  },
  // a reference to poems collection
  publisher: {
    type: Schema.Types.ObjectId,
    ref: "users"
  }
});

module.exports = mongoose.model("pictures", PictureSchema);
