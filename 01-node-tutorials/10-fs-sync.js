const { readFileSync, writeFileSync } = require("fs"); //deStructuring fs module to import only the specific module instead of whole module

console.log("start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// console.log(first, second);

writeFileSync(
  "./content/result-sync.txt",
  `here is the result: ${first}, ${second}`,
  { flag: "a" } // if flag is a content will be appended
);
console.log("done");
console.log("staring the next task");
