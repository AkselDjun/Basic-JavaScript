// Object

const x = 10;
const y = 30;

const point = {
    x: x,
    y: y,
    draw: function () {
        // ..
    }
};
const p = {
    x,
    y,

    draw(ctx) {
        // ..
    }
}




const prefix = "_blah_";
const data = {
    [prefix + "name"]: "bob",
    [prefix + "age"]: 25
}
console.log(data);




const defaults = {
    host: "localhost",
    dbName: "blog",
    user: "admin"
};
const opts = {
    user: "Jhon",
    password: "adminJhon"
};

const res = Object.assign({}, defaults, opts);
console.log(res)



const person = {
    name: "Bob",
    friends: ["Mark", "Jacob"]
};
const shallowCopy = Object.assign({}, person)
person.friends.push("Jane");
console.log(shallowCopy);