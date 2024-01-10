'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // Writing a func for starterMenu & mainMenu
  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// Ordering starterMenu[2] = 'Garlic Bread'
// Ordering mainMenu[0] = 'Pizza'
// console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(2, 0);
console.log('starter', starter, '\n', 'mainCourse', mainCourse);

// Extracting first 2 elements of categories array in restaurant object
// const [first, second] = restaurant.categories;
// console.log('first category', first, '\n', 'second category', second);

// Extracting only 1st & 3rd elements
// const [first, , third] = restaurant.categories;
// console.log('first category', first);
// console.log('third category', third);

// Switching 1st & 3rd elements in restaurant.categories
let [main, , secondary] = restaurant.categories;
// console.log('main', main, '\n', 'secondary', secondary);

// Without destructuring
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log('Switched main:', main)
// console.log('Switched secondary:', secondary);

// With destructuring
[main, secondary] = [secondary, main] 
console.log(`Switched main: ${main}`);
console.log(`Switched secondary: ${secondary}`);
console.log(`\n`);
console.log(`\n`);

// ========= Theories
// ====
const arr = [2,3,4];
// In the past
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Destructuring
const [x, y, z] = arr;
console.log(`x: ${x}, y: ${y}, z: ${z}`);

//const [first, second] = restaurant.categories;
//console.log(`first: ${first}, second: ${second}`);
const [first, , third] = restaurant.categories;
console.log(`first: ${first}, third: ${third}`);
console.log(`\n`);
console.log(`\n`);

// ES5 switching array items
const temp = main;
main = secondary;
secondary = temp;
console.log(`main: ${main}, secondary: ${secondary}`);
console.log(`\n`);

// ES6 destructuring switching
[main, secondary] = [secondary, main];
console.log(`main: ${main}, secondary: ${secondary}`);
console.log(`\n`);


// Destructuring Nested Array
const nested = [2, 4, [5, 6]];
// To only retrieve [2, , [5, 6]];
// const [i, , j] = nested;
// console.log('i - 1st element', i);
// console.log('j - 3rd element', j);

// Nested destructuring
const [i, , [j, k]] = nested;
console.log(`i - 1st element: ${i}`);
console.log(`\n`);
console.log(`j - 1st element in nested[2].[0]: ${j}`);
console.log(`\n`);
console.log(`k - 2nd element in nested[2].[1]: ${k}`);
console.log(`\n`);
console.log(`i, [j, k]: ${i}, ${j}, ${k}`);
console.log(`\n`);
console.log(`\n`);

// Default values
const [p=1, q=1, r=1] = [8, 9];
// Only p & q are declared = 8, 9
// Thus r will be defaulted = 1
console.log(`p: ${p}, q: ${q}, r: ${r}`);
console.log(`\n`);
console.log(`\n`);
