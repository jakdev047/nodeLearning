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
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the event handler to an event:
emitter.on('scream', myEventHandler);

//Fire the 'scream' event:
emitter.emit('scream');

