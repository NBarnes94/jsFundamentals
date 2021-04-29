/* 
    1     2
Let hi = () => {
    console.log('Hi');
    }

    1: We need to set the fat arrow function to a vairable. 
    2: We use the 'fat arrow' to signify its a function.

    - arrow functions (fat arrow functions) introduced in ES6
        - a more concise way to write function expressions *not declarations
        - arrow functions do NOT get hoisted. 
    -2 types of arrow functions: 
        -Concise body
        -block body
*/

// ! Concise body
// let hi  = () => console.log('Hi!');
// concise body arrow functions return by default
// hi ();

//! Block Body
// let hi = () => {
//     console.log('Hi!');
// }
// block body arrow functions must have a return in the body of the function (between{ })

let apples = x => console.log(`There are ${x} apples.`);
apples(10);
apples('steven');

let bananas = x => {
    console.log(`There are ${x} bananas`);
}
bananas(10);

// if no or multi parameters are needed - use () 
// do not need () if we are only passing 1 parameter