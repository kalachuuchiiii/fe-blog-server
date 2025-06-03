const { idValidator } = require('../utils/idValidator.js')

exports.findOne = async(Model, req, res) => {
  const { id } = idValidator(req);
  const data = await Model.findById(id).lean();
  return res.status(200).json({
          success: true, 
          data
        })
}