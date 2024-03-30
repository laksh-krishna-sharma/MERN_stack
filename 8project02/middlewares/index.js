const fs = require("fs");

function logReqRes(filename) {
    return (req, res, next) => {
        fs.appendFile(filename, `\n${Date.now()}: ${req.ip} ${req.method}: ${req.path}`, (err) => {
            if (err) {
                console.error("Error appending to log file:", err);
                return res.status(500).send("Internal Server Error");
            }
            next();
        })
    }
}

module.exports = {
    logReqRes,
}