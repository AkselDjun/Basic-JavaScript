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

let div = document.createElement("div"), //создание тега
    text = document.createTextNode("Тут был я"); // создание текстового поля с текстом 


div.classList.add("black");//добавление класса к тегу 

// document.body.appendChild(div);//вставка в конец document body
// wrapper.appendChild(div);


// div.innerHTML = "<h3>Hello world!</h3>";
div.textContent = "Hello world!";


document.body.insertBefore(div, circle[0]);//вставка перед указанным элементом 
document.body.removeChild(circle[1]);//удаление элемента из DOM
wrapper.removeChild(heart[1]);

document.body.replaceChild(btn[1], circle[1])//замена дочернего элемента на выбранный

console.log(div);