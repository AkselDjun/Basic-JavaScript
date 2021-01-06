document.querySelector("button").addEventListener("click", function (event) {

    var inputValue = document.querySelector("input").value;

    var obj = {
        text: inputValue
    }

    localStorage.setItem("headerText", JSON.stringify(obj)); // сохранить пару ключ/значение 

});

document.addEventListener("DOMContentLoaded", function () {

    var obj = {}; // undefined

    try {
        obj = JSON.parse(localStorage.getItem("headerText")); // получить данные по ключу key
    } catch (e) { };

    // undefined.text
    if (obj && obj.text && obj.text.trim()) {
        document.querySelector("h1").textContent = obj.text
    }
});