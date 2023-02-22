const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    if (req.url == "/") {
        res.write("歡迎你");
        res.end();
    } else if (req.url == "/anotherPage") {
        res.write("歡迎你唷");
        res.end();
    } else if (req.url == "/index") {
        fs.readFile("index.html", (e, data) => {
            if (e) {
                res.write("wrong file");
                res.end();
            } else {
                res.write(data);
                res.end();
            }
        });
    } else {
        res.write("No page");
        res.end();
    }
    //console.log(req.url);
    //res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    //res.write("welcome to my website!");
    //res.write("歡迎");
    //res.end();
});
server.listen(3000, () => {
    console.log("port3000");
});
