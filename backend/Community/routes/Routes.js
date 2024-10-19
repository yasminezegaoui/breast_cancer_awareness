const express = require("express");
const {
  getPosts,
  createPost,
  updateLikes,
  deletePost,
} = require("../controllers/blogControls");
const router = express.Router();

router.get("/all", getPosts);

router.post("/new", createPost);

router.put("/update/:id", updateLikes);

router.delete("/remove/:id", deletePost);

module.exports = router;
