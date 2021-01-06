var divs = document.querySelectorAll("div");
var link = document.querySelector("a");

for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click", function (event) {
        event.stopPropagation(); // остановка события на элементе с которым было произведено действие
        console.log(this.getAttribute("id"));
    });
};

link.addEventListener("click", handleLinkClick)

function handleLinkClick(event) {
    event.preventDefault();

    var div = divs[0];

    div.style.display = div.style.display === "none"
        ? "flex"
        : "none";
}