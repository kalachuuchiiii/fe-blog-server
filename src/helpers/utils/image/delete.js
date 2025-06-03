const cloudinary = require("./cloudinary.js")

exports.deleteImage = async(public_id = null) => {
  if(!public_id){
    throw new Error("Public_id is undefined at deleteImage");
  }
 const info = await cloudinary.uploader.destroy(public_id);
 return info;
}