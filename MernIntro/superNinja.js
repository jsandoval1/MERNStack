class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 90;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(`This ninja's name is ${this.name}`)
        console.log ("------")
    }
    showStats() {
        console.log(`${this.name}'s stats are: \n Health: ${this.health}, \n Speed: ${this.speed}, \n Strength: ${this.strength}`);
        console.log ("------")
    }
    drinkSake() {
        this.health += 10;
        console.log(`${this.name} drank sake and now has ${this.health} health`);
        console.log ("------")
    }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom() {
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}
const superSensei = new Sensei("Master Splinter");
superSensei.showStats();
superSensei.speakWisdom();
