const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('fileRead', (err) => {
    if (err) {
        console.error(`Error reading file: ${err.message}`);
    } else {
        console.log('File read successfully!');
    }
});

eventEmitter.emit('fileRead', new Error('File not found!'));
