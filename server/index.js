const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const UserModel = require("./models/Users");

const app = express();

mongoose.connect(
  `mongodb+srv://user123:${process.env.MONGODB_PASSWORD}@mycrud.kl25zab.mongodb.net/firstMernApp?retryWrites=true&w=majority`
);

app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.listen(3001, () => {
  console.log("funcionando");
});
