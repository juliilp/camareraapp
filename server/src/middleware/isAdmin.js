const userModel = require("../models/user.model");

const isAdmin = async (req, res, next) => {
  try {
    const user = req.user;
    if (user.isAdmin === true) {
      next();
    }
    res.status(401).json({ message: "Necesitas ser admin" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = isAdmin;
