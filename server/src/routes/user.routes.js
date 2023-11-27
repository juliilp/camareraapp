const { Router } = require("express");
const { userCreate, allUser, loginUser, editSettingsUser, userLogout } = require("../controllers/user.controller");
const isAdmin = require("../middleware/isAdmin");
const authRequired = require("../middleware/authRequired");
const bannedAccount = require("../middleware/BannedAccount");

const userRouter = Router()

userRouter.get("/allUser", allUser )
userRouter.post("/login", loginUser)
userRouter.post("/registro", userCreate)
userRouter.get("/logout", userLogout)
userRouter.put("/editSettingsUser/:id",authRequired ,isAdmin, bannedAccount,editSettingsUser)
module.exports = userRouter