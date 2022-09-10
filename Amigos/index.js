import * as Math from './Math.js';

var myName = "Maria Jones";
var age = 21;
var hasDriverLicence = true;
var empty = undefined;

// console.log(myName);
// console.log(age);
// console.log(hasDriverLicence);
// console.log(empty);

var person = {
    name: "Maria Jones",
    age: 21,
    hasDriverLicence: true,
    dateOfBirth: "01/01/2000",
    address: {
        firstLine: "123",
        postCode: "SE1",
        country: "England"
    }
};

// console.log(JSON.stringify(person));
// console.log(person)
// console.log(person.name)
// console.log(Object.values(person));

var names = ["Alex", "Maria", "Sam", "Mahmah"]
console.log(names);

console.log(names[1])
console.log(names.length);

for (var n of names) {
    console.log(n);
}

names.forEach(function(n, index) {
    console.log(index + ". " + n)
    
})


// Switch

var person = {
    name: "Anna",
    age: 10
}

switch (true) {
    case (person.age == 17):
        // console.log(person.name + " is about to be an adult");
        break;
    case (person.age >= 18):
        // console.log(person.name + " is an adult")
        break;
    default:
        // console.log(person.name + " is not an adult")
}

switch (new Date().getDay()) {
    case 6:
        console.log("Saturday")
        break;
    default:
        console.log("I don't know")
}


// Map, Filter, Reduce

var map = [1, 2, 3, 4, 5].map(function(n) {
    return n * 2;
});

console.log(map);

var filter = [1, 2, 3, 4, 5].filter(function(n) {
    return n % 2 == 0
});

console.log(filter);

var reduce = [1, 2, 3, 4, 5].reduce(function (accumulator, current) {
    return accumulator + current;
});

console.log(reduce);

// Callback
function callbackExample(name, callback) {
    console.log(callback(name));
}

function anything(name) {
    return "Hello " + name;
}

callbackExample("Abel Mohammado", anything);

function sumArr(arr, index = 0) {
    let sum;

    if (arr.length < 2) {
        sum = arr[arr.length - 1];
    } else if (arr.length == index + 1) {
        sum = arr[arr.length - 1];
    } else {
        sum = arr[index] + sumArr(arr, index + 1);
    }

    return sum;
}


// console.log(sumArr([1,2,6,3,5]))

console.log(Math.add(2, 2));
console.log(Math.sub(5, 2));
console.log(Math.divide(8, 2));
console.log(Math.multiply(2, 2));
console.log(Math.PI);
console.log(Math.name);
console.log(Math.age);