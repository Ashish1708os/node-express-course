// Globals - NO WIndow Object present in Node.js
// there are other globlas like

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (commonJS)
// module - info about current module (file)
// process - info about env where program is being executed

console.log(__dirname);
setInterval(() => {
  console.log("hello world");
}, 1000);
// we can also use setTimeOut or setInterval function
