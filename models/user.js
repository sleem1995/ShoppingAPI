const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

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

userSchema.pre('save', function () {

  var salt = bcrypt.genSaltSync(10);
  this.password = bcrypt.hashSync(this.password, salt);
})

userSchema.pre('save', function () {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) 
    return next();
  var salt = bcrypt.genSaltSync(10);
  this.password = bcrypt.hashSync(this.password, salt);
})

// userSchema.pre('save', function(next) {
//   var user = this;

//   // only hash the password if it has been modified (or is new)
//   if (!user.isModified('password')) return next();

//   // generate a salt
//   bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
//       if (err) return next(err);

//       // hash the password using our new salt
//       bcrypt.hash(user.password, salt, function(err, hash) {
//           if (err) return next(err);
//           // override the cleartext password with the hashed one
//           user.password = hash;
//           next();
//       });
//   });
// });

var userModel = mongoose.model("User", userSchema);

module.exports = userModel;