const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

//schema for our post
const BlogPost = sequelize.define('BlogPost', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = BlogPost;