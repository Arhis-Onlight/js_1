'use strict'
let readline = require('readline-sync');


function browsers() {
    let browser = "Chrome";

    if (browser === "Edge") {
        console.log("You've got the Edge!" );    
    }
    else if (browser === "Chrome"    ||
            browser === "Firefox"   || 
            browser === "Safari"    ||
            browser === "Opera")  {
                console.log('Okay we support these browsers too');
    }
    else {
        console.log("We hope that this page looks ok!");
    }
}

function ifToSwitch() {
    let a = +readline.question('a?', ' ');
    switch(a) {
        case 0:
            console.log(0);
            break;
        case 1:
            console.log(1);
            break;

        case 2:
        case 3:
            console.log('2,3');
            break;  
    }
}

function checkAge(age) {
 return age > 18 ? true : "Do you have your parents permission to access this page?";
}

function min() {
    let a = +readline.question("Enter a: ");
    let b = +readline.question("Enter b: ");
    return `The least: ${a > b ? b : a}`;
}

let pow = function() {
    let a = +readline.question("Enter a number: ");
    let n = +readline.question("Enter power n: ");
    let result = a;
    for (let i = 1; i < n; i++) {
        result *= a;
    }
    return `Result: ${result}`;
}

console.log(pow);

