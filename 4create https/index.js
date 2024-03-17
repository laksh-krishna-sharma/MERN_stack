const http = require("http");
const fs = require("fs");

const { listeners } = require("process");

const newServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New Req Rec.\n`;
    fs.appendFile("log.txt", log , (err, date) => {
        if(err){
            console.log("Error", err);
        }
        else{
            switch (req.url) {
                case "/":
                    res.end("HELLO");       
                    break;
                case "/about":
                    res.end("i am laksh");
                    break;
                default:
                    res.end("404 Not Found");
                    break;
            }
        }
    });
})

newServer.listen(3000, () => {console.log("STARTED");})