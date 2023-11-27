const Mesa = require("../models/mesa.model");
const productsModel = require("../models/products.model");
const allMesas = async (req,res) => {
  try {
    const allMesas = await Mesa.find({})
    res.status(200).json(allMesas)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}
const createMesa = async (req, res) => {
  try {
    const { pedido, pedidoListo, pedidoParaEntregar } = req.body;
    const createMesa = await Mesa.create({
      pedido,
      pedidoListo,
      pedidoParaEntregar,
    });
    res.status(200).json(createMesa);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const editMesa = async (req, res) => {
  try {
    const { pedido, pedidoListo, pedidoParaEntregar } = req.body;
    const id = req.params.id;
    const editMesa = await Mesa.findByIdAndUpdate(id, {
      pedido,
      pedidoListo,
      pedidoParaEntregar,
    });
    if (!editMesa) {
      return res.status(404).json({ message: "No se encontró la mesa" });
    }
    
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteMesaForAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.user
    const findMesaAndDelete = Mesa.findByIdAndDelete(id);
    res.status(200).json({
      mesaBorrada: findMesaAndDelete,
      user
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const addProductMesa = async (req,res) => {
try {
  const {productos} = req.body 
  const {id} = req.params
  const findMesa = await Mesa.findById(id)
  findMesa.pedido = findMesa.pedido.concat(productos);
  await findMesa.save()
  res.status(200).json({ message: "Producto agregado a la mesa correctamente" });
} catch (error) {
  res.status(400).json({error: error.message})
}

}

module.exports = { createMesa, editMesa, deleteMesaForAdmin, allMesas, addProductMesa };
