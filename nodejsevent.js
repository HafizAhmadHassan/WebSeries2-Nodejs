const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
setTimeout(() => {
    console.log("Gentle event reminder");
}, 3000);
});
myEmitter.emit('event');