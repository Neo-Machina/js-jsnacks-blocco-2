// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

// FOR VERSION
// Crea la variabile sumNumbers con valore iniziale uguale a 0
let sumNumbers = 0;
for(let i = 0; i < 5; i++) {
    // Il software chiede all’utente di inserire un numero
    const userNumber = parseInt( prompt ('Dimmi un numero') );
    
    // Somma di tutti i numeri
    sumNumbers += userNumber;
}

// Stampo la somma 
console.log(sumNumbers);

// WHILE VERSION
// let i = 0;
// while (i < 5) {
//     const userNumber = parseInt( prompt ('Dimmi un numero') );

//     sumNumbers += userNumber;
    
//     i++;
// }

// console.log(sumNumbers);