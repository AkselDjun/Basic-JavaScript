// Spread operator for Objects

const defaults = {
    host: "localhost",
    dbName: "blog",
    user: "admin"
};
const opts = {
    user: "Jhon",
    password: "adminJhon"
};

const port = 8080;
const res = {
    ...defaults,
    ...opts,
    port
};
console.log(res)