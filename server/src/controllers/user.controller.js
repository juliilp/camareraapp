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
    res.cookie("token", token);
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
     return  res.status(401).json({ error: "El email no existe" });
    }
    const comparePassword = await compare(findUser.password, password);
    
    if (comparePassword) {
      return res.status(400).json({ error: "Contraseña incorrecta" });
    }

    const token = await createToken({id: findUser.id});
    res.cookie("token", token);
    res.status(200).json({ user: findUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const editUser = (req, res) => {};

const userLogout = (req,res) => {
  jwt.sign("", "token123", {expiresIn: new Date(0)})
}

const editSettingsUser = async (req,res) => {
  const {id} = req.params
  const {isChecked,isAdmin,bannedAccount} = req.body
  const findUser = await userModel.findByIdAndUpdate(id, {isChecked,isAdmin, bannedAccount})

  res.status(200).json({
    message:"Usuario actualizado",
    usuario: findUser
  })
}

module.exports = { userCreate, allUser, editUser, loginUser, editSettingsUser, userLogout };
