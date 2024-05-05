function Personne(nom, prenom, age, location) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.location = location;
}

const sonNom = new Personne("Jack");
const sonPrenom = new Personne("John"); 
const leurAge = new Personne(25);
const leurLocation = new Personne("New York");

console.log(`Le prémon de ${sonNom.nom} est ${sonPrenom.prenom}.`);

let firstLetter = 12;
let secondLetter = 23;
let thirdLetter = 5;

console.log(firstLetter ** secondLetter ** thirdLetter); // associativité de droite à gauche. 
// On peut également utiliser le mot-clé "in" pour vérifier si une propriété existe dans un objet :
// console.log('nom' in personne); 

// operateur de coalescence (ou opérateur ternaire) :
let unePersonne = undefined || 0.00; 
console.log(unePersonne ?? "non defined"); 