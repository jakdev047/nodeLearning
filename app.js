/* eslint-disable comma-dangle */
/* File Module */

// load fs
const fs = require('fs');

// read file
const text = fs.readFileSync('./files/input.txt', 'utf-8');
console.log(text);

// write file
const overWriteText = 'Welcome Node JS!';
fs.writeFileSync('./files/output.txt', overWriteText);

// read file
const overWriteTextOutput = fs.readFileSync('./files/output.txt', 'utf-8');
console.log(overWriteTextOutput);

/*
    ======================
        Events Module
    ======================
*/

// define events
const EventEmitter = require('events');

const emitter = new EventEmitter();

// Create an event handler:
const myInfo = (e) => {
    console.log(`My name is ${e.name}`);
};

// Assign the event handler to an event:
emitter.on('info', myInfo);

// Fire the 'info' event:
emitter.emit('info', { name: 'Jubayer' });

/*
    ======================
        HTTP Module
    ======================
*/

// const options = {
//   hostname: 'abc.com',
//   port: 8000,
//   path: '/about',
//   method: 'GET',
// };

// dependencies
const http = require('http');

// PORT
const PORT = 3000;

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
