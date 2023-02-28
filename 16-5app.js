// const fetchPromise1 = fetch(
//     "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
// );
// const fetchPromise2 = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found");
// const fetchPromise3 = fetch("asdasdsadasdasdasdasdasdasd");

// Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
//     .then((responses) => {
//         responses.forEach((response) => {
//             console.log(response.url, response.status);
//         });
//     })
//     .catch((e) => {
//         console.log(e);
//     });

// async function fetchProduct() {
//     const response = await fetch(
//         "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
//     );
// }

async function myFunc() {
    return 100;
}
