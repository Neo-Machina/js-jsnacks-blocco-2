// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

// Shorter array
const shorterArray = [2, 34, 89];

// Longer array
const longerArray = [36, 3, 87, 90, 1];


while(shorterArray.length < longerArray.length) {
    // Aggiungo elementi random a shorterArray
    shorterArray.push( Math.floor(Math.random() * 100) + 1 );
}

// Stampo shorterArray con elementi uguali a longerArray
console.log(shorterArray);


