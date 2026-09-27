const fs = require("fs");

const logMessage = (msg) => {
  fs.appendFile("log.txt", msg, (err) => {
    if (err) {
      console.error("There was a problem writing new file: ", err);
      return;
    }
  });
};

module.exports = {
  logMessage,
};
