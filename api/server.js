const express = require('express')

const server = express();

server.get('/', (req, res) => {
  res.status(200).json({ api: 'up' })
});

// Manage products
// Manage clients
// Manage orders
// Manage suppliers

server.get('/products', (req, res) => {});

server.get('/clients', (req, res) => {});

server.get('/suppliers', (req, res) => {});

module.exports = server;