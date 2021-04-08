const express = require('express');
const validateToken = require('../middlewares/validateToken');
const { createPost, getPosts } = require('../controllers/postController');

const router = express.Router();

router.post("/posts/create", validateToken, createPost);
router.get("/posts/get", validateToken, getPosts);

module.exports = router;
