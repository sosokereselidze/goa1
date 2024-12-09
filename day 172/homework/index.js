const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('customEvent', () => {
    console.log('Custom event has been triggered!');
});

eventEmitter.emit('customEvent');
