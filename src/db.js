const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: 'localhost',
  port: 5432,
  database: process.env.DB_NAME,
});


module.exports = pool;