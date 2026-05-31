require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const dashboardRoutes = require("./routes/dashboard.route");

const app = express();

// ====================
// MIDDLEWARE
// ====================

app.use(cors());
app.use(express.json());

// Serve uploaded images
app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"))
);

// ====================
// DATABASE CONNECTION
// ====================

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  });

// ====================
// ROUTES
// ====================

app.get("/", (req, res) => {
  res.send("Welcome to the Toy Rental API");
});

app.use("/api/auth", require("./routes/auth.route"));
app.use("/api/test", require("./routes/test.route"));
app.use("/api/practice", require("./routes/practice.route"));
app.use("/api/products", require("./routes/product.route"));
app.use("/api/rentals", require("./routes/rental.route"));
app.use(
  "/api/dashboard",
  dashboardRoutes
);

// ====================
// SERVER
// ====================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});