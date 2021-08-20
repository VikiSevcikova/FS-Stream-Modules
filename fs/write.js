const fs = require("fs");
const path = require("path");

let dir = '../directory/txtFiles';
let text = "This is the content to be written in the file."

fs.writeFile(path.join(dir,'new-async.txt'), text, (err, data) => {
    if(err) {
        console.error(err);
        return;
    }else{
        console.log("File save asynchronously.");
    }
})

fs.writeFileSync(path.join(dir,'new-sync.txt'), text);
console.log("File save synchronously.");
