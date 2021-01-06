// class -> .CLASS_NAME
// id -> #ID
// tag -> TAG_NAME

var a = document.querySelector("a");
var oldHref = a.getAttribute("href"); // получение содержимого атрибута по его названию

a.setAttribute("href", "https://ya.ru"); // изменяет значение существующего атрибута у выбранного элемента
a.setAttribute("title", "Go to Yandex");
a.innerHTML = "Yandex";


var box1 = document.querySelector("#box1");
var box2 = document.querySelector("#box2");

box1.classList.add("red"); // Добавляет элементу указанные классы
var hasClass = box1.classList.contains("blue"); // Проверка на наличие данного класса у тега
console.log(hasClass)

if (hasClass) {
    box2.classList.remove("blue"); // Удаляет элементу указанные классы
} else {
    box2.classList.add("blue");
}