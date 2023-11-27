const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

const authRequired =  (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    res.status(401).json({ message: "No hay token" });
  }

  jwt.verify(token, "token123", async (err, user) => {
    if (err) {
      res.status(400).json(err);
    }
    const User = await userModel.findById(user.id)
    req.user = User
  });
  next();
};

module.exports = authRequired;
