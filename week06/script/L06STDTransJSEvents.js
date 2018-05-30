
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

function touchAndMove(touch) {
  var x = touch.touches[0].clientX;
  var y = touch.touches[0].clientY;
  touch.target.appendChild(document.getElementById(data));
}

function myFunction(event) {
  var x = event.touches[0].clientX;
  var y = event.touches[0].clientY;
  document.getElementById("demo").innerHTML = x + ", " + y;
}

/*--------------------------------- latest -----------------------------*/
/*function myFunction() {
    x.style.WebkitAnimation = "mymove 4s 2"; // Code for Chrome, Safari and Opera
    x.style.animation = "mymove 4s 2";       // Standard syntax
}

// Code for Chrome, Safari and Opera
x.addEventListener("webkitAnimationStart", myStartFunction);
x.addEventListener("webkitAnimationIteration", myRepeatFunction);
x.addEventListener("webkitAnimationEnd", myEndFunction);

// Standard syntax
x.addEventListener("animationstart", myStartFunction);
x.addEventListener("animationiteration", myRepeatFunction);
x.addEventListener("animationend", myEndFunction);

function myStartFunction() {
    this.innerHTML = "animationstart event occured - The animation has started";
    this.style.backgroundColor = "pink";
}

function myRepeatFunction() {
    this.innerHTML = "animationiteration event occured - The animation was played again";
    this.style.backgroundColor = "lightblue";
}

function myEndFunction() {
    this.innerHTML = "animationend event occured - The animation has completed";
    this.style.backgroundColor = "lightgray";
}*/