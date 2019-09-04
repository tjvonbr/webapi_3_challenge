const express = require('express')

const productsRouter = require('../products/products-router');
const suppliersRouter = require('../suppliers/suppliers-routers');

const server = express();

// Global middleware goes here
server.use(express.json());

server.use('/products', productsRouter);
server.use('/suppliers', suppliersRouter);

// Router handlers
server.get('/', (req, res) => {
  res.status(200).json({ api: 'up' })
});

// Manage products (8)
// Manage clients (8)
// Manage orders
// Manage suppliers

server.get('/clients', (req, res) => {});

module.exports = server;