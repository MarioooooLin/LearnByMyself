let languages = ["Java", "C#", "Python", "JavaScript"];
let result = languages.map(function (x) {
    return x.toUpperCase();
});
console.log(result);
let result1 = languages.map((y) => y.toUpperCase());
console.log(result1);

// languages.forEach((n) => {
//     console.log(n);
// });
for (n of languages) {
    console.log(n);
}

let Mario = {
    name: "Mario Lin",
    age: 27,
};
for (let a in Mario) {
    console.log(a);
    console.log(Mario[a]);
}
