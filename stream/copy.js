const fs = require('fs');
const path = require('path');

const copy1 = (dir, file) => {
    const rs = fs.createReadStream(path.join(dir, file), 'utf8');
    const ws = fs.createWriteStream(path.join(dir, 'copy.txt'));
    rs.on('data', (chunk) => {
      console.log("Chunk of data received.");
      ws.write(chunk);
    });
    rs.on('end', () => {
        ws.end();
    })
}

const copy2 = (dir, file) => {
    const rs = fs.createReadStream(path.join(dir, file), 'utf8');
    const ws = fs.createWriteStream(path.join(dir, 'copy.txt'));
    
    rs.pipe(ws);
}

let directory = '../directory/txtFiles'
let filename = 'bigfile.txt';
copy1(directory, filename);
// copy2(filename);