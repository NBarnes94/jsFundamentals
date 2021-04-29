let weather = 75;

if(weather < 70){
    console.log('wear a jacket'); // YES - TRUe
} else {
    console.log('No Jacket Necessary');} //NO - FASLE

    // If(true){  if returns true  } else {  if returns false  }

    /*
Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'
Silver:
    If It is your name, console log 'Hello, my name is <name>'
Gold:
    If it is not your name, console log 'Hello, is your name <name here> ?'
*/
let myName = 'Nick'

// Bronze:
if (myName == 'Nick') { console.log(myName);} else {console.log('Hello what is your name?');}

// Silver:
if (myName == 'Nick') {console.log("Hello, my name is " + myName);} 
else {console.log('Hello, is your name ' + myName + ' ?');}

/* ******
! Else if 
****** */

let newName = "Eric";

if (newName == 'Waldo') { console.log('Hello '+ newName + ", welcome back. ");
    }else if (newName === 'Eric'){console.log('Hello '+ newName);
    }else {console.log("I don't know " + newName + " .");} 
  
  
    /*
    Look up the format for an Else If statement
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/

let age =35; 
if (age >= 18 && age < 21) {console.log('You can vote!');} 
else if (age>=21 && age < 25) {console.log('You can drink!');} 
else if (age >= 25) {console.log('You can rent a car!');}
else if (age < 18) {console.log("Sorry, you're too young to do anything");}