// class -> .CLASS_NAME
// id -> #ID
// tag -> TAG_NAME

var a = document.querySelector("a");
var oldHref = a.getAttribute("href"); // получение содержимого атрибута по его названию

a.setAttribute("href", "https://ya.ru"); // изменяет значение существующего атрибута у выбранного элемента
a.setAttribute("title", "Go to Yandex");
a.innerHTML = "Yandex";

console.log(a.attributes); // возвращает группу атрибутов всех узлов, зарегистрированных в указанном узле