const app = require("./src/app");
const { createDefaultUsers } = require("./src/controllers/default.controller");
const connectDB = require("./src/libs/connectDB");

app.listen(3001, async ()=> {
    console.log("Funcionando en la ruta 3001")
    await connectDB()
})

app.on("listening", createDefaultUsers)