class Car {
    constructor(name) {
        console.log('Car constructor');
        this.name = name;
    }

    logName() {
        console.log('Car name is: ', this.name);
    }
}

class BMW extends Car {//в данном примере обявляется, что BMW это дочерний элемент класса Car
    constructor(name) {
        super(name);

        console.log('BMW constructor');
    }

    logName() {
        super.logName();
    }
}

let bmw = new BMW('x6');// добавление к классу BMW 
bmw.logName();