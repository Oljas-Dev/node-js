const http = require("http");

const server = http.createServer((request, response) => {
  const path = request.url;
  if (path === "/") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end("Welcome to Home page!");
  } else if (path === "/admin") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end("Welcome to Admin page!");
  } else if (path === "/manager") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end("Welcome to Manager page!");
  } else if (path === "/profile") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end("Welcome to Profile page!");
  } else {
    response.statusCode = 404;
    response.setHeader("Content-Type", "text/plain");
    response.end("Page Not Found!");
  }
});

server.listen(3333, "127.0.0.1", () => {
  console.log("Server is running at http://127.0.0.1:3333");
});
