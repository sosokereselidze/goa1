const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json())
const port = 3000;
let accounts = [];
let posts = [];

app.post('/register', (req, res) => {
    const { email, name, password } = req.body;

    if(!email || !name || !password ){
        return res.status(400).json({ message: "All fields are required."})
    }

    const existingAccount = accounts.find(account => account.email == email);
    if (existingAccount){
        return res.status(400).json("Account already exists");
    }   


    const newAccount = {
        email, name, passwork
    };
    
    accounts.push(newAccount);
    res.status(201).json({message: 'Account created successfully', account: newAccount })
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})