//第一種寫法 Constructor
function Student(name, age, major) {
    this.name = name;
    this.age = age;
    this.major = major;
}
Student.prototype.hi = function () {
    console.log(this.name + " say hi!");
};

let mario = new Student("Mario", 28, "Spanish");
mario.hi();

//第二種寫法 Class
class Students {
    constructor(name, age, major) {
        this.name = name;
        this.age = age;
        this.major = major;
    }
    hi() {
        console.log(this.name + " say hi!");
    }
}
let maria = new Students("Maria", 27, "Chinese");
maria.hi();
console.log(maria.age);

//------------------------------------
class x extends Students {
    constructor(name, age, major, grade) {
        super(name, age, major);
        this.grade = grade;
    }
    study() {
        console.log(this.name + " is study hard on " + this.major);
    }
}

let Jack = new x("Jack", 26, "Math", 70);
Jack.study();
Jack.hi();
//-------------------------------------

function u(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
}

u.testProperty = 10000;
u.testFunction = function () {
    console.log("Test123");
};

u.testFunction();

u.prototype.sayHi = function () {
    console.log(this.name + " say hello!");
};

let Max = new u("Max", 26, 160);
Max.sayHi();
//Max.testFunction();  is not a function

//-----------------------------------
class i {
    static exampleProperty = 10; //static property

    constructor(name, age, major) {
        this.name = name; //instance property
        this.age = age;
        this.major = major;
    }
    hello() {
        console.log(this.name + " say hello~~~~");
    }

    static exampleFunction() {
        console.log("This is a test function.");
    }
}

let jason = new i("Jason", 25, "Art");
i.exampleFunction();
console.log(jason.exampleProperty);
console.log(i.exampleProperty);
