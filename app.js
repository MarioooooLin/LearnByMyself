const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Student = require("./models/student");

app.set("view engine", "ejs");

mongoose
    .connect("mongodb://127.0.0.1:27017/exampleDB")
    .then(() => {
        console.log("Connect successfully...");
    })
    .catch((e) => {
        console.log(e);
    });

app.get("/students", async (req, res) => {
    try {
        let data = await Student.find({}).exec();
        return res.send(data);
    } catch (e) {
        return res.status(500).send("An error occurred when searching the data...");
    }
});

app.get("/students/:_id", async (req, res) => {
    let { _id } = req.params;
    try {
        let findStudent = await Student.find({ _id }).exec();
        return res.send(findStudent);
    } catch (e) {
        console.log(e);
    }
});

// Student.find({ _id: "64200d56099a274bbd0eb3ab" })
//     .exec()
//     .then((data) => {
//         return res.status(500).send("An error occurred when searching the data...");
//     });

app.listen(4000, () => {
    console.log("Listening prot 4000...");
});
