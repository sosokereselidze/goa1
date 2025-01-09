const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/' || req.url === '/index.html') {
        res.end('<h1>hello on website</h1>');
    } else if (req.url === '/user' || req.url === '/users') {
        const users = [
            { id: 1, name: 'nika' },
            { id: 2, name: 'soso' },
            { id: 3, name: 'luka' }
        ];
        res.end(JSON.stringify(users)); 
    } else if (req.url === '/products') {
        const products = [
            { id: 1, name: 'laptop', price: 1000 },
            { id: 2, name: 'phone', price: 500 },
            { id: 3, name: 'keyboard', price: 150 }
        ];
        res.end(JSON.stringify(products));
    } else {
        res.statusCode = 404;
        res.end('<h1>404 Not Found</h1>');
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});