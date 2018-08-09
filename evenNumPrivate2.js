function EvenNumber() {
    let readline = require('readline-sync');

    this.getEvenNumber = function() {
        let number = +readline.question("Enter a number that I work to: ");  
        console.log(`Input was: ${number} `)  
        _count(number);
    };

    function _count (number) {
        for (let i=0; i<= number; i++ )  {
            if ( i % 2 !== 0) { continue;}
            console.log(`Number: ${i}`);            
        }  
    }

    this.test = function() {
        console.log("it's a public test one:)");
    };
}

let evenNum = new EvenNumber;
evenNum.getEvenNumber();
evenNum.test();


