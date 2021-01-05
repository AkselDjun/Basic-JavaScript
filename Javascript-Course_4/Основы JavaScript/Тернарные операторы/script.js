// if (4) {
//     console.log("Значение true");
// } else {
//     console.log("Значение false");
// }

4
    ? console.log("Значение true")
    : console.log("Значение false");

((true || false) || !false)
    ? console.log("Значение true")
    : console.log("Значение false");


var personAge = 20;

// if (personAge < 18) {
//     message = "Человек ещё не совершеннолетний";
// } else {
//     message = "Человек совершеннолетний";
// }

var message = (personAge < 18)
    ? "Человек ещё не совершеннолетний"
    : "Человек совершеннолетний";

console.log(message);