function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.hello = function () {
    console.log(this.name + " say hello!");
};

function Student(name, age, major, grade) {
    Person.call(this, name, age);
    this.major = major;
    this.grade = grade;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.study = function () {
    console.log(this.name + " is study hard on " + this.major);
};

let mario = new Student("Mario Lin", 28, "Spanish", 60);
console.log(mario.name);
console.log(mario.major);
mario.hello();
mario.study();
