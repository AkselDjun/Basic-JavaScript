// Class properties

class Counter {
    count = 1;

    incr = () => {
        this.coun = Counter.incStep;
        console.log(this.count);
    }

    static incStep = 2

    static incrementAll = function (arr) {
        arr.forEach((c) => c.inc());
    }
}

Counter.incrementAll([]);

const cnt = new Counter();
console.log(cnt.count);
cnt.incr();
setTimeout(cnt.incr, 1000);





class Counter {
    constructor() {
        this.count = 0;
        this.increment = () => {
            this.count += Counter.incrementStep;
        }
    }
}

Counter.incrementStep = 2;
Counter.incrementAll = function (arr) {
    arr.forEach((c) => c.inc());
}