const express = require('express');
const app = express();
const port = 3000;

const products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Phone', price: 500 }
];

const accounts = [
  { id: 1, username: 'user1', email: 'user1@example.com' },
  { id: 2, username: 'user2', email: 'user2@example.com' }
];

app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/accounts', (req, res) => {
  res.json(accounts);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});