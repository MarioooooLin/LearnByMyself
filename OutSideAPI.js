// let output = document.querySelector("#output");

// async function joke() {
//     try {
//         let result = await fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=political&type=single");
//         let data = await result.json();
//         console.log(data.joke);
//         output.innerText += data.joke + "\n";
//     } catch (e) {
//         console.log(e);
//     }
// }

// joke();

// let button = document.querySelector("#addJoke");
// button.addEventListener("click", () => {
//     joke();
// });

//Weather API
let myKey = "ce716a17976bbf90af4f5e2deb791eb8";
let city = "Kaohsiung";
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}`;

async function weather() {
    try {
        let result = await fetch(url);
        let data = await result.json();
    } catch (e) {
        console.log(e);
    }
}
weather();
