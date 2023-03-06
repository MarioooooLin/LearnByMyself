const express = require("express");
const app = express();

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

//port, callback
app.listen(3000, () => {
    console.log("port 3000 listening");
});
