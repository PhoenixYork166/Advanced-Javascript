'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

let allLoginName_arr = [];
console.log('Array.isArray(allLoginName_arr: \n', Array.isArray(allLoginName_arr));

let allLoginPassword_arr = [];

// consle.log(account_names())
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

let arr = ['a', 'b', 'c', 'd', 'e'];
// Without changing original array
// Start extracting from arr[2] => 'c'
const new_arr = arr.slice(2); 
// console.log(new_arr); // 'c', 'd', 'e'
// Start extracting & remove an element
// const new_arr2 = arr.slice(start index, index of removal)
const new_arr2 = arr.slice(2, 4);
// console.log(new_arr2); // 'c', 'd'
// console.log(arr.slice(-1)); // 'e'
// console.log(arr.slice(-2)); // 'd'

// Start extracting from arr[1] & remove last 2 elements
// console.log(arr.slice(1, -2)); // 'b', 'c'

const new_arr3 = [...arr]; // Shallow copy
// console.log(new_arr3); // 'a', 'b', 'c', 'd', 'e'

// splice method = mutates original array
// console.log('removed elements: \n', arr.splice(2)); // 'c', 'd'
// console.log('arr: \nmutated\n', arr); // 'a', 'b'

arr.splice(-1); // Just remove last element in arr
console.log('arr: ', arr); // 'a', 'b', 'c', 'd'
arr.splice(1, 2); // Starting extracting from 'b'; Remove 'c'
console.log('arr: ', arr);

// Reverse
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'j'];
console.log(arr2.reverse()); // arr.reverse() mutates original array

// Concat()
arr = ['a', 'b', 'c', 'd', 'e'];
arr2 = ['j', 'i', 'h', 'g', 'j'];
const arr3 = [1, 2, 3, 4, 5];
const letters = arr.concat(arr2); // to add on
// console.log('letters: \n', letters);
const concat2 = arr.concat(arr2, arr3);
console.log('concat2: ', concat2);

/////////////////////////////////////////////////
// Functions
function returnAccountNames() {
  const len = accounts.length-1;
  const loginName_arr = [];
  

  for (let i=0; i<len; i++) {
    // Find out Length of Name Initials
    const lenInitial = accounts[i].owner.split(' ').length - 1;
    
    for (let j=0; j<lenInitial; j++) {
      const loginName = (accounts[i].owner.split(' ')[j] === undefined ? '' : accounts[i].owner.split(' ')[j].at(0).toLocaleLowerCase()) + (accounts[i].owner.split(' ')[j+1] === undefined ? '' : accounts[i].owner.split(' ')[j+1].at(0).toLocaleLowerCase()) + (accounts[i].owner.split(' ')[j+2] === undefined ? '' : accounts[i].owner.split(' ')[j+2].at(0).toLocaleLowerCase());
      // console.log('loginName: ', loginName);
      // console.log('pushing');
      loginName_arr.push(loginName);
      // console.log('loginName_arr: \n', loginName_arr);
      allLoginName_arr = loginName_arr;
    } 
  }
  console.log('allLoginName_arr: \n', allLoginName_arr)
}
returnAccountNames();

function returnAccountPasswords() {
  const len = accounts.length;
  const loginPasswords_arr = [];
  for (let i=0; i<len; i++) {
    const loginPassword = accounts[i].pin.toString();
    // console.log(loginPassword);
    loginPasswords_arr.push(loginPassword);
    allLoginPassword_arr = loginPasswords_arr;
  }
  console.log('allLoginPassword_arr: \n', allLoginPassword_arr)
}
returnAccountPasswords();

// Login button functionality
btnLogin.addEventListener('click', function(event) {
  // Stop the page from refreshing upon clicking Login button
  event.preventDefault();
  // console.log('User inputLoginUsername is: \n', inputLoginUsername.value, '\nas a ', typeof inputLoginUsername.value);
  // console.log('User inputLoginPin is: \n', inputLoginPin.value, '\nas a ', typeof inputLoginPin.value);

  const len = allLoginName_arr.length;
  for (let i=0; i<len; i++) {
    const validate = allLoginName_arr[i] === inputLoginUsername.value && allLoginPassword_arr[i] === inputLoginPin.value;
    
    if (validate) {
      containerApp.style.opacity = 1;
      break;
    }
  }
})
