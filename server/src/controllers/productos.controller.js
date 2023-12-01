const Products = require("../models/products.model");

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await Products.findByIdAndDelete(id);
    res.status(200).json(deleteProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const editProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre } = req.body;
    const editProduct = await Products.findByIdAndUpdate(id, { nombre });
    res.status(200).json(editProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const createProduct = async (req, res) => {
  try {
    const { nombre } = req.body;
    const findProduct = await Products.findOne({ nombre });
    if (findProduct) {
      return res
        .status(401)
        .json({ error: "Ya existe un producto con ese nombre" });
    }
    const createProduct = await Products.create({ nombre });
    res.status(200).json(createProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const allProducts = async (req, res) => {
  try {
    const allProducts = await Products.find({});
    const productsName = allProducts.map((n) => n.nombre);

    res.status(200).json(productsName);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { deleteProduct, editProduct, createProduct, allProducts };
