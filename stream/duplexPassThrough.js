const { PassThrough } = require("stream");
const { createReadStream, createWriteStream } = require("fs"); 
const readStream = createReadStream("./directory/txtFiles/bigfile.txt");
const writeStream = createWriteStream("./directory/txtFiles/bigfile-copy.txt");

const tunnel = new PassThrough();

tunnel.on("data", (chunk) => {
  console.log("bytes:", chunk); 
});

readStream.pipe(tunnel).pipe(writeStream);