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

// let arr = ["first", 2, 3, "four", 5];

// for (let i < 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach(function(item, 1, mass){
//     console.log(i + ": " + item + "(массив: " + mass + ")");
// });

// console.log(arr);

// let mass = [1, 3, 4, 6, 7];

// for (let key of mass) {
//     console.log(key);
// }

// let ans = prompt("", ""),
//     arr = [];

// arr = ans.split(",");
// console.log(arr);

// let arr = ["aawe", "zzz", "pp", "ref"],
//     i = arr.join(",");

// console.log(arr);

let arr = [1, 15, 4],
    i = arr.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}

console.log(arr)