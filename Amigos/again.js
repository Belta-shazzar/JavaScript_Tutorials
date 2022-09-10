// import * as Math from './Math.js';

// console.log(Math.add(2, 3))

// Spread Operator Arraays 

const arrayOne = ['Marian', 'Anna', 'Alex'];
const arrayTwo = ['Saeed', 'Ismail', 'Aisha'];

const concatArray = [...arrayOne, ...arrayTwo];

concatArray.forEach(function(name) {
    console.log(name);
});

const aName = 'Marian';
const nameToArray = [...aName];
nameToArray.forEach(function(letter) {
    console.log(letter);
});

const addNumbers = function(n1, n2, n3) {
    return n1 + n2 + n3;
}

const numbers = [1, 5, 19]


// Adds up the numbers in the array
const addition = addNumbers(...numbers);

console.log(addition);


// Spread Operator Objects
const address = {
    city: 'LA',
    country: 'USA',
    postCode: 'LA33',
};

const name = {
    firstName: 'Andy',
    lastNAme: 'Jones'
};

const person = { ...address, ...name}

console.log(JSON.stringify(person, null, 2));