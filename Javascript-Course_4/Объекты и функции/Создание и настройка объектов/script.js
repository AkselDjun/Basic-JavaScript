var car = Object.create({
    calculateDistancePerYear: function () {
        Object.defineProperty(this, "distancePerYear", {
            value: this.distance / this.age,
            enumerable: true,
            writable: false,
            configurable: false
        })
    }
}, {
    name: {
        value: "Ford",
        enumerable: true,
        writable: false,
        configurable: false
    },
    model: {
        value: "Mondeo",
        enumerable: true,
        writable: false,
        configurable: false
    },
    year: {
        value: 2014,
        enumerable: true,
        writable: false,
        configurable: false
    },
    distance: {
        value: 130200,
        enumerable: true,
        writable: true,
        configurable: false
    },
    age: {
        enumerable: true,
        get: function () {
            console.log("Получаем возраст");
            return new Date().getFullYear() - this.year;
        },
        set: function () {
            console.log("Устанавливаем значение");

        }
    }
});

car.calculateDistancePerYear();

for (var key in car) {
    if (car.hasOwnProperty(key)) {
        console.log(key, car[key]);
    };
};