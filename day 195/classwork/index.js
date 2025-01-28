const express = require('express');

const app = express()

// const products = [
//   { id : 1, name : "cola" },
//   { id : 2, name : "fanta" }
// ]

// app.get('/products', (req, res) => {
//   res.json(products);
// });

// app.get('/products/:id', (req, res) => {

//   const id = parseInt (req.params.id);
//   const product = products.find(acc => acc.id === id);
//   if(product){
//     res.json(product);
//   } else {
//     res.send("<h1>product not found </h1>")
//   }

// })


//2


app.get('/greet/:name/:age', (req, res) => {
  const name = req.params.name;
  const age = req.params.age;

  res.json({
    message : `Hello, ${name}, You are ${age} years old`
  });
});


app.listen(3000, () => {
  console.log(`Server running at http://localhost:${3000}`);
});