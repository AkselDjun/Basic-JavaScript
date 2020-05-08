"use strict";

// // function showThis(a, b) {
// //     console.log(this);
// //     function sum() {
// //         console.log(this);
// //         return a + b;
// //     }
// //     console.log(sum());
// // }
// // showThis(4, 5);
// // showThis(6, 5);



// let obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         console.log(this);
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// }
// obj.sum();



let user = {
    name: "Jhon"
};

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

console.log(sayName.call(user, " Smit"));//Передача в виде строки
console.log(sayName.apply(user, [" Snow"]));// Передача в виде массива

function count(number) {
    return this * number;
}

let double = count.bind(2);
console.log(double(3));
console.log(double(10));
// 1) Просто вызов функции - window/undefined
// 2) Метод объекта - this = объекту
// 3) Конструктор (new) - this = новый созданный объект
// 4) Указание конкретного контекста - call, apply, bind

let a = "dgsgs";
console.log(strlen(a));