window.onload = function () {
	console.log(location);//Интерфейс представляет собой адрес (URL) объекта, с которым он связан
	console.log(location.href)//свойство href объекта location содержит строку url-адреса, который мы используем в данный момент


	// function urlArgs() {
	// 	let args = {};
	// 	let query = window.location.search.substring(1);
	// 	let parts = query.split("&");//разбитие строки на массив с разделителем &(амперсант)

	// 	for (let i = 0; i < parts.length; i++) {

	// 		let pos = parts[i].indexOf("=");//поиск в строке(массиве) знака =

	// 		if (pos == -1) {
	// 			continue;
	// 		}

	// 		let name = parts[i].substring(0, pos);
	// 		let value = parts[i].substring(pos + 1);

	// 		args[name] = value;
	// 	}

	// 	return args;

	// }
	// console.log(urlArgs());



	let btn = document.querySelector(".openBtn");

	btn.onclick = function () {
		// window.location.assign("https://www.google.com/");//перенаправляет на другой url
		// window.location.replace("https://www.google.com/");// тот же метод как и assign
		// window.location.reload("https://www.google.com/");//заставляет перезагрузить текущий документ



		// history// хранит историю просмотра страниц в виде списка документов и сведения об их

		// console.log(history.length);

		// history.back();// действует на подобии кнопки браузера "назад"
		// history.forward();// действует на подобии кнопки браузера "вперед"
		// history.go(3);// может перенести вас на несколько страниц вперед либо назад(в зависимости от аргумента)



		console.log(window.navigator);// дает полную информация по браузеру



		console.log(window.screen);// дает полную информация о размерах экрана на стороне пользователя и оступном количестве цветов




	}
}