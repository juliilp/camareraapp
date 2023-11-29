const cookieParser = require("cookie-parser")
const express = require("express")
const morgan = require("morgan")
const routes = require("./routes")
const cors = require("cors")
const app = express()
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true, 
  }));
app.use(morgan("dev"))
app.use(express.json())
app.use(cookieParser())
app.use("/", routes)
module.exports = app