const EventEmitter = require("events");
const fs = require("fs");
const emitter = new EventEmitter();

const sendMessage = (name, msg, emitter) => {
  emitter.emit("message", name, msg);
};

emitter.on("message", (name, msg) => {
  console.log(`${name}: ${msg}`);

  fs.appendFile("msgLog.txt", `${name}: ${msg}`, (err) => {
    if (err) {
      console.error("Could not write the message: ", err);
      return;
    }
  });
});

sendMessage("John", "Hi, my name is John", emitter);
sendMessage("Alice", "Hi John, I am Alice, nice to meet you", emitter);
sendMessage(
  "John",
  "Nice to meet you too! Would you like some coffee?",
  emitter,
);
sendMessage("Alice", "Oh, I just had one. Maybe next time!", emitter);
