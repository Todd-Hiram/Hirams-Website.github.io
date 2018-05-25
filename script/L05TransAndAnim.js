function setUpEvents() {
  var content = document.getElementById("content");
  var button = document.getElementById("show-photo");

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
  setUpEvents();
};


const container = document.getElementById('container');
container.className = "maroon";
const btn = document.createElement('button');

btn.innerText = 'Click to Change Color';
btn.onclick = function(event) {
  if (container.classList.contains('maroon')) {
      container.classList.remove('maroon');
      container.classList.add('seaGreen');
  }
  else {
    container.classList.remove('seaGreen');
    container.classList.add('maroon');
  }
};

container.appendChild(btn);

