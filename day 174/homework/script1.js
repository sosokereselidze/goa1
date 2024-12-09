const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('start', () => {
    console.log('The start event has been triggered!');
});

eventEmitter.emit('start');

