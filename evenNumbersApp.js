'use strict'

class EvenNumber 
{    
    constructor() {
        this.readline = require('readline-sync');  
    }
    getEvenNumber() {               
        let number = +this.readline.question("Enter a number that I work to: ");  
        console.log(`Input was: ${number} `)  
        this.count(number);
    }

    count(number) {
        for (let i=0; i<= number; i++ )  {
            if ( i % 2 !== 0) { continue;}
            console.log(`Number: ${i}`);
        }  
    }
}


const evenNumber = new EvenNumber;
evenNumber.getEvenNumber();