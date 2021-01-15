// Client -> Server -> DataBase -> Server -> Client


console.log("Client: want to get a list of users");
console.log("...");


setTimeout(function () {
    console.log("Server: requesting a list of users in the database");
    console.log("...");


    setTimeout(function () {
        console.log("Database: creating a list of users");
        console.log("...");


        setTimeout(function () {
            console.log("Server: transforming data for the client");
            console.log("...");


            setTimeout(function () {
                console.log("Client: getting and displaying data");
                console.log("...");
            }, 1000);
        }, 500)
    }, 500)
}, 1000);


