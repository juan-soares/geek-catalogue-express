const mongoose = require("mongoose");

const themeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    elements: [
      new mongoose.Schema({ title: { type: String, required: true } }),
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Theme", themeSchema, "themesCollection");
