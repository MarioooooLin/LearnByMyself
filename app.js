const express = require("express");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

// app.get("/:name", (req, res) => {
//     let { name } = req.params;
//     res.render("index", { name });
// });

app.get("/", (req, res) => {
    const practice = [
        { name: "Mario", age: 25, Live: "KH" },
        { name: "Maria", age: 15, Live: "TP" },
        { name: "Max", age: 45, Live: "TN" },
    ];
    res.render("index", { practice });
});

app.get("/example", (req, res) => {
    let { name, age } = req.query;
    res.render("response", { name, age });
});

app.listen(4000, () => {
    console.log("Port 4000 is listening");
});
