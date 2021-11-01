setInterval(() => {
  console.log("hello world");
}, 2000);
console.log("I will run first");
// process stays alive unless
// we explicitly kills the process with (Ctrl + c)
// or if some Unexpected error occured in code
