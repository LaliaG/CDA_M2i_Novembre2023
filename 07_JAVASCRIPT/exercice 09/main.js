// programme pour générer une table de multiplication
// prendre l'entrée de l'utilisateur
const nombre = parseInt(prompt ('Entrez un entier: '));

// créer une table de multiplication
for(let i = 1; i <= 10; i++) {
    // multiplier i par nombre
    const resultat = i * nombre;

    // afficher le résultat
    console.log (`$ {nombre} * $ {i} = $ {resultat}`);
}