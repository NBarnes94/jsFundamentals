/*
! Falsy Values
*/

/*
6 Different values
    1. false
    2. 0
    3. Empty Strings (" ", ' ', ` `)
    4. null
    5. undefined
    6.NaN (not a number)
*/ 

let isOn = true;

if(isOn == true){
    console.log('The Light is On');}

if (isOn) {
    console.log('The light is on, yay!');
}

if(true){
    console.log('ON!');
}

isOn = false;

if(isOn == false) {
    console.log('the light is off');
}

let weather = 65;

if(weather < 70){console.log('Wear a Jacket');}