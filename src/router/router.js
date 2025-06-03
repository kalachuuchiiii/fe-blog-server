const router = require("express").Router(); 
const { errorCatcher } = require("../helpers/utils/errorCatcher.js");
const createCRUDController = require("../helpers/service/index.js");
const Post = require("../models/postModel.js");

const post = createCRUDController(Post);

router.get("/posts/:skip", errorCatcher(post.find));
router.get("/post/:id", errorCatcher(post.findOne));
router.post("/post", errorCatcher(post.createInfographic));



module.exports = router;