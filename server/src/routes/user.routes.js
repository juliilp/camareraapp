const { Router } = require("express");
const { userCreate, allUser, loginUser, editSettingsUser, userLogout, verifyToken } = require("../controllers/user.controller");
const isAdmin = require("../middleware/isAdmin");
const authRequired = require("../middleware/authRequired");

const userRouter = Router()

userRouter.get("/allUser", allUser )
userRouter.post("/login", loginUser)
userRouter.post("/registro", userCreate)
userRouter.get("/logout", userLogout)
userRouter.put("/editSettingsUser/:id",editSettingsUser)
userRouter.get("/verifyToken", verifyToken)
module.exports = userRouter