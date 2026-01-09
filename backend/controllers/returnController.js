const Return = require("../models/Return");

exports.requestReturn = async (req, res) => {
  const ret = await Return.create({
    order: req.body.orderId,
    reason: req.body.reason,
    type: req.body.type
  });

  res.json({ message: "Request submitted", ret });
};
