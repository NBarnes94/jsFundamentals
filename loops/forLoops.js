/* ************
!Loops
    offer us a quick and easy way to do something repearedly, or loop over something 

    A loop has 3 parts:
        -Initial expression
        -condition
        -increment expression
************ */

// set i to 0
// whiile is i is less than 10
// i++ (add 1)

// for (let i = 0; i <10; i++){
    //     console.log(i);
    // }
    
// count to 20 by 2s
// for(let i = 0; i<=20; i += 2){
    //     console.log(i);
    // }
    
// count from 10 to 0 by 1
// for (let i=10; i>=0; i--){
//     console.log(i);
// }

// count down to -24 from 0 by 2s

// for(let i=0;i>=-24; i-=2){
//     console.log(i);
// }


// go through a name and display each letter individually 

// let myName = "Nick"
// for(let i = 0; i< myName.length; i++){
//     console.log(myName[i])
// }

// make a loop where you add up all the numbers from 1 to 50

let sum = 0;

for(i = 1; i<=50; i++){
    sum += i;
}

console.log(sum);