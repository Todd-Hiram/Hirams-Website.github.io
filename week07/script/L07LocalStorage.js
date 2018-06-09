//This function 
let brushColor = "";

function updateBrush() {
    let selectedColor = document.querySelector('input[name="color"]:checked').value;
    return selectedColor;
}

//
function changeBrush(id) {
    brushColor = id;
    let children = document.querySelector('.colorPicker').children;
    for (let i = 0; i < children.length; i++){
      document.getElementById(children[i].id).style.border = "2px solid transparent";
      if (children[i].id=="white"){
        document.getElementById(children[i].id).style.border = "2px solid black"
      }
    }
    document.getElementById(id).style.border = "2px solid red";
    if (id=="red"){
      document.getElementById(id).style.border = "2px solid black";
    }
  }

//
function paint(id) {
  document.getElementById(id).style.background = brushColor;
}

function save() {
  let currentGrid = document.querySelectorAll(".cell");
  let logoName = document.getElementById("firstname").value;
  let coords = "";

  for (let i = 0; i < currentGrid.length; i++){
    coords += currentGrid[i].id + "," + document.getElementById(currentGrid[i].id).style.backgroundColor + ",";
  }

  localStorage.setItem(logoName,coords);
  loadLocalStorage();
  document.getElementById("firstname").value += "_new";
}

function loadLocalStorage(){
  document.getElementById("logolist").innerHTML = ""; // clears the tag
  for (let i = 0; i < localStorage.length; i++){
    document.getElementById("logolist").innerHTML += "<li id=\""+i+"\">"+localStorage.key(i)+" "
      +restoreButton(i)
      +deleteButton(i)
      +"</li>";
  }
}

function restoreButton(i){
  return "<input type=\"button\" value=\"Restore\" onclick=\"restore("+i+")\">";
}

function deleteButton(i){
  return "<input type=\"button\" value=\"Delete\" onclick=\"del("+i+")\">";
}

function restore(i){
  let coords = localStorage.getItem(localStorage.key(i)).split(",");

  for (let i = 0; i < coords.length; i+=2){
    document.getElementById(coords[i]).style.background = coords[i+1];
  }

}

function del(i){
  localStorage.removeItem(localStorage.key(i));
  loadLocalStorage();
}

function resetGrid(){
  let currentGrid = document.querySelectorAll(".cell");
  for (let i = 0; i < currentGrid.length; i++){
    document.getElementById(currentGrid[i].id).style.backgroundColor = "";
  }
}