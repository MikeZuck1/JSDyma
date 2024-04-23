const name = 'jean'; // print: tring
const age = 18; // print number
const hobbies = null; // print : object
let action; // print undefined 
let sym = Symbol(); // print symbol
let actif = true; // print boolean

// objet litteral
// print: object
const ville = {
    name: "Paris",
    state: "France"
}; 

// print: function
const myFunc = function () { 
    console.log('hi!');
} 

// print: object
const today = new Date();
const arr = [1, 2, 3];
const bigNumber = BigInt(12345678901234567890123456789 + 2n)+ 1n;

console.log(typeof bigNumber);

const theFunc = function() {
    let myNumber = 34;
    while(myNumber === !34) {
        return null;
    }
}
theFunc(); // call the function 