const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    const { method, url } = req;

    if (method === 'GET' && url === '/product') {
        const data = readData();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));

    } else if (method === 'POST' && url === '/product') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            try {
                const newProduct = JSON.parse(body);
                
                fs.readFile('data.json', 'utf8', (err, jsonString) => {
                  if (err) {
                      return res.end(JSON.stringify({ error: 'Error reading data.json' }));
                  }
                  const data = JSON.parse(jsonString);
                  data.push(newProduct);
                 
                  fs.writeFile('data.json', JSON.stringify(data))
                })

                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end({message: "Product added succesfully"});
            } catch (error) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Invalid JSON data' }));
            }
        });

    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not Found' }));
    }
});

const PORT = 4001;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});