
function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}


/*function touchAndMove(event) {
    let x = event.touches[0].clientX;
    let y = event.touches[0].clientY;
    event.target.appendChild(document.getElementById(data));
}*/

function myFunction(event) {
  var x = event.touches[0].clientX;
  var y = event.touches[0].clientY;
  document.getElementById("demo").innerHTML = x + ", " + y;
}