import express from 'express';
import userRouter from './routes/user.router.js';
const app = express();

app.use('/user', userRouter);

app.get('/products', (req, res) => {
    res.json([
        {id: 1, name: 'Product 1', price: 100},
        {id: 2, name: 'Product 2', price: 200},
        {id: 3, name: 'Product 3', price: 300}
    ])
})
app.listen(3000, () => {
    console.log('server listening on port 3000');
})