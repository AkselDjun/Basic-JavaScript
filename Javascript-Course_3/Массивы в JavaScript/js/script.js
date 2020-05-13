
var arr = [];// Пустой массив
//          0,1,2,3,4,5,6,7,8,9
var arr2 = [['world', 2, 3], 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];//
//
/*var a = 'script';
var arr3 = [1,2,3,4,5,a,7,8,[1,2,3],10];

var arr4 = [a+10,a-5];*/


/*var arr3 = new Array();//Пустой массив
//
var arr4 = new Array(5);//Пустой массив указанной длины 

var arr5 = new Array(1,2,3,4,5,6,7,'test',9,10);//Создание простого массива*/

var i = 5;
arr2[5] = 'hello';//замена 5 элементу массива arr2

arr2[10] = 11;
arr2[11] = 12;

//arr2[100] = 100;длина массива будет 101


/*arr2['hello'] = 'world';//Эти 3 выражения не изменят свойство length
arr2['hello2'] = 'world';
arr2['hello3'] = 'world';*/

//alert(arr2);


var k = Object.keys(arr2);//Возвращает индексы массива arr2

/*for(var i = 0; i < arr2.length; i++) {
	document.write(arr2[i] + '<br />');
}*/

/*arr2.length = 50

alert(arr2[0][0]);
for(var i = 0; i < k.length; i++) {
	document.write(k[i] + '=>' + arr2[k[i]] + '<br />');
}*/

var table = new Array(10);//Создание пустого массива из 10 элементов 
for (var i = 0; i < table.length; i++) {
	table[i] = new Array(10);// создание вложенного массива (многомерный массив)
}

for (var row = 0; row < table.length; row++) {

	for (var col = 0; col < table[row].length; col++) {

		table[row][col] = row * col;

	}

}

console.log(table[6][6]);

 