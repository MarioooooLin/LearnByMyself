let mario = {
    name: "Mario",
    sayHi() {
        console.log("Hello");
    },
};
let maria = {
    __proto__: mario,
};

console.log(maria.name);
maria.sayHi();

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.hello = function () {
        console.log(this.name + " say hi!");
    };
}

Person.prototype.type = "Man";

Person.prototype.hi = function () {
    console.log(this.name + " say hello!!!!");
};

let jack = new Person("Jack", 28);
let mia = new Person("Mia", 27);
jack.hello();
mia.hi();
console.log(jack.type);

console.log(jack.hi == mia.hi); //Prototype inheritance,可 節省記憶體

let arr = [1, 2, 3];
console.log(arr);
