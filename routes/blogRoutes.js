const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMW');
const { createPost, getAllPosts, getPostById, updatePost, deletePost } = require('../controllers/blogController');

//no auth req bcoz this are of global kind
router.get('/', getAllPosts);
router.get('/:id', getPostById);

//authoirised routes , auth middle ware is called upon requesting this url by any of http methods
router.post('/', auth, createPost);
router.put('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);

module.exports = router;
