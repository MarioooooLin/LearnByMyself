function Person(name, age) {
    this.name = name;
    this.age = age;
    this.hi = function () {
        console.log(this.name + "say hi.");
    };
}

let mario = new Person("Mario", 28);
let maria = new Person("Maria", 23);

console.log(mario);
mario.hi();
