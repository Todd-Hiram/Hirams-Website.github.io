//This function creates random numbers when the mouse is over
//the field area.
function numbering() {
    document.getElementById("randomNumb").innerHTML = Math.random();
}

//This function is to remove the numbering() function when button
//is executed
function removeHandler() {
    document.getElementById("fieldArea").removeEventListener("mousemove", numbering);
}

//This is the output function to the L07StdJavaScriptEvents page
document.getElementById("fieldArea").addEventListener("mousemove", numbering);


//The addEventListener() method that activates click effect to 
//recieve the THANK YOU! message.
function clickIt() {
    document.getElementById("clicker").innerHTML = "THANK YOU!";
}

//This is the output function to the L07StdJavaScriptEvents page
document.getElementById("clicker").addEventListener("click", clickIt);