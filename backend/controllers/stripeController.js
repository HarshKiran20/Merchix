const Stripe = require("stripe");
const Order = require("../models/Order");

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// CREATE PAYMENT INTENT
exports.createPaymentIntent = async (req, res) => {
  try {
    const { amount, orderId } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // INR to paise
      currency: "inr",
      metadata: { orderId }
    });

    res.json({
      clientSecret: paymentIntent.client_secret
    });
  } catch (err) {
    res.status(500).json({ error: "Stripe payment failed" });
  }
};

// CONFIRM PAYMENT (OPTIONAL SERVER VERIFY)
exports.confirmPayment = async (req, res) => {
  const { orderId } = req.body;

  await Order.findByIdAndUpdate(orderId, {
    paymentStatus: "paid"
  });

  res.json({ message: "Payment successful" });
};
