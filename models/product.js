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
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "user",
    // required: true,
  },
  
},
{timestamps:true}
);

var productModel = mongoose.model("product", productSchema);

module.exports = productModel;
