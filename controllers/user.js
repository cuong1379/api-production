const mongoose = require("mongoose");
const User = require("../models/user");

exports.createUser = (req, res) => {
  console.log(req.body);
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });

  return user
    .save()
    .then((newUser) => {
      return res.status(201).json({
        success: true,
        message: "New user created successfully",
        user: newUser,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Server error. Please try again.",
        error: error.message,
      });
    });
};

exports.getAllUser = (req, res) => {
  User.find()
    .select("id username password")
    .then((allUser) => {
      return res.status(200).json({
        success: true,
        message: "A list of all User",
        user: allUser,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server error. Please try again.",
        error: err.message,
      });
    });
};

exports.getSingleUser = async (req, res) => {
  console.log(req.params.id);
  User.findById(req.params.id)
    .then((singleUser) => {
      res.status(200).json({
        success: true,
        message: `More on`,
        user: singleUser,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "This User does not exist",
        error: err.message,
      });
    });
};

exports.updateUser = (req, res) => {
  const id = req.params.id;
  const updateObject = req.body;
  User.updateOne({ _id: id }, { $set: updateObject })
    .exec()
    .then(() => {
      res.status(200).json({
        success: true,
        message: "User is updated",
        updateUser: updateObject,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server error. Please try again.",
      });
    });
};

exports.deleteUser = (req, res) => {
  const id = req.params.id;
  console.log(id);
  User.findByIdAndRemove(id)
    .exec()
    .then(() =>
      res.json({
        success: true,
      })
    )
    .catch((err) =>
      res.status(500).json({
        success: false,
        message: "server said: djt me dell xoa dc.",
      })
    );
};
