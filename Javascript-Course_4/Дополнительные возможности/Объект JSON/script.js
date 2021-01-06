var person = {
    name: "Max",
    age: 26,
    car: {
        model: "Audi",
        year: 2015
    },
    job: "Frontend",
    friends: ["Elena", "Igor"]
};

var str = JSON.stringify(person); // преобразует значение JavaScript в строку JSON

console.log(str);
console.log(JSON.parse(str)); // преобразует строку JSON в значения JavaScript
