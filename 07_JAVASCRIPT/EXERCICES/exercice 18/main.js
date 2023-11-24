function isPalindome(str) {
    // longeur du mot
    const len = str.length;  
  
    // parcourir les lettres du mot 
    for (let i = 0; i < len / 2; i++) {  
  
        // vérifier que le premier et le dernier caractères sont identiques 
        if (str[i] !== str[len - 1 - i]) {  
            alert( 'Non palindrome.');  
        }  
    }  
    alert( 'Palindrome');  
}  
    // banane 0 1 2 3 4 5 .length = 6 je prend une boucle for ( i = 0 i < length/2 i++)//
    // dans la boucle length - i si on commence par i = 1 sinon i = 0 ca sera length - 1 - i//
    //donc b = 0 et e = 5 et a= 1 et n = 4 
        
    
