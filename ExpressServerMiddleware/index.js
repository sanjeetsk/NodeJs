// Please don't change the pre-written code.

const express = require("express");
const app = express();

const logRequest = () => {
  // Write your code here
};

logRequest();

app.get("/", (req, res) => {
  res.send("Coding Ninjas!");
});

module.exports = app;
