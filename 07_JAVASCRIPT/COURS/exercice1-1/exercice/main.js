console.log("Exercice 03")


let rayon, hauteur, volume;

 //rayon = Number(prompt("Veuillez saisir un rayon"));
//hauteur = Number(prompt("Veuillez saisir une hauteur"));

//r = 2 h= 3 donc volume ~= 120567

//volume = 1/3(Math.PI (rayon**2 *hauteur));

// consoleLigne 14 tu as un peu tout mélangé, console.log() est une méthode et ne peut pas être affecté avec le = ensuite
//Tu devrais avoir quelque chose du style console.log("un message");
//console.log(message)= ("Le volume d' un cône de rayon " + rayon + " et de hauteur "+ hauteur +  " =" + volume);
alert(((Math.PI *((Number(prompt("Veuillez saisir un rayon"))**2)*(Number(prompt("Veuillez saisir une hauteur")))))/3).toFixed(2));


