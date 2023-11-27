const app = require("./src/app");
const connectDB = require("./src/libs/connectDB");

app.listen(3001, async ()=> {
    console.log("Funcionando en la ruta 3001")
    await connectDB()
})