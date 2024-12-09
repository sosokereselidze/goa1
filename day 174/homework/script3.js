const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('newOrder', (orderDetails) => {
    console.log(`Order received: ${orderDetails}`);
});

eventEmitter.on('newOrder', (orderDetails) => {
    console.log(`Email sent for order: ${orderDetails}`);
});

eventEmitter.on('newOrder', (orderDetails) => {
    console.log(`Inventory updated for order: ${orderDetails}`);
});

eventEmitter.emit('newOrder', 'Order#123');
