const express = require('express');
const registerRoute = require('./auth/register');
const loginRoute = require('./auth/login');

const router = express.Router();

// Rota: /api/register
router.use('/register', registerRoute);

// Rota: /api/login
router.use('/login', loginRoute);

const pool = require('../db');

module.exports = router;
