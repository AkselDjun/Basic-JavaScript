"use strict"

let json = `{"id":2}`;

try {
    let user = JSON.parse(json);
    console.log(user);

    if (!user.name) {
        throw new Error("В этих данных нет имени!");
    }

    // console.log("Начинаем работу");
    // console.log(a);
    // console.log("Результат");
} catch (error) {
    console.log(error.name);// получение только имени ошибки
    console.log(error.message);// получение только описания ошибки
    console.log(error.stack);// получение местоположения ошибки

    console.log(`Мы получили ошибку: ${error.name}`);
} finally {
    console.log("А я выполню всегда");
}

console.log("А я буду работать дальше!");