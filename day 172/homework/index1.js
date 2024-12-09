const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('dataEvent', (data) => {
    console.log(`Received data: ${data}`);
});

eventEmitter.emit('dataEvent', 'Sample data');
