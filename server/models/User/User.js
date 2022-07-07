// Mongoose connection
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/user");

// Specifying Image Schema
var userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  role: String,
  users: [],
});

// Specifying model
let userModel = new mongoose.model("User", userSchema);

module.exports = userModel;
