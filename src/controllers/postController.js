const { getParams } = require("../helpers/utils/getParams.js");
const { find } = require("../helpers/service/find.js")
const Post = require("../models/postModel.js");

exports.getPosts = async(req, res) => {
  const { skip, limit } = getParams(req);
  const data = await find(Post).skip(skip).limit(limit).exec(); 
  return res.status(200).json({
          success: true, 
          data
        })
}

