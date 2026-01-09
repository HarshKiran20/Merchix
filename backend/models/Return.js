const mongoose = require("mongoose");

const returnSchema = new mongoose.Schema({
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order"
  },
  reason: String,
  type: {
    type: String,
    enum: ["return", "replacement"]
  },
  status: {
    type: String,
    default: "requested"
  }
}, { timestamps: true });

module.exports = mongoose.model("Return", returnSchema);
