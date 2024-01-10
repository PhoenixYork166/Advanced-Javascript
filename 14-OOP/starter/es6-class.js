// Class expression
//const PersonCl = class {}

// Class declaration
class PersonClass {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    // Adding methods to .prototype property
    calcAge() {
        console.log(`calcAge(): ${2024 - this.birthYear}`);
    }

    greet() {
        console.log(`Hey! ${this.firstName}`);
    }
}

const jessica = new PersonClass('Jessica', 1942);
console.log(jessica);
jessica.calcAge();

console.log('jessica.__proto__ === PersonClass.__proto ?')
console.log(jessica.__proto === PersonClass.__proto);

// PersonClass.prototype.greet = function() {
//     console.log(`Hey! ${this.firstName}`);
// }
jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// We can pass them into functions &
// return them from functions
// 3. Classes are executed in strict mode
// All code in Classes are executed in strict mode
