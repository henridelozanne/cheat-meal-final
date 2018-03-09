const mongoose = require("mongoose");

const { Schema } = mongoose;

const commentsSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  recipeId: { type: Schema.Types.ObjectId, ref: "recipe" },
  creatorId: { type: String, ref: "user" }
});

module.exports = mongoose.model("Comment", commentsSchema);
