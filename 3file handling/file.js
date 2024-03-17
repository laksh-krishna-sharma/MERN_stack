const fs = require("fs");

// write file
fs.writeFileSync("./text1.txt", "hello world");
fs.writeFile("./text2.txt", "hello world", (err) => {"error"});

// read file
let result = fs.readFileSync("./contact.txt", "utf-8");
console.log(result);

fs.readFile("./contact.txt", "utf-8", (err, result) => {
    if (err) {
        console.log("error", err);
    }
    else{
        console.log(result);
    }
});

