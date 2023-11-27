const { Router } = require("express");
const userRouter = require("../routes/user.routes");
const mesaRouter = require("./mesa.routes")
const routes = Router()

routes.use("/user", userRouter)
routes.use("/mesa", mesaRouter)
module.exports = routes