let balance = 0; //shared resource
let mutex = Promise.resolve(); //return fulfilled Promise object

const randomDelay = () => {
    // return value is a Promise
    // and the time for this Promise changing from pending to fulfilled is random
    return new Promise((resolve) => setTimeout(resolve, Math.random() * 100));
};

async function loadBalance() {
    await randomDelay();
    return balance;
}

async function saveBalance(value) {
    await randomDelay();
    balance = value;
}

async function sellApple() {
    mutex = mutex
        .then(async () => {
            const balance = await loadBalance();
            console.log(`My account value is :${balance} before I sell apples`);
            const newBalance = balance + 50;
            await saveBalance(newBalance);
            console.log(`My account value is :${newBalance} after I sell apples`);
        })
        .catch((e) => {
            console.log(e);
        });
    return mutex;
}

async function sellOrange() {
    mutex = mutex
        .then(async () => {
            const balance = await loadBalance();
            console.log(`My account value is :${balance} before I sell oranges`);
            const newBalance = balance + 50;
            await saveBalance(newBalance);
            console.log(`My account value is :${newBalance} after I sell oranges`);
        })
        .catch((e) => {
            console.log(e);
        });
    return mutex;
}

async function main() {
    await Promise.all([
        sellApple(),
        sellOrange(),
        sellOrange(),
        sellOrange(),
        sellOrange(),
        sellOrange(),
        sellOrange(),
    ]);
    const balance = await loadBalance();
    console.log(`My account value is :${balance} after I sell apples and oranges`);
}

main();
