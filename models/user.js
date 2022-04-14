const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
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
  },
  isAdmin:{
    typeof:Boolean,
    default:false
  },
  products:{
    type:Array
  },
});


var userModel = mongoose.model("User", userSchema);

module.exports = userModel;
