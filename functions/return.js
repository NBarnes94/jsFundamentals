
// let hi = () => {
// //       1
//     return 'hi'
// };
// //     2       3
// let newName = hi();

// console.log(newName);

/*
    1: The keyword that brings our data out of our function.
    2:we need a new variable to hold the value of the retunr.
    3:when called, the function becomes the value of the return.

*/

// let z;
// let a; 

// let math = (numOne, numTwo) => {
//     let total = numOne + numTwo;
//     return total;
// }

// let sum = math(1,2);
// let sum2 = math(5293, 12394);
// let sum3 = math(z,a);

// console.log(sum);
// console.log(sum2);
// console.log(sum3);
// Normally when we write a function we are writing it for dynamic

/*
    Make a tip calculator using a function
    Have it RETURN the value
    Capture that returned value in a VARIABLE
    Print that variable
*/

// let tip = (check) => {
//     let tips = check * 0.2;
//     let total = tips + check
//     return total;
// }

//     console.log(tip(20));


// let mealTotal = (check, tipn) => {
//     let tip1 = check * tipn;
//     let total1 = check + tip1;
//     return total1;
// }     

// let payment = mealTotal(15, 0.2);

// console.log(payment);

// let tip = (check) => {
//     let tips = check * 0.2;
//     return tips;
// }

//     console.log(tip(20));

// let total = () => {
//     return 
// }

let tip = (price, tipPercent) => {
    let totalCost = '$' + (price * (tipPercent*.01)+ price)
    return totalCost;
}
let paid = tip(10,50)
console.log(paid);