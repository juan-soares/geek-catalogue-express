const mongoose = require("mongoose");

const editionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "Edition",
  editionSchema,
  "categoryEditionsCollection"
);