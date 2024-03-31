const express = require("express");
const app = express();
const urlRoute = require("./routes/url");
const {connectMongoDB} = require("./connection");

const PORT = 8000;

// MIDDLEWARE
app.use(express.json());

// CONNECTION
connectMongoDB('mongodb://127.0.0.1:27017/SHORT-URL').then(() => console.log("MongoDB connected!"));

// ROUTES
app.use("/url", urlRoute);

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT} `));