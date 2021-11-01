const { readFile, writeFile } = require("fs"); //deStructuring fs module to import only the specific module instead of whole module

console.log("start");
// readFile("./content/first.txt", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(result);
//   // this will give buffer as output as encoding is not passed
//   // output:- <Buffer 74 68 69 73 20 69 73 20 74 68 65 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65>
// });

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  //   console.log(result);
  // this will give actual output of the file as encoding is passed
  // output:- this is the first text file

  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `here is the async result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done");
      }
    );
  });
});
console.log("starting with new task");
