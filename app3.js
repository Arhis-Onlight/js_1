let readline = require('readline-sync');
let num = +readline.question("Enter the Number: ");
console.log(`you typed: ${num}`);

switch(num || isNaN(num)) {
    case 1 :
        console.log("It's first number");
        break;
    case 2 : 
        console.log("It's second number"); 
        break;
    case 3 : 
        console.log("It's third number");  
        break; 
    case 0 :
        console.log("You typed not a proper number, try again"); 
        break; 
    case true:
        console.log("Nan nan:)");  
        break;   
    default:
        console.log("The number is not in the list, try again.");
}