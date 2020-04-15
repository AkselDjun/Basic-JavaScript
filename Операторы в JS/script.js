'use strict';//Стандар синтаксиса ES6


//let answer = +prompt("Есть ли вам 18?", "Да");

//console.log(typeof (answer));
//
//console.log("arr" + " - object");
//
//console.log(4 + +" - object");

let incr = 10,
    decr = 10;

//incr++;
//decr--;

//console.log(++incr);
//console.log(--decr);

console.log(incr++);
console.log(decr--);

console.log(5 % 2);

console.log("2" == 2);//Сравнение по значению

console.log("2" === 2);//Сравнение по типу данных

let isChecked = true,
    isClose = false;

console.log(isChecked && isClose);

console.log(isChecked || isClose);

console.log(!isChecked || isClose);