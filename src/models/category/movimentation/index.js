const mongoose = require("mongoose");

const movimentationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "Movimentation",
  movimentationSchema,
  "categoryMovimentationsCollection"
);
