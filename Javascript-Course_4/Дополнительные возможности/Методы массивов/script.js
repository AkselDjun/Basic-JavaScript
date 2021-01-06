var str = "1,2,3,4,5,6,7,8"

var array = str.split(","); // разбивает объект String на массив строк путём разделения строки указанной подстрокой.


// console.log(array.join(";")); // обратное действие метода split 
// console.log(array.reverse()); // меняет порядок следования элементов на противоположный


array.splice(0, 1, "12"); // изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые
array.splice(1, 0, "11");


var newArray = array.concat([1, 2]); // возвращает новый массив, состоящий из массива, на котором он был вызван,
// соединённого с другими массивами и/или значениями, переданными в качестве аргументов

// console.log(newArray);


var objArr = [
    { name: "Elena", age: 20 },
    { name: "Max", age: 24 },
    { name: "Victor", age: 29 }
];

var foundPerson = objArr.find(function (person) { // возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию переданному в callback функции 
    return person.age === 20;
});


var oddArray = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(function (i) {
    return i % 2 !== 0;
});

// console.log(oddArray);

var newArray = array.map(function (i) { // создаёт новый массив с результатом вызова указанной функции для каждого элемента массива
    // return parseInt(i);
    return i * 2;
});
console.log(newArray);