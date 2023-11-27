const { Router } = require("express");
const { createProduct, editProduct, deleteProduct, allProducts } = require("../controllers/productos.controller");
const authRequired = require("../middleware/authRequired");
const isAdmin = require("../middleware/isAdmin");

const productosRouter = Router()

productosRouter.get("/allProducts", allProducts)
productosRouter.post("/createProduct", createProduct)
productosRouter.put("/editProduct/:id", authRequired,isAdmin ,editProduct)
productosRouter.delete("/deleteProduct/:id",authRequired,isAdmin ,deleteProduct)
module.exports = productosRouter