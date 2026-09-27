const fs = require("fs");

fs.writeFile("example.txt", "Hello, Node.js", (err) => {
  if (err) {
    console.error("Could not create file: ", err);
    return;
  }
  console.log("File was successfully created!");

  fs.readFile("example.txt", "utf-8", (err, data) => {
    if (err) {
      console.error("Error while reading file: ", err);
      return;
    }
    console.log("File data: ", data);

    fs.unlink("example.txt", (err) => {
      if (err) {
        console.error("Error when deleting file: ", err);
      }

      console.log("File was succefully deleted!");
    });
  });
});
