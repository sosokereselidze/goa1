const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

const listener = () => {
    console.log('This listener will be removed.');
};

eventEmitter.on('removableEvent', listener);
eventEmitter.emit('removableEvent');

eventEmitter.removeListener('removableEvent', listener);

eventEmitter.emit('removableEvent');