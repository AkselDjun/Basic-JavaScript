const btns = document.querySelectorAll("button"),
    wrapper = document.querySelector(".btn-block");

//свойтсво classList возвращает псевдомассив содержащий все классы элемента
// console.log(btns[0].classList.length);//получение количества классов
// console.log(btns[0].classList.item(0));//получения класса под определенным индексом 
// console.log(btns[0].classList.add("red"));//добавление класса к элементу 
// console.log(btns[0].classList.remove("buttton"));//удаление классов
// console.log(btns[0].classList.toggle("buttton"));//свойство, которое может добавлять классы если их нет.
// При попытке добавить класс, который уже существует, он будет удален



// if (btns[1].classList.contains("red")) {
//     console.log("red");
// }



btns[0].addEventListener("click", () => {

    // if (!btns[1].classList.contains("red")) {
    //     btns[1].classList.add("red");
    // } else {
    //     btns[1].classList.remove("red");

    btns[1].classList.toggle("red");

});



// console.log(btns[0].className);//по свойству такой же как и classList, но не такой мощный и функциональный



wrapper.addEventListener("click", (event) => {
    if (event.target && event.target.tagName == "BUTTON") {
        console.log("Hello");
    }
});



btns.forEach(btn => {
    btn.addEventListener("click", () => {
        console.log("Hello");
    });
});



const btn = document.createElement("button");
btn.className.add("red");
wrapper.append(btn);//добавление в конец документа