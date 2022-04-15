const orderModel = require("../models/orders");
function findOrders() {
    var orders = orderModel.find({});
    return orders;
  }

  function createOrder(order) {
    var order= orderModel.create(order);
    return order;
  }

  module.exports = {  findOrders, createOrder};