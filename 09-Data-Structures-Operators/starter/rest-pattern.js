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
    console.log(`mainIngredient: ${mainIngredient}`);
    console.log(`otherIngredients: ${otherIngredients}`);
  }
};

restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
});
console.log(`\n`);

// =========================
// Rest Pattern and Parameters
// Rest = Pack elements into an array
// Spread operator {..} = To unpack elements

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
// It will take the Rest of the elements in an array
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(`a, b, others: ${a, b, others}`);
console.log(`\n`);

// Take all elements in restaurant array into a new array
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu] 
console.log(pizza, risotto, otherFood);
console.log(`\n`);

// Create an Object for restaurant.openingHours with weekdays only
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
console.log(`\n`);

// 2) Functions
const add = function(...numbers) {
    //console.log(`numbers:\n${numbers}`);
    let sum = 0;

    for(let i=0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(`sum: ${sum}`);
    console.log(`\n`);
}

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
// Taking all the elements of x array
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

restaurant.orderPizza('mushrooms');