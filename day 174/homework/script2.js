const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('userJoined', (userName) => {
    console.log(`Welcome, ${userName}!`);
});

eventEmitter.emit('userJoined', 'Alice');
