let button  = document.getElementsByTagName("button")[0];
let messageArea = document.getElementsByName("message")[0];
let infoField = document.getElementById("info");

let enterButton = document.getElementById("enter");
let userInput  = document.getElementById("userinput");
let ul = document.getElementsByTagName("ul")[0];
let inputError = document.getElementById("input-error");

// ==========================================================
function createListElement() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(userInput.value));
    ul.appendChild(li);
    userInput.value = "";
}

function addListAfterClick() {
    if(userInputLength() > 0) {
        createListElement();
    } else {
        setErrorText();
    } 
}

function addListAfterKeyPress(event) {
    let mark = false;
    if (userInputLength() > 0 &&
        event.which === 13) {
        createListElement();
        mark = true;
     } 
    if (!mark &&
        userInputLength() === 0 && 
        event.which === 13) {         
        setErrorText();
    }  
}

function setErrorTextEmpty() {    
    return inputError.innerText = "";
}

function setErrorText() {     
    return inputError.innerText  = "Error: the input field is empty.";
}

function userInputLength() {
    return userInput.value.length;
}

userInput.addEventListener("keypress", setErrorTextEmpty);
enterButton.addEventListener("click",  addListAfterClick);
userInput.addEventListener("keypress", addListAfterKeyPress); 


messageArea.addEventListener("keyup", function(){     
    infoField.innerHTML = `keys: <span style="color: green;">${messageArea.value.length}</span>`; 
});