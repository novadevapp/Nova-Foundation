const mongoose = require("mongoose");
const { Schema } = mongoose;

const ThoughtSchema = new Schema({
  dateString: { type: String, required: true },
  emoji: {
    type: String,
    required: false
  },
  thought: {
    type: String,
    required: false
  },
  // a reference to users collection
  publisher: {
    type: Schema.Types.ObjectId,
    ref: "users"
  }
});

module.exports = mongoose.model("thoughts", ThoughtSchema);
