let fetchPromise = fetch(
    "https://mdn.github.io/aaaaaalearning-area/javascriptsssss/apis/fetching-data/can-store/products.json"
);

fetchPromise.then((Response) => {
    console.log(Response);
    // let jsonPromise = Response.json();
    // console.log(jsonPromise);
    Response.json().then((data) => {
        console.log(data);
    });
});

fetchPromise
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((e) => {
        console.log(fetchPromise);
        console.log(e);
    });
