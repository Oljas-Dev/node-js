const path = require("path");

const directory = "/home/user/documents";
const fileName = "example.txt";

const fullPath = path.join(directory, fileName);

console.log("Full path: ", fullPath);

const extension = path.extname(fullPath);
console.log(extension);
