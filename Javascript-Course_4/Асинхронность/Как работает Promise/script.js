// Client -> Server -> DataBase -> Server -> Client


console.log("Client: want to get a list of users");
console.log("...");


// setTimeout(function () {
//     console.log("Server: requesting a list of users in the database");
//     console.log("...");


//     setTimeout(function () {
//         console.log("Database: creating a list of users");
//         console.log("...");


//         setTimeout(function () {
//             console.log("Server: transforming data for the client");
//             console.log("...");


//             setTimeout(function () {
//                 console.log("Client: getting and displaying data");
//                 console.log("...");
//             }, 1000);
//         }, 500)
//     }, 500)
// }, 1000);




let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Server: requesting a list of users in the database");
        console.log("...");
        resolve(); // сигнализирует о завершении данного этапа
    }, 1000);
});


promise.then(function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let users = [
                { uId: "id1", name: "Maxim" },
                { uId: "id2", name: "Pavel" },
                { uId: "id3", name: "Alex" }
            ];
            // reject("The database could not get a list of users"); // возвращает объект Promise, который был отклонен по указанной причине.
            console.log("Database: creating a list of users", users);
            console.log("...");
            resolve(users);
        }, 500);
    });
})
    .then(function (dbUsers) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log("Server: transforming data for the client");
                console.log("...");
                let users = dbUsers.map(function (user) {
                    return {
                        id: user.uId,
                        firstName: user.name,
                        timestamp: Date.now()
                    }
                })
                resolve(users);
            }, 500);
        });
    })
    .then(function (users) {
        setTimeout(function () {
            console.log("Client: getting and displaying data", users);
        }, 1000);
    })
    .catch(function (error) {
        console.error(error);
    })
    // .finally(function () { // вызывается после завершения всех асинхронных операций
    //     console.log("Finally");
    // })


