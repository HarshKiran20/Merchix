const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const {
  createPaymentIntent,
  confirmPayment
} = require("../controllers/stripeController");

router.post("/create-intent", protect, createPaymentIntent);
router.post("/confirm", protect, confirmPayment);

module.exports = router;
