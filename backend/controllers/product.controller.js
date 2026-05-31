const Product = require("../models/product.model");

// GET ALL PRODUCTS
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json({
      message: "Products fetched successfully",
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET PRODUCT BY ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ADD PRODUCT
exports.addProduct = async (req, res) => {
  try {
    const productData = {
      ...req.body,
      image: req.file ? req.file.filename : "",
    };

    const newProduct = new Product(productData);

    const savedProduct = await newProduct.save();

    res.status(201).json({
      message: "Product added successfully",
      data: savedProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// UPDATE PRODUCT
exports.updateProduct = async (req, res) => {
  try {
    const updateData = {
      ...req.body,
    };

    if (req.file) {
      updateData.image = req.file.filename;
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: updateData },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedProduct) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      message: "Product updated successfully",
      data: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// DELETE PRODUCT
exports.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(
      req.params.id
    );

    if (!deletedProduct) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};