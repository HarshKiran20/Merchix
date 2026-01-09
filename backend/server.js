const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected ✅"))
  .catch(err => console.log("DB Error ❌", err));

app.get("/", (req, res) => {
  res.send("Backend + Database connected 🚀");
});

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const userRoutes = require("./routes/userRoutes");
app.use("/api/user", userRoutes);

const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

const orderRoutes = require("./routes/orderRoutes");
app.use("/api/orders", orderRoutes);

const stripeRoutes = require("./routes/stripeRoutes");
app.use("/api/stripe", stripeRoutes);

const returnRoutes = require("./routes/returnRoutes");
app.use("/api/returns", returnRoutes);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
