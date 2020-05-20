

window.onload = function (e) {
	var button = document.getElementById("myButton");
	//button.addEventListener('click',handler,false);
	//button.attachEvent("onclick",handler);

	/*button.onclick = function (e) {
		
		e = e || window.event;
		
		//var hello = 'Hello world';
		//return handler();
		//console.log(e.type);
		console.log(this);
		
		return false;
	}*/

	document.forms.myForm.elements.exampleInputEmail.onkeypress = function (e) {
		if (e.charCode == 100) {
			return false;
		}
		else {
			return true;
		}
	}

	/*window.onbeforeunload = function () {
		var message = "Hello world";
		
		return message;
	}*/

	var hello = 'World';

	function handler(e) {

		e = e || window.event;

		//console.log(e.type);
		console.log(hello);

		if (e.preventDefault) {
			e.preventDefault();// отмена стандартного поведения 
			console.log(e.defaultPrevented);
		}
		else if (e.returnValue) e.returnValue = false;
		else return false;
	}

	function addEvent(target, type, hendler) {//добавление события
		if (target.addEventListener) {
			target.addEventListener(type, hendler, false)
		}
		else {
			target.attachEvent("on" + type, function (e) {//альтернатива addEventListener только для IE
				return hendler.call(target, e);
			});
		}
	}

	addEvent(button, 'click', handler);

}




