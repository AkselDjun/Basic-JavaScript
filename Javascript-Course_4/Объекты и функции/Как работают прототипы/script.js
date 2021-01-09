function Car(name, year) {
    this.name = name;
    this.year = year;
};

Car.prototype.getAge = function () {
    return new Date().getFullYear() - this.year;
};

Car.prototype.color = "black";

var ford = new Car("Ford", 2017);
var bmw = new Car("BMW", 2016);

ford.color = "red";

console.log(ford);
console.log(bmw);

console.log(ford.getAge());
console.log(bmw.getAge());

