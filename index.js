const express = require('express');
const app = express();
require('dotenv').config();
const sequelize = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');

app.use(express.json());
const cors = require('cors');
app.use(cors());
app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    // console.log('PORT:', process.env.PORT);
    // console.log('DB_HOST:', process.env.DB_HOST);
    // console.log('DB_USER:', process.env.DB_USER);
    // console.log('DB_NAME:', process.env.DB_NAME);    
    console.log(`Server running on port ${PORT}`);
  });
});
