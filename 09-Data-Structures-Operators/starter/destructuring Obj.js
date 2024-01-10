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
};

restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
});


// Destructuring Obj
// const {propName1, propName2, propName3} = Obj
// propName order does NOT matter
const { name, openingHours, categories } = restaurant;
console.log(`name: ${name}`);
console.log(`categories: ${categories}`);
console.log(`openingHours: ${openingHours}`);
console.log(`\n`);
console.log(`\n`);

// Wanting to have propNames different from those of Objects
// const {propName1: customName1, propName2: customName2, propName3: customName3} = restaurant;
// const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
// console.log('retaurantName: ', restaurantName);
// console.log('hours: ', hours);
// console.log('tags: ', tags);

// There's no propName 'menu' in obj restaurant
// const {menu = [], ...} will create an empty propName 
// Customizing propName 'starterMenu: starters'
// const {..., starterMenu: starters = []} = restaurant;
// will assign an empty propName 'starters'
// in case 'starterMenu' on obj restaurant is empty
const {menu = [], starterMenu: starters = []} = restaurant;
// console.log('menu: ', menu);
// console.log('starters: ', starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};
// Cannot const {a, b} - already declared
// Cannot let {a, b} = obj; ; Will create new variables
// Cannot {a, b} ; JS assumes {} is a Code Block
({a, b} = obj); // Paranthesis works ({ })
// console.log('a: ', a, 'b: ', b);

// Destructuring Objects in an Object
// const {name, categories, openingHours} = restaurant;
const { fri } = openingHours;
// console.log('fri: ', fri);

// Further destructuring { fri } 
const { 
  fri: {open, close} 
} = openingHours;
console.log('fri: {open}', fri.open);
console.log('fri: {close}', fri.close);
console.log(`\n`);
console.log(`\n`);

// ==================
// Using spread operator [...array]
const arr = [7, 8, 9];
// Creating a new array using spread operator through shallow copy 
const newArray = [1, 2, ...arr];
console.log(`newArray: ${newArray}`);
console.log(`\n`);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(`Our newMenu: ${newMenu}`);
console.log(`\n`);

// Shallow copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const jointMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(`jointMenu: ${jointMenu}`);
console.log(`\n`);

// Iterables: arrays, strings, maps, sets, NOT ojbects
const str = 'Jonas';
// []...str] = ['j', 'o', 'n', 'a', 's']
const letters = [...str, '', 'S.'];
console.log(`str: ${str}, letters: ${letters}`);
console.log(`\n`);
console.log(`We cannot use $[...] like that:`);
// J,o,n,a,s Schmed
console.log(`${[...str]} Schmed`);
console.log(`\n`);
// Each ingredient in restaurant.orderPasta()
// will be inputs from users' prompt
// const ingredients = [
//   prompt('Let\'s make asta!\nIngredient 1?: '), 
//   prompt('Ingredient 2?: '),
//   prompt('Ingredient 3?: '),
// ]
//console.log(`Ingredients: ${ingredients}`);

//restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);
// console.log(`\n`);

// // Objects
// const newRestaurant = {
//   foundedIn: 1998,
//   ...restaurant, 
//   founder: 'Guiseppe'};
// console.log(`newRestaurant: ${newRestaurant}`);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Ristorante Roma';
// console.log(`restaurantCopy.name: ${restaurantCopy.name}`);
// console.log(`restaurant.name: ${restaurant.name}`);

// =========================
// Rest Pattern and Parameters
// Rest = Pack elements into an array
// Spread operator {..} = To unpack elements
