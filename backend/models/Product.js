const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  category: {
    type: String,
    enum: ["belt", "wallet", "bag", "accessory"]
  },
  description: String,
  price: Number,
  stock: Number,
  images: [String]
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
