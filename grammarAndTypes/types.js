//number=> literally a number

let number = 10;
console.log(number);
 
//string => strings are datatypes used to represent text
// wrap them in single or double quotes

let stringOne = "double quotes";
let stringTwo = 'single quotes';

console.log(stringOne, stringTwo);

//Booleans => true or false 

let on = true;
let off = false;
console.log(on, off);


// Null => Null is an empty value 
let empty = null;
console.log(empty);

// Undefined => no value is assigned and does not act as an empty container
let undef = undefined;
console.log(undef);

let correct;
console.log(correct);

// Null is like a container with nothing in it 
// Undefined is when a variable has never been set, or has not yet been created 

// Objects => Used to store many values rather than one single value
// denoted by curly brackets {}

let frodo = {
    race:'hobiit',
    rings: 1, 
    cloak: true,
}
console.log(frodo);
console.log(typeof frodo);


// Arrays => containers that hold lists of items
// denoted by square brackets []

let list = ['item1', 'item2', 'item3'];
console.log(list);

let burritos = ['large', 4, true];
console.log(burritos);

console.log(typeof burritos);

// DataType Literals
// A literal represents a fixed valye that we as developer5s insert into the code
// Includes strings, numbers, booleans, objects, arrays

// string literal 
let car = 'Ford';

// Number Literal
let december = 12;

// Boolean Literal
let tried = true;

// Object Literal
let soup = { 
            a: 'chicken noodle', 
            b: 'tomato', 
            c: 'beef and barley',
            d: 'Chili',
            e: 'Cereal'
};

// Array Literal
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];