let text = "This is the content will be added to the file."

fs.appendFile('new-async.txt', text, (err) => {
    if(err) {
        console.error(err);
        return;
    }else{
        console.log("File updated asynchronously.");
    }
})

fs.appendFileSync('new-sync.txt', text);
console.log("File updated synchronously.");