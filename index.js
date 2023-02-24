const express = require("express");
const app = express();

//HTTP request:GET,POST,PUT,DELETE
app.get("/", (req, res) => {
    res.send("welcome to INDEX");
});

app.get("/anotherPage", (req, res) => {
    res.send("welcome to myPhone");
});

//port, callback
app.listen(3000, () => {
    console.log("port 3000 listening");
});
