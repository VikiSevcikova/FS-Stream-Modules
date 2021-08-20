const { PassThrough, Duplex } = require("stream");
const { createReadStream, createWriteStream } = require("fs");
const readStream = createReadStream("../directory/videos/video.mp4");
const writeStream = createWriteStream("../directory/videos/video-copy.mp4");

class Throttle extends Duplex {
  /*
   * Class constructor will receive the injections as parameters.
   */
  constructor(time) {
    super();
    this.delay = time;
  }
  _read() {}

  // Writes the data, push and set the delay/timeout
  _write(chunk, encoding, callback) {
    this.push(chunk);
    setTimeout(callback, this.delay);
  }

  // When all the data is done passing, it stops.
  _final() {
    this.push(null);
  }
}

const tunnel = new PassThrough();
const throttle = new Throttle(1000);

let amount = 0;
tunnel.on("data", (chunk) => {
  amount += chunk.length;
  console.log("bytes:", amount);
});

readStream.pipe(throttle).pipe(tunnel).pipe(writeStream);