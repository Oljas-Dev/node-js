const EventEmitter = require("events");
const emitter = new EventEmitter();

const handler = () => {
  console.log("Listener one");
};

const handler2 = () => {
  console.log("Listener two");
};

emitter.on("click", handler);
emitter.on("click", handler2);

emitter.emit("click");

emitter.removeListener("click", handler2);

emitter.emit("click");
