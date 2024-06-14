const BlogPost = require('../models/BlogPost');

exports.createPost = async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }

  try {
    const blogPost = await BlogPost.create({ title, content });
    res.status(201).json(blogPost);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const blogPosts = await BlogPost.findAll();
    res.json(blogPosts);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getPostById = async (req, res) => {
  const { id } = req.params;

  try {
    const blogPost = await BlogPost.findByPk(id);

    if (!blogPost) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.json(blogPost);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    const blogPost = await BlogPost.findByPk(id);

    if (!blogPost) {
      return res.status(404).json({ message: 'Post not found' });
    }

    if (title) blogPost.title = title;
    if (content) blogPost.content = content;

    await blogPost.save();
    res.json(blogPost);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deletePost = async (req, res) => {
  const { id } = req.params;

  try {
    const blogPost = await BlogPost.findByPk(id);

    if (!blogPost) {
      return res.status(404).json({ message: 'Post not found' });
    }

    await blogPost.destroy();
    res.json({ message: 'Post deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
