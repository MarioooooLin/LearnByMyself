try {
    test();
} catch (e) {
    console.log("Error");
    console.log(e);
    if (e instanceof TypeError) {
        console.log("TypeError");
    } else if (e instanceof ReferenceError) {
        console.log("ReferenceError");
    } else {
        console.log("Else Error");
    }
} finally {
    console.log("Whatever error or not,this code will be execute");
}

//instanceof operator
class Person {
    constructor(name) {
        this.name = name;
    }
}
let Mario = new Person("Mario Lin");
console.log(Mario instanceof Person);

//Customized error information
class NotArrayError extends TypeError {
    constructor(message) {
        super(message);
    }
    printSolution() {
        return "Please check your parameter is array";
    }
}

function sum(arr) {
    if (!Array.isArray(arr)) {
        throw new NotArrayError("Your parameter is not array!");
    }

    let result = 0;
    arr.forEach((element) => {
        result += element;
    });
    return result;
}
console.log(sum([10, 20, 30, 40]));

try {
    sum("Hi");
} catch (e) {
    console.log(e);
    console.log(e.printSolution());
}
