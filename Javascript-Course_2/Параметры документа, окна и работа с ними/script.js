let box = document.querySelector(".box"),
    btn = document.querySelector("button");

// let width = box.offsetWidth,
//     height = box.offsetHeight;

let width = box.clientWidth,
    height = box.clientHeight;

// let width = box.scrollWidth,
//     height = box.scrollHeight;

console.log(width);
console.log(height);
console.log(box.getBoundingClientRect().left);

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);
console.log(document.documentElement.scrollTop);

btn.addEventListener("click", function () {
    // box.style.height = box.scrollHeight + "px";
    box.scrollTop = 0;
    // console.log(box.scrollTop);
});

scrollBy(0, 200);
scrollTo(0, 200);