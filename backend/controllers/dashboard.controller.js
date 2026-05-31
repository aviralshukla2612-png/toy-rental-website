const Product = require("../models/product.model");
const User = require("../models/user.model");
const Rental = require("../models/rental.model");

exports.getDashboardStats = async (req, res) => {
  try {

    const totalProducts = await Product.countDocuments();

    const totalUsers = await User.countDocuments();

    const totalRentals = await Rental.countDocuments();

    const activeRentals = await Rental.countDocuments({
      status: "rented"
    });

    const returnedRentals = await Rental.countDocuments({
      status: "returned"
    });

    res.status(200).json({
      totalProducts,
      totalUsers,
      totalRentals,
      activeRentals,
      returnedRentals
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};