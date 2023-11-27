const { Schema, model } = require("mongoose");

const Products = new Schema({
  nombre: {
    type: String,
    unique:true
  },
});

module.exports = model("Products", Products);
