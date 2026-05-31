const express = require("express");
const router = express.Router();

const {
  createRental,
  getMyRentals,
  returnProduct,
  getAllRentals
} = require("../controllers/rental.controller");

const authMiddleware = require("../middleware/auth");

router.post(
  "/",
  authMiddleware(),
  createRental
);
router.get(
  "/my-rentals",
  authMiddleware(),
  getMyRentals
);
router.put(
  "/:id/return",
  authMiddleware(),
  returnProduct
);
router.get(
  "/",
  authMiddleware("admin"),
  getAllRentals
);
module.exports = router;
