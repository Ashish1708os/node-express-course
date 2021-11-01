const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    // this code send the whole file at once (not Recomended !!! do not use)
    // const text = fs.readFileSync("./content/big-file.txt", "utf-8");
    // res.end(text);

    // this code send the file in chunkes(small packets)
    const fileStream = fs.createReadStream("./content/big-file.txt", "utf-8");
    fileStream.on("open", () => {
      fileStream.pipe(res);
    });
    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5000, () => {
    console.log("server listning on 5000...");
  });
