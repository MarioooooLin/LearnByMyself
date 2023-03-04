// function hello() {
//     let a = 10;
//     console.log(a);
// }

// function hello2() {
//     console.log(a);
// }

// hello2();

//Block Scope
//通常出現在loop,if statement
// if (true) {
//     let x = 10;
// }
// console.log(x);

// for (let i = 0; i < 20; i++) {}
// console.log(i);

// function sayHi() {
//     console.log("Hello");
//     function sayHi2() {
//         console.log("Hello2");
//     }
// }
// sayHi2();

// let myName = "Mario";

// function sayHi() {
//     console.log(myName + "say hello");
//     sayHi2();

//     function sayHi2() {
//         console.log(myName + "say hello");
//     }

//     function sayHi3() {
//         console.log(myName + "say hello");
//     }
//     sayHi3();
// }
// sayHi();

function a() {
    var x = 10;
}
console.log(x);
