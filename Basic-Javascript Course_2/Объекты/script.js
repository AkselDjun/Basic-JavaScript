let option = {
    width: 1024,
    height: 1024,
    name: "Test"
};

//console.log(option.name);

console.log(option["name"]);
option.bool = false;
option.colors = {
    border: "black",
    bg: "red"
};

delete option.name;

console.log(option);

for (let key in option) {
    console.log("Свойство " + key + " имеет значение " + option[key]);
}

console.log(Object.keys(option).length);