const EventEmitter = require("events");
const emitter = new EventEmitter();

const handler = () => {
  console.log("Listener one");
};

emitter.once("click", handler);

emitter.emit("click");
emitter.emit("click");
emitter.emit("click");
emitter.emit("click");
