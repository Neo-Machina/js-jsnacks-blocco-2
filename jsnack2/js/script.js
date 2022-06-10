// Calcola la somma e la media dei primi 10 numeri.

// Creazione variabile somma dei numeri con valore iniziale 0
let sumNumbers = 0;
for(let i = 1; i <=10; i++) {
    let singleNumber = i;
    
    // Somma dei numeri
    sumNumbers += singleNumber;
}

// Media dei numeri
averageNumbers = sumNumbers / 10;

// Stampo somma e media
console.log(sumNumbers);
console.log(averageNumbers);