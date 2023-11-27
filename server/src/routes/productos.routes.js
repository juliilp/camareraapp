const { Router } = require("express");
const { createProduct, editProduct, deleteProduct, allProducts } = require("../controllers/productos.controller");

const productosRouter = Router()

productosRouter.get("/allProducts", allProducts)
productosRouter.post("/createProduct", createProduct)
productosRouter.put("/editProduct/:id", editProduct)
productosRouter.delete("/deleteProduct/:id", deleteProduct)
module.exports = productosRouter