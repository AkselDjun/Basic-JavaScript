var cars = [
    "Ford",
    "Mazda",
    "Audi",
    "Volvo"
];

// var any = [
//     42,
//     "apple",
//     { a: 1 }
// ];

console.log(cars);
console.log(cars[1]); // получение элемента массива по индексу

console.log(cars.length); // длина массива

cars.push("BMW"); // добавление нового элемента в конец массива
console.log(cars);

cars.pop(); // удаление последнего элемента массива
console.log(cars);

cars.shift(); // удаление и возвращение первого элемента
console.log(cars);

cars.unshift("Honda"); // добавляет элемент в начало массива
console.log(cars);

console.log(cars.indexOf("Audi")); // возвращает первый индекс, по которому данный элемент может быть найден в массиве 
