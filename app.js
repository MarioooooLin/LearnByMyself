const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.set("view engine", "ejs");

mongoose
    .connect("mongodb://localhost:27017/exampleDB")
    .then(() => {
        console.log("Connect successfully...");
    })
    .catch((e) => {
        console.log(e);
    });

app.listen(4000, () => {
    console.log("Listening prot 4000...");
});
