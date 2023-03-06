class Circle {
    static AllCircles = [];

    constructor(radius) {
        this.radius = radius;
        Circle.AllCircles.push(this);
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }

    static getInfo() {
        return "圓面積公式為pi * r * r";
    }

    static getAllCircles() {
        let total = 0;
        Circle.AllCircles.forEach((circle) => {
            total += circle.getArea();
        });
        return total;
    }
}

let c2 = new Circle(20);
let c3 = new Circle(30);

console.log(Circle.getInfo());

let c1 = new Circle(10);
console.log(c1.getArea());

console.log(Circle.getAllCircles());
