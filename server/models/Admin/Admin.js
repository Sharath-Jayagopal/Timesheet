// Mongoose connection
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/user");

// Specifying Image Schema
var adminSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  users: [],
});

// Specifying model
let adminModel = new mongoose.model("Admin", adminSchema);

module.exports = adminModel;
