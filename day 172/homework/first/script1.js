const EventEmitter = require('events');

const customEvent = new EventEmitter();

customEvent.on('greet', (data) => {
    console.log(`Hello, ${data}!`);
});

customEvent.emit('greet', 'World');
