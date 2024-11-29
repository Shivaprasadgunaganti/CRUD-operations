const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name:{
        type:String
    },
    mrp:{
        type:Number
    },
    expire:{
        type:Date,
        default: new Date()
    },
    quantity:{
        type:Number
    }

})
const Product = mongoose.model("Product",productSchema)
module.exports = Product;