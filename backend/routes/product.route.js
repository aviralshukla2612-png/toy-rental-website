const express =
require("express");

const router =
express.Router();

const {
  getProducts,
  addProduct,
} = require("../controllers/product.controller");

// GET PRODUCTS

router.get("/", getProducts);

// ADD PRODUCT

router.post("/", addProduct);

module.exports = router;