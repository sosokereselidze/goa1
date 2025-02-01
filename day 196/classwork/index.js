const express = require('express');
const app = express();

const accounts = [
    { id: 1, name: 'soso', age: 20},
    { id: 2, name: 'luka', age: 30},
    { id: 3, name: 'nika', age: 40},
];

app.get('/accounts', (req, res) => {
    const ageQuery = req.query.age;

    if (ageQuery) {
        const filteredAccounts = accounts.filter(account => account.age === parseInt(ageQuery));
        res.json(filteredAccounts);
    } else {
        res.json(accounts);
    }
});

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${3000}`);
});