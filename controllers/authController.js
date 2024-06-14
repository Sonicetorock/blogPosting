const jwt = require('jsonwebtoken');
require('dotenv').config();

const user = {//temporary
  id: 1,
  username: 'admin',
  password: 'password'
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  if (username !== user.username || password !== user.password) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }
  //creating the JWT token for the admin 
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
};
