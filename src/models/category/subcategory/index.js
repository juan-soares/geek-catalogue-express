const mongoose = require("mongoose");

const subcategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "Subcategory",
  subcategorySchema,
  "categorySubcategoriesCollection"
);
