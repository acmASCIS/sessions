const Post = require('../models/post');

const createPost = async (req, res) => {
    try {

        var post = req.body;
        post.created_by = req.userid;
        post = await Post.create(post);
        res.status(201).json(post);

    } catch (err) {
        res.status(500).json({
            status: 'error',
            error: err.message,
        });
    }
};

const getPosts = async (req, res) => {
    try {

        const posts = await Post.find({ 'created_by': req.userid });
        res.json(posts);

    } catch (err) {
        res.status(500).json({
            status: 'error',
            error: err.message,
        });
    }
};

module.exports.createPost = createPost;
module.exports.getPosts = getPosts;
