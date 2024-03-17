const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send("hello from homepage")
})
app.get('/about', (req, res) => {
    res.send("hello from about" + " hey " + req.query.name)
})
app.get('/aboutme', (req, res) => {
    res.send(`i am ${req.query.name}`)
})

app.listen(3000, () => {console.log("STARTED");})