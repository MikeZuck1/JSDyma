// Ici, il s'agit du hoisting. Je peux appeler une fonction avant sa déclaration.
showTheResult(); // appel à la fonction. 
function showTheResult() {
    console.log("I show you the result!");
};