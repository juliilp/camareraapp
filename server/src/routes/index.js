const { Router } = require("express");
const userRouter = require("../routes/user.routes");
const mesaRouter = require("./mesa.routes");
const productosRoutes = require("./productos.routes");
const routes = Router()

routes.use("/user", userRouter)
routes.use("/mesa", mesaRouter)
routes.use("/productos", productosRoutes)
module.exports = routes