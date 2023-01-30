const mongoose = require("mongoose");

const resolutionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "Resolution",
  resolutionSchema,
  "categoryResolutionsCollection"
);
