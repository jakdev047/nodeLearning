/*
    ======================
        File Module
    ======================
*/ 


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


/*
    ======================
        Events Module
    ======================
*/ 

// define events
const EventEmitter = require('events');
const emitter = new EventEmitter();

//Create an event handler:
const myInfo = function (e) {
  console.log(`My name is ${e.name}`);
}

//Assign the event handler to an event:
emitter.on('info', myInfo);

//Fire the 'info' event:
emitter.emit('info',{name: 'Jubayer'});

