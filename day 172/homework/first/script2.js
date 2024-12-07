customEvent.on('notify', () => {
    console.log('Listener 1 triggered');
});

customEvent.on('notify', () => {
    console.log('Listener 2 triggered');
});

customEvent.emit('notify');
