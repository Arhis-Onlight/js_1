let liList = document.querySelectorAll("li");
let ul = document.querySelector("ul");
let userInput = document.getElementById("user-input");
let addButton = document.getElementById("add-button");

addButton.addEventListener("click", function(){
    if (userInput.value.length > 0) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(userInput.value)); 
        userInput.value = "";  
        toggleDoneClass(li); 
        appendDelButton(li);
        ul.appendChild(li); 
    }    
});

function appendDelButton(element) {
    let delButton = document.createElement("button");    
    delButton.appendChild(document.createTextNode("del"));
    element.appendChild(document.createTextNode("   "));
    element.appendChild(delButton);
    //Listening to if delButton was clicked
    delButton.addEventListener("click", function(){
        element.parentNode.removeChild(element);
    });
}

function toggleDoneClass(element){
    element.addEventListener("click", function(){
        element.classList.toggle("done");
   }); 
}

function setToggleAndDel() {
    for(let i = 0; i < liList.length; i++) {  
        toggleDoneClass(liList[i]);
        appendDelButton(liList[i]);
    }
}
setToggleAndDel();