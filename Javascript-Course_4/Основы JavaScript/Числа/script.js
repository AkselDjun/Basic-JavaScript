console.log(42);
console.log(-42);
console.log(1.5);
console.log(-8 / 3);
console.log(0xAB);
console.log(2e3); // 2000
console.log(NaN); // not a number
console.log(typeof NaN);
console.log(123 / 0); // infinity - бесконечность


var num = 42;
var delta = 8 / 3;

console.log(num.toString()); // приведение числа к строке
console.log(delta.toFixed(3)); // форматирует число, используя запись с фиксированной запятой
console.log(+delta.toFixed(3) + 4);
console.log(parseFloat(delta.toFixed(2))); // принимает строку в качестве аргумента и возвращает десятичное число
console.log(parseInt(delta.toFixed(2))); // принимает строку в качестве аргумента и возвращает целое число в соответствии с указанным основанием системы счисления

console.log(isNaN(NaN));
console.log(isNaN(45)); // определяет является ли литерал или переменная нечисловым значением (NaN) или нет

console.log(isFinite(1 / 0)); // функция определяет, является ли переданное значение конечным числом. Если необходимо, параметр сначала преобразуется в число
console.log(isFinite(99999999)); //

