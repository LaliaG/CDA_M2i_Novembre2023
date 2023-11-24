//const tab = [];// 
let tab = [];


/*for (let i = 0; i < 10; i++) {
    tab = Number(prompt("Veuillez saisir les 10 nombres : "))
}
  /*  tab.push(i);
}
console.table(tab); 
 

function tabavecRandomNumbers(n) {
    const t = [];
    for (let i = 0; i < n; i++) {
        const randomNumber = Math.floor(Math.random() * (n + 1));
        t.push(randomNumber);
    }
    return t;
}*/
for (let j = 0; j < 10; j++) {
    let numb  = 10;
    let string;
    let text = numb.toString();
    let padded = text.padStart(10,"[1, 4, 6, 23, 9, 12, 33, 45, 8, 30]");
    string.padStart(10, "[1, 4, 6, 23, 9, 12, 33, 45, 8, 30]" );
    console.log(string.padStart(10, "[1, 4, 6, 23, 9, 12, 33, 45, 8, 30]" ));
    
}
//string.padStart(length, string)

