const { createReadStream } = require("fs");

const stream = createReadStream("./content/big-file.txt");
// default 64kb
//  lass buffer - reminder
// highWaterMark - control size
// const stream = createReadStream('./content/big-file.txt', { highWaterMark: 90000 })
// const stream = createReadStream("../content/gib-file.txt", {
//   encoding: "utf-8",
// });

stream.on("data", (result) => {
  console.log(result);
});
stream.on("error", (err) => {
  console.log(err);
});
