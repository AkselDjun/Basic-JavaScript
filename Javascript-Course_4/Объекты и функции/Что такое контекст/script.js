var person = {
    age: 28,
    name: "Max",
    job: "Frontend",
    displayInfo: function (ms) {

        setTimeout(function () {
            console.log("Age: ", this.age);
            console.log("Name: ", this.name);
            console.log("Job: ", this.job);
        }.bind(this), ms);
    }
};

person.displayInfo(5000);