// function getAge(year) {
//     const current = new Date().getFullYear();
//     return current - year;
// };


// const calculateAge = (year) => {
//     const current = new Date().getFullYear();
//     return current - year;
// };

// const getAge = year => {
//     const current = new Date().getFullYear();
//     return current - year;
// }

// const getAge = year => new Date().getFullYear() - year;
// такая запись возможна в том случае, когда функция занимает ону строку

// console.log(getAge(1988)); 


const person = {
    age: 25,
    firstName: "Maxim",
    logNameWithTimeout: function () {
        setTimeout(() => {
            console.log(this.firstName);
        }, 1000)
    }
};
// стрелочные функции не создают своего контекста

console.log(person.logNameWithTimeout());

