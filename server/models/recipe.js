const mongoose = require("mongoose");
const { Schema } = mongoose;

const recipeSchema = new Schema({
  title: { type: String, required: [true, "You must give a title"] },
  type: String,
  difficulty: String,
  budget: String,
  steps: Array,
  advisedDrink: String,
  creatorId: { type: Schema.Types.ObjectId, ref: "user" },
  creator: { type: String },
  picture: String,
  ingredients: [
    {
      name: String,
      quantity: Number,
      unit: String
    }
  ],
  advisedDrink: String,
  comments: [{ type: Schema.Types.ObjectId, ref: "comment" }]
});

module.exports = mongoose.model("Recipe", recipeSchema);
