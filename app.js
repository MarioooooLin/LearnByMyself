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

class Fruit {
    constructor() {
        this.x = Math.floor(Math.random() * col) * unit;
        this.y = Math.floor(Math.random() * row) * unit;
    }
    setFruit() {
        drawingContext.fillStyle = "red";
        drawingContext.fillRect(this.x, this.y, unit, unit);
    }
    newLocation() {
        let overlap = false;
        let newX;
        let newY;

        function checkOverlap(newX, newY) {
            for (let i = 0; i < snake.length; i++) {
                if (newX == snake[i].x && newY == snake[i].y) {
                    overlap = true;
                    return;
                } else {
                    overlap = false;
                }
            }
        }
        do {
            newX = Math.floor(Math.random() * col) * unit;
            newY = Math.floor(Math.random() * row) * unit;
            checkOverlap(newX, newY);
        } while (overlap);

        this.x = newX;
        this.y = newY;
    }
}
let myFruit = new Fruit();

window.addEventListener("keydown", changeDir);
let dir = "right";
function changeDir(e) {
    console.log(e);
    if (e.key == "ArrowLeft" && dir != "right") {
        dir = "left";
        console.log("You press the left");
    } else if (e.key == "ArrowRight" && dir != "left") {
        dir = "right";
        console.log("You press the right");
    } else if (e.key == "ArrowDown" && dir != "up") {
        dir = "down";
        console.log("You press the down");
    } else if (e.key == "ArrowUp" && dir != "down") {
        dir = "up";
        console.log("You press the up");
    }
}

function draw() {
    console.log("Drawing...");
    //let back-ground all black
    drawingContext.fillStyle = "black";
    drawingContext.fillRect(0, 0, canvas.width, canvas.height);

    myFruit.setFruit();

    for (let i = 0; i < snake.length; i++) {
        if (i == 0) {
            drawingContext.fillStyle = "green";
        } else {
            drawingContext.fillStyle = "lightblue";
        }
        drawingContext.strokeStyle = "white";

        if (snake[i].x >= canvas.width) {
            snake[i].x = 0;
        }
        if (snake[i].x < 0) {
            snake[i].x = canvas.width - unit;
        }
        if (snake[i].y >= canvas.height) {
            snake[i].y = 0;
        }
        if (snake[i].y < 0) {
            snake[i].y = canvas.height - unit;
        }

        //fillRect(x,y,width,height)
        drawingContext.fillRect(snake[i].x, snake[i].y, unit, unit);
        drawingContext.strokeRect(snake[i].x, snake[i].y, unit, unit);
    }

    //According the direction of dir to decide the coordinate of snake
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (dir == "left") {
        snakeX -= unit;
    } else if (dir == "up") {
        snakeY -= unit;
    } else if (dir == "right") {
        snakeX += unit;
    } else if (dir == "down") {
        snakeY += unit;
    }

    let newHead = {
        x: snakeX,
        y: snakeY,
    };

    //Check the snake eat the fruit or not
    if (snake[0].x == myFruit.x && snake[0].y == myFruit.y) {
        myFruit.newLocation();
    } else {
        snake.pop();
    }
    snake.unshift(newHead);
}

// Each 0.15s process draw
let myGame = setInterval(draw, 100);
