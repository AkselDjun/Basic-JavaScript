//array destructuring

const fib = [1, 1, 2, 3, 5, 7, 12];
const [a, b, c] = fib;
console.log(a, b, c);


const line = [[10, 17], [14, 7]];
const [[p1x, p1y], [p2x, p2y]] = line;
console.log(p1x, p1y, p2x, p2y);


const people = ["chris", "sandra", "bob"];
const [a, ...others] = people;
console.log(others)