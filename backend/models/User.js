const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    sparse: true
  },
  mobile: {
    type: String,
    unique: true
  },
  password: {
    type: String
  },
  addresses: [
    {
      addressLine: String,
      city: String,
      state: String,
      pincode: String
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
