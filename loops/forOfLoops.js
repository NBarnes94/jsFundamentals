/* ************
! For Of Loops
    -Iterate over the values or an itrerable object(strings and arrays included) 
    -Iterable means to be able to parse through with numbers
************ */

// This does not work because the properties are not 'iterable'
let student = { 
    name: 'Jake from State Farm',
    awesome: true,
    degree: 'insurance sales',
    age: 98
};

// for(item of student){
//     console.log(item);
// }

let soupArray= ['potato','broccoli', 'carrot', 'chicken noodle', 'chili'];

for(soup of soupArray){
    console.log(soup);
}
// for of loops can use arrays[] but not {}