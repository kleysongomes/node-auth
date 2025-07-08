const express = require('express');
const listUsersRoute = require('./users/list');

const router = express.Router();

// GET /api/users
router.use('/', listUsersRoute);

module.exports = router;
