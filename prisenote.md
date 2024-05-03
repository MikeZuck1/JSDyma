    <script 
        src="https://code.jquery.com/jquery-3.7.1.min.js"  
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" 
        crossorigin="anonymous"
    ></script>

CODE JS (INDEX.JS) :  

const name = 'jean'; // print: tring
const age = 18; // print number
const hobbies = null; // print : object
let action; // print undefined 
let sym = Symbol(); // print symbol 
let actif = true; // print boolean

// objet litteral
// print: object
let ville = { name: "Paris", state: "France" };
let city = ville; // copie de la reference vers la meme chose que ville
city.name = "Frankfurt"; // 1. modifie ville et city => 2. modifie de la reference vers une nouvelle choses, mais pas Ville
console.log(city.name); 

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

const myFirstExponention = 3 ** (3 + 1);
console.log(myFirstExponention);

const shift = 3 << 1; 
console.log(shift);  // 6 

const fruits = {
    first_fruit: "Orange",
    second_fruit: "Banana",
    third_fruit: "Apple",
    fourth_fruit: "Ananas"
};

const myFruits = function({ first_fruit, second_fruit, third_fruit }) {
    console.log(fruits);
};
// myFruits(fruits); // appel à la fonction 
// console.log(fruits);

const theObj = {
    name: "Paul",
    age: 28,
    country: "British",
    profession: "Developer", 
    isMarried: false,
    hobbies: ["Swimm", "Hockey", "Read", "Education"],
}

console.log(theObj.hobbies);

const x = theObj.age;
console.log(x); 

// const commit = function({}) {}
// commit(); // call the function 

// const a = Number(23) + Number(3); 
// console.log(a); 

const isToday = function() {
    const myDate = new Date();
    
    if(!myDate) {
        console.error("Invalid date"); 
    }
    console.log(myDate);
}
isToday(); // call the function 

let a = 10;
let b = a;
b = 20;
console.log(a);

let car1 = { color: "blue", price: 8500 }; 
let car2 = car1; 
car2.price = 7500; 
console.log(car1.price);  