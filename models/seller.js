const mongoose = require("mongoose");

const SellerSchema = mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 10,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    minlength: 4,
    maxlength: 140,
    required: true,
  }
});


var SellerModel = mongoose.model("seller", SellerSchema);

module.exports = SellerModel;
