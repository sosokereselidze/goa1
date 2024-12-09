const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.once('shutdown', () => {
    console.log('The system is shutting down...');
});

eventEmitter.emit('shutdown');

eventEmitter.emit('shutdown');
