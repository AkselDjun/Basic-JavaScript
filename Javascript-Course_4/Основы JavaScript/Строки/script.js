var str1 = "Hello world";
var str2 = "Hello world 2";

var personName = "Виктор";

var message = "Человека зовут '" + personName + "'";

console.log(message);

var newMessage = "Hello world!!!";

console.log(newMessage.length);// длина строки
console.log(newMessage.toUpperCase());// приведение к верхнему регистру
console.log(newMessage.toLowerCase());// приведение к нижнему регистру
console.log(newMessage.charAt(1));// поиск символа по позиции
console.log(newMessage.indexOf("world"));// возвращает индекс первого вхождения указанного значения в строковый объект

console.log(newMessage.indexOf("Cat"));// ERROR!!!!

console.log(newMessage.substr(1, 4));// возвращает указанное количество символов из строки, начиная с указанной позиции
console.log(newMessage.substring(1, 3));// возвращает подстроку строки между двумя индексами, или от одного индекса и до конца строки


