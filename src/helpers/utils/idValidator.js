const { Types } = require("mongoose");
exports.idValidator = (req) => {
  const { params = {} } = req;
  const keys = Object.keys(params);
  if(keys.length === 0){
    throw new Error("No params found. on IDValidator ")
  }
  let validIds = {};
   keys.forEach((key) => {
    if(Types.ObjectId.isValid(params[key])){
      validIds[key] = params[key];
    }else{
      throw new Error(`${key}: ${params[key]} is not an MongoDB ObjectID. on IDValidator`)
    }
  })
  return validIds;
}