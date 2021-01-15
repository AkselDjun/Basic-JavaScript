// setTimeout(function () {
//     alert("Hello timeout!");
// }, 2000);

let counter = 0;

let interval = setInterval(function () {
    console.log(counter++);
}, 3000);

clearInterval(interval)