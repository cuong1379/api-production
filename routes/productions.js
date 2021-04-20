const express = require("express");
const router = express.Router();

const {
  createProduction,
  getAllProduction,
  getSingleProduction,
  getQueryProduction,
  updateProduction,
  deleteProduction,
} = require("../controllers/production");

router.post("/", createProduction);
router.get("/", getAllProduction);
router.get("/:id", getSingleProduction);
router.get("/", getQueryProduction);
router.put("/:id", updateProduction);
router.delete("/:id", deleteProduction);

module.exports = router;
