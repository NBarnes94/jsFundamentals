/* 
    -First pass: Stores our variables declarations (essentially says, "hey, I know a variable of x is deined, so let me store that in my memory so I know it's there"), but does not assign them their values.
        -Anything thtat need sto be hoisted, is hoisted.
    -Second Pass: Assigns the balues to out variables and execuets any hoised source code. 
*/

// console.log(myName);

let myName = "Nick";

b();

function b() {
    console.log("I have been hoisted");
}