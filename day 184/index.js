const http = require('http');
const fs = require('fs');

const dataFile = 'data.json';

function readData() {
    if (fs.existsSync(dataFile)) {
        const data = fs.readFileSync(dataFile, 'utf-8');
        return JSON.parse(data);
    }
    return [];
}

function writeData(data) {
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 4));
}

const server = http.createServer((req, res) => {
    const { method, url } = req;

    if (method === 'GET' && url === '/product') {
        const data = readData();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));

    } else if (method === 'POST' && url === '/product') {
        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            try {
                const newProduct = JSON.parse(body);
                const data = readData();
                data.push(newProduct);
                writeData(data);

                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(newProduct));
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

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});


