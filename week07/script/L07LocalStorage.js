//This function 
let brushColor = "";

function updateBrush() {
    let selectedColor = document.querySelector('input[name="color"]:checked').value;
    return selectedColor;
}

//
function colorChange(id) {
    brushColor = id;
    let children = document.querySelector('.colorPicker').children;
    for (let i = 0; i < children.length; i++){
      document.getElementById(children[i].id).style.border = "2px solid transparent";
      if (children[i].id=="white") {
        document.getElementById(children[i].id).style.border = "2px solid black"
      }
    }
    document.getElementById(id).style.border = "2px solid red";
    if (id=="red"){
      document.getElementById(id).style.border = "2px solid black";
    }
  }

//
function sphere(id) {
  document.getElementById(id).style.background = brushColor;
}

function save() {
  let currentGrid = document.querySelectorAll(".cell");
  let quoter = document.getElementById("firstname").value;
  let coords = "";

  for (let i = 0; i < currentGrid.length; i++) {
    coords += currentGrid[i].id + "," + document.getElementById(currentGrid[i].id).style.backgroundColor + ",";
  }

  localStorage.setItem(quoter,coords);
  loadLocalStorage();
  document.getElementById("firstname").value += "_new";
}

//This is the function 
function loadLocalStorage() {
  document.getElementById("quoteList").innerHTML = ""; // clears the tag
  for (let i = 0; i < localStorage.length; i++) {
    document.getElementById("quoteList").innerHTML += "<li id=\""+i+"\">"+localStorage.key(i)+" "
      +deleteButton(i)
      +"</li>";
  }
}

//This function is for the delete button
function deleteButton(i) {
  return "<input type=\"button\" value=\"Delete\" onclick=\"deleter("+i+")\">";
}

//THis function is to delete the qoute when the button is pushed
//by the user
function deleter(i) {
  localStorage.removeItem(localStorage.key(i));
  loadLocalStorage();
}

//This function resets the grid of spherical colors
function resetGrid() {
  let currentGrid = document.querySelectorAll(".cell");
  for (let i = 0; i < currentGrid.length; i++){
    document.getElementById(currentGrid[i].id).style.backgroundColor = "";
  }
}