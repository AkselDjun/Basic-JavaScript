document.querySelector("#alert").addEventListener("click", function () {
    alert("Вы успешно кликнули по кнопке!");
});

document.querySelector("#confirm").addEventListener("click", function () {
    var decision = confirm("Вы уврены в том, что хотите нажать на кнопку?");

    if (decision) {
        alert("Вы успешно кликнули по кнопке!");
    };
});

document.querySelector("#prompt").addEventListener("click", function () {
    var userAge = prompt("Введите свой возраст");

    if (userAge >= 18) {
        alert("Вы можете пройти")
    } else {
        alert("Вы ещё слишком молоды")
    };
});

console.log("Console.log");
console.warn("Console.warn"); // console warning
console.info("Console.info"); // console info
console.error("Console.error"); // console error

// throw new Error("Error");