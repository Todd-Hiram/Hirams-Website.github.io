//This function shrinks and unshrinks with a push of a button
function openClose() {
    'use strict';
  let content = document.getElementById("content");
  let button = document.getElementById("show-photo");

  button.onclick = function() {
    if (content.className == "open") {
      //shrink the box
      content.className = "";
      button.innerHTML = "Show Photo";
    } else {
      //expand the box
      content.className = "open";
      button.innerHTML = "Show Photo";
    }
  };
}

window.onload = function() {
  openClose();
};


//This function creates a button that changes the color
//of a ball
const container = document.getElementById('container');
container.className = "maroon";
const push = document.createElement('button');

push.innerText = 'Click to Change Color';
push.onclick = function(event) {
  if (container.classList.contains('maroon')) {
      container.classList.remove('maroon');
      container.classList.add('seaGreen');
  }
  else {
    container.classList.remove('seaGreen');
    container.classList.add('maroon');
  }
};

container.appendChild(push);