const mongoose = require("mongoose");
const Production = require("../models/production");

exports.createProduction = (req, res) => {
  console.log(req.body);
  const production = new Production({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    thumbnail: req.body.thumbnail,
    quantity: req.body.quantity,
  });

  return production
    .save()
    .then((newProduction) => {
      return res.status(201).json({
        success: true,
        message: "New cause created successfully",
        production: newProduction,
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

exports.getAllProduction = (req, res) => {
  Production.find()
    .select("id name price description thumbnail quantity")
    .then((allProduction) => {
      return res.status(200).json({
        success: true,
        message: "A list of all production",
        production: allProduction,
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

// get single production
exports.getSingleProduction = async (req, res) => {
  console.log(req.params.id);
  Production.findById(req.params.id)
    .then((singleProduction) => {
      res.status(200).json({
        success: true,
        message: `More on ${singleProduction.name}`,
        production: singleProduction,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "This production does not exist",
        error: err.message,
      });
    });
  // const product = await Production.findById(req.params.id)
  // if(!product) return res.status(500).json({
  //   success: false,
  //   message: 'This production does not exist',
  //   error: err.message,
  // });
  // res.status(200).json({
  //   success: true,
  //   Production: product,
  // });
};

// update production
exports.updateProduction = (req, res) => {
  const id = req.params.id;
  const updateObject = req.body;
  Production.updateOne({ _id: id }, { $set: updateObject })
    .exec()
    .then(() => {
      res.status(200).json({
        success: true,
        message: "Production is updated",
        updateProduction: updateObject,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server error. Please try again.",
      });
    });
};

// delete a production
exports.deleteProduction = (req, res) => {
  const id = req.params.id;
  console.log(id);
  Production.findByIdAndRemove(id)
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
