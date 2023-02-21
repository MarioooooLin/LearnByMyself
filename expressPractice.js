//導入express
const { request, response } = require("express");
const express = require("express");
//建立使用對象
const app = express();
//建立路由規則
app.get("/", (request, response) => {
    //設定響應
    response.send("hello express");
});
//監聽port啟動服務
app.listen(8000, () => {
    console.log("服務已啟動,port8000監聽中");
});
