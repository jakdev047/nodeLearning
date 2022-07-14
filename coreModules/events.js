/* Events Module */
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
