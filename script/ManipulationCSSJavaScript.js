function changeColor() {

  // Grab COLOR Input Value
  let color = document.getElementById("changeColor").value;

  // Grab Container for changing COLOR Value
  let example1 = document.getElementById("example1");

  // Change the Background Color
  let colorChoice = example1.style.backgroundColor = color;
}

function changeOpacity() {

  // Grab OPACITY Input Value
  let opacity = document.getElementById("changeOpacity").value;

  // Grab Container for changing OPACITY Value
  let example1 = document.getElementById("example1");

  // Change the Opacity
  let opacityChoice = example1.style.opacity = opacity;
}

function changeWidth() {

  // Grab WIDTH Input Value
  let width = document.getElementById("changeWidth").value;

  // Grab Container for changing WIDTH Value
  let example1 = document.getElementById("example1");

  // Change the Width
  let widthChoice = example1.style.width = width;
}

function changeBR() {

  // Grab BR Input Value
  let br = document.getElementById("changeBR").value;

  // Grab Container for changing BR Value
  let example1 = document.getElementById("example1");

  // Change the Border Radius
  let brChoice = example1.style.borderRadius = br;
}
