const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");
const app = express();

const PORT = 8000;

//MIDDLEWARE

app.use(express.urlencoded({ extended: false}));

app.use((req, res, next) => {
    console.log("hello form middleware 1");
    req.myname = "laksh";
    next();
})

app.use((req, res, next) => {
    console.log("hello form middleware 2 my name is ",req.myname );
    next();
})

app.use((req, res, next) => {
    fs.appendFile('log.txt', `\n${Date.now()}: ${req.ip} ${req.method}: ${req.path}`, (err,data) => {
        next();
    })
})

//ROUTES

app.get("/users", (req, res) => {
    const html = `
        <ul>
            ${users.map((users) => `<li>${users.first_name}</li>`).join("")}
        </ul>
    `;
    res.send(html);
})

//REST API's

app
    .route("/api/user")
    .get((req, res) => {
        res.setHeader("X-MyName", "Laksh")
        console.log("my name is ", req.myname);
        return res.json(users);
    })
    .post((req, res) => {
        const body = req.body;
        if (!body  || !body.first_name || !body.last_name ||!body.email || !body.gender || body.job_title ) {
            return res.status(400).json({message: 'All fields are required...'}) 
        }
        users.push({ id: users.length + 1, ...body });
        fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
            if (err) {
                return res.status(500).json({ status: "error", message: "Failed to update user" });
            }
            return res.status(201).json({ status: "success", id: users.length });
        });
    })
app
    .route("/api/user/:id")
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        if (!user) {return res.status(404).json({ status: "error", message: "User not found" });}
        return res.json(user);
    })
    .patch((req, res) => {
        const id = Number(req.params.id);
        const body = req.body;
        const index = users.findIndex((user) => user.id === id);

        if (index !== -1) {
            users[index] = {...users[index], ...body };

            fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
                if (err) {
                    return res.status(500).json({ status: "error", message: "Failed to update user" });
                }
                return res.json({ status: "success", id: id });
            });
        } 
        else {
        
            return res.status(404).json({ status: "error", message: "User not found" });
        }
    })
    .delete((req, res) => {
        const id = Number(req.params.id);
        const body = req.body;
        const index = users.findIndex((user) => user.id === id);

        if (index !== -1) {
            users.splice(index, 1)

            fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
                if (err) {
                    return res.status(500).json({ status: "error", message: "Failed to update user" });
                }
                return res.json({ status: "success", id: id });
            });
        } 
        else {
        
            return res.status(404).json({ status: "error", message: "User not found" });
        }
    })

app. listen(PORT,() => `Server started ap PORT ${PORT}`);