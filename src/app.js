const express = require("express");
const cors = require("cors");
const connectMongoDB = require("./config/db/mongo");
const userRoutes = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());

connectMongoDB();

app.get("/", (req, res) => {
  res.send("Welcome to my Geek World!");
});

app.use("/user", userRoutes);

module.exports = app;
