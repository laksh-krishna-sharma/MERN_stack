const path = require("path");
const express =  require("express");
const mongoose = require("mongoose");

const userRout = require("./routes/user");

mongoose.connect("mongodb://127.0.0.1:27017/blogify").then(() => console.log("MongoDB Connected"));

const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"))

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    return res.render("home");
});

app.use("/user", userRout);

app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));