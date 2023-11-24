console.log("Exercice 05");
let temp = Number(prompt("Veuillez saisir une température : "))
if (temp < 0) {
    console.log("l'eau est à l'état solide")
}
else if (0 <= temp < 100) {
    console.log(" l'eau est à l'état liquide")
} 
else if (temp > 100) {
    console.log("L'eau est à létat gazeux")
}
else {
    console.log("Indefined")
}

 temp < 0  ? "solide" || temp > 0 && temp > 100 ? "liquide" || temp > 100 ? "gazeux" : Indefined;

