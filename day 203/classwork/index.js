const express = require('express');
const app = express();

const authenticate = (req, res, next) => {
    const token = req.headers.authorization;
    if (token === 'valid-token') {
        next();
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
};

const getData = (req, res) => {
    const products = [
        {id: 1, name: 'Laptop', price: 1000},
        {id: 2, name: 'Phone', price: 500}
    ];
    res.json(products);
};

app.get('/products', authenticate, getData);

app.listen(3000, () => {
    console.log(`Server is running on port ${3000}`);
});