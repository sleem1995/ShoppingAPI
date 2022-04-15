const express = require('express');
const jwt = require("jsonwebtoken");
require("dotenv").config()

var router = express.Router();

const { findOrders, createOrder } = require('../controller/orders')
router.get("/", async (req, res, next) => {
  var orders = await findOrders();
  if (orders) {
    res.json(orders);
  } else {
    res.json({ message: "orders not found" });
  }
});

router.post("/", async (req, res, next) => {
  var {authorization}=req.headers;
  var decoded = jwt.verify(authorization, process.env.SECRET_KEY);
  console.log("decoded "+decoded.id) 
  createOrder(decoded.id, req.body).then((order) => {
    res.status(201).json(order)
  }).catch(() => {
    res.status(422).json(err)
  })
});

module.exports = router;







