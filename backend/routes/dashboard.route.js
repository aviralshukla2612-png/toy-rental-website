const express = require("express");
const router = express.Router();

const {
  getDashboardStats
} = require("../controllers/dashboard.controller");

const authMiddleware = require("../middleware/auth");

router.get(
  "/",
  authMiddleware("admin"),
  getDashboardStats
);

module.exports = router;