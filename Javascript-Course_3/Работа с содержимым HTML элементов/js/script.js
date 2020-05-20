window.onload = function () {

	var button = document.getElementById("button");

	button.onclick = function () {

		var newDiv = document.createElement("div");//создание нового элемента типа тег(div), к примеру
		var newText = document.createTextNode("Some string");//Создает новый текстовый узел
		var newComment = document.createComment("Some string");// создание комментария
		var documentFrag = document.createDocumentFragment();// Создает новый пустой DocumentFragment


		var copyButton = button.cloneNode();//возвращает дубликат узла, из которого этот метод был вызван



	}





};




