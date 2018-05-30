/*------------ Drag and Drop ------------*/
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


/*------------ Drag Finger for Coordinates ------------*/
function myFunction(event) {
  let x = event.touches[0].clientX;
  let y = event.touches[0].clientY;
  document.getElementById("demo1").innerHTML = x + ", " + y;
}


/*------------ Drag Mouse for Coordinates ------------*/
function mouseMove(mouseEvent) {
    let x = mouseEvent.clientX;
    let y = mouseEvent.clientY;
    let coordinates = "Coordinate are: (" + x + ", " + y + ")";
    document.getElementById("demo2").innerHTML = coordinates;
}

function clearCoord() {
    document.getElementById("demo2").innerHTML = "";
}