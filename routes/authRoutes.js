const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authController');

router.post('/login', login);//simple login using username and password

module.exports = router;
