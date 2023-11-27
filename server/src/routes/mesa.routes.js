const { Router } = require("express");
const {createMesa, editMesa, deleteMesa, deleteMesaForAdmin, allMesas, addProductMesa} = require("../controllers/mesa.controller");
const authRequired = require("../middleware/authRequired");
const isAdmin = require("../middleware/isAdmin");
const mesaRoutes = Router()

mesaRoutes.get("/allMesas", allMesas)
mesaRoutes.post("/create", createMesa)
mesaRoutes.put("/editMesa/:id", authRequired,editMesa)
mesaRoutes.delete("/deleteMesa/:id",authRequired, isAdmin,deleteMesaForAdmin)
mesaRoutes.put("/agregarPedido/:id", addProductMesa )
module.exports = mesaRoutes