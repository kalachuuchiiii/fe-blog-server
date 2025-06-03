const mongoose = require("mongoose"); 

const postSchema = new mongoose.Schema({
  title: {
    type: String, 
    index: true, 
    required: true, 
    maxlength: 100,
    minlength: 5
  }, 
  description: {
    type: String, 
    index: true, 
    required: true, 
    maxlength: 3500,
    minlength: 30
  },
    public_id: {
      type: String, 
      required: true
    },
    url: {
      type: String, 
      required: true
    }
  
}, {timestamps:true})


const Post = mongoose.model("Post", postSchema);

module.exports = Post