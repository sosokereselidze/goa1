const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('multiEvent', () => {
    console.log('Listener 1: Multi-event triggered.');
});

eventEmitter.on('multiEvent', () => {
    console.log('Listener 2: Processing multi-event.');
});

eventEmitter.on('multiEvent', () => {
    console.log('Listener 3: Multi-event handled.');
});

eventEmitter.emit('multiEvent');
