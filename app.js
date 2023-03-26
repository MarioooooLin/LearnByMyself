const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Student = require("./models/student");

mongoose
    .connect("mongodb://127.0.0.1:27017/exampleDB")
    .then(() => {
        console.log("Connect successfully...");
    })
    .catch((e) => {
        console.log(e);
    });

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/students", async (req, res) => {
    try {
        let data = await Student.find({}).exec();
        return res.send(data);
    } catch (e) {
        return res.status(500).send("An error occurred when searching the data...");
    }
});

app.post("/students", async (req, res) => {
    try {
        let { name, age, major, TWD, USD } = req.body;
        let newStudent = new Student({
            name,
            age,
            major,
            money: {
                TWD,
                USD,
            },
        });
        let saveStudent = await newStudent.save();
        return res.send({
            msg: "Success",
            saveObj: saveStudent,
        });
    } catch (e) {
        return res.status(400).send("An error occurred when creating the data...");
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

app.listen(4000, () => {
    console.log("Listening prot 4000...");
});
