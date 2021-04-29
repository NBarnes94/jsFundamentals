function hi(){
    console.log('Hi!');
}

hi();

console.log(hi);  //works because it will then recognize 'hi' as a function
console.log(hi()); //doesnt work because it sees 'hi()' as a variable not a function 

// Create a function that, when invoked, lists out the numbers 1-10

function num(){
    for ( i = 1; i <= 10; i++){
        console.log(i);
    }
}

num();
