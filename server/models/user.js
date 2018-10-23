var mongoose = require("mongoose");
var User = mongoose.model("Users", {
  name: {
    type: String,
    require: true,
    minlength: 6,
    trim: true
  },
  username: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, "can't be blank"],
    match: [/^[a-zA-Z0-9]+$/, "is invalid"],
    index: true
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, "is invalid"],
    index: true
  },

  password: {
    type: String,
    require: true,
    minlength: 6,
    trim: true
  }
});
module.exports = { User };
