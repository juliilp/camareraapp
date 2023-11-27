const { Schema, model } = require("mongoose");

const mesaSchema = new Schema({
  numeroMesa: {
    type: Number,
    unique: true,
  },
  pedido: {
    type: [String],
    required: true,
    default: [],
  },
  pedidoListo: {
    type: Boolean,
    default: false,
  },
  pedidoParaEntregar: {
    type: Boolean,
    default: false,
  },
});

// Hook pre-save para incrementar automáticamente el número de mesa
mesaSchema.pre('save', async function (next) {
  if (!this.numeroMesa) {
    // Si el número no está definido, busca el número máximo existente y suma 1
    const lastMesa = await this.constructor.findOne({}, { numeroMesa: 1 }, { sort: { numeroMesa: -1 } });
    this.numeroMesa = (lastMesa && lastMesa.numeroMesa + 1) || 1;
  }

  next();
});

const Mesa = model("Mesa", mesaSchema);

module.exports = Mesa;
