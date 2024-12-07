const listenerToRemove = () => {
    console.log('This listener will be removed');
};

customEvent.on('removeExample', listenerToRemove);

customEvent.emit('removeExample');

customEvent.off('removeExample', listenerToRemove);

customEvent.emit('removeExample');