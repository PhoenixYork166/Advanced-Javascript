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

  // Object -> Func destructuring
  orderDelivery: function( { starterIndex=1, mainIndex=0, time='20:00', address } ) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
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

  orderPizza: function(mainIngredient, ...otherIngredients) {
    console.log(`ordering pizza :D`);
    console.log(`mainIngredient: ${mainIngredient}`);
    console.log(`otherIngredients: ${otherIngredients}`);
  }
};

console.log('-------OR-----------');
// Use ANY data type, return ANY data type, short-circuiting
// Short-circuiting = Returning the 1st truthy value => 3
console.log(`3 || 'Jonas\n${3 || 'Jonas'}`);
console.log(`\n`);
console.log(`'' || 'Jonas'\n${'' || 'Jonas'}`);
console.log(`\n`);
console.log(`true || 0\n${true || 0}`);
console.log(`\n`);
console.log(`undefined || null\n${undefined || null}`);
console.log(`\n`);

console.log(`undefined || 0 || '' || 'Hello' || 23 || null\n`);
// undefined = falsy
// 0 = falsy
// '' = falsy
// 'Hello' = truthy => returned value
console.log(undefined || 0 || '' || 'Hello' || 23 || null);
console.log(`\n`);

// Practical application
restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(`guests1: ${guests1}`);

const guests2 = restaurant.numGuests || 10;
console.log(`guests2: ${guests2}`);

console.log('-------OR-----------');
console.log(`\n\n`);
console.log('-------AND-----------');
// AND operator short circuits when 1st value is FALSY
// IMMEDIATELY returns that FALSY value w/o evaluating the rest
console.log(`0 && 'Jonas': ${0 && 'Jonas'}`);
console.log(`\n`);
console.log(`7 && 'Jonas': ${7 && 'Jonas'}`);
console.log(`\n`);
console.log(`'Hello' && 23 && null && 'jonas':\n${'Hello' && 23 && null && 'jonas'}`);
console.log(`\n`);
// Check if restaurant.orderPizza exists
// if (restaurant.orderPizza) {
//     restaurant.orderPizza('mushrooms', 'spinach');
// }

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');