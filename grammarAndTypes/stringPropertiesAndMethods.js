/* String Properties
    - properties associsatied with datatype
    - strings have only one property and that is the length property

    */

    let myName = 'Nick';
    console.log(myName.length);


// String Methods
//  - mothods are tools that can help us manipulate our data
//  .method() .property 
//  - methodas are fucntions associated with datatypes


console.log(myName.toUpperCase());
// .toUpperCase() will capitalize all letters 

let home = 'My home is Indiana';
console.log(home.includes('Indiana'));
// .inclues() will check if a certain string is included in another sting

let sent = "This sentences will be split into individual pieces"
console.log(sent.split('s' + ' '));