const fs = require("fs");
const path = require("path");

let dir = '../directory/txtFiles';
let filename = 'file.txt';

//ASYNC
const readAsync = (file) => {
    fs.readFile(path.join(dir,file), 'utf8', (err, data) => {
    if(err) {
        console.error(err);
        return;
    }else{
        console.log("Async READ:");
        console.log(data);
    }
})
}

//ASYNC to SYNC
const readSync1 = async (file) => {
    try {
      const data = await fs.promises.readFile(path.join(dir, file), 'utf8');
      console.log("Sync READ:");
      console.log(data)
    }
    catch(err) {
      console.log(err)
    }
  }

//SYNC
const readSync2 = (file) => {
  const data = fs.readFileSync(path.join(dir, file), 'utf-8');
  console.log("Sync READ:");
  console.log(data);
} 

// readAsync(filename);
// readSync1(filename);
// readSync2(filename);


