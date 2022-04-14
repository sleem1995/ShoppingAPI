const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    minlength: 5,
    maxlength: 10,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    minlength: 10,
    maxlength: 90,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  sellerId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Seller",
    required: true,
  },
  creationDate: {
    type: Date,
    required: true,
  },
});

var productModel = mongoose.model("Product", productSchema);

module.exports = productModel;
