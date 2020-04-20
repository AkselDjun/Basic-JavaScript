let box = document.getElementById("box");
let btn = document.getElementsByTagName("button");
let circle = document.getElementsByClassName("circle");
let heart = document.querySelectorAll(".heart");
let oneHeart = document.querySelector(".heart");
let wrapper = document.querySelector(".wrapper");

box.style.backgroundColor = "blue";
btn[1].style.borderRadius = "100%";

circle[0].style.backgroundColor = "red";
circle[1].style.backgroundColor = "yellow";
circle[2].style.backgroundColor = "green";

// for (let i = 0; i < heart.length; i++) {
//     heart[i].style.backgroundColor = "blue";
// };

// heart.forEach(function (item, i, heart) {
//     item.style.backgroundColor = "blue";
// });

let div = document.createElement("div"),
    text = document.createTextNode("Тут был я");


div.classList.add("black");

// document.body.appendChild(div);
// wrapper.appendChild(div);


// div.innerHTML = "<h3>Hello world!</h3>";
div.textContent = "Hello world!";


document.body.insertBefore(div, circle[0]);
document.body.removeChild(circle[1]);
wrapper.removeChild(heart[1]);

document.body.replaceChild(btn[1], circle[1])

console.log(div);