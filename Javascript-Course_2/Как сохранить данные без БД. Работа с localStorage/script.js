// localStorage.setItem("number", 1);// запись значения

// console.log(localStorage.getItem("number"));// поиск значения по ключу 

// localStorage.removeItem("number");// удаление записи по ключу

// localStorage.clear();// полная очистка ВСЕГО хранилища

window.addEventListener("DOMContentLoaded", function () {

    let checkbox = document.getElementById("rememberMe"),
        change = document.getElementById("change");

    if (localStorage.getItem("isChecked") === "true") {
        checkbox.checked = true;
    };

    if (localStorage.getItem("bg") === "changed") {
        change.style.backgroundColor = "black";
    };

    checkbox.addEventListener("click", function () {
        localStorage.setItem("isChecked", true);
    });

    change.addEventListener("click", function () {
        localStorage.setItem("bg", "changed");
        change.style.backgroundColor = "black";
    });


    let person = {
        name: "Alex",
        age: 25,
        tech: ["mobile", "notebook"]
    }

    let serializedPersone = JSON.stringify(person);
    localStorage.setItem("Alex", serializedPersone);

    console.log(JSON.parse(localStorage.getItem("Alex")));

});