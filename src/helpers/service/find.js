const { pageParams } = require("../utils/paginationParams.js");
exports.find = async(Model, req, res) => {
  const filter = JSON.parse(req.query?.filter || "{}")
  
  const { skip, limit } = pageParams(req);
  const [data, total] = await Promise.all([
    Model.find(filter).skip(skip).limit(limit).lean(),
    Model.find(filter).countDocuments().lean()
    ])
  
  return res.status(200).json({
          success: true, 
          data, 
          total
        })
}