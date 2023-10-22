
// 1- 
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

// I predict "console.log(randomCar)" is going to log us a random car from the list
// I predict "console.log(otherRandomCar)" is not going to work because there is no initial "," to pass over.
    // I was wrong because randomCar is always to give us the first in the list
    // And other otherRandomCar is using the previously logged "," as RandomCar


// 2- 
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
console.log(name);
console.log(otherName);
// Prediction: I think "console.log(name);" will print "Elon"
// I think "console.log(otherName);" will be change the name from "Elon" to otherName
    // ReferenceError: name is not defined???  ASK LUCKY 


// 3-
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);
// I predict that "console.log(password);" will print us 12345
// I predict that "console.log(hashedPassword);" will print us person
    // My first prediction was correct
    // The second print resulted in undefined. This makes sense because hashedpassword does not connect to const person.


// 4-
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; //I think this is "2"
const [,,,second] = numbers; // I think this is "5"
const [,,,,,,,,third] = numbers; //I think this is "2"
//Predict the output
console.log(first == second);
console.log(first == third);
// My prediction for "console.log(first == second);" is false because 2 does not equal to 5
// My prediction for "console.log(first == third);" is true because 2 does equate to 2
    // My predictions were both right

// 5- 
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
// I predict "console.log(key);" will print us "value" from the {} 
// I predict "console.log(secondKey);" will print us the array[] of numbers relating to the second key
// I predict "console.log(secondKey[0]);" will give us "1" because it is the value at the [0] index of the secondKey
// I predict "console.log(willThisWork);" will  give us "5" because if secondKey[0] is 1 and the "," after it is 5 in the []
    // My Predictions were correct 






