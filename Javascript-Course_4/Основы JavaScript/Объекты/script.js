var person = {
    name: "Alex",
    year: 1995,
    family: ["Elena", "Maik"],
    car: {
        model: "BMW",
        year: 2014
    },
    calculateAge: function () {
        var age = 2021 - this.year;
        console.log("Возраст:", age);
    }
};

console.log(person);

console.log(person.family);
console.log(person["year"]);

person.year = 1993;

console.log(person);

person.calculateAge()
