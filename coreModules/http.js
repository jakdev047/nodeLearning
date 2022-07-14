/* eslint-disable comma-dangle */

// dependencies
const http = require('http');

// PORT
const PORT = 8080;

// server create
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write(
            JSON.stringify({
                pageName: 'Home Page',
            })
        );
        res.end();
    } else if (req.url === '/about' && req.method === 'GET') {
        res.write(
            JSON.stringify({
                pageName: 'About Page',
            })
        );
        res.end();
    } else if (req.url === '/form' && req.method === 'GET') {
        res.write('<html><head><title>Form</title></head>');
        res.write(
            '<body><form method="post" action="/big-data"><input name="message"/></form></body>'
        );
        res.end();
    } else if (req.url === '/big-data' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            console.log('Stream finished!!!');
            const persedBody = Buffer.concat(body).toString();
            console.log(persedBody);
            res.write('Thank you for submitting');
            res.end();
        });
    } else {
        res.write(
            JSON.stringify({
                pageName: 'Not Found',
            })
        );
        res.end();
    }
});

// server listen port
server.listen(PORT);
console.log(`Server is running on PORT: ${PORT}`);
