const mongoose = require("mongoose");

exports.connectDb = async() => {
  try{
        await mongoose.connect(process.env.DB_URL)
      }catch(e){
        throw new Error(`DB Error: ${e.message}`)
      }
}