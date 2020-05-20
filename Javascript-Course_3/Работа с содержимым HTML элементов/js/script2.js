
window.onload = function () {

	document.querySelector('h2').onclick = function () {

		var li = document.querySelector('.current');

		// console.log(li.innerHTML);
		// li.innerHTML = "Hello world!";

		// console.log(li.outerHTML);// получает сериализованный HTML-фрагмент, описывающий элемент, включая его потомков.
		// li.outerHTML = "<h2>" + li.outerHTML + "</h2>";

		// li.insertAdjacentHTML("beforebegin"/*перед открытием li*/, "<strong>Some text</strong>");// добавление текста совместо с разметкой на определенную позицию
		// li.insertAdjacentHTML("afterbegin"/*после открытия li*/, "<strong>Some text</strong>");
		// li.insertAdjacentHTML("beforeend"/*перед закрытием li*/, "<strong>Some text</strong>");
		// li.insertAdjacentHTML("afterend"/*после закрытием li*/, "<strong>Some text</strong>");


		li = document.querySelector('.current').firstChild;//тег "a"

		// console.log(li.textContent);//возвращает текстовое значение элемента
		// li.textContent = "Some text";//свойства одинаковые
		// li.innerText = "Some text";//свойства одинаковые



		// function textContent(el, value) {
		// 	var content = el.textContent;

		// 	if (value === undefined) {

		// 		if (content !== undefined) {
		// 			return content;
		// 		} else {
		// 			return el.innerText;
		// 		}

		// 	} else {

		// 		if (content !== undefined) {
		// 			el.textContent = value;
		// 		} else {
		// 			el.innerText = value;
		// 		}

		// 	};

		// };

		// textContent(li, "hello");



		var div = document.querySelector("#content");
		// console.log(div.textContent);//получение текстового контента блока content
		// console.log(div.innerText);

		// function textContent(el) {
		// 	var child, type, s = "";

		// 	for (child = el.firstChild; child != null; child = child.nextSibling) {
		// 		type = child.nodeType;//получение типа элемента 

		// 		if (type == 3) {
		// 			s += child.nodeValue;
		// 		} else if (type === 1) {
		// 			s += textContent(child);
		// 		}

		// 	}

		// 	return s;
		// };
		// console.log(textContent(div));






	};
}

