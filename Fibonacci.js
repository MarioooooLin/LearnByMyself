function x(n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }

    return x(n - 1) + x(n - 2);
}
console.log(x(20));

for (let i = 2; i < 15; i++) {
    console.log(x(i + 1) / x(i));
}
