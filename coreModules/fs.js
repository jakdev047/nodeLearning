/* file Module */
const fs = require('fs');

// write file
fs.writeFileSync('./files/output.txt', 'Welcome Node jS!!! ');
fs.appendFileSync('./files/output.txt', 'This is File module.');

// read file
const text = fs.readFileSync('./files/output.txt', 'utf-8');
console.log(text);

fs.readFile('./files/input.txt', (err, data) => {
    console.log(data.toString());
});

console.log('This non async code.');

// readStream
const readStream = fs.createReadStream('./files/bigData.txt');
const writeStream = fs.createWriteStream('./files/output.txt');
// readStream.on('data', (chunk) => {
//     writeStream.write(chunk);
// });

// pipe
readStream.pipe(writeStream);
