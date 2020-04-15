if (2 * 4 == 7) {
    console.log("True");
} else {
    console.log("False");
};

let num = 50;

if (num < 49) {
    console.log("False");
} else if (num > 100) {
    console.log("Much");
} else {
    console.log("True");
};


let num = 50;
(num == 50) ? console.log("True") : console.log("False");


let num = 50;
switch (num) {
    case num < 49:
        console.log("False");
        break;
    case num > 100:
        console.log("Very Much");
        break;
    case num > 80:
        console.log("Much");
        break;
    case 50:
        console.log("True");
        break;
    default:
        console.log("Что-то пошло не так");
        break;
}