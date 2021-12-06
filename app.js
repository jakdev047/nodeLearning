// load fs
const fs = require("fs");

// read file
const text = fs.readFileSync('./files/input.txt','utf-8');
console.log(text);

// write file
const overWriteText = "Welcome Node JS!";
fs.writeFileSync('./files/output.txt',overWriteText);

// read file
const overWriteTextOutput = fs.readFileSync('./files/output.txt','utf-8');
console.log(overWriteTextOutput);

