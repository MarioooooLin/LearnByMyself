const express = require("express");
const app = express();

//middleWares I
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

//middleWare II
// demonstrate middleware use for account
app.use((req, res, next) => {
    if (req.permission == false) {
        res.send("Please log in");
    } else {
        next();
    }
});
app.use((req, res, next) => {
    console.log("Process the second middleware");
    next();
});

//HTTP request:GET,POST,PUT,DELETE
app.get("/", (req, res) => {
    res.send("welcome to INDEX");
});

app.get("/anotherPage", (req, res) => {
    res.send("welcome to myPhone");
});

app.get("/example", (req, res) => {
    res.send("<h1>This is a h1 tag</h1>");
    res.send("<p>This is a p tag</p>"); //Cannot set headers after they are sent to the client
});

app.get("/send", (req, res) => {
    res.sendFile(__dirname + "/example.html");
});

app.get("/sendJson", (req, res) => {
    let obj = {
        title: "Test",
        website: "Test123",
    };
    res.json(obj);
});

app.get("/true", (req, res) => {
    res.send("The correct resource.");
});

app.get("/redirect", (req, res) => {
    res.redirect("/true");
});

app.get("/thing/:something", (req, res) => {
    console.log(req.params.something);
    console.log(req.params);
    res.send("Welcome to " + req.params.something + ", have a nice day~");
});

app.get("/handleForm", (req, res) => {
    console.log(req.query);
    res.send("RECEIVED,thank you " + req.query.name);
});

app.post("/account", (req, res) => {
    console.log(req.body);
    let { email, password } = req.body;
    res.send("Your email is " + email);
});

//Need to be put on the last position
app.get("*", (req, res) => {
    res.send("Page not found");
});

//port, callback
app.listen(3000, () => {
    console.log("Port 3000 is listening");
});
