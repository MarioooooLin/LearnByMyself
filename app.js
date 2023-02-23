// fs (file system)
// const fs = require("fs");
// fs.writeFile("myFile.txt", "Good mood", (e) => {
//     if (e) throw e;
//     console.log("document complete");
// });

// fs.readFile("myFile.txt", "utf-8", (e, data) => {
//     if (e) throw e;
//     console.log(data);
// });
var cowsay = require("cowsay");

console.log(
    cowsay.say({
        text: "喔喔喔喔喔喔喔喔喔",
        e: "$ $",
        T: "U ",
    })
);
