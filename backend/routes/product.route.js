const express = require("express");
const router = express.Router();

const {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/product.controller");

const authMiddleware = require("../middleware/auth");

// GET ALL PRODUCTS
router.get("/", getProducts);

// GET PRODUCT BY ID
router.get("/:id", getProductById);

// UPDATE PRODUCT

router.put("/:id", updateProduct);

// DELETE PRODUCT

router.delete("/:id", deleteProduct);

// ADD PRODUCT (ADMIN ONLY)
router.post(
  "/",
  authMiddleware("admin"),
  addProduct
);

// UPDATE PRODUCT (ADMIN ONLY)
router.put(
  "/:id",
  authMiddleware("admin"),
  updateProduct
);

// DELETE PRODUCT (ADMIN ONLY)
router.delete(
  "/:id",
  authMiddleware("admin"),
  deleteProduct
);

module.exports = router;