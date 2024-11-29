
const mongoose = require("mongoose")

const connectToDb = async()=>{
    try{
       await mongoose.connect("mongodb+srv://shivaprasad06559:tfDybz4vQbBpAgh4@cluster0.8urzb.mongodb.net/")
       console.log("database connected successfully")
    }catch(err){
        console.log(err)
    }
}

module.exports = connectToDb;