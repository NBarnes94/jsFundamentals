//  Option 1 

let person ={
    name : 'Macy',
    age: 24, 
    canVote:true
}

let person2 = {
    name: 'Jeremy',
    age: 15, 
    canVote: false
}

let person3 = {
    name:'Tyler',
    age: 38,
    canVote: true
}

//  1       2          3    
function Person(name, age, canVote) {
//   4    5      6
    this.name = name;
    this.age = age;
    this.canVote = canVote;
}
console.log(typeof Person);

//              7   8
let person4 = new Person('James', 80, true);
console.log(person4);


function Person(name, age, canVote) {

    this.name = name;
    this.age = age;
    this.canVote = (age >= 18);
}
console.log(typeof Person);

let person5 = new Person('sue', 16,);
console.log(person5);

/*
    1: the function keyword
    2: the function name. !for constructor functions, the name should be capitalized
    3: the parametes. these will be the VALUES of the object once this function is in use.
    4: The 'This' keyword.    'this' gives us the ability to refer back to whatever acalled or activates it. in this case, 'this' referes to person
    5: This will be a key of the object we will create. This is NOT refering to the parameter.
    6: this is refering to the parameter that we pass our contructo function
    7 & 8: The 'new' ketword is callign our 'Person' function, crating a new person with the calues we pass in as arguments, and storing that person in a variable. 
*/