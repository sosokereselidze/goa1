const express = require('express');
const app = express();
const port = 3000;

const products = [
  { id: 1, name: 'Product 1', description: 'Description of Product 1' },
  { id: 2, name: 'Product 2', description: 'Description of Product 2' },
  { id: 3, name: 'Product 3', description: 'Description of Product 3' },
  { id: 4, name: 'Product 4', description: 'Description of Product 4' },
  { id: 5, name: 'Product 5', description: 'Description of Product 5' },
  { id: 6, name: 'Product 6', description: 'Description of Product 6' },
  { id: 7, name: 'Product 7', description: 'Description of Product 7' },
  { id: 8, name: 'Product 8', description: 'Description of Product 8' },
  { id: 9, name: 'Product 9', description: 'Description of Product 9' },
  { id: 10, name: 'Product 10', description: 'Description of Product 10' },
];

app.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);
  
    if (product) {
      res.json(product); 
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});