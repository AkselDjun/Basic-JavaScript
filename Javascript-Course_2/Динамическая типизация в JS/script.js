//- to string
// 1)
console.log(typeof (String(4)));
// 2)
console.log(typeof ("www" + false));

console.log("https://facebook.com/catalog" + 5);


// to number
// 1)
console.log(typeof (Number("5")));
// 2)
console.log(typeof (+"sfg"));
// 3)
console.log(typeof (parseInt("15px", 10)));

let ans = +prompt("Hello?", "");



// 0, "", null, undefined, NaN - only false
// 1)
let switcher = null;

if (switcher) {
    console.log("Working");
}

switcher = 1;

if (switcher) {
    console.log("Working");
}

// 2)
console.log(typeof (Boolean("5")));
//3)
console.log(typeof (!!"5"));
