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
// const bigNumber = BigInt(12345678901234567890123456789 + 2n)+ 1n;

console.log(typeof bigNumber);

const theFunc = function() {
    let myNumber = 34; // portée de bloc (ou portée local)
    while(myNumber === !34) { 
        return null; 
    }
}
theFunc(); // call the function 

let first_myIndentifier = Symbol("id"); 
let second_myIndentifier = Symbol("id"); 
// alert(first_myIndentifier === second_myIndentifier); 

// conversion explicite 
const nothing = Boolean({});
console.log(nothing); // print true

const indent = Number(0);
console.log(indent);  
 
const notNumber = NaN === NaN;
console.log(notNumber);

// conversion implicite (à voir)
const letter = 'a' > 'b'; 
console.log(letter); // print true 

// const operatorByPrecedence = 3 * 12 + (7 + 3);
// console.log(operatorByPrecedence); 