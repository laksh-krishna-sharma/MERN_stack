const mongoose = require("mongoose")
mongoose.set("strictQuery", true);

// CONNECTION
async function connectMongoDB(url) {
    return mongoose.connect(url)    
}

module.exports = {
    connectMongoDB,
}