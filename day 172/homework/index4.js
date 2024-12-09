const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.once('oneTimeEvent', () => {
    console.log('This event listener will trigger only once.');
});

eventEmitter.emit('oneTimeEvent');
eventEmitter.emit('oneTimeEvent');