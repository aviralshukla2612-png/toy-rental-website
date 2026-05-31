const Rental = require("../models/rental.model");

exports.createRental = async (req, res) => {
  try {

    // Check if product is already rented
    const existingRental = await Rental.findOne({
      product: req.body.productId,
      status: "rented"
    });

    if (existingRental) {
      return res.status(400).json({
        message: "Product is already rented"
      });
    }

    const rental = await Rental.create({
      user: req.user.id,
      product: req.body.productId,
    });

    res.status(201).json({
      message: "Product rented successfully",
      data: rental,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
// Get rentals for the logged-in user

exports.getMyRentals = async (req, res) => {
  try {
    const rentals = await Rental.find({
      user: req.user.id
    }).populate("product");

    res.status(200).json({
      data: rentals
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Return a rented product

exports.returnProduct = async (req, res) => {
  try {
    console.log("PARAMS:", req.params);

    const rental = await Rental.findByIdAndUpdate(
      req.params.id,
      {
        status: "returned",
        returnDate: new Date()
      },
      {
        new: true
      }
    );

    console.log("RENTAL:", rental);

    if (!rental) {
      return res.status(404).json({
        message: "Rental not found"
      });
    }

    res.status(200).json({
      message: "Product returned successfully",
      data: rental
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
};

// Admin function to get all rentals

exports.getAllRentals = async (req, res) => {
  try {
    const rentals = await Rental.find()
      .populate("user", "name email")
      .populate("product", "title price");

    res.status(200).json({
      data: rentals
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};