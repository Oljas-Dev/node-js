const EventEmitter = require("events");
const emitter = new EventEmitter();

// emitter.on("myEvent", () => {
//   console.log("Event has happened");
// });

// emitter.emit("myEvent");

// emitter.on("message", (msg) => {
//   console.log("Message received: ", msg);
// });

// emitter.emit("message", "Hello Alex");

// emitter.on("data", (data) => {
//   console.log("First listener: ", data);
// });

// emitter.on("data", (data) => {
//   console.log("Second listener: ", data);
// });

// emitter.emit("data", { value: 42 });

const handler = () => {
  console.log("listener");
};

emitter.on("data", handler);

emitter.emit("data");

emitter.removeListener("data", handler);

emitter.emit("data");
