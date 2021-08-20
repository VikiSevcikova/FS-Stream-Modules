const fs = require('fs');
const server = require('http').createServer();

const filename = '../directory/txtFiles/temp_5GB_file.txt';

const readFile = () => {
  fs.readFile(filename, 'utf-8', (err, data) => {
    if(err){
      console.error(err);
    }else{
      console.log(data);
    }
  });
}

const readFileStream = () => {
  const rs = fs.createReadStream(filename);
  rs.on('data', (chunk) => {
    console.log("Chunk of data received.");
    console.log(chunk);
  })
}


const readFileServer = () => {
    server.on('request', (req, res) => {
        fs.readFile(filename, (err, data) => {
          if (err){
            console.error(err);
          } else{
            res.end(data);
          }
        });
      });
      
      server.listen(8000,() => {
        console.log(
          "Server is listening on port 8000");
      });
}

const readStream = () => {
    server.on('request', (req, res) => {
        const rs = fs.createReadStream(filename);
        rs.pipe(res);
      });
      
      server.listen(8000, () => {
        console.log(
          "Server is listening on port 8000");
      });
}

readFile();
// readFileStream();
// readFileServer();
// readStream();



// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   fs.readFile(filename, (err,data)=>{
//       if(err) console.error(err)
//       res.end(data);
//   });
// });

// server.listen(8000, () => {
//   console.log(
//     "Server is listening on port 5000");
// });