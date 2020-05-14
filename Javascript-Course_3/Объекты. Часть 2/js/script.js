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


// function iteration(obj1) {
// 	for (v in obj1) {//проходит через перечисляемые свойства объекта. Он пройдёт по каждому отдельному элементу.
// 		if (o[v] === "object") {
// 			iteration(obj1[v]);
// 		}
// 		console.log("Свойство " + v + " имеет значение " + obj1[v])
// 	};
// };
// iteration();


// one = undefined == false
// if (obj1.one) {
// 	console.log(obj1.one);
// };

// if("one" in obj3) {//obj3 наследует свойства obj1
// 	console.log(obj1.one);
// };

// if (obj1.hasOwnProperty("one")) {//возвращает логическое значение, указывающее, содержит ли объект указанное свойство.
// 	console.log(obj1.one)
// }

// if (obj3.hasOwnProperty("one")) {//Наследуеиые свойства выдают false
// 	console.log(obj1.one)
// }


// if(obj1.one !== undefined) {
// 	console.log(obj1.one)
// };


// var obj4 = {
// 	prop1: 30,
// 	prop2: 50,
// 	func: function () {
// 		console.log(this.prop1 + this.prop2);//This - контекст вызова(указатель на данный объект)
// 	}
// }
// obj4.func2 = function () {
// 	console.log("Func2")
// }
// function foo() {
// 	console.log("foo");
// }
// obj4.func3 = foo;

// obj4.func();
// obj4.func2();
// obj4.func3();

var o = {
	prop1: 10,
	prop2: 50,

	func: function () {
		console.log(this.prop1 + this.prop2);//This - контекст вызова(указатель на данный объект)
	},

	get sum() {// метод чтения
		return this.prop1 + this.prop2;
	},

	set sum(value) {// метод записи
		this.prop1 += value;
	}
};
// o.sum = 5;//65
// console.log(o.sum);

// o.sum = 5;//70
// console.log(o.sum);

Object defineProperty(o, "prop3", {
	value: "100",//значение свойства
	writable: true,//Достпуность для записи
	enumerable: true,//Достпуность для перечисления циклом for .. in
	configurable: true//Достпуность для настройки
});



// var d = new Date(); // DatePrototype

function people(name, age) {//сохдание свойств для будущего объекта(функция-конструктор)

	this.name = name;
	this.age = age;

}

people.prototype = obj1;//задание объекта people в прототипы объект obj1

people.prototype.sum = function () {
	return this.name + " - " + this.age;
};

var Ben = new people("Ben", 18);//Сформирование объекта с помощью конструктора people

// console.log(Ben.name);
console.log(obj1.sum())