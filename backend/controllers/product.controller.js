const Product =
require("../models/product.model");

// GET PRODUCTS

exports.getProducts = async (req, res) => {

  try {

    const products =
      await Product.find();

    res.status(200).json(products);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

// ADD PRODUCT

exports.addProduct = async (req, res) => {

  try {

    const newProduct =
      new Product(req.body);

    const savedProduct =
      await newProduct.save();

    res.status(201).json(savedProduct);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};