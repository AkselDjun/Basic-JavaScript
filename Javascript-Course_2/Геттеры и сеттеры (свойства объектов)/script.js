"use strict";

const person = {
    name: "Alex",
    age: 25,

    get userAge() {//получение значения
        return this.age;
    },

    set userAge(num) {//задание нового значения
        this.age = num;
    }
};
// console.log(person.userAge);
console.log(person.userAge = 30);
console.log(person.userAge);