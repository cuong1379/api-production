const express = require("express");
const router = express.Router();

const {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");

router.post("/", createUser);
router.get("/", getAllUser);
router.get("/:id", getSingleUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
