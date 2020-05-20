let array = [1, 2, 3, 4, 5];

//for (let i = 0; i < array.length; i++) {//цикл, который перебирает все элементы массива(удобнее для счета)
//    console.log(array[i]);
//}

//array.forEach(function (item) {//более удобный способ для перебора массива
//    console.log(item);
//});

//for (let item of array) {//более удобный способ для перебора массива(самый удобный)
//    console.log('Item: ', item);
//}

for (let item of 'ABCDEFG') {
    console.log('Item: ', item);
}