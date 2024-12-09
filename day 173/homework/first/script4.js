customEvent.once('oneTime', () => {
    console.log('This listener will only trigger once');
});

customEvent.emit('oneTime');
customEvent.emit('oneTime'); 
