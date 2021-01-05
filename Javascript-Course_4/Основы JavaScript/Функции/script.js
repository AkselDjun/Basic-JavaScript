var carName = "Ford";
var carYear = 2018;
var personYear = 1990;


function calculateAge(year) {
    var currentYear = 2020;
    var result = currentYear - year;
    return result;
}

function checkAndLogAge(year) {
    if (calculateAge(year) < 10) {
        console.log("Возраст меньше 10-ти лет");
    } else {
        console.log("Возраст больше 10-ти лет");
    }
}

checkAndLogAge(carYear);
checkAndLogAge(personYear);
