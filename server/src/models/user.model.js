const { Schema, model} = require("mongoose");

const User = new Schema({
  nombre: {
    type: String,
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: true

  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  isChecked:{
    type: Boolean,
    default: false
  },
  bannedAccount:{
    type: Boolean,
    default: false
  }
});


module.exports = model("User", User)