let Mario = {
    name: "Mario",
    age: 28,
};

function getAge() {
    return this.age;
}

let newGetAge = getAge.bind(Mario);
console.log(newGetAge());

function getInfo(country, height) {
    console.log(this.name + " come from " + country + " height is " + height + "cm");
    return this.age;
}

getInfo.call(Mario, "TW", 185);
getInfo.apply(Mario, ["TW", 185]);
