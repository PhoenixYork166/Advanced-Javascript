// Class expression
//const PersonCl = class {}

// Class declaration
class PersonClass {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Adding methods to .prototype property
    calcAge() {
        console.log(`calcAge(): ${2024 - this.birthYear}`);
    }

    greet() {
        console.log(`Hey! ${this._fullName}`);
    }

    get age() {
        return 2024 - this.birthYear;
    }

    // Setter fullName validation
    set fullName(name) {
        console.log(name);
        if (name.includes(' ')) {
            this._fullName = name;
        } else {
            console.error(`${name} is NOT a full name!`);
        }
    }

    // return Person._fullName after validation
    get fullName() {
        return this._fullName;
    }
}

const jessica = new PersonClass('Jessica Davis', 1942);
console.log(jessica);
jessica.calcAge();

console.log('jessica.__proto__ === PersonClass.__proto ?')
console.log(jessica.__proto === PersonClass.__proto);

// PersonClass.prototype.greet = function() {
//     console.log(`Hey! ${this.firstName}`);
// }
jessica.greet();
console.log(`=================`);
console.log('jessica.age');
console.log(jessica.age);

const walter = new PersonClass('Walter White', 1965);
console.log('======================');
console.log('walter:');
console.log(walter);
console.log('======================');
// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// We can pass them into functions &
// return them from functions
// 3. Classes are executed in strict mode
// All code in Classes are executed in strict mode

// ===============================================
// getter
// setter

const account = {
    owner: 'jonas',
    movements: [200, 530, 120, 300],

    // Adding a getter
    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    }
};
console.log(`account.latest`);
console.log(account.latest);
console.log(``);
// Latest value declared using Setter
account.latest = 500;
console.log(account.movements);
