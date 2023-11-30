const app = require("./src/app");
const { createDefaultUsers } = require("./src/controllers/default.controller");
const connectDB = require("./src/libs/connectDB");

const startServer = async () => {
    let rutaAccedida = false
    try {
    await connectDB();
    console.log("Conexión a la base de datos exitosa");
    app.listen(3001, () => {
      console.log("Funcionando en la ruta 3001");
      if(!rutaAccedida) {
        rutaAccedida = true
        // createDefaultUsers(); 
      }
    });
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
};

startServer();
