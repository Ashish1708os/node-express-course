const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req);
  if (req.url === "/") {
    res.end("welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("About page ");
  }
  res.end(
    `<h1>Oops!</h1>
    <p>We can't seem to find the page</p>
    <a href="/" >back to home`
  );
});

server.listen(5000);
