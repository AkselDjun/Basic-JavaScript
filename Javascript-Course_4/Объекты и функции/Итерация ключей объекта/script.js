var person = {
    name: "Jhon",
    age: 27,
    job: "Frontend"
};

// for (var key in person) {
//     if (person.hasOwnProperty(key)) {
//         console.log(person[key]);
//     }

// };


Object.keys(person).forEach(function (key) {
    console.log(person[key]);
});
