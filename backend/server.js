const express = require("express");
const dbconnect = require("./database/index");
const { PORT } = require("./config/index");
const app = express();

dbconnect();

app.get("/", (req, res) => {
  res.json({ msg: "Hello World!" });
});

app.listen(PORT, () => {
  console.log("Server is running");
});
