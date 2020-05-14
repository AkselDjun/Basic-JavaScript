// let a = 1;
// let b = 1;

let obj = {

};

let a = 10,
	b = 20;

let obj1 = {//Первый способ создания объекта
	one: "Hello",
	two: "World",
	"some string": a + b,
	three: {
		a: 1,
		b: 2,
		c: {
			"str1": 10,
			"str2": 20
		}
	}
};


var obj2 = new Object();//Второйи способ создания объекта

// console.log(obj1.one);// Первый способ обращения к объекту по ключу
// console.log(obj1["one"]);// Второй способ обращения к объекту по ключу


// function addObj(o, i, v) {
// 	return o[i] = v;//Динамическое добавление свойств в объект (ассоциативный массив)
// }

// addObj(obj, "one", "Hello");
// addObj(obj, "two", "World");
// console.log(obj.one);
// console.log(Object.prototype);

var obj3 = Object.create(obj1);//создаёт новый объект с указанными объектом прототипа и свойствами. То есть он наследует все свойства obj1
// var obj3 = Object.create(null);// Создание объекта без прототипа. Наследования не будет 

obj3.one = 1;//Переопределении значение унаследованного свойства
console.log(obj3.one);
console.log(obj1.one);//Прототип остался без иземенений

delete obj1.two;//Удаления свойства(не может удалить свойства унаследованные)
console.log(obj1);


function iteration(obj1) {
	for (v in obj1) {//проходит через перечисляемые свойства объекта. Он пройдёт по каждому отдельному элементу.
		if (o[v] === "object") {
			iteration(obj1[v]);
		}
		console.log("Свойство " + v + " имеет значение " + obj1[v])
	};
};
iteration();

