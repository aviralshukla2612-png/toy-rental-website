const express = require("express");
const router = express.Router();

const {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");

const authMiddleware = require("../middleware/auth");
const upload = require("../middleware/upload");

// GET ALL PRODUCTS
router.get("/", getProducts);

// GET PRODUCT BY ID
router.get("/:id", getProductById);

// ADD PRODUCT (ADMIN ONLY + IMAGE UPLOAD)
router.post(
  "/",
  authMiddleware("admin"),
  upload.single("image"),
  addProduct
);

// UPDATE PRODUCT (ADMIN ONLY + IMAGE UPLOAD)
router.put(
  "/:id",
  authMiddleware("admin"),
  upload.single("image"),
  updateProduct
);

// DELETE PRODUCT (ADMIN ONLY)
router.delete(
  "/:id",
  authMiddleware("admin"),
  deleteProduct
);

module.exports = router;