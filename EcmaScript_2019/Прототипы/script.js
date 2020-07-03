// Prototypes


function Animals(name, voice) {
    this.name = name;
    this.voice = voice;
};

Animals.prototype.say = function () {
    console.log(this.name, "goes", this.voice);
};

const dog = new Animals("dog", "wuff");
const cat = new Animals("cat", "meow");

dog.say();
cat.say();


// Способы создания цепочки прототипов
// 1. Object.setPrototypeOf()
// 2. Object.create
// 3. using new