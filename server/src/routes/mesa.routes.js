const { Router } = require("express");
const {createMesa, editMesa, deleteMesa, deleteMesaForAdmin, allMesas} = require("../controllers/mesa.controller");
const authRequired = require("../middleware/authRequired");
const isAdmin = require("../middleware/isAdmin");
const bannedAccount = require("../middleware/BannedAccount");
const mesaRoutes = Router()

mesaRoutes.get("/allMesas", allMesas)
mesaRoutes.post("/create", createMesa)
mesaRoutes.put("/editMesa/:id", authRequired,bannedAccount ,editMesa)
mesaRoutes.delete("/deleteMesa/:id",authRequired, isAdmin,deleteMesaForAdmin)

module.exports = mesaRoutes