class Unit {
    constructor(name, cost, power, resilience) {
        this.name = name;
        this.cost = cost;
        this.power = power;
        this.resilience = resilience;
    }

    attack(target) {
        target.resilience -= this.power;
    }
}

class Effect {
    constructor(name, cost, text, stat, magnitude) {
        this.name = name;
        this.cost = cost;
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    applyEffect(target) {
        if (this.stat === 'resilience') {
            target.resilience += this.magnitude;
        } else if (this.stat === 'power') {
            target.power += this.magnitude;
        }
    }
}

// Create instances of Unit cards
const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

// Create instances of Effect cards
// Create a new Effect card ("EFFECT", COST #, "a description", "specify the target stat", MAGNITUDE "#");
const hardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
const pairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);

// Turn 1
// Make an instance of "Red Belt Ninja"
// Make an instance of "Hard Algorithm" and play it on "Red Belt Ninja"
hardAlgorithm.applyEffect(redBeltNinja);

// Turn 2
// Make an instance "Black Belt Ninja"
// Make an instance of "Unhandled Promise Rejection" and play it on "Red Belt Ninja"
unhandledPromiseRejection.applyEffect(redBeltNinja);

// Turn 3
// Make an instance of "Pair Programming" and play it on "Red Belt Ninja"
pairProgramming.applyEffect(redBeltNinja);

// "Red Belt Ninja" uses the attack method on "Black Belt Ninja"
redBeltNinja.attack(blackBeltNinja);

// Check the status of units updated after the scenario
console.log(`${redBeltNinja.name}: Power: ${redBeltNinja.power}, Resilience: ${redBeltNinja.resilience}`);
console.log(`${blackBeltNinja.name}: Power: ${blackBeltNinja.power}, Resilience: ${blackBeltNinja.resilience}`);
