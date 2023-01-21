const express = require("express");
const cors = require("cors");
const connectMongoDB = require("./config/db/mongo");

const searchRoutes = require("./routes/search");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");

const app = express();

app.use(cors());
app.use(express.json());

connectMongoDB();

app.get("/", (req, res) => {
  res.send("Welcome to my Geek World!");
});

app.use("/search", searchRoutes);
app.use("/user", userRoutes);
app.use("/category", categoryRoutes);

module.exports = app;
