window.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");

    function recursy(element) {
        element.childNodes.forEach(node => {
            if (node.nodeName === "#text") {
                return;
            } else {
                console.log(node);
                recursy(node);
            }
        });
    }

    recursy(body);
});