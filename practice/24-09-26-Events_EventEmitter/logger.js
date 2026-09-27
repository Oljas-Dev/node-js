const EventEmitter = require("events");
const logger = new EventEmitter();

logger.on("info", (msg) => {
  console.log("INFO: ", msg);
});
logger.on("warning", (msg) => {
  console.log("WARN: ", msg);
});
logger.on("error", (msg) => {
  console.log("ERROR: ", msg);
});

logger.emit("info", "Server started");
logger.emit("warning", "High memory usage");
logger.emit("error", "Server crushed");
