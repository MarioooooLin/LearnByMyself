//Stack Overflow
//程式中一個function執行自己，稱為遞迴
// function hello() {
//     console.log("hello");
//     hello();
// }
// hello();

function Recursion(n) {
    if (n == 1) {
        return 2;
    }
    return 2 * Recursion(n - 1);
}
console.log(Recursion(10));

function practice(x) {
    if (x == 1) {
        return 1;
    }
    return x + practice(x - 1);
}
console.log(practice(10));
