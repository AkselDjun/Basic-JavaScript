const createCar = (name, model) => {
    return { name, model };
    // если совпадает ключ и значение внутри его, то уместа такая запись
};

const ford = createCar("Ford", "Focus");
console.log(ford);

const yearField = "year";

const bmw = {
    name: "BMW",
    ["model"]: "X6M", // динамическое создание ключей 
    [yearField]: 2014,

    logFields() {
        const { name, year, model } = this
        console.log(name, model, year);
    }
};

console.log(bmw);
bmw.logFields();