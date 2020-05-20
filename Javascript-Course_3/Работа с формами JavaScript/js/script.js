window.onload = function () {

	// var email = document.getElementById("firstForm");
	// var fields = document.querySelectorAll("#firstForm input[type ='checkbox']");

	// for (var i = 0; i < fields.length; i++) {
	// 	console.log(fields[i].type);
	// }


	// console.log(document.myForm);//форму можно извлекать не декларируя её в js документе
	// console.log(document.forms);//коллекция всех html форм которые определены в документе
	// console.log(document.forms.myForm.elements);

	var option = document.forms.firstForm.elements.option;

	for (var i = 0; i < option.length; i++) {
		if (option[i].checked) {//отмеченый checkbox
			alert(option[i].value)
		}
	};


	var options = document.forms.firstForm.elements.myselect;

	// for(var i = 0; i < options.length; i++) {
	// 	if(options[i].selected) {//отмеченные option
	// 		options[i] = null;
	// 	}
	// }


	var newOption = new Option {//создания элемента типа option
		"Option new",
		10,
		false,
		false,

	};
	options[options.length] = newOption;


};




