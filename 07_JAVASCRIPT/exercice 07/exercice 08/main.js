let i, j;

for(let i = 1; i < 3 ; i++){
    console.log(i);
     
     i = Number(prompt("Saisir un chapitre entre 1 et 3:"));

     for(let j = 1; j < 3 ; j++){
        
         
         j = Number(prompt("Saisir une partie j du chapitre i entre 1 et 3 :"));
         console.log(j);
         console.log(i*j)
         console.log(Number(prompt("Saisir un chapitre entre 1 et 3:"))*Number(prompt("Saisir une partie j du chapitre i entre 1 et 3 :")));
     }    
 }