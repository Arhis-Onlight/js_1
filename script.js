function sss() {
    var animal = ["tiger", "cat", "bear", "bird"];
    console.log(animal[0]);
    
    var array = ["Banana", "Apples", "Oranges", "Blueberries"];
    
    array.shift();
    console.log("First element in array was removed");
    
    array.sort();
    console.log("Array was successfully sorted");
    
    array.push("Kiwi");
    console.log("Added \"Kiwi\" to the array");
    
    array.splice(0, 1);
    console.log("Apples were deleted from the array");
    
    array.reverse();
    console.log("Everything was reversed");
    
    // Showing result of committed changes.
    console.log(array);
    
    var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
    console.log(`Access: ${array2[1][1][0]}`);

    var counter = 20;

do {
    console.log(counter);
    counter++;
} while(counter < 10);


var animal = ["tiger", "cat", "bear", "bird"];
var animalTwo = ["tiger!", "cat!", "bear!", "bird!"];

var todo = function(item, index){
    console.log(`Index is ${index} with content: ${item}`);
};

animal.forEach(todo);
animalTwo.forEach(todo);
    
}

var dataBase = [
    {
        username: "arhis",
        password: "1234",
    },
    {
        username: "victor",
        password: "4321",
    },
    {
        username: "ingrid",
        password: "87654321",
    },
];

var newsfeed = [
    {
        username: "Bob",
        timeline: "I'm so tired from learning",
    },
    {
        username: "Arhis",
        timeline: "Wow! Javascript is so cool",
    },
    {
        username: "Victorite",
        timeline: "Yo! Yo!",
    }

];

// function SignIn(username, password) {
//     var mark = false;  // Variable to get if login and password were correct.
//     dataBase.forEach(function(item){
//         if (item.username === username &&
//            item.password === password) {
//                console.log(newsfeed);
//                mark = true; // Was successed access.
//                return mark;
//            }        
//     });
//     if (!mark) {  // if it was no succeded with login and password
//         console.log("Login or password is incorrect, please try again");
//     }
// }

function isUserValid(username, password){
    var mark = false;
    dataBase.forEach(function(item){
        if (item.username === username &&
            item.password === password) {
            mark = true;
            return mark;
        }        
    });
    return mark;
}

function SignIn(username, password) {
    if (isUserValid(username, password)) {        
        console.log(newsfeed);  
    } else {
        console.log("Login or password is incorrect, please try again");
    }
}

var username = "arhis"; //it's working login
var password = "1234"; //it's working password
// SignIn(username, password);

window.alert("Test:)");


