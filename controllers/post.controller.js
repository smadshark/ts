const post = require('../models/post.model');

function getAllPost(req, res) {
    res.json(post);
}

module.exports = {
    getAllPost,
}