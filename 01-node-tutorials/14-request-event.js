const http = require("http");

// const server = http.createServer((req, res)=>{
//     res.end('hello world');
// });

// Using Event Emitter API
const server = http.createServer();
// emmit request event
server.on("request", (req, res) => {
  res.end("hello world");
});

server.listen(5000);
