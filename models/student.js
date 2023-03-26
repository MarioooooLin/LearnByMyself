const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minlength: 2,
    },
    age: {
        type: Number,
        default: 18,
        max: [80, "A little bit old.."],
    },
    money: {
        TWD: {
            type: Number,
            min: 0,
            max: [7000, "Too much TWD..."],
            default: 0,
        },
        USD: {
            type: Number,
            min: 0,
            default: 0,
        },
    },
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
