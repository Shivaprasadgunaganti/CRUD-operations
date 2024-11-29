const express = require("express")
const app = express()
const productRoutes = require("./routes/productRoutes")
const connectToDB = require("./database/db")

app.use(express.json())

connectToDB()

app.get("/",(req,res)=>{
    res.send("hello world")
})



app.use("/api",productRoutes)

app.listen(5000,()=>{
    console.log("Server is connected At port 5000")
})