function stringWork() {
	let str = document.getElementById("head").innerHTML;// устанавливает или получает HTML или XML разметку дочерних элементов.


	let result = Math.acos(-1);// возвращает косинус
	let result = Math.abs(10);// возвращает абсолютное значение числа.
	let result = Math.atan(45);// возвращает котангенс
	let result = Math.ceil(3.5);// возвращает округленное значение до ближайшего боольшего 
	let result = Math.floor(3.5);// возвращает округленное значение до ближайшего меньшего
	let result = Math.pow(2, 2);// возвращает число возведенное в степень


	document.getElementById("result").innerHTML = result;
}

window.onload = function () {
	stringWork();
}