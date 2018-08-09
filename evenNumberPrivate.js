let EvenNumber =  (function(){
    let readline = require('readline-sync');

    let getEvenNumber = function() {
        let number = +readline.question("Enter a number that I work to: ");  
        console.log(`Input was: ${number} `)  
        _count(number);
    };

    let _count = function(number) {
        for (let i=0; i<= number; i++ )  {
            if ( i % 2 !== 0) { continue;}
            console.log(`Number: ${i}`);            
        }  
    };

    let test = function() {
        console.log("it's a public test one:)");
    };

    return {
        getEvenNumber: getEvenNumber,
        test: test,
    };
})();

EvenNumber.getEvenNumber(); // Working good!
EvenNumber.test();          // Also working good!
