const express = require("express");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/:name", (req, res) => {
    let { name } = req.params;

    res.render("index", { name });
});

app.get("/", (req, res) => {
    let string = "<h1>Hello world</h1>";
    res.render("index", { string });
});

app.listen(4000, () => {
    console.log("Port 4000 is listening");
});
