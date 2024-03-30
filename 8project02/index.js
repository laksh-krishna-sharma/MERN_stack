const express = require("express");
const userRouter = require("./routes/user");
const {connectMongoDB} = require("./connection");
const {logReqRes} = require("./middlewares/index")
const app = express();

const PORT = 8000;

// CONNECTION
connectMongoDB('mongodb://127.0.0.1:27017/project-02').then(() => console.log("MongoDB connected!"));

// MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes('log.txt'));

// ROUTES
app.use("/user", userRouter);


app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));