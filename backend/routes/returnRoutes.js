const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const { requestReturn } = require("../controllers/returnController");

router.post("/", protect, requestReturn);

module.exports = router;
