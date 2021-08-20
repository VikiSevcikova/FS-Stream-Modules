const fs = require("fs");
const path = require("path");

function readFilesInDirectory(directoryName) {
  fs.readdir(directoryName, { withFileTypes: true }, (err, items) => {
    if (err) {
      console.error(err);
    } else {
      items.forEach((item) => {
        if (item.isDirectory()) {
          // readFiles(directoryName + "/" + item.name);
          readFilesInDirectory(path.join(directoryName, item.name));
        } else {
          if (path.extname(item.name) === ".txt") {
            console.log(
              "There is file: " + item.name + " in folder: " + directoryName
            );
          }
        }
      });
    }
  });
}
readFilesInDirectory("../directory");
