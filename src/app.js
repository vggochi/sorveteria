const express = require('express');
const app = express();

app.use(express.json());

// Importando rotas
const produtosRoutes = require('./routes/produtos');
const clientesRoutes = require('./routes/clientes');
const pedidosRoutes = require('./routes/pedidos');

// Usando rotas
app.use('/produtos', produtosRoutes);
app.use('/clientes', clientesRoutes);
app.use('/pedidos', pedidosRoutes);

module.exports = app;
