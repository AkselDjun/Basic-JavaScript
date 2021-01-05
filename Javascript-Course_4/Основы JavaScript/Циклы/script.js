var numbers = [1, 5, 3, 8, "4", 4, 5, 2, 7, 6, 1];

// numbers.push("Not a number");
// numbers.push("New line");

// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         console.log(numbers[i])
//     }
// }

// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) {
//         continue;
//     }
//     console.log(numbers[i]);
// }

// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         continue;
//     }
//     console.log(numbers[i]);
// }


numbers.push("String");

for (var i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "string") {
        break; // заканчивает цикл при удачной проверке первого элемента 
    }
    console.log(numbers[i]);
}