const http = require("http");

const server = http.createServer((request, response) => {
  const path = request.url;

  if (path === "/") {
    response.statusCode = 200;
    response.end("Welcome to the Home page");
  } else if (path === "/about") {
    response.statusCode = 200;
    response.end("About us");
  } else {
    response.statusCode = 404;
    response.end("404 Page not found");
  }
});

server.listen(3333, "localhost", () => {
  console.log("Server is running at port 3333");
});
