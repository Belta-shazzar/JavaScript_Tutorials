// let, const -> For variable declairation
// Always use "const", unless you know you're going to reassign values.

// Data types: String, Numbers, Boolean, null, undefined

// $ 4 (Malfunctioning button)

// Variables and declaration *****************
const name = 'John';
const age = 30;
const rating = 3.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

// console.log(typeof isCool)  //Check variable type


// Concatenation************************************
// Local
const word = 'My name is ' + name + ' and i am ' + age; 
// console.log(word)

// With template literal
const word2 = `My name is ${name} and i am ${age}`;
// console.log(word2)


// String functions******************************
const s = 'Hello People';
// console.log(s.length) 
// console.log(s.toLowerCase());
// console.log(s.substring(0, 5).toUpperCase());
// console.log(s.split(''));

// Arrays****************************************
const numbers = new Array(1, 2, 3, 4, 5);
// console.log(numbers)

const fruits = ['apple', 'oranges', 'pears', 10, true]
console.log(fruits);
console.log(fruits[1])

fruits[5] = 'grapes';
fruits.push('bananas') //Add to the end of an array
fruits.unshift('strawberries'); //Add to the begininning of an array
fruits.pop() //Removes the last element

// console.log(fruits)

// console.log(Array.isArray(fruits)); //Checks if entered value is an array

const number = fruits.indexOf('oranges');


// Object literals  (Key value pair)**************************
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main str',
        city: 'Boston',
        state: 'MA'
    }
}

person.email = 'john@gmail.com'; //Add properties to person

// console.log(person);
// console.log(person.firstName, person.lastName);
// console.log(person.hobbies[2]);
// console.log(person.address.city);


// Array of objects
const todos = [
    {
        id: 1,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Tailor appt',
        isCompleted: false
    }
]

console.log(todos[1].text);


// Convert todo object to json format
const todoJSON = JSON.stringify(todos);
// console.log(todoJSON)


// Loops******************************

// for loop
for (let i = 0; i < 10; i++) {
    // console.log(i)
}

// while loop
let i = 0;
while(i < 10) {
    // Do whatever
    i++;
}

// Loop through an array
for(let i = 0; i < todos.length; i++) {
    // console.log(todos[i].text)
}

for(let todo of todos) {
    // console.log(todo.text)
}

// High order functions
todos.forEach(function(todo) {
    // console.log(todo.text);
});

// This returns an Array
const todoText = todos.map(function(todo) {
    // console.log(todo.text);
    return todo.text;
})
 
// console.log(todoText);

const todoCompleted = todos.filter(function(todo) {
    // console.log(todo.text);
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
})

// console.log(todoCompleted)


// Conditionals*************************

// NB: "==" matches value, "===" matches data type.
const xx = 20;
if (xx === 20) {
    // Do this
} else if (xx > 10) {
    // Do that
} else {
    // Move on with life
}

// Tenary operator
const color = xx > 10 ? "this" : "that";

// Switch****************************
switch(color) {
    case "red":
        "this"
        break;
    case "blue":
        "that"
        break;
    default:
        "Anything"
        break;
}

// Functions****************************

function addNum(num1, num2) {
    console.log(num1 + num2);
}

addNum() // === NaN (Not a number)

// Arrow function
const addNums = (num1, num2) => {
    console.log(num1 * num2);
}

// OR
const addNumbs = (num1, num2) => num1 * num2;

// console.log(addNumbs(3, 2))

// todos.forEach((todo) => console.log(todo));

// OOP*****************************

// Constructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    // this.getBirthYear = function() {
    //     return this.dob.getFullYear();
    // }

    // this.getFullName = function() {
    //     return `${this.firstName} ${this.lastName}`
    // }
}

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

// NB: Prototype is used so you those functions doesn't get printed out to the console when the object is called

// $ 4 
// Instantiate object
const person1 = new Person("John", "Doe", "3-3-1980");
const person2 = new Person("Mary", "Smith", "3-6-1970")

// console.log(person2.dob.getFullYear());
// console.log(person2.getBirthYear());
// console.log(person1.getFullName());

// Class*****************************
// From ES6
class Human {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear = function() {
        return this.dob.getFullYear();
    }
    
    getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

