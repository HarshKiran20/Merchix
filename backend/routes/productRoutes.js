const express = require("express");
const router = express.Router();
const {
  addProduct,
  getProducts,
  getProductById
} = require("../controllers/productController");

// Admin (later we restrict)
router.post("/", addProduct);

// Public
router.get("/", getProducts);
router.get("/:id", getProductById);

module.exports = router;
