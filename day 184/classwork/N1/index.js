const http = require('http');

const products = [
  { id: 1, name: 'Product 1', price: 500 },
  { id: 2, name: 'Product 2', price: 700 }
];

const accounts = [
  { id: 1, username: 'user1', email: 'user1@gmail.com' },
  { id: 2, username: 'user2', email: 'user2@gmail.com' }
];

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  if (req.url === '/products' && req.method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify(products));

  } else if (req.url === '/accounts' && req.method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify(accounts));

  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Not Found' }));
  }
});

server.listen(3500, () => {
  console.log('Server is running on http://localhost:3500');
});