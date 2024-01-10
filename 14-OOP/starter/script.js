'use strict';

// Arrow function does NOT have 'this' keyword
const Person = function(firstName, birthYear) {
    //console.log(this);
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never create a method in a constructor function
    // If we have 1000 person objects
    // Then, each of these objects will carry around
    // this.calcAge function here
    // We'll create 1000 objects with this function
    // that might NOT be necessary

    // this.calcAge = function() {
    //     console.log(2037 - this.birthYear);
    // }
};

const jonas = new Person('Jonas', 1991);

console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
console.log(matilda);

const jack = new Person('Jack', 1975);
console.log(jack);

console.log(`is jonas an instance of Person?: ${jonas instanceof Person}`);

// Prototypes
// Property prototype of the constructor function
console.log(Person.prototype);

// Adding methods to this prototype
Person.prototype.calcAge = function () {
    console.log(`Age: ${2037 - this.birthYear}`);
}

jonas.calcAge();
matilda.calcAge();

console.log(jonas.prototype);
console.log(`is jonas.prototype === Person.prototype? : ${jonas.__proto__ === Person.prototype}`);
// Person.prototype is NOT the prototype of Person
// Person.prototype is what gonna be used as the Prototype 
// of all the objects that are created with the Person constructor function

// More proving
console.log('is Person.prototype.isPrototypeOf(jonas)?');
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(' ');
console.log('is Person.prototype.isPrototypeOf(Person)?');
console.log(Person.prototype.isPrototypeOf(Person));

// Conceptual findings of Person.prototype
// 1. Person.prototype is NOT a property of Person
// 2. Person.prototype is the linked object associated with
// other Objects created using Person.prototype constructor
// 3. Person.prototype = a linked object used for creating other objects
// based on Person.prototype constructor

// In simple words
// Person.prototypeOfLinkedObjects property

// =======================================
// We can also set properties on the Prototype
// NOT just methods on a Prototype
Person.prototype.species = 'Homo Sapiens';
console.log('We should also now see Prototype.species in new Person objects');
console.log(jonas, matilda);
console.log(`jonas.species: ${jonas.species}\nmatilda.species: ${matilda.species}`);

// jonas & matilda objects only possess their own properties
// jonas & matilda objects are both inherited with Person.species
// from Person.prototype constructor function
// Checking inherited properties
console.log(`jonas.hasOwnProperty('firstName'): ${jonas.hasOwnProperty('firstName')}`);
console.log(`jonas.hasOwnProperty('species'): ${jonas.hasOwnProperty('species')}`);

// =====================================
// Prototypal Inheritance on Built-in Objects
// Moving up along the Prototype Chain

// Prototype of jonas.__proto__ = Object.__proto__
console.log(`jonas.__proto__.__proto__: ${jonas.__proto__.__proto__}`);

// Prototype of Prototype of jonas.__proto = null = End of Prototype Chain
console.log(`jonas.__proto__.__proto__.__proto__: ${jonas.__proto__.__proto__.__proto__}`);

// Pointing back to Person itself
console.log(`Person.prototype.constructor:\n\n${Person.prototype.constructor}`);

// Inspecting Person's function
console.dir(Person.prototype.constructor);

// Testing an array prototype
const arr = [3, 6, 4, 5, 6, 9, 3]; // new Array === []
console.log(`arr.__proto__:\n`);
console.log(arr.__proto__);
// To check Array constructor function
console.log(`arr.__proto__ === Array.prototype\n`);
console.log(arr.__proto__ === Array.prototype);
// To checkout Object.prototype
console.log(`arr.__proto__.__proto__\n`);
console.log(arr.__proto__.__proto__);
console.log(`\n`);

// Extending functions of Array
// Extending the functionality of a general built-in
// Object is NOT a good idea

// Lots of bugs will induce if a large group of dev
// extend functionality of a general Object e.g. Array
Array.prototype.unique = function() {
    return [...new Set(this)];
    // Set func returns only unique elements in an array
}

console.log(`arr.unique():\n ${arr.unique()}`);
console.log(`\n`);

// Selecting h1 object
const h1 = document.querySelector('h1');
console.dir(h1);

// console.dir a random function
console.dir(x => x + 1);