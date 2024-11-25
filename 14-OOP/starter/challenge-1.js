'use strict';

// Coding Challenge #1

/*
1. Use a constructor function to implement a Car.
A car has a make and a speed property.
The speed is the current speed of the car in km/h;

2. Implement an 'accelerate' method that will increase
the car's speed by 10, and log the new speed to the console;

3. Implement a 'brake' method that will decrease the car's speed
by 5, and log the new speed to the console;

4. Create 2 car Objects and experiment with calling 'accelerate'
and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120km/h
DATA CAR 2: 'Mercedes' going at 95km/h

GOOD LUCK
*/

const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function() {
    console.log(`${this.make}'s origin speed (km/h): ${this.speed} (km/h)`)
    this.speed += 10;
    console.log(`${this.make}'s new speed (km/h): ${this.speed} (km/h)`);
    console.log(`\n`);
}
Car.prototype.brake = function() {
    console.log(`${this.make}'s origin speed (km/h): ${this.speed} (km/h)`)
    this.speed -= 5;
    console.log(`${this.make}'s new speed: ${this.speed} (km/h)`);
    console.log(`\n`);
}

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
//car1.brake();
//mercedes.accelerate();
//mercedes.brake();bmw.brake();