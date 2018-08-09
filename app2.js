'use strict' 

let readline = require('readline-sync');

function getPrime() {
    console.log('Setting the interval... ');
    let numberStart = +readline.question("Enter a start number: ");
    let numberLast  = +readline.question("Enter a last number: ");
    let primeList   = [];

    nextPrime:
    for (let i = numberStart; i <= numberLast; i++) {
        for (let j = numberStart; j < i; j++) {
            if(i % j === 0) continue nextPrime;
        }
        primeList.push(i);
    }
    console.log(`The list of prime number from ${numberStart} to ${numberLast} is:`);
    console.log(primeList.join());
}

getPrime();


