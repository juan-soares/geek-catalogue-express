const mongoose = require("mongoose");

const boardGameSchema = new mongoose.Schema(
  {
    nameUsa: { type: String, required: true },
    releaseDate: { type: Date, required: true },
    images: [
      {
        url: { type: String, required: true },
        name: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "BoardGame",
  boardGameSchema,
  "boardGamesCollection"
);
