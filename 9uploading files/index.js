const path = require("path");
const multer  = require('multer');
const express = require("express");

const app = express();
const PORT = 8000;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`)
    }
  });

const upload = multer({ storage: storage });

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    return res.render("homepage");
});
app.post("/upload", upload.single("profileImage"), (req, res) => {
    res.end( 'File uploaded successfully' );
});


app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));