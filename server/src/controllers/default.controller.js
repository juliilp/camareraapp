const User = require("../models/user.model");

let rutaAccedida = false;

const createDefaultUsers = async () => {
  if (!rutaAccedida) {
    rutaAccedida = true;
    const usersToCreate = [
      {
        nombre: "Julian",
        email: "julianlopez43013@gmail.com",
        password: "123456",
        isAdmin: true,
        isChecked: true,
      },
      {
        nombre: "Account banned",
        email: "banned@gmail.com",
        password: "123456",
        bannedAccount: true,
      },
      {
        nombre: "Account not checked",
        email: "notchecked@gmail.com",
        password: "123456",
        isChecked: false,
      },
    ];

    try {
      const createdUsers = await User.insertMany(usersToCreate);
    } catch (error) {
      console.error("Error al crear usuarios:", error.message);
    }
  }
};

module.exports = { createDefaultUsers };
