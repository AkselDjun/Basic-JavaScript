// Arrow-функции

function square(x) {
    return x * x;
}

const sq = (x) => {
    return x * x;
};

const greeter = {
    greet: function (name) {
        console.log("Hello", name);
    },
    greetAll: function (names) {
        names.forEach((name) => {
            this.greet(name);
        });
    }
};

greeter.greetAll(["Bob", "Mark", "Pete"])


// const arr = ["1", "3", "2", "5"]
// const res = arr
//     .map((el) => parseInt(el))
//     .filter((num) => num % 2)
//     .reduce((max, value) => Math.max(max, value), 0);


