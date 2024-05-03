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