const http = require("http");
const fs = require("fs");
const url = require("url");

const { listeners } = require("process");

const newServer = http.createServer((req, res) => {
    if (req.url == "/favicon.ico") return res.end();
    const newURL = url.parse(req.url, true)
    const log = `${Date.now()}: ${newURL.pathname} New Req Rec.\n`;
    fs.appendFile("log.txt", log , (err, date) => {
        if(err){
            console.log("Error", err);
        }
        else{
            switch (newURL.pathname) {
                case "/":
                    res.end("HELLO");       
                    break;
                case "/about":
                    const username = newURL.query.myname;
                    res.end(`I am ${username}`);
                    break;
                default:
                    res.end("404 Not Found");
                    break;
            }
        }
    });
})

newServer.listen(3000, () => {console.log("STARTED");})