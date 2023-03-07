const canvas = document.getElementById("myCanvas");
const drawingContext = canvas.getContext("2d"); //Drawing context

const unit = 20;
const row = canvas.height / unit;
const col = canvas.width / unit;

//snake body
let snake = [];
// store the x,y
snake[0] = {
    x: 80,
    y: 0,
};
snake[1] = {
    x: 60,
    y: 0,
};
snake[2] = {
    x: 40,
    y: 0,
};
snake[3] = {
    x: 20,
    y: 0,
};

for (let i = 0; i < snake.length; i++) {
    if (i == 0) {
        drawingContext.fillStyle = "green";
    } else {
        drawingContext.fillStyle = "lightblue";
    }
    drawingContext.strokeStyle = "white";

    //fillRect(x,y,width,height)
    drawingContext.fillRect(snake[i].x, snake[i].y, unit, unit);
    drawingContext.strokeRect(snake[i].x, snake[i].y, unit, unit);
}
