
window.onload = function (e) {


	function addEvent(target, type, hendler) {
		if (target.addEventListener) {
			target.addEventListener(type, hendler, false)
		}
		else {
			target.attachEvent("on" + type, function (e) {
				return hendler.call(target, e);
			});
		}
	}

	var button = document.getElementById('myButton');
	addEvent(button, 'click', handler);

	function handler(e) {
		e = e || window.event;

		var request = new XMLHttpRequest();// это встроенный в браузер объект, который даёт возможность делать HTTP-запросы к серверу без перезагрузки страницы.

		request.open("POST", 'server.php');//инициализация конструктора [async, user, password]
		request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");//Устанавливает заголовок запроса с именем name и значением value.
		request.setRequestHeader("MyHead", "someString");

		request.onreadystatechange = function () {//обработчик события для http запросов 

			if (request.readyState === 4/*состояние запроса(номер)*/ && request.status === 200) {
				document.getElementById('three').innerHTML = request.responseText;
			}

		}

		request.send("name=Ben&age=18");//принимает необязательные аргументы в тело запросов

		/// status  statusText//
		/// getResponseHeader()//получение заголовков 

		//  responseText//возвращает текст ответа от сервера на отправленный запрос.
		//   responseXml//возвращает xml ответа от сервера на отправленный запрос.


		///readyState

		e.preventDefault();
		return false
	}

}







