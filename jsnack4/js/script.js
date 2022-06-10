// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

// Short array
const shortArray = [2, 34, 89];

// Long array
const longArray = [36, 3, 87, 90, 1];

// WHILE VERSION
while(shortArray.length < longArray.length) {
    // Aggiungo elementi random a shortArray
    shortArray.push( Math.floor(Math.random() * 100) + 1 );
}

// Stampo shortArray con elementi uguali a longArray
console.log(shortArray);

// FOR VERSION
// for(let i = shortArray.length; i < longArray.length; i++) {
//     shortArray.push( Math.floor(Math.random() * 100) + 1 );
// }

// console.log(shortArray);




