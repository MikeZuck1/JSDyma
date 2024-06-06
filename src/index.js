console.warn("Attention ! Ce message s'adresse à vous.");
console.info("Juste petite info!"); 
console.error("Il y a une petite erreur qui s'est produit");

const aide = function() {
    let isFood = " ";

    switch(isFood) {
        case 'vitelotte noire':
            console.log('€0.59 le kilo.');
            break;
        case 'kennnebec':
            console.log('€0.96 le kilo.');
            break;
        case 'Yukon':
            console.log('€0.88 le kilo.');
            break;
        case ' ':
            console.warn('you\'re input is empty or we don\'t have what do you want.');
        default:
            console.error('Error!'); 
    }
}
aide(); // result you're input is empty or we don't have what do you want.