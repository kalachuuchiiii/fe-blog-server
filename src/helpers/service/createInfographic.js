const { uploadImage } = require("../../helpers/utils/image/upload.js");

exports.createInfographic = async(Model, req, res) => {
  const { file = null } = req.body; 
  if(!file){throw new Error("No url found at createInfographic.js")}; 
  const { public_id = null, url = null } = await uploadImage(file);
  const data = await new Model({...req.body, url, public_id}).save();
  return res.status(200).json({
          success: true, 
          data
        })
}