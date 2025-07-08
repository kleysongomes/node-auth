const express = require('express');
const path = require('path');

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');

const app = express();
app.use(express.json());

// Frontend
app.use(express.static(path.join(__dirname, '../public')));

// Rotas da API
app.use('/api', authRoutes);
app.use('/api/users', userRoutes); // <-- rota específica

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
