const mongoose = require("mongoose");

const modalitySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "Modality",
  modalitySchema,
  "categoryModalitiesCollection"
);
