const mongoose = require("mongoose");
const Subcategory = require("./subcategory");

const categorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    subcategories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Subcategory,
        required: true,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "Category",
  categorySchema,
  "categoriesCollection"
);
