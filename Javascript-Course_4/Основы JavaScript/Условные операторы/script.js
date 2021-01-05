/*
    &&     |  true   |  false
    true   |  true   |  false
    false  |  false  |  false

    ||     |  true   |  false
    true   |  true   |  false
    false  |  false  |  false

    && (и) - true если все значения true
    || (или) - true если хоть одно значение true
    !  (нет) - инвертирует true или falsef
*/

var carName = "Ford";
var carYear = 2014;

// если возраст машины меньше 5-ти лет ...
// если возраст машины больше или равно 5-ти лет и меньше или равно 10-ти лет ...
// иначе другое сообщение

if (carYear > 2015) {
    console.log(carName + " моложе 5-ти лет")
} else if (carYear <= 2015 && carYear >= 2010) {
    console.log(carName + " от 5-ти до 10-ти лет")
} else {
    console.log(carName + " старше 10-ти лет")
}



// 0, null, undefined, "", NaN - FALSE

var str = "dfsd";

if (str) {
    console.log("Значение true");
} else {
    console.log("Значение false");
}