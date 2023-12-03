const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

const authRequired = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "No hay token" });
    }

    const user = await new Promise((resolve, reject) => {
      jwt.verify(token, "token123", (err, decoded) => {
        if (err) {
          reject(err);
        } else {
          resolve(decoded);
        }
      });
    });

    const User = await userModel.findById(user.id);

    if (User.bannedAccount === true) {
      return res.status(401).json({ message: "Tu cuenta está baneada" });
    }

    req.user = User;
    next();
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = authRequired;
