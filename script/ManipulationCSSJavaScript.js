function colorChange() {

  // input value for color change
  let color = document.getElementById("colorChange").value;

  // Grab Container for changing COLOR Value
  let example1 = document.getElementById("action1");

  // Change the Background Color
  let colorChoice = example1.style.backgroundColor = color;
}

function visible() {

  // this function reveals the spot
  document.getElementById("action2").style.visibility='visible';
}

function invisible() {

  // this function hides the spot
  document.getElementById("action2").style.visibility='hidden';
}

function widthChange() {

  // Grab WIDTH Input Value
  let width = document.getElementById("widthChange").value;

  // Grab Container for changing WIDTH Value
  let example1 = document.getElementById("action3");

  // Change the Width
  let widthChoice = example1.style.width = width;
}