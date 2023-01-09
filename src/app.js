const express = require("express");
const connectMongoDB = require("./config/db/mongo");
//const user = require("./routes/user");

const app = express();

connectMongoDB();

app.get("/", (req, res) => {
  res.send("Welcome to my Geek World!");
});

//app.use("/user", user);

module.exports = app;
