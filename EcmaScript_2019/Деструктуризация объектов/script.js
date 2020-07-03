// деструктуризация

const person = {
    name: {
        first: "Petr",
        last: "Smith"
    },
    age: 25
};

// const firstName = person.firstName;
// const lastName = person.lastName;
const { name: { first: firstName, last: lastName } } = person;
console.log(firstName, lastName);


const dict = {
    duck: "quack",
    dog: "wuff",
    mouse: "squeak"
};

const { duck, ...otherAnimals } = dict;
console.log(otherAnimals)