const express = require('express');
const app = express();

const products = [
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Keyboard', price: 200 }, 
    { id: 3, name: 'Phone', price: 800 },
];

app.get('/products', (req, res) => {
    const sortQuery = req.query.sort;
    let sortedProducts = [...products]; 

    if (sortQuery === 'ascending') {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortQuery === 'descending') {
        sortedProducts.sort((a, b) => b.price - a.price);
    }

    res.json(sortedProducts);
});

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${3000}`);
});