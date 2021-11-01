// CommonJS, every file is module (by default)
// Modules - Encapsulated code (only share minimum)
const names = require("./4-first_module");
const sayHi = require("./5-utils");
const data = require("./6-alternative-export");
require("./7-mind-grenade");
// console.log(data);
// console.log(names);

sayHi("Ashish");
sayHi(names.john);
sayHi(names.peter);
