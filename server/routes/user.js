const express = require("express");
const router = express.Router();

const UserModel = require("../models/User/User");
const TaskModel = require("../models/Task/Task");
// const AdminModel = require("../models/Admin/Admin");

router.post("/register", (req, res) => {
  const { name, email, password, role } = req.body;

  if (name !== null && email !== null && password !== null && role !== null) {
    const newUser = new UserModel({ name, email, password, role });
    newUser
      .save()
      .then((user) => {
        res.status(200).json({
          register: true,
          user,
        });
      })
      .catch((err) => {
        res.status(400).json({
          register: false,
          err,
        });
      });
  }
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email !== null && password !== null) {
    UserModel.findOne({ email })
      .then((user) => {
        if (user.password === password) {
          console.log(user);
          res.status(200).json({
            login: true,
            user,
          });
        } else {
          res.status(400).json({
            login: false,
            error: "password not correct",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({
          login: false,
        });
      });
  }
});

router.post("/task", (req, res) => {
  const { name, description, dueDate, assignedTo, completed } = req.body;
  const newTask = new TaskModel({
    name: name,
    desc: description,
    assignedTO: assignedTo,
    dueDate: dueDate,
    completed: completed,
  });
  newTask
    .save()
    .then((task) => {
      res.status(200).json({
        task,
      });
    })
    .catch((err) => {
      res.status(500).json({ err });
    });
});

router.get("/tasks", (req, res) => {
  const { id } = req.query;
  console.log(id);
  TaskModel.find({ assignedTO: id })
    .then((tasks) => {
      res.status(200).json({ tasks });
    })
    .catch((err) => res.status(500).json(err));
});

router.get("/taskUpdate/:id", (req, res) => {
  const id = req.params.id;
  TaskModel.find({ _id: id }).then((task) => {
    const completed = task.completed;
    TaskModel.updateOne({ _id: id }, { completed: !completed }).then(
      (updatedTask) => {
        res.status(200).json({
          task: updatedTask,
        });
      }
    );
  });
});

router.get("/users", (req, res) => {
  UserModel.find()
    .then((users) => {
      res.status(200).json({ users });
    })
    .catch((err) => res.status(500).json(err));
});

router.get("/user/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findOne({ _id: id })
    .then((user) => {
      res.status(200).json({ user });
    })
    .catch((err) => res.status(500).json(err));
});

router.post("/addUser", (req, res) => {
  const { id, underUserId } = req.body;
  UserModel.findOne({ _id: id })
    .then((user) => {
      if (user.users === undefined) {
        const underUser = [];
        underUser.push(underUserId);
        user.users = underUser;
        user.save();
        res.status(200).json({
          message: "user added",
        });
      } else {
        if (user.users.includes(underUserId)) {
          res.status(409).json({
            message: "user already exists",
          });
        }
        user.users.push(underUserId);
        user.save();
        res.status(200).json({
          message: "user added",
        });
      }
    })
    .catch((err) => {});
});

module.exports = router;
