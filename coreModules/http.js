/* eslint-disable comma-dangle */

// dependencies
const http = require('http');

// PORT
const PORT = 8000;

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
