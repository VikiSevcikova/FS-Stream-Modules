const fs = require("fs");
const path = require("path");

let dir = '../directory/txtFiles';

fs.unlink(path.join(dir, 'new-async.txt'), (err) => {
    if(err) {
        console.error(err);
        return;
    }else{
        console.log("File was asynchronously deleted.");
    }
})

fs.unlinkSync(path.join(dir, 'new-sync.txt'));
console.log("File was synchronously deleted.");
