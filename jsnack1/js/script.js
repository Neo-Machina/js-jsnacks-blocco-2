// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando
// la somma degli elementi è minore di 50.

// Array vuoto
const numberArray = [];

let sumNumbers = 0;
// Finchè la somma degli elementi è minore di 50 continuo a chiedere i numeri
while(sumNumbers < 50) {
    // Chiedo il numero all'utente
    const userNumber = parseInt( prompt('Dimmi un numero') );

    // Aggiungo numero in sum
    sumNumbers += userNumber;

    // Inserisco il numero nell'array
    numberArray.push(userNumber);
}

// Stampo l'array
console.log(numberArray);
