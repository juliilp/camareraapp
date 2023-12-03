const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const { hash, compare } = require("bcryptjs");
const createToken = require("../libs/createToken");
const userModel = require("../models/user.model");
const userCreate = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;

    const findUser = await User.findOne({ email });
    console.log("findUser" + findUser);
    if (findUser) {
      return res
        .status(401)
        .json({ error: "Ya existe un usuario con ese email" });
    }
    const hashPassword = await hash(password, 10);

    const createUser = await User.create({
      nombre,
      email,
      password: hashPassword,
    });

    const token = await createToken({ id: createUser.id });
    res.cookie("token", token, { sameSite: "None", secure: true });
    res.status(200).json({ user: createUser, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const allUser = async (req, res) => {
  try {
    const allUser = await User.find({});
    res.status(200).json(allUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const findUser = await User.findOne({ email });

    if (!findUser) {
      return res.status(401).json({ error: "El email no existe" });
    }
    const comparePassword = await compare(findUser.password, password);

    if (comparePassword) {
      return res.status(400).json({ error: "Contraseña incorrecta" });
    }

    const token = await createToken({ id: findUser.id });
    res.cookie("token", token, {
      sameSite: "None",
      secure: true,
    });
    res.status(200).json({ user: findUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const editUser = (req, res) => {};

const userLogout = (req, res) => {
  try {
    res.clearCookie('token').status(200).json({ message: "Usuario deslogueado" });
    res.status(200).json({message:"Usuario deslogueado"})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
};

const editSettingsUser = async (req, res) => {
  const { id } = req.params;
  const { isChecked, isAdmin, bannedAccount } = req.body;
  const findUser = await userModel.findByIdAndUpdate(id, {
    isChecked,
    isAdmin,
    bannedAccount,
  });

  res.status(200).json({
    message: "Usuario actualizado",
    usuario: findUser,
  });
};

const verifyToken = (req, res) => {
  const token = req.cookies.token;
  console.log(req.cookies);
  if (!token) {
    res.status(401).json({ error: "No hay token" });
  }
  jwt.verify(token, "token123", async (err, user) => {
    if (err) return res.status(401).json("error");

    if (!user) {
      return res.status(401).json({ error: "No hay user" });
    }
    const userFind = await User.findById(user.id);
    if (!userFind) {
      return res.status(404).json({ error: "No se encontro el usuario" });
    }
    return res.status(200).json({
      id: userFind.id,
      email: userFind.email,
      nombre: userFind.nombre,
      isAdmin: userFind.isAdmin,
      isChecked: userFind.isChecked,
      bannedAccount: userFind.bannedAccount,
    });
  });
};
module.exports = {
  userCreate,
  allUser,
  editUser,
  loginUser,
  editSettingsUser,
  userLogout,
  verifyToken,
};
