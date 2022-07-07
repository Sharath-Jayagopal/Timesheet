// Mongoose connection
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/user");

// Specifying Image Schema
var taskScehma = new mongoose.Schema({
  name: String,
  desc: String,
  assignedTO: mongoose.Schema.Types.ObjectId,
  dueDate: String,
  completed: Boolean,
});

// Specifying model
let taskModel = new mongoose.model("Task", taskScehma);

module.exports = taskModel;
